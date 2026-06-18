function h0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function g0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Id={exports:{}},Hi={},Rd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),m0=Symbol.for("react.portal"),x0=Symbol.for("react.fragment"),y0=Symbol.for("react.strict_mode"),v0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),b0=Symbol.for("react.forward_ref"),j0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),$0=Symbol.for("react.lazy"),pu=Symbol.iterator;function C0(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nd=Object.assign,Dd={};function ir(e,t,n){this.props=e,this.context=t,this.refs=Dd,this.updater=n||zd}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _d(){}_d.prototype=ir.prototype;function aa(e,t,n){this.props=e,this.context=t,this.refs=Dd,this.updater=n||zd}var ua=aa.prototype=new _d;ua.constructor=aa;Nd(ua,ir.prototype);ua.isPureReactComponent=!0;var hu=Array.isArray,Od=Object.prototype.hasOwnProperty,ca={current:null},Md={key:!0,ref:!0,__self:!0,__source:!0};function Ad(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Od.call(t,r)&&!Md.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:mo,type:e,key:i,ref:s,props:o,_owner:ca.current}}function E0(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function P0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gu=/\/+/g;function ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?P0(""+e.key):t.toString(36)}function Xo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mo:case m0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ml(s,0):r,hu(o)?(n="",e!=null&&(n=e.replace(gu,"$&/")+"/"),Xo(o,t,n,"",function(c){return c})):o!=null&&(da(o)&&(o=E0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(gu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",hu(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+ml(i,a);s+=Xo(i,t,n,u,o)}else if(u=C0(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+ml(i,a++),s+=Xo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function $o(e,t,n){if(e==null)return e;var r=[],o=0;return Xo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function T0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Zo={transition:null},L0={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:ca};function Fd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:$o,forEach:function(e,t,n){$o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $o(e,function(){t++}),t},toArray:function(e){return $o(e,function(t){return t})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=ir;D.Fragment=x0;D.Profiler=v0;D.PureComponent=aa;D.StrictMode=y0;D.Suspense=j0;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;D.act=Fd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nd({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Od.call(t,u)&&!Md.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:mo,type:e.type,key:o,ref:i,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:k0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w0,_context:e},e.Consumer=e};D.createElement=Ad;D.createFactory=function(e){var t=Ad.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:b0,render:e}};D.isValidElement=da;D.lazy=function(e){return{$$typeof:$0,_payload:{_status:-1,_result:e},_init:T0}};D.memo=function(e,t){return{$$typeof:S0,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Zo.transition;Zo.transition={};try{e()}finally{Zo.transition=t}};D.unstable_act=Fd;D.useCallback=function(e,t){return ke.current.useCallback(e,t)};D.useContext=function(e){return ke.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};D.useEffect=function(e,t){return ke.current.useEffect(e,t)};D.useId=function(){return ke.current.useId()};D.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ke.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};D.useRef=function(e){return ke.current.useRef(e)};D.useState=function(e){return ke.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ke.current.useTransition()};D.version="18.3.1";Rd.exports=D;var b=Rd.exports;const me=g0(b),I0=h0({__proto__:null,default:me},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0=b,z0=Symbol.for("react.element"),N0=Symbol.for("react.fragment"),D0=Object.prototype.hasOwnProperty,_0=R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O0={key:!0,ref:!0,__self:!0,__source:!0};function Bd(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)D0.call(t,r)&&!O0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:z0,type:e,key:i,ref:s,props:o,_owner:_0.current}}Hi.Fragment=N0;Hi.jsx=Bd;Hi.jsxs=Bd;Id.exports=Hi;var l=Id.exports,Wd={exports:{}},ze={},Ud={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var R=T.length;T.push(I);e:for(;0<R;){var B=R-1>>>1,M=T[B];if(0<o(M,I))T[B]=I,T[R]=M,R=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],R=T.pop();if(R!==I){T[0]=R;e:for(var B=0,M=T.length,ie=M>>>1;B<ie;){var q=2*(B+1)-1,ne=T[q],Pe=q+1,De=T[Pe];if(0>o(ne,R))Pe<M&&0>o(De,ne)?(T[B]=De,T[Pe]=R,B=Pe):(T[B]=ne,T[q]=R,B=q);else if(Pe<M&&0>o(De,R))T[B]=De,T[Pe]=R,B=Pe;else break e}}return I}function o(T,I){var R=T.sortIndex-I.sortIndex;return R!==0?R:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],p=1,h=null,x=3,w=!1,y=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=T)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function k(T){if(j=!1,m(T),!y)if(n(u)!==null)y=!0,vt(v);else{var I=n(c);I!==null&&nn(k,I.startTime-T)}}function v(T,I){y=!1,j&&(j=!1,g(E),E=-1),w=!0;var R=x;try{for(m(I),h=n(u);h!==null&&(!(h.expirationTime>I)||T&&!W());){var B=h.callback;if(typeof B=="function"){h.callback=null,x=h.priorityLevel;var M=B(h.expirationTime<=I);I=e.unstable_now(),typeof M=="function"?h.callback=M:h===n(u)&&r(u),m(I)}else r(u);h=n(u)}if(h!==null)var ie=!0;else{var q=n(c);q!==null&&nn(k,q.startTime-I),ie=!1}return ie}finally{h=null,x=R,w=!1}}var $=!1,S=null,E=-1,_=5,z=-1;function W(){return!(e.unstable_now()-z<_)}function Ue(){if(S!==null){var T=e.unstable_now();z=T;var I=!0;try{I=S(!0,T)}finally{I?Z():($=!1,S=null)}}else $=!1}var Z;if(typeof d=="function")Z=function(){d(Ue)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,tn=Ve.port2;Ve.port1.onmessage=Ue,Z=function(){tn.postMessage(null)}}else Z=function(){C(Ue,0)};function vt(T){S=T,$||($=!0,Z())}function nn(T,I){E=C(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,vt(v))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var R=x;x=I;try{return T()}finally{x=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=x;x=T;try{return I()}finally{x=R}},e.unstable_scheduleCallback=function(T,I,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,T){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=R+M,T={id:p++,callback:I,priorityLevel:T,startTime:R,expirationTime:M,sortIndex:-1},R>B?(T.sortIndex=R,t(c,T),n(u)===null&&T===n(c)&&(j?(g(E),E=-1):j=!0,nn(k,R-B))):(T.sortIndex=M,t(u,T),y||w||(y=!0,vt(v))),T},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(T){var I=x;return function(){var R=x;x=I;try{return T.apply(this,arguments)}finally{x=R}}}})(Vd);Ud.exports=Vd;var M0=Ud.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=b,Re=M0;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,Ur={};function wn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Ur[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=Object.prototype.hasOwnProperty,F0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},xu={};function B0(e){return ns.call(xu,e)?!0:ns.call(mu,e)?!1:F0.test(e)?xu[e]=!0:(mu[e]=!0,!1)}function W0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U0(e,t,n,r){if(t===null||typeof t>"u"||W0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var fa=/[\-:]([a-z])/g;function pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fa,pa);pe[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fa,pa);pe[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fa,pa);pe[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function ha(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U0(t,n,o,r)&&(n=null),r||o===null?B0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),ga=Symbol.for("react.strict_mode"),rs=Symbol.for("react.profiler"),Qd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),ma=Symbol.for("react.forward_ref"),os=Symbol.for("react.suspense"),is=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Gd=Symbol.for("react.offscreen"),yu=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,xl;function Sr(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var yl=!1;function vl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sr(e):""}function V0(e){switch(e.tag){case 5:return Sr(e.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return e=vl(e.type,!1),e;case 11:return e=vl(e.type.render,!1),e;case 1:return e=vl(e.type,!0),e;default:return""}}function ls(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case $n:return"Portal";case rs:return"Profiler";case ga:return"StrictMode";case os:return"Suspense";case is:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kd:return(e.displayName||"Context")+".Consumer";case Qd:return(e._context.displayName||"Context")+".Provider";case ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:ls(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return ls(e(t))}catch{}}return null}function H0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ls(t);case 8:return t===ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q0(e){var t=Yd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=Q0(e))}function Jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ss(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xd(e,t){t=t.checked,t!=null&&ha(e,"checked",t,!1)}function as(e,t){Xd(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?us(e,t.type,n):t.hasOwnProperty("defaultValue")&&us(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function us(e,t,n){(t!=="number"||hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ku(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if($r(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Zd(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Po,ef=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K0=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){K0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function tf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=tf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var G0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fs(e,t){if(t){if(G0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ps(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hs=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gs=null,An=null,Fn=null;function ju(e){if(e=vo(e)){if(typeof gs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ji(t),gs(e.stateNode,e.type,t))}}function rf(e){An?Fn?Fn.push(e):Fn=[e]:An=e}function of(){if(An){var e=An,t=Fn;if(Fn=An=null,ju(e),t)for(e=0;e<t.length;e++)ju(t[e])}}function lf(e,t){return e(t)}function sf(){}var wl=!1;function af(e,t,n){if(wl)return e(t,n);wl=!0;try{return lf(e,t,n)}finally{wl=!1,(An!==null||Fn!==null)&&(sf(),of())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ms=!1;if(dt)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){ms=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{ms=!1}function Y0(e,t,n,r,o,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Rr=!1,gi=null,mi=!1,xs=null,J0={onError:function(e){Rr=!0,gi=e}};function X0(e,t,n,r,o,i,s,a,u){Rr=!1,gi=null,Y0.apply(J0,arguments)}function Z0(e,t,n,r,o,i,s,a,u){if(X0.apply(this,arguments),Rr){if(Rr){var c=gi;Rr=!1,gi=null}else throw Error(P(198));mi||(mi=!0,xs=c)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Su(e){if(kn(e)!==e)throw Error(P(188))}function q0(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Su(o),e;if(i===r)return Su(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function cf(e){return e=q0(e),e!==null?df(e):null}function df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=df(e);if(t!==null)return t;e=e.sibling}return null}var ff=Re.unstable_scheduleCallback,$u=Re.unstable_cancelCallback,eg=Re.unstable_shouldYield,tg=Re.unstable_requestPaint,te=Re.unstable_now,ng=Re.unstable_getCurrentPriorityLevel,va=Re.unstable_ImmediatePriority,pf=Re.unstable_UserBlockingPriority,xi=Re.unstable_NormalPriority,rg=Re.unstable_LowPriority,hf=Re.unstable_IdlePriority,Qi=null,rt=null;function og(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Qi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:sg,ig=Math.log,lg=Math.LN2;function sg(e){return e>>>=0,e===0?32:31-(ig(e)/lg|0)|0}var To=64,Lo=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Cr(a):(i&=s,i!==0&&(r=Cr(i)))}else s=n&~o,s!==0?r=Cr(s):i!==0&&(r=Cr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function ag(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ug(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Je(i),a=1<<s,u=o[s];u===-1?(!(a&n)||a&r)&&(o[s]=ag(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gf(){var e=To;return To<<=1,!(To&4194240)&&(To=64),e}function kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function cg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xf,ka,yf,vf,wf,vs=!1,Io=[],Mt=null,At=null,Ft=null,Qr=new Map,Kr=new Map,Et=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cu(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function mr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=vo(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function fg(e,t,n,r,o){switch(t){case"focusin":return Mt=mr(Mt,e,t,n,r,o),!0;case"dragenter":return At=mr(At,e,t,n,r,o),!0;case"mouseover":return Ft=mr(Ft,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Qr.set(i,mr(Qr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Kr.set(i,mr(Kr.get(i)||null,e,t,n,r,o)),!0}return!1}function kf(e){var t=an(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=uf(n),t!==null){e.blockedOn=t,wf(e.priority,function(){yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hs=r,n.target.dispatchEvent(r),hs=null}else return t=vo(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function Eu(e,t,n){qo(e)&&n.delete(t)}function pg(){vs=!1,Mt!==null&&qo(Mt)&&(Mt=null),At!==null&&qo(At)&&(At=null),Ft!==null&&qo(Ft)&&(Ft=null),Qr.forEach(Eu),Kr.forEach(Eu)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,pg)))}function Gr(e){function t(o){return xr(o,e)}if(0<Io.length){xr(Io[0],e);for(var n=1;n<Io.length;n++){var r=Io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&xr(Mt,e),At!==null&&xr(At,e),Ft!==null&&xr(Ft,e),Qr.forEach(t),Kr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)kf(n),n.blockedOn===null&&Et.shift()}var Bn=gt.ReactCurrentBatchConfig,vi=!0;function hg(e,t,n,r){var o=F,i=Bn.transition;Bn.transition=null;try{F=1,ba(e,t,n,r)}finally{F=o,Bn.transition=i}}function gg(e,t,n,r){var o=F,i=Bn.transition;Bn.transition=null;try{F=4,ba(e,t,n,r)}finally{F=o,Bn.transition=i}}function ba(e,t,n,r){if(vi){var o=ws(e,t,n,r);if(o===null)Il(e,t,r,wi,n),Cu(e,r);else if(fg(o,e,t,n,r))r.stopPropagation();else if(Cu(e,r),t&4&&-1<dg.indexOf(e)){for(;o!==null;){var i=vo(o);if(i!==null&&xf(i),i=ws(e,t,n,r),i===null&&Il(e,t,r,wi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var wi=null;function ws(e,t,n,r){if(wi=null,e=ya(r),e=an(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wi=e,null}function bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ng()){case va:return 1;case pf:return 4;case xi:case rg:return 16;case hf:return 536870912;default:return 16}default:return 16}}var Tt=null,ja=null,ei=null;function jf(){if(ei)return ei;var e,t=ja,n=t.length,r,o="value"in Tt?Tt.value:Tt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ei=o.slice(e,1<r?1-r:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function Pu(){return!1}function Ne(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ro:Pu,this.isPropagationStopped=Pu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=Ne(lr),yo=X({},lr,{view:0,detail:0}),mg=Ne(yo),bl,jl,yr,Ki=X({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(bl=e.screenX-yr.screenX,jl=e.screenY-yr.screenY):jl=bl=0,yr=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Tu=Ne(Ki),xg=X({},Ki,{dataTransfer:0}),yg=Ne(xg),vg=X({},yo,{relatedTarget:0}),Sl=Ne(vg),wg=X({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=Ne(wg),bg=X({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jg=Ne(bg),Sg=X({},lr,{data:0}),Lu=Ne(Sg),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eg[e])?!!t[e]:!1}function $a(){return Pg}var Tg=X({},yo,{key:function(e){if(e.key){var t=$g[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lg=Ne(Tg),Ig=X({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Ne(Ig),Rg=X({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),zg=Ne(Rg),Ng=X({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=Ne(Ng),_g=X({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Og=Ne(_g),Mg=[9,13,27,32],Ca=dt&&"CompositionEvent"in window,zr=null;dt&&"documentMode"in document&&(zr=document.documentMode);var Ag=dt&&"TextEvent"in window&&!zr,Sf=dt&&(!Ca||zr&&8<zr&&11>=zr),Ru=" ",zu=!1;function $f(e,t){switch(e){case"keyup":return Mg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Fg(e,t){switch(e){case"compositionend":return Cf(t);case"keypress":return t.which!==32?null:(zu=!0,Ru);case"textInput":return e=t.data,e===Ru&&zu?null:e;default:return null}}function Bg(e,t){if(En)return e==="compositionend"||!Ca&&$f(e,t)?(e=jf(),ei=ja=Tt=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var Wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wg[e.type]:t==="textarea"}function Ef(e,t,n,r){rf(r),t=ki(t,"onChange"),0<t.length&&(n=new Sa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Yr=null;function Ug(e){Mf(e,0)}function Gi(e){var t=Ln(e);if(Jd(t))return e}function Vg(e,t){if(e==="change")return t}var Pf=!1;if(dt){var $l;if(dt){var Cl="oninput"in document;if(!Cl){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),Cl=typeof Du.oninput=="function"}$l=Cl}else $l=!1;Pf=$l&&(!document.documentMode||9<document.documentMode)}function _u(){Nr&&(Nr.detachEvent("onpropertychange",Tf),Yr=Nr=null)}function Tf(e){if(e.propertyName==="value"&&Gi(Yr)){var t=[];Ef(t,Yr,e,ya(e)),af(Ug,t)}}function Hg(e,t,n){e==="focusin"?(_u(),Nr=t,Yr=n,Nr.attachEvent("onpropertychange",Tf)):e==="focusout"&&_u()}function Qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(Yr)}function Kg(e,t){if(e==="click")return Gi(t)}function Gg(e,t){if(e==="input"||e==="change")return Gi(t)}function Yg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Yg;function Jr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ns.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,t){var n=Ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ou(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function If(){for(var e=window,t=hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hi(e.document)}return t}function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jg(e){var t=If(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lf(n.ownerDocument.documentElement,n)){if(r!==null&&Ea(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Mu(n,i);var s=Mu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xg=dt&&"documentMode"in document&&11>=document.documentMode,Pn=null,ks=null,Dr=null,bs=!1;function Au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bs||Pn==null||Pn!==hi(r)||(r=Pn,"selectionStart"in r&&Ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Jr(Dr,r)||(Dr=r,r=ki(ks,"onSelect"),0<r.length&&(t=new Sa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},El={},Rf={};dt&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Yi(e){if(El[e])return El[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rf)return El[e]=t[n];return e}var zf=Yi("animationend"),Nf=Yi("animationiteration"),Df=Yi("animationstart"),_f=Yi("transitionend"),Of=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Of.set(e,t),wn(t,[e])}for(var Pl=0;Pl<Fu.length;Pl++){var Tl=Fu[Pl],Zg=Tl.toLowerCase(),qg=Tl[0].toUpperCase()+Tl.slice(1);Xt(Zg,"on"+qg)}Xt(zf,"onAnimationEnd");Xt(Nf,"onAnimationIteration");Xt(Df,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(_f,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Bu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Z0(r,t,void 0,e),e.currentTarget=null}function Mf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Bu(o,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Bu(o,a,c),i=u}}}if(mi)throw e=xs,mi=!1,xs=null,e}function V(e,t){var n=t[Es];n===void 0&&(n=t[Es]=new Set);var r=e+"__bubble";n.has(r)||(Af(t,e,2,!1),n.add(r))}function Ll(e,t,n){var r=0;t&&(r|=4),Af(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[No]){e[No]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(em.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Ll("selectionchange",!1,t))}}function Af(e,t,n,r){switch(bf(t)){case 1:var o=hg;break;case 4:o=gg;break;default:o=ba}n=o.bind(null,t,n,e),o=void 0,!ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;a!==null;){if(s=an(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}af(function(){var c=i,p=ya(n),h=[];e:{var x=Of.get(e);if(x!==void 0){var w=Sa,y=e;switch(e){case"keypress":if(ti(n)===0)break e;case"keydown":case"keyup":w=Lg;break;case"focusin":y="focus",w=Sl;break;case"focusout":y="blur",w=Sl;break;case"beforeblur":case"afterblur":w=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=zg;break;case zf:case Nf:case Df:w=kg;break;case _f:w=Dg;break;case"scroll":w=mg;break;case"wheel":w=Og;break;case"copy":case"cut":case"paste":w=jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Iu}var j=(t&4)!==0,C=!j&&e==="scroll",g=j?x!==null?x+"Capture":null:x;j=[];for(var d=c,m;d!==null;){m=d;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,g!==null&&(k=Hr(d,g),k!=null&&j.push(Zr(d,k,m)))),C)break;d=d.return}0<j.length&&(x=new w(x,y,null,n,p),h.push({event:x,listeners:j}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",x&&n!==hs&&(y=n.relatedTarget||n.fromElement)&&(an(y)||y[ft]))break e;if((w||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?an(y):null,y!==null&&(C=kn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(j=Tu,k="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=Iu,k="onPointerLeave",g="onPointerEnter",d="pointer"),C=w==null?x:Ln(w),m=y==null?x:Ln(y),x=new j(k,d+"leave",w,n,p),x.target=C,x.relatedTarget=m,k=null,an(p)===c&&(j=new j(g,d+"enter",y,n,p),j.target=m,j.relatedTarget=C,k=j),C=k,w&&y)t:{for(j=w,g=y,d=0,m=j;m;m=bn(m))d++;for(m=0,k=g;k;k=bn(k))m++;for(;0<d-m;)j=bn(j),d--;for(;0<m-d;)g=bn(g),m--;for(;d--;){if(j===g||g!==null&&j===g.alternate)break t;j=bn(j),g=bn(g)}j=null}else j=null;w!==null&&Wu(h,x,w,j,!1),y!==null&&C!==null&&Wu(h,C,y,j,!0)}}e:{if(x=c?Ln(c):window,w=x.nodeName&&x.nodeName.toLowerCase(),w==="select"||w==="input"&&x.type==="file")var v=Vg;else if(Nu(x))if(Pf)v=Gg;else{v=Qg;var $=Hg}else(w=x.nodeName)&&w.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(v=Kg);if(v&&(v=v(e,c))){Ef(h,v,n,p);break e}$&&$(e,x,c),e==="focusout"&&($=x._wrapperState)&&$.controlled&&x.type==="number"&&us(x,"number",x.value)}switch($=c?Ln(c):window,e){case"focusin":(Nu($)||$.contentEditable==="true")&&(Pn=$,ks=c,Dr=null);break;case"focusout":Dr=ks=Pn=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,Au(h,n,p);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":Au(h,n,p)}var S;if(Ca)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else En?$f(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Sf&&n.locale!=="ko"&&(En||E!=="onCompositionStart"?E==="onCompositionEnd"&&En&&(S=jf()):(Tt=p,ja="value"in Tt?Tt.value:Tt.textContent,En=!0)),$=ki(c,E),0<$.length&&(E=new Lu(E,e,null,n,p),h.push({event:E,listeners:$}),S?E.data=S:(S=Cf(n),S!==null&&(E.data=S)))),(S=Ag?Fg(e,n):Bg(e,n))&&(c=ki(c,"onBeforeInput"),0<c.length&&(p=new Lu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=S))}Mf(h,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Hr(e,n),i!=null&&r.unshift(Zr(e,i,o)),i=Hr(e,t),i!=null&&r.push(Zr(e,i,o))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=Hr(n,i),u!=null&&s.unshift(Zr(n,u,a))):o||(u=Hr(n,i),u!=null&&s.push(Zr(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var tm=/\r\n?/g,nm=/\u0000|\uFFFD/g;function Uu(e){return(typeof e=="string"?e:""+e).replace(tm,`
`).replace(nm,"")}function Do(e,t,n){if(t=Uu(t),Uu(e)!==t&&n)throw Error(P(425))}function bi(){}var js=null,Ss=null;function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,rm=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,om=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(im)}:Cs;function im(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),nt="__reactFiber$"+sr,qr="__reactProps$"+sr,ft="__reactContainer$"+sr,Es="__reactEvents$"+sr,lm="__reactListeners$"+sr,sm="__reactHandles$"+sr;function an(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[nt])return n;e=Hu(e)}return t}e=n,n=e.parentNode}return null}function vo(e){return e=e[nt]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ji(e){return e[qr]||null}var Ps=[],In=-1;function Zt(e){return{current:e}}function Q(e){0>In||(e.current=Ps[In],Ps[In]=null,In--)}function U(e,t){In++,Ps[In]=e.current,e.current=t}var Yt={},ye=Zt(Yt),$e=Zt(!1),hn=Yt;function Qn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function ji(){Q($e),Q(ye)}function Qu(e,t,n){if(ye.current!==Yt)throw Error(P(168));U(ye,t),U($e,n)}function Ff(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,H0(e)||"Unknown",o));return X({},n,r)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,hn=ye.current,U(ye,e),U($e,$e.current),!0}function Ku(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Ff(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,Q($e),Q(ye),U(ye,e)):Q($e),U($e,n)}var st=null,Xi=!1,zl=!1;function Bf(e){st===null?st=[e]:st.push(e)}function am(e){Xi=!0,Bf(e)}function qt(){if(!zl&&st!==null){zl=!0;var e=0,t=F;try{var n=st;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,Xi=!1}catch(o){throw st!==null&&(st=st.slice(e+1)),ff(va,qt),o}finally{F=t,zl=!1}}return null}var Rn=[],zn=0,$i=null,Ci=0,_e=[],Oe=0,gn=null,at=1,ut="";function rn(e,t){Rn[zn++]=Ci,Rn[zn++]=$i,$i=e,Ci=t}function Wf(e,t,n){_e[Oe++]=at,_e[Oe++]=ut,_e[Oe++]=gn,gn=e;var r=at;e=ut;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,at=1<<32-Je(t)+o|n<<o|r,ut=i+e}else at=1<<i|n<<o|r,ut=e}function Pa(e){e.return!==null&&(rn(e,1),Wf(e,1,0))}function Ta(e){for(;e===$i;)$i=Rn[--zn],Rn[zn]=null,Ci=Rn[--zn],Rn[zn]=null;for(;e===gn;)gn=_e[--Oe],_e[Oe]=null,ut=_e[--Oe],_e[Oe]=null,at=_e[--Oe],_e[Oe]=null}var Ie=null,Le=null,K=!1,Ye=null;function Uf(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Le=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:at,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Le=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ls(e){if(K){var t=Le;if(t){var n=t;if(!Gu(e,t)){if(Ts(e))throw Error(P(418));t=Bt(n.nextSibling);var r=Ie;t&&Gu(e,t)?Uf(r,n):(e.flags=e.flags&-4097|2,K=!1,Ie=e)}}else{if(Ts(e))throw Error(P(418));e.flags=e.flags&-4097|2,K=!1,Ie=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function _o(e){if(e!==Ie)return!1;if(!K)return Yu(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$s(e.type,e.memoizedProps)),t&&(t=Le)){if(Ts(e))throw Vf(),Error(P(418));for(;t;)Uf(e,t),t=Bt(t.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Ie?Bt(e.stateNode.nextSibling):null;return!0}function Vf(){for(var e=Le;e;)e=Bt(e.nextSibling)}function Kn(){Le=Ie=null,K=!1}function La(e){Ye===null?Ye=[e]:Ye.push(e)}var um=gt.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ju(e){var t=e._init;return t(e._payload)}function Hf(e){function t(g,d){if(e){var m=g.deletions;m===null?(g.deletions=[d],g.flags|=16):m.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function o(g,d){return g=Ht(g,d),g.index=0,g.sibling=null,g}function i(g,d,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<d?(g.flags|=2,d):m):(g.flags|=2,d)):(g.flags|=1048576,d)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,d,m,k){return d===null||d.tag!==6?(d=Fl(m,g.mode,k),d.return=g,d):(d=o(d,m),d.return=g,d)}function u(g,d,m,k){var v=m.type;return v===Cn?p(g,d,m.props.children,k,m.key):d!==null&&(d.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===$t&&Ju(v)===d.type)?(k=o(d,m.props),k.ref=vr(g,d,m),k.return=g,k):(k=ai(m.type,m.key,m.props,null,g.mode,k),k.ref=vr(g,d,m),k.return=g,k)}function c(g,d,m,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Bl(m,g.mode,k),d.return=g,d):(d=o(d,m.children||[]),d.return=g,d)}function p(g,d,m,k,v){return d===null||d.tag!==7?(d=fn(m,g.mode,k,v),d.return=g,d):(d=o(d,m),d.return=g,d)}function h(g,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fl(""+d,g.mode,m),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Co:return m=ai(d.type,d.key,d.props,null,g.mode,m),m.ref=vr(g,null,d),m.return=g,m;case $n:return d=Bl(d,g.mode,m),d.return=g,d;case $t:var k=d._init;return h(g,k(d._payload),m)}if($r(d)||hr(d))return d=fn(d,g.mode,m,null),d.return=g,d;Oo(g,d)}return null}function x(g,d,m,k){var v=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return v!==null?null:a(g,d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Co:return m.key===v?u(g,d,m,k):null;case $n:return m.key===v?c(g,d,m,k):null;case $t:return v=m._init,x(g,d,v(m._payload),k)}if($r(m)||hr(m))return v!==null?null:p(g,d,m,k,null);Oo(g,m)}return null}function w(g,d,m,k,v){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(m)||null,a(d,g,""+k,v);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Co:return g=g.get(k.key===null?m:k.key)||null,u(d,g,k,v);case $n:return g=g.get(k.key===null?m:k.key)||null,c(d,g,k,v);case $t:var $=k._init;return w(g,d,m,$(k._payload),v)}if($r(k)||hr(k))return g=g.get(m)||null,p(d,g,k,v,null);Oo(d,k)}return null}function y(g,d,m,k){for(var v=null,$=null,S=d,E=d=0,_=null;S!==null&&E<m.length;E++){S.index>E?(_=S,S=null):_=S.sibling;var z=x(g,S,m[E],k);if(z===null){S===null&&(S=_);break}e&&S&&z.alternate===null&&t(g,S),d=i(z,d,E),$===null?v=z:$.sibling=z,$=z,S=_}if(E===m.length)return n(g,S),K&&rn(g,E),v;if(S===null){for(;E<m.length;E++)S=h(g,m[E],k),S!==null&&(d=i(S,d,E),$===null?v=S:$.sibling=S,$=S);return K&&rn(g,E),v}for(S=r(g,S);E<m.length;E++)_=w(S,g,E,m[E],k),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?E:_.key),d=i(_,d,E),$===null?v=_:$.sibling=_,$=_);return e&&S.forEach(function(W){return t(g,W)}),K&&rn(g,E),v}function j(g,d,m,k){var v=hr(m);if(typeof v!="function")throw Error(P(150));if(m=v.call(m),m==null)throw Error(P(151));for(var $=v=null,S=d,E=d=0,_=null,z=m.next();S!==null&&!z.done;E++,z=m.next()){S.index>E?(_=S,S=null):_=S.sibling;var W=x(g,S,z.value,k);if(W===null){S===null&&(S=_);break}e&&S&&W.alternate===null&&t(g,S),d=i(W,d,E),$===null?v=W:$.sibling=W,$=W,S=_}if(z.done)return n(g,S),K&&rn(g,E),v;if(S===null){for(;!z.done;E++,z=m.next())z=h(g,z.value,k),z!==null&&(d=i(z,d,E),$===null?v=z:$.sibling=z,$=z);return K&&rn(g,E),v}for(S=r(g,S);!z.done;E++,z=m.next())z=w(S,g,E,z.value,k),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?E:z.key),d=i(z,d,E),$===null?v=z:$.sibling=z,$=z);return e&&S.forEach(function(Ue){return t(g,Ue)}),K&&rn(g,E),v}function C(g,d,m,k){if(typeof m=="object"&&m!==null&&m.type===Cn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Co:e:{for(var v=m.key,$=d;$!==null;){if($.key===v){if(v=m.type,v===Cn){if($.tag===7){n(g,$.sibling),d=o($,m.props.children),d.return=g,g=d;break e}}else if($.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===$t&&Ju(v)===$.type){n(g,$.sibling),d=o($,m.props),d.ref=vr(g,$,m),d.return=g,g=d;break e}n(g,$);break}else t(g,$);$=$.sibling}m.type===Cn?(d=fn(m.props.children,g.mode,k,m.key),d.return=g,g=d):(k=ai(m.type,m.key,m.props,null,g.mode,k),k.ref=vr(g,d,m),k.return=g,g=k)}return s(g);case $n:e:{for($=m.key;d!==null;){if(d.key===$)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(g,d.sibling),d=o(d,m.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=Bl(m,g.mode,k),d.return=g,g=d}return s(g);case $t:return $=m._init,C(g,d,$(m._payload),k)}if($r(m))return y(g,d,m,k);if(hr(m))return j(g,d,m,k);Oo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(g,d.sibling),d=o(d,m),d.return=g,g=d):(n(g,d),d=Fl(m,g.mode,k),d.return=g,g=d),s(g)):n(g,d)}return C}var Gn=Hf(!0),Qf=Hf(!1),Ei=Zt(null),Pi=null,Nn=null,Ia=null;function Ra(){Ia=Nn=Pi=null}function za(e){var t=Ei.current;Q(Ei),e._currentValue=t}function Is(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){Pi=e,Ia=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Ia!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(Pi===null)throw Error(P(308));Nn=e,Pi.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var un=null;function Na(e){un===null?un=[e]:un.push(e)}function Kf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Na(t)):(n.next=o.next,o.next=n),t.interleaved=n,pt(e,r)}function pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,pt(e,n)}return o=r.interleaved,o===null?(t.next=t,Na(r)):(t.next=o.next,o.next=t),r.interleaved=t,pt(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}function Xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,r){var o=e.updateQueue;Ct=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;s=0,p=c=u=null,a=i;do{var x=a.lane,w=a.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,j=a;switch(x=t,w=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){h=y.call(w,h,x);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,x=typeof y=="function"?y.call(w,h,x):y,x==null)break e;h=X({},h,x);break e;case 2:Ct=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[a]:x.push(a))}else w={eventTime:w,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=w,u=h):p=p.next=w,s|=x;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;x=a,a=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xn|=s,e.lanes=s,e.memoizedState=h}}function Zu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var wo={},ot=Zt(wo),eo=Zt(wo),to=Zt(wo);function cn(e){if(e===wo)throw Error(P(174));return e}function _a(e,t){switch(U(to,t),U(eo,e),U(ot,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ds(t,e)}Q(ot),U(ot,t)}function Yn(){Q(ot),Q(eo),Q(to)}function Yf(e){cn(to.current);var t=cn(ot.current),n=ds(t,e.type);t!==n&&(U(eo,e),U(ot,n))}function Oa(e){eo.current===e&&(Q(ot),Q(eo))}var G=Zt(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function Ma(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var ri=gt.ReactCurrentDispatcher,Dl=gt.ReactCurrentBatchConfig,mn=0,Y=null,le=null,ue=null,Ii=!1,_r=!1,no=0,cm=0;function he(){throw Error(P(321))}function Aa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,o,i){if(mn=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ri.current=e===null||e.memoizedState===null?hm:gm,e=n(r,o),_r){i=0;do{if(_r=!1,no=0,25<=i)throw Error(P(301));i+=1,ue=le=null,t.updateQueue=null,ri.current=mm,e=n(r,o)}while(_r)}if(ri.current=Ri,t=le!==null&&le.next!==null,mn=0,ue=le=Y=null,Ii=!1,t)throw Error(P(300));return e}function Ba(){var e=no!==0;return no=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=e:ue=ue.next=e,ue}function Be(){if(le===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?Y.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(P(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Y.memoizedState=ue=e:ue=ue.next=e}return ue}function ro(e,t){return typeof t=="function"?t(e):t}function _l(e){var t=Be(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,u=null,c=i;do{var p=c.lane;if((mn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,s=r):u=u.next=h,Y.lanes|=p,xn|=p}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,qe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ol(e){var t=Be(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);qe(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Jf(){}function Xf(e,t){var n=Y,r=Be(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,Wa(ep.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,oo(9,qf.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(P(349));mn&30||Zf(n,t,o)}return o}function Zf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qf(e,t,n,r){t.value=n,t.getSnapshot=r,tp(t)&&np(e)}function ep(e,t,n){return n(function(){tp(t)&&np(e)})}function tp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function np(e){var t=pt(e,1);t!==null&&Xe(t,e,1,-1)}function qu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=pm.bind(null,Y,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rp(){return Be().memoizedState}function oi(e,t,n,r){var o=tt();Y.flags|=e,o.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Zi(e,t,n,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(le!==null){var s=le.memoizedState;if(i=s.destroy,r!==null&&Aa(r,s.deps)){o.memoizedState=oo(t,n,i,r);return}}Y.flags|=e,o.memoizedState=oo(1|t,n,i,r)}function ec(e,t){return oi(8390656,8,e,t)}function Wa(e,t){return Zi(2048,8,e,t)}function op(e,t){return Zi(4,2,e,t)}function ip(e,t){return Zi(4,4,e,t)}function lp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sp(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4,4,lp.bind(null,t,e),n)}function Ua(){}function ap(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function up(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Aa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cp(e,t,n){return mn&21?(qe(n,t)||(n=gf(),Y.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function dm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{F=n,Dl.transition=r}}function dp(){return Be().memoizedState}function fm(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fp(e))pp(t,n);else if(n=Kf(e,t,n,r),n!==null){var o=we();Xe(n,e,r,o),hp(n,t,r)}}function pm(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fp(e))pp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,qe(a,s)){var u=t.interleaved;u===null?(o.next=o,Na(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Kf(e,t,o,r),n!==null&&(o=we(),Xe(n,e,r,o),hp(n,t,r))}}function fp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function pp(e,t){_r=Ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}var Ri={readContext:Fe,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},hm={readContext:Fe,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,lp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fm.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:qu,useDebugValue:Ua,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=qu(!1),t=e[0];return e=dm.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=tt();if(K){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ce===null)throw Error(P(349));mn&30||Zf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ec(ep.bind(null,r,i,e),[e]),r.flags|=2048,oo(9,qf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ce.identifierPrefix;if(K){var n=ut,r=at;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gm={readContext:Fe,useCallback:ap,useContext:Fe,useEffect:Wa,useImperativeHandle:sp,useInsertionEffect:op,useLayoutEffect:ip,useMemo:up,useReducer:_l,useRef:rp,useState:function(){return _l(ro)},useDebugValue:Ua,useDeferredValue:function(e){var t=Be();return cp(t,le.memoizedState,e)},useTransition:function(){var e=_l(ro)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Jf,useSyncExternalStore:Xf,useId:dp,unstable_isNewReconciler:!1},mm={readContext:Fe,useCallback:ap,useContext:Fe,useEffect:Wa,useImperativeHandle:sp,useInsertionEffect:op,useLayoutEffect:ip,useMemo:up,useReducer:Ol,useRef:rp,useState:function(){return Ol(ro)},useDebugValue:Ua,useDeferredValue:function(e){var t=Be();return le===null?t.memoizedState=e:cp(t,le.memoizedState,e)},useTransition:function(){var e=Ol(ro)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Jf,useSyncExternalStore:Xf,useId:dp,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qi={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Vt(e),i=ct(r,o);i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(Xe(t,e,o,r),ni(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Vt(e),i=ct(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(Xe(t,e,o,r),ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Vt(e),o=ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(Xe(t,e,r,n),ni(t,e,r))}};function tc(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Jr(n,r)||!Jr(o,i):!0}function gp(e,t,n){var r=!1,o=Yt,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(o=Ce(t)?hn:ye.current,r=t.contextTypes,i=(r=r!=null)?Qn(e,o):Yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qi.enqueueReplaceState(t,t.state,null)}function zs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Da(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Fe(i):(i=Ce(t)?hn:ye.current,o.context=Qn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Rs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&qi.enqueueReplaceState(o,o.state,null),Ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=V0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xm=typeof WeakMap=="function"?WeakMap:Map;function mp(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,Vs=r),Ns(e,t)},n}function xp(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ns(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ns(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Im.bind(null,e,t,n),t.then(e,e))}function oc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ic(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var ym=gt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Qf(t,null,n,r):Gn(t,e.child,n,r)}function lc(e,t,n,r,o){n=n.render;var i=t.ref;return Wn(t,o),r=Fa(e,t,n,r,i,o),n=Ba(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(K&&n&&Pa(t),t.flags|=1,ve(e,t,r,o),t.child)}function sc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Xa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yp(e,t,i,r,o)):(e=ai(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(s,r)&&e.ref===t.ref)return ht(e,t,o)}return t.flags|=1,e=Ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function yp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Jr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ht(e,t,o)}return Ds(e,t,n,r,o)}function vp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(_n,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(_n,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(_n,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(_n,Te),Te|=r;return ve(e,t,o,n),t.child}function wp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ds(e,t,n,r,o){var i=Ce(n)?hn:ye.current;return i=Qn(t,i),Wn(t,o),n=Fa(e,t,n,r,i,o),r=Ba(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(K&&r&&Pa(t),t.flags|=1,ve(e,t,n,o),t.child)}function ac(e,t,n,r,o){if(Ce(n)){var i=!0;Si(t)}else i=!1;if(Wn(t,o),t.stateNode===null)ii(e,t),gp(t,n,r),zs(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=Ce(n)?hn:ye.current,c=Qn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&nc(t,s,r,c),Ct=!1;var x=t.memoizedState;s.state=x,Ti(t,r,s,o),u=t.memoizedState,a!==r||x!==u||$e.current||Ct?(typeof p=="function"&&(Rs(t,n,p,r),u=t.memoizedState),(a=Ct||tc(t,n,a,r,x,u,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Gf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Qe(t.type,a),s.props=c,h=t.pendingProps,x=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=Ce(n)?hn:ye.current,u=Qn(t,u));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||x!==u)&&nc(t,s,r,u),Ct=!1,x=t.memoizedState,s.state=x,Ti(t,r,s,o);var y=t.memoizedState;a!==h||x!==y||$e.current||Ct?(typeof w=="function"&&(Rs(t,n,w,r),y=t.memoizedState),(c=Ct||tc(t,n,c,r,x,y,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return _s(e,t,n,r,i,o)}function _s(e,t,n,r,o,i){wp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Ku(t,n,!1),ht(e,t,i);r=t.stateNode,ym.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,a,i)):ve(e,t,a,i),t.memoizedState=r.state,o&&Ku(t,n,!0),t.child}function kp(e){var t=e.stateNode;t.pendingContext?Qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qu(e,t.context,!1),_a(e,t.containerInfo)}function uc(e,t,n,r,o){return Kn(),La(o),t.flags|=256,ve(e,t,n,r),t.child}var Os={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function bp(e,t,n){var r=t.pendingProps,o=G.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(G,o&1),e===null)return Ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=nl(s,r,0,null),e=fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ms(n),t.memoizedState=Os,e):Va(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return vm(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ht(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Ht(a,i):(i=fn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ms(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Os,r}return i=e.child,e=i.sibling,r=Ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Va(e,t){return t=nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&La(r),Gn(t,e.child,null,n),e=Va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vm(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ml(Error(P(422))),Mo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=nl({mode:"visible",children:r.children},o,0,null),i=fn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gn(t,e.child,null,s),t.child.memoizedState=Ms(s),t.memoizedState=Os,i);if(!(t.mode&1))return Mo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=Ml(i,r,void 0),Mo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Se||a){if(r=ce,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,pt(e,o),Xe(r,e,o,-1))}return Ja(),r=Ml(Error(P(421))),Mo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Rm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=Bt(o.nextSibling),Ie=t,K=!0,Ye=null,e!==null&&(_e[Oe++]=at,_e[Oe++]=ut,_e[Oe++]=gn,at=e.id,ut=e.overflow,gn=t),t=Va(t,r.children),t.flags|=4096,t)}function cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Is(e.return,t,n)}function Al(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function jp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cc(e,n,t);else if(e.tag===19)cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Al(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Al(t,!0,n,null,i);break;case"together":Al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ii(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wm(e,t,n){switch(t.tag){case 3:kp(t),Kn();break;case 5:Yf(t);break;case 1:Ce(t.type)&&Si(t);break;case 4:_a(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(Ei,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?bp(e,t,n):(U(G,G.current&1),e=ht(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,vp(e,t,n)}return ht(e,t,n)}var Sp,As,$p,Cp;Sp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};$p=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,cn(ot.current);var i=null;switch(n){case"input":o=ss(e,o),r=ss(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=cs(e,o),r=cs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bi)}fs(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ur.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&V("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Cp=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function km(e,t,n){var r=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ce(t.type)&&ji(),ge(t),null;case 3:return r=t.stateNode,Yn(),Q($e),Q(ye),Ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Ks(Ye),Ye=null))),As(e,t),ge(t),null;case 5:Oa(t);var o=cn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)$p(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ge(t),null}if(e=cn(ot.current),_o(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[qr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Er.length;o++)V(Er[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":vu(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":ku(r,i),V("invalid",r)}fs(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Do(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Do(r.textContent,a,e),o=["children",""+a]):Ur.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":Eo(r),wu(r,i,!0);break;case"textarea":Eo(r),bu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=bi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[qr]=r,Sp(e,t,!1,!1),t.stateNode=e;e:{switch(s=ps(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Er.length;o++)V(Er[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":vu(e,r),o=ss(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":ku(e,r),o=cs(e,r),V("invalid",e);break;default:o=r}fs(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?nf(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ef(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vr(e,u):typeof u=="number"&&Vr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ur.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&ha(e,i,u,s))}switch(n){case"input":Eo(e),wu(e,r,!1);break;case"textarea":Eo(e),bu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Mn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Cp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=cn(to.current),cn(ot.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:Do(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Do(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ge(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&t.mode&1&&!(t.flags&128))Vf(),Kn(),t.flags|=98560,i=!1;else if(i=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[nt]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else Ye!==null&&(Ks(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ae===0&&(ae=3):Ja())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Yn(),As(e,t),e===null&&Xr(t.stateNode.containerInfo),ge(t),null;case 10:return za(t.type._context),ge(t),null;case 17:return Ce(t.type)&&ji(),ge(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)wr(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Li(e),s!==null){for(t.flags|=128,wr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Xn&&(t.flags|=128,r=!0,wr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Li(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!K)return ge(t),null}else 2*te()-i.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,wr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function bm(e,t){switch(Ta(t),t.tag){case 1:return Ce(t.type)&&ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),Q($e),Q(ye),Ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oa(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return Yn(),null;case 10:return za(t.type._context),null;case 22:case 23:return Ya(),null;case 24:return null;default:return null}}var Ao=!1,xe=!1,jm=typeof WeakSet=="function"?WeakSet:Set,L=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Fs(e,t,n){try{n()}catch(r){ee(e,t,r)}}var dc=!1;function Sm(e,t){if(js=vi,e=If(),Ea(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,p=0,h=e,x=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(w=h.firstChild)!==null;)x=h,h=w;for(;;){if(h===e)break t;if(x===n&&++c===o&&(a=s),x===i&&++p===r&&(u=s),(w=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ss={focusedElem:e,selectionRange:n},vi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,C=y.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:Qe(t.type,j),C);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){ee(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=dc,dc=!1,y}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fs(t,n,i)}o=o.next}while(o!==r)}}function el(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ep(e){var t=e.alternate;t!==null&&(e.alternate=null,Ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[qr],delete t[Es],delete t[lm],delete t[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pp(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bi));else if(r!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}function Us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}var de=null,Ke=!1;function kt(e,t,n){for(n=n.child;n!==null;)Tp(e,t,n),n=n.sibling}function Tp(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 5:xe||Dn(n,t);case 6:var r=de,o=Ke;de=null,kt(e,t,n),de=r,Ke=o,de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),Gr(e)):Rl(de,n.stateNode));break;case 4:r=de,o=Ke,de=n.stateNode.containerInfo,Ke=!0,kt(e,t,n),de=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Fs(n,t,s),o=o.next}while(o!==r)}kt(e,t,n);break;case 1:if(!xe&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,kt(e,t,n),xe=r):kt(e,t,n);break;default:kt(e,t,n)}}function pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jm),t.forEach(function(r){var o=zm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Ke=!1;break e;case 3:de=a.stateNode.containerInfo,Ke=!0;break e;case 4:de=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(de===null)throw Error(P(160));Tp(i,s,o),de=null,Ke=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lp(t,e),t=t.sibling}function Lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),et(e),r&4){try{Or(3,e,e.return),el(3,e)}catch(j){ee(e,e.return,j)}try{Or(5,e,e.return)}catch(j){ee(e,e.return,j)}}break;case 1:He(t,e),et(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(He(t,e),et(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var o=e.stateNode;try{Vr(o,"")}catch(j){ee(e,e.return,j)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Xd(o,i),ps(a,s);var c=ps(a,i);for(s=0;s<u.length;s+=2){var p=u[s],h=u[s+1];p==="style"?nf(o,h):p==="dangerouslySetInnerHTML"?ef(o,h):p==="children"?Vr(o,h):ha(o,p,h,c)}switch(a){case"input":as(o,i);break;case"textarea":Zd(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Mn(o,!!i.multiple,w,!1):x!==!!i.multiple&&(i.defaultValue!=null?Mn(o,!!i.multiple,i.defaultValue,!0):Mn(o,!!i.multiple,i.multiple?[]:"",!1))}o[qr]=i}catch(j){ee(e,e.return,j)}}break;case 6:if(He(t,e),et(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(j){ee(e,e.return,j)}}break;case 3:if(He(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(j){ee(e,e.return,j)}break;case 4:He(t,e),et(e);break;case 13:He(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ka=te())),r&4&&pc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||p,He(t,e),xe=c):He(t,e),et(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(L=e,p=e.child;p!==null;){for(h=L=p;L!==null;){switch(x=L,w=x.child,x.tag){case 0:case 11:case 14:case 15:Or(4,x,x.return);break;case 1:Dn(x,x.return);var y=x.stateNode;if(typeof y.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){ee(r,n,j)}}break;case 5:Dn(x,x.return);break;case 22:if(x.memoizedState!==null){gc(h);continue}}w!==null?(w.return=x,L=w):gc(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=tf("display",s))}catch(j){ee(e,e.return,j)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(j){ee(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),et(e),r&4&&pc(e);break;case 21:break;default:He(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Vr(o,""),r.flags&=-33);var i=fc(e);Us(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=fc(e);Ws(e,a,s);break;default:throw Error(P(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $m(e,t,n){L=e,Ip(e)}function Ip(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Ao;if(!s){var a=o.alternate,u=a!==null&&a.memoizedState!==null||xe;a=Ao;var c=xe;if(Ao=s,(xe=u)&&!c)for(L=o;L!==null;)s=L,u=s.child,s.tag===22&&s.memoizedState!==null?mc(o):u!==null?(u.return=s,L=u):mc(o);for(;i!==null;)L=i,Ip(i),i=i.sibling;L=o,Ao=a,xe=c}hc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):hc(e)}}function hc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||el(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zu(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Gr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}xe||t.flags&512&&Bs(t)}catch(x){ee(t,t.return,x)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function gc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function mc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{el(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ee(t,o,u)}}var i=t.return;try{Bs(t)}catch(u){ee(t,i,u)}break;case 5:var s=t.return;try{Bs(t)}catch(u){ee(t,s,u)}}}catch(u){ee(t,t.return,u)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var Cm=Math.ceil,zi=gt.ReactCurrentDispatcher,Ha=gt.ReactCurrentOwner,Ae=gt.ReactCurrentBatchConfig,O=0,ce=null,oe=null,fe=0,Te=0,_n=Zt(0),ae=0,io=null,xn=0,tl=0,Qa=0,Mr=null,je=null,Ka=0,Xn=1/0,it=null,Ni=!1,Vs=null,Ut=null,Fo=!1,Lt=null,Di=0,Ar=0,Hs=null,li=-1,si=0;function we(){return O&6?te():li!==-1?li:li=te()}function Vt(e){return e.mode&1?O&2&&fe!==0?fe&-fe:um.transition!==null?(si===0&&(si=gf()),si):(e=F,e!==0||(e=window.event,e=e===void 0?16:bf(e.type)),e):1}function Xe(e,t,n,r){if(50<Ar)throw Ar=0,Hs=null,Error(P(185));xo(e,n,r),(!(O&2)||e!==ce)&&(e===ce&&(!(O&2)&&(tl|=n),ae===4&&Pt(e,fe)),Ee(e,r),n===1&&O===0&&!(t.mode&1)&&(Xn=te()+500,Xi&&qt()))}function Ee(e,t){var n=e.callbackNode;ug(e,t);var r=yi(e,e===ce?fe:0);if(r===0)n!==null&&$u(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$u(n),t===1)e.tag===0?am(xc.bind(null,e)):Bf(xc.bind(null,e)),om(function(){!(O&6)&&qt()}),n=null;else{switch(mf(r)){case 1:n=va;break;case 4:n=pf;break;case 16:n=xi;break;case 536870912:n=hf;break;default:n=xi}n=Ap(n,Rp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rp(e,t){if(li=-1,si=0,O&6)throw Error(P(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=yi(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_i(e,r);else{t=r;var o=O;O|=2;var i=Np();(ce!==e||fe!==t)&&(it=null,Xn=te()+500,dn(e,t));do try{Tm();break}catch(a){zp(e,a)}while(!0);Ra(),zi.current=i,O=o,oe!==null?t=0:(ce=null,fe=0,t=ae)}if(t!==0){if(t===2&&(o=ys(e),o!==0&&(r=o,t=Qs(e,o))),t===1)throw n=io,dn(e,0),Pt(e,r),Ee(e,te()),n;if(t===6)Pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Em(o)&&(t=_i(e,r),t===2&&(i=ys(e),i!==0&&(r=i,t=Qs(e,i))),t===1))throw n=io,dn(e,0),Pt(e,r),Ee(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:on(e,je,it);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=Ka+500-te(),10<t)){if(yi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cs(on.bind(null,e,je,it),t);break}on(e,je,it);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Je(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cm(r/1960))-r,10<r){e.timeoutHandle=Cs(on.bind(null,e,je,it),r);break}on(e,je,it);break;case 5:on(e,je,it);break;default:throw Error(P(329))}}}return Ee(e,te()),e.callbackNode===n?Rp.bind(null,e):null}function Qs(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=_i(e,t),e!==2&&(t=je,je=n,t!==null&&Ks(t)),e}function Ks(e){je===null?je=e:je.push.apply(je,e)}function Em(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~Qa,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function xc(e){if(O&6)throw Error(P(327));Un();var t=yi(e,0);if(!(t&1))return Ee(e,te()),null;var n=_i(e,t);if(e.tag!==0&&n===2){var r=ys(e);r!==0&&(t=r,n=Qs(e,r))}if(n===1)throw n=io,dn(e,0),Pt(e,t),Ee(e,te()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,je,it),Ee(e,te()),null}function Ga(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Xn=te()+500,Xi&&qt())}}function yn(e){Lt!==null&&Lt.tag===0&&!(O&6)&&Un();var t=O;O|=1;var n=Ae.transition,r=F;try{if(Ae.transition=null,F=1,e)return e()}finally{F=r,Ae.transition=n,O=t,!(O&6)&&qt()}}function Ya(){Te=_n.current,Q(_n)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rm(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ji();break;case 3:Yn(),Q($e),Q(ye),Ma();break;case 5:Oa(r);break;case 4:Yn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:za(r.type._context);break;case 22:case 23:Ya()}n=n.return}if(ce=e,oe=e=Ht(e.current,null),fe=Te=t,ae=0,io=null,Qa=tl=xn=0,je=Mr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}un=null}return e}function zp(e,t){do{var n=oe;try{if(Ra(),ri.current=Ri,Ii){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ii=!1}if(mn=0,ue=le=Y=null,_r=!1,no=0,Ha.current=null,n===null||n.return===null){ae=1,io=t,oe=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=fe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=oc(s);if(w!==null){w.flags&=-257,ic(w,s,a,i,t),w.mode&1&&rc(i,c,t),t=w,u=c;var y=t.updateQueue;if(y===null){var j=new Set;j.add(u),t.updateQueue=j}else y.add(u);break e}else{if(!(t&1)){rc(i,c,t),Ja();break e}u=Error(P(426))}}else if(K&&a.mode&1){var C=oc(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ic(C,s,a,i,t),La(Jn(u,a));break e}}i=u=Jn(u,a),ae!==4&&(ae=2),Mr===null?Mr=[i]:Mr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=mp(i,u,t);Xu(i,g);break e;case 1:a=u;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ut===null||!Ut.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=xp(i,a,t);Xu(i,k);break e}}i=i.return}while(i!==null)}_p(n)}catch(v){t=v,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Np(){var e=zi.current;return zi.current=Ri,e===null?Ri:e}function Ja(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(xn&268435455)&&!(tl&268435455)||Pt(ce,fe)}function _i(e,t){var n=O;O|=2;var r=Np();(ce!==e||fe!==t)&&(it=null,dn(e,t));do try{Pm();break}catch(o){zp(e,o)}while(!0);if(Ra(),O=n,zi.current=r,oe!==null)throw Error(P(261));return ce=null,fe=0,ae}function Pm(){for(;oe!==null;)Dp(oe)}function Tm(){for(;oe!==null&&!eg();)Dp(oe)}function Dp(e){var t=Mp(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?_p(e):oe=t,Ha.current=null}function _p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bm(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=km(n,t,Te),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function on(e,t,n){var r=F,o=Ae.transition;try{Ae.transition=null,F=1,Lm(e,t,n,r)}finally{Ae.transition=o,F=r}return null}function Lm(e,t,n,r){do Un();while(Lt!==null);if(O&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(cg(e,i),e===ce&&(oe=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fo||(Fo=!0,Ap(xi,function(){return Un(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var s=F;F=1;var a=O;O|=4,Ha.current=null,Sm(e,n),Lp(n,e),Jg(Ss),vi=!!js,Ss=js=null,e.current=n,$m(n),tg(),O=a,F=s,Ae.transition=i}else e.current=n;if(Fo&&(Fo=!1,Lt=e,Di=o),i=e.pendingLanes,i===0&&(Ut=null),og(n.stateNode),Ee(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ni)throw Ni=!1,e=Vs,Vs=null,e;return Di&1&&e.tag!==0&&Un(),i=e.pendingLanes,i&1?e===Hs?Ar++:(Ar=0,Hs=e):Ar=0,qt(),null}function Un(){if(Lt!==null){var e=mf(Di),t=Ae.transition,n=F;try{if(Ae.transition=null,F=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,Di=0,O&6)throw Error(P(331));var o=O;for(O|=4,L=e.current;L!==null;){var i=L,s=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(L=c;L!==null;){var p=L;switch(p.tag){case 0:case 11:case 15:Or(8,p,i)}var h=p.child;if(h!==null)h.return=p,L=h;else for(;L!==null;){p=L;var x=p.sibling,w=p.return;if(Ep(p),p===c){L=null;break}if(x!==null){x.return=w,L=x;break}L=w}}}var y=i.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}L=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,L=s;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Or(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,L=g;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){s=L;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,L=m;else e:for(s=d;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:el(9,a)}}catch(v){ee(a,a.return,v)}if(a===s){L=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,L=k;break e}L=a.return}}if(O=o,qt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Qi,e)}catch{}r=!0}return r}finally{F=n,Ae.transition=t}}return!1}function yc(e,t,n){t=Jn(n,t),t=mp(e,t,1),e=Wt(e,t,1),t=we(),e!==null&&(xo(e,1,t),Ee(e,t))}function ee(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Jn(n,e),e=xp(t,e,1),t=Wt(t,e,1),e=we(),t!==null&&(xo(t,1,e),Ee(t,e));break}}t=t.return}}function Im(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-Ka?dn(e,0):Qa|=n),Ee(e,t)}function Op(e,t){t===0&&(e.mode&1?(t=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):t=1);var n=we();e=pt(e,t),e!==null&&(xo(e,t,n),Ee(e,n))}function Rm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Op(e,n)}function zm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Op(e,n)}var Mp;Mp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,wm(e,t,n);Se=!!(e.flags&131072)}else Se=!1,K&&t.flags&1048576&&Wf(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ii(e,t),e=t.pendingProps;var o=Qn(t,ye.current);Wn(t,n),o=Fa(null,t,r,e,o,n);var i=Ba();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(i=!0,Si(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Da(t),o.updater=qi,t.stateNode=o,o._reactInternals=t,zs(t,r,e,n),t=_s(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Pa(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ii(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Dm(r),e=Qe(r,e),o){case 0:t=Ds(null,t,r,e,n);break e;case 1:t=ac(null,t,r,e,n);break e;case 11:t=lc(null,t,r,e,n);break e;case 14:t=sc(null,t,r,Qe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Ds(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ac(e,t,r,o,n);case 3:e:{if(kp(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Gf(e,t),Ti(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Jn(Error(P(423)),t),t=uc(e,t,r,n,o);break e}else if(r!==o){o=Jn(Error(P(424)),t),t=uc(e,t,r,n,o);break e}else for(Le=Bt(t.stateNode.containerInfo.firstChild),Ie=t,K=!0,Ye=null,n=Qf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===o){t=ht(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&Ls(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,$s(r,o)?s=null:i!==null&&$s(r,i)&&(t.flags|=32),wp(e,t),ve(e,t,s,n),t.child;case 6:return e===null&&Ls(t),null;case 13:return bp(e,t,n);case 4:return _a(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),lc(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,U(Ei,r._currentValue),r._currentValue=s,i!==null)if(qe(i.value,s)){if(i.children===o.children&&!$e.current){t=ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ct(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Is(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Is(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Wn(t,n),o=Fe(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),sc(e,t,r,o,n);case 15:return yp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ii(e,t),t.tag=1,Ce(r)?(e=!0,Si(t)):e=!1,Wn(t,n),gp(t,r,o),zs(t,r,o,n),_s(null,t,r,!0,e,n);case 19:return jp(e,t,n);case 22:return vp(e,t,n)}throw Error(P(156,t.tag))};function Ap(e,t){return ff(e,t)}function Nm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Nm(e,t,n,r)}function Xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dm(e){if(typeof e=="function")return Xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ma)return 11;if(e===xa)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ai(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Xa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Cn:return fn(n.children,o,i,t);case ga:s=8,o|=8;break;case rs:return e=Me(12,n,t,o|2),e.elementType=rs,e.lanes=i,e;case os:return e=Me(13,n,t,o),e.elementType=os,e.lanes=i,e;case is:return e=Me(19,n,t,o),e.elementType=is,e.lanes=i,e;case Gd:return nl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qd:s=10;break e;case Kd:s=9;break e;case ma:s=11;break e;case xa:s=14;break e;case $t:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Me(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function fn(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function nl(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Gd,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _m(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Za(e,t,n,r,o,i,s,a,u){return e=new _m(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Me(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(i),e}function Om(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fp(e){if(!e)return Yt;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Ff(e,n,t)}return t}function Bp(e,t,n,r,o,i,s,a,u){return e=Za(n,r,!0,e,o,i,s,a,u),e.context=Fp(null),n=e.current,r=we(),o=Vt(n),i=ct(r,o),i.callback=t??null,Wt(n,i,o),e.current.lanes=o,xo(e,o,r),Ee(e,r),e}function rl(e,t,n,r){var o=t.current,i=we(),s=Vt(o);return n=Fp(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,s),e!==null&&(Xe(e,o,s,i),ni(e,o,s)),s}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qa(e,t){vc(e,t),(e=e.alternate)&&vc(e,t)}function Mm(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}ol.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));rl(e,t,null,null)};ol.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){rl(null,e,null,null)}),t[ft]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&kf(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wc(){}function Am(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Oi(s);i.call(c)}}var s=Bp(t,r,e,0,null,!1,!1,"",wc);return e._reactRootContainer=s,e[ft]=s.current,Xr(e.nodeType===8?e.parentNode:e),yn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Oi(u);a.call(c)}}var u=Za(e,0,!1,null,null,!1,!1,"",wc);return e._reactRootContainer=u,e[ft]=u.current,Xr(e.nodeType===8?e.parentNode:e),yn(function(){rl(t,u,n,r)}),u}function ll(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var u=Oi(s);a.call(u)}}rl(t,s,e,o)}else s=Am(n,t,e,o,r);return Oi(s)}xf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(wa(t,n|1),Ee(t,te()),!(O&6)&&(Xn=te()+500,qt()))}break;case 13:yn(function(){var r=pt(e,1);if(r!==null){var o=we();Xe(r,e,1,o)}}),qa(e,1)}};ka=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var n=we();Xe(t,e,134217728,n)}qa(e,134217728)}};yf=function(e){if(e.tag===13){var t=Vt(e),n=pt(e,t);if(n!==null){var r=we();Xe(n,e,t,r)}qa(e,t)}};vf=function(){return F};wf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};gs=function(e,t,n){switch(t){case"input":if(as(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ji(r);if(!o)throw Error(P(90));Jd(r),as(r,o)}}}break;case"textarea":Zd(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};lf=Ga;sf=yn;var Fm={usingClientEntryPoint:!1,Events:[vo,Ln,Ji,rf,of,Ga]},kr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bm={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cf(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||Mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Qi=Bo.inject(Bm),rt=Bo}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(P(200));return Om(e,t,null,n)};ze.createRoot=function(e,t){if(!tu(e))throw Error(P(299));var n=!1,r="",o=Wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Za(e,1,!1,null,null,n,!1,r,o),e[ft]=t.current,Xr(e.nodeType===8?e.parentNode:e),new eu(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=cf(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return yn(e)};ze.hydrate=function(e,t,n){if(!il(t))throw Error(P(200));return ll(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Wp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Bp(t,null,e,1,n??null,o,!1,i,s),e[ft]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ol(t)};ze.render=function(e,t,n){if(!il(t))throw Error(P(200));return ll(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!il(e))throw Error(P(40));return e._reactRootContainer?(yn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};ze.unstable_batchedUpdates=Ga;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ll(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Up)}catch(e){console.error(e)}}Up(),Wd.exports=ze;var nu=Wd.exports,Vp,kc=nu;Vp=kc.createRoot,kc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(null,arguments)}var It;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(It||(It={}));const bc="popstate";function Wm(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Gs("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Mi(o)}return Vm(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ru(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Um(){return Math.random().toString(36).substr(2,8)}function jc(e,t){return{usr:e.state,key:e.key,idx:t}}function Gs(e,t,n,r){return n===void 0&&(n=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ar(t):t,{state:n,key:t&&t.key||r||Um()})}function Mi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=It.Pop,u=null,c=p();c==null&&(c=0,s.replaceState(lo({},s.state,{idx:c}),""));function p(){return(s.state||{idx:null}).idx}function h(){a=It.Pop;let C=p(),g=C==null?null:C-c;c=C,u&&u({action:a,location:j.location,delta:g})}function x(C,g){a=It.Push;let d=Gs(j.location,C,g);c=p()+1;let m=jc(d,c),k=j.createHref(d);try{s.pushState(m,"",k)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;o.location.assign(k)}i&&u&&u({action:a,location:j.location,delta:1})}function w(C,g){a=It.Replace;let d=Gs(j.location,C,g);c=p();let m=jc(d,c),k=j.createHref(d);s.replaceState(m,"",k),i&&u&&u({action:a,location:j.location,delta:0})}function y(C){let g=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof C=="string"?C:Mi(C);return d=d.replace(/ $/,"%20"),J(g,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,g)}let j={get action(){return a},get location(){return e(o,s)},listen(C){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(bc,h),u=C,()=>{o.removeEventListener(bc,h),u=null}},createHref(C){return t(o,C)},createURL:y,encodeLocation(C){let g=y(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:x,replace:w,go(C){return s.go(C)}};return j}var Sc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sc||(Sc={}));function Hm(e,t,n){return n===void 0&&(n="/"),Qm(e,t,n)}function Qm(e,t,n,r){let o=typeof t=="string"?ar(t):t,i=Zn(o.pathname||"/",n);if(i==null)return null;let s=Hp(e);Km(s);let a=null,u=ox(i);for(let c=0;a==null&&c<s.length;++c)a=nx(s[c],u);return a}function Hp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(J(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Qt([r,u.relativePath]),p=n.concat(u);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Hp(i.children,t,p,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:ex(c,i.index),routesMeta:p})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let u of Qp(i.path))o(i,s,u)}),t}function Qp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Qp(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Km(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gm=/^:[\w-]+$/,Ym=3,Jm=2,Xm=1,Zm=10,qm=-2,$c=e=>e==="*";function ex(e,t){let n=e.split("/"),r=n.length;return n.some($c)&&(r+=qm),t&&(r+=Jm),n.filter(o=>!$c(o)).reduce((o,i)=>o+(Gm.test(i)?Ym:i===""?Xm:Zm),r)}function tx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function nx(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",h=Ys({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),x=u.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Qt([i,h.pathname]),pathnameBase:ux(Qt([i,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(i=Qt([i,h.pathnameBase]))}return s}function Ys(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,p,h)=>{let{paramName:x,isOptional:w}=p;if(x==="*"){let j=a[h]||"";s=i.slice(0,i.length-j.length).replace(/(.)\/+$/,"$1")}const y=a[h];return w&&!y?c[x]=void 0:c[x]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function rx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ru(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function ox(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ru(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lx=e=>ix.test(e);function sx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ar(e):e,i;if(n)if(lx(n))i=n;else{if(n.includes("//")){let s=n;n=Kp(n),ru(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Cc(n.substring(1),"/"):i=Cc(n,t)}else i=t;return{pathname:i,search:cx(r),hash:dx(o)}}function Cc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ax(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ou(e,t){let n=ax(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function iu(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ar(e):(o=lo({},e),J(!o.pathname||!o.pathname.includes("?"),Wl("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Wl("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Wl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),h-=1;o.pathname=x.join("/")}a=h>=0?t[h]:"/"}let u=sx(o,a),c=s&&s!=="/"&&s.endsWith("/"),p=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const Kp=e=>e.replace(/\/\/+/g,"/"),Qt=e=>Kp(e.join("/")),ux=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gp=["post","put","patch","delete"];new Set(Gp);const px=["get",...Gp];new Set(px);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(null,arguments)}const sl=b.createContext(null),Yp=b.createContext(null),mt=b.createContext(null),al=b.createContext(null),xt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Jp=b.createContext(null);function hx(e,t){let{relative:n}=t===void 0?{}:t;ur()||J(!1);let{basename:r,navigator:o}=b.useContext(mt),{hash:i,pathname:s,search:a}=ul(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Qt([r,s])),o.createHref({pathname:u,search:a,hash:i})}function ur(){return b.useContext(al)!=null}function yt(){return ur()||J(!1),b.useContext(al).location}function Xp(e){b.useContext(mt).static||b.useLayoutEffect(e)}function cr(){let{isDataRoute:e}=b.useContext(xt);return e?Px():gx()}function gx(){ur()||J(!1);let e=b.useContext(sl),{basename:t,future:n,navigator:r}=b.useContext(mt),{matches:o}=b.useContext(xt),{pathname:i}=yt(),s=JSON.stringify(ou(o,n.v7_relativeSplatPath)),a=b.useRef(!1);return Xp(()=>{a.current=!0}),b.useCallback(function(c,p){if(p===void 0&&(p={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=iu(c,JSON.parse(s),i,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Qt([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,s,i,e])}function mx(){let{matches:e}=b.useContext(xt),t=e[e.length-1];return t?t.params:{}}function ul(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(mt),{matches:o}=b.useContext(xt),{pathname:i}=yt(),s=JSON.stringify(ou(o,r.v7_relativeSplatPath));return b.useMemo(()=>iu(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function xx(e,t){return yx(e,t)}function yx(e,t,n,r){ur()||J(!1);let{navigator:o}=b.useContext(mt),{matches:i}=b.useContext(xt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=yt(),p;if(t){var h;let C=typeof t=="string"?ar(t):t;u==="/"||(h=C.pathname)!=null&&h.startsWith(u)||J(!1),p=C}else p=c;let x=p.pathname||"/",w=x;if(u!=="/"){let C=u.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=Hm(e,{pathname:w}),j=jx(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Qt([u,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Qt([u,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return t&&j?b.createElement(al.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:It.Pop}},j):j}function vx(){let e=Ex(),t=fx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,null)}const wx=b.createElement(vx,null);class kx extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(xt.Provider,{value:this.props.routeContext},b.createElement(Jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bx(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(sl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(xt.Provider,{value:t},r)}function jx(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let p=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);p>=0||J(!1),s=s.slice(0,Math.min(s.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=p),h.route.id){let{loaderData:x,errors:w}=n,y=h.route.loader&&x[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((p,h,x)=>{let w,y=!1,j=null,C=null;n&&(w=a&&h.route.id?a[h.route.id]:void 0,j=h.route.errorElement||wx,u&&(c<0&&x===0?(Tx("route-fallback"),y=!0,C=null):c===x&&(y=!0,C=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,x+1)),d=()=>{let m;return w?m=j:y?m=C:h.route.Component?m=b.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=p,b.createElement(bx,{match:h,routeContext:{outlet:p,matches:g,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?b.createElement(kx,{location:n.location,revalidation:n.revalidation,component:j,error:w,children:d(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):d()},null)}var Zp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zp||{}),qp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qp||{});function Sx(e){let t=b.useContext(sl);return t||J(!1),t}function $x(e){let t=b.useContext(Yp);return t||J(!1),t}function Cx(e){let t=b.useContext(xt);return t||J(!1),t}function eh(e){let t=Cx(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function Ex(){var e;let t=b.useContext(Jp),n=$x(),r=eh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Px(){let{router:e}=Sx(Zp.UseNavigateStable),t=eh(qp.UseNavigateStable),n=b.useRef(!1);return Xp(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,so({fromRouteId:t},i)))},[e,t])}const Ec={};function Tx(e,t,n){Ec[e]||(Ec[e]=!0)}function Lx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ix(e){let{to:t,replace:n,state:r,relative:o}=e;ur()||J(!1);let{future:i,static:s}=b.useContext(mt),{matches:a}=b.useContext(xt),{pathname:u}=yt(),c=cr(),p=iu(t,ou(a,i.v7_relativeSplatPath),u,o==="path"),h=JSON.stringify(p);return b.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:o}),[c,h,o,n,r]),null}function Pr(e){J(!1)}function Rx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=It.Pop,navigator:i,static:s=!1,future:a}=e;ur()&&J(!1);let u=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:i,static:s,future:so({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=ar(r));let{pathname:p="/",search:h="",hash:x="",state:w=null,key:y="default"}=r,j=b.useMemo(()=>{let C=Zn(p,u);return C==null?null:{location:{pathname:C,search:h,hash:x,state:w,key:y},navigationType:o}},[u,p,h,x,w,y,o]);return j==null?null:b.createElement(mt.Provider,{value:c},b.createElement(al.Provider,{children:n,value:j}))}function zx(e){let{children:t,location:n}=e;return xx(Js(t),n)}new Promise(()=>{});function Js(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...t,o];if(r.type===b.Fragment){n.push.apply(n,Js(r.props.children,i));return}r.type!==Pr&&J(!1),!r.props.index||!r.props.children||J(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Js(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(null,arguments)}function th(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Nx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dx(e,t){return e.button===0&&(!t||t==="_self")&&!Nx(e)}const _x=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ox=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Mx="6";try{window.__reactRouterVersion=Mx}catch{}const Ax=b.createContext({isTransitioning:!1}),Fx="startTransition",Pc=I0[Fx];function Bx(e){let{basename:t,children:n,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=Wm({window:o,v5Compat:!0}));let s=i.current,[a,u]=b.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},p=b.useCallback(h=>{c&&Pc?Pc(()=>u(h)):u(h)},[u,c]);return b.useLayoutEffect(()=>s.listen(p),[s,p]),b.useEffect(()=>Lx(r),[r]),b.createElement(Rx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,en=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:p,viewTransition:h}=t,x=th(t,_x),{basename:w}=b.useContext(mt),y,j=!1;if(typeof c=="string"&&Ux.test(c)&&(y=c,Wx))try{let m=new URL(window.location.href),k=c.startsWith("//")?new URL(m.protocol+c):new URL(c),v=Zn(k.pathname,w);k.origin===m.origin&&v!=null?c=v+k.search+k.hash:j=!0}catch{}let C=hx(c,{relative:o}),g=Hx(c,{replace:s,state:a,target:u,preventScrollReset:p,relative:o,viewTransition:h});function d(m){r&&r(m),m.defaultPrevented||g(m)}return b.createElement("a",Ai({},x,{href:y||C,onClick:j||i?r:d,ref:n,target:u}))}),nh=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:u,viewTransition:c,children:p}=t,h=th(t,Ox),x=ul(u,{relative:h.relative}),w=yt(),y=b.useContext(Yp),{navigator:j,basename:C}=b.useContext(mt),g=y!=null&&Qx(x)&&c===!0,d=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,m=w.pathname,k=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(m=m.toLowerCase(),k=k?k.toLowerCase():null,d=d.toLowerCase()),k&&C&&(k=Zn(k,C)||k);const v=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let $=m===d||!s&&m.startsWith(d)&&m.charAt(v)==="/",S=k!=null&&(k===d||!s&&k.startsWith(d)&&k.charAt(d.length)==="/"),E={isActive:$,isPending:S,isTransitioning:g},_=$?r:void 0,z;typeof i=="function"?z=i(E):z=[i,$?"active":null,S?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let W=typeof a=="function"?a(E):a;return b.createElement(en,Ai({},h,{"aria-current":_,className:z,ref:n,style:W,to:u,viewTransition:c}),typeof p=="function"?p(E):p)});var Xs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xs||(Xs={}));var Tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tc||(Tc={}));function Vx(e){let t=b.useContext(sl);return t||J(!1),t}function Hx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=cr(),c=yt(),p=ul(e,{relative:s});return b.useCallback(h=>{if(Dx(h,n)){h.preventDefault();let x=r!==void 0?r:Mi(c)===Mi(p);u(e,{replace:x,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,p,r,o,n,e,i,s,a])}function Qx(e,t){t===void 0&&(t={});let n=b.useContext(Ax);n==null&&J(!1);let{basename:r}=Vx(Xs.useViewTransitionState),o=ul(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ys(o.pathname,s)!=null||Ys(o.pathname,i)!=null}var H="-ms-",Fr="-moz-",A="-webkit-",rh="comm",cl="rule",lu="decl",Kx="@import",Gx="@namespace",oh="@keyframes",Yx="@layer",ih=Math.abs,su=String.fromCharCode,Zs=Object.assign;function Jx(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function lh(e){return e.trim()}function lt(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function ui(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function vn(e,t,n){return e.slice(t,n)}function Ge(e){return e.length}function sh(e){return e.length}function Tr(e,t){return t.push(e),e}function Xx(e,t){return e.map(t).join("")}function Lc(e,t){return e.filter(function(n){return!lt(n,t)})}var dl=1,qn=1,ah=0,We=0,re=0,dr="";function fl(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:dl,column:qn,length:s,return:"",siblings:a}}function St(e,t){return Zs(fl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=St(e.root,{children:[e]});Tr(e,e.siblings)}function Zx(){return re}function qx(){return re=We>0?se(dr,--We):0,qn--,re===10&&(qn=1,dl--),re}function Ze(){return re=We<ah?se(dr,We++):0,qn++,re===10&&(qn=1,dl++),re}function Rt(){return se(dr,We)}function ci(){return We}function pl(e,t){return vn(dr,e,t)}function ao(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e1(e){return dl=qn=1,ah=Ge(dr=e),We=0,[]}function t1(e){return dr="",e}function Ul(e){return lh(pl(We-1,qs(e===91?e+2:e===40?e+1:e)))}function n1(e){for(;(re=Rt())&&re<33;)Ze();return ao(e)>2||ao(re)>3?"":" "}function r1(e,t){for(;--t&&Ze()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return pl(e,ci()+(t<6&&Rt()==32&&Ze()==32))}function qs(e){for(;Ze();)switch(re){case e:return We;case 34:case 39:e!==34&&e!==39&&qs(re);break;case 40:e===41&&qs(e);break;case 92:Ze();break}return We}function o1(e,t){for(;Ze()&&e+re!==57;)if(e+re===84&&Rt()===47)break;return"/*"+pl(t,We-1)+"*"+su(e===47?e:Ze())}function i1(e){for(;!ao(Rt());)Ze();return pl(e,We)}function l1(e){return t1(di("",null,null,null,[""],e=e1(e),0,[0],e))}function di(e,t,n,r,o,i,s,a,u){for(var c=0,p=0,h=s,x=0,w=0,y=0,j=1,C=1,g=1,d=0,m="",k=o,v=i,$=r,S=m;C;)switch(y=d,d=Ze()){case 40:if(y!=108&&se(S,h-1)==58){ui(S+=N(Ul(d),"&","&\f"),"&\f",ih(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:S+=Ul(d);break;case 9:case 10:case 13:case 32:S+=n1(y);break;case 92:S+=r1(ci()-1,7);continue;case 47:switch(Rt()){case 42:case 47:Tr(s1(o1(Ze(),ci()),t,n,u),u),(ao(y||1)==5||ao(Rt()||1)==5)&&Ge(S)&&vn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*j:a[c++]=Ge(S)*g;case 125*j:case 59:case 0:switch(d){case 0:case 125:C=0;case 59+p:g==-1&&(S=N(S,/\f/g,"")),w>0&&(Ge(S)-h||j===0&&y===47)&&Tr(w>32?Rc(S+";",r,n,h-1,u):Rc(N(S," ","")+";",r,n,h-2,u),u);break;case 59:S+=";";default:if(Tr($=Ic(S,t,n,c,p,o,a,m,k=[],v=[],h,i),i),d===123)if(p===0)di(S,t,$,$,k,i,h,a,v);else{switch(x){case 99:if(se(S,3)===110)break;case 108:if(se(S,2)===97)break;default:p=0;case 100:case 109:case 115:}p?di(e,$,$,r&&Tr(Ic(e,$,$,0,0,o,a,m,o,k=[],h,v),v),o,v,h,a,r?k:v):di(S,$,$,$,[""],v,0,a,v)}}c=p=w=0,j=g=1,m=S="",h=s;break;case 58:h=1+Ge(S),w=y;default:if(j<1){if(d==123)--j;else if(d==125&&j++==0&&qx()==125)continue}switch(S+=su(d),d*j){case 38:g=p>0?1:(S+="\f",-1);break;case 44:a[c++]=(Ge(S)-1)*g,g=1;break;case 64:Rt()===45&&(S+=Ul(Ze())),x=Rt(),p=h=Ge(m=S+=i1(ci())),d++;break;case 45:y===45&&Ge(S)==2&&(j=0)}}return i}function Ic(e,t,n,r,o,i,s,a,u,c,p,h){for(var x=o-1,w=o===0?i:[""],y=sh(w),j=0,C=0,g=0;j<r;++j)for(var d=0,m=vn(e,x+1,x=ih(C=s[j])),k=e;d<y;++d)(k=lh(C>0?w[d]+" "+m:N(m,/&\f/g,w[d])))&&(u[g++]=k);return fl(e,t,n,o===0?cl:a,u,c,p,h)}function s1(e,t,n,r){return fl(e,t,n,rh,su(Zx()),vn(e,2,-2),0,r)}function Rc(e,t,n,r,o){return fl(e,t,n,lu,vn(e,0,r),vn(e,r+1,-1),r,o)}function uh(e,t,n){switch(Jx(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return A+e+e;case 4855:return A+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Fr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Fr+e+H+e+e;case 5936:switch(se(e,t+11)){case 114:return A+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+H+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+H+e+e;case 6165:return A+e+H+"flex-"+e+e;case 5187:return A+e+N(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return A+e+H+"flex-item-"+N(e,/flex-|-self/g,"")+(lt(e,/flex-|baseline/)?"":H+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return A+e+H+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+H+N(e,"shrink","negative")+e;case 5292:return A+e+H+N(e,"basis","preferred-size")+e;case 6060:return A+"box-"+N(e,"-grow","")+A+e+H+N(e,"grow","positive")+e;case 4554:return A+N(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+H+"flex-pack:$3"),/space-between/,"justify")+A+e+e;case 4200:if(!lt(e,/flex-|baseline/))return H+"grid-column-align"+vn(e,t)+e;break;case 2592:case 3360:return H+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,lt(r.props,/grid-\w+-end/)})?~ui(e+(n=n[t].value),"span",0)?e:H+N(e,"-start","")+e+H+"grid-row-span:"+(~ui(n,"span",0)?lt(n,/\d+/):+lt(n,/\d+/)-+lt(e,/\d+/))+";":H+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return lt(r.props,/grid-\w+-start/)})?e:H+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Fr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ui(e,"stretch",0)?uh(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,u,c){return H+o+":"+i+c+(s?H+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(se(e,t+6)===121)return N(e,":",":"+A)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(se(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+H+"$2box$3")+e;case 100:return N(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function Fi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function a1(e,t,n,r){switch(e.type){case Yx:if(e.children.length)break;case Kx:case Gx:case lu:return e.return=e.return||e.value;case rh:return"";case oh:return e.return=e.value+"{"+Fi(e.children,r)+"}";case cl:if(!Ge(e.value=e.props.join(",")))return""}return Ge(n=Fi(e.children,r))?e.return=e.value+"{"+n+"}":""}function u1(e){var t=sh(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function c1(e){return function(t){t.root||(t=t.return)&&e(t)}}function d1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case lu:e.return=uh(e.value,e.length,n);return;case oh:return Fi([St(e,{value:N(e.value,"@","@"+A)})],r);case cl:if(e.length)return Xx(n=e.props,function(o){switch(lt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(St(e,{props:[N(o,/:(read-\w+)/,":"+Fr+"$1")]})),jn(St(e,{props:[o]})),Zs(e,{props:Lc(n,r)});break;case"::placeholder":jn(St(e,{props:[N(o,/:(plac\w+)/,":"+A+"input-$1")]})),jn(St(e,{props:[N(o,/:(plac\w+)/,":"+Fr+"$1")]})),jn(St(e,{props:[N(o,/:(plac\w+)/,H+"input-$1")]})),jn(St(e,{props:[o]})),Zs(e,{props:Lc(n,r)});break}return""})}}var Vn={},Vl,Hl;const er=typeof process<"u"&&Vn!==void 0&&(Vn.REACT_APP_SC_ATTR||Vn.SC_ATTR)||"data-styled",ch="active",dh="data-styled-version",hl="6.4.2",au=`/*!sc*/
`,Br=typeof window<"u"&&typeof document<"u";function zc(e){if(typeof process<"u"&&Vn!==void 0){const t=Vn[e];if(t!==void 0&&t!=="")return t!=="false"}}const f1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Hl=(Vl=zc("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Vl!==void 0?Vl:zc("SC_DISABLE_SPEEDY"))!==null&&Hl!==void 0?Hl:typeof process<"u"&&Vn!==void 0&&!1),p1="sc-keyframes-",h1={};function tr(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let fi=new Map,Bi=new Map,pi=1;const Wo=e=>{if(fi.has(e))return fi.get(e);for(;Bi.has(pi);)pi++;const t=pi++;return fi.set(e,t),Bi.set(t,e),t},g1=e=>Bi.get(e),m1=(e,t)=>{pi=t+1,fi.set(e,t),Bi.set(t,e)},uu=Object.freeze([]),nr=Object.freeze({});function fh(e,t,n=nr){return e.theme!==n.theme&&e.theme||t||n.theme}const x1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,y1=/(^-|-$)/g;function ph(e){return e.replace(x1,"-").replace(y1,"")}const v1=/(a)(d)/gi,Nc=e=>String.fromCharCode(e+(e>25?39:97));function hh(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Nc(t%52)+n;return(Nc(t%52)+n).replace(v1,"$1-$2")}const ea=5381,pn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},gh=e=>pn(ea,e);function mh(e){return hh(gh(e)>>>0)}function w1(e){return e.displayName||e.name||"Component"}function ta(e){return typeof e=="string"&&!0}function k1(e){return ta(e)?`styled.${e}`:`Styled(${w1(e)})`}const xh=Symbol.for("react.memo"),b1=Symbol.for("react.forward_ref"),j1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},S1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$1={[b1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[xh]:yh};function Dc(e){return("type"in(t=e)&&t.type.$$typeof)===xh?yh:"$$typeof"in e?$1[e.$$typeof]:j1;var t}const C1=Object.defineProperty,E1=Object.getOwnPropertyNames,P1=Object.getOwnPropertySymbols,T1=Object.getOwnPropertyDescriptor,L1=Object.getPrototypeOf,I1=Object.prototype;function vh(e,t,n){if(typeof t!="string"){const r=L1(t);r&&r!==I1&&vh(e,r,n);const o=E1(t).concat(P1(t)),i=Dc(e),s=Dc(t);for(let a=0;a<o.length;++a){const u=o[a];if(!(u in S1||n&&n[u]||s&&u in s||i&&u in i)){const c=T1(t,u);try{C1(e,u,c)}catch{}}}}return e}function fr(e){return typeof e=="function"}const R1=Symbol.for("react.forward_ref");function cu(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===R1&&"styledComponentId"in e}function Lr(e,t){return e&&t?e+" "+t:e||t||""}function na(e,t){return e.join("")}function uo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ra(e,t,n=!1){if(!n&&!uo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ra(e[r],t[r]);else if(uo(t))for(const r in t)e[r]=ra(e[r],t[r]);return e}function wh(e,t){Object.defineProperty(e,"toString",{value:t})}const z1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let s=i;for(;e>=s;)if(s<<=1,s<0)throw tr(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(let a=i;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+au;return t}},N1=`style[${er}][${dh}="${hl}"]`,D1=new RegExp(`^${er}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),_c=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,oa=e=>{if(!e)return document;if(_c(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(_c(t))return t}return document},_1=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,s=r.length;i<s;i++)(o=r[i])&&e.registerName(t,o)},O1=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(au),o=[];for(let i=0,s=r.length;i<s;i++){const a=r[i].trim();if(!a)continue;const u=a.match(D1);if(u){const c=0|parseInt(u[1],10),p=u[2];c!==0&&(m1(p,c),_1(e,p,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}},Ql=e=>{const t=oa(e.options.target).querySelectorAll(N1);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(er)!==ch&&(O1(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let br=!1;function M1(){if(br!==!1)return br;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return br=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return br=t.getAttribute("content")||void 0}return br=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const kh=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(u=>{const c=Array.from(u.querySelectorAll(`style[${er}]`));return c[c.length-1]})(r),s=i!==void 0?i.nextSibling:null;o.setAttribute(er,ch),o.setAttribute(dh,hl);const a=t||M1();return a&&o.setAttribute("nonce",a),r.insertBefore(o,s),o},A1=class{constructor(e,t){this.element=kh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,s=o.length;i<s;i++){const a=o[i];if(a.ownerNode===n)return a}throw tr(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},F1=class{constructor(e,t){this.element=kh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Oc=Br;const B1={isServer:!Br,useCSSOMInjection:!f1};class ko{static registerId(t){return Wo(t)}constructor(t=nr,n={},r){this.options=Object.assign(Object.assign({},B1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Br&&Oc&&(Oc=!1,Ql(this)),wh(this,()=>(o=>{const i=o.getTag(),{length:s}=i;let a="";for(let u=0;u<s;u++){const c=g1(u);if(c===void 0)continue;const p=o.names.get(c);if(p===void 0||!p.size)continue;const h=i.getGroup(u);if(h.length===0)continue;const x=er+".g"+u+'[id="'+c+'"]';let w="";for(const y of p)y.length>0&&(w+=y+",");a+=h+x+'{content:"'+w+'"}'+au}return a})(this))}rehydrate(){!this.server&&Br&&Ql(this)}reconstructWithOptions(t,n=!0){const r=new ko(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Br&&t.target!==this.options.target&&oa(this.options.target)!==oa(t.target)&&Ql(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new A1(r,o):new F1(r,o))(this.options),new z1(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Wo(t),t.startsWith(p1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Wo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Wo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const bh=new WeakSet,W1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function U1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in W1||e.startsWith("--")?String(t).trim():t+"px"}const sn=47;function Mc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const V1=Symbol.for("sc-keyframes");function H1(e){return typeof e=="object"&&e!==null&&V1 in e}function jh(e){return fr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Sh=e=>e==null||e===!1||e==="",Q1=Symbol.for("react.client.reference");function Ac(e){return e.$$typeof===Q1}function $h(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Sh(r)&&(Array.isArray(r)&&bh.has(r)||fr(r)?t.push(Mc(n)+":",r,";"):uo(r)?(t.push(n+" {"),$h(r,t),t.push("}")):t.push(Mc(n)+": "+U1(n,r)+";"))}}function Kt(e,t,n,r,o=[]){if(Sh(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(Ac(e))return o;if(jh(e)&&t){const s=e(t);return Kt(s,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Kt(e[s],t,n,r,o);return o}return cu(e)?(o.push(`.${e.styledComponentId}`),o):H1(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):Ac(e)?o:uo(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):($h(e,o),o):(o.push(e.toString()),o)}const K1=gh(hl);class G1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=pn(K1,n),this.baseStyle=r,ko.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")i+=a;else if(a)if(jh(a)){const u=a(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=na(Kt(u,t,n,r)))}else i+=na(Kt(a,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+i:i;let a=this.dynamicNameCache.get(s);if(!a){if(a=hh(pn(pn(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const u=r(i,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,u)}o=Lr(o,a)}}return o}}const Y1=/&/g;function Ch(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Kl(e){const t=e.length;let n="",r=0,o=0,i=0,s=!1,a=!1;for(let u=0;u<t;u++){const c=e.charCodeAt(u);if(i!==0||s||c!==sn||e.charCodeAt(u+1)!==42)if(s)c===42&&e.charCodeAt(u+1)===sn&&(s=!1,u++);else if(c!==34&&c!==39||Ch(e,u)){if(i===0)if(c===123)o++;else if(c===125){if(o--,o<0){a=!0;let p=u+1;for(;p<t;){const h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(n+=e.substring(r,u+1),r=u+1)}else c===59&&o===0&&(n+=e.substring(r,u+1),r=u+1)}else i===0?i=c:i===c&&(i=0);else s=!0,u++}return a||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function Eh(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const s=i.props,a=[];for(let u=0;u<s.length;u++)a[u]=n+s[u];i.props=a}Array.isArray(i.children)&&i.type!=="@keyframes"&&Eh(i.children,t)}return e}function J1({options:e=nr,plugins:t=uu}=nr){let n,r,o;const i=(x,w,y)=>y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?`.${n}`:x,s=t.slice();s.push(x=>{x.type===cl&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(Y1,r).replace(o,i))}),e.prefix&&s.push(d1),s.push(a1);let a=[];const u=u1(s.concat(c1(x=>a.push(x)))),c=(x,w="",y="",j="&")=>{n=j,r=w,o=void 0;const C=function(d){const m=d.indexOf("//")!==-1,k=d.indexOf("}")!==-1;if(!m&&!k)return d;if(!m)return Kl(d);const v=d.length;let $="",S=0,E=0,_=0,z=0,W=0,Ue=!1;for(;E<v;){const Z=d.charCodeAt(E);if(Z!==34&&Z!==39||Ch(d,E))if(_===0)if(Z===sn&&E+1<v&&d.charCodeAt(E+1)===42){for(E+=2;E+1<v&&(d.charCodeAt(E)!==42||d.charCodeAt(E+1)!==sn);)E++;E+=2}else if(Z!==40)if(Z!==41)if(z>0)E++;else if(Z===42&&E+1<v&&d.charCodeAt(E+1)===sn)$+=d.substring(S,E),E+=2,S=E,Ue=!0;else if(Z===sn&&E+1<v&&d.charCodeAt(E+1)===sn){for($+=d.substring(S,E);E<v&&d.charCodeAt(E)!==10;)E++;S=E,Ue=!0}else Z===123?W++:Z===125&&W--,E++;else z>0&&z--,E++;else z++,E++;else E++;else _===0?_=Z:_===Z&&(_=0),E++}return Ue?(S<v&&($+=d.substring(S)),W===0?$:Kl($)):W===0?d:Kl(d)}(x);let g=l1(y||w?y+" "+w+" { "+C+" }":C);return e.namespace&&(g=Eh(g,e.namespace)),a=[],Fi(g,u),a},p=e;let h=ea;for(let x=0;x<t.length;x++)t[x].name||tr(15),h=pn(h,t[x].name);return p!=null&&p.namespace&&(h=pn(h,p.namespace)),p!=null&&p.prefix&&(h=pn(h,"p")),c.hash=h!==ea?h.toString():"",c}const X1=new ko,Z1=J1(),Ph=me.createContext({shouldForwardProp:void 0,styleSheet:X1,stylis:Z1,stylisPlugins:void 0});Ph.Consumer;function Th(){return me.useContext(Ph)}const co=me.createContext(void 0);co.Consumer;function q1(e){const t=me.useContext(co),n=me.useMemo(()=>function(r,o){if(!r)throw tr(14);if(fr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw tr(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?me.createElement(co.Provider,{value:n},e.children):null}const Fc=Object.prototype.hasOwnProperty,Gl={};function ey(e,t){const n=typeof e!="string"?"sc":ph(e);Gl[n]=(Gl[n]||0)+1;const r=n+"-"+mh(hl+n+Gl[n]);return t?t+"-"+r:r}function ty(e,t,n){const r=cu(e),o=e,i=!ta(e),{attrs:s=uu,componentId:a=ey(t.displayName,t.parentComponentId),displayName:u=k1(e)}=t,c=t.displayName&&t.componentId?ph(t.displayName)+"-"+t.componentId:t.componentId||a,p=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){const j=o.shouldForwardProp;if(t.shouldForwardProp){const C=t.shouldForwardProp;h=(g,d)=>j(g,d)&&C(g,d)}else h=j}const x=new G1(n,c,r?o.componentStyle:void 0);function w(j,C){return function(g,d,m){const{attrs:k,componentStyle:v,defaultProps:$,foldedComponentIds:S,styledComponentId:E,target:_}=g,z=me.useContext(co),W=Th(),Ue=g.shouldForwardProp||W.shouldForwardProp,Z=fh(d,z,$)||nr;let Ve,tn;{const I=me.useRef(null),R=I.current;if(R!==null&&R[1]===Z&&R[2]===W.styleSheet&&R[3]===W.stylis&&R[7]===v&&function(B,M,ie){const q=B,ne=M;let Pe=0;for(const De in ne)if(Fc.call(ne,De)&&(Pe++,q[De]!==ne[De]))return!1;return Pe===ie}(R[0],d,R[4]))Ve=R[5],tn=R[6];else{Ve=function(M,ie,q){const ne=Object.assign(Object.assign({},ie),{className:void 0,theme:q}),Pe=M.length>1;for(let De=0;De<M.length;De++){const gl=M[De],So=fr(gl)?gl(Pe?Object.assign({},ne):ne):gl;for(const wt in So)wt==="className"?ne.className=Lr(ne.className,So[wt]):wt==="style"?ne.style=Object.assign(Object.assign({},ne.style),So[wt]):wt in ie&&ie[wt]===void 0||(ne[wt]=So[wt])}return"className"in ie&&typeof ie.className=="string"&&(ne.className=Lr(ne.className,ie.className)),ne}(k,d,Z),tn=function(M,ie,q,ne){return M.generateAndInjectStyles(ie,q,ne)}(v,Ve,W.styleSheet,W.stylis);let B=0;for(const M in d)Fc.call(d,M)&&B++;I.current=[d,Z,W.styleSheet,W.stylis,B,Ve,tn,v]}}const vt=Ve.as||_,nn=function(I,R,B,M){const ie={};for(const q in I)I[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&I.theme===B||(q==="forwardedAs"?ie.as=I.forwardedAs:M&&!M(q,R)||(ie[q]=I[q]));return ie}(Ve,vt,Z,Ue);let T=Lr(S,E);return tn&&(T+=" "+tn),Ve.className&&(T+=" "+Ve.className),nn[ta(vt)&&vt.includes("-")?"class":"className"]=T,m&&(nn.ref=m),b.createElement(vt,nn)}(y,j,C)}w.displayName=u;let y=me.forwardRef(w);return y.attrs=p,y.componentStyle=x,y.displayName=u,y.shouldForwardProp=h,y.foldedComponentIds=r?Lr(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=c,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get(){return this._foldedDefaultProps},set(j){this._foldedDefaultProps=r?function(C,...g){for(const d of g)ra(C,d,!0);return C}({},o.defaultProps,j):j}}),wh(y,()=>`.${y.styledComponentId}`),i&&vh(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}var ny=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Bc(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const Wc=e=>(bh.add(e),e);function Lh(e,...t){if(fr(e)||uo(e))return Wc(Kt(Bc(uu,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Kt(n):Wc(Kt(Bc(n,t)))}function ia(e,t,n=nr){if(!t)throw tr(1,t);const r=(o,...i)=>e(t,n,Lh(o,...i));return r.attrs=o=>ia(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>ia(e,t,Object.assign(Object.assign({},n),o)),r}const Ih=e=>ia(ty,e),f=Ih;ny.forEach(e=>{f[e]=Ih(e)});class ry{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(fr(i)&&!cu(i))return!1}return!0}(t),ko.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(i,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&s){const a=s.rules,u=this.instanceRules.get(t).rules;if(a.length===u.length){let c=!0;for(let p=0;p<a.length;p++)if(a[p]!==u[p]){c=!1;break}if(c)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=na(Kt(this.rules,n,r,o)),s={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function oy(e,...t){const n=Lh(e,...t),r=`sc-global-${mh(JSON.stringify(n))}`,o=new ry(n,r),i=a=>{const u=Th(),c=me.useContext(co);let p;{const h=me.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),p=h.current}u.styleSheet.server&&s(p,a,u.styleSheet,c,u.stylis);{const h=o.isStatic?[p,u.styleSheet,o]:[p,a,u.styleSheet,c,u.stylis,o],x=me.useRef(o);me.useLayoutEffect(()=>{u.styleSheet.server||(x.current!==o&&(u.styleSheet.clearRules(r),x.current=o),s(p,a,u.styleSheet,c,u.stylis))},h),me.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function s(a,u,c,p,h){if(o.isStatic)o.renderStyles(a,h1,c,h);else{const x=Object.assign(Object.assign({},u),{theme:fh(u,p,i.defaultProps)});o.renderStyles(a,x,c,h)}}return me.memo(i)}const iy={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},Uc=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),ly=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),sy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ay=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),uy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),cy=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),dy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),fy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),py=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),l.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Rh=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),hy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),gy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),l.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),my=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),xy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),yy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Jt=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),la=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Wr=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),zh=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Wi=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),vy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),fo=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),wy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"6.5",r:"3.5",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M2.5 17.5c0-3.6 3.4-6.2 7.5-6.2s7.5 2.6 7.5 6.2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Nh=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),ky=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),Dh=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Vc=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Hc=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),by=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),jy=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Qc=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),l.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),_h=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Sy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 6l8-4 8 4-8 4-8-4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 10l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 14l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),$y=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),l.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),Cy=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})});function rr(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return l.jsx(Uc,{...r});case"settings":return l.jsx(ly,{...r});case"shield":return l.jsx(sy,{...r});case"hierarchy":return l.jsx(ay,{...r});case"cycle":return l.jsx(uy,{...r});case"code":return l.jsx(cy,{...r});case"globe":return l.jsx(dy,{...r});case"document":return l.jsx(fy,{...r});case"mobile":return l.jsx(py,{...r});case"sparkle":return l.jsx(Rh,{...r});case"envelope":return l.jsx(hy,{...r});case"key":return l.jsx(vy,{...r});case"atom":return l.jsx(ky,{...r});default:return l.jsx(Uc,{...r})}}const Oh=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],Mh=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents",iconType:"sparkle"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],Sn=e=>[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],ln={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"INVENTORY",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"POLICIES",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"AUTOMATION",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"INTEGRATIONS",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"RELEASE SECURITY",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"SIGNING",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"INTEGRATIONS",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"MANAGE CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"POLICIES",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"REVOCATION & VALIDATION",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:Sn("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:Sn("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:Sn("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:Sn("device-trust")},"ai-agents":{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents navigation",sections:Sn("ai-agents")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:Sn("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},Ey={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/ai-agents":"AI Agents","/ai-agents/dashboard":"Dashboard","/ai-agents/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},Py=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],Ty=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],Ly=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],Iy=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/ai-agents","/ai-agents/dashboard","/ai-agents/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],Ry=f.div`
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
`,zy=f.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,Kc=f.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Gc=f.a`
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
`;function Ny({onClose:e,onSelectProduct:t}){const n=cr(),r=o=>{t(o.productId),n(o.route),e()};return l.jsxs(Ry,{role:"menu","aria-label":"Settings menu",children:[l.jsx(zy,{children:"Settings"}),l.jsx(Kc,{}),Py.map(o=>l.jsx(Gc,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route)),l.jsx(Kc,{}),Ty.map(o=>l.jsx(Gc,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route))]})}const Dy=f.div`
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
`,_y=f.div`
  padding: 4px 0;
`,Oy=f.a`
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
`;function My({onClose:e}){return l.jsx(Dy,{role:"menu","aria-label":"Help menu",children:l.jsx(_y,{children:Ly.map(t=>l.jsx(Oy,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const Ay=f.div`
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
`,Fy=f.div`
  padding: 12px 16px;
`,By=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Wy=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,Yc=f.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Uy=f.div`
  padding: 4px 0;
`,Jc=f.a`
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
`;function Vy({onClose:e,onSelectProduct:t}){const n=cr(),r=o=>{o.preventDefault(),t("profile"),n("/profile"),e()};return l.jsxs(Ay,{role:"menu","aria-label":"User profile menu",children:[l.jsxs(Fy,{children:[l.jsx(By,{children:"Deepika Chauhan"}),l.jsx(Wy,{children:"deepika.chauhan@digicert.com"})]}),l.jsx(Yc,{}),l.jsxs(Uy,{children:[l.jsx(Jc,{href:"/profile",role:"menuitem",onClick:r,children:"My profile"}),l.jsx(Yc,{}),l.jsx(Jc,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const Hy=f.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,Qy=f.div`
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
`,Ky=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Gy=f.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Yy=f.button`
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
`,Jy=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,Xy=f.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`,Zy=f.button`
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
`;function qy({open:e,onClose:t}){const n=b.useRef(null),r=b.useRef(null);return b.useEffect(()=>{var i;if(!e)return;(i=n.current)==null||i.focus();const o=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const u=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),c=u[0],p=u[u.length-1];s.shiftKey&&document.activeElement===c?(s.preventDefault(),p.focus()):!s.shiftKey&&document.activeElement===p&&(s.preventDefault(),c.focus())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),l.jsxs(l.Fragment,{children:[l.jsx(Hy,{$open:e,onClick:t,"aria-hidden":"true"}),l.jsxs(Qy,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[l.jsxs(Ky,{children:[l.jsx(Gy,{id:"cart-heading",children:"Cart"}),l.jsx(Yy,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),l.jsxs(Jy,{children:[l.jsx(Xy,{children:"Your cart is empty."}),l.jsx(Zy,{onClick:t,children:"Continue shopping"})]})]})]})}const ev=f.div`
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
`,tv=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,nv=f.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,rv=f.button`
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
`,ov=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`,iv=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
`,lv=f.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,sv=f.input`
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
`,av=f.button`
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
`;function uv({open:e,onClose:t}){const n=b.useRef(null);return b.useEffect(()=>{const r=o=>{o.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),l.jsxs(ev,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[l.jsxs(tv,{children:[l.jsx(nv,{children:"AI Assist"}),l.jsx(rv,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),l.jsxs(ov,{children:[l.jsx(iv,{children:"How can I help you today?"}),l.jsxs(lv,{children:[l.jsx(sv,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),l.jsx(av,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const cv=f.header`
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
`,dv=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,fv=f.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,pv=f.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,hv=f.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 18px;
  color: ${({theme:e})=>e.colors.white};
  letter-spacing: 0.02em;
  user-select: none;

  .logo-bold { font-weight: 700; }
  .logo-normal { font-weight: 400; }
`,jr=f.button`
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
`,gv=f.span`
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
`,mv=f.button`
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
`,Uo=f.div`
  position: relative;
  display: flex;
  align-items: center;
`,xv=f.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function yv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:o,onSelectProduct:i,cartCount:s=3}){const a=n==="settings"||n==="help"||n==="profile";return l.jsxs(l.Fragment,{children:[l.jsxs(cv,{role:"banner",children:[l.jsxs(dv,{children:[l.jsx(pv,{children:l.jsx(jr,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:l.jsx(yy,{size:20})})}),l.jsxs(hv,{"aria-label":"DigiCert ONE",children:[l.jsx("span",{className:"logo-normal",children:"digicert "}),l.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),l.jsxs(fv,{children:[l.jsx(Uo,{children:l.jsxs(jr,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[l.jsx(gy,{size:20}),s>0&&l.jsx(gv,{"aria-hidden":"true",children:s})]})}),l.jsxs(Uo,{children:[l.jsx(jr,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:l.jsx(xy,{size:20})}),n==="settings"&&l.jsx(Ny,{onClose:o,onSelectProduct:i})]}),l.jsxs(Uo,{children:[l.jsx(jr,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:l.jsx(my,{size:20})}),n==="help"&&l.jsx(My,{onClose:o})]}),l.jsx(jr,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:l.jsx(Rh,{size:20})}),l.jsxs(Uo,{children:[l.jsx(mv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&l.jsx(Vy,{onClose:o,onSelectProduct:i})]})]})]}),a&&l.jsx(xv,{onClick:o,"aria-hidden":"true"}),l.jsx(qy,{open:n==="cart",onClose:o}),l.jsx(uv,{open:n==="ai-assist",onClose:o})]})}const vv=f.nav`
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
`,Xc=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,wv=f.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,kv=f.button`
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
`,bv=f.span`
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
`,jv=350;function Zc({product:e,isActive:t,onSelect:n}){const r=cr(),o=b.useRef(null),i=b.useRef(null),[s,a]=b.useState({visible:!1,y:0});b.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const u=()=>{var y;const w=(y=o.current)==null?void 0:y.getBoundingClientRect();return w?w.top+w.height/2:0},c=w=>{i.current&&(clearTimeout(i.current),i.current=null),w?a({visible:!0,y:u()}):i.current=setTimeout(()=>a({visible:!0,y:u()}),jv)},p=()=>{i.current&&(clearTimeout(i.current),i.current=null),a(w=>({...w,visible:!1}))},h=()=>{p(),n(e.id),r(e.route)},x=w=>{if(w.key==="Escape"){p();return}(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),h())};return l.jsxs(l.Fragment,{children:[l.jsx(kv,{ref:o,$active:t,onClick:h,onKeyDown:x,onMouseEnter:()=>c(!1),onMouseLeave:p,onFocus:()=>c(!0),onBlur:p,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:rr(e.iconType,20,t?"#111827":"#6B7280")}),nu.createPortal(l.jsx(bv,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function Sv({activeProductId:e,onSelectProduct:t}){return l.jsxs(vv,{"aria-label":"Product navigation",children:[l.jsx(Xc,{children:Oh.map(n=>l.jsx(Zc,{product:n,isActive:e===n.id,onSelect:t},n.id))}),l.jsx(wv,{}),l.jsx(Xc,{children:Mh.map(n=>l.jsx(Zc,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const $v=f.div`
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
`,Cv=f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,Ev=f.div`
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
`,Pv=f.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,Tv=f.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Lv=f.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,Iv=f.button`
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
`,Rv=f.div`
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
`,zv=f.div`
  margin-bottom: 2px;
`,Nv=f.button`
  display: ${({$hasTitle:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px 12px 6px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral700};
  transition: color 0.15s;

  &:hover { color: ${({theme:e})=>e.colors.neutral900}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }
`,Dv=f.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,_v=f(nh)`
  display: block;
  padding: 7px 12px 7px 20px;
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
`;function Ov({section:e,index:t}){const[n,r]=b.useState(e.defaultExpanded??t===0),o=yt(),i=!!e.title,s=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return l.jsxs(zv,{children:[l.jsxs(Nv,{$hasTitle:i,onClick:()=>r(a=>!a),"aria-expanded":n,"aria-controls":s,children:[l.jsx("span",{children:e.title}),n?l.jsx(zh,{size:12,color:"currentColor"}):l.jsx(Wr,{size:12,color:"currentColor"})]}),l.jsx(Dv,{id:s,$open:n||!i,children:e.items.map(a=>l.jsx(_v,{to:a.route,end:!0,"aria-current":o.pathname===a.route?"page":void 0,children:a.label},a.route))})]})}function Mv({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r}){let o=ln[e];return e==="settings-billing"&&r==="enterprise"&&(o={...o,sections:o.sections.map(i=>({...i,items:i.items.filter(s=>s.route==="/settings/billing")}))}),b.useEffect(()=>{const i=s=>{s.key==="Escape"&&t&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[t,n]),l.jsxs(l.Fragment,{children:[l.jsx(Rv,{$visible:t,onClick:n,"aria-hidden":"true"}),l.jsxs($v,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[l.jsx(Cv,{children:l.jsx(Ev,{$open:t,children:o&&l.jsxs(l.Fragment,{children:[l.jsx(Pv,{children:l.jsx(Tv,{children:o.label})}),l.jsx(Lv,{children:l.jsx("nav",{"aria-label":"Product navigation",children:o.sections.map((i,s)=>l.jsx(Ov,{section:i,index:s},i.title||s))})})]})})}),l.jsx(Iv,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:l.jsx(Jt,{size:14,color:"currentColor"})})]})]})}const Av=f.div`
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
`,Fv=f.div`
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
`,Bv=f.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({$offset:e})=>e}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`,qc=f.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`,ed=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`,td=f.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Yl=f.button`
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
`,nd=f.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`,rd=f.div`
  display: flex;
  flex-direction: column;
`,Wv=f.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`,od=f.button`
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
`,id=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Uv=f.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`,Vv=f(nh)`
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
`;function Hv({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const o=cr(),i=yt(),s=b.useRef(null),a=b.useRef(null),[u,c]=b.useState("l1"),[p,h]=b.useState(null),x=b.useRef(0),w=b.useRef(0);b.useEffect(()=>{e||(c("l1"),h(null))},[e]),b.useEffect(()=>{const v=s.current;v&&(e?v.removeAttribute("inert"):v.setAttribute("inert",""))},[e]),b.useEffect(()=>{if(!e)return;const v=setTimeout(()=>{var $,S;(S=($=s.current)==null?void 0:$.querySelector("button"))==null||S.focus()},50);return()=>clearTimeout(v)},[e]),b.useEffect(()=>{if(!e)return;const v=$=>{if($.key==="Escape"){r();return}if($.key!=="Tab")return;const S=s.current;if(!S)return;const E=S.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),_=E[0],z=E[E.length-1];$.shiftKey&&document.activeElement===_?($.preventDefault(),z.focus()):!$.shiftKey&&document.activeElement===z&&($.preventDefault(),_.focus())};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[e,r]);const y=v=>{h(v),c("l2"),setTimeout(()=>{var $;($=a.current)==null||$.focus()},50)},j=()=>{c("l1")},C=v=>{!!ln[v.id]?y(v.id):(n(v.id),o(v.route),r())},g=()=>{r()},d=v=>{x.current=v.touches[0].clientX,w.current=v.touches[0].clientY},m=v=>{const $=v.changedTouches[0].clientX-x.current,S=Math.abs(v.changedTouches[0].clientY-w.current);$<-80&&S<60&&r()},k=p?ln[p]:null;return l.jsxs(l.Fragment,{children:[l.jsx(Av,{$open:e,onClick:r,"aria-hidden":"true"}),l.jsx(Fv,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:d,onTouchEnd:m,children:l.jsxs(Bv,{$offset:u==="l1"?0:-50,children:[l.jsxs(qc,{"aria-hidden":u!=="l1",children:[l.jsxs(ed,{children:[l.jsx(td,{children:"Navigation"}),l.jsx(Yl,{onClick:r,"aria-label":"Close menu",children:l.jsx(Wi,{size:16,color:"currentColor"})})]}),l.jsx(nd,{children:l.jsxs("nav",{"aria-label":"Product list",children:[l.jsx(rd,{children:Oh.map(v=>l.jsxs(od,{$active:t===v.id,onClick:()=>C(v),"aria-current":t===v.id?"page":void 0,"aria-haspopup":ln[v.id]?"menu":void 0,children:[rr(v.iconType,18,t===v.id?"#1976D2":"#6B7280"),l.jsx(id,{children:v.label}),ln[v.id]&&l.jsx(la,{size:14,color:t===v.id?"#1976D2":"#9CA3AF"})]},v.id))}),l.jsx(Wv,{}),l.jsx(rd,{children:Mh.map(v=>l.jsxs(od,{$active:t===v.id,onClick:()=>C(v),"aria-current":t===v.id?"page":void 0,"aria-haspopup":ln[v.id]?"menu":void 0,children:[rr(v.iconType,18,t===v.id?"#1976D2":"#6B7280"),l.jsx(id,{children:v.label}),ln[v.id]&&l.jsx(la,{size:14,color:t===v.id?"#1976D2":"#9CA3AF"})]},v.id))})]})})]}),l.jsxs(qc,{ref:a,"aria-hidden":u!=="l2",children:[l.jsxs(ed,{children:[l.jsx(Yl,{onClick:j,"aria-label":"Back to menu",children:l.jsx(Jt,{size:16,color:"currentColor"})}),l.jsx(td,{children:(k==null?void 0:k.label)??""}),l.jsx(Yl,{onClick:r,"aria-label":"Close menu",children:l.jsx(Wi,{size:16,color:"currentColor"})})]}),l.jsx(nd,{children:k&&l.jsx("nav",{"aria-label":`${k.label} navigation`,children:k.sections.map((v,$)=>l.jsxs("div",{children:[v.title&&l.jsx(Uv,{children:v.title}),v.items.map(S=>l.jsx(Vv,{to:S.route,end:!0,"aria-current":i.pathname===S.route?"page":void 0,onClick:g,children:S.label},S.route))]},v.title||$))})})]})]})})]})}const Qv=f.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,Kv=f.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`,Gv=f.div`
  flex: 1 1 520px;
  min-width: 280px;
`,Yv=f.p`
  margin: 0 0 8px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Jv=f.h1`
  margin: 0;
  font-size: 40px;
  line-height: 48px;
  max-width: 720px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 400;
`,Xv=f.p`
  margin: 16px 0 0;
  max-width: 680px;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Zv=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex: 0 1 auto;
  min-width: 220px;
`,ld=f.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  padding: 12px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e,$primary:t})=>t?"transparent":e.colors.blue300};
  background: ${({theme:e,$primary:t})=>t?e.colors.blue300:e.colors.white};
  color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.blue300};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({theme:e,$primary:t})=>t?e.colors.blue500:e.colors.neutral100};
    border-color: ${({theme:e,$primary:t})=>t?"transparent":e.colors.blue500};
    color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.blue500};
  }
`,qv=f.h2`
  margin: 0 0 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,ew=f.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,tw=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,nw=f.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 0 1px 2px rgba(53,56,58,0.05);
  padding: 24px;
`,rw=f.h3`
  margin: 0 0 6px;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,ow=f.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,iw=f.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
`,lw=f.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral900};
  font-size: 14px;
  background: ${({theme:e})=>e.colors.white};
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    border-color: ${({theme:e})=>e.colors.blue300};
  }
`,sw=f.div`
  display: grid;
  gap: 16px;
`,aw=f.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,uw=f.div`
  position: relative;
  width: 100%;
  min-height: 192px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,cw=f.img`
  width: 100%;
  height: 100%;
  min-height: 192px;
  object-fit: cover;
  display: block;
`,dw=f.div`
  padding: 20px 20px 24px;
`,fw=f.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(1, 116, 195, 0.12);
  color: ${({theme:e})=>e.colors.blue300};
`,pw=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 12px;
`,hw=f.h3`
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 26px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,gw=f.p`
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral700};
`,mw=f.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;

  &:hover { text-decoration: underline; }
`,xw=f.article`
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px;
  display: grid;
  gap: 16px;
`,yw=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,vw=f.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,ww=f.button`
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.neutral500};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({theme:e})=>e.colors.neutral900};
    background: ${({theme:e})=>e.colors.neutral200};
  }
`,kw=f.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,bw=f.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,jw=f.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,Sw=[{title:"CertCentral",subtitle:"Public certificates",actions:[{label:"Order a new certificate",href:"/certcentral/dashboard"},{label:"Reissue a certificate",href:"/certcentral/dashboard"},{label:"Configure ACME automation",href:"/certcentral/client-tools"},{label:"Manage organizations",href:"/certcentral/client-tools"}]},{title:"Trust Lifecycle Manager",subtitle:"Certificate lifecycle",actions:[{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Apply policies",href:"/trust-lifecycle/dashboard"},{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Set up certificate automation",href:"/trust-lifecycle/tools"}]},{title:"DNS Trust Manager",subtitle:"DNS & DNSSEC",actions:[{label:"Update CAA records",href:"/dns/dashboard"},{label:"Add or edit a zone",href:"/dns/dashboard"},{label:"Enable DNSSEC",href:"/dns/dashboard"},{label:"Set traffic routing rules",href:"/dns/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",actions:[{label:"Issue an internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage CRL & OCSP",href:"/private-ca/dashboard"},{label:"Manage certificate templates",href:"/private-ca/certificate-templates"}]}];function $w(){const[e,t]=b.useState(!1);return l.jsxs(Qv,{children:[l.jsxs(Kv,{children:[l.jsxs(Gv,{children:[l.jsx(Yv,{children:"Hi, John Smith"}),l.jsx(Jv,{children:"What would you like to do?"}),l.jsx(Xv,{children:"Your DigiCert ONE workspace — manage certificates, policies, and trust across products."})]}),l.jsxs(Zv,{children:[l.jsx(ld,{href:"/certcentral/inventory",children:"View inventory"}),l.jsx(ld,{href:"/certcentral/dashboard",$primary:!0,children:"Order certificate"})]})]}),l.jsx(qv,{children:"Browse actions by product"}),l.jsxs(ew,{children:[l.jsx("div",{children:l.jsx(tw,{children:Sw.map(n=>l.jsxs(nw,{children:[l.jsx(rw,{children:n.title}),l.jsx(ow,{children:n.subtitle}),l.jsx(iw,{children:n.actions.map(r=>l.jsx("li",{children:l.jsxs(lw,{href:r.href,children:[l.jsx("span",{children:r.label}),l.jsx(la,{size:16,color:"currentColor"})]})},r.label))})]},n.title))})}),l.jsxs(sw,{children:[l.jsxs(aw,{children:[l.jsx(uw,{children:l.jsx(cw,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),l.jsxs(dw,{children:[l.jsx(fw,{children:"Certificate Lifecycle"}),l.jsxs(pw,{children:[l.jsx("span",{children:"Brian Trzupek · 5 min read"}),l.jsx("span",{children:"digicert.com/blog"})]}),l.jsx(hw,{children:"Certificate lifecycle management reaches an inflection point"}),l.jsx(gw,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),l.jsx(mw,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&l.jsxs(xw,{children:[l.jsxs(yw,{children:[l.jsx(vw,{children:"Spotlight"}),l.jsx(ww,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:l.jsx(Wi,{size:16,color:"currentColor"})})]}),l.jsx(kw,{children:"Software Trust Manager"}),l.jsx(bw,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),l.jsx(jw,{href:"/software-trust/dashboard",children:"Learn more →"})]})]})]})]})}const Cw=f.main`
  padding: 24px;
`,Ew=f.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,sd=f.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function ad(){const e=yt(),t=Ey[e.pathname]??e.pathname;return b.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),l.jsxs(Cw,{children:[l.jsx(Ew,{children:t}),e.pathname==="/profile"&&l.jsx(sd,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),l.jsxs(sd,{children:["This is a stub page for ",l.jsx("code",{children:e.pathname})]})]})}const pr={enterprise:{label:"Enterprise plan",description:"Billed and managed directly through your DigiCert account team. Contract terms, renewals, and invoicing are handled by your account manager, so no self-service payment actions are needed here."},ecommerce:{label:"E-commerce plan",description:"A self-service subscription billed automatically to the payment method on file. Manage your plan, payment details, and receipts at any time from this account."}},On={name:"Sarah Mitchell",title:"Enterprise Account Manager, DigiCert",email:"sarah.mitchell@digicert.com",phone:"+1 (801) 555-0142"},Pw=[{id:"document-trust",name:"Document Trust",iconType:"document",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800},{name:"Users",purchased:500,allocated:420,consumed:390,remaining:110},{name:"Identity verifications",purchased:1e3,allocated:1e3,consumed:760,remaining:240}]},{id:"software-trust",name:"Software Trust",iconType:"code",contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Code signing certificates",consumed:42,total:50},entitlements:[{name:"Code signing certificates",purchased:50,allocated:50,consumed:42,remaining:8},{name:"Signing keys",purchased:20,allocated:18,consumed:15,remaining:5},{name:"Signing events",purchased:1e4,allocated:1e4,consumed:7400,remaining:2600}]},{id:"trust-lifecycle",name:"Trust Lifecycle Manager",iconType:"cycle",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Managed certificates",consumed:1120,total:2e3},entitlements:[{name:"Managed certificates",purchased:2e3,allocated:2e3,consumed:1120,remaining:880},{name:"Seats",purchased:75,allocated:75,consumed:25,remaining:50},{name:"Discovery scans / month",purchased:100,allocated:100,consumed:64,remaining:36}]},{id:"keylocker",name:"KeyLocker",iconType:"key",contractId:"CTR-2024-KL-00045",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"DevOps Engineering",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signing keys",consumed:18,total:20},entitlements:[{name:"Signing keys",purchased:20,allocated:20,consumed:18,remaining:2},{name:"HSM partitions",purchased:4,allocated:4,consumed:3,remaining:1},{name:"Signing events / month",purchased:5e3,allocated:5e3,consumed:4100,remaining:900}]},{id:"dns",name:"DigiCert DNS",iconType:"globe",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]},{id:"device-trust",name:"Device Trust",iconType:"mobile",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Device certificates",consumed:45e3,total:1e5},entitlements:[{name:"Device certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Device groups",purchased:50,allocated:50,consumed:32,remaining:18},{name:"API calls / month",purchased:1e6,allocated:1e6,consumed:62e4,remaining:38e4}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private CA hierarchies",consumed:9,total:10},entitlements:[{name:"Private CA hierarchies",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Issued certificates",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500},{name:"Sub-CAs",purchased:25,allocated:25,consumed:20,remaining:5}]},{id:"valimail",name:"Valimail",iconType:"envelope",contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Protected domains",consumed:18,total:25},entitlements:[{name:"Protected domains",purchased:25,allocated:25,consumed:18,remaining:7},{name:"Email senders monitored",purchased:500,allocated:500,consumed:410,remaining:90},{name:"DMARC reports / month",purchased:1e5,allocated:1e5,consumed:72e3,remaining:28e3}]},{id:"ai-agents",name:"AI Agents",iconType:"sparkle",contractId:"CTR-2024-AIA-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"AI Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"Agent executions / month",consumed:132e3,total:1e5},entitlements:[{name:"Agent executions / month",purchased:1e5,allocated:1e5,consumed:132e3,remaining:-32e3},{name:"Active agents",purchased:10,allocated:10,consumed:8,remaining:2},{name:"Workflow integrations",purchased:15,allocated:15,consumed:11,remaining:4}]},{id:"quantum-central",name:"Quantum Central",iconType:"atom",contractId:"CTR-2024-QC-00005",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]}],Tw=[{instanceId:"certcentral-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4}]},{instanceId:"certcentral-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Marketing sandbox",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}],Lw=["over-entitlement","approaching-limit","no-data","healthy"];function Iw(e){return Lw.find(t=>e.includes(t))||"healthy"}function Rw(e){const{id:t,name:n,iconType:r,...o}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:o.renewalDate,status:o.status,primaryEntitlement:o.primaryEntitlement,entitlements:o.entitlements,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...o}]}}function Jl(e){const t=Tw.filter(o=>e.includes(o.instanceId)),n=[...new Set(t.map(o=>o.subscriptionType))],r=[...new Set(t.map(o=>o.renewalDate))];return{id:"certcentral",name:"CertCentral",iconType:"shield",subscriptionTypes:n,renewalDate:r.length===1?r[0]:"Varies by instance",status:Iw(t.map(o=>o.status)),primaryEntitlement:t[0].primaryEntitlement,entitlements:t[0].entitlements,instances:t}}const Xl=Pw.map(Rw);function Ah(e){return e==="enterprise"?[...Xl,Jl(["certcentral-enterprise"])]:e==="ecommerce"?[...Xl,Jl(["certcentral-ecommerce"])]:[...Xl,Jl(["certcentral-enterprise","certcentral-ecommerce"])]}function zw(e){const t=e.length,n=[...new Set(e.map(a=>a.renewalDate))],r=e.length?e[0].renewalDate:"—",o=e.filter(a=>a.status==="approaching-limit").length,i=e.filter(a=>a.status==="over-entitlement").length,s=o+i;return{active:t,earliestRenewal:r,renewalDatesCount:n.length,approaching:o,over:i,needsAttention:s}}function Nw(e){const t=new Set;return e.forEach(n=>n.subscriptionTypes.forEach(r=>t.add(r))),t.has("enterprise")&&t.has("ecommerce")?{label:"Enterprise + E-commerce",sub:"Mixed billing across subscriptions"}:t.has("ecommerce")?{label:"E-commerce subscription",sub:"Self-service billing"}:{label:"Enterprise contract",sub:"Managed by your account team"}}const Fh=f.a`
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
`,Dw=f(Fh)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function bo({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${On.name})`}),o=`mailto:${On.email}?${r.toString()}`,i=e==="outline"?Dw:Fh;return l.jsx(i,{href:o,...n,children:"Contact account manager"})}const _w=f.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  margin-bottom: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF4FC;
  border: 1px solid #C9E3F7;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,Ow=f.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.blue300};
  padding-top: 1px;
`,Mw=f.p`
  flex: 1;
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral800};
`,Aw=f.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    align-self: flex-start;
  }
`,Fw=f(en)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
`,ud={enterprise:"Enterprise billing is managed through your DigiCert account representative. You can view subscriptions, entitlements, usage, and renewal information here. To request changes or additional capacity, contact your account manager.",ecommerce:"Most of your subscriptions are managed under an Enterprise Contract through your account team. CertCentral is billed separately as a self-service E-commerce subscription — manage its plan, payment details, and receipts here.",mixed:"This environment includes both Enterprise Contract and E-commerce Subscription billing. Enterprise subscriptions are managed by your account team, while E-commerce subscriptions can be managed here, including payment details and receipts."};function Bw({scenario:e}){return l.jsxs(_w,{role:"note",children:[l.jsx(Ow,{children:l.jsx(fo,{size:20,color:"currentColor"})}),l.jsx(Mw,{children:ud[e]??ud.mixed}),l.jsx(Aw,{children:e==="ecommerce"?l.jsx(Fw,{to:"/settings/billing/payment-details",children:"Manage payment details"}):l.jsx(bo,{})})]})}const Ww=f.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,Uw=f.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function Vw({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return l.jsx(Ww,{role:"presentation",children:l.jsx(Uw,{$pct:n})})}const Bh=f(en)`
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
`,Wh=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Uh=f.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`,Vh=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Hh=f.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Qh=f.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kh=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Gh=f.span`
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  background: rgba(39, 168, 114, 0.10);
  color: #1F8F60;
`,Hw=f.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,Qw=f.button`
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
`,Kw=f.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Gw=f.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 7px;
`,Yw=f.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,cd=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  font-weight: 500;
`;f.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;f.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`;f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;const Yh=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
`,Jh=f.p`
  margin: 0;
  font-size: 12px;
  font-style: italic;
  color: ${({theme:e})=>e.colors.neutral500};
`,Xh=f.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Zh=f.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function Jw(e){const t=e.subscriptionTypes[0];return pr[t].label}function sa({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return l.jsx(Kw,{children:n.map(r=>l.jsxs("div",{children:[l.jsxs(Gw,{children:[l.jsx(Yw,{children:r.name}),l.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),l.jsx(Vw,{consumed:r.consumed,total:r.allocated}),r.remaining<0?l.jsxs(cd,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):l.jsxs(cd,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function Xw({subscription:e}){const[t,n]=b.useState(e.instances[0].instanceId),r=e.instances.find(a=>a.instanceId===t)||e.instances[0],o=r.subscriptionType==="enterprise",i=r.entitlements.slice(0,3),s=r.entitlements.length-i.length;return l.jsxs(Bh,{to:`/settings/billing/${e.id}`,children:[l.jsxs(Wh,{children:[l.jsxs(Uh,{children:[l.jsx(Vh,{children:rr(e.iconType,20,"currentColor")}),l.jsxs(Hh,{children:[l.jsx(Qh,{children:e.name}),l.jsx(Kh,{children:e.subscriptionTypes.map(a=>pr[a].label).join(" · ")})]})]}),l.jsxs(Gh,{children:["Renews ",e.renewalDate]})]}),l.jsx(Hw,{onClick:a=>a.preventDefault(),children:e.instances.map(a=>l.jsx(Qw,{type:"button",$active:a.instanceId===t,onClick:u=>{u.preventDefault(),u.stopPropagation(),n(a.instanceId)},children:a.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},a.instanceId))}),o?l.jsxs(l.Fragment,{children:[i.length>0?l.jsx(sa,{entitlements:r.entitlements,maxVisible:3}):l.jsx(Zh,{children:"Usage data not available yet."}),l.jsxs(Yh,{children:[l.jsx(Jh,{children:"Managed by your Account Manager"}),s>0&&l.jsxs(Xh,{children:["+",s," more"]})]})]}):l.jsx(sa,{entitlements:r.entitlements,maxVisible:3})]})}function Zw({subscription:e}){if(e.instances.length>1)return l.jsx(Xw,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:o,entitlements:i}=e,s=e.subscriptionTypes.includes("enterprise"),a=i.slice(0,3),u=i.length-a.length,c=s;return l.jsxs(Bh,{to:`/settings/billing/${t}`,children:[l.jsxs(Wh,{children:[l.jsxs(Uh,{children:[l.jsx(Vh,{children:rr(r,20,"currentColor")}),l.jsxs(Hh,{children:[l.jsx(Qh,{children:n}),l.jsx(Kh,{children:Jw(e)})]})]}),l.jsxs(Gh,{children:["Renews ",o]})]}),a.length>0?l.jsx(sa,{entitlements:i,maxVisible:3}):l.jsx(Zh,{children:"Usage data is not available for this product yet."}),c&&l.jsxs(Yh,{children:[l.jsx(Jh,{children:"Managed by your Account Manager"}),u>0&&l.jsxs(Xh,{children:["+",u," more"]})]})]})}const qw=f.main`
  padding: 32px;
  max-width: 1280px;
`,e2=f.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,t2=f.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,n2=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`,r2=f.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,o2=f.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,i2=f.button`
  padding: 6px 12px;
  border: none;
  border-left: 1px solid ${({theme:e})=>e.colors.neutral300};
  background: ${({theme:e,$active:t})=>t?e.colors.blue300:e.colors.white};
  color: ${({theme:e,$active:t})=>t?e.colors.white:e.colors.neutral800};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:first-child { border-left: none; }

  &:hover {
    background: ${({theme:e,$active:t})=>t?e.colors.blue500:e.colors.neutral50};
  }
`,l2=[{id:"mixed",label:"Enterprise + E-commerce"},{id:"enterprise",label:"Enterprise only"},{id:"ecommerce",label:"E-commerce only"}],s2=f.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Vo=f.div`
  padding: 18px 20px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Ho=f.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Qo=f.p`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ko=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,a2=f.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,u2=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;function c2({scenario:e,onScenarioChange:t}){b.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]);const n=Ah(e),r=zw(n),o=Nw(n);return l.jsxs(qw,{children:[l.jsx(e2,{children:"My subscriptions"}),l.jsx(t2,{children:"View your active product subscriptions, entitlement usage, and renewal information."}),l.jsx(Bw,{scenario:e}),l.jsx(n2,{children:l.jsxs(r2,{children:["Scenario:",l.jsx(o2,{children:l2.map(i=>l.jsx(i2,{type:"button",$active:e===i.id,onClick:()=>t(i.id),children:i.label},i.id))})]})}),l.jsxs(s2,{children:[l.jsxs(Vo,{children:[l.jsx(Ho,{children:"Active subscriptions"}),l.jsxs(Qo,{children:[r.active," products"]}),l.jsx(Ko,{children:"Across your account"})]}),l.jsxs(Vo,{children:[l.jsx(Ho,{children:"Next renewal"}),l.jsx(Qo,{children:r.earliestRenewal}),l.jsx(Ko,{children:r.renewalDatesCount>1?"Renewal dates vary by product":"All products renew on this date"})]}),l.jsxs(Vo,{children:[l.jsx(Ho,{children:"Usage status"}),l.jsx(Qo,{children:r.needsAttention>0?`${r.needsAttention} need attention`:"All healthy"}),l.jsxs(Ko,{children:[r.approaching," approaching limit · ",r.over," over entitlement"]})]}),l.jsxs(Vo,{children:[l.jsx(Ho,{children:"Billing type"}),l.jsx(Qo,{children:o.label}),l.jsx(Ko,{children:o.sub})]})]}),l.jsx(a2,{children:"Product subscriptions"}),l.jsx(u2,{children:n.map(i=>l.jsx(Zw,{subscription:i},i.id))})]})}const Ui={enterprise:{bg:"#EAF1FB",fg:"#0F4C8A"},ecommerce:{bg:"#EAF8F1",fg:"#1F8F60"}},qh=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  font-family: inherit;
`,d2=f.span`
  ${qh}
  background: ${({$type:e})=>Ui[e].bg};
  color: ${({$type:e})=>Ui[e].fg};
`,f2=f.button`
  ${qh}
  border: none;
  cursor: pointer;
  background: ${({$type:e})=>Ui[e].bg};
  color: ${({$type:e})=>Ui[e].fg};
  transition: filter 0.15s ease;

  &:hover { filter: brightness(0.96); }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`;function dd({type:e,onClick:t,showInfoIcon:n=!1}){const r=pr[e];return t?l.jsxs(f2,{type:"button",$type:e,onClick:t,"aria-haspopup":"dialog",children:[r.label,n&&l.jsx(fo,{size:13,color:"currentColor"})]}):l.jsx(d2,{$type:e,children:r.label})}const p2=f.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`,h2=f.div`
  width: 100%;
  max-width: 560px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
`,g2=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,m2=f.h2`
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,x2=f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,y2=f.button`
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
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.neutral100}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,v2=f.div`
  display: flex;
  gap: 4px;
  padding: 12px 24px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,w2=f.button`
  padding: 8px 4px;
  margin-bottom: -1px;
  border: none;
  border-bottom: 2px solid ${({theme:e,$active:t})=>t?e.colors.blue300:"transparent"};
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e,$active:t})=>t?e.colors.blue300:e.colors.neutral700};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover { color: ${({theme:e})=>e.colors.blue300}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,e0=f.div`
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,t0=f.p`
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral800};
`,n0=f.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 24px;
  margin: 0;
`,zt=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Nt=f.dt`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Dt=f.dd`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,r0=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,fd=f(en)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.neutral800};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.blue300};
    color: ${({theme:e})=>e.colors.blue300};
    background: ${({theme:e})=>e.colors.neutral50};
  }
`;function k2({instance:e}){return l.jsxs(e0,{children:[l.jsx(t0,{children:pr.enterprise.description}),l.jsxs(n0,{children:[l.jsxs(zt,{children:[l.jsx(Nt,{children:"Contract ID"}),l.jsx(Dt,{children:e.contractId})]}),l.jsxs(zt,{children:[l.jsx(Nt,{children:"Contract term"}),l.jsx(Dt,{children:e.contractTerm})]}),l.jsxs(zt,{children:[l.jsx(Nt,{children:"Renewal date"}),l.jsx(Dt,{children:e.renewalDate})]}),l.jsxs(zt,{children:[l.jsx(Nt,{children:"Contract owner"}),l.jsx(Dt,{children:e.contractOwner})]})]}),l.jsx(r0,{children:l.jsx(bo,{variant:"outline",subject:`Billing question about ${e.instanceLabel} (${e.contractId})`})})]})}function b2({instance:e,onClose:t}){return l.jsxs(e0,{children:[l.jsx(t0,{children:pr.ecommerce.description}),l.jsxs(n0,{children:[l.jsxs(zt,{children:[l.jsx(Nt,{children:"Plan"}),l.jsx(Dt,{children:e.billing.plan})]}),l.jsxs(zt,{children:[l.jsx(Nt,{children:"Price"}),l.jsx(Dt,{children:e.billing.price})]}),l.jsxs(zt,{children:[l.jsx(Nt,{children:"Next charge date"}),l.jsx(Dt,{children:e.billing.nextChargeDate})]}),l.jsxs(zt,{children:[l.jsx(Nt,{children:"Payment method"}),l.jsxs(Dt,{children:[e.paymentMethod.type," •••• ",e.paymentMethod.last4]})]})]}),l.jsxs(r0,{children:[l.jsxs(fd,{to:"/settings/billing/payment-details",onClick:t,children:[l.jsx(Dh,{size:16,color:"currentColor"}),"Manage payment details"]}),l.jsxs(fd,{to:"/settings/billing/receipts",onClick:t,children:[l.jsx(Nh,{size:16,color:"currentColor"}),"View receipts"]})]})]})}function j2({open:e,onClose:t,instances:n=[],initialInstanceId:r}){var u;const o=b.useRef(null),[i,s]=b.useState(r||((u=n[0])==null?void 0:u.instanceId));if(b.useEffect(()=>{var c;e&&s(r||((c=n[0])==null?void 0:c.instanceId))},[e,r,n]),b.useEffect(()=>{var p;if(!e)return;(p=o.current)==null||p.focus();const c=h=>{h.key==="Escape"&&t()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[e,t]),!e)return null;const a=n.find(c=>c.instanceId===i)||n[0];return a?nu.createPortal(l.jsx(p2,{onClick:t,"aria-hidden":"false",children:l.jsxs(h2,{role:"dialog","aria-modal":"true","aria-labelledby":"billing-type-heading",onClick:c=>c.stopPropagation(),children:[l.jsxs(g2,{children:[l.jsxs("div",{children:[l.jsx(m2,{id:"billing-type-heading",children:"Billing type"}),l.jsx(x2,{children:n.length>1?"This environment includes both Enterprise and E-commerce CertCentral subscriptions.":"How this subscription is billed and managed."})]}),l.jsx(y2,{ref:o,onClick:t,"aria-label":"Close billing type details",children:l.jsx(Wi,{size:16,color:"currentColor"})})]}),n.length>1&&l.jsx(v2,{role:"tablist","aria-label":"Billing type by instance",children:n.map(c=>l.jsxs(w2,{role:"tab",type:"button",$active:c.instanceId===i,"aria-selected":c.instanceId===i,onClick:()=>s(c.instanceId),children:[c.instanceLabel,l.jsx(dd,{type:c.subscriptionType})]},c.instanceId))}),n.length===1&&l.jsx("div",{style:{padding:"12px 24px 0"},children:l.jsx(dd,{type:a.subscriptionType})}),a.subscriptionType==="enterprise"?l.jsx(k2,{instance:a}):l.jsx(b2,{instance:a,onClose:t})]})}),document.body):null}const o0={enterprise:"#0174C3",ecommerce:"#1F8F60"},pd=f.main`
  padding: 32px;
`,hd=f(en)`
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
`,S2=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,$2=f.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,C2=f.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid transparent;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,E2=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,P2=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,T2=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,L2=f.button`
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
`,I2=f.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,R2=f.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,z2=f.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,N2=f.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,D2=f.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,_2=f.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`,O2=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`;f.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;const M2=f.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`;f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`;f.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: ${({$type:e})=>o0[e]};
  cursor: pointer;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`;const A2=f.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,F2=f.button`
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
`;f.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({$type:e})=>o0[e]};
`;const jo=f.section`
  margin-bottom: 32px;
`,du=f.h2`
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`;f.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px 32px;
  margin: 0;
  padding: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;f.dt`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;f.dd`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`;const B2=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,i0=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,_t=f.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Ot=f.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 14px 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,l0=f.span`
  font-weight: 500;
  color: ${({$negative:e,theme:t})=>e?t.colors.error:t.colors.neutral900};
`,s0=f.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`,W2=f.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
`,U2=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.neutral200};
  color: ${({theme:e})=>e.colors.neutral700};
  flex-shrink: 0;
`,V2=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,H2=f.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,gd=f.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Q2=f.div`
  margin-top: 12px;
`,md=f(en)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.neutral800};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.blue300};
    color: ${({theme:e})=>e.colors.blue300};
    background: ${({theme:e})=>e.colors.neutral50};
  }
`,a0=f.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,po=f.div`
  padding: 18px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({$highlight:e,theme:t})=>e?"#27A872":t.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ho=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,go=f.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`,or=f.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
  display: flex;
  align-items: baseline;
  gap: 5px;
`,u0=f.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral600};
`,Vi=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,K2=f.button`
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
`,G2=f.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(39,168,114,0.10);
  color: #1F8F60;

`;f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  overflow: hidden;
`;f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px 18px;
`;f.p`
  margin: 0 0 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`;f.p`
  margin: 0 0 5px;
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
  display: flex;
  align-items: baseline;
  gap: 8px;
`;f.span`
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral600};
`;f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;f.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid transparent;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
`;f.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.neutral100};
`;f.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  padding: 16px 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px 0;
  }
`;f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;f.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`;f.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`;const Y2=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;function J2({entitlements:e}){return e.length===0?l.jsx(s0,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):l.jsx(B2,{children:l.jsxs(i0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(_t,{style:{width:"40%"},children:"Entitlement"}),l.jsx(_t,{$align:"right",children:"Purchased"}),l.jsx(_t,{$align:"right",children:"Used"}),l.jsx(_t,{$align:"right",children:"Available"})]})}),l.jsx("tbody",{children:e.map(t=>l.jsxs("tr",{children:[l.jsx(Ot,{children:t.name}),l.jsx(Ot,{$align:"right",children:t.purchased.toLocaleString()}),l.jsx(Ot,{$align:"right",children:t.consumed.toLocaleString()}),l.jsx(Ot,{$align:"right",children:l.jsx(l0,{$negative:t.remaining<0,children:t.remaining<0?`Over by ${Math.abs(t.remaining).toLocaleString()}`:t.remaining.toLocaleString()})})]},t.name))})]})})}function X2(e){if(!e.length)return null;const t=e.reduce((r,o)=>r+o.allocated,0),n=e.reduce((r,o)=>r+o.consumed,0);return t===0?null:Math.round(n/t*100)}function c0({instance:e,onOpenBillingModal:t}){const n=pr[e.subscriptionType].label;return l.jsxs(po,{children:[l.jsxs(ho,{children:[l.jsx(go,{children:"Status"}),l.jsx(G2,{children:"Active"})]}),l.jsxs(or,{children:[n,l.jsx(K2,{type:"button",onClick:t,"aria-haspopup":"dialog",children:l.jsx(fo,{size:14,color:"currentColor"})})]})]})}function d0({entitlements:e}){const t=X2(e);return l.jsxs(po,{children:[l.jsxs(ho,{children:[l.jsx(go,{children:"Usage"}),l.jsx(Sy,{size:15,color:"#9CA3AF"})]}),t!==null?l.jsxs(or,{children:[t,"%",l.jsx(u0,{children:"consumed"})]}):l.jsx(or,{children:"—"}),l.jsx(Vi,{children:e.length?`${e.length} entitlement types`:"No usage data available"})]})}function Z2({instance:e,onOpenBillingModal:t}){return l.jsx(jo,{children:l.jsxs(a0,{children:[l.jsx(c0,{instance:e,onOpenBillingModal:t}),l.jsxs(po,{children:[l.jsxs(ho,{children:[l.jsx(go,{children:"Renewal date"}),l.jsx(_h,{size:15,color:"#9CA3AF"})]}),l.jsx(or,{children:e.renewalDate}),l.jsx(Vi,{children:e.contractTerm})]}),l.jsx(d0,{entitlements:e.entitlements})]})})}function q2({instance:e}){return l.jsxs(jo,{children:[l.jsx(du,{children:"Your DigiCert account team"}),l.jsxs(W2,{children:[l.jsx(U2,{children:l.jsx(wy,{size:20,color:"currentColor"})}),l.jsxs(V2,{children:[l.jsx(H2,{children:On.name}),l.jsx(gd,{children:On.title}),l.jsxs(gd,{children:[On.email," · ",On.phone]}),l.jsx(Q2,{children:l.jsx(bo,{variant:"outline",subject:`Question about ${e.instanceLabel} (${e.contractId})`})})]})]})]})}function ek({entitlements:e}){return l.jsxs(jo,{children:[l.jsx(du,{children:"Entitlements and usage"}),l.jsx(J2,{entitlements:e})]})}function tk({instance:e,onOpenBillingModal:t}){const[n,r]=e.billing.price.split(" / ");return l.jsxs(jo,{children:[l.jsxs(a0,{children:[l.jsx(c0,{instance:e,onOpenBillingModal:t}),l.jsxs(po,{children:[l.jsxs(ho,{children:[l.jsx(go,{children:"Monthly cost"}),l.jsx(Cy,{size:15,color:"#9CA3AF"})]}),l.jsxs(or,{$blue:!0,children:[n,l.jsxs(u0,{children:["/ ",r]})]}),l.jsx(Vi,{children:e.billing.plan})]}),l.jsxs(po,{children:[l.jsxs(ho,{children:[l.jsx(go,{children:"Renewal date"}),l.jsx(_h,{size:15,color:"#9CA3AF"})]}),l.jsx(or,{children:e.billing.nextChargeDate}),l.jsx(Vi,{children:"Auto-renew enabled"})]}),l.jsx(d0,{entitlements:e.entitlements})]}),l.jsxs(Y2,{children:[l.jsxs(C2,{type:"button",children:[l.jsx($y,{size:16,color:"currentColor"}),"Buy certificates"]}),l.jsx(md,{to:"/settings/billing/payment-details",children:"Manage payment details"}),l.jsx(md,{to:"/settings/billing/receipts",children:"View receipts"})]})]})}function nk({category:e}){const[t,n]=b.useState(e.products.length>0);return l.jsxs(E2,{children:[l.jsxs(P2,{onClick:()=>n(r=>!r),children:[l.jsxs(T2,{children:[l.jsx(L2,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(o=>!o)},children:t?l.jsx(zh,{size:14,color:"currentColor"}):l.jsx(Wr,{size:14,color:"currentColor"})}),l.jsx(I2,{children:e.name})]}),l.jsx(R2,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&l.jsx(z2,{children:e.products.length===0?l.jsx(_2,{children:"No products purchased yet."}):l.jsxs(i0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(_t,{style:{width:"40%"},children:"Product"}),l.jsx(_t,{$align:"right",children:"Purchased"}),l.jsx(_t,{$align:"right",children:"Used"}),l.jsx(_t,{$align:"right",children:"Available"})]})}),l.jsx("tbody",{children:e.products.map((r,o)=>l.jsxs("tr",{children:[l.jsxs(Ot,{children:[l.jsx(N2,{children:r.name}),l.jsx(D2,{children:r.type})]}),l.jsx(Ot,{$align:"right",children:r.purchased}),l.jsx(Ot,{$align:"right",children:r.used}),l.jsx(Ot,{$align:"right",children:l.jsx(l0,{$negative:r.available===0,children:r.available})})]},o))})]})})]})}function rk({categories:e}){return l.jsxs(jo,{children:[l.jsx(du,{children:"Products"}),e.map(t=>l.jsx(nk,{category:t},t.id))]})}function ok({scenario:e}){const{subscriptionId:t}=mx(),[n,r]=b.useState(null),[o,i]=b.useState(!1),s=Ah(e).find(c=>c.id===t);if(b.useEffect(()=>{document.title=s?`${s.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[s==null?void 0:s.id,s==null?void 0:s.name]),b.useEffect(()=>{var c;r(((c=s==null?void 0:s.instances[0])==null?void 0:c.instanceId)??null)},[t,e]),!s)return l.jsxs(pd,{children:[l.jsxs(hd,{to:"/settings/billing",children:[l.jsx(Jt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(s0,{children:"This subscription is not available in the current scenario."})]});const a=s.instances.find(c=>c.instanceId===n)||s.instances[0],u=()=>i(!0);return l.jsxs(pd,{children:[l.jsxs(hd,{to:"/settings/billing",children:[l.jsx(Jt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(S2,{children:l.jsxs($2,{children:[l.jsx(O2,{children:rr(s.iconType,24,"currentColor")}),l.jsx(M2,{children:s.name})]})}),s.instances.length>1&&l.jsx(A2,{role:"tablist","aria-label":"CertCentral instances",children:s.instances.map(c=>l.jsx(F2,{role:"tab",type:"button",$active:c.instanceId===a.instanceId,"aria-selected":c.instanceId===a.instanceId,onClick:()=>r(c.instanceId),children:c.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},c.instanceId))}),a.subscriptionType==="enterprise"?l.jsxs(l.Fragment,{children:[l.jsx(Z2,{instance:a,onOpenBillingModal:u}),l.jsx(ek,{entitlements:a.entitlements}),l.jsx(q2,{instance:a})]}):l.jsxs(l.Fragment,{children:[l.jsx(tk,{instance:a,onOpenBillingModal:u}),l.jsx(rk,{categories:a.productCategories})]}),l.jsx(j2,{open:o,onClose:()=>i(!1),instances:s.instances,initialInstanceId:a.instanceId})]})}const ik=f.div`
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
`,lk=f.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,sk=f.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,ak=f.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function f0({icon:e,title:t,children:n,action:r}){return l.jsxs(ik,{children:[l.jsx(lk,{children:e}),t&&l.jsx(sk,{children:t}),l.jsx(ak,{children:n}),r]})}const xd=f.main`
  padding: 32px;
`,yd=f(en)`
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
`,vd=f.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,wd=f.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,uk=f.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,Zl=f.div`
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 16px 20px;
  border: 1px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral200};
  border-left: 3px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,ql=f.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;
  align-items: center;
  gap: 6px;
`,es=f.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
`,ck=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,dk=f.div`
  margin-left: auto;
`,fu=f.button`
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
`,fk=f(fu)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,pk=f(fu)``,hk=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,gk=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,bt=f.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 11px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  white-space: nowrap;
  user-select: none;
`,jt=f.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,mk=f.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,ts={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},xk=f.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=ts[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=ts[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=ts[e])==null?void 0:t.color)||"#374151"}};
`,yk=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,vk=f.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,wk=f.button`
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
`,kk=f.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral50};
`,bk=["All","Invoices","Receipts","Refunds"],kd=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function jk({scenario:e}){const[t,n]=b.useState("All"),[r,o]=b.useState(!1);if(b.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return l.jsxs(xd,{children:[l.jsxs(yd,{to:"/settings/billing",children:[l.jsx(Jt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(vd,{children:"Receipts and invoices"}),l.jsx(wd,{children:"Download receipts, invoices, and other billing documents for your account."}),l.jsx(f0,{icon:l.jsx(Nh,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:l.jsx(bo,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const i=4,s="$2,520.00",a="Nov 20, 2025",u=t==="All"?kd:kd.filter(c=>t==="Invoices"?c.type==="Invoice":t==="Receipts"?c.type==="Receipt":t==="Refunds"?c.type==="Refund":!0);return l.jsxs(xd,{children:[l.jsxs(yd,{to:"/settings/billing",children:[l.jsx(Jt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(vd,{children:"Receipts and invoices"}),l.jsx(wd,{children:"Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage."}),l.jsxs(uk,{children:[l.jsxs(Zl,{$alert:!0,children:[l.jsxs(ql,{children:[l.jsx(Qc,{size:14,color:"#DC2626"}),"Invoices overdue"]}),l.jsx(es,{children:i})]}),l.jsxs(Zl,{$alert:!0,children:[l.jsxs(ql,{children:[l.jsx(Qc,{size:14,color:"#DC2626"}),"Total balance overdue"]}),l.jsx(es,{$blue:!0,children:s})]}),l.jsxs(Zl,{children:[l.jsx(ql,{children:"Next invoice due"}),l.jsx(es,{$blue:!0,children:a})]})]}),l.jsxs(ck,{children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(fu,{type:"button",onClick:()=>o(c=>!c),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,l.jsx(Wr,{size:13,color:"currentColor"})]}),r&&l.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:bk.map(c=>l.jsx("button",{type:"button",onClick:()=>{n(c),o(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:c===t?"#EAF1FB":"white",color:c===t?"#0174C3":"#1A1F27",fontWeight:c===t?500:400},children:c},c))})]}),l.jsxs(fk,{type:"button",children:[l.jsx(jy,{size:14,color:"currentColor"}),"Filter",l.jsx(Wr,{size:13,color:"currentColor"})]}),l.jsx(dk,{children:l.jsxs(pk,{type:"button",children:["Download CSV",l.jsx(Wr,{size:13,color:"currentColor"})]})})]}),l.jsxs(hk,{children:[l.jsxs(gk,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(bt,{style:{width:"140px"},children:"Invoice"}),l.jsx(bt,{children:"Type"}),l.jsx(bt,{children:"Issued on"}),l.jsx(bt,{children:"Status"}),l.jsx(bt,{$align:"right",children:"Amount"}),l.jsx(bt,{children:"Due on"}),l.jsx(bt,{children:"Ordered by"}),l.jsx(bt,{})]})}),l.jsx("tbody",{children:u.map((c,p)=>l.jsxs("tr",{children:[l.jsx(jt,{children:l.jsx(mk,{href:"#",children:c.id})}),l.jsx(jt,{children:c.type}),l.jsx(jt,{children:c.issuedOn}),l.jsx(jt,{children:l.jsx(xk,{$status:c.status,children:c.status})}),l.jsx(jt,{$align:"right",children:c.amount}),l.jsx(jt,{children:c.dueOn}),l.jsx(jt,{children:c.orderedBy}),l.jsx(jt,{children:l.jsxs(yk,{children:[(c.status==="Overdue"||c.status==="Upcoming")&&l.jsx(vk,{type:"button",children:"Pay"}),l.jsx(wk,{type:"button","aria-label":"Download",children:l.jsx(by,{size:15,color:"currentColor"})})]})})]},`${c.id}-${p}`))})]}),l.jsxs(kk,{children:["1 to ",u.length," of 8,618"]})]})]})}const bd=f.main`
  padding: 32px;
`,jd=f(en)`
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
`,Sk=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,$k=f.div``,Sd=f.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,$d=f.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,Ck=f.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  white-space: nowrap;
  padding-top: 6px;

  &:hover { text-decoration: underline; }
`,Cd=f.div`
  margin-bottom: 32px;
`,Ed=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,Pd=f.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Td=f.button`
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
`,Ek=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Pk=f.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Tk=f.div`
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
`,Lk=f.div``,Ik=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,Rk=f.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,zk=f.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,Nk=f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,p0=f.button`
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
`,Dk=f.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,_k=f.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ok=f(p0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Go=f.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,Yo=f.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Jo=f.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,Mk=f.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`;function Ak({scenario:e}){return b.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?l.jsxs(bd,{children:[l.jsxs(jd,{to:"/settings/billing",children:[l.jsx(Jt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(Sd,{children:"Payment details"}),l.jsx($d,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),l.jsx(f0,{icon:l.jsx(Dh,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:l.jsx(bo,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):l.jsxs(bd,{children:[l.jsxs(jd,{to:"/settings/billing",children:[l.jsx(Jt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsxs(Sk,{children:[l.jsxs($k,{children:[l.jsx(Sd,{children:"Payment details"}),l.jsx($d,{children:"Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method."})]}),l.jsxs(Ck,{href:"#",children:[l.jsx(fo,{size:14,color:"currentColor"}),"Need help?"]})]}),l.jsxs(Cd,{children:[l.jsxs(Ed,{children:[l.jsx(Pd,{children:"Payment methods"}),l.jsxs(Td,{type:"button",children:[l.jsx(Vc,{size:14,color:"currentColor"}),"Add payment method"]})]}),l.jsxs(Ek,{children:[l.jsxs(Pk,{children:[l.jsx(Tk,{children:"VISA"}),l.jsxs(Lk,{children:[l.jsxs(Ik,{children:[l.jsx(Rk,{children:"Visa •••• 8350"}),l.jsx(zk,{children:"Default"})]}),l.jsx(Nk,{children:"Expires 02/28"})]})]}),l.jsx(p0,{type:"button","aria-label":"Payment method options",children:l.jsx(Hc,{size:16,color:"currentColor"})})]})]}),l.jsxs(Cd,{children:[l.jsxs(Ed,{children:[l.jsx(Pd,{children:"Billing contacts"}),l.jsxs(Td,{type:"button",children:[l.jsx(Vc,{size:14,color:"currentColor"}),"Add billing contact"]})]}),l.jsxs(Dk,{children:[l.jsx(Ok,{type:"button","aria-label":"Contact options",children:l.jsx(Hc,{size:16,color:"currentColor"})}),l.jsx(_k,{children:"John Doe"}),l.jsxs(Go,{children:[l.jsx(Yo,{children:"Address"}),l.jsxs(Jo,{children:["123 Main Street",l.jsx("br",{}),"Suite 100",l.jsx("br",{}),"San Francisco, CA 94105",l.jsx("br",{}),"United States"]})]}),l.jsxs(Go,{children:[l.jsx(Yo,{children:"Email address"}),l.jsx(Jo,{children:"john.doe@winthecustomer.com"})]}),l.jsxs(Go,{children:[l.jsx(Yo,{children:"Phone number"}),l.jsx(Jo,{children:"650 123 4567"})]}),l.jsxs(Go,{children:[l.jsxs(Mk,{children:[l.jsx(Yo,{style:{margin:0},children:"VAT ID"}),l.jsx(fo,{size:14,color:"#0174C3"})]}),l.jsx(Jo,{children:"23503820"})]})]})]})]})}const Fk=oy`
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
`,Bk=f.div`
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
`;function Ld(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function Wk(){const[e,t]=b.useState(()=>typeof window<"u"?Ld():"desktop");return b.useEffect(()=>{const n=()=>t(Ld());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function Uk(){const[e,t]=b.useState("dashboard"),[n,r]=b.useState(!1),[o,i]=b.useState(!0),[s,a]=b.useState(null),[u,c]=b.useState("mixed"),p=b.useCallback(()=>r(g=>!g),[]),h=b.useCallback(()=>r(!1),[]),x=b.useCallback(()=>i(g=>!g),[]),w=b.useCallback(g=>{t(g),i(!0)},[]),y=b.useCallback(g=>{t(g),i(!0),r(!1)},[]),j=b.useCallback(g=>{a(d=>d===g?null:g)},[]),C=b.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:o,activeTopNav:s,billingScenario:u,toggleDrawer:p,closeDrawer:h,toggleSpoke:x,setBillingScenario:c,selectProduct:w,selectProductFromDrawer:y,openTopNav:j,closeTopNav:C}}function Vk(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:o,toggleDrawer:i,closeDrawer:s,toggleSpoke:a,setBillingScenario:u,selectProduct:c,selectProductFromDrawer:p,openTopNav:h,closeTopNav:x}=Uk(),w=Wk(),y=w==="mobile",j=b.useRef(null);b.useEffect(()=>{w!=="mobile"&&t&&s()},[w,t,s]),b.useEffect(()=>{const d=j.current;d&&(y&&t?(d.setAttribute("inert",""),d.setAttribute("aria-hidden","true")):(d.removeAttribute("inert"),d.removeAttribute("aria-hidden")))},[y,t]);const C=n?"276px":"56px",g=r==="ai-assist"?"400px":"0px";return l.jsxs(l.Fragment,{children:[l.jsx(Fk,{}),l.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),l.jsx(yv,{isDrawerOpen:t,onToggleDrawer:i,activeTopNav:r,onOpenTopNav:h,onCloseTopNav:x,onSelectProduct:c,cartCount:3}),l.jsx(Sv,{activeProductId:e,onSelectProduct:c}),l.jsx(Mv,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:a,billingScenario:o}),l.jsx(Hv,{open:t,activeProductId:e,onSelectProduct:p,onClose:s}),l.jsx(Bk,{ref:j,id:"main-content",$leftOffset:C,$rightOffset:g,children:l.jsxs(zx,{children:[l.jsx(Pr,{path:"/",element:l.jsx(Ix,{to:"/dashboard",replace:!0})}),Iy.filter(d=>d!=="/").map(d=>{let m=l.jsx(ad,{});return d==="/dashboard"?m=l.jsx($w,{}):d==="/settings/billing"?m=l.jsx(c2,{scenario:o,onScenarioChange:u}):d==="/settings/billing/receipts"?m=l.jsx(jk,{scenario:o}):d==="/settings/billing/payment-details"&&(m=l.jsx(Ak,{scenario:o})),l.jsx(Pr,{path:d,element:m},d)}),l.jsx(Pr,{path:"/settings/billing/:subscriptionId",element:l.jsx(ok,{scenario:o})}),l.jsx(Pr,{path:"*",element:l.jsx(ad,{})})]})})]})}Vp(document.getElementById("root")).render(l.jsx(b.StrictMode,{children:l.jsx(Bx,{children:l.jsx(q1,{theme:iy,children:l.jsx(Vk,{})})})}));
