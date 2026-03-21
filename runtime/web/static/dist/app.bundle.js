var K5=Object.defineProperty;var W5=(_)=>_;function q5(_,$){this[_]=W5.bind(null,$)}var X5=(_,$)=>{for(var j in $)K5(_,j,{get:$[j],enumerable:!0,configurable:!0,set:q5.bind($,j)})};var B1,_0,h3,V5,d$,M3,i3,l3,n3,t1,o1,s1,L5,V1={},L1=[],Q5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,U1=Array.isArray;function R$(_,$){for(var j in $)_[j]=$[j];return _}function e1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function d3(_,$,j){var Z,N,G,Y={};for(G in $)G=="key"?Z=$[G]:G=="ref"?N=$[G]:Y[G]=$[G];if(arguments.length>2&&(Y.children=arguments.length>3?B1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(G in _.defaultProps)Y[G]===void 0&&(Y[G]=_.defaultProps[G]);return W1(_,Y,Z,N,null)}function W1(_,$,j,Z,N){var G={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++h3:N,__i:-1,__u:0};return N==null&&_0.vnode!=null&&_0.vnode(G),G}function O1(_){return _.children}function q1(_,$){this.props=_,this.context=$}function E2(_,$){if($==null)return _.__?E2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?E2(_):null}function B5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],G=R$({},$);G.__v=$.__v+1,_0.vnode&&_0.vnode(G),_4(_.__P,G,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?E2($):j,!!(32&$.__u),N),G.__v=$.__v,G.__.__k[G.__i]=G,a3(Z,G,N),$.__e=$.__=null,G.__e!=j&&o3(G)}}function o3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),o3(_)}function b3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!Q1.__r++||M3!=_0.debounceRendering)&&((M3=_0.debounceRendering)||i3)(Q1)}function Q1(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(l3),_=d$.shift(),$=d$.length,B5(_)}finally{d$.length=Q1.__r=0}}function s3(_,$,j,Z,N,G,Y,q,L,X,Q){var V,H,P,f,m,g,k,M=Z&&Z.__k||L1,c=$.length;for(L=U5(j,$,M,L,c),V=0;V<c;V++)(P=j.__k[V])!=null&&(H=P.__i!=-1&&M[P.__i]||V1,P.__i=V,g=_4(_,P,H,N,G,Y,q,L,X,Q),f=P.__e,P.ref&&H.ref!=P.ref&&(H.ref&&$4(H.ref,null,P),Q.push(P.ref,P.__c||f,P)),m==null&&f!=null&&(m=f),(k=!!(4&P.__u))||H.__k===P.__k?L=r3(P,L,_,k):typeof P.type=="function"&&g!==void 0?L=g:f&&(L=f.nextSibling),P.__u&=-7);return j.__e=m,L}function U5(_,$,j,Z,N){var G,Y,q,L,X,Q=j.length,V=Q,H=0;for(_.__k=Array(N),G=0;G<N;G++)(Y=$[G])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[G]=W1(null,Y,null,null,null):U1(Y)?Y=_.__k[G]=W1(O1,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[G]=W1(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[G]=Y,L=G+H,Y.__=_,Y.__b=_.__b+1,q=null,(X=Y.__i=O5(Y,j,L,V))!=-1&&(V--,(q=j[X])&&(q.__u|=2)),q==null||q.__v==null?(X==-1&&(N>Q?H--:N<Q&&H++),typeof Y.type!="function"&&(Y.__u|=4)):X!=L&&(X==L-1?H--:X==L+1?H++:(X>L?H--:H++,Y.__u|=4))):_.__k[G]=null;if(V)for(G=0;G<Q;G++)(q=j[G])!=null&&(2&q.__u)==0&&(q.__e==Z&&(Z=E2(q)),e3(q,q));return Z}function r3(_,$,j,Z){var N,G;if(typeof _.type=="function"){for(N=_.__k,G=0;N&&G<N.length;G++)N[G]&&(N[G].__=_,$=r3(N[G],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=E2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function O5(_,$,j,Z){var N,G,Y,q=_.key,L=_.type,X=$[j],Q=X!=null&&(2&X.__u)==0;if(X===null&&q==null||Q&&q==X.key&&L==X.type)return j;if(Z>(Q?1:0)){for(N=j-1,G=j+1;N>=0||G<$.length;)if((X=$[Y=N>=0?N--:G++])!=null&&(2&X.__u)==0&&q==X.key&&L==X.type)return Y}return-1}function C3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||Q5.test($)?j:j+"px"}function K1(_,$,j,Z,N){var G,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||C3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||C3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")G=$!=($=$.replace(n3,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+G]=j,j?Z?j.u=Z.u:(j.u=t1,_.addEventListener($,G?s1:o1,G)):_.removeEventListener($,G?s1:o1,G);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function T3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=t1++;else if($.t<j.u)return;return j(_0.event?_0.event($):$)}}}function _4(_,$,j,Z,N,G,Y,q,L,X){var Q,V,H,P,f,m,g,k,M,c,y,S,n,e,o,j_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),G=[q=$.__e=j.__e]),(Q=_0.__b)&&Q($);_:if(typeof j_=="function")try{if(k=$.props,M=j_.prototype&&j_.prototype.render,c=(Q=j_.contextType)&&Z[Q.__c],y=Q?c?c.props.value:Q.__:Z,j.__c?g=(V=$.__c=j.__c).__=V.__E:(M?$.__c=V=new j_(k,y):($.__c=V=new q1(k,y),V.constructor=j_,V.render=H5),c&&c.sub(V),V.state||(V.state={}),V.__n=Z,H=V.__d=!0,V.__h=[],V._sb=[]),M&&V.__s==null&&(V.__s=V.state),M&&j_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=R$({},V.__s)),R$(V.__s,j_.getDerivedStateFromProps(k,V.__s))),P=V.props,f=V.state,V.__v=$,H)M&&j_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),M&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(M&&j_.getDerivedStateFromProps==null&&k!==P&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(k,y),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(k,V.__s,y)===!1){$.__v!=j.__v&&(V.props=k,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),L1.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(k,V.__s,y),M&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(P,f,m)})}if(V.context=y,V.props=k,V.__P=_,V.__e=!1,S=_0.__r,n=0,M)V.state=V.__s,V.__d=!1,S&&S($),Q=V.render(V.props,V.state,V.context),L1.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,S&&S($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++n<25);V.state=V.__s,V.getChildContext!=null&&(Z=R$(R$({},Z),V.getChildContext())),M&&!H&&V.getSnapshotBeforeUpdate!=null&&(m=V.getSnapshotBeforeUpdate(P,f)),e=Q!=null&&Q.type===O1&&Q.key==null?t3(Q.props.children):Q,q=s3(_,U1(e)?e:[e],$,j,Z,N,G,Y,q,L,X),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),g&&(V.__E=V.__=null)}catch(i){if($.__v=null,L||G!=null)if(i.then){for($.__u|=L?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;G[G.indexOf(q)]=null,$.__e=q}else{for(o=G.length;o--;)e1(G[o]);r1($)}else $.__e=j.__e,$.__k=j.__k,i.then||r1($);_0.__e(i,$,j)}else G==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=F5(j.__e,$,j,Z,N,G,Y,L,X);return(Q=_0.diffed)&&Q($),128&$.__u?void 0:q}function r1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(r1))}function a3(_,$,j){for(var Z=0;Z<j.length;Z++)$4(j[Z],j[++Z],j[++Z]);_0.__c&&_0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(G){G.call(N)})}catch(G){_0.__e(G,N.__v)}})}function t3(_){return typeof _!="object"||_==null||_.__b>0?_:U1(_)?_.map(t3):R$({},_)}function F5(_,$,j,Z,N,G,Y,q,L){var X,Q,V,H,P,f,m,g=j.props||V1,k=$.props,M=$.type;if(M=="svg"?N="http://www.w3.org/2000/svg":M=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),G!=null){for(X=0;X<G.length;X++)if((P=G[X])&&"setAttribute"in P==!!M&&(M?P.localName==M:P.nodeType==3)){_=P,G[X]=null;break}}if(_==null){if(M==null)return document.createTextNode(k);_=document.createElementNS(N,M,k.is&&k),q&&(_0.__m&&_0.__m($,G),q=!1),G=null}if(M==null)g===k||q&&_.data==k||(_.data=k);else{if(G=G&&B1.call(_.childNodes),!q&&G!=null)for(g={},X=0;X<_.attributes.length;X++)g[(P=_.attributes[X]).name]=P.value;for(X in g)P=g[X],X=="dangerouslySetInnerHTML"?V=P:X=="children"||(X in k)||X=="value"&&("defaultValue"in k)||X=="checked"&&("defaultChecked"in k)||K1(_,X,null,P,N);for(X in k)P=k[X],X=="children"?H=P:X=="dangerouslySetInnerHTML"?Q=P:X=="value"?f=P:X=="checked"?m=P:q&&typeof P!="function"||g[X]===P||K1(_,X,P,g[X],N);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),s3($.type=="template"?_.content:_,U1(H)?H:[H],$,j,Z,M=="foreignObject"?"http://www.w3.org/1999/xhtml":N,G,Y,G?G[0]:j.__k&&E2(j,0),q,L),G!=null)for(X=G.length;X--;)e1(G[X]);q||(X="value",M=="progress"&&f==null?_.removeAttribute("value"):f!=null&&(f!==_[X]||M=="progress"&&!f||M=="option"&&f!=g[X])&&K1(_,X,f,g[X],N),X="checked",m!=null&&m!=_[X]&&K1(_,X,m,g[X],N))}return _}function $4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){_0.__e(N,j)}}function e3(_,$,j){var Z,N;if(_0.unmount&&_0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||$4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(G){_0.__e(G,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&e3(Z[N],$,j||typeof _.type!="function");j||e1(_.__e),_.__c=_.__=_.__e=void 0}function H5(_,$,j){return this.constructor(_,j)}function _8(_,$,j){var Z,N,G,Y;$==document&&($=document.documentElement),_0.__&&_0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,G=[],Y=[],_4($,_=(!Z&&j||$).__k=d3(O1,null,[_]),N||V1,V1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?B1.call($.childNodes):null,G,!Z&&j?j:N?N.__e:$.firstChild,Z,Y),a3(G,_,Y)}B1=L1.slice,_0={__e:function(_,$,j,Z){for(var N,G,Y;$=$.__;)if((N=$.__c)&&!N.__)try{if((G=N.constructor)&&G.getDerivedStateFromError!=null&&(N.setState(G.getDerivedStateFromError(_)),Y=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),Y=N.__d),Y)return N.__E=N}catch(q){_=q}throw _}},h3=0,V5=function(_){return _!=null&&_.constructor===void 0},q1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R$({},this.state),typeof _=="function"&&(_=_(R$({},j),this.props)),_&&R$(j,_),_!=null&&this.__v&&($&&this._sb.push($),b3(this))},q1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),b3(this))},q1.prototype.render=O1,d$=[],i3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l3=function(_,$){return _.__v.__b-$.__v.__b},Q1.__r=0,n3=/(PointerCapture)$|Capture$/i,t1=0,o1=T3(!1),s1=T3(!0),L5=0;var h2,U0,d1,f3,i2=0,$8=[],B0=_0,S3=B0.__b,R3=B0.__r,v3=B0.diffed,u3=B0.__c,m3=B0.unmount,g3=B0.__;function j4(_,$){B0.__h&&B0.__h(U0,_,i2||$),i2=0;var j=U0.__H||(U0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function v(_){return i2=1,D5(Z8,_)}function D5(_,$,j){var Z=j4(h2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):Z8(void 0,$),function(q){var L=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(L,q);L!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=U0,!U0.__f)){var N=function(q,L,X){if(!Z.__c.__H)return!0;var Q=Z.__c.__H.__.filter(function(H){return H.__c});if(Q.every(function(H){return!H.__N}))return!G||G.call(this,q,L,X);var V=Z.__c.props!==q;return Q.some(function(H){if(H.__N){var P=H.__[0];H.__=H.__N,H.__N=void 0,P!==H.__[0]&&(V=!0)}}),G&&G.call(this,q,L,X)||V};U0.__f=!0;var{shouldComponentUpdate:G,componentWillUpdate:Y}=U0;U0.componentWillUpdate=function(q,L,X){if(this.__e){var Q=G;G=void 0,N(q,L,X),G=Q}Y&&Y.call(this,q,L,X)},U0.shouldComponentUpdate=N}return Z.__N||Z.__}function R(_,$){var j=j4(h2++,3);!B0.__s&&j8(j.__H,$)&&(j.__=_,j.u=$,U0.__H.__h.push(j))}function A(_){return i2=5,R_(function(){return{current:_}},[])}function R_(_,$){var j=j4(h2++,7);return j8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function I(_,$){return i2=8,R_(function(){return _},$)}function J5(){for(var _;_=$8.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(X1),$.__h.some(a1),$.__h=[]}catch(j){$.__h=[],B0.__e(j,_.__v)}}}B0.__b=function(_){U0=null,S3&&S3(_)},B0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),g3&&g3(_,$)},B0.__r=function(_){R3&&R3(_),h2=0;var $=(U0=_.__c).__H;$&&(d1===U0?($.__h=[],U0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(X1),$.__h.some(a1),$.__h=[],h2=0)),d1=U0},B0.diffed=function(_){v3&&v3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&($8.push($)!==1&&f3===B0.requestAnimationFrame||((f3=B0.requestAnimationFrame)||y5)(J5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),d1=U0=null},B0.__c=function(_,$){$.some(function(j){try{j.__h.some(X1),j.__h=j.__h.filter(function(Z){return!Z.__||a1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],B0.__e(Z,j.__v)}}),u3&&u3(_,$)},B0.unmount=function(_){m3&&m3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{X1(Z)}catch(N){$=N}}),j.__H=void 0,$&&B0.__e($,j.__v))};var p3=typeof requestAnimationFrame=="function";function y5(_){var $,j=function(){clearTimeout(Z),p3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);p3&&($=requestAnimationFrame(j))}function X1(_){var $=U0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),U0=$}function a1(_){var $=U0;_.__c=_.__(),U0=$}function j8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function Z8(_,$){return typeof $=="function"?$(_):$}var N8=function(_,$,j,Z){var N;$[0]=0;for(var G=1;G<$.length;G++){var Y=$[G++],q=$[G]?($[0]|=Y?1:2,j[$[G++]]):$[++G];Y===3?Z[0]=q:Y===4?Z[1]=Object.assign(Z[1]||{},q):Y===5?(Z[1]=Z[1]||{})[$[++G]]=q:Y===6?Z[1][$[++G]]+=q+"":Y?(N=_.apply(q,N8(_,q,j,["",null])),Z.push(N),q[0]?$[0]|=2:($[G-2]=0,$[G]=N)):Z.push(q)}return Z},c3=new Map;function E5(_){var $=c3.get(this);return $||($=new Map,c3.set(this,$)),($=N8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,G=1,Y="",q="",L=[0],X=function(H){G===1&&(H||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,Y):G===3&&(H||Y)?(L.push(3,H,Y),G=2):G===2&&Y==="..."&&H?L.push(4,H,0):G===2&&Y&&!H?L.push(5,0,!0,Y):G>=5&&((Y||!H&&G===5)&&(L.push(G,0,Y,N),G=6),H&&(L.push(G,H,0,N),G=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(G===1&&X(),X(Q));for(var V=0;V<j[Q].length;V++)Z=j[Q][V],G===1?Z==="<"?(X(),L=[L],G=3):Y+=Z:G===4?Y==="--"&&Z===">"?(G=1,Y=""):Y=Z+Y[0]:q?Z===q?q="":Y+=Z:Z==='"'||Z==="'"?q=Z:Z===">"?(X(),G=1):G&&(Z==="="?(G=5,N=Y,Y=""):Z==="/"&&(G<5||j[Q][V+1]===">")?(X(),G===3&&(L=L[0]),G=L,(L=L[0]).push(2,0,G),G=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),G=2):Y+=Z),G===3&&Y==="!--"&&(G=4,L=L[0])}return X(),L}(_)),$),arguments,[])).length>1?$:$[0]}var B=E5.bind(d3);var t0={};X5(t0,{uploadWorkspaceFile:()=>H1,uploadMedia:()=>q4,updateWorkspaceFile:()=>m5,submitAdaptiveCardAction:()=>X4,streamSidePrompt:()=>R5,steerAgentQueueItem:()=>S5,setWorkspaceVisibility:()=>s2,setAgentThoughtVisibility:()=>Q4,sendPeerAgentMessage:()=>b5,sendAgentMessage:()=>K2,searchPosts:()=>N4,restoreChatBranch:()=>M5,respondToAgentRequest:()=>F1,renameWorkspaceFile:()=>D4,renameChatBranch:()=>x5,removeAgentQueueItem:()=>f5,pruneChatBranch:()=>I5,moveWorkspaceEntry:()=>J4,getWorkspaceTree:()=>o2,getWorkspaceRawUrl:()=>D1,getWorkspaceFile:()=>O4,getWorkspaceDownloadUrl:()=>J1,getWorkspaceBranch:()=>u5,getTimeline:()=>l2,getThumbnailUrl:()=>B4,getThread:()=>G4,getPostsByHashtag:()=>Z4,getMediaUrl:()=>V$,getMediaText:()=>U4,getMediaInfo:()=>k2,getMediaBlob:()=>v5,getChatBranches:()=>P5,getAgents:()=>K4,getAgentThought:()=>L4,getAgentStatus:()=>W4,getAgentQueueState:()=>T5,getAgentModels:()=>d2,getAgentContext:()=>C5,getActiveChatAgents:()=>z4,forkChatBranch:()=>n2,deleteWorkspaceFile:()=>y4,deletePost:()=>Y4,createWorkspaceFile:()=>H4,createReply:()=>w5,createPost:()=>A5,attachWorkspaceFile:()=>F4,addToWhitelist:()=>V4,SSEClient:()=>y1});async function v_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function G8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let G of $)if(G.startsWith("event:"))j=G.slice(6).trim()||"message";else if(G.startsWith("data:"))Z.push(G.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function k5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;N+=Z.decode(Y,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let X of L){let Q=G8(X);if(Q)$(Q.event,Q.data)}}N+=Z.decode();let G=G8(N);if(G)$(G.event,G.data)}async function l2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return v_(Z)}async function Z4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function N4(_,$=50,j=0,Z=null,N="current",G=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",q=N?`&scope=${encodeURIComponent(N)}`:"",L=G?`&root_chat_jid=${encodeURIComponent(G)}`:"";return v_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Y}${q}${L}`)}async function G4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return v_(`/thread/${_}${j}`)}async function A5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return v_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function w5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function Y4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return v_(N,{method:"DELETE"})}async function K2(_,$,j=null,Z=[],N=null,G=null){let Y=G?`?chat_jid=${encodeURIComponent(G)}`:"";return v_(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function z4(){return v_("/agent/active-chats")}async function P5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return v_(`/agent/branches${Z}`)}async function n2(_,$={}){return v_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function x5(_,$={}){return v_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function I5(_){return v_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function M5(_,$={}){return v_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function b5(_,$,j,Z="auto",N={}){let G={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return v_("/agent/peer-message",{method:"POST",body:JSON.stringify(G)})}async function K4(){return v_("/agent/roster")}async function W4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/status${$}`)}async function C5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/context${$}`)}async function T5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/queue-state${$}`)}async function f5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function S5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function d2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/models${$}`)}async function q4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function X4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function R5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let G=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(G.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await k5(j,(G,Y)=>{if($.onEvent?.(G,Y),G==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(G==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(G==="side_prompt_done")Z=Y;else if(G==="side_prompt_error")N=Y}),N){let G=Error(N?.error||"Side prompt failed");throw G.payload=N,G}return Z}async function V4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function L4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return v_(j)}async function Q4(_,$,j){return v_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function V$(_){return`/media/${_}`}function B4(_){return`/media/${_}/thumbnail`}async function k2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function U4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function v5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function o2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return v_(Z)}async function u5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return v_($)}async function O4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return v_(N)}async function m5(_,$){return v_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function F4(_){return v_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function H1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let G=N.toString(),Y=G?`/workspace/upload?${G}`:"/workspace/upload",q=await fetch(""+Y,{method:"POST",body:Z});if(!q.ok){let L=await q.json().catch(()=>({error:"Upload failed"})),X=Error(L.error||`HTTP ${q.status}`);throw X.status=q.status,X.code=L.code,X}return q.json()}async function H4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),G=Error(N.error||`HTTP ${Z.status}`);throw G.status=Z.status,G.code=N.code,G}return Z.json()}async function D4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function J4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function y4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return v_($,{method:"DELETE"})}async function s2(_,$=!1){return v_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function D1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function J1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class y1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function e0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function l_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function A2(_,$=!1){let j=e0(_);if(j===null)return $;return j==="true"}function w2(_,$=null){let j=e0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function E1(_){return String(_||"").trim().toLowerCase()}function E4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return E1($[1]||"")}function Y8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=E1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function z8(_,$,j={}){let Z=E4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return Y8(_).filter((G)=>{if(N&&G?.chat_jid===N)return!1;return E1(G?.agent_name).startsWith(Z)})}function k4(_){let $=E1(_);return $?`@${$} `:""}function K8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return Y8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function W8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let G=460+N*68+(j?40:0);return Z>=G}function D$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:G="Remove",icon:Y="file"}){let q=`${_}-file-pill`,L=`${_}-file-name`,X=`${_}-file-remove`,Q=Y==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${q} title=${j||$} onClick=${N}>
      ${Q}
      <span class=${L}>${$}</span>
      ${Z&&B`
        <button
          class=${X}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${G}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var g5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function p5({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,G="Compact context",q=`${Z!=null?`Context: ${q8(Z)} / ${q8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,L=9,X=2*Math.PI*9,Q=j/100*X,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${q}
            aria-label="Compact context"
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
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
                    stroke-dasharray=${`${Q} ${X}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function q8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function X8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:G,onEnterSearch:Y,onExitSearch:q,fileRefs:L=[],onRemoveFileRef:X,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:H,onClearMessageRefs:P,activeModel:f=null,modelUsage:m=null,thinkingLevel:g=null,supportsThinking:k=!1,contextUsage:M=null,onContextCompact:c,notificationsEnabled:y=!1,notificationPermission:S="default",onToggleNotifications:n,onModelChange:e,onModelStateChange:o,activeEditorPath:j_=null,onAttachEditorFile:i,onOpenFilePill:X_,followupQueueItems:d_=[],onInjectQueuedFollowup:g_,onRemoveQueuedFollowup:d,onSubmitIntercept:N_,onMessageResponse:__,onPopOutChat:V_,isAgentActive:Y_=!1,activeChatAgents:L_=[],currentChatJid:B_="web:default",connectionStatus:G_="connected",onSetFileRefs:u_,onSetMessageRefs:I_,onSubmitError:y_,onSwitchChat:E_,onRenameSession:z0,isRenameSessionInProgress:K0=!1,onCreateSession:W_,onDeleteSession:$_,onRestoreSession:F_}){let[Z_,H_]=v(""),[M_,a_]=v(""),[p_,o_]=v([]),[c_,h_]=v(!1),[w_,k_]=v([]),[m_,W0]=v(0),[P0,b_]=v(!1),[y0,j0]=v([]),[C_,Z0]=v(0),[t_,$0]=v(!1),[N0,T_]=v(!1),[O0,T0]=v(!1),[A_,e_]=v(!1),[f0,P_]=v([]),[C,a]=v(!1),[U_,x_]=v(0),[s_,F0]=v(null),f_=A(null),S0=A(null),$$=A(null),j$=A(null),b0=A(null),I$=A(null),H0=A(null),i0=A(null),l0=A(0),R0=A(!1),Z$=200,Q2=(z)=>{let O=new Set,D=[];for(let b of z||[]){if(typeof b!=="string")continue;let p=b.trim();if(!p||O.has(p))continue;O.add(p),D.push(p)}return D},B2=()=>{let z=e0("piclaw_compose_history");if(!z)return[];try{let O=JSON.parse(z);if(!Array.isArray(O))return[];return Q2(O)}catch{return[]}},E0=(z)=>{l_("piclaw_compose_history",JSON.stringify(z))},D0=A(B2()),G0=A(-1),p0=A(""),Y0=Z_.trim()||p_.length>0||L.length>0||V.length>0,x0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),N$=typeof window<"u"&&typeof Notification<"u",M$=typeof window<"u"?Boolean(window.isSecureContext):!1,m$=N$&&M$&&S!=="denied",a$=S==="granted"&&y,n0=a$?"Disable notifications":"Enable notifications",t$=p_.length>0||L.length>0||V.length>0,e$=G_==="disconnected"?"Reconnecting":String(G_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(z)=>z.toUpperCase()),G$=G_==="disconnected"?"Reconnecting":`Connection: ${e$}`,B$=(Array.isArray(L_)?L_:[]).filter((z)=>!z?.archived_at),d0=K8(B$,{currentChatJid:B_,limit:4}),X0=!j&&W8({footerWidth:U_,visibleAgentCount:d0.length,hasContextIndicator:Boolean(M&&M.percent!=null)}),i_=(()=>{for(let z of Array.isArray(L_)?L_:[]){let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(O&&O===B_)return z}return null})(),U$=Boolean(i_&&i_.chat_jid===(i_.root_chat_jid||i_.chat_jid)),J$=(()=>{let z=new Set,O=[];for(let D of Array.isArray(L_)?L_:[]){let b=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!b||b===B_||z.has(b))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;z.add(b),O.push(D)}return O})(),g$=J$.length>0,U2=g$&&typeof E_==="function",D_=g$&&typeof F_==="function",Y$=Boolean(K0||R0.current),y$=!j&&typeof z0==="function"&&!Y$,b$=!j&&typeof W_==="function",o0=!j&&typeof $_==="function"&&!U$,C$=!j&&(U2||D_||y$||b$||o0),s0=f||"",v0=k&&g?` (${g})`:"",V0=v0.trim()?`${g}`:"",u0=typeof m?.hint_short==="string"?m.hint_short.trim():"",r0=[V0||null,u0||null].filter(Boolean).join(" • "),C0=[s0?`Current model: ${s0}${v0}`:null,m?.plan?`Plan: ${m.plan}`:null,u0||null,m?.primary?.reset_description||null,m?.secondary?.reset_description||null].filter(Boolean),p$=N0?"Switching model…":C0.join(" • ")||`Current model: ${s0}${v0} (tap to open model picker)`,a0=(z)=>{if(!z||typeof z!=="object")return;let O=z.model??z.current;if(typeof o==="function")o({model:O??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(O&&typeof e==="function")e(O)},c0=(z)=>{let O=z||f_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},c$=(z)=>{if(!z)return{content:z,fileRefs:[]};let D=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),b=-1;for(let O_=0;O_<D.length;O_+=1)if(D[O_].trim()==="Files:"&&D[O_+1]&&/^\s*-\s+/.test(D[O_+1])){b=O_;break}if(b===-1)return{content:z,fileRefs:[]};let p=[],u=b+1;for(;u<D.length;u+=1){let O_=D[u];if(/^\s*-\s+/.test(O_))p.push(O_.replace(/^\s*-\s+/,"").trim());else if(!O_.trim())break;else break}if(p.length===0)return{content:z,fileRefs:[]};let r=D.slice(0,b),Q_=D.slice(u);return{content:[...r,...Q_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:p}},_2=(z)=>{if(!z)return{content:z,messageRefs:[]};let D=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),b=-1;for(let O_=0;O_<D.length;O_+=1)if(D[O_].trim()==="Referenced messages:"&&D[O_+1]&&/^\s*-\s+/.test(D[O_+1])){b=O_;break}if(b===-1)return{content:z,messageRefs:[]};let p=[],u=b+1;for(;u<D.length;u+=1){let O_=D[u];if(/^\s*-\s+/.test(O_)){let H$=O_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H$)p.push(H$[1])}else if(!O_.trim())break;else break}if(p.length===0)return{content:z,messageRefs:[]};let r=D.slice(0,b),Q_=D.slice(u);return{content:[...r,...Q_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:p}},T$=(z)=>{let O=c$(z||""),D=_2(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},J0=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){b_(!1),k_([]);return}let O=z.toLowerCase().split(" ")[0];if(O.length<1){b_(!1),k_([]);return}let D=g5.filter((b)=>b.name.startsWith(O)||b.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))$0(!1),j0([]),k_(D),W0(0),b_(!0);else b_(!1),k_([])},O$=(z)=>{let O=Z_,D=O.indexOf(" "),b=D>=0?O.slice(D):"",p=z.name+b;H_(p),b_(!1),k_([]),requestAnimationFrame(()=>{let u=f_.current;if(!u)return;let r=p.length;u.selectionStart=r,u.selectionEnd=r,u.focus()})},E$=(z)=>{if(E4(z)==null){$0(!1),j0([]);return}let O=z8(B$,z,{currentChatJid:B_});if(O.length>0&&!(O.length===1&&k4(O[0].agent_name).trim().toLowerCase()===String(z||"").trim().toLowerCase()))b_(!1),k_([]),j0(O),Z0(0),$0(!0);else $0(!1),j0([])},k$=(z)=>{let O=k4(z?.agent_name);if(!O)return;H_(O),$0(!1),j0([]),requestAnimationFrame(()=>{let D=f_.current;if(!D)return;let b=O.length;D.selectionStart=b,D.selectionEnd=b,D.focus()})},f$=(z)=>{if(z?.preventDefault?.(),z?.stopPropagation?.(),j||!U2&&!D_&&!y$&&!b$&&!o0)return;T0(!1),b_(!1),k_([]),$0(!1),j0([]),e_((O)=>!O)},h$=(z)=>{let O=typeof z==="string"?z.trim():"";if(e_(!1),!O||O===B_){requestAnimationFrame(()=>f_.current?.focus());return}E_?.(O)},$2=async(z)=>{let O=typeof z==="string"?z.trim():"";if(e_(!1),!O||typeof F_!=="function"){requestAnimationFrame(()=>f_.current?.focus());return}try{await F_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>f_.current?.focus())}},h0=(z)=>{let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(O&&typeof E_==="function"){E_(O);return}k$(z)},m0=async(z)=>{if(z?.preventDefault)z.preventDefault();if(z?.stopPropagation)z.stopPropagation();if(typeof z0!=="function"||K0||R0.current)return;R0.current=!0,e_(!1);try{await z0()}catch(O){console.warn("Failed to rename session:",O)}finally{R0.current=!1}requestAnimationFrame(()=>f_.current?.focus())},F$=async()=>{if(typeof W_!=="function")return;e_(!1);try{await W_()}catch(z){console.warn("Failed to create session:",z)}requestAnimationFrame(()=>f_.current?.focus())},j2=async()=>{if(typeof $_!=="function")return;e_(!1);try{await $_(B_)}catch(z){console.warn("Failed to delete session:",z)}requestAnimationFrame(()=>f_.current?.focus())},z$=(z)=>{if(j)a_(z);else H_(z),J0(z),E$(z);requestAnimationFrame(()=>c0())},i$=(z)=>{let O=j?M_:Z_,D=O&&!O.endsWith(`
`)?`
`:"",b=`${O}${D}${z}`.trimStart();z$(b)},A$=(z)=>{let O=z?.command?.model_label;if(O)return O;let D=z?.command?.message;if(typeof D==="string"){let b=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(b?.[1])return b[1].trim()}return null},S$=async(z)=>{if(j||N0)return;T_(!0);try{let O=await K2("default",z,null,[],null,B_),D=A$(O);a0({model:D??f??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let b=await d2(B_);if(b)a0(b)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{T_(!1)}},Z2=async()=>{await S$("/cycle-model")},O2=async(z)=>{if(!z||N0)return;if(await S$(`/model ${z}`))T0(!1)},w$=(z)=>{z.preventDefault(),z.stopPropagation(),e_(!1),T0((O)=>!O)},l$=async()=>{if(j)return;c?.(),await P$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},N2=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return Y_?"queue":null},P$=async(z,O,D={})=>{let{includeMedia:b=!0,includeFileRefs:p=!0,includeMessageRefs:u=!0,clearAfterSubmit:r=!0,recordHistory:Q_=!0}=D||{},k0=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:Z_,O_=typeof k0==="string"?k0:"";if(!O_.trim()&&(b?p_.length===0:!0)&&(p?L.length===0:!0)&&(u?V.length===0:!0))return;b_(!1),k_([]),$0(!1),j0([]),e_(!1),F0(null);let H$=b?[...p_]:[],x$=p?[...L]:[],H2=u?[...V]:[],K$=O_.trim();if(Q_&&K$){let Y2=D0.current,I0=Q2(Y2.filter((D2)=>D2!==K$));if(I0.push(K$),I0.length>200)I0.splice(0,I0.length-200);D0.current=I0,E0(I0),G0.current=-1,p0.current=""}let m1=()=>{if(b)o_([...H$]);if(p)u_?.(x$);if(u)I_?.(H2);H_(K$),requestAnimationFrame(()=>c0())};if(r)H_(""),o_([]),Q?.(),P?.();(async()=>{try{if(await N_?.({content:K$,submitMode:O,fileRefs:x$,messageRefs:H2,mediaFiles:H$})){_?.();return}let I0=[];for(let q0 of H$){let L0=await q4(q0);I0.push(L0.id)}let D2=x$.length?`Files:
${x$.map((q0)=>`- ${q0}`).join(`
`)}`:"",Q0=H2.length?`Referenced messages:
${H2.map((q0)=>`- message:${q0}`).join(`
`)}`:"",g1=I0.length?`Attachments:
${I0.map((q0,L0)=>{let R2=H$[L0]?.name||`attachment-${L0+1}`;return`- attachment:${q0} (${R2})`}).join(`
`)}`:"",J2=[K$,D2,Q0,g1].filter(Boolean).join(`

`),n$=await K2("default",J2,null,I0,N2(O),B_);if(__?.(n$),n$?.command){a0({model:n$.command.model_label??f??null,thinking_level:n$.command.thinking_level,supports_thinking:n$.command.supports_thinking});try{let q0=await d2(B_);if(q0)a0(q0)}catch{}}_?.()}catch(Y2){if(r)m1();let I0=Y2?.message||"Failed to send message.";F0(I0),y_?.(I0),console.error("Failed to post:",Y2)}})()},I2=(z)=>{g_?.(z)},M2=(z)=>{if(z.isComposing)return;if(j&&z.key==="Escape"){z.preventDefault(),a_(""),q?.();return}if(!j&&A_&&z.key==="Escape"){z.preventDefault(),e_(!1);return}if(t_&&y0.length>0){let O=f_.current?.value??(j?M_:Z_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))$0(!1),j0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),Z0((D)=>(D+1)%y0.length);return}if(z.key==="ArrowUp"){z.preventDefault(),Z0((D)=>(D-1+y0.length)%y0.length);return}if(z.key==="Tab"||z.key==="Enter"){z.preventDefault(),k$(y0[C_]);return}if(z.key==="Escape"){z.preventDefault(),$0(!1),j0([]);return}}}if(P0&&w_.length>0){let O=f_.current?.value??(j?M_:Z_);if(!String(O||"").startsWith("/"))b_(!1),k_([]);else{if(z.key==="ArrowDown"){z.preventDefault(),W0((D)=>(D+1)%w_.length);return}if(z.key==="ArrowUp"){z.preventDefault(),W0((D)=>(D-1+w_.length)%w_.length);return}if(z.key==="Tab"){z.preventDefault(),O$(w_[m_]);return}if(z.key==="Enter"&&!z.shiftKey){if(!(f_.current?.value??(j?M_:Z_)).includes(" ")){z.preventDefault();let p=w_[m_];b_(!1),k_([]),P$(p.name);return}}if(z.key==="Escape"){z.preventDefault(),b_(!1),k_([]);return}}}if(!j&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let O=f_.current;if(!O)return;let D=O.value||"",b=O.selectionStart===0&&O.selectionEnd===0,p=O.selectionStart===D.length&&O.selectionEnd===D.length;if(z.key==="ArrowUp"&&b||z.key==="ArrowDown"&&p){let u=D0.current;if(!u.length)return;z.preventDefault();let r=G0.current;if(z.key==="ArrowUp"){if(r===-1)p0.current=D,r=u.length-1;else if(r>0)r-=1;G0.current=r,z$(u[r]||"")}else{if(r===-1)return;if(r<u.length-1)r+=1,G0.current=r,z$(u[r]||"");else G0.current=-1,z$(p0.current||""),p0.current=""}requestAnimationFrame(()=>{let Q_=f_.current;if(!Q_)return;let k0=Q_.value.length;Q_.selectionStart=k0,Q_.selectionEnd=k0});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){z.preventDefault();let O=f_.current?.value??(j?M_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else P$(O,"steer");return}if(z.key==="Enter"&&!z.shiftKey){z.preventDefault();let O=f_.current?.value??(j?M_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else P$(O)}},z_=(z)=>{let O=Array.from(z||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;o_((D)=>[...D,...O]),F0(null)},F2=(z)=>{z_(z.target.files),z.target.value=""},b2=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),l0.current+=1,h_(!0)},C2=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),l0.current=Math.max(0,l0.current-1),l0.current===0)h_(!1)},G2=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";h_(!0)},T2=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),l0.current=0,h_(!1),z_(z.dataTransfer?.files||[])},f2=(z)=>{if(j)return;let O=z.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let b of O){if(b.kind!=="file")continue;let p=b.getAsFile?.();if(p)D.push(p)}if(D.length>0)z.preventDefault(),z_(D)},S2=(z)=>{o_((O)=>O.filter((D,b)=>b!==z))},U=()=>{F0(null),o_([]),Q?.(),P?.()},J=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:O,longitude:D,accuracy:b}=z.coords,p=`${O.toFixed(5)}, ${D.toFixed(5)}`,u=Number.isFinite(b)?` ±${Math.round(b)}m`:"",r=`https://maps.google.com/?q=${O},${D}`,Q_=`Location: ${p}${u} ${r}`;i$(Q_)},(z)=>{let O=z?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};R(()=>{if(!O0)return;a(!0),d2(B_).then((z)=>{let O=Array.isArray(z?.models)?z.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,b)=>D.localeCompare(b,void 0,{sensitivity:"base"})),P_(O),a0(z)}).catch((z)=>{console.warn("Failed to load model list:",z),P_([])}).finally(()=>{a(!1)})},[O0,f]),R(()=>{if(j)T0(!1),e_(!1),b_(!1),k_([]),$0(!1),j0([])},[j]),R(()=>{if(A_&&!C$)e_(!1)},[A_,C$]),R(()=>{if(!O0)return;let z=(O)=>{let D=j$.current,b=b0.current,p=O.target;if(D&&D.contains(p))return;if(b&&b.contains(p))return;T0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[O0]),R(()=>{if(!A_)return;let z=(O)=>{let D=I$.current,b=H0.current,p=O.target;if(D&&D.contains(p))return;if(b&&b.contains(p))return;e_(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[A_]),R(()=>{let z=()=>{let u=i0.current?.clientWidth||0;x_((r)=>r===u?r:u)};z();let O=i0.current,D=0,b=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,z()})},p=null;if(O&&typeof ResizeObserver<"u")p=new ResizeObserver(()=>b()),p.observe(O);if(typeof window<"u")window.addEventListener("resize",b);return()=>{if(D)cancelAnimationFrame(D);if(p?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",b)}},[j,f,d0.length,M?.percent]);let x=(z)=>{let O=z.target.value;if(F0(null),A_)e_(!1);c0(z.target),z$(O)};return R(()=>{requestAnimationFrame(()=>c0())},[Z_,M_,j]),R(()=>{if(j)return;E$(Z_)},[B$,B_,Z_,j]),B`
        <div class="compose-box">
            ${!j&&d_.length>0&&B`
                <div class="compose-queue-stack">
                    ${d_.map((z)=>{let O=typeof z?.content==="string"?z.content:"",D=T$(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((b)=>B`
                                                <${D$}
                                                    key=${"queue-msg-"+b}
                                                    prefix="compose"
                                                    label=${"msg:"+b}
                                                    title=${"Message reference: "+b}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((b)=>{let p=b.split("/").pop()||b;return B`
                                                    <${D$}
                                                        key=${"queue-file-"+b}
                                                        prefix="compose"
                                                        label=${p}
                                                        title=${b}
                                                        onClick=${()=>X_?.(b)}
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
                                        onClick=${()=>I2(z)}
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
                                        onClick=${()=>d?.(z)}
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
                class=${`compose-input-wrapper${c_?" drag-active":""}`}
                onDragEnter=${b2}
                onDragOver=${G2}
                onDragLeave=${C2}
                onDrop=${T2}
            >
                <div class="compose-input-main">
                    ${s_&&!t$&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${s_}</div>
                    `}
                    ${t$&&B`
                        <div class="compose-file-refs">
                            ${s_&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${s_}</div>
                            `}
                            ${V.map((z)=>{return B`
                                    <${D$}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(z)}
                                    />
                                `})}
                            ${L.map((z)=>{let O=z.split("/").pop()||z;return B`
                                    <${D$}
                                        prefix="compose"
                                        label=${O}
                                        title=${z}
                                        onClick=${()=>X_?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(z)}
                                    />
                                `})}
                            ${p_.map((z,O)=>{let D=z?.name||`attachment-${O+1}`;return B`
                                    <${D$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>S2(O)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${U}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof V_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>V_?.()}
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
                        ref=${f_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?M_:Z_}
                        onInput=${x}
                        onKeyDown=${M2}
                        onPaste=${f2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${t_&&y0.length>0&&B`
                        <div class="slash-autocomplete" ref=${$$}>
                            ${y0.map((z,O)=>B`
                                <div
                                    key=${z.chat_jid||z.agent_name}
                                    class=${`slash-item${O===C_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),k$(z)}}
                                    onMouseEnter=${()=>Z0(O)}
                                >
                                    <span class="slash-name">@${z.agent_name}</span>
                                    <span class="slash-desc">${z.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P0&&w_.length>0&&B`
                        <div class="slash-autocomplete" ref=${S0}>
                            ${w_.map((z,O)=>B`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${O===m_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),O$(z)}}
                                    onMouseEnter=${()=>W0(O)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&B`
                        <div class="compose-model-popup" ref=${j$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&f0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&f0.map((z)=>B`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${f===z?" active":""}`}
                                        onClick=${()=>{O2(z)}}
                                        disabled=${N0}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{Z2()}}
                                    disabled=${N0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${A_&&!j&&B`
                        <div class="compose-model-popup" ref=${I$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let z=typeof i_?.agent_name==="string"&&i_.agent_name.trim()?`@${i_.agent_name.trim()}`:B_,O=typeof i_?.chat_jid==="string"&&i_.chat_jid.trim()?i_.chat_jid.trim():B_;return`${z} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!g$&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${g$&&J$.map((z)=>{let O=Boolean(z.archived_at),b=z.chat_jid!==(z.root_chat_jid||z.chat_jid)&&!z.is_active&&!O&&typeof $_==="function",p=`@${z.agent_name} — ${z.chat_jid}${z.is_active?" • active":""}${O?" • archived":""}`;return B`
                                        <div key=${z.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){$2(z.chat_jid);return}h$(z.chat_jid)}}
                                                disabled=${O?!D_:!U2}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${p}
                                            </button>
                                            ${b&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${z.agent_name}`}
                                                    onClick=${(u)=>{u.stopPropagation(),e_(!1),$_(z.chat_jid)}}
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
                            ${(b$||y$||o0)&&B`
                                <div class="compose-model-popup-actions">
                                    ${b$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{F$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${y$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(z)=>{m0(z)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${Y$}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${o0&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{j2()}}
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
                <div class="compose-footer" ref=${i0}>
                    ${!j&&f&&B`
                    <div class="compose-meta-row">
                        ${!j&&f&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${b0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${p$}
                                    aria-label="Open model picker"
                                    onClick=${w$}
                                    disabled=${N0}
                                >
                                    ${N0?"Switching…":s0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N0&&r0&&B`
                                        <span class="compose-model-usage-hint" title=${p$}>
                                            ${r0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&M&&M.percent!=null&&B`
                            <${p5} usage=${M} onCompact=${l$} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${X0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${d0.map((z)=>B`
                                <button
                                    key=${z.chat_jid||z.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>h0(z)}
                                    title=${`${z.chat_jid||"Active agent"} — switch to @${z.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${z.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${C$&&B`
                        ${i_?.agent_name&&B`
                            <span
                                class="compose-current-agent-label"
                                title=${i_.chat_jid||B_}
                                onClick=${f$}
                            >@${i_.agent_name}</span>
                        `}
                        <button
                            ref=${H0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${A_?" active":""}`}
                            onClick=${f$}
                            title=${A_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${A_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(z)=>G?.(z.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:Y}
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
                    ${x0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${J}
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
                    ${m$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${a$?" active":""}`}
                            onClick=${n}
                            title=${n0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${j_&&i&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${i}
                                title=${`Attach open file: ${j_}`}
                                type="button"
                                disabled=${L.includes(j_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${F2} />
                        </label>
                    `}
                    ${(G_!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${G_!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${G_}" title=${G$}>
                                    ${e$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{P$()}}
                                    disabled=${!Y0}
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
    `}var P4="piclaw_theme",A1="piclaw_tint",Q8="piclaw_chat_themes",a2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},V8={default:{label:"Default",mode:"auto",light:a2,dark:B8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},c5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],W2={theme:"default",tint:null},U8="light",A4=!1;function w1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function x2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((G)=>G+G).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function h5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let G=parseInt(N[1],10),Y=parseInt(N[2],10),q=parseInt(N[3],10);if(![G,Y,q].every((X)=>Number.isFinite(X)))return null;let L=`#${[G,Y,q].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:G,g:Y,b:q,hex:L}}function O8(_){return x2(_)||h5(_)}function r2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),G=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${G})`}function w4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function i5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),G=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*G+0.0722*Y}function l5(_){return i5(_)>0.4?"#000000":"#ffffff"}function F8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function x4(_){return V8[_]||V8.default}function n5(_){return _.mode==="auto"?F8():_.mode}function H8(_,$){let j=x4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||a2}function D8(_,$,j){let Z=O8($);if(!Z)return _;let N=x2(_.bgPrimary),G=x2(_.bgSecondary),Y=x2(_.bgHover),q=x2(_.borderColor);if(!N||!G||!Y||!q)return _;let X=x2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:r2(N,Z,0.08),bgSecondary:r2(G,Z,0.12),bgHover:r2(Y,Z,0.16),borderColor:r2(q,Z,0.08),accent:Z.hex,accentHover:X?r2(Z,X,0.18):Z.hex}}function d5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=O8(Z),G=N?w4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=N?w4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=N?w4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?l5(N):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":L,"--danger-color":_.danger||a2.danger,"--success-color":_.success||a2.success,"--search-highlight-color":G||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([Q,V])=>{if(V)j.style.setProperty(Q,V)})}function o5(){if(typeof document>"u")return;let _=document.documentElement;c5.forEach(($)=>_.style.removeProperty($))}function P2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function L8(_){let $=w1(W2?.theme||"default"),j=W2?.tint?String(W2.tint).trim():null,Z=H8($,_);if($==="default"&&j)Z=D8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?B8.bgPrimary:a2.bgPrimary}function s5(_,$){if(typeof document>"u")return;let j=P2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=P2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",L8("light"));let N=P2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",L8("dark"));let G=P2("msapplication-TileColor");if(G&&_)G.setAttribute("content",_);let Y=P2("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=P2("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function r5(){if(typeof window>"u")return;let _={...W2,mode:U8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function J8(){try{let _=e0(Q8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function a5(_,$,j){let Z=J8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};l_(Q8,JSON.stringify(Z))}function t5(_){if(!_)return null;return J8()[_]||null}function y8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function I4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=w1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=x4(j),G=n5(N),Y=H8(j,G);W2={theme:j,tint:Z},U8=G;let q=document.documentElement;q.dataset.theme=G,q.dataset.colorTheme=j,q.dataset.tint=Z?String(Z):"",q.style.colorScheme=G;let L=Y;if(j==="default"&&Z)L=D8(Y,Z,G);if(j==="default"&&!Z)o5();else d5(L,G);if(s5(L.bgPrimary,G),r5(),$.persist!==!1)if(l_(P4,j),Z)l_(A1,Z);else l_(A1,"")}function k1(){if(x4(W2.theme).mode!=="auto")return;I4(W2,{persist:!1})}function E8(){if(typeof window>"u")return()=>{};let _=y8(),$=t5(_),j=$?w1($.theme||"default"):w1(e0(P4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=e0(A1);return N?N.trim():null})();if(I4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!A4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",k1);else if(N.addListener)N.addListener(k1);return A4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",k1);else if(N.removeListener)N.removeListener(k1);A4=!1}}return()=>{}}function k8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||y8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(a5($,j||"default",Z),I4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")l_(P4,j||"default"),l_(A1,Z||"")}function A8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return F8()}var P1=/#(\w+)/g,e5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),_7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),$7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),j7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Z7=new Set(["http:","https:","mailto:",""]);function M4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function q2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!Z7.has(Z.protocol))return null;return Z.href}catch{return null}}function w8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),G;while(G=N.nextNode())Z.push(G);for(let Y of Z){let q=Y.tagName.toLowerCase();if(!_7.has(q)){let X=Y.parentNode;if(!X)continue;while(Y.firstChild)X.insertBefore(Y.firstChild,Y);X.removeChild(Y);continue}let L=j7[q]||new Set;for(let X of Array.from(Y.attributes)){let Q=X.name.toLowerCase(),V=X.value;if(Q.startsWith("on")){Y.removeAttribute(X.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(L.has(Q)||$7.has(Q)){if(Q==="href"){let H=q2(V);if(!H)Y.removeAttribute(X.name);else if(Y.setAttribute(X.name,H),q==="a"&&!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let H=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,P=q2(H,{allowDataImage:q==="img"});if(!P)Y.removeAttribute(X.name);else Y.setAttribute(X.name,P)}continue}Y.removeAttribute(X.name)}}return j.body.innerHTML}function P8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function x1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=P8(j);if(N===j)break;j=N}return j}function N7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],G=!1,Y=[];for(let q of j){if(!G&&q.trim().match(/^```mermaid\s*$/i)){G=!0,Y=[];continue}if(G&&q.trim().match(/^```\s*$/)){let L=Z.length;Z.push(Y.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),G=!1,Y=[];continue}if(G)Y.push(q);else N.push(q)}if(G)N.push("```mermaid"),N.push(...Y);return{text:N.join(`
`),blocks:Z}}function G7(_){if(!_)return _;return x1(_,5)}function Y7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function z7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function K7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),G=$[N]??"",Y=G7(G);return`<div class="mermaid-container" data-mermaid="${Y7(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function x8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var W7={span:new Set(["title","class","lang","dir"])};function q7(_,$){let j=W7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,G;while(G=N.exec($)){let Y=(G[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=G[2]??G[3]??G[4]??"";Z.push(` ${Y}="${M4(q)}"`)}return Z.join("")}function I8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),G=N?Z.slice(1).trim():Z,q=G.endsWith("/")?G.slice(0,-1).trim():G,[L=""]=q.split(/\s+/,1),X=L.toLowerCase();if(!X||!e5.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;let Q=q.slice(L.length).trim(),V=q7(X,Q);return`<${X}${V}>`})}function M8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function b8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(G)=>G.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let G=Z(N.nodeValue);if(G!==N.nodeValue)N.nodeValue=G}return $.body.innerHTML}function X7(_){if(!window.katex)return _;let $=(Y)=>P8(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let Q=q.length;return q.push(X),`@@CODE_BLOCK_${Q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let Q=q.length;return q.push(X),`@@CODE_INLINE_${Q}@@`}),{html:L,blocks:q}},Z=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,X)=>{let Q=Number(X);return q[Q]??""})},N=j(_),G=N.html;return G=G.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,L)=>{try{let X=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${q}${X}`}catch(X){return`<span class="math-error" title="${M4(X.message)}">${Y}</span>`}}),G=G.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Y,q,L)=>{if(/\s$/.test(L))return Y;try{let X=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${q}${X}`}catch(X){return`${q}<span class="math-error" title="${M4(X.message)}">$${L}$</span>`}}),Z(G,N.blocks)}function V7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let G of Z){let Y=G.nodeValue;if(!Y)continue;if(P1.lastIndex=0,!P1.test(Y))continue;P1.lastIndex=0;let q=G.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let L=Y.split(P1);if(L.length<=1)continue;let X=$.createDocumentFragment();L.forEach((Q,V)=>{if(V%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",Q),H.textContent=`#${Q}`,X.appendChild(H)}else X.appendChild($.createTextNode(Q))}),G.parentNode?.replaceChild(X,G)}return $.body.innerHTML}function L7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let G of j){if(!N&&G.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&G.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(G)}return Z.join(`
`)}function _$(_,$,j={}){if(!_)return"";let Z=L7(_),{text:N,blocks:G}=N7(Z),Y=x1(N,2),L=x8(Y).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=I8(L),Q=window.marked?marked.parse(X,{headerIds:!1,mangle:!1}):X.replace(/\n/g,"<br>");return Q=M8(Q),Q=b8(Q),Q=X7(Q),Q=V7(Q),Q=K7(Q,G),Q=w8(Q,j),Q}function I1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=x1($,2),N=x8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),G=I8(N),Y=window.marked?marked.parse(G):G.replace(/\n/g,"<br>");return Y=M8(Y),Y=b8(Y),Y=w8(Y),Y}function Q7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,G)=>{let Y=N.trim().split(/\s+/).map((L)=>{let[X,Q]=L.split(",").map(Number);return{x:X,y:Q}});if(Y.length<3)return`<polyline${Z}points="${N}"${G}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let X=Y[L-1],Q=Y[L],V=Y[L+1],H=Q.x-X.x,P=Q.y-X.y,f=V.x-Q.x,m=V.y-Q.y,g=Math.sqrt(H*H+P*P),k=Math.sqrt(f*f+m*m),M=Math.min($,g/2,k/2);if(M<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let c=Q.x-H/g*M,y=Q.y-P/g*M,S=Q.x+f/k*M,n=Q.y+m/k*M,o=H*m-P*f>0?1:0;q.push(`L ${c},${y}`),q.push(`A ${M},${M} 0 0 ${o} ${S},${n}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${Z}d="${q.join(" ")}"${G}/>`})}async function v$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=A8()==="dark"?j["tokyo-night"]:j["github-light"],G=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of G)try{let q=Y.dataset.mermaid,L=z7(q||""),X=x1(L,2),Q=await $(X,{...N,transparent:!0});Q=Q7(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}function C8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function T8(_){return String(_||"").trim()||"web:default"}function f8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function S8(_){if(!_)return!1;return _.status!=="running"}function R8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function v8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=A(null),G=A(null),Y=_?.thinking?I1(_.thinking):"",q=_?.answer?_$(_.answer,null,{sanitize:!1}):"";if(R(()=>{if(N.current&&Y)v$(N.current).catch(()=>{})},[Y]),R(()=>{if(G.current&&q)v$(G.current).catch(()=>{})},[q]),!_)return null;let L=_.status==="running",X=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=f8(_),H=S8(_),P=!L&&X,f=L?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${f}</span>
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
            ${Q&&B`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${G}
                        dangerouslySetInnerHTML=${{__html:q}}
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
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!P}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function B7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function U7(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",G=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(G==="svg")return j?{kind:G,svg:j}:{kind:G};return Z?{kind:G,html:Z}:{kind:G}}function o$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function q_(_){return typeof _==="string"&&_.trim()?_.trim():null}function u8(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((N)=>typeof N==="string").map((N)=>N.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}function O7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function b4(_,$){if(!_||_.type!=="generated_widget")return null;let j=B7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:u8(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function m8(_){if(!_||typeof _!=="object")return null;let $=U7(_),j=q_(_?.widget_id)||q_(_?.widgetId)||q_(_?.tool_call_id)||q_(_?.toolCallId),Z=q_(_?.tool_call_id)||q_(_?.toolCallId),N=q_(_?.turn_id)||q_(_?.turnId),G=q_(_?.title)||q_(_?.name)||"Generated widget",Y=q_(_?.subtitle)||"",q=q_(_?.description)||Y,L=q_(_?.status),X=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:G,subtitle:Y,description:q,originPostId:o$(_?.origin_post_id)??o$(_?.originPostId),originChatJid:q_(_?.origin_chat_jid)||q_(_?.originChatJid)||q_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:u8(_?.capabilities,!0),source:"live",status:X,turnId:N,toolCallId:Z,width:o$(_?.width),height:o$(_?.height),error:q_(_?.error)}}function g8(_){return b4(_,null)!==null}function g0(_){let $=q_(_?.toolCallId)||q_(_?.tool_call_id);if($)return $;let j=q_(_?.widgetId)||q_(_?.widget_id);if(j)return j;let Z=o$(_?.originPostId)??o$(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function p8(_){let j=(_?.artifact||{}).kind||_?.kind||null,N=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((G)=>typeof G==="string"&&G.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||N)}function c8(_){return p8(_)?"allow-downloads allow-scripts":"allow-downloads"}function M1(_){return{title:q_(_?.title)||"Generated widget",widgetId:q_(_?.widgetId)||q_(_?.widget_id),toolCallId:q_(_?.toolCallId)||q_(_?.tool_call_id),turnId:q_(_?.turnId)||q_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:q_(_?.status)||"final"}}function C4(_){return{...M1(_),subtitle:q_(_?.subtitle)||"",description:q_(_?.description)||"",error:q_(_?.error)||null,width:o$(_?.width),height:o$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function h8(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=q_(_.text)||q_(_.content)||q_(_.message)||q_(_.prompt)||q_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=q_(j.text)||q_(j.content)||q_(j.message)||q_(j.prompt)||q_(j.value);if(Z)return Z}return null}function i8(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function l8(_){let $=q_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return q_(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function F7(_){let $=M1(_);return`<script>
(function () {
  const meta = ${O7($)};
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
    window.piclawWidget.lastHostMessage = data;
    if (data.type === 'widget.init' || data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = data.payload || null;
    }
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail: data }));
  });

  function announceReady() {
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function n8(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?N:Z;if(!Y)return"";let q=p8(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),X=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?F7(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${L}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${G.replace(/[<&>]/g,"")}</title>
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
${Q}
</head>
<body>${X}</body>
</html>`}function d8({widget:_,onClose:$,onWidgetEvent:j}){let Z=A(null),N=A(!1),G=R_(()=>n8(_),[_]);if(R(()=>{if(!_)return;let k=(M)=>{if(M.key==="Escape")$?.()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[_,$]),R(()=>{N.current=!1},[G]),R(()=>{if(!_)return;let k=Z.current;if(!k)return;let M=(S)=>{try{k.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:S,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:S==="widget.init"?M1(_):C4(_)},"*")}catch{}},c=()=>{if(N.current)return;N.current=!0,M("widget.init"),M("widget.update")};k.addEventListener("load",c);let y=k.contentDocument?.readyState;if(y==="complete"||y==="interactive")queueMicrotask(c);return()=>k.removeEventListener("load",c)},[_,G]),R(()=>{if(!_||!N.current)return;let k=Z.current;if(!k?.contentWindow)return;try{k.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:C4(_)},"*")}catch{}return},[_]),R(()=>{if(!_)return;let k=(M)=>{let c=Z.current;if(!c?.contentWindow||M.source!==c.contentWindow)return;let y=M?.data;if(!y||y.__piclawGeneratedWidget!==!0)return;let S=g0({widgetId:y.widgetId,toolCallId:y.toolCallId}),n=g0(_);if(S&&n&&S!==n)return;j?.(y,_)};return window.addEventListener("message",k),()=>window.removeEventListener("message",k)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",X=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",H=Q==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",P=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",f=!G,m=l8(_),g=c8(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${L}
                onClick=${(k)=>k.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${H} • ${q.toUpperCase()}</div>
                        <div class="floating-widget-title">${L}</div>
                        ${(X||P)&&B`
                            <div class="floating-widget-subtitle">${X||P}</div>
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
                    ${f?B`<div class="floating-widget-empty">${m}</div>`:B`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${L}
                                sandbox=${g}
                                referrerpolicy="no-referrer"
                                srcdoc=${G}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var o8="PiClaw";function T4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),G=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=N.charCodeAt(0)%G.length,q=G[Y],L=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",Q=X?X:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:q,image:Q||(V?"/static/icon-192.png":null)}}function s8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function r8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function a8(_){if(!_)return null;if(typeof document<"u"){let G=document.documentElement,Y=G?.dataset?.colorTheme||"",q=G?.dataset?.tint||"",L=getComputedStyle(G).getPropertyValue("--accent-color")?.trim();if(L&&(q||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let G=0;G<j.length;G+=1)Z=(Z*31+j.charCodeAt(G))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function H7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function t2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function t8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return t2(_)?"Compacting context":"Working..."}function D7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function e8(_,$=Date.now()){let j=H7(_);if(j===null)return null;return D7(Math.max(0,$-j))}function _6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:G,turnId:Y,steerQueued:q,onPanelToggle:L}){let V=($_)=>{if(!$_)return{text:"",totalLines:0,fullText:""};if(typeof $_==="string"){let M_=$_,a_=M_?M_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:M_,totalLines:a_,fullText:M_}}let F_=$_.text||"",Z_=$_.fullText||$_.full_text||F_,H_=Number.isFinite($_.totalLines)?$_.totalLines:Z_?Z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F_,totalLines:H_,fullText:Z_}},H=160,P=($_)=>String($_||"").replace(/<\/?internal>/gi,""),f=($_)=>{if(!$_)return 1;return Math.max(1,Math.ceil($_.length/160))},m=($_,F_,Z_)=>{let H_=($_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H_)return{text:"",omitted:0,totalLines:Number.isFinite(Z_)?Z_:0,visibleLines:0};let M_=H_.split(`
`),a_=M_.length>F_?M_.slice(0,F_).join(`
`):H_,p_=Number.isFinite(Z_)?Z_:M_.reduce((h_,w_)=>h_+f(w_),0),o_=a_?a_.split(`
`).reduce((h_,w_)=>h_+f(w_),0):0,c_=Math.max(p_-o_,0);return{text:a_,omitted:c_,totalLines:p_,visibleLines:o_}},g=V(j),k=V(Z),M=V($),c=Boolean(g.text)||g.totalLines>0,y=Boolean(k.text)||k.totalLines>0,S=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!S&&!c&&!y&&!N&&!G)return null;let[n,e]=v(new Set),[o,j_]=v(()=>Date.now()),i=($_)=>e((F_)=>{let Z_=new Set(F_),H_=!Z_.has($_);if(H_)Z_.add($_);else Z_.delete($_);if(typeof L==="function")L($_,H_);return Z_});R(()=>{e(new Set)},[Y]);let X_=t2(_);R(()=>{if(!X_)return;j_(Date.now());let $_=setInterval(()=>j_(Date.now()),1000);return()=>clearInterval($_)},[X_,_?.started_at,_?.startedAt]);let d_=_?.turn_id||Y,g_=a8(d_),d=q?"turn-dot turn-dot-queued":"turn-dot",N_=($_)=>$_,__=Boolean(_?.last_activity||_?.lastActivity),V_=($_)=>$_==="warning"?"#f59e0b":$_==="error"?"var(--danger-color)":$_==="success"?"var(--success-color)":g_,Y_=G?.kind||"info",L_=V_(Y_),B_=V_(_?.kind||(X_?"warning":"info")),G_="",u_=_?.title,I_=_?.status;if(_?.type==="plan")G_=u_?`Planning: ${u_}`:"Planning...";else if(_?.type==="tool_call")G_=u_?`Running: ${u_}`:"Running tool...";else if(_?.type==="tool_status")G_=u_?`${u_}: ${I_||"Working..."}`:I_||"Working...";else if(_?.type==="error")G_=u_||"Agent error";else G_=u_||I_||"Working...";if(__)G_="Last activity just now";let y_=({panelTitle:$_,text:F_,fullText:Z_,totalLines:H_,maxLines:M_,titleClass:a_,panelKey:p_})=>{let o_=n.has(p_),c_=Z_||F_||"",h_=p_==="thought"||p_==="draft"?P(c_):c_,w_=typeof M_==="number",k_=o_&&w_,m_=w_?m(h_,M_,H_):{text:h_||"",omitted:0,totalLines:Number.isFinite(H_)?H_:0};if(!h_&&!(Number.isFinite(m_.totalLines)&&m_.totalLines>0))return null;let W0=`agent-thinking-body${w_?" agent-thinking-body-collapsible":""}`,P0=w_?`--agent-thinking-collapsed-lines: ${M_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${o_?"true":"false"}
                data-collapsible=${w_?"true":"false"}
                style=${g_?`--turn-color: ${g_};`:""}
            >
                <div class="agent-thinking-title ${a_||""}">
                    ${g_&&B`<span class=${d} aria-hidden="true"></span>`}
                    ${$_}
                    ${k_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$_} panel`}
                            onClick=${()=>i(p_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${W0}
                    style=${P0}
                    dangerouslySetInnerHTML=${{__html:I1(h_)}}
                />
                ${!o_&&m_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(p_)}>
                        ▸ ${m_.omitted} more lines
                    </button>
                `}
                ${o_&&m_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(p_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},E_=N?.tool_call?.title,z0=E_?`Awaiting approval: ${E_}`:"Awaiting approval",K0=X_?e8(_,o):null,W_=($_,F_,Z_=null)=>{let H_=t8($_);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${F_?`--turn-color: ${F_};`:""}
                title=${$_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${F_&&B`<span class=${d} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${H_}</span>
                    ${Z_&&B`<span class="agent-status-elapsed">${Z_}</span>`}
                </div>
                ${$_.detail&&B`<div class="agent-thinking-body">${$_.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${G&&W_(G,L_)}
            ${_?.type==="intent"&&W_(_,B_,K0)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${g_?`--turn-color: ${g_};`:""}>
                    <span class=${d} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${z0}</span>
                </div>
            `}
            ${c&&y_({panelTitle:N_("Planning"),text:g.text,fullText:g.fullText,totalLines:g.totalLines,panelKey:"plan"})}
            ${y&&y_({panelTitle:N_("Thoughts"),text:k.text,fullText:k.fullText,totalLines:k.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${S&&y_({panelTitle:N_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${__?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${g_?`--turn-color: ${g_};`:""}>
                    ${g_&&B`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!__&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${G_}</span>
                </div>
            `}
        </div>
    `}function $6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:G}=_,Y=Z?.title||"Agent Request",q=Z?.kind||"other",L=Z?.rawInput||{},X=L.command||L.commands&&L.commands[0]||null,Q=L.diff||null,V=L.fileName||L.path||null,H=Z?.description||L.description||L.explanation||null,f=(Array.isArray(Z?.locations)?Z.locations:[]).map((c)=>c?.path).filter((c)=>Boolean(c)),m=Array.from(new Set([V,...f].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let g=async(c)=>{try{await F1(j,c,G||null),$()}catch(y){console.error("Failed to respond to agent request:",y)}},k=async()=>{try{await V4(Y,`Auto-approved: ${Y}`),await F1(j,"approved",G||null),$()}catch(c){console.error("Failed to add to whitelist:",c)}},M=N&&N.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(H||X||Q||m.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${m.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${m.map((c,y)=>B`<li key=${y}>${c}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&B`
                            <pre class="agent-request-command">${X}</pre>
                        `}
                        ${Q&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?N.map((c)=>B`
                            <button 
                                key=${c.optionId||c.id||String(c)}
                                class="agent-request-btn ${c.kind==="allow_once"||c.kind==="allow_always"?"primary":""}"
                                onClick=${()=>g(c.optionId||c.id||c)}
                            >
                                ${c.name||c.label||c.optionId||c.id||String(c)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>g("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>g("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${k}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function j6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,G=86400000;if(Z<G){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*G){let L=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${X}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function e2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function L$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function X2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var J7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),y7=new Set(["text/markdown"]),E7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),k7=new Set(["application/vnd.jgraph.mxfile"]);function _1(_){return typeof _==="string"?_.trim().toLowerCase():""}function A7(_){let $=_1(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function w7(_){let $=_1(_);return!!$&&$.endsWith(".pdf")}function P7(_){let $=_1(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function $1(_,$){let j=_1(_);if(A7($)||k7.has(j))return"drawio";if(w7($)||j==="application/pdf")return"pdf";if(P7($)||E7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(J7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function Z6(_){let $=_1(_);return y7.has($)}function N6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function x7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function I7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),G=Number(j[3]);if(![Z,N,G].every((Y)=>Number.isFinite(Y)))return null;return{r:Z,g:N,b:G}}function G6(_){return x7(_)||I7(_)}function b1(_){let $=(G)=>{let Y=G/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function M7(_,$){let j=Math.max(b1(_),b1($)),Z=Math.min(b1(_),b1($));return(j+0.05)/(Z+0.05)}function b7(_,$,j="#ffffff"){let Z=G6(_);if(!Z)return j;let N=j,G=-1;for(let Y of $){let q=G6(Y);if(!q)continue;let L=M7(Z,q);if(L>G)N=Y,G=L}return N}function f4(){let _=getComputedStyle(document.documentElement),$=(f,m)=>{for(let g of f){let k=_.getPropertyValue(g).trim();if(k)return k}return m},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),G=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),P=b7(q,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:G,bgEmphasis:Y,accent:q,good:L,warning:X,attention:Q,border:V,fontFamily:H,buttonTextColor:P}}function Y6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:G,warning:Y,attention:q,border:L,fontFamily:X}=f4();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:G,subtle:G},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:G,subtle:G},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var C7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),z6=!1,C1=null,K6=!1;function S4(_){_.querySelector(".adaptive-card-notice")?.remove()}function T7(_,$,j="error"){S4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function f7(_,$=(j)=>_$(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function S7(_=($)=>_$($,null)){return($,j)=>{try{let Z=f7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function R7(_){if(K6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=S7(),K6=!0}async function v7(){if(z6)return;if(C1)return C1;return C1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{z6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),C1}function u7(){return globalThis.AdaptiveCards}function m7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function g7(_){return C7.has(_)}function v4(_){if(!Array.isArray(_))return[];return _.filter(m7)}function p7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function R4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>R4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${R4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function c7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return R4($);return typeof $==="string"?$:String($)}function h7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((q)=>Z(q));if(!N||typeof N!=="object")return N;let Y={...N};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=c7(Y.type,j[Y.id],Y);for(let[q,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[q]=Z(L);return Y};return Z(_)}function i7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function l7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function n7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=l7(_.completed_at||j?.submitted_at),G=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:G}}async function W6(_,$,j){if(!g7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await v7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=u7();R7(Z);let N=new Z.AdaptiveCard,G=f4();N.hostConfig=new Z.HostConfig(Y6());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:h7($.payload,Y);N.parse(q),N.onExecuteAction=(Q)=>{let V=p7(Q);if(j?.onAction)S4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let P=H instanceof Error?H.message:String(H||"Action failed.");T7(_,P||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",G.buttonTextColor);let X=n7($);if(X){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=X.label,Q.appendChild(V),X.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=X.detail,Q.appendChild(H)}_.appendChild(Q)}if(S4(_),_.appendChild(L),X)i7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function j1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>j1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${j1(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function q6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:j1(j)})).filter(($)=>$.value)}function d7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function u4(_){if(!Array.isArray(_))return[];return _.filter(d7)}function X6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=j1(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=q6(j).map(({key:G,value:Y})=>`${G}: ${Y}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function V6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=q6(_.data),Z=j.length>0?j.slice(0,2).map(({key:G,value:Y})=>`${G}: ${Y}`).join(", "):j1(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function o7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?L$($):null},{label:"Added",value:_?.created_at?X2(_.created_at):null}].filter((Z)=>Z.value)}function s7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let G=V$(_);return`/office-viewer/?url=${encodeURIComponent(G)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function L6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=R_(()=>$1($?.content_type,Z),[$?.content_type,Z]),G=N6(N),Y=R_(()=>Z6($?.content_type),[$?.content_type]),[q,L]=v(N==="text"),[X,Q]=v(""),[V,H]=v(null),P=A(null),f=R_(()=>o7($),[$]),m=R_(()=>s7(_,Z,N),[_,Z,N]),g=R_(()=>{if(!Y||!X)return"";return _$(X)},[Y,X]);return R(()=>{let k=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[j]),R(()=>{if(!P.current||!g)return;v$(P.current);return},[g]),R(()=>{let k=!1;async function M(){if(N!=="text"){L(!1),H(null);return}L(!0),H(null);try{let c=await U4(_);if(!k)Q(c)}catch{if(!k)H("Failed to load text preview.")}finally{if(!k)L(!1)}}return M(),()=>{k=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(k)=>{k.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${G}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${m&&B`
                            <a
                                href=${m}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(k)=>k.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${V$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(k)=>k.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${q&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!q&&V&&B`<div class="attachment-preview-state">${V}</div>`}
                    ${!q&&!V&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${V$(_)} alt=${Z} />
                    `}
                    ${!q&&!V&&(N==="pdf"||N==="office"||N==="drawio")&&m&&B`
                        <iframe class="attachment-preview-frame" src=${m} title=${Z}></iframe>
                    `}
                    ${!q&&!V&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!q&&!V&&N==="text"&&Y&&B`
                        <div
                            ref=${P}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:g}}
                        />
                    `}
                    ${!q&&!V&&N==="text"&&!Y&&B`
                        <pre class="attachment-preview-text">${X}</pre>
                    `}
                    ${!q&&!V&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${f.map((k)=>B`
                        <div class="attachment-preview-meta-item" key=${k.label}>
                            <span class="attachment-preview-meta-label">${k.label}</span>
                            <span class="attachment-preview-meta-value">${k.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function Q6({src:_,onClose:$}){return R(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function r7({mediaId:_,onPreview:$}){let[j,Z]=v(null);if(R(()=>{k2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",G=j.metadata?.size,Y=G?L$(G):"",L=$1(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${V$(_)} download=${N} class="file-attachment-main">
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
                        ${Y&&B`<span class="file-size">${Y}</span>`}
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
                onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function a7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=v(null);R(()=>{if(!Number.isFinite(j))return;k2(j).then(N).catch(()=>{});return},[j]);let G=Z?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?V$(j):null,L=$1(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${G}>
            ${Y?B`
                    <a href=${Y} download=${G} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${D$}
                            prefix="post"
                            label=${_.label}
                            title=${G}
                        />
                    </a>
                `:B`
                    <${D$}
                        prefix="post"
                        label=${_.label}
                        title=${G}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function T1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?X2(Z):null;return B`
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
    `}function t7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?L$(_.size):"",N=_.mime_type||"",G=$j(N),Y=q2(_.uri);return B`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${G}</span>
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
    `}function e7({block:_}){let[$,j]=v(!1),Z=_.uri||"Embedded resource",N=_.text||"",G=Boolean(_.data),Y=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${G&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&B`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),X=URL.createObjectURL(L),Q=document.createElement("a");Q.href=X,Q.download=Z.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function _j({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=b4(_,$),N=g8(_),G=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=Z?.title||_.title||_.name||"Generated widget",q=Z?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",X=(Q)=>{if(Q.preventDefault(),Q.stopPropagation(),!Z)return;j?.(Z)};return B`
        <div class="generated-widget-launch" onClick=${(Q)=>Q.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${G?` • ${String(G).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${q&&B`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${X}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${L}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function $j(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function jj({preview:_}){let $=q2(_.url),j=q2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function Zj(_,$){return typeof _==="string"?_:""}var Nj=1800,Gj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Yj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,zj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function Kj(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function Wj(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((G)=>G.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(G,Y)=>{let q=Y||"idle";if(G.dataset.copyState=q,q==="success")G.innerHTML=Yj,G.setAttribute("aria-label","Copied"),G.setAttribute("title","Copied"),G.classList.add("is-success"),G.classList.remove("is-error");else if(q==="error")G.innerHTML=zj,G.setAttribute("aria-label","Copy failed"),G.setAttribute("title","Copy failed"),G.classList.add("is-error"),G.classList.remove("is-success");else G.innerHTML=Gj,G.setAttribute("aria-label","Copy code"),G.setAttribute("title","Copy code"),G.classList.remove("is-success","is-error")};return $.forEach((G)=>{let Y=document.createElement("div");Y.className="post-code-block",G.parentNode?.insertBefore(Y,G),Y.appendChild(G);let q=document.createElement("button");q.type="button",q.className="post-code-copy-btn",N(q,"idle"),Y.appendChild(q);let L=async(X)=>{X.preventDefault(),X.stopPropagation();let V=G.querySelector("code")?.textContent||"",H=await Kj(V);N(q,H?"success":"error");let P=j.get(q);if(P)clearTimeout(P);let f=setTimeout(()=>{N(q,"idle"),j.delete(q)},Nj);j.set(q,f)};q.addEventListener("click",L),Z.push(()=>{q.removeEventListener("click",L);let X=j.get(q);if(X)clearTimeout(X);if(Y.parentNode)Y.parentNode.insertBefore(G,Y),Y.remove()})}),()=>{Z.forEach((G)=>G())}}function qj(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X))N.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function Xj(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X)){let V=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)N.push(V[1])}else if(!X.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function Vj(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1){let Q=j[X].trim();if((Q==="Images:"||Q==="Attachments:")&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X)){let Q=X.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let H=V[1],P=(V[2]||"").trim()||H;N.push({id:H,label:P,raw:Q})}else N.push({id:null,label:Q,raw:Q})}else if(!X.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function Lj(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Qj(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(Lj).sort((Q,V)=>V.length-Q.length),N=new RegExp(`(${Z.join("|")})`,"gi"),G=new RegExp(`^(${Z.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],X;while(X=q.nextNode())L.push(X);for(let Q of L){let V=Q.nodeValue;if(!V||!N.test(V)){N.lastIndex=0;continue}N.lastIndex=0;let H=Q.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let P=V.split(N).filter((m)=>m!=="");if(P.length===0)continue;let f=Y.createDocumentFragment();for(let m of P)if(G.test(m)){let g=Y.createElement("mark");g.className="search-highlight-term",g.textContent=m,f.appendChild(g)}else f.appendChild(Y.createTextNode(m));Q.parentNode.replaceChild(f,Q)}return Y.body.innerHTML}function B6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:G,agentAvatarUrl:Y,userName:q,userAvatarUrl:L,userAvatarBackground:X,onDelete:Q,isThreadReply:V,isThreadPrev:H,isThreadNext:P,isRemoving:f,highlightQuery:m,onFileRef:g,onOpenWidget:k}){let[M,c]=v(null),y=A(null),S=_.data,n=S.type==="agent_response",e=q||"You",o=n?G||o8:e,j_=n?T4(G,Y,!0):T4(e,L),i=typeof X==="string"?X.trim().toLowerCase():"",X_=!n&&j_.image&&(i==="clear"||i==="transparent"),d_=n&&Boolean(j_.image),g_=`background-color: ${X_||d_?"transparent":j_.color}`,d=S.content_meta,N_=Boolean(d?.truncated),__=Boolean(d?.preview),V_=N_&&!__,Y_=N_?{originalLength:Number.isFinite(d?.original_length)?d.original_length:S.content?S.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,L_=S.content_blocks||[],B_=S.media_ids||[],G_=Zj(S.content,S.link_previews),{content:u_,fileRefs:I_}=qj(G_),{content:y_,messageRefs:E_}=Xj(u_),{content:z0,attachments:K0}=Vj(y_);G_=z0;let W_=v4(L_),$_=u4(L_),F_=W_.length===1&&typeof W_[0]?.fallback_text==="string"?W_[0].fallback_text.trim():"",Z_=$_.length===1?X6($_[0]).trim():"",H_=Boolean(F_)&&G_?.trim()===F_||Boolean(Z_)&&G_?.trim()===Z_,M_=Boolean(G_)&&!V_&&!H_,a_=typeof m==="string"?m.trim():"",p_=R_(()=>{if(!G_||H_)return"";let C=_$(G_,j);return a_?Qj(C,a_):C},[G_,H_,a_]),o_=(C,a)=>{C.stopPropagation(),c(V$(a))},[c_,h_]=v(null),w_=(C)=>{h_(C)},k_=(C)=>{C.stopPropagation(),Q?.(_)},m_=(C,a)=>{let U_=new Set;if(!C||a.length===0)return{content:C,usedIds:U_};return{content:C.replace(/attachment:([^\s)"']+)/g,(s_,F0,f_,S0)=>{let $$=F0.replace(/^\/+/,""),b0=a.find((H0)=>H0.name&&H0.name.toLowerCase()===$$.toLowerCase()&&!U_.has(H0.id))||a.find((H0)=>!U_.has(H0.id));if(!b0)return s_;if(U_.add(b0.id),S0.slice(Math.max(0,f_-2),f_)==="](")return`/media/${b0.id}`;return b0.name||"attachment"}),usedIds:U_}},W0=[],P0=[],b_=[],y0=[],j0=[],C_=[],Z0=[],t_=0;if(L_.length>0)L_.forEach((C)=>{if(C?.type==="text"&&C.annotations)Z0.push(C.annotations);if(C?.type==="generated_widget")C_.push(C);else if(C?.type==="resource_link")y0.push(C);else if(C?.type==="resource")j0.push(C);else if(C?.type==="file"){let a=B_[t_++];if(a)P0.push(a),b_.push({id:a,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let a=B_[t_++];if(a){let U_=typeof C?.mime_type==="string"?C.mime_type:void 0;W0.push({id:a,annotations:C?.annotations,mimeType:U_}),b_.push({id:a,name:C?.name||C?.filename||C?.title})}}});else if(B_.length>0){let C=K0.length>0;B_.forEach((a,U_)=>{let x_=K0[U_]||null;if(b_.push({id:a,name:x_?.label||null}),C)P0.push(a);else W0.push({id:a,annotations:null})})}if(K0.length>0)K0.forEach((C)=>{if(!C?.id)return;let a=b_.find((U_)=>String(U_.id)===String(C.id));if(a&&!a.name)a.name=C.label});let{content:$0,usedIds:N0}=m_(G_,b_);G_=$0;let T_=W0.filter(({id:C})=>!N0.has(C)),O0=P0.filter((C)=>!N0.has(C)),T0=K0.length>0?K0.map((C,a)=>({id:C.id||`attachment-${a+1}`,label:C.label||`attachment-${a+1}`})):b_.map((C,a)=>({id:C.id,label:C.name||`attachment-${a+1}`})),A_=R_(()=>v4(L_),[L_]),e_=R_(()=>u4(L_),[L_]),f0=R_(()=>{return A_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[A_]);R(()=>{if(!y.current)return;return v$(y.current),Wj(y.current)},[p_]);let P_=A(null);return R(()=>{if(!P_.current||A_.length===0)return;let C=P_.current;C.innerHTML="";for(let a of A_){let U_=document.createElement("div");C.appendChild(U_),W6(U_,a,{onAction:async(x_)=>{if(x_.type==="Action.OpenUrl"){let s_=q2(x_.url||"");if(!s_)throw Error("Invalid URL");window.open(s_,"_blank","noopener,noreferrer");return}if(x_.type==="Action.Submit"){await X4({post_id:_.id,thread_id:S.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:x_.type,title:x_.title||"",data:x_.data}});return}console.warn("[post] unsupported adaptive card action:",x_.type,x_)}}).catch((x_)=>{console.error("[post] adaptive card render error:",x_),U_.textContent=a.fallback_text||"Card failed to render."})}},[f0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${n?"agent-post":""} ${V?"thread-reply":""} ${H?"thread-prev":""} ${P?"thread-next":""} ${f?"removing":""}" onClick=${$}>
            <div class="post-avatar ${n?"agent-avatar":""} ${j_.image?"has-image":""}" style=${g_}>
                ${j_.image?B`<img src=${j_.image} alt=${o} />`:j_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${k_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${o}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${j6(_.timestamp)}</a>
                </div>
                ${V_&&Y_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${e2(Y_.originalLength)} chars
                            ${Y_.maxLength?B` • Display limit: ${e2(Y_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${__&&Y_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${e2(Y_.maxLength)} of ${e2(Y_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(I_.length>0||E_.length>0||T0.length>0)&&B`
                    <div class="post-file-refs">
                        ${E_.map((C)=>{let a=(U_)=>{if(U_.preventDefault(),U_.stopPropagation(),N)N(C,_.chat_jid||null);else{let x_=document.getElementById("post-"+C);if(x_)x_.scrollIntoView({behavior:"smooth",block:"center"}),x_.classList.add("post-highlight"),setTimeout(()=>x_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${a}>
                                    <${D$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${I_.map((C)=>{let a=C.split("/").pop()||C;return B`
                                <${D$}
                                    prefix="post"
                                    label=${a}
                                    title=${C}
                                    onClick=${()=>g?.(C)}
                                />
                            `})}
                        ${T0.map((C)=>B`
                            <${a7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${w_}
                            />
                        `)}
                    </div>
                `}
                ${M_&&B`
                    <div 
                        ref=${y}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:p_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let a=C.target.dataset.hashtag;if(a)j?.(a)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),c(C.target.src)}}
                    />
                `}
                ${A_.length>0&&B`
                    <div ref=${P_} class="post-adaptive-cards" />
                `}
                ${e_.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${e_.map((C,a)=>{let U_=V6(C),x_=`${C.card_id}-${a}`;return B`
                                <div key=${x_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${U_.title}</span>
                                        </div>
                                    </div>
                                    ${U_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${U_.fields.map((s_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${s_.key}: ${s_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${s_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${s_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${X2(U_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${C_.length>0&&B`
                    <div class="generated-widget-launches">
                        ${C_.map((C,a)=>B`
                            <${_j}
                                key=${C.widget_id||C.id||`${_.id}-widget-${a}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${k}
                            />
                        `)}
                    </div>
                `}
                ${Z0.length>0&&B`
                    ${Z0.map((C,a)=>B`
                        <${T1} key=${a} annotations=${C} />
                    `)}
                `}
                ${T_.length>0&&B`
                    <div class="media-preview">
                        ${T_.map(({id:C,mimeType:a})=>{let x_=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?V$(C):B4(C);return B`
                                <img 
                                    key=${C} 
                                    src=${x_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(s_)=>o_(s_,C)}
                                />
                            `})}
                    </div>
                `}
                ${T_.length>0&&B`
                    ${T_.map(({annotations:C},a)=>B`
                        ${C&&B`<${T1} key=${a} annotations=${C} />`}
                    `)}
                `}
                ${O0.length>0&&B`
                    <div class="file-attachments">
                        ${O0.map((C)=>B`
                            <${r7} key=${C} mediaId=${C} onPreview=${w_} />
                        `)}
                    </div>
                `}
                ${y0.length>0&&B`
                    <div class="resource-links">
                        ${y0.map((C,a)=>B`
                            <div key=${a}>
                                <${t7} block=${C} />
                                <${T1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${j0.length>0&&B`
                    <div class="resource-embeds">
                        ${j0.map((C,a)=>B`
                            <div key=${a}>
                                <${e7} block=${C} />
                                <${T1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${S.link_previews.map((C,a)=>B`
                            <${jj} key=${a} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${M&&B`<${Q6} src=${M} onClose=${()=>c(null)} />`}
        ${c_&&B`
            <${L6}
                mediaId=${c_.mediaId}
                info=${c_.info}
                onClose=${()=>h_(null)}
            />
        `}
    `}function U6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:G,onScrollToMessage:Y,onFileRef:q,onOpenWidget:L,emptyMessage:X,timelineRef:Q,agents:V,user:H,onDeletePost:P,reverse:f=!0,removingPostIds:m,searchQuery:g}){let[k,M]=v(!1),c=A(null),y=typeof IntersectionObserver<"u",S=I(async()=>{if(!j||!$||k)return;M(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{M(!1)}},[$,k,j]),n=I((d)=>{let{scrollTop:N_,scrollHeight:__,clientHeight:V_}=d.target,Y_=f?__-V_-N_:N_,L_=Math.max(300,V_);if(Y_<L_)S()},[f,S]);R(()=>{if(!y)return;let d=c.current,N_=Q?.current;if(!d||!N_)return;let __=300,V_=new IntersectionObserver((Y_)=>{for(let L_ of Y_){if(!L_.isIntersecting)continue;S()}},{root:N_,rootMargin:`${__}px 0px ${__}px 0px`,threshold:0});return V_.observe(d),()=>V_.disconnect()},[y,$,j,Q,S]);let e=A(S);if(e.current=S,R(()=>{if(y)return;if(!Q?.current)return;let{scrollTop:d,scrollHeight:N_,clientHeight:__}=Q.current,V_=f?N_-__-d:d,Y_=Math.max(300,__);if(V_<Y_)e.current?.()},[y,_,$,f,Q]),R(()=>{if(!Q?.current)return;if(!$||k)return;let{scrollTop:d,scrollHeight:N_,clientHeight:__}=Q.current,V_=f?N_-__-d:d,Y_=Math.max(300,__);if(N_<=__+1||V_<Y_)e.current?.()},[_,$,k,f,Q]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${Q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let o=_.slice().sort((d,N_)=>d.id-N_.id),j_=(d)=>{let N_=d?.data?.thread_id;if(N_===null||N_===void 0||N_==="")return null;let __=Number(N_);return Number.isFinite(__)?__:null},i=new Map;for(let d=0;d<o.length;d+=1){let N_=o[d],__=Number(N_?.id),V_=j_(N_);if(V_!==null){let Y_=i.get(V_)||{anchorIndex:-1,replyIndexes:[]};Y_.replyIndexes.push(d),i.set(V_,Y_)}else if(Number.isFinite(__)){let Y_=i.get(__)||{anchorIndex:-1,replyIndexes:[]};Y_.anchorIndex=d,i.set(__,Y_)}}let X_=new Map;for(let[d,N_]of i.entries()){let __=new Set;if(N_.anchorIndex>=0)__.add(N_.anchorIndex);for(let V_ of N_.replyIndexes)__.add(V_);X_.set(d,Array.from(__).sort((V_,Y_)=>V_-Y_))}let d_=o.map((d,N_)=>{let __=j_(d);if(__===null)return{hasThreadPrev:!1,hasThreadNext:!1};let V_=X_.get(__);if(!V_||V_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Y_=V_.indexOf(N_);if(Y_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Y_>0,hasThreadNext:Y_<V_.length-1}}),g_=B`<div class="timeline-sentinel" ref=${c}></div>`;return B`
        <div class="timeline ${f?"reverse":"normal"}" ref=${Q} onScroll=${n}>
            <div class="timeline-content">
                ${f?g_:null}
                ${o.map((d,N_)=>{let __=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),V_=m?.has?.(d.id),Y_=d_[N_]||{};return B`
                    <${B6}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${__}
                        isThreadPrev=${Y_.hasThreadPrev}
                        isThreadNext=${Y_.hasThreadNext}
                        isRemoving=${V_}
                        highlightQuery=${g}
                        agentName=${s8(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${r8(d.data?.agent_id,V||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>Z?.(d)}
                        onHashtagClick=${N}
                        onMessageRef=${G}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${L}
                        onDelete=${P}
                    />
                `})}
                ${f?null:g_}
            </div>
        </div>
    `}class O6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let G=N===!0?0:typeof N==="number"?N:0;if(G>j)j=G,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var r_=new O6;var f1=null,m4=null;function Bj(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function F6(){if(m4)return Promise.resolve(m4);if(!f1)f1=import(Bj()).then((_)=>{return m4=_,_}).catch((_)=>{throw f1=null,_});return f1}class H6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await F6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var g4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new H6(_,$)}};function p4(){F6().catch(()=>{})}var h4="piclaw://terminal";var Uj={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Oj={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},S1=null,c4=null;function Fj(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Hj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,G)=>{let Y=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!Fj(Y))return $(N,G);if(N instanceof Request)return $(new Request(j,N));return $(j,G)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Dj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!S1)S1=Hj(()=>Promise.resolve($.init?.())).catch((j)=>{throw S1=null,j});return await S1,$}async function Jj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!c4)c4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await c4}async function yj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Ej(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function kj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function u$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Aj(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function D6(){let _=kj(),$=_?Oj:Uj,j=u$("--bg-primary",_?"#000000":"#ffffff"),Z=u$("--text-primary",_?"#e7e9ea":"#0f1419"),N=u$("--text-secondary",_?"#71767b":"#536471"),G=u$("--accent-color","#1d9bf0"),Y=u$("--danger-color",_?"#ff7b72":"#cf222e"),q=u$("--success-color",_?"#7ee787":"#1a7f37"),L=u$("--bg-hover",_?"#1d1f23":"#e8ebed"),X=u$("--border-color",_?"#2f3336":"#eff3f4"),Q=u$("--accent-soft-strong",Aj(G,_?"47":"33"));return{background:j,foreground:Z,cursor:G,cursorAccent:j,selectionBackground:Q,selectionForeground:Z,black:L,red:Y,green:q,yellow:$.yellow,blue:G,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class i4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,G=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(G)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Dj();if(await Jj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:D6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=D6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await yj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Ej($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var l4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new i4(_,$)}},n4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new i4(_,$)}};function s$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function wj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,G=Z?.[2]||"",Y=Z?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),X=N.startsWith("/")?N:`${q?`${q}/`:""}${N}`,Q=[];for(let H of X.split("/")){if(!H||H===".")continue;if(H===".."){if(Q.length>0)Q.pop();continue}Q.push(H)}let V=Q.join("/");return`${D1(V)}${G}${Y}`}function Z1(_){return _?.preview||null}function Pj(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function xj(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function Ij(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${s$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${s$(L$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${s$(X2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${s$(xj($))}</span>`),Z.push(`<span><strong>extension:</strong> ${s$(Pj(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${s$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function Mj(_){let $=Z1(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=Ij(_,$);if($.kind==="image"){let Z=$.url||($.path?D1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${s$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=_$($.text||"",null,{rewriteImageSrc:(N)=>wj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${s$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class d4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=Mj(this.context)}getContent(){let _=Z1(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Z1(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var o4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Z1(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new d4(_,$)}},s4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Z1(_)||_?.path?1:!1},mount(_,$){return new d4(_,$)}};var bj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),Cj={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},Tj={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function y6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function J6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class E6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=y6(j),G=Tj[N]||"\uD83D\uDCC4",Y=Cj[N]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${G}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${J6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${J6(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let L=q.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class k6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,G=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var r4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=y6(_?.path);if(!$||!bj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new E6(_,$);return new k6(_,$)}};var fj=/\.(csv|tsv)$/i;function A6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class w6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${A6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${A6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let Y=G.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class P6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!fj.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new w6(_,$);return new P6(_,$)}};var Sj=/\.pdf$/i;function Rj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class x6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Rj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#pdf-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Sj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new x6(_,$);return new I6(_,$)}};var vj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function e4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${e4(N)}" alt="${e4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${e4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let Y=G.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!vj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new M6(_,$);return new b6(_,$)}};var uj=/\.(mp4|m4v|mov|webm|ogv)$/i;function mj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class C6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${mj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#video-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class T6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!uj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new C6(_,$);return new T6(_,$)}};function gj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function pj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var j3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function f6(_){let $=String(_||"").trim();return $?$:j3}function cj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function hj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function ij(_,$="*"){try{let j=(G)=>{let Y=_.parent||_.opener;if(!Y)return!1;return Y.postMessage(JSON.stringify({event:"workspace-export",...G}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let G=Z.prototype.saveData;Z.prototype.saveData=function(Y,q,L,X,Q,V){try{if(Y&&L!=null&&j({filename:Y,format:q,data:L,mimeType:X,base64Encoded:Boolean(Q),defaultMode:V}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return G.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let G=N.prototype.exportFile;N.prototype.exportFile=function(Y,q,L,X,Q,V){try{if(q&&j({filename:q,data:Y,mimeType:L,base64Encoded:Boolean(X),mode:Q,folderId:V}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return G.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function S6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${hj(j)}`}class R6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${pj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#drawio-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class v6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=cj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let G=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(ij(this.iframe.contentWindow))return;setTimeout(G,250)};G()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=j3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await S6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await S6(_,"image/png");else this.xmlData=f6(await _.text());else if(_.status===404)this.xmlData=j3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?f6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var Z3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!gj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new R6(_,$);return new v6(_,$)}};class u6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var n_=new u6;var R1="workspaceExplorerScale",lj=["compact","default","comfortable"],nj=new Set(lj),dj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function m6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return nj.has(j)?j:$}function N3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function oj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function sj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function G3(_={}){let $=oj(_),j=_.stored?m6(_.stored,$):$;return sj(j,_)}function g6(_){return dj[m6(_)]}var rj=60000,i6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function l6(_,$,j,Z=0,N=[]){if(!j&&i6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let G of _.children)l6(G,$,j,Z+1,N);return N}function p6(_,$,j){if(!_)return"";let Z=[],N=(G)=>{if(!j&&i6(G))return;if(Z.push(G.type==="dir"?`d:${G.path}`:`f:${G.path}`),G.children&&$?.has(G.path))for(let Y of G.children)N(Y)};return N(_),Z.join("|")}function W3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((q)=>[q?.path,q])):new Map,G=!j||j.length!==Z.length,Y=Z.map((q)=>{let L=W3(N.get(q.path),q);if(L!==N.get(q.path))G=!0;return L});return G?{...$,children:Y}:_}function z3(_,$,j){if(!_)return _;if(_.path===$)return W3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((G)=>{let Y=z3(G,$,j);if(Y!==G)Z=!0;return Y});return Z?{..._,children:N}:_}var n6=4,Y3=14,aj=8,tj=16;function d6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=d6(Z);return _.__bytes=j,j}function o6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=n6)return Z;let N=Array.isArray(_.children)?_.children:[],G=[];for(let q of N){let L=Math.max(0,Number(q?.__bytes??q?.size??0));if(L<=0)continue;if(q.type==="dir")G.push({kind:"dir",node:q,size:L});else G.push({kind:"file",name:q.name,path:q.path,size:L})}G.sort((q,L)=>L.size-q.size);let Y=G;if(G.length>Y3){let q=G.slice(0,Y3-1),L=G.slice(Y3-1),X=L.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:X}),Y=q}return Z.children=Y.map((q)=>{if(q.kind==="dir")return o6(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),Z}function c6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function s6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),G=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${G}%)`}function v1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function q3(_,$,j,Z,N,G){let Y=Math.PI*2-0.0001,q=G-N>Y?N+Y:G,L=v1(_,$,Z,N),X=v1(_,$,Z,q),Q=v1(_,$,j,q),V=v1(_,$,j,N),H=q-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var r6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function a6(_,$,j){let Z=[],N=[],G=Math.max(0,Number($)||0),Y=(q,L,X,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let H=Math.max(0,Number(q.size)||0);if(H<=0)return;let P=X-L,f=L;V.forEach((m,g)=>{let k=Math.max(0,Number(m.size)||0);if(k<=0)return;let M=k/H,c=f,y=g===V.length-1?X:f+P*M;if(f=y,y-c<0.003)return;let S=r6[Q];if(S){let n=s6(c,Q,j);if(Z.push({key:m.path,path:m.path,label:m.name,size:k,color:n,depth:Q,startAngle:c,endAngle:y,innerRadius:S[0],outerRadius:S[1],d:q3(120,120,S[0],S[1],c,y)}),Q===1)N.push({key:m.path,name:m.name,size:k,pct:G>0?k/G*100:0,color:n})}if(Q<n6)Y(m,c,y,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function K3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=K3(Z,$);if(N)return N}return null}function t6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=r6[1];if(!N)return{segments:[],legend:[]};let G=-Math.PI/2,Y=Math.PI*3/2,q=s6(G,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:q,depth:1,startAngle:G,endAngle:Y,innerRadius:N[0],outerRadius:N[1],d:q3(120,120,N[0],N[1],G,Y)}],legend:[{key:X,name:_,size:j,pct:100,color:q}]}}function h6(_,$=!1,j=!1){if(!_)return null;let Z=d6(_),N=o6(_,0),G=N.size||Z,{segments:Y,legend:q}=a6(N,G,j);if(!Y.length&&G>0){let L=t6("[files]",N.path,G,j);Y=L.segments,q=L.legend}return{root:N,totalSize:G,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function ej({payload:_}){if(!_)return null;let[$,j]=v(null),[Z,N]=v(_?.root?.path||"."),[G,Y]=v(()=>[_?.root?.path||"."]),[q,L]=v(!1);R(()=>{let i=_?.root?.path||".";N(i),Y([i]),j(null)},[_?.root?.path,_?.totalSize]),R(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let X=R_(()=>{return K3(_.root,Z)||_.root},[_?.root,Z]),Q=X?.size||_.totalSize||0,{segments:V,legend:H}=R_(()=>{let i=a6(X,Q,_.isDarkTheme);if(i.segments.length>0)return i;if(Q<=0)return i;let X_=X?.children?.length?"Total":"[files]";return t6(X_,X?.path||_?.root?.path||".",Q,_.isDarkTheme)},[X,Q,_.isDarkTheme,_?.root?.path]),[P,f]=v(V),m=A(new Map),g=A(0);R(()=>{let i=m.current,X_=new Map(V.map((N_)=>[N_.key,N_])),d_=performance.now(),g_=220,d=(N_)=>{let __=Math.min(1,(N_-d_)/220),V_=__*(2-__),Y_=V.map((L_)=>{let G_=i.get(L_.key)||{startAngle:L_.startAngle,endAngle:L_.startAngle,innerRadius:L_.innerRadius,outerRadius:L_.innerRadius},u_=(K0,W_)=>K0+(W_-K0)*V_,I_=u_(G_.startAngle,L_.startAngle),y_=u_(G_.endAngle,L_.endAngle),E_=u_(G_.innerRadius,L_.innerRadius),z0=u_(G_.outerRadius,L_.outerRadius);return{...L_,d:q3(120,120,E_,z0,I_,y_)}});if(f(Y_),__<1)g.current=requestAnimationFrame(d)};if(g.current)cancelAnimationFrame(g.current);return g.current=requestAnimationFrame(d),m.current=X_,()=>{if(g.current)cancelAnimationFrame(g.current)}},[V]);let k=P.length?P:V,M=Q>0?L$(Q):"0 B",c=X?.name||"",S=(c&&c!=="."?c:"Total")||"Total",n=M,e=G.length>1,o=(i)=>{if(!i?.path)return;let X_=K3(_.root,i.path);if(!X_||!Array.isArray(X_.children)||X_.children.length===0)return;Y((d_)=>[...d_,X_.path]),N(X_.path),j(null)},j_=()=>{if(!e)return;Y((i)=>{let X_=i.slice(0,-1);return N(X_[X_.length-1]||_?.root?.path||"."),X_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
                data-segments=${k.length}
                data-base-size=${Q}>
                ${k.map((i)=>B`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(i)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(i)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>o(i)}
                    >
                        <title>${i.label} — ${L$(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
                    onClick=${j_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${S}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${n}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${L$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function _Z({mediaId:_}){let[$,j]=v(null);if(R(()=>{if(!_)return;k2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?L$($.metadata.size):"";return B`
        <a href=${V$(_)} download=${Z} class="file-attachment"
            onClick=${(G)=>G.stopPropagation()}>
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
    `}function e6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:G,terminalVisible:Y=!1}){let[q,L]=v(null),[X,Q]=v(new Set(["."])),[V,H]=v(null),[P,f]=v(null),[m,g]=v(""),[k,M]=v(null),[c,y]=v(null),[S,n]=v(!0),[e,o]=v(!1),[j_,i]=v(null),[X_,d_]=v(()=>A2("workspaceShowHidden",!1)),[g_,d]=v(!1),[N_,__]=v(null),[V_,Y_]=v(null),[L_,B_]=v(null),[G_,u_]=v(!1),[I_,y_]=v(null),[E_,z0]=v(()=>c6()),[K0,W_]=v(()=>G3({stored:e0(R1),...N3()})),[$_,F_]=v(!1),Z_=A(X),H_=A(""),M_=A(null),a_=A(0),p_=A(new Set),o_=A(null),c_=A(new Map),h_=A(_),w_=A(Z),k_=A(null),m_=A(null),W0=A(null),P0=A(null),b_=A(null),y0=A(null),j0=A("."),C_=A(null),Z0=A({path:null,dragging:!1,startX:0,startY:0}),t_=A({path:null,dragging:!1,startX:0,startY:0}),$0=A({path:null,timer:0}),N0=A(!1),T_=A(0),O0=A(new Map),T0=A(null),A_=A(null),e_=A(null),f0=A(null),P_=A(null),C=A(null),a=A(X_),U_=A($),x_=A(j??$),s_=A(0),F0=A(L_),f_=A(g_),S0=A(N_),$$=A(null),j$=A({x:0,y:0}),b0=A(0),I$=A(null),H0=A(V),i0=A(P),l0=A(null),R0=A(null),Z$=A(k);h_.current=_,w_.current=Z,R(()=>{Z_.current=X},[X]),R(()=>{a.current=X_},[X_]),R(()=>{U_.current=$},[$]),R(()=>{x_.current=j??$},[j,$]),R(()=>{F0.current=L_},[L_]),R(()=>{if(typeof window>"u")return;let U=()=>{W_(G3({stored:e0(R1),...N3()}))};U();let J=()=>U(),x=()=>U(),z=(u)=>{if(!u||u.key===null||u.key===R1)U()};window.addEventListener("resize",J),window.addEventListener("focus",x),window.addEventListener("storage",z);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),b=(u,r)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",r);else if(u.addListener)u.addListener(r)},p=(u,r)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",r);else if(u.removeListener)u.removeListener(r)};return b(O,J),b(D,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",x),window.removeEventListener("storage",z),p(O,J),p(D,J)}},[]),R(()=>{let U=(J)=>{let x=J?.detail?.path;if(!x)return;let z=x.split("/"),O=[];for(let D=1;D<z.length;D++)O.push(z.slice(0,D).join("/"));if(O.length)Q((D)=>{let b=new Set(D);b.add(".");for(let p of O)b.add(p);return b});H(x),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(x)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",U),()=>window.removeEventListener("workspace-reveal-path",U)},[]),R(()=>{f_.current=g_},[g_]),R(()=>{S0.current=N_},[N_]),R(()=>{H0.current=V},[V]),R(()=>{i0.current=P},[P]),R(()=>{Z$.current=k},[k]),R(()=>{if(typeof window>"u"||typeof document>"u")return;let U=()=>z0(c6());U();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),x=()=>U();if(J?.addEventListener)J.addEventListener("change",x);else if(J?.addListener)J.addListener(x);let z=typeof MutationObserver<"u"?new MutationObserver(()=>U()):null;if(z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",x);else if(J?.removeListener)J.removeListener(x);z?.disconnect()}},[]),R(()=>{if(!P)return;let U=b_.current;if(!U)return;let J=requestAnimationFrame(()=>{try{U.focus(),U.select()}catch{}});return()=>cancelAnimationFrame(J)},[P]),R(()=>{if(!$_)return;let U=(x)=>{let z=x?.target;if(!(z instanceof Element))return;if(P_.current?.contains(z))return;if(C.current?.contains(z))return;F_(!1)},J=(x)=>{if(x?.key==="Escape")F_(!1),C.current?.focus?.()};return document.addEventListener("mousedown",U),document.addEventListener("touchstart",U,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("touchstart",U),document.removeEventListener("keydown",J)}},[$_]);let Q2=async(U)=>{o(!0),M(null),y(null);try{let J=await O4(U,20000);M(J)}catch(J){M({error:J.message||"Failed to load preview"})}finally{o(!1)}};k_.current=Q2;let B2=async()=>{if(!U_.current)return;try{let U=await o2("",1,a.current),J=p6(U.root,Z_.current,a.current);if(J===H_.current){n(!1);return}if(H_.current=J,M_.current=U.root,!a_.current)a_.current=requestAnimationFrame(()=>{a_.current=0,L((x)=>W3(x,M_.current)),n(!1)})}catch(U){i(U.message||"Failed to load workspace"),n(!1)}},E0=async(U)=>{if(!U)return;if(p_.current.has(U))return;p_.current.add(U);try{let J=await o2(U,1,a.current);L((x)=>z3(x,U,J.root))}catch(J){i(J.message||"Failed to load workspace")}finally{p_.current.delete(U)}};m_.current=E0;let D0=I(()=>{let U=V;if(!U)return".";let J=c_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let x=U.split("/");return x.pop(),x.join("/")||"."},[V]),G0=I((U)=>{let J=U?.closest?.(".workspace-row");if(!J)return null;let x=J.dataset.path,z=J.dataset.type;if(!x)return null;if(z==="dir")return x;if(x.includes("/")){let O=x.split("/");return O.pop(),O.join("/")||"."}return"."},[]),p0=I((U)=>{return G0(U?.target||null)},[G0]),Y0=I((U)=>{F0.current=U,B_(U)},[]),x0=I(()=>{let U=$0.current;if(U?.timer)clearTimeout(U.timer);$0.current={path:null,timer:0}},[]),N$=I((U)=>{if(!U||U==="."){x0();return}let J=c_.current?.get(U);if(!J||J.type!=="dir"){x0();return}if(Z_.current?.has(U)){x0();return}if($0.current?.path===U)return;x0();let x=setTimeout(()=>{$0.current={path:null,timer:0},m_.current?.(U),Q((z)=>{let O=new Set(z);return O.add(U),O})},600);$0.current={path:U,timer:x}},[x0]),M$=I((U,J)=>{if(j$.current={x:U,y:J},b0.current)return;b0.current=requestAnimationFrame(()=>{b0.current=0;let x=$$.current;if(!x)return;let z=j$.current;x.style.transform=`translate(${z.x+12}px, ${z.y+12}px)`})},[]),r$=I((U)=>{if(!U)return;let x=(c_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!x)return;Y_({path:U,label:x})},[]),m$=I(()=>{if(Y_(null),b0.current)cancelAnimationFrame(b0.current),b0.current=0;if($$.current)$$.current.style.transform="translate(-9999px, -9999px)"},[]),a$=I((U)=>{if(!U)return".";let J=c_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let x=U.split("/");return x.pop(),x.join("/")||"."},[]),n0=I(()=>{f(null),g("")},[]),t$=I((U)=>{if(!U)return;let x=(c_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!x||U===".")return;f(U),g(x)},[]),e$=I(async()=>{let U=i0.current;if(!U)return;let J=(m||"").trim();if(!J){n0();return}let x=c_.current?.get(U),z=(x?.name||U.split("/").pop()||U).trim();if(J===z){n0();return}try{let D=(await D4(U,J))?.path||U,b=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(n0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:U,newPath:D,type:x?.type||"file"}})),x?.type==="dir")Q((p)=>{let u=new Set;for(let r of p)if(r===U)u.add(D);else if(r.startsWith(`${U}/`))u.add(`${D}${r.slice(U.length)}`);else u.add(r);return u});if(H(D),x?.type==="dir")M(null),o(!1),y(null);else k_.current?.(D);m_.current?.(b)}catch(O){i(O?.message||"Failed to rename file")}},[n0,m]),G$=I(async(U)=>{let z=U||".";for(let O=0;O<50;O+=1){let b=`untitled${O===0?"":`-${O}`}.md`;try{let u=(await H4(z,b,""))?.path||(z==="."?b:`${z}/${b}`);if(z&&z!==".")Q((r)=>new Set([...r,z]));H(u),i(null),m_.current?.(z),k_.current?.(u);return}catch(p){if(p?.status===409||p?.code==="file_exists")continue;i(p?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),B$=I((U)=>{if(U?.stopPropagation?.(),G_)return;let J=a$(H0.current);G$(J)},[G_,a$,G$]);R(()=>{if(typeof window>"u")return;let U=(J)=>{let x=J?.detail?.updates||[];if(!Array.isArray(x)||x.length===0)return;L((p)=>{let u=p;for(let r of x){if(!r?.root)continue;if(!u||r.path==="."||!r.path)u=r.root;else u=z3(u,r.path,r.root)}if(u)H_.current=p6(u,Z_.current,a.current);return n(!1),u});let z=H0.current;if(Boolean(z)&&x.some((p)=>{let u=p?.path||"";if(!u||u===".")return!0;return z===u||z.startsWith(`${u}/`)||u.startsWith(`${z}/`)}))O0.current.clear();if(!z||!Z$.current)return;let D=c_.current?.get(z);if(D&&D.type==="dir")return;if(x.some((p)=>{let u=p?.path||"";if(!u||u===".")return!0;return z===u||z.startsWith(`${u}/`)}))k_.current?.(z)};return window.addEventListener("workspace-update",U),()=>window.removeEventListener("workspace-update",U)},[]),o_.current=B2;let d0=A(()=>{if(typeof window>"u")return;let U=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=x_.current??U_.current,x=document.visibilityState!=="hidden"&&(J||U.matches&&U_.current);s2(x,a.current).catch(()=>{})}).current,X0=A(0),i_=A(()=>{if(X0.current)clearTimeout(X0.current);X0.current=setTimeout(()=>{X0.current=0,d0()},250)}).current;R(()=>{if(U_.current)o_.current?.();i_()},[$,j]),R(()=>{o_.current(),d0();let U=setInterval(()=>o_.current(),rj),J=w2("previewHeight",null),x=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(T_.current=x,W0.current)W0.current.style.setProperty("--preview-height",`${x}px`);let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>i_();if(z.addEventListener)z.addEventListener("change",O);else if(z.addListener)z.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(U),a_.current)cancelAnimationFrame(a_.current),a_.current=0;if(z.removeEventListener)z.removeEventListener("change",O);else if(z.removeListener)z.removeListener(O);if(document.removeEventListener("visibilitychange",O),X0.current)clearTimeout(X0.current),X0.current=0;if(C_.current)clearTimeout(C_.current),C_.current=null;s2(!1,a.current).catch(()=>{})}},[]);let U$=R_(()=>l6(q,X,X_),[q,X,X_]),J$=R_(()=>new Map(U$.map((U)=>[U.node.path,U.node])),[U$]),g$=R_(()=>g6(K0),[K0]);c_.current=J$;let D_=(V?c_.current.get(V):null)?.type==="dir";R(()=>{if(!V||!D_){y_(null),T0.current=null,A_.current=null;return}let U=V,J=`${X_?"hidden":"visible"}:${V}`,x=O0.current,z=x.get(J);if(z?.root){x.delete(J),x.set(J,z);let b=h6(z.root,Boolean(z.truncated),E_);if(b)T0.current=b,A_.current=V,y_({loading:!1,error:null,payload:b});return}let O=T0.current,D=A_.current;y_({loading:!0,error:null,payload:D===V?O:null}),o2(V,aj,X_).then((b)=>{if(H0.current!==U)return;let p={root:b?.root,truncated:Boolean(b?.truncated)};x.delete(J),x.set(J,p);while(x.size>tj){let r=x.keys().next().value;if(!r)break;x.delete(r)}let u=h6(p.root,p.truncated,E_);T0.current=u,A_.current=V,y_({loading:!1,error:null,payload:u})}).catch((b)=>{if(H0.current!==U)return;y_({loading:!1,error:b?.message||"Failed to load folder size chart",payload:D===V?O:null})})},[V,D_,X_,E_]);let Y$=Boolean(k&&k.kind==="text"&&!D_&&(!k.size||k.size<=262144)),y$=Y$?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",b$=Boolean(V&&V!=="."),o0=Boolean(V&&!D_),C$=Boolean(V&&!D_),s0=V&&D_?J1(V,X_):null,v0=I(()=>F_(!1),[]),V0=I(async(U)=>{v0();try{await U?.()}catch{}},[v0]);R(()=>{let U=e_.current;if(f0.current)f0.current.dispose(),f0.current=null;if(!U)return;if(U.innerHTML="",!V||D_||!k||k.error)return;let J={path:V,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},x=r_.resolve(J)||r_.get("workspace-preview-default");if(!x)return;let z=x.mount(U,J);return f0.current=z,()=>{if(f0.current===z)z.dispose(),f0.current=null;U.innerHTML=""}},[V,D_,k]);let u0=(U)=>{let J=U?.target;if(J instanceof Element)return J;return J?.parentElement||null},r0=(U)=>{return Boolean(U?.closest?.(".workspace-node-icon, .workspace-label-text"))},C0=A((U)=>{if(R0.current)clearTimeout(R0.current),R0.current=null;let x=u0(U)?.closest?.("[data-path]");if(!x)return;let z=x.dataset.path;if(x.dataset.type==="dir"||!z)return;if(i0.current===z)n0();w_.current?.(z)}).current,p$=A((U)=>{if(N0.current){N0.current=!1;return}let J=u0(U),x=J?.closest?.("[data-path]");if(P0.current?.focus?.(),!x)return;let z=x.dataset.path,O=x.dataset.type,D=Boolean(J?.closest?.(".workspace-caret")),b=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),p=H0.current===z,u=i0.current;if(u){if(u===z)return;n0()}let r=O==="file"&&l0.current===z&&!D&&!b;if(p&&!D&&!b&&z!=="."&&!r){if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=null,t$(z)},350);return}if(O==="dir"){if(l0.current=null,H(z),M(null),y(null),o(!1),!Z_.current.has(z))m_.current?.(z);if(p&&!D)return;Q((k0)=>{let O_=new Set(k0);if(O_.has(z))O_.delete(z);else O_.add(z);return O_})}else{l0.current=null,H(z);let Q_=c_.current.get(z);if(Q_)h_.current?.(Q_.path,Q_);k_.current?.(z)}}).current,a0=A(()=>{H_.current="",o_.current(),Array.from(Z_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>m_.current?.(J))}).current,c0=A(()=>{l0.current=null,H(null),M(null),y(null),o(!1)}).current,c$=A(()=>{d_((U)=>{let J=!U;if(typeof window<"u")l_("workspaceShowHidden",String(J));return a.current=J,s2(!0,J).catch(()=>{}),H_.current="",o_.current?.(),Array.from(Z_.current||[]).filter((z)=>z&&z!==".").forEach((z)=>m_.current?.(z)),J})}).current,_2=A((U)=>{if(u0(U)?.closest?.("[data-path]"))return;c0()}).current,T$=I(async(U)=>{if(!U)return;let J=U.split("/").pop()||U;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await y4(U);let z=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(H0.current===U)c0();m_.current?.(z),i(null)}catch(z){M((O)=>({...O||{},error:z.message||"Failed to delete file"}))}},[c0]),J0=I((U)=>{let J=P0.current;if(!J||!U||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(U)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),O$=I((U)=>{let J=U$;if(!J||J.length===0)return;let x=V?J.findIndex((z)=>z.node.path===V):-1;if(U.key==="ArrowDown"){U.preventDefault();let z=Math.min(x+1,J.length-1),O=J[z];if(!O)return;if(H(O.node.path),O.node.type!=="dir")h_.current?.(O.node.path,O.node),k_.current?.(O.node.path);else M(null),o(!1),y(null);J0(O.node.path);return}if(U.key==="ArrowUp"){U.preventDefault();let z=x<=0?0:x-1,O=J[z];if(!O)return;if(H(O.node.path),O.node.type!=="dir")h_.current?.(O.node.path,O.node),k_.current?.(O.node.path);else M(null),o(!1),y(null);J0(O.node.path);return}if(U.key==="ArrowRight"&&x>=0){let z=J[x];if(z?.node?.type==="dir"&&!X.has(z.node.path))U.preventDefault(),m_.current?.(z.node.path),Q((O)=>new Set([...O,z.node.path]));return}if(U.key==="ArrowLeft"&&x>=0){let z=J[x];if(z?.node?.type==="dir"&&X.has(z.node.path))U.preventDefault(),Q((O)=>{let D=new Set(O);return D.delete(z.node.path),D});return}if(U.key==="Enter"&&x>=0){U.preventDefault();let z=J[x];if(!z)return;let O=z.node.path;if(z.node.type==="dir"){if(!Z_.current.has(O))m_.current?.(O);Q((b)=>{let p=new Set(b);if(p.has(O))p.delete(O);else p.add(O);return p}),M(null),y(null),o(!1)}else h_.current?.(O,z.node),k_.current?.(O);return}if((U.key==="Delete"||U.key==="Backspace")&&x>=0){let z=J[x];if(!z||z.node.type==="dir")return;U.preventDefault(),T$(z.node.path);return}if(U.key==="Escape")U.preventDefault(),c0()},[c0,T$,X,U$,J0,V]),E$=I((U)=>{let J=u0(U),x=J?.closest?.(".workspace-row");if(!x)return;let z=x.dataset.type,O=x.dataset.path;if(!O||O===".")return;if(i0.current===O)return;let D=U?.touches?.[0];if(!D)return;if(Z0.current={path:r0(J)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},z!=="file")return;if(C_.current)clearTimeout(C_.current);C_.current=setTimeout(()=>{if(C_.current=null,Z0.current?.dragging)return;T$(O)},600)},[T$]),k$=I(()=>{if(C_.current)clearTimeout(C_.current),C_.current=null;let U=Z0.current;if(U?.dragging&&U.path){let J=F0.current||D0(),x=I$.current;if(typeof x==="function")x(U.path,J)}Z0.current={path:null,dragging:!1,startX:0,startY:0},s_.current=0,d(!1),__(null),Y0(null),x0(),m$()},[D0,m$,Y0,x0]),f$=I((U)=>{let J=Z0.current,x=U?.touches?.[0];if(!x||!J?.path){if(C_.current)clearTimeout(C_.current),C_.current=null;return}let z=Math.abs(x.clientX-J.startX),O=Math.abs(x.clientY-J.startY),D=z>8||O>8;if(D&&C_.current)clearTimeout(C_.current),C_.current=null;if(!J.dragging&&D)J.dragging=!0,d(!0),__("move"),r$(J.path);if(J.dragging){U.preventDefault(),M$(x.clientX,x.clientY);let b=document.elementFromPoint(x.clientX,x.clientY),p=G0(b)||D0();if(F0.current!==p)Y0(p);N$(p)}},[G0,D0,r$,M$,Y0,N$]),h$=A((U)=>{U.preventDefault();let J=W0.current;if(!J)return;let x=U.clientY,z=T_.current||280,O=U.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=x,b=(u)=>{D=u.clientY;let r=J.clientHeight-80,Q_=Math.min(Math.max(z-(u.clientY-x),80),r);J.style.setProperty("--preview-height",`${Q_}px`),T_.current=Q_},p=()=>{let u=J.clientHeight-80,r=Math.min(Math.max(z-(D-x),80),u);T_.current=r,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("previewHeight",String(Math.round(r))),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",p)}).current,$2=A((U)=>{U.preventDefault();let J=W0.current;if(!J)return;let x=U.touches[0];if(!x)return;let z=x.clientY,O=T_.current||280,D=U.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let b=(u)=>{let r=u.touches[0];if(!r)return;u.preventDefault();let Q_=J.clientHeight-80,k0=Math.min(Math.max(O-(r.clientY-z),80),Q_);J.style.setProperty("--preview-height",`${k0}px`),T_.current=k0},p=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",l_("previewHeight",String(Math.round(T_.current||O))),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}).current,h0=async()=>{if(!V)return;try{let U=await F4(V);if(U.media_id)y(U.media_id)}catch(U){M((J)=>({...J||{},error:U.message||"Failed to attach"}))}},m0=async()=>{if(!V||D_)return;await T$(V)},F$=(U)=>{return Array.from(U?.dataTransfer?.types||[]).includes("Files")},j2=I((U)=>{if(!F$(U))return;if(U.preventDefault(),s_.current+=1,!f_.current)d(!0);__("upload");let J=p0(U)||D0();Y0(J),N$(J)},[D0,p0,Y0,N$]),z$=I((U)=>{if(!F$(U))return;if(U.preventDefault(),U.dataTransfer)U.dataTransfer.dropEffect="copy";if(!f_.current)d(!0);if(S0.current!=="upload")__("upload");let J=p0(U)||D0();if(F0.current!==J)Y0(J);N$(J)},[D0,p0,Y0,N$]),i$=I((U)=>{if(!F$(U))return;if(U.preventDefault(),s_.current=Math.max(0,s_.current-1),s_.current===0)d(!1),__(null),Y0(null),x0()},[Y0,x0]),A$=I(async(U,J=".")=>{let x=Array.from(U||[]);if(x.length===0)return;let z=J&&J!==""?J:".",O=z!=="."?z:"workspace root";u_(!0);try{let D=null;for(let b of x)try{D=await H1(b,z)}catch(p){let u=p?.status,r=p?.code;if(u===409||r==="file_exists"){let Q_=b?.name||"file";if(!window.confirm(`"${Q_}" already exists in ${O}. Overwrite?`))continue;D=await H1(b,z,{overwrite:!0})}else throw p}if(D?.path)l0.current=D.path,H(D.path),k_.current?.(D.path);m_.current?.(z)}catch(D){i(D.message||"Failed to upload file")}finally{u_(!1)}},[]),S$=I(async(U,J)=>{if(!U)return;let x=c_.current?.get(U);if(!x)return;let z=J&&J!==""?J:".",O=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(z===O)return;try{let b=(await J4(U,z))?.path||U;if(x.type==="dir")Q((p)=>{let u=new Set;for(let r of p)if(r===U)u.add(b);else if(r.startsWith(`${U}/`))u.add(`${b}${r.slice(U.length)}`);else u.add(r);return u});if(H(b),x.type==="dir")M(null),o(!1),y(null);else k_.current?.(b);m_.current?.(O),m_.current?.(z)}catch(D){i(D?.message||"Failed to move entry")}},[]);I$.current=S$;let Z2=I(async(U)=>{if(!F$(U))return;U.preventDefault(),s_.current=0,d(!1),__(null),B_(null),x0();let J=Array.from(U?.dataTransfer?.files||[]);if(J.length===0)return;let x=F0.current||p0(U)||D0();await A$(J,x)},[D0,p0,A$]),O2=I((U)=>{if(U?.stopPropagation?.(),G_)return;let J=U?.currentTarget?.dataset?.uploadTarget||".";j0.current=J,y0.current?.click()},[G_]),w$=I(()=>{if(G_)return;let U=H0.current,J=U?c_.current?.get(U):null;j0.current=J?.type==="dir"?J.path:".",y0.current?.click()},[G_]),l$=I(()=>{V0(()=>B$(null))},[V0,B$]),N2=I(()=>{V0(()=>w$())},[V0,w$]),P$=I(()=>{V0(()=>a0())},[V0,a0]),I2=I(()=>{V0(()=>c$())},[V0,c$]),M2=I(()=>{if(!V||!Y$)return;V0(()=>w_.current?.(V,k))},[V0,V,Y$,k]),z_=I(()=>{if(!V||V===".")return;V0(()=>t$(V))},[V0,V,t$]),F2=I(()=>{if(!V||D_)return;V0(()=>m0())},[V0,V,D_,m0]),b2=I(()=>{if(!V||D_)return;V0(()=>h0())},[V0,V,D_,h0]),C2=I(()=>{if(!s0)return;if(v0(),typeof window<"u")window.open(s0,"_blank","noopener")},[v0,s0]),G2=I(()=>{v0(),N?.()},[v0,N]),T2=I(()=>{v0(),G?.()},[v0,G]),f2=I((U)=>{if(!U||U.button!==0)return;let J=U.currentTarget;if(!J||!J.dataset)return;let x=J.dataset.path;if(!x||x===".")return;if(i0.current===x)return;let z=u0(U);if(z?.closest?.("button, a, input, .workspace-caret"))return;if(!r0(z))return;U.preventDefault(),t_.current={path:x,dragging:!1,startX:U.clientX,startY:U.clientY};let O=(b)=>{let p=t_.current;if(!p?.path)return;let u=Math.abs(b.clientX-p.startX),r=Math.abs(b.clientY-p.startY),Q_=u>4||r>4;if(!p.dragging&&Q_)p.dragging=!0,N0.current=!0,d(!0),__("move"),r$(p.path),M$(b.clientX,b.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(p.dragging){b.preventDefault(),M$(b.clientX,b.clientY);let k0=document.elementFromPoint(b.clientX,b.clientY),O_=G0(k0)||D0();if(F0.current!==O_)Y0(O_);N$(O_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let b=t_.current;if(b?.dragging&&b.path){let p=F0.current||D0(),u=I$.current;if(typeof u==="function")u(b.path,p)}t_.current={path:null,dragging:!1,startX:0,startY:0},s_.current=0,d(!1),__(null),Y0(null),x0(),m$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{N0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[G0,D0,r$,M$,m$,Y0,N$,x0]),S2=I(async(U)=>{let J=Array.from(U?.target?.files||[]);if(J.length===0)return;let x=j0.current||".";if(await A$(J,x),j0.current=".",U?.target)U.target.value=""},[A$]);return B`
        <aside
            class=${`workspace-sidebar${g_?" workspace-drop-active":""}`}
            data-workspace-scale=${K0}
            ref=${W0}
            onDragEnter=${j2}
            onDragOver=${z$}
            onDragLeave=${i$}
            onDrop=${Z2}
        >
            <input type="file" multiple style="display:none" ref=${y0} onChange=${S2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${C}
                            class=${`workspace-menu-button${$_?" active":""}`}
                            onClick=${(U)=>{U.stopPropagation(),F_((J)=>!J)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${$_?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${$_&&B`
                            <div class="workspace-menu-dropdown" ref=${P_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${l$} disabled=${G_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${N2} disabled=${G_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${P$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${X_?" active":""}`} role="menuitem" onClick=${I2}>
                                    ${X_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${V&&B`<div class="workspace-menu-separator"></div>`}
                                ${V&&!D_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M2} disabled=${!Y$}>Open in editor</button>
                                `}
                                ${b$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z_}>Rename selected</button>
                                `}
                                ${C$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Download selected file</button>
                                `}
                                ${s0&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C2}>Download selected folder (zip)</button>
                                `}
                                ${o0&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${F2}>Delete selected file</button>
                                `}

                                ${(N||G)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${G2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${G&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T2}>
                                        ${Y?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${B$} title="New file" disabled=${G_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${a0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${_2}>
                ${G_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${S&&B`<div class="workspace-loading">Loading…</div>`}
                ${j_&&B`<div class="workspace-error">${j_}</div>`}
                ${q&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${P0}
                        tabIndex="0"
                        onClick=${p$}
                        onDblClick=${C0}
                        onKeyDown=${O$}
                        onTouchStart=${E$}
                        onTouchEnd=${k$}
                        onTouchMove=${f$}
                        onTouchCancel=${k$}
                    >
                        ${U$.map(({node:U,depth:J})=>{let x=U.type==="dir",z=U.path===V,O=U.path===P,D=x&&X.has(U.path),b=L_&&U.path===L_,p=Array.isArray(U.children)&&U.children.length>0?U.children.length:Number(U.child_count)||0;return B`
                                <div
                                    key=${U.path}
                                    class=${`workspace-row${z?" selected":""}${b?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*g$.indentPx}px`}}
                                    data-path=${U.path}
                                    data-type=${U.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${x?D?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${x?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${x?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${b_}
                                                value=${m}
                                                onInput=${(u)=>g(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),e$();else if(u.key==="Escape")u.preventDefault(),n0()}}
                                                onBlur=${n0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${U.name}</span></span>`}
                                    ${x&&!D&&p>0&&B`
                                        <span class="workspace-count">${p}</span>
                                    `}
                                    ${x&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${U.path}
                                            title="Upload files to this folder"
                                            onClick=${O2}
                                            disabled=${G_}
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
            ${V&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${h$} onTouchStart=${$2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${B$} title="New file" disabled=${G_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!D_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>Y$&&w_.current?.(V,k)}
                                    title=${y$}
                                    disabled=${!Y$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${m0}
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
                            ${D_?B`
                                    <button class="workspace-download" onClick=${w$}
                                        title="Upload files to this folder" disabled=${G_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${J1(V,X_)}
                                        title="Download folder as zip" onClick=${(U)=>U.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${h0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${e&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${k?.error&&B`<div class="workspace-error">${k.error}</div>`}
                    ${D_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${I_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${I_?.error&&B`<div class="workspace-error">${I_.error}</div>`}
                        ${I_?.payload&&I_.payload.segments?.length>0&&B`
                            <${ej} payload=${I_.payload} />
                        `}
                        ${I_?.payload&&(!I_.payload.segments||I_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!D_&&B`
                        <div class="workspace-preview-body" ref=${e_}></div>
                    `}
                    ${c&&B`
                        <div class="workspace-download-card">
                            <${_Z} mediaId=${c} />
                        </div>
                    `}
                </div>
            `}
            ${V_&&B`
                <div class="workspace-drag-ghost" ref=${$$}>${V_.label}</div>
            `}
        </aside>
    `}var $Z=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,jZ=/\.(csv|tsv)$/i,ZZ=/\.pdf$/i,NZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,_9=/\.drawio(\.xml|\.svg|\.png)?$/i;function $9({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:G,onTogglePin:Y,onTogglePreview:q,previewTabs:L,onToggleDock:X,dockVisible:Q,onToggleZen:V,zenMode:H}){let[P,f]=v(null),m=A(null);R(()=>{if(!P)return;let y=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;f(null)};return document.addEventListener("click",y),document.addEventListener("keydown",y),()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",y)}},[P]),R(()=>{let y=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let n=_.findIndex((e)=>e.id===$);if(S.shiftKey){let e=_[(n-1+_.length)%_.length];j?.(e.id)}else{let e=_[(n+1)%_.length];j?.(e.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let n=document.querySelector(".editor-pane");if(n&&n.contains(document.activeElement)){if(S.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[_,$,j,Z]);let g=I((y,S)=>{if(y.button===1){y.preventDefault(),Z?.(S);return}if(y.button===0)j?.(S)},[j,Z]),k=I((y,S)=>{y.preventDefault(),f({id:S,x:y.clientX,y:y.clientY})},[]),M=I((y)=>{y.preventDefault(),y.stopPropagation()},[]),c=I((y,S)=>{y.preventDefault(),y.stopPropagation(),Z?.(S)},[Z]);if(R(()=>{if(!$||!m.current)return;let y=m.current.querySelector(".tab-item.active");if(y)y.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${m} role="tablist">
            ${_.map((y)=>B`
                <div
                    key=${y.id}
                    class=${`tab-item${y.id===$?" active":""}${y.dirty?" dirty":""}${y.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${y.id===$}
                    title=${y.path}
                    onMouseDown=${(S)=>g(S,y.id)}
                    onContextMenu=${(S)=>k(S,y.id)}
                >
                    ${y.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${y.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${M}
                        onClick=${(S)=>c(S,y.id)}
                        title=${y.dirty?"Unsaved changes":"Close"}
                        aria-label=${y.dirty?"Unsaved changes":`Close ${y.label}`}
                    >
                        ${y.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${Q?" active":""}`}
                    onClick=${X}
                    title=${`${Q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${Q?"Hide":"Show"} terminal`}
                    aria-pressed=${Q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&B`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${V}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${P&&B`
            <div class="tab-context-menu" style=${{left:P.x+"px",top:P.y+"px"}}>
                <button onClick=${()=>{Z?.(P.id),f(null)}}>Close</button>
                <button onClick=${()=>{N?.(P.id),f(null)}}>Close Others</button>
                <button onClick=${()=>{G?.(),f(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(P.id),f(null)}}>
                    ${_.find((y)=>y.id===P.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${q&&/\.(md|mdx|markdown)$/i.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{q(P.id),f(null)}}>
                        ${L?.has(P.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${$Z.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(P.id),S=P.id.split("/").pop()||"document",n="/office-viewer/?url="+encodeURIComponent(y)+"&name="+encodeURIComponent(S);window.open(n,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
                ${jZ.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/csv-viewer/?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
                ${ZZ.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
                ${NZ.test(P.id)&&!_9.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/image-viewer/?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
                ${_9.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/drawio/edit?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var GZ=400,X3=60,j9=220,V3="mdPreviewHeight";function YZ(){try{let _=localStorage.getItem(V3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=X3?$:j9}catch{return j9}}function Z9({getContent:_,path:$,onClose:j}){let[Z,N]=v(""),[G,Y]=v(YZ),q=A(null),L=A(null),X=A(""),Q=A(_);return Q.current=_,R(()=>{let P=()=>{let m=Q.current?.()||"";if(m===X.current)return;X.current=m;try{let g=_$(m,null,{sanitize:!1});N(g)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};P();let f=setInterval(P,GZ);return()=>clearInterval(f)},[]),R(()=>{if(q.current&&Z)v$(q.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(P)=>{P.preventDefault();let f=P.clientY,m=L.current?.offsetHeight||G,g=L.current?.parentElement,k=g?g.offsetHeight*0.7:500,M=P.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let c=(S)=>{let n=Math.min(Math.max(m-(S.clientY-f),X3),k);Y(n)},y=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(V3,String(Math.round(L.current?.offsetHeight||G)))}catch{}document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",y)}}
            onTouchStart=${(P)=>{P.preventDefault();let f=P.touches[0];if(!f)return;let m=f.clientY,g=L.current?.offsetHeight||G,k=L.current?.parentElement,M=k?k.offsetHeight*0.7:500,c=P.currentTarget;c.classList.add("dragging"),document.body.style.userSelect="none";let y=(n)=>{let e=n.touches[0];if(!e)return;n.preventDefault();let o=Math.min(Math.max(g-(e.clientY-m),X3),M);Y(o)},S=()=>{c.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(V3,String(Math.round(L.current?.offsetHeight||G)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:G+"px"}}>
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
    `}function N9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let G=A(_);G.current=_;let Y=A($);Y.current=$;let q=A(j);q.current=j;let L=A(Z);L.current=Z,R(()=>{q.current();let X=new y1((V,H)=>G.current(V,H),(V)=>Y.current(V),{chatJid:N});X.connect();let Q=()=>{X.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",Q),document.addEventListener("visibilitychange",Q),()=>{window.removeEventListener("focus",Q),document.removeEventListener("visibilitychange",Q),X.disconnect()}},[N])}function G9(){let[_,$]=v(!1),[j,Z]=v("default"),N=A(!1);R(()=>{let L=A2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),R(()=>{N.current=_},[_]);let G=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),Y=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await G();if(Z(X||"default"),X!=="granted"){N.current=!1,$(!1),l_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),l_("notificationsEnabled",String(L))},[G]),q=I((L,X)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(L,{body:X});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Y,notify:q}}var N1=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Y9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=v(null),[G,Y]=v(!1),q=A(!1),L=A(null),X=A(!1),Q=A(null),V=A(null),H=A(0);R(()=>{q.current=G},[G]),R(()=>{V.current=Z},[Z]),R(()=>{H.current+=1,V.current=null,Q.current=null,X.current=!1,q.current=!1,N(null),Y(!1)},[j]);let P=I(async(g=null)=>{let k=H.current;try{if(g){let M=await Z4(g,50,0,j);if(k!==H.current)return;N(M.posts),Y(!1)}else{let M=await l2(10,null,j);if(k!==H.current)return;N(M.posts),Y(M.has_more)}}catch(M){if(k!==H.current)return;console.error("Failed to load posts:",M)}},[j]),f=I(async()=>{let g=H.current;try{let k=await l2(10,null,j);if(g!==H.current)return;N((M)=>{if(!M||M.length===0)return k.posts;return N1([...k.posts,...M])}),Y((M)=>M||k.has_more)}catch(k){if(g!==H.current)return;console.error("Failed to refresh timeline:",k)}},[j]),m=I(async(g={})=>{let k=H.current,M=V.current;if(!M||M.length===0)return;if(X.current)return;let{preserveScroll:c=!0,preserveMode:y="top",allowRepeat:S=!1}=g,n=(j_)=>{if(!c){j_();return}if(y==="top")$(j_);else _(j_)},o=M.slice().sort((j_,i)=>j_.id-i.id)[0]?.id;if(!Number.isFinite(o))return;if(!S&&Q.current===o)return;X.current=!0,Q.current=o;try{let j_=await l2(10,o,j);if(k!==H.current)return;if(j_.posts.length>0)n(()=>{N((i)=>N1([...j_.posts,...i||[]])),Y(j_.has_more)});else Y(!1)}catch(j_){if(k!==H.current)return;console.error("Failed to load more posts:",j_)}finally{if(k===H.current)X.current=!1}},[j,_,$]);return R(()=>{L.current=m},[m]),{posts:Z,setPosts:N,hasMore:G,setHasMore:Y,hasMoreRef:q,loadPosts:P,refreshTimeline:f,loadMore:m,loadMoreRef:L,loadingMoreRef:X,lastBeforeIdRef:Q}}function z9(){let[_,$]=v(null),[j,Z]=v({text:"",totalLines:0}),[N,G]=v(""),[Y,q]=v({text:"",totalLines:0}),[L,X]=v(null),[Q,V]=v(null),[H,P]=v(null),f=A(null),m=A(0),g=A(!1),k=A(""),M=A(""),c=A(null),y=A(null),S=A(null),n=A(null),e=A(!1),o=A(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:G,agentThought:Y,setAgentThought:q,pendingRequest:L,setPendingRequest:X,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:H,setSteerQueuedTurnId:P,lastAgentEventRef:f,lastSilenceNoticeRef:m,isAgentRunningRef:g,draftBufferRef:k,thoughtBufferRef:M,pendingRequestRef:c,stalledPostIdRef:y,currentTurnIdRef:S,steerQueuedTurnIdRef:n,thoughtExpandedRef:e,draftExpandedRef:o}}function K9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=A((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientX,P=$.current||280,f=Q.currentTarget;f.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,g=(M)=>{m=M.clientX;let c=Math.min(Math.max(P+(M.clientX-H),160),600);V.style.setProperty("--sidebar-width",`${c}px`),$.current=c},k=()=>{let M=Math.min(Math.max(P+(m-H),160),600);$.current=M,f.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",l_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",k)}).current,G=A((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientX,f=$.current||280,m=Q.currentTarget;m.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let g=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(f+(c.clientX-P),160),600);V.style.setProperty("--sidebar-width",`${y}px`),$.current=y},k=()=>{m.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",l_("sidebarWidth",String(Math.round($.current||f))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",k),document.removeEventListener("touchcancel",k)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",k),document.addEventListener("touchcancel",k)}).current,Y=A((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientX,P=j.current||$.current||280,f=Q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,g=(M)=>{m=M.clientX;let c=Math.min(Math.max(P+(M.clientX-H),200),800);V.style.setProperty("--editor-width",`${c}px`),j.current=c},k=()=>{let M=Math.min(Math.max(P+(m-H),200),800);j.current=M,f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",k)}).current,q=A((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientX,f=j.current||$.current||280,m=Q.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(f+(c.clientX-P),200),800);V.style.setProperty("--editor-width",`${y}px`),j.current=y},k=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",l_("editorWidth",String(Math.round(j.current||f))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",k),document.removeEventListener("touchcancel",k)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",k),document.addEventListener("touchcancel",k)}).current,L=A((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientY,P=Z?.current||200,f=Q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let m=H,g=(M)=>{m=M.clientY;let c=Math.min(Math.max(P-(M.clientY-H),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${c}px`),Z)Z.current=c;window.dispatchEvent(new CustomEvent("dock-resize"))},k=()=>{let M=Math.min(Math.max(P-(m-H),100),window.innerHeight*0.5);if(Z)Z.current=M;f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",k)}).current,X=A((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientY,f=Z?.current||200,m=Q.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(f-(c.clientY-P),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${y}px`),Z)Z.current=y;window.dispatchEvent(new CustomEvent("dock-resize"))},k=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",l_("dockHeight",String(Math.round(Z?.current||f))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",k),document.removeEventListener("touchcancel",k)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",k),document.addEventListener("touchcancel",k)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:G,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:X}}function W9({onTabClosed:_}={}){let $=A(_);$.current=_;let[j,Z]=v(()=>n_.getTabs()),[N,G]=v(()=>n_.getActiveId()),[Y,q]=v(()=>n_.getTabs().length>0);R(()=>{return n_.onChange((y,S)=>{Z(y),G(S),q(y.length>0)})},[]);let[L,X]=v(()=>new Set),Q=I((y)=>{X((S)=>{let n=new Set(S);if(n.has(y))n.delete(y);else n.add(y);return n})},[]),V=I((y)=>{X((S)=>{if(!S.has(y))return S;let n=new Set(S);return n.delete(y),n})},[]),H=I((y,S={})=>{if(!y)return;let n={path:y,mode:"edit"};try{if(!r_.resolve(n)){if(!r_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(o){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,o)}let e=typeof S?.label==="string"&&S.label.trim()?S.label.trim():void 0;n_.open(y,e)},[]),P=I(()=>{let y=n_.getActiveId();if(y){let S=n_.get(y);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}n_.close(y),V(y),$.current?.(y)}},[V]),f=I((y)=>{let S=n_.get(y);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}n_.close(y),V(y),$.current?.(y)},[V]),m=I((y)=>{n_.activate(y)},[]),g=I((y)=>{let S=n_.getTabs().filter((o)=>o.id!==y&&!o.pinned),n=S.filter((o)=>o.dirty).length;if(n>0){if(!window.confirm(`${n} unsaved tab${n>1?"s":""} will be closed. Continue?`))return}let e=S.map((o)=>o.id);n_.closeOthers(y),e.forEach((o)=>{V(o),$.current?.(o)})},[V]),k=I(()=>{let y=n_.getTabs().filter((e)=>!e.pinned),S=y.filter((e)=>e.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let n=y.map((e)=>e.id);n_.closeAll(),n.forEach((e)=>{V(e),$.current?.(e)})},[V]),M=I((y)=>{n_.togglePin(y)},[]),c=I(()=>{let y=n_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return R(()=>{let y=(S)=>{let{oldPath:n,newPath:e,type:o}=S.detail||{};if(!n||!e)return;if(o==="dir"){for(let j_ of n_.getTabs())if(j_.path===n||j_.path.startsWith(`${n}/`)){let i=`${e}${j_.path.slice(n.length)}`;n_.rename(j_.id,i)}}else n_.rename(n,e)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),R(()=>{let y=(S)=>{if(n_.hasUnsaved())S.preventDefault(),S.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:H,closeEditor:P,handleTabClose:f,handleTabActivate:m,handleTabCloseOthers:g,handleTabCloseAll:k,handleTabTogglePin:M,handleTabTogglePreview:Q,revealInExplorer:c}}function L3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],G=Number(N);return Number.isFinite(G)?G:$}catch{return $}}var Q3=L3("warning",30000),q9=L3("finalize",120000),B3=L3("refresh",30000),X9=30000;function V9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function L9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Q9(_=30000){let[,$]=v(0);R(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function U3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function B9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function V2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function O3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),G=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(G||N>1||Y)}function U9(_,$={}){if(V2($))return null;if(O3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:zZ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function O9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function F9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function H9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function D9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function L2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function J9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function zZ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function u1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function F3(_){return String(_||"").trim()||"web:default"}function y9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function E9(_={}){return V2(_)&&O3(_)}function KZ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function WZ(_={},$={}){if(!E9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=KZ({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function k9(_={}){if(!E9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,G=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of N)$.clearTimeout?.(V);N.clear()},Y=()=>{Z=0,WZ({window:$,document:j})},q=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Y)??0},L=()=>{q();for(let V of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),q()},V);if(H!=null)N.add(H)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},Q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",L,!0),Q?.addEventListener?.("resize",L),Q?.addEventListener?.("scroll",L),()=>{G(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",L,!0),Q?.removeEventListener?.("resize",L),Q?.removeEventListener?.("scroll",L)}}function qZ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Q$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:qZ($,j)}var XZ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function A9(_){return XZ.has(String(_||"").trim())}function VZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function w9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(VZ(_),{detail:Z})),!0}var LZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function P9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(V2({window:j,navigator:Z}))};N();let Y=LZ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",N),()=>q.removeEventListener("change",N);if(typeof q.addListener==="function")return q.addListener(N),()=>q.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let q of Y)q();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function x9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var J3="piclaw_btw_session",QZ=900,BZ="__piclawRenameBranchPromptLock__",I9=()=>{if(typeof window>"u")return null;let _=window,$=BZ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function UZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function OZ(){let _=e0(J3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",G=typeof $.error==="string"&&$.error.trim()?$.error:null,Y=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:Y==="error"?G||"BTW stream interrupted. You can retry.":G,model:null,status:Y}}catch{return null}}var M9=N4,b9=Y4,FZ=K4,C9=L4,T9=Q4,f9=W4,H3=Q$(t0,"getAgentContext",null),HZ=Q$(t0,"getAgentModels",{current:null,models:[]}),DZ=Q$(t0,"getActiveChatAgents",{chats:[]}),D3=Q$(t0,"getChatBranches",{chats:[]}),JZ=Q$(t0,"renameChatBranch",null),yZ=Q$(t0,"pruneChatBranch",null),S9=Q$(t0,"restoreChatBranch",null),EZ=Q$(t0,"getAgentQueueState",{count:0}),kZ=Q$(t0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),AZ=Q$(t0,"removeAgentQueueItem",{removed:!1}),wZ=Q$(t0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});r_.register(g4);r_.register(s4);r_.register(o4);r_.register(r4);r_.register(a4);r_.register(t4);r_.register(_3);r_.register($3);r_.register(Z3);p4();r_.register(l4);r_.register(n4);function PZ({locationParams:_}){let $=R_(()=>{let W=_.get("chat_jid");return W&&W.trim()?W.trim():"web:default"},[_]),j=R_(()=>{let W=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),Z=R_(()=>{let W=(_.get("branch_loader")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),N=R_(()=>{let W=_.get("branch_source_chat_jid");return W&&W.trim()?W.trim():$},[$,_]),[G,Y]=v("disconnected"),[q,L]=v(()=>V2()),[X,Q]=v(null),[V,H]=v(null),[P,f]=v(!1),[m,g]=v("current"),[k,M]=v([]),[c,y]=v([]),[S,n]=v(null),{agentStatus:e,setAgentStatus:o,agentDraft:j_,setAgentDraft:i,agentPlan:X_,setAgentPlan:d_,agentThought:g_,setAgentThought:d,pendingRequest:N_,setPendingRequest:__,currentTurnId:V_,setCurrentTurnId:Y_,steerQueuedTurnId:L_,setSteerQueuedTurnId:B_,lastAgentEventRef:G_,lastSilenceNoticeRef:u_,isAgentRunningRef:I_,draftBufferRef:y_,thoughtBufferRef:E_,pendingRequestRef:z0,stalledPostIdRef:K0,currentTurnIdRef:W_,steerQueuedTurnIdRef:$_,thoughtExpandedRef:F_,draftExpandedRef:Z_}=z9(),[H_,M_]=v({}),[a_,p_]=v(null),[o_,c_]=v(null),[h_,w_]=v(!1),[k_,m_]=v(null),[W0,P0]=v([]),[b_,y0]=v([]),[j0,C_]=v(null),[Z0,t_]=v([]),[$0,N0]=v(!1),[T_,O0]=v(()=>OZ()),[T0,A_]=v(null),e_=A(new Set),f0=R_(()=>W0.find((W)=>W?.chat_jid===$)||null,[W0,$]),P_=R_(()=>b_.find((W)=>W?.chat_jid===$)||f0||null,[f0,b_,$]),C=P_?.root_chat_jid||f0?.root_chat_jid||$,a=UZ(m),[U_,x_]=v(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),s_=Z0.length,F0=A(new Set),f_=A([]),S0=A(new Set),$$=A(0),j$=A({inFlight:!1,lastAttemptAt:0,turnId:null});F0.current=new Set(Z0.map((W)=>W.row_id)),f_.current=Z0;let{notificationsEnabled:b0,notificationPermission:I$,toggleNotifications:H0,notify:i0}=G9(),[l0,R0]=v(()=>new Set),[Z$,Q2]=v(()=>A2("workspaceOpen",!0)),B2=A(null),{editorOpen:E0,tabStripTabs:D0,tabStripActiveId:G0,previewTabs:p0,openEditor:Y0,closeEditor:x0,handleTabClose:N$,handleTabActivate:M$,handleTabCloseOthers:r$,handleTabCloseAll:m$,handleTabTogglePin:a$,handleTabTogglePreview:n0,revealInExplorer:t$}=W9({onTabClosed:(W)=>B2.current?.(W)}),e$=A(null),G$=A(null),B$=A(null),d0=A(null),X0=r_.getDockPanes().length>0,[i_,U$]=v(!1),J$=I(()=>U$((W)=>!W),[]),g$=I(()=>{Y0(h4,{label:"Terminal"})},[Y0]),U2=!j&&(E0||X0&&i_),[D_,Y$]=v(!1),y$=A(!1),b$=I(()=>{if(!E0||j)return;if(y$.current=i_,i_)U$(!1);Y$(!0)},[E0,j,i_]),o0=I(()=>{if(!D_)return;if(Y$(!1),y$.current)U$(!0),y$.current=!1},[D_]),C$=I(()=>{if(D_)o0();else b$()},[D_,b$,o0]);R(()=>{if(D_&&!E0)o0()},[D_,E0,o0]),R(()=>{let W=e$.current;if(!W)return;if(G$.current)G$.current.dispose(),G$.current=null;let K=G0;if(!K)return;let F={path:K,mode:"edit"},E=r_.resolve(F)||r_.get("editor");if(!E){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let w=E.mount(W,F);G$.current=w,w.onDirtyChange?.((l)=>{n_.setDirty(K,l)}),w.onSaveRequest?.(()=>{}),w.onClose?.(()=>{x0()});let T=n_.getViewState(K);if(T&&typeof w.restoreViewState==="function")requestAnimationFrame(()=>w.restoreViewState(T));if(typeof w.onViewStateChange==="function")w.onViewStateChange((l)=>{n_.saveViewState(K,l)});return requestAnimationFrame(()=>w.focus()),()=>{if(G$.current===w)w.dispose(),G$.current=null}},[G0,x0]),R(()=>{let W=(K)=>{let F=K.detail?.path;if(F)Y0(F)};return document.addEventListener("office-viewer:open-tab",W),document.addEventListener("drawio:open-tab",W),document.addEventListener("csv-viewer:open-tab",W),document.addEventListener("pdf-viewer:open-tab",W),document.addEventListener("image-viewer:open-tab",W),document.addEventListener("video-viewer:open-tab",W),()=>{document.removeEventListener("office-viewer:open-tab",W),document.removeEventListener("drawio:open-tab",W),document.removeEventListener("csv-viewer:open-tab",W),document.removeEventListener("pdf-viewer:open-tab",W),document.removeEventListener("image-viewer:open-tab",W),document.removeEventListener("video-viewer:open-tab",W)}},[Y0]),R(()=>{let W=B$.current;if(d0.current)d0.current.dispose(),d0.current=null;if(!W||!X0||!i_)return;let K=r_.getDockPanes()[0];if(!K){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=K.mount(W,{mode:"view"});return d0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(d0.current===F)F.dispose(),d0.current=null}},[X0,i_]);let[s0,v0]=v({name:"You",avatar_url:null,avatar_background:null}),V0=A(!1),u0=A(!1),r0=A(null),C0=A($),p$=A(new Map),a0=A($),c0=A(0),c$=A(0),_2=A({}),T$=A({name:null,avatar_url:null}),J0=A({currentHashtag:null,searchQuery:null,searchOpen:!1}),O$=A(null),E$=A(null),k$=A(0),f$=A(0),h$=A(0),$2=A(null),h0=A(null),m0=A(null),F$=A(null),j2=A(0),z$=A({title:null,avatarBase:null}),i$=A(null),A$=A(!1),[S$,Z2]=v(!1),O2=A(0),w$=I(()=>{if(i$.current)clearTimeout(i$.current),i$.current=null;n(null)},[]);Q9(30000),R(()=>{return E8()},[]),R(()=>{return P9(L)},[]),R(()=>{l_("workspaceOpen",String(Z$))},[Z$]),R(()=>{return k9()},[]),R(()=>{return()=>{w$()}},[w$]),R(()=>{if(!T_){l_(J3,"");return}l_(J3,JSON.stringify({question:T_.question||"",answer:T_.answer||"",thinking:T_.thinking||"",error:T_.error||null,status:T_.status||"success"}))},[T_]),R(()=>{_2.current=H_||{}},[H_]),R(()=>{C0.current=$},[$]),R(()=>{T$.current=s0||{name:"You",avatar_url:null,avatar_background:null}},[s0]);let l$=I((W,K,F=null)=>{if(typeof document>"u")return;let E=(W||"").trim()||"PiClaw";if(z$.current.title!==E){document.title=E;let s=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(s&&s.getAttribute("content")!==E)s.setAttribute("content",E);z$.current.title=E}let w=document.getElementById("dynamic-favicon");if(!w)return;let T=w.getAttribute("data-default")||w.getAttribute("href")||"/favicon.ico",l=K||T,t=K?`${l}|${F||""}`:l;if(z$.current.avatarBase!==t){let s=K?`${l}${l.includes("?")?"&":"?"}v=${F||Date.now()}`:l;w.setAttribute("href",s),z$.current.avatarBase=t}},[]),N2=I((W)=>{if(!W)return;M((K)=>K.includes(W)?K:[...K,W])},[]),P$=I((W)=>{M((K)=>K.filter((F)=>F!==W))},[]);B2.current=P$;let I2=I(()=>{M([])},[]),M2=I((W)=>{if(!Array.isArray(W)){M([]);return}let K=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let w=E.trim();if(F.has(w))continue;F.add(w),K.push(w)}M(K)},[]),z_=I((W,K=null,F="info",E=3000)=>{w$(),n({title:W,detail:K||null,kind:F||"info"}),i$.current=setTimeout(()=>{n((w)=>w?.title===W?null:w)},E)},[w$]),F2=I((W)=>{let K=B9(W,{editorOpen:E0,resolvePane:(F)=>r_.resolve(F)});if(K.kind==="open"){Y0(K.path);return}if(K.kind==="toast")z_(K.title,K.detail,K.level)},[E0,Y0,z_]),b2=I(()=>{let W=G0;if(W)N2(W)},[G0,N2]),C2=I((W)=>{if(!W)return;y((K)=>K.includes(W)?K:[...K,W])},[]),G2=I(async(W,K=null)=>{let F=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},E=document.getElementById("post-"+W);if(E){F(E);return}try{let w=typeof K==="string"&&K.trim()?K.trim():$,l=(await G4(W,w))?.thread?.[0];if(!l)return;Q0((t)=>{if(!t)return[l];if(t.some((s)=>s.id===l.id))return t;return[...t,l]}),requestAnimationFrame(()=>{setTimeout(()=>{let t=document.getElementById("post-"+W);if(t)F(t)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",W,w)}},[$]),T2=I((W)=>{y((K)=>K.filter((F)=>F!==W))},[]),f2=I(()=>{y([])},[]),S2=I((W)=>{if(!Array.isArray(W)){y([]);return}let K=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let w=E.trim();if(F.has(w))continue;F.add(w),K.push(w)}y(K)},[]),U=I((W)=>{let K=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";z_("Compose failed",K,"error",5000)},[z_]),J=I((W={})=>{let K=Date.now();if(G_.current=K,W.running)I_.current=!0,N0((F)=>F?F:!0);if(W.clearSilence)u_.current=0},[N0]),x=I(()=>{if(F$.current)clearTimeout(F$.current),F$.current=null;j2.current=0},[]);R(()=>()=>{x()},[x]);let z=I(()=>{x(),o((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:K,lastActivity:F,...E}=W;return E})},[x]),O=I((W)=>{if(!W)return;x();let K=Date.now();j2.current=K,o({type:W.type||"active",last_activity:!0}),F$.current=setTimeout(()=>{if(j2.current!==K)return;o((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},X9)},[x]),D=I(()=>{I_.current=!1,N0(!1),G_.current=null,u_.current=0,y_.current="",E_.current="",z0.current=null,h0.current=null,W_.current=null,$_.current=null,r0.current=null,j$.current={inFlight:!1,lastAttemptAt:0,turnId:null},x(),Y_(null),B_(null),F_.current=!1,Z_.current=!1},[x,Y_,B_,N0]),b=I((W)=>{if(!y9({remainingQueueCount:W,currentTurnId:W_.current,isAgentTurnActive:$0}))return;$_.current=null,B_(null)},[$0,B_]),p=I(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),u=I(()=>({agentStatus:e,agentDraft:j_?{...j_}:{text:"",totalLines:0},agentPlan:X_||"",agentThought:g_?{...g_}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:V_,steerQueuedTurnId:L_,isAgentTurnActive:Boolean($0),followupQueueItems:Array.isArray(Z0)?Z0.map((W)=>({...W})):[],activeModel:a_,activeThinkingLevel:o_,supportsThinking:Boolean(h_),activeModelUsage:k_,contextUsage:j0,isAgentRunning:Boolean(I_.current),wasAgentActive:Boolean(u0.current),draftBuffer:y_.current||"",thoughtBuffer:E_.current||"",lastAgentEvent:G_.current||null,lastSilenceNotice:u_.current||0,lastAgentResponse:h0.current||null,currentTurnIdRef:W_.current||null,steerQueuedTurnIdRef:$_.current||null,thoughtExpanded:Boolean(F_.current),draftExpanded:Boolean(Z_.current),agentStatusRef:r0.current||null,silentRecovery:{...j$.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[a_,k_,o_,j_,X_,e,g_,j0,V_,Z0,$0,N_,L_,h_]),r=I((W)=>{let K=W||p();x(),I_.current=Boolean(K.isAgentRunning),u0.current=Boolean(K.wasAgentActive),N0(Boolean(K.isAgentTurnActive)),G_.current=K.lastAgentEvent||null,u_.current=Number(K.lastSilenceNotice||0),y_.current=K.draftBuffer||"",E_.current=K.thoughtBuffer||"",z0.current=K.pendingRequest||null,h0.current=K.lastAgentResponse||null,W_.current=K.currentTurnIdRef||null,$_.current=K.steerQueuedTurnIdRef||null,r0.current=K.agentStatusRef||null,j$.current=K.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},F_.current=Boolean(K.thoughtExpanded),Z_.current=Boolean(K.draftExpanded),o(K.agentStatus||null),i(K.agentDraft?{...K.agentDraft}:{text:"",totalLines:0}),d_(K.agentPlan||""),d(K.agentThought?{...K.agentThought}:{text:"",totalLines:0}),__(K.pendingRequest||null),Y_(K.currentTurnId||null),B_(K.steerQueuedTurnId||null),t_(Array.isArray(K.followupQueueItems)?K.followupQueueItems.map((F)=>({...F})):[]),p_(K.activeModel||null),c_(K.activeThinkingLevel||null),w_(Boolean(K.supportsThinking)),m_(K.activeModelUsage??null),C_(K.contextUsage??null)},[x,p,Y_,t_,N0,B_]),Q_=I((W)=>{if(!W)return;if(W_.current===W)return;W_.current=W,j$.current={inFlight:!1,lastAttemptAt:0,turnId:W},Y_(W),$_.current=null,B_(null),y_.current="",E_.current="",i({text:"",totalLines:0}),d_(""),d({text:"",totalLines:0}),__(null),z0.current=null,h0.current=null,F_.current=!1,Z_.current=!1},[Y_,B_]),k0=I((W)=>{if(typeof document<"u"){let s=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&s)return}let K=h0.current;if(!K||!K.post)return;if(W&&K.turnId&&K.turnId!==W)return;let F=K.post;if(F.id&&$2.current===F.id)return;let E=String(F?.data?.content||"").trim();if(!E)return;$2.current=F.id||$2.current,h0.current=null;let w=E.replace(/\s+/g," ").slice(0,200),T=_2.current||{},t=(F?.data?.agent_id?T[F.data.agent_id]:null)?.name||"Pi";i0(t,w)},[i0]),O_=I(async(W,K)=>{if(W!=="thought"&&W!=="draft")return;let F=W_.current;if(W==="thought"){if(F_.current=K,F)try{await T9(F,"thought",K)}catch(E){console.warn("Failed to update thought visibility:",E)}if(!K)return;try{let E=F?await C9(F,"thought"):null;if(E?.text)E_.current=E.text;d((w)=>({...w||{text:"",totalLines:0},fullText:E_.current||w?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:w?.totalLines||0}))}catch(E){console.warn("Failed to fetch full thought:",E)}return}if(Z_.current=K,F)try{await T9(F,"draft",K)}catch(E){console.warn("Failed to update draft visibility:",E)}if(!K)return;try{let E=F?await C9(F,"draft"):null;if(E?.text)y_.current=E.text;i((w)=>({...w||{text:"",totalLines:0},fullText:y_.current||w?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:w?.totalLines||0}))}catch(E){console.warn("Failed to fetch full draft:",E)}},[]),H$=A(null),x$=I(()=>{let W=O$.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);H$.current=x$;let H2=I((W)=>{let K=O$.current;if(!K||typeof W!=="function"){W?.();return}let{currentHashtag:F,searchQuery:E,searchOpen:w}=J0.current||{},T=!((E||w)&&!F),l=T?K.scrollHeight-K.scrollTop:K.scrollTop;W(),requestAnimationFrame(()=>{let t=O$.current;if(!t)return;if(T){let s=Math.max(t.scrollHeight-l,0);t.scrollTop=s}else{let s=Math.max(t.scrollHeight-t.clientHeight,0),h=Math.min(l,s);t.scrollTop=h}})},[]),K$=I((W)=>{let K=O$.current;if(!K||typeof W!=="function"){W?.();return}let F=K.scrollTop;W(),requestAnimationFrame(()=>{let E=O$.current;if(!E)return;let w=Math.max(E.scrollHeight-E.clientHeight,0);E.scrollTop=Math.min(F,w)})},[]),m1="Queued as a follow-up (one-at-a-time).",Y2="⁣",I0=I((W)=>{if(!W||!Array.isArray(W))return W;let K=F0.current,F=new Set(K),E=W.filter((w)=>{if(F.has(w?.id))return!1;if(w?.data?.is_bot_message){let T=w?.data?.content;if(T===m1||T===Y2)return!1}return!0});return E.length===W.length?W:E},[]),{posts:D2,setPosts:Q0,hasMore:g1,setHasMore:J2,hasMoreRef:n$,loadPosts:q0,refreshTimeline:L0,loadMore:y3,loadMoreRef:R2}=Y9({preserveTimelineScroll:H2,preserveTimelineScrollTop:K$,chatJid:$}),y2=R_(()=>I0(D2),[D2,Z0,I0]),G1=I(()=>{let W=K0.current;if(!W)return;Q0((K)=>K?K.filter((F)=>F.id!==W):K),K0.current=null},[Q0]),{handleSplitterMouseDown:R9,handleSplitterTouchStart:v9,handleEditorSplitterMouseDown:u9,handleEditorSplitterTouchStart:m9,handleDockSplitterMouseDown:g9,handleDockSplitterTouchStart:p9}=K9({appShellRef:E$,sidebarWidthRef:k$,editorWidthRef:f$,dockHeightRef:h$}),E3=I(()=>{if(!I_.current)return;I_.current=!1,u_.current=0,G_.current=null,W_.current=null,Y_(null),F_.current=!1,Z_.current=!1;let W=(y_.current||"").trim();if(y_.current="",E_.current="",i({text:"",totalLines:0}),d_(""),d({text:"",totalLines:0}),__(null),z0.current=null,h0.current=null,!W){o({type:"error",title:"Response stalled - No content received"});return}let F=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E=Date.now(),w=new Date().toISOString(),T={id:E,timestamp:w,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};K0.current=E,Q0((l)=>l?N1([...l,T]):[T]),H$.current?.(),o(null)},[Y_]);R(()=>{J0.current={currentHashtag:X,searchQuery:V,searchOpen:P}},[X,V,P]);let S_=I(()=>{let W=++$$.current,K=$;EZ(K).then((F)=>{if(W!==$$.current)return;if(C0.current!==K)return;let E=S0.current,w=Array.isArray(F?.items)?F.items.map((T)=>({...T})).filter((T)=>!E.has(T.row_id)):[];if(w.length){t_((T)=>{if(T.length===w.length&&T.every((l,t)=>l.row_id===w[t].row_id))return T;return w});return}E.clear(),b(0),t_((T)=>T.length===0?T:[])}).catch(()=>{if(W!==$$.current)return;if(C0.current!==K)return;t_((F)=>F.length===0?F:[])})},[b,$,t_]),W$=I(async()=>{let W=$;try{let K=await H3(W);if(C0.current!==W)return;if(K)C_(K)}catch(K){if(C0.current!==W)return;console.warn("Failed to fetch agent context:",K)}},[$]),q$=I(async()=>{let W=$;try{let K=await f9(W);if(C0.current!==W)return null;if(!K||K.status!=="active"||!K.data){if(u0.current){let{currentHashtag:w,searchQuery:T,searchOpen:l}=J0.current||{};if(!w&&!T&&!l)L0()}return u0.current=!1,D(),r0.current=null,o(null),i({text:"",totalLines:0}),d_(""),d({text:"",totalLines:0}),__(null),z0.current=null,K??null}u0.current=!0;let F=K.data;r0.current=F;let E=F.turn_id||F.turnId;if(E)Q_(E);if(J({running:!0,clearSilence:!0}),z(),o(F),K.thought&&K.thought.text)d((w)=>{if(w&&w.text&&w.text.length>=K.thought.text.length)return w;return E_.current=K.thought.text,{text:K.thought.text,totalLines:K.thought.totalLines||0}});if(K.draft&&K.draft.text)i((w)=>{if(w&&w.text&&w.text.length>=K.draft.text.length)return w;return y_.current=K.draft.text,{text:K.draft.text,totalLines:K.draft.totalLines||0}});return K}catch(K){return console.warn("Failed to fetch agent status:",K),null}},[D,z,J,L0,Q_]),p1=I(async()=>{if(!I_.current)return null;if(z0.current)return null;let W=W_.current||null,K=j$.current,F=Date.now();if(K.inFlight)return null;if(K.turnId===W&&F-K.lastAttemptAt<B3)return null;K.inFlight=!0,K.lastAttemptAt=F,K.turnId=W;try{let{currentHashtag:E,searchQuery:w,searchOpen:T}=J0.current||{};if(!E&&!w&&!T)await L0();return await S_(),await q$()}finally{K.inFlight=!1}},[q$,S_,L0]);R(()=>{let W=Math.min(1000,Math.max(100,Math.floor(Q3/2))),K=setInterval(()=>{if(!I_.current)return;if(z0.current)return;let F=G_.current;if(!F)return;let E=Date.now(),w=E-F,T=t2(r0.current);if(w>=q9){if(!T)o({type:"waiting",title:"Re-syncing after a quiet period…"});p1();return}if(w>=Q3){if(E-u_.current>=B3){if(!T){let l=Math.floor(w/1000);o({type:"waiting",title:`Waiting for model… No events for ${l}s`})}u_.current=E,p1()}}},W);return()=>clearInterval(K)},[p1]);let c9=I((W)=>{if(Y(W),W!=="connected"){o(null),i({text:"",totalLines:0}),d_(""),d({text:"",totalLines:0}),__(null),z0.current=null,D();return}if(!V0.current){V0.current=!0;let{currentHashtag:w,searchQuery:T,searchOpen:l}=J0.current||{};if(!w&&!T&&!l)L0();q$(),S_(),W$();return}let{currentHashtag:K,searchQuery:F,searchOpen:E}=J0.current;if(!K&&!F&&!E)L0();q$(),S_(),W$()},[D,L0,q$,S_,W$]),h9=I(async(W)=>{Q(W),Q0(null),await q0(W)},[q0]),i9=I(async()=>{Q(null),H(null),Q0(null),await q0()},[q0]),l9=I(async(W,K=m)=>{if(!W||!W.trim())return;let F=K==="root"||K==="all"?K:"current";g(F),H(W.trim()),Q(null),Q0(null);try{let E=await M9(W.trim(),50,0,$,F,C);Q0(E.results),J2(!1)}catch(E){console.error("Failed to search:",E),Q0([])}},[$,C,m]),n9=I(()=>{f(!0),H(null),Q(null),g("current"),Q0([])},[]),d9=I(()=>{f(!1),H(null),q0()},[q0]),IZ=I(()=>{},[]),c1=!X&&!V&&!P,o9=I(async(W)=>{if(!W)return;let K=W.id,F=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():$,E=y2?.filter((T)=>T?.data?.thread_id===K&&T?.id!==K).length||0;if(E>0){if(!window.confirm(`Delete this message and its ${E} replies?`))return}let w=(T)=>{if(!T.length)return;R0((t)=>{let s=new Set(t);return T.forEach((h)=>s.add(h)),s}),setTimeout(()=>{if(K$(()=>{Q0((t)=>t?t.filter((s)=>!T.includes(s.id)):t)}),R0((t)=>{let s=new Set(t);return T.forEach((h)=>s.delete(h)),s}),n$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let T=await b9(K,E>0,F);if(T?.ids?.length)w(T.ids)}catch(T){let l=T?.message||"";if(E===0&&l.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let s=await b9(K,!0,F);if(s?.ids?.length)w(s.ids);return}console.error("Failed to delete post:",T),alert(`Failed to delete message: ${l}`)}},[$,y2,K$]),k3=I(async()=>{try{let W=await FZ();M_(V9(W));let K=W?.user||{};v0((E)=>{let w=typeof K.name==="string"&&K.name.trim()?K.name.trim():"You",T=typeof K.avatar_url==="string"?K.avatar_url.trim():null,l=typeof K.avatar_background==="string"&&K.avatar_background.trim()?K.avatar_background.trim():null;if(E.name===w&&E.avatar_url===T&&E.avatar_background===l)return E;return{name:w,avatar_url:T,avatar_background:l}});let F=(W?.agents||[]).find((E)=>E.id==="default");l$(F?.name,F?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}try{let W=$,K=await H3(W);if(C0.current!==W)return;if(K)C_(K)}catch{}},[l$,$]);R(()=>{k3();let W=w2("sidebarWidth",null),K=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(k$.current=K,E$.current)E$.current.style.setProperty("--sidebar-width",`${K}px`)},[k3]);let v2=$0||e!==null,A3=I((W)=>{if(!W||typeof W!=="object")return;let K=W.agent_id;if(!K)return;let{agent_name:F,agent_avatar:E}=W;if(!F&&E===void 0)return;let w=_2.current?.[K]||{id:K},T=w.name||null,l=w.avatar_url??w.avatarUrl??w.avatar??null,t=!1,s=!1;if(F&&F!==w.name)T=F,s=!0;if(E!==void 0){let h=typeof E==="string"?E.trim():null,K_=typeof l==="string"?l.trim():null,J_=h||null;if(J_!==(K_||null))l=J_,t=!0}if(!s&&!t)return;if(M_((h)=>{let J_={...h[K]||{id:K}};if(s)J_.name=T;if(t)J_.avatar_url=l;return{...h,[K]:J_}}),K==="default")l$(T,l,t?Date.now():null)},[l$]),w3=I((W)=>{if(!W||typeof W!=="object")return;let K=W.user_name??W.userName,F=W.user_avatar??W.userAvatar,E=W.user_avatar_background??W.userAvatarBackground;if(K===void 0&&F===void 0&&E===void 0)return;v0((w)=>{let T=typeof K==="string"&&K.trim()?K.trim():w.name||"You",l=F===void 0?w.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,t=E===void 0?w.avatar_background:typeof E==="string"&&E.trim()?E.trim():null;if(w.name===T&&w.avatar_url===l&&w.avatar_background===t)return w;return{name:T,avatar_url:l,avatar_background:t}})},[]),h1=I((W)=>{if(!W||typeof W!=="object")return;let K=W.model??W.current;if(K!==void 0)p_(K);if(W.thinking_level!==void 0)c_(W.thinking_level??null);if(W.supports_thinking!==void 0)w_(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)m_(W.provider_usage??null)},[]),u2=I(()=>{let W=$;HZ(W).then((K)=>{if(C0.current!==W)return;if(K)h1(K)}).catch(()=>{})},[h1,$]),M0=I(()=>{let W=$,K=(F)=>Array.isArray(F)?F.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"&&E.agent_name.trim()):[];Promise.all([DZ().catch(()=>({chats:[]})),D3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,E])=>{if(C0.current!==W)return;let w=K(F?.chats),T=K(E?.chats);if(T.length===0){P0(w);return}let l=new Map(w.map((s)=>[s.chat_jid,s])),t=T.map((s)=>{let h=l.get(s.chat_jid);return h?{...s,...h,is_active:h.is_active??s.is_active}:s});t.sort((s,h)=>{if(s.chat_jid===W&&h.chat_jid!==W)return-1;if(h.chat_jid===W&&s.chat_jid!==W)return 1;let K_=Boolean(s.archived_at),J_=Boolean(h.archived_at);if(K_!==J_)return K_?1:-1;if(Boolean(s.is_active)!==Boolean(h.is_active))return s.is_active?-1:1;return String(s.chat_jid).localeCompare(String(h.chat_jid))}),P0(t)}).catch(()=>{if(C0.current!==W)return;P0([])})},[$]),A0=I(()=>{D3(C).then((W)=>{let K=Array.isArray(W?.chats)?W.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];y0(K)}).catch(()=>{})},[C]),s9=I((W)=>{let K=W?.row_id;if(K==null)return;S0.current.add(K),t_((F)=>F.filter((E)=>E?.row_id!==K)),kZ(K,F3($)).then(()=>{S_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),z_("Failed to steer message","The queued message could not be sent as steering.","warning"),S0.current.delete(K),S_()})},[$,S_,t_,z_]),r9=I((W)=>{let K=W?.row_id;if(K==null)return;let F=f_.current.filter((E)=>E?.row_id!==K).length;S0.current.add(K),b(F),t_((E)=>E.filter((w)=>w?.row_id!==K)),AZ(K,F3($)).then(()=>{S_()}).catch((E)=>{console.warn("[queue] Failed to remove queued item:",E),z_("Failed to remove message","The queued message could not be removed.","warning"),S0.current.delete(K),S_()})},[b,$,S_,t_,z_]),m2=I((W)=>{if(!W||typeof W!=="object")return;if(M0(),A0(),W?.queued==="followup"||W?.queued==="steer"){S_();return}let K=W?.command;if(K&&typeof K==="object"&&(K?.queued_followup||K?.queued_steer))S_()},[M0,A0,S_]),i1=I(()=>{if(m0.current)m0.current.abort(),m0.current=null;O0(null)},[]),Y1=I(async(W)=>{let K=String(W||"").trim();if(!K)return z_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(m0.current)m0.current.abort();let F=new AbortController;m0.current=F,O0({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E=await wZ(K,{signal:F.signal,chatJid:T8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(w,T)=>{if(w==="side_prompt_start")O0((l)=>l?{...l,status:"running"}:l)},onThinkingDelta:(w)=>{O0((T)=>T?{...T,thinking:`${T.thinking||""}${w||""}`}:T)},onTextDelta:(w)=>{O0((T)=>T?{...T,answer:`${T.answer||""}${w||""}`}:T)}});if(m0.current!==F)return!0;O0((w)=>w?{...w,answer:E?.result||w.answer||"",thinking:E?.thinking||w.thinking||"",model:E?.model||null,status:"success",error:null}:w)}catch(E){if(F.signal.aborted)return!0;O0((w)=>w?{...w,status:"error",error:E?.payload?.error||E?.message||"BTW request failed."}:w)}finally{if(m0.current===F)m0.current=null}return!0},[$,z_]),a9=I(async({content:W})=>{let K=C8(W);if(!K)return!1;if(K.type==="help")return z_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(K.type==="clear")return i1(),z_("BTW cleared","Closed the side conversation panel.","info"),!0;if(K.type==="ask")return await Y1(K.question),!0;return!1},[i1,Y1,z_]),t9=I(()=>{if(T_?.question)Y1(T_.question)},[T_,Y1]),e9=I(async()=>{let W=R8(T_);if(!W)return;try{let K=await K2("default",W,null,[],v2?"queue":null,$);m2(K),z_(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(K){z_("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning")}},[T_,m2,v2,z_]),g2=I(()=>{u2(),M0(),A0(),S_(),W$()},[u2,M0,A0,S_,W$]);R(()=>{g2();let W=setInterval(()=>{u2(),M0(),A0(),S_()},60000);return()=>clearInterval(W)},[g2,u2,M0,A0,S_]),R(()=>{A0()},[A0]),R(()=>{let W=!1;Q0(null);let K=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;x$()})};if(X)return q0(X),()=>{W=!0};if(V)return M9(V,50,0,$,m,C).then((F)=>{if(W)return;Q0(F.results),J2(!1)}).catch((F)=>{if(W)return;console.error("Failed to search:",F),Q0([]),J2(!1)}),()=>{W=!0};return q0().then(()=>{K()}).catch((F)=>{if(W)return;console.error("Failed to load timeline:",F)}),()=>{W=!0}},[$,X,V,m,C,q0,x$,J2,Q0]),R(()=>{let W=a0.current||$;p$.current.set(W,u())},[$,u]),R(()=>{let W=a0.current||$;if(W===$)return;p$.current.set(W,u()),a0.current=$,S0.current.clear(),r(p$.current.get($)||null),S_(),q$(),W$()},[$,q$,W$,S_,r,u]);let _5=I(()=>{let{currentHashtag:W,searchQuery:K,searchOpen:F}=J0.current||{};if(!W&&!K&&!F)L0();g2()},[g2,L0]),p2=I((W,K="streaming")=>{let F=m8({...W,...W&&W.status?{}:{status:K}});if(!F)return;let E=g0(F);if(E&&e_.current.has(E))return;A_((w)=>{let T=g0(w),l=Boolean(E&&T&&E===T),t={...l&&w?.artifact?w.artifact:{},...F.artifact||{}};return{...l&&w?w:{},...F,artifact:t,source:"live",originChatJid:F.originChatJid||$,openedAt:l&&w?.openedAt?w.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[$]),l1=I((W,K)=>{let F=K?.turn_id,E=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null,T=E?E===$:W==="connected"||W==="workspace_update";if(T)A3(K),w3(K);if(W==="ui_theme"){k8(K);return}if(W==="generated_widget_open"){if(!T)return;if(F&&!W_.current)Q_(F);p2(K,"loading");return}if(W==="generated_widget_delta"){if(!T)return;if(F&&!W_.current)Q_(F);p2(K,"streaming");return}if(W==="generated_widget_final"){if(!T)return;if(F&&!W_.current)Q_(F);p2(K,"final");return}if(W==="generated_widget_error"){if(!T)return;p2(K,"error");return}if(W==="generated_widget_close"){if(!T)return;let h=g0(K);A_((K_)=>{if(!K_||K_?.source!=="live")return K_;let J_=g0(K_);if(h&&J_&&h!==J_)return K_;return null});return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))z()}if(W==="connected"){o(null),i({text:"",totalLines:0}),d_(""),d({text:"",totalLines:0}),__(null),z0.current=null,D();let h=$;f9(h).then((w0)=>{if(C0.current!==h)return;if(!w0||w0.status!=="active"||!w0.data)return;let z2=w0.data,z1=z2.turn_id||z2.turnId;if(z1)Q_(z1);if(J({clearSilence:!0}),O(z2),w0.thought&&w0.thought.text)E_.current=w0.thought.text,d({text:w0.thought.text,totalLines:w0.thought.totalLines||0});if(w0.draft&&w0.draft.text)y_.current=w0.draft.text,i({text:w0.draft.text,totalLines:w0.draft.totalLines||0})}).catch((w0)=>{console.warn("Failed to fetch agent status:",w0)});let{currentHashtag:K_,searchQuery:J_,searchOpen:X$}=J0.current||{};if(!K_&&!J_&&!X$)L0();g2();return}if(W==="agent_status"){if(!T){if(K?.type==="done"||K?.type==="error")M0(),A0();return}if(K.type==="done"||K.type==="error"){if(F&&W_.current&&F!==W_.current)return;if(K.type==="done"){k0(F||W_.current);let{currentHashtag:h,searchQuery:K_,searchOpen:J_}=J0.current||{};if(!h&&!K_&&!J_)L0();if(K.context_usage)C_(K.context_usage)}if(u0.current=!1,D(),S0.current.clear(),M0(),S_(),i({text:"",totalLines:0}),d_(""),d({text:"",totalLines:0}),__(null),K.type==="error")o({type:"error",title:K.title||"Agent error"}),setTimeout(()=>o(null),8000);else o(null)}else{if(F)Q_(F);if(J({running:!0,clearSilence:!0}),K.type==="thinking")y_.current="",E_.current="",i({text:"",totalLines:0}),d_(""),d({text:"",totalLines:0});r0.current=K,o((h)=>{if(h&&h.type===K.type&&h.title===K.title)return h;return K})}return}if(W==="agent_steer_queued"){if(!T)return;if(F&&W_.current&&F!==W_.current)return;let h=F||W_.current;if(!h)return;$_.current=h,B_(h);return}if(W==="agent_followup_queued"){if(!T)return;let h=K?.row_id,K_=K?.content;if(h!=null&&typeof K_==="string"&&K_.trim())t_((J_)=>{if(J_.some((X$)=>X$?.row_id===h))return J_;return[...J_,{row_id:h,content:K_,timestamp:K?.timestamp||null,thread_id:K?.thread_id??null}]});S_();return}if(W==="agent_followup_consumed"){if(!T)return;let h=K?.row_id;if(h!=null){let w0=f_.current.filter((z2)=>z2.row_id!==h).length;b(w0),t_((z2)=>z2.filter((z1)=>z1.row_id!==h))}S_();let{currentHashtag:K_,searchQuery:J_,searchOpen:X$}=J0.current||{};if(!K_&&!J_&&!X$)L0();return}if(W==="agent_followup_removed"){if(!T)return;let h=K?.row_id;if(h!=null){let K_=f_.current.filter((J_)=>J_.row_id!==h).length;S0.current.add(h),b(K_),t_((J_)=>J_.filter((X$)=>X$.row_id!==h))}S_();return}if(W==="agent_draft_delta"){if(!T)return;if(F&&W_.current&&F!==W_.current)return;if(F&&!W_.current)Q_(F);if(J({running:!0,clearSilence:!0}),K?.reset)y_.current="";if(K?.delta)y_.current+=K.delta;let h=Date.now();if(!c0.current||h-c0.current>=100){c0.current=h;let K_=y_.current,J_=U3(K_);if(Z_.current)i((X$)=>({text:X$?.text||"",totalLines:J_,fullText:K_}));else i({text:K_,totalLines:J_})}return}if(W==="agent_draft"){if(!T)return;if(F&&W_.current&&F!==W_.current)return;if(F&&!W_.current)Q_(F);J({running:!0,clearSilence:!0});let h=K.text||"",K_=K.mode||(K.kind==="plan"?"replace":"append"),J_=Number.isFinite(K.total_lines)?K.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(K.kind==="plan")if(K_==="replace")d_(h);else d_((X$)=>(X$||"")+h);else if(!Z_.current)y_.current=h,i({text:h,totalLines:J_});return}if(W==="agent_thought_delta"){if(!T)return;if(F&&W_.current&&F!==W_.current)return;if(F&&!W_.current)Q_(F);if(J({running:!0,clearSilence:!0}),K?.reset)E_.current="";if(typeof K?.delta==="string")E_.current+=K.delta;let h=Date.now();if(F_.current&&(!c$.current||h-c$.current>=100)){c$.current=h;let K_=E_.current;d((J_)=>({text:J_?.text||"",totalLines:U3(K_),fullText:K_}))}return}if(W==="agent_thought"){if(!T)return;if(F&&W_.current&&F!==W_.current)return;if(F&&!W_.current)Q_(F);J({running:!0,clearSilence:!0});let h=K.text||"",K_=Number.isFinite(K.total_lines)?K.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!F_.current)E_.current=h,d({text:h,totalLines:K_});return}if(W==="model_changed"){if(!T)return;if(K?.model!==void 0)p_(K.model);if(K?.thinking_level!==void 0)c_(K.thinking_level??null);if(K?.supports_thinking!==void 0)w_(Boolean(K.supports_thinking));let h=$;H3(h).then((K_)=>{if(C0.current!==h)return;if(K_)C_(K_)}).catch(()=>{});return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:K}));return}if(A9(W)){if(!T)return;if(w9(W,K),W==="extension_ui_notify"&&typeof K?.message==="string")z_(K.message,null,K?.type||"info");if(W==="extension_ui_error"&&typeof K?.error==="string")z_("Extension UI error",K.error,"error",5000);return}let{currentHashtag:l,searchQuery:t,searchOpen:s}=J0.current;if(W==="agent_response"){if(!T)return;G1(),h0.current={post:K,turnId:W_.current}}if(!l&&!t&&!s&&T&&(W==="new_post"||W==="new_reply"||W==="agent_response"))Q0((h)=>{if(!h)return[K];if(h.some((K_)=>K_.id===K.id))return h;return[...h,K]}),H$.current?.();if(W==="interaction_updated"){if(!T)return;if(l||t||s)return;Q0((h)=>{if(!h)return h;if(!h.some((K_)=>K_.id===K.id))return h;return h.map((K_)=>K_.id===K.id?K:K_)})}if(W==="interaction_deleted"){if(!T)return;if(l||t||s)return;let h=K?.ids||[];if(h.length){if(K$(()=>{Q0((K_)=>K_?K_.filter((J_)=>!h.includes(J_.id)):K_)}),n$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[p2,D,z,$,R2,J,k0,K$,M0,A0,L0,G1,Q_,O,A3,w3,u2,S_,t_]);R(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=l1,W.reset=()=>{G1(),D(),o(null),i({text:"",totalLines:0}),d_(""),d({text:"",totalLines:0}),__(null)},W.finalize=()=>E3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[D,E3,l1,G1]),N9({handleSseEvent:l1,handleConnectionStatusChange:c9,loadPosts:q0,onWake:_5,chatJid:$}),R(()=>{if(!y2||y2.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let K=W.slice(5);G2(K),history.replaceState(null,"",location.pathname+location.search)},[y2,G2]);let n1=e!==null;R(()=>{if(G!=="connected")return;let K=setInterval(()=>{let{currentHashtag:F,searchQuery:E,searchOpen:w}=J0.current||{},T=!F&&!E&&!w;if(n1){if(T)L0();S_(),q$(),W$()}else{if(T)L0();q$(),W$()}},n1?15000:60000);return()=>clearInterval(K)},[G,n1,q$,W$,S_,L0]),R(()=>{return x9(()=>{q$(),W$(),S_()})},[q$,W$,S_]);let $5=I(()=>{Q2((W)=>!W)},[]),P3=I((W)=>{if(typeof window>"u")return;let K=String(W||"").trim();if(!K||K===$)return;let F=L2(window.location.href,K,{chatOnly:j});window.location.assign(F)},[j,$]),x3=I(async()=>{if(typeof window>"u"||!P_?.chat_jid)return;let W=Date.now(),K=I9();if(!K)return;if(A$.current||W<O2.current||K.inFlight||W<K.cooldownUntil)return;A$.current=!0,K.inFlight=!0,Z2(!0);try{let F=P_.display_name||P_.agent_name||"",E=window.prompt("Agent name",F);if(E===null)return;let w=E.trim(),T=w.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||P_.agent_name||"",l=await JZ(P_.chat_jid,{displayName:w,agentName:T});await Promise.allSettled([M0(),A0()]);let t=l?.branch?.agent_name||T||P_.agent_name||"",s=l?.branch?.display_name||w||t;z_("Branch renamed",`${s} (@${t})`,"info",3500)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not rename branch."),w=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;z_("Could not rename branch",w||"Could not rename branch.","warning",5000)}finally{A$.current=!1,Z2(!1);let F=Date.now()+QZ;O2.current=F;let E=I9();if(E)E.inFlight=!1,E.cooldownUntil=F}},[P_,M0,A0,Z2,z_]),I3=I(async(W=null)=>{if(typeof window>"u")return;let K=typeof W==="string"&&W.trim()?W.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",E=K||P_?.chat_jid||F;if(!E){z_("Could not prune branch","No active session is selected yet.","warning",4000);return}let w=(P_?.chat_jid===E?P_:null)||b_.find((s)=>s?.chat_jid===E)||W0.find((s)=>s?.chat_jid===E)||null;if(w?.chat_jid===(w?.root_chat_jid||w?.chat_jid)){z_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let l=`@${w?.agent_name||E}${w?.chat_jid?` — ${w.chat_jid}`:""}`;if(!window.confirm(`Prune ${l}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await yZ(E),await Promise.allSettled([M0(),A0()]);let s=w?.root_chat_jid||"web:default";z_("Branch pruned",`${l} has been archived.`,"info",3000);let h=L2(window.location.href,s,{chatOnly:j});window.location.assign(h)}catch(s){let h=s instanceof Error?s.message:String(s||"Could not prune branch.");z_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[W0,j,P_,b_,$,M0,A0,z_]),j5=I(async(W)=>{let K=typeof W==="string"?W.trim():"";if(!K||typeof S9!=="function")return;try{let F=await S9(K);await Promise.allSettled([M0(),A0()]);let E=F?.branch,w=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():K,T=typeof E?.agent_name==="string"&&E.agent_name.trim()?`@${E.agent_name.trim()}`:w;z_("Branch restored",`Restored ${T}.`,"info",3200);let l=L2(window.location.href,w,{chatOnly:j});window.location.assign(l)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not restore branch.");z_("Could not restore branch",E||"Could not restore branch.","warning",5000)}},[j,M0,A0,z_]);R(()=>{if(!Z||typeof window>"u")return;let W=!1;return(async()=>{try{x_({status:"running",message:"Preparing a new chat branch…"});let K=await n2(N);if(W)return;let F=K?.branch,E=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let w=L2(window.location.href,E,{chatOnly:!0});window.location.replace(w)}catch(K){if(W)return;x_({status:"error",message:u1(K)})}})(),()=>{W=!0}},[Z,N]);let Z5=I((W)=>{if(!W||typeof W!=="object")return;let K=g0(W);if(K)e_.current.delete(K);A_({...W,openedAt:new Date().toISOString()})},[]),c2=I(()=>{A_((W)=>{let K=g0(W);if(W?.source==="live"&&K)e_.current.add(K);return null})},[]),N5=I((W,K)=>{let F=typeof W?.kind==="string"?W.kind:"",E=g0(K);if(!F||!E)return;if(F==="widget.close"){c2();return}if(F==="widget.submit"){let w=h8(W?.payload),T=i8(W?.payload),l=new Date().toISOString();if(A_((t)=>{let s=g0(t);if(!t||s!==E)return t;return{...t,runtimeState:{...t.runtimeState||{},lastEventKind:F,lastEventPayload:W?.payload||null,lastSubmitAt:l,lastHostUpdate:{type:"submit_pending",submittedAt:l,preview:w||null}}}}),!w){if(z_("Widget submission received","The widget submitted data without a message payload yet.","info",3500),T)c2();return}(async()=>{try{let t=await K2("default",w,null,[],v2?"queue":null,$);if(m2(t),A_((s)=>{let h=g0(s);if(!s||h!==E)return s;return{...s,runtimeState:{...s.runtimeState||{},lastHostUpdate:{type:t?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:l,preview:w,queued:t?.queued||null}}}}),z_(t?.queued==="followup"?"Widget submission queued":"Widget submission sent",t?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),T)c2()}catch(t){A_((s)=>{let h=g0(s);if(!s||h!==E)return s;return{...s,runtimeState:{...s.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:l,preview:w,error:t?.message||"Could not send the widget message."}}}}),z_("Widget submission failed",t?.message||"Could not send the widget message.","warning",5000)}})();return}if(F==="widget.ready"||F==="widget.request_refresh"){let w=new Date().toISOString();if(A_((T)=>{let l=g0(T);if(!T||l!==E)return T;return{...T,runtimeState:{...T.runtimeState||{},lastEventKind:F,lastEventPayload:W?.payload||null,...F==="widget.ready"?{readyAt:w,lastHostUpdate:{type:"ready_ack",at:w}}:{},...F==="widget.request_refresh"?{lastRefreshRequestAt:w,refreshCount:Number(T?.runtimeState?.refreshCount||0)+1,lastHostUpdate:{type:"refresh_ack",at:w,count:Number(T?.runtimeState?.refreshCount||0)+1,echo:W?.payload||null}}:{}}}}),F==="widget.request_refresh")z_("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[$,c2,m2,v2,z_]);R(()=>{e_.current.clear(),A_(null)},[$]);let G5=I(async()=>{if(typeof window>"u")return;try{let K=(await n2($))?.branch,F=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([M0(),A0()]);let E=K?.agent_name?`@${K.agent_name}`:F;z_("New branch created",`Switched to ${E}.`,"info",2500);let w=L2(window.location.href,F,{chatOnly:j});window.location.assign(w)}catch(W){z_("Could not create branch",u1(W),"warning",5000)}},[j,$,M0,A0,z_]),Y5=I(async()=>{if(typeof window>"u"||q)return;let W=U9($);if(!W){z_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(W.mode==="tab"){let F=J9(window.location.href,$,{chatOnly:!0});if(!window.open(F,W.target))z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let K=O9(W);if(!K){z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}F9(K,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await n2($))?.branch,w=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");try{let l=await z4();P0(Array.isArray(l?.chats)?l.chats:[])}catch{}try{let l=await D3(C);y0(Array.isArray(l?.chats)?l.chats:[])}catch{}let T=L2(window.location.href,w,{chatOnly:!0});H9(K,T)}catch(F){D9(K),z_("Could not open branch window",u1(F),"error",5000)}},[$,C,q,z_]);R(()=>{if(!E0)return;if(typeof window>"u")return;let W=E$.current;if(!W)return;if(!f$.current){let K=w2("editorWidth",null),F=k$.current||280;f$.current=Number.isFinite(K)?K:F}if(W.style.setProperty("--editor-width",`${f$.current}px`),!h$.current){let K=w2("dockHeight",null);h$.current=Number.isFinite(K)?K:200}W.style.setProperty("--dock-height",`${h$.current}px`)},[E0]),R(()=>{if(!X0||j)return;let W=(K)=>{if(K.ctrlKey&&K.key==="`")K.preventDefault(),J$()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[J$,X0,j]),R(()=>{if(j)return;let W=(K)=>{if(K.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault(),C$();return}if(K.key==="Escape"&&D_)K.preventDefault(),o0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[C$,o0,D_,j]);let z5=Boolean(L_&&L_===(e?.turn_id||V_));if(Z)return B`
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
        `;return B`
        <div class=${`app-shell${Z$?"":" workspace-collapsed"}${E0?" editor-open":""}${j?" chat-only":""}${D_?" zen-mode":""}`} ref=${E$}>
            ${!j&&B`
                <${e6}
                    onFileSelect=${N2}
                    visible=${Z$}
                    active=${Z$||E0}
                    onOpenEditor=${Y0}
                    onOpenTerminalTab=${g$}
                    onToggleTerminal=${X0?J$:void 0}
                    terminalVisible=${Boolean(X0&&i_)}
                />
                <button
                    class=${`workspace-toggle-tab${Z$?" open":" closed"}`}
                    onClick=${$5}
                    title=${Z$?"Hide workspace":"Show workspace"}
                    aria-label=${Z$?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${R9} onTouchStart=${v9}></div>
            `}
            ${U2&&B`
                <div class="editor-pane-container">
                    ${D_&&B`<div class="zen-hover-zone"></div>`}
                    ${E0&&B`
                        <${$9}
                            tabs=${D0}
                            activeId=${G0}
                            onActivate=${M$}
                            onClose=${N$}
                            onCloseOthers=${r$}
                            onCloseAll=${m$}
                            onTogglePin=${a$}
                            onTogglePreview=${n0}
                            previewTabs=${p0}
                            onToggleDock=${X0?J$:void 0}
                            dockVisible=${X0&&i_}
                            onToggleZen=${C$}
                            zenMode=${D_}
                        />
                    `}
                    ${E0&&B`<div class="editor-pane-host" ref=${e$}></div>`}
                    ${E0&&G0&&p0.has(G0)&&B`
                        <${Z9}
                            getContent=${()=>G$.current?.getContent?.()}
                            path=${G0}
                            onClose=${()=>n0(G0)}
                        />
                    `}
                    ${X0&&i_&&B`<div class="dock-splitter" onMouseDown=${g9} onTouchStart=${p9}></div>`}
                    ${X0&&B`<div class=${`dock-panel${i_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${J$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${B$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${u9} onTouchStart=${m9}></div>
            `}
            <div class="container">
                ${V&&L9()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${P_?.agent_name?`@${P_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${P_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${b_.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(W)=>P3(W.currentTarget.value)}
                                    >
                                        ${b_.map((W)=>B`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${`@${W.agent_name} — ${W.chat_jid}${W.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${P_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${x3}
                                    title=${S$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${S$}
                                >
                                    ${S$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${P_?.chat_jid&&P_.chat_jid!==(P_.root_chat_jid||P_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${I3}
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
                ${(X||V)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${i9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${X?`#${X}`:`Search: ${V} · ${a}`}</span>
                    </div>
                `}
                <${U6}
                    posts=${y2}
                    hasMore=${c1?g1:!1}
                    onLoadMore=${c1?y3:void 0}
                    timelineRef=${O$}
                    onHashtagClick=${h9}
                    onMessageRef=${C2}
                    onScrollToMessage=${G2}
                    onFileRef=${F2}
                    onPostClick=${void 0}
                    onDeletePost=${o9}
                    onOpenWidget=${Z5}
                    emptyMessage=${X?`No posts with #${X}`:V?`No results for "${V}"`:void 0}
                    agents=${H_}
                    user=${s0}
                    reverse=${c1}
                    removingPostIds=${l0}
                    searchQuery=${V}
                />
                <${_6}
                    status=${e}
                    draft=${j_}
                    plan=${X_}
                    thought=${g_}
                    pendingRequest=${N_}
                    intent=${S}
                    turnId=${V_}
                    steerQueued=${z5}
                    onPanelToggle=${O_}
                />
                <${v8}
                    session=${T_}
                    onClose=${i1}
                    onRetry=${t9}
                    onInject=${e9}
                />
                <${d8}
                    widget=${T0}
                    onClose=${c2}
                    onWidgetEvent=${N5}
                />
                <${X8}
                    onPost=${()=>{let{searchQuery:W,searchOpen:K}=J0.current||{};if(!W&&!K)q0(),x$()}}
                    onFocus=${x$}
                    searchMode=${P}
                    searchScope=${m}
                    onSearch=${l9}
                    onSearchScopeChange=${g}
                    onEnterSearch=${n9}
                    onExitSearch=${d9}
                    fileRefs=${k}
                    onRemoveFileRef=${P$}
                    onClearFileRefs=${I2}
                    onSetFileRefs=${M2}
                    messageRefs=${c}
                    onRemoveMessageRef=${T2}
                    onClearMessageRefs=${f2}
                    onSetMessageRefs=${S2}
                    onSwitchChat=${P3}
                    onRenameSession=${x3}
                    isRenameSessionInProgress=${S$}
                    onCreateSession=${G5}
                    onDeleteSession=${I3}
                    onRestoreSession=${j5}
                    activeEditorPath=${j?null:G0}
                    onAttachEditorFile=${j?void 0:b2}
                    onOpenFilePill=${F2}
                    followupQueueCount=${s_}
                    followupQueueItems=${Z0}
                    onInjectQueuedFollowup=${s9}
                    onRemoveQueuedFollowup=${r9}
                    onSubmitIntercept=${a9}
                    onMessageResponse=${m2}
                    onSubmitError=${U}
                    onPopOutChat=${q?void 0:Y5}
                    isAgentActive=${v2}
                    activeChatAgents=${W0}
                    currentChatJid=${$}
                    connectionStatus=${G}
                    activeModel=${a_}
                    modelUsage=${k_}
                    thinkingLevel=${o_}
                    supportsThinking=${h_}
                    contextUsage=${j0}
                    notificationsEnabled=${b0}
                    notificationPermission=${I$}
                    onToggleNotifications=${H0}
                    onModelChange=${p_}
                    onModelStateChange=${h1}
                />
                <${$6}
                    request=${N_}
                    onRespond=${()=>{__(null),z0.current=null}}
                />
            </div>
        </div>
    `}function xZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${PZ} locationParams=${_} />`}_8(B`<${xZ} />`,document.getElementById("app"));

//# debugId=8D024DB029B0D19964756E2164756E21
//# sourceMappingURL=app.bundle.js.map
