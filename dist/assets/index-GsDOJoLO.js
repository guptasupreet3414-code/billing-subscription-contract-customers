function x0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function y0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dd={exports:{}},Bi={},Md={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),v0=Symbol.for("react.portal"),w0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),k0=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),$0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),hc=Symbol.iterator;function T0(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ad=Object.assign,Od={};function tr(e,t,n){this.props=e,this.context=t,this.refs=Od,this.updater=n||Nd}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _d(){}_d.prototype=tr.prototype;function aa(e,t,n){this.props=e,this.context=t,this.refs=Od,this.updater=n||Nd}var ca=aa.prototype=new _d;ca.constructor=aa;Ad(ca,tr.prototype);ca.isPureReactComponent=!0;var mc=Array.isArray,Fd=Object.prototype.hasOwnProperty,ua={current:null},Bd={key:!0,ref:!0,__self:!0,__source:!0};function Wd(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Fd.call(t,r)&&!Bd.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var a=Array(c),u=0;u<c;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)o[r]===void 0&&(o[r]=c[r]);return{$$typeof:ao,type:e,key:i,ref:s,props:o,_owner:ua.current}}function L0(e,t){return{$$typeof:ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===ao}function I0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gc=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?I0(""+e.key):t.toString(36)}function Ho(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ao:case v0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+gl(s,0):r,mc(o)?(n="",e!=null&&(n=e.replace(gc,"$&/")+"/"),Ho(o,t,n,"",function(u){return u})):o!=null&&(da(o)&&(o=L0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(gc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",mc(e))for(var c=0;c<e.length;c++){i=e[c];var a=r+gl(i,c);s+=Ho(i,t,n,a,o)}else if(a=T0(e),typeof a=="function")for(e=a.call(e),c=0;!(i=e.next()).done;)i=i.value,a=r+gl(i,c++),s+=Ho(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function go(e,t,n){if(e==null)return e;var r=[],o=0;return Ho(e,r,"","",function(i){return t.call(n,i,o++)}),r}function R0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Qo={transition:null},z0={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Qo,ReactCurrentOwner:ua};function Ud(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:go,forEach:function(e,t,n){go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return go(e,function(){t++}),t},toArray:function(e){return go(e,function(t){return t})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=tr;N.Fragment=w0;N.Profiler=k0;N.PureComponent=aa;N.StrictMode=b0;N.Suspense=$0;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;N.act=Ud;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ad({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ua.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)Fd.call(t,a)&&!Bd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&c!==void 0?c[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){c=Array(a);for(var u=0;u<a;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:ao,type:e.type,key:o,ref:i,props:r,_owner:s}};N.createContext=function(e){return e={$$typeof:C0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j0,_context:e},e.Consumer=e};N.createElement=Wd;N.createFactory=function(e){var t=Wd.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:S0,render:e}};N.isValidElement=da;N.lazy=function(e){return{$$typeof:P0,_payload:{_status:-1,_result:e},_init:R0}};N.memo=function(e,t){return{$$typeof:E0,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=Qo.transition;Qo.transition={};try{e()}finally{Qo.transition=t}};N.unstable_act=Ud;N.useCallback=function(e,t){return ke.current.useCallback(e,t)};N.useContext=function(e){return ke.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};N.useEffect=function(e,t){return ke.current.useEffect(e,t)};N.useId=function(){return ke.current.useId()};N.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ke.current.useMemo(e,t)};N.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};N.useRef=function(e){return ke.current.useRef(e)};N.useState=function(e){return ke.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return ke.current.useTransition()};N.version="18.3.1";Md.exports=N;var v=Md.exports;const xe=y0(v),D0=x0({__proto__:null,default:xe},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0=v,N0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,_0=M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F0={key:!0,ref:!0,__self:!0,__source:!0};function Vd(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)O0.call(t,r)&&!F0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:N0,type:e,key:i,ref:s,props:o,_owner:_0.current}}Bi.Fragment=A0;Bi.jsx=Vd;Bi.jsxs=Vd;Dd.exports=Bi;var l=Dd.exports,Hd={exports:{}},Me={},Qd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var D=T.length;T.push(z);e:for(;0<D;){var U=D-1>>>1,F=T[U];if(0<o(F,z))T[U]=z,T[D]=F,D=U;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],D=T.pop();if(D!==z){T[0]=D;e:for(var U=0,F=T.length,le=F>>>1;U<le;){var ee=2*(U+1)-1,re=T[ee],Le=ee+1,Ae=T[Le];if(0>o(re,D))Le<F&&0>o(Ae,re)?(T[U]=Ae,T[Le]=D,U=Le):(T[U]=re,T[ee]=D,U=ee);else if(Le<F&&0>o(Ae,D))T[U]=Ae,T[Le]=D,U=Le;else break e}}return z}function o(T,z){var D=T.sortIndex-z.sortIndex;return D!==0?D:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var a=[],u=[],f=1,m=null,g=3,b=!1,y=!1,C=!1,$=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(u)}}function j(T){if(C=!1,x(T),!y)if(n(a)!==null)y=!0,kt(w);else{var z=n(u);z!==null&&qt(j,z.startTime-T)}}function w(T,z){y=!1,C&&(C=!1,h(k),k=-1),b=!0;var D=g;try{for(x(z),m=n(a);m!==null&&(!(m.expirationTime>z)||T&&!A());){var U=m.callback;if(typeof U=="function"){m.callback=null,g=m.priorityLevel;var F=U(m.expirationTime<=z);z=e.unstable_now(),typeof F=="function"?m.callback=F:m===n(a)&&r(a),x(z)}else r(a);m=n(a)}if(m!==null)var le=!0;else{var ee=n(u);ee!==null&&qt(j,ee.startTime-z),le=!1}return le}finally{m=null,g=D,b=!1}}var E=!1,S=null,k=-1,R=5,L=-1;function A(){return!(e.unstable_now()-L<R)}function Z(){if(S!==null){var T=e.unstable_now();L=T;var z=!0;try{z=S(!0,T)}finally{z?_():(E=!1,S=null)}}else E=!1}var _;if(typeof p=="function")_=function(){p(Z)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Xt=Ce.port2;Ce.port1.onmessage=Z,_=function(){Xt.postMessage(null)}}else _=function(){$(Z,0)};function kt(T){S=T,E||(E=!0,_())}function qt(T,z){k=$(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,kt(w))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var D=g;g=z;try{return T()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=g;g=T;try{return z()}finally{g=D}},e.unstable_scheduleCallback=function(T,z,D){var U=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?U+D:U):D=U,T){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=D+F,T={id:f++,callback:z,priorityLevel:T,startTime:D,expirationTime:F,sortIndex:-1},D>U?(T.sortIndex=D,t(u,T),n(a)===null&&T===n(u)&&(C?(h(k),k=-1):C=!0,qt(j,D-U))):(T.sortIndex=F,t(a,T),y||b||(y=!0,kt(w))),T},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(T){var z=g;return function(){var D=g;g=z;try{return T.apply(this,arguments)}finally{g=D}}}})(Kd);Qd.exports=Kd;var B0=Qd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=v,De=B0;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,Fr={};function yn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Fr[e]=t,e=0;e<t.length;e++)Gd.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},yc={};function V0(e){return es.call(yc,e)?!0:es.call(xc,e)?!1:U0.test(e)?yc[e]=!0:(xc[e]=!0,!1)}function H0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q0(e,t,n,r){if(t===null||typeof t>"u"||H0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var pa=/[\-:]([a-z])/g;function fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pa,fa);he[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pa,fa);he[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pa,fa);he[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ha(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q0(t,n,o,r)&&(n=null),r||o===null?V0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),ma=Symbol.for("react.strict_mode"),ts=Symbol.for("react.profiler"),Yd=Symbol.for("react.provider"),Jd=Symbol.for("react.context"),ga=Symbol.for("react.forward_ref"),ns=Symbol.for("react.suspense"),rs=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Xd=Symbol.for("react.offscreen"),vc=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=vc&&e[vc]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,xl;function wr(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var yl=!1;function vl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,c=i.length-1;1<=s&&0<=c&&o[s]!==i[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==i[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==i[c]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=c);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wr(e):""}function K0(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=vl(e.type,!1),e;case 11:return e=vl(e.type.render,!1),e;case 1:return e=vl(e.type,!0),e;default:return""}}function os(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case Cn:return"Portal";case ts:return"Profiler";case ma:return"StrictMode";case ns:return"Suspense";case rs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jd:return(e.displayName||"Context")+".Consumer";case Yd:return(e._context.displayName||"Context")+".Provider";case ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:os(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return os(e(t))}catch{}}return null}function G0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return os(t);case 8:return t===ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=qd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=Y0(e))}function Zd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function is(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ep(e,t){t=t.checked,t!=null&&ha(e,"checked",t,!1)}function ls(e,t){ep(e,t);var n=Qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ss(e,t.type,n):t.hasOwnProperty("defaultValue")&&ss(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ss(e,t,n){(t!=="number"||ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var br=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function as(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(br(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function tp(e,t){var n=Qt(t.value),r=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function np(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?np(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,rp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){J0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function op(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function ip(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=op(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var X0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function us(e,t){if(t){if(X0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,An=null,On=null;function Cc(e){if(e=po(e)){if(typeof fs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Qi(t),fs(e.stateNode,e.type,t))}}function lp(e){An?On?On.push(e):On=[e]:An=e}function sp(){if(An){var e=An,t=On;if(On=An=null,Cc(e),t)for(e=0;e<t.length;e++)Cc(t[e])}}function ap(e,t){return e(t)}function cp(){}var wl=!1;function up(e,t,n){if(wl)return e(t,n);wl=!0;try{return ap(e,t,n)}finally{wl=!1,(An!==null||On!==null)&&(cp(),sp())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Qi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var hs=!1;if(mt)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){hs=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{hs=!1}function q0(e,t,n,r,o,i,s,c,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Tr=!1,ci=null,ui=!1,ms=null,Z0={onError:function(e){Tr=!0,ci=e}};function em(e,t,n,r,o,i,s,c,a){Tr=!1,ci=null,q0.apply(Z0,arguments)}function tm(e,t,n,r,o,i,s,c,a){if(em.apply(this,arguments),Tr){if(Tr){var u=ci;Tr=!1,ci=null}else throw Error(P(198));ui||(ui=!0,ms=u)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sc(e){if(vn(e)!==e)throw Error(P(188))}function nm(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Sc(o),e;if(i===r)return Sc(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function pp(e){return e=nm(e),e!==null?fp(e):null}function fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fp(e);if(t!==null)return t;e=e.sibling}return null}var hp=De.unstable_scheduleCallback,$c=De.unstable_cancelCallback,rm=De.unstable_shouldYield,om=De.unstable_requestPaint,ne=De.unstable_now,im=De.unstable_getCurrentPriorityLevel,va=De.unstable_ImmediatePriority,mp=De.unstable_UserBlockingPriority,di=De.unstable_NormalPriority,lm=De.unstable_LowPriority,gp=De.unstable_IdlePriority,Wi=null,it=null;function sm(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Wi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:um,am=Math.log,cm=Math.LN2;function um(e){return e>>>=0,e===0?32:31-(am(e)/cm|0)|0}var wo=64,bo=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~o;c!==0?r=kr(c):(i&=s,i!==0&&(r=kr(i)))}else s=n&~o,s!==0?r=kr(s):i!==0&&(r=kr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function dm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Je(i),c=1<<s,a=o[s];a===-1?(!(c&n)||c&r)&&(o[s]=dm(c,t)):a<=t&&(e.expiredLanes|=c),i&=~c}}function gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xp(){var e=wo;return wo<<=1,!(wo&4194240)&&(wo=64),e}function bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function fm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function yp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vp,ba,wp,bp,kp,xs=!1,ko=[],Nt=null,At=null,Ot=null,Ur=new Map,Vr=new Map,Lt=[],hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function pr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=po(t),t!==null&&ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function mm(e,t,n,r,o){switch(t){case"focusin":return Nt=pr(Nt,e,t,n,r,o),!0;case"dragenter":return At=pr(At,e,t,n,r,o),!0;case"mouseover":return Ot=pr(Ot,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ur.set(i,pr(Ur.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Vr.set(i,pr(Vr.get(i)||null,e,t,n,r,o)),!0}return!1}function jp(e){var t=on(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=dp(n),t!==null){e.blockedOn=t,kp(e.priority,function(){wp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=po(n),t!==null&&ba(t),e.blockedOn=n,!1;t.shift()}return!0}function Pc(e,t,n){Ko(e)&&n.delete(t)}function gm(){xs=!1,Nt!==null&&Ko(Nt)&&(Nt=null),At!==null&&Ko(At)&&(At=null),Ot!==null&&Ko(Ot)&&(Ot=null),Ur.forEach(Pc),Vr.forEach(Pc)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,xs||(xs=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,gm)))}function Hr(e){function t(o){return fr(o,e)}if(0<ko.length){fr(ko[0],e);for(var n=1;n<ko.length;n++){var r=ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&fr(Nt,e),At!==null&&fr(At,e),Ot!==null&&fr(Ot,e),Ur.forEach(t),Vr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)jp(n),n.blockedOn===null&&Lt.shift()}var _n=vt.ReactCurrentBatchConfig,fi=!0;function xm(e,t,n,r){var o=W,i=_n.transition;_n.transition=null;try{W=1,ka(e,t,n,r)}finally{W=o,_n.transition=i}}function ym(e,t,n,r){var o=W,i=_n.transition;_n.transition=null;try{W=4,ka(e,t,n,r)}finally{W=o,_n.transition=i}}function ka(e,t,n,r){if(fi){var o=ys(e,t,n,r);if(o===null)Il(e,t,r,hi,n),Ec(e,r);else if(mm(o,e,t,n,r))r.stopPropagation();else if(Ec(e,r),t&4&&-1<hm.indexOf(e)){for(;o!==null;){var i=po(o);if(i!==null&&vp(i),i=ys(e,t,n,r),i===null&&Il(e,t,r,hi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var hi=null;function ys(e,t,n,r){if(hi=null,e=ya(r),e=on(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hi=e,null}function Cp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(im()){case va:return 1;case mp:return 4;case di:case lm:return 16;case gp:return 536870912;default:return 16}default:return 16}}var Rt=null,ja=null,Go=null;function Sp(){if(Go)return Go;var e,t=ja,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Go=o.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Tc(){return!1}function Ne(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jo:Tc,this.isPropagationStopped=Tc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=Ne(nr),uo=q({},nr,{view:0,detail:0}),vm=Ne(uo),kl,jl,hr,Ui=q({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(kl=e.screenX-hr.screenX,jl=e.screenY-hr.screenY):jl=kl=0,hr=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Lc=Ne(Ui),wm=q({},Ui,{dataTransfer:0}),bm=Ne(wm),km=q({},uo,{relatedTarget:0}),Cl=Ne(km),jm=q({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=Ne(jm),Sm=q({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$m=Ne(Sm),Em=q({},nr,{data:0}),Ic=Ne(Em),Pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lm[e])?!!t[e]:!1}function Sa(){return Im}var Rm=q({},uo,{key:function(e){if(e.key){var t=Pm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zm=Ne(Rm),Dm=q({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rc=Ne(Dm),Mm=q({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Nm=Ne(Mm),Am=q({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=Ne(Am),_m=q({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=Ne(_m),Bm=[9,13,27,32],$a=mt&&"CompositionEvent"in window,Lr=null;mt&&"documentMode"in document&&(Lr=document.documentMode);var Wm=mt&&"TextEvent"in window&&!Lr,$p=mt&&(!$a||Lr&&8<Lr&&11>=Lr),zc=" ",Dc=!1;function Ep(e,t){switch(e){case"keyup":return Bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Um(e,t){switch(e){case"compositionend":return Pp(t);case"keypress":return t.which!==32?null:(Dc=!0,zc);case"textInput":return e=t.data,e===zc&&Dc?null:e;default:return null}}function Vm(e,t){if($n)return e==="compositionend"||!$a&&Ep(e,t)?(e=Sp(),Go=ja=Rt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $p&&t.locale!=="ko"?null:t.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hm[e.type]:t==="textarea"}function Tp(e,t,n,r){lp(r),t=mi(t,"onChange"),0<t.length&&(n=new Ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Qr=null;function Qm(e){Fp(e,0)}function Vi(e){var t=Tn(e);if(Zd(t))return e}function Km(e,t){if(e==="change")return t}var Lp=!1;if(mt){var Sl;if(mt){var $l="oninput"in document;if(!$l){var Nc=document.createElement("div");Nc.setAttribute("oninput","return;"),$l=typeof Nc.oninput=="function"}Sl=$l}else Sl=!1;Lp=Sl&&(!document.documentMode||9<document.documentMode)}function Ac(){Ir&&(Ir.detachEvent("onpropertychange",Ip),Qr=Ir=null)}function Ip(e){if(e.propertyName==="value"&&Vi(Qr)){var t=[];Tp(t,Qr,e,ya(e)),up(Qm,t)}}function Gm(e,t,n){e==="focusin"?(Ac(),Ir=t,Qr=n,Ir.attachEvent("onpropertychange",Ip)):e==="focusout"&&Ac()}function Ym(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(Qr)}function Jm(e,t){if(e==="click")return Vi(t)}function Xm(e,t){if(e==="input"||e==="change")return Vi(t)}function qm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:qm;function Kr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!es.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var n=Oc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oc(n)}}function Rp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zp(){for(var e=window,t=ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ai(e.document)}return t}function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zm(e){var t=zp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rp(n.ownerDocument.documentElement,n)){if(r!==null&&Ea(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_c(n,i);var s=_c(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eg=mt&&"documentMode"in document&&11>=document.documentMode,En=null,vs=null,Rr=null,ws=!1;function Fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ws||En==null||En!==ai(r)||(r=En,"selectionStart"in r&&Ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Kr(Rr,r)||(Rr=r,r=mi(vs,"onSelect"),0<r.length&&(t=new Ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function Co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},El={},Dp={};mt&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Hi(e){if(El[e])return El[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dp)return El[e]=t[n];return e}var Mp=Hi("animationend"),Np=Hi("animationiteration"),Ap=Hi("animationstart"),Op=Hi("transitionend"),_p=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){_p.set(e,t),yn(t,[e])}for(var Pl=0;Pl<Bc.length;Pl++){var Tl=Bc[Pl],tg=Tl.toLowerCase(),ng=Tl[0].toUpperCase()+Tl.slice(1);Gt(tg,"on"+ng)}Gt(Mp,"onAnimationEnd");Gt(Np,"onAnimationIteration");Gt(Ap,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Op,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function Wc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tm(r,t,void 0,e),e.currentTarget=null}function Fp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],a=c.instance,u=c.currentTarget;if(c=c.listener,a!==i&&o.isPropagationStopped())break e;Wc(o,c,u),i=a}else for(s=0;s<r.length;s++){if(c=r[s],a=c.instance,u=c.currentTarget,c=c.listener,a!==i&&o.isPropagationStopped())break e;Wc(o,c,u),i=a}}}if(ui)throw e=ms,ui=!1,ms=null,e}function H(e,t){var n=t[Ss];n===void 0&&(n=t[Ss]=new Set);var r=e+"__bubble";n.has(r)||(Bp(t,e,2,!1),n.add(r))}function Ll(e,t,n){var r=0;t&&(r|=4),Bp(n,e,r,t)}var So="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[So]){e[So]=!0,Gd.forEach(function(n){n!=="selectionchange"&&(rg.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[So]||(t[So]=!0,Ll("selectionchange",!1,t))}}function Bp(e,t,n,r){switch(Cp(t)){case 1:var o=xm;break;case 4:o=ym;break;default:o=ka}n=o.bind(null,t,n,e),o=void 0,!hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;c!==null;){if(s=on(c),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}c=c.parentNode}}r=r.return}up(function(){var u=i,f=ya(n),m=[];e:{var g=_p.get(e);if(g!==void 0){var b=Ca,y=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":b=zm;break;case"focusin":y="focus",b=Cl;break;case"focusout":y="blur",b=Cl;break;case"beforeblur":case"afterblur":b=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Nm;break;case Mp:case Np:case Ap:b=Cm;break;case Op:b=Om;break;case"scroll":b=vm;break;case"wheel":b=Fm;break;case"copy":case"cut":case"paste":b=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Rc}var C=(t&4)!==0,$=!C&&e==="scroll",h=C?g!==null?g+"Capture":null:g;C=[];for(var p=u,x;p!==null;){x=p;var j=x.stateNode;if(x.tag===5&&j!==null&&(x=j,h!==null&&(j=Wr(p,h),j!=null&&C.push(Yr(p,j,x)))),$)break;p=p.return}0<C.length&&(g=new b(g,y,null,n,f),m.push({event:g,listeners:C}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&n!==ps&&(y=n.relatedTarget||n.fromElement)&&(on(y)||y[gt]))break e;if((b||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,b?(y=n.relatedTarget||n.toElement,b=u,y=y?on(y):null,y!==null&&($=vn(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=u),b!==y)){if(C=Lc,j="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(C=Rc,j="onPointerLeave",h="onPointerEnter",p="pointer"),$=b==null?g:Tn(b),x=y==null?g:Tn(y),g=new C(j,p+"leave",b,n,f),g.target=$,g.relatedTarget=x,j=null,on(f)===u&&(C=new C(h,p+"enter",y,n,f),C.target=x,C.relatedTarget=$,j=C),$=j,b&&y)t:{for(C=b,h=y,p=0,x=C;x;x=wn(x))p++;for(x=0,j=h;j;j=wn(j))x++;for(;0<p-x;)C=wn(C),p--;for(;0<x-p;)h=wn(h),x--;for(;p--;){if(C===h||h!==null&&C===h.alternate)break t;C=wn(C),h=wn(h)}C=null}else C=null;b!==null&&Uc(m,g,b,C,!1),y!==null&&$!==null&&Uc(m,$,y,C,!0)}}e:{if(g=u?Tn(u):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var w=Km;else if(Mc(g))if(Lp)w=Xm;else{w=Ym;var E=Gm}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=Jm);if(w&&(w=w(e,u))){Tp(m,w,n,f);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&ss(g,"number",g.value)}switch(E=u?Tn(u):window,e){case"focusin":(Mc(E)||E.contentEditable==="true")&&(En=E,vs=u,Rr=null);break;case"focusout":Rr=vs=En=null;break;case"mousedown":ws=!0;break;case"contextmenu":case"mouseup":case"dragend":ws=!1,Fc(m,n,f);break;case"selectionchange":if(eg)break;case"keydown":case"keyup":Fc(m,n,f)}var S;if($a)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else $n?Ep(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&($p&&n.locale!=="ko"&&($n||k!=="onCompositionStart"?k==="onCompositionEnd"&&$n&&(S=Sp()):(Rt=f,ja="value"in Rt?Rt.value:Rt.textContent,$n=!0)),E=mi(u,k),0<E.length&&(k=new Ic(k,e,null,n,f),m.push({event:k,listeners:E}),S?k.data=S:(S=Pp(n),S!==null&&(k.data=S)))),(S=Wm?Um(e,n):Vm(e,n))&&(u=mi(u,"onBeforeInput"),0<u.length&&(f=new Ic("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=S))}Fp(m,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wr(e,n),i!=null&&r.unshift(Yr(e,i,o)),i=Wr(e,t),i!=null&&r.push(Yr(e,i,o))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uc(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var c=n,a=c.alternate,u=c.stateNode;if(a!==null&&a===r)break;c.tag===5&&u!==null&&(c=u,o?(a=Wr(n,i),a!=null&&s.unshift(Yr(n,a,c))):o||(a=Wr(n,i),a!=null&&s.push(Yr(n,a,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var og=/\r\n?/g,ig=/\u0000|\uFFFD/g;function Vc(e){return(typeof e=="string"?e:""+e).replace(og,`
`).replace(ig,"")}function $o(e,t,n){if(t=Vc(t),Vc(e)!==t&&n)throw Error(P(425))}function gi(){}var bs=null,ks=null;function js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,lg=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(e){return Hc.resolve(null).then(e).catch(ag)}:Cs;function ag(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Hr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),nt="__reactFiber$"+rr,Jr="__reactProps$"+rr,gt="__reactContainer$"+rr,Ss="__reactEvents$"+rr,cg="__reactListeners$"+rr,ug="__reactHandles$"+rr;function on(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qc(e);e!==null;){if(n=e[nt])return n;e=Qc(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Qi(e){return e[Jr]||null}var $s=[],Ln=-1;function Yt(e){return{current:e}}function K(e){0>Ln||(e.current=$s[Ln],$s[Ln]=null,Ln--)}function V(e,t){Ln++,$s[Ln]=e.current,e.current=t}var Kt={},ve=Yt(Kt),Ee=Yt(!1),dn=Kt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function xi(){K(Ee),K(ve)}function Kc(e,t,n){if(ve.current!==Kt)throw Error(P(168));V(ve,t),V(Ee,n)}function Wp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,G0(e)||"Unknown",o));return q({},n,r)}function yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,dn=ve.current,V(ve,e),V(Ee,Ee.current),!0}function Gc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Wp(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,K(Ee),K(ve),V(ve,e)):K(Ee),V(Ee,n)}var dt=null,Ki=!1,zl=!1;function Up(e){dt===null?dt=[e]:dt.push(e)}function dg(e){Ki=!0,Up(e)}function Jt(){if(!zl&&dt!==null){zl=!0;var e=0,t=W;try{var n=dt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,Ki=!1}catch(o){throw dt!==null&&(dt=dt.slice(e+1)),hp(va,Jt),o}finally{W=t,zl=!1}}return null}var In=[],Rn=0,vi=null,wi=0,Oe=[],_e=0,pn=null,pt=1,ft="";function en(e,t){In[Rn++]=wi,In[Rn++]=vi,vi=e,wi=t}function Vp(e,t,n){Oe[_e++]=pt,Oe[_e++]=ft,Oe[_e++]=pn,pn=e;var r=pt;e=ft;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,pt=1<<32-Je(t)+o|n<<o|r,ft=i+e}else pt=1<<i|n<<o|r,ft=e}function Pa(e){e.return!==null&&(en(e,1),Vp(e,1,0))}function Ta(e){for(;e===vi;)vi=In[--Rn],In[Rn]=null,wi=In[--Rn],In[Rn]=null;for(;e===pn;)pn=Oe[--_e],Oe[_e]=null,ft=Oe[--_e],Oe[_e]=null,pt=Oe[--_e],Oe[_e]=null}var ze=null,Re=null,G=!1,Ye=null;function Hp(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Re=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:pt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Re=null,!0):!1;default:return!1}}function Es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(G){var t=Re;if(t){var n=t;if(!Yc(e,t)){if(Es(e))throw Error(P(418));t=_t(n.nextSibling);var r=ze;t&&Yc(e,t)?Hp(r,n):(e.flags=e.flags&-4097|2,G=!1,ze=e)}}else{if(Es(e))throw Error(P(418));e.flags=e.flags&-4097|2,G=!1,ze=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Eo(e){if(e!==ze)return!1;if(!G)return Jc(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!js(e.type,e.memoizedProps)),t&&(t=Re)){if(Es(e))throw Qp(),Error(P(418));for(;t;)Hp(e,t),t=_t(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=ze?_t(e.stateNode.nextSibling):null;return!0}function Qp(){for(var e=Re;e;)e=_t(e.nextSibling)}function Hn(){Re=ze=null,G=!1}function La(e){Ye===null?Ye=[e]:Ye.push(e)}var pg=vt.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var c=o.refs;s===null?delete c[i]:c[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xc(e){var t=e._init;return t(e._payload)}function Kp(e){function t(h,p){if(e){var x=h.deletions;x===null?(h.deletions=[p],h.flags|=16):x.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Ut(h,p),h.index=0,h.sibling=null,h}function i(h,p,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<p?(h.flags|=2,p):x):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function c(h,p,x,j){return p===null||p.tag!==6?(p=Fl(x,h.mode,j),p.return=h,p):(p=o(p,x),p.return=h,p)}function a(h,p,x,j){var w=x.type;return w===Sn?f(h,p,x.props.children,j,x.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pt&&Xc(w)===p.type)?(j=o(p,x.props),j.ref=mr(h,p,x),j.return=h,j):(j=ni(x.type,x.key,x.props,null,h.mode,j),j.ref=mr(h,p,x),j.return=h,j)}function u(h,p,x,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Bl(x,h.mode,j),p.return=h,p):(p=o(p,x.children||[]),p.return=h,p)}function f(h,p,x,j,w){return p===null||p.tag!==7?(p=cn(x,h.mode,j,w),p.return=h,p):(p=o(p,x),p.return=h,p)}function m(h,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fl(""+p,h.mode,x),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xo:return x=ni(p.type,p.key,p.props,null,h.mode,x),x.ref=mr(h,null,p),x.return=h,x;case Cn:return p=Bl(p,h.mode,x),p.return=h,p;case Pt:var j=p._init;return m(h,j(p._payload),x)}if(br(p)||ur(p))return p=cn(p,h.mode,x,null),p.return=h,p;Po(h,p)}return null}function g(h,p,x,j){var w=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:c(h,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xo:return x.key===w?a(h,p,x,j):null;case Cn:return x.key===w?u(h,p,x,j):null;case Pt:return w=x._init,g(h,p,w(x._payload),j)}if(br(x)||ur(x))return w!==null?null:f(h,p,x,j,null);Po(h,x)}return null}function b(h,p,x,j,w){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(x)||null,c(p,h,""+j,w);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case xo:return h=h.get(j.key===null?x:j.key)||null,a(p,h,j,w);case Cn:return h=h.get(j.key===null?x:j.key)||null,u(p,h,j,w);case Pt:var E=j._init;return b(h,p,x,E(j._payload),w)}if(br(j)||ur(j))return h=h.get(x)||null,f(p,h,j,w,null);Po(p,j)}return null}function y(h,p,x,j){for(var w=null,E=null,S=p,k=p=0,R=null;S!==null&&k<x.length;k++){S.index>k?(R=S,S=null):R=S.sibling;var L=g(h,S,x[k],j);if(L===null){S===null&&(S=R);break}e&&S&&L.alternate===null&&t(h,S),p=i(L,p,k),E===null?w=L:E.sibling=L,E=L,S=R}if(k===x.length)return n(h,S),G&&en(h,k),w;if(S===null){for(;k<x.length;k++)S=m(h,x[k],j),S!==null&&(p=i(S,p,k),E===null?w=S:E.sibling=S,E=S);return G&&en(h,k),w}for(S=r(h,S);k<x.length;k++)R=b(S,h,k,x[k],j),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?k:R.key),p=i(R,p,k),E===null?w=R:E.sibling=R,E=R);return e&&S.forEach(function(A){return t(h,A)}),G&&en(h,k),w}function C(h,p,x,j){var w=ur(x);if(typeof w!="function")throw Error(P(150));if(x=w.call(x),x==null)throw Error(P(151));for(var E=w=null,S=p,k=p=0,R=null,L=x.next();S!==null&&!L.done;k++,L=x.next()){S.index>k?(R=S,S=null):R=S.sibling;var A=g(h,S,L.value,j);if(A===null){S===null&&(S=R);break}e&&S&&A.alternate===null&&t(h,S),p=i(A,p,k),E===null?w=A:E.sibling=A,E=A,S=R}if(L.done)return n(h,S),G&&en(h,k),w;if(S===null){for(;!L.done;k++,L=x.next())L=m(h,L.value,j),L!==null&&(p=i(L,p,k),E===null?w=L:E.sibling=L,E=L);return G&&en(h,k),w}for(S=r(h,S);!L.done;k++,L=x.next())L=b(S,h,k,L.value,j),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?k:L.key),p=i(L,p,k),E===null?w=L:E.sibling=L,E=L);return e&&S.forEach(function(Z){return t(h,Z)}),G&&en(h,k),w}function $(h,p,x,j){if(typeof x=="object"&&x!==null&&x.type===Sn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case xo:e:{for(var w=x.key,E=p;E!==null;){if(E.key===w){if(w=x.type,w===Sn){if(E.tag===7){n(h,E.sibling),p=o(E,x.props.children),p.return=h,h=p;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pt&&Xc(w)===E.type){n(h,E.sibling),p=o(E,x.props),p.ref=mr(h,E,x),p.return=h,h=p;break e}n(h,E);break}else t(h,E);E=E.sibling}x.type===Sn?(p=cn(x.props.children,h.mode,j,x.key),p.return=h,h=p):(j=ni(x.type,x.key,x.props,null,h.mode,j),j.ref=mr(h,p,x),j.return=h,h=j)}return s(h);case Cn:e:{for(E=x.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(h,p.sibling),p=o(p,x.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Bl(x,h.mode,j),p.return=h,h=p}return s(h);case Pt:return E=x._init,$(h,p,E(x._payload),j)}if(br(x))return y(h,p,x,j);if(ur(x))return C(h,p,x,j);Po(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,x),p.return=h,h=p):(n(h,p),p=Fl(x,h.mode,j),p.return=h,h=p),s(h)):n(h,p)}return $}var Qn=Kp(!0),Gp=Kp(!1),bi=Yt(null),ki=null,zn=null,Ia=null;function Ra(){Ia=zn=ki=null}function za(e){var t=bi.current;K(bi),e._currentValue=t}function Ts(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){ki=e,Ia=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Ia!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(ki===null)throw Error(P(308));zn=e,ki.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var ln=null;function Da(e){ln===null?ln=[e]:ln.push(e)}function Yp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Da(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Da(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function Jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}function qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ji(e,t,n,r){var o=e.updateQueue;Tt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var a=c,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==s&&(c===null?f.firstBaseUpdate=u:c.next=u,f.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;s=0,f=u=a=null,c=i;do{var g=c.lane,b=c.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:b,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var y=e,C=c;switch(g=t,b=n,C.tag){case 1:if(y=C.payload,typeof y=="function"){m=y.call(b,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,g=typeof y=="function"?y.call(b,m,g):y,g==null)break e;m=q({},m,g);break e;case 2:Tt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[c]:g.push(c))}else b={eventTime:b,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(u=f=b,a=m):f=f.next=b,s|=g;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;g=c,c=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(a=m),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);hn|=s,e.lanes=s,e.memoizedState=m}}function Zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var fo={},lt=Yt(fo),Xr=Yt(fo),qr=Yt(fo);function sn(e){if(e===fo)throw Error(P(174));return e}function Na(e,t){switch(V(qr,t),V(Xr,e),V(lt,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}K(lt),V(lt,t)}function Kn(){K(lt),K(Xr),K(qr)}function Xp(e){sn(qr.current);var t=sn(lt.current),n=cs(t,e.type);t!==n&&(V(Xr,e),V(lt,n))}function Aa(e){Xr.current===e&&(K(lt),K(Xr))}var Y=Yt(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function Oa(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var Xo=vt.ReactCurrentDispatcher,Ml=vt.ReactCurrentBatchConfig,fn=0,J=null,se=null,ue=null,Si=!1,zr=!1,Zr=0,fg=0;function me(){throw Error(P(321))}function _a(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,o,i){if(fn=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?xg:yg,e=n(r,o),zr){i=0;do{if(zr=!1,Zr=0,25<=i)throw Error(P(301));i+=1,ue=se=null,t.updateQueue=null,Xo.current=vg,e=n(r,o)}while(zr)}if(Xo.current=$i,t=se!==null&&se.next!==null,fn=0,ue=se=J=null,Si=!1,t)throw Error(P(300));return e}function Ba(){var e=Zr!==0;return Zr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function Ue(){if(se===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,se=e;else{if(e===null)throw Error(P(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function eo(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=Ue(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var c=s=null,a=null,u=i;do{var f=u.lane;if((fn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(c=a=m,s=r):a=a.next=m,J.lanes|=f,hn|=f}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=c,Ze(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,hn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=Ue(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Ze(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function qp(){}function Zp(e,t){var n=J,r=Ue(),o=t(),i=!Ze(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,Wa(nf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,to(9,tf.bind(null,n,r,o,t),void 0,null),de===null)throw Error(P(349));fn&30||ef(n,t,o)}return o}function ef(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tf(e,t,n,r){t.value=n,t.getSnapshot=r,rf(t)&&of(e)}function nf(e,t,n){return n(function(){rf(t)&&of(e)})}function rf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function of(e){var t=xt(e,1);t!==null&&Xe(t,e,1,-1)}function eu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=e,e=e.dispatch=gg.bind(null,J,e),[t.memoizedState,e]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lf(){return Ue().memoizedState}function qo(e,t,n,r){var o=tt();J.flags|=e,o.memoizedState=to(1|t,n,void 0,r===void 0?null:r)}function Gi(e,t,n,r){var o=Ue();r=r===void 0?null:r;var i=void 0;if(se!==null){var s=se.memoizedState;if(i=s.destroy,r!==null&&_a(r,s.deps)){o.memoizedState=to(t,n,i,r);return}}J.flags|=e,o.memoizedState=to(1|t,n,i,r)}function tu(e,t){return qo(8390656,8,e,t)}function Wa(e,t){return Gi(2048,8,e,t)}function sf(e,t){return Gi(4,2,e,t)}function af(e,t){return Gi(4,4,e,t)}function cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uf(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4,4,cf.bind(null,t,e),n)}function Ua(){}function df(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_a(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_a(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ff(e,t,n){return fn&21?(Ze(n,t)||(n=xp(),J.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function hg(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),t()}finally{W=n,Ml.transition=r}}function hf(){return Ue().memoizedState}function mg(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mf(e))gf(t,n);else if(n=Yp(e,t,n,r),n!==null){var o=be();Xe(n,e,r,o),xf(n,t,r)}}function gg(e,t,n){var r=Wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mf(e))gf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,c=i(s,n);if(o.hasEagerState=!0,o.eagerState=c,Ze(c,s)){var a=t.interleaved;a===null?(o.next=o,Da(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Yp(e,t,o,r),n!==null&&(o=be(),Xe(n,e,r,o),xf(n,t,r))}}function mf(e){var t=e.alternate;return e===J||t!==null&&t===J}function gf(e,t){zr=Si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}var $i={readContext:We,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},xg={readContext:We,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:tu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qo(4194308,4,cf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mg.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:eu,useDebugValue:Ua,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=eu(!1),t=e[0];return e=hg.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=tt();if(G){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),de===null)throw Error(P(349));fn&30||ef(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,tu(nf.bind(null,r,i,e),[e]),r.flags|=2048,to(9,tf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=de.identifierPrefix;if(G){var n=ft,r=pt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yg={readContext:We,useCallback:df,useContext:We,useEffect:Wa,useImperativeHandle:uf,useInsertionEffect:sf,useLayoutEffect:af,useMemo:pf,useReducer:Nl,useRef:lf,useState:function(){return Nl(eo)},useDebugValue:Ua,useDeferredValue:function(e){var t=Ue();return ff(t,se.memoizedState,e)},useTransition:function(){var e=Nl(eo)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:qp,useSyncExternalStore:Zp,useId:hf,unstable_isNewReconciler:!1},vg={readContext:We,useCallback:df,useContext:We,useEffect:Wa,useImperativeHandle:uf,useInsertionEffect:sf,useLayoutEffect:af,useMemo:pf,useReducer:Al,useRef:lf,useState:function(){return Al(eo)},useDebugValue:Ua,useDeferredValue:function(e){var t=Ue();return se===null?t.memoizedState=e:ff(t,se.memoizedState,e)},useTransition:function(){var e=Al(eo)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:qp,useSyncExternalStore:Zp,useId:hf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yi={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),o=Wt(e),i=ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(Xe(t,e,o,r),Jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),o=Wt(e),i=ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(Xe(t,e,o,r),Jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Wt(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(Xe(t,e,r,n),Jo(t,e,r))}};function nu(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(o,i):!0}function yf(e,t,n){var r=!1,o=Kt,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Pe(t)?dn:ve.current,r=t.contextTypes,i=(r=r!=null)?Vn(e,o):Kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ru(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ma(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Pe(t)?dn:ve.current,o.context=Vn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ls(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yi.enqueueReplaceState(o,o.state,null),ji(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=K0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wg=typeof WeakMap=="function"?WeakMap:Map;function vf(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pi||(Pi=!0,Ws=r),Rs(e,t)},n}function wf(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Rs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Rs(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ou(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Dg.bind(null,e,t,n),t.then(e,e))}function iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var bg=vt.ReactCurrentOwner,$e=!1;function we(e,t,n,r){t.child=e===null?Gp(t,null,n,r):Qn(t,e.child,n,r)}function su(e,t,n,r,o){n=n.render;var i=t.ref;return Fn(t,o),r=Fa(e,t,n,r,i,o),n=Ba(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(G&&n&&Pa(t),t.flags|=1,we(e,t,r,o),t.child)}function au(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Xa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,bf(e,t,i,r,o)):(e=ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(s,r)&&e.ref===t.ref)return yt(e,t,o)}return t.flags|=1,e=Ut(i,r),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Kr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,yt(e,t,o)}return zs(e,t,n,r,o)}function kf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Mn,Ie),Ie|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Mn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Mn,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Mn,Ie),Ie|=r;return we(e,t,o,n),t.child}function jf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,n,r,o){var i=Pe(n)?dn:ve.current;return i=Vn(t,i),Fn(t,o),n=Fa(e,t,n,r,i,o),r=Ba(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(G&&r&&Pa(t),t.flags|=1,we(e,t,n,o),t.child)}function cu(e,t,n,r,o){if(Pe(n)){var i=!0;yi(t)}else i=!1;if(Fn(t,o),t.stateNode===null)Zo(e,t),yf(t,n,r),Is(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Pe(n)?dn:ve.current,u=Vn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||a!==u)&&ru(t,s,r,u),Tt=!1;var g=t.memoizedState;s.state=g,ji(t,r,s,o),a=t.memoizedState,c!==r||g!==a||Ee.current||Tt?(typeof f=="function"&&(Ls(t,n,f,r),a=t.memoizedState),(c=Tt||nu(t,n,c,r,g,a,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Jp(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:Qe(t.type,c),s.props=u,m=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=Pe(n)?dn:ve.current,a=Vn(t,a));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==m||g!==a)&&ru(t,s,r,a),Tt=!1,g=t.memoizedState,s.state=g,ji(t,r,s,o);var y=t.memoizedState;c!==m||g!==y||Ee.current||Tt?(typeof b=="function"&&(Ls(t,n,b,r),y=t.memoizedState),(u=Tt||nu(t,n,u,r,g,y,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ds(e,t,n,r,i,o)}function Ds(e,t,n,r,o,i){jf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Gc(t,n,!1),yt(e,t,i);r=t.stateNode,bg.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Qn(t,e.child,null,i),t.child=Qn(t,null,c,i)):we(e,t,c,i),t.memoizedState=r.state,o&&Gc(t,n,!0),t.child}function Cf(e){var t=e.stateNode;t.pendingContext?Kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kc(e,t.context,!1),Na(e,t.containerInfo)}function uu(e,t,n,r,o){return Hn(),La(o),t.flags|=256,we(e,t,n,r),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sf(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Y,o&1),e===null)return Ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=qi(s,r,0,null),e=cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ns(n),t.memoizedState=Ms,e):Va(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return kg(e,t,s,r,c,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,c=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ut(o,a),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?i=Ut(c,i):(i=cn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ns(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ms,r}return i=e.child,e=i.sibling,r=Ut(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Va(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function To(e,t,n,r){return r!==null&&La(r),Qn(t,e.child,null,n),e=Va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kg(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ol(Error(P(422))),To(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=qi({mode:"visible",children:r.children},o,0,null),i=cn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Qn(t,e.child,null,s),t.child.memoizedState=Ns(s),t.memoizedState=Ms,i);if(!(t.mode&1))return To(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(P(419)),r=Ol(i,r,void 0),To(e,t,s,r)}if(c=(s&e.childLanes)!==0,$e||c){if(r=de,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xt(e,o),Xe(r,e,o,-1))}return Ja(),r=Ol(Error(P(421))),To(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Re=_t(o.nextSibling),ze=t,G=!0,Ye=null,e!==null&&(Oe[_e++]=pt,Oe[_e++]=ft,Oe[_e++]=pn,pt=e.id,ft=e.overflow,pn=t),t=Va(t,r.children),t.flags|=4096,t)}function du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ts(e.return,t,n)}function _l(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function $f(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,n,t);else if(e.tag===19)du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_l(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ci(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_l(t,!0,n,null,i);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jg(e,t,n){switch(t.tag){case 3:Cf(t),Hn();break;case 5:Xp(t);break;case 1:Pe(t.type)&&yi(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(bi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Sf(e,t,n):(V(Y,Y.current&1),e=yt(e,t,n),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $f(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,kf(e,t,n)}return yt(e,t,n)}var Ef,As,Pf,Tf;Ef=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};Pf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,sn(lt.current);var i=null;switch(n){case"input":o=is(e,o),r=is(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=as(e,o),r=as(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gi)}us(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var c=o[u];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(c=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==c&&(a!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&c[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,c=c?c.__html:void 0,a!=null&&c!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),i||c===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Tf=function(e,t,n,r){n!==r&&(t.flags|=4)};function gr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cg(e,t,n){var r=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Pe(t.type)&&xi(),ge(t),null;case 3:return r=t.stateNode,Kn(),K(Ee),K(ve),Oa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Hs(Ye),Ye=null))),As(e,t),ge(t),null;case 5:Aa(t);var o=sn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ge(t),null}if(e=sn(lt.current),Eo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[Jr]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<jr.length;o++)H(jr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":wc(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":kc(r,i),H("invalid",r)}us(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&$o(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&$o(r.textContent,c,e),o=["children",""+c]):Fr.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":yo(r),bc(r,i,!0);break;case"textarea":yo(r),jc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=gi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=np(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[Jr]=r,Ef(e,t,!1,!1),t.stateNode=e;e:{switch(s=ds(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<jr.length;o++)H(jr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":wc(e,r),o=is(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":kc(e,r),o=as(e,r),H("invalid",e);break;default:o=r}us(n,o),c=o;for(i in c)if(c.hasOwnProperty(i)){var a=c[i];i==="style"?ip(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&rp(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Br(e,a):typeof a=="number"&&Br(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&H("scroll",e):a!=null&&ha(e,i,a,s))}switch(n){case"input":yo(e),bc(e,r,!1);break;case"textarea":yo(e),jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Nn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Tf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=sn(qr.current),sn(lt.current),Eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:$o(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ge(t),null;case 13:if(K(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Re!==null&&t.mode&1&&!(t.flags&128))Qp(),Hn(),t.flags|=98560,i=!1;else if(i=Eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[nt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else Ye!==null&&(Hs(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ce===0&&(ce=3):Ja())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Kn(),As(e,t),e===null&&Gr(t.stateNode.containerInfo),ge(t),null;case 10:return za(t.type._context),ge(t),null;case 17:return Pe(t.type)&&xi(),ge(t),null;case 19:if(K(Y),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)gr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ci(e),s!==null){for(t.flags|=128,gr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Yn&&(t.flags|=128,r=!0,gr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ci(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!G)return ge(t),null}else 2*ne()-i.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,gr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Sg(e,t){switch(Ta(t),t.tag){case 1:return Pe(t.type)&&xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),K(Ee),K(ve),Oa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Aa(t),null;case 13:if(K(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Y),null;case 4:return Kn(),null;case 10:return za(t.type._context),null;case 22:case 23:return Ya(),null;case 24:return null;default:return null}}var Lo=!1,ye=!1,$g=typeof WeakSet=="function"?WeakSet:Set,I=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Os(e,t,n){try{n()}catch(r){te(e,t,r)}}var pu=!1;function Eg(e,t){if(bs=fi,e=zp(),Ea(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,c=-1,a=-1,u=0,f=0,m=e,g=null;t:for(;;){for(var b;m!==n||o!==0&&m.nodeType!==3||(c=s+o),m!==i||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(b=m.firstChild)!==null;)g=m,m=b;for(;;){if(m===e)break t;if(g===n&&++u===o&&(c=s),g===i&&++f===r&&(a=s),(b=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=b}n=c===-1||a===-1?null:{start:c,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},fi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var C=y.memoizedProps,$=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?C:Qe(t.type,C),$);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(j){te(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=pu,pu=!1,y}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Os(t,n,i)}o=o.next}while(o!==r)}}function Ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _s(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lf(e){var t=e.alternate;t!==null&&(e.alternate=null,Lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Jr],delete t[Ss],delete t[cg],delete t[ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function If(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||If(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gi));else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}var pe=null,Ke=!1;function Ct(e,t,n){for(n=n.child;n!==null;)Rf(e,t,n),n=n.sibling}function Rf(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Wi,n)}catch{}switch(n.tag){case 5:ye||Dn(n,t);case 6:var r=pe,o=Ke;pe=null,Ct(e,t,n),pe=r,Ke=o,pe!==null&&(Ke?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Ke?(e=pe,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),Hr(e)):Rl(pe,n.stateNode));break;case 4:r=pe,o=Ke,pe=n.stateNode.containerInfo,Ke=!0,Ct(e,t,n),pe=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Os(n,t,s),o=o.next}while(o!==r)}Ct(e,t,n);break;case 1:if(!ye&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){te(n,t,c)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Ct(e,t,n),ye=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $g),t.forEach(function(r){var o=Ng.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:pe=c.stateNode,Ke=!1;break e;case 3:pe=c.stateNode.containerInfo,Ke=!0;break e;case 4:pe=c.stateNode.containerInfo,Ke=!0;break e}c=c.return}if(pe===null)throw Error(P(160));Rf(i,s,o),pe=null,Ke=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zf(t,e),t=t.sibling}function zf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),et(e),r&4){try{Dr(3,e,e.return),Ji(3,e)}catch(C){te(e,e.return,C)}try{Dr(5,e,e.return)}catch(C){te(e,e.return,C)}}break;case 1:He(t,e),et(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(He(t,e),et(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var o=e.stateNode;try{Br(o,"")}catch(C){te(e,e.return,C)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,c=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&ep(o,i),ds(c,s);var u=ds(c,i);for(s=0;s<a.length;s+=2){var f=a[s],m=a[s+1];f==="style"?ip(o,m):f==="dangerouslySetInnerHTML"?rp(o,m):f==="children"?Br(o,m):ha(o,f,m,u)}switch(c){case"input":ls(o,i);break;case"textarea":tp(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Nn(o,!!i.multiple,b,!1):g!==!!i.multiple&&(i.defaultValue!=null?Nn(o,!!i.multiple,i.defaultValue,!0):Nn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jr]=i}catch(C){te(e,e.return,C)}}break;case 6:if(He(t,e),et(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(C){te(e,e.return,C)}}break;case 3:if(He(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(C){te(e,e.return,C)}break;case 4:He(t,e),et(e);break;case 13:He(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ka=ne())),r&4&&hu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||f,He(t,e),ye=u):He(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(m=I=f;I!==null;){switch(g=I,b=g.child,g.tag){case 0:case 11:case 14:case 15:Dr(4,g,g.return);break;case 1:Dn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(C){te(r,n,C)}}break;case 5:Dn(g,g.return);break;case 22:if(g.memoizedState!==null){gu(m);continue}}b!==null?(b.return=g,I=b):gu(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,c.style.display=op("display",s))}catch(C){te(e,e.return,C)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(C){te(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(t,e),et(e),r&4&&hu(e);break;case 21:break;default:He(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(If(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Br(o,""),r.flags&=-33);var i=fu(e);Bs(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,c=fu(e);Fs(e,c,s);break;default:throw Error(P(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pg(e,t,n){I=e,Df(e)}function Df(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Lo;if(!s){var c=o.alternate,a=c!==null&&c.memoizedState!==null||ye;c=Lo;var u=ye;if(Lo=s,(ye=a)&&!u)for(I=o;I!==null;)s=I,a=s.child,s.tag===22&&s.memoizedState!==null?xu(o):a!==null?(a.return=s,I=a):xu(o);for(;i!==null;)I=i,Df(i),i=i.sibling;I=o,Lo=c,ye=u}mu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):mu(e)}}function mu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zc(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zc(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Hr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ye||t.flags&512&&_s(t)}catch(g){te(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function gu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function xu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ji(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){te(t,o,a)}}var i=t.return;try{_s(t)}catch(a){te(t,i,a)}break;case 5:var s=t.return;try{_s(t)}catch(a){te(t,s,a)}}}catch(a){te(t,t.return,a)}if(t===e){I=null;break}var c=t.sibling;if(c!==null){c.return=t.return,I=c;break}I=t.return}}var Tg=Math.ceil,Ei=vt.ReactCurrentDispatcher,Ha=vt.ReactCurrentOwner,Be=vt.ReactCurrentBatchConfig,O=0,de=null,ie=null,fe=0,Ie=0,Mn=Yt(0),ce=0,no=null,hn=0,Xi=0,Qa=0,Mr=null,Se=null,Ka=0,Yn=1/0,at=null,Pi=!1,Ws=null,Bt=null,Io=!1,zt=null,Ti=0,Nr=0,Us=null,ei=-1,ti=0;function be(){return O&6?ne():ei!==-1?ei:ei=ne()}function Wt(e){return e.mode&1?O&2&&fe!==0?fe&-fe:pg.transition!==null?(ti===0&&(ti=xp()),ti):(e=W,e!==0||(e=window.event,e=e===void 0?16:Cp(e.type)),e):1}function Xe(e,t,n,r){if(50<Nr)throw Nr=0,Us=null,Error(P(185));co(e,n,r),(!(O&2)||e!==de)&&(e===de&&(!(O&2)&&(Xi|=n),ce===4&&It(e,fe)),Te(e,r),n===1&&O===0&&!(t.mode&1)&&(Yn=ne()+500,Ki&&Jt()))}function Te(e,t){var n=e.callbackNode;pm(e,t);var r=pi(e,e===de?fe:0);if(r===0)n!==null&&$c(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$c(n),t===1)e.tag===0?dg(yu.bind(null,e)):Up(yu.bind(null,e)),sg(function(){!(O&6)&&Jt()}),n=null;else{switch(yp(r)){case 1:n=va;break;case 4:n=mp;break;case 16:n=di;break;case 536870912:n=gp;break;default:n=di}n=Wf(n,Mf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mf(e,t){if(ei=-1,ti=0,O&6)throw Error(P(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=pi(e,e===de?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var o=O;O|=2;var i=Af();(de!==e||fe!==t)&&(at=null,Yn=ne()+500,an(e,t));do try{Rg();break}catch(c){Nf(e,c)}while(!0);Ra(),Ei.current=i,O=o,ie!==null?t=0:(de=null,fe=0,t=ce)}if(t!==0){if(t===2&&(o=gs(e),o!==0&&(r=o,t=Vs(e,o))),t===1)throw n=no,an(e,0),It(e,r),Te(e,ne()),n;if(t===6)It(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lg(o)&&(t=Li(e,r),t===2&&(i=gs(e),i!==0&&(r=i,t=Vs(e,i))),t===1))throw n=no,an(e,0),It(e,r),Te(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:tn(e,Se,at);break;case 3:if(It(e,r),(r&130023424)===r&&(t=Ka+500-ne(),10<t)){if(pi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cs(tn.bind(null,e,Se,at),t);break}tn(e,Se,at);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Je(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tg(r/1960))-r,10<r){e.timeoutHandle=Cs(tn.bind(null,e,Se,at),r);break}tn(e,Se,at);break;case 5:tn(e,Se,at);break;default:throw Error(P(329))}}}return Te(e,ne()),e.callbackNode===n?Mf.bind(null,e):null}function Vs(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Li(e,t),e!==2&&(t=Se,Se=n,t!==null&&Hs(t)),e}function Hs(e){Se===null?Se=e:Se.push.apply(Se,e)}function Lg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ze(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~Qa,t&=~Xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if(O&6)throw Error(P(327));Bn();var t=pi(e,0);if(!(t&1))return Te(e,ne()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=gs(e);r!==0&&(t=r,n=Vs(e,r))}if(n===1)throw n=no,an(e,0),It(e,t),Te(e,ne()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Se,at),Te(e,ne()),null}function Ga(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Yn=ne()+500,Ki&&Jt())}}function mn(e){zt!==null&&zt.tag===0&&!(O&6)&&Bn();var t=O;O|=1;var n=Be.transition,r=W;try{if(Be.transition=null,W=1,e)return e()}finally{W=r,Be.transition=n,O=t,!(O&6)&&Jt()}}function Ya(){Ie=Mn.current,K(Mn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lg(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xi();break;case 3:Kn(),K(Ee),K(ve),Oa();break;case 5:Aa(r);break;case 4:Kn();break;case 13:K(Y);break;case 19:K(Y);break;case 10:za(r.type._context);break;case 22:case 23:Ya()}n=n.return}if(de=e,ie=e=Ut(e.current,null),fe=Ie=t,ce=0,no=null,Qa=Xi=hn=0,Se=Mr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}ln=null}return e}function Nf(e,t){do{var n=ie;try{if(Ra(),Xo.current=$i,Si){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Si=!1}if(fn=0,ue=se=J=null,zr=!1,Zr=0,Ha.current=null,n===null||n.return===null){ce=1,no=t,ie=null;break}e:{var i=e,s=n.return,c=n,a=t;if(t=fe,c.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=c,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=iu(s);if(b!==null){b.flags&=-257,lu(b,s,c,i,t),b.mode&1&&ou(i,u,t),t=b,a=u;var y=t.updateQueue;if(y===null){var C=new Set;C.add(a),t.updateQueue=C}else y.add(a);break e}else{if(!(t&1)){ou(i,u,t),Ja();break e}a=Error(P(426))}}else if(G&&c.mode&1){var $=iu(s);if($!==null){!($.flags&65536)&&($.flags|=256),lu($,s,c,i,t),La(Gn(a,c));break e}}i=a=Gn(a,c),ce!==4&&(ce=2),Mr===null?Mr=[i]:Mr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=vf(i,a,t);qc(i,h);break e;case 1:c=a;var p=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Bt===null||!Bt.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=wf(i,c,t);qc(i,j);break e}}i=i.return}while(i!==null)}_f(n)}catch(w){t=w,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Af(){var e=Ei.current;return Ei.current=$i,e===null?$i:e}function Ja(){(ce===0||ce===3||ce===2)&&(ce=4),de===null||!(hn&268435455)&&!(Xi&268435455)||It(de,fe)}function Li(e,t){var n=O;O|=2;var r=Af();(de!==e||fe!==t)&&(at=null,an(e,t));do try{Ig();break}catch(o){Nf(e,o)}while(!0);if(Ra(),O=n,Ei.current=r,ie!==null)throw Error(P(261));return de=null,fe=0,ce}function Ig(){for(;ie!==null;)Of(ie)}function Rg(){for(;ie!==null&&!rm();)Of(ie)}function Of(e){var t=Bf(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?_f(e):ie=t,Ha.current=null}function _f(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sg(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ie=null;return}}else if(n=Cg(n,t,Ie),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ce===0&&(ce=5)}function tn(e,t,n){var r=W,o=Be.transition;try{Be.transition=null,W=1,zg(e,t,n,r)}finally{Be.transition=o,W=r}return null}function zg(e,t,n,r){do Bn();while(zt!==null);if(O&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(fm(e,i),e===de&&(ie=de=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Io||(Io=!0,Wf(di,function(){return Bn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var s=W;W=1;var c=O;O|=4,Ha.current=null,Eg(e,n),zf(n,e),Zm(ks),fi=!!bs,ks=bs=null,e.current=n,Pg(n),om(),O=c,W=s,Be.transition=i}else e.current=n;if(Io&&(Io=!1,zt=e,Ti=o),i=e.pendingLanes,i===0&&(Bt=null),sm(n.stateNode),Te(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Pi)throw Pi=!1,e=Ws,Ws=null,e;return Ti&1&&e.tag!==0&&Bn(),i=e.pendingLanes,i&1?e===Us?Nr++:(Nr=0,Us=e):Nr=0,Jt(),null}function Bn(){if(zt!==null){var e=yp(Ti),t=Be.transition,n=W;try{if(Be.transition=null,W=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,Ti=0,O&6)throw Error(P(331));var o=O;for(O|=4,I=e.current;I!==null;){var i=I,s=i.child;if(I.flags&16){var c=i.deletions;if(c!==null){for(var a=0;a<c.length;a++){var u=c[a];for(I=u;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:Dr(8,f,i)}var m=f.child;if(m!==null)m.return=f,I=m;else for(;I!==null;){f=I;var g=f.sibling,b=f.return;if(Lf(f),f===u){I=null;break}if(g!==null){g.return=b,I=g;break}I=b}}}var y=i.alternate;if(y!==null){var C=y.child;if(C!==null){y.child=null;do{var $=C.sibling;C.sibling=null,C=$}while(C!==null)}}I=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,I=s;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,I=h;break e}I=i.return}}var p=e.current;for(I=p;I!==null;){s=I;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,I=x;else e:for(s=p;I!==null;){if(c=I,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ji(9,c)}}catch(w){te(c,c.return,w)}if(c===s){I=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,I=j;break e}I=c.return}}if(O=o,Jt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Wi,e)}catch{}r=!0}return r}finally{W=n,Be.transition=t}}return!1}function vu(e,t,n){t=Gn(n,t),t=vf(e,t,1),e=Ft(e,t,1),t=be(),e!==null&&(co(e,1,t),Te(e,t))}function te(e,t,n){if(e.tag===3)vu(e,e,n);else for(;t!==null;){if(t.tag===3){vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Gn(n,e),e=wf(t,e,1),t=Ft(t,e,1),e=be(),t!==null&&(co(t,1,e),Te(t,e));break}}t=t.return}}function Dg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(fe&n)===n&&(ce===4||ce===3&&(fe&130023424)===fe&&500>ne()-Ka?an(e,0):Qa|=n),Te(e,t)}function Ff(e,t){t===0&&(e.mode&1?(t=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):t=1);var n=be();e=xt(e,t),e!==null&&(co(e,t,n),Te(e,n))}function Mg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ff(e,n)}function Ng(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Ff(e,n)}var Bf;Bf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,jg(e,t,n);$e=!!(e.flags&131072)}else $e=!1,G&&t.flags&1048576&&Vp(t,wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var o=Vn(t,ve.current);Fn(t,n),o=Fa(null,t,r,e,o,n);var i=Ba();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,yi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ma(t),o.updater=Yi,t.stateNode=o,o._reactInternals=t,Is(t,r,e,n),t=Ds(null,t,r,!0,i,n)):(t.tag=0,G&&i&&Pa(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Og(r),e=Qe(r,e),o){case 0:t=zs(null,t,r,e,n);break e;case 1:t=cu(null,t,r,e,n);break e;case 11:t=su(null,t,r,e,n);break e;case 14:t=au(null,t,r,Qe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),zs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),cu(e,t,r,o,n);case 3:e:{if(Cf(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Jp(e,t),ji(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Gn(Error(P(423)),t),t=uu(e,t,r,n,o);break e}else if(r!==o){o=Gn(Error(P(424)),t),t=uu(e,t,r,n,o);break e}else for(Re=_t(t.stateNode.containerInfo.firstChild),ze=t,G=!0,Ye=null,n=Gp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===o){t=yt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Xp(t),e===null&&Ps(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,js(r,o)?s=null:i!==null&&js(r,i)&&(t.flags|=32),jf(e,t),we(e,t,s,n),t.child;case 6:return e===null&&Ps(t),null;case 13:return Sf(e,t,n);case 4:return Na(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),su(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,V(bi,r._currentValue),r._currentValue=s,i!==null)if(Ze(i.value,s)){if(i.children===o.children&&!Ee.current){t=yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){s=i.child;for(var a=c.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=ht(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ts(i.return,n,t),c.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(P(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ts(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fn(t,n),o=We(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),au(e,t,r,o,n);case 15:return bf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Zo(e,t),t.tag=1,Pe(r)?(e=!0,yi(t)):e=!1,Fn(t,n),yf(t,r,o),Is(t,r,o,n),Ds(null,t,r,!0,e,n);case 19:return $f(e,t,n);case 22:return kf(e,t,n)}throw Error(P(156,t.tag))};function Wf(e,t){return hp(e,t)}function Ag(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new Ag(e,t,n,r)}function Xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Og(e){if(typeof e=="function")return Xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ga)return 11;if(e===xa)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ni(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Xa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return cn(n.children,o,i,t);case ma:s=8,o|=8;break;case ts:return e=Fe(12,n,t,o|2),e.elementType=ts,e.lanes=i,e;case ns:return e=Fe(13,n,t,o),e.elementType=ns,e.lanes=i,e;case rs:return e=Fe(19,n,t,o),e.elementType=rs,e.lanes=i,e;case Xd:return qi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yd:s=10;break e;case Jd:s=9;break e;case ga:s=11;break e;case xa:s=14;break e;case Pt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Fe(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function cn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function qi(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Xd,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _g(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qa(e,t,n,r,o,i,s,c,a){return e=new _g(e,t,n,c,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(i),e}function Fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uf(e){if(!e)return Kt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Wp(e,n,t)}return t}function Vf(e,t,n,r,o,i,s,c,a){return e=qa(n,r,!0,e,o,i,s,c,a),e.context=Uf(null),n=e.current,r=be(),o=Wt(n),i=ht(r,o),i.callback=t??null,Ft(n,i,o),e.current.lanes=o,co(e,o,r),Te(e,r),e}function Zi(e,t,n,r){var o=t.current,i=be(),s=Wt(o);return n=Uf(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,s),e!==null&&(Xe(e,o,s,i),Jo(e,o,s)),s}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Za(e,t){wu(e,t),(e=e.alternate)&&wu(e,t)}function Bg(){return null}var Hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ec(e){this._internalRoot=e}el.prototype.render=ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Zi(e,t,null,null)};el.prototype.unmount=ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){Zi(null,e,null,null)}),t[gt]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=bp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&jp(e)}};function tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bu(){}function Wg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ii(s);i.call(u)}}var s=Vf(t,r,e,0,null,!1,!1,"",bu);return e._reactRootContainer=s,e[gt]=s.current,Gr(e.nodeType===8?e.parentNode:e),mn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var u=Ii(a);c.call(u)}}var a=qa(e,0,!1,null,null,!1,!1,"",bu);return e._reactRootContainer=a,e[gt]=a.current,Gr(e.nodeType===8?e.parentNode:e),mn(function(){Zi(t,a,n,r)}),a}function nl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var c=o;o=function(){var a=Ii(s);c.call(a)}}Zi(t,s,e,o)}else s=Wg(n,t,e,o,r);return Ii(s)}vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kr(t.pendingLanes);n!==0&&(wa(t,n|1),Te(t,ne()),!(O&6)&&(Yn=ne()+500,Jt()))}break;case 13:mn(function(){var r=xt(e,1);if(r!==null){var o=be();Xe(r,e,1,o)}}),Za(e,1)}};ba=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=be();Xe(t,e,134217728,n)}Za(e,134217728)}};wp=function(e){if(e.tag===13){var t=Wt(e),n=xt(e,t);if(n!==null){var r=be();Xe(n,e,t,r)}Za(e,t)}};bp=function(){return W};kp=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};fs=function(e,t,n){switch(t){case"input":if(ls(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Qi(r);if(!o)throw Error(P(90));Zd(r),ls(r,o)}}}break;case"textarea":tp(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};ap=Ga;cp=mn;var Ug={usingClientEntryPoint:!1,Events:[po,Tn,Qi,lp,sp,Ga]},xr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vg={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pp(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Bg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Wi=Ro.inject(Vg),it=Ro}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ug;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tc(t))throw Error(P(200));return Fg(e,t,null,n)};Me.createRoot=function(e,t){if(!tc(e))throw Error(P(299));var n=!1,r="",o=Hf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qa(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new ec(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=pp(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return mn(e)};Me.hydrate=function(e,t,n){if(!tl(t))throw Error(P(200));return nl(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!tc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Hf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Vf(t,null,e,1,n??null,o,!1,i,s),e[gt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new el(t)};Me.render=function(e,t,n){if(!tl(t))throw Error(P(200));return nl(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!tl(e))throw Error(P(40));return e._reactRootContainer?(mn(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Me.unstable_batchedUpdates=Ga;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return nl(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qf)}catch(e){console.error(e)}}Qf(),Hd.exports=Me;var Kf=Hd.exports,Gf,ku=Kf;Gf=ku.createRoot,ku.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(null,arguments)}var Dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dt||(Dt={}));const ju="popstate";function Hg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:c}=r.location;return Qs("",{pathname:i,search:s,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ri(o)}return Kg(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qg(){return Math.random().toString(36).substr(2,8)}function Cu(e,t){return{usr:e.state,key:e.key,idx:t}}function Qs(e,t,n,r){return n===void 0&&(n=null),ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?or(t):t,{state:n,key:t&&t.key||r||Qg()})}function Ri(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function or(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Kg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,c=Dt.Pop,a=null,u=f();u==null&&(u=0,s.replaceState(ro({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function m(){c=Dt.Pop;let $=f(),h=$==null?null:$-u;u=$,a&&a({action:c,location:C.location,delta:h})}function g($,h){c=Dt.Push;let p=Qs(C.location,$,h);u=f()+1;let x=Cu(p,u),j=C.createHref(p);try{s.pushState(x,"",j)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;o.location.assign(j)}i&&a&&a({action:c,location:C.location,delta:1})}function b($,h){c=Dt.Replace;let p=Qs(C.location,$,h);u=f();let x=Cu(p,u),j=C.createHref(p);s.replaceState(x,"",j),i&&a&&a({action:c,location:C.location,delta:0})}function y($){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof $=="string"?$:Ri($);return p=p.replace(/ $/,"%20"),X(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let C={get action(){return c},get location(){return e(o,s)},listen($){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(ju,m),a=$,()=>{o.removeEventListener(ju,m),a=null}},createHref($){return t(o,$)},createURL:y,encodeLocation($){let h=y($);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:b,go($){return s.go($)}};return C}var Su;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Su||(Su={}));function Gg(e,t,n){return n===void 0&&(n="/"),Yg(e,t,n)}function Yg(e,t,n,r){let o=typeof t=="string"?or(t):t,i=Jn(o.pathname||"/",n);if(i==null)return null;let s=Yf(e);Jg(s);let c=null,a=sx(i);for(let u=0;c==null&&u<s.length;++u)c=ix(s[u],a);return c}function Yf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,c)=>{let a={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};a.relativePath.startsWith("/")&&(X(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Vt([r,a.relativePath]),f=n.concat(a);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Yf(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:rx(u,i.index),routesMeta:f})};return e.forEach((i,s)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))o(i,s);else for(let a of Jf(i.path))o(i,s,a)}),t}function Jf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Jf(r.join("/")),c=[];return c.push(...s.map(a=>a===""?i:[i,a].join("/"))),o&&c.push(...s),c.map(a=>e.startsWith("/")&&a===""?"/":a)}function Jg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ox(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xg=/^:[\w-]+$/,qg=3,Zg=2,ex=1,tx=10,nx=-2,$u=e=>e==="*";function rx(e,t){let n=e.split("/"),r=n.length;return n.some($u)&&(r+=nx),t&&(r+=Zg),n.filter(o=>!$u(o)).reduce((o,i)=>o+(Xg.test(i)?qg:i===""?ex:tx),r)}function ox(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ix(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let c=0;c<r.length;++c){let a=r[c],u=c===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=Ks({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},f),g=a.route;if(!m)return null;Object.assign(o,m.params),s.push({params:o,pathname:Vt([i,m.pathname]),pathnameBase:px(Vt([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=Vt([i,m.pathnameBase]))}return s}function Ks(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:g,isOptional:b}=f;if(g==="*"){let C=c[m]||"";s=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const y=c[m];return b&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function lx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,a)=>(r.push({paramName:c,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function sx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cx=e=>ax.test(e);function ux(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?or(e):e,i;if(n)if(cx(n))i=n;else{if(n.includes("//")){let s=n;n=Xf(n),nc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Eu(n.substring(1),"/"):i=Eu(n,t)}else i=t;return{pathname:i,search:fx(r),hash:hx(o)}}function Eu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rc(e,t){let n=dx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function oc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=or(e):(o=ro({},e),X(!o.pathname||!o.pathname.includes("?"),Wl("?","pathname","search",o)),X(!o.pathname||!o.pathname.includes("#"),Wl("#","pathname","hash",o)),X(!o.search||!o.search.includes("#"),Wl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,c;if(s==null)c=n;else{let m=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}c=m>=0?t[m]:"/"}let a=ux(o,c),u=s&&s!=="/"&&s.endsWith("/"),f=(i||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||f)&&(a.pathname+="/"),a}const Xf=e=>e.replace(/\/\/+/g,"/"),Vt=e=>Xf(e.join("/")),px=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const qf=["post","put","patch","delete"];new Set(qf);const gx=["get",...qf];new Set(gx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(null,arguments)}const rl=v.createContext(null),Zf=v.createContext(null),wt=v.createContext(null),ol=v.createContext(null),bt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),eh=v.createContext(null);function xx(e,t){let{relative:n}=t===void 0?{}:t;ir()||X(!1);let{basename:r,navigator:o}=v.useContext(wt),{hash:i,pathname:s,search:c}=il(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:Vt([r,s])),o.createHref({pathname:a,search:c,hash:i})}function ir(){return v.useContext(ol)!=null}function st(){return ir()||X(!1),v.useContext(ol).location}function th(e){v.useContext(wt).static||v.useLayoutEffect(e)}function lr(){let{isDataRoute:e}=v.useContext(bt);return e?Ix():yx()}function yx(){ir()||X(!1);let e=v.useContext(rl),{basename:t,future:n,navigator:r}=v.useContext(wt),{matches:o}=v.useContext(bt),{pathname:i}=st(),s=JSON.stringify(rc(o,n.v7_relativeSplatPath)),c=v.useRef(!1);return th(()=>{c.current=!0}),v.useCallback(function(u,f){if(f===void 0&&(f={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let m=oc(u,JSON.parse(s),i,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Vt([t,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[t,r,s,i,e])}function vx(){let{matches:e}=v.useContext(bt),t=e[e.length-1];return t?t.params:{}}function il(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(wt),{matches:o}=v.useContext(bt),{pathname:i}=st(),s=JSON.stringify(rc(o,r.v7_relativeSplatPath));return v.useMemo(()=>oc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function wx(e,t){return bx(e,t)}function bx(e,t,n,r){ir()||X(!1);let{navigator:o}=v.useContext(wt),{matches:i}=v.useContext(bt),s=i[i.length-1],c=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=st(),f;if(t){var m;let $=typeof t=="string"?or(t):t;a==="/"||(m=$.pathname)!=null&&m.startsWith(a)||X(!1),f=$}else f=u;let g=f.pathname||"/",b=g;if(a!=="/"){let $=a.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice($.length).join("/")}let y=Gg(e,{pathname:b}),C=$x(y&&y.map($=>Object.assign({},$,{params:Object.assign({},c,$.params),pathname:Vt([a,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?a:Vt([a,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,n,r);return t&&C?v.createElement(ol.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Dt.Pop}},C):C}function kx(){let e=Lx(),t=mx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const jx=v.createElement(kx,null);class Cx extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(bt.Provider,{value:this.props.routeContext},v.createElement(eh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sx(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(rl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(bt.Provider,{value:t},r)}function $x(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,c=(o=n)==null?void 0:o.errors;if(c!=null){let f=s.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);f>=0||X(!1),s=s.slice(0,Math.min(s.length,f+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:b}=n,y=m.route.loader&&g[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||y){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,m,g)=>{let b,y=!1,C=null,$=null;n&&(b=c&&m.route.id?c[m.route.id]:void 0,C=m.route.errorElement||jx,a&&(u<0&&g===0?(Rx("route-fallback"),y=!0,$=null):u===g&&(y=!0,$=m.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,g+1)),p=()=>{let x;return b?x=C:y?x=$:m.route.Component?x=v.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=f,v.createElement(Sx,{match:m,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?v.createElement(Cx,{location:n.location,revalidation:n.revalidation,component:C,error:b,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var nh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nh||{}),rh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rh||{});function Ex(e){let t=v.useContext(rl);return t||X(!1),t}function Px(e){let t=v.useContext(Zf);return t||X(!1),t}function Tx(e){let t=v.useContext(bt);return t||X(!1),t}function oh(e){let t=Tx(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function Lx(){var e;let t=v.useContext(eh),n=Px(),r=oh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ix(){let{router:e}=Ex(nh.UseNavigateStable),t=oh(rh.UseNavigateStable),n=v.useRef(!1);return th(()=>{n.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,oo({fromRouteId:t},i)))},[e,t])}const Pu={};function Rx(e,t,n){Pu[e]||(Pu[e]=!0)}function zx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Dx(e){let{to:t,replace:n,state:r,relative:o}=e;ir()||X(!1);let{future:i,static:s}=v.useContext(wt),{matches:c}=v.useContext(bt),{pathname:a}=st(),u=lr(),f=oc(t,rc(c,i.v7_relativeSplatPath),a,o==="path"),m=JSON.stringify(f);return v.useEffect(()=>u(JSON.parse(m),{replace:n,state:r,relative:o}),[u,m,o,n,r]),null}function jn(e){X(!1)}function Mx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Dt.Pop,navigator:i,static:s=!1,future:c}=e;ir()&&X(!1);let a=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:a,navigator:i,static:s,future:oo({v7_relativeSplatPath:!1},c)}),[a,c,i,s]);typeof r=="string"&&(r=or(r));let{pathname:f="/",search:m="",hash:g="",state:b=null,key:y="default"}=r,C=v.useMemo(()=>{let $=Jn(f,a);return $==null?null:{location:{pathname:$,search:m,hash:g,state:b,key:y},navigationType:o}},[a,f,m,g,b,y,o]);return C==null?null:v.createElement(wt.Provider,{value:u},v.createElement(ol.Provider,{children:n,value:C}))}function Nx(e){let{children:t,location:n}=e;return wx(Gs(t),n)}new Promise(()=>{});function Gs(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...t,o];if(r.type===v.Fragment){n.push.apply(n,Gs(r.props.children,i));return}r.type!==jn&&X(!1),!r.props.index||!r.props.children||X(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Gs(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zi.apply(null,arguments)}function ih(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ax(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ox(e,t){return e.button===0&&(!t||t==="_self")&&!Ax(e)}const _x=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Bx="6";try{window.__reactRouterVersion=Bx}catch{}const Wx=v.createContext({isTransitioning:!1}),Ux="startTransition",Tu=D0[Ux];function Vx(e){let{basename:t,children:n,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=Hg({window:o,v5Compat:!0}));let s=i.current,[c,a]=v.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=v.useCallback(m=>{u&&Tu?Tu(()=>a(m)):a(m)},[a,u]);return v.useLayoutEffect(()=>s.listen(f),[s,f]),v.useEffect(()=>zx(r),[r]),v.createElement(Mx,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:r})}const Hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ic=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:c,target:a,to:u,preventScrollReset:f,viewTransition:m}=t,g=ih(t,_x),{basename:b}=v.useContext(wt),y,C=!1;if(typeof u=="string"&&Qx.test(u)&&(y=u,Hx))try{let x=new URL(window.location.href),j=u.startsWith("//")?new URL(x.protocol+u):new URL(u),w=Jn(j.pathname,b);j.origin===x.origin&&w!=null?u=w+j.search+j.hash:C=!0}catch{}let $=xx(u,{relative:o}),h=Gx(u,{replace:s,state:c,target:a,preventScrollReset:f,relative:o,viewTransition:m});function p(x){r&&r(x),x.defaultPrevented||h(x)}return v.createElement("a",zi({},g,{href:y||$,onClick:C||i?r:p,ref:n,target:a}))}),lh=v.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:c,to:a,viewTransition:u,children:f}=t,m=ih(t,Fx),g=il(a,{relative:m.relative}),b=st(),y=v.useContext(Zf),{navigator:C,basename:$}=v.useContext(wt),h=y!=null&&Yx(g)&&u===!0,p=C.encodeLocation?C.encodeLocation(g).pathname:g.pathname,x=b.pathname,j=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(x=x.toLowerCase(),j=j?j.toLowerCase():null,p=p.toLowerCase()),j&&$&&(j=Jn(j,$)||j);const w=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=x===p||!s&&x.startsWith(p)&&x.charAt(w)==="/",S=j!=null&&(j===p||!s&&j.startsWith(p)&&j.charAt(p.length)==="/"),k={isActive:E,isPending:S,isTransitioning:h},R=E?r:void 0,L;typeof i=="function"?L=i(k):L=[i,E?"active":null,S?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let A=typeof c=="function"?c(k):c;return v.createElement(ic,zi({},m,{"aria-current":R,className:L,ref:n,style:A,to:a,viewTransition:u}),typeof f=="function"?f(k):f)});var Ys;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ys||(Ys={}));var Lu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lu||(Lu={}));function Kx(e){let t=v.useContext(rl);return t||X(!1),t}function Gx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:c}=t===void 0?{}:t,a=lr(),u=st(),f=il(e,{relative:s});return v.useCallback(m=>{if(Ox(m,n)){m.preventDefault();let g=r!==void 0?r:Ri(u)===Ri(f);a(e,{replace:g,state:o,preventScrollReset:i,relative:s,viewTransition:c})}},[u,a,f,r,o,n,e,i,s,c])}function Yx(e,t){t===void 0&&(t={});let n=v.useContext(Wx);n==null&&X(!1);let{basename:r}=Kx(Ys.useViewTransitionState),o=il(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Jn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Jn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ks(o.pathname,s)!=null||Ks(o.pathname,i)!=null}var Q="-ms-",Ar="-moz-",B="-webkit-",sh="comm",ll="rule",lc="decl",Jx="@import",Xx="@namespace",ah="@keyframes",qx="@layer",ch=Math.abs,sc=String.fromCharCode,Js=Object.assign;function Zx(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function uh(e){return e.trim()}function ct(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function ri(e,t,n){return e.indexOf(t,n)}function ae(e,t){return e.charCodeAt(t)|0}function gn(e,t,n){return e.slice(t,n)}function Ge(e){return e.length}function dh(e){return e.length}function Cr(e,t){return t.push(e),e}function e1(e,t){return e.map(t).join("")}function Iu(e,t){return e.filter(function(n){return!ct(n,t)})}var sl=1,Xn=1,ph=0,Ve=0,oe=0,sr="";function al(e,t,n,r,o,i,s,c){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:sl,column:Xn,length:s,return:"",siblings:c}}function Et(e,t){return Js(al("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function bn(e){for(;e.root;)e=Et(e.root,{children:[e]});Cr(e,e.siblings)}function t1(){return oe}function n1(){return oe=Ve>0?ae(sr,--Ve):0,Xn--,oe===10&&(Xn=1,sl--),oe}function qe(){return oe=Ve<ph?ae(sr,Ve++):0,Xn++,oe===10&&(Xn=1,sl++),oe}function Mt(){return ae(sr,Ve)}function oi(){return Ve}function cl(e,t){return gn(sr,e,t)}function io(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r1(e){return sl=Xn=1,ph=Ge(sr=e),Ve=0,[]}function o1(e){return sr="",e}function Ul(e){return uh(cl(Ve-1,Xs(e===91?e+2:e===40?e+1:e)))}function i1(e){for(;(oe=Mt())&&oe<33;)qe();return io(e)>2||io(oe)>3?"":" "}function l1(e,t){for(;--t&&qe()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return cl(e,oi()+(t<6&&Mt()==32&&qe()==32))}function Xs(e){for(;qe();)switch(oe){case e:return Ve;case 34:case 39:e!==34&&e!==39&&Xs(oe);break;case 40:e===41&&Xs(e);break;case 92:qe();break}return Ve}function s1(e,t){for(;qe()&&e+oe!==57;)if(e+oe===84&&Mt()===47)break;return"/*"+cl(t,Ve-1)+"*"+sc(e===47?e:qe())}function a1(e){for(;!io(Mt());)qe();return cl(e,Ve)}function c1(e){return o1(ii("",null,null,null,[""],e=r1(e),0,[0],e))}function ii(e,t,n,r,o,i,s,c,a){for(var u=0,f=0,m=s,g=0,b=0,y=0,C=1,$=1,h=1,p=0,x="",j=o,w=i,E=r,S=x;$;)switch(y=p,p=qe()){case 40:if(y!=108&&ae(S,m-1)==58){ri(S+=M(Ul(p),"&","&\f"),"&\f",ch(u?c[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:S+=Ul(p);break;case 9:case 10:case 13:case 32:S+=i1(y);break;case 92:S+=l1(oi()-1,7);continue;case 47:switch(Mt()){case 42:case 47:Cr(u1(s1(qe(),oi()),t,n,a),a),(io(y||1)==5||io(Mt()||1)==5)&&Ge(S)&&gn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*C:c[u++]=Ge(S)*h;case 125*C:case 59:case 0:switch(p){case 0:case 125:$=0;case 59+f:h==-1&&(S=M(S,/\f/g,"")),b>0&&(Ge(S)-m||C===0&&y===47)&&Cr(b>32?zu(S+";",r,n,m-1,a):zu(M(S," ","")+";",r,n,m-2,a),a);break;case 59:S+=";";default:if(Cr(E=Ru(S,t,n,u,f,o,c,x,j=[],w=[],m,i),i),p===123)if(f===0)ii(S,t,E,E,j,i,m,c,w);else{switch(g){case 99:if(ae(S,3)===110)break;case 108:if(ae(S,2)===97)break;default:f=0;case 100:case 109:case 115:}f?ii(e,E,E,r&&Cr(Ru(e,E,E,0,0,o,c,x,o,j=[],m,w),w),o,w,m,c,r?j:w):ii(S,E,E,E,[""],w,0,c,w)}}u=f=b=0,C=h=1,x=S="",m=s;break;case 58:m=1+Ge(S),b=y;default:if(C<1){if(p==123)--C;else if(p==125&&C++==0&&n1()==125)continue}switch(S+=sc(p),p*C){case 38:h=f>0?1:(S+="\f",-1);break;case 44:c[u++]=(Ge(S)-1)*h,h=1;break;case 64:Mt()===45&&(S+=Ul(qe())),g=Mt(),f=m=Ge(x=S+=a1(oi())),p++;break;case 45:y===45&&Ge(S)==2&&(C=0)}}return i}function Ru(e,t,n,r,o,i,s,c,a,u,f,m){for(var g=o-1,b=o===0?i:[""],y=dh(b),C=0,$=0,h=0;C<r;++C)for(var p=0,x=gn(e,g+1,g=ch($=s[C])),j=e;p<y;++p)(j=uh($>0?b[p]+" "+x:M(x,/&\f/g,b[p])))&&(a[h++]=j);return al(e,t,n,o===0?ll:c,a,u,f,m)}function u1(e,t,n,r){return al(e,t,n,sh,sc(t1()),gn(e,2,-2),0,r)}function zu(e,t,n,r,o){return al(e,t,n,lc,gn(e,0,r),gn(e,r+1,-1),r,o)}function fh(e,t,n){switch(Zx(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return B+e+e;case 4855:return B+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ar+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Ar+e+Q+e+e;case 5936:switch(ae(e,t+11)){case 114:return B+e+Q+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Q+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Q+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+Q+e+e;case 6165:return B+e+Q+"flex-"+e+e;case 5187:return B+e+M(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return B+e+Q+"flex-item-"+M(e,/flex-|-self/g,"")+(ct(e,/flex-|baseline/)?"":Q+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return B+e+Q+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+Q+M(e,"shrink","negative")+e;case 5292:return B+e+Q+M(e,"basis","preferred-size")+e;case 6060:return B+"box-"+M(e,"-grow","")+B+e+Q+M(e,"grow","positive")+e;case 4554:return B+M(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Q+"flex-pack:$3"),/space-between/,"justify")+B+e+e;case 4200:if(!ct(e,/flex-|baseline/))return Q+"grid-column-align"+gn(e,t)+e;break;case 2592:case 3360:return Q+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ct(r.props,/grid-\w+-end/)})?~ri(e+(n=n[t].value),"span",0)?e:Q+M(e,"-start","")+e+Q+"grid-row-span:"+(~ri(n,"span",0)?ct(n,/\d+/):+ct(n,/\d+/)-+ct(e,/\d+/))+";":Q+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ct(r.props,/grid-\w+-start/)})?e:Q+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Ar+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ri(e,"stretch",0)?fh(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,c,a,u){return Q+o+":"+i+u+(s?Q+o+"-span:"+(c?a:+a-+i)+u:"")+e});case 4949:if(ae(e,t+6)===121)return M(e,":",":"+B)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ae(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Q+"$2box$3")+e;case 100:return M(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Di(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function d1(e,t,n,r){switch(e.type){case qx:if(e.children.length)break;case Jx:case Xx:case lc:return e.return=e.return||e.value;case sh:return"";case ah:return e.return=e.value+"{"+Di(e.children,r)+"}";case ll:if(!Ge(e.value=e.props.join(",")))return""}return Ge(n=Di(e.children,r))?e.return=e.value+"{"+n+"}":""}function p1(e){var t=dh(e);return function(n,r,o,i){for(var s="",c=0;c<t;c++)s+=e[c](n,r,o,i)||"";return s}}function f1(e){return function(t){t.root||(t=t.return)&&e(t)}}function h1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case lc:e.return=fh(e.value,e.length,n);return;case ah:return Di([Et(e,{value:M(e.value,"@","@"+B)})],r);case ll:if(e.length)return e1(n=e.props,function(o){switch(ct(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bn(Et(e,{props:[M(o,/:(read-\w+)/,":"+Ar+"$1")]})),bn(Et(e,{props:[o]})),Js(e,{props:Iu(n,r)});break;case"::placeholder":bn(Et(e,{props:[M(o,/:(plac\w+)/,":"+B+"input-$1")]})),bn(Et(e,{props:[M(o,/:(plac\w+)/,":"+Ar+"$1")]})),bn(Et(e,{props:[M(o,/:(plac\w+)/,Q+"input-$1")]})),bn(Et(e,{props:[o]})),Js(e,{props:Iu(n,r)});break}return""})}}var Wn={},Vl,Hl;const qn=typeof process<"u"&&Wn!==void 0&&(Wn.REACT_APP_SC_ATTR||Wn.SC_ATTR)||"data-styled",hh="active",mh="data-styled-version",ul="6.4.2",ac=`/*!sc*/
`,Or=typeof window<"u"&&typeof document<"u";function Du(e){if(typeof process<"u"&&Wn!==void 0){const t=Wn[e];if(t!==void 0&&t!=="")return t!=="false"}}const m1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Hl=(Vl=Du("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Vl!==void 0?Vl:Du("SC_DISABLE_SPEEDY"))!==null&&Hl!==void 0?Hl:typeof process<"u"&&Wn!==void 0&&!1),g1="sc-keyframes-",x1={};function Zn(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let li=new Map,Mi=new Map,si=1;const zo=e=>{if(li.has(e))return li.get(e);for(;Mi.has(si);)si++;const t=si++;return li.set(e,t),Mi.set(t,e),t},y1=e=>Mi.get(e),v1=(e,t)=>{si=t+1,li.set(e,t),Mi.set(t,e)},cc=Object.freeze([]),er=Object.freeze({});function gh(e,t,n=er){return e.theme!==n.theme&&e.theme||t||n.theme}const w1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b1=/(^-|-$)/g;function xh(e){return e.replace(w1,"-").replace(b1,"")}const k1=/(a)(d)/gi,Mu=e=>String.fromCharCode(e+(e>25?39:97));function yh(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Mu(t%52)+n;return(Mu(t%52)+n).replace(k1,"$1-$2")}const qs=5381,un=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},vh=e=>un(qs,e);function wh(e){return yh(vh(e)>>>0)}function j1(e){return e.displayName||e.name||"Component"}function Zs(e){return typeof e=="string"&&!0}function C1(e){return Zs(e)?`styled.${e}`:`Styled(${j1(e)})`}const bh=Symbol.for("react.memo"),S1=Symbol.for("react.forward_ref"),$1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},E1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P1={[S1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[bh]:kh};function Nu(e){return("type"in(t=e)&&t.type.$$typeof)===bh?kh:"$$typeof"in e?P1[e.$$typeof]:$1;var t}const T1=Object.defineProperty,L1=Object.getOwnPropertyNames,I1=Object.getOwnPropertySymbols,R1=Object.getOwnPropertyDescriptor,z1=Object.getPrototypeOf,D1=Object.prototype;function jh(e,t,n){if(typeof t!="string"){const r=z1(t);r&&r!==D1&&jh(e,r,n);const o=L1(t).concat(I1(t)),i=Nu(e),s=Nu(t);for(let c=0;c<o.length;++c){const a=o[c];if(!(a in E1||n&&n[a]||s&&a in s||i&&a in i)){const u=R1(t,a);try{T1(e,a,u)}catch{}}}}return e}function ar(e){return typeof e=="function"}const M1=Symbol.for("react.forward_ref");function uc(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===M1&&"styledComponentId"in e}function Sr(e,t){return e&&t?e+" "+t:e||t||""}function ea(e,t){return e.join("")}function lo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ta(e,t,n=!1){if(!n&&!lo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ta(e[r],t[r]);else if(lo(t))for(const r in t)e[r]=ta(e[r],t[r]);return e}function Ch(e,t){Object.defineProperty(e,"toString",{value:t})}const N1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let s=i;for(;e>=s;)if(s<<=1,s<0)throw Zn(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(let c=i;c<s;c++)this.groupSizes[c]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+ac;return t}},A1=`style[${qn}][${mh}="${ul}"]`,O1=new RegExp(`^${qn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Au=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,na=e=>{if(!e)return document;if(Au(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Au(t))return t}return document},_1=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,s=r.length;i<s;i++)(o=r[i])&&e.registerName(t,o)},F1=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ac),o=[];for(let i=0,s=r.length;i<s;i++){const c=r[i].trim();if(!c)continue;const a=c.match(O1);if(a){const u=0|parseInt(a[1],10),f=a[2];u!==0&&(v1(f,u),_1(e,f,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(c)}},Ql=e=>{const t=na(e.options.target).querySelectorAll(A1);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(qn)!==hh&&(F1(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let yr=!1;function B1(){if(yr!==!1)return yr;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return yr=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return yr=t.getAttribute("content")||void 0}return yr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Sh=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(a=>{const u=Array.from(a.querySelectorAll(`style[${qn}]`));return u[u.length-1]})(r),s=i!==void 0?i.nextSibling:null;o.setAttribute(qn,hh),o.setAttribute(mh,ul);const c=t||B1();return c&&o.setAttribute("nonce",c),r.insertBefore(o,s),o},W1=class{constructor(e,t){this.element=Sh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,s=o.length;i<s;i++){const c=o[i];if(c.ownerNode===n)return c}throw Zn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},U1=class{constructor(e,t){this.element=Sh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Ou=Or;const V1={isServer:!Or,useCSSOMInjection:!m1};class ho{static registerId(t){return zo(t)}constructor(t=er,n={},r){this.options=Object.assign(Object.assign({},V1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Or&&Ou&&(Ou=!1,Ql(this)),Ch(this,()=>(o=>{const i=o.getTag(),{length:s}=i;let c="";for(let a=0;a<s;a++){const u=y1(a);if(u===void 0)continue;const f=o.names.get(u);if(f===void 0||!f.size)continue;const m=i.getGroup(a);if(m.length===0)continue;const g=qn+".g"+a+'[id="'+u+'"]';let b="";for(const y of f)y.length>0&&(b+=y+",");c+=m+g+'{content:"'+b+'"}'+ac}return c})(this))}rehydrate(){!this.server&&Or&&Ql(this)}reconstructWithOptions(t,n=!0){const r=new ho(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Or&&t.target!==this.options.target&&na(this.options.target)!==na(t.target)&&Ql(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new W1(r,o):new U1(r,o))(this.options),new N1(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){zo(t),t.startsWith(g1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(zo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(zo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const $h=new WeakSet,H1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Q1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in H1||e.startsWith("--")?String(t).trim():t+"px"}const rn=47;function _u(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const K1=Symbol.for("sc-keyframes");function G1(e){return typeof e=="object"&&e!==null&&K1 in e}function Eh(e){return ar(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Ph=e=>e==null||e===!1||e==="",Y1=Symbol.for("react.client.reference");function Fu(e){return e.$$typeof===Y1}function Th(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Ph(r)&&(Array.isArray(r)&&$h.has(r)||ar(r)?t.push(_u(n)+":",r,";"):lo(r)?(t.push(n+" {"),Th(r,t),t.push("}")):t.push(_u(n)+": "+Q1(n,r)+";"))}}function Ht(e,t,n,r,o=[]){if(Ph(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(Fu(e))return o;if(Eh(e)&&t){const s=e(t);return Ht(s,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Ht(e[s],t,n,r,o);return o}return uc(e)?(o.push(`.${e.styledComponentId}`),o):G1(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):Fu(e)?o:lo(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Th(e,o),o):(o.push(e.toString()),o)}const J1=vh(ul);class X1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=un(J1,n),this.baseStyle=r,ho.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let s=0;s<this.rules.length;s++){const c=this.rules[s];if(typeof c=="string")i+=c;else if(c)if(Eh(c)){const a=c(t);typeof a=="string"?i+=a:a!=null&&a!==!1&&(i+=ea(Ht(a,t,n,r)))}else i+=ea(Ht(c,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+i:i;let c=this.dynamicNameCache.get(s);if(!c){if(c=yh(un(un(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(s,c)}if(!n.hasNameForId(this.componentId,c)){const a=r(i,"."+c,void 0,this.componentId);n.insertRules(this.componentId,c,a)}o=Sr(o,c)}}return o}}const q1=/&/g;function Lh(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Kl(e){const t=e.length;let n="",r=0,o=0,i=0,s=!1,c=!1;for(let a=0;a<t;a++){const u=e.charCodeAt(a);if(i!==0||s||u!==rn||e.charCodeAt(a+1)!==42)if(s)u===42&&e.charCodeAt(a+1)===rn&&(s=!1,a++);else if(u!==34&&u!==39||Lh(e,a)){if(i===0)if(u===123)o++;else if(u===125){if(o--,o<0){c=!0;let f=a+1;for(;f<t;){const m=e.charCodeAt(f);if(m===59||m===10)break;f++}f<t&&e.charCodeAt(f)===59&&f++,o=0,a=f-1,r=f;continue}o===0&&(n+=e.substring(r,a+1),r=a+1)}else u===59&&o===0&&(n+=e.substring(r,a+1),r=a+1)}else i===0?i=u:i===u&&(i=0);else s=!0,a++}return c||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function Ih(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const s=i.props,c=[];for(let a=0;a<s.length;a++)c[a]=n+s[a];i.props=c}Array.isArray(i.children)&&i.type!=="@keyframes"&&Ih(i.children,t)}return e}function Z1({options:e=er,plugins:t=cc}=er){let n,r,o;const i=(g,b,y)=>y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?`.${n}`:g,s=t.slice();s.push(g=>{g.type===ll&&g.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(q1,r).replace(o,i))}),e.prefix&&s.push(h1),s.push(d1);let c=[];const a=p1(s.concat(f1(g=>c.push(g)))),u=(g,b="",y="",C="&")=>{n=C,r=b,o=void 0;const $=function(p){const x=p.indexOf("//")!==-1,j=p.indexOf("}")!==-1;if(!x&&!j)return p;if(!x)return Kl(p);const w=p.length;let E="",S=0,k=0,R=0,L=0,A=0,Z=!1;for(;k<w;){const _=p.charCodeAt(k);if(_!==34&&_!==39||Lh(p,k))if(R===0)if(_===rn&&k+1<w&&p.charCodeAt(k+1)===42){for(k+=2;k+1<w&&(p.charCodeAt(k)!==42||p.charCodeAt(k+1)!==rn);)k++;k+=2}else if(_!==40)if(_!==41)if(L>0)k++;else if(_===42&&k+1<w&&p.charCodeAt(k+1)===rn)E+=p.substring(S,k),k+=2,S=k,Z=!0;else if(_===rn&&k+1<w&&p.charCodeAt(k+1)===rn){for(E+=p.substring(S,k);k<w&&p.charCodeAt(k)!==10;)k++;S=k,Z=!0}else _===123?A++:_===125&&A--,k++;else L>0&&L--,k++;else L++,k++;else k++;else R===0?R=_:R===_&&(R=0),k++}return Z?(S<w&&(E+=p.substring(S)),A===0?E:Kl(E)):A===0?p:Kl(p)}(g);let h=c1(y||b?y+" "+b+" { "+$+" }":$);return e.namespace&&(h=Ih(h,e.namespace)),c=[],Di(h,a),c},f=e;let m=qs;for(let g=0;g<t.length;g++)t[g].name||Zn(15),m=un(m,t[g].name);return f!=null&&f.namespace&&(m=un(m,f.namespace)),f!=null&&f.prefix&&(m=un(m,"p")),u.hash=m!==qs?m.toString():"",u}const ey=new ho,ty=Z1(),Rh=xe.createContext({shouldForwardProp:void 0,styleSheet:ey,stylis:ty,stylisPlugins:void 0});Rh.Consumer;function zh(){return xe.useContext(Rh)}const so=xe.createContext(void 0);so.Consumer;function ny(e){const t=xe.useContext(so),n=xe.useMemo(()=>function(r,o){if(!r)throw Zn(14);if(ar(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw Zn(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?xe.createElement(so.Provider,{value:n},e.children):null}const Bu=Object.prototype.hasOwnProperty,Gl={};function ry(e,t){const n=typeof e!="string"?"sc":xh(e);Gl[n]=(Gl[n]||0)+1;const r=n+"-"+wh(ul+n+Gl[n]);return t?t+"-"+r:r}function oy(e,t,n){const r=uc(e),o=e,i=!Zs(e),{attrs:s=cc,componentId:c=ry(t.displayName,t.parentComponentId),displayName:a=C1(e)}=t,u=t.displayName&&t.componentId?xh(t.displayName)+"-"+t.componentId:t.componentId||c,f=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:m}=t;if(r&&o.shouldForwardProp){const C=o.shouldForwardProp;if(t.shouldForwardProp){const $=t.shouldForwardProp;m=(h,p)=>C(h,p)&&$(h,p)}else m=C}const g=new X1(n,u,r?o.componentStyle:void 0);function b(C,$){return function(h,p,x){const{attrs:j,componentStyle:w,defaultProps:E,foldedComponentIds:S,styledComponentId:k,target:R}=h,L=xe.useContext(so),A=zh(),Z=h.shouldForwardProp||A.shouldForwardProp,_=gh(p,L,E)||er;let Ce,Xt;{const z=xe.useRef(null),D=z.current;if(D!==null&&D[1]===_&&D[2]===A.styleSheet&&D[3]===A.stylis&&D[7]===w&&function(U,F,le){const ee=U,re=F;let Le=0;for(const Ae in re)if(Bu.call(re,Ae)&&(Le++,ee[Ae]!==re[Ae]))return!1;return Le===le}(D[0],p,D[4]))Ce=D[5],Xt=D[6];else{Ce=function(F,le,ee){const re=Object.assign(Object.assign({},le),{className:void 0,theme:ee}),Le=F.length>1;for(let Ae=0;Ae<F.length;Ae++){const ml=F[Ae],mo=ar(ml)?ml(Le?Object.assign({},re):re):ml;for(const jt in mo)jt==="className"?re.className=Sr(re.className,mo[jt]):jt==="style"?re.style=Object.assign(Object.assign({},re.style),mo[jt]):jt in le&&le[jt]===void 0||(re[jt]=mo[jt])}return"className"in le&&typeof le.className=="string"&&(re.className=Sr(re.className,le.className)),re}(j,p,_),Xt=function(F,le,ee,re){return F.generateAndInjectStyles(le,ee,re)}(w,Ce,A.styleSheet,A.stylis);let U=0;for(const F in p)Bu.call(p,F)&&U++;z.current=[p,_,A.styleSheet,A.stylis,U,Ce,Xt,w]}}const kt=Ce.as||R,qt=function(z,D,U,F){const le={};for(const ee in z)z[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&z.theme===U||(ee==="forwardedAs"?le.as=z.forwardedAs:F&&!F(ee,D)||(le[ee]=z[ee]));return le}(Ce,kt,_,Z);let T=Sr(S,k);return Xt&&(T+=" "+Xt),Ce.className&&(T+=" "+Ce.className),qt[Zs(kt)&&kt.includes("-")?"class":"className"]=T,x&&(qt.ref=x),v.createElement(kt,qt)}(y,C,$)}b.displayName=a;let y=xe.forwardRef(b);return y.attrs=f,y.componentStyle=g,y.displayName=a,y.shouldForwardProp=m,y.foldedComponentIds=r?Sr(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=u,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=r?function($,...h){for(const p of h)ta($,p,!0);return $}({},o.defaultProps,C):C}}),Ch(y,()=>`.${y.styledComponentId}`),i&&jh(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}var iy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Wu(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const Uu=e=>($h.add(e),e);function Dh(e,...t){if(ar(e)||lo(e))return Uu(Ht(Wu(cc,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ht(n):Uu(Ht(Wu(n,t)))}function ra(e,t,n=er){if(!t)throw Zn(1,t);const r=(o,...i)=>e(t,n,Dh(o,...i));return r.attrs=o=>ra(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>ra(e,t,Object.assign(Object.assign({},n),o)),r}const Mh=e=>ra(oy,e),d=Mh;iy.forEach(e=>{d[e]=Mh(e)});class ly{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(ar(i)&&!uc(i))return!1}return!0}(t),ho.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const c=this.computeRules(t,n,r,o);r.insertRules(i,c.name,c.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&s){const c=s.rules,a=this.instanceRules.get(t).rules;if(c.length===a.length){let u=!0;for(let f=0;f<c.length;f++)if(c[f]!==a[f]){u=!1;break}if(u)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=ea(Ht(this.rules,n,r,o)),s={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function sy(e,...t){const n=Dh(e,...t),r=`sc-global-${wh(JSON.stringify(n))}`,o=new ly(n,r),i=c=>{const a=zh(),u=xe.useContext(so);let f;{const m=xe.useRef(null);m.current===null&&(m.current=a.styleSheet.allocateGSInstance(r)),f=m.current}a.styleSheet.server&&s(f,c,a.styleSheet,u,a.stylis);{const m=o.isStatic?[f,a.styleSheet,o]:[f,c,a.styleSheet,u,a.stylis,o],g=xe.useRef(o);xe.useLayoutEffect(()=>{a.styleSheet.server||(g.current!==o&&(a.styleSheet.clearRules(r),g.current=o),s(f,c,a.styleSheet,u,a.stylis))},m),xe.useLayoutEffect(()=>()=>{a.styleSheet.server||o.removeStyles(f,a.styleSheet)},[f,a.styleSheet,o])}return a.styleSheet.server&&o.instanceRules.delete(f),null};function s(c,a,u,f,m){if(o.isStatic)o.renderStyles(c,x1,u,m);else{const g=Object.assign(Object.assign({},a),{theme:gh(a,f,i.defaultProps)});o.renderStyles(c,g,u,m)}}return xe.memo(i)}const ay={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},Vu=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),cy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),uy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),dy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),py=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),fy=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),hy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),my=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),gy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),l.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Nh=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),Ah=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),xy=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),yy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),l.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),vy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),wy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Oh=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Ni=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Hu=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),_r=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),_h=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),oa=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),by=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ai=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),ky=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),jy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),Cy=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Qu=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Oi=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),Sy=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),$y=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Ku=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),l.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),Fh=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ey=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),l.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),Py=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Ty=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M11 4h5v5M16 4l-8 8M8 6H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Bh=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M10 5C8.5 3.5 6 3 3 3v12c3 0 5.5.5 7 2 1.5-1.5 4-2 7-2V3c-3 0-5.5.5-7 2z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 5v12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]});function xn(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return l.jsx(Vu,{...r});case"settings":return l.jsx(cy,{...r});case"shield":return l.jsx(uy,{...r});case"hierarchy":return l.jsx(dy,{...r});case"cycle":return l.jsx(py,{...r});case"code":return l.jsx(fy,{...r});case"globe":return l.jsx(hy,{...r});case"document":return l.jsx(my,{...r});case"mobile":return l.jsx(gy,{...r});case"sparkle":return l.jsx(Nh,{...r});case"envelope":return l.jsx(Ah,{...r});case"key":return l.jsx(by,{...r});case"atom":return l.jsx(jy,{...r});default:return l.jsx(Vu,{...r})}}const Wh=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],Uh=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents",iconType:"sparkle"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],kn=e=>[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],nn={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"Inventory",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"Automation",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"Integrations",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"Release security",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"Signing",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"Integrations",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"Manage CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"Revocation & validation",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"Configuration",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:kn("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:kn("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:kn("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:kn("device-trust")},"ai-agents":{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents navigation",sections:kn("ai-agents")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:kn("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing and subscriptions",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]},{title:"Self-service",isSelfService:!0,isNavParent:!0,defaultExpanded:!0,items:[{label:"Receipts and invoices",route:"/settings/billing/receipts"},{label:"Payment details",route:"/settings/billing/payment-details"}]},{title:"DigiCert products",isNavParent:!0,defaultExpanded:!0,items:[{label:"All products",route:"/settings/billing/all-products"},{label:"CertCentral",route:"/certcentral"},{label:"Content Trust",route:"/content-trust"},{label:"Device Trust",route:"/device-trust"},{label:"DigiCert DNS",route:"/dns"},{label:"Private CA",route:"/private-ca"},{label:"Software Trust",route:"/software-trust"},{label:"Trust Lifecycle",route:"/trust-lifecycle"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},Ly={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/ai-agents":"AI Agents","/ai-agents/dashboard":"Dashboard","/ai-agents/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/billing/all-products":"Explore DigiCert products","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},Iy=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],Ry=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],zy=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],Dy=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/ai-agents","/ai-agents/dashboard","/ai-agents/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/billing/all-products","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],My=d.div`
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
`,Ny=d.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,Gu=d.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Yu=d.a`
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
`;function Ay({onClose:e,onSelectProduct:t}){const n=lr(),r=o=>{t(o.productId),n(o.route),e()};return l.jsxs(My,{role:"menu","aria-label":"Settings menu",children:[l.jsx(Ny,{children:"Settings"}),l.jsx(Gu,{}),Iy.map(o=>l.jsx(Yu,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route)),l.jsx(Gu,{}),Ry.map(o=>l.jsx(Yu,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route))]})}const Oy=d.div`
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
`,_y=d.div`
  padding: 4px 0;
`,Fy=d.a`
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
`;function By({onClose:e}){return l.jsx(Oy,{role:"menu","aria-label":"Help menu",children:l.jsx(_y,{children:zy.map(t=>l.jsx(Fy,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const Wy=d.div`
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
`,Uy=d.div`
  padding: 12px 16px;
`,Vy=d.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Hy=d.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,Ju=d.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Qy=d.div`
  padding: 4px 0;
`,Xu=d.a`
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
`;function Ky({onClose:e,onSelectProduct:t}){const n=lr(),r=o=>{o.preventDefault(),t("profile"),n("/profile"),e()};return l.jsxs(Wy,{role:"menu","aria-label":"User profile menu",children:[l.jsxs(Uy,{children:[l.jsx(Vy,{children:"Deepika Chauhan"}),l.jsx(Hy,{children:"deepika.chauhan@digicert.com"})]}),l.jsx(Ju,{}),l.jsxs(Qy,{children:[l.jsx(Xu,{href:"/profile",role:"menuitem",onClick:r,children:"My profile"}),l.jsx(Ju,{}),l.jsx(Xu,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const Gy=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,Yy=d.div`
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
`,Jy=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Xy=d.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,qy=d.button`
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
`,Zy=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,ev=d.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`,tv=d.button`
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
`;function nv({open:e,onClose:t}){const n=v.useRef(null),r=v.useRef(null);return v.useEffect(()=>{var i;if(!e)return;(i=n.current)==null||i.focus();const o=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const c=r.current;if(!c)return;const a=c.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),u=a[0],f=a[a.length-1];s.shiftKey&&document.activeElement===u?(s.preventDefault(),f.focus()):!s.shiftKey&&document.activeElement===f&&(s.preventDefault(),u.focus())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),l.jsxs(l.Fragment,{children:[l.jsx(Gy,{$open:e,onClick:t,"aria-hidden":"true"}),l.jsxs(Yy,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[l.jsxs(Jy,{children:[l.jsx(Xy,{id:"cart-heading",children:"Cart"}),l.jsx(qy,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),l.jsxs(Zy,{children:[l.jsx(ev,{children:"Your cart is empty."}),l.jsx(tv,{onClick:t,children:"Continue shopping"})]})]})]})}const rv=d.div`
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
`,ov=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,iv=d.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,lv=d.button`
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
`,sv=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`,av=d.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
`,cv=d.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,uv=d.input`
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
`,dv=d.button`
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
`;function pv({open:e,onClose:t}){const n=v.useRef(null);return v.useEffect(()=>{const r=o=>{o.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),l.jsxs(rv,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[l.jsxs(ov,{children:[l.jsx(iv,{children:"AI Assist"}),l.jsx(lv,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),l.jsxs(sv,{children:[l.jsx(av,{children:"How can I help you today?"}),l.jsxs(cv,{children:[l.jsx(uv,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),l.jsx(dv,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const fv=d.header`
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
`,hv=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,mv=d.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,gv=d.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,xv=d.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 18px;
  color: ${({theme:e})=>e.colors.white};
  letter-spacing: 0.02em;
  user-select: none;

  .logo-bold { font-weight: 700; }
  .logo-normal { font-weight: 400; }
`,vr=d.button`
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
`,yv=d.span`
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
`,vv=d.button`
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
`,Do=d.div`
  position: relative;
  display: flex;
  align-items: center;
`,wv=d.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function bv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:o,onSelectProduct:i,cartCount:s=3}){const c=n==="settings"||n==="help"||n==="profile";return l.jsxs(l.Fragment,{children:[l.jsxs(fv,{role:"banner",children:[l.jsxs(hv,{children:[l.jsx(gv,{children:l.jsx(vr,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:l.jsx(Oh,{size:20})})}),l.jsxs(xv,{"aria-label":"DigiCert ONE",children:[l.jsx("span",{className:"logo-normal",children:"digicert "}),l.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),l.jsxs(mv,{children:[l.jsx(Do,{children:l.jsxs(vr,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[l.jsx(yy,{size:20}),s>0&&l.jsx(yv,{"aria-hidden":"true",children:s})]})}),l.jsxs(Do,{children:[l.jsx(vr,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:l.jsx(wy,{size:20})}),n==="settings"&&l.jsx(Ay,{onClose:o,onSelectProduct:i})]}),l.jsxs(Do,{children:[l.jsx(vr,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:l.jsx(vy,{size:20})}),n==="help"&&l.jsx(By,{onClose:o})]}),l.jsx(vr,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:l.jsx(Nh,{size:20})}),l.jsxs(Do,{children:[l.jsx(vv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&l.jsx(Ky,{onClose:o,onSelectProduct:i})]})]})]}),c&&l.jsx(wv,{onClick:o,"aria-hidden":"true"}),l.jsx(nv,{open:n==="cart",onClose:o}),l.jsx(pv,{open:n==="ai-assist",onClose:o})]})}const kv=d.nav`
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
`,qu=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,jv=d.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,Cv=d.button`
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
`,Sv=d.span`
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
`,$v=350;function Zu({product:e,isActive:t,onSelect:n}){const r=lr(),o=v.useRef(null),i=v.useRef(null),[s,c]=v.useState({visible:!1,y:0});v.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const a=()=>{var y;const b=(y=o.current)==null?void 0:y.getBoundingClientRect();return b?b.top+b.height/2:0},u=b=>{i.current&&(clearTimeout(i.current),i.current=null),b?c({visible:!0,y:a()}):i.current=setTimeout(()=>c({visible:!0,y:a()}),$v)},f=()=>{i.current&&(clearTimeout(i.current),i.current=null),c(b=>({...b,visible:!1}))},m=()=>{f(),n(e.id),r(e.route)},g=b=>{if(b.key==="Escape"){f();return}(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),m())};return l.jsxs(l.Fragment,{children:[l.jsx(Cv,{ref:o,$active:t,onClick:m,onKeyDown:g,onMouseEnter:()=>u(!1),onMouseLeave:f,onFocus:()=>u(!0),onBlur:f,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:xn(e.iconType,20,t?"#111827":"#6B7280")}),Kf.createPortal(l.jsx(Sv,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function Ev({activeProductId:e,onSelectProduct:t}){return l.jsxs(kv,{"aria-label":"Product navigation",children:[l.jsx(qu,{children:Wh.map(n=>l.jsx(Zu,{product:n,isActive:e===n.id,onSelect:t},n.id))}),l.jsx(jv,{}),l.jsx(qu,{children:Uh.map(n=>l.jsx(Zu,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const Pv=d.div`
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
`,Tv=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,Lv=d.div`
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
`,Iv=d.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,Rv=d.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,zv=d.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,Dv=d.button`
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
`,Mv=d.div`
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
`,Nv=d.div`
  margin-bottom: 2px;
`,Av=d.button`
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
`,Ov=d.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,_v=d(lh)`
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
`;function Fv({section:e,index:t}){const[n,r]=v.useState(e.defaultExpanded??t===0),o=st(),i=!!e.title,s=!!e.isNavParent,c=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return l.jsxs(Nv,{children:[l.jsxs(Av,{$hasTitle:i,$isNavParent:s,onClick:()=>r(a=>!a),"aria-expanded":n,"aria-controls":c,children:[l.jsx("span",{children:e.title}),n?l.jsx(_h,{size:12,color:"currentColor"}):l.jsx(_r,{size:12,color:"currentColor"})]}),l.jsx(Ov,{id:c,$open:n||!i,children:e.items.map(a=>l.jsx(_v,{to:a.route,end:!0,$indent:s,"aria-current":o.pathname===a.route?"page":void 0,children:a.label},a.route))})]})}function Bv({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r}){let o=nn[e];return e==="settings-billing"&&r==="enterprise"&&(o={...o,sections:o.sections.filter(i=>!i.isSelfService)}),v.useEffect(()=>{const i=s=>{s.key==="Escape"&&t&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[t,n]),l.jsxs(l.Fragment,{children:[l.jsx(Mv,{$visible:t,onClick:n,"aria-hidden":"true"}),l.jsxs(Pv,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[l.jsx(Tv,{children:l.jsx(Lv,{$open:t,children:o&&l.jsxs(l.Fragment,{children:[l.jsx(Iv,{children:l.jsx(Rv,{children:o.label})}),l.jsx(zv,{children:l.jsx("nav",{"aria-label":"Product navigation",children:o.sections.map((i,s)=>l.jsx(Fv,{section:i,index:s},i.title||s))})})]})})}),l.jsx(Dv,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:l.jsx(Ni,{size:14,color:"currentColor"})})]})]})}const Wv=d.div`
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
`,Uv=d.div`
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
`,Vv=d.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({$offset:e})=>e}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`,ed=d.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`,td=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`,nd=d.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Yl=d.button`
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
`,rd=d.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`,od=d.div`
  display: flex;
  flex-direction: column;
`,Hv=d.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`,id=d.button`
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
`,ld=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Qv=d.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,Kv=d(lh)`
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
`;function Gv({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const o=lr(),i=st(),s=v.useRef(null),c=v.useRef(null),[a,u]=v.useState("l1"),[f,m]=v.useState(null),g=v.useRef(0),b=v.useRef(0);v.useEffect(()=>{e||(u("l1"),m(null))},[e]),v.useEffect(()=>{const w=s.current;w&&(e?w.removeAttribute("inert"):w.setAttribute("inert",""))},[e]),v.useEffect(()=>{if(!e)return;const w=setTimeout(()=>{var E,S;(S=(E=s.current)==null?void 0:E.querySelector("button"))==null||S.focus()},50);return()=>clearTimeout(w)},[e]),v.useEffect(()=>{if(!e)return;const w=E=>{if(E.key==="Escape"){r();return}if(E.key!=="Tab")return;const S=s.current;if(!S)return;const k=S.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),R=k[0],L=k[k.length-1];E.shiftKey&&document.activeElement===R?(E.preventDefault(),L.focus()):!E.shiftKey&&document.activeElement===L&&(E.preventDefault(),R.focus())};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[e,r]);const y=w=>{m(w),u("l2"),setTimeout(()=>{var E;(E=c.current)==null||E.focus()},50)},C=()=>{u("l1")},$=w=>{!!nn[w.id]?y(w.id):(n(w.id),o(w.route),r())},h=()=>{r()},p=w=>{g.current=w.touches[0].clientX,b.current=w.touches[0].clientY},x=w=>{const E=w.changedTouches[0].clientX-g.current,S=Math.abs(w.changedTouches[0].clientY-b.current);E<-80&&S<60&&r()},j=f?nn[f]:null;return l.jsxs(l.Fragment,{children:[l.jsx(Wv,{$open:e,onClick:r,"aria-hidden":"true"}),l.jsx(Uv,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:p,onTouchEnd:x,children:l.jsxs(Vv,{$offset:a==="l1"?0:-50,children:[l.jsxs(ed,{"aria-hidden":a!=="l1",children:[l.jsxs(td,{children:[l.jsx(nd,{children:"Navigation"}),l.jsx(Yl,{onClick:r,"aria-label":"Close menu",children:l.jsx(oa,{size:16,color:"currentColor"})})]}),l.jsx(rd,{children:l.jsxs("nav",{"aria-label":"Product list",children:[l.jsx(od,{children:Wh.map(w=>l.jsxs(id,{$active:t===w.id,onClick:()=>$(w),"aria-current":t===w.id?"page":void 0,"aria-haspopup":nn[w.id]?"menu":void 0,children:[xn(w.iconType,18,t===w.id?"#1976D2":"#6B7280"),l.jsx(ld,{children:w.label}),nn[w.id]&&l.jsx(Hu,{size:14,color:t===w.id?"#1976D2":"#9CA3AF"})]},w.id))}),l.jsx(Hv,{}),l.jsx(od,{children:Uh.map(w=>l.jsxs(id,{$active:t===w.id,onClick:()=>$(w),"aria-current":t===w.id?"page":void 0,"aria-haspopup":nn[w.id]?"menu":void 0,children:[xn(w.iconType,18,t===w.id?"#1976D2":"#6B7280"),l.jsx(ld,{children:w.label}),nn[w.id]&&l.jsx(Hu,{size:14,color:t===w.id?"#1976D2":"#9CA3AF"})]},w.id))})]})})]}),l.jsxs(ed,{ref:c,"aria-hidden":a!=="l2",children:[l.jsxs(td,{children:[l.jsx(Yl,{onClick:C,"aria-label":"Back to menu",children:l.jsx(Ni,{size:16,color:"currentColor"})}),l.jsx(nd,{children:(j==null?void 0:j.label)??""}),l.jsx(Yl,{onClick:r,"aria-label":"Close menu",children:l.jsx(oa,{size:16,color:"currentColor"})})]}),l.jsx(rd,{children:j&&l.jsx("nav",{"aria-label":`${j.label} navigation`,children:j.sections.map((w,E)=>l.jsxs("div",{children:[w.title&&l.jsx(Qv,{children:w.title}),w.items.map(S=>l.jsx(Kv,{to:S.route,end:!0,"aria-current":i.pathname===S.route?"page":void 0,onClick:h,children:S.label},S.route))]},w.title||E))})})]})]})})]})}const Yv=d.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,Jv=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,Xv=d.div``,qv=d.h1`
  margin: 0 0 6px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.neutral900};
`,Zv=d.p`
  margin: 0;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral600};
`,e2=d.button`
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
`,t2=d.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,n2=d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,r2=d.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px 24px;
`,o2=d.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`,i2=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.neutral500};
`,l2=d.div`
  min-width: 0;
`,s2=d.h3`
  margin: 0 0 3px;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 600;
`,a2=d.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
`,c2=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,u2=d.a`
  display: block;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,d2=d.div`
  display: grid;
  gap: 16px;
`,p2=d.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,f2=d.div`
  width: 100%;
  min-height: 180px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
`,h2=d.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`,m2=d.div`
  padding: 16px 20px 20px;
`,g2=d.div`
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
`,x2=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 10px;
`,y2=d.h3`
  margin: 0 0 8px;
  font-size: 17px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,v2=d.p`
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,w2=d.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;

  &:hover { text-decoration: underline; }
`,b2=d.article`
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,k2=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,j2=d.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(0, 155, 135, 0.45);
  color: #007B6E;
  letter-spacing: 0.02em;
`,C2=d.button`
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
`,S2=d.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,$2=d.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,E2=d.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,P2=[{title:"Trust Lifecycle",subtitle:"Certificate management",iconType:"cycle",actions:[{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Automate certificate lifecycle",href:"/trust-lifecycle/tools"}]},{title:"Valimail",subtitle:"Email authentication",iconType:"envelope",actions:[{label:"Review DMARC status",href:"/valimail/dashboard"},{label:"Manage sender sources",href:"/valimail/dashboard"},{label:"Monitor domains",href:"/valimail/dashboard"},{label:"Investigate spoofing risks",href:"/valimail/dashboard"}]},{title:"Quantum Central",subtitle:"Post-quantum readiness",iconType:"settings",actions:[{label:"Assess cryptographic risk",href:"/quantum-central/dashboard"},{label:"Review PQC readiness",href:"/quantum-central/dashboard"},{label:"View algorithm inventory",href:"/quantum-central/dashboard"},{label:"Track remediation",href:"/quantum-central/dashboard"}]},{title:"AI Agents",subtitle:"AI identity & governance",iconType:"sparkle",actions:[{label:"Register agents",href:"/ai-agents/dashboard"},{label:"Manage agent identities",href:"/ai-agents/dashboard"},{label:"Review agent activity",href:"/ai-agents/dashboard"},{label:"Configure trust policies",href:"/ai-agents/dashboard"}]},{title:"Device Trust",subtitle:"IoT device security",iconType:"mobile",actions:[{label:"Register devices",href:"/device-trust/dashboard"},{label:"Manage device identities",href:"/device-trust/dashboard"},{label:"Configure device policies",href:"/device-trust/dashboard"},{label:"Review device lifecycle",href:"/device-trust/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",iconType:"hierarchy",actions:[{label:"Issue internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage certificate profiles",href:"/private-ca/certificate-profiles"},{label:"Configure OCSP",href:"/private-ca/ocsps"}]},{title:"Software Trust",subtitle:"Code signing",iconType:"code",actions:[{label:"Manage signing keys",href:"/software-trust/dashboard"},{label:"Configure signing policies",href:"/software-trust/dashboard"},{label:"Sign software",href:"/software-trust/dashboard"},{label:"Generate SBOM",href:"/software-trust/dashboard"}]},{title:"DNS Trust",subtitle:"DNS management",iconType:"globe",actions:[{label:"Manage zones",href:"/dns/dashboard"},{label:"Update DNS records",href:"/dns/dashboard"},{label:"Configure traffic steering",href:"/dns/dashboard"},{label:"Review DNSSEC settings",href:"/dns/dashboard"}]},{title:"Content Trust",subtitle:"Document & content signing",iconType:"document",actions:[{label:"Manage signing credentials",href:"/content-trust/dashboard"},{label:"Verify signed content",href:"/content-trust/dashboard"},{label:"Review signing activity",href:"/content-trust/dashboard"},{label:"Configure seal policies",href:"/content-trust/dashboard"}]},{title:"CertCentral",subtitle:"Public certificates",iconType:"shield",actions:[{label:"Order public certificate",href:"/certcentral/dashboard"},{label:"Validate domains",href:"/certcentral/dashboard"},{label:"Manage organizations",href:"/certcentral/dashboard"},{label:"Expiring certificates",href:"/certcentral/inventory"}]}];function T2(){const[e,t]=v.useState(!1);return l.jsxs(Yv,{children:[l.jsxs(Jv,{children:[l.jsxs(Xv,{children:[l.jsx(qv,{children:"Hello, John"}),l.jsx(Zv,{children:"Access your DigiCert trust solutions and discover what's new"})]}),l.jsx(e2,{"aria-label":"Page settings",children:l.jsx(Oh,{size:18,color:"currentColor"})})]}),l.jsxs(t2,{children:[l.jsx(n2,{children:P2.map(n=>l.jsxs(r2,{children:[l.jsxs(o2,{children:[l.jsx(i2,{children:xn(n.iconType,20,"currentColor")}),l.jsxs(l2,{children:[l.jsx(s2,{children:n.title}),l.jsx(a2,{children:n.subtitle})]})]}),l.jsx(c2,{children:n.actions.map(r=>l.jsx("li",{children:l.jsx(u2,{href:r.href,children:r.label})},r.label))})]},n.title))}),l.jsxs(d2,{children:[l.jsxs(p2,{children:[l.jsx(f2,{children:l.jsx(h2,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),l.jsxs(m2,{children:[l.jsx(g2,{children:"Certificate lifecycle"}),l.jsxs(x2,{children:[l.jsx("span",{children:"Brian Trzupek · 5 min read"}),l.jsx("span",{children:"digicert.com/blog"})]}),l.jsx(y2,{children:"Certificate lifecycle management reaches an inflection point"}),l.jsx(v2,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),l.jsx(w2,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&l.jsxs(b2,{children:[l.jsxs(k2,{children:[l.jsx(j2,{children:"Software Trust Manager"}),l.jsx(C2,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:l.jsx(oa,{size:14,color:"currentColor"})})]}),l.jsx(S2,{children:"Centralize code-signing at scale"}),l.jsx($2,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),l.jsx(E2,{href:"/software-trust/dashboard",children:"Explore STM →"})]})]})]})]})}const L2=d.main`
  padding: 24px;
`,I2=d.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,sd=d.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function ad(){const e=st(),t=Ly[e.pathname]??e.pathname;return v.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),l.jsxs(L2,{children:[l.jsx(I2,{children:t}),e.pathname==="/profile"&&l.jsx(sd,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),l.jsxs(sd,{children:["This is a stub page for ",l.jsx("code",{children:e.pathname})]})]})}const Vh={enterprise:{label:"Enterprise plan",description:"Billed and managed directly through your DigiCert account team. Contract terms, renewals, and invoicing are handled by your account manager, so no self-service payment actions are needed here."},ecommerce:{label:"E-commerce plan",description:"A self-service subscription billed automatically to the payment method on file. Manage your plan, payment details, and receipts at any time from this account."}},ut={name:"Sarah Mitchell",title:"Enterprise Account Manager, DigiCert",email:"sarah.mitchell@digicert.com",phone:"+1 (801) 555-0142"},R2=[{id:"document-trust",name:"Document Trust",iconType:"document",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800},{name:"Users",purchased:500,allocated:420,consumed:390,remaining:110},{name:"Identity verifications",purchased:1e3,allocated:1e3,consumed:760,remaining:240}]},{id:"software-trust",name:"Software Trust",iconType:"code",contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Code signing certificates",consumed:42,total:50},entitlements:[{name:"Code signing certificates",purchased:50,allocated:50,consumed:42,remaining:8},{name:"Signing keys",purchased:20,allocated:18,consumed:15,remaining:5},{name:"Signing events",purchased:1e4,allocated:1e4,consumed:7400,remaining:2600},{name:"HSM partitions",purchased:4,allocated:4,consumed:3,remaining:1}]},{id:"trust-lifecycle",name:"Trust Lifecycle Manager",iconType:"cycle",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Managed certificates",consumed:1120,total:2e3},entitlements:[{name:"Managed certificates",purchased:2e3,allocated:2e3,consumed:1120,remaining:880},{name:"Seats",purchased:75,allocated:75,consumed:25,remaining:50},{name:"Discovery scans / month",purchased:100,allocated:100,consumed:64,remaining:36}]},{id:"dns",name:"DigiCert DNS",iconType:"globe",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]},{id:"device-trust",name:"Device Trust",iconType:"mobile",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Device certificates",consumed:45e3,total:1e5},entitlements:[{name:"Device certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Device groups",purchased:50,allocated:50,consumed:32,remaining:18},{name:"API calls / month",purchased:1e6,allocated:1e6,consumed:62e4,remaining:38e4}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private CA hierarchies",consumed:9,total:10},entitlements:[{name:"Private CA hierarchies",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Issued certificates",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500},{name:"Sub-CAs",purchased:25,allocated:25,consumed:20,remaining:5}]},{id:"valimail",name:"Valimail",iconType:"envelope",contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Protected domains",consumed:18,total:25},entitlements:[{name:"Protected domains",purchased:25,allocated:25,consumed:18,remaining:7},{name:"Email senders monitored",purchased:500,allocated:500,consumed:410,remaining:90},{name:"DMARC reports / month",purchased:1e5,allocated:1e5,consumed:72e3,remaining:28e3}]},{id:"ai-agents",name:"AI Agents",iconType:"sparkle",contractId:"CTR-2024-AIA-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"AI Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"Agent executions / month",consumed:132e3,total:1e5},entitlements:[{name:"Agent executions / month",purchased:1e5,allocated:1e5,consumed:132e3,remaining:-32e3},{name:"Active agents",purchased:10,allocated:10,consumed:8,remaining:2},{name:"Workflow integrations",purchased:15,allocated:15,consumed:11,remaining:4}]},{id:"quantum-central",name:"Quantum Central",iconType:"atom",contractId:"CTR-2024-QC-00005",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]}],Mo=[{accountId:"acme-global-security",displayAccountId:"1001445",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"peak-usage",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4}],peakUsageData:{periodPeakDate:"Aug 14, 2025",monthLabels:["Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Mar 26","Apr 26","May 26","Jun 26"],series:[{name:"SSL/TLS certificates",color:"#4B91D6",currentActive:108,periodPeak:128,periodPeakDate:"Aug 14, 2025",monthly:[90,110,128,122,115,108,100,96,92,98,104,110,108],monthlyCost:[72e3,88e3,102400,97600,92e3,86400,8e4,76800,73600,78400,83200,88e3,86400]},{name:"Code signing",color:"#F59E0B",currentActive:16,periodPeak:22,periodPeakDate:"Sep 3, 2025",monthly:[10,14,18,22,20,18,16,15,14,15,16,16,16],monthlyCost:[6e3,8400,10800,13200,12e3,10800,9600,9e3,8400,9e3,9600,9600,9600]},{name:"S/MIME certificates",color:"#10B981",currentActive:140,periodPeak:180,periodPeakDate:"Oct 12, 2025",monthly:[120,138,155,168,180,174,162,152,148,152,158,145,140],monthlyCost:[24e3,27600,31e3,33600,36e3,34800,32400,30400,29600,30400,31600,29e3,28e3]},{name:"Document signing",color:"#8B5CF6",currentActive:5,periodPeak:8,periodPeakDate:"Nov 5, 2025",monthly:[2,3,4,5,7,8,7,6,5,5,5,5,5],monthlyCost:[1e3,1500,2e3,2500,3500,4e3,3500,3e3,2500,2500,2500,2500,2500]}]}},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",displayAccountId:"2003891",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",displayAccountId:"3007234",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-enterprise",displayAccountId:"5001298",accountName:"ACME Enterprise",enterpriseInstance:{instanceId:"acme-enterprise-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"drawdown",contractId:"CTR-2024-CC-00214",contractTerm:"Nov 1, 2025 – Oct 31, 2026",contractOwner:"Enterprise IT",renewalDate:"Oct 31, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:55,total:120},entitlements:[{name:"SSL/TLS certificates",purchased:120,allocated:120,consumed:55,remaining:65},{name:"Code signing certificates",purchased:40,allocated:40,consumed:18,remaining:22},{name:"S/MIME certificates",purchased:300,allocated:300,consumed:210,remaining:90},{name:"Document signing certificates",purchased:20,allocated:20,consumed:7,remaining:13}]}}],z2=["over-entitlement","approaching-limit","no-data","healthy"];function D2(e){return z2.find(t=>e.includes(t))||"healthy"}function M2(e){const{id:t,name:n,iconType:r,...o}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:o.renewalDate,status:o.status,primaryEntitlement:o.primaryEntitlement,entitlements:o.entitlements,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...o}]}}function No(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(i=>i.subscriptionType))],o=[...new Set(n.map(i=>i.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountId:e.displayAccountId,accountName:e.accountName,subscriptionTypes:r,renewalDate:o.length===1?o[0]:"Varies by instance",status:D2(n.map(i=>i.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const N2=R2.map(M2);function Hh(){const e=[No(Mo[0],["enterprise"]),No(Mo[1],["enterprise"]),No(Mo[2],["ecommerce"]),No(Mo[3],["enterprise"])];return[...N2,...e]}function A2(e){const t=e.filter(a=>a.id.startsWith("certcentral-")).length,n=e.length-t,r=[...new Set(e.map(a=>a.renewalDate))],o=e.length?e[0].renewalDate:"—",i=e.filter(a=>a.status==="approaching-limit").length,s=e.filter(a=>a.status==="over-entitlement").length,c=i+s;return{productCount:n,certCentralCount:t,earliestRenewal:o,renewalDatesCount:r.length,approaching:i,over:s,needsAttention:c}}function O2(e){const t=new Set;return e.forEach(n=>n.subscriptionTypes.forEach(r=>t.add(r))),t.has("enterprise")&&t.has("ecommerce")?{label:"Enterprise + E-commerce",sub:"Mixed billing across subscriptions"}:t.has("ecommerce")?{label:"E-commerce subscription",sub:"Self-service billing"}:{label:"Enterprise contract",sub:"Managed by your account team"}}const _2=d.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,F2=d.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function B2({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return l.jsx(_2,{role:"presentation",children:l.jsx(F2,{$pct:n})})}const Qh=d(ic)`
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
`,Kh=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Gh=d.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`,Yh=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Jh=d.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Xh=d.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,qh=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Zh=d.span`
  flex-shrink: 0;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  background: rgba(39, 168, 114, 0.10);
  color: #1F8F60;
`,e0=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,W2=d.div`
  position: relative;
  flex-shrink: 0;
`,U2=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1.5px solid ${({theme:e})=>e.colors.blue300};
  border-radius: 6px;
  background: transparent;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.12s;

  &:hover { background: rgba(1,116,195,0.06); }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,V2=d.div`
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
`,H2=d.button`
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
`;function t0({items:e}){const[t,n]=v.useState(!1),r=v.useRef(null);return v.useEffect(()=>{if(!t)return;const o=s=>{r.current&&!r.current.contains(s.target)&&n(!1)},i=s=>{s.key==="Escape"&&n(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",i),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",i)}},[t]),l.jsxs(W2,{ref:r,children:[l.jsx(U2,{type:"button",onClick:o=>{o.preventDefault(),o.stopPropagation(),n(i=>!i)},"aria-label":"More actions","aria-expanded":t,children:l.jsx(Oi,{size:14,color:"currentColor"})}),t&&l.jsx(V2,{onClick:o=>o.stopPropagation(),children:e.map(o=>l.jsx(H2,{type:"button",$destructive:o.destructive,onClick:i=>{i.preventDefault(),i.stopPropagation(),n(!1)},children:o.label},o.label))})]})}const Q2=d.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,K2=d.button`
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
`,G2=d.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Y2=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 7px;
`,J2=d.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,cd=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  font-weight: 500;
`;d.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;d.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`;d.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;const ia=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
`,la=d.p`
  margin: 0;
  font-size: 12px;
  font-style: italic;
  color: ${({theme:e})=>e.colors.neutral500};
`,n0=d.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,r0=d.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,_i=d.span``;function X2(e){const t=e.subscriptionTypes[0];return Vh[t].label}function sa({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return l.jsx(G2,{children:n.map(r=>l.jsxs("div",{children:[l.jsxs(Y2,{children:[l.jsx(J2,{children:r.name}),l.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),l.jsx(B2,{consumed:r.consumed,total:r.allocated}),r.remaining<0?l.jsxs(cd,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):l.jsxs(cd,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function q2({subscription:e}){const[t,n]=v.useState(e.instances[0].instanceId),r=e.instances.find(a=>a.instanceId===t)||e.instances[0],o=r.subscriptionType==="enterprise",i=r.entitlements.slice(0,3),s=r.entitlements.length-i.length,c=[{label:"Open CertCentral"},{label:"Documentation"}];return l.jsxs(Qh,{to:`/settings/billing/${e.id}`,children:[l.jsxs(Kh,{children:[l.jsxs(Gh,{children:[l.jsx(Yh,{children:xn(e.iconType,20,"currentColor")}),l.jsxs(Jh,{children:[l.jsxs(e0,{children:[l.jsx(Xh,{children:e.name}),l.jsxs(Zh,{children:["Renews ",e.renewalDate]})]}),l.jsxs(qh,{children:[e.subscriptionTypes.map(a=>Vh[a].label).join(" · "),e.accountId&&l.jsxs(_i,{children:[" | ",e.accountId]}),e.accountName&&l.jsxs(_i,{children:[" | ",e.accountName]})]})]})]}),l.jsx(t0,{items:c})]}),l.jsx(Q2,{onClick:a=>a.preventDefault(),children:e.instances.map(a=>l.jsx(K2,{type:"button",$active:a.instanceId===t,onClick:u=>{u.preventDefault(),u.stopPropagation(),n(a.instanceId)},children:a.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},a.instanceId))}),o?l.jsxs(l.Fragment,{children:[i.length>0?l.jsx(sa,{entitlements:r.entitlements,maxVisible:3}):l.jsx(r0,{children:"Usage data not available yet."}),l.jsxs(ia,{children:[s>0&&l.jsxs(n0,{children:["+",s," more"]}),l.jsx(la,{children:"Managed by your Account Manager"})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(sa,{entitlements:r.entitlements,maxVisible:3}),l.jsxs(ia,{children:[l.jsx("span",{}),l.jsx(la,{children:"Self-service subscription"})]})]})]})}function Z2({subscription:e}){if(e.instances.length>1)return l.jsx(q2,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:o,entitlements:i}=e,s=e.subscriptionTypes.includes("enterprise"),c=e.subscriptionTypes.includes("ecommerce"),a=c&&!s,u=t.startsWith("certcentral-"),f=i.slice(0,3),m=i.length-f.length,g=s?"Managed by your Account Manager":c?"Self-service subscription":null,y=a&&u?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${u?"CertCentral":n}`},{label:"Documentation"}];return l.jsxs(Qh,{to:`/settings/billing/${t}`,children:[l.jsxs(Kh,{children:[l.jsxs(Gh,{children:[l.jsx(Yh,{children:xn(r,20,"currentColor")}),l.jsxs(Jh,{children:[l.jsxs(e0,{children:[l.jsx(Xh,{children:n}),l.jsxs(Zh,{children:["Renews ",o]})]}),l.jsxs(qh,{children:[X2(e),e.accountId&&l.jsxs(_i,{children:[" | ",e.accountId]}),e.accountName&&l.jsxs(_i,{children:[" | ",e.accountName]})]})]})]}),l.jsx(t0,{items:y})]}),f.length>0?l.jsx(sa,{entitlements:i,maxVisible:3}):l.jsx(r0,{children:"Usage data is not available for this product yet."}),g&&l.jsxs(ia,{children:[m>0?l.jsxs(n0,{children:["+",m," more"]}):l.jsx("span",{}),l.jsx(la,{children:g})]})]})}const ew=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,tw=d.div`
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
`,nw=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,rw=d.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,ow=d.button`
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
`,iw=d.div`
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
`,lw=d.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.neutral800};
`,sw=d.span`
  display: flex;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`,aw=d.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.neutral200};
`,cw=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,uw=d.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,ud=d.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,dd=d.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
`,dw=d.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};

  &::placeholder { color: ${({theme:e})=>e.colors.neutral400}; }
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.blue300};
    box-shadow: 0 0 0 2px rgba(1, 116, 195, 0.15);
  }
`,pw=d.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};
  resize: vertical;

  &::placeholder { color: ${({theme:e})=>e.colors.neutral400}; }
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.blue300};
    box-shadow: 0 0 0 2px rgba(1, 116, 195, 0.15);
  }
`,fw=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,hw=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,mw=d.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
`,gw=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,xw=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #D5E6F7;
  color: ${({theme:e})=>e.colors.blue300};
  font-size: 15px;
  font-weight: 600;
  flex-shrink: 0;
`,yw=d.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,vw=d.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,ww=d.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,bw=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pd=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,kw=d.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,jw=d.span`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-left: 4px;
`,Cw=d.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
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
`;function o0({open:e,onClose:t,helpContext:n}){const r=ut.name.split(" ").map(s=>s[0]).join(""),o=v.useRef(null);v.useEffect(()=>{const s=c=>{c.key==="Escape"&&e&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[e,t]),v.useEffect(()=>{e&&o.current&&setTimeout(()=>{var s;return(s=o.current)==null?void 0:s.focus()},260)},[e]);const i=n==="certcentral"?"Need more licenses, additional capacity, contract changes, billing help, or renewal assistance? Your DigiCert account manager can help.":"Have questions about your subscriptions, need additional capacity, or want to discuss contract changes? Your DigiCert account manager can help.";return l.jsxs(l.Fragment,{children:[l.jsx(ew,{$open:e,onClick:t,"aria-hidden":"true"}),l.jsxs(tw,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Contact your account manager",children:[l.jsxs(nw,{children:[l.jsx(rw,{children:"Need help?"}),l.jsx(ow,{type:"button",onClick:t,"aria-label":"Close drawer",ref:o,children:"×"})]}),l.jsxs(iw,{children:[l.jsxs(mw,{children:[l.jsxs(gw,{children:[l.jsx(xw,{children:r}),l.jsxs(yw,{children:[l.jsx(vw,{children:ut.name}),l.jsx(ww,{children:ut.title})]})]}),l.jsxs(bw,{children:[l.jsxs(pd,{children:[l.jsx(Ah,{size:14,color:"currentColor"}),l.jsx(kw,{href:`mailto:${ut.email}`,children:ut.email})]}),l.jsxs(pd,{children:[l.jsx(xy,{size:14,color:"currentColor"}),ut.phone,l.jsx(jw,{children:"(DigiCert Sales)"})]})]})]}),l.jsxs(lw,{children:[l.jsx(sw,{children:l.jsx(Ai,{size:15,color:"currentColor"})}),l.jsx("span",{children:i})]}),l.jsx(aw,{}),l.jsxs(cw,{children:[l.jsx(uw,{children:"Send a message"}),l.jsxs(ud,{children:[l.jsx(dd,{htmlFor:"drawer-subject",children:"Subject"}),l.jsx(dw,{id:"drawer-subject",type:"text",placeholder:"e.g. Request additional SSL/TLS licenses"})]}),l.jsxs(ud,{children:[l.jsx(dd,{htmlFor:"drawer-message",children:"Message"}),l.jsx(pw,{id:"drawer-message",placeholder:"Describe what you need help with...",rows:4})]}),l.jsxs(fw,{children:[l.jsxs(hw,{children:["Your message will be sent to ",ut.name,"."]}),l.jsx(Cw,{type:"button",children:"Send message"})]})]})]})]})]})}const Sw=d.main`
  padding: 32px;
`,$w=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Ew=d.div``,Pw=d.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Tw=d.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,Lw=d.button`
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
`,Iw=d.div`
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
`,Ao=d.div`
  padding: 18px 20px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Oo=d.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,_o=d.p`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Fo=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Rw=d.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,zw=d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;function Dw(){const[e,t]=v.useState(!1);v.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]);const n=Hh(),r=A2(n),o=O2(n),i=n.filter(s=>s.id.startsWith("certcentral-")&&s.subscriptionTypes.includes("enterprise")).length;return l.jsxs(Sw,{children:[l.jsxs($w,{children:[l.jsxs(Ew,{children:[l.jsx(Pw,{children:"My subscriptions"}),l.jsx(Tw,{children:"View your active product subscriptions, entitlement usage, and renewal information."})]}),l.jsxs(Lw,{type:"button",onClick:()=>t(!0),children:[l.jsx(Bh,{size:15,color:"currentColor"}),"Need help?"]})]}),l.jsxs(Iw,{children:[l.jsxs(Ao,{children:[l.jsx(Oo,{children:"Active subscriptions"}),l.jsxs(_o,{children:[r.productCount+1," products"]}),l.jsxs(Fo,{children:["Includes ",i," linked CertCentral account",i!==1?"s":""]})]}),l.jsxs(Ao,{children:[l.jsx(Oo,{children:"Next renewal"}),l.jsx(_o,{children:r.earliestRenewal}),l.jsx(Fo,{children:r.renewalDatesCount>1?"Renewal dates vary by product":"All products renew on this date"})]}),l.jsxs(Ao,{children:[l.jsx(Oo,{children:"Usage status"}),l.jsx(_o,{children:r.needsAttention>0?`${r.needsAttention} need attention`:"All healthy"}),l.jsxs(Fo,{children:[r.approaching," approaching limit · ",r.over," over entitlement"]})]}),l.jsxs(Ao,{children:[l.jsx(Oo,{children:"Subscription type"}),l.jsx(_o,{children:o.label}),l.jsx(Fo,{children:o.sub})]})]}),l.jsx(Rw,{children:"Product subscriptions"}),l.jsx(zw,{children:n.map(s=>l.jsx(Z2,{subscription:s},s.id))}),l.jsx(o0,{open:e,onClose:()=>t(!1)})]})}const Mw=d.div`
  position: relative;
  width: 100%;
  user-select: none;
`,Nw=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  margin-bottom: 8px;
`,Aw=d.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  color: ${({$dim:e,theme:t})=>e?t.colors.neutral400:t.colors.neutral700};
  cursor: pointer;
  opacity: ${({$dim:e})=>e?.5:1};
  transition: opacity 0.15s;
  text-decoration: ${({$dim:e})=>e?"line-through":"none"};
`,Ow=d.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
`,_w=d.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
`,fd=d.button`
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
`,Fw=d.div`
  position: relative;
`,Bw=d.div`
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
`,Ww=d.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: #E5E7EB;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,hd=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.8;
`,Uw=d.span`
  width: 7px;
  height: 7px;
  border-radius: 2px;
  flex-shrink: 0;
`,$r=620,i0=190,Er=52,Vw=16,l0=18,Hw=34,Bo=$r-Er-Vw,Zt=i0-l0-Hw;function Qw(e,t){return t==="$"?e>=1e5?`$${(e/1e3).toFixed(0)}k`:e>=1e3?`$${(e/1e3).toFixed(1)}k`:`$${e}`:e>=1e3?`${(e/1e3).toFixed(0)}k`:`${e}`}function md(e,t){return t==="$"?e>=1e3?`$${e.toLocaleString()}`:`$${e}`:e.toLocaleString()}function gd({series:e,monthLabels:t,yFormat:n}){var S;const[r,o]=v.useState(new Set),[i,s]=v.useState(null),c=v.useRef(null),a=t.length,u=t.map((k,R)=>{let L=0;return e.map(A=>{const Z=r.has(A.name)?0:A.monthly[R],_=L;return L+=Z,{lo:_,hi:L,val:Z}})}),f=Math.max(...u.map(k=>{var R;return((R=k[k.length-1])==null?void 0:R.hi)||0}),1),m=Math.ceil(f*1.1/50)*50;function g(k){return k/(a-1)*Bo}function b(k){return Zt-k/m*Zt}function y(k){const R=t.map((A,Z)=>`${g(Z).toFixed(1)},${b(u[Z][k].hi).toFixed(1)}`),L=[...t].reverse().map((A,Z)=>{const _=a-1-Z;return`${g(_).toFixed(1)},${b(u[_][k].lo).toFixed(1)}`});return[...R,...L].join(" ")}const C=[0,.25,.5,.75,1].map(k=>({v:Math.round(m*k),y:b(m*k)})),$=u.reduce((k,R,L)=>{var _,Ce;const A=((_=R[R.length-1])==null?void 0:_.hi)||0,Z=((Ce=u[k][u[k].length-1])==null?void 0:Ce.hi)||0;return A>Z?L:k},0);function h(k){if(!c.current)return;const R=c.current.getBoundingClientRect(),L=Er/$r*R.width,A=(Er+Bo)/$r*R.width,_=(Math.max(L,Math.min(A,k.clientX-R.left))-L)/(A-L);s(Math.round(_*(a-1)))}function p(k){o(R=>{const L=new Set(R);return L.has(k)?L.delete(k):L.add(k),L})}const x=i!==null?(Er+g(i))/$r*100:0,j=i!==null&&i>a-3?"translateX(-100%)":i!==null&&i<2?"translateX(4px)":"translateX(-50%)",w=i!==null&&((S=u[i][u[i].length-1])==null?void 0:S.hi)||0,E=n==="$"?"Total":"Total active";return l.jsxs(Mw,{children:[l.jsxs(Nw,{children:[e.map(k=>l.jsxs(Aw,{$dim:r.has(k.name),type:"button",onClick:()=>p(k.name),children:[l.jsx(Ow,{style:{background:k.color}}),k.name]},k.name)),l.jsxs(_w,{children:[l.jsx(fd,{type:"button",onClick:()=>o(new Set),children:"All"}),l.jsx(fd,{type:"button",onClick:()=>o(new Set(e.map(k=>k.name))),children:"None"})]})]}),l.jsxs(Fw,{children:[l.jsx("svg",{ref:c,viewBox:`0 0 ${$r} ${i0}`,style:{width:"100%",height:"auto",display:"block",overflow:"visible",cursor:"crosshair"},onMouseMove:h,onMouseLeave:()=>s(null),children:l.jsxs("g",{transform:`translate(${Er},${l0})`,children:[C.map(k=>l.jsxs("g",{children:[l.jsx("line",{x1:0,y1:k.y.toFixed(1),x2:Bo,y2:k.y.toFixed(1),stroke:"#E5E7EB",strokeWidth:1}),l.jsx("text",{x:-8,y:k.y.toFixed(1),textAnchor:"end",fontSize:9,fill:"#9CA3AF",dominantBaseline:"middle",children:Qw(k.v,n)})]},k.v)),l.jsx("line",{x1:0,y1:Zt,x2:Bo,y2:Zt,stroke:"#D1D5DB",strokeWidth:1}),t.map((k,R)=>R%2!==0&&R!==a-1?null:l.jsx("text",{x:g(R).toFixed(1),y:Zt+14,textAnchor:"middle",fontSize:9,fill:"#9CA3AF",children:k},R)),e.map((k,R)=>l.jsx("polygon",{points:y(R),fill:k.color,fillOpacity:.78},k.name)),l.jsxs("g",{children:[l.jsx("line",{x1:g($).toFixed(1),y1:0,x2:g($).toFixed(1),y2:Zt,stroke:"#6B7280",strokeWidth:1,strokeDasharray:"4,3",opacity:.55}),l.jsxs("text",{x:g($).toFixed(1),y:-5,textAnchor:"middle",fontSize:8,fill:"#4B5563",fontWeight:"600",children:["Peak ",t[$]]})]}),i!==null&&l.jsx("line",{x1:g(i).toFixed(1),y1:0,x2:g(i).toFixed(1),y2:Zt,stroke:"#374151",strokeWidth:1.5,opacity:.6})]})}),i!==null&&l.jsxs(Bw,{style:{left:`${x}%`,transform:j},children:[l.jsx(Ww,{children:t[i]}),e.map((k,R)=>r.has(k.name)?null:l.jsxs(hd,{children:[l.jsx(Uw,{style:{background:k.color}}),l.jsx("span",{style:{flex:1},children:k.name}),l.jsx("span",{style:{fontWeight:600},children:md(u[i][R].val,n)})]},k.name)),l.jsxs(hd,{style:{borderTop:"1px solid rgba(255,255,255,0.15)",marginTop:4,paddingTop:4},children:[l.jsx("span",{style:{flex:1,fontWeight:600},children:E}),l.jsx("span",{style:{fontWeight:700},children:md(w,n)})]})]})]})]})}const xd=d.main`
  padding: 32px;
`,yd=d(ic)`
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
`,Kw=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Gw=d.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,Yw=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Jw=d.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Xw=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,qw=d.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,Zw=d.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,eb=d.button`
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
`,tb=d.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,nb=d.button`
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
`,cr=d.section`
  margin-bottom: 32px;
`,dc=d.h2`
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral600};
`,s0=d.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||3}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,dl=d.div`
  padding: 18px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pl=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,fl=d.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,hl=d.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
  display: flex;
  align-items: baseline;
  gap: 5px;
`,rb=d.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral600};
`,Fi=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,ob=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,ib=d.div`
  position: relative;
`,lb=d.button`
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
`,sb=d.div`
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
`,ab=d.a`
  display: block;
  padding: 10px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({$destructive:e,theme:t})=>e?"#DC2626":t.colors.neutral800};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,cb=d.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,vd=d.div``,wd=d.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-bottom: 6px;
`,ub=d.button`
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
`,db=d.div`
  position: relative;
  display: inline-flex;
`,pb=d.div`
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
`;function a0({instance:e,isCertCentral:t}){const[n,r]=v.useState(!1),o=v.useRef(null);v.useEffect(()=>{if(!n)return;const u=f=>{o.current&&!o.current.contains(f.target)&&r(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[n]);const i=e.subscriptionType==="enterprise",s=i?"Enterprise":"E-commerce",c=!i&&e.billing?e.billing.plan:null;let a;return i&&!t?a=l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"This product is covered by an enterprise agreement with DigiCert."}),l.jsx("p",{children:"Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team."}),l.jsx("p",{children:"Contact your account manager for contract-related questions."})]}):i&&t?a=l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"This CertCentral account is managed through an enterprise agreement with DigiCert."}),l.jsx("p",{children:"Billing, renewals, and any contract changes are handled directly by your DigiCert account team."}),l.jsx("p",{children:"Contact your account manager for any questions."})]}):a=l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"This subscription is purchased and managed through DigiCert's self-service purchasing experience."}),l.jsx("p",{children:"You can manage payment methods, receipts, renewals, and purchases directly from this account."})]}),l.jsxs(dl,{children:[l.jsx(pl,{children:l.jsxs(fl,{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:["Plan type",l.jsxs(db,{ref:o,children:[l.jsx(ub,{type:"button",onClick:()=>r(u=>!u),children:l.jsx(Ai,{size:13,color:"currentColor"})}),n&&l.jsx(pb,{children:a})]})]})}),l.jsx(hl,{children:s}),c&&l.jsx(Fi,{children:c})]})}function fb(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function c0({dateStr:e,sub:t}){const n=fb(e);return l.jsxs(dl,{children:[l.jsxs(pl,{children:[l.jsx(fl,{children:"Renewal date"}),l.jsx(Fh,{size:15,color:"#9CA3AF"})]}),l.jsx(hl,{children:e}),t&&l.jsx(Fi,{children:t}),!t&&l.jsxs(Fi,{children:[n," days remaining"]})]})}function hb({term:e}){return l.jsxs(dl,{children:[l.jsxs(pl,{children:[l.jsx(fl,{children:"Contract term"}),l.jsx(Fh,{size:15,color:"#9CA3AF"})]}),l.jsx(hl,{style:{fontSize:15,fontWeight:600},children:e||"—"})]})}const u0=d.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,pc=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,rt=d.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ot=d.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 14px 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,d0=d.span`
  font-weight: 500;
  color: ${({$tone:e,theme:t})=>e==="error"?"#DC2626":e==="warning"?"#D97706":t.colors.neutral900};
`,p0=d.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`;function mb({entitlements:e}){return e.length===0?l.jsx(p0,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):l.jsx(u0,{children:l.jsxs(pc,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(rt,{style:{width:"30%"},children:"Entitlement"}),l.jsx(rt,{$align:"right",children:"Allocated"}),l.jsx(rt,{$align:"right",children:"Used"}),l.jsx(rt,{$align:"right",children:"Remaining"})]})}),l.jsx("tbody",{children:e.map(t=>{const n=t.allocated>0?t.consumed/t.allocated:0,r=t.remaining<0?"error":n>=.8?"warning":void 0;return l.jsxs("tr",{children:[l.jsx(ot,{children:t.name}),l.jsx(ot,{$align:"right",children:t.allocated.toLocaleString()}),l.jsx(ot,{$align:"right",children:t.consumed.toLocaleString()}),l.jsx(ot,{$align:"right",children:l.jsx(d0,{$tone:r,children:t.remaining<0?`Exceeded by ${Math.abs(t.remaining).toLocaleString()}`:t.remaining===0?"0":t.remaining.toLocaleString()})})]},t.name)})})]})})}const gb=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`,xb=d.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,bd=d.button`
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
`;function yb({entitlements:e}){return l.jsx(u0,{children:l.jsxs(pc,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(rt,{style:{width:"65%"},children:"Entitlement"}),l.jsx(rt,{$align:"right",children:"Purchased"})]})}),l.jsx("tbody",{children:e.map(t=>l.jsxs("tr",{children:[l.jsx(ot,{children:t.name}),l.jsx(ot,{$align:"right",children:t.purchased.toLocaleString()})]},t.name))})]})})}function vb({instance:e}){const[t,n]=v.useState("table"),{peakUsageData:r}=e,o=r.series.map(i=>({...i,monthly:i.monthlyCost}));return l.jsxs(cr,{children:[l.jsxs(gb,{children:[l.jsx(dc,{style:{margin:0},children:"Consumption"}),l.jsxs(xb,{children:[l.jsx(bd,{$active:t==="table",onClick:()=>n("table"),children:"Table"}),l.jsx(bd,{$active:t==="chart",onClick:()=>n("chart"),children:"Chart"})]})]}),t==="table"?l.jsx(yb,{entitlements:e.entitlements}):l.jsxs(cb,{children:[l.jsxs(vd,{children:[l.jsx(wd,{children:"Consumption (USD)"}),l.jsx(gd,{series:o,monthLabels:r.monthLabels,yFormat:"$"})]}),l.jsxs(vd,{children:[l.jsx(wd,{children:"Consumption Quantities"}),l.jsx(gd,{series:r.series,monthLabels:r.monthLabels})]})]})]})}const wb=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  flex-wrap: wrap;
`,bb=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,kb=d.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,jb=d.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Cb=d.a`
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
`;function Sb(){return l.jsx(cr,{children:l.jsxs(wb,{children:[l.jsxs(bb,{children:[l.jsx(kb,{children:"Manage finances and funds"}),l.jsx(jb,{children:"View purchase history, balance, account pricing, deposit funds, and pay invoices in CertCentral."})]}),l.jsxs(Cb,{href:"https://www.digicert.com/certcentral/finances/purchase-history",target:"_blank",rel:"noopener noreferrer",children:["Open CertCentral Finances",l.jsx(Ty,{size:14,color:"currentColor"})]})]})})}function $b({instance:e,isCertCentral:t}){return l.jsx(cr,{children:l.jsxs(s0,{$cols:3,children:[l.jsx(a0,{instance:e,isCertCentral:t}),l.jsx(c0,{dateStr:e.renewalDate}),l.jsx(hb,{term:e.contractTerm})]})})}const Eb=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`,Pb=d.button`
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
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`;function Tb({instance:e,isCertCentral:t}){const[n,r]=e.billing.price.split(" / ");return l.jsxs(cr,{children:[l.jsxs(s0,{$cols:3,children:[l.jsx(a0,{instance:e,isCertCentral:t}),l.jsxs(dl,{children:[l.jsxs(pl,{children:[l.jsx(fl,{children:"Monthly cost"}),l.jsx(Py,{size:15,color:"#9CA3AF"})]}),l.jsxs(hl,{$blue:!0,children:[n,l.jsxs(rb,{children:["/ ",r]})]}),l.jsx(Fi,{children:e.billing.plan})]}),l.jsx(c0,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"})]}),l.jsx(Eb,{children:l.jsxs(Pb,{type:"button",children:[l.jsx(Ey,{size:16,color:"currentColor"}),"Buy certificates"]})})]})}const Lb=d.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,Ib=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,Rb=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,zb=d.button`
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
`,Db=d.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Mb=d.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,Nb=d.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Ab=d.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,Ob=d.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,_b=d.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function Fb({category:e}){const[t,n]=v.useState(e.products.length>0);return l.jsxs(Lb,{children:[l.jsxs(Ib,{onClick:()=>n(r=>!r),children:[l.jsxs(Rb,{children:[l.jsx(zb,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(o=>!o)},children:t?l.jsx(_h,{size:14,color:"currentColor"}):l.jsx(_r,{size:14,color:"currentColor"})}),l.jsx(Db,{children:e.name})]}),l.jsx(Mb,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&l.jsx(Nb,{children:e.products.length===0?l.jsx(_b,{children:"No products purchased yet."}):l.jsxs(pc,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(rt,{style:{width:"40%"},children:"Product"}),l.jsx(rt,{$align:"right",children:"Purchased"}),l.jsx(rt,{$align:"right",children:"Used"}),l.jsx(rt,{$align:"right",children:"Available"})]})}),l.jsx("tbody",{children:e.products.map((r,o)=>l.jsxs("tr",{children:[l.jsxs(ot,{children:[l.jsx(Ab,{children:r.name}),l.jsx(Ob,{children:r.type})]}),l.jsx(ot,{$align:"right",children:r.purchased}),l.jsx(ot,{$align:"right",children:r.used}),l.jsx(ot,{$align:"right",children:l.jsx(d0,{$tone:r.available===0?"error":void 0,children:r.available})})]},o))})]})})]})}function Bb({categories:e}){return l.jsxs(cr,{children:[l.jsx(dc,{children:"Products"}),e.map(t=>l.jsx(Fb,{category:t},t.id))]})}function Wb(){const{subscriptionId:e}=vx(),[t,n]=v.useState(null),[r,o]=v.useState(!1),[i,s]=v.useState(!1),c=v.useRef(null),a=Hh().find(y=>y.id===e),u=(e==null?void 0:e.startsWith("certcentral-"))??!1;if(v.useEffect(()=>{document.title=a?`${a.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[a==null?void 0:a.id,a==null?void 0:a.name]),v.useEffect(()=>{var y;n(((y=a==null?void 0:a.instances[0])==null?void 0:y.instanceId)??null)},[e]),v.useEffect(()=>{if(!i)return;const y=$=>{c.current&&!c.current.contains($.target)&&s(!1)},C=$=>{$.key==="Escape"&&s(!1)};return document.addEventListener("mousedown",y),document.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",y),document.removeEventListener("keydown",C)}},[i]),!a)return l.jsxs(xd,{children:[l.jsxs(yd,{to:"/settings/billing",children:[l.jsx(Ni,{size:14,color:"currentColor"}),"Back to subscriptions"]}),l.jsx(p0,{children:"This subscription could not be found."})]});const f=a.instances.find(y=>y.instanceId===t)||a.instances[0],m=u&&f.subscriptionType==="ecommerce",g=u?"CertCentral":a.name,b=m?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Product overview"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${g}`},{label:"Product overview"},{label:"Documentation"}];return l.jsxs(xd,{children:[l.jsxs(yd,{to:"/settings/billing",children:[l.jsx(Ni,{size:14,color:"currentColor"}),"Back to subscriptions"]}),l.jsxs(Kw,{children:[l.jsxs(Gw,{children:[l.jsx(Yw,{children:xn(a.iconType,24,"currentColor")}),l.jsxs(Jw,{children:[l.jsx(Xw,{children:l.jsx(qw,{children:a.name})}),a.accountName&&l.jsxs(Zw,{children:[l.jsx("strong",{children:"Account name:"})," ",a.accountName,a.accountId&&l.jsxs(l.Fragment,{children:[" | ",l.jsx("strong",{children:"Account ID:"})," ",a.accountId]})]})]})]}),l.jsxs(ob,{children:[l.jsxs(eb,{type:"button",onClick:()=>o(!0),children:[l.jsx(Bh,{size:15,color:"currentColor"}),"Need help?"]}),l.jsxs(ib,{ref:c,children:[l.jsx(lb,{type:"button",onClick:()=>s(y=>!y),"aria-label":"More actions","aria-expanded":i,children:l.jsx(Oi,{size:15,color:"currentColor"})}),i&&l.jsx(sb,{children:b.map(y=>l.jsx(ab,{$destructive:y.destructive,href:"#",onClick:()=>s(!1),children:y.label},y.label))})]})]})]}),a.instances.length>1&&l.jsx(tb,{role:"tablist","aria-label":"CertCentral instances",children:a.instances.map(y=>l.jsx(nb,{role:"tab",type:"button",$active:y.instanceId===f.instanceId,"aria-selected":y.instanceId===f.instanceId,onClick:()=>n(y.instanceId),children:y.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},y.instanceId))}),f.subscriptionType==="enterprise"?l.jsxs(l.Fragment,{children:[l.jsx($b,{instance:f,isCertCentral:u}),u&&f.contractType==="peak-usage"?l.jsx(vb,{instance:f}):l.jsxs(cr,{children:[l.jsx(dc,{children:"Entitlements and usage"}),l.jsx(mb,{entitlements:f.entitlements})]}),u&&l.jsx(Sb,{})]}):l.jsxs(l.Fragment,{children:[l.jsx(Tb,{instance:f,isCertCentral:u}),l.jsx(Bb,{categories:f.productCategories})]}),l.jsx(o0,{open:r,onClose:()=>o(!1),helpContext:u?"certcentral":void 0})]})}const Ub=d.div`
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
`,Vb=d.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,Hb=d.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Qb=d.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function f0({icon:e,title:t,children:n,action:r}){return l.jsxs(Ub,{children:[l.jsx(Vb,{children:e}),t&&l.jsx(Hb,{children:t}),l.jsx(Qb,{children:n}),r]})}const h0=d.a`
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
`,Kb=d(h0)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function m0({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${ut.name})`}),o=`mailto:${ut.email}?${r.toString()}`,i=e==="outline"?Kb:h0;return l.jsx(i,{href:o,...n,children:"Contact account manager"})}const kd=d.main`
  padding: 32px;
`,jd=d.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Cd=d.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Gb=d.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,Jl=d.div`
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 16px 20px;
  border: 1px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral200};
  border-left: 3px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Xl=d.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;
  align-items: center;
  gap: 6px;
`,ql=d.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
`,Yb=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,Jb=d.div`
  margin-left: auto;
`,fc=d.button`
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
`,Xb=d(fc)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,qb=d(fc)``,Zb=d.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,ek=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,St=d.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 11px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  white-space: nowrap;
  user-select: none;
`,$t=d.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,tk=d.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,Zl={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},nk=d.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=Zl[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=Zl[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=Zl[e])==null?void 0:t.color)||"#374151"}};
`,rk=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,ok=d.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,ik=d.button`
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
`,lk=d.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral50};
`,sk=["All","Invoices","Receipts","Refunds"],Sd=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function ak({scenario:e}){const[t,n]=v.useState("All"),[r,o]=v.useState(!1);if(v.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return l.jsxs(kd,{children:[l.jsx(jd,{children:"Receipts and invoices"}),l.jsx(Cd,{children:"Download receipts, invoices, and other billing documents for your account."}),l.jsx(f0,{icon:l.jsx(ky,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:l.jsx(m0,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const i=4,s="$2,520.00",c="Nov 20, 2025",a=t==="All"?Sd:Sd.filter(u=>t==="Invoices"?u.type==="Invoice":t==="Receipts"?u.type==="Receipt":t==="Refunds"?u.type==="Refund":!0);return l.jsxs(kd,{children:[l.jsx(jd,{children:"Receipts and invoices"}),l.jsx(Cd,{children:"Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage."}),l.jsxs(Gb,{children:[l.jsxs(Jl,{$alert:!0,children:[l.jsxs(Xl,{children:[l.jsx(Ku,{size:14,color:"#DC2626"}),"Invoices overdue"]}),l.jsx(ql,{children:i})]}),l.jsxs(Jl,{$alert:!0,children:[l.jsxs(Xl,{children:[l.jsx(Ku,{size:14,color:"#DC2626"}),"Total balance overdue"]}),l.jsx(ql,{$blue:!0,children:s})]}),l.jsxs(Jl,{children:[l.jsx(Xl,{children:"Next invoice due"}),l.jsx(ql,{$blue:!0,children:c})]})]}),l.jsxs(Yb,{children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(fc,{type:"button",onClick:()=>o(u=>!u),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,l.jsx(_r,{size:13,color:"currentColor"})]}),r&&l.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:sk.map(u=>l.jsx("button",{type:"button",onClick:()=>{n(u),o(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:u===t?"#EAF1FB":"white",color:u===t?"#0174C3":"#1A1F27",fontWeight:u===t?500:400},children:u},u))})]}),l.jsxs(Xb,{type:"button",children:[l.jsx($y,{size:14,color:"currentColor"}),"Filter",l.jsx(_r,{size:13,color:"currentColor"})]}),l.jsx(Jb,{children:l.jsxs(qb,{type:"button",children:["Download CSV",l.jsx(_r,{size:13,color:"currentColor"})]})})]}),l.jsxs(Zb,{children:[l.jsxs(ek,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(St,{style:{width:"140px"},children:"Invoice"}),l.jsx(St,{children:"Type"}),l.jsx(St,{children:"Issued on"}),l.jsx(St,{children:"Status"}),l.jsx(St,{$align:"right",children:"Amount"}),l.jsx(St,{children:"Due on"}),l.jsx(St,{children:"Ordered by"}),l.jsx(St,{})]})}),l.jsx("tbody",{children:a.map((u,f)=>l.jsxs("tr",{children:[l.jsx($t,{children:l.jsx(tk,{href:"#",children:u.id})}),l.jsx($t,{children:u.type}),l.jsx($t,{children:u.issuedOn}),l.jsx($t,{children:l.jsx(nk,{$status:u.status,children:u.status})}),l.jsx($t,{$align:"right",children:u.amount}),l.jsx($t,{children:u.dueOn}),l.jsx($t,{children:u.orderedBy}),l.jsx($t,{children:l.jsxs(rk,{children:[(u.status==="Overdue"||u.status==="Upcoming")&&l.jsx(ok,{type:"button",children:"Pay"}),l.jsx(ik,{type:"button","aria-label":"Download",children:l.jsx(Sy,{size:15,color:"currentColor"})})]})})]},`${u.id}-${f}`))})]}),l.jsxs(lk,{children:["1 to ",a.length," of 8,618"]})]})]})}const $d=d.main`
  padding: 32px;
`,ck=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,uk=d.div``,Ed=d.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Pd=d.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,dk=d.a`
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
`,Td=d.div`
  margin-bottom: 32px;
`,Ld=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,Id=d.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Rd=d.button`
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
`,pk=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,fk=d.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,hk=d.div`
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
`,mk=d.div``,gk=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,xk=d.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,yk=d.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,vk=d.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,g0=d.button`
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
`,wk=d.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,bk=d.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,kk=d(g0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Wo=d.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,Uo=d.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Vo=d.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,jk=d.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`;function Ck({scenario:e}){return v.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?l.jsxs($d,{children:[l.jsx(Ed,{children:"Payment details"}),l.jsx(Pd,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),l.jsx(f0,{icon:l.jsx(Cy,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:l.jsx(m0,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):l.jsxs($d,{children:[l.jsxs(BackLink,{to:"/settings/billing/certcentral-acme-devops",children:[l.jsx(ChevronLeftIcon,{size:14,color:"currentColor"}),"Back to CertCentral"]}),l.jsxs(ck,{children:[l.jsxs(uk,{children:[l.jsx(Ed,{children:"Payment details"}),l.jsx(Pd,{children:"Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method."})]}),l.jsxs(dk,{href:"#",children:[l.jsx(Ai,{size:14,color:"currentColor"}),"Need help?"]})]}),l.jsxs(Td,{children:[l.jsxs(Ld,{children:[l.jsx(Id,{children:"Payment methods"}),l.jsxs(Rd,{type:"button",children:[l.jsx(Qu,{size:14,color:"currentColor"}),"Add payment method"]})]}),l.jsxs(pk,{children:[l.jsxs(fk,{children:[l.jsx(hk,{children:"VISA"}),l.jsxs(mk,{children:[l.jsxs(gk,{children:[l.jsx(xk,{children:"Visa •••• 8350"}),l.jsx(yk,{children:"Default"})]}),l.jsx(vk,{children:"Expires 02/28"})]})]}),l.jsx(g0,{type:"button","aria-label":"Payment method options",children:l.jsx(Oi,{size:16,color:"currentColor"})})]})]}),l.jsxs(Td,{children:[l.jsxs(Ld,{children:[l.jsx(Id,{children:"Billing contacts"}),l.jsxs(Rd,{type:"button",children:[l.jsx(Qu,{size:14,color:"currentColor"}),"Add billing contact"]})]}),l.jsxs(wk,{children:[l.jsx(kk,{type:"button","aria-label":"Contact options",children:l.jsx(Oi,{size:16,color:"currentColor"})}),l.jsx(bk,{children:"John Doe"}),l.jsxs(Wo,{children:[l.jsx(Uo,{children:"Address"}),l.jsxs(Vo,{children:["123 Main Street",l.jsx("br",{}),"Suite 100",l.jsx("br",{}),"San Francisco, CA 94105",l.jsx("br",{}),"United States"]})]}),l.jsxs(Wo,{children:[l.jsx(Uo,{children:"Email address"}),l.jsx(Vo,{children:"john.doe@winthecustomer.com"})]}),l.jsxs(Wo,{children:[l.jsx(Uo,{children:"Phone number"}),l.jsx(Vo,{children:"650 123 4567"})]}),l.jsxs(Wo,{children:[l.jsxs(jk,{children:[l.jsx(Uo,{style:{margin:0},children:"VAT ID"}),l.jsx(Ai,{size:14,color:"#0174C3"})]}),l.jsx(Vo,{children:"23503820"})]})]})]})]})}const Sk=d.main`
  padding: 32px;
  max-width: 1100px;
`,$k=d.div`
  margin-bottom: 36px;
`,Ek=d.h1`
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Pk=d.p`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
  max-width: 560px;
`,Tk=d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,Lk=d.div`
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
`,Ik=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Rk=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,zk=d.div`
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
`,Dk=d.a`
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,Mk=d.span`
  flex-shrink: 0;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$variant:e})=>e==="included"?"rgba(39,168,114,0.1)":e==="licensed"?"#EAF1FB":"#F3F4F6"};
  color: ${({$variant:e})=>e==="included"?"#1F8F60":e==="licensed"?"#0174C3":"#4B5563"};
`,Nk=d.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: 1.5;
`,Ak=d.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Ok=d.li`
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
`,_k=d.div`
  margin-top: auto;
  padding-top: 4px;
`,Fk=d.button`
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
`,Bk=[{abbr:"TL",color:"#0174C3",name:"Trust Lifecycle",status:"essentials",statusLabel:"Essentials",description:"Modernizes certificate lifecycle visibility and management across public and private CAs.",features:["Gain full visibility with discovery and a centralized certificate inventory","Manage certificates regardless of who issued them (CA-agnostic control)","Automate enrollment, renewal, and provisioning at enterprise scale","Prevent outages with real-time monitoring, alerts, and reporting"],action:"Upgrade"},{abbr:"DNS",color:"#0174C3",name:"DigiCert DNS",status:null,description:"Modern DNS management for secure, scalable global traffic delivery",features:["Unified DNS platform for secure, scalable deployments","Real-time insights to optimize performance and availability","Intelligent monitoring to enforce best practices and compliance","Global traffic routing for speed, resilience, and reliability"],action:"Learn more"},{abbr:"CC",color:"#0174C3",name:"CertCentral",status:"included",statusLabel:"Included",description:"Centralizes certificate purchasing and management with scale, compliance, APIs—and AI-based validation automation.",features:["Buy and manage public trust certificates across TLS/SSL, S/MIME, Code Signing, and more","AI-based validation automation to speed issuance and reduce manual effort","Multi-language support with regional data residency options","Renewal reminders, notifications, plus flexible APIs and webhooks for existing workflows"],action:"Buy certificates"},{abbr:"ST",color:"#0174C3",name:"Software Trust",status:null,description:"Secure and govern software releases with trusted code signing",features:["Centralized access control for decentralized signing operations","Policy-based signing to ensure compliance and integrity","CI/CD integration across modern development platforms","Automated signing for releases, artifacts, and SBOMs"],action:"Learn more"},{abbr:"CA+",color:"#0174C3",name:"Private CA",status:"licensed",statusLabel:"Licensed",description:"Enterprise-grade private PKI with centralized control and governance",features:["Centralized governance for internal public key infrastructure","Rapid deployment of root and intermediate certificate authorities","Support for cloud, on-prem, and hybrid environments","Hardware-backed key protection with modern cryptographic standards"],action:"Learn more"},{abbr:"IoT",color:"#0174C3",name:"Device Trust",status:null,description:"End-to-end device identity and security lifecycle management",features:["Device protection across manufacturing, deployment, and retirement","Hardware-rooted identities for every connected device","Automated onboarding, configuration, and updates at scale","Readiness for evolving cryptographic and post-quantum standards"],action:"Learn more"},{abbr:"CT",color:"#0174C3",name:"Content Trust",status:null,description:"Centralized control and governance for document signing workflows",features:["Centralized visibility across signing activity, policies, and certificates","PKI-backed digital signing aligned with global trust standards","Seamless integration with existing tools via CSC-based APIs","Cloud-based key protection to reduce loss, theft, and misuse"],action:"Learn more"}];function Wk(){return v.useEffect(()=>{document.title="Explore DigiCert products — DigiCert ONE"},[]),l.jsxs(Sk,{children:[l.jsxs($k,{children:[l.jsx(Ek,{children:"Explore DigiCert products"}),l.jsx(Pk,{children:"Build and protect digital trust across every certificate, identity, and device — all from one platform."})]}),l.jsx(Tk,{children:Bk.map(e=>l.jsxs(Lk,{children:[l.jsxs(Ik,{children:[l.jsxs(Rk,{children:[l.jsx(zk,{$color:e.color,children:e.abbr}),l.jsx(Dk,{href:"#",children:e.name})]}),e.status&&l.jsx(Mk,{$variant:e.status,children:e.statusLabel})]}),l.jsx(Nk,{children:e.description}),l.jsx(Ak,{children:e.features.map(t=>l.jsx(Ok,{children:t},t))}),l.jsx(_k,{children:l.jsx(Fk,{type:"button",children:e.action})})]},e.name))})]})}function Uk({containerRef:e}){const{pathname:t}=st();return v.useEffect(()=>{e.current?e.current.scrollTop=0:window.scrollTo(0,0)},[t,e]),null}const Vk=sy`
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
`,Hk=d.div`
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
`;function zd(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function Qk(){const[e,t]=v.useState(()=>typeof window<"u"?zd():"desktop");return v.useEffect(()=>{const n=()=>t(zd());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function Kk(){const[e,t]=v.useState("dashboard"),[n,r]=v.useState(!1),[o,i]=v.useState(!0),[s,c]=v.useState(null),[a,u]=v.useState("mixed"),f=v.useCallback(()=>r(h=>!h),[]),m=v.useCallback(()=>r(!1),[]),g=v.useCallback(()=>i(h=>!h),[]),b=v.useCallback(h=>{t(h),i(!0)},[]),y=v.useCallback(h=>{t(h),i(!0),r(!1)},[]),C=v.useCallback(h=>{c(p=>p===h?null:h)},[]),$=v.useCallback(()=>c(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:o,activeTopNav:s,billingScenario:a,toggleDrawer:f,closeDrawer:m,toggleSpoke:g,setBillingScenario:u,selectProduct:b,selectProductFromDrawer:y,openTopNav:C,closeTopNav:$}}function Gk(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:o,toggleDrawer:i,closeDrawer:s,toggleSpoke:c,selectProduct:a,selectProductFromDrawer:u,openTopNav:f,closeTopNav:m}=Kk(),g=Qk(),b=g==="mobile",y=v.useRef(null);v.useEffect(()=>{g!=="mobile"&&t&&s()},[g,t,s]),v.useEffect(()=>{const h=y.current;h&&(b&&t?(h.setAttribute("inert",""),h.setAttribute("aria-hidden","true")):(h.removeAttribute("inert"),h.removeAttribute("aria-hidden")))},[b,t]);const C=n?"276px":"56px",$=r==="ai-assist"?"400px":"0px";return l.jsxs(l.Fragment,{children:[l.jsx(Vk,{}),l.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),l.jsx(bv,{isDrawerOpen:t,onToggleDrawer:i,activeTopNav:r,onOpenTopNav:f,onCloseTopNav:m,onSelectProduct:a,cartCount:3}),l.jsx(Ev,{activeProductId:e,onSelectProduct:a}),l.jsx(Bv,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:c,billingScenario:o}),l.jsx(Gv,{open:t,activeProductId:e,onSelectProduct:u,onClose:s}),l.jsxs(Hk,{ref:y,id:"main-content",$leftOffset:C,$rightOffset:$,children:[l.jsx(Uk,{containerRef:y}),l.jsxs(Nx,{children:[l.jsx(jn,{path:"/",element:l.jsx(Dx,{to:"/dashboard",replace:!0})}),Dy.filter(h=>h!=="/").map(h=>{let p=l.jsx(ad,{});return h==="/dashboard"?p=l.jsx(T2,{}):h==="/settings/billing"?p=l.jsx(Dw,{}):h==="/settings/billing/receipts"?p=l.jsx(ak,{scenario:o}):h==="/settings/billing/payment-details"&&(p=l.jsx(Ck,{scenario:o})),l.jsx(jn,{path:h,element:p},h)}),l.jsx(jn,{path:"/settings/billing/all-products",element:l.jsx(Wk,{})}),l.jsx(jn,{path:"/settings/billing/:subscriptionId",element:l.jsx(Wb,{})}),l.jsx(jn,{path:"*",element:l.jsx(ad,{})})]})]})]})}Gf(document.getElementById("root")).render(l.jsx(v.StrictMode,{children:l.jsx(Vx,{children:l.jsx(ny,{theme:ay,children:l.jsx(Gk,{})})})}));
