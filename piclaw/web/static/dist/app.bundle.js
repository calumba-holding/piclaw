var k8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var e2,x_,o1,E8,L2,T1,r1,d1,s1,u3,f3,x3,A8,s2={},a2=[],b8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_3=Array.isArray;function Z2(_,$){for(var j in $)_[j]=$[j];return _}function c3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function a1(_,$,j){var N,Z,J,K={};for(J in $)J=="key"?N=$[J]:J=="ref"?Z=$[J]:K[J]=$[J];if(arguments.length>2&&(K.children=arguments.length>3?e2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(J in _.defaultProps)K[J]===void 0&&(K[J]=_.defaultProps[J]);return o2(_,K,N,Z,null)}function o2(_,$,j,N,Z){var J={type:_,props:$,key:j,ref:N,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++o1:Z,__i:-1,__u:0};return Z==null&&x_.vnode!=null&&x_.vnode(J),J}function $3(_){return _.children}function r2(_,$){this.props=_,this.context=$}function k2(_,$){if($==null)return _.__?k2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?k2(_):null}function w8(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,N=[],Z=[],J=Z2({},$);J.__v=$.__v+1,x_.vnode&&x_.vnode(J),m3(_.__P,J,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,N,j==null?k2($):j,!!(32&$.__u),Z),J.__v=$.__v,J.__.__k[J.__i]=J,$$(N,J,Z),$.__e=$.__=null,J.__e!=j&&t1(J)}}function t1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),t1(_)}function I1(_){(!_.__d&&(_.__d=!0)&&L2.push(_)&&!t2.__r++||T1!=x_.debounceRendering)&&((T1=x_.debounceRendering)||r1)(t2)}function t2(){try{for(var _,$=1;L2.length;)L2.length>$&&L2.sort(d1),_=L2.shift(),$=L2.length,w8(_)}finally{L2.length=t2.__r=0}}function e1(_,$,j,N,Z,J,K,O,Y,z,W){var B,F,C,A,E,R,w,Q=N&&N.__k||a2,P=$.length;for(Y=M8(j,$,Q,Y,P),B=0;B<P;B++)(C=j.__k[B])!=null&&(F=C.__i!=-1&&Q[C.__i]||s2,C.__i=B,R=m3(_,C,F,Z,J,K,O,Y,z,W),A=C.__e,C.ref&&F.ref!=C.ref&&(F.ref&&v3(F.ref,null,C),W.push(C.ref,C.__c||A,C)),E==null&&A!=null&&(E=A),(w=!!(4&C.__u))||F.__k===C.__k?Y=_$(C,Y,_,w):typeof C.type=="function"&&R!==void 0?Y=R:A&&(Y=A.nextSibling),C.__u&=-7);return j.__e=E,Y}function M8(_,$,j,N,Z){var J,K,O,Y,z,W=j.length,B=W,F=0;for(_.__k=Array(Z),J=0;J<Z;J++)(K=$[J])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[J]=o2(null,K,null,null,null):_3(K)?K=_.__k[J]=o2($3,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[J]=o2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[J]=K,Y=J+F,K.__=_,K.__b=_.__b+1,O=null,(z=K.__i=P8(K,j,Y,B))!=-1&&(B--,(O=j[z])&&(O.__u|=2)),O==null||O.__v==null?(z==-1&&(Z>W?F--:Z<W&&F++),typeof K.type!="function"&&(K.__u|=4)):z!=Y&&(z==Y-1?F--:z==Y+1?F++:(z>Y?F--:F++,K.__u|=4))):_.__k[J]=null;if(B)for(J=0;J<W;J++)(O=j[J])!=null&&(2&O.__u)==0&&(O.__e==N&&(N=k2(O)),N$(O,O));return N}function _$(_,$,j,N){var Z,J;if(typeof _.type=="function"){for(Z=_.__k,J=0;Z&&J<Z.length;J++)Z[J]&&(Z[J].__=_,$=_$(Z[J],$,j,N));return $}_.__e!=$&&(N&&($&&_.type&&!$.parentNode&&($=k2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function P8(_,$,j,N){var Z,J,K,O=_.key,Y=_.type,z=$[j],W=z!=null&&(2&z.__u)==0;if(z===null&&O==null||W&&O==z.key&&Y==z.type)return j;if(N>(W?1:0)){for(Z=j-1,J=j+1;Z>=0||J<$.length;)if((z=$[K=Z>=0?Z--:J++])!=null&&(2&z.__u)==0&&O==z.key&&Y==z.type)return K}return-1}function u1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||b8.test($)?j:j+"px"}function l2(_,$,j,N,Z){var J,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof N=="string"&&(_.style.cssText=N=""),N)for($ in N)j&&$ in j||u1(_.style,$,"");if(j)for($ in j)N&&j[$]==N[$]||u1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")J=$!=($=$.replace(s1,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+J]=j,j?N?j.u=N.u:(j.u=u3,_.addEventListener($,J?x3:f3,J)):_.removeEventListener($,J?x3:f3,J);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(O){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function c1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=u3++;else if($.t<j.u)return;return j(x_.event?x_.event($):$)}}}function m3(_,$,j,N,Z,J,K,O,Y,z){var W,B,F,C,A,E,R,w,Q,P,M,u,l,o,Z_,z_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(Y=!!(32&j.__u),J=[O=$.__e=j.__e]),(W=x_.__b)&&W($);_:if(typeof z_=="function")try{if(w=$.props,Q=z_.prototype&&z_.prototype.render,P=(W=z_.contextType)&&N[W.__c],M=W?P?P.props.value:W.__:N,j.__c?R=(B=$.__c=j.__c).__=B.__E:(Q?$.__c=B=new z_(w,M):($.__c=B=new r2(w,M),B.constructor=z_,B.render=f8),P&&P.sub(B),B.state||(B.state={}),B.__n=N,F=B.__d=!0,B.__h=[],B._sb=[]),Q&&B.__s==null&&(B.__s=B.state),Q&&z_.getDerivedStateFromProps!=null&&(B.__s==B.state&&(B.__s=Z2({},B.__s)),Z2(B.__s,z_.getDerivedStateFromProps(w,B.__s))),C=B.props,A=B.state,B.__v=$,F)Q&&z_.getDerivedStateFromProps==null&&B.componentWillMount!=null&&B.componentWillMount(),Q&&B.componentDidMount!=null&&B.__h.push(B.componentDidMount);else{if(Q&&z_.getDerivedStateFromProps==null&&w!==C&&B.componentWillReceiveProps!=null&&B.componentWillReceiveProps(w,M),$.__v==j.__v||!B.__e&&B.shouldComponentUpdate!=null&&B.shouldComponentUpdate(w,B.__s,M)===!1){$.__v!=j.__v&&(B.props=w,B.state=B.__s,B.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(a){a&&(a.__=$)}),a2.push.apply(B.__h,B._sb),B._sb=[],B.__h.length&&K.push(B);break _}B.componentWillUpdate!=null&&B.componentWillUpdate(w,B.__s,M),Q&&B.componentDidUpdate!=null&&B.__h.push(function(){B.componentDidUpdate(C,A,E)})}if(B.context=M,B.props=w,B.__P=_,B.__e=!1,u=x_.__r,l=0,Q)B.state=B.__s,B.__d=!1,u&&u($),W=B.render(B.props,B.state,B.context),a2.push.apply(B.__h,B._sb),B._sb=[];else do B.__d=!1,u&&u($),W=B.render(B.props,B.state,B.context),B.state=B.__s;while(B.__d&&++l<25);B.state=B.__s,B.getChildContext!=null&&(N=Z2(Z2({},N),B.getChildContext())),Q&&!F&&B.getSnapshotBeforeUpdate!=null&&(E=B.getSnapshotBeforeUpdate(C,A)),o=W!=null&&W.type===$3&&W.key==null?j$(W.props.children):W,O=e1(_,_3(o)?o:[o],$,j,N,Z,J,K,O,Y,z),B.base=$.__e,$.__u&=-161,B.__h.length&&K.push(B),R&&(B.__E=B.__=null)}catch(a){if($.__v=null,Y||J!=null)if(a.then){for($.__u|=Y?160:128;O&&O.nodeType==8&&O.nextSibling;)O=O.nextSibling;J[J.indexOf(O)]=null,$.__e=O}else{for(Z_=J.length;Z_--;)c3(J[Z_]);T3($)}else $.__e=j.__e,$.__k=j.__k,a.then||T3($);x_.__e(a,$,j)}else J==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):O=$.__e=S8(j.__e,$,j,N,Z,J,K,Y,z);return(W=x_.diffed)&&W($),128&$.__u?void 0:O}function T3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(T3))}function $$(_,$,j){for(var N=0;N<j.length;N++)v3(j[N],j[++N],j[++N]);x_.__c&&x_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){x_.__e(J,Z.__v)}})}function j$(_){return typeof _!="object"||_==null||_.__b>0?_:_3(_)?_.map(j$):Z2({},_)}function S8(_,$,j,N,Z,J,K,O,Y){var z,W,B,F,C,A,E,R=j.props||s2,w=$.props,Q=$.type;if(Q=="svg"?Z="http://www.w3.org/2000/svg":Q=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),J!=null){for(z=0;z<J.length;z++)if((C=J[z])&&"setAttribute"in C==!!Q&&(Q?C.localName==Q:C.nodeType==3)){_=C,J[z]=null;break}}if(_==null){if(Q==null)return document.createTextNode(w);_=document.createElementNS(Z,Q,w.is&&w),O&&(x_.__m&&x_.__m($,J),O=!1),J=null}if(Q==null)R===w||O&&_.data==w||(_.data=w);else{if(J=J&&e2.call(_.childNodes),!O&&J!=null)for(R={},z=0;z<_.attributes.length;z++)R[(C=_.attributes[z]).name]=C.value;for(z in R)C=R[z],z=="dangerouslySetInnerHTML"?B=C:z=="children"||(z in w)||z=="value"&&("defaultValue"in w)||z=="checked"&&("defaultChecked"in w)||l2(_,z,null,C,Z);for(z in w)C=w[z],z=="children"?F=C:z=="dangerouslySetInnerHTML"?W=C:z=="value"?A=C:z=="checked"?E=C:O&&typeof C!="function"||R[z]===C||l2(_,z,C,R[z],Z);if(W)O||B&&(W.__html==B.__html||W.__html==_.innerHTML)||(_.innerHTML=W.__html),$.__k=[];else if(B&&(_.innerHTML=""),e1($.type=="template"?_.content:_,_3(F)?F:[F],$,j,N,Q=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,J,K,J?J[0]:j.__k&&k2(j,0),O,Y),J!=null)for(z=J.length;z--;)c3(J[z]);O||(z="value",Q=="progress"&&A==null?_.removeAttribute("value"):A!=null&&(A!==_[z]||Q=="progress"&&!A||Q=="option"&&A!=R[z])&&l2(_,z,A,R[z],Z),z="checked",E!=null&&E!=_[z]&&l2(_,z,E,R[z],Z))}return _}function v3(_,$,j){try{if(typeof _=="function"){var N=typeof _.__u=="function";N&&_.__u(),N&&$==null||(_.__u=_($))}else _.current=$}catch(Z){x_.__e(Z,j)}}function N$(_,$,j){var N,Z;if(x_.unmount&&x_.unmount(_),(N=_.ref)&&(N.current&&N.current!=_.__e||v3(N,null,$)),(N=_.__c)!=null){if(N.componentWillUnmount)try{N.componentWillUnmount()}catch(J){x_.__e(J,$)}N.base=N.__P=null}if(N=_.__k)for(Z=0;Z<N.length;Z++)N[Z]&&N$(N[Z],$,j||typeof _.type!="function");j||c3(_.__e),_.__c=_.__=_.__e=void 0}function f8(_,$,j){return this.constructor(_,j)}function Z$(_,$,j){var N,Z,J,K;$==document&&($=document.documentElement),x_.__&&x_.__(_,$),Z=(N=typeof j=="function")?null:j&&j.__k||$.__k,J=[],K=[],m3($,_=(!N&&j||$).__k=a1($3,null,[_]),Z||s2,s2,$.namespaceURI,!N&&j?[j]:Z?null:$.firstChild?e2.call($.childNodes):null,J,!N&&j?j:Z?Z.__e:$.firstChild,N,K),$$(J,_,K)}e2=a2.slice,x_={__e:function(_,$,j,N){for(var Z,J,K;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),K=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,N||{}),K=Z.__d),K)return Z.__E=Z}catch(O){_=O}throw _}},o1=0,E8=function(_){return _!=null&&_.constructor===void 0},r2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Z2({},this.state),typeof _=="function"&&(_=_(Z2({},j),this.props)),_&&Z2(j,_),_!=null&&this.__v&&($&&this._sb.push($),I1(this))},r2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),I1(this))},r2.prototype.render=$3,L2=[],r1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d1=function(_,$){return _.__v.__b-$.__v.__b},t2.__r=0,s1=/(PointerCapture)$|Capture$/i,u3=0,f3=c1(!1),x3=c1(!0),A8=0;var x2,l_,S3,m1,T2=0,J$=[],n_=x_,v1=n_.__b,R1=n_.__r,g1=n_.diffed,h1=n_.__c,i1=n_.unmount,p1=n_.__;function R3(_,$){n_.__h&&n_.__h(l_,_,T2||$),T2=0;var j=l_.__H||(l_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function c(_){return T2=1,x8(z$,_)}function x8(_,$,j){var N=R3(x2++,2);if(N.t=_,!N.__c&&(N.__=[j?j($):z$(void 0,$),function(O){var Y=N.__N?N.__N[0]:N.__[0],z=N.t(Y,O);Y!==z&&(N.__N=[z,N.__[1]],N.__c.setState({}))}],N.__c=l_,!l_.__f)){var Z=function(O,Y,z){if(!N.__c.__H)return!0;var W=N.__c.__H.__.filter(function(F){return F.__c});if(W.every(function(F){return!F.__N}))return!J||J.call(this,O,Y,z);var B=N.__c.props!==O;return W.some(function(F){if(F.__N){var C=F.__[0];F.__=F.__N,F.__N=void 0,C!==F.__[0]&&(B=!0)}}),J&&J.call(this,O,Y,z)||B};l_.__f=!0;var{shouldComponentUpdate:J,componentWillUpdate:K}=l_;l_.componentWillUpdate=function(O,Y,z){if(this.__e){var W=J;J=void 0,Z(O,Y,z),J=W}K&&K.call(this,O,Y,z)},l_.shouldComponentUpdate=Z}return N.__N||N.__}function v(_,$){var j=R3(x2++,3);!n_.__s&&K$(j.__H,$)&&(j.__=_,j.u=$,l_.__H.__h.push(j))}function H(_){return T2=5,d_(function(){return{current:_}},[])}function d_(_,$){var j=R3(x2++,7);return K$(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function S(_,$){return T2=8,d_(function(){return _},$)}function T8(){for(var _;_=J$.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(d2),$.__h.some(I3),$.__h=[]}catch(j){$.__h=[],n_.__e(j,_.__v)}}}n_.__b=function(_){l_=null,v1&&v1(_)},n_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),p1&&p1(_,$)},n_.__r=function(_){R1&&R1(_),x2=0;var $=(l_=_.__c).__H;$&&(S3===l_?($.__h=[],l_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(d2),$.__h.some(I3),$.__h=[],x2=0)),S3=l_},n_.diffed=function(_){g1&&g1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(J$.push($)!==1&&m1===n_.requestAnimationFrame||((m1=n_.requestAnimationFrame)||I8)(T8)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),S3=l_=null},n_.__c=function(_,$){$.some(function(j){try{j.__h.some(d2),j.__h=j.__h.filter(function(N){return!N.__||I3(N)})}catch(N){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],n_.__e(N,j.__v)}}),h1&&h1(_,$)},n_.unmount=function(_){i1&&i1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(N){try{d2(N)}catch(Z){$=Z}}),j.__H=void 0,$&&n_.__e($,j.__v))};var n1=typeof requestAnimationFrame=="function";function I8(_){var $,j=function(){clearTimeout(N),n1&&cancelAnimationFrame($),setTimeout(_)},N=setTimeout(j,35);n1&&($=requestAnimationFrame(j))}function d2(_){var $=l_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),l_=$}function I3(_){var $=l_;_.__c=_.__(),l_=$}function K$(_,$){return!_||_.length!==$.length||$.some(function(j,N){return j!==_[N]})}function z$(_,$){return typeof $=="function"?$(_):$}var O$=function(_,$,j,N){var Z;$[0]=0;for(var J=1;J<$.length;J++){var K=$[J++],O=$[J]?($[0]|=K?1:2,j[$[J++]]):$[++J];K===3?N[0]=O:K===4?N[1]=Object.assign(N[1]||{},O):K===5?(N[1]=N[1]||{})[$[++J]]=O:K===6?N[1][$[++J]]+=O+"":K?(Z=_.apply(O,O$(_,O,j,["",null])),N.push(Z),O[0]?$[0]|=2:($[J-2]=0,$[J]=Z)):N.push(O)}return N},l1=new Map;function u8(_){var $=l1.get(this);return $||($=new Map,l1.set(this,$)),($=O$(this,$.get(_)||($.set(_,$=function(j){for(var N,Z,J=1,K="",O="",Y=[0],z=function(F){J===1&&(F||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?Y.push(0,F,K):J===3&&(F||K)?(Y.push(3,F,K),J=2):J===2&&K==="..."&&F?Y.push(4,F,0):J===2&&K&&!F?Y.push(5,0,!0,K):J>=5&&((K||!F&&J===5)&&(Y.push(J,0,K,Z),J=6),F&&(Y.push(J,F,0,Z),J=6)),K=""},W=0;W<j.length;W++){W&&(J===1&&z(),z(W));for(var B=0;B<j[W].length;B++)N=j[W][B],J===1?N==="<"?(z(),Y=[Y],J=3):K+=N:J===4?K==="--"&&N===">"?(J=1,K=""):K=N+K[0]:O?N===O?O="":K+=N:N==='"'||N==="'"?O=N:N===">"?(z(),J=1):J&&(N==="="?(J=5,Z=K,K=""):N==="/"&&(J<5||j[W][B+1]===">")?(z(),J===3&&(Y=Y[0]),J=Y,(Y=Y[0]).push(2,0,J),J=0):N===" "||N==="\t"||N===`
`||N==="\r"?(z(),J=2):K+=N),J===3&&K==="!--"&&(J=4,Y=Y[0])}return z(),Y}(_)),$),arguments,[])).length>1?$:$[0]}var V=u8.bind(a1);async function N0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let N=await j.json().catch(()=>({error:"Unknown error"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}function Y$(_){let $=String(_||"").split(`
`),j="message",N=[];for(let J of $)if(J.startsWith("event:"))j=J.slice(6).trim()||"message";else if(J.startsWith("data:"))N.push(J.slice(5).trim());let Z=N.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function c8(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),N=new TextDecoder,Z="";while(!0){let{value:K,done:O}=await j.read();if(O)break;Z+=N.decode(K,{stream:!0});let Y=Z.split(`

`);Z=Y.pop()||"";for(let z of Y){let W=Y$(z);if(W)$(W.event,W.data)}}Z+=N.decode();let J=Y$(Z);if(J)$(J.event,J.data)}async function j3(_=10,$=null){let j=`/timeline?limit=${_}`;if($)j+=`&before=${$}`;return N0(j)}async function G$(_,$=50,j=0){return N0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}`)}async function L$(_,$=50,j=0){return N0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}`)}async function B$(_){return N0(`/thread/${_}`)}async function q$(_,$=!1){let j=`/post/${_}?cascade=${$?"true":"false"}`;return N0(j,{method:"DELETE"})}async function I2(_,$,j=null,N=[],Z=null){return N0(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:N,mode:Z})})}async function W$(){return N0("/agents")}async function V$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return N0(`/agent/status${$}`)}async function g3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return N0(`/agent/context${$}`)}async function h3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return N0(`/agent/queue-state${$}`)}async function i3(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function p3(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function U2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return N0(`/agent/models${$}`)}async function X$(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let N=await j.json().catch(()=>({error:"Upload failed"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function n3(_,$){let j=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function Q$(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function l3(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let J=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(J.error||`HTTP ${j.status}`)}let N=null,Z=null;if(await c8(j,(J,K)=>{if($.onEvent?.(J,K),J==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(J==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(J==="side_prompt_done")N=K;else if(J==="side_prompt_error")Z=K}),Z){let J=Error(Z?.error||"Side prompt failed");throw J.payload=Z,J}return N}async function U$(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function H$(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return N0(j)}async function F$(_,$,j){return N0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function t0(_){return`/media/${_}`}function y$(_){return`/media/${_}/thumbnail`}async function u2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function C$(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function D$(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function N3(_="",$=2,j=!1){let N=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return N0(N)}async function k$(_,$=20000,j=null){let N=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${N}`;return N0(Z)}async function E$(_){return N0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function o3(_,$="",j={}){let N=new FormData;N.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let J=Z.toString(),K=J?`/workspace/upload?${J}`:"/workspace/upload",O=await fetch(""+K,{method:"POST",body:N});if(!O.ok){let Y=await O.json().catch(()=>({error:"Upload failed"})),z=Error(Y.error||`HTTP ${O.status}`);throw z.status=O.status,z.code=Y.code,z}return O.json()}async function A$(_,$,j=""){let N=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Create failed"})),J=Error(Z.error||`HTTP ${N.status}`);throw J.status=N.status,J.code=Z.code,J}return N.json()}async function b$(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function w$(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Move failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function M$(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return N0($,{method:"DELETE"})}async function Z3(_,$=!1){return N0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function r3(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function P$(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class d3{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_queued",(_)=>{this.onEvent("agent_followup_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_consumed",(_)=>{this.onEvent("agent_followup_consumed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_removed",(_)=>{this.onEvent("agent_followup_removed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let N=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,N);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function S0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function u_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function E2(_,$=!1){let j=S0(_);if(j===null)return $;return j==="true"}function A2(_,$=null){let j=S0(_);if(j===null)return $;let N=parseInt(j,10);return Number.isFinite(N)?N:$}function J2({prefix:_="file",label:$,title:j,onRemove:N,onClick:Z,removeTitle:J="Remove",icon:K="file"}){let O=`${_}-file-pill`,Y=`${_}-file-name`,z=`${_}-file-remove`,W=K==="message"?V`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:V`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return V`
    <span class=${O} title=${j||$} onClick=${Z}>
      ${W}
      <span class=${Y}>${$}</span>
      ${N&&V`
        <button
          class=${z}
          onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),N()}}
          title=${J}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var v8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function R8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,N=_.contextWindow,Z=j!=null?`Context: ${S$(j)} / ${S$(N)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,J=7,K=2*Math.PI*7,O=$/100*K,Y=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return V`
        <span class="compose-context-pie icon-btn" title=${Z}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${Y}
                    stroke-width="2.5"
                    stroke-dasharray=${`${O} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function S$(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function f$({onPost:_,onFocus:$,searchMode:j,onSearch:N,onEnterSearch:Z,onExitSearch:J,fileRefs:K=[],onRemoveFileRef:O,onClearFileRefs:Y,messageRefs:z=[],onRemoveMessageRef:W,onClearMessageRefs:B,activeModel:F=null,modelUsage:C=null,thinkingLevel:A=null,supportsThinking:E=!1,contextUsage:R=null,notificationsEnabled:w=!1,notificationPermission:Q="default",onToggleNotifications:P,onModelChange:M,onModelStateChange:u,activeEditorPath:l=null,onAttachEditorFile:o,onOpenFilePill:Z_,followupQueueItems:z_=[],onInjectQueuedFollowup:a,onRemoveQueuedFollowup:L_,onSubmitIntercept:k_,onMessageResponse:d,isAgentActive:J_=!1}){let[r,__]=c(""),[$_,q_]=c(""),[j_,G_]=c([]),[y_,A_]=c(!1),[m_,T_]=c([]),[C0,b_]=c(0),[g_,N_]=c(!1),[W_,Q_]=c(!1),[U_,V_]=c(!1),[v_,R_]=c([]),[C_,O_]=c(!1),H_=H(null),o_=H(null),w_=H(null),a_=H(null),t_=H(0),c_=200,Z0=(U)=>{let I=new Set,t=[];for(let Y_ of U||[]){if(typeof Y_!=="string")continue;let D_=Y_.trim();if(!D_||I.has(D_))continue;I.add(D_),t.push(D_)}return t},e_=()=>{let U=S0("piclaw_compose_history");if(!U)return[];try{let I=JSON.parse(U);if(!Array.isArray(I))return[];return Z0(I)}catch{return[]}},G0=(U)=>{u_("piclaw_compose_history",JSON.stringify(U))},X0=H(e_()),_0=H(-1),x0=H(""),b0=r.trim()||j_.length>0||K.length>0||z.length>0,D0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),R0=typeof window<"u"&&typeof Notification<"u",h_=typeof window<"u"?Boolean(window.isSecureContext):!1,k0=R0&&h_&&Q!=="denied",i_=Q==="granted"&&w,f=i_?"Disable notifications":"Enable notifications",i=F||"",X_=E&&A?` (${A})`:"",M_=X_.trim()?`${A}`:"",J0=typeof C?.hint_short==="string"?C.hint_short.trim():"",_2=[M_||null,J0||null].filter(Boolean).join(" • "),E0=[i?`Current model: ${i}${X_}`:null,C?.plan?`Plan: ${C.plan}`:null,J0||null,C?.primary?.reset_description||null,C?.secondary?.reset_description||null].filter(Boolean),g0=W_?"Switching model…":E0.join(" • ")||`Current model: ${i}${X_} (tap to open model picker)`,$0=(U)=>{if(!U||typeof U!=="object")return;let I=U.model??U.current;if(typeof u==="function")u({model:I??null,thinking_level:U.thinking_level??null,supports_thinking:U.supports_thinking,provider_usage:U.provider_usage??null});if(I&&typeof M==="function")M(I)},A0=(U)=>{let I=U||H_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},L0=(U)=>{if(!U.startsWith("/")||U.includes(`
`)){N_(!1),T_([]);return}let I=U.toLowerCase().split(" ")[0];if(I.length<1){N_(!1),T_([]);return}let t=v8.filter((Y_)=>Y_.name.startsWith(I)||Y_.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(t.length>0&&!(t.length===1&&t[0].name===I))T_(t),b_(0),N_(!0);else N_(!1),T_([])},w0=(U)=>{let I=r,t=I.indexOf(" "),Y_=t>=0?I.slice(t):"",D_=U.name+Y_;__(D_),N_(!1),T_([]),requestAnimationFrame(()=>{let B_=H_.current;if(!B_)return;let P_=D_.length;B_.selectionStart=P_,B_.selectionEnd=P_,B_.focus()})},K0=(U)=>{if(j)q_(U);else __(U),L0(U);requestAnimationFrame(()=>A0())},T0=(U)=>{let I=j?$_:r,t=I&&!I.endsWith(`
`)?`
`:"",Y_=`${I}${t}${U}`.trimStart();K0(Y_)},y2=(U)=>{let I=U?.command?.model_label;if(I)return I;let t=U?.command?.message;if(typeof t==="string"){let Y_=t.match(/•\s+([^\n]+?)\s+\(current\)/);if(Y_?.[1])return Y_[1].trim()}return null},I0=async(U)=>{if(j||W_)return;Q_(!0);try{let I=await I2("default",U,null,[]),t=y2(I);$0({model:t??F??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let Y_=await U2();if(Y_)$0(Y_)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{Q_(!1)}},f_=async()=>{await I0("/cycle-model")},B0=async(U)=>{if(!U||W_)return;if(await I0(`/model ${U}`))V_(!1)},h0=(U)=>{U.preventDefault(),U.stopPropagation(),V_((I)=>!I)},p_=(U)=>{if(U==="queue"||U==="steer"||U==="auto")return U;return J_?"queue":null},r_=async(U,I,t={})=>{let{includeMedia:Y_=!0,includeFileRefs:D_=!0,includeMessageRefs:B_=!0,clearAfterSubmit:P_=!0,recordHistory:H0=!0}=t||{},Y0=typeof U==="string"?U:U&&typeof U?.target?.value==="string"?U.target.value:r,n0=typeof Y0==="string"?Y0:"";if(!n0.trim()&&(Y_?j_.length===0:!0)&&(D_?K.length===0:!0)&&(B_?z.length===0:!0))return;N_(!1),T_([]);let l0=Y_?[...j_]:[],o0=D_?[...K]:[],$2=B_?[...z]:[],F0=n0.trim();if(H0&&F0){let O2=X0.current,E_=Z0(O2.filter((M0)=>M0!==F0));if(E_.push(F0),E_.length>200)E_.splice(0,E_.length-200);X0.current=E_,G0(E_),_0.current=-1,x0.current=""}if(P_)__(""),G_([]),Y?.(),B?.();(async()=>{try{if(await k_?.({content:F0,submitMode:I,fileRefs:o0,messageRefs:$2,mediaFiles:l0})){_?.();return}let E_=[];for(let y0 of l0){let z0=await X$(y0);E_.push(z0.id)}let M0=o0.length?`Files:
${o0.map((y0)=>`- ${y0}`).join(`
`)}`:"",V2=$2.length?`Referenced messages:
${$2.map((y0)=>`- message:${y0}`).join(`
`)}`:"",P2=E_.length?`Images:
${E_.map((y0,z0)=>{let Y2=l0[z0]?.name||`image-${z0+1}`;return`- attachment:${y0} (${Y2})`}).join(`
`)}`:"",X2=[F0,M0,V2,P2].filter(Boolean).join(`

`),r0=await I2("default",X2,null,E_,p_(I));if(d?.(r0),r0?.command){$0({model:r0.command.model_label??F??null,thinking_level:r0.command.thinking_level,supports_thinking:r0.command.supports_thinking});try{let y0=await U2();if(y0)$0(y0)}catch{}}_?.()}catch(O2){console.error("Failed to post:",O2)}})()},Q0=(U)=>{a?.(U)},i0=(U)=>{if(U.isComposing)return;if(j&&U.key==="Escape"){U.preventDefault(),q_(""),J?.();return}if(g_&&m_.length>0){let I=H_.current?.value??(j?$_:r);if(!String(I||"").startsWith("/"))N_(!1),T_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),b_((t)=>(t+1)%m_.length);return}if(U.key==="ArrowUp"){U.preventDefault(),b_((t)=>(t-1+m_.length)%m_.length);return}if(U.key==="Tab"){U.preventDefault(),w0(m_[C0]);return}if(U.key==="Enter"&&!U.shiftKey){if(!(H_.current?.value??(j?$_:r)).includes(" ")){U.preventDefault();let D_=m_[C0];N_(!1),T_([]),r_(D_.name);return}}if(U.key==="Escape"){U.preventDefault(),N_(!1),T_([]);return}}}if(!j&&(U.key==="ArrowUp"||U.key==="ArrowDown")&&!U.metaKey&&!U.ctrlKey&&!U.altKey&&!U.shiftKey){let I=H_.current;if(!I)return;let t=I.value||"",Y_=I.selectionStart===0&&I.selectionEnd===0,D_=I.selectionStart===t.length&&I.selectionEnd===t.length;if(U.key==="ArrowUp"&&Y_||U.key==="ArrowDown"&&D_){let B_=X0.current;if(!B_.length)return;U.preventDefault();let P_=_0.current;if(U.key==="ArrowUp"){if(P_===-1)x0.current=t,P_=B_.length-1;else if(P_>0)P_-=1;_0.current=P_,K0(B_[P_]||"")}else{if(P_===-1)return;if(P_<B_.length-1)P_+=1,_0.current=P_,K0(B_[P_]||"");else _0.current=-1,K0(x0.current||""),x0.current=""}requestAnimationFrame(()=>{let H0=H_.current;if(!H0)return;let Y0=H0.value.length;H0.selectionStart=Y0,H0.selectionEnd=Y0});return}}if(U.key==="Enter"&&!U.shiftKey&&(U.ctrlKey||U.metaKey)){U.preventDefault();let I=H_.current?.value??(j?$_:r);if(j){if(I.trim())N?.(I.trim())}else r_(I,"steer");return}if(U.key==="Enter"&&!U.shiftKey){U.preventDefault();let I=H_.current?.value??(j?$_:r);if(j){if(I.trim())N?.(I.trim())}else r_(I)}},u0=(U)=>{let I=Array.from(U||[]).filter((t)=>t&&t.type&&t.type.startsWith("image/"));if(!I.length)return;G_((t)=>[...t,...I])},c0=(U)=>{u0(U.target.files),U.target.value=""},p0=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),t_.current+=1,A_(!0)},U0=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),t_.current=Math.max(0,t_.current-1),t_.current===0)A_(!1)},q2=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),U.dataTransfer)U.dataTransfer.dropEffect="copy";A_(!0)},W2=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),t_.current=0,A_(!1),u0(U.dataTransfer?.files||[])},C2=(U)=>{if(j)return;let I=U.clipboardData?.items;if(!I||!I.length)return;let t=[];for(let Y_ of I){if(Y_.kind!=="file")continue;let D_=Y_.getAsFile?.();if(D_)t.push(D_)}if(t.length>0)U.preventDefault(),u0(t)},q0=(U)=>{G_((I)=>I.filter((t,Y_)=>Y_!==U))},m0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((U)=>{let{latitude:I,longitude:t,accuracy:Y_}=U.coords,D_=`${I.toFixed(5)}, ${t.toFixed(5)}`,B_=Number.isFinite(Y_)?` ±${Math.round(Y_)}m`:"",P_=`https://maps.google.com/?q=${I},${t}`,H0=`Location: ${D_}${B_} ${P_}`;T0(H0)},(U)=>{let I=U?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!U_)return;O_(!0),U2().then((U)=>{let I=Array.isArray(U?.models)?U.models.filter((t)=>typeof t==="string"&&t.trim().length>0):[];R_(I),$0(U)}).catch((U)=>{console.warn("Failed to load model list:",U),R_([])}).finally(()=>{O_(!1)})},[U_,F]),v(()=>{if(j)V_(!1)},[j]),v(()=>{if(!U_)return;let U=(I)=>{let t=w_.current,Y_=a_.current,D_=I.target;if(t&&t.contains(D_))return;if(Y_&&Y_.contains(D_))return;V_(!1)};return document.addEventListener("pointerdown",U),()=>document.removeEventListener("pointerdown",U)},[U_]);let W0=(U)=>{let I=U.target.value;A0(U.target),K0(I)};return v(()=>{requestAnimationFrame(()=>A0())},[r,$_,j]),V`
        <div class="compose-box">
            ${!j&&z_.length>0&&V`
                <div class="compose-queue-stack">
                    ${z_.map((U)=>{let I=typeof U?.content==="string"?U.content:"";if(!I.trim())return null;return V`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${I}>
                                    ${I}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>Q0(U)}
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
                                    onClick=${()=>L_?.(U)}
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
                class=${`compose-input-wrapper${y_?" drag-active":""}`}
                onDragEnter=${p0}
                onDragOver=${q2}
                onDragLeave=${U0}
                onDrop=${W2}
            >
                <div class="compose-input-main">
                    ${(K.length>0||j_.length>0||z.length>0)&&V`
                        <div class="compose-file-refs">
                            ${z.map((U)=>{return V`
                                    <${J2}
                                        key=${"msg-"+U}
                                        prefix="compose"
                                        label=${"msg:"+U}
                                        title=${"Message reference: "+U}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>W?.(U)}
                                    />
                                `})}
                            ${K.map((U)=>{let I=U.split("/").pop()||U;return V`
                                    <${J2}
                                        prefix="compose"
                                        label=${I}
                                        title=${U}
                                        onClick=${()=>Z_?.(U)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>O?.(U)}
                                    />
                                `})}
                            ${j_.map((U,I)=>{let t=U?.name||`image-${I+1}`;return V`
                                    <${J2}
                                        key=${t+I}
                                        prefix="compose"
                                        label=${t}
                                        title=${t}
                                        removeTitle="Remove image"
                                        onRemove=${()=>q0(I)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${H_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?$_:r}
                        onInput=${W0}
                        onKeyDown=${i0}
                        onPaste=${C2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${g_&&m_.length>0&&V`
                        <div class="slash-autocomplete" ref=${o_}>
                            ${m_.map((U,I)=>V`
                                <div
                                    key=${U.name}
                                    class=${`slash-item${I===C0?" active":""}`}
                                    onMouseDown=${(t)=>{t.preventDefault(),w0(U)}}
                                    onMouseEnter=${()=>b_(I)}
                                >
                                    <span class="slash-name">${U.name}</span>
                                    <span class="slash-desc">${U.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${U_&&!j&&V`
                        <div class="compose-model-popup" ref=${w_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C_&&V`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C_&&v_.length===0&&V`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C_&&v_.map((U)=>V`
                                    <button
                                        key=${U}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${F===U?" active":""}`}
                                        onClick=${()=>{B0(U)}}
                                        disabled=${W_}
                                    >
                                        ${U}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{f_()}}
                                    disabled=${W_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!j&&F&&V`
                    <div class="compose-meta-row">
                        ${!j&&F&&V`
                            <div class="compose-model-meta">
                                <button
                                    ref=${a_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${g0}
                                    aria-label="Open model picker"
                                    onClick=${h0}
                                    disabled=${W_}
                                >
                                    ${W_?"Switching…":i}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!W_&&_2&&V`
                                        <span class="compose-model-usage-hint" title=${g0}>
                                            ${_2}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${!j&&R&&R.percent!=null&&V`
                        <${R8} usage=${R} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?J:Z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?V`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:V`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${D0&&!j&&V`
                        <button
                            class="icon-btn location-btn"
                            onClick=${m0}
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
                    ${k0&&!j&&V`
                        <button
                            class=${`icon-btn notification-btn${i_?" active":""}`}
                            onClick=${P}
                            title=${f}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&V`
                        ${l&&o&&V`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${o}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${K.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${c0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{r_()}}
                            disabled=${!b0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var T$="piclaw_theme",t3="piclaw_tint",z3={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},g8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},x$={default:{label:"Default",mode:"auto",light:z3,dark:g8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},h8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],O3={theme:"default",tint:null},I$="light",s3=!1;function u$(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function b2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let N=j.length===3?j.split("").map((J)=>J+J).join(""):j,Z=parseInt(N,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${N.toLowerCase()}`}}function i8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let N=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),N=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=N.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let J=parseInt(Z[1],10),K=parseInt(Z[2],10),O=parseInt(Z[3],10);if(![J,K,O].every((z)=>Number.isFinite(z)))return null;let Y=`#${[J,K,O].map((z)=>z.toString(16).padStart(2,"0")).join("")}`;return{r:J,g:K,b:O,hex:Y}}function c$(_){return b2(_)||i8(_)}function c2(_,$,j){let N=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),J=Math.round(_.b+($.b-_.b)*j);return`rgb(${N} ${Z} ${J})`}function a3(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function m$(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function e3(_){return x$[_]||x$.default}function p8(_){return _.mode==="auto"?m$():_.mode}function n8(_,$){let j=e3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||z3}function l8(_,$,j){let N=c$($);if(!N)return _;let Z=b2(_.bgPrimary),J=b2(_.bgSecondary),K=b2(_.bgHover),O=b2(_.borderColor);if(!Z||!J||!K||!O)return _;let z=b2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:c2(Z,N,0.08),bgSecondary:c2(J,N,0.12),bgHover:c2(K,N,0.16),borderColor:c2(O,N,0.08),accent:N.hex,accentHover:z?c2(N,z,0.18):N.hex}}function o8(_,$){if(typeof document>"u")return;let j=document.documentElement,N=_.accent,Z=c$(N),J=Z?a3(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=Z?a3(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",O=Z?a3(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",Y={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":N,"--accent-hover":_.accentHover||N,"--accent-soft":K,"--accent-soft-strong":O,"--danger-color":_.danger||z3.danger,"--success-color":_.success||z3.success,"--search-highlight-color":J||"rgba(29, 155, 240, 0.2)"};Object.entries(Y).forEach(([z,W])=>{if(W)j.style.setProperty(z,W)})}function r8(){if(typeof document>"u")return;let _=document.documentElement;h8.forEach(($)=>_.style.removeProperty($))}function J3(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function d8(_,$){if(typeof document>"u")return;let j=J3("theme-color");if(j&&_)j.setAttribute("content",_);let N=J3("msapplication-TileColor");if(N&&_)N.setAttribute("content",_);let Z=J3("msapplication-navbutton-color");if(Z&&_)Z.setAttribute("content",_);let J=J3("apple-mobile-web-app-status-bar-style");if(J)J.setAttribute("content",$==="dark"?"black-translucent":"default")}function s8(){if(typeof window>"u")return;let _={...O3,mode:I$};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function _1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=u$(_?.theme||"default"),N=_?.tint?String(_.tint).trim():null,Z=e3(j),J=p8(Z),K=n8(j,J);O3={theme:j,tint:N},I$=J;let O=document.documentElement;O.dataset.theme=J,O.dataset.colorTheme=j,O.dataset.tint=N?String(N):"",O.style.colorScheme=J;let Y=K;if(j==="default"&&N)Y=l8(K,N,J);if(j==="default"&&!N)r8();else o8(Y,J);if(d8(Y.bgPrimary,J),s8(),$.persist!==!1)if(u_(T$,j),N)u_(t3,N);else u_(t3,"")}function K3(){if(e3(O3.theme).mode!=="auto")return;_1(O3,{persist:!1})}function v$(){if(typeof window>"u")return()=>{};let _=u$(S0(T$)||"default"),$=S0(t3),j=$?$.trim():null;if(_1({theme:_,tint:j},{persist:!1}),window.matchMedia&&!s3){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",K3);else if(N.addListener)N.addListener(K3);return s3=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",K3);else if(N.removeListener)N.removeListener(K3);s3=!1}}return()=>{}}function R$(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,N=_.tint??null;_1({theme:j||"default",tint:N},{persist:!0})}function g$(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return m$()}var Y3=/#(\w+)/g,a8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),t8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),e8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),_6={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},$6=new Set(["http:","https:","mailto:",""]);function h$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function H2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let N=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!$6.has(N.protocol))return null;return N.href}catch{return null}}function i$(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),N=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),J;while(J=Z.nextNode())N.push(J);for(let K of N){let O=K.tagName.toLowerCase();if(!t8.has(O)){let z=K.parentNode;if(!z)continue;while(K.firstChild)z.insertBefore(K.firstChild,K);z.removeChild(K);continue}let Y=_6[O]||new Set;for(let z of Array.from(K.attributes)){let W=z.name.toLowerCase(),B=z.value;if(W.startsWith("on")){K.removeAttribute(z.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(Y.has(W)||e8.has(W)){if(W==="href"){let F=H2(B);if(!F)K.removeAttribute(z.name);else if(K.setAttribute(z.name,F),O==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let F=O==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(B):B,C=H2(F,{allowDataImage:O==="img"});if(!C)K.removeAttribute(z.name);else K.setAttribute(z.name,C)}continue}K.removeAttribute(z.name)}}return j.body.innerHTML}function p$(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function G3(_,$=2){if(!_)return _;let j=_;for(let N=0;N<$;N+=1){let Z=p$(j);if(Z===j)break;j=Z}return j}function j6(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=[],J=!1,K=[];for(let O of j){if(!J&&O.trim().match(/^```mermaid\s*$/i)){J=!0,K=[];continue}if(J&&O.trim().match(/^```\s*$/)){let Y=N.length;N.push(K.join(`
`)),Z.push(`@@MERMAID_BLOCK_${Y}@@`),J=!1,K=[];continue}if(J)K.push(O);else Z.push(O)}if(J)Z.push("```mermaid"),Z.push(...K);return{text:Z.join(`
`),blocks:N}}function N6(_){if(!_)return _;return G3(_,5)}function Z6(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let N of $)j+=String.fromCharCode(N);return btoa(j)}function J6(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let N=0;N<$.length;N+=1)j[N]=$.charCodeAt(N);return new TextDecoder().decode(j)}function K6(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,N)=>{let Z=Number(N),J=$[Z]??"",K=N6(J);return`<div class="mermaid-container" data-mermaid="${Z6(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function n$(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function l$(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let N=j.trim(),Z=N.startsWith("/"),J=Z?N.slice(1).trim():N,Y=(J.endsWith("/")?J.slice(0,-1).trim():J).split(/\s+/)[0]?.toLowerCase();if(!Y||!a8.has(Y))return $;if(Y==="br")return Z?"":"<br>";if(Z)return`</${Y}>`;return`<${Y}>`})}function o$(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,N)=>`<pre><code>${$(N)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,N)=>`<code>${$(N)}</code>`)}function r$(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=(J)=>J.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let J=N(Z.nodeValue);if(J!==Z.nodeValue)Z.nodeValue=J}return $.body.innerHTML}function z6(_){if(!window.katex)return _;let $=(K)=>p$(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let O=[],Y=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(z)=>{let W=O.length;return O.push(z),`@@CODE_BLOCK_${W}@@`});return Y=Y.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(z)=>{let W=O.length;return O.push(z),`@@CODE_INLINE_${W}@@`}),{html:Y,blocks:O}},N=(K,O)=>{if(!O.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(Y,z)=>{let W=Number(z);return O[W]??""})},Z=j(_),J=Z.html;return J=J.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,O,Y)=>{try{let z=katex.renderToString($(Y.trim()),{displayMode:!0,throwOnError:!1});return`${O}${z}`}catch(z){return`<span class="math-error" title="${h$(z.message)}">${K}</span>`}}),J=J.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,O,Y)=>{if(/\s$/.test(Y))return K;try{let z=katex.renderToString($(Y),{displayMode:!1,throwOnError:!1});return`${O}${z}`}catch(z){return`${O}<span class="math-error" title="${h$(z.message)}">$${Y}$</span>`}}),N(J,Z.blocks)}function O6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=[],Z;while(Z=j.nextNode())N.push(Z);for(let J of N){let K=J.nodeValue;if(!K)continue;if(Y3.lastIndex=0,!Y3.test(K))continue;Y3.lastIndex=0;let O=J.parentElement;if(O&&(O.closest("a")||O.closest("code")||O.closest("pre")))continue;let Y=K.split(Y3);if(Y.length<=1)continue;let z=$.createDocumentFragment();Y.forEach((W,B)=>{if(B%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",W),F.textContent=`#${W}`,z.appendChild(F)}else z.appendChild($.createTextNode(W))}),J.parentNode?.replaceChild(z,J)}return $.body.innerHTML}function Y6(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=!1;for(let J of j){if(!Z&&J.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,N.push("$$");continue}if(Z&&J.trim().match(/^```\s*$/)){Z=!1,N.push("$$");continue}N.push(J)}return N.join(`
`)}function e0(_,$,j={}){if(!_)return"";let N=Y6(_),{text:Z,blocks:J}=j6(N),K=G3(Z,2),Y=n$(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=l$(Y),W=window.marked?marked.parse(z,{headerIds:!1,mangle:!1}):z.replace(/\n/g,"<br>");return W=o$(W),W=r$(W),W=z6(W),W=O6(W),W=K6(W,J),W=i$(W,j),W}function L3(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=G3($,2),Z=n$(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),J=l$(Z),K=window.marked?marked.parse(J):J.replace(/\n/g,"<br>");return K=o$(K),K=r$(K),K=i$(K),K}async function K2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=g$()==="dark"?j["tokyo-night"]:j["github-light"],J=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of J)try{let O=K.dataset.mermaid,Y=J6(O||""),z=G3(Y,2),W=await $(z,{...Z,transparent:!0});K.innerHTML=W,K.removeAttribute("data-mermaid")}catch(O){console.error("Mermaid render error:",O);let Y=document.createElement("pre");Y.className="mermaid-error",Y.textContent=`Diagram error: ${O.message}`,K.innerHTML="",K.appendChild(Y),K.removeAttribute("data-mermaid")}}function d$(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function s$(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function a$(_){if(!_)return!1;return _.status!=="running"}function t$(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function e$({session:_,onClose:$,onInject:j,onRetry:N}){let Z=H(null),J=H(null),K=_?.thinking?L3(_.thinking):"",O=_?.answer?e0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Z.current&&K)K2(Z.current).catch(()=>{})},[K]),v(()=>{if(J.current&&O)K2(J.current).catch(()=>{})},[O]),!_)return null;let Y=_.status==="running",z=Boolean(String(_.answer||"").trim()),W=Boolean(String(_.thinking||"").trim()),B=s$(_),F=a$(_),C=!Y&&z,A=Y?"Thinking…":_.status==="error"?"Error":"Done";return V`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">BTW</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${A}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&V`<div class="btw-block btw-question"><strong>Question:</strong> ${_.question}</div>`}
            ${_.error&&V`<div class="btw-block btw-error">${_.error}</div>`}
            ${W&&V`
                <details class="btw-block btw-thinking" open=${Y?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${B&&V`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${J}
                        dangerouslySetInnerHTML=${{__html:O}}
                    ></div>
                </div>
            `}

            ${F&&V`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&V`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>N?.()}>
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
    `}var _4="PiClaw";function $1(_,$){let j=_||"PiClaw",N=j.charAt(0).toUpperCase(),Z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],J=N.charCodeAt(0)%Z.length,K=Z[J],O=j.trim().toLowerCase(),Y=typeof $==="string"?$.trim():"",W=(Y?Y:null)||(O==="PiClaw".toLowerCase()||O==="pi"?"/static/icon-192.png":null);return{letter:N,color:K,image:W}}function $4(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function j4(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function N4(_){if(!_)return null;if(typeof document<"u"){let J=document.documentElement,K=J?.dataset?.colorTheme||"",O=J?.dataset?.tint||"",Y=getComputedStyle(J).getPropertyValue("--accent-color")?.trim();if(Y&&(O||K&&K!=="default"))return Y}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),N=0;for(let J=0;J<j.length;J+=1)N=(N*31+j.charCodeAt(J))%2147483647;let Z=Math.abs(N)%$.length;return $[Z]}function G6(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function B3(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function L6(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,N=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(N).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${N}:${String(j).padStart(2,"0")}`}function Z4(_,$=Date.now()){let j=G6(_);if(j===null)return null;return L6(Math.max(0,$-j))}function J4({status:_,draft:$,plan:j,thought:N,pendingRequest:Z,intent:J,turnId:K,steerQueued:O,onPanelToggle:Y}){let B=(N_)=>{if(!N_)return{text:"",totalLines:0,fullText:""};if(typeof N_==="string"){let V_=N_,v_=V_?V_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:V_,totalLines:v_,fullText:V_}}let W_=N_.text||"",Q_=N_.fullText||N_.full_text||W_,U_=Number.isFinite(N_.totalLines)?N_.totalLines:Q_?Q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W_,totalLines:U_,fullText:Q_}},F=160,C=(N_)=>{if(!N_)return 1;return Math.max(1,Math.ceil(N_.length/160))},A=(N_,W_,Q_)=>{let U_=(N_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!U_)return{text:"",omitted:0,totalLines:Number.isFinite(Q_)?Q_:0,visibleLines:0};let V_=U_.split(`
`),v_=V_.length>W_?V_.slice(0,W_).join(`
`):U_,R_=Number.isFinite(Q_)?Q_:V_.reduce((H_,o_)=>H_+C(o_),0),C_=v_?v_.split(`
`).reduce((H_,o_)=>H_+C(o_),0):0,O_=Math.max(R_-C_,0);return{text:v_,omitted:O_,totalLines:R_,visibleLines:C_}},E=B(j),R=B(N),w=B($),Q=Boolean(E.text)||E.totalLines>0,P=Boolean(R.text)||R.totalLines>0,M=Boolean(w.fullText?.trim()||w.text?.trim());if(!_&&!M&&!Q&&!P&&!Z&&!J)return null;let[u,l]=c(new Set),[o,Z_]=c(()=>Date.now()),z_=(N_)=>l((W_)=>{let Q_=new Set(W_),U_=!Q_.has(N_);if(U_)Q_.add(N_);else Q_.delete(N_);if(typeof Y==="function")Y(N_,U_);return Q_});v(()=>{l(new Set)},[K]);let a=B3(_);v(()=>{if(!a)return;Z_(Date.now());let N_=setInterval(()=>Z_(Date.now()),1000);return()=>clearInterval(N_)},[a,_?.started_at,_?.startedAt]);let L_=_?.turn_id||K,k_=N4(L_),d=O?"turn-dot turn-dot-queued":"turn-dot",J_=(N_)=>N_,r=Boolean(_?.last_activity||_?.lastActivity),__=(N_)=>N_==="warning"?"#f59e0b":N_==="error"?"var(--danger-color)":N_==="success"?"var(--success-color)":k_,$_=J?.kind||"info",q_=__($_),j_=__(_?.kind||(a?"warning":"info")),G_="",y_=_?.title,A_=_?.status;if(_?.type==="plan")G_=y_?`Planning: ${y_}`:"Planning...";else if(_?.type==="tool_call")G_=y_?`Running: ${y_}`:"Running tool...";else if(_?.type==="tool_status")G_=y_?`${y_}: ${A_||"Working..."}`:A_||"Working...";else if(_?.type==="error")G_=y_||"Agent error";else G_=y_||A_||"Working...";if(r)G_="Last activity just now";let m_=({panelTitle:N_,text:W_,fullText:Q_,totalLines:U_,maxLines:V_,titleClass:v_,panelKey:R_})=>{let C_=u.has(R_),O_=Q_||W_||"",H_=typeof V_==="number",o_=C_&&H_,w_=H_?A(O_,V_,U_):{text:O_||"",omitted:0,totalLines:Number.isFinite(U_)?U_:0};if(!O_&&!(Number.isFinite(w_.totalLines)&&w_.totalLines>0))return null;let a_=`agent-thinking-body${H_?" agent-thinking-body-collapsible":""}`,t_=H_?`--agent-thinking-collapsed-lines: ${V_};`:"";return V`
            <div
                class="agent-thinking"
                data-expanded=${C_?"true":"false"}
                data-collapsible=${H_?"true":"false"}
                style=${k_?`--turn-color: ${k_};`:""}
            >
                <div class="agent-thinking-title ${v_||""}">
                    ${k_&&V`<span class=${d} aria-hidden="true"></span>`}
                    ${N_}
                    ${o_&&V`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${N_} panel`}
                            onClick=${()=>z_(R_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${a_}
                    style=${t_}
                    dangerouslySetInnerHTML=${{__html:L3(O_)}}
                />
                ${!C_&&w_.omitted>0&&V`
                    <button class="agent-thinking-truncation" onClick=${()=>z_(R_)}>
                        ▸ ${w_.omitted} more lines
                    </button>
                `}
                ${C_&&w_.omitted>0&&V`
                    <button class="agent-thinking-truncation" onClick=${()=>z_(R_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},T_=Z?.tool_call?.title,C0=T_?`Awaiting approval: ${T_}`:"Awaiting approval",b_=a?Z4(_,o):null,g_=(N_,W_,Q_=null)=>V`
        <div
            class="agent-thinking agent-thinking-intent"
            aria-live="polite"
            style=${W_?`--turn-color: ${W_};`:""}
            title=${N_?.detail||""}
        >
            <div class="agent-thinking-title intent">
                ${W_&&V`<span class=${d} aria-hidden="true"></span>`}
                <span class="agent-thinking-title-text">${N_.title}</span>
                ${Q_&&V`<span class="agent-status-elapsed">${Q_}</span>`}
            </div>
            ${N_.detail&&V`<div class="agent-thinking-body">${N_.detail}</div>`}
        </div>
    `;return V`
        <div class="agent-status-panel">
            ${J&&g_(J,q_)}
            ${_?.type==="intent"&&g_(_,j_,b_)}
            ${Z&&V`
                <div class="agent-status agent-status-request" aria-live="polite" style=${k_?`--turn-color: ${k_};`:""}>
                    <span class=${d} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${C0}</span>
                </div>
            `}
            ${Q&&m_({panelTitle:J_("Planning"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,panelKey:"plan"})}
            ${P&&m_({panelTitle:J_("Thoughts"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${M&&m_({panelTitle:J_("Draft"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&V`
                <div class=${`agent-status${r?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${k_?`--turn-color: ${k_};`:""}>
                    ${k_&&V`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?V`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!r&&V`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${G_}</span>
                </div>
            `}
        </div>
    `}function K4({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:N,options:Z}=_,J=N?.title||"Agent Request",K=N?.kind||"other",O=N?.rawInput||{},Y=O.command||O.commands&&O.commands[0]||null,z=O.diff||null,W=O.fileName||O.path||null,B=N?.description||O.description||O.explanation||null,C=(Array.isArray(N?.locations)?N.locations:[]).map((Q)=>Q?.path).filter((Q)=>Boolean(Q)),A=Array.from(new Set([W,...C].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:N,options:Z});let E=async(Q)=>{try{await n3(j,Q),$()}catch(P){console.error("Failed to respond to agent request:",P)}},R=async()=>{try{await U$(J,`Auto-approved: ${J}`),await n3(j,"approved"),$()}catch(Q){console.error("Failed to add to whitelist:",Q)}},w=Z&&Z.length>0;return V`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${J}</div>
                </div>
                ${(B||Y||z||A.length>0)&&V`
                    <div class="agent-request-body">
                        ${B&&V`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${A.length>0&&V`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${A.map((Q,P)=>V`<li key=${P}>${Q}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${Y&&V`
                            <pre class="agent-request-command">${Y}</pre>
                        `}
                        ${z&&V`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${z}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${w?Z.map((Q)=>V`
                            <button 
                                key=${Q.optionId||Q.id||String(Q)}
                                class="agent-request-btn ${Q.kind==="allow_once"||Q.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(Q.optionId||Q.id||Q)}
                            >
                                ${Q.name||Q.label||Q.optionId||Q.id||String(Q)}
                            </button>
                        `):V`
                        <button class="agent-request-btn primary" onClick=${()=>E("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>E("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${R}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function z4({status:_}){if(_==="connected")return null;return V`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function O4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let N=new Date-$,Z=N/1000,J=86400000;if(N<J){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(N<5*J){let Y=$.toLocaleDateString(void 0,{weekday:"short"}),z=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${z}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${O}`}function m2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function f0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function F2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var B6=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),q6=new Set(["text/markdown"]);function v2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(B6.has($)||$.startsWith("text/"))return"text";return"unsupported"}function Y4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return q6.has($)}function G4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function L4(){let _=getComputedStyle(document.documentElement),$=(F,C)=>{for(let A of F){let E=_.getPropertyValue(A).trim();if(E)return E}return C},j=$(["--text-primary","--color-text"],"#0f1419"),N=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),J=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),O=$(["--success-color","--color-success"],"#00ba7c"),Y=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),z=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4");return{fontFamily:$(["--font-family"],"system-ui, sans-serif"),containerStyles:{default:{backgroundColor:Z,foregroundColors:{default:{default:j,subtle:N},accent:{default:K,subtle:K},good:{default:O,subtle:O},warning:{default:Y,subtle:Y},attention:{default:z,subtle:z}}},emphasis:{backgroundColor:J,foregroundColors:{default:{default:j,subtle:N},accent:{default:K,subtle:K},good:{default:O,subtle:O},warning:{default:Y,subtle:Y},attention:{default:z,subtle:z}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:W},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var W6=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),B4=!1,q3=null;function j1(_){_.querySelector(".adaptive-card-notice")?.remove()}function V6(_,$,j="error"){j1(_);let N=document.createElement("div");N.className=`adaptive-card-notice adaptive-card-notice-${j}`,N.textContent=$,_.appendChild(N)}async function X6(){if(B4)return;if(q3)return q3;return q3=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{B4=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),q3}function Q6(){return globalThis.AdaptiveCards}function U6(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function H6(_){return W6.has(_)}function Z1(_){if(!Array.isArray(_))return[];return _.filter(U6)}function F6(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",N=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,J=_?.data??$?.data;return{type:j,title:N,data:J,url:Z,raw:_}}function N1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>N1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,N])=>`${j}: ${N1(N)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function y6(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return N1($);return typeof $==="string"?$:String($)}function C6(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,N=(Z)=>{if(Array.isArray(Z))return Z.map((O)=>N(O));if(!Z||typeof Z!=="object")return Z;let K={...Z};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=y6(K.type,j[K.id],K);for(let[O,Y]of Object.entries(K))if(Array.isArray(Y)||Y&&typeof Y==="object")K[O]=N(Y);return K};return N(_)}function D6(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function k6(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function E6(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,N=j&&typeof j.title==="string"?j.title.trim():"",Z=k6(_.completed_at||j?.submitted_at),J=[N||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:J}}async function q4(_,$,j){if(!H6($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await X6()}catch(N){return console.error("[adaptive-card] Failed to load SDK:",N),!1}try{let N=Q6(),Z=new N.AdaptiveCard;Z.hostConfig=new N.HostConfig(L4());let J=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:C6($.payload,J);Z.parse(K),Z.onExecuteAction=(z)=>{let W=F6(z);if(j?.onAction)j1(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let F=B instanceof Error?B.message:String(B||"Action failed.");V6(_,F||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let O=Z.render();if(!O)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container");let Y=E6($);if(Y){_.classList.add("adaptive-card-finished");let z=document.createElement("div");z.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=Y.label,z.appendChild(W),Y.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=Y.detail,z.appendChild(B)}_.appendChild(z)}if(j1(_),_.appendChild(O),Y)D6(O);return!0}catch(N){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,N),!1}}function w2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>w2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${w2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function A6(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function J1(_){if(!Array.isArray(_))return[];return _.filter(A6)}function W4(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let N=w2(j);return N?`Card submission: ${$} — ${N}`:`Card submission: ${$}`}if(typeof j==="object"){let N=Object.entries(j).filter(([Z])=>!Z.startsWith("__")).map(([Z,J])=>({key:Z,value:w2(J)})).filter((Z)=>Z.value).slice(0,4).map(({key:Z,value:J})=>`${Z}: ${J}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function V4(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([Z])=>!Z.startsWith("__")).map(([Z,J])=>({key:Z,value:w2(J)})).filter((Z)=>Z.value).slice(0,4):[],N=j.length>0?j.map(({key:Z,value:J})=>`${Z}: ${J}`).join(", "):w2(_.data)||null;return{title:$,summary:N,fields:j,submittedAt:_.submitted_at}}function b6(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?f0($):null},{label:"Added",value:_?.created_at?F2(_.created_at):null}].filter((N)=>N.value)}function X4({mediaId:_,info:$,onClose:j}){let N=$?.filename||`attachment-${_}`,Z=d_(()=>v2($?.content_type),[$?.content_type]),J=G4(Z),K=d_(()=>Y4($?.content_type),[$?.content_type]),[O,Y]=c(Z==="text"||Z==="pdf"),[z,W]=c(""),[B,F]=c(null),[C,A]=c(null),E=H(null),R=d_(()=>b6($),[$]),w=d_(()=>{if(!K||!z)return"";return e0(z)},[K,z]);return v(()=>{let Q=(P)=>{if(P.key==="Escape")j()};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[j]),v(()=>{if(!E.current||!w)return;K2(E.current);return},[w]),v(()=>{let Q=!1,P=null;async function M(){if(Z==="text"){Y(!0),A(null);try{let u=await C$(_);if(!Q)W(u)}catch{if(!Q)A("Failed to load text preview.")}finally{if(!Q)Y(!1)}return}if(Z==="pdf"){Y(!0),A(null);try{let u=await D$(_);if(P=URL.createObjectURL(u),!Q)F(P)}catch{if(!Q)A("Failed to load PDF preview.")}finally{if(!Q)Y(!1)}return}Y(!1)}return M(),()=>{if(Q=!0,P)URL.revokeObjectURL(P)}},[_,Z]),V`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(Q)=>{Q.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${N}</div>
                        <div class="attachment-preview-subtitle">${J}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${t0(_)}
                            download=${N}
                            class="attachment-preview-download"
                            onClick=${(Q)=>Q.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${O&&V`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!O&&C&&V`<div class="attachment-preview-state">${C}</div>`}
                    ${!O&&!C&&Z==="image"&&V`
                        <img class="attachment-preview-image" src=${t0(_)} alt=${N} />
                    `}
                    ${!O&&!C&&Z==="pdf"&&B&&V`
                        <iframe class="attachment-preview-frame" src=${B} title=${N}></iframe>
                    `}
                    ${!O&&!C&&Z==="text"&&K&&V`
                        <div
                            ref=${E}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:w}}
                        />
                    `}
                    ${!O&&!C&&Z==="text"&&!K&&V`
                        <pre class="attachment-preview-text">${z}</pre>
                    `}
                    ${!O&&!C&&Z==="unsupported"&&V`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${R.map((Q)=>V`
                        <div class="attachment-preview-meta-item" key=${Q.label}>
                            <span class="attachment-preview-meta-label">${Q.label}</span>
                            <span class="attachment-preview-meta-value">${Q.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function Q4({src:_,onClose:$}){return v(()=>{let j=(N)=>{if(N.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),V`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function w6({mediaId:_,onPreview:$}){let[j,N]=c(null);if(v(()=>{u2(_).then(N).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",J=j.metadata?.size,K=J?f0(J):"",Y=v2(j.content_type)==="unsupported"?"Details":"Preview";return V`
        <div class="file-attachment" onClick=${(z)=>z.stopPropagation()}>
            <a href=${t0(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${K&&V`<span class="file-size">${K}</span>`}
                        ${j.content_type&&V`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(z)=>{z.preventDefault(),z.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${Y}
            </button>
        </div>
    `}function M6({attachment:_,onPreview:$}){let j=Number(_?.id),[N,Z]=c(null);v(()=>{if(!Number.isFinite(j))return;u2(j).then(Z).catch(()=>{});return},[j]);let J=N?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?t0(j):null,Y=v2(N?.content_type)==="unsupported"?"Details":"Preview";return V`
        <span class="attachment-pill" title=${J}>
            ${K?V`
                    <a href=${K} download=${J} class="attachment-pill-main" onClick=${(z)=>z.stopPropagation()}>
                        <${J2}
                            prefix="post"
                            label=${_.label}
                            title=${J}
                        />
                    </a>
                `:V`
                    <${J2}
                        prefix="post"
                        label=${_.label}
                        title=${J}
                    />
                `}
            ${Number.isFinite(j)&&N&&V`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${Y}
                    onClick=${(z)=>{z.preventDefault(),z.stopPropagation(),$?.({mediaId:j,info:N})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function W3({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:N}=_,Z=N?F2(N):null;return V`
        <div class="content-annotations">
            ${$&&$.length>0&&V`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&V`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&V`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function P6({block:_}){let $=_.title||_.name||_.uri,j=_.description,N=_.size?f0(_.size):"",Z=_.mime_type||"",J=f6(Z),K=H2(_.uri);return V`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(O)=>O.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${J}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&V`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&V`<span>${Z}</span>`}
                    ${N&&V`<span>${N}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function S6({block:_}){let[$,j]=c(!1),N=_.uri||"Embedded resource",Z=_.text||"",J=Boolean(_.data),K=_.mime_type||"";return V`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${N}
            </button>
            ${$&&V`
                ${Z&&V`<pre class="resource-embed-content">${Z}</pre>`}
                ${J&&V`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&V`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(O)=>{O.preventDefault(),O.stopPropagation();let Y=new Blob([Uint8Array.from(atob(_.data),(B)=>B.charCodeAt(0))],{type:K||"application/octet-stream"}),z=URL.createObjectURL(Y),W=document.createElement("a");W.href=z,W.download=N.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(z)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function f6(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function x6({preview:_}){let $=H2(_.url),j=H2(_.image,{allowDataImage:!0}),N=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return V`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(J)=>J.stopPropagation()}
            style=${N}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&V`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function T6(_,$){return typeof _==="string"?_:""}var I6=1800,u6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,c6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,m6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function v6(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let N=document.execCommand("copy");return document.body.removeChild(j),N}catch{return!1}}function R6(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((J)=>J.querySelector("code"));if($.length===0)return()=>{};let j=new Map,N=[],Z=(J,K)=>{let O=K||"idle";if(J.dataset.copyState=O,O==="success")J.innerHTML=c6,J.setAttribute("aria-label","Copied"),J.setAttribute("title","Copied"),J.classList.add("is-success"),J.classList.remove("is-error");else if(O==="error")J.innerHTML=m6,J.setAttribute("aria-label","Copy failed"),J.setAttribute("title","Copy failed"),J.classList.add("is-error"),J.classList.remove("is-success");else J.innerHTML=u6,J.setAttribute("aria-label","Copy code"),J.setAttribute("title","Copy code"),J.classList.remove("is-success","is-error")};return $.forEach((J)=>{let K=document.createElement("div");K.className="post-code-block",J.parentNode?.insertBefore(K,J),K.appendChild(J);let O=document.createElement("button");O.type="button",O.className="post-code-copy-btn",Z(O,"idle"),K.appendChild(O);let Y=async(z)=>{z.preventDefault(),z.stopPropagation();let B=J.querySelector("code")?.textContent||"",F=await v6(B);Z(O,F?"success":"error");let C=j.get(O);if(C)clearTimeout(C);let A=setTimeout(()=>{Z(O,"idle"),j.delete(O)},I6);j.set(O,A)};O.addEventListener("click",Y),N.push(()=>{O.removeEventListener("click",Y);let z=j.get(O);if(z)clearTimeout(z);if(K.parentNode)K.parentNode.insertBefore(J,K),K.remove()})}),()=>{N.forEach((J)=>J())}}function g6(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let z=0;z<j.length;z+=1)if(j[z].trim()==="Files:"&&j[z+1]&&/^\s*-\s+/.test(j[z+1])){N=z;break}if(N===-1)return{content:_,fileRefs:[]};let Z=[],J=N+1;for(;J<j.length;J+=1){let z=j[J];if(/^\s*-\s+/.test(z))Z.push(z.replace(/^\s*-\s+/,"").trim());else if(!z.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,N),O=j.slice(J),Y=[...K,...O].join(`
`);return Y=Y.replace(/\n{3,}/g,`

`).trim(),{content:Y,fileRefs:Z}}function h6(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let z=0;z<j.length;z+=1)if(j[z].trim()==="Referenced messages:"&&j[z+1]&&/^\s*-\s+/.test(j[z+1])){N=z;break}if(N===-1)return{content:_,messageRefs:[]};let Z=[],J=N+1;for(;J<j.length;J+=1){let z=j[J];if(/^\s*-\s+/.test(z)){let B=z.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(B)Z.push(B[1])}else if(!z.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,N),O=j.slice(J),Y=[...K,...O].join(`
`);return Y=Y.replace(/\n{3,}/g,`

`).trim(),{content:Y,messageRefs:Z}}function i6(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let z=0;z<j.length;z+=1)if(j[z].trim()==="Images:"&&j[z+1]&&/^\s*-\s+/.test(j[z+1])){N=z;break}if(N===-1)return{content:_,attachments:[]};let Z=[],J=N+1;for(;J<j.length;J+=1){let z=j[J];if(/^\s*-\s+/.test(z)){let W=z.replace(/^\s*-\s+/,"").trim(),B=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(B){let F=B[1],C=(B[2]||"").trim()||F;Z.push({id:F,label:C,raw:W})}else Z.push({id:null,label:W,raw:W})}else if(!z.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let K=j.slice(0,N),O=j.slice(J),Y=[...K,...O].join(`
`);return Y=Y.replace(/\n{3,}/g,`

`).trim(),{content:Y,attachments:Z}}function p6(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function n6(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let N=j.map(p6).sort((W,B)=>B.length-W.length),Z=new RegExp(`(${N.join("|")})`,"gi"),J=new RegExp(`^(${N.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),O=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),Y=[],z;while(z=O.nextNode())Y.push(z);for(let W of Y){let B=W.nodeValue;if(!B||!Z.test(B)){Z.lastIndex=0;continue}Z.lastIndex=0;let F=W.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let C=B.split(Z).filter((E)=>E!=="");if(C.length===0)continue;let A=K.createDocumentFragment();for(let E of C)if(J.test(E)){let R=K.createElement("mark");R.className="search-highlight-term",R.textContent=E,A.appendChild(R)}else A.appendChild(K.createTextNode(E));W.parentNode.replaceChild(A,W)}return K.body.innerHTML}function U4({post:_,onClick:$,onHashtagClick:j,onMessageRef:N,onScrollToMessage:Z,agentName:J,agentAvatarUrl:K,userName:O,userAvatarUrl:Y,userAvatarBackground:z,onDelete:W,isThreadReply:B,isThreadPrev:F,isThreadNext:C,isRemoving:A,highlightQuery:E,onFileRef:R}){let[w,Q]=c(null),P=H(null),M=_.data,u=M.type==="agent_response",l=O||"You",o=u?J||_4:l,Z_=u?$1(J,K):$1(l,Y),z_=typeof z==="string"?z.trim().toLowerCase():"",a=!u&&Z_.image&&(z_==="clear"||z_==="transparent"),L_=u&&Boolean(Z_.image),k_=`background-color: ${a||L_?"transparent":Z_.color}`,d=M.content_meta,J_=Boolean(d?.truncated),r=Boolean(d?.preview),__=J_&&!r,$_=J_?{originalLength:Number.isFinite(d?.original_length)?d.original_length:M.content?M.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,q_=M.content_blocks||[],j_=M.media_ids||[],G_=T6(M.content,M.link_previews),{content:y_,fileRefs:A_}=g6(G_),{content:m_,messageRefs:T_}=h6(y_),{content:C0,attachments:b_}=i6(m_);G_=C0;let g_=Z1(q_),N_=J1(q_),W_=g_.length===1&&typeof g_[0]?.fallback_text==="string"?g_[0].fallback_text.trim():"",Q_=N_.length===1?W4(N_[0]).trim():"",U_=Boolean(W_)&&G_?.trim()===W_||Boolean(Q_)&&G_?.trim()===Q_,V_=Boolean(G_)&&!__&&!U_,v_=typeof E==="string"?E.trim():"",R_=d_(()=>{if(!G_||U_)return"";let f=e0(G_,j);return v_?n6(f,v_):f},[G_,U_,v_]),C_=(f,i)=>{f.stopPropagation(),Q(t0(i))},[O_,H_]=c(null),o_=(f)=>{H_(f)},w_=(f)=>{f.stopPropagation(),W?.(_)},a_=(f,i)=>{let X_=new Set;if(!f||i.length===0)return{content:f,usedIds:X_};return{content:f.replace(/attachment:([^\s)"']+)/g,(J0,_2,E0,g0)=>{let $0=_2.replace(/^\/+/,""),L0=i.find((K0)=>K0.name&&K0.name.toLowerCase()===$0.toLowerCase()&&!X_.has(K0.id))||i.find((K0)=>!X_.has(K0.id));if(!L0)return J0;if(X_.add(L0.id),g0.slice(Math.max(0,E0-2),E0)==="](")return`/media/${L0.id}`;return L0.name||"attachment"}),usedIds:X_}},t_=[],c_=[],Z0=[],e_=[],G0=[],X0=[],_0=0;if(q_.length>0)q_.forEach((f)=>{if(f?.type==="text"&&f.annotations)X0.push(f.annotations);if(f?.type==="resource_link")e_.push(f);else if(f?.type==="resource")G0.push(f);else if(f?.type==="file"){let i=j_[_0++];if(i)c_.push(i),Z0.push({id:i,name:f?.name||f?.filename||f?.title})}else if(f?.type==="image"||!f?.type){let i=j_[_0++];if(i){let X_=typeof f?.mime_type==="string"?f.mime_type:void 0;t_.push({id:i,annotations:f?.annotations,mimeType:X_}),Z0.push({id:i,name:f?.name||f?.filename||f?.title})}}});else if(j_.length>0)j_.forEach((f)=>{t_.push({id:f,annotations:null}),Z0.push({id:f,name:null})});if(b_.length>0)b_.forEach((f)=>{if(!f?.id)return;let i=Z0.find((X_)=>String(X_.id)===String(f.id));if(i&&!i.name)i.name=f.label});let{content:x0,usedIds:b0}=a_(G_,Z0);G_=x0;let D0=t_.filter(({id:f})=>!b0.has(f)),R0=c_.filter((f)=>!b0.has(f)),h_=b_.length>0?b_.map((f,i)=>({id:f.id||`attachment-${i+1}`,label:f.label||`attachment-${i+1}`})):Z0.map((f,i)=>({id:f.id,label:f.name||`attachment-${i+1}`})),O0=d_(()=>Z1(q_),[q_]),k0=d_(()=>J1(q_),[q_]);v(()=>{if(!P.current)return;return K2(P.current),R6(P.current)},[R_]);let i_=H(null);return v(()=>{if(!i_.current||O0.length===0)return;let f=i_.current;f.innerHTML="";for(let i of O0){let X_=document.createElement("div");f.appendChild(X_),q4(X_,i,{onAction:async(M_)=>{if(M_.type==="Action.OpenUrl"){let J0=H2(M_.url||"");if(!J0)throw Error("Invalid URL");window.open(J0,"_blank","noopener,noreferrer");return}if(M_.type==="Action.Submit"){await Q$({post_id:_.id,thread_id:M.thread_id||_.id,card_id:i.card_id,action:{type:M_.type,title:M_.title||"",data:M_.data}});return}console.warn("[post] unsupported adaptive card action:",M_.type,M_)}}).catch((M_)=>{console.error("[post] adaptive card render error:",M_),X_.textContent=i.fallback_text||"Card failed to render."})}},[O0,M.thread_id,_.id]),V`
        <div id=${`post-${_.id}`} class="post ${u?"agent-post":""} ${B?"thread-reply":""} ${F?"thread-prev":""} ${C?"thread-next":""} ${A?"removing":""}" onClick=${$}>
            <div class="post-avatar ${u?"agent-avatar":""} ${Z_.image?"has-image":""}" style=${k_}>
                ${Z_.image?V`<img src=${Z_.image} alt=${o} />`:Z_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${w_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${o}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(f)=>{if(f.preventDefault(),f.stopPropagation(),N)N(_.id)}}>${O4(_.timestamp)}</a>
                </div>
                ${__&&$_&&V`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${m2($_.originalLength)} chars
                            ${$_.maxLength?V` • Display limit: ${m2($_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${r&&$_&&V`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${m2($_.maxLength)} of ${m2($_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(A_.length>0||T_.length>0||h_.length>0)&&V`
                    <div class="post-file-refs">
                        ${T_.map((f)=>{let i=(X_)=>{if(X_.preventDefault(),X_.stopPropagation(),Z)Z(f);else{let M_=document.getElementById("post-"+f);if(M_)M_.scrollIntoView({behavior:"smooth",block:"center"}),M_.classList.add("post-highlight"),setTimeout(()=>M_.classList.remove("post-highlight"),2000)}};return V`
                                <a href=${`#msg-${f}`} class="post-msg-pill-link" onClick=${i}>
                                    <${J2}
                                        prefix="post"
                                        label=${"msg:"+f}
                                        title=${"Message "+f}
                                        icon="message"
                                        onClick=${i}
                                    />
                                </a>
                            `})}
                        ${A_.map((f)=>{let i=f.split("/").pop()||f;return V`
                                <${J2}
                                    prefix="post"
                                    label=${i}
                                    title=${f}
                                    onClick=${()=>R?.(f)}
                                />
                            `})}
                        ${h_.map((f)=>V`
                            <${M6}
                                key=${f.id}
                                attachment=${f}
                                onPreview=${o_}
                            />
                        `)}
                    </div>
                `}
                ${V_&&V`
                    <div 
                        ref=${P}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:R_}}
                        onClick=${(f)=>{if(f.target.classList.contains("hashtag")){f.preventDefault(),f.stopPropagation();let i=f.target.dataset.hashtag;if(i)j?.(i)}else if(f.target.tagName==="IMG")f.preventDefault(),f.stopPropagation(),Q(f.target.src)}}
                    />
                `}
                ${O0.length>0&&V`
                    <div ref=${i_} class="post-adaptive-cards" />
                `}
                ${k0.length>0&&V`
                    <div class="post-adaptive-card-submissions">
                        ${k0.map((f,i)=>{let X_=V4(f);return V`
                                <div key=${`${f.card_id}-${i}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${X_.title}</span>
                                    </div>
                                    ${X_.summary&&V`
                                        <div class="adaptive-card-submission-summary">${X_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${F2(X_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${X0.length>0&&V`
                    ${X0.map((f,i)=>V`
                        <${W3} key=${i} annotations=${f} />
                    `)}
                `}
                ${D0.length>0&&V`
                    <div class="media-preview">
                        ${D0.map(({id:f,mimeType:i})=>{let M_=typeof i==="string"&&i.toLowerCase().startsWith("image/svg")?t0(f):y$(f);return V`
                                <img 
                                    key=${f} 
                                    src=${M_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(J0)=>C_(J0,f)}
                                />
                            `})}
                    </div>
                `}
                ${D0.length>0&&V`
                    ${D0.map(({annotations:f},i)=>V`
                        ${f&&V`<${W3} key=${i} annotations=${f} />`}
                    `)}
                `}
                ${R0.length>0&&V`
                    <div class="file-attachments">
                        ${R0.map((f)=>V`
                            <${w6} key=${f} mediaId=${f} onPreview=${o_} />
                        `)}
                    </div>
                `}
                ${e_.length>0&&V`
                    <div class="resource-links">
                        ${e_.map((f,i)=>V`
                            <div key=${i}>
                                <${P6} block=${f} />
                                <${W3} annotations=${f.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${G0.length>0&&V`
                    <div class="resource-embeds">
                        ${G0.map((f,i)=>V`
                            <div key=${i}>
                                <${S6} block=${f} />
                                <${W3} annotations=${f.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M.link_previews?.length>0&&V`
                    <div class="link-previews">
                        ${M.link_previews.map((f,i)=>V`
                            <${x6} key=${i} preview=${f} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${w&&V`<${Q4} src=${w} onClose=${()=>Q(null)} />`}
        ${O_&&V`
            <${X4}
                mediaId=${O_.mediaId}
                info=${O_.info}
                onClose=${()=>H_(null)}
            />
        `}
    `}function H4({posts:_,hasMore:$,onLoadMore:j,onPostClick:N,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:K,onFileRef:O,emptyMessage:Y,timelineRef:z,agents:W,user:B,onDeletePost:F,reverse:C=!0,removingPostIds:A,searchQuery:E}){let[R,w]=c(!1),Q=H(null),P=typeof IntersectionObserver<"u",M=S(async()=>{if(!j||!$||R)return;w(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{w(!1)}},[$,R,j]),u=S((d)=>{let{scrollTop:J_,scrollHeight:r,clientHeight:__}=d.target,$_=C?r-__-J_:J_,q_=Math.max(300,__);if($_<q_)M()},[C,M]);v(()=>{if(!P)return;let d=Q.current,J_=z?.current;if(!d||!J_)return;let r=300,__=new IntersectionObserver(($_)=>{for(let q_ of $_){if(!q_.isIntersecting)continue;M()}},{root:J_,rootMargin:`${r}px 0px ${r}px 0px`,threshold:0});return __.observe(d),()=>__.disconnect()},[P,$,j,z,M]);let l=H(M);if(l.current=M,v(()=>{if(P)return;if(!z?.current)return;let{scrollTop:d,scrollHeight:J_,clientHeight:r}=z.current,__=C?J_-r-d:d,$_=Math.max(300,r);if(__<$_)l.current?.()},[P,_,$,C,z]),v(()=>{if(!z?.current)return;if(!$||R)return;let{scrollTop:d,scrollHeight:J_,clientHeight:r}=z.current,__=C?J_-r-d:d,$_=Math.max(300,r);if(J_<=r+1||__<$_)l.current?.()},[_,$,R,C,z]),!_)return V`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return V`
            <div class="timeline" ref=${z}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Y||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let o=_.slice().sort((d,J_)=>d.id-J_.id),Z_=(d)=>{let J_=d?.data?.thread_id;if(J_===null||J_===void 0||J_==="")return null;let r=Number(J_);return Number.isFinite(r)?r:null},z_=new Map;for(let d=0;d<o.length;d+=1){let J_=o[d],r=Number(J_?.id),__=Z_(J_);if(__!==null){let $_=z_.get(__)||{anchorIndex:-1,replyIndexes:[]};$_.replyIndexes.push(d),z_.set(__,$_)}else if(Number.isFinite(r)){let $_=z_.get(r)||{anchorIndex:-1,replyIndexes:[]};$_.anchorIndex=d,z_.set(r,$_)}}let a=new Map;for(let[d,J_]of z_.entries()){let r=new Set;if(J_.anchorIndex>=0)r.add(J_.anchorIndex);for(let __ of J_.replyIndexes)r.add(__);a.set(d,Array.from(r).sort((__,$_)=>__-$_))}let L_=o.map((d,J_)=>{let r=Z_(d);if(r===null)return{hasThreadPrev:!1,hasThreadNext:!1};let __=a.get(r);if(!__||__.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=__.indexOf(J_);if($_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:$_>0,hasThreadNext:$_<__.length-1}}),k_=V`<div class="timeline-sentinel" ref=${Q}></div>`;return V`
        <div class="timeline ${C?"reverse":"normal"}" ref=${z} onScroll=${u}>
            <div class="timeline-content">
                ${C?k_:null}
                ${o.map((d,J_)=>{let r=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),__=A?.has?.(d.id),$_=L_[J_]||{};return V`
                    <${U4}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${r}
                        isThreadPrev=${$_.hasThreadPrev}
                        isThreadNext=${$_.hasThreadNext}
                        isRemoving=${__}
                        highlightQuery=${E}
                        agentName=${$4(d.data?.agent_id,W||{})}
                        agentAvatarUrl=${j4(d.data?.agent_id,W||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>N?.(d)}
                        onHashtagClick=${Z}
                        onMessageRef=${J}
                        onScrollToMessage=${K}
                        onFileRef=${O}
                        onDelete=${F}
                    />
                `})}
                ${C?null:k_}
            </div>
        </div>
    `}class F4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let N of this.extensions.values()){if(N.placement!=="tabs")continue;if(!N.canHandle)continue;try{let Z=N.canHandle(_);if(Z===!1||Z===0)continue;let J=Z===!0?0:typeof Z==="number"?Z:0;if(J>j)j=J,$=N}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${N.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var s_=new F4;var V3=null,K1=null;function y4(){if(K1)return Promise.resolve(K1);if(!V3)V3=import("/static/dist/editor.bundle.js").then((_)=>{return K1=_,_}).catch((_)=>{throw V3=null,_});return V3}class C4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await y4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var z1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new C4(_,$)}};function O1(){y4().catch(()=>{})}var l6={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},o6={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},X3=null,Y1=null;function r6(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function d6(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,N=(Z,J)=>{let K=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!r6(K))return $(Z,J);if(Z instanceof Request)return $(new Request(j,Z));return $(j,J)};globalThis.fetch=N;try{return await _()}finally{globalThis.fetch=$}}async function s6(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!X3)X3=d6(()=>Promise.resolve($.init?.())).catch((j)=>{throw X3=null,j});return await X3,$}async function a6(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!Y1)Y1=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await Y1}async function t6(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function e6(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function _5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function z2(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function $5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function D4(){let _=_5(),$=_?o6:l6,j=z2("--bg-primary",_?"#000000":"#ffffff"),N=z2("--text-primary",_?"#e7e9ea":"#0f1419"),Z=z2("--text-secondary",_?"#71767b":"#536471"),J=z2("--accent-color","#1d9bf0"),K=z2("--danger-color",_?"#ff7b72":"#cf222e"),O=z2("--success-color",_?"#7ee787":"#1a7f37"),Y=z2("--bg-hover",_?"#1d1f23":"#e8ebed"),z=z2("--border-color",_?"#2f3336":"#eff3f4"),W=z2("--accent-soft-strong",$5(J,_?"47":"33"));return{background:j,foreground:N,cursor:J,cursorAccent:j,selectionBackground:W,selectionForeground:N,black:Y,red:K,green:O,yellow:$.yellow,blue:J,magenta:$.magenta,cyan:$.cyan,white:N,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:z}}class k4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.resize()})}async bootstrapGhostty(){try{let _=await s6();if(await a6(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:D4()}),N=null;if(typeof _.FitAddon==="function")N=new _.FitAddon,j.loadAddon?.(N);await j.open($),this.syncHostLayout(),j.loadFonts?.(),N?.observeResize?.(),this.terminal=j,this.fitAddon=N,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=D4(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let N=this.bodyEl.querySelector(".terminal-live-host");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),N=()=>_();if(j?.addEventListener)j.addEventListener("change",N);else if(j?.addListener)j.addListener(N);this.mediaQuery=j,this.mediaQueryListener=N;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>this.scheduleResize());j.observe(this.container),j.observe(this.bodyEl),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await t6();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(e6($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((N)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:N}))}),_.onResize?.(({cols:N,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:N,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(N)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(N.data))}catch{Z={type:"output",data:String(N.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var G1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new k4(_,$)}};function B2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function j5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let N=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=N?.[1]||j,J=N?.[2]||"",K=N?.[3]||"",O=String($||"").split("/").slice(0,-1).join("/"),z=Z.startsWith("/")?Z:`${O?`${O}/`:""}${Z}`,W=[];for(let F of z.split("/")){if(!F||F===".")continue;if(F===".."){if(W.length>0)W.pop();continue}W.push(F)}let B=W.join("/");return`${r3(B)}${J}${K}`}function R2(_){return _?.preview||null}function N5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),N=j>=0?$.slice(j+1):$,Z=N.lastIndexOf(".");if(Z<=0||Z===N.length-1)return"none";return N.slice(Z+1)}function Z5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function J5(_,$){let j=$?.path||_?.path||"",N=[];if($?.content_type)N.push(`<span><strong>type:</strong> ${B2($.content_type)}</span>`);if(typeof $?.size==="number")N.push(`<span><strong>size:</strong> ${B2(f0($.size))}</span>`);if($?.mtime)N.push(`<span><strong>modified:</strong> ${B2(F2($.mtime))}</span>`);if(N.push(`<span><strong>kind:</strong> ${B2(Z5($))}</span>`),N.push(`<span><strong>extension:</strong> ${B2(N5(j))}</span>`),j)N.push(`<span><strong>path:</strong> ${B2(j)}</span>`);if($?.truncated)N.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${N.join("")}</div>`}function K5(_){let $=R2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=J5(_,$);if($.kind==="image"){let N=$.url||($.path?r3($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${B2(N)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let N=e0($.text||"",null,{rewriteImageSrc:(Z)=>j5(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${N}</div>`}return`${j}<pre class="workspace-preview-text"><code>${B2($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class L1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=K5(this.context)}getContent(){let _=R2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=R2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var B1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=R2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new L1(_,$)}},q1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return R2(_)||_?.path?1:!1},mount(_,$){return new L1(_,$)}};class E4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((N)=>N!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let N=this.tabs.get(_);if(!N)return;if(this.tabs.delete(_),N.id=$,N.path=$,N.label=j||$.split("/").pop()||$,this.tabs.set($,N),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var S_=new E4;var Q3="workspaceExplorerScale",z5=["compact","default","comfortable"],O5=new Set(z5),Y5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function A4(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return O5.has(j)?j:$}function W1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),N=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||N&&j}}function G5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function L5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function V1(_={}){let $=G5(_),j=_.stored?A4(_.stored,$):$;return L5(j,_)}function b4(_){return Y5[A4(_)]}var B5=60000,S4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function f4(_,$,j,N=0,Z=[]){if(!j&&S4(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:N}),_.type==="dir"&&_.children&&$.has(_.path))for(let J of _.children)f4(J,$,j,N+1,Z);return Z}function w4(_,$,j){if(!_)return"";let N=[],Z=(J)=>{if(!j&&S4(J))return;if(N.push(J.type==="dir"?`d:${J.path}`:`f:${J.path}`),J.children&&$?.has(J.path))for(let K of J.children)Z(K)};return Z(_),N.join("|")}function H1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,N=Array.isArray($.children)?$.children:null;if(!N)return _;let Z=j?new Map(j.map((O)=>[O?.path,O])):new Map,J=!j||j.length!==N.length,K=N.map((O)=>{let Y=H1(Z.get(O.path),O);if(Y!==Z.get(O.path))J=!0;return Y});return J?{...$,children:K}:_}function Q1(_,$,j){if(!_)return _;if(_.path===$)return H1(_,j);if(!Array.isArray(_.children))return _;let N=!1,Z=_.children.map((J)=>{let K=Q1(J,$,j);if(K!==J)N=!0;return K});return N?{..._,children:Z}:_}var x4=4,X1=14,q5=8,W5=16;function T4(_){if(!_)return 0;if(_.type==="file"){let N=Math.max(0,Number(_.size)||0);return _.__bytes=N,N}let $=Array.isArray(_.children)?_.children:[],j=0;for(let N of $)j+=T4(N);return _.__bytes=j,j}function I4(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),N={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=x4)return N;let Z=Array.isArray(_.children)?_.children:[],J=[];for(let O of Z){let Y=Math.max(0,Number(O?.__bytes??O?.size??0));if(Y<=0)continue;if(O.type==="dir")J.push({kind:"dir",node:O,size:Y});else J.push({kind:"file",name:O.name,path:O.path,size:Y})}J.sort((O,Y)=>Y.size-O.size);let K=J;if(J.length>X1){let O=J.slice(0,X1-1),Y=J.slice(X1-1),z=Y.reduce((W,B)=>W+B.size,0);O.push({kind:"other",name:`+${Y.length} more`,path:`${N.path}/[other]`,size:z}),K=O}return N.children=K.map((O)=>{if(O.kind==="dir")return I4(O.node,$+1);return{name:O.name,path:O.path,size:O.size,children:[]}}),N}function M4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function u4(_,$,j){let N=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),J=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${N.toFixed(1)} ${Z}% ${J}%)`}function U3(_,$,j,N){return{x:_+j*Math.cos(N),y:$+j*Math.sin(N)}}function F1(_,$,j,N,Z,J){let K=Math.PI*2-0.0001,O=J-Z>K?Z+K:J,Y=U3(_,$,N,Z),z=U3(_,$,N,O),W=U3(_,$,j,O),B=U3(_,$,j,Z),F=O-Z>Math.PI?1:0;return[`M ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,`A ${N} ${N} 0 ${F} 1 ${z.x.toFixed(3)} ${z.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,"Z"].join(" ")}var c4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function m4(_,$,j){let N=[],Z=[],J=Math.max(0,Number($)||0),K=(O,Y,z,W)=>{let B=Array.isArray(O?.children)?O.children:[];if(!B.length)return;let F=Math.max(0,Number(O.size)||0);if(F<=0)return;let C=z-Y,A=Y;B.forEach((E,R)=>{let w=Math.max(0,Number(E.size)||0);if(w<=0)return;let Q=w/F,P=A,M=R===B.length-1?z:A+C*Q;if(A=M,M-P<0.003)return;let u=c4[W];if(u){let l=u4(P,W,j);if(N.push({key:E.path,path:E.path,label:E.name,size:w,color:l,depth:W,startAngle:P,endAngle:M,innerRadius:u[0],outerRadius:u[1],d:F1(120,120,u[0],u[1],P,M)}),W===1)Z.push({key:E.path,name:E.name,size:w,pct:J>0?w/J*100:0,color:l})}if(W<x4)K(E,P,M,W+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:N,legend:Z}}function U1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let N of j){let Z=U1(N,$);if(Z)return Z}return null}function v4(_,$,j,N){if(!j||j<=0)return{segments:[],legend:[]};let Z=c4[1];if(!Z)return{segments:[],legend:[]};let J=-Math.PI/2,K=Math.PI*3/2,O=u4(J,1,N),z=`${$||"."}/[files]`;return{segments:[{key:z,path:z,label:_,size:j,color:O,depth:1,startAngle:J,endAngle:K,innerRadius:Z[0],outerRadius:Z[1],d:F1(120,120,Z[0],Z[1],J,K)}],legend:[{key:z,name:_,size:j,pct:100,color:O}]}}function P4(_,$=!1,j=!1){if(!_)return null;let N=T4(_),Z=I4(_,0),J=Z.size||N,{segments:K,legend:O}=m4(Z,J,j);if(!K.length&&J>0){let Y=v4("[files]",Z.path,J,j);K=Y.segments,O=Y.legend}return{root:Z,totalSize:J,segments:K,legend:O,truncated:$,isDarkTheme:j}}function V5({payload:_}){if(!_)return null;let[$,j]=c(null),[N,Z]=c(_?.root?.path||"."),[J,K]=c(()=>[_?.root?.path||"."]),[O,Y]=c(!1);v(()=>{let a=_?.root?.path||".";Z(a),K([a]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!N)return;Y(!0);let a=setTimeout(()=>Y(!1),180);return()=>clearTimeout(a)},[N]);let z=d_(()=>{return U1(_.root,N)||_.root},[_?.root,N]),W=z?.size||_.totalSize||0,{segments:B,legend:F}=d_(()=>{let a=m4(z,W,_.isDarkTheme);if(a.segments.length>0)return a;if(W<=0)return a;let L_=z?.children?.length?"Total":"[files]";return v4(L_,z?.path||_?.root?.path||".",W,_.isDarkTheme)},[z,W,_.isDarkTheme,_?.root?.path]),[C,A]=c(B),E=H(new Map),R=H(0);v(()=>{let a=E.current,L_=new Map(B.map((r)=>[r.key,r])),k_=performance.now(),d=220,J_=(r)=>{let __=Math.min(1,(r-k_)/220),$_=__*(2-__),q_=B.map((j_)=>{let y_=a.get(j_.key)||{startAngle:j_.startAngle,endAngle:j_.startAngle,innerRadius:j_.innerRadius,outerRadius:j_.innerRadius},A_=(g_,N_)=>g_+(N_-g_)*$_,m_=A_(y_.startAngle,j_.startAngle),T_=A_(y_.endAngle,j_.endAngle),C0=A_(y_.innerRadius,j_.innerRadius),b_=A_(y_.outerRadius,j_.outerRadius);return{...j_,d:F1(120,120,C0,b_,m_,T_)}});if(A(q_),__<1)R.current=requestAnimationFrame(J_)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(J_),E.current=L_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[B]);let w=C.length?C:B,Q=W>0?f0(W):"0 B",P=z?.name||"",u=(P&&P!=="."?P:"Total")||"Total",l=Q,o=J.length>1,Z_=(a)=>{if(!a?.path)return;let L_=U1(_.root,a.path);if(!L_||!Array.isArray(L_.children)||L_.children.length===0)return;K((k_)=>[...k_,L_.path]),Z(L_.path),j(null)},z_=()=>{if(!o)return;K((a)=>{let L_=a.slice(0,-1);return Z(L_[L_.length-1]||_?.root?.path||"."),L_}),j(null)};return V`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${O?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${z?.path||_?.root?.path||"."}`}
                data-segments=${w.length}
                data-base-size=${W}>
                ${w.map((a)=>V`
                    <path
                        key=${a.key}
                        d=${a.d}
                        fill=${a.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===a.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(a)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(a)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>Z_(a)}
                    >
                        <title>${a.label} — ${f0(a.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${o?" is-drill":""}`}
                    onClick=${z_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${u}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${l}</text>
                </g>
            </svg>
            ${F.length>0&&V`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((a)=>V`
                        <div key=${a.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${a.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${a.name}>${a.name}</span>
                            <span class="workspace-folder-starburst-size">${f0(a.size)}</span>
                            <span class="workspace-folder-starburst-pct">${a.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&V`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function X5({mediaId:_}){let[$,j]=c(null);if(v(()=>{if(!_)return;u2(_).then(j).catch(()=>{})},[_]),!$)return null;let N=$.filename||"file",Z=$.metadata?.size?f0($.metadata.size):"";return V`
        <a href=${t0(_)} download=${N} class="file-attachment"
            onClick=${(J)=>J.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${N}</span>
                ${Z&&V`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function R4({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:N}){let[Z,J]=c(null),[K,O]=c(new Set(["."])),[Y,z]=c(null),[W,B]=c(null),[F,C]=c(""),[A,E]=c(null),[R,w]=c(null),[Q,P]=c(!0),[M,u]=c(!1),[l,o]=c(null),[Z_,z_]=c(()=>E2("workspaceShowHidden",!1)),[a,L_]=c(!1),[k_,d]=c(null),[J_,r]=c(null),[__,$_]=c(null),[q_,j_]=c(!1),[G_,y_]=c(null),[A_,m_]=c(()=>M4()),[T_,C0]=c(()=>V1({stored:S0(Q3),...W1()})),b_=H(K),g_=H(""),N_=H(null),W_=H(0),Q_=H(new Set),U_=H(null),V_=H(new Map),v_=H(_),R_=H(N),C_=H(null),O_=H(null),H_=H(null),o_=H(null),w_=H(null),a_=H(null),t_=H("."),c_=H(null),Z0=H({path:null,dragging:!1,startX:0,startY:0}),e_=H({path:null,dragging:!1,startX:0,startY:0}),G0=H({path:null,timer:0}),X0=H(!1),_0=H(0),x0=H(new Map),b0=H(null),D0=H(null),R0=H(null),h_=H(null),O0=H(Z_),k0=H($),i_=H(j??$),f=H(0),i=H(__),X_=H(a),M_=H(k_),J0=H(null),_2=H({x:0,y:0}),E0=H(0),g0=H(null),$0=H(Y),A0=H(W),L0=H(null),w0=H(null),K0=H(A);v_.current=_,R_.current=N,v(()=>{b_.current=K},[K]),v(()=>{O0.current=Z_},[Z_]),v(()=>{k0.current=$},[$]),v(()=>{i_.current=j??$},[j,$]),v(()=>{i.current=__},[__]),v(()=>{if(typeof window>"u")return;let L=()=>{C0(V1({stored:S0(Q3),...W1()}))};L();let X=()=>L(),D=()=>L(),k=(g)=>{if(!g||g.key===null||g.key===Q3)L()};window.addEventListener("resize",X),window.addEventListener("focus",D),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),n=window.matchMedia?.("(hover: none)"),p=(g,K_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",K_);else if(g.addListener)g.addListener(K_)},s=(g,K_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",K_);else if(g.removeListener)g.removeListener(K_)};return p(m,X),p(n,X),()=>{window.removeEventListener("resize",X),window.removeEventListener("focus",D),window.removeEventListener("storage",k),s(m,X),s(n,X)}},[]),v(()=>{let L=(X)=>{let D=X?.detail?.path;if(!D)return;let k=D.split("/"),m=[];for(let n=1;n<k.length;n++)m.push(k.slice(0,n).join("/"));if(m.length)O((n)=>{let p=new Set(n);p.add(".");for(let s of m)p.add(s);return p});z(D),requestAnimationFrame(()=>{let n=document.querySelector(`[data-path="${CSS.escape(D)}"]`);if(n)n.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),v(()=>{X_.current=a},[a]),v(()=>{M_.current=k_},[k_]),v(()=>{$0.current=Y},[Y]),v(()=>{A0.current=W},[W]),v(()=>{K0.current=A},[A]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>m_(M4());L();let X=window.matchMedia?.("(prefers-color-scheme: dark)"),D=()=>L();if(X?.addEventListener)X.addEventListener("change",D);else if(X?.addListener)X.addListener(D);let k=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(X?.removeEventListener)X.removeEventListener("change",D);else if(X?.removeListener)X.removeListener(D);k?.disconnect()}},[]),v(()=>{if(!W)return;let L=w_.current;if(!L)return;let X=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(X)},[W]);let T0=async(L)=>{u(!0),E(null),w(null);try{let X=await k$(L,20000);E(X)}catch(X){E({error:X.message||"Failed to load preview"})}finally{u(!1)}};C_.current=T0;let y2=async()=>{if(!k0.current)return;try{let L=await N3("",1,O0.current),X=w4(L.root,b_.current,O0.current);if(X===g_.current){P(!1);return}if(g_.current=X,N_.current=L.root,!W_.current)W_.current=requestAnimationFrame(()=>{W_.current=0,J((D)=>H1(D,N_.current)),P(!1)})}catch(L){o(L.message||"Failed to load workspace"),P(!1)}},I0=async(L)=>{if(!L)return;if(Q_.current.has(L))return;Q_.current.add(L);try{let X=await N3(L,1,O0.current);J((D)=>Q1(D,L,X.root))}catch(X){o(X.message||"Failed to load workspace")}finally{Q_.current.delete(L)}};O_.current=I0;let f_=S(()=>{let L=Y;if(!L)return".";let X=V_.current?.get(L);if(X&&X.type==="dir")return X.path;if(L==="."||!L.includes("/"))return".";let D=L.split("/");return D.pop(),D.join("/")||"."},[Y]),B0=S((L)=>{let X=L?.closest?.(".workspace-row");if(!X)return null;let D=X.dataset.path,k=X.dataset.type;if(!D)return null;if(k==="dir")return D;if(D.includes("/")){let m=D.split("/");return m.pop(),m.join("/")||"."}return"."},[]),h0=S((L)=>{return B0(L?.target||null)},[B0]),p_=S((L)=>{i.current=L,$_(L)},[]),r_=S(()=>{let L=G0.current;if(L?.timer)clearTimeout(L.timer);G0.current={path:null,timer:0}},[]),Q0=S((L)=>{if(!L||L==="."){r_();return}let X=V_.current?.get(L);if(!X||X.type!=="dir"){r_();return}if(b_.current?.has(L)){r_();return}if(G0.current?.path===L)return;r_();let D=setTimeout(()=>{G0.current={path:null,timer:0},O_.current?.(L),O((k)=>{let m=new Set(k);return m.add(L),m})},600);G0.current={path:L,timer:D}},[r_]),i0=S((L,X)=>{if(_2.current={x:L,y:X},E0.current)return;E0.current=requestAnimationFrame(()=>{E0.current=0;let D=J0.current;if(!D)return;let k=_2.current;D.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),u0=S((L)=>{if(!L)return;let D=(V_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!D)return;r({path:L,label:D})},[]),c0=S(()=>{if(r(null),E0.current)cancelAnimationFrame(E0.current),E0.current=0;if(J0.current)J0.current.style.transform="translate(-9999px, -9999px)"},[]),p0=S((L)=>{if(!L)return".";let X=V_.current?.get(L);if(X&&X.type==="dir")return X.path;if(L==="."||!L.includes("/"))return".";let D=L.split("/");return D.pop(),D.join("/")||"."},[]),U0=S(()=>{B(null),C("")},[]),q2=S((L)=>{if(!L)return;let D=(V_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!D||L===".")return;B(L),C(D)},[]),W2=S(async()=>{let L=A0.current;if(!L)return;let X=(F||"").trim();if(!X){U0();return}let D=V_.current?.get(L),k=(D?.name||L.split("/").pop()||L).trim();if(X===k){U0();return}try{let n=(await b$(L,X))?.path||L,p=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(U0(),o(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:n,type:D?.type||"file"}})),D?.type==="dir")O((s)=>{let g=new Set;for(let K_ of s)if(K_===L)g.add(n);else if(K_.startsWith(`${L}/`))g.add(`${n}${K_.slice(L.length)}`);else g.add(K_);return g});if(z(n),D?.type==="dir")E(null),u(!1),w(null);else C_.current?.(n);O_.current?.(p)}catch(m){o(m?.message||"Failed to rename file")}},[U0,F]),C2=S(async(L)=>{let k=L||".";for(let m=0;m<50;m+=1){let p=`untitled${m===0?"":`-${m}`}.md`;try{let g=(await A$(k,p,""))?.path||(k==="."?p:`${k}/${p}`);if(k&&k!==".")O((K_)=>new Set([...K_,k]));z(g),o(null),O_.current?.(k),C_.current?.(g);return}catch(s){if(s?.status===409||s?.code==="file_exists")continue;o(s?.message||"Failed to create file");return}}o("Failed to create file (untitled name already in use).")},[]),q0=S((L)=>{if(L?.stopPropagation?.(),q_)return;let X=p0($0.current);C2(X)},[q_,p0,C2]);v(()=>{if(typeof window>"u")return;let L=(X)=>{let D=X?.detail?.updates||[];if(!Array.isArray(D)||D.length===0)return;J((s)=>{let g=s;for(let K_ of D){if(!K_?.root)continue;if(!g||K_.path==="."||!K_.path)g=K_.root;else g=Q1(g,K_.path,K_.root)}if(g)g_.current=w4(g,b_.current,O0.current);return P(!1),g});let k=$0.current;if(Boolean(k)&&D.some((s)=>{let g=s?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)||g.startsWith(`${k}/`)}))x0.current.clear();if(!k||!K0.current)return;let n=V_.current?.get(k);if(n&&n.type==="dir")return;if(D.some((s)=>{let g=s?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)}))C_.current?.(k)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),U_.current=y2;let m0=H(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),X=i_.current??k0.current,D=document.visibilityState!=="hidden"&&(X||L.matches&&k0.current);Z3(D,O0.current).catch(()=>{})}).current,W0=H(0),U=H(()=>{if(W0.current)clearTimeout(W0.current);W0.current=setTimeout(()=>{W0.current=0,m0()},250)}).current;v(()=>{if(k0.current)U_.current?.();U()},[$,j]),v(()=>{U_.current(),m0();let L=setInterval(()=>U_.current(),B5),X=A2("previewHeight",null),D=Number.isFinite(X)?Math.min(Math.max(X,80),600):280;if(_0.current=D,H_.current)H_.current.style.setProperty("--preview-height",`${D}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>U();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(L),W_.current)cancelAnimationFrame(W_.current),W_.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),W0.current)clearTimeout(W0.current),W0.current=0;if(c_.current)clearTimeout(c_.current),c_.current=null;Z3(!1,O0.current).catch(()=>{})}},[]);let I=d_(()=>f4(Z,K,Z_),[Z,K,Z_]),t=d_(()=>new Map(I.map((L)=>[L.node.path,L.node])),[I]),Y_=d_(()=>b4(T_),[T_]);V_.current=t;let B_=(Y?V_.current.get(Y):null)?.type==="dir";v(()=>{if(!Y||!B_){y_(null),b0.current=null,D0.current=null;return}let L=Y,X=`${Z_?"hidden":"visible"}:${Y}`,D=x0.current,k=D.get(X);if(k?.root){D.delete(X),D.set(X,k);let p=P4(k.root,Boolean(k.truncated),A_);if(p)b0.current=p,D0.current=Y,y_({loading:!1,error:null,payload:p});return}let m=b0.current,n=D0.current;y_({loading:!0,error:null,payload:n===Y?m:null}),N3(Y,q5,Z_).then((p)=>{if($0.current!==L)return;let s={root:p?.root,truncated:Boolean(p?.truncated)};D.delete(X),D.set(X,s);while(D.size>W5){let K_=D.keys().next().value;if(!K_)break;D.delete(K_)}let g=P4(s.root,s.truncated,A_);b0.current=g,D0.current=Y,y_({loading:!1,error:null,payload:g})}).catch((p)=>{if($0.current!==L)return;y_({loading:!1,error:p?.message||"Failed to load folder size chart",payload:n===Y?m:null})})},[Y,B_,Z_,A_]);let P_=Boolean(A&&A.kind==="text"&&!B_&&(!A.size||A.size<=262144)),H0=P_?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable";v(()=>{let L=R0.current;if(h_.current)h_.current.dispose(),h_.current=null;if(!L)return;if(L.innerHTML="",!Y||B_||!A||A.error)return;let X={path:Y,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},D=s_.resolve(X)||s_.get("workspace-preview-default");if(!D)return;let k=D.mount(L,X);return h_.current=k,()=>{if(h_.current===k)k.dispose(),h_.current=null;L.innerHTML=""}},[Y,B_,A]);let Y0=(L)=>{let X=L?.target;if(X instanceof Element)return X;return X?.parentElement||null},n0=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},l0=H((L)=>{if(w0.current)clearTimeout(w0.current),w0.current=null;let D=Y0(L)?.closest?.("[data-path]");if(!D)return;let k=D.dataset.path;if(D.dataset.type==="dir"||!k)return;if(A0.current===k)U0();R_.current?.(k)}).current,o0=H((L)=>{if(X0.current){X0.current=!1;return}let X=Y0(L),D=X?.closest?.("[data-path]");if(o_.current?.focus?.(),!D)return;let k=D.dataset.path,m=D.dataset.type,n=Boolean(X?.closest?.(".workspace-caret")),p=Boolean(X?.closest?.("button"))||Boolean(X?.closest?.("a"))||Boolean(X?.closest?.("input")),s=$0.current===k,g=A0.current;if(g){if(g===k)return;U0()}let K_=m==="file"&&L0.current===k&&!n&&!p;if(s&&!n&&!p&&k!=="."&&!K_){if(w0.current)clearTimeout(w0.current);w0.current=setTimeout(()=>{w0.current=null,q2(k)},350);return}if(m==="dir"){if(L0.current=null,z(k),E(null),w(null),u(!1),!b_.current.has(k))O_.current?.(k);if(s&&!n)return;O((j2)=>{let d0=new Set(j2);if(d0.has(k))d0.delete(k);else d0.add(k);return d0})}else{L0.current=null,z(k);let j0=V_.current.get(k);if(j0)v_.current?.(j0.path,j0);C_.current?.(k)}}).current,$2=H(()=>{g_.current="",U_.current(),Array.from(b_.current||[]).filter((X)=>X&&X!==".").forEach((X)=>O_.current?.(X))}).current,F0=H(()=>{L0.current=null,z(null),E(null),w(null),u(!1)}).current,O2=H(()=>{z_((L)=>{let X=!L;if(typeof window<"u")u_("workspaceShowHidden",String(X));return O0.current=X,Z3(!0,X).catch(()=>{}),g_.current="",U_.current?.(),Array.from(b_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>O_.current?.(k)),X})}).current,E_=H((L)=>{if(Y0(L)?.closest?.("[data-path]"))return;F0()}).current,M0=S(async(L)=>{if(!L)return;let X=L.split("/").pop()||L;if(!window.confirm(`Delete "${X}"? This cannot be undone.`))return;try{await M$(L);let k=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if($0.current===L)F0();O_.current?.(k),o(null)}catch(k){E((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[F0]),V2=S((L)=>{let X=o_.current;if(!X||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;X.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),P2=S((L)=>{let X=I;if(!X||X.length===0)return;let D=Y?X.findIndex((k)=>k.node.path===Y):-1;if(L.key==="ArrowDown"){L.preventDefault();let k=Math.min(D+1,X.length-1),m=X[k];if(!m)return;if(z(m.node.path),m.node.type!=="dir")v_.current?.(m.node.path,m.node),C_.current?.(m.node.path);else E(null),u(!1),w(null);V2(m.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let k=D<=0?0:D-1,m=X[k];if(!m)return;if(z(m.node.path),m.node.type!=="dir")v_.current?.(m.node.path,m.node),C_.current?.(m.node.path);else E(null),u(!1),w(null);V2(m.node.path);return}if(L.key==="ArrowRight"&&D>=0){let k=X[D];if(k?.node?.type==="dir"&&!K.has(k.node.path))L.preventDefault(),O_.current?.(k.node.path),O((m)=>new Set([...m,k.node.path]));return}if(L.key==="ArrowLeft"&&D>=0){let k=X[D];if(k?.node?.type==="dir"&&K.has(k.node.path))L.preventDefault(),O((m)=>{let n=new Set(m);return n.delete(k.node.path),n});return}if(L.key==="Enter"&&D>=0){L.preventDefault();let k=X[D];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!b_.current.has(m))O_.current?.(m);O((p)=>{let s=new Set(p);if(s.has(m))s.delete(m);else s.add(m);return s}),E(null),w(null),u(!1)}else v_.current?.(m,k.node),C_.current?.(m);return}if((L.key==="Delete"||L.key==="Backspace")&&D>=0){let k=X[D];if(!k||k.node.type==="dir")return;L.preventDefault(),M0(k.node.path);return}if(L.key==="Escape")L.preventDefault(),F0()},[F0,M0,K,I,V2,Y]),X2=S((L)=>{let X=Y0(L),D=X?.closest?.(".workspace-row");if(!D)return;let k=D.dataset.type,m=D.dataset.path;if(!m||m===".")return;if(A0.current===m)return;let n=L?.touches?.[0];if(!n)return;if(Z0.current={path:n0(X)?m:null,dragging:!1,startX:n.clientX,startY:n.clientY},k!=="file")return;if(c_.current)clearTimeout(c_.current);c_.current=setTimeout(()=>{if(c_.current=null,Z0.current?.dragging)return;M0(m)},600)},[M0]),r0=S(()=>{if(c_.current)clearTimeout(c_.current),c_.current=null;let L=Z0.current;if(L?.dragging&&L.path){let X=i.current||f_(),D=g0.current;if(typeof D==="function")D(L.path,X)}Z0.current={path:null,dragging:!1,startX:0,startY:0},f.current=0,L_(!1),d(null),p_(null),r_(),c0()},[f_,c0,p_,r_]),y0=S((L)=>{let X=Z0.current,D=L?.touches?.[0];if(!D||!X?.path){if(c_.current)clearTimeout(c_.current),c_.current=null;return}let k=Math.abs(D.clientX-X.startX),m=Math.abs(D.clientY-X.startY),n=k>8||m>8;if(n&&c_.current)clearTimeout(c_.current),c_.current=null;if(!X.dragging&&n)X.dragging=!0,L_(!0),d("move"),u0(X.path);if(X.dragging){L.preventDefault(),i0(D.clientX,D.clientY);let p=document.elementFromPoint(D.clientX,D.clientY),s=B0(p)||f_();if(i.current!==s)p_(s);Q0(s)}},[B0,f_,u0,i0,p_,Q0]),z0=H((L)=>{L.preventDefault();let X=H_.current;if(!X)return;let D=L.clientY,k=_0.current||280,m=L.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let n=D,p=(g)=>{n=g.clientY;let K_=X.clientHeight-80,j0=Math.min(Math.max(k-(g.clientY-D),80),K_);X.style.setProperty("--preview-height",`${j0}px`),_0.current=j0},s=()=>{let g=X.clientHeight-80,K_=Math.min(Math.max(k-(n-D),80),g);_0.current=K_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",u_("previewHeight",String(Math.round(K_))),document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",s)}).current,v0=H((L)=>{L.preventDefault();let X=H_.current;if(!X)return;let D=L.touches[0];if(!D)return;let k=D.clientY,m=_0.current||280,n=L.currentTarget;n.classList.add("dragging"),document.body.style.userSelect="none";let p=(g)=>{let K_=g.touches[0];if(!K_)return;g.preventDefault();let j0=X.clientHeight-80,j2=Math.min(Math.max(m-(K_.clientY-k),80),j0);X.style.setProperty("--preview-height",`${j2}px`),_0.current=j2},s=()=>{n.classList.remove("dragging"),document.body.style.userSelect="",u_("previewHeight",String(Math.round(_0.current||m))),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",s),document.removeEventListener("touchcancel",s)};document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",s),document.addEventListener("touchcancel",s)}).current,Y2=async()=>{if(!Y)return;try{let L=await E$(Y);if(L.media_id)w(L.media_id)}catch(L){E((X)=>({...X||{},error:L.message||"Failed to attach"}))}},h2=async()=>{if(!Y||B_)return;await M0(Y)},V0=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},P0=S((L)=>{if(!V0(L))return;if(L.preventDefault(),f.current+=1,!X_.current)L_(!0);d("upload");let X=h0(L)||f_();p_(X),Q0(X)},[f_,h0,p_,Q0]),i2=S((L)=>{if(!V0(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!X_.current)L_(!0);if(M_.current!=="upload")d("upload");let X=h0(L)||f_();if(i.current!==X)p_(X);Q0(X)},[f_,h0,p_,Q0]),H3=S((L)=>{if(!V0(L))return;if(L.preventDefault(),f.current=Math.max(0,f.current-1),f.current===0)L_(!1),d(null),p_(null),r_()},[p_,r_]),G2=S(async(L,X=".")=>{let D=Array.from(L||[]);if(D.length===0)return;let k=X&&X!==""?X:".",m=k!=="."?k:"workspace root";j_(!0);try{let n=null;for(let p of D)try{n=await o3(p,k)}catch(s){let g=s?.status,K_=s?.code;if(g===409||K_==="file_exists"){let j0=p?.name||"file";if(!window.confirm(`"${j0}" already exists in ${m}. Overwrite?`))continue;n=await o3(p,k,{overwrite:!0})}else throw s}if(n?.path)L0.current=n.path,z(n.path),C_.current?.(n.path);O_.current?.(k)}catch(n){o(n.message||"Failed to upload file")}finally{j_(!1)}},[]),S2=S(async(L,X)=>{if(!L)return;let D=V_.current?.get(L);if(!D)return;let k=X&&X!==""?X:".",m=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let p=(await w$(L,k))?.path||L;if(D.type==="dir")O((s)=>{let g=new Set;for(let K_ of s)if(K_===L)g.add(p);else if(K_.startsWith(`${L}/`))g.add(`${p}${K_.slice(L.length)}`);else g.add(K_);return g});if(z(p),D.type==="dir")E(null),u(!1),w(null);else C_.current?.(p);O_.current?.(m),O_.current?.(k)}catch(n){o(n?.message||"Failed to move entry")}},[]);g0.current=S2;let F3=S(async(L)=>{if(!V0(L))return;L.preventDefault(),f.current=0,L_(!1),d(null),$_(null),r_();let X=Array.from(L?.dataTransfer?.files||[]);if(X.length===0)return;let D=i.current||h0(L)||f_();await G2(X,D)},[f_,h0,G2]),Q2=S((L)=>{if(L?.stopPropagation?.(),q_)return;let X=L?.currentTarget?.dataset?.uploadTarget||".";t_.current=X,a_.current?.click()},[q_]),y3=S(()=>{if(q_)return;let L=$0.current,X=L?V_.current?.get(L):null;t_.current=X?.type==="dir"?X.path:".",a_.current?.click()},[q_]),C3=S((L)=>{if(!L||L.button!==0)return;let X=L.currentTarget;if(!X||!X.dataset)return;let D=X.dataset.path;if(!D||D===".")return;if(A0.current===D)return;let k=Y0(L);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!n0(k))return;L.preventDefault(),e_.current={path:D,dragging:!1,startX:L.clientX,startY:L.clientY};let m=(p)=>{let s=e_.current;if(!s?.path)return;let g=Math.abs(p.clientX-s.startX),K_=Math.abs(p.clientY-s.startY),j0=g>4||K_>4;if(!s.dragging&&j0)s.dragging=!0,X0.current=!0,L_(!0),d("move"),u0(s.path),i0(p.clientX,p.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(s.dragging){p.preventDefault(),i0(p.clientX,p.clientY);let j2=document.elementFromPoint(p.clientX,p.clientY),d0=B0(j2)||f_();if(i.current!==d0)p_(d0);Q0(d0)}},n=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",n);let p=e_.current;if(p?.dragging&&p.path){let s=i.current||f_(),g=g0.current;if(typeof g==="function")g(p.path,s)}e_.current={path:null,dragging:!1,startX:0,startY:0},f.current=0,L_(!1),d(null),p_(null),r_(),c0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{X0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",n)},[B0,f_,u0,i0,c0,p_,Q0,r_]),p2=S(async(L)=>{let X=Array.from(L?.target?.files||[]);if(X.length===0)return;let D=t_.current||".";if(await G2(X,D),t_.current=".",L?.target)L.target.value=""},[G2]);return V`
        <aside
            class=${`workspace-sidebar${a?" workspace-drop-active":""}`}
            data-workspace-scale=${T_}
            ref=${H_}
            onDragEnter=${P0}
            onDragOver=${i2}
            onDragLeave=${H3}
            onDrop=${F3}
        >
            <input type="file" multiple style="display:none" ref=${a_} onChange=${p2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${q0} title="New file" disabled=${q_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${$2} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${Z_?" active":""}`}
                        onClick=${O2}
                        title=${Z_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!Z_&&V`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${E_}>
                ${q_&&V`<div class="workspace-drop-hint">Uploading…</div>`}
                ${Q&&V`<div class="workspace-loading">Loading…</div>`}
                ${l&&V`<div class="workspace-error">${l}</div>`}
                ${Z&&V`
                    <div
                        class="workspace-tree-list"
                        ref=${o_}
                        tabIndex="0"
                        onClick=${o0}
                        onDblClick=${l0}
                        onKeyDown=${P2}
                        onTouchStart=${X2}
                        onTouchEnd=${r0}
                        onTouchMove=${y0}
                        onTouchCancel=${r0}
                    >
                        ${I.map(({node:L,depth:X})=>{let D=L.type==="dir",k=L.path===Y,m=L.path===W,n=D&&K.has(L.path),p=__&&L.path===__,s=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return V`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${k?" selected":""}${p?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+X*Y_.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${C3}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${D?n?V`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:V`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${D?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${D?V`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:V`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?V`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${w_}
                                                value=${F}
                                                onInput=${(g)=>C(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),W2();else if(g.key==="Escape")g.preventDefault(),U0()}}
                                                onBlur=${U0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:V`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${D&&!n&&s>0&&V`
                                        <span class="workspace-count">${s}</span>
                                    `}
                                    ${D&&V`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${Q2}
                                            disabled=${q_}
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
            ${Y&&V`
                <div class="workspace-preview-splitter-h" onMouseDown=${z0} onTouchStart=${v0}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Y}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${q0} title="New file" disabled=${q_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!B_&&V`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P_&&R_.current?.(Y,A)}
                                    title=${H0}
                                    disabled=${!P_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${h2}
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
                            ${B_?V`
                                    <button class="workspace-download" onClick=${y3}
                                        title="Upload files to this folder" disabled=${q_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${P$(Y,Z_)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:V`<button class="workspace-download" onClick=${Y2} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${M&&V`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&V`<div class="workspace-error">${A.error}</div>`}
                    ${B_&&V`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${G_?.loading&&V`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${G_?.error&&V`<div class="workspace-error">${G_.error}</div>`}
                        ${G_?.payload&&G_.payload.segments?.length>0&&V`
                            <${V5} payload=${G_.payload} />
                        `}
                        ${G_?.payload&&(!G_.payload.segments||G_.payload.segments.length===0)&&V`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!B_&&V`
                        <div class="workspace-preview-body" ref=${R0}></div>
                    `}
                    ${R&&V`
                        <div class="workspace-download-card">
                            <${X5} mediaId=${R} />
                        </div>
                    `}
                </div>
            `}
            ${J_&&V`
                <div class="workspace-drag-ghost" ref=${J0}>${J_.label}</div>
            `}
        </aside>
    `}function g4({tabs:_,activeId:$,onActivate:j,onClose:N,onCloseOthers:Z,onCloseAll:J,onTogglePin:K,onTogglePreview:O,previewTabs:Y,onToggleDock:z,dockVisible:W}){let[B,F]=c(null),C=H(null);v(()=>{if(!B)return;let Q=(P)=>{if(P.type==="keydown"&&P.key!=="Escape")return;F(null)};return document.addEventListener("click",Q),document.addEventListener("keydown",Q),()=>{document.removeEventListener("click",Q),document.removeEventListener("keydown",Q)}},[B]),v(()=>{let Q=(P)=>{if(P.ctrlKey&&P.key==="Tab"){if(P.preventDefault(),!_.length)return;let M=_.findIndex((u)=>u.id===$);if(P.shiftKey){let u=_[(M-1+_.length)%_.length];j?.(u.id)}else{let u=_[(M+1)%_.length];j?.(u.id)}return}if((P.ctrlKey||P.metaKey)&&P.key==="w"){let M=document.querySelector(".editor-pane");if(M&&M.contains(document.activeElement)){if(P.preventDefault(),$)N?.($)}}};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[_,$,j,N]);let A=S((Q,P)=>{if(Q.button===1){Q.preventDefault(),N?.(P);return}if(Q.button===0)j?.(P)},[j,N]),E=S((Q,P)=>{Q.preventDefault(),F({id:P,x:Q.clientX,y:Q.clientY})},[]),R=S((Q)=>{Q.preventDefault(),Q.stopPropagation()},[]),w=S((Q,P)=>{Q.preventDefault(),Q.stopPropagation(),N?.(P)},[N]);if(v(()=>{if(!$||!C.current)return;let Q=C.current.querySelector(".tab-item.active");if(Q)Q.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return V`
        <div class="tab-strip" ref=${C} role="tablist">
            ${_.map((Q)=>V`
                <div
                    key=${Q.id}
                    class=${`tab-item${Q.id===$?" active":""}${Q.dirty?" dirty":""}${Q.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${Q.id===$}
                    title=${Q.path}
                    onMouseDown=${(P)=>A(P,Q.id)}
                    onContextMenu=${(P)=>E(P,Q.id)}
                >
                    ${Q.pinned&&V`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${Q.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${R}
                        onClick=${(P)=>w(P,Q.id)}
                        title=${Q.dirty?"Unsaved changes":"Close"}
                        aria-label=${Q.dirty?"Unsaved changes":`Close ${Q.label}`}
                    >
                        ${Q.dirty?V`<span class="tab-dirty-dot" aria-hidden="true"></span>`:V`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${z&&V`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${W?" active":""}`}
                    onClick=${z}
                    title=${`${W?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${W?"Hide":"Show"} terminal`}
                    aria-pressed=${W?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${B&&V`
            <div class="tab-context-menu" style=${{left:B.x+"px",top:B.y+"px"}}>
                <button onClick=${()=>{N?.(B.id),F(null)}}>Close</button>
                <button onClick=${()=>{Z?.(B.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{J?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(B.id),F(null)}}>
                    ${_.find((Q)=>Q.id===B.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${O&&/\.(md|mdx|markdown)$/i.test(B.id)&&V`
                    <hr />
                    <button onClick=${()=>{O(B.id),F(null)}}>
                        ${Y?.has(B.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var Q5=400,y1=60,h4=220,C1="mdPreviewHeight";function U5(){try{let _=localStorage.getItem(C1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=y1?$:h4}catch{return h4}}function i4({getContent:_,path:$,onClose:j}){let[N,Z]=c(""),[J,K]=c(U5),O=H(null),Y=H(null),z=H(""),W=H(_);return W.current=_,v(()=>{let C=()=>{let E=W.current?.()||"";if(E===z.current)return;z.current=E;try{let R=e0(E,null,{sanitize:!1});Z(R)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};C();let A=setInterval(C,Q5);return()=>clearInterval(A)},[]),v(()=>{if(O.current&&N)K2(O.current).catch(()=>{})},[N]),V`
        <div
            class="md-preview-splitter"
            onMouseDown=${(C)=>{C.preventDefault();let A=C.clientY,E=Y.current?.offsetHeight||J,R=Y.current?.parentElement,w=R?R.offsetHeight*0.7:500,Q=C.currentTarget;Q.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let P=(u)=>{let l=Math.min(Math.max(E-(u.clientY-A),y1),w);K(l)},M=()=>{Q.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(C1,String(Math.round(Y.current?.offsetHeight||J)))}catch{}document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",M)}}
            onTouchStart=${(C)=>{C.preventDefault();let A=C.touches[0];if(!A)return;let E=A.clientY,R=Y.current?.offsetHeight||J,w=Y.current?.parentElement,Q=w?w.offsetHeight*0.7:500,P=C.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let M=(l)=>{let o=l.touches[0];if(!o)return;l.preventDefault();let Z_=Math.min(Math.max(R-(o.clientY-E),y1),Q);K(Z_)},u=()=>{P.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(C1,String(Math.round(Y.current?.offsetHeight||J)))}catch{}document.removeEventListener("touchmove",M),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}}
        ></div>
        <div class="md-preview-panel" ref=${Y} style=${{height:J+"px"}}>
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
                ref=${O}
                dangerouslySetInnerHTML=${{__html:N}}
            />
        </div>
    `}function p4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j}){let N=H(_);N.current=_;let Z=H($);Z.current=$;let J=H(j);J.current=j,v(()=>{J.current();let K=new d3((Y,z)=>N.current(Y,z),(Y)=>Z.current(Y));K.connect();let O=()=>{K.reconnectIfNeeded()};return window.addEventListener("focus",O),document.addEventListener("visibilitychange",O),()=>{window.removeEventListener("focus",O),document.removeEventListener("visibilitychange",O),K.disconnect()}},[])}function n4(){let[_,$]=c(!1),[j,N]=c("default"),Z=H(!1);v(()=>{let Y=E2("notificationsEnabled",!1);if(Z.current=Y,$(Y),typeof Notification<"u")N(Notification.permission)},[]),v(()=>{Z.current=_},[_]);let J=S(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let Y=Notification.requestPermission();if(Y&&typeof Y.then==="function")return Y;return Promise.resolve(Y)}catch{return Promise.resolve("default")}},[]),K=S(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){N("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let z=await J();if(N(z||"default"),z!=="granted"){Z.current=!1,$(!1),u_("notificationsEnabled","false");return}}let Y=!Z.current;Z.current=Y,$(Y),u_("notificationsEnabled",String(Y))},[J]),O=S((Y,z)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(Y,{body:z});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:O}}var g2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function l4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[j,N]=c(null),[Z,J]=c(!1),K=H(!1),O=H(null),Y=H(!1),z=H(null),W=H(null);v(()=>{K.current=Z},[Z]),v(()=>{W.current=j},[j]);let B=S(async(A=null)=>{try{if(A){let E=await G$(A);N(E.posts),J(!1)}else{let E=await j3(10);N(E.posts),J(E.has_more)}}catch(E){console.error("Failed to load posts:",E)}},[]),F=S(async()=>{try{let A=await j3(10);N((E)=>{if(!E||E.length===0)return A.posts;return g2([...A.posts,...E])}),J((E)=>E||A.has_more)}catch(A){console.error("Failed to refresh timeline:",A)}},[]),C=S(async(A={})=>{let E=W.current;if(!E||E.length===0)return;if(Y.current)return;let{preserveScroll:R=!0,preserveMode:w="top",allowRepeat:Q=!1}=A,P=(l)=>{if(!R){l();return}if(w==="top")$(l);else _(l)},u=E.slice().sort((l,o)=>l.id-o.id)[0]?.id;if(!Number.isFinite(u))return;if(!Q&&z.current===u)return;Y.current=!0,z.current=u;try{let l=await j3(10,u);if(l.posts.length>0)P(()=>{N((o)=>g2([...l.posts,...o||[]])),J(l.has_more)});else J(!1)}catch(l){console.error("Failed to load more posts:",l)}finally{Y.current=!1}},[_,$]);return v(()=>{O.current=C},[C]),{posts:j,setPosts:N,hasMore:Z,setHasMore:J,hasMoreRef:K,loadPosts:B,refreshTimeline:F,loadMore:C,loadMoreRef:O,loadingMoreRef:Y,lastBeforeIdRef:z}}function o4(){let[_,$]=c(null),[j,N]=c({text:"",totalLines:0}),[Z,J]=c(""),[K,O]=c({text:"",totalLines:0}),[Y,z]=c(null),[W,B]=c(null),[F,C]=c(null),A=H(null),E=H(0),R=H(!1),w=H(""),Q=H(""),P=H(null),M=H(null),u=H(null),l=H(null),o=H(!1),Z_=H(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:N,agentPlan:Z,setAgentPlan:J,agentThought:K,setAgentThought:O,pendingRequest:Y,setPendingRequest:z,currentTurnId:W,setCurrentTurnId:B,steerQueuedTurnId:F,setSteerQueuedTurnId:C,lastAgentEventRef:A,lastSilenceNoticeRef:E,isAgentRunningRef:R,draftBufferRef:w,thoughtBufferRef:Q,pendingRequestRef:P,stalledPostIdRef:M,currentTurnIdRef:u,steerQueuedTurnIdRef:l,thoughtExpandedRef:o,draftExpandedRef:Z_}}function r4({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:N}){let Z=H((W)=>{W.preventDefault();let B=_.current;if(!B)return;let F=W.clientX,C=$.current||280,A=W.currentTarget;A.classList.add("dragging"),B.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=F,R=(Q)=>{E=Q.clientX;let P=Math.min(Math.max(C+(Q.clientX-F),160),600);B.style.setProperty("--sidebar-width",`${P}px`),$.current=P},w=()=>{let Q=Math.min(Math.max(C+(E-F),160),600);$.current=Q,A.classList.remove("dragging"),B.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",u_("sidebarWidth",String(Math.round(Q))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",w)}).current,J=H((W)=>{W.preventDefault();let B=_.current;if(!B)return;let F=W.touches[0];if(!F)return;let C=F.clientX,A=$.current||280,E=W.currentTarget;E.classList.add("dragging"),B.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(Q)=>{let P=Q.touches[0];if(!P)return;Q.preventDefault();let M=Math.min(Math.max(A+(P.clientX-C),160),600);B.style.setProperty("--sidebar-width",`${M}px`),$.current=M},w=()=>{E.classList.remove("dragging"),B.classList.remove("sidebar-resizing"),document.body.style.userSelect="",u_("sidebarWidth",String(Math.round($.current||A))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,K=H((W)=>{W.preventDefault();let B=_.current;if(!B)return;let F=W.clientX,C=j.current||$.current||280,A=W.currentTarget;A.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=F,R=(Q)=>{E=Q.clientX;let P=Math.min(Math.max(C+(Q.clientX-F),200),800);B.style.setProperty("--editor-width",`${P}px`),j.current=P},w=()=>{let Q=Math.min(Math.max(C+(E-F),200),800);j.current=Q,A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",u_("editorWidth",String(Math.round(Q))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",w)}).current,O=H((W)=>{W.preventDefault();let B=_.current;if(!B)return;let F=W.touches[0];if(!F)return;let C=F.clientX,A=j.current||$.current||280,E=W.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let R=(Q)=>{let P=Q.touches[0];if(!P)return;Q.preventDefault();let M=Math.min(Math.max(A+(P.clientX-C),200),800);B.style.setProperty("--editor-width",`${M}px`),j.current=M},w=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",u_("editorWidth",String(Math.round(j.current||A))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,Y=H((W)=>{W.preventDefault();let B=_.current;if(!B)return;let F=W.clientY,C=N?.current||200,A=W.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=F,R=(Q)=>{E=Q.clientY;let P=Math.min(Math.max(C-(Q.clientY-F),100),window.innerHeight*0.5);if(B.style.setProperty("--dock-height",`${P}px`),N)N.current=P;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{let Q=Math.min(Math.max(C-(E-F),100),window.innerHeight*0.5);if(N)N.current=Q;A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",u_("dockHeight",String(Math.round(Q))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",w)}).current,z=H((W)=>{W.preventDefault();let B=_.current;if(!B)return;let F=W.touches[0];if(!F)return;let C=F.clientY,A=N?.current||200,E=W.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let R=(Q)=>{let P=Q.touches[0];if(!P)return;Q.preventDefault();let M=Math.min(Math.max(A-(P.clientY-C),100),window.innerHeight*0.5);if(B.style.setProperty("--dock-height",`${M}px`),N)N.current=M;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",u_("dockHeight",String(Math.round(N?.current||A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:J,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:O,handleDockSplitterMouseDown:Y,handleDockSplitterTouchStart:z}}function d4({onTabClosed:_}={}){let $=H(_);$.current=_;let[j,N]=c(()=>S_.getTabs()),[Z,J]=c(()=>S_.getActiveId()),[K,O]=c(()=>S_.getTabs().length>0);v(()=>{return S_.onChange((M,u)=>{N(M),J(u),O(M.length>0)})},[]);let[Y,z]=c(()=>new Set),W=S((M)=>{z((u)=>{let l=new Set(u);if(l.has(M))l.delete(M);else l.add(M);return l})},[]),B=S((M)=>{z((u)=>{if(!u.has(M))return u;let l=new Set(u);return l.delete(M),l})},[]),F=S((M)=>{if(!M)return;let u={path:M,mode:"edit"};try{if(!s_.resolve(u)){if(!s_.get("editor")){console.warn(`[openEditor] No pane handler for: ${M}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${M}":`,l)}S_.open(M)},[]),C=S(()=>{let M=S_.getActiveId();if(M){let u=S_.get(M);if(u?.dirty){if(!window.confirm(`"${u.label}" has unsaved changes. Close anyway?`))return}S_.close(M),B(M),$.current?.(M)}},[B]),A=S((M)=>{let u=S_.get(M);if(u?.dirty){if(!window.confirm(`"${u.label}" has unsaved changes. Close anyway?`))return}S_.close(M),B(M),$.current?.(M)},[B]),E=S((M)=>{S_.activate(M)},[]),R=S((M)=>{let u=S_.getTabs().filter((Z_)=>Z_.id!==M&&!Z_.pinned),l=u.filter((Z_)=>Z_.dirty).length;if(l>0){if(!window.confirm(`${l} unsaved tab${l>1?"s":""} will be closed. Continue?`))return}let o=u.map((Z_)=>Z_.id);S_.closeOthers(M),o.forEach((Z_)=>{B(Z_),$.current?.(Z_)})},[B]),w=S(()=>{let M=S_.getTabs().filter((o)=>!o.pinned),u=M.filter((o)=>o.dirty).length;if(u>0){if(!window.confirm(`${u} unsaved tab${u>1?"s":""} will be closed. Continue?`))return}let l=M.map((o)=>o.id);S_.closeAll(),l.forEach((o)=>{B(o),$.current?.(o)})},[B]),Q=S((M)=>{S_.togglePin(M)},[]),P=S(()=>{let M=S_.getActiveId();if(M)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:M}}))},[]);return v(()=>{let M=(u)=>{let{oldPath:l,newPath:o,type:Z_}=u.detail||{};if(!l||!o)return;if(Z_==="dir"){for(let z_ of S_.getTabs())if(z_.path===l||z_.path.startsWith(`${l}/`)){let a=`${o}${z_.path.slice(l.length)}`;S_.rename(z_.id,a)}}else S_.rename(l,o)};return window.addEventListener("workspace-file-renamed",M),()=>window.removeEventListener("workspace-file-renamed",M)},[]),v(()=>{let M=(u)=>{if(S_.hasUnsaved())u.preventDefault(),u.returnValue=""};return window.addEventListener("beforeunload",M),()=>window.removeEventListener("beforeunload",M)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:Z,previewTabs:Y,openEditor:F,closeEditor:C,handleTabClose:A,handleTabActivate:E,handleTabCloseOthers:R,handleTabCloseAll:w,handleTabTogglePin:Q,handleTabTogglePreview:W,revealInExplorer:P}}function D1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},N=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[N],J=Number(Z);return Number.isFinite(J)?J:$}catch{return $}}var k1=D1("warning",30000),s4=D1("finalize",120000),E1=D1("refresh",30000),a4=30000;function t4(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function e4(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function _8(_=30000){let[,$]=c(0);v(()=>{let j=setInterval(()=>$((N)=>N+1),_);return()=>clearInterval(j)},[_])}function A1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((N,Z)=>N+Math.max(1,Math.ceil(Z.length/$)),0)}function $8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function M2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var w1="piclaw_btw_session";function H5(){let _=S0(w1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",N=typeof $.answer==="string"?$.answer:"",Z=typeof $.thinking==="string"?$.thinking:"",J=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:N,thinking:Z,error:K==="error"?J||"BTW stream interrupted. You can retry.":J,model:null,status:K}}catch{return null}}var F5=L$,j8=q$,y5=W$,N8=H$,Z8=F$,J8=V$,b1=typeof g3==="function"?g3:M2("getAgentContext",null),C5=typeof U2==="function"?U2:M2("getAgentModels",{current:null,models:[]}),D5=typeof h3==="function"?h3:M2("getAgentQueueState",{count:0}),k5=typeof p3==="function"?p3:M2("steerAgentQueueItem",{removed:!1,queued:"steer"}),E5=typeof i3==="function"?i3:M2("removeAgentQueueItem",{removed:!1}),A5=typeof l3==="function"?l3:M2("streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});s_.register(z1);s_.register(q1);s_.register(B1);O1();s_.register(G1);function b5(){let[_,$]=c("disconnected"),[j,N]=c(null),[Z,J]=c(null),[K,O]=c(!1),[Y,z]=c([]),[W,B]=c([]),[F,C]=c(null),{agentStatus:A,setAgentStatus:E,agentDraft:R,setAgentDraft:w,agentPlan:Q,setAgentPlan:P,agentThought:M,setAgentThought:u,pendingRequest:l,setPendingRequest:o,currentTurnId:Z_,setCurrentTurnId:z_,steerQueuedTurnId:a,setSteerQueuedTurnId:L_,lastAgentEventRef:k_,lastSilenceNoticeRef:d,isAgentRunningRef:J_,draftBufferRef:r,thoughtBufferRef:__,pendingRequestRef:$_,stalledPostIdRef:q_,currentTurnIdRef:j_,steerQueuedTurnIdRef:G_,thoughtExpandedRef:y_,draftExpandedRef:A_}=o4(),[m_,T_]=c({}),[C0,b_]=c(null),[g_,N_]=c(null),[W_,Q_]=c(!1),[U_,V_]=c(null),[v_,R_]=c(null),[C_,O_]=c([]),[H_,o_]=c(!1),[w_,a_]=c(()=>H5()),t_=C_.length,c_=H(new Set),Z0=H([]),e_=H(new Set),G0=H({inFlight:!1,lastAttemptAt:0,turnId:null});c_.current=new Set(C_.map((G)=>G.row_id)),Z0.current=C_;let{notificationsEnabled:X0,notificationPermission:_0,toggleNotifications:x0,notify:b0}=n4(),[D0,R0]=c(()=>new Set),[h_,O0]=c(()=>E2("workspaceOpen",!0)),k0=H(null),{editorOpen:i_,tabStripTabs:f,tabStripActiveId:i,previewTabs:X_,openEditor:M_,closeEditor:J0,handleTabClose:_2,handleTabActivate:E0,handleTabCloseOthers:g0,handleTabCloseAll:$0,handleTabTogglePin:A0,handleTabTogglePreview:L0,revealInExplorer:w0}=d4({onTabClosed:(G)=>k0.current?.(G)}),K0=H(null),T0=H(null),y2=H(null),I0=H(null),f_=s_.getDockPanes().length>0,[B0,h0]=c(!1),p_=S(()=>h0((G)=>!G),[]),r_=i_||f_&&B0;v(()=>{let G=K0.current;if(!G)return;if(T0.current)T0.current.dispose(),T0.current=null;let q=i;if(!q)return;let y={path:q,mode:"edit"},b=s_.resolve(y)||s_.get("editor");if(!b){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let T=b.mount(G,y);T0.current=T,T.onDirtyChange?.((h)=>{S_.setDirty(q,h)}),T.onSaveRequest?.(()=>{}),T.onClose?.(()=>{J0()});let x=S_.getViewState(q);if(x&&typeof T.restoreViewState==="function")requestAnimationFrame(()=>T.restoreViewState(x));if(typeof T.onViewStateChange==="function")T.onViewStateChange((h)=>{S_.saveViewState(q,h)});return requestAnimationFrame(()=>T.focus()),()=>{if(T0.current===T)T.dispose(),T0.current=null}},[i,J0]),v(()=>{let G=y2.current;if(I0.current)I0.current.dispose(),I0.current=null;if(!G||!f_||!B0)return;let q=s_.getDockPanes()[0];if(!q){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let y=q.mount(G,{mode:"view"});return I0.current=y,requestAnimationFrame(()=>y.focus?.()),()=>{if(I0.current===y)y.dispose(),I0.current=null}},[f_,B0]);let[Q0,i0]=c({name:"You",avatar_url:null,avatar_background:null}),u0=H(!1),c0=H(!1),p0=H(null),U0=H(0),q2=H(0),W2=H({}),C2=H({name:null,avatar_url:null}),q0=H({currentHashtag:null,searchQuery:null}),m0=H(null),W0=H(null),U=H(0),I=H(0),t=H(0),Y_=H(null),D_=H(null),B_=H(null),P_=H(null),H0=H(0),Y0=H({title:null,avatarBase:null}),n0=H(null),l0=S(()=>{if(n0.current)clearTimeout(n0.current),n0.current=null;C(null)},[]);_8(30000),v(()=>{return v$()},[]),v(()=>{u_("workspaceOpen",String(h_))},[h_]),v(()=>{return()=>{l0()}},[l0]),v(()=>{if(!w_){u_(w1,"");return}u_(w1,JSON.stringify({question:w_.question||"",answer:w_.answer||"",thinking:w_.thinking||"",error:w_.error||null,status:w_.status||"success"}))},[w_]),v(()=>{W2.current=m_||{}},[m_]),v(()=>{C2.current=Q0||{name:"You",avatar_url:null,avatar_background:null}},[Q0]);let o0=S((G,q,y=null)=>{if(typeof document>"u")return;let b=(G||"").trim()||"PiClaw";if(Y0.current.title!==b){document.title=b;let F_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(F_&&F_.getAttribute("content")!==b)F_.setAttribute("content",b);Y0.current.title=b}let T=document.getElementById("dynamic-favicon");if(!T)return;let x=T.getAttribute("data-default")||T.getAttribute("href")||"/favicon.ico",h=q||x,e=q?`${h}|${y||""}`:h;if(Y0.current.avatarBase!==e){let F_=q?`${h}${h.includes("?")?"&":"?"}v=${y||Date.now()}`:h;T.setAttribute("href",F_),Y0.current.avatarBase=e}},[]),$2=S((G)=>{if(!G)return;z((q)=>q.includes(G)?q:[...q,G])},[]),F0=S((G)=>{z((q)=>q.filter((y)=>y!==G))},[]);k0.current=F0;let O2=S(()=>{z([])},[]),E_=S((G,q=null,y="info",b=3000)=>{l0(),C({title:G,detail:q||null,kind:y||"info"}),n0.current=setTimeout(()=>{C((T)=>T?.title===G?null:T)},b)},[l0]),M0=S((G)=>{let q=$8(G,{editorOpen:i_,resolvePane:(y)=>s_.resolve(y)});if(q.kind==="open"){M_(q.path);return}if(q.kind==="toast")E_(q.title,q.detail,q.level)},[i_,M_,E_]),V2=S(()=>{let G=i;if(G)$2(G)},[i,$2]),P2=S((G)=>{if(!G)return;B((q)=>q.includes(G)?q:[...q,G])},[]),X2=S(async(G)=>{let q=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},y=document.getElementById("post-"+G);if(y){q(y);return}try{let T=(await B$(G))?.thread?.[0];if(!T)return;X((x)=>{if(!x)return[T];if(x.some((h)=>h.id===T.id))return x;return[...x,T]}),requestAnimationFrame(()=>{setTimeout(()=>{let x=document.getElementById("post-"+G);if(x)q(x)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",G,b)}},[]),r0=S((G)=>{B((q)=>q.filter((y)=>y!==G))},[]),y0=S(()=>{B([])},[]),z0=S((G={})=>{let q=Date.now();if(k_.current=q,G.running)J_.current=!0,o_((y)=>y?y:!0);if(G.clearSilence)d.current=0},[o_]),v0=S(()=>{if(P_.current)clearTimeout(P_.current),P_.current=null;H0.current=0},[]);v(()=>()=>{v0()},[v0]);let Y2=S(()=>{v0(),E((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:q,lastActivity:y,...b}=G;return b})},[v0]),h2=S((G)=>{if(!G)return;v0();let q=Date.now();H0.current=q,E({type:G.type||"active",last_activity:!0}),P_.current=setTimeout(()=>{if(H0.current!==q)return;E((y)=>{if(!y||!(y.last_activity||y.lastActivity))return y;return null})},a4)},[v0]),V0=S(()=>{J_.current=!1,o_(!1),k_.current=null,d.current=0,r.current="",__.current="",$_.current=null,D_.current=null,j_.current=null,G_.current=null,p0.current=null,G0.current={inFlight:!1,lastAttemptAt:0,turnId:null},v0(),z_(null),L_(null),y_.current=!1,A_.current=!1},[v0,z_,L_,o_]),P0=S((G)=>{if(!G)return;if(j_.current===G)return;j_.current=G,G0.current={inFlight:!1,lastAttemptAt:0,turnId:G},z_(G),G_.current=null,L_(null),r.current="",__.current="",w({text:"",totalLines:0}),P(""),u({text:"",totalLines:0}),o(null),$_.current=null,D_.current=null,y_.current=!1,A_.current=!1},[z_,L_]),i2=S((G)=>{if(typeof document<"u"){let F_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&F_)return}let q=D_.current;if(!q||!q.post)return;if(G&&q.turnId&&q.turnId!==G)return;let y=q.post;if(y.id&&Y_.current===y.id)return;let b=String(y?.data?.content||"").trim();if(!b)return;Y_.current=y.id||Y_.current,D_.current=null;let T=b.replace(/\s+/g," ").slice(0,200),x=W2.current||{},e=(y?.data?.agent_id?x[y.data.agent_id]:null)?.name||"Pi";b0(e,T)},[b0]),H3=S(async(G,q)=>{if(G!=="thought"&&G!=="draft")return;let y=j_.current;if(G==="thought"){if(y_.current=q,y)try{await Z8(y,"thought",q)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!q)return;try{let b=y?await N8(y,"thought"):null;if(b?.text)__.current=b.text;u((T)=>({...T||{text:"",totalLines:0},fullText:__.current||T?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:T?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(A_.current=q,y)try{await Z8(y,"draft",q)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!q)return;try{let b=y?await N8(y,"draft"):null;if(b?.text)r.current=b.text;w((T)=>({...T||{text:"",totalLines:0},fullText:r.current||T?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:T?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),G2=H(null),S2=S(()=>{let G=m0.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);G2.current=S2;let F3=S((G)=>{let q=m0.current;if(!q||typeof G!=="function"){G?.();return}let{currentHashtag:y,searchQuery:b}=q0.current||{},T=!(b&&!y),x=T?q.scrollHeight-q.scrollTop:q.scrollTop;G(),requestAnimationFrame(()=>{let h=m0.current;if(!h)return;if(T){let e=Math.max(h.scrollHeight-x,0);h.scrollTop=e}else{let e=Math.max(h.scrollHeight-h.clientHeight,0),F_=Math.min(x,e);h.scrollTop=F_}})},[]),Q2=S((G)=>{let q=m0.current;if(!q||typeof G!=="function"){G?.();return}let y=q.scrollTop;G(),requestAnimationFrame(()=>{let b=m0.current;if(!b)return;let T=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(y,T)})},[]),y3="Queued as a follow-up (one-at-a-time).",C3="⁣",p2=S((G)=>{if(!G||!Array.isArray(G))return G;let q=c_.current,y=new Set(q),b=G.filter((T)=>{if(y.has(T?.id))return!1;if(T?.data?.is_bot_message){let x=T?.data?.content;if(x===y3||x===C3)return!1}return!0});return b.length===G.length?G:b},[]),{posts:L,setPosts:X,hasMore:D,setHasMore:k,hasMoreRef:m,loadPosts:n,refreshTimeline:p,loadMore:s,loadMoreRef:g}=l4({preserveTimelineScroll:F3,preserveTimelineScrollTop:Q2}),K_=d_(()=>p2(L),[L,C_,p2]),j0=S(()=>{let G=q_.current;if(!G)return;X((q)=>q?q.filter((y)=>y.id!==G):q),q_.current=null},[X]),{handleSplitterMouseDown:j2,handleSplitterTouchStart:d0,handleEditorSplitterMouseDown:K8,handleEditorSplitterTouchStart:z8,handleDockSplitterMouseDown:O8,handleDockSplitterTouchStart:Y8}=r4({appShellRef:W0,sidebarWidthRef:U,editorWidthRef:I,dockHeightRef:t}),M1=S(()=>{if(!J_.current)return;J_.current=!1,d.current=0,k_.current=null,j_.current=null,z_(null),y_.current=!1,A_.current=!1;let G=(r.current||"").trim();if(r.current="",__.current="",w({text:"",totalLines:0}),P(""),u({text:"",totalLines:0}),o(null),$_.current=null,D_.current=null,!G){E({type:"error",title:"Response stalled - No content received"});return}let y=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),T=new Date().toISOString(),x={id:b,timestamp:T,data:{type:"agent_response",content:y,agent_id:"default",is_local_stall:!0}};q_.current=b,X((h)=>h?g2([...h,x]):[x]),G2.current?.(),E(null)},[z_]);v(()=>{q0.current={currentHashtag:j,searchQuery:Z}},[j,Z]);let I_=S(()=>{D5().then((G)=>{let q=e_.current,y=Array.isArray(G?.items)?G.items.map((b)=>({...b})).filter((b)=>!q.has(b.row_id)):[];if(y.length){O_((b)=>{if(b.length===y.length&&b.every((T,x)=>T.row_id===y[x].row_id))return b;return y});return}q.clear(),O_((b)=>b.length===0?b:[])}).catch(()=>{O_((G)=>G.length===0?G:[])})},[O_]),s0=S(async()=>{try{let G=await b1();if(G)R_(G)}catch(G){console.warn("Failed to fetch agent context:",G)}},[]),a0=S(async()=>{try{let G=await J8("web:default");if(!G||G.status!=="active"||!G.data){if(c0.current){let{currentHashtag:b,searchQuery:T}=q0.current||{};if(!b&&!T)p()}return c0.current=!1,V0(),p0.current=null,E(null),w({text:"",totalLines:0}),P(""),u({text:"",totalLines:0}),o(null),$_.current=null,G??null}c0.current=!0;let q=G.data;p0.current=q;let y=q.turn_id||q.turnId;if(y)P0(y);if(z0({running:!0,clearSilence:!0}),Y2(),E(q),G.thought&&G.thought.text)u((b)=>{if(b&&b.text&&b.text.length>=G.thought.text.length)return b;return __.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)w((b)=>{if(b&&b.text&&b.text.length>=G.draft.text.length)return b;return r.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[V0,Y2,z0,p,P0]),D3=S(async()=>{if(!J_.current)return null;if($_.current)return null;let G=j_.current||null,q=G0.current,y=Date.now();if(q.inFlight)return null;if(q.turnId===G&&y-q.lastAttemptAt<E1)return null;q.inFlight=!0,q.lastAttemptAt=y,q.turnId=G;try{let{currentHashtag:b,searchQuery:T}=q0.current||{};if(!b&&!T)await p();return await I_(),await a0()}finally{q.inFlight=!1}},[a0,I_,p]);v(()=>{let G=Math.min(1000,Math.max(100,Math.floor(k1/2))),q=setInterval(()=>{if(!J_.current)return;if($_.current)return;let y=k_.current;if(!y)return;let b=Date.now(),T=b-y,x=B3(p0.current);if(T>=s4){if(!x)E({type:"waiting",title:"Re-syncing after a quiet period…"});D3();return}if(T>=k1){if(b-d.current>=E1){if(!x){let h=Math.floor(T/1000);E({type:"waiting",title:`Waiting for model… No events for ${h}s`})}d.current=b,D3()}}},G);return()=>clearInterval(q)},[D3]);let G8=S((G)=>{if($(G),G!=="connected"){E(null),w({text:"",totalLines:0}),P(""),u({text:"",totalLines:0}),o(null),$_.current=null,V0();return}if(!u0.current){u0.current=!0,a0(),s0();return}let{currentHashtag:q,searchQuery:y}=q0.current;if(!q&&!y)p();a0(),s0()},[V0,p,a0,s0]),L8=S(async(G)=>{N(G),X(null),await n(G)},[n]),B8=S(async()=>{N(null),J(null),X(null),await n()},[n]),q8=S(async(G)=>{if(!G||!G.trim())return;J(G.trim()),N(null),X(null);try{let q=await F5(G.trim());X(q.results),k(!1)}catch(q){console.error("Failed to search:",q),X([])}},[]),W8=S(()=>{O(!0),J(null),N(null),X([])},[]),V8=S(()=>{O(!1),J(null),n()},[n]),w5=S(()=>{},[]),X8=S(async(G)=>{if(!G)return;let q=G.id,y=K_?.filter((T)=>T?.data?.thread_id===q&&T?.id!==q).length||0;if(y>0){if(!window.confirm(`Delete this message and its ${y} replies?`))return}let b=(T)=>{if(!T.length)return;R0((h)=>{let e=new Set(h);return T.forEach((F_)=>e.add(F_)),e}),setTimeout(()=>{if(Q2(()=>{X((h)=>h?h.filter((e)=>!T.includes(e.id)):h)}),R0((h)=>{let e=new Set(h);return T.forEach((F_)=>e.delete(F_)),e}),m.current)g.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let T=await j8(q,y>0);if(T?.ids?.length)b(T.ids)}catch(T){let x=T?.message||"";if(y===0&&x.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await j8(q,!0);if(e?.ids?.length)b(e.ids);return}console.error("Failed to delete post:",T),alert(`Failed to delete message: ${x}`)}},[K_,Q2]),P1=S(async()=>{try{let G=await y5();T_(t4(G));let q=G?.user||{};i0((b)=>{let T=typeof q.name==="string"&&q.name.trim()?q.name.trim():"You",x=typeof q.avatar_url==="string"?q.avatar_url.trim():null,h=typeof q.avatar_background==="string"&&q.avatar_background.trim()?q.avatar_background.trim():null;if(b.name===T&&b.avatar_url===x&&b.avatar_background===h)return b;return{name:T,avatar_url:x,avatar_background:h}});let y=(G?.agents||[]).find((b)=>b.id==="default");if(y?.model)b_(y.model);o0(y?.name,y?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=await b1();if(G)R_(G)}catch{}},[o0]);v(()=>{P1();let G=A2("sidebarWidth",null),q=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(U.current=q,W0.current)W0.current.style.setProperty("--sidebar-width",`${q}px`)},[P1]);let k3=H_||A!==null,S1=S((G)=>{if(!G||typeof G!=="object")return;let q=G.agent_id;if(!q)return;let{agent_name:y,agent_avatar:b}=G;if(!y&&b===void 0)return;let T=W2.current?.[q]||{id:q},x=T.name||null,h=T.avatar_url??T.avatarUrl??T.avatar??null,e=!1,F_=!1;if(y&&y!==T.name)x=y,F_=!0;if(b!==void 0){let N2=typeof b==="string"?b.trim():null,x1=typeof h==="string"?h.trim():null,D2=N2||null;if(D2!==(x1||null))h=D2,e=!0}if(!F_&&!e)return;if(T_((N2)=>{let D2={...N2[q]||{id:q}};if(F_)D2.name=x;if(e)D2.avatar_url=h;return{...N2,[q]:D2}}),q==="default")o0(x,h,e?Date.now():null)},[o0]),f1=S((G)=>{if(!G||typeof G!=="object")return;let q=G.user_name??G.userName,y=G.user_avatar??G.userAvatar,b=G.user_avatar_background??G.userAvatarBackground;if(q===void 0&&y===void 0&&b===void 0)return;i0((T)=>{let x=typeof q==="string"&&q.trim()?q.trim():T.name||"You",h=y===void 0?T.avatar_url:typeof y==="string"&&y.trim()?y.trim():null,e=b===void 0?T.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(T.name===x&&T.avatar_url===h&&T.avatar_background===e)return T;return{name:x,avatar_url:h,avatar_background:e}})},[]),E3=S((G)=>{if(!G||typeof G!=="object")return;let q=G.model??G.current;if(q!==void 0)b_(q);if(G.thinking_level!==void 0)N_(G.thinking_level??null);if(G.supports_thinking!==void 0)Q_(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)V_(G.provider_usage??null)},[]),f2=S(()=>{C5().then((G)=>{if(G)E3(G)}).catch(()=>{})},[E3]),Q8=S((G)=>{let q=G?.row_id;if(q==null)return;e_.current.add(q),O_((y)=>y.filter((b)=>b?.row_id!==q)),k5(q).then(()=>{I_()}).catch((y)=>{console.warn("[queue] Failed to steer queued item:",y),E_("Failed to steer message","The queued message could not be sent as steering.","warning"),e_.current.delete(q),I_()})},[I_,O_,E_]),U8=S((G)=>{let q=G?.row_id;if(q==null)return;e_.current.add(q),O_((y)=>y.filter((b)=>b?.row_id!==q)),E5(q).then(()=>{I_()}).catch((y)=>{console.warn("[queue] Failed to remove queued item:",y),E_("Failed to remove message","The queued message could not be removed.","warning"),e_.current.delete(q),I_()})},[I_,O_,E_]),A3=S((G)=>{if(!G||typeof G!=="object")return;if(G?.queued==="followup"||G?.queued==="steer"){I_();return}let q=G?.command;if(q&&typeof q==="object"&&(q?.queued_followup||q?.queued_steer))I_()},[I_]),b3=S(()=>{if(B_.current)B_.current.abort(),B_.current=null;a_(null)},[]),n2=S(async(G)=>{let q=String(G||"").trim();if(!q)return E_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(B_.current)B_.current.abort();let y=new AbortController;B_.current=y,a_({question:q,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await A5(q,{signal:y.signal,systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(T,x)=>{if(T==="side_prompt_start")a_((h)=>h?{...h,status:"running"}:h)},onThinkingDelta:(T)=>{a_((x)=>x?{...x,thinking:`${x.thinking||""}${T||""}`}:x)},onTextDelta:(T)=>{a_((x)=>x?{...x,answer:`${x.answer||""}${T||""}`}:x)}});if(B_.current!==y)return!0;a_((T)=>T?{...T,answer:b?.result||T.answer||"",thinking:b?.thinking||T.thinking||"",model:b?.model||null,status:"success",error:null}:T)}catch(b){if(y.signal.aborted)return!0;a_((T)=>T?{...T,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:T)}finally{if(B_.current===y)B_.current=null}return!0},[E_]),H8=S(async({content:G})=>{let q=d$(G);if(!q)return!1;if(q.type==="help")return E_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return b3(),E_("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await n2(q.question),!0;return!1},[b3,n2,E_]),F8=S(()=>{if(w_?.question)n2(w_.question)},[w_,n2]),y8=S(async()=>{let G=t$(w_);if(!G)return;try{let q=await I2("default",G,null,[],k3?"queue":null);A3(q),E_(q?.queued==="followup"?"BTW queued":"BTW injected",q?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(q){E_("BTW inject failed",q?.message||"Could not inject BTW answer into chat.","warning")}},[w_,A3,k3,E_]),w3=S(()=>{f2(),I_(),s0()},[f2,I_,s0]);v(()=>{w3();let G=setInterval(()=>{f2(),I_()},60000);return()=>clearInterval(G)},[w3,f2,I_]);let M3=S((G,q)=>{let y=q?.turn_id;if(S1(q),f1(q),G==="ui_theme"){R$(q);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))Y2()}if(G==="connected"){E(null),w({text:"",totalLines:0}),P(""),u({text:"",totalLines:0}),o(null),$_.current=null,V0(),J8("web:default").then((e)=>{if(!e||e.status!=="active"||!e.data)return;let F_=e.data,N2=F_.turn_id||F_.turnId;if(N2)P0(N2);if(z0({clearSilence:!0}),h2(F_),e.thought&&e.thought.text)__.current=e.thought.text,u({text:e.thought.text,totalLines:e.thought.totalLines||0});if(e.draft&&e.draft.text)r.current=e.draft.text,w({text:e.draft.text,totalLines:e.draft.totalLines||0})}).catch((e)=>{console.warn("Failed to fetch agent status:",e)});let{currentHashtag:x,searchQuery:h}=q0.current||{};if(!x&&!h)p();w3();return}if(G==="agent_status"){if(q.type==="done"||q.type==="error"){if(y&&j_.current&&y!==j_.current)return;if(q.type==="done"){i2(y||j_.current);let{currentHashtag:x,searchQuery:h}=q0.current||{};if(!x&&!h)p();if(q.context_usage)R_(q.context_usage)}if(c0.current=!1,V0(),e_.current.clear(),I_(),w({text:"",totalLines:0}),P(""),u({text:"",totalLines:0}),o(null),q.type==="error")E({type:"error",title:q.title||"Agent error"}),setTimeout(()=>E(null),8000);else E(null)}else{if(y)P0(y);if(z0({running:!0,clearSilence:!0}),q.type==="thinking")r.current="",__.current="",w({text:"",totalLines:0}),P(""),u({text:"",totalLines:0});p0.current=q,E((x)=>{if(x&&x.type===q.type&&x.title===q.title)return x;return q})}return}if(G==="agent_steer_queued"){if(y&&j_.current&&y!==j_.current)return;let x=y||j_.current;if(!x)return;G_.current=x,L_(x);return}if(G==="agent_followup_queued"){let x=q?.row_id,h=q?.content;if(x!=null&&typeof h==="string"&&h.trim())O_((e)=>{if(e.some((F_)=>F_?.row_id===x))return e;return[...e,{row_id:x,content:h,timestamp:q?.timestamp||null,thread_id:q?.thread_id??null}]});I_();return}if(G==="agent_followup_consumed"){let x=q?.row_id;if(x!=null)O_((h)=>h.filter((e)=>e.row_id!==x));I_(),p();return}if(G==="agent_followup_removed"){let x=q?.row_id;if(x!=null)e_.current.add(x),O_((h)=>h.filter((e)=>e.row_id!==x));I_();return}if(G==="agent_draft_delta"){if(y&&j_.current&&y!==j_.current)return;if(y&&!j_.current)P0(y);if(z0({running:!0,clearSilence:!0}),q?.reset)r.current="";if(q?.delta)r.current+=q.delta;let x=Date.now();if(!U0.current||x-U0.current>=100){U0.current=x;let h=r.current,e=A1(h);if(A_.current)w((F_)=>({text:F_?.text||"",totalLines:e,fullText:h}));else w({text:h,totalLines:e})}return}if(G==="agent_draft"){if(y&&j_.current&&y!==j_.current)return;if(y&&!j_.current)P0(y);z0({running:!0,clearSilence:!0});let x=q.text||"",h=q.mode||(q.kind==="plan"?"replace":"append"),e=Number.isFinite(q.total_lines)?q.total_lines:x?x.replace(/\r\n/g,`
`).split(`
`).length:0;if(q.kind==="plan")if(h==="replace")P(x);else P((F_)=>(F_||"")+x);else if(!A_.current)r.current=x,w({text:x,totalLines:e});return}if(G==="agent_thought_delta"){if(y&&j_.current&&y!==j_.current)return;if(y&&!j_.current)P0(y);if(z0({running:!0,clearSilence:!0}),q?.reset)__.current="";if(typeof q?.delta==="string")__.current+=q.delta;let x=Date.now();if(y_.current&&(!q2.current||x-q2.current>=100)){q2.current=x;let h=__.current;u((e)=>({text:e?.text||"",totalLines:A1(h),fullText:h}))}return}if(G==="agent_thought"){if(y&&j_.current&&y!==j_.current)return;if(y&&!j_.current)P0(y);z0({running:!0,clearSilence:!0});let x=q.text||"",h=Number.isFinite(q.total_lines)?q.total_lines:x?x.replace(/\r\n/g,`
`).split(`
`).length:0;if(!y_.current)__.current=x,u({text:x,totalLines:h});return}if(G==="agent_request"){if(console.log("Agent request:",q),y&&j_.current&&y!==j_.current)return;if(y)P0(y);z0({running:!0,clearSilence:!0}),o(q),$_.current=q;return}if(G==="agent_request_timeout"){if(console.log("Agent request timeout:",q),y&&j_.current&&y!==j_.current)return;o(null),$_.current=null,V0(),E({type:"error",title:"Permission request timed out"});return}if(G==="model_changed"){if(q?.model!==void 0)b_(q.model);if(q?.thinking_level!==void 0)N_(q.thinking_level??null);if(q?.supports_thinking!==void 0)Q_(Boolean(q.supports_thinking));b1().then((x)=>{if(x)R_(x)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:q}));return}let{currentHashtag:b,searchQuery:T}=q0.current;if(G==="agent_response")j0(),D_.current={post:q,turnId:j_.current};if(!b&&!T&&(G==="new_post"||G==="agent_response"))X((x)=>{if(!x)return[q];if(x.some((h)=>h.id===q.id))return x;return[...x,q]}),G2.current?.();if(G==="interaction_updated")X((x)=>{if(!x)return x;if(!x.some((h)=>h.id===q.id))return x;return x.map((h)=>h.id===q.id?q:h)});if(G==="interaction_deleted"){let x=q?.ids||[];if(x.length){Q2(()=>{X((F_)=>F_?F_.filter((N2)=>!x.includes(N2.id)):F_)});let{currentHashtag:h,searchQuery:e}=q0.current;if(m.current&&!h&&!e)g.current?.({preserveScroll:!0,preserveMode:"top"})}}},[V0,Y2,g,z0,i2,Q2,p,j0,P0,h2,S1,f1,f2,I_,O_]);v(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=M3,G.reset=()=>{j0(),V0(),E(null),w({text:"",totalLines:0}),P(""),u({text:"",totalLines:0}),o(null)},G.finalize=()=>M1(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[V0,M1,M3,j0]),p4({handleSseEvent:M3,handleConnectionStatusChange:G8,loadPosts:n}),v(()=>{if(!K_||K_.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let q=G.slice(5);X2(q),history.replaceState(null,"",location.pathname+location.search)},[K_,X2]);let P3=A!==null;v(()=>{if(_!=="connected")return;let q=setInterval(()=>{let{currentHashtag:y,searchQuery:b}=q0.current||{},T=!y&&!b;if(P3){if(T)p();I_(),a0(),s0()}else{if(T)p();a0(),s0()}},P3?15000:60000);return()=>clearInterval(q)},[_,P3,a0,s0,I_,p]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let G=()=>{if(document.visibilityState&&document.visibilityState!=="visible")return;a0(),s0(),I_()};return window.addEventListener("focus",G),window.addEventListener("pageshow",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),window.removeEventListener("pageshow",G),document.removeEventListener("visibilitychange",G)}},[a0,s0,I_]);let C8=S(()=>{O0((G)=>!G)},[]);v(()=>{if(!i_)return;if(typeof window>"u")return;let G=W0.current;if(!G)return;if(!I.current){let q=A2("editorWidth",null),y=U.current||280;I.current=Number.isFinite(q)?q:y}if(G.style.setProperty("--editor-width",`${I.current}px`),!t.current){let q=A2("dockHeight",null);t.current=Number.isFinite(q)?q:200}G.style.setProperty("--dock-height",`${t.current}px`)},[i_]),v(()=>{if(!f_)return;let G=(q)=>{if(q.ctrlKey&&q.key==="`")q.preventDefault(),p_()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[p_,f_]);let D8=Boolean(a&&a===(A?.turn_id||Z_));return V`
        <div class=${`app-shell${h_?"":" workspace-collapsed"}${i_?" editor-open":""}`} ref=${W0}>
            <${R4}
                onFileSelect=${$2}
                visible=${h_}
                active=${h_||i_}
                onOpenEditor=${M_}
            />
            <button
                class=${`workspace-toggle-tab${h_?" open":" closed"}`}
                onClick=${C8}
                title=${h_?"Hide workspace":"Show workspace"}
                aria-label=${h_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${j2} onTouchStart=${d0}></div>
            ${r_&&V`
                <div class="editor-pane-container">
                    ${i_&&V`
                        <${g4}
                            tabs=${f}
                            activeId=${i}
                            onActivate=${E0}
                            onClose=${_2}
                            onCloseOthers=${g0}
                            onCloseAll=${$0}
                            onTogglePin=${A0}
                            onTogglePreview=${L0}
                            previewTabs=${X_}
                            onToggleDock=${f_?p_:void 0}
                            dockVisible=${f_&&B0}
                        />
                    `}
                    ${i_&&V`<div class="editor-pane-host" ref=${K0}></div>`}
                    ${i_&&i&&X_.has(i)&&V`
                        <${i4}
                            getContent=${()=>T0.current?.getContent?.()}
                            path=${i}
                            onClose=${()=>L0(i)}
                        />
                    `}
                    ${f_&&B0&&V`<div class="dock-splitter" onMouseDown=${O8} onTouchStart=${Y8}></div>`}
                    ${f_&&V`<div class=${`dock-panel${B0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${p_} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${y2}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${K8} onTouchStart=${z8}></div>
            `}
            <div class="container">
                ${Z&&e4()&&V`<div class="search-results-spacer"></div>`}
                ${(j||Z)&&V`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${B8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${j?`#${j}`:`Search: ${Z}`}</span>
                    </div>
                `}
                <${H4}
                    posts=${K_}
                    hasMore=${D}
                    onLoadMore=${s}
                    timelineRef=${m0}
                    onHashtagClick=${L8}
                    onMessageRef=${P2}
                    onScrollToMessage=${X2}
                    onFileRef=${M0}
                    onPostClick=${void 0}
                    onDeletePost=${X8}
                    emptyMessage=${j?`No posts with #${j}`:Z?`No results for "${Z}"`:void 0}
                    agents=${m_}
                    user=${Q0}
                    reverse=${!(Z&&!j)}
                    removingPostIds=${D0}
                    searchQuery=${Z}
                />
                <${J4}
                    status=${A}
                    draft=${R}
                    plan=${Q}
                    thought=${M}
                    pendingRequest=${l}
                    intent=${F}
                    turnId=${Z_}
                    steerQueued=${D8}
                    onPanelToggle=${H3}
                />
                <${e$}
                    session=${w_}
                    onClose=${b3}
                    onRetry=${F8}
                    onInject=${y8}
                />
                <${f$}
                    onPost=${()=>{n(),S2()}}
                    onFocus=${S2}
                    searchMode=${K}
                    onSearch=${q8}
                    onEnterSearch=${W8}
                    onExitSearch=${V8}
                    fileRefs=${Y}
                    onRemoveFileRef=${F0}
                    onClearFileRefs=${O2}
                    messageRefs=${W}
                    onRemoveMessageRef=${r0}
                    onClearMessageRefs=${y0}
                    activeEditorPath=${i}
                    onAttachEditorFile=${V2}
                    onOpenFilePill=${M0}
                    followupQueueCount=${t_}
                    followupQueueItems=${C_}
                    onInjectQueuedFollowup=${Q8}
                    onRemoveQueuedFollowup=${U8}
                    onSubmitIntercept=${H8}
                    onMessageResponse=${A3}
                    isAgentActive=${k3}
                    activeModel=${C0}
                    modelUsage=${U_}
                    thinkingLevel=${g_}
                    supportsThinking=${W_}
                    contextUsage=${v_}
                    notificationsEnabled=${X0}
                    notificationPermission=${_0}
                    onToggleNotifications=${x0}
                    onModelChange=${b_}
                    onModelStateChange=${E3}
                />
                <${z4} status=${_} />
                <${K4}
                    request=${l}
                    onRespond=${()=>{o(null),$_.current=null}}
                />
            </div>
        </div>
    `}Z$(V`<${b5} />`,document.getElementById("app"));

//# debugId=8CD7BED2EEA3C32464756E2164756E21
//# sourceMappingURL=app.bundle.js.map
