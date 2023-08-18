"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[485],{64217:function(it,Ze,E){E.d(Ze,{Z:function(){return Ee}});var Me=E(1413),_=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,ce=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Z="".concat(_," ").concat(ce).split(/[\s\n]+/),w="aria-",Ce="data-";function t(ne,W){return ne.indexOf(W)===0}function Ee(ne){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,V;W===!1?V={aria:!0,data:!0,attr:!0}:W===!0?V={aria:!0}:V=(0,Me.Z)({},W);var se={};return Object.keys(ne).forEach(function(A){(V.aria&&(A==="role"||t(A,w))||V.data&&t(A,Ce)||V.attr&&Z.includes(A))&&(se[A]=ne[A])}),se}},85344:function(it,Ze,E){E.d(Ze,{Z:function(){return zt}});var Me=E(87462),_=E(1413),ce=E(71002),Z=E(97685),w=E(4942),Ce=E(91),t=E(62435),Ee=E(61254),ne=E(94184),W=E.n(ne),V=E(48555),se=t.forwardRef(function(e,i){var n=e.height,a=e.offsetY,g=e.offsetX,r=e.children,o=e.prefixCls,s=e.onInnerResize,m=e.innerProps,S=e.rtl,v=e.extra,c={},d={display:"flex",flexDirection:"column"};if(a!==void 0){var h;c={height:n,position:"relative",overflow:"hidden"},d=(0,_.Z)((0,_.Z)({},d),{},(h={transform:"translateY(".concat(a,"px)")},(0,w.Z)(h,S?"marginRight":"marginLeft",-g),(0,w.Z)(h,"position","absolute"),(0,w.Z)(h,"left",0),(0,w.Z)(h,"right",0),(0,w.Z)(h,"top",0),h))}return t.createElement("div",{style:c},t.createElement(V.Z,{onResize:function(f){var R=f.offsetHeight;R&&s&&s()}},t.createElement("div",(0,Me.Z)({style:d,className:W()((0,w.Z)({},"".concat(o,"-holder-inner"),o)),ref:i},m),r,v)))});se.displayName="Filler";var A=se,N=E(75164);function We(e,i){var n="touches"in e?e.touches[0]:e;return n[i?"pageX":"pageY"]}var ut=t.forwardRef(function(e,i){var n,a=e.prefixCls,g=e.rtl,r=e.scrollOffset,o=e.scrollRange,s=e.onStartMove,m=e.onStopMove,S=e.onScroll,v=e.horizontal,c=e.spinSize,d=e.containerSize,h=t.useState(!1),M=(0,Z.Z)(h,2),f=M[0],R=M[1],L=t.useState(null),x=(0,Z.Z)(L,2),I=x[0],X=x[1],fe=t.useState(null),k=(0,Z.Z)(fe,2),K=k[0],D=k[1],F=!g,T=t.useRef(),re=t.useRef(),y=t.useState(!1),z=(0,Z.Z)(y,2),U=z[0],ae=z[1],ve=t.useRef(),O=function(){clearTimeout(ve.current),ae(!0),ve.current=setTimeout(function(){ae(!1)},3e3)},G=o-d||0,oe=d-c||0,ye=G>0,Y=t.useMemo(function(){if(r===0||G===0)return 0;var P=r/G;return P*oe},[r,G,oe]),de=function(b){b.stopPropagation(),b.preventDefault()},he=t.useRef({top:Y,dragging:f,pageY:I,startTop:K});he.current={top:Y,dragging:f,pageY:I,startTop:K};var le=function(b){R(!0),X(We(b,v)),D(he.current.top),s(),b.stopPropagation(),b.preventDefault()};t.useEffect(function(){var P=function(ie){ie.preventDefault()},b=T.current,B=re.current;return b.addEventListener("touchstart",P),B.addEventListener("touchstart",le),function(){b.removeEventListener("touchstart",P),B.removeEventListener("touchstart",le)}},[]),t.useEffect(function(){if(f){var P,b=function(ie){var ge=he.current,Te=ge.dragging,De=ge.pageY,we=ge.startTop;if(N.Z.cancel(P),Te){var be=We(ie,v)-De,J=we;!F&&v?J-=be:J+=be;var ze=oe?J/oe:0,Q=Math.ceil(ze*G);Q=Math.max(Q,0),Q=Math.min(Q,G),P=(0,N.Z)(function(){S(Q,v)})}},B=function(){R(!1),m()};return window.addEventListener("mousemove",b),window.addEventListener("touchmove",b),window.addEventListener("mouseup",B),window.addEventListener("touchend",B),function(){window.removeEventListener("mousemove",b),window.removeEventListener("touchmove",b),window.removeEventListener("mouseup",B),window.removeEventListener("touchend",B),N.Z.cancel(P)}}},[f]),t.useEffect(function(){O()},[r]),t.useImperativeHandle(i,function(){return{delayHidden:O}});var j="".concat(a,"-scrollbar"),H={position:"absolute",visibility:U&&ye?null:"hidden"},$={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return v?(H.height=8,H.left=0,H.right=0,H.bottom=0,$.height="100%",$.width=c,F?$.left=Y:$.right=Y):(H.width=8,H.top=0,H.bottom=0,F?H.right=0:H.left=0,$.width="100%",$.height=c,$.top=Y),t.createElement("div",{ref:T,className:W()(j,(n={},(0,w.Z)(n,"".concat(j,"-horizontal"),v),(0,w.Z)(n,"".concat(j,"-vertical"),!v),(0,w.Z)(n,"".concat(j,"-visible"),U),n)),style:H,onMouseDown:de,onMouseMove:O},t.createElement("div",{ref:re,className:W()("".concat(j,"-thumb"),(0,w.Z)({},"".concat(j,"-thumb-moving"),f)),style:$,onMouseDown:le}))}),Xe=ut;function ct(e){var i=e.children,n=e.setRef,a=t.useCallback(function(g){n(g)},[]);return t.cloneElement(i,{ref:a})}function st(e,i,n,a,g,r,o){var s=o.getKey;return e.slice(i,n+1).map(function(m,S){var v=i+S,c=r(m,v,{style:{width:a}}),d=s(m);return t.createElement(ct,{key:d,setRef:function(M){return g(m,M)}},c)})}var ft=E(34203),vt=E(15671),dt=E(43144),ht=function(){function e(){(0,vt.Z)(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return(0,dt.Z)(e,[{key:"set",value:function(n,a){this.maps[n]=a,this.id+=1}},{key:"get",value:function(n){return this.maps[n]}}]),e}(),gt=ht;function mt(e,i,n){var a=t.useState(0),g=(0,Z.Z)(a,2),r=g[0],o=g[1],s=(0,t.useRef)(new Map),m=(0,t.useRef)(new gt),S=(0,t.useRef)();function v(){N.Z.cancel(S.current)}function c(){v(),S.current=(0,N.Z)(function(){s.current.forEach(function(h,M){if(h&&h.offsetParent){var f=(0,ft.Z)(h),R=f.offsetHeight;m.current.get(M)!==R&&m.current.set(M,f.offsetHeight)}}),o(function(h){return h+1})})}function d(h,M){var f=e(h),R=s.current.get(f);M?(s.current.set(f,M),c()):s.current.delete(f),!R!=!M&&(M?i==null||i(h):n==null||n(h))}return(0,t.useEffect)(function(){return v},[]),[d,c,m.current,r]}function St(e,i,n,a,g,r,o,s){var m=t.useRef();return function(S){if(S==null){s();return}if(N.Z.cancel(m.current),typeof S=="number")o(S);else if(S&&(0,ce.Z)(S)==="object"){var v,c=S.align;"index"in S?v=S.index:v=i.findIndex(function(f){return g(f)===S.key});var d=S.offset,h=d===void 0?0:d,M=function f(R,L){if(!(R<0||!e.current)){var x=e.current.clientHeight,I=!1,X=L;if(x){for(var fe=L||c,k=0,K=0,D=0,F=Math.min(i.length,v),T=0;T<=F;T+=1){var re=g(i[T]);K=k;var y=n.get(re);D=K+(y===void 0?a:y),k=D,T===v&&y===void 0&&(I=!0)}var z=null;switch(fe){case"top":z=K-h;break;case"bottom":z=D-x+h;break;default:{var U=e.current.scrollTop,ae=U+x;K<U?X="top":D>ae&&(X="bottom")}}z!==null&&z!==e.current.scrollTop&&o(z)}m.current=(0,N.Z)(function(){I&&r(),f(R-1,X)},2)}};M(3)}}}function jt(e,i,n,a){var g=n-e,r=i-n,o=Math.min(g,r)*2;if(a<=o){var s=Math.floor(a/2);return a%2?n+s+1:n-s}return g>r?n-(a-r):n+(a-g)}function Rt(e,i,n){var a=e.length,g=i.length,r,o;if(a===0&&g===0)return null;a<g?(r=e,o=i):(r=i,o=e);var s={__EMPTY_ITEM__:!0};function m(M){return M!==void 0?n(M):s}for(var S=null,v=Math.abs(a-g)!==1,c=0;c<o.length;c+=1){var d=m(r[c]),h=m(o[c]);if(d!==h){S=c,v=v||d!==m(o[c+1]);break}}return S===null?null:{index:S,multiple:v}}function pt(e,i,n){var a=t.useState(e),g=(0,Z.Z)(a,2),r=g[0],o=g[1],s=t.useState(null),m=(0,Z.Z)(s,2),S=m[0],v=m[1];return t.useEffect(function(){var c=Rt(r||[],e||[],i);(c==null?void 0:c.index)!==void 0&&(n==null||n(c.index),v(e[c.index])),o(e)},[e]),[S]}var Mt=(typeof navigator=="undefined"?"undefined":(0,ce.Z)(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),Ve=Mt,ke=function(e,i){var n=(0,t.useRef)(!1),a=(0,t.useRef)(null);function g(){clearTimeout(a.current),n.current=!0,a.current=setTimeout(function(){n.current=!1},50)}var r=(0,t.useRef)({top:e,bottom:i});return r.current.top=e,r.current.bottom=i,function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=o<0&&r.current.top||o>0&&r.current.bottom;return s&&m?(clearTimeout(a.current),n.current=!1):(!m||n.current)&&g(),!n.current&&m}};function Et(e,i,n,a,g){var r=(0,t.useRef)(0),o=(0,t.useRef)(null),s=(0,t.useRef)(null),m=(0,t.useRef)(!1),S=ke(i,n);function v(R){N.Z.cancel(o.current);var L=R.deltaY;r.current+=L,s.current=L,!S(L)&&(Ve||R.preventDefault(),o.current=(0,N.Z)(function(){var x=m.current?10:1;g(r.current*x),r.current=0}))}function c(R){var L=R.deltaX;g(L,!0),Ve||R.preventDefault()}var d=(0,t.useRef)(null),h=(0,t.useRef)(null);function M(R){if(e){N.Z.cancel(h.current),h.current=(0,N.Z)(function(){d.current=null},2);var L=R.deltaX,x=R.deltaY,I=Math.abs(L),X=Math.abs(x);d.current===null&&(d.current=a&&I>X?"x":"y"),d.current==="x"?c(R):v(R)}}function f(R){e&&(m.current=R.detail===s.current)}return[M,f]}var Le=E(8410),yt=14/15;function bt(e,i,n){var a=(0,t.useRef)(!1),g=(0,t.useRef)(0),r=(0,t.useRef)(null),o=(0,t.useRef)(null),s,m=function(d){if(a.current){var h=Math.ceil(d.touches[0].pageY),M=g.current-h;g.current=h,n(M)&&d.preventDefault(),clearInterval(o.current),o.current=setInterval(function(){M*=yt,(!n(M,!0)||Math.abs(M)<=.1)&&clearInterval(o.current)},16)}},S=function(){a.current=!1,s()},v=function(d){s(),d.touches.length===1&&!a.current&&(a.current=!0,g.current=Math.ceil(d.touches[0].pageY),r.current=d.target,r.current.addEventListener("touchmove",m),r.current.addEventListener("touchend",S))};s=function(){r.current&&(r.current.removeEventListener("touchmove",m),r.current.removeEventListener("touchend",S))},(0,Le.Z)(function(){return e&&i.current.addEventListener("touchstart",v),function(){var c;(c=i.current)===null||c===void 0||c.removeEventListener("touchstart",v),s(),clearInterval(o.current)}},[e])}var xt=20;function Ke(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e/i*100;return isNaN(n)&&(n=0),n=Math.max(n,xt),n=Math.min(n,e/2),Math.floor(n)}var Be=E(56790);function Zt(e,i,n,a){var g=t.useMemo(function(){return[new Map,[]]},[e,n.id,a]),r=(0,Z.Z)(g,2),o=r[0],s=r[1],m=function(v){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v,d=o.get(v),h=o.get(c);if(d===void 0||h===void 0)for(var M=e.length,f=s.length;f<M;f+=1){var R,L=e[f],x=i(L);o.set(x,f);var I=(R=n.get(x))!==null&&R!==void 0?R:a;if(s[f]=(s[f-1]||0)+I,x===v&&(d=f),x===c&&(h=f),d!==void 0&&h!==void 0)break}return{top:s[d-1]||0,bottom:s[h]}};return m}var Ct=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender"],Lt=[],Tt={overflowY:"auto",overflowAnchor:"none"};function Dt(e,i){var n=e.prefixCls,a=n===void 0?"rc-virtual-list":n,g=e.className,r=e.height,o=e.itemHeight,s=e.fullHeight,m=s===void 0?!0:s,S=e.style,v=e.data,c=e.children,d=e.itemKey,h=e.virtual,M=e.direction,f=e.scrollWidth,R=e.component,L=R===void 0?"div":R,x=e.onScroll,I=e.onVirtualScroll,X=e.onVisibleChange,fe=e.innerProps,k=e.extraRender,K=(0,Ce.Z)(e,Ct),D=!!(h!==!1&&r&&o),F=D&&v&&o*v.length>r,T=M==="rtl",re=W()(a,(0,w.Z)({},"".concat(a,"-rtl"),T),g),y=v||Lt,z=(0,t.useRef)(),U=(0,t.useRef)(),ae=(0,t.useState)(0),ve=(0,Z.Z)(ae,2),O=ve[0],G=ve[1],oe=(0,t.useState)(0),ye=(0,Z.Z)(oe,2),Y=ye[0],de=ye[1],he=(0,t.useState)(!1),le=(0,Z.Z)(he,2),j=le[0],H=le[1],$=function(){H(!0)},P=function(){H(!1)},b=t.useCallback(function(l){return typeof d=="function"?d(l):l==null?void 0:l[d]},[d]),B={getKey:b};function ee(l){G(function(u){var p;typeof l=="function"?p=l(u):p=l;var C=Yt(p);return z.current.scrollTop=C,C})}var ie=(0,t.useRef)({start:0,end:y.length}),ge=(0,t.useRef)(),Te=pt(y,b),De=(0,Z.Z)(Te,1),we=De[0];ge.current=we;var be=mt(b,null,null),J=(0,Z.Z)(be,4),ze=J[0],Q=J[1],Pe=J[2],Pt=J[3],xe=t.useMemo(function(){if(!D)return{scrollHeight:void 0,start:0,end:y.length-1,offset:void 0};if(!F){var l;return{scrollHeight:((l=U.current)===null||l===void 0?void 0:l.offsetHeight)||0,start:0,end:y.length-1,offset:void 0}}for(var u=0,p,C,q,At=y.length,pe=0;pe<At;pe+=1){var Ut=y[pe],Gt=b(Ut),lt=Pe.get(Gt),$e=u+(lt===void 0?o:lt);$e>=O&&p===void 0&&(p=pe,C=u),$e>O+r&&q===void 0&&(q=pe),u=$e}return p===void 0&&(p=0,C=0,q=Math.ceil(r/o)),q===void 0&&(q=y.length-1),q=Math.min(q+1,y.length),{scrollHeight:u,start:p,end:q,offset:C}},[F,D,O,y,Pt,r]),ue=xe.scrollHeight,me=xe.start,Se=xe.end,Ue=xe.offset;ie.current.start=me,ie.current.end=Se;var Ht=t.useState({width:0,height:r}),Ge=(0,Z.Z)(Ht,2),te=Ge[0],It=Ge[1],Ot=function(u){It(u)},je=(0,t.useRef)(),Je=(0,t.useRef)(),Nt=t.useMemo(function(){return Ke(te.width,f)},[te.width,f]),Ft=t.useMemo(function(){return Ke(te.height,ue)},[te.height,ue]),He=ue-r,Ie=(0,t.useRef)(He);Ie.current=He;function Yt(l){var u=l;return Number.isNaN(Ie.current)||(u=Math.min(u,Ie.current)),u=Math.max(u,0),u}var Qe=O<=0,qe=O>=He,$t=ke(Qe,qe),Oe=function(){return{x:T?-Y:Y,y:O}},Ne=(0,t.useRef)(Oe()),Fe=(0,Be.zX)(function(){if(I){var l=Oe();(Ne.current.x!==l.x||Ne.current.y!==l.y)&&(I(l),Ne.current=l)}});function _e(l,u){var p=l;u?((0,Ee.flushSync)(function(){de(p)}),Fe()):ee(p)}function Wt(l){var u=l.currentTarget.scrollTop;u!==O&&ee(u),x==null||x(l),Fe()}var et=function(u){var p=u,C=f-te.width;return p=Math.max(p,0),p=Math.min(p,C),p},Xt=(0,Be.zX)(function(l,u){u?((0,Ee.flushSync)(function(){de(function(p){var C=p+(T?-l:l);return et(C)})}),Fe()):ee(function(p){var C=p+l;return C})}),Vt=Et(D,Qe,qe,!!f,Xt),tt=(0,Z.Z)(Vt,2),Ye=tt[0],nt=tt[1];bt(D,z,function(l,u){return $t(l,u)?!1:(Ye({preventDefault:function(){},deltaY:l}),!0)}),(0,Le.Z)(function(){function l(p){D&&p.preventDefault()}var u=z.current;return u.addEventListener("wheel",Ye),u.addEventListener("DOMMouseScroll",nt),u.addEventListener("MozMousePixelScroll",l),function(){u.removeEventListener("wheel",Ye),u.removeEventListener("DOMMouseScroll",nt),u.removeEventListener("MozMousePixelScroll",l)}},[D]);var rt=function(){var u,p;(u=je.current)===null||u===void 0||u.delayHidden(),(p=Je.current)===null||p===void 0||p.delayHidden()},at=St(z,y,Pe,o,b,Q,ee,rt);t.useImperativeHandle(i,function(){return{getScrollInfo:Oe,scrollTo:function(u){function p(C){return C&&(0,ce.Z)(C)==="object"&&("left"in C||"top"in C)}p(u)?(u.left!==void 0&&de(et(u.left)),at(u.top)):at(u)}}}),(0,Le.Z)(function(){if(X){var l=y.slice(me,Se+1);X(l,y)}},[me,Se,y]);var kt=Zt(y,b,Pe,o),Kt=k==null?void 0:k({start:me,end:Se,virtual:F,offsetX:Y,offsetY:Ue,rtl:T,getSize:kt}),Bt=st(y,me,Se,f,ze,c,B),Re=null;r&&(Re=(0,_.Z)((0,w.Z)({},m?"height":"maxHeight",r),Tt),D&&(Re.overflowY="hidden",f&&(Re.overflowX="hidden"),j&&(Re.pointerEvents="none")));var ot={};return T&&(ot.dir="rtl"),t.createElement("div",(0,Me.Z)({style:(0,_.Z)((0,_.Z)({},S),{},{position:"relative"}),className:re},ot,K),t.createElement(V.Z,{onResize:Ot},t.createElement(L,{className:"".concat(a,"-holder"),style:Re,ref:z,onScroll:Wt,onMouseEnter:rt},t.createElement(A,{prefixCls:a,height:ue,offsetX:Y,offsetY:Ue,scrollWidth:f,onInnerResize:Q,ref:U,innerProps:fe,rtl:T,extra:Kt},Bt))),F&&ue>r&&t.createElement(Xe,{ref:je,prefixCls:a,scrollOffset:O,scrollRange:ue,rtl:T,onScroll:_e,onStartMove:$,onStopMove:P,spinSize:Ft,containerSize:te.height}),F&&f&&t.createElement(Xe,{ref:Je,prefixCls:a,scrollOffset:Y,scrollRange:f,rtl:T,onScroll:_e,onStartMove:$,onStopMove:P,spinSize:Nt,containerSize:te.width,horizontal:!0}))}var Ae=t.forwardRef(Dt);Ae.displayName="List";var wt=Ae,zt=wt}}]);
