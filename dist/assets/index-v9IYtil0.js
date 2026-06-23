function s0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function a0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Td={exports:{}},Mi={},Ld={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),u0=Symbol.for("react.portal"),c0=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),f0=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),m0=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),x0=Symbol.for("react.memo"),y0=Symbol.for("react.lazy"),au=Symbol.iterator;function v0(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var Id={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rd=Object.assign,zd={};function er(e,t,n){this.props=e,this.context=t,this.refs=zd,this.updater=n||Id}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nd(){}Nd.prototype=er.prototype;function ra(e,t,n){this.props=e,this.context=t,this.refs=zd,this.updater=n||Id}var oa=ra.prototype=new Nd;oa.constructor=ra;Rd(oa,er.prototype);oa.isPureReactComponent=!0;var uu=Array.isArray,Dd=Object.prototype.hasOwnProperty,ia={current:null},Md={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Dd.call(t,r)&&!Md.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:co,type:e,key:i,ref:s,props:o,_owner:ia.current}}function w0(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function k0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cu=/\/+/g;function cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?k0(""+e.key):t.toString(36)}function Ho(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case co:case u0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+cl(s,0):r,uu(o)?(n="",e!=null&&(n=e.replace(cu,"$&/")+"/"),Ho(o,t,n,"",function(c){return c})):o!=null&&(la(o)&&(o=w0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(cu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",uu(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+cl(i,a);s+=Ho(i,t,n,u,o)}else if(u=v0(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+cl(i,a++),s+=Ho(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vo(e,t,n){if(e==null)return e;var r=[],o=0;return Ho(e,r,"","",function(i){return t.call(n,i,o++)}),r}function b0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Ko={transition:null},S0={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:ia};function _d(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:vo,forEach:function(e,t,n){vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vo(e,function(){t++}),t},toArray:function(e){return vo(e,function(t){return t})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=er;D.Fragment=c0;D.Profiler=f0;D.PureComponent=ra;D.StrictMode=d0;D.Suspense=g0;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;D.act=_d;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rd({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ia.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Dd.call(t,u)&&!Md.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:co,type:e.type,key:o,ref:i,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:h0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:p0,_context:e},e.Consumer=e};D.createElement=Od;D.createFactory=function(e){var t=Od.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:m0,render:e}};D.isValidElement=la;D.lazy=function(e){return{$$typeof:y0,_payload:{_status:-1,_result:e},_init:b0}};D.memo=function(e,t){return{$$typeof:x0,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ko.transition;Ko.transition={};try{e()}finally{Ko.transition=t}};D.unstable_act=_d;D.useCallback=function(e,t){return ke.current.useCallback(e,t)};D.useContext=function(e){return ke.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};D.useEffect=function(e,t){return ke.current.useEffect(e,t)};D.useId=function(){return ke.current.useId()};D.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ke.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};D.useRef=function(e){return ke.current.useRef(e)};D.useState=function(e){return ke.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ke.current.useTransition()};D.version="18.3.1";Ld.exports=D;var b=Ld.exports;const ge=a0(b),j0=s0({__proto__:null,default:ge},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=b,$0=Symbol.for("react.element"),E0=Symbol.for("react.fragment"),P0=Object.prototype.hasOwnProperty,T0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L0={key:!0,ref:!0,__self:!0,__source:!0};function Ad(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)P0.call(t,r)&&!L0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:$0,type:e,key:i,ref:s,props:o,_owner:T0.current}}Mi.Fragment=E0;Mi.jsx=Ad;Mi.jsxs=Ad;Td.exports=Mi;var l=Td.exports,Fd={exports:{}},ze={},Bd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var R=T.length;T.push(I);e:for(;0<R;){var B=R-1>>>1,_=T[B];if(0<o(_,I))T[B]=I,T[R]=_,R=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],R=T.pop();if(R!==I){T[0]=R;e:for(var B=0,_=T.length,ie=_>>>1;B<ie;){var q=2*(B+1)-1,ne=T[q],Pe=q+1,De=T[Pe];if(0>o(ne,R))Pe<_&&0>o(De,ne)?(T[B]=De,T[Pe]=R,B=Pe):(T[B]=ne,T[q]=R,B=q);else if(Pe<_&&0>o(De,R))T[B]=De,T[Pe]=R,B=Pe;else break e}}return I}function o(T,I){var R=T.sortIndex-I.sortIndex;return R!==0?R:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],p=1,h=null,x=3,w=!1,y=!1,S=!1,$=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=T)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function k(T){if(S=!1,g(T),!y)if(n(u)!==null)y=!0,wt(v);else{var I=n(c);I!==null&&qt(k,I.startTime-T)}}function v(T,I){y=!1,S&&(S=!1,m(E),E=-1),w=!0;var R=x;try{for(g(I),h=n(u);h!==null&&(!(h.expirationTime>I)||T&&!W());){var B=h.callback;if(typeof B=="function"){h.callback=null,x=h.priorityLevel;var _=B(h.expirationTime<=I);I=e.unstable_now(),typeof _=="function"?h.callback=_:h===n(u)&&r(u),g(I)}else r(u);h=n(u)}if(h!==null)var ie=!0;else{var q=n(c);q!==null&&qt(k,q.startTime-I),ie=!1}return ie}finally{h=null,x=R,w=!1}}var C=!1,j=null,E=-1,M=5,z=-1;function W(){return!(e.unstable_now()-z<M)}function Ue(){if(j!==null){var T=e.unstable_now();z=T;var I=!0;try{I=j(!0,T)}finally{I?Z():(C=!1,j=null)}}else C=!1}var Z;if(typeof d=="function")Z=function(){d(Ue)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Zt=Ve.port2;Ve.port1.onmessage=Ue,Z=function(){Zt.postMessage(null)}}else Z=function(){$(Ue,0)};function wt(T){j=T,C||(C=!0,Z())}function qt(T,I){E=$(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,wt(v))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var R=x;x=I;try{return T()}finally{x=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=x;x=T;try{return I()}finally{x=R}},e.unstable_scheduleCallback=function(T,I,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,T){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=R+_,T={id:p++,callback:I,priorityLevel:T,startTime:R,expirationTime:_,sortIndex:-1},R>B?(T.sortIndex=R,t(c,T),n(u)===null&&T===n(c)&&(S?(m(E),E=-1):S=!0,qt(k,R-B))):(T.sortIndex=_,t(u,T),y||w||(y=!0,wt(v))),T},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(T){var I=x;return function(){var R=x;x=I;try{return T.apply(this,arguments)}finally{x=R}}}})(Wd);Bd.exports=Wd;var I0=Bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0=b,Re=I0;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ud=new Set,Fr={};function xn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Fr[e]=t,e=0;e<t.length;e++)Ud.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,du={},fu={};function N0(e){return Gl.call(fu,e)?!0:Gl.call(du,e)?!1:z0.test(e)?fu[e]=!0:(du[e]=!0,!1)}function D0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M0(e,t,n,r){if(t===null||typeof t>"u"||D0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sa,aa);pe[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sa,aa);pe[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sa,aa);pe[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function ua(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M0(t,n,o,r)&&(n=null),r||o===null?N0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),bn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),Hd=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),fa=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Kd=Symbol.for("react.offscreen"),pu=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,dl;function kr(e){if(dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dl=t&&t[1]||""}return`
`+dl+e}var fl=!1;function pl(e,t){if(!e||fl)return"";fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function O0(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=pl(e.type,!1),e;case 11:return e=pl(e.type.render,!1),e;case 1:return e=pl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case bn:return"Portal";case Yl:return"Profiler";case ca:return"StrictMode";case Jl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hd:return(e.displayName||"Context")+".Consumer";case Vd:return(e._context.displayName||"Context")+".Provider";case da:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fa:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function _0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A0(e){var t=Qd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ko(e){e._valueTracker||(e._valueTracker=A0(e))}function Gd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yd(e,t){t=t.checked,t!=null&&ua(e,"checked",t,!1)}function es(e,t){Yd(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&ts(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ts(e,t,n){(t!=="number"||ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var br=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(br(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Jd(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,Zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){F0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function qd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var B0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,t){if(t){if(B0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,Dn=null,Mn=null;function yu(e){if(e=ho(e)){if(typeof ss!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Bi(t),ss(e.stateNode,e.type,t))}}function tf(e){Dn?Mn?Mn.push(e):Mn=[e]:Dn=e}function nf(){if(Dn){var e=Dn,t=Mn;if(Mn=Dn=null,yu(e),t)for(e=0;e<t.length;e++)yu(t[e])}}function rf(e,t){return e(t)}function of(){}var hl=!1;function lf(e,t,n){if(hl)return e(t,n);hl=!0;try{return rf(e,t,n)}finally{hl=!1,(Dn!==null||Mn!==null)&&(of(),nf())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var as=!1;if(pt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){as=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{as=!1}function W0(e,t,n,r,o,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Tr=!1,ui=null,ci=!1,us=null,U0={onError:function(e){Tr=!0,ui=e}};function V0(e,t,n,r,o,i,s,a,u){Tr=!1,ui=null,W0.apply(U0,arguments)}function H0(e,t,n,r,o,i,s,a,u){if(V0.apply(this,arguments),Tr){if(Tr){var c=ui;Tr=!1,ui=null}else throw Error(P(198));ci||(ci=!0,us=c)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vu(e){if(yn(e)!==e)throw Error(P(188))}function K0(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return vu(o),e;if(i===r)return vu(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function af(e){return e=K0(e),e!==null?uf(e):null}function uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uf(e);if(t!==null)return t;e=e.sibling}return null}var cf=Re.unstable_scheduleCallback,wu=Re.unstable_cancelCallback,Q0=Re.unstable_shouldYield,G0=Re.unstable_requestPaint,te=Re.unstable_now,Y0=Re.unstable_getCurrentPriorityLevel,ha=Re.unstable_ImmediatePriority,df=Re.unstable_UserBlockingPriority,di=Re.unstable_NormalPriority,J0=Re.unstable_LowPriority,ff=Re.unstable_IdlePriority,Oi=null,rt=null;function X0(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Oi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:em,Z0=Math.log,q0=Math.LN2;function em(e){return e>>>=0,e===0?32:31-(Z0(e)/q0|0)|0}var So=64,jo=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Sr(a):(i&=s,i!==0&&(r=Sr(i)))}else s=n&~o,s!==0?r=Sr(s):i!==0&&(r=Sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Je(i),a=1<<s,u=o[s];u===-1?(!(a&n)||a&r)&&(o[s]=tm(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pf(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function rm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function hf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mf,ga,gf,xf,yf,ds=!1,Co=[],Mt=null,Ot=null,_t=null,Ur=new Map,Vr=new Map,Pt=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function dr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ho(t),t!==null&&ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function im(e,t,n,r,o){switch(t){case"focusin":return Mt=dr(Mt,e,t,n,r,o),!0;case"dragenter":return Ot=dr(Ot,e,t,n,r,o),!0;case"mouseover":return _t=dr(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ur.set(i,dr(Ur.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Vr.set(i,dr(Vr.get(i)||null,e,t,n,r,o)),!0}return!1}function vf(e){var t=on(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=sf(n),t!==null){e.blockedOn=t,yf(e.priority,function(){gf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ls=r,n.target.dispatchEvent(r),ls=null}else return t=ho(n),t!==null&&ga(t),e.blockedOn=n,!1;t.shift()}return!0}function bu(e,t,n){Qo(e)&&n.delete(t)}function lm(){ds=!1,Mt!==null&&Qo(Mt)&&(Mt=null),Ot!==null&&Qo(Ot)&&(Ot=null),_t!==null&&Qo(_t)&&(_t=null),Ur.forEach(bu),Vr.forEach(bu)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,ds||(ds=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,lm)))}function Hr(e){function t(o){return fr(o,e)}if(0<Co.length){fr(Co[0],e);for(var n=1;n<Co.length;n++){var r=Co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&fr(Mt,e),Ot!==null&&fr(Ot,e),_t!==null&&fr(_t,e),Ur.forEach(t),Vr.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)vf(n),n.blockedOn===null&&Pt.shift()}var On=xt.ReactCurrentBatchConfig,pi=!0;function sm(e,t,n,r){var o=F,i=On.transition;On.transition=null;try{F=1,xa(e,t,n,r)}finally{F=o,On.transition=i}}function am(e,t,n,r){var o=F,i=On.transition;On.transition=null;try{F=4,xa(e,t,n,r)}finally{F=o,On.transition=i}}function xa(e,t,n,r){if(pi){var o=fs(e,t,n,r);if(o===null)Cl(e,t,r,hi,n),ku(e,r);else if(im(o,e,t,n,r))r.stopPropagation();else if(ku(e,r),t&4&&-1<om.indexOf(e)){for(;o!==null;){var i=ho(o);if(i!==null&&mf(i),i=fs(e,t,n,r),i===null&&Cl(e,t,r,hi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Cl(e,t,r,null,n)}}var hi=null;function fs(e,t,n,r){if(hi=null,e=pa(r),e=on(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hi=e,null}function wf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y0()){case ha:return 1;case df:return 4;case di:case J0:return 16;case ff:return 536870912;default:return 16}default:return 16}}var Lt=null,ya=null,Go=null;function kf(){if(Go)return Go;var e,t=ya,n=t.length,r,o="value"in Lt?Lt.value:Lt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Go=o.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function Su(){return!1}function Ne(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$o:Su,this.isPropagationStopped=Su,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Ne(tr),po=X({},tr,{view:0,detail:0}),um=Ne(po),gl,xl,pr,_i=X({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(gl=e.screenX-pr.screenX,xl=e.screenY-pr.screenY):xl=gl=0,pr=e),gl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),ju=Ne(_i),cm=X({},_i,{dataTransfer:0}),dm=Ne(cm),fm=X({},po,{relatedTarget:0}),yl=Ne(fm),pm=X({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=Ne(pm),mm=X({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=Ne(mm),xm=X({},tr,{data:0}),Cu=Ne(xm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wm[e])?!!t[e]:!1}function wa(){return km}var bm=X({},po,{key:function(e){if(e.key){var t=ym[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sm=Ne(bm),jm=X({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$u=Ne(jm),Cm=X({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),$m=Ne(Cm),Em=X({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pm=Ne(Em),Tm=X({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lm=Ne(Tm),Im=[9,13,27,32],ka=pt&&"CompositionEvent"in window,Lr=null;pt&&"documentMode"in document&&(Lr=document.documentMode);var Rm=pt&&"TextEvent"in window&&!Lr,bf=pt&&(!ka||Lr&&8<Lr&&11>=Lr),Eu=" ",Pu=!1;function Sf(e,t){switch(e){case"keyup":return Im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function zm(e,t){switch(e){case"compositionend":return jf(t);case"keypress":return t.which!==32?null:(Pu=!0,Eu);case"textInput":return e=t.data,e===Eu&&Pu?null:e;default:return null}}function Nm(e,t){if(jn)return e==="compositionend"||!ka&&Sf(e,t)?(e=kf(),Go=ya=Lt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bf&&t.locale!=="ko"?null:t.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dm[e.type]:t==="textarea"}function Cf(e,t,n,r){tf(r),t=mi(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Kr=null;function Mm(e){Mf(e,0)}function Ai(e){var t=En(e);if(Gd(t))return e}function Om(e,t){if(e==="change")return t}var $f=!1;if(pt){var vl;if(pt){var wl="oninput"in document;if(!wl){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),wl=typeof Lu.oninput=="function"}vl=wl}else vl=!1;$f=vl&&(!document.documentMode||9<document.documentMode)}function Iu(){Ir&&(Ir.detachEvent("onpropertychange",Ef),Kr=Ir=null)}function Ef(e){if(e.propertyName==="value"&&Ai(Kr)){var t=[];Cf(t,Kr,e,pa(e)),lf(Mm,t)}}function _m(e,t,n){e==="focusin"?(Iu(),Ir=t,Kr=n,Ir.attachEvent("onpropertychange",Ef)):e==="focusout"&&Iu()}function Am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(Kr)}function Fm(e,t){if(e==="click")return Ai(t)}function Bm(e,t){if(e==="input"||e==="change")return Ai(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Wm;function Qr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Gl.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var n=Ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ru(n)}}function Pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tf(){for(var e=window,t=ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ai(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Um(e){var t=Tf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pf(n.ownerDocument.documentElement,n)){if(r!==null&&ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=zu(n,i);var s=zu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vm=pt&&"documentMode"in document&&11>=document.documentMode,Cn=null,ps=null,Rr=null,hs=!1;function Nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hs||Cn==null||Cn!==ai(r)||(r=Cn,"selectionStart"in r&&ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Qr(Rr,r)||(Rr=r,r=mi(ps,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function Eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},kl={},Lf={};pt&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Fi(e){if(kl[e])return kl[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lf)return kl[e]=t[n];return e}var If=Fi("animationend"),Rf=Fi("animationiteration"),zf=Fi("animationstart"),Nf=Fi("transitionend"),Df=new Map,Du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Df.set(e,t),xn(t,[e])}for(var bl=0;bl<Du.length;bl++){var Sl=Du[bl],Hm=Sl.toLowerCase(),Km=Sl[0].toUpperCase()+Sl.slice(1);Yt(Hm,"on"+Km)}Yt(If,"onAnimationEnd");Yt(Rf,"onAnimationIteration");Yt(zf,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Nf,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function Mu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,H0(r,t,void 0,e),e.currentTarget=null}function Mf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Mu(o,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Mu(o,a,c),i=u}}}if(ci)throw e=us,ci=!1,us=null,e}function V(e,t){var n=t[vs];n===void 0&&(n=t[vs]=new Set);var r=e+"__bubble";n.has(r)||(Of(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),Of(n,e,r,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Po]){e[Po]=!0,Ud.forEach(function(n){n!=="selectionchange"&&(Qm.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,jl("selectionchange",!1,t))}}function Of(e,t,n,r){switch(wf(t)){case 1:var o=sm;break;case 4:o=am;break;default:o=xa}n=o.bind(null,t,n,e),o=void 0,!as||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Cl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;a!==null;){if(s=on(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}lf(function(){var c=i,p=pa(n),h=[];e:{var x=Df.get(e);if(x!==void 0){var w=va,y=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":w=Sm;break;case"focusin":y="focus",w=yl;break;case"focusout":y="blur",w=yl;break;case"beforeblur":case"afterblur":w=yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=$m;break;case If:case Rf:case zf:w=hm;break;case Nf:w=Pm;break;case"scroll":w=um;break;case"wheel":w=Lm;break;case"copy":case"cut":case"paste":w=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=$u}var S=(t&4)!==0,$=!S&&e==="scroll",m=S?x!==null?x+"Capture":null:x;S=[];for(var d=c,g;d!==null;){g=d;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,m!==null&&(k=Wr(d,m),k!=null&&S.push(Yr(d,k,g)))),$)break;d=d.return}0<S.length&&(x=new w(x,y,null,n,p),h.push({event:x,listeners:S}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",x&&n!==ls&&(y=n.relatedTarget||n.fromElement)&&(on(y)||y[ht]))break e;if((w||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?on(y):null,y!==null&&($=yn(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(S=ju,k="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=$u,k="onPointerLeave",m="onPointerEnter",d="pointer"),$=w==null?x:En(w),g=y==null?x:En(y),x=new S(k,d+"leave",w,n,p),x.target=$,x.relatedTarget=g,k=null,on(p)===c&&(S=new S(m,d+"enter",y,n,p),S.target=g,S.relatedTarget=$,k=S),$=k,w&&y)t:{for(S=w,m=y,d=0,g=S;g;g=vn(g))d++;for(g=0,k=m;k;k=vn(k))g++;for(;0<d-g;)S=vn(S),d--;for(;0<g-d;)m=vn(m),g--;for(;d--;){if(S===m||m!==null&&S===m.alternate)break t;S=vn(S),m=vn(m)}S=null}else S=null;w!==null&&Ou(h,x,w,S,!1),y!==null&&$!==null&&Ou(h,$,y,S,!0)}}e:{if(x=c?En(c):window,w=x.nodeName&&x.nodeName.toLowerCase(),w==="select"||w==="input"&&x.type==="file")var v=Om;else if(Tu(x))if($f)v=Bm;else{v=Am;var C=_m}else(w=x.nodeName)&&w.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(v=Fm);if(v&&(v=v(e,c))){Cf(h,v,n,p);break e}C&&C(e,x,c),e==="focusout"&&(C=x._wrapperState)&&C.controlled&&x.type==="number"&&ts(x,"number",x.value)}switch(C=c?En(c):window,e){case"focusin":(Tu(C)||C.contentEditable==="true")&&(Cn=C,ps=c,Rr=null);break;case"focusout":Rr=ps=Cn=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,Nu(h,n,p);break;case"selectionchange":if(Vm)break;case"keydown":case"keyup":Nu(h,n,p)}var j;if(ka)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else jn?Sf(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(bf&&n.locale!=="ko"&&(jn||E!=="onCompositionStart"?E==="onCompositionEnd"&&jn&&(j=kf()):(Lt=p,ya="value"in Lt?Lt.value:Lt.textContent,jn=!0)),C=mi(c,E),0<C.length&&(E=new Cu(E,e,null,n,p),h.push({event:E,listeners:C}),j?E.data=j:(j=jf(n),j!==null&&(E.data=j)))),(j=Rm?zm(e,n):Nm(e,n))&&(c=mi(c,"onBeforeInput"),0<c.length&&(p=new Cu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=j))}Mf(h,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wr(e,n),i!=null&&r.unshift(Yr(e,i,o)),i=Wr(e,t),i!=null&&r.push(Yr(e,i,o))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=Wr(n,i),u!=null&&s.unshift(Yr(n,u,a))):o||(u=Wr(n,i),u!=null&&s.push(Yr(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function _u(e){return(typeof e=="string"?e:""+e).replace(Gm,`
`).replace(Ym,"")}function To(e,t,n){if(t=_u(t),_u(e)!==t&&n)throw Error(P(425))}function gi(){}var ms=null,gs=null;function xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ys=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,Au=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof Au<"u"?function(e){return Au.resolve(null).then(e).catch(Zm)}:ys;function Zm(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Hr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),nt="__reactFiber$"+nr,Jr="__reactProps$"+nr,ht="__reactContainer$"+nr,vs="__reactEvents$"+nr,qm="__reactListeners$"+nr,eg="__reactHandles$"+nr;function on(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fu(e);e!==null;){if(n=e[nt])return n;e=Fu(e)}return t}e=n,n=e.parentNode}return null}function ho(e){return e=e[nt]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Bi(e){return e[Jr]||null}var ws=[],Pn=-1;function Jt(e){return{current:e}}function K(e){0>Pn||(e.current=ws[Pn],ws[Pn]=null,Pn--)}function U(e,t){Pn++,ws[Pn]=e.current,e.current=t}var Qt={},ye=Jt(Qt),Ce=Jt(!1),dn=Qt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function xi(){K(Ce),K(ye)}function Bu(e,t,n){if(ye.current!==Qt)throw Error(P(168));U(ye,t),U(Ce,n)}function _f(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,_0(e)||"Unknown",o));return X({},n,r)}function yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,dn=ye.current,U(ye,e),U(Ce,Ce.current),!0}function Wu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=_f(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,K(Ce),K(ye),U(ye,e)):K(Ce),U(Ce,n)}var ut=null,Wi=!1,El=!1;function Af(e){ut===null?ut=[e]:ut.push(e)}function tg(e){Wi=!0,Af(e)}function Xt(){if(!El&&ut!==null){El=!0;var e=0,t=F;try{var n=ut;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,Wi=!1}catch(o){throw ut!==null&&(ut=ut.slice(e+1)),cf(ha,Xt),o}finally{F=t,El=!1}}return null}var Tn=[],Ln=0,vi=null,wi=0,Me=[],Oe=0,fn=null,ct=1,dt="";function en(e,t){Tn[Ln++]=wi,Tn[Ln++]=vi,vi=e,wi=t}function Ff(e,t,n){Me[Oe++]=ct,Me[Oe++]=dt,Me[Oe++]=fn,fn=e;var r=ct;e=dt;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,ct=1<<32-Je(t)+o|n<<o|r,dt=i+e}else ct=1<<i|n<<o|r,dt=e}function Sa(e){e.return!==null&&(en(e,1),Ff(e,1,0))}function ja(e){for(;e===vi;)vi=Tn[--Ln],Tn[Ln]=null,wi=Tn[--Ln],Tn[Ln]=null;for(;e===fn;)fn=Me[--Oe],Me[Oe]=null,dt=Me[--Oe],Me[Oe]=null,ct=Me[--Oe],Me[Oe]=null}var Ie=null,Le=null,Q=!1,Ye=null;function Bf(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Le=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Le=null,!0):!1;default:return!1}}function ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bs(e){if(Q){var t=Le;if(t){var n=t;if(!Uu(e,t)){if(ks(e))throw Error(P(418));t=At(n.nextSibling);var r=Ie;t&&Uu(e,t)?Bf(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ie=e)}}else{if(ks(e))throw Error(P(418));e.flags=e.flags&-4097|2,Q=!1,Ie=e}}}function Vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Lo(e){if(e!==Ie)return!1;if(!Q)return Vu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xs(e.type,e.memoizedProps)),t&&(t=Le)){if(ks(e))throw Wf(),Error(P(418));for(;t;)Bf(e,t),t=At(t.nextSibling)}if(Vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Ie?At(e.stateNode.nextSibling):null;return!0}function Wf(){for(var e=Le;e;)e=At(e.nextSibling)}function Un(){Le=Ie=null,Q=!1}function Ca(e){Ye===null?Ye=[e]:Ye.push(e)}var ng=xt.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function Uf(e){function t(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=Ut(m,d),m.index=0,m.sibling=null,m}function i(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,k){return d===null||d.tag!==6?(d=Nl(g,m.mode,k),d.return=m,d):(d=o(d,g),d.return=m,d)}function u(m,d,g,k){var v=g.type;return v===Sn?p(m,d,g.props.children,k,g.key):d!==null&&(d.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===$t&&Hu(v)===d.type)?(k=o(d,g.props),k.ref=hr(m,d,g),k.return=m,k):(k=ni(g.type,g.key,g.props,null,m.mode,k),k.ref=hr(m,d,g),k.return=m,k)}function c(m,d,g,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Dl(g,m.mode,k),d.return=m,d):(d=o(d,g.children||[]),d.return=m,d)}function p(m,d,g,k,v){return d===null||d.tag!==7?(d=un(g,m.mode,k,v),d.return=m,d):(d=o(d,g),d.return=m,d)}function h(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Nl(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wo:return g=ni(d.type,d.key,d.props,null,m.mode,g),g.ref=hr(m,null,d),g.return=m,g;case bn:return d=Dl(d,m.mode,g),d.return=m,d;case $t:var k=d._init;return h(m,k(d._payload),g)}if(br(d)||ur(d))return d=un(d,m.mode,g,null),d.return=m,d;Io(m,d)}return null}function x(m,d,g,k){var v=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return v!==null?null:a(m,d,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wo:return g.key===v?u(m,d,g,k):null;case bn:return g.key===v?c(m,d,g,k):null;case $t:return v=g._init,x(m,d,v(g._payload),k)}if(br(g)||ur(g))return v!==null?null:p(m,d,g,k,null);Io(m,g)}return null}function w(m,d,g,k,v){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(g)||null,a(d,m,""+k,v);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case wo:return m=m.get(k.key===null?g:k.key)||null,u(d,m,k,v);case bn:return m=m.get(k.key===null?g:k.key)||null,c(d,m,k,v);case $t:var C=k._init;return w(m,d,g,C(k._payload),v)}if(br(k)||ur(k))return m=m.get(g)||null,p(d,m,k,v,null);Io(d,k)}return null}function y(m,d,g,k){for(var v=null,C=null,j=d,E=d=0,M=null;j!==null&&E<g.length;E++){j.index>E?(M=j,j=null):M=j.sibling;var z=x(m,j,g[E],k);if(z===null){j===null&&(j=M);break}e&&j&&z.alternate===null&&t(m,j),d=i(z,d,E),C===null?v=z:C.sibling=z,C=z,j=M}if(E===g.length)return n(m,j),Q&&en(m,E),v;if(j===null){for(;E<g.length;E++)j=h(m,g[E],k),j!==null&&(d=i(j,d,E),C===null?v=j:C.sibling=j,C=j);return Q&&en(m,E),v}for(j=r(m,j);E<g.length;E++)M=w(j,m,E,g[E],k),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?E:M.key),d=i(M,d,E),C===null?v=M:C.sibling=M,C=M);return e&&j.forEach(function(W){return t(m,W)}),Q&&en(m,E),v}function S(m,d,g,k){var v=ur(g);if(typeof v!="function")throw Error(P(150));if(g=v.call(g),g==null)throw Error(P(151));for(var C=v=null,j=d,E=d=0,M=null,z=g.next();j!==null&&!z.done;E++,z=g.next()){j.index>E?(M=j,j=null):M=j.sibling;var W=x(m,j,z.value,k);if(W===null){j===null&&(j=M);break}e&&j&&W.alternate===null&&t(m,j),d=i(W,d,E),C===null?v=W:C.sibling=W,C=W,j=M}if(z.done)return n(m,j),Q&&en(m,E),v;if(j===null){for(;!z.done;E++,z=g.next())z=h(m,z.value,k),z!==null&&(d=i(z,d,E),C===null?v=z:C.sibling=z,C=z);return Q&&en(m,E),v}for(j=r(m,j);!z.done;E++,z=g.next())z=w(j,m,E,z.value,k),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?E:z.key),d=i(z,d,E),C===null?v=z:C.sibling=z,C=z);return e&&j.forEach(function(Ue){return t(m,Ue)}),Q&&en(m,E),v}function $(m,d,g,k){if(typeof g=="object"&&g!==null&&g.type===Sn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wo:e:{for(var v=g.key,C=d;C!==null;){if(C.key===v){if(v=g.type,v===Sn){if(C.tag===7){n(m,C.sibling),d=o(C,g.props.children),d.return=m,m=d;break e}}else if(C.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===$t&&Hu(v)===C.type){n(m,C.sibling),d=o(C,g.props),d.ref=hr(m,C,g),d.return=m,m=d;break e}n(m,C);break}else t(m,C);C=C.sibling}g.type===Sn?(d=un(g.props.children,m.mode,k,g.key),d.return=m,m=d):(k=ni(g.type,g.key,g.props,null,m.mode,k),k.ref=hr(m,d,g),k.return=m,m=k)}return s(m);case bn:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=o(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Dl(g,m.mode,k),d.return=m,m=d}return s(m);case $t:return C=g._init,$(m,d,C(g._payload),k)}if(br(g))return y(m,d,g,k);if(ur(g))return S(m,d,g,k);Io(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,g),d.return=m,m=d):(n(m,d),d=Nl(g,m.mode,k),d.return=m,m=d),s(m)):n(m,d)}return $}var Vn=Uf(!0),Vf=Uf(!1),ki=Jt(null),bi=null,In=null,$a=null;function Ea(){$a=In=bi=null}function Pa(e){var t=ki.current;K(ki),e._currentValue=t}function Ss(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){bi=e,$a=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(bi===null)throw Error(P(308));In=e,bi.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var ln=null;function Ta(e){ln===null?ln=[e]:ln.push(e)}function Hf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ta(t)):(n.next=o.next,o.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ta(r)):(t.next=o.next,o.next=t),r.interleaved=t,mt(e,n)}function Jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}function Ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Si(e,t,n,r){var o=e.updateQueue;Et=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;s=0,p=c=u=null,a=i;do{var x=a.lane,w=a.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,S=a;switch(x=t,w=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){h=y.call(w,h,x);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,x=typeof y=="function"?y.call(w,h,x):y,x==null)break e;h=X({},h,x);break e;case 2:Et=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[a]:x.push(a))}else w={eventTime:w,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=w,u=h):p=p.next=w,s|=x;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;x=a,a=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);hn|=s,e.lanes=s,e.memoizedState=h}}function Qu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var mo={},ot=Jt(mo),Xr=Jt(mo),Zr=Jt(mo);function sn(e){if(e===mo)throw Error(P(174));return e}function Ia(e,t){switch(U(Zr,t),U(Xr,e),U(ot,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rs(t,e)}K(ot),U(ot,t)}function Hn(){K(ot),K(Xr),K(Zr)}function Qf(e){sn(Zr.current);var t=sn(ot.current),n=rs(t,e.type);t!==n&&(U(Xr,e),U(ot,n))}function Ra(e){Xr.current===e&&(K(ot),K(Xr))}var G=Jt(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pl=[];function za(){for(var e=0;e<Pl.length;e++)Pl[e]._workInProgressVersionPrimary=null;Pl.length=0}var Xo=xt.ReactCurrentDispatcher,Tl=xt.ReactCurrentBatchConfig,pn=0,Y=null,le=null,ue=null,Ci=!1,zr=!1,qr=0,rg=0;function he(){throw Error(P(321))}function Na(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Da(e,t,n,r,o,i){if(pn=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?sg:ag,e=n(r,o),zr){i=0;do{if(zr=!1,qr=0,25<=i)throw Error(P(301));i+=1,ue=le=null,t.updateQueue=null,Xo.current=ug,e=n(r,o)}while(zr)}if(Xo.current=$i,t=le!==null&&le.next!==null,pn=0,ue=le=Y=null,Ci=!1,t)throw Error(P(300));return e}function Ma(){var e=qr!==0;return qr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=e:ue=ue.next=e,ue}function Be(){if(le===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?Y.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(P(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Y.memoizedState=ue=e:ue=ue.next=e}return ue}function eo(e,t){return typeof t=="function"?t(e):t}function Ll(e){var t=Be(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,u=null,c=i;do{var p=c.lane;if((pn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,s=r):u=u.next=h,Y.lanes|=p,hn|=p}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,qe(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,hn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=Be(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);qe(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gf(){}function Yf(e,t){var n=Y,r=Be(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,Oa(Zf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,to(9,Xf.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(P(349));pn&30||Jf(n,t,o)}return o}function Jf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xf(e,t,n,r){t.value=n,t.getSnapshot=r,qf(t)&&ep(e)}function Zf(e,t,n){return n(function(){qf(t)&&ep(e)})}function qf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function ep(e){var t=mt(e,1);t!==null&&Xe(t,e,1,-1)}function Gu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=e,e=e.dispatch=lg.bind(null,Y,e),[t.memoizedState,e]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tp(){return Be().memoizedState}function Zo(e,t,n,r){var o=tt();Y.flags|=e,o.memoizedState=to(1|t,n,void 0,r===void 0?null:r)}function Ui(e,t,n,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(le!==null){var s=le.memoizedState;if(i=s.destroy,r!==null&&Na(r,s.deps)){o.memoizedState=to(t,n,i,r);return}}Y.flags|=e,o.memoizedState=to(1|t,n,i,r)}function Yu(e,t){return Zo(8390656,8,e,t)}function Oa(e,t){return Ui(2048,8,e,t)}function np(e,t){return Ui(4,2,e,t)}function rp(e,t){return Ui(4,4,e,t)}function op(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4,4,op.bind(null,t,e),n)}function _a(){}function lp(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sp(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ap(e,t,n){return pn&21?(qe(n,t)||(n=pf(),Y.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function og(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Tl.transition;Tl.transition={};try{e(!1),t()}finally{F=n,Tl.transition=r}}function up(){return Be().memoizedState}function ig(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cp(e))dp(t,n);else if(n=Hf(e,t,n,r),n!==null){var o=we();Xe(n,e,r,o),fp(n,t,r)}}function lg(e,t,n){var r=Wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cp(e))dp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,qe(a,s)){var u=t.interleaved;u===null?(o.next=o,Ta(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Hf(e,t,o,r),n!==null&&(o=we(),Xe(n,e,r,o),fp(n,t,r))}}function cp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function dp(e,t){zr=Ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}var $i={readContext:Fe,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},sg={readContext:Fe,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,op.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ig.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:Gu,useDebugValue:_a,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=Gu(!1),t=e[0];return e=og.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=tt();if(Q){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ce===null)throw Error(P(349));pn&30||Jf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Yu(Zf.bind(null,r,i,e),[e]),r.flags|=2048,to(9,Xf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ce.identifierPrefix;if(Q){var n=dt,r=ct;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ag={readContext:Fe,useCallback:lp,useContext:Fe,useEffect:Oa,useImperativeHandle:ip,useInsertionEffect:np,useLayoutEffect:rp,useMemo:sp,useReducer:Ll,useRef:tp,useState:function(){return Ll(eo)},useDebugValue:_a,useDeferredValue:function(e){var t=Be();return ap(t,le.memoizedState,e)},useTransition:function(){var e=Ll(eo)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Gf,useSyncExternalStore:Yf,useId:up,unstable_isNewReconciler:!1},ug={readContext:Fe,useCallback:lp,useContext:Fe,useEffect:Oa,useImperativeHandle:ip,useInsertionEffect:np,useLayoutEffect:rp,useMemo:sp,useReducer:Il,useRef:tp,useState:function(){return Il(eo)},useDebugValue:_a,useDeferredValue:function(e){var t=Be();return le===null?t.memoizedState=e:ap(t,le.memoizedState,e)},useTransition:function(){var e=Il(eo)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Gf,useSyncExternalStore:Yf,useId:up,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function js(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vi={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Wt(e),i=ft(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(Xe(t,e,o,r),Jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Wt(e),i=ft(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(Xe(t,e,o,r),Jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Wt(e),o=ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(Xe(t,e,r,n),Jo(t,e,r))}};function Ju(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(o,i):!0}function pp(e,t,n){var r=!1,o=Qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(o=$e(t)?dn:ye.current,r=t.contextTypes,i=(r=r!=null)?Wn(e,o):Qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vi.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},La(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Fe(i):(i=$e(t)?dn:ye.current,o.context=Wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(js(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Vi.enqueueReplaceState(o,o.state,null),Si(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=O0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cg=typeof WeakMap=="function"?WeakMap:Map;function hp(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pi||(Pi=!0,Ms=r),$s(e,t)},n}function mp(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$s(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$s(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jg.bind(null,e,t,n),t.then(e,e))}function qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ec(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var dg=xt.ReactCurrentOwner,je=!1;function ve(e,t,n,r){t.child=e===null?Vf(t,null,n,r):Vn(t,e.child,n,r)}function tc(e,t,n,r,o){n=n.render;var i=t.ref;return _n(t,o),r=Da(e,t,n,r,i,o),n=Ma(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(Q&&n&&Sa(t),t.flags|=1,ve(e,t,r,o),t.child)}function nc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ka(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gp(e,t,i,r,o)):(e=ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(s,r)&&e.ref===t.ref)return gt(e,t,o)}return t.flags|=1,e=Ut(i,r),e.ref=t.ref,e.return=t,t.child=e}function gp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Qr(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,gt(e,t,o)}return Es(e,t,n,r,o)}function xp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(zn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(zn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(zn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(zn,Te),Te|=r;return ve(e,t,o,n),t.child}function yp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,n,r,o){var i=$e(n)?dn:ye.current;return i=Wn(t,i),_n(t,o),n=Da(e,t,n,r,i,o),r=Ma(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(Q&&r&&Sa(t),t.flags|=1,ve(e,t,n,o),t.child)}function rc(e,t,n,r,o){if($e(n)){var i=!0;yi(t)}else i=!1;if(_n(t,o),t.stateNode===null)qo(e,t),pp(t,n,r),Cs(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=$e(n)?dn:ye.current,c=Wn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Xu(t,s,r,c),Et=!1;var x=t.memoizedState;s.state=x,Si(t,r,s,o),u=t.memoizedState,a!==r||x!==u||Ce.current||Et?(typeof p=="function"&&(js(t,n,p,r),u=t.memoizedState),(a=Et||Ju(t,n,a,r,x,u,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Kf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ke(t.type,a),s.props=c,h=t.pendingProps,x=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=$e(n)?dn:ye.current,u=Wn(t,u));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||x!==u)&&Xu(t,s,r,u),Et=!1,x=t.memoizedState,s.state=x,Si(t,r,s,o);var y=t.memoizedState;a!==h||x!==y||Ce.current||Et?(typeof w=="function"&&(js(t,n,w,r),y=t.memoizedState),(c=Et||Ju(t,n,c,r,x,y,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ps(e,t,n,r,i,o)}function Ps(e,t,n,r,o,i){yp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Wu(t,n,!1),gt(e,t,i);r=t.stateNode,dg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Vn(t,e.child,null,i),t.child=Vn(t,null,a,i)):ve(e,t,a,i),t.memoizedState=r.state,o&&Wu(t,n,!0),t.child}function vp(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),Ia(e,t.containerInfo)}function oc(e,t,n,r,o){return Un(),Ca(o),t.flags|=256,ve(e,t,n,r),t.child}var Ts={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function wp(e,t,n){var r=t.pendingProps,o=G.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(G,o&1),e===null)return bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Qi(s,r,0,null),e=un(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ls(n),t.memoizedState=Ts,e):Aa(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return fg(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ut(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Ut(a,i):(i=un(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ls(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ts,r}return i=e.child,e=i.sibling,r=Ut(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Aa(e,t){return t=Qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,n,r){return r!==null&&Ca(r),Vn(t,e.child,null,n),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fg(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Rl(Error(P(422))),Ro(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Qi({mode:"visible",children:r.children},o,0,null),i=un(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Vn(t,e.child,null,s),t.child.memoizedState=Ls(s),t.memoizedState=Ts,i);if(!(t.mode&1))return Ro(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=Rl(i,r,void 0),Ro(e,t,s,r)}if(a=(s&e.childLanes)!==0,je||a){if(r=ce,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,mt(e,o),Xe(r,e,o,-1))}return Ha(),r=Rl(Error(P(421))),Ro(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Cg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=At(o.nextSibling),Ie=t,Q=!0,Ye=null,e!==null&&(Me[Oe++]=ct,Me[Oe++]=dt,Me[Oe++]=fn,ct=e.id,dt=e.overflow,fn=t),t=Aa(t,r.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ss(e.return,t,n)}function zl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function kp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ji(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ji(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zl(t,!0,n,null,i);break;case"together":zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pg(e,t,n){switch(t.tag){case 3:vp(t),Un();break;case 5:Qf(t);break;case 1:$e(t.type)&&yi(t);break;case 4:Ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(ki,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?wp(e,t,n):(U(G,G.current&1),e=gt(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,xp(e,t,n)}return gt(e,t,n)}var bp,Is,Sp,jp;bp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Is=function(){};Sp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,sn(ot.current);var i=null;switch(n){case"input":o=ql(e,o),r=ql(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=ns(e,o),r=ns(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gi)}os(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&V("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};jp=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hg(e,t,n){var r=t.pendingProps;switch(ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return $e(t.type)&&xi(),me(t),null;case 3:return r=t.stateNode,Hn(),K(Ce),K(ye),za(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(As(Ye),Ye=null))),Is(e,t),me(t),null;case 5:Ra(t);var o=sn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Sp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return me(t),null}if(e=sn(ot.current),Lo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[Jr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<jr.length;o++)V(jr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":hu(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":gu(r,i),V("invalid",r)}os(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&To(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&To(r.textContent,a,e),o=["children",""+a]):Fr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":ko(r),mu(r,i,!0);break;case"textarea":ko(r),xu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=gi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[Jr]=r,bp(e,t,!1,!1),t.stateNode=e;e:{switch(s=is(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<jr.length;o++)V(jr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":hu(e,r),o=ql(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":gu(e,r),o=ns(e,r),V("invalid",e);break;default:o=r}os(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ef(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zd(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Br(e,u):typeof u=="number"&&Br(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&ua(e,i,u,s))}switch(n){case"input":ko(e),mu(e,r,!1);break;case"textarea":ko(e),xu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Nn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)jp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=sn(Zr.current),sn(ot.current),Lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return me(t),null;case 13:if(K(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Le!==null&&t.mode&1&&!(t.flags&128))Wf(),Un(),t.flags|=98560,i=!1;else if(i=Lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[nt]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ye!==null&&(As(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ae===0&&(ae=3):Ha())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Hn(),Is(e,t),e===null&&Gr(t.stateNode.containerInfo),me(t),null;case 10:return Pa(t.type._context),me(t),null;case 17:return $e(t.type)&&xi(),me(t),null;case 19:if(K(G),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)mr(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ji(e),s!==null){for(t.flags|=128,mr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Qn&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ji(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Q)return me(t),null}else 2*te()-i.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function mg(e,t){switch(ja(t),t.tag){case 1:return $e(t.type)&&xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),K(Ce),K(ye),za(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ra(t),null;case 13:if(K(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(G),null;case 4:return Hn(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var zo=!1,xe=!1,gg=typeof WeakSet=="function"?WeakSet:Set,L=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Rs(e,t,n){try{n()}catch(r){ee(e,t,r)}}var lc=!1;function xg(e,t){if(ms=pi,e=Tf(),ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,p=0,h=e,x=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(w=h.firstChild)!==null;)x=h,h=w;for(;;){if(h===e)break t;if(x===n&&++c===o&&(a=s),x===i&&++p===r&&(u=s),(w=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},pi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,$=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ke(t.type,S),$);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){ee(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=lc,lc=!1,y}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Rs(t,n,i)}o=o.next}while(o!==r)}}function Hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cp(e){var t=e.alternate;t!==null&&(e.alternate=null,Cp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Jr],delete t[vs],delete t[qm],delete t[eg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $p(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ns(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gi));else if(r!==4&&(e=e.child,e!==null))for(Ns(e,t,n),e=e.sibling;e!==null;)Ns(e,t,n),e=e.sibling}function Ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ds(e,t,n),e=e.sibling;e!==null;)Ds(e,t,n),e=e.sibling}var de=null,Qe=!1;function bt(e,t,n){for(n=n.child;n!==null;)Ep(e,t,n),n=n.sibling}function Ep(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Oi,n)}catch{}switch(n.tag){case 5:xe||Rn(n,t);case 6:var r=de,o=Qe;de=null,bt(e,t,n),de=r,Qe=o,de!==null&&(Qe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Qe?(e=de,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),Hr(e)):$l(de,n.stateNode));break;case 4:r=de,o=Qe,de=n.stateNode.containerInfo,Qe=!0,bt(e,t,n),de=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Rs(n,t,s),o=o.next}while(o!==r)}bt(e,t,n);break;case 1:if(!xe&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,bt(e,t,n),xe=r):bt(e,t,n);break;default:bt(e,t,n)}}function ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gg),t.forEach(function(r){var o=$g.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Qe=!1;break e;case 3:de=a.stateNode.containerInfo,Qe=!0;break e;case 4:de=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(de===null)throw Error(P(160));Ep(i,s,o),de=null,Qe=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pp(t,e),t=t.sibling}function Pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),et(e),r&4){try{Nr(3,e,e.return),Hi(3,e)}catch(S){ee(e,e.return,S)}try{Nr(5,e,e.return)}catch(S){ee(e,e.return,S)}}break;case 1:He(t,e),et(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(He(t,e),et(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var o=e.stateNode;try{Br(o,"")}catch(S){ee(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Yd(o,i),is(a,s);var c=is(a,i);for(s=0;s<u.length;s+=2){var p=u[s],h=u[s+1];p==="style"?ef(o,h):p==="dangerouslySetInnerHTML"?Zd(o,h):p==="children"?Br(o,h):ua(o,p,h,c)}switch(a){case"input":es(o,i);break;case"textarea":Jd(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Nn(o,!!i.multiple,w,!1):x!==!!i.multiple&&(i.defaultValue!=null?Nn(o,!!i.multiple,i.defaultValue,!0):Nn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jr]=i}catch(S){ee(e,e.return,S)}}break;case 6:if(He(t,e),et(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){ee(e,e.return,S)}}break;case 3:if(He(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(S){ee(e,e.return,S)}break;case 4:He(t,e),et(e);break;case 13:He(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Wa=te())),r&4&&ac(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||p,He(t,e),xe=c):He(t,e),et(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(L=e,p=e.child;p!==null;){for(h=L=p;L!==null;){switch(x=L,w=x.child,x.tag){case 0:case 11:case 14:case 15:Nr(4,x,x.return);break;case 1:Rn(x,x.return);var y=x.stateNode;if(typeof y.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){ee(r,n,S)}}break;case 5:Rn(x,x.return);break;case 22:if(x.memoizedState!==null){cc(h);continue}}w!==null?(w.return=x,L=w):cc(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qd("display",s))}catch(S){ee(e,e.return,S)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){ee(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),et(e),r&4&&ac(e);break;case 21:break;default:He(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($p(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Br(o,""),r.flags&=-33);var i=sc(e);Ds(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=sc(e);Ns(e,a,s);break;default:throw Error(P(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yg(e,t,n){L=e,Tp(e)}function Tp(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||zo;if(!s){var a=o.alternate,u=a!==null&&a.memoizedState!==null||xe;a=zo;var c=xe;if(zo=s,(xe=u)&&!c)for(L=o;L!==null;)s=L,u=s.child,s.tag===22&&s.memoizedState!==null?dc(o):u!==null?(u.return=s,L=u):dc(o);for(;i!==null;)L=i,Tp(i),i=i.sibling;L=o,zo=a,xe=c}uc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):uc(e)}}function uc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Qu(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Hr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}xe||t.flags&512&&zs(t)}catch(x){ee(t,t.return,x)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function cc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function dc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hi(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ee(t,o,u)}}var i=t.return;try{zs(t)}catch(u){ee(t,i,u)}break;case 5:var s=t.return;try{zs(t)}catch(u){ee(t,s,u)}}}catch(u){ee(t,t.return,u)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var vg=Math.ceil,Ei=xt.ReactCurrentDispatcher,Fa=xt.ReactCurrentOwner,Ae=xt.ReactCurrentBatchConfig,O=0,ce=null,oe=null,fe=0,Te=0,zn=Jt(0),ae=0,no=null,hn=0,Ki=0,Ba=0,Dr=null,Se=null,Wa=0,Qn=1/0,lt=null,Pi=!1,Ms=null,Bt=null,No=!1,It=null,Ti=0,Mr=0,Os=null,ei=-1,ti=0;function we(){return O&6?te():ei!==-1?ei:ei=te()}function Wt(e){return e.mode&1?O&2&&fe!==0?fe&-fe:ng.transition!==null?(ti===0&&(ti=pf()),ti):(e=F,e!==0||(e=window.event,e=e===void 0?16:wf(e.type)),e):1}function Xe(e,t,n,r){if(50<Mr)throw Mr=0,Os=null,Error(P(185));fo(e,n,r),(!(O&2)||e!==ce)&&(e===ce&&(!(O&2)&&(Ki|=n),ae===4&&Tt(e,fe)),Ee(e,r),n===1&&O===0&&!(t.mode&1)&&(Qn=te()+500,Wi&&Xt()))}function Ee(e,t){var n=e.callbackNode;nm(e,t);var r=fi(e,e===ce?fe:0);if(r===0)n!==null&&wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wu(n),t===1)e.tag===0?tg(fc.bind(null,e)):Af(fc.bind(null,e)),Xm(function(){!(O&6)&&Xt()}),n=null;else{switch(hf(r)){case 1:n=ha;break;case 4:n=df;break;case 16:n=di;break;case 536870912:n=ff;break;default:n=di}n=Op(n,Lp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lp(e,t){if(ei=-1,ti=0,O&6)throw Error(P(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=fi(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var o=O;O|=2;var i=Rp();(ce!==e||fe!==t)&&(lt=null,Qn=te()+500,an(e,t));do try{bg();break}catch(a){Ip(e,a)}while(!0);Ea(),Ei.current=i,O=o,oe!==null?t=0:(ce=null,fe=0,t=ae)}if(t!==0){if(t===2&&(o=cs(e),o!==0&&(r=o,t=_s(e,o))),t===1)throw n=no,an(e,0),Tt(e,r),Ee(e,te()),n;if(t===6)Tt(e,r);else{if(o=e.current.alternate,!(r&30)&&!wg(o)&&(t=Li(e,r),t===2&&(i=cs(e),i!==0&&(r=i,t=_s(e,i))),t===1))throw n=no,an(e,0),Tt(e,r),Ee(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:tn(e,Se,lt);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=Wa+500-te(),10<t)){if(fi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ys(tn.bind(null,e,Se,lt),t);break}tn(e,Se,lt);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Je(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vg(r/1960))-r,10<r){e.timeoutHandle=ys(tn.bind(null,e,Se,lt),r);break}tn(e,Se,lt);break;case 5:tn(e,Se,lt);break;default:throw Error(P(329))}}}return Ee(e,te()),e.callbackNode===n?Lp.bind(null,e):null}function _s(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Li(e,t),e!==2&&(t=Se,Se=n,t!==null&&As(t)),e}function As(e){Se===null?Se=e:Se.push.apply(Se,e)}function wg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Ba,t&=~Ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if(O&6)throw Error(P(327));An();var t=fi(e,0);if(!(t&1))return Ee(e,te()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=cs(e);r!==0&&(t=r,n=_s(e,r))}if(n===1)throw n=no,an(e,0),Tt(e,t),Ee(e,te()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Se,lt),Ee(e,te()),null}function Ua(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Qn=te()+500,Wi&&Xt())}}function mn(e){It!==null&&It.tag===0&&!(O&6)&&An();var t=O;O|=1;var n=Ae.transition,r=F;try{if(Ae.transition=null,F=1,e)return e()}finally{F=r,Ae.transition=n,O=t,!(O&6)&&Xt()}}function Va(){Te=zn.current,K(zn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jm(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xi();break;case 3:Hn(),K(Ce),K(ye),za();break;case 5:Ra(r);break;case 4:Hn();break;case 13:K(G);break;case 19:K(G);break;case 10:Pa(r.type._context);break;case 22:case 23:Va()}n=n.return}if(ce=e,oe=e=Ut(e.current,null),fe=Te=t,ae=0,no=null,Ba=Ki=hn=0,Se=Dr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}ln=null}return e}function Ip(e,t){do{var n=oe;try{if(Ea(),Xo.current=$i,Ci){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ci=!1}if(pn=0,ue=le=Y=null,zr=!1,qr=0,Fa.current=null,n===null||n.return===null){ae=1,no=t,oe=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=fe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=qu(s);if(w!==null){w.flags&=-257,ec(w,s,a,i,t),w.mode&1&&Zu(i,c,t),t=w,u=c;var y=t.updateQueue;if(y===null){var S=new Set;S.add(u),t.updateQueue=S}else y.add(u);break e}else{if(!(t&1)){Zu(i,c,t),Ha();break e}u=Error(P(426))}}else if(Q&&a.mode&1){var $=qu(s);if($!==null){!($.flags&65536)&&($.flags|=256),ec($,s,a,i,t),Ca(Kn(u,a));break e}}i=u=Kn(u,a),ae!==4&&(ae=2),Dr===null?Dr=[i]:Dr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=hp(i,u,t);Ku(i,m);break e;case 1:a=u;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bt===null||!Bt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=mp(i,a,t);Ku(i,k);break e}}i=i.return}while(i!==null)}Np(n)}catch(v){t=v,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Rp(){var e=Ei.current;return Ei.current=$i,e===null?$i:e}function Ha(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(hn&268435455)&&!(Ki&268435455)||Tt(ce,fe)}function Li(e,t){var n=O;O|=2;var r=Rp();(ce!==e||fe!==t)&&(lt=null,an(e,t));do try{kg();break}catch(o){Ip(e,o)}while(!0);if(Ea(),O=n,Ei.current=r,oe!==null)throw Error(P(261));return ce=null,fe=0,ae}function kg(){for(;oe!==null;)zp(oe)}function bg(){for(;oe!==null&&!Q0();)zp(oe)}function zp(e){var t=Mp(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?Np(e):oe=t,Fa.current=null}function Np(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mg(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=hg(n,t,Te),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function tn(e,t,n){var r=F,o=Ae.transition;try{Ae.transition=null,F=1,Sg(e,t,n,r)}finally{Ae.transition=o,F=r}return null}function Sg(e,t,n,r){do An();while(It!==null);if(O&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(rm(e,i),e===ce&&(oe=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||No||(No=!0,Op(di,function(){return An(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var s=F;F=1;var a=O;O|=4,Fa.current=null,xg(e,n),Pp(n,e),Um(gs),pi=!!ms,gs=ms=null,e.current=n,yg(n),G0(),O=a,F=s,Ae.transition=i}else e.current=n;if(No&&(No=!1,It=e,Ti=o),i=e.pendingLanes,i===0&&(Bt=null),X0(n.stateNode),Ee(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Pi)throw Pi=!1,e=Ms,Ms=null,e;return Ti&1&&e.tag!==0&&An(),i=e.pendingLanes,i&1?e===Os?Mr++:(Mr=0,Os=e):Mr=0,Xt(),null}function An(){if(It!==null){var e=hf(Ti),t=Ae.transition,n=F;try{if(Ae.transition=null,F=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,Ti=0,O&6)throw Error(P(331));var o=O;for(O|=4,L=e.current;L!==null;){var i=L,s=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(L=c;L!==null;){var p=L;switch(p.tag){case 0:case 11:case 15:Nr(8,p,i)}var h=p.child;if(h!==null)h.return=p,L=h;else for(;L!==null;){p=L;var x=p.sibling,w=p.return;if(Cp(p),p===c){L=null;break}if(x!==null){x.return=w,L=x;break}L=w}}}var y=i.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var $=S.sibling;S.sibling=null,S=$}while(S!==null)}}L=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,L=s;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Nr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){s=L;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,L=g;else e:for(s=d;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hi(9,a)}}catch(v){ee(a,a.return,v)}if(a===s){L=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,L=k;break e}L=a.return}}if(O=o,Xt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Oi,e)}catch{}r=!0}return r}finally{F=n,Ae.transition=t}}return!1}function pc(e,t,n){t=Kn(n,t),t=hp(e,t,1),e=Ft(e,t,1),t=we(),e!==null&&(fo(e,1,t),Ee(e,t))}function ee(e,t,n){if(e.tag===3)pc(e,e,n);else for(;t!==null;){if(t.tag===3){pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Kn(n,e),e=mp(t,e,1),t=Ft(t,e,1),e=we(),t!==null&&(fo(t,1,e),Ee(t,e));break}}t=t.return}}function jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-Wa?an(e,0):Ba|=n),Ee(e,t)}function Dp(e,t){t===0&&(e.mode&1?(t=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):t=1);var n=we();e=mt(e,t),e!==null&&(fo(e,t,n),Ee(e,n))}function Cg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dp(e,n)}function $g(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Dp(e,n)}var Mp;Mp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,pg(e,t,n);je=!!(e.flags&131072)}else je=!1,Q&&t.flags&1048576&&Ff(t,wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var o=Wn(t,ye.current);_n(t,n),o=Da(null,t,r,e,o,n);var i=Ma();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(i=!0,yi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,La(t),o.updater=Vi,t.stateNode=o,o._reactInternals=t,Cs(t,r,e,n),t=Ps(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&Sa(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Pg(r),e=Ke(r,e),o){case 0:t=Es(null,t,r,e,n);break e;case 1:t=rc(null,t,r,e,n);break e;case 11:t=tc(null,t,r,e,n);break e;case 14:t=nc(null,t,r,Ke(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Es(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),rc(e,t,r,o,n);case 3:e:{if(vp(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Kf(e,t),Si(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Kn(Error(P(423)),t),t=oc(e,t,r,n,o);break e}else if(r!==o){o=Kn(Error(P(424)),t),t=oc(e,t,r,n,o);break e}else for(Le=At(t.stateNode.containerInfo.firstChild),Ie=t,Q=!0,Ye=null,n=Vf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===o){t=gt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Qf(t),e===null&&bs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,xs(r,o)?s=null:i!==null&&xs(r,i)&&(t.flags|=32),yp(e,t),ve(e,t,s,n),t.child;case 6:return e===null&&bs(t),null;case 13:return wp(e,t,n);case 4:return Ia(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),tc(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,U(ki,r._currentValue),r._currentValue=s,i!==null)if(qe(i.value,s)){if(i.children===o.children&&!Ce.current){t=gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ft(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ss(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ss(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_n(t,n),o=Fe(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=Ke(r,t.pendingProps),o=Ke(r.type,o),nc(e,t,r,o,n);case 15:return gp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),qo(e,t),t.tag=1,$e(r)?(e=!0,yi(t)):e=!1,_n(t,n),pp(t,r,o),Cs(t,r,o,n),Ps(null,t,r,!0,e,n);case 19:return kp(e,t,n);case 22:return xp(e,t,n)}throw Error(P(156,t.tag))};function Op(e,t){return cf(e,t)}function Eg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new Eg(e,t,n,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pg(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===da)return 11;if(e===fa)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ni(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Ka(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return un(n.children,o,i,t);case ca:s=8,o|=8;break;case Yl:return e=_e(12,n,t,o|2),e.elementType=Yl,e.lanes=i,e;case Jl:return e=_e(13,n,t,o),e.elementType=Jl,e.lanes=i,e;case Xl:return e=_e(19,n,t,o),e.elementType=Xl,e.lanes=i,e;case Kd:return Qi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vd:s=10;break e;case Hd:s=9;break e;case da:s=11;break e;case fa:s=14;break e;case $t:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=_e(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function un(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Qi(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Kd,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function Dl(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qa(e,t,n,r,o,i,s,a,u){return e=new Tg(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(i),e}function Lg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _p(e){if(!e)return Qt;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if($e(n))return _f(e,n,t)}return t}function Ap(e,t,n,r,o,i,s,a,u){return e=Qa(n,r,!0,e,o,i,s,a,u),e.context=_p(null),n=e.current,r=we(),o=Wt(n),i=ft(r,o),i.callback=t??null,Ft(n,i,o),e.current.lanes=o,fo(e,o,r),Ee(e,r),e}function Gi(e,t,n,r){var o=t.current,i=we(),s=Wt(o);return n=_p(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,s),e!==null&&(Xe(e,o,s,i),Jo(e,o,s)),s}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ga(e,t){hc(e,t),(e=e.alternate)&&hc(e,t)}function Ig(){return null}var Fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ya(e){this._internalRoot=e}Yi.prototype.render=Ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Gi(e,t,null,null)};Yi.prototype.unmount=Ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){Gi(null,e,null,null)}),t[ht]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=xf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&vf(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function Rg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ii(s);i.call(c)}}var s=Ap(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=s,e[ht]=s.current,Gr(e.nodeType===8?e.parentNode:e),mn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ii(u);a.call(c)}}var u=Qa(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=u,e[ht]=u.current,Gr(e.nodeType===8?e.parentNode:e),mn(function(){Gi(t,u,n,r)}),u}function Xi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var u=Ii(s);a.call(u)}}Gi(t,s,e,o)}else s=Rg(n,t,e,o,r);return Ii(s)}mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sr(t.pendingLanes);n!==0&&(ma(t,n|1),Ee(t,te()),!(O&6)&&(Qn=te()+500,Xt()))}break;case 13:mn(function(){var r=mt(e,1);if(r!==null){var o=we();Xe(r,e,1,o)}}),Ga(e,1)}};ga=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=we();Xe(t,e,134217728,n)}Ga(e,134217728)}};gf=function(e){if(e.tag===13){var t=Wt(e),n=mt(e,t);if(n!==null){var r=we();Xe(n,e,t,r)}Ga(e,t)}};xf=function(){return F};yf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ss=function(e,t,n){switch(t){case"input":if(es(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Bi(r);if(!o)throw Error(P(90));Gd(r),es(r,o)}}}break;case"textarea":Jd(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};rf=Ua;of=mn;var zg={usingClientEntryPoint:!1,Events:[ho,En,Bi,tf,nf,Ua]},gr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ng={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=af(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||Ig,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{Oi=Do.inject(Ng),rt=Do}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(P(200));return Lg(e,t,null,n)};ze.createRoot=function(e,t){if(!Ja(e))throw Error(P(299));var n=!1,r="",o=Fp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qa(e,1,!1,null,null,n,!1,r,o),e[ht]=t.current,Gr(e.nodeType===8?e.parentNode:e),new Ya(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=af(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return mn(e)};ze.hydrate=function(e,t,n){if(!Ji(t))throw Error(P(200));return Xi(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Fp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ap(t,null,e,1,n??null,o,!1,i,s),e[ht]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yi(t)};ze.render=function(e,t,n){if(!Ji(t))throw Error(P(200));return Xi(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ji(e))throw Error(P(40));return e._reactRootContainer?(mn(function(){Xi(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};ze.unstable_batchedUpdates=Ua;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ji(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Xi(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Bp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bp)}catch(e){console.error(e)}}Bp(),Fd.exports=ze;var Wp=Fd.exports,Up,gc=Wp;Up=gc.createRoot,gc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(null,arguments)}var Rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rt||(Rt={}));const xc="popstate";function Dg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Fs("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ri(o)}return Og(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mg(){return Math.random().toString(36).substr(2,8)}function yc(e,t){return{usr:e.state,key:e.key,idx:t}}function Fs(e,t,n,r){return n===void 0&&(n=null),ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?rr(t):t,{state:n,key:t&&t.key||r||Mg()})}function Ri(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function rr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Og(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Rt.Pop,u=null,c=p();c==null&&(c=0,s.replaceState(ro({},s.state,{idx:c}),""));function p(){return(s.state||{idx:null}).idx}function h(){a=Rt.Pop;let $=p(),m=$==null?null:$-c;c=$,u&&u({action:a,location:S.location,delta:m})}function x($,m){a=Rt.Push;let d=Fs(S.location,$,m);c=p()+1;let g=yc(d,c),k=S.createHref(d);try{s.pushState(g,"",k)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;o.location.assign(k)}i&&u&&u({action:a,location:S.location,delta:1})}function w($,m){a=Rt.Replace;let d=Fs(S.location,$,m);c=p();let g=yc(d,c),k=S.createHref(d);s.replaceState(g,"",k),i&&u&&u({action:a,location:S.location,delta:0})}function y($){let m=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof $=="string"?$:Ri($);return d=d.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let S={get action(){return a},get location(){return e(o,s)},listen($){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(xc,h),u=$,()=>{o.removeEventListener(xc,h),u=null}},createHref($){return t(o,$)},createURL:y,encodeLocation($){let m=y($);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:w,go($){return s.go($)}};return S}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function _g(e,t,n){return n===void 0&&(n="/"),Ag(e,t,n)}function Ag(e,t,n,r){let o=typeof t=="string"?rr(t):t,i=Gn(o.pathname||"/",n);if(i==null)return null;let s=Vp(e);Fg(s);let a=null,u=Xg(i);for(let c=0;a==null&&c<s.length;++c)a=Yg(s[c],u);return a}function Vp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(J(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Vt([r,u.relativePath]),p=n.concat(u);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Vp(i.children,t,p,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Qg(c,i.index),routesMeta:p})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let u of Hp(i.path))o(i,s,u)}),t}function Hp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Hp(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Fg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bg=/^:[\w-]+$/,Wg=3,Ug=2,Vg=1,Hg=10,Kg=-2,wc=e=>e==="*";function Qg(e,t){let n=e.split("/"),r=n.length;return n.some(wc)&&(r+=Kg),t&&(r+=Ug),n.filter(o=>!wc(o)).reduce((o,i)=>o+(Bg.test(i)?Wg:i===""?Vg:Hg),r)}function Gg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Yg(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",h=Bs({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),x=u.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Vt([i,h.pathname]),pathnameBase:nx(Vt([i,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(i=Vt([i,h.pathnameBase]))}return s}function Bs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,p,h)=>{let{paramName:x,isOptional:w}=p;if(x==="*"){let S=a[h]||"";s=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const y=a[h];return w&&!y?c[x]=void 0:c[x]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Jg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Xg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qg=e=>Zg.test(e);function ex(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?rr(e):e,i;if(n)if(qg(n))i=n;else{if(n.includes("//")){let s=n;n=Kp(n),Xa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=kc(n.substring(1),"/"):i=kc(n,t)}else i=t;return{pathname:i,search:rx(r),hash:ox(o)}}function kc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Za(e,t){let n=tx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qa(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=rr(e):(o=ro({},e),J(!o.pathname||!o.pathname.includes("?"),Ml("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Ml("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Ml("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),h-=1;o.pathname=x.join("/")}a=h>=0?t[h]:"/"}let u=ex(o,a),c=s&&s!=="/"&&s.endsWith("/"),p=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const Kp=e=>e.replace(/\/\/+/g,"/"),Vt=e=>Kp(e.join("/")),nx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ox=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ix(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qp=["post","put","patch","delete"];new Set(Qp);const lx=["get",...Qp];new Set(lx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(null,arguments)}const Zi=b.createContext(null),Gp=b.createContext(null),yt=b.createContext(null),qi=b.createContext(null),vt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Yp=b.createContext(null);function sx(e,t){let{relative:n}=t===void 0?{}:t;or()||J(!1);let{basename:r,navigator:o}=b.useContext(yt),{hash:i,pathname:s,search:a}=el(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Vt([r,s])),o.createHref({pathname:u,search:a,hash:i})}function or(){return b.useContext(qi)!=null}function it(){return or()||J(!1),b.useContext(qi).location}function Jp(e){b.useContext(yt).static||b.useLayoutEffect(e)}function ir(){let{isDataRoute:e}=b.useContext(vt);return e?kx():ax()}function ax(){or()||J(!1);let e=b.useContext(Zi),{basename:t,future:n,navigator:r}=b.useContext(yt),{matches:o}=b.useContext(vt),{pathname:i}=it(),s=JSON.stringify(Za(o,n.v7_relativeSplatPath)),a=b.useRef(!1);return Jp(()=>{a.current=!0}),b.useCallback(function(c,p){if(p===void 0&&(p={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=qa(c,JSON.parse(s),i,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Vt([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,s,i,e])}function ux(){let{matches:e}=b.useContext(vt),t=e[e.length-1];return t?t.params:{}}function el(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(yt),{matches:o}=b.useContext(vt),{pathname:i}=it(),s=JSON.stringify(Za(o,r.v7_relativeSplatPath));return b.useMemo(()=>qa(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function cx(e,t){return dx(e,t)}function dx(e,t,n,r){or()||J(!1);let{navigator:o}=b.useContext(yt),{matches:i}=b.useContext(vt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=it(),p;if(t){var h;let $=typeof t=="string"?rr(t):t;u==="/"||(h=$.pathname)!=null&&h.startsWith(u)||J(!1),p=$}else p=c;let x=p.pathname||"/",w=x;if(u!=="/"){let $=u.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice($.length).join("/")}let y=_g(e,{pathname:w}),S=gx(y&&y.map($=>Object.assign({},$,{params:Object.assign({},a,$.params),pathname:Vt([u,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?u:Vt([u,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,n,r);return t&&S?b.createElement(qi.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Rt.Pop}},S):S}function fx(){let e=wx(),t=ix(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,null)}const px=b.createElement(fx,null);class hx extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(vt.Provider,{value:this.props.routeContext},b.createElement(Yp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mx(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(Zi);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(vt.Provider,{value:t},r)}function gx(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let p=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);p>=0||J(!1),s=s.slice(0,Math.min(s.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=p),h.route.id){let{loaderData:x,errors:w}=n,y=h.route.loader&&x[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((p,h,x)=>{let w,y=!1,S=null,$=null;n&&(w=a&&h.route.id?a[h.route.id]:void 0,S=h.route.errorElement||px,u&&(c<0&&x===0?(bx("route-fallback"),y=!0,$=null):c===x&&(y=!0,$=h.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,x+1)),d=()=>{let g;return w?g=S:y?g=$:h.route.Component?g=b.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=p,b.createElement(mx,{match:h,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?b.createElement(hx,{location:n.location,revalidation:n.revalidation,component:S,error:w,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var Xp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xp||{}),Zp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zp||{});function xx(e){let t=b.useContext(Zi);return t||J(!1),t}function yx(e){let t=b.useContext(Gp);return t||J(!1),t}function vx(e){let t=b.useContext(vt);return t||J(!1),t}function qp(e){let t=vx(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function wx(){var e;let t=b.useContext(Yp),n=yx(),r=qp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kx(){let{router:e}=xx(Xp.UseNavigateStable),t=qp(Zp.UseNavigateStable),n=b.useRef(!1);return Jp(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,oo({fromRouteId:t},i)))},[e,t])}const bc={};function bx(e,t,n){bc[e]||(bc[e]=!0)}function Sx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jx(e){let{to:t,replace:n,state:r,relative:o}=e;or()||J(!1);let{future:i,static:s}=b.useContext(yt),{matches:a}=b.useContext(vt),{pathname:u}=it(),c=ir(),p=qa(t,Za(a,i.v7_relativeSplatPath),u,o==="path"),h=JSON.stringify(p);return b.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:o}),[c,h,o,n,r]),null}function Cr(e){J(!1)}function Cx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Rt.Pop,navigator:i,static:s=!1,future:a}=e;or()&&J(!1);let u=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:i,static:s,future:oo({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=rr(r));let{pathname:p="/",search:h="",hash:x="",state:w=null,key:y="default"}=r,S=b.useMemo(()=>{let $=Gn(p,u);return $==null?null:{location:{pathname:$,search:h,hash:x,state:w,key:y},navigationType:o}},[u,p,h,x,w,y,o]);return S==null?null:b.createElement(yt.Provider,{value:c},b.createElement(qi.Provider,{children:n,value:S}))}function $x(e){let{children:t,location:n}=e;return cx(Ws(t),n)}new Promise(()=>{});function Ws(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...t,o];if(r.type===b.Fragment){n.push.apply(n,Ws(r.props.children,i));return}r.type!==Cr&&J(!1),!r.props.index||!r.props.children||J(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ws(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zi.apply(null,arguments)}function eh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ex(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Px(e,t){return e.button===0&&(!t||t==="_self")&&!Ex(e)}const Tx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Lx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Ix="6";try{window.__reactRouterVersion=Ix}catch{}const Rx=b.createContext({isTransitioning:!1}),zx="startTransition",Sc=j0[zx];function Nx(e){let{basename:t,children:n,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=Dg({window:o,v5Compat:!0}));let s=i.current,[a,u]=b.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},p=b.useCallback(h=>{c&&Sc?Sc(()=>u(h)):u(h)},[u,c]);return b.useLayoutEffect(()=>s.listen(p),[s,p]),b.useEffect(()=>Sx(r),[r]),b.createElement(Cx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Dx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lr=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:p,viewTransition:h}=t,x=eh(t,Tx),{basename:w}=b.useContext(yt),y,S=!1;if(typeof c=="string"&&Mx.test(c)&&(y=c,Dx))try{let g=new URL(window.location.href),k=c.startsWith("//")?new URL(g.protocol+c):new URL(c),v=Gn(k.pathname,w);k.origin===g.origin&&v!=null?c=v+k.search+k.hash:S=!0}catch{}let $=sx(c,{relative:o}),m=_x(c,{replace:s,state:a,target:u,preventScrollReset:p,relative:o,viewTransition:h});function d(g){r&&r(g),g.defaultPrevented||m(g)}return b.createElement("a",zi({},x,{href:y||$,onClick:S||i?r:d,ref:n,target:u}))}),th=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:u,viewTransition:c,children:p}=t,h=eh(t,Lx),x=el(u,{relative:h.relative}),w=it(),y=b.useContext(Gp),{navigator:S,basename:$}=b.useContext(yt),m=y!=null&&Ax(x)&&c===!0,d=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,g=w.pathname,k=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(g=g.toLowerCase(),k=k?k.toLowerCase():null,d=d.toLowerCase()),k&&$&&(k=Gn(k,$)||k);const v=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let C=g===d||!s&&g.startsWith(d)&&g.charAt(v)==="/",j=k!=null&&(k===d||!s&&k.startsWith(d)&&k.charAt(d.length)==="/"),E={isActive:C,isPending:j,isTransitioning:m},M=C?r:void 0,z;typeof i=="function"?z=i(E):z=[i,C?"active":null,j?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let W=typeof a=="function"?a(E):a;return b.createElement(lr,zi({},h,{"aria-current":M,className:z,ref:n,style:W,to:u,viewTransition:c}),typeof p=="function"?p(E):p)});var Us;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Us||(Us={}));var jc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jc||(jc={}));function Ox(e){let t=b.useContext(Zi);return t||J(!1),t}function _x(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=ir(),c=it(),p=el(e,{relative:s});return b.useCallback(h=>{if(Px(h,n)){h.preventDefault();let x=r!==void 0?r:Ri(c)===Ri(p);u(e,{replace:x,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,p,r,o,n,e,i,s,a])}function Ax(e,t){t===void 0&&(t={});let n=b.useContext(Rx);n==null&&J(!1);let{basename:r}=Ox(Us.useViewTransitionState),o=el(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Gn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Gn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Bs(o.pathname,s)!=null||Bs(o.pathname,i)!=null}var H="-ms-",Or="-moz-",A="-webkit-",nh="comm",tl="rule",eu="decl",Fx="@import",Bx="@namespace",rh="@keyframes",Wx="@layer",oh=Math.abs,tu=String.fromCharCode,Vs=Object.assign;function Ux(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function ih(e){return e.trim()}function st(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function ri(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function gn(e,t,n){return e.slice(t,n)}function Ge(e){return e.length}function lh(e){return e.length}function $r(e,t){return t.push(e),e}function Vx(e,t){return e.map(t).join("")}function Cc(e,t){return e.filter(function(n){return!st(n,t)})}var nl=1,Yn=1,sh=0,We=0,re=0,sr="";function rl(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:nl,column:Yn,length:s,return:"",siblings:a}}function Ct(e,t){return Vs(rl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function wn(e){for(;e.root;)e=Ct(e.root,{children:[e]});$r(e,e.siblings)}function Hx(){return re}function Kx(){return re=We>0?se(sr,--We):0,Yn--,re===10&&(Yn=1,nl--),re}function Ze(){return re=We<sh?se(sr,We++):0,Yn++,re===10&&(Yn=1,nl++),re}function zt(){return se(sr,We)}function oi(){return We}function ol(e,t){return gn(sr,e,t)}function io(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qx(e){return nl=Yn=1,sh=Ge(sr=e),We=0,[]}function Gx(e){return sr="",e}function Ol(e){return ih(ol(We-1,Hs(e===91?e+2:e===40?e+1:e)))}function Yx(e){for(;(re=zt())&&re<33;)Ze();return io(e)>2||io(re)>3?"":" "}function Jx(e,t){for(;--t&&Ze()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return ol(e,oi()+(t<6&&zt()==32&&Ze()==32))}function Hs(e){for(;Ze();)switch(re){case e:return We;case 34:case 39:e!==34&&e!==39&&Hs(re);break;case 40:e===41&&Hs(e);break;case 92:Ze();break}return We}function Xx(e,t){for(;Ze()&&e+re!==57;)if(e+re===84&&zt()===47)break;return"/*"+ol(t,We-1)+"*"+tu(e===47?e:Ze())}function Zx(e){for(;!io(zt());)Ze();return ol(e,We)}function qx(e){return Gx(ii("",null,null,null,[""],e=Qx(e),0,[0],e))}function ii(e,t,n,r,o,i,s,a,u){for(var c=0,p=0,h=s,x=0,w=0,y=0,S=1,$=1,m=1,d=0,g="",k=o,v=i,C=r,j=g;$;)switch(y=d,d=Ze()){case 40:if(y!=108&&se(j,h-1)==58){ri(j+=N(Ol(d),"&","&\f"),"&\f",oh(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:j+=Ol(d);break;case 9:case 10:case 13:case 32:j+=Yx(y);break;case 92:j+=Jx(oi()-1,7);continue;case 47:switch(zt()){case 42:case 47:$r(e1(Xx(Ze(),oi()),t,n,u),u),(io(y||1)==5||io(zt()||1)==5)&&Ge(j)&&gn(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*S:a[c++]=Ge(j)*m;case 125*S:case 59:case 0:switch(d){case 0:case 125:$=0;case 59+p:m==-1&&(j=N(j,/\f/g,"")),w>0&&(Ge(j)-h||S===0&&y===47)&&$r(w>32?Ec(j+";",r,n,h-1,u):Ec(N(j," ","")+";",r,n,h-2,u),u);break;case 59:j+=";";default:if($r(C=$c(j,t,n,c,p,o,a,g,k=[],v=[],h,i),i),d===123)if(p===0)ii(j,t,C,C,k,i,h,a,v);else{switch(x){case 99:if(se(j,3)===110)break;case 108:if(se(j,2)===97)break;default:p=0;case 100:case 109:case 115:}p?ii(e,C,C,r&&$r($c(e,C,C,0,0,o,a,g,o,k=[],h,v),v),o,v,h,a,r?k:v):ii(j,C,C,C,[""],v,0,a,v)}}c=p=w=0,S=m=1,g=j="",h=s;break;case 58:h=1+Ge(j),w=y;default:if(S<1){if(d==123)--S;else if(d==125&&S++==0&&Kx()==125)continue}switch(j+=tu(d),d*S){case 38:m=p>0?1:(j+="\f",-1);break;case 44:a[c++]=(Ge(j)-1)*m,m=1;break;case 64:zt()===45&&(j+=Ol(Ze())),x=zt(),p=h=Ge(g=j+=Zx(oi())),d++;break;case 45:y===45&&Ge(j)==2&&(S=0)}}return i}function $c(e,t,n,r,o,i,s,a,u,c,p,h){for(var x=o-1,w=o===0?i:[""],y=lh(w),S=0,$=0,m=0;S<r;++S)for(var d=0,g=gn(e,x+1,x=oh($=s[S])),k=e;d<y;++d)(k=ih($>0?w[d]+" "+g:N(g,/&\f/g,w[d])))&&(u[m++]=k);return rl(e,t,n,o===0?tl:a,u,c,p,h)}function e1(e,t,n,r){return rl(e,t,n,nh,tu(Hx()),gn(e,2,-2),0,r)}function Ec(e,t,n,r,o){return rl(e,t,n,eu,gn(e,0,r),gn(e,r+1,-1),r,o)}function ah(e,t,n){switch(Ux(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return A+e+e;case 4855:return A+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Or+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Or+e+H+e+e;case 5936:switch(se(e,t+11)){case 114:return A+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+H+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+H+e+e;case 6165:return A+e+H+"flex-"+e+e;case 5187:return A+e+N(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return A+e+H+"flex-item-"+N(e,/flex-|-self/g,"")+(st(e,/flex-|baseline/)?"":H+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return A+e+H+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+H+N(e,"shrink","negative")+e;case 5292:return A+e+H+N(e,"basis","preferred-size")+e;case 6060:return A+"box-"+N(e,"-grow","")+A+e+H+N(e,"grow","positive")+e;case 4554:return A+N(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+H+"flex-pack:$3"),/space-between/,"justify")+A+e+e;case 4200:if(!st(e,/flex-|baseline/))return H+"grid-column-align"+gn(e,t)+e;break;case 2592:case 3360:return H+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,st(r.props,/grid-\w+-end/)})?~ri(e+(n=n[t].value),"span",0)?e:H+N(e,"-start","")+e+H+"grid-row-span:"+(~ri(n,"span",0)?st(n,/\d+/):+st(n,/\d+/)-+st(e,/\d+/))+";":H+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return st(r.props,/grid-\w+-start/)})?e:H+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Or+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ri(e,"stretch",0)?ah(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,u,c){return H+o+":"+i+c+(s?H+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(se(e,t+6)===121)return N(e,":",":"+A)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(se(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+H+"$2box$3")+e;case 100:return N(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function Ni(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function t1(e,t,n,r){switch(e.type){case Wx:if(e.children.length)break;case Fx:case Bx:case eu:return e.return=e.return||e.value;case nh:return"";case rh:return e.return=e.value+"{"+Ni(e.children,r)+"}";case tl:if(!Ge(e.value=e.props.join(",")))return""}return Ge(n=Ni(e.children,r))?e.return=e.value+"{"+n+"}":""}function n1(e){var t=lh(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function r1(e){return function(t){t.root||(t=t.return)&&e(t)}}function o1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case eu:e.return=ah(e.value,e.length,n);return;case rh:return Ni([Ct(e,{value:N(e.value,"@","@"+A)})],r);case tl:if(e.length)return Vx(n=e.props,function(o){switch(st(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wn(Ct(e,{props:[N(o,/:(read-\w+)/,":"+Or+"$1")]})),wn(Ct(e,{props:[o]})),Vs(e,{props:Cc(n,r)});break;case"::placeholder":wn(Ct(e,{props:[N(o,/:(plac\w+)/,":"+A+"input-$1")]})),wn(Ct(e,{props:[N(o,/:(plac\w+)/,":"+Or+"$1")]})),wn(Ct(e,{props:[N(o,/:(plac\w+)/,H+"input-$1")]})),wn(Ct(e,{props:[o]})),Vs(e,{props:Cc(n,r)});break}return""})}}var Fn={},_l,Al;const Jn=typeof process<"u"&&Fn!==void 0&&(Fn.REACT_APP_SC_ATTR||Fn.SC_ATTR)||"data-styled",uh="active",ch="data-styled-version",il="6.4.2",nu=`/*!sc*/
`,_r=typeof window<"u"&&typeof document<"u";function Pc(e){if(typeof process<"u"&&Fn!==void 0){const t=Fn[e];if(t!==void 0&&t!=="")return t!=="false"}}const i1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Al=(_l=Pc("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&_l!==void 0?_l:Pc("SC_DISABLE_SPEEDY"))!==null&&Al!==void 0?Al:typeof process<"u"&&Fn!==void 0&&!1),l1="sc-keyframes-",s1={};function Xn(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let li=new Map,Di=new Map,si=1;const Mo=e=>{if(li.has(e))return li.get(e);for(;Di.has(si);)si++;const t=si++;return li.set(e,t),Di.set(t,e),t},a1=e=>Di.get(e),u1=(e,t)=>{si=t+1,li.set(e,t),Di.set(t,e)},ru=Object.freeze([]),Zn=Object.freeze({});function dh(e,t,n=Zn){return e.theme!==n.theme&&e.theme||t||n.theme}const c1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,d1=/(^-|-$)/g;function fh(e){return e.replace(c1,"-").replace(d1,"")}const f1=/(a)(d)/gi,Tc=e=>String.fromCharCode(e+(e>25?39:97));function ph(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Tc(t%52)+n;return(Tc(t%52)+n).replace(f1,"$1-$2")}const Ks=5381,cn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},hh=e=>cn(Ks,e);function mh(e){return ph(hh(e)>>>0)}function p1(e){return e.displayName||e.name||"Component"}function Qs(e){return typeof e=="string"&&!0}function h1(e){return Qs(e)?`styled.${e}`:`Styled(${p1(e)})`}const gh=Symbol.for("react.memo"),m1=Symbol.for("react.forward_ref"),g1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},x1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y1={[m1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[gh]:xh};function Lc(e){return("type"in(t=e)&&t.type.$$typeof)===gh?xh:"$$typeof"in e?y1[e.$$typeof]:g1;var t}const v1=Object.defineProperty,w1=Object.getOwnPropertyNames,k1=Object.getOwnPropertySymbols,b1=Object.getOwnPropertyDescriptor,S1=Object.getPrototypeOf,j1=Object.prototype;function yh(e,t,n){if(typeof t!="string"){const r=S1(t);r&&r!==j1&&yh(e,r,n);const o=w1(t).concat(k1(t)),i=Lc(e),s=Lc(t);for(let a=0;a<o.length;++a){const u=o[a];if(!(u in x1||n&&n[u]||s&&u in s||i&&u in i)){const c=b1(t,u);try{v1(e,u,c)}catch{}}}}return e}function ar(e){return typeof e=="function"}const C1=Symbol.for("react.forward_ref");function ou(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===C1&&"styledComponentId"in e}function Er(e,t){return e&&t?e+" "+t:e||t||""}function Gs(e,t){return e.join("")}function lo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ys(e,t,n=!1){if(!n&&!lo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Ys(e[r],t[r]);else if(lo(t))for(const r in t)e[r]=Ys(e[r],t[r]);return e}function vh(e,t){Object.defineProperty(e,"toString",{value:t})}const $1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let s=i;for(;e>=s;)if(s<<=1,s<0)throw Xn(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(let a=i;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+nu;return t}},E1=`style[${Jn}][${ch}="${il}"]`,P1=new RegExp(`^${Jn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ic=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Js=e=>{if(!e)return document;if(Ic(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Ic(t))return t}return document},T1=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,s=r.length;i<s;i++)(o=r[i])&&e.registerName(t,o)},L1=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(nu),o=[];for(let i=0,s=r.length;i<s;i++){const a=r[i].trim();if(!a)continue;const u=a.match(P1);if(u){const c=0|parseInt(u[1],10),p=u[2];c!==0&&(u1(p,c),T1(e,p,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}},Fl=e=>{const t=Js(e.options.target).querySelectorAll(E1);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(Jn)!==uh&&(L1(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let xr=!1;function I1(){if(xr!==!1)return xr;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return xr=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return xr=t.getAttribute("content")||void 0}return xr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const wh=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(u=>{const c=Array.from(u.querySelectorAll(`style[${Jn}]`));return c[c.length-1]})(r),s=i!==void 0?i.nextSibling:null;o.setAttribute(Jn,uh),o.setAttribute(ch,il);const a=t||I1();return a&&o.setAttribute("nonce",a),r.insertBefore(o,s),o},R1=class{constructor(e,t){this.element=wh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,s=o.length;i<s;i++){const a=o[i];if(a.ownerNode===n)return a}throw Xn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},z1=class{constructor(e,t){this.element=wh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Rc=_r;const N1={isServer:!_r,useCSSOMInjection:!i1};class go{static registerId(t){return Mo(t)}constructor(t=Zn,n={},r){this.options=Object.assign(Object.assign({},N1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_r&&Rc&&(Rc=!1,Fl(this)),vh(this,()=>(o=>{const i=o.getTag(),{length:s}=i;let a="";for(let u=0;u<s;u++){const c=a1(u);if(c===void 0)continue;const p=o.names.get(c);if(p===void 0||!p.size)continue;const h=i.getGroup(u);if(h.length===0)continue;const x=Jn+".g"+u+'[id="'+c+'"]';let w="";for(const y of p)y.length>0&&(w+=y+",");a+=h+x+'{content:"'+w+'"}'+nu}return a})(this))}rehydrate(){!this.server&&_r&&Fl(this)}reconstructWithOptions(t,n=!0){const r=new go(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&_r&&t.target!==this.options.target&&Js(this.options.target)!==Js(t.target)&&Fl(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new R1(r,o):new z1(r,o))(this.options),new $1(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Mo(t),t.startsWith(l1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Mo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Mo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const kh=new WeakSet,D1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function M1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in D1||e.startsWith("--")?String(t).trim():t+"px"}const rn=47;function zc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const O1=Symbol.for("sc-keyframes");function _1(e){return typeof e=="object"&&e!==null&&O1 in e}function bh(e){return ar(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Sh=e=>e==null||e===!1||e==="",A1=Symbol.for("react.client.reference");function Nc(e){return e.$$typeof===A1}function jh(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Sh(r)&&(Array.isArray(r)&&kh.has(r)||ar(r)?t.push(zc(n)+":",r,";"):lo(r)?(t.push(n+" {"),jh(r,t),t.push("}")):t.push(zc(n)+": "+M1(n,r)+";"))}}function Ht(e,t,n,r,o=[]){if(Sh(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(Nc(e))return o;if(bh(e)&&t){const s=e(t);return Ht(s,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Ht(e[s],t,n,r,o);return o}return ou(e)?(o.push(`.${e.styledComponentId}`),o):_1(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):Nc(e)?o:lo(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(jh(e,o),o):(o.push(e.toString()),o)}const F1=hh(il);class B1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=cn(F1,n),this.baseStyle=r,go.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")i+=a;else if(a)if(bh(a)){const u=a(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=Gs(Ht(u,t,n,r)))}else i+=Gs(Ht(a,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+i:i;let a=this.dynamicNameCache.get(s);if(!a){if(a=ph(cn(cn(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const u=r(i,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,u)}o=Er(o,a)}}return o}}const W1=/&/g;function Ch(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Bl(e){const t=e.length;let n="",r=0,o=0,i=0,s=!1,a=!1;for(let u=0;u<t;u++){const c=e.charCodeAt(u);if(i!==0||s||c!==rn||e.charCodeAt(u+1)!==42)if(s)c===42&&e.charCodeAt(u+1)===rn&&(s=!1,u++);else if(c!==34&&c!==39||Ch(e,u)){if(i===0)if(c===123)o++;else if(c===125){if(o--,o<0){a=!0;let p=u+1;for(;p<t;){const h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(n+=e.substring(r,u+1),r=u+1)}else c===59&&o===0&&(n+=e.substring(r,u+1),r=u+1)}else i===0?i=c:i===c&&(i=0);else s=!0,u++}return a||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function $h(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const s=i.props,a=[];for(let u=0;u<s.length;u++)a[u]=n+s[u];i.props=a}Array.isArray(i.children)&&i.type!=="@keyframes"&&$h(i.children,t)}return e}function U1({options:e=Zn,plugins:t=ru}=Zn){let n,r,o;const i=(x,w,y)=>y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?`.${n}`:x,s=t.slice();s.push(x=>{x.type===tl&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(W1,r).replace(o,i))}),e.prefix&&s.push(o1),s.push(t1);let a=[];const u=n1(s.concat(r1(x=>a.push(x)))),c=(x,w="",y="",S="&")=>{n=S,r=w,o=void 0;const $=function(d){const g=d.indexOf("//")!==-1,k=d.indexOf("}")!==-1;if(!g&&!k)return d;if(!g)return Bl(d);const v=d.length;let C="",j=0,E=0,M=0,z=0,W=0,Ue=!1;for(;E<v;){const Z=d.charCodeAt(E);if(Z!==34&&Z!==39||Ch(d,E))if(M===0)if(Z===rn&&E+1<v&&d.charCodeAt(E+1)===42){for(E+=2;E+1<v&&(d.charCodeAt(E)!==42||d.charCodeAt(E+1)!==rn);)E++;E+=2}else if(Z!==40)if(Z!==41)if(z>0)E++;else if(Z===42&&E+1<v&&d.charCodeAt(E+1)===rn)C+=d.substring(j,E),E+=2,j=E,Ue=!0;else if(Z===rn&&E+1<v&&d.charCodeAt(E+1)===rn){for(C+=d.substring(j,E);E<v&&d.charCodeAt(E)!==10;)E++;j=E,Ue=!0}else Z===123?W++:Z===125&&W--,E++;else z>0&&z--,E++;else z++,E++;else E++;else M===0?M=Z:M===Z&&(M=0),E++}return Ue?(j<v&&(C+=d.substring(j)),W===0?C:Bl(C)):W===0?d:Bl(d)}(x);let m=qx(y||w?y+" "+w+" { "+$+" }":$);return e.namespace&&(m=$h(m,e.namespace)),a=[],Ni(m,u),a},p=e;let h=Ks;for(let x=0;x<t.length;x++)t[x].name||Xn(15),h=cn(h,t[x].name);return p!=null&&p.namespace&&(h=cn(h,p.namespace)),p!=null&&p.prefix&&(h=cn(h,"p")),c.hash=h!==Ks?h.toString():"",c}const V1=new go,H1=U1(),Eh=ge.createContext({shouldForwardProp:void 0,styleSheet:V1,stylis:H1,stylisPlugins:void 0});Eh.Consumer;function Ph(){return ge.useContext(Eh)}const so=ge.createContext(void 0);so.Consumer;function K1(e){const t=ge.useContext(so),n=ge.useMemo(()=>function(r,o){if(!r)throw Xn(14);if(ar(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw Xn(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?ge.createElement(so.Provider,{value:n},e.children):null}const Dc=Object.prototype.hasOwnProperty,Wl={};function Q1(e,t){const n=typeof e!="string"?"sc":fh(e);Wl[n]=(Wl[n]||0)+1;const r=n+"-"+mh(il+n+Wl[n]);return t?t+"-"+r:r}function G1(e,t,n){const r=ou(e),o=e,i=!Qs(e),{attrs:s=ru,componentId:a=Q1(t.displayName,t.parentComponentId),displayName:u=h1(e)}=t,c=t.displayName&&t.componentId?fh(t.displayName)+"-"+t.componentId:t.componentId||a,p=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){const S=o.shouldForwardProp;if(t.shouldForwardProp){const $=t.shouldForwardProp;h=(m,d)=>S(m,d)&&$(m,d)}else h=S}const x=new B1(n,c,r?o.componentStyle:void 0);function w(S,$){return function(m,d,g){const{attrs:k,componentStyle:v,defaultProps:C,foldedComponentIds:j,styledComponentId:E,target:M}=m,z=ge.useContext(so),W=Ph(),Ue=m.shouldForwardProp||W.shouldForwardProp,Z=dh(d,z,C)||Zn;let Ve,Zt;{const I=ge.useRef(null),R=I.current;if(R!==null&&R[1]===Z&&R[2]===W.styleSheet&&R[3]===W.stylis&&R[7]===v&&function(B,_,ie){const q=B,ne=_;let Pe=0;for(const De in ne)if(Dc.call(ne,De)&&(Pe++,q[De]!==ne[De]))return!1;return Pe===ie}(R[0],d,R[4]))Ve=R[5],Zt=R[6];else{Ve=function(_,ie,q){const ne=Object.assign(Object.assign({},ie),{className:void 0,theme:q}),Pe=_.length>1;for(let De=0;De<_.length;De++){const ul=_[De],yo=ar(ul)?ul(Pe?Object.assign({},ne):ne):ul;for(const kt in yo)kt==="className"?ne.className=Er(ne.className,yo[kt]):kt==="style"?ne.style=Object.assign(Object.assign({},ne.style),yo[kt]):kt in ie&&ie[kt]===void 0||(ne[kt]=yo[kt])}return"className"in ie&&typeof ie.className=="string"&&(ne.className=Er(ne.className,ie.className)),ne}(k,d,Z),Zt=function(_,ie,q,ne){return _.generateAndInjectStyles(ie,q,ne)}(v,Ve,W.styleSheet,W.stylis);let B=0;for(const _ in d)Dc.call(d,_)&&B++;I.current=[d,Z,W.styleSheet,W.stylis,B,Ve,Zt,v]}}const wt=Ve.as||M,qt=function(I,R,B,_){const ie={};for(const q in I)I[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&I.theme===B||(q==="forwardedAs"?ie.as=I.forwardedAs:_&&!_(q,R)||(ie[q]=I[q]));return ie}(Ve,wt,Z,Ue);let T=Er(j,E);return Zt&&(T+=" "+Zt),Ve.className&&(T+=" "+Ve.className),qt[Qs(wt)&&wt.includes("-")?"class":"className"]=T,g&&(qt.ref=g),b.createElement(wt,qt)}(y,S,$)}w.displayName=u;let y=ge.forwardRef(w);return y.attrs=p,y.componentStyle=x,y.displayName=u,y.shouldForwardProp=h,y.foldedComponentIds=r?Er(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=c,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get(){return this._foldedDefaultProps},set(S){this._foldedDefaultProps=r?function($,...m){for(const d of m)Ys($,d,!0);return $}({},o.defaultProps,S):S}}),vh(y,()=>`.${y.styledComponentId}`),i&&yh(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}var Y1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Mc(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const Oc=e=>(kh.add(e),e);function Th(e,...t){if(ar(e)||lo(e))return Oc(Ht(Mc(ru,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ht(n):Oc(Ht(Mc(n,t)))}function Xs(e,t,n=Zn){if(!t)throw Xn(1,t);const r=(o,...i)=>e(t,n,Th(o,...i));return r.attrs=o=>Xs(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>Xs(e,t,Object.assign(Object.assign({},n),o)),r}const Lh=e=>Xs(G1,e),f=Lh;Y1.forEach(e=>{f[e]=Lh(e)});class J1{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(ar(i)&&!ou(i))return!1}return!0}(t),go.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(i,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&s){const a=s.rules,u=this.instanceRules.get(t).rules;if(a.length===u.length){let c=!0;for(let p=0;p<a.length;p++)if(a[p]!==u[p]){c=!1;break}if(c)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=Gs(Ht(this.rules,n,r,o)),s={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function X1(e,...t){const n=Th(e,...t),r=`sc-global-${mh(JSON.stringify(n))}`,o=new J1(n,r),i=a=>{const u=Ph(),c=ge.useContext(so);let p;{const h=ge.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),p=h.current}u.styleSheet.server&&s(p,a,u.styleSheet,c,u.stylis);{const h=o.isStatic?[p,u.styleSheet,o]:[p,a,u.styleSheet,c,u.stylis,o],x=ge.useRef(o);ge.useLayoutEffect(()=>{u.styleSheet.server||(x.current!==o&&(u.styleSheet.clearRules(r),x.current=o),s(p,a,u.styleSheet,c,u.stylis))},h),ge.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function s(a,u,c,p,h){if(o.isStatic)o.renderStyles(a,s1,c,h);else{const x=Object.assign(Object.assign({},u),{theme:dh(u,p,i.defaultProps)});o.renderStyles(a,x,c,h)}}return ge.memo(i)}const Z1={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},_c=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),l.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),q1=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),ey=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ty=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),l.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),ny=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ry=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),oy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),iy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),ly=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),l.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ih=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),Rh=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),sy=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ay=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),l.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),uy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),cy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),dy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Gt=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Zs=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Ar=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),zh=({size:e=14,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),qs=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),fy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),l.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ao=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),py=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),hy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),l.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),my=({size:e=32,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),l.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ac=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Fc=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),l.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),gy=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),xy=({size:e=16,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Bc=({size:e=16,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),l.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),yy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),l.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),vy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 6l8-4 8 4-8 4-8-4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 10l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M2 14l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),wy=({size:e=20,color:t="currentColor"})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),l.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),ky=({size:e=20,color:t="currentColor"})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})});function qn(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return l.jsx(_c,{...r});case"settings":return l.jsx(q1,{...r});case"shield":return l.jsx(ey,{...r});case"hierarchy":return l.jsx(ty,{...r});case"cycle":return l.jsx(ny,{...r});case"code":return l.jsx(ry,{...r});case"globe":return l.jsx(oy,{...r});case"document":return l.jsx(iy,{...r});case"mobile":return l.jsx(ly,{...r});case"sparkle":return l.jsx(Ih,{...r});case"envelope":return l.jsx(Rh,{...r});case"key":return l.jsx(fy,{...r});case"atom":return l.jsx(hy,{...r});default:return l.jsx(_c,{...r})}}const Nh=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],Dh=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents",iconType:"sparkle"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],kn=e=>[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],nn={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"INVENTORY",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"POLICIES",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"AUTOMATION",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"INTEGRATIONS",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"RELEASE SECURITY",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"SIGNING",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"INTEGRATIONS",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"OVERVIEW",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"MANAGE CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"POLICIES",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"REVOCATION & VALIDATION",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"CONFIGURATION",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:kn("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:kn("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:kn("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:kn("device-trust")},"ai-agents":{id:"ai-agents",label:"AI Agents",route:"/ai-agents",ariaLabel:"AI Agents navigation",sections:kn("ai-agents")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:kn("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},by={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/ai-agents":"AI Agents","/ai-agents/dashboard":"Dashboard","/ai-agents/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},Sy=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],jy=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],Cy=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],$y=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/ai-agents","/ai-agents/dashboard","/ai-agents/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],Ey=f.div`
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
`,Py=f.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,Wc=f.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Uc=f.a`
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
`;function Ty({onClose:e,onSelectProduct:t}){const n=ir(),r=o=>{t(o.productId),n(o.route),e()};return l.jsxs(Ey,{role:"menu","aria-label":"Settings menu",children:[l.jsx(Py,{children:"Settings"}),l.jsx(Wc,{}),Sy.map(o=>l.jsx(Uc,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route)),l.jsx(Wc,{}),jy.map(o=>l.jsx(Uc,{href:o.route,role:"menuitem",onClick:i=>{i.preventDefault(),r(o)},children:o.label},o.route))]})}const Ly=f.div`
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
`,Iy=f.div`
  padding: 4px 0;
`,Ry=f.a`
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
`;function zy({onClose:e}){return l.jsx(Ly,{role:"menu","aria-label":"Help menu",children:l.jsx(Iy,{children:Cy.map(t=>l.jsx(Ry,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const Ny=f.div`
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
`,Dy=f.div`
  padding: 12px 16px;
`,My=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Oy=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,Vc=f.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,_y=f.div`
  padding: 4px 0;
`,Hc=f.a`
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
`;function Ay({onClose:e,onSelectProduct:t}){const n=ir(),r=o=>{o.preventDefault(),t("profile"),n("/profile"),e()};return l.jsxs(Ny,{role:"menu","aria-label":"User profile menu",children:[l.jsxs(Dy,{children:[l.jsx(My,{children:"Deepika Chauhan"}),l.jsx(Oy,{children:"deepika.chauhan@digicert.com"})]}),l.jsx(Vc,{}),l.jsxs(_y,{children:[l.jsx(Hc,{href:"/profile",role:"menuitem",onClick:r,children:"My profile"}),l.jsx(Vc,{}),l.jsx(Hc,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const Fy=f.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,By=f.div`
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
`,Wy=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Uy=f.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Vy=f.button`
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
`,Hy=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,Ky=f.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`,Qy=f.button`
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
`;function Gy({open:e,onClose:t}){const n=b.useRef(null),r=b.useRef(null);return b.useEffect(()=>{var i;if(!e)return;(i=n.current)==null||i.focus();const o=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const u=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),c=u[0],p=u[u.length-1];s.shiftKey&&document.activeElement===c?(s.preventDefault(),p.focus()):!s.shiftKey&&document.activeElement===p&&(s.preventDefault(),c.focus())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),l.jsxs(l.Fragment,{children:[l.jsx(Fy,{$open:e,onClick:t,"aria-hidden":"true"}),l.jsxs(By,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[l.jsxs(Wy,{children:[l.jsx(Uy,{id:"cart-heading",children:"Cart"}),l.jsx(Vy,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),l.jsxs(Hy,{children:[l.jsx(Ky,{children:"Your cart is empty."}),l.jsx(Qy,{onClick:t,children:"Continue shopping"})]})]})]})}const Yy=f.div`
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
`,Jy=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Xy=f.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Zy=f.button`
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
`,qy=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`,ev=f.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
`,tv=f.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,nv=f.input`
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
`,rv=f.button`
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
`;function ov({open:e,onClose:t}){const n=b.useRef(null);return b.useEffect(()=>{const r=o=>{o.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),l.jsxs(Yy,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[l.jsxs(Jy,{children:[l.jsx(Xy,{children:"AI Assist"}),l.jsx(Zy,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),l.jsxs(qy,{children:[l.jsx(ev,{children:"How can I help you today?"}),l.jsxs(tv,{children:[l.jsx(nv,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),l.jsx(rv,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const iv=f.header`
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
`,lv=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,sv=f.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,av=f.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,uv=f.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 18px;
  color: ${({theme:e})=>e.colors.white};
  letter-spacing: 0.02em;
  user-select: none;

  .logo-bold { font-weight: 700; }
  .logo-normal { font-weight: 400; }
`,yr=f.button`
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
`,cv=f.span`
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
`,dv=f.button`
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
`,Oo=f.div`
  position: relative;
  display: flex;
  align-items: center;
`,fv=f.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function pv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:o,onSelectProduct:i,cartCount:s=3}){const a=n==="settings"||n==="help"||n==="profile";return l.jsxs(l.Fragment,{children:[l.jsxs(iv,{role:"banner",children:[l.jsxs(lv,{children:[l.jsx(av,{children:l.jsx(yr,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:l.jsx(dy,{size:20})})}),l.jsxs(uv,{"aria-label":"DigiCert ONE",children:[l.jsx("span",{className:"logo-normal",children:"digicert "}),l.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),l.jsxs(sv,{children:[l.jsx(Oo,{children:l.jsxs(yr,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[l.jsx(ay,{size:20}),s>0&&l.jsx(cv,{"aria-hidden":"true",children:s})]})}),l.jsxs(Oo,{children:[l.jsx(yr,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:l.jsx(cy,{size:20})}),n==="settings"&&l.jsx(Ty,{onClose:o,onSelectProduct:i})]}),l.jsxs(Oo,{children:[l.jsx(yr,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:l.jsx(uy,{size:20})}),n==="help"&&l.jsx(zy,{onClose:o})]}),l.jsx(yr,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:l.jsx(Ih,{size:20})}),l.jsxs(Oo,{children:[l.jsx(dv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&l.jsx(Ay,{onClose:o,onSelectProduct:i})]})]})]}),a&&l.jsx(fv,{onClick:o,"aria-hidden":"true"}),l.jsx(Gy,{open:n==="cart",onClose:o}),l.jsx(ov,{open:n==="ai-assist",onClose:o})]})}const hv=f.nav`
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
`,Kc=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,mv=f.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,gv=f.button`
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
`,xv=f.span`
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
`,yv=350;function Qc({product:e,isActive:t,onSelect:n}){const r=ir(),o=b.useRef(null),i=b.useRef(null),[s,a]=b.useState({visible:!1,y:0});b.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const u=()=>{var y;const w=(y=o.current)==null?void 0:y.getBoundingClientRect();return w?w.top+w.height/2:0},c=w=>{i.current&&(clearTimeout(i.current),i.current=null),w?a({visible:!0,y:u()}):i.current=setTimeout(()=>a({visible:!0,y:u()}),yv)},p=()=>{i.current&&(clearTimeout(i.current),i.current=null),a(w=>({...w,visible:!1}))},h=()=>{p(),n(e.id),r(e.route)},x=w=>{if(w.key==="Escape"){p();return}(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),h())};return l.jsxs(l.Fragment,{children:[l.jsx(gv,{ref:o,$active:t,onClick:h,onKeyDown:x,onMouseEnter:()=>c(!1),onMouseLeave:p,onFocus:()=>c(!0),onBlur:p,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:qn(e.iconType,20,t?"#111827":"#6B7280")}),Wp.createPortal(l.jsx(xv,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function vv({activeProductId:e,onSelectProduct:t}){return l.jsxs(hv,{"aria-label":"Product navigation",children:[l.jsx(Kc,{children:Nh.map(n=>l.jsx(Qc,{product:n,isActive:e===n.id,onSelect:t},n.id))}),l.jsx(mv,{}),l.jsx(Kc,{children:Dh.map(n=>l.jsx(Qc,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const wv=f.div`
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
`,kv=f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,bv=f.div`
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
`,Sv=f.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,jv=f.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Cv=f.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,$v=f.button`
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
`,Ev=f.div`
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
`,Pv=f.div`
  margin-bottom: 2px;
`,Tv=f.button`
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
`,Lv=f.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,Iv=f(th)`
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
`;function Rv({section:e,index:t}){const[n,r]=b.useState(e.defaultExpanded??t===0),o=it(),i=!!e.title,s=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return l.jsxs(Pv,{children:[l.jsxs(Tv,{$hasTitle:i,onClick:()=>r(a=>!a),"aria-expanded":n,"aria-controls":s,children:[l.jsx("span",{children:e.title}),n?l.jsx(zh,{size:12,color:"currentColor"}):l.jsx(Ar,{size:12,color:"currentColor"})]}),l.jsx(Lv,{id:s,$open:n||!i,children:e.items.map(a=>l.jsx(Iv,{to:a.route,end:!0,"aria-current":o.pathname===a.route?"page":void 0,children:a.label},a.route))})]})}function zv({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r}){let o=nn[e];return e==="settings-billing"&&r==="enterprise"&&(o={...o,sections:o.sections.map(i=>({...i,items:i.items.filter(s=>s.route==="/settings/billing")}))}),b.useEffect(()=>{const i=s=>{s.key==="Escape"&&t&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[t,n]),l.jsxs(l.Fragment,{children:[l.jsx(Ev,{$visible:t,onClick:n,"aria-hidden":"true"}),l.jsxs(wv,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[l.jsx(kv,{children:l.jsx(bv,{$open:t,children:o&&l.jsxs(l.Fragment,{children:[l.jsx(Sv,{children:l.jsx(jv,{children:o.label})}),l.jsx(Cv,{children:l.jsx("nav",{"aria-label":"Product navigation",children:o.sections.map((i,s)=>l.jsx(Rv,{section:i,index:s},i.title||s))})})]})})}),l.jsx($v,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:l.jsx(Gt,{size:14,color:"currentColor"})})]})]})}const Nv=f.div`
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
`,Dv=f.div`
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
`,Mv=f.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({$offset:e})=>e}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`,Gc=f.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Yc=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`,Jc=f.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ul=f.button`
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
`,Xc=f.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`,Zc=f.div`
  display: flex;
  flex-direction: column;
`,Ov=f.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`,qc=f.button`
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
`,ed=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,_v=f.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`,Av=f(th)`
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
`;function Fv({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const o=ir(),i=it(),s=b.useRef(null),a=b.useRef(null),[u,c]=b.useState("l1"),[p,h]=b.useState(null),x=b.useRef(0),w=b.useRef(0);b.useEffect(()=>{e||(c("l1"),h(null))},[e]),b.useEffect(()=>{const v=s.current;v&&(e?v.removeAttribute("inert"):v.setAttribute("inert",""))},[e]),b.useEffect(()=>{if(!e)return;const v=setTimeout(()=>{var C,j;(j=(C=s.current)==null?void 0:C.querySelector("button"))==null||j.focus()},50);return()=>clearTimeout(v)},[e]),b.useEffect(()=>{if(!e)return;const v=C=>{if(C.key==="Escape"){r();return}if(C.key!=="Tab")return;const j=s.current;if(!j)return;const E=j.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),M=E[0],z=E[E.length-1];C.shiftKey&&document.activeElement===M?(C.preventDefault(),z.focus()):!C.shiftKey&&document.activeElement===z&&(C.preventDefault(),M.focus())};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[e,r]);const y=v=>{h(v),c("l2"),setTimeout(()=>{var C;(C=a.current)==null||C.focus()},50)},S=()=>{c("l1")},$=v=>{!!nn[v.id]?y(v.id):(n(v.id),o(v.route),r())},m=()=>{r()},d=v=>{x.current=v.touches[0].clientX,w.current=v.touches[0].clientY},g=v=>{const C=v.changedTouches[0].clientX-x.current,j=Math.abs(v.changedTouches[0].clientY-w.current);C<-80&&j<60&&r()},k=p?nn[p]:null;return l.jsxs(l.Fragment,{children:[l.jsx(Nv,{$open:e,onClick:r,"aria-hidden":"true"}),l.jsx(Dv,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:d,onTouchEnd:g,children:l.jsxs(Mv,{$offset:u==="l1"?0:-50,children:[l.jsxs(Gc,{"aria-hidden":u!=="l1",children:[l.jsxs(Yc,{children:[l.jsx(Jc,{children:"Navigation"}),l.jsx(Ul,{onClick:r,"aria-label":"Close menu",children:l.jsx(qs,{size:16,color:"currentColor"})})]}),l.jsx(Xc,{children:l.jsxs("nav",{"aria-label":"Product list",children:[l.jsx(Zc,{children:Nh.map(v=>l.jsxs(qc,{$active:t===v.id,onClick:()=>$(v),"aria-current":t===v.id?"page":void 0,"aria-haspopup":nn[v.id]?"menu":void 0,children:[qn(v.iconType,18,t===v.id?"#1976D2":"#6B7280"),l.jsx(ed,{children:v.label}),nn[v.id]&&l.jsx(Zs,{size:14,color:t===v.id?"#1976D2":"#9CA3AF"})]},v.id))}),l.jsx(Ov,{}),l.jsx(Zc,{children:Dh.map(v=>l.jsxs(qc,{$active:t===v.id,onClick:()=>$(v),"aria-current":t===v.id?"page":void 0,"aria-haspopup":nn[v.id]?"menu":void 0,children:[qn(v.iconType,18,t===v.id?"#1976D2":"#6B7280"),l.jsx(ed,{children:v.label}),nn[v.id]&&l.jsx(Zs,{size:14,color:t===v.id?"#1976D2":"#9CA3AF"})]},v.id))})]})})]}),l.jsxs(Gc,{ref:a,"aria-hidden":u!=="l2",children:[l.jsxs(Yc,{children:[l.jsx(Ul,{onClick:S,"aria-label":"Back to menu",children:l.jsx(Gt,{size:16,color:"currentColor"})}),l.jsx(Jc,{children:(k==null?void 0:k.label)??""}),l.jsx(Ul,{onClick:r,"aria-label":"Close menu",children:l.jsx(qs,{size:16,color:"currentColor"})})]}),l.jsx(Xc,{children:k&&l.jsx("nav",{"aria-label":`${k.label} navigation`,children:k.sections.map((v,C)=>l.jsxs("div",{children:[v.title&&l.jsx(_v,{children:v.title}),v.items.map(j=>l.jsx(Av,{to:j.route,end:!0,"aria-current":i.pathname===j.route?"page":void 0,onClick:m,children:j.label},j.route))]},v.title||C))})})]})]})})]})}const Bv=f.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,Wv=f.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`,Uv=f.div`
  flex: 1 1 520px;
  min-width: 280px;
`,Vv=f.p`
  margin: 0 0 8px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Hv=f.h1`
  margin: 0;
  font-size: 40px;
  line-height: 48px;
  max-width: 720px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 400;
`,Kv=f.p`
  margin: 16px 0 0;
  max-width: 680px;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Qv=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex: 0 1 auto;
  min-width: 220px;
`,td=f.a`
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
`,Gv=f.h2`
  margin: 0 0 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,Yv=f.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,Jv=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,Xv=f.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 0 1px 2px rgba(53,56,58,0.05);
  padding: 24px;
`,Zv=f.h3`
  margin: 0 0 6px;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,qv=f.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,e2=f.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
`,t2=f.a`
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
`,n2=f.div`
  display: grid;
  gap: 16px;
`,r2=f.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,o2=f.div`
  position: relative;
  width: 100%;
  min-height: 192px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,i2=f.img`
  width: 100%;
  height: 100%;
  min-height: 192px;
  object-fit: cover;
  display: block;
`,l2=f.div`
  padding: 20px 20px 24px;
`,s2=f.div`
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
`,a2=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 12px;
`,u2=f.h3`
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 26px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,c2=f.p`
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral700};
`,d2=f.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;

  &:hover { text-decoration: underline; }
`,f2=f.article`
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px;
  display: grid;
  gap: 16px;
`,p2=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,h2=f.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,m2=f.button`
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
`,g2=f.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,x2=f.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,y2=f.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,v2=[{title:"CertCentral",subtitle:"Public certificates",actions:[{label:"Order a new certificate",href:"/certcentral/dashboard"},{label:"Reissue a certificate",href:"/certcentral/dashboard"},{label:"Configure ACME automation",href:"/certcentral/client-tools"},{label:"Manage organizations",href:"/certcentral/client-tools"}]},{title:"Trust Lifecycle Manager",subtitle:"Certificate lifecycle",actions:[{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Apply policies",href:"/trust-lifecycle/dashboard"},{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Set up certificate automation",href:"/trust-lifecycle/tools"}]},{title:"DNS Trust Manager",subtitle:"DNS & DNSSEC",actions:[{label:"Update CAA records",href:"/dns/dashboard"},{label:"Add or edit a zone",href:"/dns/dashboard"},{label:"Enable DNSSEC",href:"/dns/dashboard"},{label:"Set traffic routing rules",href:"/dns/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",actions:[{label:"Issue an internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage CRL & OCSP",href:"/private-ca/dashboard"},{label:"Manage certificate templates",href:"/private-ca/certificate-templates"}]}];function w2(){const[e,t]=b.useState(!1);return l.jsxs(Bv,{children:[l.jsxs(Wv,{children:[l.jsxs(Uv,{children:[l.jsx(Vv,{children:"Hi, John Smith"}),l.jsx(Hv,{children:"What would you like to do?"}),l.jsx(Kv,{children:"Your DigiCert ONE workspace — manage certificates, policies, and trust across products."})]}),l.jsxs(Qv,{children:[l.jsx(td,{href:"/certcentral/inventory",children:"View inventory"}),l.jsx(td,{href:"/certcentral/dashboard",$primary:!0,children:"Order certificate"})]})]}),l.jsx(Gv,{children:"Browse actions by product"}),l.jsxs(Yv,{children:[l.jsx("div",{children:l.jsx(Jv,{children:v2.map(n=>l.jsxs(Xv,{children:[l.jsx(Zv,{children:n.title}),l.jsx(qv,{children:n.subtitle}),l.jsx(e2,{children:n.actions.map(r=>l.jsx("li",{children:l.jsxs(t2,{href:r.href,children:[l.jsx("span",{children:r.label}),l.jsx(Zs,{size:16,color:"currentColor"})]})},r.label))})]},n.title))})}),l.jsxs(n2,{children:[l.jsxs(r2,{children:[l.jsx(o2,{children:l.jsx(i2,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),l.jsxs(l2,{children:[l.jsx(s2,{children:"Certificate Lifecycle"}),l.jsxs(a2,{children:[l.jsx("span",{children:"Brian Trzupek · 5 min read"}),l.jsx("span",{children:"digicert.com/blog"})]}),l.jsx(u2,{children:"Certificate lifecycle management reaches an inflection point"}),l.jsx(c2,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),l.jsx(d2,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&l.jsxs(f2,{children:[l.jsxs(p2,{children:[l.jsx(h2,{children:"Spotlight"}),l.jsx(m2,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:l.jsx(qs,{size:16,color:"currentColor"})})]}),l.jsx(g2,{children:"Software Trust Manager"}),l.jsx(x2,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),l.jsx(y2,{href:"/software-trust/dashboard",children:"Learn more →"})]})]})]})]})}const k2=f.main`
  padding: 24px;
`,b2=f.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,nd=f.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function rd(){const e=it(),t=by[e.pathname]??e.pathname;return b.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),l.jsxs(k2,{children:[l.jsx(b2,{children:t}),e.pathname==="/profile"&&l.jsx(nd,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),l.jsxs(nd,{children:["This is a stub page for ",l.jsx("code",{children:e.pathname})]})]})}const Mh={enterprise:{label:"Enterprise plan",description:"Billed and managed directly through your DigiCert account team. Contract terms, renewals, and invoicing are handled by your account manager, so no self-service payment actions are needed here."},ecommerce:{label:"E-commerce plan",description:"A self-service subscription billed automatically to the payment method on file. Manage your plan, payment details, and receipts at any time from this account."}},S2={"committed-value":{label:"Committed Value",tooltip:"A contract with a committed spend amount. You receive negotiated pricing in exchange for a minimum purchase commitment over the contract term."},"negotiated-pricing":{label:"Negotiated Pricing",tooltip:"A contract with custom pricing negotiated by your account team. You pay per-unit pricing without a minimum spend commitment."}},at={name:"Sarah Mitchell",title:"Enterprise Account Manager, DigiCert",email:"sarah.mitchell@digicert.com",phone:"+1 (801) 555-0142"},j2=[{id:"document-trust",name:"Document Trust",iconType:"document",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800},{name:"Users",purchased:500,allocated:420,consumed:390,remaining:110},{name:"Identity verifications",purchased:1e3,allocated:1e3,consumed:760,remaining:240}]},{id:"software-trust",name:"Software Trust",iconType:"code",contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Code signing certificates",consumed:42,total:50},entitlements:[{name:"Code signing certificates",purchased:50,allocated:50,consumed:42,remaining:8},{name:"Signing keys",purchased:20,allocated:18,consumed:15,remaining:5},{name:"Signing events",purchased:1e4,allocated:1e4,consumed:7400,remaining:2600}]},{id:"trust-lifecycle",name:"Trust Lifecycle Manager",iconType:"cycle",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Managed certificates",consumed:1120,total:2e3},entitlements:[{name:"Managed certificates",purchased:2e3,allocated:2e3,consumed:1120,remaining:880},{name:"Seats",purchased:75,allocated:75,consumed:25,remaining:50},{name:"Discovery scans / month",purchased:100,allocated:100,consumed:64,remaining:36}]},{id:"keylocker",name:"KeyLocker",iconType:"key",contractId:"CTR-2024-KL-00045",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"DevOps Engineering",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signing keys",consumed:18,total:20},entitlements:[{name:"Signing keys",purchased:20,allocated:20,consumed:18,remaining:2},{name:"HSM partitions",purchased:4,allocated:4,consumed:3,remaining:1},{name:"Signing events / month",purchased:5e3,allocated:5e3,consumed:4100,remaining:900}]},{id:"dns",name:"DigiCert DNS",iconType:"globe",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]},{id:"device-trust",name:"Device Trust",iconType:"mobile",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Device certificates",consumed:45e3,total:1e5},entitlements:[{name:"Device certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Device groups",purchased:50,allocated:50,consumed:32,remaining:18},{name:"API calls / month",purchased:1e6,allocated:1e6,consumed:62e4,remaining:38e4}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private CA hierarchies",consumed:9,total:10},entitlements:[{name:"Private CA hierarchies",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Issued certificates",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500},{name:"Sub-CAs",purchased:25,allocated:25,consumed:20,remaining:5}]},{id:"valimail",name:"Valimail",iconType:"envelope",contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Protected domains",consumed:18,total:25},entitlements:[{name:"Protected domains",purchased:25,allocated:25,consumed:18,remaining:7},{name:"Email senders monitored",purchased:500,allocated:500,consumed:410,remaining:90},{name:"DMARC reports / month",purchased:1e5,allocated:1e5,consumed:72e3,remaining:28e3}]},{id:"ai-agents",name:"AI Agents",iconType:"sparkle",contractId:"CTR-2024-AIA-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"AI Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"Agent executions / month",consumed:132e3,total:1e5},entitlements:[{name:"Agent executions / month",purchased:1e5,allocated:1e5,consumed:132e3,remaining:-32e3},{name:"Active agents",purchased:10,allocated:10,consumed:8,remaining:2},{name:"Workflow integrations",purchased:15,allocated:15,consumed:11,remaining:4}]},{id:"quantum-central",name:"Quantum Central",iconType:"atom",contractId:"CTR-2024-QC-00005",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"no-data",primaryEntitlement:null,entitlements:[]}],vr=[{accountId:"acme-global-security",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"committed-value",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4}]},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"committed-value",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}}],C2=["over-entitlement","approaching-limit","no-data","healthy"];function $2(e){return C2.find(t=>e.includes(t))||"healthy"}function E2(e){const{id:t,name:n,iconType:r,...o}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:o.renewalDate,status:o.status,primaryEntitlement:o.primaryEntitlement,entitlements:o.entitlements,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...o}]}}function wr(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(i=>i.subscriptionType))],o=[...new Set(n.map(i=>i.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountName:e.accountName,subscriptionTypes:r,renewalDate:o.length===1?o[0]:"Varies by instance",status:$2(n.map(i=>i.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const P2=j2.map(E2);function Oh(e){let t;return e==="enterprise"?t=vr.map(n=>wr(n,["enterprise"])):e==="ecommerce"?t=vr.map(n=>wr(n,["ecommerce"])):t=[wr(vr[0],["enterprise"]),wr(vr[1],["ecommerce"]),wr(vr[2],["enterprise"])],[...P2,...t]}function T2(e){const t=e.filter(u=>u.id.startsWith("certcentral-")).length,n=e.length-t,r=[...new Set(e.map(u=>u.renewalDate))],o=e.length?e[0].renewalDate:"—",i=e.filter(u=>u.status==="approaching-limit").length,s=e.filter(u=>u.status==="over-entitlement").length,a=i+s;return{productCount:n,certCentralCount:t,earliestRenewal:o,renewalDatesCount:r.length,approaching:i,over:s,needsAttention:a}}function L2(e){const t=new Set;return e.forEach(n=>n.subscriptionTypes.forEach(r=>t.add(r))),t.has("enterprise")&&t.has("ecommerce")?{label:"Enterprise + E-commerce",sub:"Mixed billing across subscriptions"}:t.has("ecommerce")?{label:"E-commerce subscription",sub:"Self-service billing"}:{label:"Enterprise contract",sub:"Managed by your account team"}}const I2=f.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  margin-bottom: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
`,R2=f.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.blue300};
  padding-top: 1px;
`,z2=f.p`
  flex: 1;
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral800};
`,od={enterprise:"Enterprise billing is managed through your DigiCert account representative. You can view subscriptions, entitlements, usage, and renewal information here.",ecommerce:"Most of your subscriptions are managed under an Enterprise Contract through your account team. CertCentral is billed separately as a self-service E-commerce subscription.",mixed:"This environment includes both Enterprise Contract and E-commerce Subscription billing. Enterprise subscriptions are managed by your account team, while E-commerce subscriptions can be managed here."};function N2({scenario:e}){return l.jsxs(I2,{role:"note",children:[l.jsx(R2,{children:l.jsx(ao,{size:20,color:"currentColor"})}),l.jsx(z2,{children:od[e]??od.mixed})]})}const D2=f.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,M2=f.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function O2({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return l.jsx(D2,{role:"presentation",children:l.jsx(M2,{$pct:n})})}const _h=f(lr)`
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
`,Ah=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Fh=f.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`,Bh=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Wh=f.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Uh=f.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Vh=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Hh=f.span`
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  background: rgba(39, 168, 114, 0.10);
  color: #1F8F60;
`,_2=f.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,A2=f.button`
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
`,F2=f.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,B2=f.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 7px;
`,W2=f.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,id=f.p`
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
`;const ea=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
`,ta=f.p`
  margin: 0;
  font-size: 12px;
  font-style: italic;
  color: ${({theme:e})=>e.colors.neutral500};
`,Kh=f.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Qh=f.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Gh=f.span``;function U2(e){const t=e.subscriptionTypes[0];return Mh[t].label}function na({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return l.jsx(F2,{children:n.map(r=>l.jsxs("div",{children:[l.jsxs(B2,{children:[l.jsx(W2,{children:r.name}),l.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),l.jsx(O2,{consumed:r.consumed,total:r.allocated}),r.remaining<0?l.jsxs(id,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):l.jsxs(id,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function V2({subscription:e}){const[t,n]=b.useState(e.instances[0].instanceId),r=e.instances.find(a=>a.instanceId===t)||e.instances[0],o=r.subscriptionType==="enterprise",i=r.entitlements.slice(0,3),s=r.entitlements.length-i.length;return l.jsxs(_h,{to:`/settings/billing/${e.id}`,children:[l.jsxs(Ah,{children:[l.jsxs(Fh,{children:[l.jsx(Bh,{children:qn(e.iconType,20,"currentColor")}),l.jsxs(Wh,{children:[l.jsx(Uh,{children:e.name}),l.jsxs(Vh,{children:[e.subscriptionTypes.map(a=>Mh[a].label).join(" · "),e.accountName&&l.jsxs(Gh,{children:[" | ",e.accountName]})]})]})]}),l.jsxs(Hh,{children:["Renews ",e.renewalDate]})]}),l.jsx(_2,{onClick:a=>a.preventDefault(),children:e.instances.map(a=>l.jsx(A2,{type:"button",$active:a.instanceId===t,onClick:u=>{u.preventDefault(),u.stopPropagation(),n(a.instanceId)},children:a.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},a.instanceId))}),o?l.jsxs(l.Fragment,{children:[i.length>0?l.jsx(na,{entitlements:r.entitlements,maxVisible:3}):l.jsx(Qh,{children:"Usage data not available yet."}),l.jsxs(ea,{children:[l.jsx(ta,{children:"Managed by your Account Manager"}),s>0&&l.jsxs(Kh,{children:["+",s," more"]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(na,{entitlements:r.entitlements,maxVisible:3}),l.jsx(ea,{children:l.jsx(ta,{children:"Self-service subscription"})})]})]})}function H2({subscription:e}){if(e.instances.length>1)return l.jsx(V2,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:o,entitlements:i}=e,s=e.subscriptionTypes.includes("enterprise"),a=e.subscriptionTypes.includes("ecommerce"),u=i.slice(0,3),c=i.length-u.length,p=s?"Managed by your Account Manager":a?"Self-service subscription":null;return l.jsxs(_h,{to:`/settings/billing/${t}`,children:[l.jsxs(Ah,{children:[l.jsxs(Fh,{children:[l.jsx(Bh,{children:qn(r,20,"currentColor")}),l.jsxs(Wh,{children:[l.jsx(Uh,{children:n}),l.jsxs(Vh,{children:[U2(e),e.accountName&&l.jsxs(Gh,{children:[" | ",e.accountName]})]})]})]}),l.jsxs(Hh,{children:["Renews ",o]})]}),u.length>0?l.jsx(na,{entitlements:i,maxVisible:3}):l.jsx(Qh,{children:"Usage data is not available for this product yet."}),p&&l.jsxs(ea,{children:[l.jsx(ta,{children:p}),c>0&&l.jsxs(Kh,{children:["+",c," more"]})]})]})}const K2=f.main`
  padding: 32px;
`,Q2=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,G2=f.div``,Y2=f.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,J2=f.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,X2=f.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Z2=f.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,q2=f.button`
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
`,ew=[{id:"mixed",label:"Enterprise + E-commerce"},{id:"enterprise",label:"Enterprise only"},{id:"ecommerce",label:"E-commerce only"}],tw=f.div`
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
`,_o=f.div`
  padding: 18px 20px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Ao=f.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Fo=f.p`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Bo=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,nw=f.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,rw=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;function ow({scenario:e,onScenarioChange:t}){b.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]);const n=Oh(e),r=T2(n),o=L2(n);return l.jsxs(K2,{children:[l.jsxs(Q2,{children:[l.jsxs(G2,{children:[l.jsx(Y2,{children:"My subscriptions"}),l.jsx(J2,{children:"View your active product subscriptions, entitlement usage, and renewal information."})]}),l.jsxs(X2,{children:["Scenario:",l.jsx(Z2,{children:ew.map(i=>l.jsx(q2,{type:"button",$active:e===i.id,onClick:()=>t(i.id),children:i.label},i.id))})]})]}),l.jsx(N2,{scenario:e}),l.jsxs(tw,{children:[l.jsxs(_o,{children:[l.jsx(Ao,{children:"Active subscriptions"}),l.jsxs(Fo,{children:[r.productCount+1," products"]}),l.jsxs(Bo,{children:[r.certCentralCount," CertCentral account",r.certCentralCount!==1?"s":""," linked"]})]}),l.jsxs(_o,{children:[l.jsx(Ao,{children:"Next renewal"}),l.jsx(Fo,{children:r.earliestRenewal}),l.jsx(Bo,{children:r.renewalDatesCount>1?"Renewal dates vary by product":"All products renew on this date"})]}),l.jsxs(_o,{children:[l.jsx(Ao,{children:"Usage status"}),l.jsx(Fo,{children:r.needsAttention>0?`${r.needsAttention} need attention`:"All healthy"}),l.jsxs(Bo,{children:[r.approaching," approaching limit · ",r.over," over entitlement"]})]}),l.jsxs(_o,{children:[l.jsx(Ao,{children:"Billing type"}),l.jsx(Fo,{children:o.label}),l.jsx(Bo,{children:o.sub})]})]}),l.jsx(nw,{children:"Product subscriptions"}),l.jsx(rw,{children:n.map(i=>l.jsx(H2,{subscription:i},i.id))})]})}const ld=f.main`
  padding: 32px;
`,sd=f(lr)`
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
`,iw=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,lw=f.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,sw=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,aw=f.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,uw=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,cw=f.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,dw=f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,fw=f.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,pw=f.button`
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
`,xo=f.section`
  margin-bottom: 32px;
`,iu=f.h2`
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral600};
`,Yh=f.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||3}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ll=f.div`
  padding: 18px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,sl=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,al=f.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral500};
`,uo=f.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
  display: flex;
  align-items: baseline;
  gap: 5px;
`,Jh=f.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral600};
`,lu=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,hw=f.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(39,168,114,0.10);
  color: #1F8F60;
`,mw=f.button`
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
`,gw=f.div`
  position: relative;
  display: inline-flex;
`,xw=f.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -8px;
  width: 320px;
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
`,ad=f.div`
  margin: 0 0 10px;
`,ud=f.span`
  display: block;
  font-size: 11px;
  opacity: 0.7;
`,cd=f.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
`;f.button`
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
`;f.div`
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
`;const yw=f.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function Xh({instance:e,isCertCentral:t}){const[n,r]=b.useState(!1),o=b.useRef(null);b.useEffect(()=>{if(!n)return;const p=h=>{o.current&&!o.current.contains(h.target)&&r(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[n]);const i=e.subscriptionType==="enterprise",s=i?"Enterprise":"E-commerce",a=i&&e.contractType?S2[e.contractType]:null,u=a?`${a.label} contract`:e.billing?e.billing.plan:null;let c;return i&&!t?c=l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"This product is covered by an enterprise agreement with DigiCert."}),l.jsx("p",{children:"Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team."}),l.jsx("p",{children:"Contact your account manager for contract-related questions."})]}):i&&t&&e.contractType==="committed-value"?c=l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"This CertCentral account is managed through an enterprise agreement with DigiCert."}),l.jsxs(ad,{children:[l.jsx(ud,{children:"Contract Type:"}),l.jsx(cd,{children:"Committed Value"})]}),l.jsx("p",{children:"Your organization has committed to a minimum spend amount over the contract term and receives negotiated pricing in return."}),l.jsx("p",{children:"Billing, renewals, and contract changes are managed through your DigiCert account team."})]}):i&&t&&e.contractType==="negotiated-pricing"?c=l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"This CertCentral account is managed through an enterprise agreement with DigiCert."}),l.jsxs(ad,{children:[l.jsx(ud,{children:"Contract Type:"}),l.jsx(cd,{children:"Negotiated Pricing"})]}),l.jsx("p",{children:"Your organization has negotiated pricing for specific products. Purchases and usage are billed according to the agreed pricing terms."}),l.jsx("p",{children:"Billing, renewals, and contract changes are managed through your DigiCert account team."})]}):c=l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"This subscription is purchased and managed through DigiCert's self-service purchasing experience."}),l.jsx("p",{children:"You can manage payment methods, receipts, renewals, and purchases directly from this account."})]}),l.jsxs(ll,{children:[l.jsx(sl,{children:l.jsxs(al,{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:["Plan type",l.jsxs(gw,{ref:o,children:[l.jsx(mw,{type:"button",onClick:()=>r(p=>!p),children:l.jsx(ao,{size:13,color:"currentColor"})}),n&&l.jsx(xw,{children:c})]})]})}),l.jsx(uo,{children:s}),u&&l.jsx(yw,{children:u})]})}function vw(e){if(!e.length)return null;const t=e.reduce((r,o)=>r+o.allocated,0),n=e.reduce((r,o)=>r+o.consumed,0);return t===0?null:Math.round(n/t*100)}function Zh({entitlements:e}){const t=vw(e);return l.jsxs(ll,{children:[l.jsxs(sl,{children:[l.jsx(al,{children:"Usage"}),l.jsx(vy,{size:15,color:"#9CA3AF"})]}),t!==null?l.jsxs(uo,{children:[t,"%",l.jsx(Jh,{children:"consumed"})]}):l.jsx(uo,{children:"—"}),l.jsx(lu,{children:e.length?`${e.length} entitlement types`:"No usage data available"})]})}function ww(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function qh({dateStr:e,sub:t}){const n=ww(e);return l.jsxs(ll,{children:[l.jsxs(sl,{children:[l.jsx(al,{children:"Renewal date"}),l.jsx(yy,{size:15,color:"#9CA3AF"})]}),l.jsx(uo,{children:e}),l.jsx(lu,{children:t||`${n} days remaining`})]})}const kw=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,e0=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,Nt=f.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Dt=f.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 14px 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,t0=f.span`
  font-weight: 500;
  color: ${({$tone:e,theme:t})=>e==="error"?"#DC2626":e==="warning"?"#D97706":t.colors.neutral900};
`,n0=f.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`;function bw({entitlements:e}){return e.length===0?l.jsx(n0,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):l.jsx(kw,{children:l.jsxs(e0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(Nt,{style:{width:"30%"},children:"Entitlement"}),l.jsx(Nt,{$align:"right",children:"Allocated"}),l.jsx(Nt,{$align:"right",children:"Used"}),l.jsx(Nt,{$align:"right",children:"Remaining"})]})}),l.jsx("tbody",{children:e.map(t=>{const n=t.allocated>0?t.consumed/t.allocated:0,r=t.remaining<0?"error":n>=.8?"warning":void 0;return l.jsxs("tr",{children:[l.jsx(Dt,{children:t.name}),l.jsx(Dt,{$align:"right",children:t.allocated.toLocaleString()}),l.jsx(Dt,{$align:"right",children:t.consumed.toLocaleString()}),l.jsx(Dt,{$align:"right",children:l.jsx(t0,{$tone:r,children:t.remaining<0?`Exceeded by ${Math.abs(t.remaining).toLocaleString()}`:t.remaining===0?"0":t.remaining.toLocaleString()})})]},t.name)})})]})})}const Sw=f.div`
  padding: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  display: flex;
  flex-direction: column;
  gap: 20px;
`,jw=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`,Cw=f.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,$w=f.div`
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
`,Ew=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,Pw=f.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Tw=f.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Lw=f.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 13px;
`,dd=f.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Iw=f.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,Rw=f.span`
  color: ${({theme:e})=>e.colors.neutral700};
`,zw=f.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.neutral800};
`,Nw=f.span`
  display: flex;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`,fd=f.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
  margin-bottom: 6px;
`,pd=f.div`
  display: flex;
  flex-direction: column;
`,Dw=f.input`
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
`;const Mw=f.textarea`
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
`,Ow=f.button`
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
`,_w=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,Aw=f.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`;function Fw({isCertCentral:e}){const t=at.name.split(" ").map(r=>r[0]).join(""),n=e?"Need more licenses, additional capacity, contract changes, billing help, or renewal assistance? Your DigiCert account manager can help.":"Have questions about this product, need help with configuration, or want to discuss your entitlements? Your DigiCert account manager can help.";return l.jsxs(xo,{children:[l.jsx(iu,{children:"Your DigiCert account manager"}),l.jsxs(Sw,{children:[l.jsxs(jw,{children:[l.jsxs(Cw,{children:[l.jsx($w,{children:t}),l.jsxs(Ew,{children:[l.jsx(Pw,{children:at.name}),l.jsx(Tw,{children:at.title})]})]}),l.jsxs(Lw,{children:[l.jsxs(dd,{children:[l.jsx(Rh,{size:14,color:"currentColor"}),l.jsx(Iw,{href:`mailto:${at.email}`,children:at.email})]}),l.jsxs(dd,{children:[l.jsx(sy,{size:14,color:"currentColor"}),l.jsx(Rw,{children:at.phone})]})]})]}),l.jsxs(zw,{children:[l.jsx(Nw,{children:l.jsx(ao,{size:16,color:"currentColor"})}),l.jsx("span",{children:n})]}),l.jsxs(pd,{children:[l.jsx(fd,{htmlFor:"contact-subject",children:"Subject"}),l.jsx(Dw,{id:"contact-subject",type:"text",placeholder:"e.g. Request additional SSL/TLS licenses"})]}),l.jsxs(pd,{children:[l.jsx(fd,{htmlFor:"contact-message",children:"Message"}),l.jsx(Mw,{id:"contact-message",placeholder:"Describe what you need help with...",rows:3})]}),l.jsxs(_w,{children:[l.jsxs(Aw,{children:["Your message will be sent directly to ",at.name,"."]}),l.jsx(Ow,{type:"button",children:"Send message"})]})]})]})}function Bw({instance:e,isCertCentral:t}){return l.jsx(xo,{children:l.jsxs(Yh,{$cols:3,children:[l.jsx(Xh,{instance:e,isCertCentral:t}),l.jsx(qh,{dateStr:e.renewalDate,sub:e.contractTerm}),l.jsx(Zh,{entitlements:e.entitlements})]})})}const Ww=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`,Uw=f.button`
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
`,hd=f(lr)`
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
`;function Vw({instance:e,isCertCentral:t}){const[n,r]=e.billing.price.split(" / ");return l.jsxs(xo,{children:[l.jsxs(Yh,{$cols:4,children:[l.jsx(Xh,{instance:e,isCertCentral:t}),l.jsxs(ll,{children:[l.jsxs(sl,{children:[l.jsx(al,{children:"Monthly cost"}),l.jsx(ky,{size:15,color:"#9CA3AF"})]}),l.jsxs(uo,{$blue:!0,children:[n,l.jsxs(Jh,{children:["/ ",r]})]}),l.jsx(lu,{children:e.billing.plan})]}),l.jsx(qh,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"}),l.jsx(Zh,{entitlements:e.entitlements})]}),l.jsxs(Ww,{children:[l.jsxs(Uw,{type:"button",children:[l.jsx(wy,{size:16,color:"currentColor"}),"Buy certificates"]}),l.jsx(hd,{to:"/settings/billing/payment-details",children:"Manage payment details"}),l.jsx(hd,{to:"/settings/billing/receipts",children:"View receipts"})]})]})}const Hw=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,Kw=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,Qw=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Gw=f.button`
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
`,Yw=f.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Jw=f.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,Xw=f.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Zw=f.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,qw=f.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,ek=f.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function tk({category:e}){const[t,n]=b.useState(e.products.length>0);return l.jsxs(Hw,{children:[l.jsxs(Kw,{onClick:()=>n(r=>!r),children:[l.jsxs(Qw,{children:[l.jsx(Gw,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(o=>!o)},children:t?l.jsx(zh,{size:14,color:"currentColor"}):l.jsx(Ar,{size:14,color:"currentColor"})}),l.jsx(Yw,{children:e.name})]}),l.jsx(Jw,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&l.jsx(Xw,{children:e.products.length===0?l.jsx(ek,{children:"No products purchased yet."}):l.jsxs(e0,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(Nt,{style:{width:"40%"},children:"Product"}),l.jsx(Nt,{$align:"right",children:"Purchased"}),l.jsx(Nt,{$align:"right",children:"Used"}),l.jsx(Nt,{$align:"right",children:"Available"})]})}),l.jsx("tbody",{children:e.products.map((r,o)=>l.jsxs("tr",{children:[l.jsxs(Dt,{children:[l.jsx(Zw,{children:r.name}),l.jsx(qw,{children:r.type})]}),l.jsx(Dt,{$align:"right",children:r.purchased}),l.jsx(Dt,{$align:"right",children:r.used}),l.jsx(Dt,{$align:"right",children:l.jsx(t0,{$tone:r.available===0?"error":void 0,children:r.available})})]},o))})]})})]})}function nk({categories:e}){return l.jsxs(xo,{children:[l.jsx(iu,{children:"Products"}),e.map(t=>l.jsx(tk,{category:t},t.id))]})}function rk({scenario:e}){const{subscriptionId:t}=ux(),[n,r]=b.useState(null),o=Oh(e).find(a=>a.id===t),i=(t==null?void 0:t.startsWith("certcentral-"))??!1;if(b.useEffect(()=>{document.title=o?`${o.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[o==null?void 0:o.id,o==null?void 0:o.name]),b.useEffect(()=>{var a;r(((a=o==null?void 0:o.instances[0])==null?void 0:a.instanceId)??null)},[t,e]),!o)return l.jsxs(ld,{children:[l.jsxs(sd,{to:"/settings/billing",children:[l.jsx(Gt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(n0,{children:"This subscription is not available in the current scenario."})]});const s=o.instances.find(a=>a.instanceId===n)||o.instances[0];return l.jsxs(ld,{children:[l.jsxs(sd,{to:"/settings/billing",children:[l.jsx(Gt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(iw,{children:l.jsxs(lw,{children:[l.jsx(sw,{children:qn(o.iconType,24,"currentColor")}),l.jsxs(aw,{children:[l.jsxs(uw,{children:[l.jsx(cw,{children:o.name}),l.jsx(hw,{children:"Active"})]}),o.accountName&&l.jsx(dw,{children:o.accountName})]})]})}),o.instances.length>1&&l.jsx(fw,{role:"tablist","aria-label":"CertCentral instances",children:o.instances.map(a=>l.jsx(pw,{role:"tab",type:"button",$active:a.instanceId===s.instanceId,"aria-selected":a.instanceId===s.instanceId,onClick:()=>r(a.instanceId),children:a.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},a.instanceId))}),s.subscriptionType==="enterprise"?l.jsxs(l.Fragment,{children:[l.jsx(Bw,{instance:s,isCertCentral:i}),l.jsxs(xo,{children:[l.jsx(iu,{children:"Entitlements and usage"}),l.jsx(bw,{entitlements:s.entitlements})]}),l.jsx(Fw,{isCertCentral:i})]}):l.jsxs(l.Fragment,{children:[l.jsx(Vw,{instance:s,isCertCentral:i}),l.jsx(nk,{categories:s.productCategories})]})]})}const ok=f.div`
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
`,ik=f.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,lk=f.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,sk=f.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function r0({icon:e,title:t,children:n,action:r}){return l.jsxs(ok,{children:[l.jsx(ik,{children:e}),t&&l.jsx(lk,{children:t}),l.jsx(sk,{children:n}),r]})}const o0=f.a`
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
`,ak=f(o0)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function i0({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${at.name})`}),o=`mailto:${at.email}?${r.toString()}`,i=e==="outline"?ak:o0;return l.jsx(i,{href:o,...n,children:"Contact account manager"})}const md=f.main`
  padding: 32px;
`,gd=f(lr)`
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
`,xd=f.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,yd=f.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,uk=f.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,Vl=f.div`
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 16px 20px;
  border: 1px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral200};
  border-left: 3px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Hl=f.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;
  align-items: center;
  gap: 6px;
`,Kl=f.p`
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
`,su=f.button`
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
`,fk=f(su)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,pk=f(su)``,hk=f.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,mk=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,St=f.th`
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
`,gk=f.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,Ql={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},xk=f.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=Ql[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=Ql[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=Ql[e])==null?void 0:t.color)||"#374151"}};
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
`,bk=["All","Invoices","Receipts","Refunds"],vd=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function Sk({scenario:e}){const[t,n]=b.useState("All"),[r,o]=b.useState(!1);if(b.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return l.jsxs(md,{children:[l.jsxs(gd,{to:"/settings/billing",children:[l.jsx(Gt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(xd,{children:"Receipts and invoices"}),l.jsx(yd,{children:"Download receipts, invoices, and other billing documents for your account."}),l.jsx(r0,{icon:l.jsx(py,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:l.jsx(i0,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const i=4,s="$2,520.00",a="Nov 20, 2025",u=t==="All"?vd:vd.filter(c=>t==="Invoices"?c.type==="Invoice":t==="Receipts"?c.type==="Receipt":t==="Refunds"?c.type==="Refund":!0);return l.jsxs(md,{children:[l.jsxs(gd,{to:"/settings/billing",children:[l.jsx(Gt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(xd,{children:"Receipts and invoices"}),l.jsx(yd,{children:"Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage."}),l.jsxs(uk,{children:[l.jsxs(Vl,{$alert:!0,children:[l.jsxs(Hl,{children:[l.jsx(Bc,{size:14,color:"#DC2626"}),"Invoices overdue"]}),l.jsx(Kl,{children:i})]}),l.jsxs(Vl,{$alert:!0,children:[l.jsxs(Hl,{children:[l.jsx(Bc,{size:14,color:"#DC2626"}),"Total balance overdue"]}),l.jsx(Kl,{$blue:!0,children:s})]}),l.jsxs(Vl,{children:[l.jsx(Hl,{children:"Next invoice due"}),l.jsx(Kl,{$blue:!0,children:a})]})]}),l.jsxs(ck,{children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(su,{type:"button",onClick:()=>o(c=>!c),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,l.jsx(Ar,{size:13,color:"currentColor"})]}),r&&l.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:bk.map(c=>l.jsx("button",{type:"button",onClick:()=>{n(c),o(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:c===t?"#EAF1FB":"white",color:c===t?"#0174C3":"#1A1F27",fontWeight:c===t?500:400},children:c},c))})]}),l.jsxs(fk,{type:"button",children:[l.jsx(xy,{size:14,color:"currentColor"}),"Filter",l.jsx(Ar,{size:13,color:"currentColor"})]}),l.jsx(dk,{children:l.jsxs(pk,{type:"button",children:["Download CSV",l.jsx(Ar,{size:13,color:"currentColor"})]})})]}),l.jsxs(hk,{children:[l.jsxs(mk,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx(St,{style:{width:"140px"},children:"Invoice"}),l.jsx(St,{children:"Type"}),l.jsx(St,{children:"Issued on"}),l.jsx(St,{children:"Status"}),l.jsx(St,{$align:"right",children:"Amount"}),l.jsx(St,{children:"Due on"}),l.jsx(St,{children:"Ordered by"}),l.jsx(St,{})]})}),l.jsx("tbody",{children:u.map((c,p)=>l.jsxs("tr",{children:[l.jsx(jt,{children:l.jsx(gk,{href:"#",children:c.id})}),l.jsx(jt,{children:c.type}),l.jsx(jt,{children:c.issuedOn}),l.jsx(jt,{children:l.jsx(xk,{$status:c.status,children:c.status})}),l.jsx(jt,{$align:"right",children:c.amount}),l.jsx(jt,{children:c.dueOn}),l.jsx(jt,{children:c.orderedBy}),l.jsx(jt,{children:l.jsxs(yk,{children:[(c.status==="Overdue"||c.status==="Upcoming")&&l.jsx(vk,{type:"button",children:"Pay"}),l.jsx(wk,{type:"button","aria-label":"Download",children:l.jsx(gy,{size:15,color:"currentColor"})})]})})]},`${c.id}-${p}`))})]}),l.jsxs(kk,{children:["1 to ",u.length," of 8,618"]})]})]})}const wd=f.main`
  padding: 32px;
`,kd=f(lr)`
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
`,jk=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,Ck=f.div``,bd=f.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Sd=f.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,$k=f.a`
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
`,jd=f.div`
  margin-bottom: 32px;
`,Cd=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,$d=f.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ed=f.button`
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
`,l0=f.button`
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
`,Mk=f.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ok=f(l0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Wo=f.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,Uo=f.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Vo=f.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,_k=f.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`;function Ak({scenario:e}){return b.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?l.jsxs(wd,{children:[l.jsxs(kd,{to:"/settings/billing",children:[l.jsx(Gt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsx(bd,{children:"Payment details"}),l.jsx(Sd,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),l.jsx(r0,{icon:l.jsx(my,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:l.jsx(i0,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):l.jsxs(wd,{children:[l.jsxs(kd,{to:"/settings/billing",children:[l.jsx(Gt,{size:14,color:"currentColor"}),"Back to Subscriptions"]}),l.jsxs(jk,{children:[l.jsxs(Ck,{children:[l.jsx(bd,{children:"Payment details"}),l.jsx(Sd,{children:"Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method."})]}),l.jsxs($k,{href:"#",children:[l.jsx(ao,{size:14,color:"currentColor"}),"Need help?"]})]}),l.jsxs(jd,{children:[l.jsxs(Cd,{children:[l.jsx($d,{children:"Payment methods"}),l.jsxs(Ed,{type:"button",children:[l.jsx(Ac,{size:14,color:"currentColor"}),"Add payment method"]})]}),l.jsxs(Ek,{children:[l.jsxs(Pk,{children:[l.jsx(Tk,{children:"VISA"}),l.jsxs(Lk,{children:[l.jsxs(Ik,{children:[l.jsx(Rk,{children:"Visa •••• 8350"}),l.jsx(zk,{children:"Default"})]}),l.jsx(Nk,{children:"Expires 02/28"})]})]}),l.jsx(l0,{type:"button","aria-label":"Payment method options",children:l.jsx(Fc,{size:16,color:"currentColor"})})]})]}),l.jsxs(jd,{children:[l.jsxs(Cd,{children:[l.jsx($d,{children:"Billing contacts"}),l.jsxs(Ed,{type:"button",children:[l.jsx(Ac,{size:14,color:"currentColor"}),"Add billing contact"]})]}),l.jsxs(Dk,{children:[l.jsx(Ok,{type:"button","aria-label":"Contact options",children:l.jsx(Fc,{size:16,color:"currentColor"})}),l.jsx(Mk,{children:"John Doe"}),l.jsxs(Wo,{children:[l.jsx(Uo,{children:"Address"}),l.jsxs(Vo,{children:["123 Main Street",l.jsx("br",{}),"Suite 100",l.jsx("br",{}),"San Francisco, CA 94105",l.jsx("br",{}),"United States"]})]}),l.jsxs(Wo,{children:[l.jsx(Uo,{children:"Email address"}),l.jsx(Vo,{children:"john.doe@winthecustomer.com"})]}),l.jsxs(Wo,{children:[l.jsx(Uo,{children:"Phone number"}),l.jsx(Vo,{children:"650 123 4567"})]}),l.jsxs(Wo,{children:[l.jsxs(_k,{children:[l.jsx(Uo,{style:{margin:0},children:"VAT ID"}),l.jsx(ao,{size:14,color:"#0174C3"})]}),l.jsx(Vo,{children:"23503820"})]})]})]})]})}function Fk({containerRef:e}){const{pathname:t}=it();return b.useEffect(()=>{e.current?e.current.scrollTop=0:window.scrollTo(0,0)},[t,e]),null}const Bk=X1`
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
`,Wk=f.div`
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
`;function Pd(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function Uk(){const[e,t]=b.useState(()=>typeof window<"u"?Pd():"desktop");return b.useEffect(()=>{const n=()=>t(Pd());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function Vk(){const[e,t]=b.useState("dashboard"),[n,r]=b.useState(!1),[o,i]=b.useState(!0),[s,a]=b.useState(null),[u,c]=b.useState("mixed"),p=b.useCallback(()=>r(m=>!m),[]),h=b.useCallback(()=>r(!1),[]),x=b.useCallback(()=>i(m=>!m),[]),w=b.useCallback(m=>{t(m),i(!0)},[]),y=b.useCallback(m=>{t(m),i(!0),r(!1)},[]),S=b.useCallback(m=>{a(d=>d===m?null:m)},[]),$=b.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:o,activeTopNav:s,billingScenario:u,toggleDrawer:p,closeDrawer:h,toggleSpoke:x,setBillingScenario:c,selectProduct:w,selectProductFromDrawer:y,openTopNav:S,closeTopNav:$}}function Hk(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:o,toggleDrawer:i,closeDrawer:s,toggleSpoke:a,setBillingScenario:u,selectProduct:c,selectProductFromDrawer:p,openTopNav:h,closeTopNav:x}=Vk(),w=Uk(),y=w==="mobile",S=b.useRef(null);b.useEffect(()=>{w!=="mobile"&&t&&s()},[w,t,s]),b.useEffect(()=>{const d=S.current;d&&(y&&t?(d.setAttribute("inert",""),d.setAttribute("aria-hidden","true")):(d.removeAttribute("inert"),d.removeAttribute("aria-hidden")))},[y,t]);const $=n?"276px":"56px",m=r==="ai-assist"?"400px":"0px";return l.jsxs(l.Fragment,{children:[l.jsx(Bk,{}),l.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),l.jsx(pv,{isDrawerOpen:t,onToggleDrawer:i,activeTopNav:r,onOpenTopNav:h,onCloseTopNav:x,onSelectProduct:c,cartCount:3}),l.jsx(vv,{activeProductId:e,onSelectProduct:c}),l.jsx(zv,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:a,billingScenario:o}),l.jsx(Fv,{open:t,activeProductId:e,onSelectProduct:p,onClose:s}),l.jsxs(Wk,{ref:S,id:"main-content",$leftOffset:$,$rightOffset:m,children:[l.jsx(Fk,{containerRef:S}),l.jsxs($x,{children:[l.jsx(Cr,{path:"/",element:l.jsx(jx,{to:"/dashboard",replace:!0})}),$y.filter(d=>d!=="/").map(d=>{let g=l.jsx(rd,{});return d==="/dashboard"?g=l.jsx(w2,{}):d==="/settings/billing"?g=l.jsx(ow,{scenario:o,onScenarioChange:u}):d==="/settings/billing/receipts"?g=l.jsx(Sk,{scenario:o}):d==="/settings/billing/payment-details"&&(g=l.jsx(Ak,{scenario:o})),l.jsx(Cr,{path:d,element:g},d)}),l.jsx(Cr,{path:"/settings/billing/:subscriptionId",element:l.jsx(rk,{scenario:o})}),l.jsx(Cr,{path:"*",element:l.jsx(rd,{})})]})]})]})}Up(document.getElementById("root")).render(l.jsx(b.StrictMode,{children:l.jsx(Nx,{children:l.jsx(K1,{theme:Z1,children:l.jsx(Hk,{})})})}));
