function x0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function y0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zd={exports:{}},Hi={},Nd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),v0=Symbol.for("react.portal"),w0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),k0=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),$0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),T0=Symbol.for("react.lazy"),pc=Symbol.iterator;function P0(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var Md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dd=Object.assign,Ad={};function lr(e,t,n){this.props=e,this.context=t,this.refs=Ad,this.updater=n||Md}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Od(){}Od.prototype=lr.prototype;function sa(e,t,n){this.props=e,this.context=t,this.refs=Ad,this.updater=n||Md}var aa=sa.prototype=new Od;aa.constructor=sa;Dd(aa,lr.prototype);aa.isPureReactComponent=!0;var hc=Array.isArray,_d=Object.prototype.hasOwnProperty,ca={current:null},Fd={key:!0,ref:!0,__self:!0,__source:!0};function Bd(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)_d.call(t,r)&&!Fd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:mo,type:e,key:i,ref:s,props:o,_owner:ca.current}}function L0(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function I0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mc=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?I0(""+e.key):t.toString(36)}function Zo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mo:case v0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+xl(s,0):r,hc(o)?(n="",e!=null&&(n=e.replace(mc,"$&/")+"/"),Zo(o,t,n,"",function(u){return u})):o!=null&&(ua(o)&&(o=L0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(mc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",hc(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+xl(i,a);s+=Zo(i,t,n,c,o)}else if(c=P0(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+xl(i,a++),s+=Zo(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function $o(e,t,n){if(e==null)return e;var r=[],o=0;return Zo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function R0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},qo={transition:null},z0={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:qo,ReactCurrentOwner:ca};function Wd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:$o,forEach:function(e,t,n){$o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $o(e,function(){t++}),t},toArray:function(e){return $o(e,function(t){return t})||[]},only:function(e){if(!ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=lr;M.Fragment=w0;M.Profiler=k0;M.PureComponent=sa;M.StrictMode=b0;M.Suspense=$0;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;M.act=Wd;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dd({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)_d.call(t,c)&&!Fd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:mo,type:e.type,key:o,ref:i,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:S0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j0,_context:e},e.Consumer=e};M.createElement=Bd;M.createFactory=function(e){var t=Bd.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:C0,render:e}};M.isValidElement=ua;M.lazy=function(e){return{$$typeof:T0,_payload:{_status:-1,_result:e},_init:R0}};M.memo=function(e,t){return{$$typeof:E0,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};M.unstable_act=Wd;M.useCallback=function(e,t){return be.current.useCallback(e,t)};M.useContext=function(e){return be.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return be.current.useDeferredValue(e)};M.useEffect=function(e,t){return be.current.useEffect(e,t)};M.useId=function(){return be.current.useId()};M.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return be.current.useMemo(e,t)};M.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};M.useRef=function(e){return be.current.useRef(e)};M.useState=function(e){return be.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return be.current.useTransition()};M.version="18.3.1";Nd.exports=M;var k=Nd.exports;const ge=y0(k),N0=x0({__proto__:null,default:ge},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0=k,D0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,_0=M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F0={key:!0,ref:!0,__self:!0,__source:!0};function Ud(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)O0.call(t,r)&&!F0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:D0,type:e,key:i,ref:s,props:o,_owner:_0.current}}Hi.Fragment=A0;Hi.jsx=Ud;Hi.jsxs=Ud;zd.exports=Hi;var l=zd.exports,Vd={exports:{}},ze={},Hd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var R=P.length;P.push(I);e:for(;0<R;){var B=R-1>>>1,O=P[B];if(0<o(O,I))P[B]=I,P[R]=O,R=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],R=P.pop();if(R!==I){P[0]=R;e:for(var B=0,O=P.length,ie=O>>>1;B<ie;){var q=2*(B+1)-1,ne=P[q],Te=q+1,Me=P[Te];if(0>o(ne,R))Te<O&&0>o(Me,ne)?(P[B]=Me,P[Te]=R,B=Te):(P[B]=ne,P[q]=R,B=q);else if(Te<O&&0>o(Me,R))P[B]=Me,P[Te]=R,B=Te;else break e}}return I}function o(P,I){var R=P.sortIndex-I.sortIndex;return R!==0?R:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],p=1,h=null,x=3,w=!1,y=!1,j=!1,$=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function b(P){if(j=!1,g(P),!y)if(n(c)!==null)y=!0,kt(v);else{var I=n(u);I!==null&&rn(b,I.startTime-P)}}function v(P,I){y=!1,j&&(j=!1,m(E),E=-1),w=!0;var R=x;try{for(g(I),h=n(c);h!==null&&(!(h.expirationTime>I)||P&&!W());){var B=h.callback;if(typeof B=="function"){h.callback=null,x=h.priorityLevel;var O=B(h.expirationTime<=I);I=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(c)&&r(c),g(I)}else r(c);h=n(c)}if(h!==null)var ie=!0;else{var q=n(u);q!==null&&rn(b,q.startTime-I),ie=!1}return ie}finally{h=null,x=R,w=!1}}var C=!1,S=null,E=-1,D=5,z=-1;function W(){return!(e.unstable_now()-z<D)}function Ue(){if(S!==null){var P=e.unstable_now();z=P;var I=!0;try{I=S(!0,P)}finally{I?Z():(C=!1,S=null)}}else C=!1}var Z;if(typeof d=="function")Z=function(){d(Ue)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,nn=Ve.port2;Ve.port1.onmessage=Ue,Z=function(){nn.postMessage(null)}}else Z=function(){$(Ue,0)};function kt(P){S=P,C||(C=!0,Z())}function rn(P,I){E=$(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,kt(v))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var R=x;x=I;try{return P()}finally{x=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=x;x=P;try{return I()}finally{x=R}},e.unstable_scheduleCallback=function(P,I,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=R+O,P={id:p++,callback:I,priorityLevel:P,startTime:R,expirationTime:O,sortIndex:-1},R>B?(P.sortIndex=R,t(u,P),n(c)===null&&P===n(u)&&(j?(m(E),E=-1):j=!0,rn(b,R-B))):(P.sortIndex=O,t(c,P),y||w||(y=!0,kt(v))),P},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(P){var I=x;return function(){var R=x;x=I;try{return P.apply(this,arguments)}finally{x=R}}}})(Qd);Hd.exports=Qd;var B0=Hd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=k,Re=B0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kd=new Set,Qr={};function kn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Qr[e]=t,e=0;e<t.length;e++)Kd.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},xc={};function V0(e){return ts.call(xc,e)?!0:ts.call(gc,e)?!1:U0.test(e)?xc[e]=!0:(gc[e]=!0,!1)}function H0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q0(e,t,n,r){if(t===null||typeof t>"u"||H0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var da=/[\-:]([a-z])/g;function fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(da,fa);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(da,fa);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(da,fa);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function pa(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q0(t,n,o,r)&&(n=null),r||o===null?V0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),En=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),ha=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),ma=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),ga=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Jd=Symbol.for("react.offscreen"),yc=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,yl;function Er(e){if(yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||""}return`
`+yl+e}var vl=!1;function wl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function K0(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case En:return"Portal";case ns:return"Profiler";case ha:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yd:return(e.displayName||"Context")+".Consumer";case Gd:return(e._context.displayName||"Context")+".Provider";case ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ga:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function G0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=Xd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function To(e){e._valueTracker||(e._valueTracker=Y0(e))}function Zd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qd(e,t){t=t.checked,t!=null&&pa(e,"checked",t,!1)}function ss(e,t){qd(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,n):t.hasOwnProperty("defaultValue")&&as(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function as(e,t,n){(t!=="number"||mi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Tr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function ef(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function us(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Po,nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(Nr).forEach(function(e){J0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nr[t]=Nr[e]})});function rf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nr.hasOwnProperty(e)&&Nr[e]?(""+t).trim():t+"px"}function of(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=rf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var X0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ds(e,t){if(t){if(X0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,Fn=null,Bn=null;function jc(e){if(e=yo(e)){if(typeof hs!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ji(t),hs(e.stateNode,e.type,t))}}function lf(e){Fn?Bn?Bn.push(e):Bn=[e]:Fn=e}function sf(){if(Fn){var e=Fn,t=Bn;if(Bn=Fn=null,jc(e),t)for(e=0;e<t.length;e++)jc(t[e])}}function af(e,t){return e(t)}function cf(){}var bl=!1;function uf(e,t,n){if(bl)return e(t,n);bl=!0;try{return af(e,t,n)}finally{bl=!1,(Fn!==null||Bn!==null)&&(cf(),sf())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var ms=!1;if(ht)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){ms=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{ms=!1}function Z0(e,t,n,r,o,i,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Mr=!1,gi=null,xi=!1,gs=null,q0={onError:function(e){Mr=!0,gi=e}};function em(e,t,n,r,o,i,s,a,c){Mr=!1,gi=null,Z0.apply(q0,arguments)}function tm(e,t,n,r,o,i,s,a,c){if(em.apply(this,arguments),Mr){if(Mr){var u=gi;Mr=!1,gi=null}else throw Error(T(198));xi||(xi=!0,gs=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function df(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sc(e){if(jn(e)!==e)throw Error(T(188))}function nm(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Sc(o),e;if(i===r)return Sc(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function ff(e){return e=nm(e),e!==null?pf(e):null}function pf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pf(e);if(t!==null)return t;e=e.sibling}return null}var hf=Re.unstable_scheduleCallback,Cc=Re.unstable_cancelCallback,rm=Re.unstable_shouldYield,om=Re.unstable_requestPaint,te=Re.unstable_now,im=Re.unstable_getCurrentPriorityLevel,ya=Re.unstable_ImmediatePriority,mf=Re.unstable_UserBlockingPriority,yi=Re.unstable_NormalPriority,lm=Re.unstable_LowPriority,gf=Re.unstable_IdlePriority,Qi=null,rt=null;function sm(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Qi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:um,am=Math.log,cm=Math.LN2;function um(e){return e>>>=0,e===0?32:31-(am(e)/cm|0)|0}var Lo=64,Io=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Pr(a):(i&=s,i!==0&&(r=Pr(i)))}else s=n&~o,s!==0?r=Pr(s):i!==0&&(r=Pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function dm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Je(i),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=dm(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xf(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function pm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vf,wa,wf,bf,kf,ys=!1,Ro=[],_t=null,Ft=null,Bt=null,Yr=new Map,Jr=new Map,Lt=[],hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $c(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function xr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=yo(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function mm(e,t,n,r,o){switch(t){case"focusin":return _t=xr(_t,e,t,n,r,o),!0;case"dragenter":return Ft=xr(Ft,e,t,n,r,o),!0;case"mouseover":return Bt=xr(Bt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Yr.set(i,xr(Yr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Jr.set(i,xr(Jr.get(i)||null,e,t,n,r,o)),!0}return!1}function jf(e){var t=cn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=df(n),t!==null){e.blockedOn=t,kf(e.priority,function(){wf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=yo(n),t!==null&&wa(t),e.blockedOn=n,!1;t.shift()}return!0}function Ec(e,t,n){ei(e)&&n.delete(t)}function gm(){ys=!1,_t!==null&&ei(_t)&&(_t=null),Ft!==null&&ei(Ft)&&(Ft=null),Bt!==null&&ei(Bt)&&(Bt=null),Yr.forEach(Ec),Jr.forEach(Ec)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ys||(ys=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,gm)))}function Xr(e){function t(o){return yr(o,e)}if(0<Ro.length){yr(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&yr(_t,e),Ft!==null&&yr(Ft,e),Bt!==null&&yr(Bt,e),Yr.forEach(t),Jr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)jf(n),n.blockedOn===null&&Lt.shift()}var Wn=yt.ReactCurrentBatchConfig,wi=!0;function xm(e,t,n,r){var o=F,i=Wn.transition;Wn.transition=null;try{F=1,ba(e,t,n,r)}finally{F=o,Wn.transition=i}}function ym(e,t,n,r){var o=F,i=Wn.transition;Wn.transition=null;try{F=4,ba(e,t,n,r)}finally{F=o,Wn.transition=i}}function ba(e,t,n,r){if(wi){var o=vs(e,t,n,r);if(o===null)Rl(e,t,r,bi,n),$c(e,r);else if(mm(o,e,t,n,r))r.stopPropagation();else if($c(e,r),t&4&&-1<hm.indexOf(e)){for(;o!==null;){var i=yo(o);if(i!==null&&vf(i),i=vs(e,t,n,r),i===null&&Rl(e,t,r,bi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var bi=null;function vs(e,t,n,r){if(bi=null,e=xa(r),e=cn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=df(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bi=e,null}function Sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(im()){case ya:return 1;case mf:return 4;case yi:case lm:return 16;case gf:return 536870912;default:return 16}default:return 16}}var Rt=null,ka=null,ti=null;function Cf(){if(ti)return ti;var e,t=ka,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ti=o.slice(e,1<r?1-r:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function Tc(){return!1}function Ne(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zo:Tc,this.isPropagationStopped=Tc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=Ne(sr),xo=X({},sr,{view:0,detail:0}),vm=Ne(xo),jl,Sl,vr,Ki=X({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(jl=e.screenX-vr.screenX,Sl=e.screenY-vr.screenY):Sl=jl=0,vr=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Pc=Ne(Ki),wm=X({},Ki,{dataTransfer:0}),bm=Ne(wm),km=X({},xo,{relatedTarget:0}),Cl=Ne(km),jm=X({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sm=Ne(jm),Cm=X({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$m=Ne(Cm),Em=X({},sr,{data:0}),Lc=Ne(Em),Tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lm[e])?!!t[e]:!1}function Sa(){return Im}var Rm=X({},xo,{key:function(e){if(e.key){var t=Tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zm=Ne(Rm),Nm=X({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ic=Ne(Nm),Mm=X({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Dm=Ne(Mm),Am=X({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=Ne(Am),_m=X({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=Ne(_m),Bm=[9,13,27,32],Ca=ht&&"CompositionEvent"in window,Dr=null;ht&&"documentMode"in document&&(Dr=document.documentMode);var Wm=ht&&"TextEvent"in window&&!Dr,$f=ht&&(!Ca||Dr&&8<Dr&&11>=Dr),Rc=" ",zc=!1;function Ef(e,t){switch(e){case"keyup":return Bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Um(e,t){switch(e){case"compositionend":return Tf(t);case"keypress":return t.which!==32?null:(zc=!0,Rc);case"textInput":return e=t.data,e===Rc&&zc?null:e;default:return null}}function Vm(e,t){if(Pn)return e==="compositionend"||!Ca&&Ef(e,t)?(e=Cf(),ti=ka=Rt=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $f&&t.locale!=="ko"?null:t.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hm[e.type]:t==="textarea"}function Pf(e,t,n,r){lf(r),t=ki(t,"onChange"),0<t.length&&(n=new ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Zr=null;function Qm(e){Ff(e,0)}function Gi(e){var t=Rn(e);if(Zd(t))return e}function Km(e,t){if(e==="change")return t}var Lf=!1;if(ht){var $l;if(ht){var El="oninput"in document;if(!El){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),El=typeof Mc.oninput=="function"}$l=El}else $l=!1;Lf=$l&&(!document.documentMode||9<document.documentMode)}function Dc(){Ar&&(Ar.detachEvent("onpropertychange",If),Zr=Ar=null)}function If(e){if(e.propertyName==="value"&&Gi(Zr)){var t=[];Pf(t,Zr,e,xa(e)),uf(Qm,t)}}function Gm(e,t,n){e==="focusin"?(Dc(),Ar=t,Zr=n,Ar.attachEvent("onpropertychange",If)):e==="focusout"&&Dc()}function Ym(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(Zr)}function Jm(e,t){if(e==="click")return Gi(t)}function Xm(e,t){if(e==="input"||e==="change")return Gi(t)}function Zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Zm;function qr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ts.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var n=Ac(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ac(n)}}function Rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zf(){for(var e=window,t=mi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mi(e.document)}return t}function $a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qm(e){var t=zf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rf(n.ownerDocument.documentElement,n)){if(r!==null&&$a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Oc(n,i);var s=Oc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eg=ht&&"documentMode"in document&&11>=document.documentMode,Ln=null,ws=null,Or=null,bs=!1;function _c(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bs||Ln==null||Ln!==mi(r)||(r=Ln,"selectionStart"in r&&$a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&qr(Or,r)||(Or=r,r=ki(ws,"onSelect"),0<r.length&&(t=new ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function No(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Tl={},Nf={};ht&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function Yi(e){if(Tl[e])return Tl[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nf)return Tl[e]=t[n];return e}var Mf=Yi("animationend"),Df=Yi("animationiteration"),Af=Yi("animationstart"),Of=Yi("transitionend"),_f=new Map,Fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){_f.set(e,t),kn(t,[e])}for(var Pl=0;Pl<Fc.length;Pl++){var Ll=Fc[Pl],tg=Ll.toLowerCase(),ng=Ll[0].toUpperCase()+Ll.slice(1);Zt(tg,"on"+ng)}Zt(Mf,"onAnimationEnd");Zt(Df,"onAnimationIteration");Zt(Af,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Of,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Bc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tm(r,t,void 0,e),e.currentTarget=null}function Ff(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;Bc(o,a,u),i=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;Bc(o,a,u),i=c}}}if(xi)throw e=gs,xi=!1,gs=null,e}function V(e,t){var n=t[$s];n===void 0&&(n=t[$s]=new Set);var r=e+"__bubble";n.has(r)||(Bf(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),Bf(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function eo(e){if(!e[Mo]){e[Mo]=!0,Kd.forEach(function(n){n!=="selectionchange"&&(rg.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,Il("selectionchange",!1,t))}}function Bf(e,t,n,r){switch(Sf(t)){case 1:var o=xm;break;case 4:o=ym;break;default:o=ba}n=o.bind(null,t,n,e),o=void 0,!ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=cn(a),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}a=a.parentNode}}r=r.return}uf(function(){var u=i,p=xa(n),h=[];e:{var x=_f.get(e);if(x!==void 0){var w=ja,y=e;switch(e){case"keypress":if(ni(n)===0)break e;case"keydown":case"keyup":w=zm;break;case"focusin":y="focus",w=Cl;break;case"focusout":y="blur",w=Cl;break;case"beforeblur":case"afterblur":w=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Dm;break;case Mf:case Df:case Af:w=Sm;break;case Of:w=Om;break;case"scroll":w=vm;break;case"wheel":w=Fm;break;case"copy":case"cut":case"paste":w=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ic}var j=(t&4)!==0,$=!j&&e==="scroll",m=j?x!==null?x+"Capture":null:x;j=[];for(var d=u,g;d!==null;){g=d;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,m!==null&&(b=Gr(d,m),b!=null&&j.push(to(d,b,g)))),$)break;d=d.return}0<j.length&&(x=new w(x,y,null,n,p),h.push({event:x,listeners:j}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",x&&n!==ps&&(y=n.relatedTarget||n.fromElement)&&(cn(y)||y[mt]))break e;if((w||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?cn(y):null,y!==null&&($=jn(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(j=Pc,b="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=Ic,b="onPointerLeave",m="onPointerEnter",d="pointer"),$=w==null?x:Rn(w),g=y==null?x:Rn(y),x=new j(b,d+"leave",w,n,p),x.target=$,x.relatedTarget=g,b=null,cn(p)===u&&(j=new j(m,d+"enter",y,n,p),j.target=g,j.relatedTarget=$,b=j),$=b,w&&y)t:{for(j=w,m=y,d=0,g=j;g;g=Sn(g))d++;for(g=0,b=m;b;b=Sn(b))g++;for(;0<d-g;)j=Sn(j),d--;for(;0<g-d;)m=Sn(m),g--;for(;d--;){if(j===m||m!==null&&j===m.alternate)break t;j=Sn(j),m=Sn(m)}j=null}else j=null;w!==null&&Wc(h,x,w,j,!1),y!==null&&$!==null&&Wc(h,$,y,j,!0)}}e:{if(x=u?Rn(u):window,w=x.nodeName&&x.nodeName.toLowerCase(),w==="select"||w==="input"&&x.type==="file")var v=Km;else if(Nc(x))if(Lf)v=Xm;else{v=Ym;var C=Gm}else(w=x.nodeName)&&w.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(v=Jm);if(v&&(v=v(e,u))){Pf(h,v,n,p);break e}C&&C(e,x,u),e==="focusout"&&(C=x._wrapperState)&&C.controlled&&x.type==="number"&&as(x,"number",x.value)}switch(C=u?Rn(u):window,e){case"focusin":(Nc(C)||C.contentEditable==="true")&&(Ln=C,ws=u,Or=null);break;case"focusout":Or=ws=Ln=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,_c(h,n,p);break;case"selectionchange":if(eg)break;case"keydown":case"keyup":_c(h,n,p)}var S;if(Ca)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Pn?Ef(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&($f&&n.locale!=="ko"&&(Pn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Pn&&(S=Cf()):(Rt=p,ka="value"in Rt?Rt.value:Rt.textContent,Pn=!0)),C=ki(u,E),0<C.length&&(E=new Lc(E,e,null,n,p),h.push({event:E,listeners:C}),S?E.data=S:(S=Tf(n),S!==null&&(E.data=S)))),(S=Wm?Um(e,n):Vm(e,n))&&(u=ki(u,"onBeforeInput"),0<u.length&&(p=new Lc("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=S))}Ff(h,t)})}function to(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Gr(e,n),i!=null&&r.unshift(to(e,i,o)),i=Gr(e,t),i!=null&&r.push(to(e,i,o))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wc(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=Gr(n,i),c!=null&&s.unshift(to(n,c,a))):o||(c=Gr(n,i),c!=null&&s.push(to(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var og=/\r\n?/g,ig=/\u0000|\uFFFD/g;function Uc(e){return(typeof e=="string"?e:""+e).replace(og,`
`).replace(ig,"")}function Do(e,t,n){if(t=Uc(t),Uc(e)!==t&&n)throw Error(T(425))}function ji(){}var ks=null,js=null;function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,lg=typeof clearTimeout=="function"?clearTimeout:void 0,Vc=typeof Promise=="function"?Promise:void 0,sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Vc<"u"?function(e){return Vc.resolve(null).then(e).catch(ag)}:Cs;function ag(e){setTimeout(function(){throw e})}function zl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Xr(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),nt="__reactFiber$"+ar,no="__reactProps$"+ar,mt="__reactContainer$"+ar,$s="__reactEvents$"+ar,cg="__reactListeners$"+ar,ug="__reactHandles$"+ar;function cn(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hc(e);e!==null;){if(n=e[nt])return n;e=Hc(e)}return t}e=n,n=e.parentNode}return null}function yo(e){return e=e[nt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ji(e){return e[no]||null}var Es=[],zn=-1;function qt(e){return{current:e}}function Q(e){0>zn||(e.current=Es[zn],Es[zn]=null,zn--)}function U(e,t){zn++,Es[zn]=e.current,e.current=t}var Jt={},ye=qt(Jt),Ce=qt(!1),mn=Jt;function Kn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function Si(){Q(Ce),Q(ye)}function Qc(e,t,n){if(ye.current!==Jt)throw Error(T(168));U(ye,t),U(Ce,n)}function Wf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,G0(e)||"Unknown",o));return X({},n,r)}function Ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,mn=ye.current,U(ye,e),U(Ce,Ce.current),!0}function Kc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Wf(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,Q(Ce),Q(ye),U(ye,e)):Q(Ce),U(Ce,n)}var at=null,Xi=!1,Nl=!1;function Uf(e){at===null?at=[e]:at.push(e)}function dg(e){Xi=!0,Uf(e)}function en(){if(!Nl&&at!==null){Nl=!0;var e=0,t=F;try{var n=at;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,Xi=!1}catch(o){throw at!==null&&(at=at.slice(e+1)),hf(ya,en),o}finally{F=t,Nl=!1}}return null}var Nn=[],Mn=0,$i=null,Ei=0,De=[],Ae=0,gn=null,dt=1,ft="";function on(e,t){Nn[Mn++]=Ei,Nn[Mn++]=$i,$i=e,Ei=t}function Vf(e,t,n){De[Ae++]=dt,De[Ae++]=ft,De[Ae++]=gn,gn=e;var r=dt;e=ft;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,dt=1<<32-Je(t)+o|n<<o|r,ft=i+e}else dt=1<<i|n<<o|r,ft=e}function Ea(e){e.return!==null&&(on(e,1),Vf(e,1,0))}function Ta(e){for(;e===$i;)$i=Nn[--Mn],Nn[Mn]=null,Ei=Nn[--Mn],Nn[Mn]=null;for(;e===gn;)gn=De[--Ae],De[Ae]=null,ft=De[--Ae],De[Ae]=null,dt=De[--Ae],De[Ae]=null}var Ie=null,Le=null,K=!1,Ye=null;function Hf(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Le=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Le=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(K){var t=Le;if(t){var n=t;if(!Gc(e,t)){if(Ts(e))throw Error(T(418));t=Wt(n.nextSibling);var r=Ie;t&&Gc(e,t)?Hf(r,n):(e.flags=e.flags&-4097|2,K=!1,Ie=e)}}else{if(Ts(e))throw Error(T(418));e.flags=e.flags&-4097|2,K=!1,Ie=e}}}function Yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Ao(e){if(e!==Ie)return!1;if(!K)return Yc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ss(e.type,e.memoizedProps)),t&&(t=Le)){if(Ts(e))throw Qf(),Error(T(418));for(;t;)Hf(e,t),t=Wt(t.nextSibling)}if(Yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Ie?Wt(e.stateNode.nextSibling):null;return!0}function Qf(){for(var e=Le;e;)e=Wt(e.nextSibling)}function Gn(){Le=Ie=null,K=!1}function Pa(e){Ye===null?Ye=[e]:Ye.push(e)}var fg=yt.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jc(e){var t=e._init;return t(e._payload)}function Kf(e){function t(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=Qt(m,d),m.index=0,m.sibling=null,m}function i(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,b){return d===null||d.tag!==6?(d=Bl(g,m.mode,b),d.return=m,d):(d=o(d,g),d.return=m,d)}function c(m,d,g,b){var v=g.type;return v===Tn?p(m,d,g.props.children,b,g.key):d!==null&&(d.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Tt&&Jc(v)===d.type)?(b=o(d,g.props),b.ref=wr(m,d,g),b.return=m,b):(b=ci(g.type,g.key,g.props,null,m.mode,b),b.ref=wr(m,d,g),b.return=m,b)}function u(m,d,g,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Wl(g,m.mode,b),d.return=m,d):(d=o(d,g.children||[]),d.return=m,d)}function p(m,d,g,b,v){return d===null||d.tag!==7?(d=pn(g,m.mode,b,v),d.return=m,d):(d=o(d,g),d.return=m,d)}function h(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Bl(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Eo:return g=ci(d.type,d.key,d.props,null,m.mode,g),g.ref=wr(m,null,d),g.return=m,g;case En:return d=Wl(d,m.mode,g),d.return=m,d;case Tt:var b=d._init;return h(m,b(d._payload),g)}if(Tr(d)||mr(d))return d=pn(d,m.mode,g,null),d.return=m,d;Oo(m,d)}return null}function x(m,d,g,b){var v=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return v!==null?null:a(m,d,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Eo:return g.key===v?c(m,d,g,b):null;case En:return g.key===v?u(m,d,g,b):null;case Tt:return v=g._init,x(m,d,v(g._payload),b)}if(Tr(g)||mr(g))return v!==null?null:p(m,d,g,b,null);Oo(m,g)}return null}function w(m,d,g,b,v){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(g)||null,a(d,m,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Eo:return m=m.get(b.key===null?g:b.key)||null,c(d,m,b,v);case En:return m=m.get(b.key===null?g:b.key)||null,u(d,m,b,v);case Tt:var C=b._init;return w(m,d,g,C(b._payload),v)}if(Tr(b)||mr(b))return m=m.get(g)||null,p(d,m,b,v,null);Oo(d,b)}return null}function y(m,d,g,b){for(var v=null,C=null,S=d,E=d=0,D=null;S!==null&&E<g.length;E++){S.index>E?(D=S,S=null):D=S.sibling;var z=x(m,S,g[E],b);if(z===null){S===null&&(S=D);break}e&&S&&z.alternate===null&&t(m,S),d=i(z,d,E),C===null?v=z:C.sibling=z,C=z,S=D}if(E===g.length)return n(m,S),K&&on(m,E),v;if(S===null){for(;E<g.length;E++)S=h(m,g[E],b),S!==null&&(d=i(S,d,E),C===null?v=S:C.sibling=S,C=S);return K&&on(m,E),v}for(S=r(m,S);E<g.length;E++)D=w(S,m,E,g[E],b),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?E:D.key),d=i(D,d,E),C===null?v=D:C.sibling=D,C=D);return e&&S.forEach(function(W){return t(m,W)}),K&&on(m,E),v}function j(m,d,g,b){var v=mr(g);if(typeof v!="function")throw Error(T(150));if(g=v.call(g),g==null)throw Error(T(151));for(var C=v=null,S=d,E=d=0,D=null,z=g.next();S!==null&&!z.done;E++,z=g.next()){S.index>E?(D=S,S=null):D=S.sibling;var W=x(m,S,z.value,b);if(W===null){S===null&&(S=D);break}e&&S&&W.alternate===null&&t(m,S),d=i(W,d,E),C===null?v=W:C.sibling=W,C=W,S=D}if(z.done)return n(m,S),K&&on(m,E),v;if(S===null){for(;!z.done;E++,z=g.next())z=h(m,z.value,b),z!==null&&(d=i(z,d,E),C===null?v=z:C.sibling=z,C=z);return K&&on(m,E),v}for(S=r(m,S);!z.done;E++,z=g.next())z=w(S,m,E,z.value,b),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?E:z.key),d=i(z,d,E),C===null?v=z:C.sibling=z,C=z);return e&&S.forEach(function(Ue){return t(m,Ue)}),K&&on(m,E),v}function $(m,d,g,b){if(typeof g=="object"&&g!==null&&g.type===Tn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Eo:e:{for(var v=g.key,C=d;C!==null;){if(C.key===v){if(v=g.type,v===Tn){if(C.tag===7){n(m,C.sibling),d=o(C,g.props.children),d.return=m,m=d;break e}}else if(C.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Tt&&Jc(v)===C.type){n(m,C.sibling),d=o(C,g.props),d.ref=wr(m,C,g),d.return=m,m=d;break e}n(m,C);break}else t(m,C);C=C.sibling}g.type===Tn?(d=pn(g.props.children,m.mode,b,g.key),d.return=m,m=d):(b=ci(g.type,g.key,g.props,null,m.mode,b),b.ref=wr(m,d,g),b.return=m,m=b)}return s(m);case En:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=o(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Wl(g,m.mode,b),d.return=m,m=d}return s(m);case Tt:return C=g._init,$(m,d,C(g._payload),b)}if(Tr(g))return y(m,d,g,b);if(mr(g))return j(m,d,g,b);Oo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,g),d.return=m,m=d):(n(m,d),d=Bl(g,m.mode,b),d.return=m,m=d),s(m)):n(m,d)}return $}var Yn=Kf(!0),Gf=Kf(!1),Ti=qt(null),Pi=null,Dn=null,La=null;function Ia(){La=Dn=Pi=null}function Ra(e){var t=Ti.current;Q(Ti),e._currentValue=t}function Ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){Pi=e,La=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Pi===null)throw Error(T(308));Dn=e,Pi.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var un=null;function za(e){un===null?un=[e]:un.push(e)}function Yf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,za(t)):(n.next=o.next,o.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,gt(e,n)}return o=r.interleaved,o===null?(t.next=t,za(r)):(t.next=o.next,o.next=t),r.interleaved=t,gt(e,n)}function ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}function Xc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Li(e,t,n,r){var o=e.updateQueue;Pt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;s=0,p=u=c=null,a=i;do{var x=a.lane,w=a.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,j=a;switch(x=t,w=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){h=y.call(w,h,x);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,x=typeof y=="function"?y.call(w,h,x):y,x==null)break e;h=X({},h,x);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[a]:x.push(a))}else w={eventTime:w,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=w,c=h):p=p.next=w,s|=x;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;x=a,a=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(c=h),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);yn|=s,e.lanes=s,e.memoizedState=h}}function Zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var vo={},ot=qt(vo),ro=qt(vo),oo=qt(vo);function dn(e){if(e===vo)throw Error(T(174));return e}function Ma(e,t){switch(U(oo,t),U(ro,e),U(ot,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:us(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=us(t,e)}Q(ot),U(ot,t)}function Jn(){Q(ot),Q(ro),Q(oo)}function Xf(e){dn(oo.current);var t=dn(ot.current),n=us(t,e.type);t!==n&&(U(ro,e),U(ot,n))}function Da(e){ro.current===e&&(Q(ot),Q(ro))}var G=qt(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function Aa(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var oi=yt.ReactCurrentDispatcher,Dl=yt.ReactCurrentBatchConfig,xn=0,Y=null,le=null,ce=null,Ri=!1,_r=!1,io=0,pg=0;function he(){throw Error(T(321))}function Oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function _a(e,t,n,r,o,i){if(xn=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=e===null||e.memoizedState===null?xg:yg,e=n(r,o),_r){i=0;do{if(_r=!1,io=0,25<=i)throw Error(T(301));i+=1,ce=le=null,t.updateQueue=null,oi.current=vg,e=n(r,o)}while(_r)}if(oi.current=zi,t=le!==null&&le.next!==null,xn=0,ce=le=Y=null,Ri=!1,t)throw Error(T(300));return e}function Fa(){var e=io!==0;return io=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Y.memoizedState=ce=e:ce=ce.next=e,ce}function Be(){if(le===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ce===null?Y.memoizedState:ce.next;if(t!==null)ce=t,le=e;else{if(e===null)throw Error(T(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?Y.memoizedState=ce=e:ce=ce.next=e}return ce}function lo(e,t){return typeof t=="function"?t(e):t}function Al(e){var t=Be(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,c=null,u=i;do{var p=u.lane;if((xn&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,s=r):c=c.next=h,Y.lanes|=p,yn|=p}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=a,qe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,yn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ol(e){var t=Be(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);qe(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Zf(){}function qf(e,t){var n=Y,r=Be(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,Ba(np.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,so(9,tp.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(T(349));xn&30||ep(n,t,o)}return o}function ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tp(e,t,n,r){t.value=n,t.getSnapshot=r,rp(t)&&op(e)}function np(e,t,n){return n(function(){rp(t)&&op(e)})}function rp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function op(e){var t=gt(e,1);t!==null&&Xe(t,e,1,-1)}function qc(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},t.queue=e,e=e.dispatch=gg.bind(null,Y,e),[t.memoizedState,e]}function so(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ip(){return Be().memoizedState}function ii(e,t,n,r){var o=tt();Y.flags|=e,o.memoizedState=so(1|t,n,void 0,r===void 0?null:r)}function Zi(e,t,n,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(le!==null){var s=le.memoizedState;if(i=s.destroy,r!==null&&Oa(r,s.deps)){o.memoizedState=so(t,n,i,r);return}}Y.flags|=e,o.memoizedState=so(1|t,n,i,r)}function eu(e,t){return ii(8390656,8,e,t)}function Ba(e,t){return Zi(2048,8,e,t)}function lp(e,t){return Zi(4,2,e,t)}function sp(e,t){return Zi(4,4,e,t)}function ap(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cp(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4,4,ap.bind(null,t,e),n)}function Wa(){}function up(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dp(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fp(e,t,n){return xn&21?(qe(n,t)||(n=xf(),Y.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function hg(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{F=n,Dl.transition=r}}function pp(){return Be().memoizedState}function mg(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hp(e))mp(t,n);else if(n=Yf(e,t,n,r),n!==null){var o=we();Xe(n,e,r,o),gp(n,t,r)}}function gg(e,t,n){var r=Ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hp(e))mp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,qe(a,s)){var c=t.interleaved;c===null?(o.next=o,za(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Yf(e,t,o,r),n!==null&&(o=we(),Xe(n,e,r,o),gp(n,t,r))}}function hp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function mp(e,t){_r=Ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}var zi={readContext:Fe,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},xg={readContext:Fe,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ii(4194308,4,ap.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return ii(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mg.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:qc,useDebugValue:Wa,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=qc(!1),t=e[0];return e=hg.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=tt();if(K){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ue===null)throw Error(T(349));xn&30||ep(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,eu(np.bind(null,r,i,e),[e]),r.flags|=2048,so(9,tp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ue.identifierPrefix;if(K){var n=ft,r=dt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=io++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yg={readContext:Fe,useCallback:up,useContext:Fe,useEffect:Ba,useImperativeHandle:cp,useInsertionEffect:lp,useLayoutEffect:sp,useMemo:dp,useReducer:Al,useRef:ip,useState:function(){return Al(lo)},useDebugValue:Wa,useDeferredValue:function(e){var t=Be();return fp(t,le.memoizedState,e)},useTransition:function(){var e=Al(lo)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Zf,useSyncExternalStore:qf,useId:pp,unstable_isNewReconciler:!1},vg={readContext:Fe,useCallback:up,useContext:Fe,useEffect:Ba,useImperativeHandle:cp,useInsertionEffect:lp,useLayoutEffect:sp,useMemo:dp,useReducer:Ol,useRef:ip,useState:function(){return Ol(lo)},useDebugValue:Wa,useDeferredValue:function(e){var t=Be();return le===null?t.memoizedState=e:fp(t,le.memoizedState,e)},useTransition:function(){var e=Ol(lo)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Zf,useSyncExternalStore:qf,useId:pp,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qi={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Ht(e),i=pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,o),t!==null&&(Xe(t,e,o,r),ri(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Ht(e),i=pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,o),t!==null&&(Xe(t,e,o,r),ri(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Ht(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,r),t!==null&&(Xe(t,e,r,n),ri(t,e,r))}};function tu(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(o,i):!0}function xp(e,t,n){var r=!1,o=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(o=$e(t)?mn:ye.current,r=t.contextTypes,i=(r=r!=null)?Kn(e,o):Jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function nu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qi.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Na(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Fe(i):(i=$e(t)?mn:ye.current,o.context=Kn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Is(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&qi.enqueueReplaceState(o,o.state,null),Li(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=K0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function _l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wg=typeof WeakMap=="function"?WeakMap:Map;function yp(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mi||(Mi=!0,Us=r),zs(e,t)},n}function vp(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){zs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){zs(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ng.bind(null,e,t,n),t.then(e,e))}function ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function iu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var bg=yt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Gf(t,null,n,r):Yn(t,e.child,n,r)}function lu(e,t,n,r,o){n=n.render;var i=t.ref;return Un(t,o),r=_a(e,t,n,r,i,o),n=Fa(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(K&&n&&Ea(t),t.flags|=1,ve(e,t,r,o),t.child)}function su(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ja(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,wp(e,t,i,r,o)):(e=ci(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(s,r)&&e.ref===t.ref)return xt(e,t,o)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function wp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(qr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,xt(e,t,o)}return Ns(e,t,n,r,o)}function bp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(On,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(On,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(On,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(On,Pe),Pe|=r;return ve(e,t,o,n),t.child}function kp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ns(e,t,n,r,o){var i=$e(n)?mn:ye.current;return i=Kn(t,i),Un(t,o),n=_a(e,t,n,r,i,o),r=Fa(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(K&&r&&Ea(t),t.flags|=1,ve(e,t,n,o),t.child)}function au(e,t,n,r,o){if($e(n)){var i=!0;Ci(t)}else i=!1;if(Un(t,o),t.stateNode===null)li(e,t),xp(t,n,r),Rs(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=$e(n)?mn:ye.current,u=Kn(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&nu(t,s,r,u),Pt=!1;var x=t.memoizedState;s.state=x,Li(t,r,s,o),c=t.memoizedState,a!==r||x!==c||Ce.current||Pt?(typeof p=="function"&&(Is(t,n,p,r),c=t.memoizedState),(a=Pt||tu(t,n,a,r,x,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Jf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),s.props=u,h=t.pendingProps,x=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Fe(c):(c=$e(n)?mn:ye.current,c=Kn(t,c));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||x!==c)&&nu(t,s,r,c),Pt=!1,x=t.memoizedState,s.state=x,Li(t,r,s,o);var y=t.memoizedState;a!==h||x!==y||Ce.current||Pt?(typeof w=="function"&&(Is(t,n,w,r),y=t.memoizedState),(u=Pt||tu(t,n,u,r,x,y,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ms(e,t,n,r,i,o)}function Ms(e,t,n,r,o,i){kp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Kc(t,n,!1),xt(e,t,i);r=t.stateNode,bg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yn(t,e.child,null,i),t.child=Yn(t,null,a,i)):ve(e,t,a,i),t.memoizedState=r.state,o&&Kc(t,n,!0),t.child}function jp(e){var t=e.stateNode;t.pendingContext?Qc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qc(e,t.context,!1),Ma(e,t.containerInfo)}function cu(e,t,n,r,o){return Gn(),Pa(o),t.flags|=256,ve(e,t,n,r),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sp(e,t,n){var r=t.pendingProps,o=G.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(G,o&1),e===null)return Ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=nl(s,r,0,null),e=pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=As(n),t.memoizedState=Ds,e):Ua(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return kg(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Qt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Qt(a,i):(i=pn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?As(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ds,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ua(e,t){return t=nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&Pa(r),Yn(t,e.child,null,n),e=Ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kg(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=_l(Error(T(422))),_o(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=nl({mode:"visible",children:r.children},o,0,null),i=pn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Yn(t,e.child,null,s),t.child.memoizedState=As(s),t.memoizedState=Ds,i);if(!(t.mode&1))return _o(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(T(419)),r=_l(i,r,void 0),_o(e,t,s,r)}if(a=(s&e.childLanes)!==0,Se||a){if(r=ue,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,gt(e,o),Xe(r,e,o,-1))}return Ya(),r=_l(Error(T(421))),_o(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=Wt(o.nextSibling),Ie=t,K=!0,Ye=null,e!==null&&(De[Ae++]=dt,De[Ae++]=ft,De[Ae++]=gn,dt=e.id,ft=e.overflow,gn=t),t=Ua(t,r.children),t.flags|=4096,t)}function uu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ls(e.return,t,n)}function Fl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Cp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,n,t);else if(e.tag===19)uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Fl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ii(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Fl(t,!0,n,null,i);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jg(e,t,n){switch(t.tag){case 3:jp(t),Gn();break;case 5:Xf(t);break;case 1:$e(t.type)&&Ci(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(Ti,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Sp(e,t,n):(U(G,G.current&1),e=xt(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,bp(e,t,n)}return xt(e,t,n)}var $p,Os,Ep,Tp;$p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Os=function(){};Ep=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,dn(ot.current);var i=null;switch(n){case"input":o=ls(e,o),r=ls(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=cs(e,o),r=cs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ji)}ds(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&V("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Tp=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sg(e,t,n){var r=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return $e(t.type)&&Si(),me(t),null;case 3:return r=t.stateNode,Jn(),Q(Ce),Q(ye),Aa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Qs(Ye),Ye=null))),Os(e,t),me(t),null;case 5:Da(t);var o=dn(oo.current);if(n=t.type,e!==null&&t.stateNode!=null)Ep(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return me(t),null}if(e=dn(ot.current),Ao(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[no]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Lr.length;o++)V(Lr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":vc(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":bc(r,i),V("invalid",r)}ds(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Do(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Do(r.textContent,a,e),o=["children",""+a]):Qr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":To(r),wc(r,i,!0);break;case"textarea":To(r),kc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ji)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[no]=r,$p(e,t,!1,!1),t.stateNode=e;e:{switch(s=fs(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lr.length;o++)V(Lr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":vc(e,r),o=ls(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":bc(e,r),o=cs(e,r),V("invalid",e);break;default:o=r}ds(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?of(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&nf(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Kr(e,c):typeof c=="number"&&Kr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&V("scroll",e):c!=null&&pa(e,i,c,s))}switch(n){case"input":To(e),wc(e,r,!1);break;case"textarea":To(e),kc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_n(e,!!r.multiple,i,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Tp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=dn(oo.current),dn(ot.current),Ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:Do(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Do(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return me(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&t.mode&1&&!(t.flags&128))Qf(),Gn(),t.flags|=98560,i=!1;else if(i=Ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[nt]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ye!==null&&(Qs(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ae===0&&(ae=3):Ya())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Jn(),Os(e,t),e===null&&eo(t.stateNode.containerInfo),me(t),null;case 10:return Ra(t.type._context),me(t),null;case 17:return $e(t.type)&&Si(),me(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)br(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ii(e),s!==null){for(t.flags|=128,br(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Zn&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ii(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!K)return me(t),null}else 2*te()-i.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Cg(e,t){switch(Ta(t),t.tag){case 1:return $e(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(),Q(Ce),Q(ye),Aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Da(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return Jn(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return Ga(),null;case 24:return null;default:return null}}var Fo=!1,xe=!1,$g=typeof WeakSet=="function"?WeakSet:Set,L=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function _s(e,t,n){try{n()}catch(r){ee(e,t,r)}}var du=!1;function Eg(e,t){if(ks=wi,e=zf(),$a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,p=0,h=e,x=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(w=h.firstChild)!==null;)x=h,h=w;for(;;){if(h===e)break t;if(x===n&&++u===o&&(a=s),x===i&&++p===r&&(c=s),(w=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=w}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(js={focusedElem:e,selectionRange:n},wi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,$=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?j:Qe(t.type,j),$);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(b){ee(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=du,du=!1,y}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_s(t,n,i)}o=o.next}while(o!==r)}}function el(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pp(e){var t=e.alternate;t!==null&&(e.alternate=null,Pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[no],delete t[$s],delete t[cg],delete t[ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lp(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function Ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}var de=null,Ke=!1;function St(e,t,n){for(n=n.child;n!==null;)Ip(e,t,n),n=n.sibling}function Ip(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 5:xe||An(n,t);case 6:var r=de,o=Ke;de=null,St(e,t,n),de=r,Ke=o,de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?zl(e.parentNode,n):e.nodeType===1&&zl(e,n),Xr(e)):zl(de,n.stateNode));break;case 4:r=de,o=Ke,de=n.stateNode.containerInfo,Ke=!0,St(e,t,n),de=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&_s(n,t,s),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!xe&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,St(e,t,n),xe=r):St(e,t,n);break;default:St(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $g),t.forEach(function(r){var o=Dg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Ke=!1;break e;case 3:de=a.stateNode.containerInfo,Ke=!0;break e;case 4:de=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(de===null)throw Error(T(160));Ip(i,s,o),de=null,Ke=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rp(t,e),t=t.sibling}function Rp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),et(e),r&4){try{Fr(3,e,e.return),el(3,e)}catch(j){ee(e,e.return,j)}try{Fr(5,e,e.return)}catch(j){ee(e,e.return,j)}}break;case 1:He(t,e),et(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(He(t,e),et(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var o=e.stateNode;try{Kr(o,"")}catch(j){ee(e,e.return,j)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&qd(o,i),fs(a,s);var u=fs(a,i);for(s=0;s<c.length;s+=2){var p=c[s],h=c[s+1];p==="style"?of(o,h):p==="dangerouslySetInnerHTML"?nf(o,h):p==="children"?Kr(o,h):pa(o,p,h,u)}switch(a){case"input":ss(o,i);break;case"textarea":ef(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?_n(o,!!i.multiple,w,!1):x!==!!i.multiple&&(i.defaultValue!=null?_n(o,!!i.multiple,i.defaultValue,!0):_n(o,!!i.multiple,i.multiple?[]:"",!1))}o[no]=i}catch(j){ee(e,e.return,j)}}break;case 6:if(He(t,e),et(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(j){ee(e,e.return,j)}}break;case 3:if(He(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(j){ee(e,e.return,j)}break;case 4:He(t,e),et(e);break;case 13:He(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qa=te())),r&4&&pu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||p,He(t,e),xe=u):He(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(L=e,p=e.child;p!==null;){for(h=L=p;L!==null;){switch(x=L,w=x.child,x.tag){case 0:case 11:case 14:case 15:Fr(4,x,x.return);break;case 1:An(x,x.return);var y=x.stateNode;if(typeof y.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){ee(r,n,j)}}break;case 5:An(x,x.return);break;case 22:if(x.memoizedState!==null){mu(h);continue}}w!==null?(w.return=x,L=w):mu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=rf("display",s))}catch(j){ee(e,e.return,j)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(j){ee(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),et(e),r&4&&pu(e);break;case 21:break;default:He(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kr(o,""),r.flags&=-33);var i=fu(e);Ws(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=fu(e);Bs(e,a,s);break;default:throw Error(T(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tg(e,t,n){L=e,zp(e)}function zp(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Fo;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||xe;a=Fo;var u=xe;if(Fo=s,(xe=c)&&!u)for(L=o;L!==null;)s=L,c=s.child,s.tag===22&&s.memoizedState!==null?gu(o):c!==null?(c.return=s,L=c):gu(o);for(;i!==null;)L=i,zp(i),i=i.sibling;L=o,Fo=a,xe=u}hu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):hu(e)}}function hu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||el(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zc(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Xr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}xe||t.flags&512&&Fs(t)}catch(x){ee(t,t.return,x)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function mu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function gu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{el(4,t)}catch(c){ee(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ee(t,o,c)}}var i=t.return;try{Fs(t)}catch(c){ee(t,i,c)}break;case 5:var s=t.return;try{Fs(t)}catch(c){ee(t,s,c)}}}catch(c){ee(t,t.return,c)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var Pg=Math.ceil,Ni=yt.ReactCurrentDispatcher,Va=yt.ReactCurrentOwner,_e=yt.ReactCurrentBatchConfig,A=0,ue=null,oe=null,fe=0,Pe=0,On=qt(0),ae=0,ao=null,yn=0,tl=0,Ha=0,Br=null,je=null,Qa=0,Zn=1/0,it=null,Mi=!1,Us=null,Vt=null,Bo=!1,zt=null,Di=0,Wr=0,Vs=null,si=-1,ai=0;function we(){return A&6?te():si!==-1?si:si=te()}function Ht(e){return e.mode&1?A&2&&fe!==0?fe&-fe:fg.transition!==null?(ai===0&&(ai=xf()),ai):(e=F,e!==0||(e=window.event,e=e===void 0?16:Sf(e.type)),e):1}function Xe(e,t,n,r){if(50<Wr)throw Wr=0,Vs=null,Error(T(185));go(e,n,r),(!(A&2)||e!==ue)&&(e===ue&&(!(A&2)&&(tl|=n),ae===4&&It(e,fe)),Ee(e,r),n===1&&A===0&&!(t.mode&1)&&(Zn=te()+500,Xi&&en()))}function Ee(e,t){var n=e.callbackNode;fm(e,t);var r=vi(e,e===ue?fe:0);if(r===0)n!==null&&Cc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cc(n),t===1)e.tag===0?dg(xu.bind(null,e)):Uf(xu.bind(null,e)),sg(function(){!(A&6)&&en()}),n=null;else{switch(yf(r)){case 1:n=ya;break;case 4:n=mf;break;case 16:n=yi;break;case 536870912:n=gf;break;default:n=yi}n=Bp(n,Np.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Np(e,t){if(si=-1,ai=0,A&6)throw Error(T(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=vi(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ai(e,r);else{t=r;var o=A;A|=2;var i=Dp();(ue!==e||fe!==t)&&(it=null,Zn=te()+500,fn(e,t));do try{Rg();break}catch(a){Mp(e,a)}while(!0);Ia(),Ni.current=i,A=o,oe!==null?t=0:(ue=null,fe=0,t=ae)}if(t!==0){if(t===2&&(o=xs(e),o!==0&&(r=o,t=Hs(e,o))),t===1)throw n=ao,fn(e,0),It(e,r),Ee(e,te()),n;if(t===6)It(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lg(o)&&(t=Ai(e,r),t===2&&(i=xs(e),i!==0&&(r=i,t=Hs(e,i))),t===1))throw n=ao,fn(e,0),It(e,r),Ee(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:ln(e,je,it);break;case 3:if(It(e,r),(r&130023424)===r&&(t=Qa+500-te(),10<t)){if(vi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cs(ln.bind(null,e,je,it),t);break}ln(e,je,it);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Je(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pg(r/1960))-r,10<r){e.timeoutHandle=Cs(ln.bind(null,e,je,it),r);break}ln(e,je,it);break;case 5:ln(e,je,it);break;default:throw Error(T(329))}}}return Ee(e,te()),e.callbackNode===n?Np.bind(null,e):null}function Hs(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Ai(e,t),e!==2&&(t=je,je=n,t!==null&&Qs(t)),e}function Qs(e){je===null?je=e:je.push.apply(je,e)}function Lg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~Ha,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function xu(e){if(A&6)throw Error(T(327));Vn();var t=vi(e,0);if(!(t&1))return Ee(e,te()),null;var n=Ai(e,t);if(e.tag!==0&&n===2){var r=xs(e);r!==0&&(t=r,n=Hs(e,r))}if(n===1)throw n=ao,fn(e,0),It(e,t),Ee(e,te()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,je,it),Ee(e,te()),null}function Ka(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Zn=te()+500,Xi&&en())}}function vn(e){zt!==null&&zt.tag===0&&!(A&6)&&Vn();var t=A;A|=1;var n=_e.transition,r=F;try{if(_e.transition=null,F=1,e)return e()}finally{F=r,_e.transition=n,A=t,!(A&6)&&en()}}function Ga(){Pe=On.current,Q(On)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lg(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Si();break;case 3:Jn(),Q(Ce),Q(ye),Aa();break;case 5:Da(r);break;case 4:Jn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Ra(r.type._context);break;case 22:case 23:Ga()}n=n.return}if(ue=e,oe=e=Qt(e.current,null),fe=Pe=t,ae=0,ao=null,Ha=tl=yn=0,je=Br=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}un=null}return e}function Mp(e,t){do{var n=oe;try{if(Ia(),oi.current=zi,Ri){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ri=!1}if(xn=0,ce=le=Y=null,_r=!1,io=0,Va.current=null,n===null||n.return===null){ae=1,ao=t,oe=null;break}e:{var i=e,s=n.return,a=n,c=t;if(t=fe,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=ou(s);if(w!==null){w.flags&=-257,iu(w,s,a,i,t),w.mode&1&&ru(i,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){ru(i,u,t),Ya();break e}c=Error(T(426))}}else if(K&&a.mode&1){var $=ou(s);if($!==null){!($.flags&65536)&&($.flags|=256),iu($,s,a,i,t),Pa(Xn(c,a));break e}}i=c=Xn(c,a),ae!==4&&(ae=2),Br===null?Br=[i]:Br.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=yp(i,c,t);Xc(i,m);break e;case 1:a=c;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vt===null||!Vt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=vp(i,a,t);Xc(i,b);break e}}i=i.return}while(i!==null)}Op(n)}catch(v){t=v,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Dp(){var e=Ni.current;return Ni.current=zi,e===null?zi:e}function Ya(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(yn&268435455)&&!(tl&268435455)||It(ue,fe)}function Ai(e,t){var n=A;A|=2;var r=Dp();(ue!==e||fe!==t)&&(it=null,fn(e,t));do try{Ig();break}catch(o){Mp(e,o)}while(!0);if(Ia(),A=n,Ni.current=r,oe!==null)throw Error(T(261));return ue=null,fe=0,ae}function Ig(){for(;oe!==null;)Ap(oe)}function Rg(){for(;oe!==null&&!rm();)Ap(oe)}function Ap(e){var t=Fp(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Op(e):oe=t,Va.current=null}function Op(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cg(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=Sg(n,t,Pe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function ln(e,t,n){var r=F,o=_e.transition;try{_e.transition=null,F=1,zg(e,t,n,r)}finally{_e.transition=o,F=r}return null}function zg(e,t,n,r){do Vn();while(zt!==null);if(A&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(pm(e,i),e===ue&&(oe=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,Bp(yi,function(){return Vn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_e.transition,_e.transition=null;var s=F;F=1;var a=A;A|=4,Va.current=null,Eg(e,n),Rp(n,e),qm(js),wi=!!ks,js=ks=null,e.current=n,Tg(n),om(),A=a,F=s,_e.transition=i}else e.current=n;if(Bo&&(Bo=!1,zt=e,Di=o),i=e.pendingLanes,i===0&&(Vt=null),sm(n.stateNode),Ee(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Mi)throw Mi=!1,e=Us,Us=null,e;return Di&1&&e.tag!==0&&Vn(),i=e.pendingLanes,i&1?e===Vs?Wr++:(Wr=0,Vs=e):Wr=0,en(),null}function Vn(){if(zt!==null){var e=yf(Di),t=_e.transition,n=F;try{if(_e.transition=null,F=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,Di=0,A&6)throw Error(T(331));var o=A;for(A|=4,L=e.current;L!==null;){var i=L,s=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(L=u;L!==null;){var p=L;switch(p.tag){case 0:case 11:case 15:Fr(8,p,i)}var h=p.child;if(h!==null)h.return=p,L=h;else for(;L!==null;){p=L;var x=p.sibling,w=p.return;if(Pp(p),p===u){L=null;break}if(x!==null){x.return=w,L=x;break}L=w}}}var y=i.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var $=j.sibling;j.sibling=null,j=$}while(j!==null)}}L=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,L=s;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){s=L;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,L=g;else e:for(s=d;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:el(9,a)}}catch(v){ee(a,a.return,v)}if(a===s){L=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,L=b;break e}L=a.return}}if(A=o,en(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Qi,e)}catch{}r=!0}return r}finally{F=n,_e.transition=t}}return!1}function yu(e,t,n){t=Xn(n,t),t=yp(e,t,1),e=Ut(e,t,1),t=we(),e!==null&&(go(e,1,t),Ee(e,t))}function ee(e,t,n){if(e.tag===3)yu(e,e,n);else for(;t!==null;){if(t.tag===3){yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Xn(n,e),e=vp(t,e,1),t=Ut(t,e,1),e=we(),t!==null&&(go(t,1,e),Ee(t,e));break}}t=t.return}}function Ng(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-Qa?fn(e,0):Ha|=n),Ee(e,t)}function _p(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=we();e=gt(e,t),e!==null&&(go(e,t,n),Ee(e,n))}function Mg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_p(e,n)}function Dg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),_p(e,n)}var Fp;Fp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,jg(e,t,n);Se=!!(e.flags&131072)}else Se=!1,K&&t.flags&1048576&&Vf(t,Ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;li(e,t),e=t.pendingProps;var o=Kn(t,ye.current);Un(t,n),o=_a(null,t,r,e,o,n);var i=Fa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(i=!0,Ci(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Na(t),o.updater=qi,t.stateNode=o,o._reactInternals=t,Rs(t,r,e,n),t=Ms(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Ea(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(li(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Og(r),e=Qe(r,e),o){case 0:t=Ns(null,t,r,e,n);break e;case 1:t=au(null,t,r,e,n);break e;case 11:t=lu(null,t,r,e,n);break e;case 14:t=su(null,t,r,Qe(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Ns(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),au(e,t,r,o,n);case 3:e:{if(jp(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Jf(e,t),Li(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Xn(Error(T(423)),t),t=cu(e,t,r,n,o);break e}else if(r!==o){o=Xn(Error(T(424)),t),t=cu(e,t,r,n,o);break e}else for(Le=Wt(t.stateNode.containerInfo.firstChild),Ie=t,K=!0,Ye=null,n=Gf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===o){t=xt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Xf(t),e===null&&Ps(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Ss(r,o)?s=null:i!==null&&Ss(r,i)&&(t.flags|=32),kp(e,t),ve(e,t,s,n),t.child;case 6:return e===null&&Ps(t),null;case 13:return Sp(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),lu(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,U(Ti,r._currentValue),r._currentValue=s,i!==null)if(qe(i.value,s)){if(i.children===o.children&&!Ce.current){t=xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=pt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ls(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ls(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Un(t,n),o=Fe(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),su(e,t,r,o,n);case 15:return wp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),li(e,t),t.tag=1,$e(r)?(e=!0,Ci(t)):e=!1,Un(t,n),xp(t,r,o),Rs(t,r,o,n),Ms(null,t,r,!0,e,n);case 19:return Cp(e,t,n);case 22:return bp(e,t,n)}throw Error(T(156,t.tag))};function Bp(e,t){return hf(e,t)}function Ag(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new Ag(e,t,n,r)}function Ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Og(e){if(typeof e=="function")return Ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ma)return 11;if(e===ga)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ci(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Ja(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Tn:return pn(n.children,o,i,t);case ha:s=8,o|=8;break;case ns:return e=Oe(12,n,t,o|2),e.elementType=ns,e.lanes=i,e;case rs:return e=Oe(13,n,t,o),e.elementType=rs,e.lanes=i,e;case os:return e=Oe(19,n,t,o),e.elementType=os,e.lanes=i,e;case Jd:return nl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gd:s=10;break e;case Yd:s=9;break e;case ma:s=11;break e;case ga:s=14;break e;case Tt:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Oe(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function pn(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function nl(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Jd,e.lanes=n,e.stateNode={isHidden:!1},e}function Bl(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _g(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,r,o,i,s,a,c){return e=new _g(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Oe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(i),e}function Fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wp(e){if(!e)return Jt;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if($e(n))return Wf(e,n,t)}return t}function Up(e,t,n,r,o,i,s,a,c){return e=Xa(n,r,!0,e,o,i,s,a,c),e.context=Wp(null),n=e.current,r=we(),o=Ht(n),i=pt(r,o),i.callback=t??null,Ut(n,i,o),e.current.lanes=o,go(e,o,r),Ee(e,r),e}function rl(e,t,n,r){var o=t.current,i=we(),s=Ht(o);return n=Wp(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(o,t,s),e!==null&&(Xe(e,o,s,i),ri(e,o,s)),s}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Za(e,t){vu(e,t),(e=e.alternate)&&vu(e,t)}function Bg(){return null}var Vp=typeof reportError=="function"?reportError:function(e){console.error(e)};function qa(e){this._internalRoot=e}ol.prototype.render=qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));rl(e,t,null,null)};ol.prototype.unmount=qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){rl(null,e,null,null)}),t[mt]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=bf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&jf(e)}};function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function Wg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Oi(s);i.call(u)}}var s=Up(t,r,e,0,null,!1,!1,"",wu);return e._reactRootContainer=s,e[mt]=s.current,eo(e.nodeType===8?e.parentNode:e),vn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Oi(c);a.call(u)}}var c=Xa(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=c,e[mt]=c.current,eo(e.nodeType===8?e.parentNode:e),vn(function(){rl(t,c,n,r)}),c}function ll(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var c=Oi(s);a.call(c)}}rl(t,s,e,o)}else s=Wg(n,t,e,o,r);return Oi(s)}vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(va(t,n|1),Ee(t,te()),!(A&6)&&(Zn=te()+500,en()))}break;case 13:vn(function(){var r=gt(e,1);if(r!==null){var o=we();Xe(r,e,1,o)}}),Za(e,1)}};wa=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=we();Xe(t,e,134217728,n)}Za(e,134217728)}};wf=function(e){if(e.tag===13){var t=Ht(e),n=gt(e,t);if(n!==null){var r=we();Xe(n,e,t,r)}Za(e,t)}};bf=function(){return F};kf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};hs=function(e,t,n){switch(t){case"input":if(ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ji(r);if(!o)throw Error(T(90));Zd(r),ss(r,o)}}}break;case"textarea":ef(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}};af=Ka;cf=vn;var Ug={usingClientEntryPoint:!1,Events:[yo,Rn,Ji,lf,sf,Ka]},kr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vg={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ff(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||Bg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Qi=Wo.inject(Vg),rt=Wo}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ug;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ec(t))throw Error(T(200));return Fg(e,t,null,n)};ze.createRoot=function(e,t){if(!ec(e))throw Error(T(299));var n=!1,r="",o=Vp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,r,o),e[mt]=t.current,eo(e.nodeType===8?e.parentNode:e),new qa(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=ff(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return vn(e)};ze.hydrate=function(e,t,n){if(!il(t))throw Error(T(200));return ll(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!ec(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Vp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Up(t,null,e,1,n??null,o,!1,i,s),e[mt]=t.current,eo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ol(t)};ze.render=function(e,t,n){if(!il(t))throw Error(T(200));return ll(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!il(e))throw Error(T(40));return e._reactRootContainer?(vn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};ze.unstable_batchedUpdates=Ka;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return ll(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp)}catch(e){console.error(e)}}Hp(),Vd.exports=ze;var tc=Vd.exports,Qp,bu=tc;Qp=bu.createRoot,bu.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(null,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const ku="popstate";function Hg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Ks("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:_i(o)}return Kg(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qg(){return Math.random().toString(36).substr(2,8)}function ju(e,t){return{usr:e.state,key:e.key,idx:t}}function Ks(e,t,n,r){return n===void 0&&(n=null),co({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cr(t):t,{state:n,key:t&&t.key||r||Qg()})}function _i(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Kg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Nt.Pop,c=null,u=p();u==null&&(u=0,s.replaceState(co({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function h(){a=Nt.Pop;let $=p(),m=$==null?null:$-u;u=$,c&&c({action:a,location:j.location,delta:m})}function x($,m){a=Nt.Push;let d=Ks(j.location,$,m);u=p()+1;let g=ju(d,u),b=j.createHref(d);try{s.pushState(g,"",b)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;o.location.assign(b)}i&&c&&c({action:a,location:j.location,delta:1})}function w($,m){a=Nt.Replace;let d=Ks(j.location,$,m);u=p();let g=ju(d,u),b=j.createHref(d);s.replaceState(g,"",b),i&&c&&c({action:a,location:j.location,delta:0})}function y($){let m=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof $=="string"?$:_i($);return d=d.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let j={get action(){return a},get location(){return e(o,s)},listen($){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(ku,h),c=$,()=>{o.removeEventListener(ku,h),c=null}},createHref($){return t(o,$)},createURL:y,encodeLocation($){let m=y($);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:w,go($){return s.go($)}};return j}var Su;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Su||(Su={}));function Gg(e,t,n){return n===void 0&&(n="/"),Yg(e,t,n)}function Yg(e,t,n,r){let o=typeof t=="string"?cr(t):t,i=qn(o.pathname||"/",n);if(i==null)return null;let s=Kp(e);Jg(s);let a=null,c=sx(i);for(let u=0;a==null&&u<s.length;++u)a=ix(s[u],c);return a}function Kp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Kt([r,c.relativePath]),p=n.concat(c);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kp(i.children,t,p,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:rx(u,i.index),routesMeta:p})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let c of Gp(i.path))o(i,s,c)}),t}function Gp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Gp(r.join("/")),a=[];return a.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Jg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ox(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xg=/^:[\w-]+$/,Zg=3,qg=2,ex=1,tx=10,nx=-2,Cu=e=>e==="*";function rx(e,t){let n=e.split("/"),r=n.length;return n.some(Cu)&&(r+=nx),t&&(r+=qg),n.filter(o=>!Cu(o)).reduce((o,i)=>o+(Xg.test(i)?Zg:i===""?ex:tx),r)}function ox(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ix(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",h=Gs({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p),x=c.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Kt([i,h.pathname]),pathnameBase:fx(Kt([i,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(i=Kt([i,h.pathnameBase]))}return s}function Gs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,p,h)=>{let{paramName:x,isOptional:w}=p;if(x==="*"){let j=a[h]||"";s=i.slice(0,i.length-j.length).replace(/(.)\/+$/,"$1")}const y=a[h];return w&&!y?u[x]=void 0:u[x]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function lx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function sx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cx=e=>ax.test(e);function ux(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?cr(e):e,i;if(n)if(cx(n))i=n;else{if(n.includes("//")){let s=n;n=Yp(n),nc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=$u(n.substring(1),"/"):i=$u(n,t)}else i=t;return{pathname:i,search:px(r),hash:hx(o)}}function $u(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ul(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rc(e,t){let n=dx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function oc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=cr(e):(o=co({},e),J(!o.pathname||!o.pathname.includes("?"),Ul("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Ul("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Ul("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),h-=1;o.pathname=x.join("/")}a=h>=0?t[h]:"/"}let c=ux(o,a),u=s&&s!=="/"&&s.endsWith("/"),p=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const Yp=e=>e.replace(/\/\/+/g,"/"),Kt=e=>Yp(e.join("/")),fx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),px=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jp=["post","put","patch","delete"];new Set(Jp);const gx=["get",...Jp];new Set(gx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(null,arguments)}const sl=k.createContext(null),Xp=k.createContext(null),vt=k.createContext(null),al=k.createContext(null),wt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Zp=k.createContext(null);function xx(e,t){let{relative:n}=t===void 0?{}:t;ur()||J(!1);let{basename:r,navigator:o}=k.useContext(vt),{hash:i,pathname:s,search:a}=cl(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Kt([r,s])),o.createHref({pathname:c,search:a,hash:i})}function ur(){return k.useContext(al)!=null}function bt(){return ur()||J(!1),k.useContext(al).location}function qp(e){k.useContext(vt).static||k.useLayoutEffect(e)}function dr(){let{isDataRoute:e}=k.useContext(wt);return e?Ix():yx()}function yx(){ur()||J(!1);let e=k.useContext(sl),{basename:t,future:n,navigator:r}=k.useContext(vt),{matches:o}=k.useContext(wt),{pathname:i}=bt(),s=JSON.stringify(rc(o,n.v7_relativeSplatPath)),a=k.useRef(!1);return qp(()=>{a.current=!0}),k.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=oc(u,JSON.parse(s),i,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Kt([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,s,i,e])}function vx(){let{matches:e}=k.useContext(wt),t=e[e.length-1];return t?t.params:{}}function cl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(vt),{matches:o}=k.useContext(wt),{pathname:i}=bt(),s=JSON.stringify(rc(o,r.v7_relativeSplatPath));return k.useMemo(()=>oc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function wx(e,t){return bx(e,t)}function bx(e,t,n,r){ur()||J(!1);let{navigator:o}=k.useContext(vt),{matches:i}=k.useContext(wt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=bt(),p;if(t){var h;let $=typeof t=="string"?cr(t):t;c==="/"||(h=$.pathname)!=null&&h.startsWith(c)||J(!1),p=$}else p=u;let x=p.pathname||"/",w=x;if(c!=="/"){let $=c.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice($.length).join("/")}let y=Gg(e,{pathname:w}),j=$x(y&&y.map($=>Object.assign({},$,{params:Object.assign({},a,$.params),pathname:Kt([c,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?c:Kt([c,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,n,r);return t&&j?k.createElement(al.Provider,{value:{location:uo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Nt.Pop}},j):j}function kx(){let e=Lx(),t=mx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,null)}const jx=k.createElement(kx,null);class Sx extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(wt.Provider,{value:this.props.routeContext},k.createElement(Zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cx(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(sl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(wt.Provider,{value:t},r)}function $x(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let p=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);p>=0||J(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=p),h.route.id){let{loaderData:x,errors:w}=n,y=h.route.loader&&x[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((p,h,x)=>{let w,y=!1,j=null,$=null;n&&(w=a&&h.route.id?a[h.route.id]:void 0,j=h.route.errorElement||jx,c&&(u<0&&x===0?(Rx("route-fallback"),y=!0,$=null):u===x&&(y=!0,$=h.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,x+1)),d=()=>{let g;return w?g=j:y?g=$:h.route.Component?g=k.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=p,k.createElement(Cx,{match:h,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?k.createElement(Sx,{location:n.location,revalidation:n.revalidation,component:j,error:w,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var eh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(eh||{}),th=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(th||{});function Ex(e){let t=k.useContext(sl);return t||J(!1),t}function Tx(e){let t=k.useContext(Xp);return t||J(!1),t}function Px(e){let t=k.useContext(wt);return t||J(!1),t}function nh(e){let t=Px(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function Lx(){var e;let t=k.useContext(Zp),n=Tx(),r=nh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ix(){let{router:e}=Ex(eh.UseNavigateStable),t=nh(th.UseNavigateStable),n=k.useRef(!1);return qp(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,uo({fromRouteId:t},i)))},[e,t])}const Eu={};function Rx(e,t,n){Eu[e]||(Eu[e]=!0)}function zx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Nx(e){let{to:t,replace:n,state:r,relative:o}=e;ur()||J(!1);let{future:i,static:s}=k.useContext(vt),{matches:a}=k.useContext(wt),{pathname:c}=bt(),u=dr(),p=oc(t,rc(a,i.v7_relativeSplatPath),c,o==="path"),h=JSON.stringify(p);return k.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:o}),[u,h,o,n,r]),null}function Ir(e){J(!1)}function Mx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Nt.Pop,navigator:i,static:s=!1,future:a}=e;ur()&&J(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:i,static:s,future:uo({v7_relativeSplatPath:!1},a)}),[c,a,i,s]);typeof r=="string"&&(r=cr(r));let{pathname:p="/",search:h="",hash:x="",state:w=null,key:y="default"}=r,j=k.useMemo(()=>{let $=qn(p,c);return $==null?null:{location:{pathname:$,search:h,hash:x,state:w,key:y},navigationType:o}},[c,p,h,x,w,y,o]);return j==null?null:k.createElement(vt.Provider,{value:u},k.createElement(al.Provider,{children:n,value:j}))}function Dx(e){let{children:t,location:n}=e;return wx(Ys(t),n)}new Promise(()=>{});function Ys(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,Ys(r.props.children,i));return}r.type!==Ir&&J(!1),!r.props.index||!r.props.children||J(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ys(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(null,arguments)}function rh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ax(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ox(e,t){return e.button===0&&(!t||t==="_self")&&!Ax(e)}const _x=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Bx="6";try{window.__reactRouterVersion=Bx}catch{}const Wx=k.createContext({isTransitioning:!1}),Ux="startTransition",Tu=N0[Ux];function Vx(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=Hg({window:o,v5Compat:!0}));let s=i.current,[a,c]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},p=k.useCallback(h=>{u&&Tu?Tu(()=>c(h)):c(h)},[c,u]);return k.useLayoutEffect(()=>s.listen(p),[s,p]),k.useEffect(()=>zx(r),[r]),k.createElement(Mx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tn=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:c,to:u,preventScrollReset:p,viewTransition:h}=t,x=rh(t,_x),{basename:w}=k.useContext(vt),y,j=!1;if(typeof u=="string"&&Qx.test(u)&&(y=u,Hx))try{let g=new URL(window.location.href),b=u.startsWith("//")?new URL(g.protocol+u):new URL(u),v=qn(b.pathname,w);b.origin===g.origin&&v!=null?u=v+b.search+b.hash:j=!0}catch{}let $=xx(u,{relative:o}),m=Gx(u,{replace:s,state:a,target:c,preventScrollReset:p,relative:o,viewTransition:h});function d(g){r&&r(g),g.defaultPrevented||m(g)}return k.createElement("a",Fi({},x,{href:y||$,onClick:j||i?r:d,ref:n,target:c}))}),oh=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:c,viewTransition:u,children:p}=t,h=rh(t,Fx),x=cl(c,{relative:h.relative}),w=bt(),y=k.useContext(Xp),{navigator:j,basename:$}=k.useContext(vt),m=y!=null&&Yx(x)&&u===!0,d=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,g=w.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(g=g.toLowerCase(),b=b?b.toLowerCase():null,d=d.toLowerCase()),b&&$&&(b=qn(b,$)||b);const v=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let C=g===d||!s&&g.startsWith(d)&&g.charAt(v)==="/",S=b!=null&&(b===d||!s&&b.startsWith(d)&&b.charAt(d.length)==="/"),E={isActive:C,isPending:S,isTransitioning:m},D=C?r:void 0,z;typeof i=="function"?z=i(E):z=[i,C?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let W=typeof a=="function"?a(E):a;return k.createElement(tn,Fi({},h,{"aria-current":D,className:z,ref:n,style:W,to:c,viewTransition:u}),typeof p=="function"?p(E):p)});var Js;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Js||(Js={}));var Pu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pu||(Pu={}));function Kx(e){let t=k.useContext(sl);return t||J(!1),t}function Gx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,c=dr(),u=bt(),p=cl(e,{relative:s});return k.useCallback(h=>{if(Ox(h,n)){h.preventDefault();let x=r!==void 0?r:_i(u)===_i(p);c(e,{replace:x,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[u,c,p,r,o,n,e,i,s,a])}function Yx(e,t){t===void 0&&(t={});let n=k.useContext(Wx);n==null&&J(!1);let{basename:r}=Kx(Js.useViewTransitionState),o=cl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=qn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=qn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Gs(o.pathname,s)!=null||Gs(o.pathname,i)!=null}var H="-ms-",Ur="-moz-",_="-webkit-",ih="comm",ul="rule",ic="decl",Jx="@import",Xx="@namespace",lh="@keyframes",Zx="@layer",sh=Math.abs,lc=String.fromCharCode,Xs=Object.assign;function qx(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function ah(e){return e.trim()}function lt(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function ui(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function wn(e,t,n){return e.slice(t,n)}function Ge(e){return e.length}function ch(e){return e.length}function Rr(e,t){return t.push(e),e}function e1(e,t){return e.map(t).join("")}function Lu(e,t){return e.filter(function(n){return!lt(n,t)})}var dl=1,er=1,uh=0,We=0,re=0,fr="";function fl(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:dl,column:er,length:s,return:"",siblings:a}}function Et(e,t){return Xs(fl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Cn(e){for(;e.root;)e=Et(e.root,{children:[e]});Rr(e,e.siblings)}function t1(){return re}function n1(){return re=We>0?se(fr,--We):0,er--,re===10&&(er=1,dl--),re}function Ze(){return re=We<uh?se(fr,We++):0,er++,re===10&&(er=1,dl++),re}function Mt(){return se(fr,We)}function di(){return We}function pl(e,t){return wn(fr,e,t)}function fo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r1(e){return dl=er=1,uh=Ge(fr=e),We=0,[]}function o1(e){return fr="",e}function Vl(e){return ah(pl(We-1,Zs(e===91?e+2:e===40?e+1:e)))}function i1(e){for(;(re=Mt())&&re<33;)Ze();return fo(e)>2||fo(re)>3?"":" "}function l1(e,t){for(;--t&&Ze()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return pl(e,di()+(t<6&&Mt()==32&&Ze()==32))}function Zs(e){for(;Ze();)switch(re){case e:return We;case 34:case 39:e!==34&&e!==39&&Zs(re);break;case 40:e===41&&Zs(e);break;case 92:Ze();break}return We}function s1(e,t){for(;Ze()&&e+re!==57;)if(e+re===84&&Mt()===47)break;return"/*"+pl(t,We-1)+"*"+lc(e===47?e:Ze())}function a1(e){for(;!fo(Mt());)Ze();return pl(e,We)}function c1(e){return o1(fi("",null,null,null,[""],e=r1(e),0,[0],e))}function fi(e,t,n,r,o,i,s,a,c){for(var u=0,p=0,h=s,x=0,w=0,y=0,j=1,$=1,m=1,d=0,g="",b=o,v=i,C=r,S=g;$;)switch(y=d,d=Ze()){case 40:if(y!=108&&se(S,h-1)==58){ui(S+=N(Vl(d),"&","&\f"),"&\f",sh(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Vl(d);break;case 9:case 10:case 13:case 32:S+=i1(y);break;case 92:S+=l1(di()-1,7);continue;case 47:switch(Mt()){case 42:case 47:Rr(u1(s1(Ze(),di()),t,n,c),c),(fo(y||1)==5||fo(Mt()||1)==5)&&Ge(S)&&wn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*j:a[u++]=Ge(S)*m;case 125*j:case 59:case 0:switch(d){case 0:case 125:$=0;case 59+p:m==-1&&(S=N(S,/\f/g,"")),w>0&&(Ge(S)-h||j===0&&y===47)&&Rr(w>32?Ru(S+";",r,n,h-1,c):Ru(N(S," ","")+";",r,n,h-2,c),c);break;case 59:S+=";";default:if(Rr(C=Iu(S,t,n,u,p,o,a,g,b=[],v=[],h,i),i),d===123)if(p===0)fi(S,t,C,C,b,i,h,a,v);else{switch(x){case 99:if(se(S,3)===110)break;case 108:if(se(S,2)===97)break;default:p=0;case 100:case 109:case 115:}p?fi(e,C,C,r&&Rr(Iu(e,C,C,0,0,o,a,g,o,b=[],h,v),v),o,v,h,a,r?b:v):fi(S,C,C,C,[""],v,0,a,v)}}u=p=w=0,j=m=1,g=S="",h=s;break;case 58:h=1+Ge(S),w=y;default:if(j<1){if(d==123)--j;else if(d==125&&j++==0&&n1()==125)continue}switch(S+=lc(d),d*j){case 38:m=p>0?1:(S+="\f",-1);break;case 44:a[u++]=(Ge(S)-1)*m,m=1;break;case 64:Mt()===45&&(S+=Vl(Ze())),x=Mt(),p=h=Ge(g=S+=a1(di())),d++;break;case 45:y===45&&Ge(S)==2&&(j=0)}}return i}function Iu(e,t,n,r,o,i,s,a,c,u,p,h){for(var x=o-1,w=o===0?i:[""],y=ch(w),j=0,$=0,m=0;j<r;++j)for(var d=0,g=wn(e,x+1,x=sh($=s[j])),b=e;d<y;++d)(b=ah($>0?w[d]+" "+g:N(g,/&\f/g,w[d])))&&(c[m++]=b);return fl(e,t,n,o===0?ul:a,c,u,p,h)}function u1(e,t,n,r){return fl(e,t,n,ih,lc(t1()),wn(e,2,-2),0,r)}function Ru(e,t,n,r,o){return fl(e,t,n,ic,wn(e,0,r),wn(e,r+1,-1),r,o)}function dh(e,t,n){switch(qx(e,t)){case 5103:return _+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return _+e+e;case 4855:return _+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ur+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _+e+Ur+e+H+e+e;case 5936:switch(se(e,t+11)){case 114:return _+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _+e+H+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return _+e+H+e+e;case 6165:return _+e+H+"flex-"+e+e;case 5187:return _+e+N(e,/(\w+).+(:[^]+)/,_+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return _+e+H+"flex-item-"+N(e,/flex-|-self/g,"")+(lt(e,/flex-|baseline/)?"":H+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return _+e+H+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return _+e+H+N(e,"shrink","negative")+e;case 5292:return _+e+H+N(e,"basis","preferred-size")+e;case 6060:return _+"box-"+N(e,"-grow","")+_+e+H+N(e,"grow","positive")+e;case 4554:return _+N(e,/([^-])(transform)/g,"$1"+_+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,_+"$1"),/(image-set)/,_+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,_+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,_+"box-pack:$3"+H+"flex-pack:$3"),/space-between/,"justify")+_+e+e;case 4200:if(!lt(e,/flex-|baseline/))return H+"grid-column-align"+wn(e,t)+e;break;case 2592:case 3360:return H+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,lt(r.props,/grid-\w+-end/)})?~ui(e+(n=n[t].value),"span",0)?e:H+N(e,"-start","")+e+H+"grid-row-span:"+(~ui(n,"span",0)?lt(n,/\d+/):+lt(n,/\d+/)-+lt(e,/\d+/))+";":H+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return lt(r.props,/grid-\w+-start/)})?e:H+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,_+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+_+"$2-$3$1"+Ur+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ui(e,"stretch",0)?dh(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,c,u){return H+o+":"+i+u+(s?H+o+"-span:"+(a?c:+c-+i)+u:"")+e});case 4949:if(se(e,t+6)===121)return N(e,":",":"+_)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_+(se(e,14)===45?"inline-":"")+"box$3$1"+_+"$2$3$1"+H+"$2box$3")+e;case 100:return N(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function Bi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function d1(e,t,n,r){switch(e.type){case Zx:if(e.children.length)break;case Jx:case Xx:case ic:return e.return=e.return||e.value;case ih:return"";case lh:return e.return=e.value+"{"+Bi(e.children,r)+"}";case ul:if(!Ge(e.value=e.props.join(",")))return""}return Ge(n=Bi(e.children,r))?e.return=e.value+"{"+n+"}":""}function f1(e){var t=ch(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function p1(e){return function(t){t.root||(t=t.return)&&e(t)}}function h1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ic:e.return=dh(e.value,e.length,n);return;case lh:return Bi([Et(e,{value:N(e.value,"@","@"+_)})],r);case ul:if(e.length)return e1(n=e.props,function(o){switch(lt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cn(Et(e,{props:[N(o,/:(read-\w+)/,":"+Ur+"$1")]})),Cn(Et(e,{props:[o]})),Xs(e,{props:Lu(n,r)});break;case"::placeholder":Cn(Et(e,{props:[N(o,/:(plac\w+)/,":"+_+"input-$1")]})),Cn(Et(e,{props:[N(o,/:(plac\w+)/,":"+Ur+"$1")]})),Cn(Et(e,{props:[N(o,/:(plac\w+)/,H+"input-$1")]})),Cn(Et(e,{props:[o]})),Xs(e,{props:Lu(n,r)});break}return""})}}var Hn={},Hl,Ql;const tr=typeof process<"u"&&Hn!==void 0&&(Hn.REACT_APP_SC_ATTR||Hn.SC_ATTR)||"data-styled",fh="active",ph="data-styled-version",hl="6.4.2",sc=`/*!sc*/
`,Vr=typeof window<"u"&&typeof document<"u";function zu(e){if(typeof process<"u"&&Hn!==void 0){const t=Hn[e];if(t!==void 0&&t!=="")return t!=="false"}}const m1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ql=(Hl=zu("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Hl!==void 0?Hl:zu("SC_DISABLE_SPEEDY"))!==null&&Ql!==void 0?Ql:typeof process<"u"&&Hn!==void 0&&!1),g1="sc-keyframes-",x1={};function nr(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let pi=new Map,Wi=new Map,hi=1;const Uo=e=>{if(pi.has(e))return pi.get(e);for(;Wi.has(hi);)hi++;const t=hi++;return pi.set(e,t),Wi.set(t,e),t},y1=e=>Wi.get(e),v1=(e,t)=>{hi=t+1,pi.set(e,t),Wi.set(t,e)},ac=Object.freeze([]),rr=Object.freeze({});function hh(e,t,n=rr){return e.theme!==n.theme&&e.theme||t||n.theme}const w1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b1=/(^-|-$)/g;function mh(e){return e.replace(w1,"-").replace(b1,"")}const k1=/(a)(d)/gi,Nu=e=>String.fromCharCode(e+(e>25?39:97));function gh(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Nu(t%52)+n;return(Nu(t%52)+n).replace(k1,"$1-$2")}const qs=5381,hn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},xh=e=>hn(qs,e);function yh(e){return gh(xh(e)>>>0)}function j1(e){return e.displayName||e.name||"Component"}function ea(e){return typeof e=="string"&&!0}function S1(e){return ea(e)?`styled.${e}`:`Styled(${j1(e)})`}const vh=Symbol.for("react.memo"),C1=Symbol.for("react.forward_ref"),$1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},E1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T1={[C1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[vh]:wh};function Mu(e){return("type"in(t=e)&&t.type.$$typeof)===vh?wh:"$$typeof"in e?T1[e.$$typeof]:$1;var t}const P1=Object.defineProperty,L1=Object.getOwnPropertyNames,I1=Object.getOwnPropertySymbols,R1=Object.getOwnPropertyDescriptor,z1=Object.getPrototypeOf,N1=Object.prototype;function bh(e,t,n){if(typeof t!="string"){const r=z1(t);r&&r!==N1&&bh(e,r,n);const o=L1(t).concat(I1(t)),i=Mu(e),s=Mu(t);for(let a=0;a<o.length;++a){const c=o[a];if(!(c in E1||n&&n[c]||s&&c in s||i&&c in i)){const u=R1(t,c);try{P1(e,c,u)}catch{}}}}return e}function pr(e){return typeof e=="function"}const M1=Symbol.for("react.forward_ref");function cc(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===M1&&"styledComponentId"in e}function zr(e,t){return e&&t?e+" "+t:e||t||""}function ta(e,t){return e.join("")}function po(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function na(e,t,n=!1){if(!n&&!po(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=na(e[r],t[r]);else if(po(t))for(const r in t)e[r]=na(e[r],t[r]);return e}function kh(e,t){Object.defineProperty(e,"toString",{value:t})}const D1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let s=i;for(;e>=s;)if(s<<=1,s<0)throw nr(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(let a=i;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+sc;return t}},A1=`style[${tr}][${ph}="${hl}"]`,O1=new RegExp(`^${tr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Du=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,ra=e=>{if(!e)return document;if(Du(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Du(t))return t}return document},_1=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,s=r.length;i<s;i++)(o=r[i])&&e.registerName(t,o)},F1=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(sc),o=[];for(let i=0,s=r.length;i<s;i++){const a=r[i].trim();if(!a)continue;const c=a.match(O1);if(c){const u=0|parseInt(c[1],10),p=c[2];u!==0&&(v1(p,u),_1(e,p,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}},Kl=e=>{const t=ra(e.options.target).querySelectorAll(A1);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(tr)!==fh&&(F1(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let jr=!1;function B1(){if(jr!==!1)return jr;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return jr=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return jr=t.getAttribute("content")||void 0}return jr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const jh=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(c=>{const u=Array.from(c.querySelectorAll(`style[${tr}]`));return u[u.length-1]})(r),s=i!==void 0?i.nextSibling:null;o.setAttribute(tr,fh),o.setAttribute(ph,hl);const a=t||B1();return a&&o.setAttribute("nonce",a),r.insertBefore(o,s),o},W1=class{constructor(e,t){this.element=jh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,s=o.length;i<s;i++){const a=o[i];if(a.ownerNode===n)return a}throw nr(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},U1=class{constructor(e,t){this.element=jh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Au=Vr;const V1={isServer:!Vr,useCSSOMInjection:!m1};class wo{static registerId(t){return Uo(t)}constructor(t=rr,n={},r){this.options=Object.assign(Object.assign({},V1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Vr&&Au&&(Au=!1,Kl(this)),kh(this,()=>(o=>{const i=o.getTag(),{length:s}=i;let a="";for(let c=0;c<s;c++){const u=y1(c);if(u===void 0)continue;const p=o.names.get(u);if(p===void 0||!p.size)continue;const h=i.getGroup(c);if(h.length===0)continue;const x=tr+".g"+c+'[id="'+u+'"]';let w="";for(const y of p)y.length>0&&(w+=y+",");a+=h+x+'{content:"'+w+'"}'+sc}return a})(this))}rehydrate(){!this.server&&Vr&&Kl(this)}reconstructWithOptions(t,n=!0){const r=new wo(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Vr&&t.target!==this.options.target&&ra(this.options.target)!==ra(t.target)&&Kl(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new W1(r,o):new U1(r,o))(this.options),new D1(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Uo(t),t.startsWith(g1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Uo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Uo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Sh=new WeakSet,H1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Q1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in H1||e.startsWith("--")?String(t).trim():t+"px"}const an=47;function Ou(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const K1=Symbol.for("sc-keyframes");function G1(e){return typeof e=="object"&&e!==null&&K1 in e}function Ch(e){return pr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const $h=e=>e==null||e===!1||e==="",Y1=Symbol.for("react.client.reference");function _u(e){return e.$$typeof===Y1}function Eh(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!$h(r)&&(Array.isArray(r)&&Sh.has(r)||pr(r)?t.push(Ou(n)+":",r,";"):po(r)?(t.push(n+" {"),Eh(r,t),t.push("}")):t.push(Ou(n)+": "+Q1(n,r)+";"))}}function Gt(e,t,n,r,o=[]){if($h(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(_u(e))return o;if(Ch(e)&&t){const s=e(t);return Gt(s,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Gt(e[s],t,n,r,o);return o}return cc(e)?(o.push(`.${e.styledComponentId}`),o):G1(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):_u(e)?o:po(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Eh(e,o),o):(o.push(e.toString()),o)}const J1=xh(hl);class X1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=hn(J1,n),this.baseStyle=r,wo.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")i+=a;else if(a)if(Ch(a)){const c=a(t);typeof c=="string"?i+=c:c!=null&&c!==!1&&(i+=ta(Gt(c,t,n,r)))}else i+=ta(Gt(a,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+i:i;let a=this.dynamicNameCache.get(s);if(!a){if(a=gh(hn(hn(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const c=r(i,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,c)}o=zr(o,a)}}return o}}const Z1=/&/g;function Th(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Gl(e){const t=e.length;let n="",r=0,o=0,i=0,s=!1,a=!1;for(let c=0;c<t;c++){const u=e.charCodeAt(c);if(i!==0||s||u!==an||e.charCodeAt(c+1)!==42)if(s)u===42&&e.charCodeAt(c+1)===an&&(s=!1,c++);else if(u!==34&&u!==39||Th(e,c)){if(i===0)if(u===123)o++;else if(u===125){if(o--,o<0){a=!0;let p=c+1;for(;p<t;){const h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,c=p-1,r=p;continue}o===0&&(n+=e.substring(r,c+1),r=c+1)}else u===59&&o===0&&(n+=e.substring(r,c+1),r=c+1)}else i===0?i=u:i===u&&(i=0);else s=!0,c++}return a||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function Ph(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const s=i.props,a=[];for(let c=0;c<s.length;c++)a[c]=n+s[c];i.props=a}Array.isArray(i.children)&&i.type!=="@keyframes"&&Ph(i.children,t)}return e}function q1({options:e=rr,plugins:t=ac}=rr){let n,r,o;const i=(x,w,y)=>y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?`.${n}`:x,s=t.slice();s.push(x=>{x.type===ul&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(Z1,r).replace(o,i))}),e.prefix&&s.push(h1),s.push(d1);let a=[];const c=f1(s.concat(p1(x=>a.push(x)))),u=(x,w="",y="",j="&")=>{n=j,r=w,o=void 0;const $=function(d){const g=d.indexOf("//")!==-1,b=d.indexOf("}")!==-1;if(!g&&!b)return d;if(!g)return Gl(d);const v=d.length;let C="",S=0,E=0,D=0,z=0,W=0,Ue=!1;for(;E<v;){const Z=d.charCodeAt(E);if(Z!==34&&Z!==39||Th(d,E))if(D===0)if(Z===an&&E+1<v&&d.charCodeAt(E+1)===42){for(E+=2;E+1<v&&(d.charCodeAt(E)!==42||d.charCodeAt(E+1)!==an);)E++;E+=2}else if(Z!==40)if(Z!==41)if(z>0)E++;else if(Z===42&&E+1<v&&d.charCodeAt(E+1)===an)C+=d.substring(S,E),E+=2,S=E,Ue=!0;else if(Z===an&&E+1<v&&d.charCodeAt(E+1)===an){for(C+=d.substring(S,E);E<v&&d.charCodeAt(E)!==10;)E++;S=E,Ue=!0}else Z===123?W++:Z===125&&W--,E++;else z>0&&z--,E++;else z++,E++;else E++;else D===0?D=Z:D===Z&&(D=0),E++}return Ue?(S<v&&(C+=d.substring(S)),W===0?C:Gl(C)):W===0?d:Gl(d)}(x);let m=c1(y||w?y+" "+w+" { "+$+" }":$);return e.namespace&&(m=Ph(m,e.namespace)),a=[],Bi(m,c),a},p=e;let h=qs;for(let x=0;x<t.length;x++)t[x].name||nr(15),h=hn(h,t[x].name);return p!=null&&p.namespace&&(h=hn(h,p.namespace)),p!=null&&p.prefix&&(h=hn(h,"p")),u.hash=h!==qs?h.toString():"",u}const ey=new wo,ty=q1(),Lh=ge.createContext({shouldForwardProp:void 0,styleSheet:ey,stylis:ty,stylisPlugins:void 0});Lh.Consumer;function Ih(){return ge.useContext(Lh)}const ho=ge.createContext(void 0);ho.Consumer;function ny(e){const t=ge.useContext(ho),n=ge.useMemo(()=>function(r,o){if(!r)throw nr(14);if(pr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw nr(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?ge.createElement(ho.Provider,{value:n},e.children):null}const Fu=Object.prototype.hasOwnProperty,Yl={};function ry(e,t){const n=typeof e!="string"?"sc":mh(e);Yl[n]=(Yl[n]||0)+1;const r=n+"-"+yh(hl+n+Yl[n]);return t?t+"-"+r:r}function oy(e,t,n){const r=cc(e),o=e,i=!ea(e),{attrs:s=ac,componentId:a=ry(t.displayName,t.parentComponentId),displayName:c=S1(e)}=t,u=t.displayName&&t.componentId?mh(t.displayName)+"-"+t.componentId:t.componentId||a,p=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){const j=o.shouldForwardProp;if(t.shouldForwardProp){const $=t.shouldForwardProp;h=(m,d)=>j(m,d)&&$(m,d)}else h=j}const x=new X1(n,u,r?o.componentStyle:void 0);function w(j,$){return function(m,d,g){const{attrs:b,componentStyle:v,defaultProps:C,foldedComponentIds:S,styledComponentId:E,target:D}=m,z=ge.useContext(ho),W=Ih(),Ue=m.shouldForwardProp||W.shouldForwardProp,Z=hh(d,z,C)||rr;let Ve,nn;{const I=ge.useRef(null),R=I.current;if(R!==null&&R[1]===Z&&R[2]===W.styleSheet&&R[3]===W.stylis&&R[7]===v&&function(B,O,ie){const q=B,ne=O;let Te=0;for(const Me in ne)if(Fu.call(ne,Me)&&(Te++,q[Me]!==ne[Me]))return!1;return Te===ie}(R[0],d,R[4]))Ve=R[5],nn=R[6];else{Ve=function(O,ie,q){const ne=Object.assign(Object.assign({},ie),{className:void 0,theme:q}),Te=O.length>1;for(let Me=0;Me<O.length;Me++){const gl=O[Me],Co=pr(gl)?gl(Te?Object.assign({},ne):ne):gl;for(const jt in Co)jt==="className"?ne.className=zr(ne.className,Co[jt]):jt==="style"?ne.style=Object.assign(Object.assign({},ne.style),Co[jt]):jt in ie&&ie[jt]===void 0||(ne[jt]=Co[jt])}return"className"in ie&&typeof ie.className=="string"&&(ne.className=zr(ne.className,ie.className)),ne}(b,d,Z),nn=function(O,ie,q,ne){return O.generateAndInjectStyles(ie,q,ne)}(v,Ve,W.styleSheet,W.stylis);let B=0;for(const O in d)Fu.call(d,O)&&B++;I.current=[d,Z,W.styleSheet,W.stylis,B,Ve,nn,v]}}const kt=Ve.as||D,rn=function(I,R,B,O){const ie={};for(const q in I)I[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&I.theme===B||(q==="forwardedAs"?ie.as=I.forwardedAs:O&&!O(q,R)||(ie[q]=I[q]));return ie}(Ve,kt,Z,Ue);let P=zr(S,E);return nn&&(P+=" "+nn),Ve.className&&(P+=" "+Ve.className),rn[ea(kt)&&kt.includes("-")?"class":"className"]=P,g&&(rn.ref=g),k.createElement(kt,rn)}(y,j,$)}w.displayName=c;let y=ge.forwardRef(w);return y.attrs=p,y.componentStyle=x,y.displayName=c,y.shouldForwardProp=h,y.foldedComponentIds=r?zr(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=u,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get(){return this._foldedDefaultProps},set(j){this._foldedDefaultProps=r?function($,...m){for(const d of m)na($,d,!0);return $}({},o.defaultProps,j):j}}),kh(y,()=>`.${y.styledComponentId}`),i&&bh(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}var iy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Bu(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const Wu=e=>(Sh.add(e),e);function Rh(e,...t){if(pr(e)||po(e))return Wu(Gt(Bu(ac,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Gt(n):Wu(Gt(Bu(n,t)))}function oa(e,t,n=rr){if(!t)throw nr(1,t);const r=(o,...i)=>e(t,n,Rh(o,...i));return r.attrs=o=>oa(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>oa(e,t,Object.assign(Object.assign({},n),o)),r}const zh=e=>oa(oy,e),f=zh;iy.forEach(e=>{f[e]=zh(e)});class ly{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(pr(i)&&!cc(i))return!1}return!0}(t),wo.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(i,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&s){const a=s.rules,c=this.instanceRules.get(t).rules;if(a.length===c.length){let u=!0;for(let p=0;p<a.length;p++)if(a[p]!==c[p]){u=!1;break}if(u)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=ta(Gt(this.rules,n,r,o)),s={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function sy(e,...t){const n=Rh(e,...t),r=`sc-global-${yh(JSON.stringify(n))}`,o=new ly(n,r),i=a=>{const c=Ih(),u=ge.useContext(ho);let p;{const h=ge.useRef(null);h.current===null&&(h.current=c.styleSheet.allocateGSInstance(r)),p=h.current}c.styleSheet.server&&s(p,a,c.styleSheet,u,c.stylis);{const h=o.isStatic?[p,c.styleSheet,o]:[p,a,c.styleSheet,u,c.stylis,o],x=ge.useRef(o);ge.useLayoutEffect(()=>{c.styleSheet.server||(x.current!==o&&(c.styleSheet.clearRules(r),x.current=o),s(p,a,c.styleSheet,u,c.stylis))},h),ge.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(p,c.styleSheet)},[p,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(p),null};function s(a,c,u,p,h){if(o.isStatic)o.renderStyles(a,x1,u,h);else{const x=Object.assign(Object.assign({},c),{theme:hh(c,p,i.defaultProps)});o.renderStyles(a,x,u,h)}}return ge.memo(i)}const ay={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},Uu=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),cy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),uy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),dy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),fy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),py=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),hy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),my=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),gy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),l.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Nh=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),Mh=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),xy=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),yy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),l.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),vy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),wy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),by=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Xt=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),ia=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Hr=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Dh=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Ui=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),ky=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),bn=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),Ah=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),jy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),Oh=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Vu=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Hu=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),Sy=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Cy=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Qu=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),l.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),$y=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ey=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 6l8-4 8 4-8 4-8-4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 10l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 14l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ty=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),l.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),Py=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})});function or(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return l.jsx(Uu,{...r});case"settings":return l.jsx(cy,{...r});case"shield":return l.jsx(uy,{...r});case"hierarchy":return l.jsx(dy,{...r});case"cycle":return l.jsx(fy,{...r});case"code":return l.jsx(py,{...r});case"globe":return l.jsx(hy,{...r});case"document":return l.jsx(my,{...r});case"mobile":return l.jsx(gy,{...r});case"sparkle":return l.jsx(Nh,{...r});case"envelope":return l.jsx(Mh,{...r});case"key":return l.jsx(ky,{...r});case"atom":return l.jsx(jy,{...r});default:return l.jsx(Uu,{...r})}}const _h=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],Fh=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents",iconType:"sparkle"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],$n=e=>[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],sn={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"INVENTORY",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"POLICIES",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"AUTOMATION",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"INTEGRATIONS",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"RELEASE SECURITY",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"SIGNING",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"INTEGRATIONS",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"MANAGE CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"POLICIES",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"REVOCATION & VALIDATION",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:$n("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:$n("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:$n("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:$n("device-trust")},"ai-agents":{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents navigation",sections:$n("ai-agents")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:$n("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},Ly={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/ai-agents":"AI Agents","/ai-agents/dashboard":"Dashboard","/ai-agents/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},Iy=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],Ry=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],zy=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],Ny=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/ai-agents","/ai-agents/dashboard","/ai-agents/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],My=f.div`
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
`,Dy=f.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ku=f.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Gu=f.a`
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
`;function Ay({onClose:e,onSelectProduct:t}){const n=dr(),r=o=>{t(o.productId),n(o.route),e()};return l.jsxs(My,{role:"menu","aria-label":"Settings menu",children:[l.jsx(Dy,{children:"Settings"}),l.jsx(Ku,{}),Iy.map(o=>l.jsx(Gu,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route)),l.jsx(Ku,{}),Ry.map(o=>l.jsx(Gu,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route))]})}const Oy=f.div`
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
`,Fy=f.a`
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
`;function By({onClose:e}){return l.jsx(Oy,{role:"menu","aria-label":"Help menu",children:l.jsx(_y,{children:zy.map(t=>l.jsx(Fy,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const Wy=f.div`
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
`,Uy=f.div`
  padding: 12px 16px;
`,Vy=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Hy=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,Yu=f.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Qy=f.div`
  padding: 4px 0;
`,Ju=f.a`
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
`;function Ky({onClose:e,onSelectProduct:t}){const n=dr(),r=o=>{o.preventDefault(),t("profile"),n("/profile"),e()};return l.jsxs(Wy,{role:"menu","aria-label":"User profile menu",children:[l.jsxs(Uy,{children:[l.jsx(Vy,{children:"Deepika Chauhan"}),l.jsx(Hy,{children:"deepika.chauhan@digicert.com"})]}),l.jsx(Yu,{}),l.jsxs(Qy,{children:[l.jsx(Ju,{href:"/profile",role:"menuitem",onClick:r,children:"My profile"}),l.jsx(Yu,{}),l.jsx(Ju,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const Gy=f.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,Yy=f.div`
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
`,Jy=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Xy=f.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Zy=f.button`
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
`,qy=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,ev=f.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`,tv=f.button`
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
`;function nv({open:e,onClose:t}){const n=k.useRef(null),r=k.useRef(null);return k.useEffect(()=>{var i;if(!e)return;(i=n.current)==null||i.focus();const o=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const c=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),u=c[0],p=c[c.length-1];s.shiftKey&&document.activeElement===u?(s.preventDefault(),p.focus()):!s.shiftKey&&document.activeElement===p&&(s.preventDefault(),u.focus())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),l.jsxs(l.Fragment,{children:[l.jsx(Gy,{$open:e,onClick:t,"aria-hidden":"true"}),l.jsxs(Yy,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[l.jsxs(Jy,{children:[l.jsx(Xy,{id:"cart-heading",children:"Cart"}),l.jsx(Zy,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),l.jsxs(qy,{children:[l.jsx(ev,{children:"Your cart is empty."}),l.jsx(tv,{onClick:t,children:"Continue shopping"})]})]})]})}const rv=f.div`
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
`,ov=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,iv=f.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,lv=f.button`
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
`,sv=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`,av=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
`,cv=f.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,uv=f.input`
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
`,dv=f.button`
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
`;function fv({open:e,onClose:t}){const n=k.useRef(null);return k.useEffect(()=>{const r=o=>{o.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),l.jsxs(rv,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[l.jsxs(ov,{children:[l.jsx(iv,{children:"AI Assist"}),l.jsx(lv,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),l.jsxs(sv,{children:[l.jsx(av,{children:"How can I help you today?"}),l.jsxs(cv,{children:[l.jsx(uv,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),l.jsx(dv,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const pv=f.header`
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
`,hv=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,mv=f.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,gv=f.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,xv=f.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 18px;
  color: ${({theme:e})=>e.colors.white};
  letter-spacing: 0.02em;
  user-select: none;

  .logo-bold { font-weight: 700; }
  .logo-normal { font-weight: 400; }
`,Sr=f.button`
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
`,yv=f.span`
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
`,vv=f.button`
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
`,Vo=f.div`
  position: relative;
  display: flex;
  align-items: center;
`,wv=f.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function bv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:o,onSelectProduct:i,cartCount:s=3}){const a=n==="settings"||n==="help"||n==="profile";return l.jsxs(l.Fragment,{children:[l.jsxs(pv,{role:"banner",children:[l.jsxs(hv,{children:[l.jsx(gv,{children:l.jsx(Sr,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:l.jsx(by,{size:20})})}),l.jsxs(xv,{"aria-label":"DigiCert ONE",children:[l.jsx("span",{className:"logo-normal",children:"digicert "}),l.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),l.jsxs(mv,{children:[l.jsx(Vo,{children:l.jsxs(Sr,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[l.jsx(yy,{size:20}),s>0&&l.jsx(yv,{"aria-hidden":"true",children:s})]})}),l.jsxs(Vo,{children:[l.jsx(Sr,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:l.jsx(wy,{size:20})}),n==="settings"&&l.jsx(Ay,{onClose:o,onSelectProduct:i})]}),l.jsxs(Vo,{children:[l.jsx(Sr,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:l.jsx(vy,{size:20})}),n==="help"&&l.jsx(By,{onClose:o})]}),l.jsx(Sr,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:l.jsx(Nh,{size:20})}),l.jsxs(Vo,{children:[l.jsx(vv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&l.jsx(Ky,{onClose:o,onSelectProduct:i})]})]})]}),a&&l.jsx(wv,{onClick:o,"aria-hidden":"true"}),l.jsx(nv,{open:n==="cart",onClose:o}),l.jsx(fv,{open:n==="ai-assist",onClose:o})]})}const kv=f.nav`
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
`,Xu=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,jv=f.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,Sv=f.button`
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
`,Cv=f.span`
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
`,$v=350;function Zu({product:e,isActive:t,onSelect:n}){const r=dr(),o=k.useRef(null),i=k.useRef(null),[s,a]=k.useState({visible:!1,y:0});k.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const c=()=>{var y;const w=(y=o.current)==null?void 0:y.getBoundingClientRect();return w?w.top+w.height/2:0},u=w=>{i.current&&(clearTimeout(i.current),i.current=null),w?a({visible:!0,y:c()}):i.current=setTimeout(()=>a({visible:!0,y:c()}),$v)},p=()=>{i.current&&(clearTimeout(i.current),i.current=null),a(w=>({...w,visible:!1}))},h=()=>{p(),n(e.id),r(e.route)},x=w=>{if(w.key==="Escape"){p();return}(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),h())};return l.jsxs(l.Fragment,{children:[l.jsx(Sv,{ref:o,$active:t,onClick:h,onKeyDown:x,onMouseEnter:()=>u(!1),onMouseLeave:p,onFocus:()=>u(!0),onBlur:p,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:or(e.iconType,20,t?"#111827":"#6B7280")}),tc.createPortal(l.jsx(Cv,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function Ev({activeProductId:e,onSelectProduct:t}){return l.jsxs(kv,{"aria-label":"Product navigation",children:[l.jsx(Xu,{children:_h.map(n=>l.jsx(Zu,{product:n,isActive:e===n.id,onSelect:t},n.id))}),l.jsx(jv,{}),l.jsx(Xu,{children:Fh.map(n=>l.jsx(Zu,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const Tv=f.div`
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
`,Pv=f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,Lv=f.div`
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
`,Iv=f.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,Rv=f.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,zv=f.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,Nv=f.button`
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
`,Mv=f.div`
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
`,Dv=f.div`
  margin-bottom: 2px;
`,Av=f.button`
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
`,Ov=f.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,_v=f(oh)`
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
`;function Fv({section:e,index:t}){const[n,r]=k.useState(e.defaultExpanded??t===0),o=bt(),i=!!e.title,s=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return l.jsxs(Dv,{children:[l.jsxs(Av,{$hasTitle:i,onClick:()=>r(a=>!a),"aria-expanded":n,"aria-controls":s,children:[l.jsx("span",{children:e.title}),n?l.jsx(Dh,{size:12,color:"currentColor"}):l.jsx(Hr,{size:12,color:"currentColor"})]}),l.jsx(Ov,{id:s,$open:n||!i,children:e.items.map(a=>l.jsx(_v,{to:a.route,end:!0,"aria-current":o.pathname===a.route?"page":void 0,children:a.label},a.route))})]})}function Bv({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r}){let o=sn[e];return e==="settings-billing"&&r==="enterprise"&&(o={...o,sections:o.sections.map(i=>({...i,items:i.items.filter(s=>s.route==="/settings/billing")}))}),k.useEffect(()=>{const i=s=>{s.key==="Escape"&&t&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[t,n]),l.jsxs(l.Fragment,{children:[l.jsx(Mv,{$visible:t,onClick:n,"aria-hidden":"true"}),l.jsxs(Tv,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[l.jsx(Pv,{children:l.jsx(Lv,{$open:t,children:o&&l.jsxs(l.Fragment,{children:[l.jsx(Iv,{children:l.jsx(Rv,{children:o.label})}),l.jsx(zv,{children:l.jsx("nav",{"aria-label":"Product navigation",children:o.sections.map((i,s)=>l.jsx(Fv,{section:i,index:s},i.title||s))})})]})})}),l.jsx(Nv,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:l.jsx(Xt,{size:14,color:"currentColor"})})]})]})}const Wv=f.div`
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
`,Uv=f.div`
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
`,Vv=f.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({$offset:e})=>e}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`,qu=f.div`
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
`,Jl=f.button`
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
`,Hv=f.hr`
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
`,Qv=f.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`,Kv=f(oh)`
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
`;function Gv({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const o=dr(),i=bt(),s=k.useRef(null),a=k.useRef(null),[c,u]=k.useState("l1"),[p,h]=k.useState(null),x=k.useRef(0),w=k.useRef(0);k.useEffect(()=>{e||(u("l1"),h(null))},[e]),k.useEffect(()=>{const v=s.current;v&&(e?v.removeAttribute("inert"):v.setAttribute("inert",""))},[e]),k.useEffect(()=>{if(!e)return;const v=setTimeout(()=>{var C,S;(S=(C=s.current)==null?void 0:C.querySelector("button"))==null||S.focus()},50);return()=>clearTimeout(v)},[e]),k.useEffect(()=>{if(!e)return;const v=C=>{if(C.key==="Escape"){r();return}if(C.key!=="Tab")return;const S=s.current;if(!S)return;const E=S.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),D=E[0],z=E[E.length-1];C.shiftKey&&document.activeElement===D?(C.preventDefault(),z.focus()):!C.shiftKey&&document.activeElement===z&&(C.preventDefault(),D.focus())};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[e,r]);const y=v=>{h(v),u("l2"),setTimeout(()=>{var C;(C=a.current)==null||C.focus()},50)},j=()=>{u("l1")},$=v=>{!!sn[v.id]?y(v.id):(n(v.id),o(v.route),r())},m=()=>{r()},d=v=>{x.current=v.touches[0].clientX,w.current=v.touches[0].clientY},g=v=>{const C=v.changedTouches[0].clientX-x.current,S=Math.abs(v.changedTouches[0].clientY-w.current);C<-80&&S<60&&r()},b=p?sn[p]:null;return l.jsxs(l.Fragment,{children:[l.jsx(Wv,{$open:e,onClick:r,"aria-hidden":"true"}),l.jsx(Uv,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:d,onTouchEnd:g,children:l.jsxs(Vv,{$offset:c==="l1"?0:-50,children:[l.jsxs(qu,{"aria-hidden":c!=="l1",children:[l.jsxs(ed,{children:[l.jsx(td,{children:"Navigation"}),l.jsx(Jl,{onClick:r,"aria-label":"Close menu",children:l.jsx(Ui,{size:16,color:"currentColor"})})]}),l.jsx(nd,{children:l.jsxs("nav",{"aria-label":"Product list",children:[l.jsx(rd,{children:_h.map(v=>l.jsxs(od,{$active:t===v.id,onClick:()=>$(v),"aria-current":t===v.id?"page":void 0,"aria-haspopup":sn[v.id]?"menu":void 0,children:[or(v.iconType,18,t===v.id?"#1976D2":"#6B7280"),l.jsx(id,{children:v.label}),sn[v.id]&&l.jsx(ia,{size:14,color:t===v.id?"#1976D2":"#9CA3AF"})]},v.id))}),l.jsx(Hv,{}),l.jsx(rd,{children:Fh.map(v=>l.jsxs(od,{$active:t===v.id,onClick:()=>$(v),"aria-current":t===v.id?"page":void 0,"aria-haspopup":sn[v.id]?"menu":void 0,children:[or(v.iconType,18,t===v.id?"#1976D2":"#6B7280"),l.jsx(id,{children:v.label}),sn[v.id]&&l.jsx(ia,{size:14,color:t===v.id?"#1976D2":"#9CA3AF"})]},v.id))})]})})]}),l.jsxs(qu,{ref:a,"aria-hidden":c!=="l2",children:[l.jsxs(ed,{children:[l.jsx(Jl,{onClick:j,"aria-label":"Back to menu",children:l.jsx(Xt,{size:16,color:"currentColor"})}),l.jsx(td,{children:(b==null?void 0:b.label)??""}),l.jsx(Jl,{onClick:r,"aria-label":"Close menu",children:l.jsx(Ui,{size:16,color:"currentColor"})})]}),l.jsx(nd,{children:b&&l.jsx("nav",{"aria-label":`${b.label} navigation`,children:b.sections.map((v,C)=>l.jsxs("div",{children:[v.title&&l.jsx(Qv,{children:v.title}),v.items.map(S=>l.jsx(Kv,{to:S.route,end:!0,"aria-current":i.pathname===S.route?"page":void 0,onClick:m,children:S.label},S.route))]},v.title||C))})})]})]})})]})}const Yv=f.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,Jv=f.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`,Xv=f.div`
  flex: 1 1 520px;
  min-width: 280px;
`,Zv=f.p`
  margin: 0 0 8px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,qv=f.h1`
  margin: 0;
  font-size: 40px;
  line-height: 48px;
  max-width: 720px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 400;
`,e2=f.p`
  margin: 16px 0 0;
  max-width: 680px;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral700};
`,t2=f.div`
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
`,n2=f.h2`
  margin: 0 0 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,r2=f.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,o2=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,i2=f.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 0 1px 2px rgba(53,56,58,0.05);
  padding: 24px;
`,l2=f.h3`
  margin: 0 0 6px;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,s2=f.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,a2=f.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
`,c2=f.a`
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
`,u2=f.div`
  display: grid;
  gap: 16px;
`,d2=f.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,f2=f.div`
  position: relative;
  width: 100%;
  min-height: 192px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,p2=f.img`
  width: 100%;
  height: 100%;
  min-height: 192px;
  object-fit: cover;
  display: block;
`,h2=f.div`
  padding: 20px 20px 24px;
`,m2=f.div`
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
`,g2=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 12px;
`,x2=f.h3`
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 26px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,y2=f.p`
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral700};
`,v2=f.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;

  &:hover { text-decoration: underline; }
`,w2=f.article`
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px;
  display: grid;
  gap: 16px;
`,b2=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,k2=f.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,j2=f.button`
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
`,S2=f.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,C2=f.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,$2=f.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,E2=[{title:"CertCentral",subtitle:"Public certificates",actions:[{label:"Order a new certificate",href:"/certcentral/dashboard"},{label:"Reissue a certificate",href:"/certcentral/dashboard"},{label:"Configure ACME automation",href:"/certcentral/client-tools"},{label:"Manage organizations",href:"/certcentral/client-tools"}]},{title:"Trust Lifecycle Manager",subtitle:"Certificate lifecycle",actions:[{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Apply policies",href:"/trust-lifecycle/dashboard"},{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Set up certificate automation",href:"/trust-lifecycle/tools"}]},{title:"DNS Trust Manager",subtitle:"DNS & DNSSEC",actions:[{label:"Update CAA records",href:"/dns/dashboard"},{label:"Add or edit a zone",href:"/dns/dashboard"},{label:"Enable DNSSEC",href:"/dns/dashboard"},{label:"Set traffic routing rules",href:"/dns/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",actions:[{label:"Issue an internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage CRL & OCSP",href:"/private-ca/dashboard"},{label:"Manage certificate templates",href:"/private-ca/certificate-templates"}]}];function T2(){const[e,t]=k.useState(!1);return l.jsxs(Yv,{children:[l.jsxs(Jv,{children:[l.jsxs(Xv,{children:[l.jsx(Zv,{children:"Hi, John Smith"}),l.jsx(qv,{children:"What would you like to do?"}),l.jsx(e2,{children:"Your DigiCert ONE workspace — manage certificates, policies, and trust across products."})]}),l.jsxs(t2,{children:[l.jsx(ld,{href:"/certcentral/inventory",children:"View inventory"}),l.jsx(ld,{href:"/certcentral/dashboard",$primary:!0,children:"Order certificate"})]})]}),l.jsx(n2,{children:"Browse actions by product"}),l.jsxs(r2,{children:[l.jsx("div",{children:l.jsx(o2,{children:E2.map(n=>l.jsxs(i2,{children:[l.jsx(l2,{children:n.title}),l.jsx(s2,{children:n.subtitle}),l.jsx(a2,{children:n.actions.map(r=>l.jsx("li",{children:l.jsxs(c2,{href:r.href,children:[l.jsx("span",{children:r.label}),l.jsx(ia,{size:16,color:"currentColor"})]})},r.label))})]},n.title))})}),l.jsxs(u2,{children:[l.jsxs(d2,{children:[l.jsx(f2,{children:l.jsx(p2,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),l.jsxs(h2,{children:[l.jsx(m2,{children:"Certificate Lifecycle"}),l.jsxs(g2,{children:[l.jsx("span",{children:"Brian Trzupek · 5 min read"}),l.jsx("span",{children:"digicert.com/blog"})]}),l.jsx(x2,{children:"Certificate lifecycle management reaches an inflection point"}),l.jsx(y2,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),l.jsx(v2,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&l.jsxs(w2,{children:[l.jsxs(b2,{children:[l.jsx(k2,{children:"Spotlight"}),l.jsx(j2,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:l.jsx(Ui,{size:16,color:"currentColor"})})]}),l.jsx(S2,{children:"Software Trust Manager"}),l.jsx(C2,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),l.jsx($2,{href:"/software-trust/dashboard",children:"Learn more →"})]})]})]})]})}const P2=f.main`
  padding: 24px;
`,L2=f.h1`
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
`;function ad(){const e=bt(),t=Ly[e.pathname]??e.pathname;return k.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),l.jsxs(P2,{children:[l.jsx(L2,{children:t}),e.pathname==="/profile"&&l.jsx(sd,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),l.jsxs(sd,{children:["This is a stub page for ",l.jsx("code",{children:e.pathname})]})]})}const hr={enterprise:{label:"Enterprise plan",description:"Billed and managed directly through your DigiCert account team. Contract terms, renewals, and invoicing are handled by your account manager, so no self-service payment actions are needed here."},ecommerce:{label:"E-commerce plan",description:"A self-service subscription billed automatically to the payment method on file. Manage your plan, payment details, and receipts at any time from this account."}},I2={"committed-value":{label:"Committed Value",tooltip:"A contract with a committed spend amount. You receive negotiated pricing in exchange for a minimum purchase commitment over the contract term."},"negotiated-pricing":{label:"Negotiated Pricing",tooltip:"A contract with custom pricing negotiated by your account team. You pay per-unit pricing without a minimum spend commitment."}},st={name:"Sarah Mitchell",title:"Enterprise Account Manager, DigiCert",email:"sarah.mitchell@digicert.com",phone:"+1 (801) 555-0142"},R2=[{id:"document-trust",name:"Document Trust",iconType:"document",contractType:"committed-value",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800},{name:"Users",purchased:500,allocated:420,consumed:390,remaining:110},{name:"Identity verifications",purchased:1e3,allocated:1e3,consumed:760,remaining:240}]},{id:"software-trust",name:"Software Trust",iconType:"code",contractType:"committed-value",contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Code signing certificates",consumed:42,total:50},entitlements:[{name:"Code signing certificates",purchased:50,allocated:50,consumed:42,remaining:8},{name:"Signing keys",purchased:20,allocated:18,consumed:15,remaining:5},{name:"Signing events",purchased:1e4,allocated:1e4,consumed:7400,remaining:2600}]},{id:"trust-lifecycle",name:"Trust Lifecycle Manager",iconType:"cycle",contractType:"negotiated-pricing",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Managed certificates",consumed:1120,total:2e3},entitlements:[{name:"Managed certificates",purchased:2e3,allocated:2e3,consumed:1120,remaining:880},{name:"Seats",purchased:75,allocated:75,consumed:25,remaining:50},{name:"Discovery scans / month",purchased:100,allocated:100,consumed:64,remaining:36}]},{id:"keylocker",name:"KeyLocker",iconType:"key",contractType:"committed-value",contractId:"CTR-2024-KL-00045",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"DevOps Engineering",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signing keys",consumed:18,total:20},entitlements:[{name:"Signing keys",purchased:20,allocated:20,consumed:18,remaining:2},{name:"HSM partitions",purchased:4,allocated:4,consumed:3,remaining:1},{name:"Signing events / month",purchased:5e3,allocated:5e3,consumed:4100,remaining:900}]},{id:"dns",name:"DigiCert DNS",iconType:"globe",contractType:"negotiated-pricing",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]},{id:"device-trust",name:"Device Trust",iconType:"mobile",contractType:"committed-value",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Device certificates",consumed:45e3,total:1e5},entitlements:[{name:"Device certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Device groups",purchased:50,allocated:50,consumed:32,remaining:18},{name:"API calls / month",purchased:1e6,allocated:1e6,consumed:62e4,remaining:38e4}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractType:"committed-value",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private CA hierarchies",consumed:9,total:10},entitlements:[{name:"Private CA hierarchies",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Issued certificates",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500},{name:"Sub-CAs",purchased:25,allocated:25,consumed:20,remaining:5}]},{id:"valimail",name:"Valimail",iconType:"envelope",contractType:"negotiated-pricing",contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Protected domains",consumed:18,total:25},entitlements:[{name:"Protected domains",purchased:25,allocated:25,consumed:18,remaining:7},{name:"Email senders monitored",purchased:500,allocated:500,consumed:410,remaining:90},{name:"DMARC reports / month",purchased:1e5,allocated:1e5,consumed:72e3,remaining:28e3}]},{id:"ai-agents",name:"AI Agents",iconType:"sparkle",contractType:"committed-value",contractId:"CTR-2024-AIA-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"AI Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"Agent executions / month",consumed:132e3,total:1e5},entitlements:[{name:"Agent executions / month",purchased:1e5,allocated:1e5,consumed:132e3,remaining:-32e3},{name:"Active agents",purchased:10,allocated:10,consumed:8,remaining:2},{name:"Workflow integrations",purchased:15,allocated:15,consumed:11,remaining:4}]},{id:"quantum-central",name:"Quantum Central",iconType:"atom",contractType:"negotiated-pricing",contractId:"CTR-2024-QC-00005",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]}],Cr=[{accountId:"acme-global-security",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"committed-value",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4}]},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"committed-value",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}}],z2=["over-entitlement","approaching-limit","no-data","healthy"];function N2(e){return z2.find(t=>e.includes(t))||"healthy"}function M2(e){const{id:t,name:n,iconType:r,...o}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:o.renewalDate,status:o.status,primaryEntitlement:o.primaryEntitlement,entitlements:o.entitlements,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...o}]}}function $r(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(i=>i.subscriptionType))],o=[...new Set(n.map(i=>i.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountName:e.accountName,subscriptionTypes:r,renewalDate:o.length===1?o[0]:"Varies by instance",status:N2(n.map(i=>i.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const D2=R2.map(M2);function Bh(e){let t;return e==="enterprise"?t=Cr.map(n=>$r(n,["enterprise"])):e==="ecommerce"?t=Cr.map(n=>$r(n,["ecommerce"])):t=[$r(Cr[0],["enterprise"]),$r(Cr[1],["ecommerce"]),$r(Cr[2],["enterprise"])],[...D2,...t]}function A2(e){const t=e.filter(c=>c.id.startsWith("certcentral-")).length,n=e.length-t,r=[...new Set(e.map(c=>c.renewalDate))],o=e.length?e[0].renewalDate:"—",i=e.filter(c=>c.status==="approaching-limit").length,s=e.filter(c=>c.status==="over-entitlement").length,a=i+s;return{productCount:n,certCentralCount:t,earliestRenewal:o,renewalDatesCount:r.length,approaching:i,over:s,needsAttention:a}}function O2(e){const t=new Set;return e.forEach(n=>n.subscriptionTypes.forEach(r=>t.add(r))),t.has("enterprise")&&t.has("ecommerce")?{label:"Enterprise + E-commerce",sub:"Mixed billing across subscriptions"}:t.has("ecommerce")?{label:"E-commerce subscription",sub:"Self-service billing"}:{label:"Enterprise contract",sub:"Managed by your account team"}}const Wh=f.a`
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
`,_2=f(Wh)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function ml({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${st.name})`}),o=`mailto:${st.email}?${r.toString()}`,i=e==="outline"?_2:Wh;return l.jsx(i,{href:o,...n,children:"Contact account manager"})}const F2=f.div`
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
`,B2=f.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.blue300};
  padding-top: 1px;
`,W2=f.p`
  flex: 1;
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral800};
`,U2=f.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    align-self: flex-start;
  }
`,V2=f(tn)`
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
`,cd={enterprise:"Enterprise billing is managed through your DigiCert account representative. You can view subscriptions, entitlements, usage, and renewal information here. To request changes or additional capacity, contact your account manager.",ecommerce:"Most of your subscriptions are managed under an Enterprise Contract through your account team. CertCentral is billed separately as a self-service E-commerce subscription — manage its plan, payment details, and receipts here.",mixed:"This environment includes both Enterprise Contract and E-commerce Subscription billing. Enterprise subscriptions are managed by your account team, while E-commerce subscriptions can be managed here, including payment details and receipts."};function H2({scenario:e}){return l.jsxs(F2,{role:"note",children:[l.jsx(B2,{children:l.jsx(bn,{size:20,color:"currentColor"})}),l.jsx(W2,{children:cd[e]??cd.mixed}),l.jsx(U2,{children:e==="ecommerce"?l.jsx(V2,{to:"/settings/billing/payment-details",children:"Manage payment details"}):l.jsx(ml,{})})]})}const Q2=f.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,K2=f.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function G2({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return l.jsx(Q2,{role:"presentation",children:l.jsx(K2,{$pct:n})})}const Uh=f(tn)`
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
`,Vh=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Hh=f.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`,Qh=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Kh=f.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Gh=f.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Yh=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Jh=f.span`
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  background: rgba(39, 168, 114, 0.10);
  color: #1F8F60;
`,Y2=f.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,J2=f.button`
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
`,X2=f.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Z2=f.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 7px;
`,q2=f.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,ud=f.p`
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
`;const Xh=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
`,Zh=f.p`
  margin: 0;
  font-size: 12px;
  font-style: italic;
  color: ${({theme:e})=>e.colors.neutral500};
`,qh=f.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,e0=f.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,t0=f.span``;function ew(e){const t=e.subscriptionTypes[0];return hr[t].label}function la({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return l.jsx(X2,{children:n.map(r=>l.jsxs("div",{children:[l.jsxs(Z2,{children:[l.jsx(q2,{children:r.name}),l.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),l.jsx(G2,{consumed:r.consumed,total:r.allocated}),r.remaining<0?l.jsxs(ud,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):l.jsxs(ud,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function tw({subscription:e}){const[t,n]=k.useState(e.instances[0].instanceId),r=e.instances.find(a=>a.instanceId===t)||e.instances[0],o=r.subscriptionType==="enterprise",i=r.entitlements.slice(0,3),s=r.entitlements.length-i.length;return l.jsxs(Uh,{to:`/settings/billing/${e.id}`,children:[l.jsxs(Vh,{children:[l.jsxs(Hh,{children:[l.jsx(Qh,{children:or(e.iconType,20,"currentColor")}),l.jsxs(Kh,{children:[l.jsx(Gh,{children:e.name}),l.jsxs(Yh,{children:[e.subscriptionTypes.map(a=>hr[a].label).join(" · "),e.accountName&&l.jsxs(t0,{children:[" | ",e.accountName]})]})]})]}),l.jsxs(Jh,{children:["Renews ",e.renewalDate]})]}),l.jsx(Y2,{onClick:a=>a.preventDefault(),children:e.instances.map(a=>l.jsx(J2,{type:"button",$active:a.instanceId===t,onClick:c=>{c.preventDefault(),c.stopPropagation(),n(a.instanceId)},children:a.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},a.instanceId))}),o?l.jsxs(l.Fragment,{children:[i.length>0?l.jsx(la,{entitlements:r.entitlements,maxVisible:3}):l.jsx(e0,{children:"Usage data not available yet."}),l.jsxs(Xh,{children:[l.jsx(Zh,{children:"Managed by your Account Manager"}),s>0&&l.jsxs(qh,{children:["+",s," more"]})]})]}):l.jsx(la,{entitlements:r.entitlements,maxVisible:3})]})}function nw({subscription:e}){if(e.instances.length>1)return l.jsx(tw,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:o,entitlements:i}=e,s=e.subscriptionTypes.includes("enterprise"),a=i.slice(0,3),c=i.length-a.length,u=s;return l.jsxs(Uh,{to:`/settings/billing/${t}`,children:[l.jsxs(Vh,{children:[l.jsxs(Hh,{children:[l.jsx(Qh,{children:or(r,20,"currentColor")}),l.jsxs(Kh,{children:[l.jsx(Gh,{children:n}),l.jsxs(Yh,{children:[ew(e),e.accountName&&l.jsxs(t0,{children:[" | ",e.accountName]})]})]})]}),l.jsxs(Jh,{children:["Renews ",o]})]}),a.length>0?l.jsx(la,{entitlements:i,maxVisible:3}):l.jsx(e0,{children:"Usage data is not available for this product yet."}),u&&l.jsxs(Xh,{children:[l.jsx(Zh,{children:"Managed by your Account Manager"}),c>0&&l.jsxs(qh,{children:["+",c," more"]})]})]})}const rw=f.main`
  padding: 32px;
  max-width: 1280px;
`,ow=f.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,iw=f.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,lw=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`,sw=f.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,aw=f.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,cw=f.button`
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
`,uw=[{id:"mixed",label:"Enterprise + E-commerce"},{id:"enterprise",label:"Enterprise only"},{id:"ecommerce",label:"E-commerce only"}],dw=f.div`
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
`,Ho=f.div`
  padding: 18px 20px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Qo=f.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Ko=f.p`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Go=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,fw=f.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,pw=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;function hw({scenario:e,onScenarioChange:t}){k.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]);const n=Bh(e),r=A2(n),o=O2(n);return l.jsxs(rw,{children:[l.jsx(ow,{children:"My subscriptions"}),l.jsx(iw,{children:"View your active product subscriptions, entitlement usage, and renewal information."}),l.jsx(H2,{scenario:e}),l.jsx(lw,{children:l.jsxs(sw,{children:["Scenario:",l.jsx(aw,{children:uw.map(i=>l.jsx(cw,{type:"button",$active:e===i.id,onClick:()=>t(i.id),children:i.label},i.id))})]})}),l.jsxs(dw,{children:[l.jsxs(Ho,{children:[l.jsx(Qo,{children:"Active subscriptions"}),l.jsxs(Ko,{children:[r.productCount+1," products"]}),l.jsxs(Go,{children:[r.certCentralCount," CertCentral account",r.certCentralCount!==1?"s":""," linked"]})]}),l.jsxs(Ho,{children:[l.jsx(Qo,{children:"Next renewal"}),l.jsx(Ko,{children:r.earliestRenewal}),l.jsx(Go,{children:r.renewalDatesCount>1?"Renewal dates vary by product":"All products renew on this date"})]}),l.jsxs(Ho,{children:[l.jsx(Qo,{children:"Usage status"}),l.jsx(Ko,{children:r.needsAttention>0?`${r.needsAttention} need attention`:"All healthy"}),l.jsxs(Go,{children:[r.approaching," approaching limit · ",r.over," over entitlement"]})]}),l.jsxs(Ho,{children:[l.jsx(Qo,{children:"Billing type"}),l.jsx(Ko,{children:o.label}),l.jsx(Go,{children:o.sub})]})]}),l.jsx(fw,{children:"Product subscriptions"}),l.jsx(pw,{children:n.map(i=>l.jsx(nw,{subscription:i},i.id))})]})}const Vi={enterprise:{bg:"#EAF1FB",fg:"#0F4C8A"},ecommerce:{bg:"#EAF8F1",fg:"#1F8F60"}},n0=`
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
`,mw=f.span`
  ${n0}
  background: ${({$type:e})=>Vi[e].bg};
  color: ${({$type:e})=>Vi[e].fg};
`,gw=f.button`
  ${n0}
  border: none;
  cursor: pointer;
  background: ${({$type:e})=>Vi[e].bg};
  color: ${({$type:e})=>Vi[e].fg};
  transition: filter 0.15s ease;

  &:hover { filter: brightness(0.96); }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`;function dd({type:e,onClick:t,showInfoIcon:n=!1}){const r=hr[e];return t?l.jsxs(gw,{type:"button",$type:e,onClick:t,"aria-haspopup":"dialog",children:[r.label,n&&l.jsx(bn,{size:13,color:"currentColor"})]}):l.jsx(mw,{$type:e,children:r.label})}const xw=f.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`,yw=f.div`
  width: 100%;
  max-width: 560px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
`,vw=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ww=f.h2`
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,bw=f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,kw=f.button`
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
`,jw=f.div`
  display: flex;
  gap: 4px;
  padding: 12px 24px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Sw=f.button`
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
`,r0=f.div`
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,o0=f.p`
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral800};
`,i0=f.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 24px;
  margin: 0;
`,Dt=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,At=f.dt`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Ot=f.dd`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,l0=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,fd=f(tn)`
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
`;function Cw({instance:e}){return l.jsxs(r0,{children:[l.jsx(o0,{children:hr.enterprise.description}),l.jsxs(i0,{children:[l.jsxs(Dt,{children:[l.jsx(At,{children:"Contract ID"}),l.jsx(Ot,{children:e.contractId})]}),l.jsxs(Dt,{children:[l.jsx(At,{children:"Contract term"}),l.jsx(Ot,{children:e.contractTerm})]}),l.jsxs(Dt,{children:[l.jsx(At,{children:"Renewal date"}),l.jsx(Ot,{children:e.renewalDate})]}),l.jsxs(Dt,{children:[l.jsx(At,{children:"Contract owner"}),l.jsx(Ot,{children:e.contractOwner})]})]}),l.jsx(l0,{children:l.jsx(ml,{variant:"outline",subject:`Billing question about ${e.instanceLabel} (${e.contractId})`})})]})}function $w({instance:e,onClose:t}){return l.jsxs(r0,{children:[l.jsx(o0,{children:hr.ecommerce.description}),l.jsxs(i0,{children:[l.jsxs(Dt,{children:[l.jsx(At,{children:"Plan"}),l.jsx(Ot,{children:e.billing.plan})]}),l.jsxs(Dt,{children:[l.jsx(At,{children:"Price"}),l.jsx(Ot,{children:e.billing.price})]}),l.jsxs(Dt,{children:[l.jsx(At,{children:"Next charge date"}),l.jsx(Ot,{children:e.billing.nextChargeDate})]}),l.jsxs(Dt,{children:[l.jsx(At,{children:"Payment method"}),l.jsxs(Ot,{children:[e.paymentMethod.type," •••• ",e.paymentMethod.last4]})]})]}),l.jsxs(l0,{children:[l.jsxs(fd,{to:"/settings/billing/payment-details",onClick:t,children:[l.jsx(Oh,{size:16,color:"currentColor"}),"Manage payment details"]}),l.jsxs(fd,{to:"/settings/billing/receipts",onClick:t,children:[l.jsx(Ah,{size:16,color:"currentColor"}),"View receipts"]})]})]})}function Ew({open:e,onClose:t,instances:n=[],initialInstanceId:r}){var c;const o=k.useRef(null),[i,s]=k.useState(r||((c=n[0])==null?void 0:c.instanceId));if(k.useEffect(()=>{var u;e&&s(r||((u=n[0])==null?void 0:u.instanceId))},[e,r,n]),k.useEffect(()=>{var p;if(!e)return;(p=o.current)==null||p.focus();const u=h=>{h.key==="Escape"&&t()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e,t]),!e)return null;const a=n.find(u=>u.instanceId===i)||n[0];return a?tc.createPortal(l.jsx(xw,{onClick:t,"aria-hidden":"false",children:l.jsxs(yw,{role:"dialog","aria-modal":"true","aria-labelledby":"billing-type-heading",onClick:u=>u.stopPropagation(),children:[l.jsxs(vw,{children:[l.jsxs("div",{children:[l.jsx(ww,{id:"billing-type-heading",children:"Billing type"}),l.jsx(bw,{children:n.length>1?"This environment includes both Enterprise and E-commerce CertCentral subscriptions.":"How this subscription is billed and managed."})]}),l.jsx(kw,{ref:o,onClick:t,"aria-label":"Close billing type details",children:l.jsx(Ui,{size:16,color:"currentColor"})})]}),n.length>1&&l.jsx(jw,{role:"tablist","aria-label":"Billing type by instance",children:n.map(u=>l.jsxs(Sw,{role:"tab",type:"button",$active:u.instanceId===i,"aria-selected":u.instanceId===i,onClick:()=>s(u.instanceId),children:[u.instanceLabel,l.jsx(dd,{type:u.subscriptionType})]},u.instanceId))}),n.length===1&&l.jsx("div",{style:{padding:"12px 24px 0"},children:l.jsx(dd,{type:a.subscriptionType})}),a.subscriptionType==="enterprise"?l.jsx(Cw,{instance:a}):l.jsx($w,{instance:a,onClose:t})]})}),document.body):null}const pd=f.main`
  padding: 32px;
`,hd=f(tn)`
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
`,Tw=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Pw=f.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,Lw=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Iw=f.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Rw=f.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,zw=f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Nw=f.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,Mw=f.button`
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
`,bo=f.section`
  margin-bottom: 32px;
`,uc=f.h2`
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,s0=f.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||3}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ko=f.div`
  padding: 18px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jo=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,So=f.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`,ir=f.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
  display: flex;
  align-items: baseline;
  gap: 5px;
`,a0=f.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral600};
`,dc=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Dw=f.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(39,168,114,0.10);
  color: #1F8F60;
`,Aw=f.button`
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
`,Ow=f.button`
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
`,_w=f.div`
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
`;function c0({instance:e,onOpenBillingModal:t}){const n=hr[e.subscriptionType].label;return l.jsxs(ko,{children:[l.jsxs(jo,{children:[l.jsx(So,{children:"Status"}),l.jsx(Dw,{children:"Active"})]}),l.jsxs(ir,{children:[n,l.jsx(Aw,{type:"button",onClick:t,"aria-haspopup":"dialog",children:l.jsx(bn,{size:14,color:"currentColor"})})]})]})}function Fw(e){if(!e.length)return null;const t=e.reduce((r,o)=>r+o.allocated,0),n=e.reduce((r,o)=>r+o.consumed,0);return t===0?null:Math.round(n/t*100)}function u0({entitlements:e}){const t=Fw(e);return l.jsxs(ko,{children:[l.jsxs(jo,{children:[l.jsx(So,{children:"Usage"}),l.jsx(Ey,{size:15,color:"#9CA3AF"})]}),t!==null?l.jsxs(ir,{children:[t,"%",l.jsx(a0,{children:"consumed"})]}):l.jsx(ir,{children:"—"}),l.jsx(dc,{children:e.length?`${e.length} entitlement types`:"No usage data available"})]})}function Bw(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function d0({dateStr:e,sub:t}){const n=Bw(e);return l.jsxs(ko,{children:[l.jsxs(jo,{children:[l.jsx(So,{children:"Renewal date"}),l.jsx($y,{size:15,color:"#9CA3AF"})]}),l.jsx(ir,{children:e}),l.jsx(dc,{children:t||`${n} days remaining`})]})}function Ww({contractType:e}){const[t,n]=k.useState(!1),r=I2[e];return r?l.jsxs(ko,{children:[l.jsx(jo,{children:l.jsx(So,{children:"Contract type"})}),l.jsxs(ir,{children:[r.label,l.jsxs(Ow,{type:"button",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocus:()=>n(!0),onBlur:()=>n(!1),"aria-label":`About ${r.label}`,children:[l.jsx(bn,{size:14,color:"currentColor"}),t&&l.jsx(_w,{children:r.tooltip})]})]})]}):null}const Uw=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,f0=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,ct=f.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ut=f.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 14px 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,p0=f.span`
  font-weight: 500;
  color: ${({$tone:e,theme:t})=>e==="error"?"#DC2626":e==="warning"?"#D97706":t.colors.neutral900};
`,h0=f.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`;function Vw({entitlements:e}){return e.length===0?l.jsx(h0,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):l.jsx(Uw,{children:l.jsxs(f0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(ct,{style:{width:"30%"},children:"Entitlement"}),l.jsx(ct,{$align:"right",children:"Purchased"}),l.jsx(ct,{$align:"right",children:"Allocated"}),l.jsx(ct,{$align:"right",children:"Used"}),l.jsx(ct,{$align:"right",children:"Remaining"})]})}),l.jsx("tbody",{children:e.map(t=>{const n=t.allocated>0?t.consumed/t.allocated:0,r=t.remaining<0?"error":n>=.8?"warning":void 0;return l.jsxs("tr",{children:[l.jsx(ut,{children:t.name}),l.jsx(ut,{$align:"right",children:t.purchased.toLocaleString()}),l.jsx(ut,{$align:"right",children:t.allocated.toLocaleString()}),l.jsx(ut,{$align:"right",children:t.consumed.toLocaleString()}),l.jsx(ut,{$align:"right",children:l.jsx(p0,{$tone:r,children:t.remaining<0?`Exceeded by ${Math.abs(t.remaining).toLocaleString()}`:t.remaining===0?"0":t.remaining.toLocaleString()})})]},t.name)})})]})})}const Hw=f.div`
  padding: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Qw=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`,Kw=f.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Gw=f.div`
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
`,Yw=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,Jw=f.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Xw=f.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Zw=f.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 13px;
`,md=f.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.neutral600};
`,qw=f.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,eb=f.span`
  color: ${({theme:e})=>e.colors.neutral700};
`,tb=f.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.neutral800};
`,nb=f.span`
  display: flex;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`,gd=f.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
  margin-bottom: 6px;
`,xd=f.div`
  display: flex;
  flex-direction: column;
`,rb=f.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};

  &::placeholder { color: ${({theme:e})=>e.colors.neutral400}; }
  &:focus { outline: none; border-color: ${({theme:e})=>e.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
`;f.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;const ob=f.textarea`
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
`,ib=f.button`
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
`,lb=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,sb=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`;function ab({isCertCentral:e}){const t=st.name.split(" ").map(r=>r[0]).join(""),n=e?"Need more licenses, additional capacity, contract changes, billing help, or renewal assistance? Your DigiCert account manager can help.":"Have questions about this product, need help with configuration, or want to discuss your entitlements? Your DigiCert account manager can help.";return l.jsxs(bo,{children:[l.jsx(uc,{children:"Your DigiCert account manager"}),l.jsxs(Hw,{children:[l.jsxs(Qw,{children:[l.jsxs(Kw,{children:[l.jsx(Gw,{children:t}),l.jsxs(Yw,{children:[l.jsx(Jw,{children:st.name}),l.jsx(Xw,{children:st.title})]})]}),l.jsxs(Zw,{children:[l.jsxs(md,{children:[l.jsx(Mh,{size:14,color:"currentColor"}),l.jsx(qw,{href:`mailto:${st.email}`,children:st.email})]}),l.jsxs(md,{children:[l.jsx(xy,{size:14,color:"currentColor"}),l.jsx(eb,{children:st.phone})]})]})]}),l.jsxs(tb,{children:[l.jsx(nb,{children:l.jsx(bn,{size:16,color:"currentColor"})}),l.jsx("span",{children:n})]}),l.jsxs(xd,{children:[l.jsx(gd,{htmlFor:"contact-subject",children:"Subject"}),l.jsx(rb,{id:"contact-subject",type:"text",placeholder:"e.g. Request additional SSL/TLS licenses"})]}),l.jsxs(xd,{children:[l.jsx(gd,{htmlFor:"contact-message",children:"Message"}),l.jsx(ob,{id:"contact-message",placeholder:"Describe what you need help with...",rows:3})]}),l.jsxs(lb,{children:[l.jsxs(sb,{children:["Your message will be sent directly to ",st.name,"."]}),l.jsx(ib,{type:"button",children:"Send message"})]})]})]})}function cb({instance:e,isCertCentral:t,onOpenBillingModal:n}){const r=t?4:3;return l.jsx(bo,{children:l.jsxs(s0,{$cols:r,children:[l.jsx(c0,{instance:e,onOpenBillingModal:n}),t&&l.jsx(Ww,{contractType:e.contractType}),l.jsx(d0,{dateStr:e.renewalDate,sub:e.contractTerm}),l.jsx(u0,{entitlements:e.entitlements})]})})}const ub=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`,db=f.button`
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
`,yd=f(tn)`
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
`;function fb({instance:e,onOpenBillingModal:t}){const[n,r]=e.billing.price.split(" / ");return l.jsxs(bo,{children:[l.jsxs(s0,{$cols:4,children:[l.jsx(c0,{instance:e,onOpenBillingModal:t}),l.jsxs(ko,{children:[l.jsxs(jo,{children:[l.jsx(So,{children:"Monthly cost"}),l.jsx(Py,{size:15,color:"#9CA3AF"})]}),l.jsxs(ir,{$blue:!0,children:[n,l.jsxs(a0,{children:["/ ",r]})]}),l.jsx(dc,{children:e.billing.plan})]}),l.jsx(d0,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"}),l.jsx(u0,{entitlements:e.entitlements})]}),l.jsxs(ub,{children:[l.jsxs(db,{type:"button",children:[l.jsx(Ty,{size:16,color:"currentColor"}),"Buy certificates"]}),l.jsx(yd,{to:"/settings/billing/payment-details",children:"Manage payment details"}),l.jsx(yd,{to:"/settings/billing/receipts",children:"View receipts"})]})]})}const pb=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,hb=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,mb=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,gb=f.button`
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
`,xb=f.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,yb=f.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,vb=f.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,wb=f.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,bb=f.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,kb=f.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function jb({category:e}){const[t,n]=k.useState(e.products.length>0);return l.jsxs(pb,{children:[l.jsxs(hb,{onClick:()=>n(r=>!r),children:[l.jsxs(mb,{children:[l.jsx(gb,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(o=>!o)},children:t?l.jsx(Dh,{size:14,color:"currentColor"}):l.jsx(Hr,{size:14,color:"currentColor"})}),l.jsx(xb,{children:e.name})]}),l.jsx(yb,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&l.jsx(vb,{children:e.products.length===0?l.jsx(kb,{children:"No products purchased yet."}):l.jsxs(f0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(ct,{style:{width:"40%"},children:"Product"}),l.jsx(ct,{$align:"right",children:"Purchased"}),l.jsx(ct,{$align:"right",children:"Used"}),l.jsx(ct,{$align:"right",children:"Available"})]})}),l.jsx("tbody",{children:e.products.map((r,o)=>l.jsxs("tr",{children:[l.jsxs(ut,{children:[l.jsx(wb,{children:r.name}),l.jsx(bb,{children:r.type})]}),l.jsx(ut,{$align:"right",children:r.purchased}),l.jsx(ut,{$align:"right",children:r.used}),l.jsx(ut,{$align:"right",children:l.jsx(p0,{$tone:r.available===0?"error":void 0,children:r.available})})]},o))})]})})]})}function Sb({categories:e}){return l.jsxs(bo,{children:[l.jsx(uc,{children:"Products"}),e.map(t=>l.jsx(jb,{category:t},t.id))]})}function Cb({scenario:e}){const{subscriptionId:t}=vx(),[n,r]=k.useState(null),[o,i]=k.useState(!1),s=Bh(e).find(p=>p.id===t),a=(t==null?void 0:t.startsWith("certcentral-"))??!1;if(k.useEffect(()=>{document.title=s?`${s.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[s==null?void 0:s.id,s==null?void 0:s.name]),k.useEffect(()=>{var p;r(((p=s==null?void 0:s.instances[0])==null?void 0:p.instanceId)??null)},[t,e]),!s)return l.jsxs(pd,{children:[l.jsxs(hd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(h0,{children:"This subscription is not available in the current scenario."})]});const c=s.instances.find(p=>p.instanceId===n)||s.instances[0],u=()=>i(!0);return l.jsxs(pd,{children:[l.jsxs(hd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(Tw,{children:l.jsxs(Pw,{children:[l.jsx(Lw,{children:or(s.iconType,24,"currentColor")}),l.jsxs(Iw,{children:[l.jsx(Rw,{children:s.name}),s.accountName&&l.jsx(zw,{children:s.accountName})]})]})}),s.instances.length>1&&l.jsx(Nw,{role:"tablist","aria-label":"CertCentral instances",children:s.instances.map(p=>l.jsx(Mw,{role:"tab",type:"button",$active:p.instanceId===c.instanceId,"aria-selected":p.instanceId===c.instanceId,onClick:()=>r(p.instanceId),children:p.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},p.instanceId))}),c.subscriptionType==="enterprise"?l.jsxs(l.Fragment,{children:[l.jsx(cb,{instance:c,isCertCentral:a,onOpenBillingModal:u}),l.jsxs(bo,{children:[l.jsx(uc,{children:"Entitlements and usage"}),l.jsx(Vw,{entitlements:c.entitlements})]}),l.jsx(ab,{isCertCentral:a})]}):l.jsxs(l.Fragment,{children:[l.jsx(fb,{instance:c,onOpenBillingModal:u}),l.jsx(Sb,{categories:c.productCategories})]}),l.jsx(Ew,{open:o,onClose:()=>i(!1),instances:s.instances,initialInstanceId:c.instanceId})]})}const $b=f.div`
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
`,Eb=f.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,Tb=f.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Pb=f.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function m0({icon:e,title:t,children:n,action:r}){return l.jsxs($b,{children:[l.jsx(Eb,{children:e}),t&&l.jsx(Tb,{children:t}),l.jsx(Pb,{children:n}),r]})}const vd=f.main`
  padding: 32px;
`,wd=f(tn)`
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
`,bd=f.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,kd=f.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Lb=f.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,Xl=f.div`
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 16px 20px;
  border: 1px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral200};
  border-left: 3px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Zl=f.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;
  align-items: center;
  gap: 6px;
`,ql=f.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
`,Ib=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,Rb=f.div`
  margin-left: auto;
`,fc=f.button`
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
`,zb=f(fc)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,Nb=f(fc)``,Mb=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Db=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,Ct=f.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 11px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  white-space: nowrap;
  user-select: none;
`,$t=f.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,Ab=f.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,es={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},Ob=f.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=es[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=es[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=es[e])==null?void 0:t.color)||"#374151"}};
`,_b=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Fb=f.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,Bb=f.button`
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
`,Wb=f.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral50};
`,Ub=["All","Invoices","Receipts","Refunds"],jd=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function Vb({scenario:e}){const[t,n]=k.useState("All"),[r,o]=k.useState(!1);if(k.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return l.jsxs(vd,{children:[l.jsxs(wd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(bd,{children:"Receipts and invoices"}),l.jsx(kd,{children:"Download receipts, invoices, and other billing documents for your account."}),l.jsx(m0,{icon:l.jsx(Ah,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:l.jsx(ml,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const i=4,s="$2,520.00",a="Nov 20, 2025",c=t==="All"?jd:jd.filter(u=>t==="Invoices"?u.type==="Invoice":t==="Receipts"?u.type==="Receipt":t==="Refunds"?u.type==="Refund":!0);return l.jsxs(vd,{children:[l.jsxs(wd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(bd,{children:"Receipts and invoices"}),l.jsx(kd,{children:"Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage."}),l.jsxs(Lb,{children:[l.jsxs(Xl,{$alert:!0,children:[l.jsxs(Zl,{children:[l.jsx(Qu,{size:14,color:"#DC2626"}),"Invoices overdue"]}),l.jsx(ql,{children:i})]}),l.jsxs(Xl,{$alert:!0,children:[l.jsxs(Zl,{children:[l.jsx(Qu,{size:14,color:"#DC2626"}),"Total balance overdue"]}),l.jsx(ql,{$blue:!0,children:s})]}),l.jsxs(Xl,{children:[l.jsx(Zl,{children:"Next invoice due"}),l.jsx(ql,{$blue:!0,children:a})]})]}),l.jsxs(Ib,{children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(fc,{type:"button",onClick:()=>o(u=>!u),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,l.jsx(Hr,{size:13,color:"currentColor"})]}),r&&l.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:Ub.map(u=>l.jsx("button",{type:"button",onClick:()=>{n(u),o(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:u===t?"#EAF1FB":"white",color:u===t?"#0174C3":"#1A1F27",fontWeight:u===t?500:400},children:u},u))})]}),l.jsxs(zb,{type:"button",children:[l.jsx(Cy,{size:14,color:"currentColor"}),"Filter",l.jsx(Hr,{size:13,color:"currentColor"})]}),l.jsx(Rb,{children:l.jsxs(Nb,{type:"button",children:["Download CSV",l.jsx(Hr,{size:13,color:"currentColor"})]})})]}),l.jsxs(Mb,{children:[l.jsxs(Db,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(Ct,{style:{width:"140px"},children:"Invoice"}),l.jsx(Ct,{children:"Type"}),l.jsx(Ct,{children:"Issued on"}),l.jsx(Ct,{children:"Status"}),l.jsx(Ct,{$align:"right",children:"Amount"}),l.jsx(Ct,{children:"Due on"}),l.jsx(Ct,{children:"Ordered by"}),l.jsx(Ct,{})]})}),l.jsx("tbody",{children:c.map((u,p)=>l.jsxs("tr",{children:[l.jsx($t,{children:l.jsx(Ab,{href:"#",children:u.id})}),l.jsx($t,{children:u.type}),l.jsx($t,{children:u.issuedOn}),l.jsx($t,{children:l.jsx(Ob,{$status:u.status,children:u.status})}),l.jsx($t,{$align:"right",children:u.amount}),l.jsx($t,{children:u.dueOn}),l.jsx($t,{children:u.orderedBy}),l.jsx($t,{children:l.jsxs(_b,{children:[(u.status==="Overdue"||u.status==="Upcoming")&&l.jsx(Fb,{type:"button",children:"Pay"}),l.jsx(Bb,{type:"button","aria-label":"Download",children:l.jsx(Sy,{size:15,color:"currentColor"})})]})})]},`${u.id}-${p}`))})]}),l.jsxs(Wb,{children:["1 to ",c.length," of 8,618"]})]})]})}const Sd=f.main`
  padding: 32px;
`,Cd=f(tn)`
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
`,Hb=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,Qb=f.div``,$d=f.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ed=f.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,Kb=f.a`
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
`,Td=f.div`
  margin-bottom: 32px;
`,Pd=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,Ld=f.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Id=f.button`
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
`,Gb=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Yb=f.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Jb=f.div`
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
`,Xb=f.div``,Zb=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,qb=f.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,ek=f.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,tk=f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,g0=f.button`
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
`,nk=f.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,rk=f.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,ok=f(g0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Yo=f.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,Jo=f.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Xo=f.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,ik=f.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`;function lk({scenario:e}){return k.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?l.jsxs(Sd,{children:[l.jsxs(Cd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx($d,{children:"Payment details"}),l.jsx(Ed,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),l.jsx(m0,{icon:l.jsx(Oh,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:l.jsx(ml,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):l.jsxs(Sd,{children:[l.jsxs(Cd,{to:"/settings/billing",children:[l.jsx(Xt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsxs(Hb,{children:[l.jsxs(Qb,{children:[l.jsx($d,{children:"Payment details"}),l.jsx(Ed,{children:"Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method."})]}),l.jsxs(Kb,{href:"#",children:[l.jsx(bn,{size:14,color:"currentColor"}),"Need help?"]})]}),l.jsxs(Td,{children:[l.jsxs(Pd,{children:[l.jsx(Ld,{children:"Payment methods"}),l.jsxs(Id,{type:"button",children:[l.jsx(Vu,{size:14,color:"currentColor"}),"Add payment method"]})]}),l.jsxs(Gb,{children:[l.jsxs(Yb,{children:[l.jsx(Jb,{children:"VISA"}),l.jsxs(Xb,{children:[l.jsxs(Zb,{children:[l.jsx(qb,{children:"Visa •••• 8350"}),l.jsx(ek,{children:"Default"})]}),l.jsx(tk,{children:"Expires 02/28"})]})]}),l.jsx(g0,{type:"button","aria-label":"Payment method options",children:l.jsx(Hu,{size:16,color:"currentColor"})})]})]}),l.jsxs(Td,{children:[l.jsxs(Pd,{children:[l.jsx(Ld,{children:"Billing contacts"}),l.jsxs(Id,{type:"button",children:[l.jsx(Vu,{size:14,color:"currentColor"}),"Add billing contact"]})]}),l.jsxs(nk,{children:[l.jsx(ok,{type:"button","aria-label":"Contact options",children:l.jsx(Hu,{size:16,color:"currentColor"})}),l.jsx(rk,{children:"John Doe"}),l.jsxs(Yo,{children:[l.jsx(Jo,{children:"Address"}),l.jsxs(Xo,{children:["123 Main Street",l.jsx("br",{}),"Suite 100",l.jsx("br",{}),"San Francisco, CA 94105",l.jsx("br",{}),"United States"]})]}),l.jsxs(Yo,{children:[l.jsx(Jo,{children:"Email address"}),l.jsx(Xo,{children:"john.doe@winthecustomer.com"})]}),l.jsxs(Yo,{children:[l.jsx(Jo,{children:"Phone number"}),l.jsx(Xo,{children:"650 123 4567"})]}),l.jsxs(Yo,{children:[l.jsxs(ik,{children:[l.jsx(Jo,{style:{margin:0},children:"VAT ID"}),l.jsx(bn,{size:14,color:"#0174C3"})]}),l.jsx(Xo,{children:"23503820"})]})]})]})]})}const sk=sy`
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
`,ak=f.div`
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
`;function Rd(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function ck(){const[e,t]=k.useState(()=>typeof window<"u"?Rd():"desktop");return k.useEffect(()=>{const n=()=>t(Rd());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function uk(){const[e,t]=k.useState("dashboard"),[n,r]=k.useState(!1),[o,i]=k.useState(!0),[s,a]=k.useState(null),[c,u]=k.useState("mixed"),p=k.useCallback(()=>r(m=>!m),[]),h=k.useCallback(()=>r(!1),[]),x=k.useCallback(()=>i(m=>!m),[]),w=k.useCallback(m=>{t(m),i(!0)},[]),y=k.useCallback(m=>{t(m),i(!0),r(!1)},[]),j=k.useCallback(m=>{a(d=>d===m?null:m)},[]),$=k.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:o,activeTopNav:s,billingScenario:c,toggleDrawer:p,closeDrawer:h,toggleSpoke:x,setBillingScenario:u,selectProduct:w,selectProductFromDrawer:y,openTopNav:j,closeTopNav:$}}function dk(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:o,toggleDrawer:i,closeDrawer:s,toggleSpoke:a,setBillingScenario:c,selectProduct:u,selectProductFromDrawer:p,openTopNav:h,closeTopNav:x}=uk(),w=ck(),y=w==="mobile",j=k.useRef(null);k.useEffect(()=>{w!=="mobile"&&t&&s()},[w,t,s]),k.useEffect(()=>{const d=j.current;d&&(y&&t?(d.setAttribute("inert",""),d.setAttribute("aria-hidden","true")):(d.removeAttribute("inert"),d.removeAttribute("aria-hidden")))},[y,t]);const $=n?"276px":"56px",m=r==="ai-assist"?"400px":"0px";return l.jsxs(l.Fragment,{children:[l.jsx(sk,{}),l.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),l.jsx(bv,{isDrawerOpen:t,onToggleDrawer:i,activeTopNav:r,onOpenTopNav:h,onCloseTopNav:x,onSelectProduct:u,cartCount:3}),l.jsx(Ev,{activeProductId:e,onSelectProduct:u}),l.jsx(Bv,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:a,billingScenario:o}),l.jsx(Gv,{open:t,activeProductId:e,onSelectProduct:p,onClose:s}),l.jsx(ak,{ref:j,id:"main-content",$leftOffset:$,$rightOffset:m,children:l.jsxs(Dx,{children:[l.jsx(Ir,{path:"/",element:l.jsx(Nx,{to:"/dashboard",replace:!0})}),Ny.filter(d=>d!=="/").map(d=>{let g=l.jsx(ad,{});return d==="/dashboard"?g=l.jsx(T2,{}):d==="/settings/billing"?g=l.jsx(hw,{scenario:o,onScenarioChange:c}):d==="/settings/billing/receipts"?g=l.jsx(Vb,{scenario:o}):d==="/settings/billing/payment-details"&&(g=l.jsx(lk,{scenario:o})),l.jsx(Ir,{path:d,element:g},d)}),l.jsx(Ir,{path:"/settings/billing/:subscriptionId",element:l.jsx(Cb,{scenario:o})}),l.jsx(Ir,{path:"*",element:l.jsx(ad,{})})]})})]})}Qp(document.getElementById("root")).render(l.jsx(k.StrictMode,{children:l.jsx(Vx,{children:l.jsx(ny,{theme:ay,children:l.jsx(dk,{})})})}));
