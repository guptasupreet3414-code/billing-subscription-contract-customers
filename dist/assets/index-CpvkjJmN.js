function O0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function F0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tp={exports:{}},Yi={},np={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),_0=Symbol.for("react.portal"),B0=Symbol.for("react.fragment"),U0=Symbol.for("react.strict_mode"),W0=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),G0=Symbol.for("react.suspense"),K0=Symbol.for("react.memo"),Y0=Symbol.for("react.lazy"),Tc=Symbol.iterator;function J0(e){return e===null||typeof e!="object"?null:(e=Tc&&e[Tc]||e["@@iterator"],typeof e=="function"?e:null)}var rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ip={};function ur(e,t,n){this.props=e,this.context=t,this.refs=ip,this.updater=n||rp}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lp(){}lp.prototype=ur.prototype;function ja(e,t,n){this.props=e,this.context=t,this.refs=ip,this.updater=n||rp}var ka=ja.prototype=new lp;ka.constructor=ja;op(ka,ur.prototype);ka.isPureReactComponent=!0;var Lc=Array.isArray,sp=Object.prototype.hasOwnProperty,Ca={current:null},ap={key:!0,ref:!0,__self:!0,__source:!0};function cp(e,t,n){var r,o={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)sp.call(t,r)&&!ap.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:vo,type:e,key:l,ref:s,props:o,_owner:Ca.current}}function X0(e,t){return{$$typeof:vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $a(e){return typeof e=="object"&&e!==null&&e.$$typeof===vo}function q0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ic=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?q0(""+e.key):t.toString(36)}function Zo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case vo:case _0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+$l(s,0):r,Lc(o)?(n="",e!=null&&(n=e.replace(Ic,"$&/")+"/"),Zo(o,t,n,"",function(d){return d})):o!=null&&($a(o)&&(o=X0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ic,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Lc(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+$l(l,a);s+=Zo(l,t,n,c,o)}else if(c=J0(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+$l(l,a++),s+=Zo(l,t,n,c,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function So(e,t,n){if(e==null)return e;var r=[],o=0;return Zo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Z0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},ei={transition:null},eg={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:ei,ReactCurrentOwner:Ca};function up(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:So,forEach:function(e,t,n){So(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return So(e,function(){t++}),t},toArray:function(e){return So(e,function(t){return t})||[]},only:function(e){if(!$a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=ur;N.Fragment=B0;N.Profiler=W0;N.PureComponent=ja;N.StrictMode=U0;N.Suspense=G0;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg;N.act=up;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=op({},e.props),o=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)sp.call(t,c)&&!ap.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:vo,type:e.type,key:o,ref:l,props:r,_owner:s}};N.createContext=function(e){return e={$$typeof:H0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:V0,_context:e},e.Consumer=e};N.createElement=cp;N.createFactory=function(e){var t=cp.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:Q0,render:e}};N.isValidElement=$a;N.lazy=function(e){return{$$typeof:Y0,_payload:{_status:-1,_result:e},_init:Z0}};N.memo=function(e,t){return{$$typeof:K0,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=ei.transition;ei.transition={};try{e()}finally{ei.transition=t}};N.unstable_act=up;N.useCallback=function(e,t){return Ce.current.useCallback(e,t)};N.useContext=function(e){return Ce.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};N.useEffect=function(e,t){return Ce.current.useEffect(e,t)};N.useId=function(){return Ce.current.useId()};N.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Ce.current.useMemo(e,t)};N.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};N.useRef=function(e){return Ce.current.useRef(e)};N.useState=function(e){return Ce.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return Ce.current.useTransition()};N.version="18.3.1";np.exports=N;var v=np.exports;const ve=F0(v),tg=O0({__proto__:null,default:ve},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng=v,rg=Symbol.for("react.element"),og=Symbol.for("react.fragment"),ig=Object.prototype.hasOwnProperty,lg=ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sg={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,o={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)ig.call(t,r)&&!sg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:rg,type:e,key:l,ref:s,props:o,_owner:lg.current}}Yi.Fragment=og;Yi.jsx=dp;Yi.jsxs=dp;tp.exports=Yi;var i=tp.exports,pp={exports:{}},Ae={},fp={exports:{}},hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var D=T.length;T.push(R);e:for(;0<D;){var H=D-1>>>1,_=T[H];if(0<o(_,R))T[H]=R,T[D]=_,D=H;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],D=T.pop();if(D!==R){T[0]=D;e:for(var H=0,_=T.length,ae=_>>>1;H<ae;){var ne=2*(H+1)-1,ie=T[ne],ze=ne+1,Fe=T[ze];if(0>o(ie,D))ze<_&&0>o(Fe,ie)?(T[H]=Fe,T[ze]=D,H=ze):(T[H]=ie,T[ne]=D,H=ne);else if(ze<_&&0>o(Fe,D))T[H]=Fe,T[ze]=D,H=ze;else break e}}return R}function o(T,R){var D=T.sortIndex-R.sortIndex;return D!==0?D:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],d=[],x=1,g=null,m=3,k=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var R=n(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=T)r(d),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(d)}}function j(T){if(y=!1,f(T),!w)if(n(c)!==null)w=!0,Ct(b);else{var R=n(d);R!==null&&nn(j,R.startTime-T)}}function b(T,R){w=!1,y&&(y=!1,h(C),C=-1),k=!0;var D=m;try{for(f(R),g=n(c);g!==null&&(!(g.expirationTime>R)||T&&!A());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var _=H(g.expirationTime<=R);R=e.unstable_now(),typeof _=="function"?g.callback=_:g===n(c)&&r(c),f(R)}else r(c);g=n(c)}if(g!==null)var ae=!0;else{var ne=n(d);ne!==null&&nn(j,ne.startTime-R),ae=!1}return ae}finally{g=null,m=D,k=!1}}var E=!1,$=null,C=-1,z=5,L=-1;function A(){return!(e.unstable_now()-L<z)}function te(){if($!==null){var T=e.unstable_now();L=T;var R=!0;try{R=$(!0,T)}finally{R?F():(E=!1,$=null)}}else E=!1}var F;if(typeof p=="function")F=function(){p(te)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,tn=Se.port2;Se.port1.onmessage=te,F=function(){tn.postMessage(null)}}else F=function(){S(te,0)};function Ct(T){$=T,E||(E=!0,F())}function nn(T,R){C=S(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,Ct(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var D=m;m=R;try{return T()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=m;m=T;try{return R()}finally{m=D}},e.unstable_scheduleCallback=function(T,R,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,T){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=D+_,T={id:x++,callback:R,priorityLevel:T,startTime:D,expirationTime:_,sortIndex:-1},D>H?(T.sortIndex=D,t(d,T),n(c)===null&&T===n(d)&&(y?(h(C),C=-1):y=!0,nn(j,D-H))):(T.sortIndex=_,t(c,T),w||k||(w=!0,Ct(b))),T},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(T){var R=m;return function(){var D=m;m=R;try{return T.apply(this,arguments)}finally{m=D}}}})(hp);fp.exports=hp;var ag=fp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg=v,Ne=ag;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gp=new Set,Gr={};function Cn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Gr[e]=t,e=0;e<t.length;e++)gp.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fs=Object.prototype.hasOwnProperty,ug=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Rc={};function dg(e){return fs.call(Rc,e)?!0:fs.call(zc,e)?!1:ug.test(e)?Rc[e]=!0:(zc[e]=!0,!1)}function pg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fg(e,t,n,r){if(t===null||typeof t>"u"||pg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,o,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sa,Ea);me[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sa,Ea);me[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sa,Ea);me[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pa(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fg(t,n,o,r)&&(n=null),r||o===null?dg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),In=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Ta=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),La=Symbol.for("react.forward_ref"),gs=Symbol.for("react.suspense"),ms=Symbol.for("react.suspense_list"),Ia=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),yp=Symbol.for("react.offscreen"),Dc=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=Dc&&e[Dc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Sl;function Pr(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var El=!1;function Pl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,a=l.length-1;1<=s&&0<=a&&o[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==l[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function hg(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case In:return"Portal";case hs:return"Profiler";case Ta:return"StrictMode";case gs:return"Suspense";case ms:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xp:return(e.displayName||"Context")+".Consumer";case mp:return(e._context.displayName||"Context")+".Provider";case La:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ia:return t=e.displayName||null,t!==null?t:xs(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return xs(e(t))}catch{}}return null}function gg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xs(t);case 8:return t===Ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mg(e){var t=vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Po(e){e._valueTracker||(e._valueTracker=mg(e))}function wp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ys(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bp(e,t){t=t.checked,t!=null&&Pa(e,"checked",t,!1)}function vs(e,t){bp(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&ws(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ws(e,t,n){(t!=="number"||yi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Tr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function jp(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function js(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,Cp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xg=["Webkit","ms","Moz","O"];Object.keys(Nr).forEach(function(e){xg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nr[t]=Nr[e]})});function $p(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nr.hasOwnProperty(e)&&Nr[e]?(""+t).trim():t+"px"}function Sp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$p(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var yg=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ks(e,t){if(t){if(yg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $s=null;function za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,Vn=null,Hn=null;function Fc(e){if(e=jo(e)){if(typeof Ss!="function")throw Error(P(280));var t=e.stateNode;t&&(t=el(t),Ss(e.stateNode,e.type,t))}}function Ep(e){Vn?Hn?Hn.push(e):Hn=[e]:Vn=e}function Pp(){if(Vn){var e=Vn,t=Hn;if(Hn=Vn=null,Fc(e),t)for(e=0;e<t.length;e++)Fc(t[e])}}function Tp(e,t){return e(t)}function Lp(){}var Tl=!1;function Ip(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return Tp(e,t,n)}finally{Tl=!1,(Vn!==null||Hn!==null)&&(Lp(),Pp())}}function Yr(e,t){var n=e.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Es=!1;if(xt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){Es=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Es=!1}function vg(e,t,n,r,o,l,s,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var Ar=!1,vi=null,wi=!1,Ps=null,wg={onError:function(e){Ar=!0,vi=e}};function bg(e,t,n,r,o,l,s,a,c){Ar=!1,vi=null,vg.apply(wg,arguments)}function jg(e,t,n,r,o,l,s,a,c){if(bg.apply(this,arguments),Ar){if(Ar){var d=vi;Ar=!1,vi=null}else throw Error(P(198));wi||(wi=!0,Ps=d)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _c(e){if($n(e)!==e)throw Error(P(188))}function kg(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return _c(o),e;if(l===r)return _c(o),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=l;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=l;break}if(a===r){s=!0,r=o,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=o;break}if(a===r){s=!0,r=l,n=o;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Rp(e){return e=kg(e),e!==null?Dp(e):null}function Dp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dp(e);if(t!==null)return t;e=e.sibling}return null}var Mp=Ne.unstable_scheduleCallback,Bc=Ne.unstable_cancelCallback,Cg=Ne.unstable_shouldYield,$g=Ne.unstable_requestPaint,oe=Ne.unstable_now,Sg=Ne.unstable_getCurrentPriorityLevel,Ra=Ne.unstable_ImmediatePriority,Np=Ne.unstable_UserBlockingPriority,bi=Ne.unstable_NormalPriority,Eg=Ne.unstable_LowPriority,Ap=Ne.unstable_IdlePriority,Ji=null,lt=null;function Pg(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Ig,Tg=Math.log,Lg=Math.LN2;function Ig(e){return e>>>=0,e===0?32:31-(Tg(e)/Lg|0)|0}var Lo=64,Io=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Lr(a):(l&=s,l!==0&&(r=Lr(l)))}else s=n&~o,s!==0?r=Lr(s):l!==0&&(r=Lr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function zg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-qe(l),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=zg(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Op(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Dg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Da(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Fp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _p,Ma,Bp,Up,Wp,Ls=!1,zo=[],Ot=null,Ft=null,_t=null,Jr=new Map,Xr=new Map,zt=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function vr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=jo(t),t!==null&&Ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ng(e,t,n,r,o){switch(t){case"focusin":return Ot=vr(Ot,e,t,n,r,o),!0;case"dragenter":return Ft=vr(Ft,e,t,n,r,o),!0;case"mouseover":return _t=vr(_t,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Jr.set(l,vr(Jr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Xr.set(l,vr(Xr.get(l)||null,e,t,n,r,o)),!0}return!1}function Vp(e){var t=cn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=zp(n),t!==null){e.blockedOn=t,Wp(e.priority,function(){Bp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$s=r,n.target.dispatchEvent(r),$s=null}else return t=jo(n),t!==null&&Ma(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){ti(e)&&n.delete(t)}function Ag(){Ls=!1,Ot!==null&&ti(Ot)&&(Ot=null),Ft!==null&&ti(Ft)&&(Ft=null),_t!==null&&ti(_t)&&(_t=null),Jr.forEach(Wc),Xr.forEach(Wc)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ls||(Ls=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Ag)))}function qr(e){function t(o){return wr(o,e)}if(0<zo.length){wr(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&wr(Ot,e),Ft!==null&&wr(Ft,e),_t!==null&&wr(_t,e),Jr.forEach(t),Xr.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Vp(n),n.blockedOn===null&&zt.shift()}var Qn=bt.ReactCurrentBatchConfig,ki=!0;function Og(e,t,n,r){var o=V,l=Qn.transition;Qn.transition=null;try{V=1,Na(e,t,n,r)}finally{V=o,Qn.transition=l}}function Fg(e,t,n,r){var o=V,l=Qn.transition;Qn.transition=null;try{V=4,Na(e,t,n,r)}finally{V=o,Qn.transition=l}}function Na(e,t,n,r){if(ki){var o=Is(e,t,n,r);if(o===null)_l(e,t,r,Ci,n),Uc(e,r);else if(Ng(o,e,t,n,r))r.stopPropagation();else if(Uc(e,r),t&4&&-1<Mg.indexOf(e)){for(;o!==null;){var l=jo(o);if(l!==null&&_p(l),l=Is(e,t,n,r),l===null&&_l(e,t,r,Ci,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else _l(e,t,r,null,n)}}var Ci=null;function Is(e,t,n,r){if(Ci=null,e=za(r),e=cn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ci=e,null}function Hp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sg()){case Ra:return 1;case Np:return 4;case bi:case Eg:return 16;case Ap:return 536870912;default:return 16}default:return 16}}var Dt=null,Aa=null,ni=null;function Qp(){if(ni)return ni;var e,t=Aa,n=t.length,r,o="value"in Dt?Dt.value:Dt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[l-r];r++);return ni=o.slice(e,1<r?1-r:void 0)}function ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function Vc(){return!1}function Oe(e){function t(n,r,o,l,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ro:Vc,this.isPropagationStopped=Vc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=Oe(dr),bo=ee({},dr,{view:0,detail:0}),_g=Oe(bo),Il,zl,br,Xi=ee({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Il=e.screenX-br.screenX,zl=e.screenY-br.screenY):zl=Il=0,br=e),Il)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Hc=Oe(Xi),Bg=ee({},Xi,{dataTransfer:0}),Ug=Oe(Bg),Wg=ee({},bo,{relatedTarget:0}),Rl=Oe(Wg),Vg=ee({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hg=Oe(Vg),Qg=ee({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gg=Oe(Qg),Kg=ee({},dr,{data:0}),Qc=Oe(Kg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xg[e])?!!t[e]:!1}function Fa(){return qg}var Zg=ee({},bo,{key:function(e){if(e.key){var t=Yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fa,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),em=Oe(Zg),tm=ee({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=Oe(tm),nm=ee({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fa}),rm=Oe(nm),om=ee({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),im=Oe(om),lm=ee({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sm=Oe(lm),am=[9,13,27,32],_a=xt&&"CompositionEvent"in window,Or=null;xt&&"documentMode"in document&&(Or=document.documentMode);var cm=xt&&"TextEvent"in window&&!Or,Gp=xt&&(!_a||Or&&8<Or&&11>=Or),Kc=" ",Yc=!1;function Kp(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function um(e,t){switch(e){case"compositionend":return Yp(t);case"keypress":return t.which!==32?null:(Yc=!0,Kc);case"textInput":return e=t.data,e===Kc&&Yc?null:e;default:return null}}function dm(e,t){if(Rn)return e==="compositionend"||!_a&&Kp(e,t)?(e=Qp(),ni=Aa=Dt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gp&&t.locale!=="ko"?null:t.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pm[e.type]:t==="textarea"}function Jp(e,t,n,r){Ep(r),t=$i(t,"onChange"),0<t.length&&(n=new Oa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Zr=null;function fm(e){af(e,0)}function qi(e){var t=Nn(e);if(wp(t))return e}function hm(e,t){if(e==="change")return t}var Xp=!1;if(xt){var Dl;if(xt){var Ml="oninput"in document;if(!Ml){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),Ml=typeof Xc.oninput=="function"}Dl=Ml}else Dl=!1;Xp=Dl&&(!document.documentMode||9<document.documentMode)}function qc(){Fr&&(Fr.detachEvent("onpropertychange",qp),Zr=Fr=null)}function qp(e){if(e.propertyName==="value"&&qi(Zr)){var t=[];Jp(t,Zr,e,za(e)),Ip(fm,t)}}function gm(e,t,n){e==="focusin"?(qc(),Fr=t,Zr=n,Fr.attachEvent("onpropertychange",qp)):e==="focusout"&&qc()}function mm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Zr)}function xm(e,t){if(e==="click")return qi(t)}function ym(e,t){if(e==="input"||e==="change")return qi(t)}function vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:vm;function eo(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!fs.call(t,o)||!tt(e[o],t[o]))return!1}return!0}function Zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=Zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zc(n)}}function Zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ef(){for(var e=window,t=yi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yi(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wm(e){var t=ef(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zp(n.ownerDocument.documentElement,n)){if(r!==null&&Ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=eu(n,l);var s=eu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bm=xt&&"documentMode"in document&&11>=document.documentMode,Dn=null,zs=null,_r=null,Rs=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rs||Dn==null||Dn!==yi(r)||(r=Dn,"selectionStart"in r&&Ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&eo(_r,r)||(_r=r,r=$i(zs,"onSelect"),0<r.length&&(t=new Oa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function Do(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Nl={},tf={};xt&&(tf=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function Zi(e){if(Nl[e])return Nl[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tf)return Nl[e]=t[n];return e}var nf=Zi("animationend"),rf=Zi("animationiteration"),of=Zi("animationstart"),lf=Zi("transitionend"),sf=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){sf.set(e,t),Cn(t,[e])}for(var Al=0;Al<nu.length;Al++){var Ol=nu[Al],jm=Ol.toLowerCase(),km=Ol[0].toUpperCase()+Ol.slice(1);Xt(jm,"on"+km)}Xt(nf,"onAnimationEnd");Xt(rf,"onAnimationIteration");Xt(of,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(lf,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jg(r,t,void 0,e),e.currentTarget=null}function af(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==l&&o.isPropagationStopped())break e;ru(o,a,d),l=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,d=a.currentTarget,a=a.listener,c!==l&&o.isPropagationStopped())break e;ru(o,a,d),l=c}}}if(wi)throw e=Ps,wi=!1,Ps=null,e}function G(e,t){var n=t[Os];n===void 0&&(n=t[Os]=new Set);var r=e+"__bubble";n.has(r)||(cf(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),cf(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function to(e){if(!e[Mo]){e[Mo]=!0,gp.forEach(function(n){n!=="selectionchange"&&(Cm.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,Fl("selectionchange",!1,t))}}function cf(e,t,n,r){switch(Hp(t)){case 1:var o=Og;break;case 4:o=Fg;break;default:o=Na}n=o.bind(null,t,n,e),o=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function _l(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=cn(a),s===null)return;if(c=s.tag,c===5||c===6){r=l=s;continue e}a=a.parentNode}}r=r.return}Ip(function(){var d=l,x=za(n),g=[];e:{var m=sf.get(e);if(m!==void 0){var k=Oa,w=e;switch(e){case"keypress":if(ri(n)===0)break e;case"keydown":case"keyup":k=em;break;case"focusin":w="focus",k=Rl;break;case"focusout":w="blur",k=Rl;break;case"beforeblur":case"afterblur":k=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=rm;break;case nf:case rf:case of:k=Hg;break;case lf:k=im;break;case"scroll":k=_g;break;case"wheel":k=sm;break;case"copy":case"cut":case"paste":k=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Gc}var y=(t&4)!==0,S=!y&&e==="scroll",h=y?m!==null?m+"Capture":null:m;y=[];for(var p=d,f;p!==null;){f=p;var j=f.stateNode;if(f.tag===5&&j!==null&&(f=j,h!==null&&(j=Yr(p,h),j!=null&&y.push(no(p,j,f)))),S)break;p=p.return}0<y.length&&(m=new k(m,w,null,n,x),g.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==$s&&(w=n.relatedTarget||n.fromElement)&&(cn(w)||w[yt]))break e;if((k||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=d,w=w?cn(w):null,w!==null&&(S=$n(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=d),k!==w)){if(y=Hc,j="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Gc,j="onPointerLeave",h="onPointerEnter",p="pointer"),S=k==null?m:Nn(k),f=w==null?m:Nn(w),m=new y(j,p+"leave",k,n,x),m.target=S,m.relatedTarget=f,j=null,cn(x)===d&&(y=new y(h,p+"enter",w,n,x),y.target=f,y.relatedTarget=S,j=y),S=j,k&&w)t:{for(y=k,h=w,p=0,f=y;f;f=Sn(f))p++;for(f=0,j=h;j;j=Sn(j))f++;for(;0<p-f;)y=Sn(y),p--;for(;0<f-p;)h=Sn(h),f--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=Sn(y),h=Sn(h)}y=null}else y=null;k!==null&&ou(g,m,k,y,!1),w!==null&&S!==null&&ou(g,S,w,y,!0)}}e:{if(m=d?Nn(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var b=hm;else if(Jc(m))if(Xp)b=ym;else{b=mm;var E=gm}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=xm);if(b&&(b=b(e,d))){Jp(g,b,n,x);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ws(m,"number",m.value)}switch(E=d?Nn(d):window,e){case"focusin":(Jc(E)||E.contentEditable==="true")&&(Dn=E,zs=d,_r=null);break;case"focusout":_r=zs=Dn=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,tu(g,n,x);break;case"selectionchange":if(bm)break;case"keydown":case"keyup":tu(g,n,x)}var $;if(_a)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Rn?Kp(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Gp&&n.locale!=="ko"&&(Rn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Rn&&($=Qp()):(Dt=x,Aa="value"in Dt?Dt.value:Dt.textContent,Rn=!0)),E=$i(d,C),0<E.length&&(C=new Qc(C,e,null,n,x),g.push({event:C,listeners:E}),$?C.data=$:($=Yp(n),$!==null&&(C.data=$)))),($=cm?um(e,n):dm(e,n))&&(d=$i(d,"onBeforeInput"),0<d.length&&(x=new Qc("onBeforeInput","beforeinput",null,n,x),g.push({event:x,listeners:d}),x.data=$))}af(g,t)})}function no(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Yr(e,n),l!=null&&r.unshift(no(e,l,o)),l=Yr(e,t),l!=null&&r.push(no(e,l,o))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,n,r,o){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,o?(c=Yr(n,l),c!=null&&s.unshift(no(n,c,a))):o||(c=Yr(n,l),c!=null&&s.push(no(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var $m=/\r\n?/g,Sm=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace($m,`
`).replace(Sm,"")}function No(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(P(425))}function Si(){}var Ds=null,Ms=null;function Ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var As=typeof setTimeout=="function"?setTimeout:void 0,Em=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(Tm)}:As;function Tm(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),it="__reactFiber$"+pr,ro="__reactProps$"+pr,yt="__reactContainer$"+pr,Os="__reactEvents$"+pr,Lm="__reactListeners$"+pr,Im="__reactHandles$"+pr;function cn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[it])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function jo(e){return e=e[it]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function el(e){return e[ro]||null}var Fs=[],An=-1;function qt(e){return{current:e}}function Y(e){0>An||(e.current=Fs[An],Fs[An]=null,An--)}function Q(e,t){An++,Fs[An]=e.current,e.current=t}var Yt={},be=qt(Yt),Te=qt(!1),mn=Yt;function qn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Le(e){return e=e.childContextTypes,e!=null}function Ei(){Y(Te),Y(be)}function au(e,t,n){if(be.current!==Yt)throw Error(P(168));Q(be,t),Q(Te,n)}function uf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,gg(e)||"Unknown",o));return ee({},n,r)}function Pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,mn=be.current,Q(be,e),Q(Te,Te.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=uf(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,Y(Te),Y(be),Q(be,e)):Y(Te),Q(Te,n)}var pt=null,tl=!1,Ul=!1;function df(e){pt===null?pt=[e]:pt.push(e)}function zm(e){tl=!0,df(e)}function Zt(){if(!Ul&&pt!==null){Ul=!0;var e=0,t=V;try{var n=pt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,tl=!1}catch(o){throw pt!==null&&(pt=pt.slice(e+1)),Mp(Ra,Zt),o}finally{V=t,Ul=!1}}return null}var On=[],Fn=0,Ti=null,Li=0,_e=[],Be=0,xn=null,ft=1,ht="";function on(e,t){On[Fn++]=Li,On[Fn++]=Ti,Ti=e,Li=t}function pf(e,t,n){_e[Be++]=ft,_e[Be++]=ht,_e[Be++]=xn,xn=e;var r=ft;e=ht;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var l=32-qe(t)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,ft=1<<32-qe(t)+o|n<<o|r,ht=l+e}else ft=1<<l|n<<o|r,ht=e}function Ua(e){e.return!==null&&(on(e,1),pf(e,1,0))}function Wa(e){for(;e===Ti;)Ti=On[--Fn],On[Fn]=null,Li=On[--Fn],On[Fn]=null;for(;e===xn;)xn=_e[--Be],_e[Be]=null,ht=_e[--Be],_e[Be]=null,ft=_e[--Be],_e[Be]=null}var Me=null,De=null,J=!1,Xe=null;function ff(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,De=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,De=null,!0):!1;default:return!1}}function _s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bs(e){if(J){var t=De;if(t){var n=t;if(!uu(e,t)){if(_s(e))throw Error(P(418));t=Bt(n.nextSibling);var r=Me;t&&uu(e,t)?ff(r,n):(e.flags=e.flags&-4097|2,J=!1,Me=e)}}else{if(_s(e))throw Error(P(418));e.flags=e.flags&-4097|2,J=!1,Me=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Ao(e){if(e!==Me)return!1;if(!J)return du(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ns(e.type,e.memoizedProps)),t&&(t=De)){if(_s(e))throw hf(),Error(P(418));for(;t;)ff(e,t),t=Bt(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Me?Bt(e.stateNode.nextSibling):null;return!0}function hf(){for(var e=De;e;)e=Bt(e.nextSibling)}function Zn(){De=Me=null,J=!1}function Va(e){Xe===null?Xe=[e]:Xe.push(e)}var Rm=bt.ReactCurrentBatchConfig;function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=o.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function gf(e){function t(h,p){if(e){var f=h.deletions;f===null?(h.deletions=[p],h.flags|=16):f.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Ht(h,p),h.index=0,h.sibling=null,h}function l(h,p,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<p?(h.flags|=2,p):f):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,f,j){return p===null||p.tag!==6?(p=Yl(f,h.mode,j),p.return=h,p):(p=o(p,f),p.return=h,p)}function c(h,p,f,j){var b=f.type;return b===zn?x(h,p,f.props.children,j,f.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Lt&&pu(b)===p.type)?(j=o(p,f.props),j.ref=jr(h,p,f),j.return=h,j):(j=ui(f.type,f.key,f.props,null,h.mode,j),j.ref=jr(h,p,f),j.return=h,j)}function d(h,p,f,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=Jl(f,h.mode,j),p.return=h,p):(p=o(p,f.children||[]),p.return=h,p)}function x(h,p,f,j,b){return p===null||p.tag!==7?(p=fn(f,h.mode,j,b),p.return=h,p):(p=o(p,f),p.return=h,p)}function g(h,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Yl(""+p,h.mode,f),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Eo:return f=ui(p.type,p.key,p.props,null,h.mode,f),f.ref=jr(h,null,p),f.return=h,f;case In:return p=Jl(p,h.mode,f),p.return=h,p;case Lt:var j=p._init;return g(h,j(p._payload),f)}if(Tr(p)||xr(p))return p=fn(p,h.mode,f,null),p.return=h,p;Oo(h,p)}return null}function m(h,p,f,j){var b=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:a(h,p,""+f,j);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Eo:return f.key===b?c(h,p,f,j):null;case In:return f.key===b?d(h,p,f,j):null;case Lt:return b=f._init,m(h,p,b(f._payload),j)}if(Tr(f)||xr(f))return b!==null?null:x(h,p,f,j,null);Oo(h,f)}return null}function k(h,p,f,j,b){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(f)||null,a(p,h,""+j,b);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Eo:return h=h.get(j.key===null?f:j.key)||null,c(p,h,j,b);case In:return h=h.get(j.key===null?f:j.key)||null,d(p,h,j,b);case Lt:var E=j._init;return k(h,p,f,E(j._payload),b)}if(Tr(j)||xr(j))return h=h.get(f)||null,x(p,h,j,b,null);Oo(p,j)}return null}function w(h,p,f,j){for(var b=null,E=null,$=p,C=p=0,z=null;$!==null&&C<f.length;C++){$.index>C?(z=$,$=null):z=$.sibling;var L=m(h,$,f[C],j);if(L===null){$===null&&($=z);break}e&&$&&L.alternate===null&&t(h,$),p=l(L,p,C),E===null?b=L:E.sibling=L,E=L,$=z}if(C===f.length)return n(h,$),J&&on(h,C),b;if($===null){for(;C<f.length;C++)$=g(h,f[C],j),$!==null&&(p=l($,p,C),E===null?b=$:E.sibling=$,E=$);return J&&on(h,C),b}for($=r(h,$);C<f.length;C++)z=k($,h,C,f[C],j),z!==null&&(e&&z.alternate!==null&&$.delete(z.key===null?C:z.key),p=l(z,p,C),E===null?b=z:E.sibling=z,E=z);return e&&$.forEach(function(A){return t(h,A)}),J&&on(h,C),b}function y(h,p,f,j){var b=xr(f);if(typeof b!="function")throw Error(P(150));if(f=b.call(f),f==null)throw Error(P(151));for(var E=b=null,$=p,C=p=0,z=null,L=f.next();$!==null&&!L.done;C++,L=f.next()){$.index>C?(z=$,$=null):z=$.sibling;var A=m(h,$,L.value,j);if(A===null){$===null&&($=z);break}e&&$&&A.alternate===null&&t(h,$),p=l(A,p,C),E===null?b=A:E.sibling=A,E=A,$=z}if(L.done)return n(h,$),J&&on(h,C),b;if($===null){for(;!L.done;C++,L=f.next())L=g(h,L.value,j),L!==null&&(p=l(L,p,C),E===null?b=L:E.sibling=L,E=L);return J&&on(h,C),b}for($=r(h,$);!L.done;C++,L=f.next())L=k($,h,C,L.value,j),L!==null&&(e&&L.alternate!==null&&$.delete(L.key===null?C:L.key),p=l(L,p,C),E===null?b=L:E.sibling=L,E=L);return e&&$.forEach(function(te){return t(h,te)}),J&&on(h,C),b}function S(h,p,f,j){if(typeof f=="object"&&f!==null&&f.type===zn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Eo:e:{for(var b=f.key,E=p;E!==null;){if(E.key===b){if(b=f.type,b===zn){if(E.tag===7){n(h,E.sibling),p=o(E,f.props.children),p.return=h,h=p;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Lt&&pu(b)===E.type){n(h,E.sibling),p=o(E,f.props),p.ref=jr(h,E,f),p.return=h,h=p;break e}n(h,E);break}else t(h,E);E=E.sibling}f.type===zn?(p=fn(f.props.children,h.mode,j,f.key),p.return=h,h=p):(j=ui(f.type,f.key,f.props,null,h.mode,j),j.ref=jr(h,p,f),j.return=h,h=j)}return s(h);case In:e:{for(E=f.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(h,p.sibling),p=o(p,f.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Jl(f,h.mode,j),p.return=h,h=p}return s(h);case Lt:return E=f._init,S(h,p,E(f._payload),j)}if(Tr(f))return w(h,p,f,j);if(xr(f))return y(h,p,f,j);Oo(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,f),p.return=h,h=p):(n(h,p),p=Yl(f,h.mode,j),p.return=h,h=p),s(h)):n(h,p)}return S}var er=gf(!0),mf=gf(!1),Ii=qt(null),zi=null,_n=null,Ha=null;function Qa(){Ha=_n=zi=null}function Ga(e){var t=Ii.current;Y(Ii),e._currentValue=t}function Us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){zi=e,Ha=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(zi===null)throw Error(P(308));_n=e,zi.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var un=null;function Ka(e){un===null?un=[e]:un.push(e)}function xf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ka(t)):(n.next=o.next,o.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ka(r)):(t.next=o.next,o.next=t),r.interleaved=t,vt(e,n)}function oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Da(e,n)}}function fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ri(e,t,n,r){var o=e.updateQueue;It=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,d=c.next;c.next=null,s===null?l=d:s.next=d,s=c;var x=e.alternate;x!==null&&(x=x.updateQueue,a=x.lastBaseUpdate,a!==s&&(a===null?x.firstBaseUpdate=d:a.next=d,x.lastBaseUpdate=c))}if(l!==null){var g=o.baseState;s=0,x=d=c=null,a=l;do{var m=a.lane,k=a.eventTime;if((r&m)===m){x!==null&&(x=x.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(m=t,k=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){g=w.call(k,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(k,g,m):w,m==null)break e;g=ee({},g,m);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else k={eventTime:k,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},x===null?(d=x=k,c=g):x=x.next=k,s|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(x===null&&(c=g),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);vn|=s,e.lanes=s,e.memoizedState=g}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var ko={},st=qt(ko),oo=qt(ko),io=qt(ko);function dn(e){if(e===ko)throw Error(P(174));return e}function Ja(e,t){switch(Q(io,t),Q(oo,e),Q(st,ko),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:js(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=js(t,e)}Y(st),Q(st,t)}function tr(){Y(st),Y(oo),Y(io)}function vf(e){dn(io.current);var t=dn(st.current),n=js(t,e.type);t!==n&&(Q(oo,e),Q(st,n))}function Xa(e){oo.current===e&&(Y(st),Y(oo))}var X=qt(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function qa(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var ii=bt.ReactCurrentDispatcher,Vl=bt.ReactCurrentBatchConfig,yn=0,q=null,ce=null,pe=null,Mi=!1,Br=!1,lo=0,Dm=0;function xe(){throw Error(P(321))}function Za(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function ec(e,t,n,r,o,l){if(yn=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?Om:Fm,e=n(r,o),Br){l=0;do{if(Br=!1,lo=0,25<=l)throw Error(P(301));l+=1,pe=ce=null,t.updateQueue=null,ii.current=_m,e=n(r,o)}while(Br)}if(ii.current=Ni,t=ce!==null&&ce.next!==null,yn=0,pe=ce=q=null,Mi=!1,t)throw Error(P(300));return e}function tc(){var e=lo!==0;return lo=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?q.memoizedState=pe=e:pe=pe.next=e,pe}function He(){if(ce===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?q.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(P(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?q.memoizedState=pe=e:pe=pe.next=e}return pe}function so(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=He(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ce,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=s=null,c=null,d=l;do{var x=d.lane;if((yn&x)===x)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=g,s=r):c=c.next=g,q.lanes|=x,vn|=x}d=d.next}while(d!==null&&d!==l);c===null?s=r:c.next=a,tt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,q.lanes|=l,vn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=He(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);tt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function wf(){}function bf(e,t){var n=q,r=He(),o=t(),l=!tt(r.memoizedState,o);if(l&&(r.memoizedState=o,Pe=!0),r=r.queue,nc(Cf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,ao(9,kf.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(P(349));yn&30||jf(n,t,o)}return o}function jf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kf(e,t,n,r){t.value=n,t.getSnapshot=r,$f(t)&&Sf(e)}function Cf(e,t,n){return n(function(){$f(t)&&Sf(e)})}function $f(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Sf(e){var t=vt(e,1);t!==null&&Ze(t,e,1,-1)}function gu(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:e},t.queue=e,e=e.dispatch=Am.bind(null,q,e),[t.memoizedState,e]}function ao(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ef(){return He().memoizedState}function li(e,t,n,r){var o=ot();q.flags|=e,o.memoizedState=ao(1|t,n,void 0,r===void 0?null:r)}function nl(e,t,n,r){var o=He();r=r===void 0?null:r;var l=void 0;if(ce!==null){var s=ce.memoizedState;if(l=s.destroy,r!==null&&Za(r,s.deps)){o.memoizedState=ao(t,n,l,r);return}}q.flags|=e,o.memoizedState=ao(1|t,n,l,r)}function mu(e,t){return li(8390656,8,e,t)}function nc(e,t){return nl(2048,8,e,t)}function Pf(e,t){return nl(4,2,e,t)}function Tf(e,t){return nl(4,4,e,t)}function Lf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,n){return n=n!=null?n.concat([e]):null,nl(4,4,Lf.bind(null,t,e),n)}function rc(){}function zf(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Za(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Za(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Df(e,t,n){return yn&21?(tt(n,t)||(n=Op(),q.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Mm(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{V=n,Vl.transition=r}}function Mf(){return He().memoizedState}function Nm(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nf(e))Af(t,n);else if(n=xf(e,t,n,r),n!==null){var o=ke();Ze(n,e,r,o),Of(n,t,r)}}function Am(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))Af(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(o.hasEagerState=!0,o.eagerState=a,tt(a,s)){var c=t.interleaved;c===null?(o.next=o,Ka(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=xf(e,t,o,r),n!==null&&(o=ke(),Ze(n,e,r,o),Of(n,t,r))}}function Nf(e){var t=e.alternate;return e===q||t!==null&&t===q}function Af(e,t){Br=Mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Da(e,n)}}var Ni={readContext:Ve,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Om={readContext:Ve,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,li(4194308,4,Lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:gu,useDebugValue:rc,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=gu(!1),t=e[0];return e=Mm.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=ot();if(J){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),fe===null)throw Error(P(349));yn&30||jf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,mu(Cf.bind(null,r,l,e),[e]),r.flags|=2048,ao(9,kf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ot(),t=fe.identifierPrefix;if(J){var n=ht,r=ft;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fm={readContext:Ve,useCallback:zf,useContext:Ve,useEffect:nc,useImperativeHandle:If,useInsertionEffect:Pf,useLayoutEffect:Tf,useMemo:Rf,useReducer:Hl,useRef:Ef,useState:function(){return Hl(so)},useDebugValue:rc,useDeferredValue:function(e){var t=He();return Df(t,ce.memoizedState,e)},useTransition:function(){var e=Hl(so)[0],t=He().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:bf,useId:Mf,unstable_isNewReconciler:!1},_m={readContext:Ve,useCallback:zf,useContext:Ve,useEffect:nc,useImperativeHandle:If,useInsertionEffect:Pf,useLayoutEffect:Tf,useMemo:Rf,useReducer:Ql,useRef:Ef,useState:function(){return Ql(so)},useDebugValue:rc,useDeferredValue:function(e){var t=He();return ce===null?t.memoizedState=e:Df(t,ce.memoizedState,e)},useTransition:function(){var e=Ql(so)[0],t=He().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:bf,useId:Mf,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Vt(e),l=gt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,o),t!==null&&(Ze(t,e,o,r),oi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Vt(e),l=gt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,o),t!==null&&(Ze(t,e,o,r),oi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Vt(e),o=gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,r),t!==null&&(Ze(t,e,r,n),oi(t,e,r))}};function xu(e,t,n,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!eo(n,r)||!eo(o,l):!0}function Ff(e,t,n){var r=!1,o=Yt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ve(l):(o=Le(t)?mn:be.current,r=t.contextTypes,l=(r=r!=null)?qn(e,o):Yt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function Vs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ya(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ve(l):(l=Le(t)?mn:be.current,o.context=qn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ws(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&rl.enqueueReplaceState(o,o.state,null),Ri(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=hg(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bm=typeof WeakMap=="function"?WeakMap:Map;function _f(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,ta=r),Hs(e,t)},n}function Bf(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hs(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Hs(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=tx.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var Um=bt.ReactCurrentOwner,Pe=!1;function je(e,t,n,r){t.child=e===null?mf(t,null,n,r):er(t,e.child,n,r)}function ju(e,t,n,r,o){n=n.render;var l=t.ref;return Gn(t,o),r=ec(e,t,n,r,l,o),n=tc(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(J&&n&&Ua(t),t.flags|=1,je(e,t,r,o),t.child)}function ku(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!dc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Uf(e,t,l,r,o)):(e=ui(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(s,r)&&e.ref===t.ref)return wt(e,t,o)}return t.flags|=1,e=Ht(l,r),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(eo(l,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,wt(e,t,o)}return Qs(e,t,n,r,o)}function Wf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Un,Re),Re|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Un,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Q(Un,Re),Re|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Q(Un,Re),Re|=r;return je(e,t,o,n),t.child}function Vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qs(e,t,n,r,o){var l=Le(n)?mn:be.current;return l=qn(t,l),Gn(t,o),n=ec(e,t,n,r,l,o),r=tc(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(J&&r&&Ua(t),t.flags|=1,je(e,t,n,o),t.child)}function Cu(e,t,n,r,o){if(Le(n)){var l=!0;Pi(t)}else l=!1;if(Gn(t,o),t.stateNode===null)si(e,t),Ff(t,n,r),Vs(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ve(d):(d=Le(n)?mn:be.current,d=qn(t,d));var x=n.getDerivedStateFromProps,g=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==d)&&yu(t,s,r,d),It=!1;var m=t.memoizedState;s.state=m,Ri(t,r,s,o),c=t.memoizedState,a!==r||m!==c||Te.current||It?(typeof x=="function"&&(Ws(t,n,x,r),c=t.memoizedState),(a=It||xu(t,n,a,r,m,c,d))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,yf(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Ke(t.type,a),s.props=d,g=t.pendingProps,m=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ve(c):(c=Le(n)?mn:be.current,c=qn(t,c));var k=n.getDerivedStateFromProps;(x=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==g||m!==c)&&yu(t,s,r,c),It=!1,m=t.memoizedState,s.state=m,Ri(t,r,s,o);var w=t.memoizedState;a!==g||m!==w||Te.current||It?(typeof k=="function"&&(Ws(t,n,k,r),w=t.memoizedState),(d=It||xu(t,n,d,r,m,w,c)||!1)?(x||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,l,o)}function Gs(e,t,n,r,o,l){Vf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&cu(t,n,!1),wt(e,t,l);r=t.stateNode,Um.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=er(t,e.child,null,l),t.child=er(t,null,a,l)):je(e,t,a,l),t.memoizedState=r.state,o&&cu(t,n,!0),t.child}function Hf(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),Ja(e,t.containerInfo)}function $u(e,t,n,r,o){return Zn(),Va(o),t.flags|=256,je(e,t,n,r),t.child}var Ks={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qf(e,t,n){var r=t.pendingProps,o=X.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(X,o&1),e===null)return Bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=ll(s,r,0,null),e=fn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ys(n),t.memoizedState=Ks,e):oc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Wm(e,t,s,r,a,o,n);if(l){l=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ht(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Ht(a,l):(l=fn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Ys(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ks,r}return l=e.child,e=l.sibling,r=Ht(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oc(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fo(e,t,n,r){return r!==null&&Va(r),er(t,e.child,null,n),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wm(e,t,n,r,o,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(P(422))),Fo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=ll({mode:"visible",children:r.children},o,0,null),l=fn(l,o,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&er(t,e.child,null,s),t.child.memoizedState=Ys(s),t.memoizedState=Ks,l);if(!(t.mode&1))return Fo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(P(419)),r=Gl(l,r,void 0),Fo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Pe||a){if(r=fe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,vt(e,o),Ze(r,e,o,-1))}return uc(),r=Gl(Error(P(421))),Fo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=nx.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,De=Bt(o.nextSibling),Me=t,J=!0,Xe=null,e!==null&&(_e[Be++]=ft,_e[Be++]=ht,_e[Be++]=xn,ft=e.id,ht=e.overflow,xn=t),t=oc(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Us(e.return,t,n)}function Kl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Gf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(je(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Kl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Di(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Kl(t,!0,n,null,l);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vm(e,t,n){switch(t.tag){case 3:Hf(t),Zn();break;case 5:vf(t);break;case 1:Le(t.type)&&Pi(t);break;case 4:Ja(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(Ii,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Qf(e,t,n):(Q(X,X.current&1),e=wt(e,t,n),e!==null?e.sibling:null);Q(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Wf(e,t,n)}return wt(e,t,n)}var Kf,Js,Yf,Jf;Kf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Js=function(){};Yf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,dn(st.current);var l=null;switch(n){case"input":o=ys(e,o),r=ys(e,r),l=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),l=[];break;case"textarea":o=bs(e,o),r=bs(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}ks(n,r);var s;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var a=o[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(a=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&G("scroll",e),l||a===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hm(e,t,n){var r=t.pendingProps;switch(Wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Le(t.type)&&Ei(),ye(t),null;case 3:return r=t.stateNode,tr(),Y(Te),Y(be),qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(oa(Xe),Xe=null))),Js(e,t),ye(t),null;case 5:Xa(t);var o=dn(io.current);if(n=t.type,e!==null&&t.stateNode!=null)Yf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ye(t),null}if(e=dn(st.current),Ao(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[it]=t,r[ro]=l,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<Ir.length;o++)G(Ir[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Mc(r,l),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},G("invalid",r);break;case"textarea":Ac(r,l),G("invalid",r)}ks(n,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&No(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&No(r.textContent,a,e),o=["children",""+a]):Gr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":Po(r),Nc(r,l,!0);break;case"textarea":Po(r),Oc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[it]=t,e[ro]=r,Kf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Cs(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ir.length;o++)G(Ir[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":Mc(e,r),o=ys(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),G("invalid",e);break;case"textarea":Ac(e,r),o=bs(e,r),G("invalid",e);break;default:o=r}ks(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?Sp(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cp(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Kr(e,c):typeof c=="number"&&Kr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&G("scroll",e):c!=null&&Pa(e,l,c,s))}switch(n){case"input":Po(e),Nc(e,r,!1);break;case"textarea":Po(e),Oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Wn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=dn(io.current),dn(st.current),Ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(l=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:No(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ye(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&De!==null&&t.mode&1&&!(t.flags&128))hf(),Zn(),t.flags|=98560,l=!1;else if(l=Ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[it]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),l=!1}else Xe!==null&&(oa(Xe),Xe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?de===0&&(de=3):uc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return tr(),Js(e,t),e===null&&to(t.stateNode.containerInfo),ye(t),null;case 10:return Ga(t.type._context),ye(t),null;case 17:return Le(t.type)&&Ei(),ye(t),null;case 19:if(Y(X),l=t.memoizedState,l===null)return ye(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)kr(l,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Di(e),s!==null){for(t.flags|=128,kr(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(X,X.current&1|2),t.child}e=e.sibling}l.tail!==null&&oe()>rr&&(t.flags|=128,r=!0,kr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Di(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!J)return ye(t),null}else 2*oe()-l.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,kr(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=oe(),t.sibling=null,n=X.current,Q(X,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return cc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Qm(e,t){switch(Wa(t),t.tag){case 1:return Le(t.type)&&Ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),Y(Te),Y(be),qa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xa(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return tr(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var _o=!1,we=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,I=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Xs(e,t,n){try{n()}catch(r){re(e,t,r)}}var Eu=!1;function Km(e,t){if(Ds=ki,e=ef(),Ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,d=0,x=0,g=e,m=null;t:for(;;){for(var k;g!==n||o!==0&&g.nodeType!==3||(a=s+o),g!==l||r!==0&&g.nodeType!==3||(c=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(k=g.firstChild)!==null;)m=g,g=k;for(;;){if(g===e)break t;if(m===n&&++d===o&&(a=s),m===l&&++x===r&&(c=s),(k=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=k}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ms={focusedElem:e,selectionRange:n},ki=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,S=w.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ke(t.type,y),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(j){re(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return w=Eu,Eu=!1,w}function Ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Xs(t,n,l)}o=o.next}while(o!==r)}}function ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[ro],delete t[Os],delete t[Lm],delete t[Im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qf(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Zs(e,t,n),e=e.sibling;e!==null;)Zs(e,t,n),e=e.sibling}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}var he=null,Ye=!1;function St(e,t,n){for(n=n.child;n!==null;)Zf(e,t,n),n=n.sibling}function Zf(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ji,n)}catch{}switch(n.tag){case 5:we||Bn(n,t);case 6:var r=he,o=Ye;he=null,St(e,t,n),he=r,Ye=o,he!==null&&(Ye?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ye?(e=he,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),qr(e)):Bl(he,n.stateNode));break;case 4:r=he,o=Ye,he=n.stateNode.containerInfo,Ye=!0,St(e,t,n),he=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Xs(n,t,s),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!we&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,St(e,t,n),we=r):St(e,t,n);break;default:St(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gm),t.forEach(function(r){var o=rx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Ye=!1;break e;case 3:he=a.stateNode.containerInfo,Ye=!0;break e;case 4:he=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(he===null)throw Error(P(160));Zf(l,s,o),he=null,Ye=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){re(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}function eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{Ur(3,e,e.return),ol(3,e)}catch(y){re(e,e.return,y)}try{Ur(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var o=e.stateNode;try{Kr(o,"")}catch(y){re(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&bp(o,l),Cs(a,s);var d=Cs(a,l);for(s=0;s<c.length;s+=2){var x=c[s],g=c[s+1];x==="style"?Sp(o,g):x==="dangerouslySetInnerHTML"?Cp(o,g):x==="children"?Kr(o,g):Pa(o,x,g,d)}switch(a){case"input":vs(o,l);break;case"textarea":jp(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?Wn(o,!!l.multiple,k,!1):m!==!!l.multiple&&(l.defaultValue!=null?Wn(o,!!l.multiple,l.defaultValue,!0):Wn(o,!!l.multiple,l.multiple?[]:"",!1))}o[ro]=l}catch(y){re(e,e.return,y)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(y){re(e,e.return,y)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(sc=oe())),r&4&&Tu(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(we=(d=we)||x,Ge(t,e),we=d):Ge(t,e),rt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(I=e,x=e.child;x!==null;){for(g=I=x;I!==null;){switch(m=I,k=m.child,m.tag){case 0:case 11:case 14:case 15:Ur(4,m,m.return);break;case 1:Bn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Bn(m,m.return);break;case 22:if(m.memoizedState!==null){Iu(g);continue}}k!==null?(k.return=m,I=k):Iu(g)}x=x.sibling}e:for(x=null,g=e;;){if(g.tag===5){if(x===null){x=g;try{o=g.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,c=g.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=$p("display",s))}catch(y){re(e,e.return,y)}}}else if(g.tag===6){if(x===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(y){re(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;x===g&&(x=null),g=g.return}x===g&&(x=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&Tu(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qf(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kr(o,""),r.flags&=-33);var l=Pu(e);ea(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Pu(e);Zs(e,a,s);break;default:throw Error(P(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ym(e,t,n){I=e,th(e)}function th(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||_o;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||we;a=_o;var d=we;if(_o=s,(we=c)&&!d)for(I=o;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?zu(o):c!==null?(c.return=s,I=c):zu(o);for(;l!==null;)I=l,th(l),l=l.sibling;I=o,_o=a,we=d}Lu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,I=l):Lu(e)}}function Lu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&hu(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var g=x.dehydrated;g!==null&&qr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}we||t.flags&512&&qs(t)}catch(m){re(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Iu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function zu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ol(4,t)}catch(c){re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){re(t,o,c)}}var l=t.return;try{qs(t)}catch(c){re(t,l,c)}break;case 5:var s=t.return;try{qs(t)}catch(c){re(t,s,c)}}}catch(c){re(t,t.return,c)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var Jm=Math.ceil,Ai=bt.ReactCurrentDispatcher,ic=bt.ReactCurrentOwner,We=bt.ReactCurrentBatchConfig,O=0,fe=null,se=null,ge=0,Re=0,Un=qt(0),de=0,co=null,vn=0,il=0,lc=0,Wr=null,Ee=null,sc=0,rr=1/0,ut=null,Oi=!1,ta=null,Wt=null,Bo=!1,Mt=null,Fi=0,Vr=0,na=null,ai=-1,ci=0;function ke(){return O&6?oe():ai!==-1?ai:ai=oe()}function Vt(e){return e.mode&1?O&2&&ge!==0?ge&-ge:Rm.transition!==null?(ci===0&&(ci=Op()),ci):(e=V,e!==0||(e=window.event,e=e===void 0?16:Hp(e.type)),e):1}function Ze(e,t,n,r){if(50<Vr)throw Vr=0,na=null,Error(P(185));wo(e,n,r),(!(O&2)||e!==fe)&&(e===fe&&(!(O&2)&&(il|=n),de===4&&Rt(e,ge)),Ie(e,r),n===1&&O===0&&!(t.mode&1)&&(rr=oe()+500,tl&&Zt()))}function Ie(e,t){var n=e.callbackNode;Rg(e,t);var r=ji(e,e===fe?ge:0);if(r===0)n!==null&&Bc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bc(n),t===1)e.tag===0?zm(Ru.bind(null,e)):df(Ru.bind(null,e)),Pm(function(){!(O&6)&&Zt()}),n=null;else{switch(Fp(r)){case 1:n=Ra;break;case 4:n=Np;break;case 16:n=bi;break;case 536870912:n=Ap;break;default:n=bi}n=ch(n,nh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nh(e,t){if(ai=-1,ci=0,O&6)throw Error(P(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=ji(e,e===fe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_i(e,r);else{t=r;var o=O;O|=2;var l=oh();(fe!==e||ge!==t)&&(ut=null,rr=oe()+500,pn(e,t));do try{Zm();break}catch(a){rh(e,a)}while(!0);Qa(),Ai.current=l,O=o,se!==null?t=0:(fe=null,ge=0,t=de)}if(t!==0){if(t===2&&(o=Ts(e),o!==0&&(r=o,t=ra(e,o))),t===1)throw n=co,pn(e,0),Rt(e,r),Ie(e,oe()),n;if(t===6)Rt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Xm(o)&&(t=_i(e,r),t===2&&(l=Ts(e),l!==0&&(r=l,t=ra(e,l))),t===1))throw n=co,pn(e,0),Rt(e,r),Ie(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:ln(e,Ee,ut);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=sc+500-oe(),10<t)){if(ji(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=As(ln.bind(null,e,Ee,ut),t);break}ln(e,Ee,ut);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-qe(r);l=1<<s,s=t[s],s>o&&(o=s),r&=~l}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jm(r/1960))-r,10<r){e.timeoutHandle=As(ln.bind(null,e,Ee,ut),r);break}ln(e,Ee,ut);break;case 5:ln(e,Ee,ut);break;default:throw Error(P(329))}}}return Ie(e,oe()),e.callbackNode===n?nh.bind(null,e):null}function ra(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=_i(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&oa(t)),e}function oa(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Xm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!tt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~lc,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function Ru(e){if(O&6)throw Error(P(327));Kn();var t=ji(e,0);if(!(t&1))return Ie(e,oe()),null;var n=_i(e,t);if(e.tag!==0&&n===2){var r=Ts(e);r!==0&&(t=r,n=ra(e,r))}if(n===1)throw n=co,pn(e,0),Rt(e,t),Ie(e,oe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Ee,ut),Ie(e,oe()),null}function ac(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(rr=oe()+500,tl&&Zt())}}function wn(e){Mt!==null&&Mt.tag===0&&!(O&6)&&Kn();var t=O;O|=1;var n=We.transition,r=V;try{if(We.transition=null,V=1,e)return e()}finally{V=r,We.transition=n,O=t,!(O&6)&&Zt()}}function cc(){Re=Un.current,Y(Un)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Em(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:tr(),Y(Te),Y(be),qa();break;case 5:Xa(r);break;case 4:tr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Ga(r.type._context);break;case 22:case 23:cc()}n=n.return}if(fe=e,se=e=Ht(e.current,null),ge=Re=t,de=0,co=null,lc=il=vn=0,Ee=Wr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}n.pending=r}un=null}return e}function rh(e,t){do{var n=se;try{if(Qa(),ii.current=Ni,Mi){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Mi=!1}if(yn=0,pe=ce=q=null,Br=!1,lo=0,ic.current=null,n===null||n.return===null){de=1,co=t,se=null;break}e:{var l=e,s=n.return,a=n,c=t;if(t=ge,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,x=a,g=x.tag;if(!(x.mode&1)&&(g===0||g===11||g===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var k=wu(s);if(k!==null){k.flags&=-257,bu(k,s,a,l,t),k.mode&1&&vu(l,d,t),t=k,c=d;var w=t.updateQueue;if(w===null){var y=new Set;y.add(c),t.updateQueue=y}else w.add(c);break e}else{if(!(t&1)){vu(l,d,t),uc();break e}c=Error(P(426))}}else if(J&&a.mode&1){var S=wu(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),bu(S,s,a,l,t),Va(nr(c,a));break e}}l=c=nr(c,a),de!==4&&(de=2),Wr===null?Wr=[l]:Wr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=_f(l,c,t);fu(l,h);break e;case 1:a=c;var p=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wt===null||!Wt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var j=Bf(l,a,t);fu(l,j);break e}}l=l.return}while(l!==null)}lh(n)}catch(b){t=b,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function oh(){var e=Ai.current;return Ai.current=Ni,e===null?Ni:e}function uc(){(de===0||de===3||de===2)&&(de=4),fe===null||!(vn&268435455)&&!(il&268435455)||Rt(fe,ge)}function _i(e,t){var n=O;O|=2;var r=oh();(fe!==e||ge!==t)&&(ut=null,pn(e,t));do try{qm();break}catch(o){rh(e,o)}while(!0);if(Qa(),O=n,Ai.current=r,se!==null)throw Error(P(261));return fe=null,ge=0,de}function qm(){for(;se!==null;)ih(se)}function Zm(){for(;se!==null&&!Cg();)ih(se)}function ih(e){var t=ah(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?lh(e):se=t,ic.current=null}function lh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qm(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,se=null;return}}else if(n=Hm(n,t,Re),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);de===0&&(de=5)}function ln(e,t,n){var r=V,o=We.transition;try{We.transition=null,V=1,ex(e,t,n,r)}finally{We.transition=o,V=r}return null}function ex(e,t,n,r){do Kn();while(Mt!==null);if(O&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Dg(e,l),e===fe&&(se=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,ch(bi,function(){return Kn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=We.transition,We.transition=null;var s=V;V=1;var a=O;O|=4,ic.current=null,Km(e,n),eh(n,e),wm(Ms),ki=!!Ds,Ms=Ds=null,e.current=n,Ym(n),$g(),O=a,V=s,We.transition=l}else e.current=n;if(Bo&&(Bo=!1,Mt=e,Fi=o),l=e.pendingLanes,l===0&&(Wt=null),Pg(n.stateNode),Ie(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oi)throw Oi=!1,e=ta,ta=null,e;return Fi&1&&e.tag!==0&&Kn(),l=e.pendingLanes,l&1?e===na?Vr++:(Vr=0,na=e):Vr=0,Zt(),null}function Kn(){if(Mt!==null){var e=Fp(Fi),t=We.transition,n=V;try{if(We.transition=null,V=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Fi=0,O&6)throw Error(P(331));var o=O;for(O|=4,I=e.current;I!==null;){var l=I,s=l.child;if(I.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(I=d;I!==null;){var x=I;switch(x.tag){case 0:case 11:case 15:Ur(8,x,l)}var g=x.child;if(g!==null)g.return=x,I=g;else for(;I!==null;){x=I;var m=x.sibling,k=x.return;if(Xf(x),x===d){I=null;break}if(m!==null){m.return=k,I=m;break}I=k}}}var w=l.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}I=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,I=s;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ur(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,I=h;break e}I=l.return}}var p=e.current;for(I=p;I!==null;){s=I;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,I=f;else e:for(s=p;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ol(9,a)}}catch(b){re(a,a.return,b)}if(a===s){I=null;break e}var j=a.sibling;if(j!==null){j.return=a.return,I=j;break e}I=a.return}}if(O=o,Zt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{V=n,We.transition=t}}return!1}function Du(e,t,n){t=nr(n,t),t=_f(e,t,1),e=Ut(e,t,1),t=ke(),e!==null&&(wo(e,1,t),Ie(e,t))}function re(e,t,n){if(e.tag===3)Du(e,e,n);else for(;t!==null;){if(t.tag===3){Du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=nr(n,e),e=Bf(t,e,1),t=Ut(t,e,1),e=ke(),t!==null&&(wo(t,1,e),Ie(t,e));break}}t=t.return}}function tx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(de===4||de===3&&(ge&130023424)===ge&&500>oe()-sc?pn(e,0):lc|=n),Ie(e,t)}function sh(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=ke();e=vt(e,t),e!==null&&(wo(e,t,n),Ie(e,n))}function nx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sh(e,n)}function rx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),sh(e,n)}var ah;ah=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Vm(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,J&&t.flags&1048576&&pf(t,Li,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;si(e,t),e=t.pendingProps;var o=qn(t,be.current);Gn(t,n),o=ec(null,t,r,e,o,n);var l=tc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(l=!0,Pi(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ya(t),o.updater=rl,t.stateNode=o,o._reactInternals=t,Vs(t,r,e,n),t=Gs(null,t,r,!0,l,n)):(t.tag=0,J&&l&&Ua(t),je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(si(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ix(r),e=Ke(r,e),o){case 0:t=Qs(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=ku(null,t,r,Ke(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Qs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Cu(e,t,r,o,n);case 3:e:{if(Hf(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,o=l.element,yf(e,t),Ri(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=nr(Error(P(423)),t),t=$u(e,t,r,n,o);break e}else if(r!==o){o=nr(Error(P(424)),t),t=$u(e,t,r,n,o);break e}else for(De=Bt(t.stateNode.containerInfo.firstChild),Me=t,J=!0,Xe=null,n=mf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=wt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return vf(t),e===null&&Bs(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,Ns(r,o)?s=null:l!==null&&Ns(r,l)&&(t.flags|=32),Vf(e,t),je(e,t,s,n),t.child;case 6:return e===null&&Bs(t),null;case 13:return Qf(e,t,n);case 4:return Ja(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),ju(e,t,r,o,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,s=o.value,Q(Ii,r._currentValue),r._currentValue=s,l!==null)if(tt(l.value,s)){if(l.children===o.children&&!Te.current){t=wt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=gt(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?c.next=c:(c.next=x.next,x.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Us(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Us(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Gn(t,n),o=Ve(o),r=r(o),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,o=Ke(r,t.pendingProps),o=Ke(r.type,o),ku(e,t,r,o,n);case 15:return Uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),si(e,t),t.tag=1,Le(r)?(e=!0,Pi(t)):e=!1,Gn(t,n),Ff(t,r,o),Vs(t,r,o,n),Gs(null,t,r,!0,e,n);case 19:return Gf(e,t,n);case 22:return Wf(e,t,n)}throw Error(P(156,t.tag))};function ch(e,t){return Mp(e,t)}function ox(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new ox(e,t,n,r)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ix(e){if(typeof e=="function")return dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===La)return 11;if(e===Ia)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ui(e,t,n,r,o,l){var s=2;if(r=e,typeof e=="function")dc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case zn:return fn(n.children,o,l,t);case Ta:s=8,o|=8;break;case hs:return e=Ue(12,n,t,o|2),e.elementType=hs,e.lanes=l,e;case gs:return e=Ue(13,n,t,o),e.elementType=gs,e.lanes=l,e;case ms:return e=Ue(19,n,t,o),e.elementType=ms,e.lanes=l,e;case yp:return ll(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mp:s=10;break e;case xp:s=9;break e;case La:s=11;break e;case Ia:s=14;break e;case Lt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ue(s,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function fn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function ll(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=yp,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function pc(e,t,n,r,o,l,s,a,c){return e=new lx(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ue(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(l),e}function sx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uh(e){if(!e)return Yt;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Le(n))return uf(e,n,t)}return t}function dh(e,t,n,r,o,l,s,a,c){return e=pc(n,r,!0,e,o,l,s,a,c),e.context=uh(null),n=e.current,r=ke(),o=Vt(n),l=gt(r,o),l.callback=t??null,Ut(n,l,o),e.current.lanes=o,wo(e,o,r),Ie(e,r),e}function sl(e,t,n,r){var o=t.current,l=ke(),s=Vt(o);return n=uh(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(o,t,s),e!==null&&(Ze(e,o,s,l),oi(e,o,s)),s}function Bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fc(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function ax(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}al.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));sl(e,t,null,null)};al.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){sl(null,e,null,null)}),t[yt]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var t=Up();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&Vp(e)}};function gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function cx(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=Bi(s);l.call(d)}}var s=dh(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=s,e[yt]=s.current,to(e.nodeType===8?e.parentNode:e),wn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var d=Bi(c);a.call(d)}}var c=pc(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=c,e[yt]=c.current,to(e.nodeType===8?e.parentNode:e),wn(function(){sl(t,c,n,r)}),c}function ul(e,t,n,r,o){var l=n._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var a=o;o=function(){var c=Bi(s);a.call(c)}}sl(t,s,e,o)}else s=cx(n,t,e,o,r);return Bi(s)}_p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(Da(t,n|1),Ie(t,oe()),!(O&6)&&(rr=oe()+500,Zt()))}break;case 13:wn(function(){var r=vt(e,1);if(r!==null){var o=ke();Ze(r,e,1,o)}}),fc(e,1)}};Ma=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=ke();Ze(t,e,134217728,n)}fc(e,134217728)}};Bp=function(e){if(e.tag===13){var t=Vt(e),n=vt(e,t);if(n!==null){var r=ke();Ze(n,e,t,r)}fc(e,t)}};Up=function(){return V};Wp=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Ss=function(e,t,n){switch(t){case"input":if(vs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=el(r);if(!o)throw Error(P(90));wp(r),vs(r,o)}}}break;case"textarea":jp(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};Tp=ac;Lp=wn;var ux={usingClientEntryPoint:!1,Events:[jo,Nn,el,Ep,Pp,ac]},Cr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dx={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rp(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Ji=Uo.inject(dx),lt=Uo}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(t))throw Error(P(200));return sx(e,t,null,n)};Ae.createRoot=function(e,t){if(!gc(e))throw Error(P(299));var n=!1,r="",o=ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=pc(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,to(e.nodeType===8?e.parentNode:e),new hc(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Rp(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return wn(e)};Ae.hydrate=function(e,t,n){if(!cl(t))throw Error(P(200));return ul(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!gc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",s=ph;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=dh(t,null,e,1,n??null,o,!1,l,s),e[yt]=t.current,to(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new al(t)};Ae.render=function(e,t,n){if(!cl(t))throw Error(P(200));return ul(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!cl(e))throw Error(P(40));return e._reactRootContainer?(wn(function(){ul(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ae.unstable_batchedUpdates=ac;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ul(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fh)}catch(e){console.error(e)}}fh(),pp.exports=Ae;var hh=pp.exports,gh,Au=hh;gh=Au.createRoot,Au.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(null,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const Ou="popstate";function px(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:s,hash:a}=r.location;return ia("",{pathname:l,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ui(o)}return hx(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fx(){return Math.random().toString(36).substr(2,8)}function Fu(e,t){return{usr:e.state,key:e.key,idx:t}}function ia(e,t,n,r){return n===void 0&&(n=null),uo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fr(t):t,{state:n,key:t&&t.key||r||fx()})}function Ui(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hx(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,s=o.history,a=Nt.Pop,c=null,d=x();d==null&&(d=0,s.replaceState(uo({},s.state,{idx:d}),""));function x(){return(s.state||{idx:null}).idx}function g(){a=Nt.Pop;let S=x(),h=S==null?null:S-d;d=S,c&&c({action:a,location:y.location,delta:h})}function m(S,h){a=Nt.Push;let p=ia(y.location,S,h);d=x()+1;let f=Fu(p,d),j=y.createHref(p);try{s.pushState(f,"",j)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(j)}l&&c&&c({action:a,location:y.location,delta:1})}function k(S,h){a=Nt.Replace;let p=ia(y.location,S,h);d=x();let f=Fu(p,d),j=y.createHref(p);s.replaceState(f,"",j),l&&c&&c({action:a,location:y.location,delta:0})}function w(S){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof S=="string"?S:Ui(S);return p=p.replace(/ $/,"%20"),Z(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return a},get location(){return e(o,s)},listen(S){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Ou,g),c=S,()=>{o.removeEventListener(Ou,g),c=null}},createHref(S){return t(o,S)},createURL:w,encodeLocation(S){let h=w(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:k,go(S){return s.go(S)}};return y}var _u;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_u||(_u={}));function gx(e,t,n){return n===void 0&&(n="/"),mx(e,t,n)}function mx(e,t,n,r){let o=typeof t=="string"?fr(t):t,l=or(o.pathname||"/",n);if(l==null)return null;let s=mh(e);xx(s);let a=null,c=Px(l);for(let d=0;a==null&&d<s.length;++d)a=Sx(s[d],c);return a}function mh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,s,a)=>{let c={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Qt([r,c.relativePath]),x=n.concat(c);l.children&&l.children.length>0&&(Z(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),mh(l.children,t,x,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:Cx(d,l.index),routesMeta:x})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,s);else for(let c of xh(l.path))o(l,s,c)}),t}function xh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let s=xh(r.join("/")),a=[];return a.push(...s.map(c=>c===""?l:[l,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function xx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$x(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yx=/^:[\w-]+$/,vx=3,wx=2,bx=1,jx=10,kx=-2,Bu=e=>e==="*";function Cx(e,t){let n=e.split("/"),r=n.length;return n.some(Bu)&&(r+=kx),t&&(r+=wx),n.filter(o=>!Bu(o)).reduce((o,l)=>o+(yx.test(l)?vx:l===""?bx:jx),r)}function $x(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Sx(e,t,n){let{routesMeta:r}=e,o={},l="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,x=l==="/"?t:t.slice(l.length)||"/",g=la({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},x),m=c.route;if(!g)return null;Object.assign(o,g.params),s.push({params:o,pathname:Qt([l,g.pathname]),pathnameBase:Rx(Qt([l,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(l=Qt([l,g.pathnameBase]))}return s}function la(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ex(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],s=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((d,x,g)=>{let{paramName:m,isOptional:k}=x;if(m==="*"){let y=a[g]||"";s=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[g];return k&&!w?d[m]=void 0:d[m]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:s,pattern:e}}function Ex(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Px(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Tx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lx=e=>Tx.test(e);function Ix(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?fr(e):e,l;if(n)if(Lx(n))l=n;else{if(n.includes("//")){let s=n;n=yh(n),mc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=Uu(n.substring(1),"/"):l=Uu(n,t)}else l=t;return{pathname:l,search:Dx(r),hash:Mx(o)}}function Uu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function xc(e,t){let n=zx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=fr(e):(o=uo({},e),Z(!o.pathname||!o.pathname.includes("?"),Xl("?","pathname","search",o)),Z(!o.pathname||!o.pathname.includes("#"),Xl("#","pathname","hash",o)),Z(!o.search||!o.search.includes("#"),Xl("#","search","hash",o)));let l=e===""||o.pathname==="",s=l?"/":o.pathname,a;if(s==null)a=n;else{let g=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),g-=1;o.pathname=m.join("/")}a=g>=0?t[g]:"/"}let c=Ix(o,a),d=s&&s!=="/"&&s.endsWith("/"),x=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||x)&&(c.pathname+="/"),c}const yh=e=>e.replace(/\/\/+/g,"/"),Qt=e=>yh(e.join("/")),Rx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Nx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vh=["post","put","patch","delete"];new Set(vh);const Ax=["get",...vh];new Set(Ax);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(null,arguments)}const dl=v.createContext(null),wh=v.createContext(null),jt=v.createContext(null),pl=v.createContext(null),kt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),bh=v.createContext(null);function Ox(e,t){let{relative:n}=t===void 0?{}:t;hr()||Z(!1);let{basename:r,navigator:o}=v.useContext(jt),{hash:l,pathname:s,search:a}=fl(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Qt([r,s])),o.createHref({pathname:c,search:a,hash:l})}function hr(){return v.useContext(pl)!=null}function nt(){return hr()||Z(!1),v.useContext(pl).location}function jh(e){v.useContext(jt).static||v.useLayoutEffect(e)}function en(){let{isDataRoute:e}=v.useContext(kt);return e?qx():Fx()}function Fx(){hr()||Z(!1);let e=v.useContext(dl),{basename:t,future:n,navigator:r}=v.useContext(jt),{matches:o}=v.useContext(kt),{pathname:l}=nt(),s=JSON.stringify(xc(o,n.v7_relativeSplatPath)),a=v.useRef(!1);return jh(()=>{a.current=!0}),v.useCallback(function(d,x){if(x===void 0&&(x={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let g=yc(d,JSON.parse(s),l,x.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Qt([t,g.pathname])),(x.replace?r.replace:r.push)(g,x.state,x)},[t,r,s,l,e])}function _x(){let{matches:e}=v.useContext(kt),t=e[e.length-1];return t?t.params:{}}function fl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(jt),{matches:o}=v.useContext(kt),{pathname:l}=nt(),s=JSON.stringify(xc(o,r.v7_relativeSplatPath));return v.useMemo(()=>yc(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function Bx(e,t){return Ux(e,t)}function Ux(e,t,n,r){hr()||Z(!1);let{navigator:o}=v.useContext(jt),{matches:l}=v.useContext(kt),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=nt(),x;if(t){var g;let S=typeof t=="string"?fr(t):t;c==="/"||(g=S.pathname)!=null&&g.startsWith(c)||Z(!1),x=S}else x=d;let m=x.pathname||"/",k=m;if(c!=="/"){let S=c.replace(/^\//,"").split("/");k="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=gx(e,{pathname:k}),y=Gx(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Qt([c,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Qt([c,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,n,r);return t&&y?v.createElement(pl.Provider,{value:{location:po({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Nt.Pop}},y):y}function Wx(){let e=Xx(),t=Nx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const Vx=v.createElement(Wx,null);class Hx extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(kt.Provider,{value:this.props.routeContext},v.createElement(bh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qx(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(dl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(kt.Provider,{value:t},r)}function Gx(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let x=s.findIndex(g=>g.route.id&&(a==null?void 0:a[g.route.id])!==void 0);x>=0||Z(!1),s=s.slice(0,Math.min(s.length,x+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let x=0;x<s.length;x++){let g=s[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=x),g.route.id){let{loaderData:m,errors:k}=n,w=g.route.loader&&m[g.route.id]===void 0&&(!k||k[g.route.id]===void 0);if(g.route.lazy||w){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((x,g,m)=>{let k,w=!1,y=null,S=null;n&&(k=a&&g.route.id?a[g.route.id]:void 0,y=g.route.errorElement||Vx,c&&(d<0&&m===0?(Zx("route-fallback"),w=!0,S=null):d===m&&(w=!0,S=g.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,m+1)),p=()=>{let f;return k?f=y:w?f=S:g.route.Component?f=v.createElement(g.route.Component,null):g.route.element?f=g.route.element:f=x,v.createElement(Qx,{match:g,routeContext:{outlet:x,matches:h,isDataRoute:n!=null},children:f})};return n&&(g.route.ErrorBoundary||g.route.errorElement||m===0)?v.createElement(Hx,{location:n.location,revalidation:n.revalidation,component:y,error:k,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var kh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kh||{}),Ch=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ch||{});function Kx(e){let t=v.useContext(dl);return t||Z(!1),t}function Yx(e){let t=v.useContext(wh);return t||Z(!1),t}function Jx(e){let t=v.useContext(kt);return t||Z(!1),t}function $h(e){let t=Jx(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function Xx(){var e;let t=v.useContext(bh),n=Yx(),r=$h();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qx(){let{router:e}=Kx(kh.UseNavigateStable),t=$h(Ch.UseNavigateStable),n=v.useRef(!1);return jh(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,po({fromRouteId:t},l)))},[e,t])}const Wu={};function Zx(e,t,n){Wu[e]||(Wu[e]=!0)}function e1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function t1(e){let{to:t,replace:n,state:r,relative:o}=e;hr()||Z(!1);let{future:l,static:s}=v.useContext(jt),{matches:a}=v.useContext(kt),{pathname:c}=nt(),d=en(),x=yc(t,xc(a,l.v7_relativeSplatPath),c,o==="path"),g=JSON.stringify(x);return v.useEffect(()=>d(JSON.parse(g),{replace:n,state:r,relative:o}),[d,g,o,n,r]),null}function Ln(e){Z(!1)}function n1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Nt.Pop,navigator:l,static:s=!1,future:a}=e;hr()&&Z(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:l,static:s,future:po({v7_relativeSplatPath:!1},a)}),[c,a,l,s]);typeof r=="string"&&(r=fr(r));let{pathname:x="/",search:g="",hash:m="",state:k=null,key:w="default"}=r,y=v.useMemo(()=>{let S=or(x,c);return S==null?null:{location:{pathname:S,search:g,hash:m,state:k,key:w},navigationType:o}},[c,x,g,m,k,w,o]);return y==null?null:v.createElement(jt.Provider,{value:d},v.createElement(pl.Provider,{children:n,value:y}))}function r1(e){let{children:t,location:n}=e;return Bx(sa(t),n)}new Promise(()=>{});function sa(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let l=[...t,o];if(r.type===v.Fragment){n.push.apply(n,sa(r.props.children,l));return}r.type!==Ln&&Z(!1),!r.props.index||!r.props.children||Z(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=sa(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(null,arguments)}function Sh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function o1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function i1(e,t){return e.button===0&&(!t||t==="_self")&&!o1(e)}function aa(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function l1(e,t){let n=aa(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}const s1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],a1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],c1="6";try{window.__reactRouterVersion=c1}catch{}const u1=v.createContext({isTransitioning:!1}),d1="startTransition",Vu=tg[d1];function p1(e){let{basename:t,children:n,future:r,window:o}=e,l=v.useRef();l.current==null&&(l.current=px({window:o,v5Compat:!0}));let s=l.current,[a,c]=v.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},x=v.useCallback(g=>{d&&Vu?Vu(()=>c(g)):c(g)},[c,d]);return v.useLayoutEffect(()=>s.listen(x),[s,x]),v.useEffect(()=>e1(r),[r]),v.createElement(n1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const f1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",h1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vc=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:s,state:a,target:c,to:d,preventScrollReset:x,viewTransition:g}=t,m=Sh(t,s1),{basename:k}=v.useContext(jt),w,y=!1;if(typeof d=="string"&&h1.test(d)&&(w=d,f1))try{let f=new URL(window.location.href),j=d.startsWith("//")?new URL(f.protocol+d):new URL(d),b=or(j.pathname,k);j.origin===f.origin&&b!=null?d=b+j.search+j.hash:y=!0}catch{}let S=Ox(d,{relative:o}),h=m1(d,{replace:s,state:a,target:c,preventScrollReset:x,relative:o,viewTransition:g});function p(f){r&&r(f),f.defaultPrevented||h(f)}return v.createElement("a",Wi({},m,{href:w||S,onClick:y||l?r:p,ref:n,target:c}))}),Eh=v.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:l="",end:s=!1,style:a,to:c,viewTransition:d,children:x}=t,g=Sh(t,a1),m=fl(c,{relative:g.relative}),k=nt(),w=v.useContext(wh),{navigator:y,basename:S}=v.useContext(jt),h=w!=null&&x1(m)&&d===!0,p=y.encodeLocation?y.encodeLocation(m).pathname:m.pathname,f=k.pathname,j=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(f=f.toLowerCase(),j=j?j.toLowerCase():null,p=p.toLowerCase()),j&&S&&(j=or(j,S)||j);const b=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=f===p||!s&&f.startsWith(p)&&f.charAt(b)==="/",$=j!=null&&(j===p||!s&&j.startsWith(p)&&j.charAt(p.length)==="/"),C={isActive:E,isPending:$,isTransitioning:h},z=E?r:void 0,L;typeof l=="function"?L=l(C):L=[l,E?"active":null,$?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let A=typeof a=="function"?a(C):a;return v.createElement(vc,Wi({},g,{"aria-current":z,className:L,ref:n,style:A,to:c,viewTransition:d}),typeof x=="function"?x(C):x)});var ca;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ca||(ca={}));var Hu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hu||(Hu={}));function g1(e){let t=v.useContext(dl);return t||Z(!1),t}function m1(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:s,viewTransition:a}=t===void 0?{}:t,c=en(),d=nt(),x=fl(e,{relative:s});return v.useCallback(g=>{if(i1(g,n)){g.preventDefault();let m=r!==void 0?r:Ui(d)===Ui(x);c(e,{replace:m,state:o,preventScrollReset:l,relative:s,viewTransition:a})}},[d,c,x,r,o,n,e,l,s,a])}function Ph(e){let t=v.useRef(aa(e)),n=v.useRef(!1),r=nt(),o=v.useMemo(()=>l1(r.search,n.current?null:t.current),[r.search]),l=en(),s=v.useCallback((a,c)=>{const d=aa(typeof a=="function"?a(o):a);n.current=!0,l("?"+d,c)},[l,o]);return[o,s]}function x1(e,t){t===void 0&&(t={});let n=v.useContext(u1);n==null&&Z(!1);let{basename:r}=g1(ca.useViewTransitionState),o=fl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=or(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=or(n.nextLocation.pathname,r)||n.nextLocation.pathname;return la(o.pathname,s)!=null||la(o.pathname,l)!=null}var K="-ms-",Hr="-moz-",B="-webkit-",Th="comm",hl="rule",wc="decl",y1="@import",v1="@namespace",Lh="@keyframes",w1="@layer",Ih=Math.abs,bc=String.fromCharCode,ua=Object.assign;function b1(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function zh(e){return e.trim()}function dt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function di(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function bn(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Rh(e){return e.length}function zr(e,t){return t.push(e),e}function j1(e,t){return e.map(t).join("")}function Qu(e,t){return e.filter(function(n){return!dt(n,t)})}var gl=1,ir=1,Dh=0,Qe=0,le=0,gr="";function ml(e,t,n,r,o,l,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:gl,column:ir,length:s,return:"",siblings:a}}function Tt(e,t){return ua(ml("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function En(e){for(;e.root;)e=Tt(e.root,{children:[e]});zr(e,e.siblings)}function k1(){return le}function C1(){return le=Qe>0?ue(gr,--Qe):0,ir--,le===10&&(ir=1,gl--),le}function et(){return le=Qe<Dh?ue(gr,Qe++):0,ir++,le===10&&(ir=1,gl++),le}function At(){return ue(gr,Qe)}function pi(){return Qe}function xl(e,t){return bn(gr,e,t)}function fo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $1(e){return gl=ir=1,Dh=Je(gr=e),Qe=0,[]}function S1(e){return gr="",e}function ql(e){return zh(xl(Qe-1,da(e===91?e+2:e===40?e+1:e)))}function E1(e){for(;(le=At())&&le<33;)et();return fo(e)>2||fo(le)>3?"":" "}function P1(e,t){for(;--t&&et()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return xl(e,pi()+(t<6&&At()==32&&et()==32))}function da(e){for(;et();)switch(le){case e:return Qe;case 34:case 39:e!==34&&e!==39&&da(le);break;case 40:e===41&&da(e);break;case 92:et();break}return Qe}function T1(e,t){for(;et()&&e+le!==57;)if(e+le===84&&At()===47)break;return"/*"+xl(t,Qe-1)+"*"+bc(e===47?e:et())}function L1(e){for(;!fo(At());)et();return xl(e,Qe)}function I1(e){return S1(fi("",null,null,null,[""],e=$1(e),0,[0],e))}function fi(e,t,n,r,o,l,s,a,c){for(var d=0,x=0,g=s,m=0,k=0,w=0,y=1,S=1,h=1,p=0,f="",j=o,b=l,E=r,$=f;S;)switch(w=p,p=et()){case 40:if(w!=108&&ue($,g-1)==58){di($+=M(ql(p),"&","&\f"),"&\f",Ih(d?a[d-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:$+=ql(p);break;case 9:case 10:case 13:case 32:$+=E1(w);break;case 92:$+=P1(pi()-1,7);continue;case 47:switch(At()){case 42:case 47:zr(z1(T1(et(),pi()),t,n,c),c),(fo(w||1)==5||fo(At()||1)==5)&&Je($)&&bn($,-1,void 0)!==" "&&($+=" ");break;default:$+="/"}break;case 123*y:a[d++]=Je($)*h;case 125*y:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+x:h==-1&&($=M($,/\f/g,"")),k>0&&(Je($)-g||y===0&&w===47)&&zr(k>32?Ku($+";",r,n,g-1,c):Ku(M($," ","")+";",r,n,g-2,c),c);break;case 59:$+=";";default:if(zr(E=Gu($,t,n,d,x,o,a,f,j=[],b=[],g,l),l),p===123)if(x===0)fi($,t,E,E,j,l,g,a,b);else{switch(m){case 99:if(ue($,3)===110)break;case 108:if(ue($,2)===97)break;default:x=0;case 100:case 109:case 115:}x?fi(e,E,E,r&&zr(Gu(e,E,E,0,0,o,a,f,o,j=[],g,b),b),o,b,g,a,r?j:b):fi($,E,E,E,[""],b,0,a,b)}}d=x=k=0,y=h=1,f=$="",g=s;break;case 58:g=1+Je($),k=w;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&C1()==125)continue}switch($+=bc(p),p*y){case 38:h=x>0?1:($+="\f",-1);break;case 44:a[d++]=(Je($)-1)*h,h=1;break;case 64:At()===45&&($+=ql(et())),m=At(),x=g=Je(f=$+=L1(pi())),p++;break;case 45:w===45&&Je($)==2&&(y=0)}}return l}function Gu(e,t,n,r,o,l,s,a,c,d,x,g){for(var m=o-1,k=o===0?l:[""],w=Rh(k),y=0,S=0,h=0;y<r;++y)for(var p=0,f=bn(e,m+1,m=Ih(S=s[y])),j=e;p<w;++p)(j=zh(S>0?k[p]+" "+f:M(f,/&\f/g,k[p])))&&(c[h++]=j);return ml(e,t,n,o===0?hl:a,c,d,x,g)}function z1(e,t,n,r){return ml(e,t,n,Th,bc(k1()),bn(e,2,-2),0,r)}function Ku(e,t,n,r,o){return ml(e,t,n,wc,bn(e,0,r),bn(e,r+1,-1),r,o)}function Mh(e,t,n){switch(b1(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return B+e+e;case 4855:return B+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Hr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Hr+e+K+e+e;case 5936:switch(ue(e,t+11)){case 114:return B+e+K+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+K+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+K+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+K+e+e;case 6165:return B+e+K+"flex-"+e+e;case 5187:return B+e+M(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return B+e+K+"flex-item-"+M(e,/flex-|-self/g,"")+(dt(e,/flex-|baseline/)?"":K+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return B+e+K+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+K+M(e,"shrink","negative")+e;case 5292:return B+e+K+M(e,"basis","preferred-size")+e;case 6060:return B+"box-"+M(e,"-grow","")+B+e+K+M(e,"grow","positive")+e;case 4554:return B+M(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+K+"flex-pack:$3"),/space-between/,"justify")+B+e+e;case 4200:if(!dt(e,/flex-|baseline/))return K+"grid-column-align"+bn(e,t)+e;break;case 2592:case 3360:return K+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,dt(r.props,/grid-\w+-end/)})?~di(e+(n=n[t].value),"span",0)?e:K+M(e,"-start","")+e+K+"grid-row-span:"+(~di(n,"span",0)?dt(n,/\d+/):+dt(n,/\d+/)-+dt(e,/\d+/))+";":K+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return dt(r.props,/grid-\w+-start/)})?e:K+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Hr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~di(e,"stretch",0)?Mh(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,s,a,c,d){return K+o+":"+l+d+(s?K+o+"-span:"+(a?c:+c-+l)+d:"")+e});case 4949:if(ue(e,t+6)===121)return M(e,":",":"+B)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ue(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+K+"$2box$3")+e;case 100:return M(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Vi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function R1(e,t,n,r){switch(e.type){case w1:if(e.children.length)break;case y1:case v1:case wc:return e.return=e.return||e.value;case Th:return"";case Lh:return e.return=e.value+"{"+Vi(e.children,r)+"}";case hl:if(!Je(e.value=e.props.join(",")))return""}return Je(n=Vi(e.children,r))?e.return=e.value+"{"+n+"}":""}function D1(e){var t=Rh(e);return function(n,r,o,l){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,l)||"";return s}}function M1(e){return function(t){t.root||(t=t.return)&&e(t)}}function N1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wc:e.return=Mh(e.value,e.length,n);return;case Lh:return Vi([Tt(e,{value:M(e.value,"@","@"+B)})],r);case hl:if(e.length)return j1(n=e.props,function(o){switch(dt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":En(Tt(e,{props:[M(o,/:(read-\w+)/,":"+Hr+"$1")]})),En(Tt(e,{props:[o]})),ua(e,{props:Qu(n,r)});break;case"::placeholder":En(Tt(e,{props:[M(o,/:(plac\w+)/,":"+B+"input-$1")]})),En(Tt(e,{props:[M(o,/:(plac\w+)/,":"+Hr+"$1")]})),En(Tt(e,{props:[M(o,/:(plac\w+)/,K+"input-$1")]})),En(Tt(e,{props:[o]})),ua(e,{props:Qu(n,r)});break}return""})}}var Yn={},Zl,es;const lr=typeof process<"u"&&Yn!==void 0&&(Yn.REACT_APP_SC_ATTR||Yn.SC_ATTR)||"data-styled",Nh="active",Ah="data-styled-version",yl="6.4.2",jc=`/*!sc*/
`,Qr=typeof window<"u"&&typeof document<"u";function Yu(e){if(typeof process<"u"&&Yn!==void 0){const t=Yn[e];if(t!==void 0&&t!=="")return t!=="false"}}const A1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(es=(Zl=Yu("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Zl!==void 0?Zl:Yu("SC_DISABLE_SPEEDY"))!==null&&es!==void 0?es:typeof process<"u"&&Yn!==void 0&&!1),O1="sc-keyframes-",F1={};function sr(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let hi=new Map,Hi=new Map,gi=1;const Wo=e=>{if(hi.has(e))return hi.get(e);for(;Hi.has(gi);)gi++;const t=gi++;return hi.set(e,t),Hi.set(t,e),t},_1=e=>Hi.get(e),B1=(e,t)=>{gi=t+1,hi.set(e,t),Hi.set(t,e)},kc=Object.freeze([]),ar=Object.freeze({});function Oh(e,t,n=ar){return e.theme!==n.theme&&e.theme||t||n.theme}const U1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,W1=/(^-|-$)/g;function Fh(e){return e.replace(U1,"-").replace(W1,"")}const V1=/(a)(d)/gi,Ju=e=>String.fromCharCode(e+(e>25?39:97));function _h(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ju(t%52)+n;return(Ju(t%52)+n).replace(V1,"$1-$2")}const pa=5381,hn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Bh=e=>hn(pa,e);function Uh(e){return _h(Bh(e)>>>0)}function H1(e){return e.displayName||e.name||"Component"}function fa(e){return typeof e=="string"&&!0}function Q1(e){return fa(e)?`styled.${e}`:`Styled(${H1(e)})`}const Wh=Symbol.for("react.memo"),G1=Symbol.for("react.forward_ref"),K1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Y1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J1={[G1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Wh]:Vh};function Xu(e){return("type"in(t=e)&&t.type.$$typeof)===Wh?Vh:"$$typeof"in e?J1[e.$$typeof]:K1;var t}const X1=Object.defineProperty,q1=Object.getOwnPropertyNames,Z1=Object.getOwnPropertySymbols,ey=Object.getOwnPropertyDescriptor,ty=Object.getPrototypeOf,ny=Object.prototype;function Hh(e,t,n){if(typeof t!="string"){const r=ty(t);r&&r!==ny&&Hh(e,r,n);const o=q1(t).concat(Z1(t)),l=Xu(e),s=Xu(t);for(let a=0;a<o.length;++a){const c=o[a];if(!(c in Y1||n&&n[c]||s&&c in s||l&&c in l)){const d=ey(t,c);try{X1(e,c,d)}catch{}}}}return e}function mr(e){return typeof e=="function"}const ry=Symbol.for("react.forward_ref");function Cc(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===ry&&"styledComponentId"in e}function Rr(e,t){return e&&t?e+" "+t:e||t||""}function ha(e,t){return e.join("")}function ho(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ga(e,t,n=!1){if(!n&&!ho(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ga(e[r],t[r]);else if(ho(t))for(const r in t)e[r]=ga(e[r],t[r]);return e}function Qh(e,t){Object.defineProperty(e,"toString",{value:t})}const oy=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,l=o.length;let s=l;for(;e>=s;)if(s<<=1,s<0)throw sr(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(let a=l;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,l=t.length;o<l;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let l=r;l<o;l++)t+=this.tag.getRule(l)+jc;return t}},iy=`style[${lr}][${Ah}="${yl}"]`,ly=new RegExp(`^${lr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),qu=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,ma=e=>{if(!e)return document;if(qu(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(qu(t))return t}return document},sy=(e,t,n)=>{const r=n.split(",");let o;for(let l=0,s=r.length;l<s;l++)(o=r[l])&&e.registerName(t,o)},ay=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(jc),o=[];for(let l=0,s=r.length;l<s;l++){const a=r[l].trim();if(!a)continue;const c=a.match(ly);if(c){const d=0|parseInt(c[1],10),x=c[2];d!==0&&(B1(x,d),sy(e,x,c[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(a)}},ts=e=>{const t=ma(e.options.target).querySelectorAll(iy);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(lr)!==Nh&&(ay(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let $r=!1;function cy(){if($r!==!1)return $r;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return $r=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return $r=t.getAttribute("content")||void 0}return $r=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Gh=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),l=(c=>{const d=Array.from(c.querySelectorAll(`style[${lr}]`));return d[d.length-1]})(r),s=l!==void 0?l.nextSibling:null;o.setAttribute(lr,Nh),o.setAttribute(Ah,yl);const a=t||cy();return a&&o.setAttribute("nonce",a),r.insertBefore(o,s),o},uy=class{constructor(e,t){this.element=Gh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,s=o.length;l<s;l++){const a=o[l];if(a.ownerNode===n)return a}throw sr(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},dy=class{constructor(e,t){this.element=Gh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Zu=Qr;const py={isServer:!Qr,useCSSOMInjection:!A1};class Co{static registerId(t){return Wo(t)}constructor(t=ar,n={},r){this.options=Object.assign(Object.assign({},py),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qr&&Zu&&(Zu=!1,ts(this)),Qh(this,()=>(o=>{const l=o.getTag(),{length:s}=l;let a="";for(let c=0;c<s;c++){const d=_1(c);if(d===void 0)continue;const x=o.names.get(d);if(x===void 0||!x.size)continue;const g=l.getGroup(c);if(g.length===0)continue;const m=lr+".g"+c+'[id="'+d+'"]';let k="";for(const w of x)w.length>0&&(k+=w+",");a+=g+m+'{content:"'+k+'"}'+jc}return a})(this))}rehydrate(){!this.server&&Qr&&ts(this)}reconstructWithOptions(t,n=!0){const r=new Co(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Qr&&t.target!==this.options.target&&ma(this.options.target)!==ma(t.target)&&ts(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new uy(r,o):new dy(r,o))(this.options),new oy(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Wo(t),t.startsWith(O1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Wo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Wo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Kh=new WeakSet,fy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hy(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in fy||e.startsWith("--")?String(t).trim():t+"px"}const an=47;function ed(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const gy=Symbol.for("sc-keyframes");function my(e){return typeof e=="object"&&e!==null&&gy in e}function Yh(e){return mr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Jh=e=>e==null||e===!1||e==="",xy=Symbol.for("react.client.reference");function td(e){return e.$$typeof===xy}function Xh(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Jh(r)&&(Array.isArray(r)&&Kh.has(r)||mr(r)?t.push(ed(n)+":",r,";"):ho(r)?(t.push(n+" {"),Xh(r,t),t.push("}")):t.push(ed(n)+": "+hy(n,r)+";"))}}function Gt(e,t,n,r,o=[]){if(Jh(e))return o;const l=typeof e;if(l==="string")return o.push(e),o;if(l==="function"){if(td(e))return o;if(Yh(e)&&t){const s=e(t);return Gt(s,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Gt(e[s],t,n,r,o);return o}return Cc(e)?(o.push(`.${e.styledComponentId}`),o):my(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):td(e)?o:ho(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Xh(e,o),o):(o.push(e.toString()),o)}const yy=Bh(yl);class vy{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=hn(yy,n),this.baseStyle=r,Co.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")l+=a;else if(a)if(Yh(a)){const c=a(t);typeof c=="string"?l+=c:c!=null&&c!==!1&&(l+=ha(Gt(c,t,n,r)))}else l+=ha(Gt(a,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+l:l;let a=this.dynamicNameCache.get(s);if(!a){if(a=_h(hn(hn(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const c=r(l,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,c)}o=Rr(o,a)}}return o}}const wy=/&/g;function qh(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ns(e){const t=e.length;let n="",r=0,o=0,l=0,s=!1,a=!1;for(let c=0;c<t;c++){const d=e.charCodeAt(c);if(l!==0||s||d!==an||e.charCodeAt(c+1)!==42)if(s)d===42&&e.charCodeAt(c+1)===an&&(s=!1,c++);else if(d!==34&&d!==39||qh(e,c)){if(l===0)if(d===123)o++;else if(d===125){if(o--,o<0){a=!0;let x=c+1;for(;x<t;){const g=e.charCodeAt(x);if(g===59||g===10)break;x++}x<t&&e.charCodeAt(x)===59&&x++,o=0,c=x-1,r=x;continue}o===0&&(n+=e.substring(r,c+1),r=c+1)}else d===59&&o===0&&(n+=e.substring(r,c+1),r=c+1)}else l===0?l=d:l===d&&(l=0);else s=!0,c++}return a||o!==0||l!==0?(r<t&&o===0&&l===0&&(n+=e.substring(r)),n):e}function Zh(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const l=e[o];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const s=l.props,a=[];for(let c=0;c<s.length;c++)a[c]=n+s[c];l.props=a}Array.isArray(l.children)&&l.type!=="@keyframes"&&Zh(l.children,t)}return e}function by({options:e=ar,plugins:t=kc}=ar){let n,r,o;const l=(m,k,w)=>w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?`.${n}`:m,s=t.slice();s.push(m=>{m.type===hl&&m.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),m.props[0]=m.props[0].replace(wy,r).replace(o,l))}),e.prefix&&s.push(N1),s.push(R1);let a=[];const c=D1(s.concat(M1(m=>a.push(m)))),d=(m,k="",w="",y="&")=>{n=y,r=k,o=void 0;const S=function(p){const f=p.indexOf("//")!==-1,j=p.indexOf("}")!==-1;if(!f&&!j)return p;if(!f)return ns(p);const b=p.length;let E="",$=0,C=0,z=0,L=0,A=0,te=!1;for(;C<b;){const F=p.charCodeAt(C);if(F!==34&&F!==39||qh(p,C))if(z===0)if(F===an&&C+1<b&&p.charCodeAt(C+1)===42){for(C+=2;C+1<b&&(p.charCodeAt(C)!==42||p.charCodeAt(C+1)!==an);)C++;C+=2}else if(F!==40)if(F!==41)if(L>0)C++;else if(F===42&&C+1<b&&p.charCodeAt(C+1)===an)E+=p.substring($,C),C+=2,$=C,te=!0;else if(F===an&&C+1<b&&p.charCodeAt(C+1)===an){for(E+=p.substring($,C);C<b&&p.charCodeAt(C)!==10;)C++;$=C,te=!0}else F===123?A++:F===125&&A--,C++;else L>0&&L--,C++;else L++,C++;else C++;else z===0?z=F:z===F&&(z=0),C++}return te?($<b&&(E+=p.substring($)),A===0?E:ns(E)):A===0?p:ns(p)}(m);let h=I1(w||k?w+" "+k+" { "+S+" }":S);return e.namespace&&(h=Zh(h,e.namespace)),a=[],Vi(h,c),a},x=e;let g=pa;for(let m=0;m<t.length;m++)t[m].name||sr(15),g=hn(g,t[m].name);return x!=null&&x.namespace&&(g=hn(g,x.namespace)),x!=null&&x.prefix&&(g=hn(g,"p")),d.hash=g!==pa?g.toString():"",d}const jy=new Co,ky=by(),e0=ve.createContext({shouldForwardProp:void 0,styleSheet:jy,stylis:ky,stylisPlugins:void 0});e0.Consumer;function t0(){return ve.useContext(e0)}const go=ve.createContext(void 0);go.Consumer;function Cy(e){const t=ve.useContext(go),n=ve.useMemo(()=>function(r,o){if(!r)throw sr(14);if(mr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw sr(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?ve.createElement(go.Provider,{value:n},e.children):null}const nd=Object.prototype.hasOwnProperty,rs={};function $y(e,t){const n=typeof e!="string"?"sc":Fh(e);rs[n]=(rs[n]||0)+1;const r=n+"-"+Uh(yl+n+rs[n]);return t?t+"-"+r:r}function Sy(e,t,n){const r=Cc(e),o=e,l=!fa(e),{attrs:s=kc,componentId:a=$y(t.displayName,t.parentComponentId),displayName:c=Q1(e)}=t,d=t.displayName&&t.componentId?Fh(t.displayName)+"-"+t.componentId:t.componentId||a,x=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const y=o.shouldForwardProp;if(t.shouldForwardProp){const S=t.shouldForwardProp;g=(h,p)=>y(h,p)&&S(h,p)}else g=y}const m=new vy(n,d,r?o.componentStyle:void 0);function k(y,S){return function(h,p,f){const{attrs:j,componentStyle:b,defaultProps:E,foldedComponentIds:$,styledComponentId:C,target:z}=h,L=ve.useContext(go),A=t0(),te=h.shouldForwardProp||A.shouldForwardProp,F=Oh(p,L,E)||ar;let Se,tn;{const R=ve.useRef(null),D=R.current;if(D!==null&&D[1]===F&&D[2]===A.styleSheet&&D[3]===A.stylis&&D[7]===b&&function(H,_,ae){const ne=H,ie=_;let ze=0;for(const Fe in ie)if(nd.call(ie,Fe)&&(ze++,ne[Fe]!==ie[Fe]))return!1;return ze===ae}(D[0],p,D[4]))Se=D[5],tn=D[6];else{Se=function(_,ae,ne){const ie=Object.assign(Object.assign({},ae),{className:void 0,theme:ne}),ze=_.length>1;for(let Fe=0;Fe<_.length;Fe++){const Cl=_[Fe],$o=mr(Cl)?Cl(ze?Object.assign({},ie):ie):Cl;for(const $t in $o)$t==="className"?ie.className=Rr(ie.className,$o[$t]):$t==="style"?ie.style=Object.assign(Object.assign({},ie.style),$o[$t]):$t in ae&&ae[$t]===void 0||(ie[$t]=$o[$t])}return"className"in ae&&typeof ae.className=="string"&&(ie.className=Rr(ie.className,ae.className)),ie}(j,p,F),tn=function(_,ae,ne,ie){return _.generateAndInjectStyles(ae,ne,ie)}(b,Se,A.styleSheet,A.stylis);let H=0;for(const _ in p)nd.call(p,_)&&H++;R.current=[p,F,A.styleSheet,A.stylis,H,Se,tn,b]}}const Ct=Se.as||z,nn=function(R,D,H,_){const ae={};for(const ne in R)R[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&R.theme===H||(ne==="forwardedAs"?ae.as=R.forwardedAs:_&&!_(ne,D)||(ae[ne]=R[ne]));return ae}(Se,Ct,F,te);let T=Rr($,C);return tn&&(T+=" "+tn),Se.className&&(T+=" "+Se.className),nn[fa(Ct)&&Ct.includes("-")?"class":"className"]=T,f&&(nn.ref=f),v.createElement(Ct,nn)}(w,y,S)}k.displayName=c;let w=ve.forwardRef(k);return w.attrs=x,w.componentStyle=m,w.displayName=c,w.shouldForwardProp=g,w.foldedComponentIds=r?Rr(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=d,w.target=r?o.target:e,Object.defineProperty(w,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?function(S,...h){for(const p of h)ga(S,p,!0);return S}({},o.defaultProps,y):y}}),Qh(w,()=>`.${w.styledComponentId}`),l&&Hh(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}var Ey=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function rd(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const od=e=>(Kh.add(e),e);function n0(e,...t){if(mr(e)||ho(e))return od(Gt(rd(kc,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Gt(n):od(Gt(rd(n,t)))}function xa(e,t,n=ar){if(!t)throw sr(1,t);const r=(o,...l)=>e(t,n,n0(o,...l));return r.attrs=o=>xa(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>xa(e,t,Object.assign(Object.assign({},n),o)),r}const r0=e=>xa(Sy,e),u=r0;Ey.forEach(e=>{u[e]=r0(e)});class Py{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const l=r[o];if(mr(l)&&!Cc(l))return!1}return!0}(t),Co.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(l,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&s){const a=s.rules,c=this.instanceRules.get(t).rules;if(a.length===c.length){let d=!0;for(let x=0;x<a.length;x++)if(a[x]!==c[x]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const l=ha(Gt(this.rules,n,r,o)),s={name:this.componentId+t,rules:o(l,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function Ty(e,...t){const n=n0(e,...t),r=`sc-global-${Uh(JSON.stringify(n))}`,o=new Py(n,r),l=a=>{const c=t0(),d=ve.useContext(go);let x;{const g=ve.useRef(null);g.current===null&&(g.current=c.styleSheet.allocateGSInstance(r)),x=g.current}c.styleSheet.server&&s(x,a,c.styleSheet,d,c.stylis);{const g=o.isStatic?[x,c.styleSheet,o]:[x,a,c.styleSheet,d,c.stylis,o],m=ve.useRef(o);ve.useLayoutEffect(()=>{c.styleSheet.server||(m.current!==o&&(c.styleSheet.clearRules(r),m.current=o),s(x,a,c.styleSheet,d,c.stylis))},g),ve.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(x,c.styleSheet)},[x,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(x),null};function s(a,c,d,x,g){if(o.isStatic)o.renderStyles(a,F1,d,g);else{const m=Object.assign(Object.assign({},c),{theme:Oh(c,x,l.defaultProps)});o.renderStyles(a,m,d,g)}}return ve.memo(l)}const Ly={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},id=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),Iy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),zy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),i.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ry=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),i.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),i.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),i.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Dy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),My=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Ny=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ay=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),i.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Oy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),i.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),i.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),o0=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),mi=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Sr=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Fy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),i.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),_y=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),$c=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),i0=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Qi=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),ld=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),mt=({size:e=14,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),vl=({size:e=14,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),ya=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),By=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Jn=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),Uy=({size:e=32,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),Wy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),Vy=({size:e=32,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),sd=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Gi=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),i.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),i.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),Hy=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Qy=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),ad=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),i.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),l0=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Gy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),i.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),Sc=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Ec=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M11 4h5v5M16 4l-8 8M8 6H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Ky=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 3V4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})}),mo=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),i.jsx("circle",{cx:"10",cy:"10",r:"3.5",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M7.53 7.53 4.05 4.05M12.47 12.47l3.48 3.48M12.47 7.53l3.48-3.48M7.53 12.47l-3.48 3.48",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Yy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"5",y:"5",width:"10",height:"10",rx:"1",stroke:t,strokeWidth:"1.5"}),i.jsx("rect",{x:"7.5",y:"7.5",width:"5",height:"5",rx:"0.5",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M8 2v3M12 2v3M8 15v3M12 15v3M2 8h3M2 12h3M15 8h3M15 12h3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]});function jn(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return i.jsx(id,{...r});case"settings":return i.jsx(Iy,{...r});case"shield":return i.jsx(zy,{...r});case"hierarchy":return i.jsx(Ry,{...r});case"cycle":return i.jsx(Dy,{...r});case"code":return i.jsx(My,{...r});case"globe":return i.jsx(Ny,{...r});case"document":return i.jsx(Ay,{...r});case"mobile":return i.jsx(Oy,{...r});case"sparkle":return i.jsx(o0,{...r});case"envelope":return i.jsx(mi,{...r});case"key":return i.jsx(By,{...r});case"atom":return i.jsx(Wy,{...r});case"chip":return i.jsx(Yy,{...r});default:return i.jsx(id,{...r})}}const s0=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],a0=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],Pn=e=>[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],sn={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"Inventory",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"Automation",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"Integrations",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"Release security",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"Signing",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"Integrations",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"Manage CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"Revocation & validation",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"Configuration",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:Pn("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:Pn("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:Pn("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:Pn("device-trust")},"iot-trust":{id:"iot-trust",label:"IoT Trust",route:"/iot-trust",ariaLabel:"IoT Trust navigation",sections:Pn("iot-trust")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:Pn("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing and subscriptions",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]},{title:"Self-service",isSelfService:!0,isNavParent:!0,defaultExpanded:!0,items:[{label:"Receipts and invoices",route:"/settings/billing/receipts"},{label:"Payment details",route:"/settings/billing/payment-details"}]},{title:"DigiCert products",isNavParent:!0,defaultExpanded:!0,items:[{label:"All products",route:"/settings/billing/all-products"},{label:"CertCentral",route:"/certcentral"},{label:"Content Trust",route:"/content-trust"},{label:"Device Trust",route:"/device-trust"},{label:"DigiCert DNS",route:"/dns"},{label:"Private CA",route:"/private-ca"},{label:"Software Trust",route:"/software-trust"},{label:"Trust Lifecycle",route:"/trust-lifecycle"},{label:"Valimail",route:"/valimail"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},Jy={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/iot-trust":"IoT Trust","/iot-trust/dashboard":"Dashboard","/iot-trust/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/billing/all-products":"Explore DigiCert products","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},Xy=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],qy=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],Zy=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],ev=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/support","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/iot-trust","/iot-trust/dashboard","/iot-trust/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/billing/all-products","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],tv=u.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 240px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08);
  z-index: 1100;
  overflow: hidden;
  animation: dropIn 0.12s ease;

  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`,nv=u.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,cd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,ud=u.a`
  display: block;
  padding: 9px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.12s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue300};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }
`;function rv({onClose:e,onSelectProduct:t}){const n=en(),r=o=>{t(o.productId),n(o.route),e()};return i.jsxs(tv,{role:"menu","aria-label":"Settings menu",children:[i.jsx(nv,{children:"Settings"}),i.jsx(cd,{}),Xy.map(o=>i.jsx(ud,{href:o.route,role:"menuitem",onClick:l=>{l.preventDefault(),r(o)},children:o.label},o.route)),i.jsx(cd,{}),qy.map(o=>i.jsx(ud,{href:o.route,role:"menuitem",onClick:l=>{l.preventDefault(),r(o)},children:o.label},o.route))]})}const ov=u.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 220px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08);
  z-index: 1100;
  overflow: hidden;
  animation: dropIn 0.12s ease;

  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`,iv=u.div`
  padding: 4px 0;
`,lv=u.a`
  display: block;
  padding: 9px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.12s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue300};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }
`;function sv({onClose:e}){return i.jsx(ov,{role:"menu","aria-label":"Help menu",children:i.jsx(iv,{children:Zy.map(t=>i.jsx(lv,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const av=u.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 220px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08);
  z-index: 1100;
  overflow: hidden;
  animation: dropIn 0.12s ease;

  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`,cv=u.div`
  padding: 12px 16px;
`,uv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,dv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,dd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,pv=u.div`
  padding: 4px 0;
`,pd=u.a`
  display: block;
  padding: 9px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.12s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue300};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }

  &[data-destructive='true'] {
    color: ${({theme:e})=>e.colors.error};
    &:hover {
      background: #FEF2F2;
      color: ${({theme:e})=>e.colors.error};
    }
  }
`;function fv({onClose:e,onSelectProduct:t}){const n=en(),r=o=>{o.preventDefault(),t("profile"),n("/profile"),e()};return i.jsxs(av,{role:"menu","aria-label":"User profile menu",children:[i.jsxs(cv,{children:[i.jsx(uv,{children:"Deepika Chauhan"}),i.jsx(dv,{children:"deepika.chauhan@digicert.com"})]}),i.jsx(dd,{}),i.jsxs(pv,{children:[i.jsx(pd,{href:"/profile",role:"menuitem",onClick:r,children:"My profile"}),i.jsx(dd,{}),i.jsx(pd,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const hv=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,gv=u.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 380px;
  height: 100vh;
  background: #ffffff;
  z-index: 1200;
  transform: translateX(${({$open:e})=>e?"0":"100%"});
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0,0,0,0.15);
`,mv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,xv=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,yv=u.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  transition: background 0.15s;
  font-size: 18px;
  line-height: 1;

  &:hover { background: ${({theme:e})=>e.colors.neutral100}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,vv=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,wv=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`,bv=u.button`
  padding: 10px 24px;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  border: none;
  border-radius: 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`;function jv({open:e,onClose:t}){const n=v.useRef(null),r=v.useRef(null);return v.useEffect(()=>{var l;if(!e)return;(l=n.current)==null||l.focus();const o=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const c=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),d=c[0],x=c[c.length-1];s.shiftKey&&document.activeElement===d?(s.preventDefault(),x.focus()):!s.shiftKey&&document.activeElement===x&&(s.preventDefault(),d.focus())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),i.jsxs(i.Fragment,{children:[i.jsx(hv,{$open:e,onClick:t,"aria-hidden":"true"}),i.jsxs(gv,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[i.jsxs(mv,{children:[i.jsx(xv,{id:"cart-heading",children:"Cart"}),i.jsx(yv,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),i.jsxs(vv,{children:[i.jsx(wv,{children:"Your cart is empty."}),i.jsx(bv,{onClick:t,children:"Continue shopping"})]})]})]})}const kv=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  right: 0;
  width: 400px;
  bottom: 0;
  background: #ffffff;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0,0,0,0.12);
  border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
  transform: translateX(${({$open:e})=>e?"0":"100%"});
  transition: transform 0.2s ease;
`,Cv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,$v=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Sv=u.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 18px;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.neutral100}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Ev=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`,Pv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Tv=u.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,Lv=u.input`
  flex: 1;
  padding: 9px 12px;
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  outline: none;

  &:focus {
    border-color: ${({theme:e})=>e.colors.blue300};
    box-shadow: 0 0 0 2px rgba(1, 116, 195, 0.2);
  }

  &::placeholder { color: ${({theme:e})=>e.colors.neutral500}; }
`,Iv=u.button`
  padding: 9px 16px;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`;function zv({open:e,onClose:t}){const n=v.useRef(null);return v.useEffect(()=>{const r=o=>{o.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),i.jsxs(kv,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[i.jsxs(Cv,{children:[i.jsx($v,{children:"AI Assist"}),i.jsx(Sv,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),i.jsxs(Ev,{children:[i.jsx(Pv,{children:"How can I help you today?"}),i.jsxs(Tv,{children:[i.jsx(Lv,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),i.jsx(Iv,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const Rv=u.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({theme:e})=>e.layout.topNavHeight};
  background: ${({theme:e})=>e.colors.topNavBg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`,Dv=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Mv=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Nv=u.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,Av=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 18px;
  color: ${({theme:e})=>e.colors.white};
  letter-spacing: 0.02em;
  user-select: none;

  .logo-bold { font-weight: 700; }
  .logo-normal { font-weight: 400; }
`,Er=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.white};
  transition: ${({theme:e})=>e.transitions.default};
  position: relative;

  &:hover { background: rgba(255,255,255,0.15); }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.white};
    outline-offset: 2px;
  }
`,Ov=u.span`
  position: absolute;
  top: 2px;
  right: 2px;
  background: ${({theme:e})=>e.colors.error};
  color: ${({theme:e})=>e.colors.white};
  font-size: 10px;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  pointer-events: none;
`,Fv=u.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #0D2137;
  border: 2px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.white};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  font-weight: 700;
  transition: ${({theme:e})=>e.transitions.default};
  margin-left: 4px;

  &:hover { border-color: ${({theme:e})=>e.colors.white}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.white};
    outline-offset: 2px;
  }
`,Vo=u.div`
  position: relative;
  display: flex;
  align-items: center;
`,_v=u.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function Bv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:o,onSelectProduct:l,cartCount:s=3}){const a=n==="settings"||n==="help"||n==="profile";return i.jsxs(i.Fragment,{children:[i.jsxs(Rv,{role:"banner",children:[i.jsxs(Dv,{children:[i.jsx(Nv,{children:i.jsx(Er,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:i.jsx(i0,{size:20})})}),i.jsxs(Av,{"aria-label":"DigiCert ONE",children:[i.jsx("span",{className:"logo-normal",children:"digicert "}),i.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),i.jsxs(Mv,{children:[i.jsx(Vo,{children:i.jsxs(Er,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[i.jsx(Fy,{size:20}),s>0&&i.jsx(Ov,{"aria-hidden":"true",children:s})]})}),i.jsxs(Vo,{children:[i.jsx(Er,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:i.jsx($c,{size:20})}),n==="settings"&&i.jsx(rv,{onClose:o,onSelectProduct:l})]}),i.jsxs(Vo,{children:[i.jsx(Er,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:i.jsx(_y,{size:20})}),n==="help"&&i.jsx(sv,{onClose:o})]}),i.jsx(Er,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:i.jsx(o0,{size:20})}),i.jsxs(Vo,{children:[i.jsx(Fv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&i.jsx(fv,{onClose:o,onSelectProduct:l})]})]})]}),a&&i.jsx(_v,{onClick:o,"aria-hidden":"true"}),i.jsx(jv,{open:n==="cart",onClose:o}),i.jsx(zv,{open:n==="ai-assist",onClose:o})]})}const Uv=u.nav`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  left: 0;
  bottom: 0;
  width: ${({theme:e})=>e.layout.iconRailWidth};
  background: #E8EAED;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  border-right: 1px solid rgba(0,0,0,0.08);
  z-index: 900;
  overflow: hidden;

  @media (max-width: 767px) {
    display: none;
  }
`,fd=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Wv=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,Vv=u.button`
  position: relative;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({$active:e})=>e?"#D1D5DB":"transparent"};
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 28px;
    background: ${({$active:e})=>e?"#1976D2":"transparent"};
    border-radius: 0 2px 2px 0;
    transition: background 0.15s ease;
  }

  &:hover {
    background: ${({$active:e})=>e?"#D1D5DB":"#CDD0D5"};
  }

  &:focus-visible {
    outline: 2px solid #1976D2;
    outline-offset: -2px;
  }
`,Hv=u.span`
  position: fixed;
  left: calc(56px + 8px);
  transform: translateY(-50%);
  background: rgba(0,0,0,0.82);
  color: #ffffff;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  padding: 4px 8px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 120ms ease;
  z-index: 950;

  @media (max-width: 767px) {
    display: none;
  }
`,Qv=350;function hd({product:e,isActive:t,onSelect:n}){const r=en(),o=v.useRef(null),l=v.useRef(null),[s,a]=v.useState({visible:!1,y:0});v.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]);const c=()=>{var w;const k=(w=o.current)==null?void 0:w.getBoundingClientRect();return k?k.top+k.height/2:0},d=k=>{l.current&&(clearTimeout(l.current),l.current=null),k?a({visible:!0,y:c()}):l.current=setTimeout(()=>a({visible:!0,y:c()}),Qv)},x=()=>{l.current&&(clearTimeout(l.current),l.current=null),a(k=>({...k,visible:!1}))},g=()=>{x(),n(e.id),r(e.route)},m=k=>{if(k.key==="Escape"){x();return}(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),g())};return i.jsxs(i.Fragment,{children:[i.jsx(Vv,{ref:o,$active:t,onClick:g,onKeyDown:m,onMouseEnter:()=>d(!1),onMouseLeave:x,onFocus:()=>d(!0),onBlur:x,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:jn(e.iconType,20,t?"#111827":"#6B7280")}),hh.createPortal(i.jsx(Hv,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function Gv({activeProductId:e,onSelectProduct:t}){return i.jsxs(Uv,{"aria-label":"Product navigation",children:[i.jsx(fd,{children:s0.map(n=>i.jsx(hd,{product:n,isActive:e===n.id,onSelect:t},n.id))}),i.jsx(Wv,{}),i.jsx(fd,{children:a0.map(n=>i.jsx(hd,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const Kv=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  left: ${({theme:e})=>e.layout.iconRailWidth};
  bottom: 0;
  width: ${({$open:e})=>e?"220px":"4px"};
  overflow: visible;
  z-index: 900;
  transition: ${({$open:e})=>e?"width 220ms cubic-bezier(0.4,0,0.2,1)":"width 180ms cubic-bezier(0.4,0,0.2,1) 60ms"};

  @media (max-width: 767px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 1ms;
  }
`,Yv=u.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,Jv=u.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${({$open:e})=>e?1:0};
  transition: ${({$open:e})=>e?"opacity 100ms cubic-bezier(0.4,0,0.2,1) 60ms":"opacity 60ms cubic-bezier(0.4,0,0.2,1)"};

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 1ms;
  }
`,Xv=u.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,qv=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Zv=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,e2=u.button`
  position: absolute;
  right: -12px;
  top: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: ${({theme:e})=>e.colors.neutral600};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  transform: ${({$open:e})=>e?"rotate(0deg)":"rotate(180deg)"};
  transition: background 0.15s, color 0.15s, transform 200ms cubic-bezier(0.4,0,0.2,1);

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};
    color: ${({theme:e})=>e.colors.neutral900};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 1ms;
  }
`,t2=u.div`
  display: none;

  @media (max-width: 1023px) and (min-width: 768px) {
    display: ${({$visible:e})=>e?"block":"none"};
    position: fixed;
    top: ${({theme:e})=>e.layout.topNavHeight};
    left: ${({theme:e})=>e.layout.iconRailWidth};
    right: 0;
    bottom: 0;
    z-index: 899;
  }
`,n2=u.div`
  margin-bottom: 2px;
`,r2=u.button`
  display: ${({$hasTitle:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({$isNavParent:e})=>e?"7px 12px 7px 20px":"6px 12px 6px 16px"};
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: ${({$isNavParent:e})=>e?"13px":"11px"};
  font-weight: ${({$isNavParent:e})=>e?"400":"600"};
  color: ${({theme:e})=>e.colors.neutral700};
  text-transform: none;
  letter-spacing: normal;
  transition: color 0.15s, background 0.12s;

  &:hover {
    color: ${({theme:e})=>e.colors.neutral900};
    background: ${({$isNavParent:e,theme:t})=>e?t.colors.neutral200:"transparent"};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }
`,o2=u.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,i2=u(Eh)`
  display: block;
  padding: ${({$indent:e})=>e?"7px 12px 7px 32px":"7px 12px 7px 20px"};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
  text-decoration: none;
  transition: background 0.12s, color 0.12s;
  border-radius: 0;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral900};
  }

  &.active,
  &[aria-current='page'] {
    background: ${({theme:e})=>e.colors.blue300};
    color: ${({theme:e})=>e.colors.white};
    font-weight: 500;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }
`;function l2({section:e,index:t}){const[n,r]=v.useState(e.defaultExpanded??t===0),o=nt(),l=!!e.title,s=!!e.isNavParent,a=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return i.jsxs(n2,{children:[i.jsxs(r2,{$hasTitle:l,$isNavParent:s,onClick:()=>r(c=>!c),"aria-expanded":n,"aria-controls":a,children:[i.jsx("span",{children:e.title}),n?i.jsx(vl,{size:12,color:"currentColor"}):i.jsx(mt,{size:12,color:"currentColor"})]}),i.jsx(o2,{id:a,$open:n||!l,children:e.items.map(c=>i.jsx(i2,{to:c.route,end:!0,$indent:s,"aria-current":o.pathname===c.route?"page":void 0,children:c.label},c.route))})]})}function s2({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r}){let o=sn[e];return e==="settings-billing"&&r==="enterprise"&&(o={...o,sections:o.sections.filter(l=>!l.isSelfService)}),v.useEffect(()=>{const l=s=>{s.key==="Escape"&&t&&n()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[t,n]),i.jsxs(i.Fragment,{children:[i.jsx(t2,{$visible:t,onClick:n,"aria-hidden":"true"}),i.jsxs(Kv,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[i.jsx(Yv,{children:i.jsx(Jv,{$open:t,children:o&&i.jsxs(i.Fragment,{children:[i.jsx(Xv,{children:i.jsx(qv,{children:o.label})}),i.jsx(Zv,{children:i.jsx("nav",{"aria-label":"Product navigation",children:o.sections.map((l,s)=>i.jsx(l2,{section:l,index:s},l.title||s))})})]})})}),i.jsx(e2,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:i.jsx(Qi,{size:14,color:"currentColor"})})]})]})}const a2=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`,c2=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  left: 0;
  bottom: 0;
  width: 320px;
  max-width: 85vw;
  background: #ffffff;
  z-index: 1001;
  transform: translateX(${({$open:e})=>e?"0":"-100%"});
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
  display: flex;
  overflow: hidden;

  @media (min-width: 768px) {
    display: none;
  }
`,u2=u.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({$offset:e})=>e}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`,gd=u.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`,md=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`,xd=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,os=u.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
  transition: background 0.12s;

  &:hover { background: ${({theme:e})=>e.colors.neutral100}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
  }
`,yd=u.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`,vd=u.div`
  display: flex;
  flex-direction: column;
`,d2=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`,wd=u.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border: none;
  background: ${({$active:e})=>e?"rgba(25,118,210,0.10)":"transparent"};
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: ${({$active:e})=>e?"500":"400"};
  color: ${({$active:e})=>e?"#1976D2":"#374151"};
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 28px;
    background: ${({$active:e})=>e?"#1976D2":"transparent"};
    border-radius: 0 2px 2px 0;
    transition: background 0.15s;
  }

  &:hover {
    background: ${({$active:e})=>e?"rgba(25,118,210,0.14)":"rgba(0,0,0,0.06)"};
    color: ${({$active:e})=>e?"#1976D2":"#111827"};
  }

  &:focus-visible {
    outline: 2px solid #1976D2;
    outline-offset: -2px;
  }
`,bd=u.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,p2=u.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,f2=u(Eh)`
  display: block;
  padding: 9px 16px 9px 20px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
  text-decoration: none;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};
    color: ${({theme:e})=>e.colors.neutral900};
  }

  &.active,
  &[aria-current='page'] {
    background: ${({theme:e})=>e.colors.blue300};
    color: ${({theme:e})=>e.colors.white};
    font-weight: 500;
  }
`;function h2({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const o=en(),l=nt(),s=v.useRef(null),a=v.useRef(null),[c,d]=v.useState("l1"),[x,g]=v.useState(null),m=v.useRef(0),k=v.useRef(0);v.useEffect(()=>{e||(d("l1"),g(null))},[e]),v.useEffect(()=>{const b=s.current;b&&(e?b.removeAttribute("inert"):b.setAttribute("inert",""))},[e]),v.useEffect(()=>{if(!e)return;const b=setTimeout(()=>{var E,$;($=(E=s.current)==null?void 0:E.querySelector("button"))==null||$.focus()},50);return()=>clearTimeout(b)},[e]),v.useEffect(()=>{if(!e)return;const b=E=>{if(E.key==="Escape"){r();return}if(E.key!=="Tab")return;const $=s.current;if(!$)return;const C=$.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),z=C[0],L=C[C.length-1];E.shiftKey&&document.activeElement===z?(E.preventDefault(),L.focus()):!E.shiftKey&&document.activeElement===L&&(E.preventDefault(),z.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[e,r]);const w=b=>{g(b),d("l2"),setTimeout(()=>{var E;(E=a.current)==null||E.focus()},50)},y=()=>{d("l1")},S=b=>{!!sn[b.id]?w(b.id):(n(b.id),o(b.route),r())},h=()=>{r()},p=b=>{m.current=b.touches[0].clientX,k.current=b.touches[0].clientY},f=b=>{const E=b.changedTouches[0].clientX-m.current,$=Math.abs(b.changedTouches[0].clientY-k.current);E<-80&&$<60&&r()},j=x?sn[x]:null;return i.jsxs(i.Fragment,{children:[i.jsx(a2,{$open:e,onClick:r,"aria-hidden":"true"}),i.jsx(c2,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:p,onTouchEnd:f,children:i.jsxs(u2,{$offset:c==="l1"?0:-50,children:[i.jsxs(gd,{"aria-hidden":c!=="l1",children:[i.jsxs(md,{children:[i.jsx(xd,{children:"Navigation"}),i.jsx(os,{onClick:r,"aria-label":"Close menu",children:i.jsx(ya,{size:16,color:"currentColor"})})]}),i.jsx(yd,{children:i.jsxs("nav",{"aria-label":"Product list",children:[i.jsx(vd,{children:s0.map(b=>i.jsxs(wd,{$active:t===b.id,onClick:()=>S(b),"aria-current":t===b.id?"page":void 0,"aria-haspopup":sn[b.id]?"menu":void 0,children:[jn(b.iconType,18,t===b.id?"#1976D2":"#6B7280"),i.jsx(bd,{children:b.label}),sn[b.id]&&i.jsx(ld,{size:14,color:t===b.id?"#1976D2":"#9CA3AF"})]},b.id))}),i.jsx(d2,{}),i.jsx(vd,{children:a0.map(b=>i.jsxs(wd,{$active:t===b.id,onClick:()=>S(b),"aria-current":t===b.id?"page":void 0,"aria-haspopup":sn[b.id]?"menu":void 0,children:[jn(b.iconType,18,t===b.id?"#1976D2":"#6B7280"),i.jsx(bd,{children:b.label}),sn[b.id]&&i.jsx(ld,{size:14,color:t===b.id?"#1976D2":"#9CA3AF"})]},b.id))})]})})]}),i.jsxs(gd,{ref:a,"aria-hidden":c!=="l2",children:[i.jsxs(md,{children:[i.jsx(os,{onClick:y,"aria-label":"Back to menu",children:i.jsx(Qi,{size:16,color:"currentColor"})}),i.jsx(xd,{children:(j==null?void 0:j.label)??""}),i.jsx(os,{onClick:r,"aria-label":"Close menu",children:i.jsx(ya,{size:16,color:"currentColor"})})]}),i.jsx(yd,{children:j&&i.jsx("nav",{"aria-label":`${j.label} navigation`,children:j.sections.map((b,E)=>i.jsxs("div",{children:[b.title&&i.jsx(p2,{children:b.title}),b.items.map($=>i.jsx(f2,{to:$.route,end:!0,"aria-current":l.pathname===$.route?"page":void 0,onClick:h,children:$.label},$.route))]},b.title||E))})})]})]})})]})}const g2=u.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,m2=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,x2=u.div``,y2=u.h1`
  margin: 0 0 6px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.neutral900};
`,v2=u.p`
  margin: 0;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral600};
`,w2=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.neutral600};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};
    border-color: ${({theme:e})=>e.colors.neutral300};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
  }
`,b2=u.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,j2=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,k2=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px 24px;
`,C2=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`,$2=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.neutral500};
`,S2=u.div`
  min-width: 0;
`,E2=u.h3`
  margin: 0 0 3px;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 600;
`,P2=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
`,T2=u.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,L2=u.a`
  display: block;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,I2=u.div`
  display: grid;
  gap: 16px;
`,z2=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,R2=u.div`
  width: 100%;
  min-height: 180px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
`,D2=u.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`,M2=u.div`
  padding: 16px 20px 20px;
`,N2=u.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(1, 116, 195, 0.45);
  color: ${({theme:e})=>e.colors.blue300};
  letter-spacing: 0.02em;
`,A2=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 10px;
`,O2=u.h3`
  margin: 0 0 8px;
  font-size: 17px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,F2=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,_2=u.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;

  &:hover { text-decoration: underline; }
`,B2=u.article`
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,U2=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,W2=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(0, 155, 135, 0.45);
  color: #007B6E;
  letter-spacing: 0.02em;
`,V2=u.button`
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.neutral500};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    color: ${({theme:e})=>e.colors.neutral900};
    background: rgba(0,0,0,0.06);
  }
`,H2=u.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,Q2=u.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,G2=u.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,K2=[{title:"Trust Lifecycle",subtitle:"Certificate management",iconType:"cycle",actions:[{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Automate certificate lifecycle",href:"/trust-lifecycle/tools"}]},{title:"Valimail",subtitle:"Email authentication",iconType:"envelope",actions:[{label:"Review DMARC status",href:"/valimail/dashboard"},{label:"Manage sender sources",href:"/valimail/dashboard"},{label:"Monitor domains",href:"/valimail/dashboard"},{label:"Investigate spoofing risks",href:"/valimail/dashboard"}]},{title:"Quantum Central",subtitle:"Post-quantum readiness",iconType:"settings",actions:[{label:"Assess cryptographic risk",href:"/quantum-central/dashboard"},{label:"Review PQC readiness",href:"/quantum-central/dashboard"},{label:"View algorithm inventory",href:"/quantum-central/dashboard"},{label:"Track remediation",href:"/quantum-central/dashboard"}]},{title:"AI Agents",subtitle:"AI identity & governance",iconType:"sparkle",actions:[{label:"Register agents",href:"/ai-agents/dashboard"},{label:"Manage agent identities",href:"/ai-agents/dashboard"},{label:"Review agent activity",href:"/ai-agents/dashboard"},{label:"Configure trust policies",href:"/ai-agents/dashboard"}]},{title:"Device Trust",subtitle:"IoT device security",iconType:"mobile",actions:[{label:"Register devices",href:"/device-trust/dashboard"},{label:"Manage device identities",href:"/device-trust/dashboard"},{label:"Configure device policies",href:"/device-trust/dashboard"},{label:"Review device lifecycle",href:"/device-trust/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",iconType:"hierarchy",actions:[{label:"Issue internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage certificate profiles",href:"/private-ca/certificate-profiles"},{label:"Configure OCSP",href:"/private-ca/ocsps"}]},{title:"Software Trust",subtitle:"Code signing",iconType:"code",actions:[{label:"Manage signing keys",href:"/software-trust/dashboard"},{label:"Configure signing policies",href:"/software-trust/dashboard"},{label:"Sign software",href:"/software-trust/dashboard"},{label:"Generate SBOM",href:"/software-trust/dashboard"}]},{title:"DNS Trust",subtitle:"DNS management",iconType:"globe",actions:[{label:"Manage zones",href:"/dns/dashboard"},{label:"Update DNS records",href:"/dns/dashboard"},{label:"Configure traffic steering",href:"/dns/dashboard"},{label:"Review DNSSEC settings",href:"/dns/dashboard"}]},{title:"Content Trust",subtitle:"Document & content signing",iconType:"document",actions:[{label:"Manage signing credentials",href:"/content-trust/dashboard"},{label:"Verify signed content",href:"/content-trust/dashboard"},{label:"Review signing activity",href:"/content-trust/dashboard"},{label:"Configure seal policies",href:"/content-trust/dashboard"}]},{title:"CertCentral",subtitle:"Public certificates",iconType:"shield",actions:[{label:"Order public certificate",href:"/certcentral/dashboard"},{label:"Validate domains",href:"/certcentral/dashboard"},{label:"Manage organizations",href:"/certcentral/dashboard"},{label:"Expiring certificates",href:"/certcentral/inventory"}]}];function Y2(){const[e,t]=v.useState(!1);return i.jsxs(g2,{children:[i.jsxs(m2,{children:[i.jsxs(x2,{children:[i.jsx(y2,{children:"Hello, John"}),i.jsx(v2,{children:"Access your DigiCert trust solutions and discover what's new"})]}),i.jsx(w2,{"aria-label":"Page settings",children:i.jsx(i0,{size:18,color:"currentColor"})})]}),i.jsxs(b2,{children:[i.jsx(j2,{children:K2.map(n=>i.jsxs(k2,{children:[i.jsxs(C2,{children:[i.jsx($2,{children:jn(n.iconType,20,"currentColor")}),i.jsxs(S2,{children:[i.jsx(E2,{children:n.title}),i.jsx(P2,{children:n.subtitle})]})]}),i.jsx(T2,{children:n.actions.map(r=>i.jsx("li",{children:i.jsx(L2,{href:r.href,children:r.label})},r.label))})]},n.title))}),i.jsxs(I2,{children:[i.jsxs(z2,{children:[i.jsx(R2,{children:i.jsx(D2,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),i.jsxs(M2,{children:[i.jsx(N2,{children:"Certificate lifecycle"}),i.jsxs(A2,{children:[i.jsx("span",{children:"Brian Trzupek · 5 min read"}),i.jsx("span",{children:"digicert.com/blog"})]}),i.jsx(O2,{children:"Certificate lifecycle management reaches an inflection point"}),i.jsx(F2,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),i.jsx(_2,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&i.jsxs(B2,{children:[i.jsxs(U2,{children:[i.jsx(W2,{children:"Software Trust Manager"}),i.jsx(V2,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:i.jsx(ya,{size:14,color:"currentColor"})})]}),i.jsx(H2,{children:"Centralize code-signing at scale"}),i.jsx(Q2,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),i.jsx(G2,{href:"/software-trust/dashboard",children:"Explore STM →"})]})]})]})]})}const J2=u.main`
  padding: 24px;
`,X2=u.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,jd=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function kd(){const e=nt(),t=Jy[e.pathname]??e.pathname;return v.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),i.jsxs(J2,{children:[i.jsx(X2,{children:t}),e.pathname==="/profile"&&i.jsx(jd,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),i.jsxs(jd,{children:["This is a stub page for ",i.jsx("code",{children:e.pathname})]})]})}const Cd={name:"Sarah Mitchell",email:"sarah.mitchell@digicert.com"},q2=[{id:"trust-lifecycle",name:"Trust Lifecycle",iconType:"cycle",plan:"Advanced",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Seats",consumed:30,total:75},entitlements:[{name:"Seats",purchased:75,allocated:75,consumed:30,remaining:45}]},{id:"software-trust",name:"Software Trust",iconType:"code",tier:"Enterprise",plan:"Premium",autoRenewal:!0,contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Signatures",consumed:124210,total:25e4},entitlements:[{name:"Signatures",purchased:25e4,allocated:25e4,consumed:124210,remaining:125790},{name:"HSM keypairs",purchased:4,allocated:4,consumed:2,remaining:2}],purchasedControls:[{name:"Signatures",purchased:25e4,used:124210,remaining:125790},{name:"HSM keypair",purchased:10,used:2,remaining:8,planIncluded:6,addOnPurchased:4}],includedResources:[{name:"Repositories",includedWithPlan:"Up to 100",available:100,used:76,remaining:24},{name:"Test signatures",includedWithPlan:"2,500,000",available:25e5,used:812430,remaining:1687570}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private root certificates",consumed:9,total:10},entitlements:[{name:"Private root certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Private intermediate CA certificates",purchased:25,allocated:25,consumed:20,remaining:5},{name:"Dynamic intermediate CAs",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500}]},{id:"content-trust",name:"Content Trust",iconType:"document",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Seats",purchased:500,allocated:500,consumed:340,remaining:160},{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800}]},{id:"device-trust",name:"Device Trust",iconType:"mobile",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Device certificates",consumed:45e3,total:1e5},entitlements:[{name:"Device certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Device groups",purchased:50,allocated:50,consumed:32,remaining:18},{name:"API calls / month",purchased:1e6,allocated:1e6,consumed:62e4,remaining:38e4}]},{id:"dns",name:"DigiCert DNS",iconType:"globe",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Queries",consumed:45e4,total:1e6},entitlements:[{name:"Queries",purchased:1e6,allocated:1e6,consumed:45e4,remaining:55e4}]},{id:"valimail",name:"Valimail",iconType:"envelope",plan:"Essential",autoRenewal:!1,contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Domains",consumed:18,total:25},entitlements:[{name:"Domains",purchased:25,allocated:25,consumed:18,remaining:7},{name:"Email volume/month",purchased:5e6,allocated:5e6,consumed:28e5,remaining:22e5}]},{id:"iot-trust",name:"IoT Trust",iconType:"chip",contractId:"CTR-2024-IOT-00044",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IoT Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"End entity certificates",consumed:28e4,total:5e5},entitlements:[{name:"End entity certificates",purchased:5e5,allocated:5e5,consumed:28e4,remaining:22e4},{name:"End entity devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Intermediate CA certificates",purchased:50,allocated:50,consumed:12,remaining:38},{name:"Intermediate CA devices",purchased:100,allocated:100,consumed:45,remaining:55}]}],Ho=[{accountId:"acme-global-security",displayAccountId:"1001445",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"peak-usage",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8,periodPeak:128,periodPeakDate:"Aug 14, 2025",purchasedUSD:"$80,000"},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8,periodPeak:22,periodPeakDate:"Sep 3, 2025",purchasedUSD:"$9,600"},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60,periodPeak:180,periodPeakDate:"Oct 12, 2025",purchasedUSD:"$24,000"},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7,periodPeak:8,periodPeakDate:"Nov 5, 2025",purchasedUSD:"$2,400"},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4,periodPeak:2,periodPeakDate:"—",purchasedUSD:"$1,500"}],peakUsageData:{periodPeakDate:"Aug 14, 2025",monthLabels:["Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Mar 26","Apr 26","May 26","Jun 26"],series:[{name:"SSL/TLS certificates",color:"#4B91D6",currentActive:108,periodPeak:128,periodPeakDate:"Aug 14, 2025",monthly:[90,110,128,122,115,108,100,96,92,98,104,110,108],monthlyCost:[72e3,88e3,102400,97600,92e3,86400,8e4,76800,73600,78400,83200,88e3,86400]},{name:"Code signing",color:"#F59E0B",currentActive:16,periodPeak:22,periodPeakDate:"Sep 3, 2025",monthly:[10,14,18,22,20,18,16,15,14,15,16,16,16],monthlyCost:[6e3,8400,10800,13200,12e3,10800,9600,9e3,8400,9e3,9600,9600,9600]},{name:"S/MIME certificates",color:"#10B981",currentActive:140,periodPeak:180,periodPeakDate:"Oct 12, 2025",monthly:[120,138,155,168,180,174,162,152,148,152,158,145,140],monthlyCost:[24e3,27600,31e3,33600,36e3,34800,32400,30400,29600,30400,31600,29e3,28e3]},{name:"Document signing",color:"#8B5CF6",currentActive:5,periodPeak:8,periodPeakDate:"Nov 5, 2025",monthly:[2,3,4,5,7,8,7,6,5,5,5,5,5],monthlyCost:[1e3,1500,2e3,2500,3500,4e3,3500,3e3,2500,2500,2500,2500,2500]}]}},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",displayAccountId:"2003891",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",displayAccountId:"3007234",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-enterprise",displayAccountId:"5001298",accountName:"ACME Enterprise",enterpriseInstance:{instanceId:"acme-enterprise-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"drawdown",contractId:"CTR-2024-CC-00214",contractTerm:"Nov 1, 2025 – Oct 31, 2026",contractOwner:"Enterprise IT",renewalDate:"Oct 31, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:55,total:120},entitlements:[{name:"SSL/TLS certificates",purchased:120,allocated:120,consumed:55,remaining:65},{name:"Code signing certificates",purchased:40,allocated:40,consumed:18,remaining:22},{name:"S/MIME certificates",purchased:300,allocated:300,consumed:210,remaining:90},{name:"Document signing certificates",purchased:20,allocated:20,consumed:7,remaining:13}]}}],Z2=["over-entitlement","approaching-limit","no-data","healthy"];function ew(e){return Z2.find(t=>e.includes(t))||"healthy"}function tw(e){const{id:t,name:n,iconType:r,...o}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:o.renewalDate,status:o.status,primaryEntitlement:o.primaryEntitlement,entitlements:o.entitlements,plan:o.plan,tier:o.tier,autoRenewal:o.autoRenewal,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...o}]}}function Qo(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(l=>l.subscriptionType))],o=[...new Set(n.map(l=>l.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountId:e.displayAccountId,accountName:e.accountName,subscriptionTypes:r,renewalDate:o.length===1?o[0]:"Varies by instance",status:ew(n.map(l=>l.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const $d=q2.map(tw),nw=new Set(["device-trust","dns","valimail","iot-trust"]);function c0(){const e=[Qo(Ho[0],["enterprise"]),Qo(Ho[1],["enterprise"]),Qo(Ho[2],["ecommerce"]),Qo(Ho[3],["enterprise"])],t=$d.slice(0,3),n=$d.slice(3).filter(r=>!nw.has(r.id));return[...t,...e,...n]}const gn=[{id:"us-prod",name:"Acme — US production",region:"US"},{id:"us-stage",name:"Acme — US stage",region:"US"},{id:"eu-prod",name:"Acme — EU production",region:"EU"},{id:"eu-stage",name:"Acme — EU stage",region:"EU"},{id:"in-prod",name:"Acme — IN",region:"IN"}],rw={"us-prod":["trust-lifecycle","software-trust","private-ca","certcentral-acme-global-security","certcentral-acme-marketing","certcentral-acme-enterprise"],"us-stage":["trust-lifecycle","software-trust","certcentral-acme-global-security","certcentral-acme-marketing"],"eu-prod":["trust-lifecycle","private-ca","certcentral-acme-global-security","certcentral-acme-enterprise"],"eu-stage":["software-trust","certcentral-acme-marketing"],"in-prod":["software-trust","certcentral-acme-enterprise"]},ow={"us-prod":1,"us-stage":.25,"eu-prod":.65,"eu-stage":.15,"in-prod":.4};function xi(){const e=c0(),t=e.filter(s=>!s.id.startsWith("certcentral-")),n=e.filter(s=>s.id.startsWith("certcentral-")),r=n.find(s=>s.id==="certcentral-acme-devops"),o=n.filter(s=>s.id!=="certcentral-acme-devops"),l=[];r&&l.push({...r,envIds:gn.map(s=>s.id),envNames:gn.map(s=>s.name)});for(const s of gn){const a=ow[s.id],c=rw[s.id];for(const d of c){const x=[...t,...o].find(y=>y.id===d);if(!x)continue;const g=y=>Math.round(y*a),m=x.entitlements.map(y=>({...y,consumed:g(y.consumed),remaining:y.allocated-g(y.consumed)})),k={...x.primaryEntitlement,consumed:g(x.primaryEntitlement.consumed)},w=x.instances.map(y=>{const S={...y,entitlements:y.entitlements?y.entitlements.map(h=>({...h,consumed:g(h.consumed),remaining:h.allocated-g(h.consumed)})):y.entitlements,primaryEntitlement:y.primaryEntitlement?{...y.primaryEntitlement,consumed:g(y.primaryEntitlement.consumed)}:y.primaryEntitlement};return y.purchasedControls&&(S.purchasedControls=y.purchasedControls.map(h=>({...h,used:g(h.used),remaining:h.purchased-g(h.used)}))),y.includedResources&&(S.includedResources=y.includedResources.map(h=>({...h,used:g(h.used),remaining:typeof h.available=="number"?h.available-g(h.used):h.remaining}))),S});l.push({...x,envId:s.id,envName:s.name,entitlements:m,primaryEntitlement:k,instances:w})}}return l}const iw=u.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,lw=u.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function sw({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return i.jsx(iw,{role:"presentation",children:i.jsx(lw,{$pct:n})})}const u0=u(vc)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 0 1px 2px rgba(53,56,58,0.05);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.blue300};
    box-shadow: 0 2px 8px rgba(53,56,58,0.08);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
  }
`,d0=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,p0=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,f0=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,h0=u.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,g0=u.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
`,aw=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,m0=u.span`
  flex-shrink: 0;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  background: #1C7852;
  color: #ffffff;
`,x0=u.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e}, 1fr);
  gap: 10px;
  padding: 10px 0 2px;
`,y0=u.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`,v0=u.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,w0=u.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,b0=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,cw=u.div`
  position: relative;
  flex-shrink: 0;
`,uw=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.12s;

  &:hover { background: rgba(1,116,195,0.06); }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,j0=u.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`,dw=u.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  min-width: 192px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  z-index: 50;
  overflow: hidden;
`,pw=u.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 9px 14px;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({$destructive:e,theme:t})=>e?"#DC2626":t.colors.neutral800};
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`;function k0({items:e}){const[t,n]=v.useState(!1),r=v.useRef(null);return v.useEffect(()=>{if(!t)return;const o=s=>{r.current&&!r.current.contains(s.target)&&n(!1)},l=s=>{s.key==="Escape"&&n(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",l)}},[t]),i.jsxs(cw,{ref:r,children:[i.jsx(uw,{type:"button",onClick:o=>{o.preventDefault(),o.stopPropagation(),n(l=>!l)},"aria-label":"More actions","aria-expanded":t,children:i.jsx(Gi,{size:14,color:"currentColor"})}),t&&i.jsx(dw,{onClick:o=>o.stopPropagation(),children:e.map(o=>i.jsx(pw,{type:"button",$destructive:o.destructive,onClick:l=>{l.preventDefault(),l.stopPropagation(),n(!1)},children:o.label},o.label))})]})}const fw=u.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,hw=u.button`
  flex: 1;
  padding: 6px 12px;
  border: none;
  border-radius: 999px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, box-shadow 0.15s, color 0.15s;
  background: ${({$active:e})=>e?"white":"transparent"};
  color: ${({$active:e,theme:t})=>e?t.colors.neutral900:t.colors.neutral500};
  box-shadow: ${({$active:e})=>e?"0 1px 4px rgba(0,0,0,0.12)":"none"};

  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,gw=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,mw=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 7px;
`,xw=u.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Sd=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  font-weight: 500;
`;u.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;u.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`;u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;const va=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
`,wa=u.p`
  margin: 0;
  font-size: 12px;
  font-style: italic;
  color: ${({theme:e})=>e.colors.neutral500};
`,C0=u.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,$0=u.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.span``;function ba({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return i.jsx(gw,{children:n.map(r=>i.jsxs("div",{children:[i.jsxs(mw,{children:[i.jsx(xw,{children:r.name}),i.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),i.jsx(sw,{consumed:r.consumed,total:r.allocated}),r.remaining<0?i.jsxs(Sd,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):i.jsxs(Sd,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function S0(e){if(e.id.startsWith("certcentral-")){const o=e.subscriptionTypes.includes("enterprise"),l=e.subscriptionTypes.includes("ecommerce");return[{label:"Tier",value:o&&l?"Enterprise + E-commerce":o?"Enterprise":"E-commerce"},{label:"Account name",value:e.accountName},{label:"Account ID",value:e.accountId}]}const r=[{label:"Tier",value:e.tier||"Enterprise"}];return e.plan&&r.push({label:"Plan",value:e.plan}),e.autoRenewal!==void 0&&r.push({label:"Auto-renewal",value:e.autoRenewal?"On":"Off"}),r}function yw({subscription:e}){const[t,n]=v.useState(e.instances[0].instanceId),r=e.instances.find(d=>d.instanceId===t)||e.instances[0],o=r.subscriptionType==="enterprise",l=r.entitlements.slice(0,3),s=r.entitlements.length-l.length,a=[{label:"Open CertCentral"},{label:"Documentation"}],c=S0(e);return i.jsxs(u0,{to:`/settings/billing/${e.id}`,children:[i.jsxs(d0,{children:[i.jsxs(p0,{children:[i.jsx(f0,{children:jn(e.iconType,20,"currentColor")}),i.jsx(h0,{children:i.jsxs(b0,{children:[i.jsx(g0,{children:e.name}),i.jsxs(m0,{children:["Renews ",e.renewalDate]})]})})]}),i.jsx(j0,{children:i.jsx(k0,{items:a})})]}),i.jsx(x0,{$cols:c.length,children:c.map(d=>i.jsxs(y0,{children:[i.jsx(v0,{children:d.label}),i.jsx(w0,{children:d.value})]},d.label))}),i.jsx(fw,{onClick:d=>d.preventDefault(),children:e.instances.map(d=>i.jsx(hw,{type:"button",$active:d.instanceId===t,onClick:x=>{x.preventDefault(),x.stopPropagation(),n(d.instanceId)},children:d.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},d.instanceId))}),o?i.jsxs(i.Fragment,{children:[l.length>0?i.jsx(ba,{entitlements:r.entitlements,maxVisible:3}):i.jsx($0,{children:"Usage data not available yet."}),i.jsxs(va,{children:[s>0&&i.jsxs(C0,{children:["+",s," more"]}),i.jsx(wa,{children:"Managed by your Account Manager"})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(ba,{entitlements:r.entitlements,maxVisible:3}),i.jsxs(va,{children:[i.jsx("span",{}),i.jsx(wa,{children:"Self-service subscription"})]})]})]})}function vw({subscription:e}){if(e.instances.length>1)return i.jsx(yw,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:o,entitlements:l}=e,s=e.subscriptionTypes.includes("enterprise"),a=e.subscriptionTypes.includes("ecommerce"),c=a&&!s,d=t.startsWith("certcentral-"),x=l.slice(0,3),g=l.length-x.length,m=s?"Managed by your Account Manager":a?"Self-service subscription":null,w=c&&d?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${d?"CertCentral":n}`},{label:"Documentation"}],y=S0(e);return i.jsxs(u0,{to:`/settings/billing/${t}${e.envId?`?env=${e.envId}`:""}`,children:[i.jsxs(d0,{children:[i.jsxs(p0,{children:[i.jsx(f0,{children:jn(r,20,"currentColor")}),i.jsxs(h0,{children:[i.jsxs(b0,{children:[i.jsx(g0,{children:n}),c&&o&&i.jsxs(m0,{children:["Renews ",o]})]}),(e.envNames||e.envId)&&i.jsx(aw,{children:e.envNames?e.envNames.join(", "):e.envName})]})]}),i.jsx(j0,{children:i.jsx(k0,{items:w})})]}),i.jsx(x0,{$cols:y.length,children:y.map(S=>i.jsxs(y0,{children:[i.jsx(v0,{children:S.label}),i.jsx(w0,{children:S.value})]},S.label))}),x.length>0?i.jsx(ba,{entitlements:l,maxVisible:3}):i.jsx($0,{children:"Usage data is not available for this product yet."}),m&&i.jsxs(va,{children:[g>0?i.jsxs(C0,{children:["+",g," more"]}):i.jsx("span",{}),i.jsx(wa,{children:m})]})]})}const ww=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,bw=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  right: 0;
  bottom: 0;
  width: 440px;
  background: ${({theme:e})=>e.colors.white};
  z-index: 1101;
  display: flex;
  flex-direction: column;
  transform: translateX(${({$open:e})=>e?"0":"100%"});
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.14);

  @media (max-width: 500px) {
    width: 100%;
  }
`,jw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,kw=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Cw=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,$w=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.neutral600};
  border-radius: 6px;
  font-size: 20px;
  line-height: 1;
  padding: 0;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};
    color: ${({theme:e})=>e.colors.neutral900};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
  }
`,Sw=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,Ew=u.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Pw=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Tw=u.div`
  border: 1.5px solid ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral400};
  }
`,Lw=u.button`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  gap: 12px;
  font-family: ${({theme:e})=>e.typography.fontFamily};

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }
`,Iw=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
  padding-top: 1px;
`,zw=u.div`
  flex: 1;
  min-width: 0;
`,Rw=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  margin-bottom: 4px;
`,Dw=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  line-height: 1.45;
`,Mw=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Nw=u.div`
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Aw=u.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
  box-sizing: border-box;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
  }
`,Ow=[{id:"sales",title:"Sales",helper:"Questions about purchasing, pricing, renewals, account growth, additional products, or billing.",cta:"Contact sales",href:"https://www.digicert.com/contact-us"},{id:"support",title:"Support",helper:"Help with product issues, errors, troubleshooting, or technical questions.",cta:"Contact support",href:"https://www.digicert.com/support/pki-support"}];function E0({open:e,onClose:t}){const[n,r]=v.useState(null),o=v.useRef(null);return v.useEffect(()=>{const l=s=>{s.key==="Escape"&&e&&t()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[e,t]),v.useEffect(()=>{e&&o.current&&setTimeout(()=>{var l;return(l=o.current)==null?void 0:l.focus()},260),e||r(null)},[e]),i.jsxs(i.Fragment,{children:[i.jsx(ww,{$open:e,onClick:t,"aria-hidden":"true"}),i.jsxs(bw,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[i.jsxs(jw,{children:[i.jsxs(kw,{children:[i.jsx(mo,{size:18,color:"currentColor"}),i.jsx(Cw,{children:"Need help?"})]}),i.jsx($w,{type:"button",onClick:t,"aria-label":"Close drawer",ref:o,children:"×"})]}),i.jsxs(Sw,{children:[i.jsx(Ew,{children:"What do you need help with?"}),i.jsx(Pw,{children:Ow.map(l=>{const s=n===l.id;return i.jsxs(Tw,{$selected:s,children:[i.jsxs(Lw,{type:"button",onClick:()=>r(s?null:l.id),"aria-expanded":s,children:[i.jsx(Iw,{children:l.id==="sales"?i.jsx(Sc,{size:18,color:"currentColor"}):i.jsx($c,{size:18,color:"currentColor"})}),i.jsxs(zw,{children:[i.jsx(Rw,{children:l.title}),i.jsx(Dw,{children:l.helper})]}),i.jsx(Mw,{children:s?i.jsx(vl,{size:16,color:"currentColor"}):i.jsx(mt,{size:16,color:"currentColor"})})]}),s&&i.jsx(Nw,{children:i.jsxs(Aw,{href:l.href,target:"_blank",rel:"noopener noreferrer",children:[l.cta,i.jsx(Ec,{size:14,color:"currentColor"})]})})]},l.id)})})]})]})]})}const Fw=u.main`
  padding: 32px;
`,_w=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Bw=u.div``,Uw=u.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ww=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,Vw=u.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.15s;

  &:hover { color: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
    border-radius: 3px;
  }
`;u.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;u.div`
  padding: 18px 20px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;u.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.p`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`;u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`;const Hw=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(358px, auto);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`,Qw=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`,Ed=u.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  background: ${({theme:e})=>e.colors.white};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  cursor: pointer;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Pd=u.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 220px;
  background: white;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow: hidden;
`,Td=u.button`
  display: block;
  width: 100%;
  padding: 9px 16px;
  text-align: left;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-family: inherit;
  background: ${({$active:e,theme:t})=>e?"#EAF1FB":t.colors.white};
  color: ${({$active:e,theme:t})=>e?t.colors.blue300:t.colors.neutral800};
  font-weight: ${({$active:e})=>e?500:400};

  &:hover { background: ${({$active:e,theme:t})=>e?"#EAF1FB":t.colors.neutral50}; }
`;function Gw(){var p;const[e,t]=v.useState(!1),[n,r]=Ph(),o=n.get("env")||"all",l=n.get("product")||"all",[s,a]=v.useState(!1),[c,d]=v.useState(!1),x=v.useRef(null),g=v.useRef(null);v.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]),v.useEffect(()=>{if(!s)return;const f=j=>{x.current&&!x.current.contains(j.target)&&a(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[s]),v.useEffect(()=>{if(!c)return;const f=j=>{g.current&&!g.current.contains(j.target)&&d(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[c]);const m=xi(),k=[...new Map(m.map(f=>[f.name,{id:f.name,name:f.name}])).values()],y=m.filter(f=>!(o!=="all"&&!(f.envIds?f.envIds.includes(o):f.envId===o)||l!=="all"&&f.name!==l)).map(f=>{var j;if(f.envIds&&o!=="all"){const b=((j=gn.find(E=>E.id===o))==null?void 0:j.name)??o;return{...f,envId:o,envName:b,envIds:void 0,envNames:void 0}}return f}),S=o==="all"?"All environments":((p=gn.find(f=>f.id===o))==null?void 0:p.name)??o,h=l==="all"?"All products":l;return i.jsxs(Fw,{children:[i.jsxs(_w,{children:[i.jsxs(Bw,{children:[i.jsx(Uw,{children:"My subscriptions"}),i.jsx(Ww,{children:"View your active product subscriptions, entitlement usage, and renewal information."})]}),i.jsxs(Vw,{type:"button",onClick:()=>t(!0),children:[i.jsx(mo,{size:15,color:"currentColor"}),"Need help?"]})]}),i.jsxs(Qw,{children:[i.jsxs("div",{style:{position:"relative"},ref:x,children:[i.jsxs(Ed,{type:"button",onClick:()=>a(f=>!f),"aria-haspopup":"listbox","aria-expanded":s,children:[S,i.jsx(mt,{size:13,color:"currentColor"})]}),s&&i.jsx(Pd,{children:[{id:"all",name:"All environments"},...gn].map(f=>i.jsx(Td,{type:"button",$active:o===f.id,onClick:()=>{r(j=>{const b=new URLSearchParams(j);return f.id==="all"?b.delete("env"):b.set("env",f.id),b},{replace:!0}),a(!1)},children:f.name},f.id))})]}),i.jsxs("div",{style:{position:"relative"},ref:g,children:[i.jsxs(Ed,{type:"button",onClick:()=>d(f=>!f),"aria-haspopup":"listbox","aria-expanded":c,children:[h,i.jsx(mt,{size:13,color:"currentColor"})]}),c&&i.jsx(Pd,{children:[{id:"all",name:"All products"},...k].map(f=>i.jsx(Td,{type:"button",$active:l===f.id,onClick:()=>{r(j=>{const b=new URLSearchParams(j);return f.id==="all"?b.delete("product"):b.set("product",f.id),b},{replace:!0}),d(!1)},children:f.name},f.id))})]})]}),i.jsx(Hw,{children:y.map(f=>i.jsx(vw,{subscription:f},`${f.id}-${f.envId??"global"}`))}),i.jsx(E0,{open:e,onClose:()=>t(!1)})]})}const Kw=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,Yw=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  right: 0;
  bottom: 0;
  width: 440px;
  background: ${({theme:e})=>e.colors.white};
  z-index: 1101;
  display: flex;
  flex-direction: column;
  transform: translateX(${({$open:e})=>e?"0":"100%"});
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.14);

  @media (max-width: 500px) {
    width: 100%;
  }
`,Jw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Xw=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,qw=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Zw=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.neutral600};
  border-radius: 6px;
  font-size: 20px;
  line-height: 1;
  padding: 0;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};
    color: ${({theme:e})=>e.colors.neutral900};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
  }
`,eb=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,tb=u.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,nb=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,rb=u.div`
  border: 1.5px solid ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral400};
  }
`,ob=u.button`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  gap: 12px;
  font-family: ${({theme:e})=>e.typography.fontFamily};

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }
`,ib=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
  padding-top: 1px;
`,lb=u.div`
  flex: 1;
  min-width: 0;
`,sb=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  margin-bottom: 4px;
`,ab=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  line-height: 1.45;
`,cb=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,ub=u.div`
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,db=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
  }
`,pb=[{id:"sales",title:"Sales",helper:"Questions about pricing, purchasing, renewals, expanding your DigiCert services, or your billing and subscriptions.",cta:"Contact sales"},{id:"support",title:"Support",helper:"Do you need help with certificate issues, integrations, troubleshooting, domain or organization validation, or certificate approvals.",cta:"Contact support"}];function fb({open:e,onClose:t}){const[n,r]=v.useState(null),o=en(),l=v.useRef(null);v.useEffect(()=>{const a=c=>{c.key==="Escape"&&e&&t()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,t]),v.useEffect(()=>{e&&l.current&&setTimeout(()=>{var a;return(a=l.current)==null?void 0:a.focus()},260),e||r(null)},[e]);function s(){t(),o("/certcentral/support")}return i.jsxs(i.Fragment,{children:[i.jsx(Kw,{$open:e,onClick:t,"aria-hidden":"true"}),i.jsxs(Yw,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[i.jsxs(Jw,{children:[i.jsxs(Xw,{children:[i.jsx(mo,{size:18,color:"currentColor"}),i.jsx(qw,{children:"Need help?"})]}),i.jsx(Zw,{type:"button",onClick:t,"aria-label":"Close drawer",ref:l,children:"×"})]}),i.jsxs(eb,{children:[i.jsx(tb,{children:"What do you need help with?"}),i.jsx(nb,{children:pb.map(a=>{const c=n===a.id;return i.jsxs(rb,{$selected:c,children:[i.jsxs(ob,{type:"button",onClick:()=>r(c?null:a.id),"aria-expanded":c,children:[i.jsx(ib,{children:a.id==="sales"?i.jsx(Sc,{size:18,color:"currentColor"}):i.jsx($c,{size:18,color:"currentColor"})}),i.jsxs(lb,{children:[i.jsx(sb,{children:a.title}),i.jsx(ab,{children:a.helper})]}),i.jsx(cb,{children:c?i.jsx(vl,{size:16,color:"currentColor"}):i.jsx(mt,{size:16,color:"currentColor"})})]}),c&&i.jsx(ub,{children:i.jsx(db,{type:"button",onClick:s,children:a.cta})})]},a.id)})})]})]})]})}const hb=u.div`
  position: relative;
  width: 100%;
  user-select: none;
`,gb=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  margin-bottom: 8px;
`,mb=u.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 10px;
  color: ${({$dim:e,theme:t})=>e?t.colors.neutral400:t.colors.neutral700};
  cursor: pointer;
  opacity: ${({$dim:e})=>e?.5:1};
  transition: opacity 0.15s;
  text-decoration: ${({$dim:e})=>e?"line-through":"none"};
`,xb=u.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
`,yb=u.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
`,Ld=u.button`
  padding: 2px 7px;
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.white};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 10px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    border-color: ${({theme:e})=>e.colors.neutral400};
  }
`,vb=u.div`
  position: relative;
`,wb=u.div`
  position: absolute;
  pointer-events: none;
  background: rgba(20, 25, 35, 0.9);
  color: white;
  padding: 8px 11px;
  border-radius: 6px;
  font-size: 11px;
  white-space: nowrap;
  z-index: 10;
  min-width: 170px;
  top: 12px;
`,bb=u.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: #E5E7EB;
  font-size: 10px;
`,Id=u.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.8;
`,jb=u.span`
  width: 7px;
  height: 7px;
  border-radius: 2px;
  flex-shrink: 0;
`,Dr=620,P0=190,Mr=46,kb=16,T0=18,Cb=34,Go=Dr-Mr-kb,rn=P0-T0-Cb;function $b(e,t){return t==="$"?e>=1e5?`$${(e/1e3).toFixed(0)}k`:e>=1e3?`$${(e/1e3).toFixed(1)}k`:`$${e}`:e>=1e3?`${(e/1e3).toFixed(0)}k`:`${e}`}function zd(e,t){return t==="$"?e>=1e3?`$${e.toLocaleString()}`:`$${e}`:e.toLocaleString()}function Rd({series:e,monthLabels:t,yFormat:n}){var $;const[r,o]=v.useState(new Set),[l,s]=v.useState(null),a=v.useRef(null),c=t.length,d=t.map((C,z)=>{let L=0;return e.map(A=>{const te=r.has(A.name)?0:A.monthly[z],F=L;return L+=te,{lo:F,hi:L,val:te}})}),x=Math.max(...d.map(C=>{var z;return((z=C[C.length-1])==null?void 0:z.hi)||0}),1),g=Math.ceil(x*1.1/50)*50;function m(C){return C/(c-1)*Go}function k(C){return rn-C/g*rn}function w(C){const z=t.map((A,te)=>`${m(te).toFixed(1)},${k(d[te][C].hi).toFixed(1)}`),L=[...t].reverse().map((A,te)=>{const F=c-1-te;return`${m(F).toFixed(1)},${k(d[F][C].lo).toFixed(1)}`});return[...z,...L].join(" ")}const y=[0,.25,.5,.75,1].map(C=>({v:Math.round(g*C),y:k(g*C)})),S=d.reduce((C,z,L)=>{var F,Se;const A=((F=z[z.length-1])==null?void 0:F.hi)||0,te=((Se=d[C][d[C].length-1])==null?void 0:Se.hi)||0;return A>te?L:C},0);function h(C){if(!a.current)return;const z=a.current.getBoundingClientRect(),L=Mr/Dr*z.width,A=(Mr+Go)/Dr*z.width,F=(Math.max(L,Math.min(A,C.clientX-z.left))-L)/(A-L);s(Math.round(F*(c-1)))}function p(C){o(z=>{const L=new Set(z);return L.has(C)?L.delete(C):L.add(C),L})}const f=l!==null?(Mr+m(l))/Dr*100:0,j=l!==null&&l>c-3?"translateX(-100%)":l!==null&&l<2?"translateX(4px)":"translateX(-50%)",b=l!==null&&(($=d[l][d[l].length-1])==null?void 0:$.hi)||0,E=n==="$"?"Total":"Total active";return i.jsxs(hb,{children:[i.jsxs(gb,{children:[e.map(C=>i.jsxs(mb,{$dim:r.has(C.name),type:"button",onClick:()=>p(C.name),children:[i.jsx(xb,{style:{background:C.color}}),C.name]},C.name)),i.jsxs(yb,{children:[i.jsx(Ld,{type:"button",onClick:()=>o(new Set),children:"All"}),i.jsx(Ld,{type:"button",onClick:()=>o(new Set(e.map(C=>C.name))),children:"None"})]})]}),i.jsxs(vb,{children:[i.jsx("svg",{ref:a,viewBox:`0 0 ${Dr} ${P0}`,style:{width:"100%",height:"auto",display:"block",overflow:"visible",cursor:"crosshair"},onMouseMove:h,onMouseLeave:()=>s(null),children:i.jsxs("g",{transform:`translate(${Mr},${T0})`,children:[y.map(C=>i.jsxs("g",{children:[i.jsx("line",{x1:0,y1:C.y.toFixed(1),x2:Go,y2:C.y.toFixed(1),stroke:"#E5E7EB",strokeWidth:1}),i.jsx("text",{x:-8,y:C.y.toFixed(1),textAnchor:"end",fontSize:7,fill:"#9CA3AF",dominantBaseline:"middle",children:$b(C.v,n)})]},C.v)),i.jsx("line",{x1:0,y1:rn,x2:Go,y2:rn,stroke:"#D1D5DB",strokeWidth:1}),t.map((C,z)=>z%2!==0&&z!==c-1?null:i.jsx("text",{x:m(z).toFixed(1),y:rn+13,textAnchor:"middle",fontSize:7,fill:"#9CA3AF",children:C},z)),e.map((C,z)=>i.jsx("polygon",{points:w(z),fill:C.color,fillOpacity:.78},C.name)),i.jsxs("g",{children:[i.jsx("line",{x1:m(S).toFixed(1),y1:0,x2:m(S).toFixed(1),y2:rn,stroke:"#6B7280",strokeWidth:1,strokeDasharray:"4,3",opacity:.55}),i.jsxs("text",{x:m(S).toFixed(1),y:-5,textAnchor:"middle",fontSize:7,fill:"#4B5563",fontWeight:"600",children:["Peak ",t[S]]})]}),l!==null&&i.jsx("line",{x1:m(l).toFixed(1),y1:0,x2:m(l).toFixed(1),y2:rn,stroke:"#374151",strokeWidth:1.5,opacity:.6})]})}),l!==null&&i.jsxs(wb,{style:{left:`${f}%`,transform:j},children:[i.jsx(bb,{children:t[l]}),e.map((C,z)=>r.has(C.name)?null:i.jsxs(Id,{children:[i.jsx(jb,{style:{background:C.color}}),i.jsx("span",{style:{flex:1},children:C.name}),i.jsx("span",{style:{fontWeight:600},children:zd(d[l][z].val,n)})]},C.name)),i.jsxs(Id,{style:{borderTop:"1px solid rgba(255,255,255,0.15)",marginTop:4,paddingTop:4},children:[i.jsx("span",{style:{flex:1,fontWeight:600},children:E}),i.jsx("span",{style:{fontWeight:700},children:zd(b,n)})]})]})]})]})}const Dd=u.main`
  padding: 32px;
`,Md=u(vc)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
  text-decoration: none;

  &:hover { color: ${({theme:e})=>e.colors.blue300}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Sb=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Eb=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,Pb=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Tb=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Lb=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ib=u.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,zb=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Nd=u.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.15s;

  &:hover { color: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
    border-radius: 3px;
  }
`,Rb=u.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,Db=u.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin-bottom: -1px;
  border: none;
  border-bottom: 2px solid ${({theme:e,$active:t})=>t?e.colors.neutral900:"transparent"};
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e,$active:t})=>t?e.colors.neutral900:e.colors.neutral500};
  cursor: pointer;

  &:hover { color: ${({theme:e})=>e.colors.neutral900}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Jt=u.section`
  margin-bottom: 32px;
`,xo=u.h2`
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,L0=u.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||3}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,wl=u.div`
  padding: 18px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,bl=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,jl=u.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,kl=u.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
  display: flex;
  align-items: baseline;
  gap: 5px;
`;u.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral600};
`;const Ki=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Mb=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`,Nb=u.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid transparent;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Ab=u.div`
  position: relative;
`,Ob=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1.5px solid ${({theme:e})=>e.colors.blue300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: transparent;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  padding: 0;
  transition: background 0.12s;

  &:hover { background: rgba(1,116,195,0.06); }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Fb=u.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 210px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  z-index: 50;
  overflow: hidden;
`,_b=u.a`
  display: block;
  padding: 10px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({$destructive:e,theme:t})=>e?"#DC2626":t.colors.neutral800};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,Bb=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ad=u.div``,Ko=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 10px;
`,I0=u.button`
  display: inline-flex;
  align-items: center;
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.blue300};
  border-radius: 4px;

  &:hover { opacity: 0.7; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Ub=u.div`
  position: relative;
  display: inline-flex;
`,Wb=u.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -8px;
  width: 300px;
  padding: 14px 16px;
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.neutral900};
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.55;
  z-index: 10;
  pointer-events: auto;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 14px;
    border: 5px solid transparent;
    border-bottom-color: ${({theme:e})=>e.colors.neutral900};
  }

  p {
    margin: 0 0 10px;
    &:last-child { margin-bottom: 0; }
  }
`,Vb=u.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover .ent-tooltip { display: block; }
`,Hb=u.span`
  display: none;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  width: 280px;
  padding: 10px 12px;
  border-radius: 6px;
  background: ${({theme:e})=>e.colors.neutral900};
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  z-index: 20;
  white-space: normal;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 10px;
    border: 5px solid transparent;
    border-top-color: ${({theme:e})=>e.colors.neutral900};
  }
`;function z0({instance:e,isCertCentral:t,plan:n}){const[r,o]=v.useState(!1),l=v.useRef(null);v.useEffect(()=>{if(!r)return;const d=x=>{l.current&&!l.current.contains(x.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[r]);const s=e.subscriptionType==="enterprise",a=e.tier||(s?"Enterprise":"E-commerce");let c;return s&&!t?c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This product is covered by an enterprise agreement with DigiCert."}),i.jsx("p",{children:"Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team."}),i.jsx("p",{children:"Contact your account manager for contract-related questions."})]}):s&&t?c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This CertCentral account is managed through an enterprise agreement with DigiCert."}),i.jsx("p",{children:"Billing, renewals, and any contract changes are handled directly by your DigiCert account team."}),i.jsx("p",{children:"Contact your account manager for any questions."})]}):c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This subscription is purchased and managed through DigiCert's self-service purchasing experience."}),i.jsx("p",{children:"You can manage payment methods, receipts, renewals, and purchases directly from this account."})]}),i.jsxs(wl,{children:[i.jsx(bl,{children:i.jsxs(jl,{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:["Tier",i.jsxs(Ub,{ref:l,children:[i.jsx(I0,{type:"button",onClick:()=>o(d=>!d),children:i.jsx(Jn,{size:13,color:"currentColor"})}),r&&i.jsx(Wb,{children:c})]})]})}),i.jsx(kl,{children:a}),n&&i.jsx(Ki,{children:n})]})}function Qb(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function Gb({dateStr:e,sub:t}){const n=Qb(e);return i.jsxs(wl,{children:[i.jsxs(bl,{children:[i.jsx(jl,{children:"Renewal date"}),i.jsx(l0,{size:15,color:"#9CA3AF"})]}),i.jsx(kl,{children:e}),t&&i.jsx(Ki,{children:t}),!t&&i.jsxs(Ki,{children:[n," days remaining"]})]})}function Kb({term:e}){return i.jsxs(wl,{children:[i.jsxs(bl,{children:[i.jsx(jl,{children:"Contract term"}),i.jsx(l0,{size:15,color:"#9CA3AF"})]}),i.jsx(kl,{style:{fontSize:15,fontWeight:600},children:e||"—"})]})}const cr=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,kn=u.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,U=u.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,W=u.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 14px 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,yo=u.span`
  font-weight: 500;
  color: ${({$tone:e,theme:t})=>e==="error"?"#DC2626":e==="warning"?"#D97706":t.colors.neutral900};
`,R0=u.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`;function Yb({entitlements:e,contractType:t}){return e.length===0?i.jsx(R0,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):t==="drawdown"?i.jsx(cr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"45%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{style:{width:"20%"}})]})}),i.jsx("tbody",{children:e.map(n=>i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),i.jsx(W,{$align:"right",children:n.purchased.toLocaleString()}),i.jsx(W,{})]},n.name))})]})}):i.jsx(cr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"30%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:e.map(n=>{const r=n.allocated>0?n.consumed/n.allocated:0,o=n.remaining<0?"error":r>=.8?"warning":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),i.jsx(W,{$align:"right",children:n.allocated.toLocaleString()}),i.jsx(W,{$align:"right",children:n.consumed.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(yo,{$tone:o,children:n.remaining<0?`Exceeded by ${Math.abs(n.remaining).toLocaleString()}`:n.remaining===0?"0":n.remaining.toLocaleString()})})]},n.name)})})]})})}const Jb=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`,Xb=u.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Od=u.button`
  padding: 5px 14px;
  border: none;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({$active:e,theme:t})=>e?t.colors.blue300:t.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.12s, color 0.12s;

  &:last-child { border-right: none; }
  &:hover:not([data-active='true']) { background: ${({$active:e,theme:t})=>e?void 0:t.colors.neutral50}; }
`;function Fd({entitlements:e,purchasedOnly:t}){return i.jsx(cr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{children:"Entitlement"}),t?i.jsxs(i.Fragment,{children:[i.jsx(U,{$align:"right",children:"Current active"}),i.jsx(U,{$align:"right",children:"Period peak"}),i.jsx(U,{$align:"right",children:"Peak date"})]}):i.jsxs(i.Fragment,{children:[i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{$align:"right",children:"Consumed"}),i.jsx(U,{$align:"right",children:"Remaining"})]})]})}),i.jsx("tbody",{children:e.map(n=>{var o,l;const r=n.remaining<0?"error":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),t?i.jsxs(i.Fragment,{children:[i.jsx(W,{$align:"right",children:((o=n.consumed)==null?void 0:o.toLocaleString())??"—"}),i.jsx(W,{$align:"right",children:((l=n.periodPeak)==null?void 0:l.toLocaleString())??"—"}),i.jsx(W,{$align:"right",children:n.periodPeakDate??"—"})]}):i.jsxs(i.Fragment,{children:[i.jsx(W,{$align:"right",children:n.purchased.toLocaleString()}),i.jsx(W,{$align:"right",children:n.consumed.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(yo,{$tone:r,children:n.remaining<0?`Exceeded by ${Math.abs(n.remaining).toLocaleString()}`:n.remaining.toLocaleString()})})]})]},n.name)})})]})})}function qb({series:e}){return i.jsx(cr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Certificate type"}),i.jsx(U,{$align:"right",children:"Current month ($)"}),i.jsx(U,{$align:"right",children:"Period peak ($)"}),i.jsx(U,{$align:"right",children:"Peak date"})]})}),i.jsx("tbody",{children:e.map(t=>{const n=t.monthlyCost[t.monthlyCost.length-1]??0,r=Math.max(...t.monthlyCost);return i.jsxs("tr",{children:[i.jsx(W,{children:t.name}),i.jsxs(W,{$align:"right",children:["$",n.toLocaleString()]}),i.jsxs(W,{$align:"right",children:["$",r.toLocaleString()]}),i.jsx(W,{$align:"right",children:t.periodPeakDate})]},t.name)})})]})})}function Zb({instance:e,purchasedOnly:t}){const[n,r]=v.useState("table"),{peakUsageData:o}=e,l=o.series.map(s=>({...s,monthly:s.monthlyCost}));return i.jsxs(Jt,{children:[i.jsxs(Jb,{children:[i.jsx(xo,{style:{margin:0},children:t?"Entitlements and usage":"Consumption"}),i.jsxs(Xb,{children:[i.jsx(Od,{$active:n==="table",onClick:()=>r("table"),children:"Table"}),i.jsx(Od,{$active:n==="chart",onClick:()=>r("chart"),children:"Chart"})]})]}),n==="table"?t?i.jsxs(i.Fragment,{children:[i.jsx(Ko,{style:{marginBottom:10},children:"Consumption (Quantities)"}),i.jsx(Fd,{entitlements:e.entitlements,purchasedOnly:!0}),i.jsxs("div",{style:{marginTop:24},children:[i.jsx(Ko,{style:{marginBottom:10},children:"Consumption (USD)"}),i.jsx(qb,{series:o.series})]})]}):i.jsx(Fd,{entitlements:e.entitlements,purchasedOnly:!1}):i.jsxs(Bb,{children:[i.jsxs(Ad,{children:[i.jsx(Ko,{children:"Consumption (USD)"}),i.jsx(Rd,{series:l,monthLabels:o.monthLabels,yFormat:"$"})]}),i.jsxs(Ad,{children:[i.jsx(Ko,{children:"Consumption quantities"}),i.jsx(Rd,{series:o.series,monthLabels:o.monthLabels})]})]})]})}const ej=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  flex-wrap: wrap;
`,tj=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nj=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,rj=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,oj=u.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.blue300};
  background: ${({theme:e})=>e.colors.white};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.12s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,ij=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function lj({instance:e}){const{purchasedControls:t=[],includedResources:n=[]}=e;return i.jsxs(i.Fragment,{children:[i.jsxs(Jt,{children:[i.jsx(xo,{children:"Entitlements and usage"}),i.jsx(cr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:t.map(r=>{const o=r.purchased>0?r.used/r.purchased:0,l=r.remaining<0?"error":o>=.8?"warning":void 0,s=r.planIncluded!=null&&r.addOnPurchased!=null;return i.jsxs("tr",{children:[i.jsx(W,{children:s?i.jsxs(Vb,{children:[r.name,i.jsx(I0,{as:"span",style:{cursor:"default"},children:i.jsx(Jn,{size:13,color:"currentColor"})}),i.jsxs(Hb,{className:"ent-tooltip",children:["Includes ",r.planIncluded," keypairs with your current plan + ",r.addOnPurchased," purchased keypairs."]})]}):r.name}),i.jsx(W,{$align:"right",children:r.purchased.toLocaleString()}),i.jsx(W,{$align:"right",children:r.used.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(yo,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]}),i.jsxs(Jt,{children:[i.jsx(xo,{children:"Included resources"}),i.jsx(ij,{children:"Resource quotas included with your plan. Quotas increase automatically when you upgrade your plan."}),i.jsx(cr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:n.map(r=>{const o=r.available>0?r.used/r.available:0,l=r.remaining<0?"error":o>=.8?"warning":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:r.name}),i.jsx(W,{$align:"right",children:typeof r.available=="number"?r.available.toLocaleString():r.available}),i.jsx(W,{$align:"right",children:r.used.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(yo,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]})]})}function sj(){return i.jsx(Jt,{children:i.jsxs(ej,{children:[i.jsxs(tj,{children:[i.jsx(nj,{children:"Manage finances and funds"}),i.jsx(rj,{children:"View purchase history, balance, account pricing, deposit funds, and pay invoices in CertCentral."})]}),i.jsxs(oj,{href:"/certcentral-finances.html",target:"_blank",rel:"noopener noreferrer",children:["Manage finances",i.jsx(Ec,{size:14,color:"currentColor"})]})]})})}function aj({instance:e,isCertCentral:t}){return i.jsx(Jt,{children:i.jsxs(L0,{$cols:2,children:[i.jsx(z0,{instance:e,isCertCentral:t,plan:e.plan}),i.jsx(Kb,{term:e.contractTerm})]})})}function cj({instance:e,isCertCentral:t,showLastMonth:n=!0}){var o,l;const r=((l=(o=e.receipts)==null?void 0:o[0])==null?void 0:l.amount)??e.billing.price.split(" / ")[0];return i.jsx(Jt,{children:i.jsxs(L0,{$cols:n?3:2,children:[i.jsx(z0,{instance:e,isCertCentral:t}),n&&i.jsxs(wl,{children:[i.jsxs(bl,{children:[i.jsx(jl,{children:"Last 30 days"}),i.jsx(Sc,{size:15,color:"#9CA3AF"})]}),i.jsx(kl,{children:r}),i.jsx(Ki,{children:"Last month's spend"})]}),i.jsx(Gb,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"})]})})}const uj=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,dj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,pj=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,fj=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.neutral600};
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 4px;

  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,hj=u.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,gj=u.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,mj=u.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,xj=u.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,yj=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,vj=u.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function wj({category:e}){const[t,n]=v.useState(e.products.length>0);return i.jsxs(uj,{children:[i.jsxs(dj,{onClick:()=>n(r=>!r),children:[i.jsxs(pj,{children:[i.jsx(fj,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(o=>!o)},children:t?i.jsx(vl,{size:14,color:"currentColor"}):i.jsx(mt,{size:14,color:"currentColor"})}),i.jsx(hj,{children:e.name})]}),i.jsx(gj,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&i.jsx(mj,{children:e.products.length===0?i.jsx(vj,{children:"No products purchased yet."}):i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Product"}),i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Available"})]})}),i.jsx("tbody",{children:e.products.map((r,o)=>i.jsxs("tr",{children:[i.jsxs(W,{children:[i.jsx(xj,{children:r.name}),i.jsx(yj,{children:r.type})]}),i.jsx(W,{$align:"right",children:r.purchased}),i.jsx(W,{$align:"right",children:r.used}),i.jsx(W,{$align:"right",children:i.jsx(yo,{$tone:r.available===0?"error":void 0,children:r.available})})]},o))})]})})]})}function bj({categories:e}){return i.jsxs(Jt,{children:[i.jsx(xo,{children:"Products"}),e.map(t=>i.jsx(wj,{category:t},t.id))]})}function jj(){const{subscriptionId:e}=_x(),[t,n]=v.useState(null),[r,o]=v.useState(!1),[l,s]=v.useState(!1),[a,c]=v.useState(!1),d=v.useRef(null),[x]=Ph(),g=x.get("env"),m=g?xi().find(f=>f.id===e&&f.envId===g)??xi().find(f=>{var j;return f.id===e&&((j=f.envIds)==null?void 0:j.includes(g))}):xi().find(f=>f.id===e&&f.envIds!=null)??c0().find(f=>f.id===e),k=(()=>{var f;return m?g&&m.envIds?{label:"Environment",value:((f=gn.find(j=>j.id===g))==null?void 0:f.name)??g}:m.envNames?{label:"Available in",value:m.envNames.join(", ")}:m.envName?{label:"Environment",value:m.envName}:null:null})(),w=e==="certcentral"||((e==null?void 0:e.startsWith("certcentral-"))??!1);if(v.useEffect(()=>{document.title=m?`${m.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[m==null?void 0:m.id,m==null?void 0:m.name]),v.useEffect(()=>{var f;n(((f=m==null?void 0:m.instances[0])==null?void 0:f.instanceId)??null)},[e]),v.useEffect(()=>{if(!a)return;const f=b=>{d.current&&!d.current.contains(b.target)&&c(!1)},j=b=>{b.key==="Escape"&&c(!1)};return document.addEventListener("mousedown",f),document.addEventListener("keydown",j),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("keydown",j)}},[a]),!m)return i.jsxs(Dd,{children:[i.jsxs(Md,{to:-1,children:[i.jsx(Qi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),i.jsx(R0,{children:"This subscription could not be found."})]});const y=m.instances.find(f=>f.instanceId===t)||m.instances[0],S=w&&y.subscriptionType==="ecommerce",h=w?"CertCentral":m.name,p=S?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Product overview"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${h}`},{label:"Product overview"},{label:"Documentation"}];return i.jsxs(Dd,{children:[i.jsxs(Md,{to:-1,children:[i.jsx(Qi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),i.jsxs(Sb,{children:[i.jsxs(Eb,{children:[i.jsx(Pb,{children:jn(m.iconType,24,"currentColor")}),i.jsxs(Tb,{children:[i.jsx(Lb,{children:i.jsx(Ib,{children:m.name})}),(k||m.accountName)&&i.jsxs(zb,{children:[k&&i.jsxs(i.Fragment,{children:[i.jsxs("strong",{children:[k.label,":"]})," ",k.value]}),k&&m.accountName&&i.jsx(i.Fragment,{children:" | "}),m.accountName&&i.jsxs(i.Fragment,{children:[i.jsx("strong",{children:"Account name:"})," ",m.accountName]}),m.accountId&&i.jsxs(i.Fragment,{children:[" | ",i.jsx("strong",{children:"Account ID:"})," ",m.accountId]})]})]})]}),i.jsxs(Mb,{children:[w?i.jsxs(Nd,{type:"button",onClick:()=>s(!0),children:[i.jsx(mo,{size:15,color:"currentColor"}),"Need help?"]}):i.jsxs(Nd,{type:"button",onClick:()=>o(!0),children:[i.jsx(mo,{size:15,color:"currentColor"}),"Need help?"]}),S&&i.jsxs(Nb,{type:"button",children:[i.jsx(Gy,{size:14,color:"currentColor"}),"Buy certificates"]}),i.jsxs(Ab,{ref:d,children:[i.jsx(Ob,{type:"button",onClick:()=>c(f=>!f),"aria-label":"More actions","aria-expanded":a,children:i.jsx(Gi,{size:15,color:"currentColor"})}),a&&i.jsx(Fb,{children:p.map(f=>i.jsx(_b,{$destructive:f.destructive,href:"#",onClick:()=>c(!1),children:f.label},f.label))})]})]})]}),m.instances.length>1&&i.jsx(Rb,{role:"tablist","aria-label":"CertCentral instances",children:m.instances.map(f=>i.jsx(Db,{role:"tab",type:"button",$active:f.instanceId===y.instanceId,"aria-selected":f.instanceId===y.instanceId,onClick:()=>n(f.instanceId),children:f.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},f.instanceId))}),y.subscriptionType==="enterprise"?i.jsxs(i.Fragment,{children:[i.jsx(aj,{instance:y,isCertCentral:w}),m.id==="software-trust"?i.jsx(lj,{instance:y}):w&&y.contractType==="peak-usage"?i.jsx(Zb,{instance:y,purchasedOnly:m.accountId==="1001445"}):i.jsxs(Jt,{children:[i.jsx(xo,{children:"Entitlements and usage"}),i.jsx(Yb,{entitlements:y.entitlements,contractType:y.contractType})]}),w&&m.accountId!=="1001445"&&m.accountId!=="2003891"&&i.jsx(sj,{})]}):i.jsxs(i.Fragment,{children:[i.jsx(cj,{instance:y,isCertCentral:w,showLastMonth:m.accountId!=="3007234"}),i.jsx(bj,{categories:y.productCategories})]}),i.jsx(E0,{open:r,onClose:()=>o(!1)}),i.jsx(fb,{open:l,onClose:()=>s(!1)})]})}const kj=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  padding: 64px 24px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
`,Cj=u.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,$j=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Sj=u.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function D0({icon:e,title:t,children:n,action:r}){return i.jsxs(kj,{children:[i.jsx(Cj,{children:e}),t&&i.jsx($j,{children:t}),i.jsx(Sj,{children:n}),r]})}const M0=u.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid transparent;
  background: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.white};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s ease;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Ej=u(M0)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function N0({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${Cd.name})`}),o=`mailto:${Cd.email}?${r.toString()}`,l=e==="outline"?Ej:M0;return i.jsx(l,{href:o,...n,children:"Contact account manager"})}const _d=u.main`
  padding: 32px;
`,Pj=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Tj=u.div``,Bd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ud=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Lj=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,is=u.div`
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 16px 20px;
  border: 1px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral200};
  border-left: 3px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,ls=u.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;
  align-items: center;
  gap: 6px;
`,ss=u.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
`,Ij=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,zj=u.div`
  margin-left: auto;
`,Pc=u.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  background: ${({theme:e})=>e.colors.white};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  cursor: pointer;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Rj=u(Pc)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,Dj=u(Pc)``,Mj=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Nj=u.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,Et=u.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 11px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  white-space: nowrap;
  user-select: none;
`,Pt=u.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,Aj=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,as={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},Oj=u.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=as[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=as[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=as[e])==null?void 0:t.color)||"#374151"}};
`,Fj=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,_j=u.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,Bj=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.neutral600};
  cursor: pointer;
  border-radius: 4px;

  &:hover { color: ${({theme:e})=>e.colors.blue300}; background: ${({theme:e})=>e.colors.neutral100}; }
`,Uj=u.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral50};
`,Wj=u.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  margin-bottom: 24px;
  background: ${({theme:e})=>e.colors.blue50||"#EAF4FC"};
  border: 1px solid ${({theme:e})=>e.colors.blue200||"#90CAF9"};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: 1.5;
`,Vj=u.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`,Hj=["All","Invoices","Receipts","Refunds"],Wd=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function Qj({scenario:e}){const[t,n]=v.useState("All"),[r,o]=v.useState(!1);if(v.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return i.jsxs(_d,{children:[i.jsx(Bd,{children:"Receipts and invoices"}),i.jsx(Ud,{style:{marginBottom:24},children:"Download receipts, invoices, and other billing documents for your account."}),i.jsx(D0,{icon:i.jsx(Uy,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:i.jsx(N0,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const l=4,s="$2,520.00",a="Nov 20, 2025",c=t==="All"?Wd:Wd.filter(d=>t==="Invoices"?d.type==="Invoice":t==="Receipts"?d.type==="Receipt":t==="Refunds"?d.type==="Refund":!0);return i.jsxs(_d,{children:[i.jsxs(Wj,{children:[i.jsx(Vj,{children:i.jsx(Jn,{size:16,color:"currentColor"})}),i.jsxs("span",{children:["Receipts and invoices apply to ",i.jsx("strong",{children:"self-service (e-commerce) subscriptions only"}),". Enterprise contract billing documents are managed separately — contact your account manager for enterprise invoices or billing records."]})]}),i.jsx(Pj,{children:i.jsxs(Tj,{children:[i.jsx(Bd,{children:"Receipts and invoices"}),i.jsx(Ud,{children:"Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage."})]})}),i.jsxs(Lj,{children:[i.jsxs(is,{$alert:!0,children:[i.jsxs(ls,{children:[i.jsx(ad,{size:14,color:"#DC2626"}),"Invoices overdue"]}),i.jsx(ss,{children:l})]}),i.jsxs(is,{$alert:!0,children:[i.jsxs(ls,{children:[i.jsx(ad,{size:14,color:"#DC2626"}),"Total balance overdue"]}),i.jsx(ss,{$blue:!0,children:s})]}),i.jsxs(is,{children:[i.jsx(ls,{children:"Next invoice due"}),i.jsx(ss,{$blue:!0,children:a})]})]}),i.jsxs(Ij,{children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsxs(Pc,{type:"button",onClick:()=>o(d=>!d),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,i.jsx(mt,{size:13,color:"currentColor"})]}),r&&i.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:Hj.map(d=>i.jsx("button",{type:"button",onClick:()=>{n(d),o(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:d===t?"#EAF1FB":"white",color:d===t?"#0174C3":"#1A1F27",fontWeight:d===t?500:400},children:d},d))})]}),i.jsxs(Rj,{type:"button",children:[i.jsx(Qy,{size:14,color:"currentColor"}),"Filter",i.jsx(mt,{size:13,color:"currentColor"})]}),i.jsx(zj,{children:i.jsxs(Dj,{type:"button",children:["Download CSV",i.jsx(mt,{size:13,color:"currentColor"})]})})]}),i.jsxs(Mj,{children:[i.jsxs(Nj,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(Et,{style:{width:"140px"},children:"Invoice"}),i.jsx(Et,{children:"Type"}),i.jsx(Et,{children:"Issued on"}),i.jsx(Et,{children:"Status"}),i.jsx(Et,{$align:"right",children:"Amount"}),i.jsx(Et,{children:"Due on"}),i.jsx(Et,{children:"Ordered by"}),i.jsx(Et,{})]})}),i.jsx("tbody",{children:c.map((d,x)=>i.jsxs("tr",{children:[i.jsx(Pt,{children:i.jsx(Aj,{href:"#",children:d.id})}),i.jsx(Pt,{children:d.type}),i.jsx(Pt,{children:d.issuedOn}),i.jsx(Pt,{children:i.jsx(Oj,{$status:d.status,children:d.status})}),i.jsx(Pt,{$align:"right",children:d.amount}),i.jsx(Pt,{children:d.dueOn}),i.jsx(Pt,{children:d.orderedBy}),i.jsx(Pt,{children:i.jsxs(Fj,{children:[(d.status==="Overdue"||d.status==="Upcoming")&&i.jsx(_j,{type:"button",children:"Pay"}),i.jsx(Bj,{type:"button","aria-label":"Download",children:i.jsx(Hy,{size:15,color:"currentColor"})})]})})]},`${d.id}-${x}`))})]}),i.jsxs(Uj,{children:["1 to ",c.length," of 8,618"]})]})]})}const Vd=u.main`
  padding: 32px;
`,Gj=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,Kj=u.div``,Hd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Qd=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,Yj=u.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  padding-top: 6px;
  transition: color 0.15s;

  &:hover { color: ${({theme:e})=>e.colors.blue500}; text-decoration: underline; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: 2px;
    border-radius: 3px;
  }
`,Gd=u.div`
  margin-bottom: 32px;
`,Kd=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,Yd=u.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Jd=u.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.blue300};
  background: ${({theme:e})=>e.colors.white};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, background 0.15s;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
  }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Jj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Xj=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,qj=u.div`
  width: 56px;
  height: 36px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 900;
  font-style: italic;
  color: #1a1f71;
  letter-spacing: -0.5px;
  background: ${({theme:e})=>e.colors.white};
  flex-shrink: 0;
`,Zj=u.div``,ek=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,tk=u.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,nk=u.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,rk=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,A0=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.neutral600};
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.md};

  &:hover { background: ${({theme:e})=>e.colors.neutral100}; color: ${({theme:e})=>e.colors.neutral900}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,ok=u.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,ik=u.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,lk=u(A0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Yo=u.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,Jo=u.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Xo=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,sk=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`,ak=u.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  margin-bottom: 28px;
  background: ${({theme:e})=>e.colors.blue50||"#EAF4FC"};
  border: 1px solid ${({theme:e})=>e.colors.blue200||"#90CAF9"};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: 1.5;
`,ck=u.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`;function uk({scenario:e}){return v.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?i.jsxs(Vd,{children:[i.jsx(Hd,{children:"Payment details"}),i.jsx(Qd,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),i.jsx(D0,{icon:i.jsx(Vy,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:i.jsx(N0,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):i.jsxs(Vd,{children:[i.jsxs(ak,{children:[i.jsx(ck,{children:i.jsx(Jn,{size:16,color:"currentColor"})}),i.jsxs("span",{children:["Payment details apply to ",i.jsx("strong",{children:"self-service (e-commerce) subscriptions only"}),". Enterprise contract billing is managed separately — contact your account manager for invoices or payment changes related to enterprise products."]})]}),i.jsxs(Gj,{children:[i.jsxs(Kj,{children:[i.jsx(Hd,{children:"Payment details"}),i.jsx(Qd,{children:"Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method."})]}),i.jsxs(Yj,{href:"#",children:[i.jsx(Jn,{size:15,color:"currentColor"}),"Need help?"]})]}),i.jsxs(Gd,{children:[i.jsxs(Kd,{children:[i.jsx(Yd,{children:"Payment methods"}),i.jsxs(Jd,{type:"button",children:[i.jsx(sd,{size:14,color:"currentColor"}),"Add payment method"]})]}),i.jsxs(Jj,{children:[i.jsxs(Xj,{children:[i.jsx(qj,{children:"VISA"}),i.jsxs(Zj,{children:[i.jsxs(ek,{children:[i.jsx(tk,{children:"Visa •••• 8350"}),i.jsx(nk,{children:"Default"})]}),i.jsx(rk,{children:"Expires 02/28"})]})]}),i.jsx(A0,{type:"button","aria-label":"Payment method options",children:i.jsx(Gi,{size:16,color:"currentColor"})})]})]}),i.jsxs(Gd,{children:[i.jsxs(Kd,{children:[i.jsx(Yd,{children:"Billing contacts"}),i.jsxs(Jd,{type:"button",children:[i.jsx(sd,{size:14,color:"currentColor"}),"Add billing contact"]})]}),i.jsxs(ok,{children:[i.jsx(lk,{type:"button","aria-label":"Contact options",children:i.jsx(Gi,{size:16,color:"currentColor"})}),i.jsx(ik,{children:"John Doe"}),i.jsxs(Yo,{children:[i.jsx(Jo,{children:"Address"}),i.jsxs(Xo,{children:["123 Main Street",i.jsx("br",{}),"Suite 100",i.jsx("br",{}),"San Francisco, CA 94105",i.jsx("br",{}),"United States"]})]}),i.jsxs(Yo,{children:[i.jsx(Jo,{children:"Email address"}),i.jsx(Xo,{children:"john.doe@winthecustomer.com"})]}),i.jsxs(Yo,{children:[i.jsx(Jo,{children:"Phone number"}),i.jsx(Xo,{children:"650 123 4567"})]}),i.jsxs(Yo,{children:[i.jsxs(sk,{children:[i.jsx(Jo,{style:{margin:0},children:"VAT ID"}),i.jsx(Jn,{size:14,color:"#0174C3"})]}),i.jsx(Xo,{children:"23503820"})]})]})]})]})}const dk=u.main`
  padding: 32px;
  max-width: 1100px;
`,pk=u.div`
  margin-bottom: 36px;
`,fk=u.h1`
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,hk=u.p`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
  max-width: 560px;
`,gk=u.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,mk=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  }
`,xk=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,yk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,vk=u.div`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1.5px solid ${({$color:e})=>e||"#2563EB"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: ${({$color:e})=>e||"#2563EB"};
  flex-shrink: 0;
  letter-spacing: -0.3px;
`,wk=u.a`
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,bk=u.span`
  flex-shrink: 0;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$variant:e})=>e==="included"?"rgba(39,168,114,0.1)":e==="licensed"?"#EAF1FB":"#F3F4F6"};
  color: ${({$variant:e})=>e==="included"?"#1F8F60":e==="licensed"?"#0174C3":"#4B5563"};
`,jk=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: 1.5;
`,kk=u.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Ck=u.li`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.45;

  &::before {
    content: '·';
    color: ${({theme:e})=>e.colors.neutral400};
    font-size: 14px;
    margin-top: 1px;
    flex-shrink: 0;
  }
`,$k=u.div`
  margin-top: auto;
  padding-top: 4px;
`,Sk=u.button`
  padding: 7px 18px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.blue300};
  background: ${({theme:e})=>e.colors.white};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  transition: background 0.12s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,Ek=[{abbr:"TL",color:"#0174C3",name:"Trust Lifecycle",status:"essentials",statusLabel:"Essentials",description:"Modernizes certificate lifecycle visibility and management across public and private CAs.",features:["Gain full visibility with discovery and a centralized certificate inventory","Manage certificates regardless of who issued them (CA-agnostic control)","Automate enrollment, renewal, and provisioning at enterprise scale","Prevent outages with real-time monitoring, alerts, and reporting"],action:"Upgrade"},{abbr:"DNS",color:"#0174C3",name:"DigiCert DNS",status:null,description:"Modern DNS management for secure, scalable global traffic delivery",features:["Unified DNS platform for secure, scalable deployments","Real-time insights to optimize performance and availability","Intelligent monitoring to enforce best practices and compliance","Global traffic routing for speed, resilience, and reliability"],action:"Learn more"},{abbr:"CC",color:"#0174C3",name:"CertCentral",status:"included",statusLabel:"Included",description:"Centralizes certificate purchasing and management with scale, compliance, APIs—and AI-based validation automation.",features:["Buy and manage public trust certificates across TLS/SSL, S/MIME, Code Signing, and more","AI-based validation automation to speed issuance and reduce manual effort","Multi-language support with regional data residency options","Renewal reminders, notifications, plus flexible APIs and webhooks for existing workflows"],action:"Buy certificates"},{abbr:"ST",color:"#0174C3",name:"Software Trust",status:null,description:"Secure and govern software releases with trusted code signing",features:["Centralized access control for decentralized signing operations","Policy-based signing to ensure compliance and integrity","CI/CD integration across modern development platforms","Automated signing for releases, artifacts, and SBOMs"],action:"Learn more"},{abbr:"CA+",color:"#0174C3",name:"Private CA",status:"licensed",statusLabel:"Licensed",description:"Enterprise-grade private PKI with centralized control and governance",features:["Centralized governance for internal public key infrastructure","Rapid deployment of root and intermediate certificate authorities","Support for cloud, on-prem, and hybrid environments","Hardware-backed key protection with modern cryptographic standards"],action:"Learn more"},{abbr:"IoT",color:"#0174C3",name:"Device Trust",status:null,description:"End-to-end device identity and security lifecycle management",features:["Device protection across manufacturing, deployment, and retirement","Hardware-rooted identities for every connected device","Automated onboarding, configuration, and updates at scale","Readiness for evolving cryptographic and post-quantum standards"],action:"Learn more"},{abbr:"CT",color:"#0174C3",name:"Content Trust",status:null,description:"Centralized control and governance for document signing workflows",features:["Centralized visibility across signing activity, policies, and certificates","PKI-backed digital signing aligned with global trust standards","Seamless integration with existing tools via CSC-based APIs","Cloud-based key protection to reduce loss, theft, and misuse"],action:"Learn more"}];function Pk(){return v.useEffect(()=>{document.title="Explore DigiCert products — DigiCert ONE"},[]),i.jsxs(dk,{children:[i.jsxs(pk,{children:[i.jsx(fk,{children:"Explore DigiCert products"}),i.jsx(hk,{children:"Build and protect digital trust across every certificate, identity, and device — all from one platform."})]}),i.jsx(gk,{children:Ek.map(e=>i.jsxs(mk,{children:[i.jsxs(xk,{children:[i.jsxs(yk,{children:[i.jsx(vk,{$color:e.color,children:e.abbr}),i.jsx(wk,{href:"#",children:e.name})]}),e.status&&i.jsx(bk,{$variant:e.status,children:e.statusLabel})]}),i.jsx(jk,{children:e.description}),i.jsx(kk,{children:e.features.map(t=>i.jsx(Ck,{children:t},t))}),i.jsx($k,{children:i.jsx(Sk,{type:"button",children:e.action})})]},e.name))})]})}const Tk=u.main`
  padding: 32px;
`,Lk=u.h1`
  margin: 0 0 24px;
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ik=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,zk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Rk=u.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Dk=u.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Mk=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  background: #FEF3C7;
  color: #92400E;
  font-size: 12px;
  font-weight: 500;
`,Nk=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Ak=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  text-align: right;
`,Ok=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
`,Fk=u.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
`,_k=u.select`
  padding: 6px 32px 6px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};
  background: white;
  cursor: pointer;
  appearance: auto;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.blue300};
    box-shadow: 0 0 0 2px rgba(1, 116, 195, 0.15);
  }
`,Bk=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Uk=u.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,Wk=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,cs=u.div`
  padding: 24px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`,us=u.h2`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,ds=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  line-height: 1.5;
`,Xd=u.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 14px;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
`,ps=u.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 14px;
`,at=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,ct=u.span`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
  display: flex;
`,Tn=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,qd=u.p`
  margin: 12px 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,qo=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Vk=u.div``,Hk=u.h2`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Qk=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Gk=u.p`
  margin: 0 0 10px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Kk=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,Yk=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-size: 15px;
  font-weight: 600;
  flex-shrink: 0;
`,Jk=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Xk=u.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,qk=u.div`
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: #EAF1FB;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,Zk=u.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.blue300};
`,eC=u.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.4;
`,tC=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  line-height: 1.5;
`,Zd=u.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;function nC(){const[e,t]=v.useState("north-america");return v.useEffect(()=>{document.title="Support — CertCentral"},[]),i.jsxs(Tk,{children:[i.jsx(Lk,{children:"Support"}),i.jsxs(Ik,{children:[i.jsx(zk,{children:i.jsxs("div",{children:[i.jsx(Rk,{children:"Current plan"}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"2px"},children:[i.jsx(Dk,{children:"Standard"}),i.jsx(Mk,{children:"24x5 support"})]})]})}),i.jsxs("div",{style:{textAlign:"right"},children:[i.jsx(Nk,{children:"Account number"}),i.jsx(Ak,{children:"126993"})]})]}),i.jsxs(Ok,{children:[i.jsx(Fk,{htmlFor:"support-region",children:"Region"}),i.jsxs(_k,{id:"support-region",value:e,onChange:n=>t(n.target.value),children:[i.jsx("option",{value:"north-america",children:"North America"}),i.jsx("option",{value:"europe",children:"Europe"}),i.jsx("option",{value:"asia-pacific",children:"Asia Pacific"})]})]}),i.jsxs(Bk,{children:[i.jsxs(Uk,{children:[i.jsxs(cs,{children:[i.jsx(us,{children:"Technical support"}),i.jsx(ds,{children:"Get help with certificate installation, CSRs, and other technical issues."}),i.jsx(Xd,{type:"button",children:"Support chat"}),i.jsxs(ps,{children:[i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(Sr,{size:14})}),i.jsx(Tn,{href:"#",children:"Upgrade to the Business plan for phone support."})]}),i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(mi,{size:14})}),i.jsx(Tn,{href:"mailto:cc.standard.support@digicert.com",children:"cc.standard.support@digicert.com"})]}),i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(Ec,{size:14})}),i.jsx(Tn,{href:"https://support.digicert.com",target:"_blank",rel:"noopener noreferrer",children:"Support portal"})]})]}),i.jsx(qd,{children:"Support hours"}),i.jsx(qo,{children:"Monday - Friday: 24 hours"}),i.jsx(qo,{children:"Saturday and Sunday: Closed"})]}),i.jsxs(cs,{children:[i.jsx(us,{children:"Validation support"}),i.jsx(ds,{children:"Get help with domain and organization validation."}),i.jsx(Xd,{type:"button",children:"Validation chat"}),i.jsxs(ps,{children:[i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(Sr,{size:14})}),i.jsx("span",{children:"+1 800 579 2848"})]}),i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(Sr,{size:14})}),i.jsx("span",{children:"+1 801 769 0749"})]}),i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(mi,{size:14})}),i.jsx(Tn,{href:"mailto:standard.validation@digicert.com",children:"standard.validation@digicert.com"})]})]}),i.jsx(qd,{children:"Support hours"}),i.jsx(qo,{children:"Monday - Friday: 24 hours"}),i.jsx(qo,{children:"Saturday and Sunday: Closed"})]}),i.jsxs(cs,{children:[i.jsx(us,{children:"Sales support"}),i.jsx(ds,{children:"Get help with contract terms, pricing, and product selection."}),i.jsx(ps,{children:i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(Sr,{size:14})}),i.jsx(Tn,{href:"tel:+18017701701",children:"+1 801 770 1701"})]})})]})]}),i.jsxs(Wk,{children:[i.jsxs(Vk,{children:[i.jsx(Hk,{children:"Sales contact"}),i.jsx(Qk,{children:"Get help with any sales related questions."}),i.jsx(Gk,{children:"Talk to your Sales contact:"}),i.jsxs(Kk,{children:[i.jsx(Yk,{children:"d"}),i.jsxs(Jk,{children:[i.jsx(Xk,{children:"Sales Team"}),i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(Sr,{size:14})}),i.jsx("span",{style:{color:"#9ca3af"},children:"*"})]}),i.jsxs(at,{children:[i.jsx(ct,{children:i.jsx(mi,{size:14})}),i.jsx(Tn,{href:"mailto:sales@digicert.com",children:"sales@digicert.com"})]})]})]})]}),i.jsxs(qk,{children:[i.jsx(Zk,{children:i.jsx(Ky,{size:28,color:"currentColor"})}),i.jsxs(eC,{children:["Need to give us a call?",i.jsx("br",{}),"Get ",i.jsx("span",{style:{color:"#0174C3"},children:"Business support"})," today."]}),i.jsx(tC,{children:"Fast, knowledgeable phone assistance is available now with DigiCert's Business support plan. Upgrade anytime – select the link below or contact your sales representative."}),i.jsx(Zd,{href:"mailto:sales@digicert.com",children:"Contact sales@digicert.com to upgrade your support plan"}),i.jsx(Zd,{href:"#",children:"Compare all support plans"})]})]})]})]})}function rC({containerRef:e}){const{pathname:t}=nt();return v.useEffect(()=>{e.current?e.current.scrollTop=0:window.scrollTo(0,0)},[t,e]),null}const oC=Ty`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-padding-top: ${({theme:e})=>e.layout.topNavHeight};
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: ${({theme:e})=>e.typography.fontFamily};
    background: ${({theme:e})=>e.colors.white};
    color: ${({theme:e})=>e.colors.neutral900};
    -webkit-font-smoothing: antialiased;
  }

  .skip-link {
    position: absolute;
    top: -9999px;
    left: 0;
    z-index: 9999;
    padding: 8px 16px;
    background: ${({theme:e})=>e.colors.blue300};
    color: white;
    font-family: ${({theme:e})=>e.typography.fontFamily};
    font-size: 14px;
    text-decoration: none;
    border-radius: 0 0 4px 0;

    &:focus {
      top: 0;
    }
  }
`,iC=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  left: ${({$leftOffset:e})=>e};
  right: ${({$rightOffset:e})=>e};
  bottom: 0;
  background: ${({theme:e})=>e.colors.white};
  overflow-y: auto;
  transition: left 0.2s ease, right 0.2s ease;

  @media (max-width: 1023px) and (min-width: 768px) {
    left: ${({theme:e})=>e.layout.iconRailWidth};
    right: 0;
  }

  @media (max-width: 767px) {
    left: 0;
    right: 0;
  }
`;function ep(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function lC(){const[e,t]=v.useState(()=>typeof window<"u"?ep():"desktop");return v.useEffect(()=>{const n=()=>t(ep());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function sC(){const[e,t]=v.useState("dashboard"),[n,r]=v.useState(!1),[o,l]=v.useState(!0),[s,a]=v.useState(null),[c,d]=v.useState("mixed"),x=v.useCallback(()=>r(h=>!h),[]),g=v.useCallback(()=>r(!1),[]),m=v.useCallback(()=>l(h=>!h),[]),k=v.useCallback(h=>{t(h),l(!0)},[]),w=v.useCallback(h=>{t(h),l(!0),r(!1)},[]),y=v.useCallback(h=>{a(p=>p===h?null:h)},[]),S=v.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:o,activeTopNav:s,billingScenario:c,toggleDrawer:x,closeDrawer:g,toggleSpoke:m,setBillingScenario:d,selectProduct:k,selectProductFromDrawer:w,openTopNav:y,closeTopNav:S}}function aC(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:o,toggleDrawer:l,closeDrawer:s,toggleSpoke:a,selectProduct:c,selectProductFromDrawer:d,openTopNav:x,closeTopNav:g}=sC(),m=lC(),k=m==="mobile",w=v.useRef(null);v.useEffect(()=>{m!=="mobile"&&t&&s()},[m,t,s]),v.useEffect(()=>{const h=w.current;h&&(k&&t?(h.setAttribute("inert",""),h.setAttribute("aria-hidden","true")):(h.removeAttribute("inert"),h.removeAttribute("aria-hidden")))},[k,t]);const y=n?"276px":"56px",S=r==="ai-assist"?"400px":"0px";return i.jsxs(i.Fragment,{children:[i.jsx(oC,{}),i.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),i.jsx(Bv,{isDrawerOpen:t,onToggleDrawer:l,activeTopNav:r,onOpenTopNav:x,onCloseTopNav:g,onSelectProduct:c,cartCount:3}),i.jsx(Gv,{activeProductId:e,onSelectProduct:c}),i.jsx(s2,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:a,billingScenario:o}),i.jsx(h2,{open:t,activeProductId:e,onSelectProduct:d,onClose:s}),i.jsxs(iC,{ref:w,id:"main-content",$leftOffset:y,$rightOffset:S,children:[i.jsx(rC,{containerRef:w}),i.jsxs(r1,{children:[i.jsx(Ln,{path:"/",element:i.jsx(t1,{to:"/dashboard",replace:!0})}),ev.filter(h=>h!=="/").map(h=>{let p=i.jsx(kd,{});return h==="/dashboard"?p=i.jsx(Y2,{}):h==="/settings/billing"?p=i.jsx(Gw,{}):h==="/settings/billing/receipts"?p=i.jsx(Qj,{scenario:o}):h==="/settings/billing/payment-details"?p=i.jsx(uk,{scenario:o}):h==="/certcentral/support"&&(p=i.jsx(nC,{})),i.jsx(Ln,{path:h,element:p},h)}),i.jsx(Ln,{path:"/settings/billing/all-products",element:i.jsx(Pk,{})}),i.jsx(Ln,{path:"/settings/billing/:subscriptionId",element:i.jsx(jj,{})}),i.jsx(Ln,{path:"*",element:i.jsx(kd,{})})]})]})]})}gh(document.getElementById("root")).render(i.jsx(v.StrictMode,{children:i.jsx(p1,{children:i.jsx(Cy,{theme:Ly,children:i.jsx(aC,{})})})}));
