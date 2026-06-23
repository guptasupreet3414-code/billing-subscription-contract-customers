function x0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function y0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Md={exports:{}},Ui={},Ad={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),v0=Symbol.for("react.portal"),w0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),k0=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),$0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),T0=Symbol.for("react.lazy"),gc=Symbol.iterator;function P0(e){return e===null||typeof e!="object"?null:(e=gc&&e[gc]||e["@@iterator"],typeof e=="function"?e:null)}var Od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_d=Object.assign,Fd={};function ir(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Od}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bd(){}Bd.prototype=ir.prototype;function ca(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Od}var ua=ca.prototype=new Bd;ua.constructor=ca;_d(ua,ir.prototype);ua.isPureReactComponent=!0;var xc=Array.isArray,Ud=Object.prototype.hasOwnProperty,da={current:null},Wd={key:!0,ref:!0,__self:!0,__source:!0};function Vd(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Ud.call(t,r)&&!Wd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ho,type:e,key:i,ref:s,props:o,_owner:da.current}}function L0(e,t){return{$$typeof:ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===ho}function I0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yc=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?I0(""+e.key):t.toString(36)}function Yo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ho:case v0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+gl(s,0):r,xc(o)?(n="",e!=null&&(n=e.replace(yc,"$&/")+"/"),Yo(o,t,n,"",function(u){return u})):o!=null&&(pa(o)&&(o=L0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(yc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",xc(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+gl(i,a);s+=Yo(i,t,n,c,o)}else if(c=P0(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+gl(i,a++),s+=Yo(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function jo(e,t,n){if(e==null)return e;var r=[],o=0;return Yo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function R0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Jo={transition:null},z0={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:da};function Hd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=ir;D.Fragment=w0;D.Profiler=k0;D.PureComponent=ca;D.StrictMode=b0;D.Suspense=$0;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;D.act=Hd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_d({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=da.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Ud.call(t,c)&&!Wd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ho,type:e.type,key:o,ref:i,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:S0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j0,_context:e},e.Consumer=e};D.createElement=Vd;D.createFactory=function(e){var t=Vd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:C0,render:e}};D.isValidElement=pa;D.lazy=function(e){return{$$typeof:T0,_payload:{_status:-1,_result:e},_init:R0}};D.memo=function(e,t){return{$$typeof:E0,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Jo.transition;Jo.transition={};try{e()}finally{Jo.transition=t}};D.unstable_act=Hd;D.useCallback=function(e,t){return be.current.useCallback(e,t)};D.useContext=function(e){return be.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return be.current.useDeferredValue(e)};D.useEffect=function(e,t){return be.current.useEffect(e,t)};D.useId=function(){return be.current.useId()};D.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return be.current.useMemo(e,t)};D.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};D.useRef=function(e){return be.current.useRef(e)};D.useState=function(e){return be.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return be.current.useTransition()};D.version="18.3.1";Ad.exports=D;var k=Ad.exports;const ge=y0(k),N0=x0({__proto__:null,default:ge},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=k,M0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,_0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F0={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)O0.call(t,r)&&!F0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:M0,type:e,key:i,ref:s,props:o,_owner:_0.current}}Ui.Fragment=A0;Ui.jsx=Qd;Ui.jsxs=Qd;Md.exports=Ui;var l=Md.exports,Kd={exports:{}},ze={},Gd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var R=P.length;P.push(I);e:for(;0<R;){var B=R-1>>>1,O=P[B];if(0<o(O,I))P[B]=I,P[R]=O,R=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],R=P.pop();if(R!==I){P[0]=R;e:for(var B=0,O=P.length,ie=O>>>1;B<ie;){var q=2*(B+1)-1,ne=P[q],Te=q+1,De=P[Te];if(0>o(ne,R))Te<O&&0>o(De,ne)?(P[B]=De,P[Te]=R,B=Te):(P[B]=ne,P[q]=R,B=q);else if(Te<O&&0>o(De,R))P[B]=De,P[Te]=R,B=Te;else break e}}return I}function o(P,I){var R=P.sortIndex-I.sortIndex;return R!==0?R:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],f=1,h=null,x=3,w=!1,y=!1,j=!1,$=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function b(P){if(j=!1,g(P),!y)if(n(c)!==null)y=!0,kt(v);else{var I=n(u);I!==null&&nn(b,I.startTime-P)}}function v(P,I){y=!1,j&&(j=!1,m(E),E=-1),w=!0;var R=x;try{for(g(I),h=n(c);h!==null&&(!(h.expirationTime>I)||P&&!U());){var B=h.callback;if(typeof B=="function"){h.callback=null,x=h.priorityLevel;var O=B(h.expirationTime<=I);I=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(c)&&r(c),g(I)}else r(c);h=n(c)}if(h!==null)var ie=!0;else{var q=n(u);q!==null&&nn(b,q.startTime-I),ie=!1}return ie}finally{h=null,x=R,w=!1}}var C=!1,S=null,E=-1,M=5,z=-1;function U(){return!(e.unstable_now()-z<M)}function We(){if(S!==null){var P=e.unstable_now();z=P;var I=!0;try{I=S(!0,P)}finally{I?Z():(C=!1,S=null)}}else C=!1}var Z;if(typeof p=="function")Z=function(){p(We)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,tn=Ve.port2;Ve.port1.onmessage=We,Z=function(){tn.postMessage(null)}}else Z=function(){$(We,0)};function kt(P){S=P,C||(C=!0,Z())}function nn(P,I){E=$(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,kt(v))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var R=x;x=I;try{return P()}finally{x=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=x;x=P;try{return I()}finally{x=R}},e.unstable_scheduleCallback=function(P,I,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=R+O,P={id:f++,callback:I,priorityLevel:P,startTime:R,expirationTime:O,sortIndex:-1},R>B?(P.sortIndex=R,t(u,P),n(c)===null&&P===n(u)&&(j?(m(E),E=-1):j=!0,nn(b,R-B))):(P.sortIndex=O,t(c,P),y||w||(y=!0,kt(v))),P},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(P){var I=x;return function(){var R=x;x=I;try{return P.apply(this,arguments)}finally{x=R}}}})(Yd);Gd.exports=Yd;var B0=Gd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=k,Re=B0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jd=new Set,Vr={};function wn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Jd.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=Object.prototype.hasOwnProperty,W0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vc={},wc={};function V0(e){return es.call(wc,e)?!0:es.call(vc,e)?!1:W0.test(e)?wc[e]=!0:(vc[e]=!0,!1)}function H0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q0(e,t,n,r){if(t===null||typeof t>"u"||H0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var fa=/[\-:]([a-z])/g;function ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fa,ha);fe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fa,ha);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fa,ha);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ma(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q0(t,n,o,r)&&(n=null),r||o===null?V0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),$n=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),ga=Symbol.for("react.strict_mode"),ts=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),ns=Symbol.for("react.suspense"),rs=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),qd=Symbol.for("react.offscreen"),bc=Symbol.iterator;function fr(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,xl;function Cr(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var yl=!1;function vl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function K0(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=vl(e.type,!1),e;case 11:return e=vl(e.type.render,!1),e;case 1:return e=vl(e.type,!0),e;default:return""}}function os(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case $n:return"Portal";case ts:return"Profiler";case ga:return"StrictMode";case ns:return"Suspense";case rs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zd:return(e.displayName||"Context")+".Consumer";case Xd:return(e._context.displayName||"Context")+".Provider";case xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ya:return t=e.displayName||null,t!==null?t:os(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return os(e(t))}catch{}}return null}function G0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return os(t);case 8:return t===ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=Y0(e))}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function is(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function np(e,t){t=t.checked,t!=null&&ma(e,"checked",t,!1)}function ls(e,t){np(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ss(e,t.type,n):t.hasOwnProperty("defaultValue")&&ss(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ss(e,t,n){(t!=="number"||pi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function as(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if($r(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function rp(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function op(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?op(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $o,ip=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($o=$o||document.createElement("div"),$o.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){J0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function lp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function sp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=lp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var X0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function us(e,t){if(t){if(X0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function va(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,_n=null,Fn=null;function $c(e){if(e=xo(e)){if(typeof fs!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ki(t),fs(e.stateNode,e.type,t))}}function ap(e){_n?Fn?Fn.push(e):Fn=[e]:_n=e}function cp(){if(_n){var e=_n,t=Fn;if(Fn=_n=null,$c(e),t)for(e=0;e<t.length;e++)$c(t[e])}}function up(e,t){return e(t)}function dp(){}var wl=!1;function pp(e,t,n){if(wl)return e(t,n);wl=!0;try{return up(e,t,n)}finally{wl=!1,(_n!==null||Fn!==null)&&(dp(),cp())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var hs=!1;if(mt)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){hs=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{hs=!1}function Z0(e,t,n,r,o,i,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var zr=!1,fi=null,hi=!1,ms=null,q0={onError:function(e){zr=!0,fi=e}};function em(e,t,n,r,o,i,s,a,c){zr=!1,fi=null,Z0.apply(q0,arguments)}function tm(e,t,n,r,o,i,s,a,c){if(em.apply(this,arguments),zr){if(zr){var u=fi;zr=!1,fi=null}else throw Error(T(198));hi||(hi=!0,ms=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ec(e){if(bn(e)!==e)throw Error(T(188))}function nm(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ec(o),e;if(i===r)return Ec(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function hp(e){return e=nm(e),e!==null?mp(e):null}function mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mp(e);if(t!==null)return t;e=e.sibling}return null}var gp=Re.unstable_scheduleCallback,Tc=Re.unstable_cancelCallback,rm=Re.unstable_shouldYield,om=Re.unstable_requestPaint,te=Re.unstable_now,im=Re.unstable_getCurrentPriorityLevel,wa=Re.unstable_ImmediatePriority,xp=Re.unstable_UserBlockingPriority,mi=Re.unstable_NormalPriority,lm=Re.unstable_LowPriority,yp=Re.unstable_IdlePriority,Wi=null,rt=null;function sm(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Wi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:um,am=Math.log,cm=Math.LN2;function um(e){return e>>>=0,e===0?32:31-(am(e)/cm|0)|0}var Eo=64,To=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Er(a):(i&=s,i!==0&&(r=Er(i)))}else s=n&~o,s!==0?r=Er(s):i!==0&&(r=Er(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function dm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Je(i),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=dm(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vp(){var e=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),e}function bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function fm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function wp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bp,ka,kp,jp,Sp,xs=!1,Po=[],_t=null,Ft=null,Bt=null,Kr=new Map,Gr=new Map,Lt=[],hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pc(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function mr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=xo(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function mm(e,t,n,r,o){switch(t){case"focusin":return _t=mr(_t,e,t,n,r,o),!0;case"dragenter":return Ft=mr(Ft,e,t,n,r,o),!0;case"mouseover":return Bt=mr(Bt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Kr.set(i,mr(Kr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Gr.set(i,mr(Gr.get(i)||null,e,t,n,r,o)),!0}return!1}function Cp(e){var t=an(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=fp(n),t!==null){e.blockedOn=t,Sp(e.priority,function(){kp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=xo(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function Lc(e,t,n){Xo(e)&&n.delete(t)}function gm(){xs=!1,_t!==null&&Xo(_t)&&(_t=null),Ft!==null&&Xo(Ft)&&(Ft=null),Bt!==null&&Xo(Bt)&&(Bt=null),Kr.forEach(Lc),Gr.forEach(Lc)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,xs||(xs=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,gm)))}function Yr(e){function t(o){return gr(o,e)}if(0<Po.length){gr(Po[0],e);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&gr(_t,e),Ft!==null&&gr(Ft,e),Bt!==null&&gr(Bt,e),Kr.forEach(t),Gr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Cp(n),n.blockedOn===null&&Lt.shift()}var Bn=vt.ReactCurrentBatchConfig,xi=!0;function xm(e,t,n,r){var o=F,i=Bn.transition;Bn.transition=null;try{F=1,ja(e,t,n,r)}finally{F=o,Bn.transition=i}}function ym(e,t,n,r){var o=F,i=Bn.transition;Bn.transition=null;try{F=4,ja(e,t,n,r)}finally{F=o,Bn.transition=i}}function ja(e,t,n,r){if(xi){var o=ys(e,t,n,r);if(o===null)Il(e,t,r,yi,n),Pc(e,r);else if(mm(o,e,t,n,r))r.stopPropagation();else if(Pc(e,r),t&4&&-1<hm.indexOf(e)){for(;o!==null;){var i=xo(o);if(i!==null&&bp(i),i=ys(e,t,n,r),i===null&&Il(e,t,r,yi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var yi=null;function ys(e,t,n,r){if(yi=null,e=va(r),e=an(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yi=e,null}function $p(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(im()){case wa:return 1;case xp:return 4;case mi:case lm:return 16;case yp:return 536870912;default:return 16}default:return 16}}var Rt=null,Sa=null,Zo=null;function Ep(){if(Zo)return Zo;var e,t=Sa,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Zo=o.slice(e,1<r?1-r:void 0)}function qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lo(){return!0}function Ic(){return!1}function Ne(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lo:Ic,this.isPropagationStopped=Ic,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=Ne(lr),go=X({},lr,{view:0,detail:0}),vm=Ne(go),kl,jl,xr,Vi=X({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(kl=e.screenX-xr.screenX,jl=e.screenY-xr.screenY):jl=kl=0,xr=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Rc=Ne(Vi),wm=X({},Vi,{dataTransfer:0}),bm=Ne(wm),km=X({},go,{relatedTarget:0}),Sl=Ne(km),jm=X({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sm=Ne(jm),Cm=X({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$m=Ne(Cm),Em=X({},lr,{data:0}),zc=Ne(Em),Tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lm[e])?!!t[e]:!1}function $a(){return Im}var Rm=X({},go,{key:function(e){if(e.key){var t=Tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zm=Ne(Rm),Nm=X({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=Ne(Nm),Dm=X({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),Mm=Ne(Dm),Am=X({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=Ne(Am),_m=X({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=Ne(_m),Bm=[9,13,27,32],Ea=mt&&"CompositionEvent"in window,Nr=null;mt&&"documentMode"in document&&(Nr=document.documentMode);var Um=mt&&"TextEvent"in window&&!Nr,Tp=mt&&(!Ea||Nr&&8<Nr&&11>=Nr),Dc=" ",Mc=!1;function Pp(e,t){switch(e){case"keyup":return Bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function Wm(e,t){switch(e){case"compositionend":return Lp(t);case"keypress":return t.which!==32?null:(Mc=!0,Dc);case"textInput":return e=t.data,e===Dc&&Mc?null:e;default:return null}}function Vm(e,t){if(Tn)return e==="compositionend"||!Ea&&Pp(e,t)?(e=Ep(),Zo=Sa=Rt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tp&&t.locale!=="ko"?null:t.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hm[e.type]:t==="textarea"}function Ip(e,t,n,r){ap(r),t=vi(t,"onChange"),0<t.length&&(n=new Ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Jr=null;function Qm(e){Up(e,0)}function Hi(e){var t=In(e);if(tp(t))return e}function Km(e,t){if(e==="change")return t}var Rp=!1;if(mt){var Cl;if(mt){var $l="oninput"in document;if(!$l){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),$l=typeof Oc.oninput=="function"}Cl=$l}else Cl=!1;Rp=Cl&&(!document.documentMode||9<document.documentMode)}function _c(){Dr&&(Dr.detachEvent("onpropertychange",zp),Jr=Dr=null)}function zp(e){if(e.propertyName==="value"&&Hi(Jr)){var t=[];Ip(t,Jr,e,va(e)),pp(Qm,t)}}function Gm(e,t,n){e==="focusin"?(_c(),Dr=t,Jr=n,Dr.attachEvent("onpropertychange",zp)):e==="focusout"&&_c()}function Ym(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Jr)}function Jm(e,t){if(e==="click")return Hi(t)}function Xm(e,t){if(e==="input"||e==="change")return Hi(t)}function Zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Zm;function Xr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!es.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,t){var n=Fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fc(n)}}function Np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dp(){for(var e=window,t=pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pi(e.document)}return t}function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qm(e){var t=Dp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Np(n.ownerDocument.documentElement,n)){if(r!==null&&Ta(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Bc(n,i);var s=Bc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eg=mt&&"documentMode"in document&&11>=document.documentMode,Pn=null,vs=null,Mr=null,ws=!1;function Uc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ws||Pn==null||Pn!==pi(r)||(r=Pn,"selectionStart"in r&&Ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Xr(Mr,r)||(Mr=r,r=vi(vs,"onSelect"),0<r.length&&(t=new Ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function Io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},El={},Mp={};mt&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function Qi(e){if(El[e])return El[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mp)return El[e]=t[n];return e}var Ap=Qi("animationend"),Op=Qi("animationiteration"),_p=Qi("animationstart"),Fp=Qi("transitionend"),Bp=new Map,Wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Bp.set(e,t),wn(t,[e])}for(var Tl=0;Tl<Wc.length;Tl++){var Pl=Wc[Tl],tg=Pl.toLowerCase(),ng=Pl[0].toUpperCase()+Pl.slice(1);Zt(tg,"on"+ng)}Zt(Ap,"onAnimationEnd");Zt(Op,"onAnimationIteration");Zt(_p,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Fp,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Vc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tm(r,t,void 0,e),e.currentTarget=null}function Up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;Vc(o,a,u),i=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;Vc(o,a,u),i=c}}}if(hi)throw e=ms,hi=!1,ms=null,e}function V(e,t){var n=t[Cs];n===void 0&&(n=t[Cs]=new Set);var r=e+"__bubble";n.has(r)||(Wp(t,e,2,!1),n.add(r))}function Ll(e,t,n){var r=0;t&&(r|=4),Wp(n,e,r,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Ro]){e[Ro]=!0,Jd.forEach(function(n){n!=="selectionchange"&&(rg.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,Ll("selectionchange",!1,t))}}function Wp(e,t,n,r){switch($p(t)){case 1:var o=xm;break;case 4:o=ym;break;default:o=ja}n=o.bind(null,t,n,e),o=void 0,!hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=an(a),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}a=a.parentNode}}r=r.return}pp(function(){var u=i,f=va(n),h=[];e:{var x=Bp.get(e);if(x!==void 0){var w=Ca,y=e;switch(e){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":w=zm;break;case"focusin":y="focus",w=Sl;break;case"focusout":y="blur",w=Sl;break;case"beforeblur":case"afterblur":w=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Mm;break;case Ap:case Op:case _p:w=Sm;break;case Fp:w=Om;break;case"scroll":w=vm;break;case"wheel":w=Fm;break;case"copy":case"cut":case"paste":w=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Nc}var j=(t&4)!==0,$=!j&&e==="scroll",m=j?x!==null?x+"Capture":null:x;j=[];for(var p=u,g;p!==null;){g=p;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,m!==null&&(b=Qr(p,m),b!=null&&j.push(qr(p,b,g)))),$)break;p=p.return}0<j.length&&(x=new w(x,y,null,n,f),h.push({event:x,listeners:j}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",x&&n!==ps&&(y=n.relatedTarget||n.fromElement)&&(an(y)||y[gt]))break e;if((w||x)&&(x=f.window===f?f:(x=f.ownerDocument)?x.defaultView||x.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?an(y):null,y!==null&&($=bn(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(j=Rc,b="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=Nc,b="onPointerLeave",m="onPointerEnter",p="pointer"),$=w==null?x:In(w),g=y==null?x:In(y),x=new j(b,p+"leave",w,n,f),x.target=$,x.relatedTarget=g,b=null,an(f)===u&&(j=new j(m,p+"enter",y,n,f),j.target=g,j.relatedTarget=$,b=j),$=b,w&&y)t:{for(j=w,m=y,p=0,g=j;g;g=jn(g))p++;for(g=0,b=m;b;b=jn(b))g++;for(;0<p-g;)j=jn(j),p--;for(;0<g-p;)m=jn(m),g--;for(;p--;){if(j===m||m!==null&&j===m.alternate)break t;j=jn(j),m=jn(m)}j=null}else j=null;w!==null&&Hc(h,x,w,j,!1),y!==null&&$!==null&&Hc(h,$,y,j,!0)}}e:{if(x=u?In(u):window,w=x.nodeName&&x.nodeName.toLowerCase(),w==="select"||w==="input"&&x.type==="file")var v=Km;else if(Ac(x))if(Rp)v=Xm;else{v=Ym;var C=Gm}else(w=x.nodeName)&&w.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(v=Jm);if(v&&(v=v(e,u))){Ip(h,v,n,f);break e}C&&C(e,x,u),e==="focusout"&&(C=x._wrapperState)&&C.controlled&&x.type==="number"&&ss(x,"number",x.value)}switch(C=u?In(u):window,e){case"focusin":(Ac(C)||C.contentEditable==="true")&&(Pn=C,vs=u,Mr=null);break;case"focusout":Mr=vs=Pn=null;break;case"mousedown":ws=!0;break;case"contextmenu":case"mouseup":case"dragend":ws=!1,Uc(h,n,f);break;case"selectionchange":if(eg)break;case"keydown":case"keyup":Uc(h,n,f)}var S;if(Ea)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Tn?Pp(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Tp&&n.locale!=="ko"&&(Tn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Tn&&(S=Ep()):(Rt=f,Sa="value"in Rt?Rt.value:Rt.textContent,Tn=!0)),C=vi(u,E),0<C.length&&(E=new zc(E,e,null,n,f),h.push({event:E,listeners:C}),S?E.data=S:(S=Lp(n),S!==null&&(E.data=S)))),(S=Um?Wm(e,n):Vm(e,n))&&(u=vi(u,"onBeforeInput"),0<u.length&&(f=new zc("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=S))}Up(h,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qr(e,n),i!=null&&r.unshift(qr(e,i,o)),i=Qr(e,t),i!=null&&r.push(qr(e,i,o))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hc(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=Qr(n,i),c!=null&&s.unshift(qr(n,c,a))):o||(c=Qr(n,i),c!=null&&s.push(qr(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var og=/\r\n?/g,ig=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(og,`
`).replace(ig,"")}function zo(e,t,n){if(t=Qc(t),Qc(e)!==t&&n)throw Error(T(425))}function wi(){}var bs=null,ks=null;function js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ss=typeof setTimeout=="function"?setTimeout:void 0,lg=typeof clearTimeout=="function"?clearTimeout:void 0,Kc=typeof Promise=="function"?Promise:void 0,sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Kc<"u"?function(e){return Kc.resolve(null).then(e).catch(ag)}:Ss;function ag(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),nt="__reactFiber$"+sr,eo="__reactProps$"+sr,gt="__reactContainer$"+sr,Cs="__reactEvents$"+sr,cg="__reactListeners$"+sr,ug="__reactHandles$"+sr;function an(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gc(e);e!==null;){if(n=e[nt])return n;e=Gc(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ki(e){return e[eo]||null}var $s=[],Rn=-1;function qt(e){return{current:e}}function Q(e){0>Rn||(e.current=$s[Rn],$s[Rn]=null,Rn--)}function W(e,t){Rn++,$s[Rn]=e.current,e.current=t}var Jt={},ye=qt(Jt),Ce=qt(!1),hn=Jt;function Qn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function bi(){Q(Ce),Q(ye)}function Yc(e,t,n){if(ye.current!==Jt)throw Error(T(168));W(ye,t),W(Ce,n)}function Vp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,G0(e)||"Unknown",o));return X({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,hn=ye.current,W(ye,e),W(Ce,Ce.current),!0}function Jc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Vp(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,Q(Ce),Q(ye),W(ye,e)):Q(Ce),W(Ce,n)}var ct=null,Gi=!1,zl=!1;function Hp(e){ct===null?ct=[e]:ct.push(e)}function dg(e){Gi=!0,Hp(e)}function en(){if(!zl&&ct!==null){zl=!0;var e=0,t=F;try{var n=ct;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Gi=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),gp(wa,en),o}finally{F=t,zl=!1}}return null}var zn=[],Nn=0,ji=null,Si=0,Me=[],Ae=0,mn=null,pt=1,ft="";function rn(e,t){zn[Nn++]=Si,zn[Nn++]=ji,ji=e,Si=t}function Qp(e,t,n){Me[Ae++]=pt,Me[Ae++]=ft,Me[Ae++]=mn,mn=e;var r=pt;e=ft;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,pt=1<<32-Je(t)+o|n<<o|r,ft=i+e}else pt=1<<i|n<<o|r,ft=e}function Pa(e){e.return!==null&&(rn(e,1),Qp(e,1,0))}function La(e){for(;e===ji;)ji=zn[--Nn],zn[Nn]=null,Si=zn[--Nn],zn[Nn]=null;for(;e===mn;)mn=Me[--Ae],Me[Ae]=null,ft=Me[--Ae],Me[Ae]=null,pt=Me[--Ae],Me[Ae]=null}var Ie=null,Le=null,K=!1,Ye=null;function Kp(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Le=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:pt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Le=null,!0):!1;default:return!1}}function Es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ts(e){if(K){var t=Le;if(t){var n=t;if(!Xc(e,t)){if(Es(e))throw Error(T(418));t=Ut(n.nextSibling);var r=Ie;t&&Xc(e,t)?Kp(r,n):(e.flags=e.flags&-4097|2,K=!1,Ie=e)}}else{if(Es(e))throw Error(T(418));e.flags=e.flags&-4097|2,K=!1,Ie=e}}}function Zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function No(e){if(e!==Ie)return!1;if(!K)return Zc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!js(e.type,e.memoizedProps)),t&&(t=Le)){if(Es(e))throw Gp(),Error(T(418));for(;t;)Kp(e,t),t=Ut(t.nextSibling)}if(Zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Ie?Ut(e.stateNode.nextSibling):null;return!0}function Gp(){for(var e=Le;e;)e=Ut(e.nextSibling)}function Kn(){Le=Ie=null,K=!1}function Ia(e){Ye===null?Ye=[e]:Ye.push(e)}var pg=vt.ReactCurrentBatchConfig;function yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qc(e){var t=e._init;return t(e._payload)}function Yp(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=Qt(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,b){return p===null||p.tag!==6?(p=Fl(g,m.mode,b),p.return=m,p):(p=o(p,g),p.return=m,p)}function c(m,p,g,b){var v=g.type;return v===En?f(m,p,g.props.children,b,g.key):p!==null&&(p.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Tt&&qc(v)===p.type)?(b=o(p,g.props),b.ref=yr(m,p,g),b.return=m,b):(b=li(g.type,g.key,g.props,null,m.mode,b),b.ref=yr(m,p,g),b.return=m,b)}function u(m,p,g,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Bl(g,m.mode,b),p.return=m,p):(p=o(p,g.children||[]),p.return=m,p)}function f(m,p,g,b,v){return p===null||p.tag!==7?(p=pn(g,m.mode,b,v),p.return=m,p):(p=o(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fl(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case So:return g=li(p.type,p.key,p.props,null,m.mode,g),g.ref=yr(m,null,p),g.return=m,g;case $n:return p=Bl(p,m.mode,g),p.return=m,p;case Tt:var b=p._init;return h(m,b(p._payload),g)}if($r(p)||fr(p))return p=pn(p,m.mode,g,null),p.return=m,p;Do(m,p)}return null}function x(m,p,g,b){var v=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return v!==null?null:a(m,p,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case So:return g.key===v?c(m,p,g,b):null;case $n:return g.key===v?u(m,p,g,b):null;case Tt:return v=g._init,x(m,p,v(g._payload),b)}if($r(g)||fr(g))return v!==null?null:f(m,p,g,b,null);Do(m,g)}return null}function w(m,p,g,b,v){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(g)||null,a(p,m,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case So:return m=m.get(b.key===null?g:b.key)||null,c(p,m,b,v);case $n:return m=m.get(b.key===null?g:b.key)||null,u(p,m,b,v);case Tt:var C=b._init;return w(m,p,g,C(b._payload),v)}if($r(b)||fr(b))return m=m.get(g)||null,f(p,m,b,v,null);Do(p,b)}return null}function y(m,p,g,b){for(var v=null,C=null,S=p,E=p=0,M=null;S!==null&&E<g.length;E++){S.index>E?(M=S,S=null):M=S.sibling;var z=x(m,S,g[E],b);if(z===null){S===null&&(S=M);break}e&&S&&z.alternate===null&&t(m,S),p=i(z,p,E),C===null?v=z:C.sibling=z,C=z,S=M}if(E===g.length)return n(m,S),K&&rn(m,E),v;if(S===null){for(;E<g.length;E++)S=h(m,g[E],b),S!==null&&(p=i(S,p,E),C===null?v=S:C.sibling=S,C=S);return K&&rn(m,E),v}for(S=r(m,S);E<g.length;E++)M=w(S,m,E,g[E],b),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?E:M.key),p=i(M,p,E),C===null?v=M:C.sibling=M,C=M);return e&&S.forEach(function(U){return t(m,U)}),K&&rn(m,E),v}function j(m,p,g,b){var v=fr(g);if(typeof v!="function")throw Error(T(150));if(g=v.call(g),g==null)throw Error(T(151));for(var C=v=null,S=p,E=p=0,M=null,z=g.next();S!==null&&!z.done;E++,z=g.next()){S.index>E?(M=S,S=null):M=S.sibling;var U=x(m,S,z.value,b);if(U===null){S===null&&(S=M);break}e&&S&&U.alternate===null&&t(m,S),p=i(U,p,E),C===null?v=U:C.sibling=U,C=U,S=M}if(z.done)return n(m,S),K&&rn(m,E),v;if(S===null){for(;!z.done;E++,z=g.next())z=h(m,z.value,b),z!==null&&(p=i(z,p,E),C===null?v=z:C.sibling=z,C=z);return K&&rn(m,E),v}for(S=r(m,S);!z.done;E++,z=g.next())z=w(S,m,E,z.value,b),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?E:z.key),p=i(z,p,E),C===null?v=z:C.sibling=z,C=z);return e&&S.forEach(function(We){return t(m,We)}),K&&rn(m,E),v}function $(m,p,g,b){if(typeof g=="object"&&g!==null&&g.type===En&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case So:e:{for(var v=g.key,C=p;C!==null;){if(C.key===v){if(v=g.type,v===En){if(C.tag===7){n(m,C.sibling),p=o(C,g.props.children),p.return=m,m=p;break e}}else if(C.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Tt&&qc(v)===C.type){n(m,C.sibling),p=o(C,g.props),p.ref=yr(m,C,g),p.return=m,m=p;break e}n(m,C);break}else t(m,C);C=C.sibling}g.type===En?(p=pn(g.props.children,m.mode,b,g.key),p.return=m,m=p):(b=li(g.type,g.key,g.props,null,m.mode,b),b.ref=yr(m,p,g),b.return=m,m=b)}return s(m);case $n:e:{for(C=g.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=o(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Bl(g,m.mode,b),p.return=m,m=p}return s(m);case Tt:return C=g._init,$(m,p,C(g._payload),b)}if($r(g))return y(m,p,g,b);if(fr(g))return j(m,p,g,b);Do(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,g),p.return=m,m=p):(n(m,p),p=Fl(g,m.mode,b),p.return=m,m=p),s(m)):n(m,p)}return $}var Gn=Yp(!0),Jp=Yp(!1),Ci=qt(null),$i=null,Dn=null,Ra=null;function za(){Ra=Dn=$i=null}function Na(e){var t=Ci.current;Q(Ci),e._currentValue=t}function Ps(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){$i=e,Ra=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Ra!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if($i===null)throw Error(T(308));Dn=e,$i.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var cn=null;function Da(e){cn===null?cn=[e]:cn.push(e)}function Xp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Da(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Da(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ba(e,n)}}function eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ei(e,t,n,r){var o=e.updateQueue;Pt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;s=0,f=u=c=null,a=i;do{var x=a.lane,w=a.eventTime;if((r&x)===x){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,j=a;switch(x=t,w=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){h=y.call(w,h,x);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,x=typeof y=="function"?y.call(w,h,x):y,x==null)break e;h=X({},h,x);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[a]:x.push(a))}else w={eventTime:w,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=w,c=h):f=f.next=w,s|=x;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;x=a,a=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(f===null&&(c=h),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xn|=s,e.lanes=s,e.memoizedState=h}}function tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var yo={},ot=qt(yo),to=qt(yo),no=qt(yo);function un(e){if(e===yo)throw Error(T(174));return e}function Aa(e,t){switch(W(no,t),W(to,e),W(ot,yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}Q(ot),W(ot,t)}function Yn(){Q(ot),Q(to),Q(no)}function qp(e){un(no.current);var t=un(ot.current),n=cs(t,e.type);t!==n&&(W(to,e),W(ot,n))}function Oa(e){to.current===e&&(Q(ot),Q(to))}var G=qt(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function _a(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var ti=vt.ReactCurrentDispatcher,Dl=vt.ReactCurrentBatchConfig,gn=0,Y=null,le=null,ce=null,Pi=!1,Ar=!1,ro=0,fg=0;function he(){throw Error(T(321))}function Fa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Ba(e,t,n,r,o,i){if(gn=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?xg:yg,e=n(r,o),Ar){i=0;do{if(Ar=!1,ro=0,25<=i)throw Error(T(301));i+=1,ce=le=null,t.updateQueue=null,ti.current=vg,e=n(r,o)}while(Ar)}if(ti.current=Li,t=le!==null&&le.next!==null,gn=0,ce=le=Y=null,Pi=!1,t)throw Error(T(300));return e}function Ua(){var e=ro!==0;return ro=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Y.memoizedState=ce=e:ce=ce.next=e,ce}function Be(){if(le===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ce===null?Y.memoizedState:ce.next;if(t!==null)ce=t,le=e;else{if(e===null)throw Error(T(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?Y.memoizedState=ce=e:ce=ce.next=e}return ce}function oo(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=Be(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,c=null,u=i;do{var f=u.lane;if((gn&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,s=r):c=c.next=h,Y.lanes|=f,xn|=f}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=a,qe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=Be(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);qe(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ef(){}function tf(e,t){var n=Y,r=Be(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,Wa(of.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,io(9,rf.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(T(349));gn&30||nf(n,t,o)}return o}function nf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rf(e,t,n,r){t.value=n,t.getSnapshot=r,lf(t)&&sf(e)}function of(e,t,n){return n(function(){lf(t)&&sf(e)})}function lf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function sf(e){var t=xt(e,1);t!==null&&Xe(t,e,1,-1)}function nu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:e},t.queue=e,e=e.dispatch=gg.bind(null,Y,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function af(){return Be().memoizedState}function ni(e,t,n,r){var o=tt();Y.flags|=e,o.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function Yi(e,t,n,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(le!==null){var s=le.memoizedState;if(i=s.destroy,r!==null&&Fa(r,s.deps)){o.memoizedState=io(t,n,i,r);return}}Y.flags|=e,o.memoizedState=io(1|t,n,i,r)}function ru(e,t){return ni(8390656,8,e,t)}function Wa(e,t){return Yi(2048,8,e,t)}function cf(e,t){return Yi(4,2,e,t)}function uf(e,t){return Yi(4,4,e,t)}function df(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pf(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4,4,df.bind(null,t,e),n)}function Va(){}function ff(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mf(e,t,n){return gn&21?(qe(n,t)||(n=vp(),Y.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function hg(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{F=n,Dl.transition=r}}function gf(){return Be().memoizedState}function mg(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xf(e))yf(t,n);else if(n=Xp(e,t,n,r),n!==null){var o=we();Xe(n,e,r,o),vf(n,t,r)}}function gg(e,t,n){var r=Ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xf(e))yf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,qe(a,s)){var c=t.interleaved;c===null?(o.next=o,Da(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Xp(e,t,o,r),n!==null&&(o=we(),Xe(n,e,r,o),vf(n,t,r))}}function xf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function yf(e,t){Ar=Pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ba(e,n)}}var Li={readContext:Fe,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},xg={readContext:Fe,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ni(4194308,4,df.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return ni(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mg.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:Va,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=hg.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=tt();if(K){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ue===null)throw Error(T(349));gn&30||nf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ru(of.bind(null,r,i,e),[e]),r.flags|=2048,io(9,rf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ue.identifierPrefix;if(K){var n=ft,r=pt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yg={readContext:Fe,useCallback:ff,useContext:Fe,useEffect:Wa,useImperativeHandle:pf,useInsertionEffect:cf,useLayoutEffect:uf,useMemo:hf,useReducer:Ml,useRef:af,useState:function(){return Ml(oo)},useDebugValue:Va,useDeferredValue:function(e){var t=Be();return mf(t,le.memoizedState,e)},useTransition:function(){var e=Ml(oo)[0],t=Be().memoizedState;return[e,t]},useMutableSource:ef,useSyncExternalStore:tf,useId:gf,unstable_isNewReconciler:!1},vg={readContext:Fe,useCallback:ff,useContext:Fe,useEffect:Wa,useImperativeHandle:pf,useInsertionEffect:cf,useLayoutEffect:uf,useMemo:hf,useReducer:Al,useRef:af,useState:function(){return Al(oo)},useDebugValue:Va,useDeferredValue:function(e){var t=Be();return le===null?t.memoizedState=e:mf(t,le.memoizedState,e)},useTransition:function(){var e=Al(oo)[0],t=Be().memoizedState;return[e,t]},useMutableSource:ef,useSyncExternalStore:tf,useId:gf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ji={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Ht(e),i=ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(Xe(t,e,o,r),ei(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Ht(e),i=ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(Xe(t,e,o,r),ei(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Ht(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(Xe(t,e,r,n),ei(t,e,r))}};function ou(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(o,i):!0}function wf(e,t,n){var r=!1,o=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(o=$e(t)?hn:ye.current,r=t.contextTypes,i=(r=r!=null)?Qn(e,o):Jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ji.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ma(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Fe(i):(i=$e(t)?hn:ye.current,o.context=Qn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ls(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ji.enqueueReplaceState(o,o.state,null),Ei(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=K0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wg=typeof WeakMap=="function"?WeakMap:Map;function bf(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ri||(Ri=!0,Us=r),Rs(e,t)},n}function kf(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Rs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Rs(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ng.bind(null,e,t,n),t.then(e,e))}function su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function au(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var bg=vt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Jp(t,null,n,r):Gn(t,e.child,n,r)}function cu(e,t,n,r,o){n=n.render;var i=t.ref;return Un(t,o),r=Ba(e,t,n,r,i,o),n=Ua(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(K&&n&&Pa(t),t.flags|=1,ve(e,t,r,o),t.child)}function uu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Za(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jf(e,t,i,r,o)):(e=li(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(s,r)&&e.ref===t.ref)return yt(e,t,o)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function jf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Xr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,yt(e,t,o)}return zs(e,t,n,r,o)}function Sf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(An,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(An,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(An,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(An,Pe),Pe|=r;return ve(e,t,o,n),t.child}function Cf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,n,r,o){var i=$e(n)?hn:ye.current;return i=Qn(t,i),Un(t,o),n=Ba(e,t,n,r,i,o),r=Ua(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(K&&r&&Pa(t),t.flags|=1,ve(e,t,n,o),t.child)}function du(e,t,n,r,o){if($e(n)){var i=!0;ki(t)}else i=!1;if(Un(t,o),t.stateNode===null)ri(e,t),wf(t,n,r),Is(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=$e(n)?hn:ye.current,u=Qn(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&iu(t,s,r,u),Pt=!1;var x=t.memoizedState;s.state=x,Ei(t,r,s,o),c=t.memoizedState,a!==r||x!==c||Ce.current||Pt?(typeof f=="function"&&(Ls(t,n,f,r),c=t.memoizedState),(a=Pt||ou(t,n,a,r,x,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Zp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),s.props=u,h=t.pendingProps,x=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Fe(c):(c=$e(n)?hn:ye.current,c=Qn(t,c));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||x!==c)&&iu(t,s,r,c),Pt=!1,x=t.memoizedState,s.state=x,Ei(t,r,s,o);var y=t.memoizedState;a!==h||x!==y||Ce.current||Pt?(typeof w=="function"&&(Ls(t,n,w,r),y=t.memoizedState),(u=Pt||ou(t,n,u,r,x,y,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ns(e,t,n,r,i,o)}function Ns(e,t,n,r,o,i){Cf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Jc(t,n,!1),yt(e,t,i);r=t.stateNode,bg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,a,i)):ve(e,t,a,i),t.memoizedState=r.state,o&&Jc(t,n,!0),t.child}function $f(e){var t=e.stateNode;t.pendingContext?Yc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yc(e,t.context,!1),Aa(e,t.containerInfo)}function pu(e,t,n,r,o){return Kn(),Ia(o),t.flags|=256,ve(e,t,n,r),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ef(e,t,n){var r=t.pendingProps,o=G.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(G,o&1),e===null)return Ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=qi(s,r,0,null),e=pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ms(n),t.memoizedState=Ds,e):Ha(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return kg(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Qt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Qt(a,i):(i=pn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ms(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ds,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ha(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&Ia(r),Gn(t,e.child,null,n),e=Ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kg(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ol(Error(T(422))),Mo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=qi({mode:"visible",children:r.children},o,0,null),i=pn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gn(t,e.child,null,s),t.child.memoizedState=Ms(s),t.memoizedState=Ds,i);if(!(t.mode&1))return Mo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(T(419)),r=Ol(i,r,void 0),Mo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Se||a){if(r=ue,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xt(e,o),Xe(r,e,o,-1))}return Xa(),r=Ol(Error(T(421))),Mo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Dg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=Ut(o.nextSibling),Ie=t,K=!0,Ye=null,e!==null&&(Me[Ae++]=pt,Me[Ae++]=ft,Me[Ae++]=mn,pt=e.id,ft=e.overflow,mn=t),t=Ha(t,r.children),t.flags|=4096,t)}function fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ps(e.return,t,n)}function _l(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Tf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fu(e,n,t);else if(e.tag===19)fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ti(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_l(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ti(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_l(t,!0,n,null,i);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jg(e,t,n){switch(t.tag){case 3:$f(t),Kn();break;case 5:qp(t);break;case 1:$e(t.type)&&ki(t);break;case 4:Aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Ci,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Ef(e,t,n):(W(G,G.current&1),e=yt(e,t,n),e!==null?e.sibling:null);W(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Sf(e,t,n)}return yt(e,t,n)}var Pf,As,Lf,If;Pf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};Lf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,un(ot.current);var i=null;switch(n){case"input":o=is(e,o),r=is(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=as(e,o),r=as(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wi)}us(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&V("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};If=function(e,t,n,r){n!==r&&(t.flags|=4)};function vr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sg(e,t,n){var r=t.pendingProps;switch(La(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return $e(t.type)&&bi(),me(t),null;case 3:return r=t.stateNode,Yn(),Q(Ce),Q(ye),_a(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Hs(Ye),Ye=null))),As(e,t),me(t),null;case 5:Oa(t);var o=un(no.current);if(n=t.type,e!==null&&t.stateNode!=null)Lf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return me(t),null}if(e=un(ot.current),No(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[eo]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Tr.length;o++)V(Tr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":kc(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Sc(r,i),V("invalid",r)}us(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,a,e),o=["children",""+a]):Vr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":Co(r),jc(r,i,!0);break;case"textarea":Co(r),Cc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=op(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[eo]=r,Pf(e,t,!1,!1),t.stateNode=e;e:{switch(s=ds(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Tr.length;o++)V(Tr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":kc(e,r),o=is(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":Sc(e,r),o=as(e,r),V("invalid",e);break;default:o=r}us(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?sp(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ip(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Hr(e,c):typeof c=="number"&&Hr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&V("scroll",e):c!=null&&ma(e,i,c,s))}switch(n){case"input":Co(e),jc(e,r,!1);break;case"textarea":Co(e),Cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?On(e,!!r.multiple,i,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)If(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=un(no.current),un(ot.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return me(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&t.mode&1&&!(t.flags&128))Gp(),Kn(),t.flags|=98560,i=!1;else if(i=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[nt]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ye!==null&&(Hs(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ae===0&&(ae=3):Xa())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Yn(),As(e,t),e===null&&Zr(t.stateNode.containerInfo),me(t),null;case 10:return Na(t.type._context),me(t),null;case 17:return $e(t.type)&&bi(),me(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)vr(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ti(e),s!==null){for(t.flags|=128,vr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Xn&&(t.flags|=128,r=!0,vr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ti(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!K)return me(t),null}else 2*te()-i.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,vr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=G.current,W(G,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Cg(e,t){switch(La(t),t.tag){case 1:return $e(t.type)&&bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),Q(Ce),Q(ye),_a(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oa(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return Yn(),null;case 10:return Na(t.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var Ao=!1,xe=!1,$g=typeof WeakSet=="function"?WeakSet:Set,L=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Os(e,t,n){try{n()}catch(r){ee(e,t,r)}}var hu=!1;function Eg(e,t){if(bs=xi,e=Dp(),Ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,f=0,h=e,x=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(w=h.firstChild)!==null;)x=h,h=w;for(;;){if(h===e)break t;if(x===n&&++u===o&&(a=s),x===i&&++f===r&&(c=s),(w=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=w}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},xi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,$=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?j:Qe(t.type,j),$);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(b){ee(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=hu,hu=!1,y}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Os(t,n,i)}o=o.next}while(o!==r)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _s(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rf(e){var t=e.alternate;t!==null&&(e.alternate=null,Rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[eo],delete t[Cs],delete t[cg],delete t[ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zf(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}var de=null,Ke=!1;function St(e,t,n){for(n=n.child;n!==null;)Nf(e,t,n),n=n.sibling}function Nf(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Wi,n)}catch{}switch(n.tag){case 5:xe||Mn(n,t);case 6:var r=de,o=Ke;de=null,St(e,t,n),de=r,Ke=o,de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),Yr(e)):Rl(de,n.stateNode));break;case 4:r=de,o=Ke,de=n.stateNode.containerInfo,Ke=!0,St(e,t,n),de=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Os(n,t,s),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!xe&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,St(e,t,n),xe=r):St(e,t,n);break;default:St(e,t,n)}}function gu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $g),t.forEach(function(r){var o=Mg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Ke=!1;break e;case 3:de=a.stateNode.containerInfo,Ke=!0;break e;case 4:de=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(de===null)throw Error(T(160));Nf(i,s,o),de=null,Ke=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Df(t,e),t=t.sibling}function Df(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),et(e),r&4){try{Or(3,e,e.return),Xi(3,e)}catch(j){ee(e,e.return,j)}try{Or(5,e,e.return)}catch(j){ee(e,e.return,j)}}break;case 1:He(t,e),et(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(He(t,e),et(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch(j){ee(e,e.return,j)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&np(o,i),ds(a,s);var u=ds(a,i);for(s=0;s<c.length;s+=2){var f=c[s],h=c[s+1];f==="style"?sp(o,h):f==="dangerouslySetInnerHTML"?ip(o,h):f==="children"?Hr(o,h):ma(o,f,h,u)}switch(a){case"input":ls(o,i);break;case"textarea":rp(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?On(o,!!i.multiple,w,!1):x!==!!i.multiple&&(i.defaultValue!=null?On(o,!!i.multiple,i.defaultValue,!0):On(o,!!i.multiple,i.multiple?[]:"",!1))}o[eo]=i}catch(j){ee(e,e.return,j)}}break;case 6:if(He(t,e),et(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(j){ee(e,e.return,j)}}break;case 3:if(He(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(j){ee(e,e.return,j)}break;case 4:He(t,e),et(e);break;case 13:He(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ga=te())),r&4&&gu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||f,He(t,e),xe=u):He(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(L=e,f=e.child;f!==null;){for(h=L=f;L!==null;){switch(x=L,w=x.child,x.tag){case 0:case 11:case 14:case 15:Or(4,x,x.return);break;case 1:Mn(x,x.return);var y=x.stateNode;if(typeof y.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){ee(r,n,j)}}break;case 5:Mn(x,x.return);break;case 22:if(x.memoizedState!==null){yu(h);continue}}w!==null?(w.return=x,L=w):yu(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=lp("display",s))}catch(j){ee(e,e.return,j)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(j){ee(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),et(e),r&4&&gu(e);break;case 21:break;default:He(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zf(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hr(o,""),r.flags&=-33);var i=mu(e);Bs(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=mu(e);Fs(e,a,s);break;default:throw Error(T(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tg(e,t,n){L=e,Mf(e)}function Mf(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Ao;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||xe;a=Ao;var u=xe;if(Ao=s,(xe=c)&&!u)for(L=o;L!==null;)s=L,c=s.child,s.tag===22&&s.memoizedState!==null?vu(o):c!==null?(c.return=s,L=c):vu(o);for(;i!==null;)L=i,Mf(i),i=i.sibling;L=o,Ao=a,xe=u}xu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):xu(e)}}function xu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Xi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&tu(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Yr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}xe||t.flags&512&&_s(t)}catch(x){ee(t,t.return,x)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function yu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function vu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xi(4,t)}catch(c){ee(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ee(t,o,c)}}var i=t.return;try{_s(t)}catch(c){ee(t,i,c)}break;case 5:var s=t.return;try{_s(t)}catch(c){ee(t,s,c)}}}catch(c){ee(t,t.return,c)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var Pg=Math.ceil,Ii=vt.ReactCurrentDispatcher,Qa=vt.ReactCurrentOwner,_e=vt.ReactCurrentBatchConfig,A=0,ue=null,oe=null,pe=0,Pe=0,An=qt(0),ae=0,lo=null,xn=0,Zi=0,Ka=0,_r=null,je=null,Ga=0,Xn=1/0,lt=null,Ri=!1,Us=null,Vt=null,Oo=!1,zt=null,zi=0,Fr=0,Ws=null,oi=-1,ii=0;function we(){return A&6?te():oi!==-1?oi:oi=te()}function Ht(e){return e.mode&1?A&2&&pe!==0?pe&-pe:pg.transition!==null?(ii===0&&(ii=vp()),ii):(e=F,e!==0||(e=window.event,e=e===void 0?16:$p(e.type)),e):1}function Xe(e,t,n,r){if(50<Fr)throw Fr=0,Ws=null,Error(T(185));mo(e,n,r),(!(A&2)||e!==ue)&&(e===ue&&(!(A&2)&&(Zi|=n),ae===4&&It(e,pe)),Ee(e,r),n===1&&A===0&&!(t.mode&1)&&(Xn=te()+500,Gi&&en()))}function Ee(e,t){var n=e.callbackNode;pm(e,t);var r=gi(e,e===ue?pe:0);if(r===0)n!==null&&Tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tc(n),t===1)e.tag===0?dg(wu.bind(null,e)):Hp(wu.bind(null,e)),sg(function(){!(A&6)&&en()}),n=null;else{switch(wp(r)){case 1:n=wa;break;case 4:n=xp;break;case 16:n=mi;break;case 536870912:n=yp;break;default:n=mi}n=Vf(n,Af.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Af(e,t){if(oi=-1,ii=0,A&6)throw Error(T(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=gi(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ni(e,r);else{t=r;var o=A;A|=2;var i=_f();(ue!==e||pe!==t)&&(lt=null,Xn=te()+500,dn(e,t));do try{Rg();break}catch(a){Of(e,a)}while(!0);za(),Ii.current=i,A=o,oe!==null?t=0:(ue=null,pe=0,t=ae)}if(t!==0){if(t===2&&(o=gs(e),o!==0&&(r=o,t=Vs(e,o))),t===1)throw n=lo,dn(e,0),It(e,r),Ee(e,te()),n;if(t===6)It(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lg(o)&&(t=Ni(e,r),t===2&&(i=gs(e),i!==0&&(r=i,t=Vs(e,i))),t===1))throw n=lo,dn(e,0),It(e,r),Ee(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:on(e,je,lt);break;case 3:if(It(e,r),(r&130023424)===r&&(t=Ga+500-te(),10<t)){if(gi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ss(on.bind(null,e,je,lt),t);break}on(e,je,lt);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Je(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pg(r/1960))-r,10<r){e.timeoutHandle=Ss(on.bind(null,e,je,lt),r);break}on(e,je,lt);break;case 5:on(e,je,lt);break;default:throw Error(T(329))}}}return Ee(e,te()),e.callbackNode===n?Af.bind(null,e):null}function Vs(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Ni(e,t),e!==2&&(t=je,je=n,t!==null&&Hs(t)),e}function Hs(e){je===null?je=e:je.push.apply(je,e)}function Lg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~Ka,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function wu(e){if(A&6)throw Error(T(327));Wn();var t=gi(e,0);if(!(t&1))return Ee(e,te()),null;var n=Ni(e,t);if(e.tag!==0&&n===2){var r=gs(e);r!==0&&(t=r,n=Vs(e,r))}if(n===1)throw n=lo,dn(e,0),It(e,t),Ee(e,te()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,je,lt),Ee(e,te()),null}function Ya(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Xn=te()+500,Gi&&en())}}function yn(e){zt!==null&&zt.tag===0&&!(A&6)&&Wn();var t=A;A|=1;var n=_e.transition,r=F;try{if(_e.transition=null,F=1,e)return e()}finally{F=r,_e.transition=n,A=t,!(A&6)&&en()}}function Ja(){Pe=An.current,Q(An)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lg(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(La(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bi();break;case 3:Yn(),Q(Ce),Q(ye),_a();break;case 5:Oa(r);break;case 4:Yn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Na(r.type._context);break;case 22:case 23:Ja()}n=n.return}if(ue=e,oe=e=Qt(e.current,null),pe=Pe=t,ae=0,lo=null,Ka=Zi=xn=0,je=_r=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}cn=null}return e}function Of(e,t){do{var n=oe;try{if(za(),ti.current=Li,Pi){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pi=!1}if(gn=0,ce=le=Y=null,Ar=!1,ro=0,Qa.current=null,n===null||n.return===null){ae=1,lo=t,oe=null;break}e:{var i=e,s=n.return,a=n,c=t;if(t=pe,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var x=f.alternate;x?(f.updateQueue=x.updateQueue,f.memoizedState=x.memoizedState,f.lanes=x.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=su(s);if(w!==null){w.flags&=-257,au(w,s,a,i,t),w.mode&1&&lu(i,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){lu(i,u,t),Xa();break e}c=Error(T(426))}}else if(K&&a.mode&1){var $=su(s);if($!==null){!($.flags&65536)&&($.flags|=256),au($,s,a,i,t),Ia(Jn(c,a));break e}}i=c=Jn(c,a),ae!==4&&(ae=2),_r===null?_r=[i]:_r.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=bf(i,c,t);eu(i,m);break e;case 1:a=c;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vt===null||!Vt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=kf(i,a,t);eu(i,b);break e}}i=i.return}while(i!==null)}Bf(n)}catch(v){t=v,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function _f(){var e=Ii.current;return Ii.current=Li,e===null?Li:e}function Xa(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(xn&268435455)&&!(Zi&268435455)||It(ue,pe)}function Ni(e,t){var n=A;A|=2;var r=_f();(ue!==e||pe!==t)&&(lt=null,dn(e,t));do try{Ig();break}catch(o){Of(e,o)}while(!0);if(za(),A=n,Ii.current=r,oe!==null)throw Error(T(261));return ue=null,pe=0,ae}function Ig(){for(;oe!==null;)Ff(oe)}function Rg(){for(;oe!==null&&!rm();)Ff(oe)}function Ff(e){var t=Wf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Bf(e):oe=t,Qa.current=null}function Bf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cg(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=Sg(n,t,Pe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function on(e,t,n){var r=F,o=_e.transition;try{_e.transition=null,F=1,zg(e,t,n,r)}finally{_e.transition=o,F=r}return null}function zg(e,t,n,r){do Wn();while(zt!==null);if(A&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(fm(e,i),e===ue&&(oe=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,Vf(mi,function(){return Wn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_e.transition,_e.transition=null;var s=F;F=1;var a=A;A|=4,Qa.current=null,Eg(e,n),Df(n,e),qm(ks),xi=!!bs,ks=bs=null,e.current=n,Tg(n),om(),A=a,F=s,_e.transition=i}else e.current=n;if(Oo&&(Oo=!1,zt=e,zi=o),i=e.pendingLanes,i===0&&(Vt=null),sm(n.stateNode),Ee(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ri)throw Ri=!1,e=Us,Us=null,e;return zi&1&&e.tag!==0&&Wn(),i=e.pendingLanes,i&1?e===Ws?Fr++:(Fr=0,Ws=e):Fr=0,en(),null}function Wn(){if(zt!==null){var e=wp(zi),t=_e.transition,n=F;try{if(_e.transition=null,F=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,zi=0,A&6)throw Error(T(331));var o=A;for(A|=4,L=e.current;L!==null;){var i=L,s=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(L=u;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:Or(8,f,i)}var h=f.child;if(h!==null)h.return=f,L=h;else for(;L!==null;){f=L;var x=f.sibling,w=f.return;if(Rf(f),f===u){L=null;break}if(x!==null){x.return=w,L=x;break}L=w}}}var y=i.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var $=j.sibling;j.sibling=null,j=$}while(j!==null)}}L=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,L=s;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Or(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var p=e.current;for(L=p;L!==null;){s=L;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,L=g;else e:for(s=p;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xi(9,a)}}catch(v){ee(a,a.return,v)}if(a===s){L=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,L=b;break e}L=a.return}}if(A=o,en(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Wi,e)}catch{}r=!0}return r}finally{F=n,_e.transition=t}}return!1}function bu(e,t,n){t=Jn(n,t),t=bf(e,t,1),e=Wt(e,t,1),t=we(),e!==null&&(mo(e,1,t),Ee(e,t))}function ee(e,t,n){if(e.tag===3)bu(e,e,n);else for(;t!==null;){if(t.tag===3){bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Jn(n,e),e=kf(t,e,1),t=Wt(t,e,1),e=we(),t!==null&&(mo(t,1,e),Ee(t,e));break}}t=t.return}}function Ng(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>te()-Ga?dn(e,0):Ka|=n),Ee(e,t)}function Uf(e,t){t===0&&(e.mode&1?(t=To,To<<=1,!(To&130023424)&&(To=4194304)):t=1);var n=we();e=xt(e,t),e!==null&&(mo(e,t,n),Ee(e,n))}function Dg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uf(e,n)}function Mg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Uf(e,n)}var Wf;Wf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,jg(e,t,n);Se=!!(e.flags&131072)}else Se=!1,K&&t.flags&1048576&&Qp(t,Si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ri(e,t),e=t.pendingProps;var o=Qn(t,ye.current);Un(t,n),o=Ba(null,t,r,e,o,n);var i=Ua();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(i=!0,ki(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ma(t),o.updater=Ji,t.stateNode=o,o._reactInternals=t,Is(t,r,e,n),t=Ns(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Pa(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ri(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Og(r),e=Qe(r,e),o){case 0:t=zs(null,t,r,e,n);break e;case 1:t=du(null,t,r,e,n);break e;case 11:t=cu(null,t,r,e,n);break e;case 14:t=uu(null,t,r,Qe(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),zs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),du(e,t,r,o,n);case 3:e:{if($f(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Zp(e,t),Ei(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Jn(Error(T(423)),t),t=pu(e,t,r,n,o);break e}else if(r!==o){o=Jn(Error(T(424)),t),t=pu(e,t,r,n,o);break e}else for(Le=Ut(t.stateNode.containerInfo.firstChild),Ie=t,K=!0,Ye=null,n=Jp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===o){t=yt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return qp(t),e===null&&Ts(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,js(r,o)?s=null:i!==null&&js(r,i)&&(t.flags|=32),Cf(e,t),ve(e,t,s,n),t.child;case 6:return e===null&&Ts(t),null;case 13:return Ef(e,t,n);case 4:return Aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),cu(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,W(Ci,r._currentValue),r._currentValue=s,i!==null)if(qe(i.value,s)){if(i.children===o.children&&!Ce.current){t=yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=ht(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ps(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ps(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Un(t,n),o=Fe(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),uu(e,t,r,o,n);case 15:return jf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ri(e,t),t.tag=1,$e(r)?(e=!0,ki(t)):e=!1,Un(t,n),wf(t,r,o),Is(t,r,o,n),Ns(null,t,r,!0,e,n);case 19:return Tf(e,t,n);case 22:return Sf(e,t,n)}throw Error(T(156,t.tag))};function Vf(e,t){return gp(e,t)}function Ag(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new Ag(e,t,n,r)}function Za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Og(e){if(typeof e=="function")return Za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===ya)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function li(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Za(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case En:return pn(n.children,o,i,t);case ga:s=8,o|=8;break;case ts:return e=Oe(12,n,t,o|2),e.elementType=ts,e.lanes=i,e;case ns:return e=Oe(13,n,t,o),e.elementType=ns,e.lanes=i,e;case rs:return e=Oe(19,n,t,o),e.elementType=rs,e.lanes=i,e;case qd:return qi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xd:s=10;break e;case Zd:s=9;break e;case xa:s=11;break e;case ya:s=14;break e;case Tt:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Oe(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function pn(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function qi(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=qd,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _g(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qa(e,t,n,r,o,i,s,a,c){return e=new _g(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Oe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(i),e}function Fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hf(e){if(!e)return Jt;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if($e(n))return Vp(e,n,t)}return t}function Qf(e,t,n,r,o,i,s,a,c){return e=qa(n,r,!0,e,o,i,s,a,c),e.context=Hf(null),n=e.current,r=we(),o=Ht(n),i=ht(r,o),i.callback=t??null,Wt(n,i,o),e.current.lanes=o,mo(e,o,r),Ee(e,r),e}function el(e,t,n,r){var o=t.current,i=we(),s=Ht(o);return n=Hf(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,s),e!==null&&(Xe(e,o,s,i),ei(e,o,s)),s}function Di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){ku(e,t),(e=e.alternate)&&ku(e,t)}function Bg(){return null}var Kf=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}tl.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));el(e,t,null,null)};tl.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){el(null,e,null,null)}),t[gt]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=jp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Cp(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ju(){}function Ug(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Di(s);i.call(u)}}var s=Qf(t,r,e,0,null,!1,!1,"",ju);return e._reactRootContainer=s,e[gt]=s.current,Zr(e.nodeType===8?e.parentNode:e),yn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Di(c);a.call(u)}}var c=qa(e,0,!1,null,null,!1,!1,"",ju);return e._reactRootContainer=c,e[gt]=c.current,Zr(e.nodeType===8?e.parentNode:e),yn(function(){el(t,c,n,r)}),c}function rl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var c=Di(s);a.call(c)}}el(t,s,e,o)}else s=Ug(n,t,e,o,r);return Di(s)}bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Er(t.pendingLanes);n!==0&&(ba(t,n|1),Ee(t,te()),!(A&6)&&(Xn=te()+500,en()))}break;case 13:yn(function(){var r=xt(e,1);if(r!==null){var o=we();Xe(r,e,1,o)}}),ec(e,1)}};ka=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=we();Xe(t,e,134217728,n)}ec(e,134217728)}};kp=function(e){if(e.tag===13){var t=Ht(e),n=xt(e,t);if(n!==null){var r=we();Xe(n,e,t,r)}ec(e,t)}};jp=function(){return F};Sp=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};fs=function(e,t,n){switch(t){case"input":if(ls(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ki(r);if(!o)throw Error(T(90));tp(r),ls(r,o)}}}break;case"textarea":rp(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};up=Ya;dp=yn;var Wg={usingClientEntryPoint:!1,Events:[xo,In,Ki,ap,cp,Ya]},wr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vg={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hp(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Bg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Wi=_o.inject(Vg),rt=_o}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wg;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(T(200));return Fg(e,t,null,n)};ze.createRoot=function(e,t){if(!nc(e))throw Error(T(299));var n=!1,r="",o=Kf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qa(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new tc(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=hp(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return yn(e)};ze.hydrate=function(e,t,n){if(!nl(t))throw Error(T(200));return rl(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Kf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Qf(t,null,e,1,n??null,o,!1,i,s),e[gt]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new tl(t)};ze.render=function(e,t,n){if(!nl(t))throw Error(T(200));return rl(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!nl(e))throw Error(T(40));return e._reactRootContainer?(yn(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};ze.unstable_batchedUpdates=Ya;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return rl(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Gf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gf)}catch(e){console.error(e)}}Gf(),Kd.exports=ze;var rc=Kd.exports,Yf,Su=rc;Yf=Su.createRoot,Su.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(null,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const Cu="popstate";function Hg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Qs("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Mi(o)}return Kg(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function oc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qg(){return Math.random().toString(36).substr(2,8)}function $u(e,t){return{usr:e.state,key:e.key,idx:t}}function Qs(e,t,n,r){return n===void 0&&(n=null),so({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ar(t):t,{state:n,key:t&&t.key||r||Qg()})}function Mi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Kg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Nt.Pop,c=null,u=f();u==null&&(u=0,s.replaceState(so({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function h(){a=Nt.Pop;let $=f(),m=$==null?null:$-u;u=$,c&&c({action:a,location:j.location,delta:m})}function x($,m){a=Nt.Push;let p=Qs(j.location,$,m);u=f()+1;let g=$u(p,u),b=j.createHref(p);try{s.pushState(g,"",b)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;o.location.assign(b)}i&&c&&c({action:a,location:j.location,delta:1})}function w($,m){a=Nt.Replace;let p=Qs(j.location,$,m);u=f();let g=$u(p,u),b=j.createHref(p);s.replaceState(g,"",b),i&&c&&c({action:a,location:j.location,delta:0})}function y($){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof $=="string"?$:Mi($);return p=p.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let j={get action(){return a},get location(){return e(o,s)},listen($){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Cu,h),c=$,()=>{o.removeEventListener(Cu,h),c=null}},createHref($){return t(o,$)},createURL:y,encodeLocation($){let m=y($);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:w,go($){return s.go($)}};return j}var Eu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Eu||(Eu={}));function Gg(e,t,n){return n===void 0&&(n="/"),Yg(e,t,n)}function Yg(e,t,n,r){let o=typeof t=="string"?ar(t):t,i=Zn(o.pathname||"/",n);if(i==null)return null;let s=Jf(e);Jg(s);let a=null,c=sx(i);for(let u=0;a==null&&u<s.length;++u)a=ix(s[u],c);return a}function Jf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Kt([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jf(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:rx(u,i.index),routesMeta:f})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let c of Xf(i.path))o(i,s,c)}),t}function Xf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Xf(r.join("/")),a=[];return a.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Jg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ox(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xg=/^:[\w-]+$/,Zg=3,qg=2,ex=1,tx=10,nx=-2,Tu=e=>e==="*";function rx(e,t){let n=e.split("/"),r=n.length;return n.some(Tu)&&(r+=nx),t&&(r+=qg),n.filter(o=>!Tu(o)).reduce((o,i)=>o+(Xg.test(i)?Zg:i===""?ex:tx),r)}function ox(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ix(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=Ks({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),x=c.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Kt([i,h.pathname]),pathnameBase:px(Kt([i,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(i=Kt([i,h.pathnameBase]))}return s}function Ks(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,f,h)=>{let{paramName:x,isOptional:w}=f;if(x==="*"){let j=a[h]||"";s=i.slice(0,i.length-j.length).replace(/(.)\/+$/,"$1")}const y=a[h];return w&&!y?u[x]=void 0:u[x]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function lx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),oc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function sx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return oc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cx=e=>ax.test(e);function ux(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ar(e):e,i;if(n)if(cx(n))i=n;else{if(n.includes("//")){let s=n;n=Zf(n),oc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Pu(n.substring(1),"/"):i=Pu(n,t)}else i=t;return{pathname:i,search:fx(r),hash:hx(o)}}function Pu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ul(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ic(e,t){let n=dx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ar(e):(o=so({},e),J(!o.pathname||!o.pathname.includes("?"),Ul("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Ul("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Ul("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),h-=1;o.pathname=x.join("/")}a=h>=0?t[h]:"/"}let c=ux(o,a),u=s&&s!=="/"&&s.endsWith("/"),f=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Zf=e=>e.replace(/\/\/+/g,"/"),Kt=e=>Zf(e.join("/")),px=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const qf=["post","put","patch","delete"];new Set(qf);const gx=["get",...qf];new Set(gx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(null,arguments)}const ol=k.createContext(null),eh=k.createContext(null),wt=k.createContext(null),il=k.createContext(null),bt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),th=k.createContext(null);function xx(e,t){let{relative:n}=t===void 0?{}:t;cr()||J(!1);let{basename:r,navigator:o}=k.useContext(wt),{hash:i,pathname:s,search:a}=ll(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Kt([r,s])),o.createHref({pathname:c,search:a,hash:i})}function cr(){return k.useContext(il)!=null}function it(){return cr()||J(!1),k.useContext(il).location}function nh(e){k.useContext(wt).static||k.useLayoutEffect(e)}function ur(){let{isDataRoute:e}=k.useContext(bt);return e?Ix():yx()}function yx(){cr()||J(!1);let e=k.useContext(ol),{basename:t,future:n,navigator:r}=k.useContext(wt),{matches:o}=k.useContext(bt),{pathname:i}=it(),s=JSON.stringify(ic(o,n.v7_relativeSplatPath)),a=k.useRef(!1);return nh(()=>{a.current=!0}),k.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=lc(u,JSON.parse(s),i,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Kt([t,h.pathname])),(f.replace?r.replace:r.push)(h,f.state,f)},[t,r,s,i,e])}function vx(){let{matches:e}=k.useContext(bt),t=e[e.length-1];return t?t.params:{}}function ll(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(wt),{matches:o}=k.useContext(bt),{pathname:i}=it(),s=JSON.stringify(ic(o,r.v7_relativeSplatPath));return k.useMemo(()=>lc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function wx(e,t){return bx(e,t)}function bx(e,t,n,r){cr()||J(!1);let{navigator:o}=k.useContext(wt),{matches:i}=k.useContext(bt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=it(),f;if(t){var h;let $=typeof t=="string"?ar(t):t;c==="/"||(h=$.pathname)!=null&&h.startsWith(c)||J(!1),f=$}else f=u;let x=f.pathname||"/",w=x;if(c!=="/"){let $=c.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice($.length).join("/")}let y=Gg(e,{pathname:w}),j=$x(y&&y.map($=>Object.assign({},$,{params:Object.assign({},a,$.params),pathname:Kt([c,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?c:Kt([c,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,n,r);return t&&j?k.createElement(il.Provider,{value:{location:ao({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Nt.Pop}},j):j}function kx(){let e=Lx(),t=mx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,null)}const jx=k.createElement(kx,null);class Sx extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(bt.Provider,{value:this.props.routeContext},k.createElement(th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cx(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(ol);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(bt.Provider,{value:t},r)}function $x(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let f=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||J(!1),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let h=s[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=f),h.route.id){let{loaderData:x,errors:w}=n,y=h.route.loader&&x[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,h,x)=>{let w,y=!1,j=null,$=null;n&&(w=a&&h.route.id?a[h.route.id]:void 0,j=h.route.errorElement||jx,c&&(u<0&&x===0?(Rx("route-fallback"),y=!0,$=null):u===x&&(y=!0,$=h.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,x+1)),p=()=>{let g;return w?g=j:y?g=$:h.route.Component?g=k.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=f,k.createElement(Cx,{match:h,routeContext:{outlet:f,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?k.createElement(Sx,{location:n.location,revalidation:n.revalidation,component:j,error:w,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var rh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rh||{}),oh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(oh||{});function Ex(e){let t=k.useContext(ol);return t||J(!1),t}function Tx(e){let t=k.useContext(eh);return t||J(!1),t}function Px(e){let t=k.useContext(bt);return t||J(!1),t}function ih(e){let t=Px(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function Lx(){var e;let t=k.useContext(th),n=Tx(),r=ih();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ix(){let{router:e}=Ex(rh.UseNavigateStable),t=ih(oh.UseNavigateStable),n=k.useRef(!1);return nh(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ao({fromRouteId:t},i)))},[e,t])}const Lu={};function Rx(e,t,n){Lu[e]||(Lu[e]=!0)}function zx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Nx(e){let{to:t,replace:n,state:r,relative:o}=e;cr()||J(!1);let{future:i,static:s}=k.useContext(wt),{matches:a}=k.useContext(bt),{pathname:c}=it(),u=ur(),f=lc(t,ic(a,i.v7_relativeSplatPath),c,o==="path"),h=JSON.stringify(f);return k.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:o}),[u,h,o,n,r]),null}function Pr(e){J(!1)}function Dx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Nt.Pop,navigator:i,static:s=!1,future:a}=e;cr()&&J(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:i,static:s,future:ao({v7_relativeSplatPath:!1},a)}),[c,a,i,s]);typeof r=="string"&&(r=ar(r));let{pathname:f="/",search:h="",hash:x="",state:w=null,key:y="default"}=r,j=k.useMemo(()=>{let $=Zn(f,c);return $==null?null:{location:{pathname:$,search:h,hash:x,state:w,key:y},navigationType:o}},[c,f,h,x,w,y,o]);return j==null?null:k.createElement(wt.Provider,{value:u},k.createElement(il.Provider,{children:n,value:j}))}function Mx(e){let{children:t,location:n}=e;return wx(Gs(t),n)}new Promise(()=>{});function Gs(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,Gs(r.props.children,i));return}r.type!==Pr&&J(!1),!r.props.index||!r.props.children||J(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Gs(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(null,arguments)}function lh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ax(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ox(e,t){return e.button===0&&(!t||t==="_self")&&!Ax(e)}const _x=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Bx="6";try{window.__reactRouterVersion=Bx}catch{}const Ux=k.createContext({isTransitioning:!1}),Wx="startTransition",Iu=N0[Wx];function Vx(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=Hg({window:o,v5Compat:!0}));let s=i.current,[a,c]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=k.useCallback(h=>{u&&Iu?Iu(()=>c(h)):c(h)},[c,u]);return k.useLayoutEffect(()=>s.listen(f),[s,f]),k.useEffect(()=>zx(r),[r]),k.createElement(Dx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kn=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:c,to:u,preventScrollReset:f,viewTransition:h}=t,x=lh(t,_x),{basename:w}=k.useContext(wt),y,j=!1;if(typeof u=="string"&&Qx.test(u)&&(y=u,Hx))try{let g=new URL(window.location.href),b=u.startsWith("//")?new URL(g.protocol+u):new URL(u),v=Zn(b.pathname,w);b.origin===g.origin&&v!=null?u=v+b.search+b.hash:j=!0}catch{}let $=xx(u,{relative:o}),m=Gx(u,{replace:s,state:a,target:c,preventScrollReset:f,relative:o,viewTransition:h});function p(g){r&&r(g),g.defaultPrevented||m(g)}return k.createElement("a",Ai({},x,{href:y||$,onClick:j||i?r:p,ref:n,target:c}))}),sh=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:c,viewTransition:u,children:f}=t,h=lh(t,Fx),x=ll(c,{relative:h.relative}),w=it(),y=k.useContext(eh),{navigator:j,basename:$}=k.useContext(wt),m=y!=null&&Yx(x)&&u===!0,p=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,g=w.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(g=g.toLowerCase(),b=b?b.toLowerCase():null,p=p.toLowerCase()),b&&$&&(b=Zn(b,$)||b);const v=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let C=g===p||!s&&g.startsWith(p)&&g.charAt(v)==="/",S=b!=null&&(b===p||!s&&b.startsWith(p)&&b.charAt(p.length)==="/"),E={isActive:C,isPending:S,isTransitioning:m},M=C?r:void 0,z;typeof i=="function"?z=i(E):z=[i,C?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let U=typeof a=="function"?a(E):a;return k.createElement(kn,Ai({},h,{"aria-current":M,className:z,ref:n,style:U,to:c,viewTransition:u}),typeof f=="function"?f(E):f)});var Ys;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ys||(Ys={}));var Ru;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ru||(Ru={}));function Kx(e){let t=k.useContext(ol);return t||J(!1),t}function Gx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,c=ur(),u=it(),f=ll(e,{relative:s});return k.useCallback(h=>{if(Ox(h,n)){h.preventDefault();let x=r!==void 0?r:Mi(u)===Mi(f);c(e,{replace:x,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[u,c,f,r,o,n,e,i,s,a])}function Yx(e,t){t===void 0&&(t={});let n=k.useContext(Ux);n==null&&J(!1);let{basename:r}=Kx(Ys.useViewTransitionState),o=ll(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ks(o.pathname,s)!=null||Ks(o.pathname,i)!=null}var H="-ms-",Br="-moz-",_="-webkit-",ah="comm",sl="rule",sc="decl",Jx="@import",Xx="@namespace",ch="@keyframes",Zx="@layer",uh=Math.abs,ac=String.fromCharCode,Js=Object.assign;function qx(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function dh(e){return e.trim()}function st(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function si(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function vn(e,t,n){return e.slice(t,n)}function Ge(e){return e.length}function ph(e){return e.length}function Lr(e,t){return t.push(e),e}function e1(e,t){return e.map(t).join("")}function zu(e,t){return e.filter(function(n){return!st(n,t)})}var al=1,qn=1,fh=0,Ue=0,re=0,dr="";function cl(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:al,column:qn,length:s,return:"",siblings:a}}function Et(e,t){return Js(cl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Sn(e){for(;e.root;)e=Et(e.root,{children:[e]});Lr(e,e.siblings)}function t1(){return re}function n1(){return re=Ue>0?se(dr,--Ue):0,qn--,re===10&&(qn=1,al--),re}function Ze(){return re=Ue<fh?se(dr,Ue++):0,qn++,re===10&&(qn=1,al++),re}function Dt(){return se(dr,Ue)}function ai(){return Ue}function ul(e,t){return vn(dr,e,t)}function co(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r1(e){return al=qn=1,fh=Ge(dr=e),Ue=0,[]}function o1(e){return dr="",e}function Wl(e){return dh(ul(Ue-1,Xs(e===91?e+2:e===40?e+1:e)))}function i1(e){for(;(re=Dt())&&re<33;)Ze();return co(e)>2||co(re)>3?"":" "}function l1(e,t){for(;--t&&Ze()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return ul(e,ai()+(t<6&&Dt()==32&&Ze()==32))}function Xs(e){for(;Ze();)switch(re){case e:return Ue;case 34:case 39:e!==34&&e!==39&&Xs(re);break;case 40:e===41&&Xs(e);break;case 92:Ze();break}return Ue}function s1(e,t){for(;Ze()&&e+re!==57;)if(e+re===84&&Dt()===47)break;return"/*"+ul(t,Ue-1)+"*"+ac(e===47?e:Ze())}function a1(e){for(;!co(Dt());)Ze();return ul(e,Ue)}function c1(e){return o1(ci("",null,null,null,[""],e=r1(e),0,[0],e))}function ci(e,t,n,r,o,i,s,a,c){for(var u=0,f=0,h=s,x=0,w=0,y=0,j=1,$=1,m=1,p=0,g="",b=o,v=i,C=r,S=g;$;)switch(y=p,p=Ze()){case 40:if(y!=108&&se(S,h-1)==58){si(S+=N(Wl(p),"&","&\f"),"&\f",uh(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Wl(p);break;case 9:case 10:case 13:case 32:S+=i1(y);break;case 92:S+=l1(ai()-1,7);continue;case 47:switch(Dt()){case 42:case 47:Lr(u1(s1(Ze(),ai()),t,n,c),c),(co(y||1)==5||co(Dt()||1)==5)&&Ge(S)&&vn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*j:a[u++]=Ge(S)*m;case 125*j:case 59:case 0:switch(p){case 0:case 125:$=0;case 59+f:m==-1&&(S=N(S,/\f/g,"")),w>0&&(Ge(S)-h||j===0&&y===47)&&Lr(w>32?Du(S+";",r,n,h-1,c):Du(N(S," ","")+";",r,n,h-2,c),c);break;case 59:S+=";";default:if(Lr(C=Nu(S,t,n,u,f,o,a,g,b=[],v=[],h,i),i),p===123)if(f===0)ci(S,t,C,C,b,i,h,a,v);else{switch(x){case 99:if(se(S,3)===110)break;case 108:if(se(S,2)===97)break;default:f=0;case 100:case 109:case 115:}f?ci(e,C,C,r&&Lr(Nu(e,C,C,0,0,o,a,g,o,b=[],h,v),v),o,v,h,a,r?b:v):ci(S,C,C,C,[""],v,0,a,v)}}u=f=w=0,j=m=1,g=S="",h=s;break;case 58:h=1+Ge(S),w=y;default:if(j<1){if(p==123)--j;else if(p==125&&j++==0&&n1()==125)continue}switch(S+=ac(p),p*j){case 38:m=f>0?1:(S+="\f",-1);break;case 44:a[u++]=(Ge(S)-1)*m,m=1;break;case 64:Dt()===45&&(S+=Wl(Ze())),x=Dt(),f=h=Ge(g=S+=a1(ai())),p++;break;case 45:y===45&&Ge(S)==2&&(j=0)}}return i}function Nu(e,t,n,r,o,i,s,a,c,u,f,h){for(var x=o-1,w=o===0?i:[""],y=ph(w),j=0,$=0,m=0;j<r;++j)for(var p=0,g=vn(e,x+1,x=uh($=s[j])),b=e;p<y;++p)(b=dh($>0?w[p]+" "+g:N(g,/&\f/g,w[p])))&&(c[m++]=b);return cl(e,t,n,o===0?sl:a,c,u,f,h)}function u1(e,t,n,r){return cl(e,t,n,ah,ac(t1()),vn(e,2,-2),0,r)}function Du(e,t,n,r,o){return cl(e,t,n,sc,vn(e,0,r),vn(e,r+1,-1),r,o)}function hh(e,t,n){switch(qx(e,t)){case 5103:return _+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return _+e+e;case 4855:return _+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Br+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _+e+Br+e+H+e+e;case 5936:switch(se(e,t+11)){case 114:return _+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _+e+H+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return _+e+H+e+e;case 6165:return _+e+H+"flex-"+e+e;case 5187:return _+e+N(e,/(\w+).+(:[^]+)/,_+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return _+e+H+"flex-item-"+N(e,/flex-|-self/g,"")+(st(e,/flex-|baseline/)?"":H+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return _+e+H+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return _+e+H+N(e,"shrink","negative")+e;case 5292:return _+e+H+N(e,"basis","preferred-size")+e;case 6060:return _+"box-"+N(e,"-grow","")+_+e+H+N(e,"grow","positive")+e;case 4554:return _+N(e,/([^-])(transform)/g,"$1"+_+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,_+"$1"),/(image-set)/,_+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,_+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,_+"box-pack:$3"+H+"flex-pack:$3"),/space-between/,"justify")+_+e+e;case 4200:if(!st(e,/flex-|baseline/))return H+"grid-column-align"+vn(e,t)+e;break;case 2592:case 3360:return H+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,st(r.props,/grid-\w+-end/)})?~si(e+(n=n[t].value),"span",0)?e:H+N(e,"-start","")+e+H+"grid-row-span:"+(~si(n,"span",0)?st(n,/\d+/):+st(n,/\d+/)-+st(e,/\d+/))+";":H+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return st(r.props,/grid-\w+-start/)})?e:H+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,_+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+_+"$2-$3$1"+Br+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~si(e,"stretch",0)?hh(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,c,u){return H+o+":"+i+u+(s?H+o+"-span:"+(a?c:+c-+i)+u:"")+e});case 4949:if(se(e,t+6)===121)return N(e,":",":"+_)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_+(se(e,14)===45?"inline-":"")+"box$3$1"+_+"$2$3$1"+H+"$2box$3")+e;case 100:return N(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function Oi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function d1(e,t,n,r){switch(e.type){case Zx:if(e.children.length)break;case Jx:case Xx:case sc:return e.return=e.return||e.value;case ah:return"";case ch:return e.return=e.value+"{"+Oi(e.children,r)+"}";case sl:if(!Ge(e.value=e.props.join(",")))return""}return Ge(n=Oi(e.children,r))?e.return=e.value+"{"+n+"}":""}function p1(e){var t=ph(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function f1(e){return function(t){t.root||(t=t.return)&&e(t)}}function h1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sc:e.return=hh(e.value,e.length,n);return;case ch:return Oi([Et(e,{value:N(e.value,"@","@"+_)})],r);case sl:if(e.length)return e1(n=e.props,function(o){switch(st(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Sn(Et(e,{props:[N(o,/:(read-\w+)/,":"+Br+"$1")]})),Sn(Et(e,{props:[o]})),Js(e,{props:zu(n,r)});break;case"::placeholder":Sn(Et(e,{props:[N(o,/:(plac\w+)/,":"+_+"input-$1")]})),Sn(Et(e,{props:[N(o,/:(plac\w+)/,":"+Br+"$1")]})),Sn(Et(e,{props:[N(o,/:(plac\w+)/,H+"input-$1")]})),Sn(Et(e,{props:[o]})),Js(e,{props:zu(n,r)});break}return""})}}var Vn={},Vl,Hl;const er=typeof process<"u"&&Vn!==void 0&&(Vn.REACT_APP_SC_ATTR||Vn.SC_ATTR)||"data-styled",mh="active",gh="data-styled-version",dl="6.4.2",cc=`/*!sc*/
`,Ur=typeof window<"u"&&typeof document<"u";function Mu(e){if(typeof process<"u"&&Vn!==void 0){const t=Vn[e];if(t!==void 0&&t!=="")return t!=="false"}}const m1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Hl=(Vl=Mu("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Vl!==void 0?Vl:Mu("SC_DISABLE_SPEEDY"))!==null&&Hl!==void 0?Hl:typeof process<"u"&&Vn!==void 0&&!1),g1="sc-keyframes-",x1={};function tr(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let ui=new Map,_i=new Map,di=1;const Fo=e=>{if(ui.has(e))return ui.get(e);for(;_i.has(di);)di++;const t=di++;return ui.set(e,t),_i.set(t,e),t},y1=e=>_i.get(e),v1=(e,t)=>{di=t+1,ui.set(e,t),_i.set(t,e)},uc=Object.freeze([]),nr=Object.freeze({});function xh(e,t,n=nr){return e.theme!==n.theme&&e.theme||t||n.theme}const w1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b1=/(^-|-$)/g;function yh(e){return e.replace(w1,"-").replace(b1,"")}const k1=/(a)(d)/gi,Au=e=>String.fromCharCode(e+(e>25?39:97));function vh(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Au(t%52)+n;return(Au(t%52)+n).replace(k1,"$1-$2")}const Zs=5381,fn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},wh=e=>fn(Zs,e);function bh(e){return vh(wh(e)>>>0)}function j1(e){return e.displayName||e.name||"Component"}function qs(e){return typeof e=="string"&&!0}function S1(e){return qs(e)?`styled.${e}`:`Styled(${j1(e)})`}const kh=Symbol.for("react.memo"),C1=Symbol.for("react.forward_ref"),$1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},E1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T1={[C1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[kh]:jh};function Ou(e){return("type"in(t=e)&&t.type.$$typeof)===kh?jh:"$$typeof"in e?T1[e.$$typeof]:$1;var t}const P1=Object.defineProperty,L1=Object.getOwnPropertyNames,I1=Object.getOwnPropertySymbols,R1=Object.getOwnPropertyDescriptor,z1=Object.getPrototypeOf,N1=Object.prototype;function Sh(e,t,n){if(typeof t!="string"){const r=z1(t);r&&r!==N1&&Sh(e,r,n);const o=L1(t).concat(I1(t)),i=Ou(e),s=Ou(t);for(let a=0;a<o.length;++a){const c=o[a];if(!(c in E1||n&&n[c]||s&&c in s||i&&c in i)){const u=R1(t,c);try{P1(e,c,u)}catch{}}}}return e}function pr(e){return typeof e=="function"}const D1=Symbol.for("react.forward_ref");function dc(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===D1&&"styledComponentId"in e}function Ir(e,t){return e&&t?e+" "+t:e||t||""}function ea(e,t){return e.join("")}function uo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ta(e,t,n=!1){if(!n&&!uo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ta(e[r],t[r]);else if(uo(t))for(const r in t)e[r]=ta(e[r],t[r]);return e}function Ch(e,t){Object.defineProperty(e,"toString",{value:t})}const M1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let s=i;for(;e>=s;)if(s<<=1,s<0)throw tr(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(let a=i;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+cc;return t}},A1=`style[${er}][${gh}="${dl}"]`,O1=new RegExp(`^${er}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),_u=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,na=e=>{if(!e)return document;if(_u(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(_u(t))return t}return document},_1=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,s=r.length;i<s;i++)(o=r[i])&&e.registerName(t,o)},F1=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(cc),o=[];for(let i=0,s=r.length;i<s;i++){const a=r[i].trim();if(!a)continue;const c=a.match(O1);if(c){const u=0|parseInt(c[1],10),f=c[2];u!==0&&(v1(f,u),_1(e,f,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}},Ql=e=>{const t=na(e.options.target).querySelectorAll(A1);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(er)!==mh&&(F1(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let br=!1;function B1(){if(br!==!1)return br;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return br=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return br=t.getAttribute("content")||void 0}return br=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const $h=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(c=>{const u=Array.from(c.querySelectorAll(`style[${er}]`));return u[u.length-1]})(r),s=i!==void 0?i.nextSibling:null;o.setAttribute(er,mh),o.setAttribute(gh,dl);const a=t||B1();return a&&o.setAttribute("nonce",a),r.insertBefore(o,s),o},U1=class{constructor(e,t){this.element=$h(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,s=o.length;i<s;i++){const a=o[i];if(a.ownerNode===n)return a}throw tr(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},W1=class{constructor(e,t){this.element=$h(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Fu=Ur;const V1={isServer:!Ur,useCSSOMInjection:!m1};class vo{static registerId(t){return Fo(t)}constructor(t=nr,n={},r){this.options=Object.assign(Object.assign({},V1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ur&&Fu&&(Fu=!1,Ql(this)),Ch(this,()=>(o=>{const i=o.getTag(),{length:s}=i;let a="";for(let c=0;c<s;c++){const u=y1(c);if(u===void 0)continue;const f=o.names.get(u);if(f===void 0||!f.size)continue;const h=i.getGroup(c);if(h.length===0)continue;const x=er+".g"+c+'[id="'+u+'"]';let w="";for(const y of f)y.length>0&&(w+=y+",");a+=h+x+'{content:"'+w+'"}'+cc}return a})(this))}rehydrate(){!this.server&&Ur&&Ql(this)}reconstructWithOptions(t,n=!0){const r=new vo(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ur&&t.target!==this.options.target&&na(this.options.target)!==na(t.target)&&Ql(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new U1(r,o):new W1(r,o))(this.options),new M1(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Fo(t),t.startsWith(g1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Fo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Fo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Eh=new WeakSet,H1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Q1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in H1||e.startsWith("--")?String(t).trim():t+"px"}const sn=47;function Bu(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const K1=Symbol.for("sc-keyframes");function G1(e){return typeof e=="object"&&e!==null&&K1 in e}function Th(e){return pr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Ph=e=>e==null||e===!1||e==="",Y1=Symbol.for("react.client.reference");function Uu(e){return e.$$typeof===Y1}function Lh(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Ph(r)&&(Array.isArray(r)&&Eh.has(r)||pr(r)?t.push(Bu(n)+":",r,";"):uo(r)?(t.push(n+" {"),Lh(r,t),t.push("}")):t.push(Bu(n)+": "+Q1(n,r)+";"))}}function Gt(e,t,n,r,o=[]){if(Ph(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(Uu(e))return o;if(Th(e)&&t){const s=e(t);return Gt(s,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Gt(e[s],t,n,r,o);return o}return dc(e)?(o.push(`.${e.styledComponentId}`),o):G1(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):Uu(e)?o:uo(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Lh(e,o),o):(o.push(e.toString()),o)}const J1=wh(dl);class X1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=fn(J1,n),this.baseStyle=r,vo.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")i+=a;else if(a)if(Th(a)){const c=a(t);typeof c=="string"?i+=c:c!=null&&c!==!1&&(i+=ea(Gt(c,t,n,r)))}else i+=ea(Gt(a,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+i:i;let a=this.dynamicNameCache.get(s);if(!a){if(a=vh(fn(fn(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const c=r(i,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,c)}o=Ir(o,a)}}return o}}const Z1=/&/g;function Ih(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Kl(e){const t=e.length;let n="",r=0,o=0,i=0,s=!1,a=!1;for(let c=0;c<t;c++){const u=e.charCodeAt(c);if(i!==0||s||u!==sn||e.charCodeAt(c+1)!==42)if(s)u===42&&e.charCodeAt(c+1)===sn&&(s=!1,c++);else if(u!==34&&u!==39||Ih(e,c)){if(i===0)if(u===123)o++;else if(u===125){if(o--,o<0){a=!0;let f=c+1;for(;f<t;){const h=e.charCodeAt(f);if(h===59||h===10)break;f++}f<t&&e.charCodeAt(f)===59&&f++,o=0,c=f-1,r=f;continue}o===0&&(n+=e.substring(r,c+1),r=c+1)}else u===59&&o===0&&(n+=e.substring(r,c+1),r=c+1)}else i===0?i=u:i===u&&(i=0);else s=!0,c++}return a||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function Rh(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const s=i.props,a=[];for(let c=0;c<s.length;c++)a[c]=n+s[c];i.props=a}Array.isArray(i.children)&&i.type!=="@keyframes"&&Rh(i.children,t)}return e}function q1({options:e=nr,plugins:t=uc}=nr){let n,r,o;const i=(x,w,y)=>y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?`.${n}`:x,s=t.slice();s.push(x=>{x.type===sl&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(Z1,r).replace(o,i))}),e.prefix&&s.push(h1),s.push(d1);let a=[];const c=p1(s.concat(f1(x=>a.push(x)))),u=(x,w="",y="",j="&")=>{n=j,r=w,o=void 0;const $=function(p){const g=p.indexOf("//")!==-1,b=p.indexOf("}")!==-1;if(!g&&!b)return p;if(!g)return Kl(p);const v=p.length;let C="",S=0,E=0,M=0,z=0,U=0,We=!1;for(;E<v;){const Z=p.charCodeAt(E);if(Z!==34&&Z!==39||Ih(p,E))if(M===0)if(Z===sn&&E+1<v&&p.charCodeAt(E+1)===42){for(E+=2;E+1<v&&(p.charCodeAt(E)!==42||p.charCodeAt(E+1)!==sn);)E++;E+=2}else if(Z!==40)if(Z!==41)if(z>0)E++;else if(Z===42&&E+1<v&&p.charCodeAt(E+1)===sn)C+=p.substring(S,E),E+=2,S=E,We=!0;else if(Z===sn&&E+1<v&&p.charCodeAt(E+1)===sn){for(C+=p.substring(S,E);E<v&&p.charCodeAt(E)!==10;)E++;S=E,We=!0}else Z===123?U++:Z===125&&U--,E++;else z>0&&z--,E++;else z++,E++;else E++;else M===0?M=Z:M===Z&&(M=0),E++}return We?(S<v&&(C+=p.substring(S)),U===0?C:Kl(C)):U===0?p:Kl(p)}(x);let m=c1(y||w?y+" "+w+" { "+$+" }":$);return e.namespace&&(m=Rh(m,e.namespace)),a=[],Oi(m,c),a},f=e;let h=Zs;for(let x=0;x<t.length;x++)t[x].name||tr(15),h=fn(h,t[x].name);return f!=null&&f.namespace&&(h=fn(h,f.namespace)),f!=null&&f.prefix&&(h=fn(h,"p")),u.hash=h!==Zs?h.toString():"",u}const ey=new vo,ty=q1(),zh=ge.createContext({shouldForwardProp:void 0,styleSheet:ey,stylis:ty,stylisPlugins:void 0});zh.Consumer;function Nh(){return ge.useContext(zh)}const po=ge.createContext(void 0);po.Consumer;function ny(e){const t=ge.useContext(po),n=ge.useMemo(()=>function(r,o){if(!r)throw tr(14);if(pr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw tr(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?ge.createElement(po.Provider,{value:n},e.children):null}const Wu=Object.prototype.hasOwnProperty,Gl={};function ry(e,t){const n=typeof e!="string"?"sc":yh(e);Gl[n]=(Gl[n]||0)+1;const r=n+"-"+bh(dl+n+Gl[n]);return t?t+"-"+r:r}function oy(e,t,n){const r=dc(e),o=e,i=!qs(e),{attrs:s=uc,componentId:a=ry(t.displayName,t.parentComponentId),displayName:c=S1(e)}=t,u=t.displayName&&t.componentId?yh(t.displayName)+"-"+t.componentId:t.componentId||a,f=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){const j=o.shouldForwardProp;if(t.shouldForwardProp){const $=t.shouldForwardProp;h=(m,p)=>j(m,p)&&$(m,p)}else h=j}const x=new X1(n,u,r?o.componentStyle:void 0);function w(j,$){return function(m,p,g){const{attrs:b,componentStyle:v,defaultProps:C,foldedComponentIds:S,styledComponentId:E,target:M}=m,z=ge.useContext(po),U=Nh(),We=m.shouldForwardProp||U.shouldForwardProp,Z=xh(p,z,C)||nr;let Ve,tn;{const I=ge.useRef(null),R=I.current;if(R!==null&&R[1]===Z&&R[2]===U.styleSheet&&R[3]===U.stylis&&R[7]===v&&function(B,O,ie){const q=B,ne=O;let Te=0;for(const De in ne)if(Wu.call(ne,De)&&(Te++,q[De]!==ne[De]))return!1;return Te===ie}(R[0],p,R[4]))Ve=R[5],tn=R[6];else{Ve=function(O,ie,q){const ne=Object.assign(Object.assign({},ie),{className:void 0,theme:q}),Te=O.length>1;for(let De=0;De<O.length;De++){const ml=O[De],ko=pr(ml)?ml(Te?Object.assign({},ne):ne):ml;for(const jt in ko)jt==="className"?ne.className=Ir(ne.className,ko[jt]):jt==="style"?ne.style=Object.assign(Object.assign({},ne.style),ko[jt]):jt in ie&&ie[jt]===void 0||(ne[jt]=ko[jt])}return"className"in ie&&typeof ie.className=="string"&&(ne.className=Ir(ne.className,ie.className)),ne}(b,p,Z),tn=function(O,ie,q,ne){return O.generateAndInjectStyles(ie,q,ne)}(v,Ve,U.styleSheet,U.stylis);let B=0;for(const O in p)Wu.call(p,O)&&B++;I.current=[p,Z,U.styleSheet,U.stylis,B,Ve,tn,v]}}const kt=Ve.as||M,nn=function(I,R,B,O){const ie={};for(const q in I)I[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&I.theme===B||(q==="forwardedAs"?ie.as=I.forwardedAs:O&&!O(q,R)||(ie[q]=I[q]));return ie}(Ve,kt,Z,We);let P=Ir(S,E);return tn&&(P+=" "+tn),Ve.className&&(P+=" "+Ve.className),nn[qs(kt)&&kt.includes("-")?"class":"className"]=P,g&&(nn.ref=g),k.createElement(kt,nn)}(y,j,$)}w.displayName=c;let y=ge.forwardRef(w);return y.attrs=f,y.componentStyle=x,y.displayName=c,y.shouldForwardProp=h,y.foldedComponentIds=r?Ir(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=u,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get(){return this._foldedDefaultProps},set(j){this._foldedDefaultProps=r?function($,...m){for(const p of m)ta($,p,!0);return $}({},o.defaultProps,j):j}}),Ch(y,()=>`.${y.styledComponentId}`),i&&Sh(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}var iy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Vu(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const Hu=e=>(Eh.add(e),e);function Dh(e,...t){if(pr(e)||uo(e))return Hu(Gt(Vu(uc,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Gt(n):Hu(Gt(Vu(n,t)))}function ra(e,t,n=nr){if(!t)throw tr(1,t);const r=(o,...i)=>e(t,n,Dh(o,...i));return r.attrs=o=>ra(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>ra(e,t,Object.assign(Object.assign({},n),o)),r}const Mh=e=>ra(oy,e),d=Mh;iy.forEach(e=>{d[e]=Mh(e)});class ly{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(pr(i)&&!dc(i))return!1}return!0}(t),vo.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(i,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&s){const a=s.rules,c=this.instanceRules.get(t).rules;if(a.length===c.length){let u=!0;for(let f=0;f<a.length;f++)if(a[f]!==c[f]){u=!1;break}if(u)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=ea(Gt(this.rules,n,r,o)),s={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function sy(e,...t){const n=Dh(e,...t),r=`sc-global-${bh(JSON.stringify(n))}`,o=new ly(n,r),i=a=>{const c=Nh(),u=ge.useContext(po);let f;{const h=ge.useRef(null);h.current===null&&(h.current=c.styleSheet.allocateGSInstance(r)),f=h.current}c.styleSheet.server&&s(f,a,c.styleSheet,u,c.stylis);{const h=o.isStatic?[f,c.styleSheet,o]:[f,a,c.styleSheet,u,c.stylis,o],x=ge.useRef(o);ge.useLayoutEffect(()=>{c.styleSheet.server||(x.current!==o&&(c.styleSheet.clearRules(r),x.current=o),s(f,a,c.styleSheet,u,c.stylis))},h),ge.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(f,c.styleSheet)},[f,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(f),null};function s(a,c,u,f,h){if(o.isStatic)o.renderStyles(a,x1,u,h);else{const x=Object.assign(Object.assign({},c),{theme:xh(c,f,i.defaultProps)});o.renderStyles(a,x,u,h)}}return ge.memo(i)}const ay={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},Qu=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),cy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),uy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),dy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),py=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),fy=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),hy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),my=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),gy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),l.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ah=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),Oh=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),xy=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),yy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),l.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),vy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),wy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),by=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Xt=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),oa=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Wr=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),_h=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Fi=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),ky=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),rr=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),Fh=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),jy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),Bh=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ku=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Gu=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),Sy=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Cy=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Yu=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),l.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),$y=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ey=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 6l8-4 8 4-8 4-8-4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 10l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 14l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ty=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),l.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),Py=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})});function or(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return l.jsx(Qu,{...r});case"settings":return l.jsx(cy,{...r});case"shield":return l.jsx(uy,{...r});case"hierarchy":return l.jsx(dy,{...r});case"cycle":return l.jsx(py,{...r});case"code":return l.jsx(fy,{...r});case"globe":return l.jsx(hy,{...r});case"document":return l.jsx(my,{...r});case"mobile":return l.jsx(gy,{...r});case"sparkle":return l.jsx(Ah,{...r});case"envelope":return l.jsx(Oh,{...r});case"key":return l.jsx(ky,{...r});case"atom":return l.jsx(jy,{...r});default:return l.jsx(Qu,{...r})}}const Uh=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],Wh=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents",iconType:"sparkle"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],Cn=e=>[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],ln={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"INVENTORY",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"POLICIES",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"AUTOMATION",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"INTEGRATIONS",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"RELEASE SECURITY",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"SIGNING",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"INTEGRATIONS",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"MANAGE CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"POLICIES",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"REVOCATION & VALIDATION",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:Cn("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:Cn("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:Cn("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:Cn("device-trust")},"ai-agents":{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents navigation",sections:Cn("ai-agents")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:Cn("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},Ly={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/ai-agents":"AI Agents","/ai-agents/dashboard":"Dashboard","/ai-agents/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},Iy=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],Ry=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],zy=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],Ny=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/ai-agents","/ai-agents/dashboard","/ai-agents/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],Dy=d.div`
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
`,My=d.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ju=d.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
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
`;function Ay({onClose:e,onSelectProduct:t}){const n=ur(),r=o=>{t(o.productId),n(o.route),e()};return l.jsxs(Dy,{role:"menu","aria-label":"Settings menu",children:[l.jsx(My,{children:"Settings"}),l.jsx(Ju,{}),Iy.map(o=>l.jsx(Xu,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route)),l.jsx(Ju,{}),Ry.map(o=>l.jsx(Xu,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route))]})}const Oy=d.div`
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
`;function By({onClose:e}){return l.jsx(Oy,{role:"menu","aria-label":"Help menu",children:l.jsx(_y,{children:zy.map(t=>l.jsx(Fy,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const Uy=d.div`
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
`,Wy=d.div`
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
`,Zu=d.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Qy=d.div`
  padding: 4px 0;
`,qu=d.a`
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
`;function Ky({onClose:e,onSelectProduct:t}){const n=ur(),r=o=>{o.preventDefault(),t("profile"),n("/profile"),e()};return l.jsxs(Uy,{role:"menu","aria-label":"User profile menu",children:[l.jsxs(Wy,{children:[l.jsx(Vy,{children:"Deepika Chauhan"}),l.jsx(Hy,{children:"deepika.chauhan@digicert.com"})]}),l.jsx(Zu,{}),l.jsxs(Qy,{children:[l.jsx(qu,{href:"/profile",role:"menuitem",onClick:r,children:"My profile"}),l.jsx(Zu,{}),l.jsx(qu,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const Gy=d.div`
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
`,Zy=d.button`
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
`,qy=d.div`
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
`;function nv({open:e,onClose:t}){const n=k.useRef(null),r=k.useRef(null);return k.useEffect(()=>{var i;if(!e)return;(i=n.current)==null||i.focus();const o=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const c=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),u=c[0],f=c[c.length-1];s.shiftKey&&document.activeElement===u?(s.preventDefault(),f.focus()):!s.shiftKey&&document.activeElement===f&&(s.preventDefault(),u.focus())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),l.jsxs(l.Fragment,{children:[l.jsx(Gy,{$open:e,onClick:t,"aria-hidden":"true"}),l.jsxs(Yy,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[l.jsxs(Jy,{children:[l.jsx(Xy,{id:"cart-heading",children:"Cart"}),l.jsx(Zy,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),l.jsxs(qy,{children:[l.jsx(ev,{children:"Your cart is empty."}),l.jsx(tv,{onClick:t,children:"Continue shopping"})]})]})]})}const rv=d.div`
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
`;function pv({open:e,onClose:t}){const n=k.useRef(null);return k.useEffect(()=>{const r=o=>{o.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),l.jsxs(rv,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[l.jsxs(ov,{children:[l.jsx(iv,{children:"AI Assist"}),l.jsx(lv,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),l.jsxs(sv,{children:[l.jsx(av,{children:"How can I help you today?"}),l.jsxs(cv,{children:[l.jsx(uv,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),l.jsx(dv,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const fv=d.header`
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
`,kr=d.button`
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
`,Bo=d.div`
  position: relative;
  display: flex;
  align-items: center;
`,wv=d.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function bv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:o,onSelectProduct:i,cartCount:s=3}){const a=n==="settings"||n==="help"||n==="profile";return l.jsxs(l.Fragment,{children:[l.jsxs(fv,{role:"banner",children:[l.jsxs(hv,{children:[l.jsx(gv,{children:l.jsx(kr,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:l.jsx(by,{size:20})})}),l.jsxs(xv,{"aria-label":"DigiCert ONE",children:[l.jsx("span",{className:"logo-normal",children:"digicert "}),l.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),l.jsxs(mv,{children:[l.jsx(Bo,{children:l.jsxs(kr,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[l.jsx(yy,{size:20}),s>0&&l.jsx(yv,{"aria-hidden":"true",children:s})]})}),l.jsxs(Bo,{children:[l.jsx(kr,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:l.jsx(wy,{size:20})}),n==="settings"&&l.jsx(Ay,{onClose:o,onSelectProduct:i})]}),l.jsxs(Bo,{children:[l.jsx(kr,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:l.jsx(vy,{size:20})}),n==="help"&&l.jsx(By,{onClose:o})]}),l.jsx(kr,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:l.jsx(Ah,{size:20})}),l.jsxs(Bo,{children:[l.jsx(vv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&l.jsx(Ky,{onClose:o,onSelectProduct:i})]})]})]}),a&&l.jsx(wv,{onClick:o,"aria-hidden":"true"}),l.jsx(nv,{open:n==="cart",onClose:o}),l.jsx(pv,{open:n==="ai-assist",onClose:o})]})}const kv=d.nav`
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
`,ed=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,jv=d.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,Sv=d.button`
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
`,Cv=d.span`
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
`,$v=350;function td({product:e,isActive:t,onSelect:n}){const r=ur(),o=k.useRef(null),i=k.useRef(null),[s,a]=k.useState({visible:!1,y:0});k.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const c=()=>{var y;const w=(y=o.current)==null?void 0:y.getBoundingClientRect();return w?w.top+w.height/2:0},u=w=>{i.current&&(clearTimeout(i.current),i.current=null),w?a({visible:!0,y:c()}):i.current=setTimeout(()=>a({visible:!0,y:c()}),$v)},f=()=>{i.current&&(clearTimeout(i.current),i.current=null),a(w=>({...w,visible:!1}))},h=()=>{f(),n(e.id),r(e.route)},x=w=>{if(w.key==="Escape"){f();return}(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),h())};return l.jsxs(l.Fragment,{children:[l.jsx(Sv,{ref:o,$active:t,onClick:h,onKeyDown:x,onMouseEnter:()=>u(!1),onMouseLeave:f,onFocus:()=>u(!0),onBlur:f,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:or(e.iconType,20,t?"#111827":"#6B7280")}),rc.createPortal(l.jsx(Cv,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function Ev({activeProductId:e,onSelectProduct:t}){return l.jsxs(kv,{"aria-label":"Product navigation",children:[l.jsx(ed,{children:Uh.map(n=>l.jsx(td,{product:n,isActive:e===n.id,onSelect:t},n.id))}),l.jsx(jv,{}),l.jsx(ed,{children:Wh.map(n=>l.jsx(td,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const Tv=d.div`
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
`,Pv=d.div`
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
`,Nv=d.button`
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
`,Dv=d.div`
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
`,Mv=d.div`
  margin-bottom: 2px;
`,Av=d.button`
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
`,Ov=d.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,_v=d(sh)`
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
`;function Fv({section:e,index:t}){const[n,r]=k.useState(e.defaultExpanded??t===0),o=it(),i=!!e.title,s=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return l.jsxs(Mv,{children:[l.jsxs(Av,{$hasTitle:i,onClick:()=>r(a=>!a),"aria-expanded":n,"aria-controls":s,children:[l.jsx("span",{children:e.title}),n?l.jsx(_h,{size:12,color:"currentColor"}):l.jsx(Wr,{size:12,color:"currentColor"})]}),l.jsx(Ov,{id:s,$open:n||!i,children:e.items.map(a=>l.jsx(_v,{to:a.route,end:!0,"aria-current":o.pathname===a.route?"page":void 0,children:a.label},a.route))})]})}function Bv({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r}){let o=ln[e];return e==="settings-billing"&&r==="enterprise"&&(o={...o,sections:o.sections.map(i=>({...i,items:i.items.filter(s=>s.route==="/settings/billing")}))}),k.useEffect(()=>{const i=s=>{s.key==="Escape"&&t&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[t,n]),l.jsxs(l.Fragment,{children:[l.jsx(Dv,{$visible:t,onClick:n,"aria-hidden":"true"}),l.jsxs(Tv,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[l.jsx(Pv,{children:l.jsx(Lv,{$open:t,children:o&&l.jsxs(l.Fragment,{children:[l.jsx(Iv,{children:l.jsx(Rv,{children:o.label})}),l.jsx(zv,{children:l.jsx("nav",{"aria-label":"Product navigation",children:o.sections.map((i,s)=>l.jsx(Fv,{section:i,index:s},i.title||s))})})]})})}),l.jsx(Nv,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:l.jsx(Xt,{size:14,color:"currentColor"})})]})]})}const Uv=d.div`
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
`,Wv=d.div`
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
`,nd=d.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`,rd=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`,od=d.span`
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
`,id=d.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`,ld=d.div`
  display: flex;
  flex-direction: column;
`,Hv=d.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`,sd=d.button`
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
`,ad=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Qv=d.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`,Kv=d(sh)`
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
`;function Gv({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const o=ur(),i=it(),s=k.useRef(null),a=k.useRef(null),[c,u]=k.useState("l1"),[f,h]=k.useState(null),x=k.useRef(0),w=k.useRef(0);k.useEffect(()=>{e||(u("l1"),h(null))},[e]),k.useEffect(()=>{const v=s.current;v&&(e?v.removeAttribute("inert"):v.setAttribute("inert",""))},[e]),k.useEffect(()=>{if(!e)return;const v=setTimeout(()=>{var C,S;(S=(C=s.current)==null?void 0:C.querySelector("button"))==null||S.focus()},50);return()=>clearTimeout(v)},[e]),k.useEffect(()=>{if(!e)return;const v=C=>{if(C.key==="Escape"){r();return}if(C.key!=="Tab")return;const S=s.current;if(!S)return;const E=S.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),M=E[0],z=E[E.length-1];C.shiftKey&&document.activeElement===M?(C.preventDefault(),z.focus()):!C.shiftKey&&document.activeElement===z&&(C.preventDefault(),M.focus())};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[e,r]);const y=v=>{h(v),u("l2"),setTimeout(()=>{var C;(C=a.current)==null||C.focus()},50)},j=()=>{u("l1")},$=v=>{!!ln[v.id]?y(v.id):(n(v.id),o(v.route),r())},m=()=>{r()},p=v=>{x.current=v.touches[0].clientX,w.current=v.touches[0].clientY},g=v=>{const C=v.changedTouches[0].clientX-x.current,S=Math.abs(v.changedTouches[0].clientY-w.current);C<-80&&S<60&&r()},b=f?ln[f]:null;return l.jsxs(l.Fragment,{children:[l.jsx(Uv,{$open:e,onClick:r,"aria-hidden":"true"}),l.jsx(Wv,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:p,onTouchEnd:g,children:l.jsxs(Vv,{$offset:c==="l1"?0:-50,children:[l.jsxs(nd,{"aria-hidden":c!=="l1",children:[l.jsxs(rd,{children:[l.jsx(od,{children:"Navigation"}),l.jsx(Yl,{onClick:r,"aria-label":"Close menu",children:l.jsx(Fi,{size:16,color:"currentColor"})})]}),l.jsx(id,{children:l.jsxs("nav",{"aria-label":"Product list",children:[l.jsx(ld,{children:Uh.map(v=>l.jsxs(sd,{$active:t===v.id,onClick:()=>$(v),"aria-current":t===v.id?"page":void 0,"aria-haspopup":ln[v.id]?"menu":void 0,children:[or(v.iconType,18,t===v.id?"#1976D2":"#6B7280"),l.jsx(ad,{children:v.label}),ln[v.id]&&l.jsx(oa,{size:14,color:t===v.id?"#1976D2":"#9CA3AF"})]},v.id))}),l.jsx(Hv,{}),l.jsx(ld,{children:Wh.map(v=>l.jsxs(sd,{$active:t===v.id,onClick:()=>$(v),"aria-current":t===v.id?"page":void 0,"aria-haspopup":ln[v.id]?"menu":void 0,children:[or(v.iconType,18,t===v.id?"#1976D2":"#6B7280"),l.jsx(ad,{children:v.label}),ln[v.id]&&l.jsx(oa,{size:14,color:t===v.id?"#1976D2":"#9CA3AF"})]},v.id))})]})})]}),l.jsxs(nd,{ref:a,"aria-hidden":c!=="l2",children:[l.jsxs(rd,{children:[l.jsx(Yl,{onClick:j,"aria-label":"Back to menu",children:l.jsx(Xt,{size:16,color:"currentColor"})}),l.jsx(od,{children:(b==null?void 0:b.label)??""}),l.jsx(Yl,{onClick:r,"aria-label":"Close menu",children:l.jsx(Fi,{size:16,color:"currentColor"})})]}),l.jsx(id,{children:b&&l.jsx("nav",{"aria-label":`${b.label} navigation`,children:b.sections.map((v,C)=>l.jsxs("div",{children:[v.title&&l.jsx(Qv,{children:v.title}),v.items.map(S=>l.jsx(Kv,{to:S.route,end:!0,"aria-current":i.pathname===S.route?"page":void 0,onClick:m,children:S.label},S.route))]},v.title||C))})})]})]})})]})}const Yv=d.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,Jv=d.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`,Xv=d.div`
  flex: 1 1 520px;
  min-width: 280px;
`,Zv=d.p`
  margin: 0 0 8px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,qv=d.h1`
  margin: 0;
  font-size: 40px;
  line-height: 48px;
  max-width: 720px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 400;
`,e2=d.p`
  margin: 16px 0 0;
  max-width: 680px;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral700};
`,t2=d.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex: 0 1 auto;
  min-width: 220px;
`,cd=d.a`
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
`,n2=d.h2`
  margin: 0 0 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,r2=d.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,o2=d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,i2=d.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 0 1px 2px rgba(53,56,58,0.05);
  padding: 24px;
`,l2=d.h3`
  margin: 0 0 6px;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,s2=d.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,a2=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
`,c2=d.a`
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
`,u2=d.div`
  display: grid;
  gap: 16px;
`,d2=d.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,p2=d.div`
  position: relative;
  width: 100%;
  min-height: 192px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,f2=d.img`
  width: 100%;
  height: 100%;
  min-height: 192px;
  object-fit: cover;
  display: block;
`,h2=d.div`
  padding: 20px 20px 24px;
`,m2=d.div`
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
`,g2=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 12px;
`,x2=d.h3`
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 26px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,y2=d.p`
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral700};
`,v2=d.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;

  &:hover { text-decoration: underline; }
`,w2=d.article`
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px;
  display: grid;
  gap: 16px;
`,b2=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,k2=d.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,j2=d.button`
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
`,S2=d.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,C2=d.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,$2=d.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,E2=[{title:"CertCentral",subtitle:"Public certificates",actions:[{label:"Order a new certificate",href:"/certcentral/dashboard"},{label:"Reissue a certificate",href:"/certcentral/dashboard"},{label:"Configure ACME automation",href:"/certcentral/client-tools"},{label:"Manage organizations",href:"/certcentral/client-tools"}]},{title:"Trust Lifecycle Manager",subtitle:"Certificate lifecycle",actions:[{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Apply policies",href:"/trust-lifecycle/dashboard"},{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Set up certificate automation",href:"/trust-lifecycle/tools"}]},{title:"DNS Trust Manager",subtitle:"DNS & DNSSEC",actions:[{label:"Update CAA records",href:"/dns/dashboard"},{label:"Add or edit a zone",href:"/dns/dashboard"},{label:"Enable DNSSEC",href:"/dns/dashboard"},{label:"Set traffic routing rules",href:"/dns/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",actions:[{label:"Issue an internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage CRL & OCSP",href:"/private-ca/dashboard"},{label:"Manage certificate templates",href:"/private-ca/certificate-templates"}]}];function T2(){const[e,t]=k.useState(!1);return l.jsxs(Yv,{children:[l.jsxs(Jv,{children:[l.jsxs(Xv,{children:[l.jsx(Zv,{children:"Hi, John Smith"}),l.jsx(qv,{children:"What would you like to do?"}),l.jsx(e2,{children:"Your DigiCert ONE workspace — manage certificates, policies, and trust across products."})]}),l.jsxs(t2,{children:[l.jsx(cd,{href:"/certcentral/inventory",children:"View inventory"}),l.jsx(cd,{href:"/certcentral/dashboard",$primary:!0,children:"Order certificate"})]})]}),l.jsx(n2,{children:"Browse actions by product"}),l.jsxs(r2,{children:[l.jsx("div",{children:l.jsx(o2,{children:E2.map(n=>l.jsxs(i2,{children:[l.jsx(l2,{children:n.title}),l.jsx(s2,{children:n.subtitle}),l.jsx(a2,{children:n.actions.map(r=>l.jsx("li",{children:l.jsxs(c2,{href:r.href,children:[l.jsx("span",{children:r.label}),l.jsx(oa,{size:16,color:"currentColor"})]})},r.label))})]},n.title))})}),l.jsxs(u2,{children:[l.jsxs(d2,{children:[l.jsx(p2,{children:l.jsx(f2,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),l.jsxs(h2,{children:[l.jsx(m2,{children:"Certificate Lifecycle"}),l.jsxs(g2,{children:[l.jsx("span",{children:"Brian Trzupek · 5 min read"}),l.jsx("span",{children:"digicert.com/blog"})]}),l.jsx(x2,{children:"Certificate lifecycle management reaches an inflection point"}),l.jsx(y2,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),l.jsx(v2,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&l.jsxs(w2,{children:[l.jsxs(b2,{children:[l.jsx(k2,{children:"Spotlight"}),l.jsx(j2,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:l.jsx(Fi,{size:16,color:"currentColor"})})]}),l.jsx(S2,{children:"Software Trust Manager"}),l.jsx(C2,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),l.jsx($2,{href:"/software-trust/dashboard",children:"Learn more →"})]})]})]})]})}const P2=d.main`
  padding: 24px;
`,L2=d.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,ud=d.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function dd(){const e=it(),t=Ly[e.pathname]??e.pathname;return k.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),l.jsxs(P2,{children:[l.jsx(L2,{children:t}),e.pathname==="/profile"&&l.jsx(ud,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),l.jsxs(ud,{children:["This is a stub page for ",l.jsx("code",{children:e.pathname})]})]})}const wo={enterprise:{label:"Enterprise plan",description:"Billed and managed directly through your DigiCert account team. Contract terms, renewals, and invoicing are handled by your account manager, so no self-service payment actions are needed here."},ecommerce:{label:"E-commerce plan",description:"A self-service subscription billed automatically to the payment method on file. Manage your plan, payment details, and receipts at any time from this account."}},I2={"committed-value":{label:"Committed Value",tooltip:"A contract with a committed spend amount. You receive negotiated pricing in exchange for a minimum purchase commitment over the contract term."},"negotiated-pricing":{label:"Negotiated Pricing",tooltip:"A contract with custom pricing negotiated by your account team. You pay per-unit pricing without a minimum spend commitment."}},at={name:"Sarah Mitchell",title:"Enterprise Account Manager, DigiCert",email:"sarah.mitchell@digicert.com",phone:"+1 (801) 555-0142"},R2=[{id:"document-trust",name:"Document Trust",iconType:"document",contractType:"committed-value",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800},{name:"Users",purchased:500,allocated:420,consumed:390,remaining:110},{name:"Identity verifications",purchased:1e3,allocated:1e3,consumed:760,remaining:240}]},{id:"software-trust",name:"Software Trust",iconType:"code",contractType:"committed-value",contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Code signing certificates",consumed:42,total:50},entitlements:[{name:"Code signing certificates",purchased:50,allocated:50,consumed:42,remaining:8},{name:"Signing keys",purchased:20,allocated:18,consumed:15,remaining:5},{name:"Signing events",purchased:1e4,allocated:1e4,consumed:7400,remaining:2600}]},{id:"trust-lifecycle",name:"Trust Lifecycle Manager",iconType:"cycle",contractType:"negotiated-pricing",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Managed certificates",consumed:1120,total:2e3},entitlements:[{name:"Managed certificates",purchased:2e3,allocated:2e3,consumed:1120,remaining:880},{name:"Seats",purchased:75,allocated:75,consumed:25,remaining:50},{name:"Discovery scans / month",purchased:100,allocated:100,consumed:64,remaining:36}]},{id:"keylocker",name:"KeyLocker",iconType:"key",contractType:"committed-value",contractId:"CTR-2024-KL-00045",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"DevOps Engineering",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signing keys",consumed:18,total:20},entitlements:[{name:"Signing keys",purchased:20,allocated:20,consumed:18,remaining:2},{name:"HSM partitions",purchased:4,allocated:4,consumed:3,remaining:1},{name:"Signing events / month",purchased:5e3,allocated:5e3,consumed:4100,remaining:900}]},{id:"dns",name:"DigiCert DNS",iconType:"globe",contractType:"negotiated-pricing",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]},{id:"device-trust",name:"Device Trust",iconType:"mobile",contractType:"committed-value",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Device certificates",consumed:45e3,total:1e5},entitlements:[{name:"Device certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Device groups",purchased:50,allocated:50,consumed:32,remaining:18},{name:"API calls / month",purchased:1e6,allocated:1e6,consumed:62e4,remaining:38e4}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractType:"committed-value",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private CA hierarchies",consumed:9,total:10},entitlements:[{name:"Private CA hierarchies",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Issued certificates",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500},{name:"Sub-CAs",purchased:25,allocated:25,consumed:20,remaining:5}]},{id:"valimail",name:"Valimail",iconType:"envelope",contractType:"negotiated-pricing",contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Protected domains",consumed:18,total:25},entitlements:[{name:"Protected domains",purchased:25,allocated:25,consumed:18,remaining:7},{name:"Email senders monitored",purchased:500,allocated:500,consumed:410,remaining:90},{name:"DMARC reports / month",purchased:1e5,allocated:1e5,consumed:72e3,remaining:28e3}]},{id:"ai-agents",name:"AI Agents",iconType:"sparkle",contractType:"committed-value",contractId:"CTR-2024-AIA-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"AI Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"Agent executions / month",consumed:132e3,total:1e5},entitlements:[{name:"Agent executions / month",purchased:1e5,allocated:1e5,consumed:132e3,remaining:-32e3},{name:"Active agents",purchased:10,allocated:10,consumed:8,remaining:2},{name:"Workflow integrations",purchased:15,allocated:15,consumed:11,remaining:4}]},{id:"quantum-central",name:"Quantum Central",iconType:"atom",contractType:"negotiated-pricing",contractId:"CTR-2024-QC-00005",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]}],jr=[{accountId:"acme-global-security",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"committed-value",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4}]},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"committed-value",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}}],z2=["over-entitlement","approaching-limit","no-data","healthy"];function N2(e){return z2.find(t=>e.includes(t))||"healthy"}function D2(e){const{id:t,name:n,iconType:r,...o}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:o.renewalDate,status:o.status,primaryEntitlement:o.primaryEntitlement,entitlements:o.entitlements,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...o}]}}function Sr(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(i=>i.subscriptionType))],o=[...new Set(n.map(i=>i.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountName:e.accountName,subscriptionTypes:r,renewalDate:o.length===1?o[0]:"Varies by instance",status:N2(n.map(i=>i.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const M2=R2.map(D2);function Vh(e){let t;return e==="enterprise"?t=jr.map(n=>Sr(n,["enterprise"])):e==="ecommerce"?t=jr.map(n=>Sr(n,["ecommerce"])):t=[Sr(jr[0],["enterprise"]),Sr(jr[1],["ecommerce"]),Sr(jr[2],["enterprise"])],[...M2,...t]}function A2(e){const t=e.filter(c=>c.id.startsWith("certcentral-")).length,n=e.length-t,r=[...new Set(e.map(c=>c.renewalDate))],o=e.length?e[0].renewalDate:"—",i=e.filter(c=>c.status==="approaching-limit").length,s=e.filter(c=>c.status==="over-entitlement").length,a=i+s;return{productCount:n,certCentralCount:t,earliestRenewal:o,renewalDatesCount:r.length,approaching:i,over:s,needsAttention:a}}function O2(e){const t=new Set;return e.forEach(n=>n.subscriptionTypes.forEach(r=>t.add(r))),t.has("enterprise")&&t.has("ecommerce")?{label:"Enterprise + E-commerce",sub:"Mixed billing across subscriptions"}:t.has("ecommerce")?{label:"E-commerce subscription",sub:"Self-service billing"}:{label:"Enterprise contract",sub:"Managed by your account team"}}const _2=d.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  margin-bottom: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
`,F2=d.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.blue300};
  padding-top: 1px;
`,B2=d.p`
  flex: 1;
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral800};
`,pd={enterprise:"Enterprise billing is managed through your DigiCert account representative. You can view subscriptions, entitlements, usage, and renewal information here.",ecommerce:"Most of your subscriptions are managed under an Enterprise Contract through your account team. CertCentral is billed separately as a self-service E-commerce subscription.",mixed:"This environment includes both Enterprise Contract and E-commerce Subscription billing. Enterprise subscriptions are managed by your account team, while E-commerce subscriptions can be managed here."};function U2({scenario:e}){return l.jsxs(_2,{role:"note",children:[l.jsx(F2,{children:l.jsx(rr,{size:20,color:"currentColor"})}),l.jsx(B2,{children:pd[e]??pd.mixed})]})}const W2=d.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,V2=d.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function H2({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return l.jsx(W2,{role:"presentation",children:l.jsx(V2,{$pct:n})})}const Hh=d(kn)`
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
`,Qh=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Kh=d.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`,Gh=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Yh=d.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Jh=d.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xh=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Zh=d.span`
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  background: rgba(39, 168, 114, 0.10);
  color: #1F8F60;
`,Q2=d.div`
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
`,fd=d.p`
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
`,qh=d.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,e0=d.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,t0=d.span``;function X2(e){const t=e.subscriptionTypes[0];return wo[t].label}function sa({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return l.jsx(G2,{children:n.map(r=>l.jsxs("div",{children:[l.jsxs(Y2,{children:[l.jsx(J2,{children:r.name}),l.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),l.jsx(H2,{consumed:r.consumed,total:r.allocated}),r.remaining<0?l.jsxs(fd,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):l.jsxs(fd,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function Z2({subscription:e}){const[t,n]=k.useState(e.instances[0].instanceId),r=e.instances.find(a=>a.instanceId===t)||e.instances[0],o=r.subscriptionType==="enterprise",i=r.entitlements.slice(0,3),s=r.entitlements.length-i.length;return l.jsxs(Hh,{to:`/settings/billing/${e.id}`,children:[l.jsxs(Qh,{children:[l.jsxs(Kh,{children:[l.jsx(Gh,{children:or(e.iconType,20,"currentColor")}),l.jsxs(Yh,{children:[l.jsx(Jh,{children:e.name}),l.jsxs(Xh,{children:[e.subscriptionTypes.map(a=>wo[a].label).join(" · "),e.accountName&&l.jsxs(t0,{children:[" | ",e.accountName]})]})]})]}),l.jsxs(Zh,{children:["Renews ",e.renewalDate]})]}),l.jsx(Q2,{onClick:a=>a.preventDefault(),children:e.instances.map(a=>l.jsx(K2,{type:"button",$active:a.instanceId===t,onClick:c=>{c.preventDefault(),c.stopPropagation(),n(a.instanceId)},children:a.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},a.instanceId))}),o?l.jsxs(l.Fragment,{children:[i.length>0?l.jsx(sa,{entitlements:r.entitlements,maxVisible:3}):l.jsx(e0,{children:"Usage data not available yet."}),l.jsxs(ia,{children:[l.jsx(la,{children:"Managed by your Account Manager"}),s>0&&l.jsxs(qh,{children:["+",s," more"]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(sa,{entitlements:r.entitlements,maxVisible:3}),l.jsx(ia,{children:l.jsx(la,{children:"Self-service subscription"})})]})]})}function q2({subscription:e}){if(e.instances.length>1)return l.jsx(Z2,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:o,entitlements:i}=e,s=e.subscriptionTypes.includes("enterprise"),a=e.subscriptionTypes.includes("ecommerce"),c=i.slice(0,3),u=i.length-c.length,f=s?"Managed by your Account Manager":a?"Self-service subscription":null;return l.jsxs(Hh,{to:`/settings/billing/${t}`,children:[l.jsxs(Qh,{children:[l.jsxs(Kh,{children:[l.jsx(Gh,{children:or(r,20,"currentColor")}),l.jsxs(Yh,{children:[l.jsx(Jh,{children:n}),l.jsxs(Xh,{children:[X2(e),e.accountName&&l.jsxs(t0,{children:[" | ",e.accountName]})]})]})]}),l.jsxs(Zh,{children:["Renews ",o]})]}),c.length>0?l.jsx(sa,{entitlements:i,maxVisible:3}):l.jsx(e0,{children:"Usage data is not available for this product yet."}),f&&l.jsxs(ia,{children:[l.jsx(la,{children:f}),u>0&&l.jsxs(qh,{children:["+",u," more"]})]})]})}const ew=d.main`
  padding: 32px;
`,tw=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,nw=d.div``,rw=d.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,ow=d.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,iw=d.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,lw=d.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,sw=d.button`
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
`,aw=[{id:"mixed",label:"Enterprise + E-commerce"},{id:"enterprise",label:"Enterprise only"},{id:"ecommerce",label:"E-commerce only"}],cw=d.div`
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
`,Uo=d.div`
  padding: 18px 20px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Wo=d.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Vo=d.p`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ho=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,uw=d.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,dw=d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;function pw({scenario:e,onScenarioChange:t}){k.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]);const n=Vh(e),r=A2(n),o=O2(n);return l.jsxs(ew,{children:[l.jsxs(tw,{children:[l.jsxs(nw,{children:[l.jsx(rw,{children:"My subscriptions"}),l.jsx(ow,{children:"View your active product subscriptions, entitlement usage, and renewal information."})]}),l.jsxs(iw,{children:["Scenario:",l.jsx(lw,{children:aw.map(i=>l.jsx(sw,{type:"button",$active:e===i.id,onClick:()=>t(i.id),children:i.label},i.id))})]})]}),l.jsx(U2,{scenario:e}),l.jsxs(cw,{children:[l.jsxs(Uo,{children:[l.jsx(Wo,{children:"Active subscriptions"}),l.jsxs(Vo,{children:[r.productCount+1," products"]}),l.jsxs(Ho,{children:[r.certCentralCount," CertCentral account",r.certCentralCount!==1?"s":""," linked"]})]}),l.jsxs(Uo,{children:[l.jsx(Wo,{children:"Next renewal"}),l.jsx(Vo,{children:r.earliestRenewal}),l.jsx(Ho,{children:r.renewalDatesCount>1?"Renewal dates vary by product":"All products renew on this date"})]}),l.jsxs(Uo,{children:[l.jsx(Wo,{children:"Usage status"}),l.jsx(Vo,{children:r.needsAttention>0?`${r.needsAttention} need attention`:"All healthy"}),l.jsxs(Ho,{children:[r.approaching," approaching limit · ",r.over," over entitlement"]})]}),l.jsxs(Uo,{children:[l.jsx(Wo,{children:"Billing type"}),l.jsx(Vo,{children:o.label}),l.jsx(Ho,{children:o.sub})]})]}),l.jsx(uw,{children:"Product subscriptions"}),l.jsx(dw,{children:n.map(i=>l.jsx(q2,{subscription:i},i.id))})]})}const Bi={enterprise:{bg:"#EAF1FB",fg:"#0F4C8A"},ecommerce:{bg:"#EAF8F1",fg:"#1F8F60"}},n0=`
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
`,fw=d.span`
  ${n0}
  background: ${({$type:e})=>Bi[e].bg};
  color: ${({$type:e})=>Bi[e].fg};
`,hw=d.button`
  ${n0}
  border: none;
  cursor: pointer;
  background: ${({$type:e})=>Bi[e].bg};
  color: ${({$type:e})=>Bi[e].fg};
  transition: filter 0.15s ease;

  &:hover { filter: brightness(0.96); }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`;function hd({type:e,onClick:t,showInfoIcon:n=!1}){const r=wo[e];return t?l.jsxs(hw,{type:"button",$type:e,onClick:t,"aria-haspopup":"dialog",children:[r.label,n&&l.jsx(rr,{size:13,color:"currentColor"})]}):l.jsx(fw,{$type:e,children:r.label})}const r0=d.a`
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
`,mw=d(r0)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function pc({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${at.name})`}),o=`mailto:${at.email}?${r.toString()}`,i=e==="outline"?mw:r0;return l.jsx(i,{href:o,...n,children:"Contact account manager"})}const gw=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`,xw=d.div`
  width: 100%;
  max-width: 560px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
`,yw=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,vw=d.h2`
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,ww=d.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,bw=d.button`
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
`,kw=d.div`
  display: flex;
  gap: 4px;
  padding: 12px 24px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,jw=d.button`
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
`,o0=d.div`
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,aa=d.p`
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral800};
`,i0=d.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 24px;
  margin: 0;
`,Mt=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,At=d.dt`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Ot=d.dd`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,l0=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,md=d(kn)`
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
`;function Sw({instance:e}){const t={"committed-value":"Committed Value","negotiated-pricing":"Negotiated Pricing"},n={"committed-value":"A contract with a committed spend amount. You receive negotiated pricing in exchange for a minimum purchase commitment over the contract term.","negotiated-pricing":"A contract with custom pricing negotiated by your account team. You pay per-unit pricing without a minimum spend commitment."};return l.jsxs(o0,{children:[l.jsx(aa,{children:wo.enterprise.description}),e.contractType&&l.jsxs(l.Fragment,{children:[l.jsxs(Mt,{children:[l.jsx(At,{children:"Contract type"}),l.jsx(Ot,{children:t[e.contractType]})]}),l.jsx(aa,{style:{fontSize:"13px",color:"#6B7280"},children:n[e.contractType]})]}),l.jsxs(i0,{children:[l.jsxs(Mt,{children:[l.jsx(At,{children:"Contract term"}),l.jsx(Ot,{children:e.contractTerm})]}),l.jsxs(Mt,{children:[l.jsx(At,{children:"Renewal date"}),l.jsx(Ot,{children:e.renewalDate})]}),l.jsxs(Mt,{children:[l.jsx(At,{children:"Contract ID"}),l.jsx(Ot,{children:e.contractId})]})]}),l.jsx(l0,{children:l.jsx(pc,{variant:"outline",subject:`Question about ${e.instanceLabel} (${e.contractId})`})})]})}function Cw({instance:e,onClose:t}){return l.jsxs(o0,{children:[l.jsx(aa,{children:wo.ecommerce.description}),l.jsxs(i0,{children:[l.jsxs(Mt,{children:[l.jsx(At,{children:"Plan"}),l.jsx(Ot,{children:e.billing.plan})]}),l.jsxs(Mt,{children:[l.jsx(At,{children:"Price"}),l.jsx(Ot,{children:e.billing.price})]}),l.jsxs(Mt,{children:[l.jsx(At,{children:"Next charge date"}),l.jsx(Ot,{children:e.billing.nextChargeDate})]}),l.jsxs(Mt,{children:[l.jsx(At,{children:"Payment method"}),l.jsxs(Ot,{children:[e.paymentMethod.type," •••• ",e.paymentMethod.last4]})]})]}),l.jsxs(l0,{children:[l.jsxs(md,{to:"/settings/billing/payment-details",onClick:t,children:[l.jsx(Bh,{size:16,color:"currentColor"}),"Manage payment details"]}),l.jsxs(md,{to:"/settings/billing/receipts",onClick:t,children:[l.jsx(Fh,{size:16,color:"currentColor"}),"View receipts"]})]})]})}function $w({open:e,onClose:t,instances:n=[],initialInstanceId:r}){var c;const o=k.useRef(null),[i,s]=k.useState(r||((c=n[0])==null?void 0:c.instanceId));if(k.useEffect(()=>{var u;e&&s(r||((u=n[0])==null?void 0:u.instanceId))},[e,r,n]),k.useEffect(()=>{var f;if(!e)return;(f=o.current)==null||f.focus();const u=h=>{h.key==="Escape"&&t()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e,t]),!e)return null;const a=n.find(u=>u.instanceId===i)||n[0];return a?rc.createPortal(l.jsx(gw,{onClick:t,"aria-hidden":"false",children:l.jsxs(xw,{role:"dialog","aria-modal":"true","aria-labelledby":"billing-type-heading",onClick:u=>u.stopPropagation(),children:[l.jsxs(yw,{children:[l.jsxs("div",{children:[l.jsx(vw,{id:"billing-type-heading",children:"Plan type"}),l.jsx(ww,{children:n.length>1?"This environment includes both Enterprise and E-commerce CertCentral subscriptions.":"How this subscription is billed and managed."})]}),l.jsx(bw,{ref:o,onClick:t,"aria-label":"Close plan type details",children:l.jsx(Fi,{size:16,color:"currentColor"})})]}),n.length>1&&l.jsx(kw,{role:"tablist","aria-label":"Plan type by instance",children:n.map(u=>l.jsxs(jw,{role:"tab",type:"button",$active:u.instanceId===i,"aria-selected":u.instanceId===i,onClick:()=>s(u.instanceId),children:[u.instanceLabel,l.jsx(hd,{type:u.subscriptionType})]},u.instanceId))}),n.length===1&&l.jsx("div",{style:{padding:"12px 24px 0"},children:l.jsx(hd,{type:a.subscriptionType})}),a.subscriptionType==="enterprise"?l.jsx(Sw,{instance:a}):l.jsx(Cw,{instance:a,onClose:t})]})}),document.body):null}const gd=d.main`
  padding: 32px;
`,xd=d(kn)`
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
`,Ew=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Tw=d.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,Pw=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Lw=d.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Iw=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Rw=d.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,zw=d.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Nw=d.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,Dw=d.button`
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
`,bo=d.section`
  margin-bottom: 32px;
`,fc=d.h2`
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,s0=d.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||3}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,pl=d.div`
  padding: 18px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,fl=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,hl=d.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`,fo=d.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
  display: flex;
  align-items: baseline;
  gap: 5px;
`,a0=d.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral600};
`,hc=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Mw=d.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(39,168,114,0.10);
  color: #1F8F60;
`,Aw=d.button`
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
`;d.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.neutral400};
  border-radius: 4px;

  &:hover { color: ${({theme:e})=>e.colors.blue300}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`;d.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: 260px;
  padding: 10px 12px;
  border-radius: 6px;
  background: ${({theme:e})=>e.colors.neutral900};
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  z-index: 10;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: ${({theme:e})=>e.colors.neutral900};
  }
`;const Ow=d.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function c0({instance:e,onOpenBillingModal:t}){const n=e.subscriptionType==="enterprise",r=n?"Enterprise":"E-commerce",o=n&&e.contractType?I2[e.contractType]:null,i=o?`${o.label} contract`:e.billing?e.billing.plan:null;return l.jsxs(pl,{children:[l.jsx(fl,{children:l.jsxs(hl,{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:["Plan type",l.jsx(Aw,{type:"button",onClick:t,"aria-haspopup":"dialog",children:l.jsx(rr,{size:13,color:"currentColor"})})]})}),l.jsx(fo,{children:r}),i&&l.jsx(Ow,{children:i})]})}function _w(e){if(!e.length)return null;const t=e.reduce((r,o)=>r+o.allocated,0),n=e.reduce((r,o)=>r+o.consumed,0);return t===0?null:Math.round(n/t*100)}function u0({entitlements:e}){const t=_w(e);return l.jsxs(pl,{children:[l.jsxs(fl,{children:[l.jsx(hl,{children:"Usage"}),l.jsx(Ey,{size:15,color:"#9CA3AF"})]}),t!==null?l.jsxs(fo,{children:[t,"%",l.jsx(a0,{children:"consumed"})]}):l.jsx(fo,{children:"—"}),l.jsx(hc,{children:e.length?`${e.length} entitlement types`:"No usage data available"})]})}function Fw(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function d0({dateStr:e,sub:t}){const n=Fw(e);return l.jsxs(pl,{children:[l.jsxs(fl,{children:[l.jsx(hl,{children:"Renewal date"}),l.jsx($y,{size:15,color:"#9CA3AF"})]}),l.jsx(fo,{children:e}),l.jsx(hc,{children:t||`${n} days remaining`})]})}const Bw=d.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,p0=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,ut=d.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,dt=d.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 14px 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,f0=d.span`
  font-weight: 500;
  color: ${({$tone:e,theme:t})=>e==="error"?"#DC2626":e==="warning"?"#D97706":t.colors.neutral900};
`,h0=d.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`;function Uw({entitlements:e}){return e.length===0?l.jsx(h0,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):l.jsx(Bw,{children:l.jsxs(p0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(ut,{style:{width:"30%"},children:"Entitlement"}),l.jsx(ut,{$align:"right",children:"Purchased"}),l.jsx(ut,{$align:"right",children:"Allocated"}),l.jsx(ut,{$align:"right",children:"Used"}),l.jsx(ut,{$align:"right",children:"Remaining"})]})}),l.jsx("tbody",{children:e.map(t=>{const n=t.allocated>0?t.consumed/t.allocated:0,r=t.remaining<0?"error":n>=.8?"warning":void 0;return l.jsxs("tr",{children:[l.jsx(dt,{children:t.name}),l.jsx(dt,{$align:"right",children:t.purchased.toLocaleString()}),l.jsx(dt,{$align:"right",children:t.allocated.toLocaleString()}),l.jsx(dt,{$align:"right",children:t.consumed.toLocaleString()}),l.jsx(dt,{$align:"right",children:l.jsx(f0,{$tone:r,children:t.remaining<0?`Exceeded by ${Math.abs(t.remaining).toLocaleString()}`:t.remaining===0?"0":t.remaining.toLocaleString()})})]},t.name)})})]})})}const Ww=d.div`
  padding: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Vw=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`,Hw=d.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Qw=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #D5E6F7;
  color: ${({theme:e})=>e.colors.blue300};
  font-size: 16px;
  font-weight: 600;
  flex-shrink: 0;
`,Kw=d.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,Gw=d.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Yw=d.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Jw=d.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 13px;
`,yd=d.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Xw=d.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,Zw=d.span`
  color: ${({theme:e})=>e.colors.neutral700};
`,qw=d.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.neutral800};
`,eb=d.span`
  display: flex;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`,vd=d.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
  margin-bottom: 6px;
`,wd=d.div`
  display: flex;
  flex-direction: column;
`,tb=d.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};

  &::placeholder { color: ${({theme:e})=>e.colors.neutral400}; }
  &:focus { outline: none; border-color: ${({theme:e})=>e.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
`;d.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;const nb=d.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};
  resize: vertical;

  &::placeholder { color: ${({theme:e})=>e.colors.neutral400}; }
  &:focus { outline: none; border-color: ${({theme:e})=>e.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
`,rb=d.button`
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
`,ob=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,ib=d.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`;function lb({isCertCentral:e}){const t=at.name.split(" ").map(r=>r[0]).join(""),n=e?"Need more licenses, additional capacity, contract changes, billing help, or renewal assistance? Your DigiCert account manager can help.":"Have questions about this product, need help with configuration, or want to discuss your entitlements? Your DigiCert account manager can help.";return l.jsxs(bo,{children:[l.jsx(fc,{children:"Your DigiCert account manager"}),l.jsxs(Ww,{children:[l.jsxs(Vw,{children:[l.jsxs(Hw,{children:[l.jsx(Qw,{children:t}),l.jsxs(Kw,{children:[l.jsx(Gw,{children:at.name}),l.jsx(Yw,{children:at.title})]})]}),l.jsxs(Jw,{children:[l.jsxs(yd,{children:[l.jsx(Oh,{size:14,color:"currentColor"}),l.jsx(Xw,{href:`mailto:${at.email}`,children:at.email})]}),l.jsxs(yd,{children:[l.jsx(xy,{size:14,color:"currentColor"}),l.jsx(Zw,{children:at.phone})]})]})]}),l.jsxs(qw,{children:[l.jsx(eb,{children:l.jsx(rr,{size:16,color:"currentColor"})}),l.jsx("span",{children:n})]}),l.jsxs(wd,{children:[l.jsx(vd,{htmlFor:"contact-subject",children:"Subject"}),l.jsx(tb,{id:"contact-subject",type:"text",placeholder:"e.g. Request additional SSL/TLS licenses"})]}),l.jsxs(wd,{children:[l.jsx(vd,{htmlFor:"contact-message",children:"Message"}),l.jsx(nb,{id:"contact-message",placeholder:"Describe what you need help with...",rows:3})]}),l.jsxs(ob,{children:[l.jsxs(ib,{children:["Your message will be sent directly to ",at.name,"."]}),l.jsx(rb,{type:"button",children:"Send message"})]})]})]})}function sb({instance:e,onOpenBillingModal:t}){return l.jsx(bo,{children:l.jsxs(s0,{$cols:3,children:[l.jsx(c0,{instance:e,onOpenBillingModal:t}),l.jsx(d0,{dateStr:e.renewalDate,sub:e.contractTerm}),l.jsx(u0,{entitlements:e.entitlements})]})})}const ab=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`,cb=d.button`
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
`,bd=d(kn)`
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
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.blue300};
    color: ${({theme:e})=>e.colors.blue300};
  }
`;function ub({instance:e,onOpenBillingModal:t}){const[n,r]=e.billing.price.split(" / ");return l.jsxs(bo,{children:[l.jsxs(s0,{$cols:4,children:[l.jsx(c0,{instance:e,onOpenBillingModal:t}),l.jsxs(pl,{children:[l.jsxs(fl,{children:[l.jsx(hl,{children:"Monthly cost"}),l.jsx(Py,{size:15,color:"#9CA3AF"})]}),l.jsxs(fo,{$blue:!0,children:[n,l.jsxs(a0,{children:["/ ",r]})]}),l.jsx(hc,{children:e.billing.plan})]}),l.jsx(d0,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"}),l.jsx(u0,{entitlements:e.entitlements})]}),l.jsxs(ab,{children:[l.jsxs(cb,{type:"button",children:[l.jsx(Ty,{size:16,color:"currentColor"}),"Buy certificates"]}),l.jsx(bd,{to:"/settings/billing/payment-details",children:"Manage payment details"}),l.jsx(bd,{to:"/settings/billing/receipts",children:"View receipts"})]})]})}const db=d.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,pb=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,fb=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,hb=d.button`
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
`,mb=d.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,gb=d.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,xb=d.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,yb=d.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,vb=d.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,wb=d.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function bb({category:e}){const[t,n]=k.useState(e.products.length>0);return l.jsxs(db,{children:[l.jsxs(pb,{onClick:()=>n(r=>!r),children:[l.jsxs(fb,{children:[l.jsx(hb,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(o=>!o)},children:t?l.jsx(_h,{size:14,color:"currentColor"}):l.jsx(Wr,{size:14,color:"currentColor"})}),l.jsx(mb,{children:e.name})]}),l.jsx(gb,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&l.jsx(xb,{children:e.products.length===0?l.jsx(wb,{children:"No products purchased yet."}):l.jsxs(p0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(ut,{style:{width:"40%"},children:"Product"}),l.jsx(ut,{$align:"right",children:"Purchased"}),l.jsx(ut,{$align:"right",children:"Used"}),l.jsx(ut,{$align:"right",children:"Available"})]})}),l.jsx("tbody",{children:e.products.map((r,o)=>l.jsxs("tr",{children:[l.jsxs(dt,{children:[l.jsx(yb,{children:r.name}),l.jsx(vb,{children:r.type})]}),l.jsx(dt,{$align:"right",children:r.purchased}),l.jsx(dt,{$align:"right",children:r.used}),l.jsx(dt,{$align:"right",children:l.jsx(f0,{$tone:r.available===0?"error":void 0,children:r.available})})]},o))})]})})]})}function kb({categories:e}){return l.jsxs(bo,{children:[l.jsx(fc,{children:"Products"}),e.map(t=>l.jsx(bb,{category:t},t.id))]})}function jb({scenario:e}){const{subscriptionId:t}=vx(),[n,r]=k.useState(null),[o,i]=k.useState(!1),s=Vh(e).find(f=>f.id===t),a=(t==null?void 0:t.startsWith("certcentral-"))??!1;if(k.useEffect(()=>{document.title=s?`${s.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[s==null?void 0:s.id,s==null?void 0:s.name]),k.useEffect(()=>{var f;r(((f=s==null?void 0:s.instances[0])==null?void 0:f.instanceId)??null)},[t,e]),!s)return l.jsxs(gd,{children:[l.jsxs(xd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(h0,{children:"This subscription is not available in the current scenario."})]});const c=s.instances.find(f=>f.instanceId===n)||s.instances[0],u=()=>i(!0);return l.jsxs(gd,{children:[l.jsxs(xd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(Ew,{children:l.jsxs(Tw,{children:[l.jsx(Pw,{children:or(s.iconType,24,"currentColor")}),l.jsxs(Lw,{children:[l.jsxs(Iw,{children:[l.jsx(Rw,{children:s.name}),l.jsx(Mw,{children:"Active"})]}),s.accountName&&l.jsx(zw,{children:s.accountName})]})]})}),s.instances.length>1&&l.jsx(Nw,{role:"tablist","aria-label":"CertCentral instances",children:s.instances.map(f=>l.jsx(Dw,{role:"tab",type:"button",$active:f.instanceId===c.instanceId,"aria-selected":f.instanceId===c.instanceId,onClick:()=>r(f.instanceId),children:f.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},f.instanceId))}),c.subscriptionType==="enterprise"?l.jsxs(l.Fragment,{children:[l.jsx(sb,{instance:c,onOpenBillingModal:u}),l.jsxs(bo,{children:[l.jsx(fc,{children:"Entitlements and usage"}),l.jsx(Uw,{entitlements:c.entitlements})]}),l.jsx(lb,{isCertCentral:a})]}):l.jsxs(l.Fragment,{children:[l.jsx(ub,{instance:c,onOpenBillingModal:u}),l.jsx(kb,{categories:c.productCategories})]}),l.jsx($w,{open:o,onClose:()=>i(!1),instances:s.instances,initialInstanceId:c.instanceId})]})}const Sb=d.div`
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
`,Cb=d.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,$b=d.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Eb=d.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function m0({icon:e,title:t,children:n,action:r}){return l.jsxs(Sb,{children:[l.jsx(Cb,{children:e}),t&&l.jsx($b,{children:t}),l.jsx(Eb,{children:n}),r]})}const kd=d.main`
  padding: 32px;
`,jd=d(kn)`
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
`,Sd=d.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Cd=d.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Tb=d.div`
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
`,Zl=d.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
`,Pb=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,Lb=d.div`
  margin-left: auto;
`,mc=d.button`
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
`,Ib=d(mc)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,Rb=d(mc)``,zb=d.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Nb=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,Ct=d.th`
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
`,Db=d.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,ql={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},Mb=d.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=ql[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=ql[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=ql[e])==null?void 0:t.color)||"#374151"}};
`,Ab=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ob=d.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,_b=d.button`
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
`,Fb=d.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral50};
`,Bb=["All","Invoices","Receipts","Refunds"],$d=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function Ub({scenario:e}){const[t,n]=k.useState("All"),[r,o]=k.useState(!1);if(k.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return l.jsxs(kd,{children:[l.jsxs(jd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(Sd,{children:"Receipts and invoices"}),l.jsx(Cd,{children:"Download receipts, invoices, and other billing documents for your account."}),l.jsx(m0,{icon:l.jsx(Fh,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:l.jsx(pc,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const i=4,s="$2,520.00",a="Nov 20, 2025",c=t==="All"?$d:$d.filter(u=>t==="Invoices"?u.type==="Invoice":t==="Receipts"?u.type==="Receipt":t==="Refunds"?u.type==="Refund":!0);return l.jsxs(kd,{children:[l.jsxs(jd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(Sd,{children:"Receipts and invoices"}),l.jsx(Cd,{children:"Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage."}),l.jsxs(Tb,{children:[l.jsxs(Jl,{$alert:!0,children:[l.jsxs(Xl,{children:[l.jsx(Yu,{size:14,color:"#DC2626"}),"Invoices overdue"]}),l.jsx(Zl,{children:i})]}),l.jsxs(Jl,{$alert:!0,children:[l.jsxs(Xl,{children:[l.jsx(Yu,{size:14,color:"#DC2626"}),"Total balance overdue"]}),l.jsx(Zl,{$blue:!0,children:s})]}),l.jsxs(Jl,{children:[l.jsx(Xl,{children:"Next invoice due"}),l.jsx(Zl,{$blue:!0,children:a})]})]}),l.jsxs(Pb,{children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(mc,{type:"button",onClick:()=>o(u=>!u),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,l.jsx(Wr,{size:13,color:"currentColor"})]}),r&&l.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:Bb.map(u=>l.jsx("button",{type:"button",onClick:()=>{n(u),o(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:u===t?"#EAF1FB":"white",color:u===t?"#0174C3":"#1A1F27",fontWeight:u===t?500:400},children:u},u))})]}),l.jsxs(Ib,{type:"button",children:[l.jsx(Cy,{size:14,color:"currentColor"}),"Filter",l.jsx(Wr,{size:13,color:"currentColor"})]}),l.jsx(Lb,{children:l.jsxs(Rb,{type:"button",children:["Download CSV",l.jsx(Wr,{size:13,color:"currentColor"})]})})]}),l.jsxs(zb,{children:[l.jsxs(Nb,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(Ct,{style:{width:"140px"},children:"Invoice"}),l.jsx(Ct,{children:"Type"}),l.jsx(Ct,{children:"Issued on"}),l.jsx(Ct,{children:"Status"}),l.jsx(Ct,{$align:"right",children:"Amount"}),l.jsx(Ct,{children:"Due on"}),l.jsx(Ct,{children:"Ordered by"}),l.jsx(Ct,{})]})}),l.jsx("tbody",{children:c.map((u,f)=>l.jsxs("tr",{children:[l.jsx($t,{children:l.jsx(Db,{href:"#",children:u.id})}),l.jsx($t,{children:u.type}),l.jsx($t,{children:u.issuedOn}),l.jsx($t,{children:l.jsx(Mb,{$status:u.status,children:u.status})}),l.jsx($t,{$align:"right",children:u.amount}),l.jsx($t,{children:u.dueOn}),l.jsx($t,{children:u.orderedBy}),l.jsx($t,{children:l.jsxs(Ab,{children:[(u.status==="Overdue"||u.status==="Upcoming")&&l.jsx(Ob,{type:"button",children:"Pay"}),l.jsx(_b,{type:"button","aria-label":"Download",children:l.jsx(Sy,{size:15,color:"currentColor"})})]})})]},`${u.id}-${f}`))})]}),l.jsxs(Fb,{children:["1 to ",c.length," of 8,618"]})]})]})}const Ed=d.main`
  padding: 32px;
`,Td=d(kn)`
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
`,Wb=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,Vb=d.div``,Pd=d.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ld=d.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,Hb=d.a`
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
`,Id=d.div`
  margin-bottom: 32px;
`,Rd=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,zd=d.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Nd=d.button`
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
`,Qb=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Kb=d.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Gb=d.div`
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
`,Yb=d.div``,Jb=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,Xb=d.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Zb=d.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,qb=d.p`
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
`,ek=d.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,tk=d.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,nk=d(g0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Qo=d.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,Ko=d.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Go=d.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,rk=d.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`;function ok({scenario:e}){return k.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?l.jsxs(Ed,{children:[l.jsxs(Td,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(Pd,{children:"Payment details"}),l.jsx(Ld,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),l.jsx(m0,{icon:l.jsx(Bh,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:l.jsx(pc,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):l.jsxs(Ed,{children:[l.jsxs(Td,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsxs(Wb,{children:[l.jsxs(Vb,{children:[l.jsx(Pd,{children:"Payment details"}),l.jsx(Ld,{children:"Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method."})]}),l.jsxs(Hb,{href:"#",children:[l.jsx(rr,{size:14,color:"currentColor"}),"Need help?"]})]}),l.jsxs(Id,{children:[l.jsxs(Rd,{children:[l.jsx(zd,{children:"Payment methods"}),l.jsxs(Nd,{type:"button",children:[l.jsx(Ku,{size:14,color:"currentColor"}),"Add payment method"]})]}),l.jsxs(Qb,{children:[l.jsxs(Kb,{children:[l.jsx(Gb,{children:"VISA"}),l.jsxs(Yb,{children:[l.jsxs(Jb,{children:[l.jsx(Xb,{children:"Visa •••• 8350"}),l.jsx(Zb,{children:"Default"})]}),l.jsx(qb,{children:"Expires 02/28"})]})]}),l.jsx(g0,{type:"button","aria-label":"Payment method options",children:l.jsx(Gu,{size:16,color:"currentColor"})})]})]}),l.jsxs(Id,{children:[l.jsxs(Rd,{children:[l.jsx(zd,{children:"Billing contacts"}),l.jsxs(Nd,{type:"button",children:[l.jsx(Ku,{size:14,color:"currentColor"}),"Add billing contact"]})]}),l.jsxs(ek,{children:[l.jsx(nk,{type:"button","aria-label":"Contact options",children:l.jsx(Gu,{size:16,color:"currentColor"})}),l.jsx(tk,{children:"John Doe"}),l.jsxs(Qo,{children:[l.jsx(Ko,{children:"Address"}),l.jsxs(Go,{children:["123 Main Street",l.jsx("br",{}),"Suite 100",l.jsx("br",{}),"San Francisco, CA 94105",l.jsx("br",{}),"United States"]})]}),l.jsxs(Qo,{children:[l.jsx(Ko,{children:"Email address"}),l.jsx(Go,{children:"john.doe@winthecustomer.com"})]}),l.jsxs(Qo,{children:[l.jsx(Ko,{children:"Phone number"}),l.jsx(Go,{children:"650 123 4567"})]}),l.jsxs(Qo,{children:[l.jsxs(rk,{children:[l.jsx(Ko,{style:{margin:0},children:"VAT ID"}),l.jsx(rr,{size:14,color:"#0174C3"})]}),l.jsx(Go,{children:"23503820"})]})]})]})]})}function ik({containerRef:e}){const{pathname:t}=it();return k.useEffect(()=>{e.current?e.current.scrollTop=0:window.scrollTo(0,0)},[t,e]),null}const lk=sy`
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
`,sk=d.div`
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
`;function Dd(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function ak(){const[e,t]=k.useState(()=>typeof window<"u"?Dd():"desktop");return k.useEffect(()=>{const n=()=>t(Dd());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function ck(){const[e,t]=k.useState("dashboard"),[n,r]=k.useState(!1),[o,i]=k.useState(!0),[s,a]=k.useState(null),[c,u]=k.useState("mixed"),f=k.useCallback(()=>r(m=>!m),[]),h=k.useCallback(()=>r(!1),[]),x=k.useCallback(()=>i(m=>!m),[]),w=k.useCallback(m=>{t(m),i(!0)},[]),y=k.useCallback(m=>{t(m),i(!0),r(!1)},[]),j=k.useCallback(m=>{a(p=>p===m?null:m)},[]),$=k.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:o,activeTopNav:s,billingScenario:c,toggleDrawer:f,closeDrawer:h,toggleSpoke:x,setBillingScenario:u,selectProduct:w,selectProductFromDrawer:y,openTopNav:j,closeTopNav:$}}function uk(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:o,toggleDrawer:i,closeDrawer:s,toggleSpoke:a,setBillingScenario:c,selectProduct:u,selectProductFromDrawer:f,openTopNav:h,closeTopNav:x}=ck(),w=ak(),y=w==="mobile",j=k.useRef(null);k.useEffect(()=>{w!=="mobile"&&t&&s()},[w,t,s]),k.useEffect(()=>{const p=j.current;p&&(y&&t?(p.setAttribute("inert",""),p.setAttribute("aria-hidden","true")):(p.removeAttribute("inert"),p.removeAttribute("aria-hidden")))},[y,t]);const $=n?"276px":"56px",m=r==="ai-assist"?"400px":"0px";return l.jsxs(l.Fragment,{children:[l.jsx(lk,{}),l.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),l.jsx(bv,{isDrawerOpen:t,onToggleDrawer:i,activeTopNav:r,onOpenTopNav:h,onCloseTopNav:x,onSelectProduct:u,cartCount:3}),l.jsx(Ev,{activeProductId:e,onSelectProduct:u}),l.jsx(Bv,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:a,billingScenario:o}),l.jsx(Gv,{open:t,activeProductId:e,onSelectProduct:f,onClose:s}),l.jsxs(sk,{ref:j,id:"main-content",$leftOffset:$,$rightOffset:m,children:[l.jsx(ik,{containerRef:j}),l.jsxs(Mx,{children:[l.jsx(Pr,{path:"/",element:l.jsx(Nx,{to:"/dashboard",replace:!0})}),Ny.filter(p=>p!=="/").map(p=>{let g=l.jsx(dd,{});return p==="/dashboard"?g=l.jsx(T2,{}):p==="/settings/billing"?g=l.jsx(pw,{scenario:o,onScenarioChange:c}):p==="/settings/billing/receipts"?g=l.jsx(Ub,{scenario:o}):p==="/settings/billing/payment-details"&&(g=l.jsx(ok,{scenario:o})),l.jsx(Pr,{path:p,element:g},p)}),l.jsx(Pr,{path:"/settings/billing/:subscriptionId",element:l.jsx(jb,{scenario:o})}),l.jsx(Pr,{path:"*",element:l.jsx(dd,{})})]})]})]})}Yf(document.getElementById("root")).render(l.jsx(k.StrictMode,{children:l.jsx(Vx,{children:l.jsx(ny,{theme:ay,children:l.jsx(uk,{})})})}));
