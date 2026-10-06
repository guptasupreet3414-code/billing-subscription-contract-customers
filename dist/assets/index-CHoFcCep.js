function V0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function H0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ap={exports:{}},Yo={},cp={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),Q0=Symbol.for("react.portal"),G0=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),J0=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),q0=Symbol.for("react.forward_ref"),Z0=Symbol.for("react.suspense"),em=Symbol.for("react.memo"),tm=Symbol.for("react.lazy"),Rc=Symbol.iterator;function nm(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dp=Object.assign,pp={};function pr(e,t,n){this.props=e,this.context=t,this.refs=pp,this.updater=n||up}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fp(){}fp.prototype=pr.prototype;function $a(e,t,n){this.props=e,this.context=t,this.refs=pp,this.updater=n||up}var Sa=$a.prototype=new fp;Sa.constructor=$a;dp(Sa,pr.prototype);Sa.isPureReactComponent=!0;var zc=Array.isArray,hp=Object.prototype.hasOwnProperty,Ea={current:null},mp={key:!0,ref:!0,__self:!0,__source:!0};function gp(e,t,n){var r,i={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)hp.call(t,r)&&!mp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wi,type:e,key:l,ref:s,props:i,_owner:Ea.current}}function rm(e,t){return{$$typeof:wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===wi}function im(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dc=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?im(""+e.key):t.toString(36)}function Zi(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case wi:case Q0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Sl(s,0):r,zc(i)?(n="",e!=null&&(n=e.replace(Dc,"$&/")+"/"),Zi(i,t,n,"",function(d){return d})):i!=null&&(Pa(i)&&(i=rm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Dc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",zc(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+Sl(l,a);s+=Zi(l,t,n,c,i)}else if(c=nm(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+Sl(l,a++),s+=Zi(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ei(e,t,n){if(e==null)return e;var r=[],i=0;return Zi(e,r,"","",function(l){return t.call(n,l,i++)}),r}function om(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},eo={transition:null},lm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:eo,ReactCurrentOwner:Ea};function xp(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Ei,forEach:function(e,t,n){Ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ei(e,function(){t++}),t},toArray:function(e){return Ei(e,function(t){return t})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=pr;O.Fragment=G0;O.Profiler=J0;O.PureComponent=$a;O.StrictMode=K0;O.Suspense=Z0;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;O.act=xp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dp({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Ea.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)hp.call(t,c)&&!mp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:wi,type:e.type,key:i,ref:l,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:X0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Y0,_context:e},e.Consumer=e};O.createElement=gp;O.createFactory=function(e){var t=gp.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:q0,render:e}};O.isValidElement=Pa;O.lazy=function(e){return{$$typeof:tm,_payload:{_status:-1,_result:e},_init:om}};O.memo=function(e,t){return{$$typeof:em,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};O.unstable_act=xp;O.useCallback=function(e,t){return Ce.current.useCallback(e,t)};O.useContext=function(e){return Ce.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};O.useEffect=function(e,t){return Ce.current.useEffect(e,t)};O.useId=function(){return Ce.current.useId()};O.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Ce.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};O.useRef=function(e){return Ce.current.useRef(e)};O.useState=function(e){return Ce.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Ce.current.useTransition()};O.version="18.3.1";cp.exports=O;var v=cp.exports;const ve=H0(v),sm=V0({__proto__:null,default:ve},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am=v,cm=Symbol.for("react.element"),um=Symbol.for("react.fragment"),dm=Object.prototype.hasOwnProperty,pm=am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fm={key:!0,ref:!0,__self:!0,__source:!0};function yp(e,t,n){var r,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)dm.call(t,r)&&!fm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cm,type:e,key:l,ref:s,props:i,_owner:pm.current}}Yo.Fragment=um;Yo.jsx=yp;Yo.jsxs=yp;ap.exports=Yo;var o=ap.exports,vp={exports:{}},Oe={},wp={exports:{}},bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,z){var D=L.length;L.push(z);e:for(;0<D;){var H=D-1>>>1,U=L[H];if(0<i(U,z))L[H]=z,L[D]=U,D=H;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var z=L[0],D=L.pop();if(D!==z){L[0]=D;e:for(var H=0,U=L.length,ae=U>>>1;H<ae;){var ne=2*(H+1)-1,oe=L[ne],ze=ne+1,Fe=L[ze];if(0>i(oe,D))ze<U&&0>i(Fe,oe)?(L[H]=Fe,L[ze]=D,H=ze):(L[H]=oe,L[ne]=D,H=ne);else if(ze<U&&0>i(Fe,D))L[H]=Fe,L[ze]=D,H=ze;else break e}}return z}function i(L,z){var D=L.sortIndex-z.sortIndex;return D!==0?D:L.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],d=[],m=1,h=null,g=3,C=!1,j=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(L){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=L)r(d),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(d)}}function k(L){if(y=!1,p(L),!j)if(n(c)!==null)j=!0,Lt(b);else{var z=n(d);z!==null&&an(k,z.startTime-L)}}function b(L,z){j=!1,y&&(y=!1,x(w),w=-1),C=!0;var D=g;try{for(p(z),h=n(c);h!==null&&(!(h.expirationTime>z)||L&&!_());){var H=h.callback;if(typeof H=="function"){h.callback=null,g=h.priorityLevel;var U=H(h.expirationTime<=z);z=e.unstable_now(),typeof U=="function"?h.callback=U:h===n(c)&&r(c),p(z)}else r(c);h=n(c)}if(h!==null)var ae=!0;else{var ne=n(d);ne!==null&&an(k,ne.startTime-z),ae=!1}return ae}finally{h=null,g=D,C=!1}}var E=!1,$=null,w=-1,T=5,I=-1;function _(){return!(e.unstable_now()-I<T)}function te(){if($!==null){var L=e.unstable_now();I=L;var z=!0;try{z=$(!0,L)}finally{z?B():(E=!1,$=null)}}else E=!1}var B;if(typeof f=="function")B=function(){f(te)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,sn=Se.port2;Se.port1.onmessage=te,B=function(){sn.postMessage(null)}}else B=function(){S(te,0)};function Lt(L){$=L,E||(E=!0,B())}function an(L,z){w=S(function(){L(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){j||C||(j=!0,Lt(b))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var D=g;g=z;try{return L()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var D=g;g=L;try{return z()}finally{g=D}},e.unstable_scheduleCallback=function(L,z,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,L){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=D+U,L={id:m++,callback:z,priorityLevel:L,startTime:D,expirationTime:U,sortIndex:-1},D>H?(L.sortIndex=D,t(d,L),n(c)===null&&L===n(d)&&(y?(x(w),w=-1):y=!0,an(k,D-H))):(L.sortIndex=U,t(c,L),j||C||(j=!0,Lt(b))),L},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(L){var z=g;return function(){var D=g;g=z;try{return L.apply(this,arguments)}finally{g=D}}}})(bp);wp.exports=bp;var hm=wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm=v,Ae=hm;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,Yr={};function En(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Yr[e]=t,e=0;e<t.length;e++)jp.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,gm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nc={},Mc={};function xm(e){return hs.call(Mc,e)?!0:hs.call(Nc,e)?!1:gm.test(e)?Mc[e]=!0:(Nc[e]=!0,!1)}function ym(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vm(e,t,n,r){if(t===null||typeof t>"u"||ym(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function La(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ta,La);ge[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ta,La);ge[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ta,La);ge[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ia(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vm(t,n,i,r)&&(n=null),r||i===null?xm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pi=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Ra=Symbol.for("react.strict_mode"),ms=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),Cp=Symbol.for("react.context"),za=Symbol.for("react.forward_ref"),gs=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),$p=Symbol.for("react.offscreen"),Ac=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,El;function Lr(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Pl=!1;function Tl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function wm(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=Tl(e.type,!1),e;case 11:return e=Tl(e.type.render,!1),e;case 1:return e=Tl(e.type,!0),e;default:return""}}function ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Dn:return"Portal";case ms:return"Profiler";case Ra:return"StrictMode";case gs:return"Suspense";case xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cp:return(e.displayName||"Context")+".Consumer";case kp:return(e._context.displayName||"Context")+".Provider";case za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return t=e.displayName||null,t!==null?t:ys(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return ys(e(t))}catch{}}return null}function bm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ys(t);case 8:return t===Ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=Sp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=jm(e))}function Ep(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pp(e,t){t=t.checked,t!=null&&Ia(e,"checked",t,!1)}function ws(e,t){Pp(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&bs(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _c(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bs(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function js(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Ir(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Tp(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,Ip=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},km=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){km.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Rp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function zp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cs(e,t){if(t){if(Cm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function $s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ss=null;function Na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,Kn=null,Jn=null;function Uc(e){if(e=ki(e)){if(typeof Es!="function")throw Error(P(280));var t=e.stateNode;t&&(t=tl(t),Es(e.stateNode,e.type,t))}}function Dp(e){Kn?Jn?Jn.push(e):Jn=[e]:Kn=e}function Np(){if(Kn){var e=Kn,t=Jn;if(Jn=Kn=null,Uc(e),t)for(e=0;e<t.length;e++)Uc(t[e])}}function Mp(e,t){return e(t)}function Ap(){}var Ll=!1;function Op(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return Mp(e,t,n)}finally{Ll=!1,(Kn!==null||Jn!==null)&&(Ap(),Np())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ps=!1;if(bt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ps=!1}function $m(e,t,n,r,i,l,s,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var _r=!1,wo=null,bo=!1,Ts=null,Sm={onError:function(e){_r=!0,wo=e}};function Em(e,t,n,r,i,l,s,a,c){_r=!1,wo=null,$m.apply(Sm,arguments)}function Pm(e,t,n,r,i,l,s,a,c){if(Em.apply(this,arguments),_r){if(_r){var d=wo;_r=!1,wo=null}else throw Error(P(198));bo||(bo=!0,Ts=d)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if(Pn(e)!==e)throw Error(P(188))}function Tm(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Wc(i),e;if(l===r)return Wc(i),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Fp(e){return e=Tm(e),e!==null?Bp(e):null}function Bp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bp(e);if(t!==null)return t;e=e.sibling}return null}var Up=Ae.unstable_scheduleCallback,Vc=Ae.unstable_cancelCallback,Lm=Ae.unstable_shouldYield,Im=Ae.unstable_requestPaint,ie=Ae.unstable_now,Rm=Ae.unstable_getCurrentPriorityLevel,Ma=Ae.unstable_ImmediatePriority,Wp=Ae.unstable_UserBlockingPriority,jo=Ae.unstable_NormalPriority,zm=Ae.unstable_LowPriority,Vp=Ae.unstable_IdlePriority,Xo=null,at=null;function Dm(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Am,Nm=Math.log,Mm=Math.LN2;function Am(e){return e>>>=0,e===0?32:31-(Nm(e)/Mm|0)|0}var Ii=64,Ri=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Rr(a):(l&=s,l!==0&&(r=Rr(l)))}else s=n&~i,s!==0?r=Rr(s):l!==0&&(r=Rr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function Om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _m(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-et(l),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=Om(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hp(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Fm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Aa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Qp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gp,Oa,Kp,Jp,Yp,Is=!1,zi=[],Vt=null,Ht=null,Qt=null,Zr=new Map,ei=new Map,Ot=[],Bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hc(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function br(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ki(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Um(e,t,n,r,i){switch(t){case"focusin":return Vt=br(Vt,e,t,n,r,i),!0;case"dragenter":return Ht=br(Ht,e,t,n,r,i),!0;case"mouseover":return Qt=br(Qt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Zr.set(l,br(Zr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,ei.set(l,br(ei.get(l)||null,e,t,n,r,i)),!0}return!1}function Xp(e){var t=hn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=_p(n),t!==null){e.blockedOn=t,Yp(e.priority,function(){Kp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ss=r,n.target.dispatchEvent(r),Ss=null}else return t=ki(n),t!==null&&Oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Qc(e,t,n){to(e)&&n.delete(t)}function Wm(){Is=!1,Vt!==null&&to(Vt)&&(Vt=null),Ht!==null&&to(Ht)&&(Ht=null),Qt!==null&&to(Qt)&&(Qt=null),Zr.forEach(Qc),ei.forEach(Qc)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Wm)))}function ti(e){function t(i){return jr(i,e)}if(0<zi.length){jr(zi[0],e);for(var n=1;n<zi.length;n++){var r=zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&jr(Vt,e),Ht!==null&&jr(Ht,e),Qt!==null&&jr(Qt,e),Zr.forEach(t),ei.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Xp(n),n.blockedOn===null&&Ot.shift()}var Yn=St.ReactCurrentBatchConfig,Co=!0;function Vm(e,t,n,r){var i=V,l=Yn.transition;Yn.transition=null;try{V=1,_a(e,t,n,r)}finally{V=i,Yn.transition=l}}function Hm(e,t,n,r){var i=V,l=Yn.transition;Yn.transition=null;try{V=4,_a(e,t,n,r)}finally{V=i,Yn.transition=l}}function _a(e,t,n,r){if(Co){var i=Rs(e,t,n,r);if(i===null)Bl(e,t,r,$o,n),Hc(e,r);else if(Um(i,e,t,n,r))r.stopPropagation();else if(Hc(e,r),t&4&&-1<Bm.indexOf(e)){for(;i!==null;){var l=ki(i);if(l!==null&&Gp(l),l=Rs(e,t,n,r),l===null&&Bl(e,t,r,$o,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var $o=null;function Rs(e,t,n,r){if($o=null,e=Na(r),e=hn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $o=e,null}function qp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case Ma:return 1;case Wp:return 4;case jo:case zm:return 16;case Vp:return 536870912;default:return 16}default:return 16}}var Ft=null,Fa=null,no=null;function Zp(){if(no)return no;var e,t=Fa,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return no=i.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function Gc(){return!1}function _e(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Di:Gc,this.isPropagationStopped=Gc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=_e(fr),ji=ee({},fr,{view:0,detail:0}),Qm=_e(ji),Rl,zl,kr,qo=ee({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Rl=e.screenX-kr.screenX,zl=e.screenY-kr.screenY):zl=Rl=0,kr=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Kc=_e(qo),Gm=ee({},qo,{dataTransfer:0}),Km=_e(Gm),Jm=ee({},ji,{relatedTarget:0}),Dl=_e(Jm),Ym=ee({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xm=_e(Ym),qm=ee({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zm=_e(qm),eg=ee({},fr,{data:0}),Jc=_e(eg),tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rg[e])?!!t[e]:!1}function Ua(){return ig}var og=ee({},ji,{key:function(e){if(e.key){var t=tg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lg=_e(og),sg=ee({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=_e(sg),ag=ee({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),cg=_e(ag),ug=ee({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dg=_e(ug),pg=ee({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=_e(pg),hg=[9,13,27,32],Wa=bt&&"CompositionEvent"in window,Fr=null;bt&&"documentMode"in document&&(Fr=document.documentMode);var mg=bt&&"TextEvent"in window&&!Fr,ef=bt&&(!Wa||Fr&&8<Fr&&11>=Fr),Xc=" ",qc=!1;function tf(e,t){switch(e){case"keyup":return hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function gg(e,t){switch(e){case"compositionend":return nf(t);case"keypress":return t.which!==32?null:(qc=!0,Xc);case"textInput":return e=t.data,e===Xc&&qc?null:e;default:return null}}function xg(e,t){if(Mn)return e==="compositionend"||!Wa&&tf(e,t)?(e=Zp(),no=Fa=Ft=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ef&&t.locale!=="ko"?null:t.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yg[e.type]:t==="textarea"}function rf(e,t,n,r){Dp(r),t=So(t,"onChange"),0<t.length&&(n=new Ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,ni=null;function vg(e){mf(e,0)}function Zo(e){var t=_n(e);if(Ep(t))return e}function wg(e,t){if(e==="change")return t}var of=!1;if(bt){var Nl;if(bt){var Ml="oninput"in document;if(!Ml){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),Ml=typeof eu.oninput=="function"}Nl=Ml}else Nl=!1;of=Nl&&(!document.documentMode||9<document.documentMode)}function tu(){Br&&(Br.detachEvent("onpropertychange",lf),ni=Br=null)}function lf(e){if(e.propertyName==="value"&&Zo(ni)){var t=[];rf(t,ni,e,Na(e)),Op(vg,t)}}function bg(e,t,n){e==="focusin"?(tu(),Br=t,ni=n,Br.attachEvent("onpropertychange",lf)):e==="focusout"&&tu()}function jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(ni)}function kg(e,t){if(e==="click")return Zo(t)}function Cg(e,t){if(e==="input"||e==="change")return Zo(t)}function $g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:$g;function ri(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hs.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ru(e,t){var n=nu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function Va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sg(e){var t=af(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sf(n.ownerDocument.documentElement,n)){if(r!==null&&Va(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ru(n,l);var s=ru(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eg=bt&&"documentMode"in document&&11>=document.documentMode,An=null,zs=null,Ur=null,Ds=!1;function iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||An==null||An!==vo(r)||(r=An,"selectionStart"in r&&Va(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&ri(Ur,r)||(Ur=r,r=So(zs,"onSelect"),0<r.length&&(t=new Ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function Ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionend:Ni("Transition","TransitionEnd")},Al={},cf={};bt&&(cf=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function el(e){if(Al[e])return Al[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cf)return Al[e]=t[n];return e}var uf=el("animationend"),df=el("animationiteration"),pf=el("animationstart"),ff=el("transitionend"),hf=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){hf.set(e,t),En(t,[e])}for(var Ol=0;Ol<ou.length;Ol++){var _l=ou[Ol],Pg=_l.toLowerCase(),Tg=_l[0].toUpperCase()+_l.slice(1);rn(Pg,"on"+Tg)}rn(uf,"onAnimationEnd");rn(df,"onAnimationIteration");rn(pf,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(ff,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pm(r,t,void 0,e),e.currentTarget=null}function mf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==l&&i.isPropagationStopped())break e;lu(i,a,d),l=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,d=a.currentTarget,a=a.listener,c!==l&&i.isPropagationStopped())break e;lu(i,a,d),l=c}}}if(bo)throw e=Ts,bo=!1,Ts=null,e}function G(e,t){var n=t[_s];n===void 0&&(n=t[_s]=new Set);var r=e+"__bubble";n.has(r)||(gf(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),gf(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Mi]){e[Mi]=!0,jp.forEach(function(n){n!=="selectionchange"&&(Lg.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,Fl("selectionchange",!1,t))}}function gf(e,t,n,r){switch(qp(t)){case 1:var i=Vm;break;case 4:i=Hm;break;default:i=_a}n=i.bind(null,t,n,e),i=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=hn(a),s===null)return;if(c=s.tag,c===5||c===6){r=l=s;continue e}a=a.parentNode}}r=r.return}Op(function(){var d=l,m=Na(n),h=[];e:{var g=hf.get(e);if(g!==void 0){var C=Ba,j=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":C=lg;break;case"focusin":j="focus",C=Dl;break;case"focusout":j="blur",C=Dl;break;case"beforeblur":case"afterblur":C=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=cg;break;case uf:case df:case pf:C=Xm;break;case ff:C=dg;break;case"scroll":C=Qm;break;case"wheel":C=fg;break;case"copy":case"cut":case"paste":C=Zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Yc}var y=(t&4)!==0,S=!y&&e==="scroll",x=y?g!==null?g+"Capture":null:g;y=[];for(var f=d,p;f!==null;){p=f;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,x!==null&&(k=qr(f,x),k!=null&&y.push(oi(f,k,p)))),S)break;f=f.return}0<y.length&&(g=new C(g,j,null,n,m),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&n!==Ss&&(j=n.relatedTarget||n.fromElement)&&(hn(j)||j[jt]))break e;if((C||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,C?(j=n.relatedTarget||n.toElement,C=d,j=j?hn(j):null,j!==null&&(S=Pn(j),j!==S||j.tag!==5&&j.tag!==6)&&(j=null)):(C=null,j=d),C!==j)){if(y=Kc,k="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Yc,k="onPointerLeave",x="onPointerEnter",f="pointer"),S=C==null?g:_n(C),p=j==null?g:_n(j),g=new y(k,f+"leave",C,n,m),g.target=S,g.relatedTarget=p,k=null,hn(m)===d&&(y=new y(x,f+"enter",j,n,m),y.target=p,y.relatedTarget=S,k=y),S=k,C&&j)t:{for(y=C,x=j,f=0,p=y;p;p=Tn(p))f++;for(p=0,k=x;k;k=Tn(k))p++;for(;0<f-p;)y=Tn(y),f--;for(;0<p-f;)x=Tn(x),p--;for(;f--;){if(y===x||x!==null&&y===x.alternate)break t;y=Tn(y),x=Tn(x)}y=null}else y=null;C!==null&&su(h,g,C,y,!1),j!==null&&S!==null&&su(h,S,j,y,!0)}}e:{if(g=d?_n(d):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var b=wg;else if(Zc(g))if(of)b=Cg;else{b=jg;var E=bg}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=kg);if(b&&(b=b(e,d))){rf(h,b,n,m);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&bs(g,"number",g.value)}switch(E=d?_n(d):window,e){case"focusin":(Zc(E)||E.contentEditable==="true")&&(An=E,zs=d,Ur=null);break;case"focusout":Ur=zs=An=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,iu(h,n,m);break;case"selectionchange":if(Eg)break;case"keydown":case"keyup":iu(h,n,m)}var $;if(Wa)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Mn?tf(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(ef&&n.locale!=="ko"&&(Mn||w!=="onCompositionStart"?w==="onCompositionEnd"&&Mn&&($=Zp()):(Ft=m,Fa="value"in Ft?Ft.value:Ft.textContent,Mn=!0)),E=So(d,w),0<E.length&&(w=new Jc(w,e,null,n,m),h.push({event:w,listeners:E}),$?w.data=$:($=nf(n),$!==null&&(w.data=$)))),($=mg?gg(e,n):xg(e,n))&&(d=So(d,"onBeforeInput"),0<d.length&&(m=new Jc("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:d}),m.data=$))}mf(h,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function So(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=qr(e,n),l!=null&&r.unshift(oi(e,l,i)),l=qr(e,t),l!=null&&r.push(oi(e,l,i))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function su(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,i?(c=qr(n,l),c!=null&&s.unshift(oi(n,c,a))):i||(c=qr(n,l),c!=null&&s.push(oi(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ig=/\r\n?/g,Rg=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(Rg,"")}function Ai(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(P(425))}function Eo(){}var Ns=null,Ms=null;function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Os=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(Ng)}:Os;function Ng(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),st="__reactFiber$"+hr,li="__reactProps$"+hr,jt="__reactContainer$"+hr,_s="__reactEvents$"+hr,Mg="__reactListeners$"+hr,Ag="__reactHandles$"+hr;function hn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[st])return n;e=uu(e)}return t}e=n,n=e.parentNode}return null}function ki(e){return e=e[st]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function tl(e){return e[li]||null}var Fs=[],Fn=-1;function on(e){return{current:e}}function J(e){0>Fn||(e.current=Fs[Fn],Fs[Fn]=null,Fn--)}function Q(e,t){Fn++,Fs[Fn]=e.current,e.current=t}var tn={},be=on(tn),Te=on(!1),wn=tn;function tr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function Po(){J(Te),J(be)}function du(e,t,n){if(be.current!==tn)throw Error(P(168));Q(be,t),Q(Te,n)}function xf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,bm(e)||"Unknown",i));return ee({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,wn=be.current,Q(be,e),Q(Te,Te.current),!0}function pu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=xf(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,J(Te),J(be),Q(be,e)):J(Te),Q(Te,n)}var mt=null,nl=!1,Wl=!1;function yf(e){mt===null?mt=[e]:mt.push(e)}function Og(e){nl=!0,yf(e)}function ln(){if(!Wl&&mt!==null){Wl=!0;var e=0,t=V;try{var n=mt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,nl=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),Up(Ma,ln),i}finally{V=t,Wl=!1}}return null}var Bn=[],Un=0,Lo=null,Io=0,Be=[],Ue=0,bn=null,gt=1,xt="";function un(e,t){Bn[Un++]=Io,Bn[Un++]=Lo,Lo=e,Io=t}function vf(e,t,n){Be[Ue++]=gt,Be[Ue++]=xt,Be[Ue++]=bn,bn=e;var r=gt;e=xt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var l=32-et(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,gt=1<<32-et(t)+i|n<<i|r,xt=l+e}else gt=1<<l|n<<i|r,xt=e}function Ha(e){e.return!==null&&(un(e,1),vf(e,1,0))}function Qa(e){for(;e===Lo;)Lo=Bn[--Un],Bn[Un]=null,Io=Bn[--Un],Bn[Un]=null;for(;e===bn;)bn=Be[--Ue],Be[Ue]=null,xt=Be[--Ue],Be[Ue]=null,gt=Be[--Ue],Be[Ue]=null}var Me=null,Ne=null,Y=!1,Ze=null;function wf(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Ne=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:gt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Ne=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Us(e){if(Y){var t=Ne;if(t){var n=t;if(!fu(e,t)){if(Bs(e))throw Error(P(418));t=Gt(n.nextSibling);var r=Me;t&&fu(e,t)?wf(r,n):(e.flags=e.flags&-4097|2,Y=!1,Me=e)}}else{if(Bs(e))throw Error(P(418));e.flags=e.flags&-4097|2,Y=!1,Me=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Oi(e){if(e!==Me)return!1;if(!Y)return hu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!As(e.type,e.memoizedProps)),t&&(t=Ne)){if(Bs(e))throw bf(),Error(P(418));for(;t;)wf(e,t),t=Gt(t.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Me?Gt(e.stateNode.nextSibling):null;return!0}function bf(){for(var e=Ne;e;)e=Gt(e.nextSibling)}function nr(){Ne=Me=null,Y=!1}function Ga(e){Ze===null?Ze=[e]:Ze.push(e)}var _g=St.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function _i(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function jf(e){function t(x,f){if(e){var p=x.deletions;p===null?(x.deletions=[f],x.flags|=16):p.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function i(x,f){return x=Xt(x,f),x.index=0,x.sibling=null,x}function l(x,f,p){return x.index=p,e?(p=x.alternate,p!==null?(p=p.index,p<f?(x.flags|=2,f):p):(x.flags|=2,f)):(x.flags|=1048576,f)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,f,p,k){return f===null||f.tag!==6?(f=Yl(p,x.mode,k),f.return=x,f):(f=i(f,p),f.return=x,f)}function c(x,f,p,k){var b=p.type;return b===Nn?m(x,f,p.props.children,k,p.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Mt&&mu(b)===f.type)?(k=i(f,p.props),k.ref=Cr(x,f,p),k.return=x,k):(k=uo(p.type,p.key,p.props,null,x.mode,k),k.ref=Cr(x,f,p),k.return=x,k)}function d(x,f,p,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Xl(p,x.mode,k),f.return=x,f):(f=i(f,p.children||[]),f.return=x,f)}function m(x,f,p,k,b){return f===null||f.tag!==7?(f=yn(p,x.mode,k,b),f.return=x,f):(f=i(f,p),f.return=x,f)}function h(x,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Yl(""+f,x.mode,p),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Pi:return p=uo(f.type,f.key,f.props,null,x.mode,p),p.ref=Cr(x,null,f),p.return=x,p;case Dn:return f=Xl(f,x.mode,p),f.return=x,f;case Mt:var k=f._init;return h(x,k(f._payload),p)}if(Ir(f)||vr(f))return f=yn(f,x.mode,p,null),f.return=x,f;_i(x,f)}return null}function g(x,f,p,k){var b=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:a(x,f,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Pi:return p.key===b?c(x,f,p,k):null;case Dn:return p.key===b?d(x,f,p,k):null;case Mt:return b=p._init,g(x,f,b(p._payload),k)}if(Ir(p)||vr(p))return b!==null?null:m(x,f,p,k,null);_i(x,p)}return null}function C(x,f,p,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return x=x.get(p)||null,a(f,x,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Pi:return x=x.get(k.key===null?p:k.key)||null,c(f,x,k,b);case Dn:return x=x.get(k.key===null?p:k.key)||null,d(f,x,k,b);case Mt:var E=k._init;return C(x,f,p,E(k._payload),b)}if(Ir(k)||vr(k))return x=x.get(p)||null,m(f,x,k,b,null);_i(f,k)}return null}function j(x,f,p,k){for(var b=null,E=null,$=f,w=f=0,T=null;$!==null&&w<p.length;w++){$.index>w?(T=$,$=null):T=$.sibling;var I=g(x,$,p[w],k);if(I===null){$===null&&($=T);break}e&&$&&I.alternate===null&&t(x,$),f=l(I,f,w),E===null?b=I:E.sibling=I,E=I,$=T}if(w===p.length)return n(x,$),Y&&un(x,w),b;if($===null){for(;w<p.length;w++)$=h(x,p[w],k),$!==null&&(f=l($,f,w),E===null?b=$:E.sibling=$,E=$);return Y&&un(x,w),b}for($=r(x,$);w<p.length;w++)T=C($,x,w,p[w],k),T!==null&&(e&&T.alternate!==null&&$.delete(T.key===null?w:T.key),f=l(T,f,w),E===null?b=T:E.sibling=T,E=T);return e&&$.forEach(function(_){return t(x,_)}),Y&&un(x,w),b}function y(x,f,p,k){var b=vr(p);if(typeof b!="function")throw Error(P(150));if(p=b.call(p),p==null)throw Error(P(151));for(var E=b=null,$=f,w=f=0,T=null,I=p.next();$!==null&&!I.done;w++,I=p.next()){$.index>w?(T=$,$=null):T=$.sibling;var _=g(x,$,I.value,k);if(_===null){$===null&&($=T);break}e&&$&&_.alternate===null&&t(x,$),f=l(_,f,w),E===null?b=_:E.sibling=_,E=_,$=T}if(I.done)return n(x,$),Y&&un(x,w),b;if($===null){for(;!I.done;w++,I=p.next())I=h(x,I.value,k),I!==null&&(f=l(I,f,w),E===null?b=I:E.sibling=I,E=I);return Y&&un(x,w),b}for($=r(x,$);!I.done;w++,I=p.next())I=C($,x,w,I.value,k),I!==null&&(e&&I.alternate!==null&&$.delete(I.key===null?w:I.key),f=l(I,f,w),E===null?b=I:E.sibling=I,E=I);return e&&$.forEach(function(te){return t(x,te)}),Y&&un(x,w),b}function S(x,f,p,k){if(typeof p=="object"&&p!==null&&p.type===Nn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Pi:e:{for(var b=p.key,E=f;E!==null;){if(E.key===b){if(b=p.type,b===Nn){if(E.tag===7){n(x,E.sibling),f=i(E,p.props.children),f.return=x,x=f;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Mt&&mu(b)===E.type){n(x,E.sibling),f=i(E,p.props),f.ref=Cr(x,E,p),f.return=x,x=f;break e}n(x,E);break}else t(x,E);E=E.sibling}p.type===Nn?(f=yn(p.props.children,x.mode,k,p.key),f.return=x,x=f):(k=uo(p.type,p.key,p.props,null,x.mode,k),k.ref=Cr(x,f,p),k.return=x,x=k)}return s(x);case Dn:e:{for(E=p.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(x,f.sibling),f=i(f,p.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=Xl(p,x.mode,k),f.return=x,x=f}return s(x);case Mt:return E=p._init,S(x,f,E(p._payload),k)}if(Ir(p))return j(x,f,p,k);if(vr(p))return y(x,f,p,k);_i(x,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(x,f.sibling),f=i(f,p),f.return=x,x=f):(n(x,f),f=Yl(p,x.mode,k),f.return=x,x=f),s(x)):n(x,f)}return S}var rr=jf(!0),kf=jf(!1),Ro=on(null),zo=null,Wn=null,Ka=null;function Ja(){Ka=Wn=zo=null}function Ya(e){var t=Ro.current;J(Ro),e._currentValue=t}function Ws(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){zo=e,Ka=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Ka!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(zo===null)throw Error(P(308));Wn=e,zo.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var mn=null;function Xa(e){mn===null?mn=[e]:mn.push(e)}function Cf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}function gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var i=e.updateQueue;At=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,d=c.next;c.next=null,s===null?l=d:s.next=d,s=c;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==s&&(a===null?m.firstBaseUpdate=d:a.next=d,m.lastBaseUpdate=c))}if(l!==null){var h=i.baseState;s=0,m=d=c=null,a=l;do{var g=a.lane,C=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var j=e,y=a;switch(g=t,C=n,y.tag){case 1:if(j=y.payload,typeof j=="function"){h=j.call(C,h,g);break e}h=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=y.payload,g=typeof j=="function"?j.call(C,h,g):j,g==null)break e;h=ee({},h,g);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else C={eventTime:C,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(d=m=C,c=h):m=m.next=C,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);kn|=s,e.lanes=s,e.memoizedState=h}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Ci={},ct=on(Ci),si=on(Ci),ai=on(Ci);function gn(e){if(e===Ci)throw Error(P(174));return e}function Za(e,t){switch(Q(ai,t),Q(si,e),Q(ct,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}J(ct),Q(ct,t)}function ir(){J(ct),J(si),J(ai)}function Sf(e){gn(ai.current);var t=gn(ct.current),n=ks(t,e.type);t!==n&&(Q(si,e),Q(ct,n))}function ec(e){si.current===e&&(J(ct),J(si))}var X=on(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function tc(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var oo=St.ReactCurrentDispatcher,Hl=St.ReactCurrentBatchConfig,jn=0,q=null,ce=null,pe=null,Mo=!1,Wr=!1,ci=0,Fg=0;function xe(){throw Error(P(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function rc(e,t,n,r,i,l){if(jn=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?Vg:Hg,e=n(r,i),Wr){l=0;do{if(Wr=!1,ci=0,25<=l)throw Error(P(301));l+=1,pe=ce=null,t.updateQueue=null,oo.current=Qg,e=n(r,i)}while(Wr)}if(oo.current=Ao,t=ce!==null&&ce.next!==null,jn=0,pe=ce=q=null,Mo=!1,t)throw Error(P(300));return e}function ic(){var e=ci!==0;return ci=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?q.memoizedState=pe=e:pe=pe.next=e,pe}function Qe(){if(ce===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?q.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(P(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?q.memoizedState=pe=e:pe=pe.next=e}return pe}function ui(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ce,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,c=null,d=l;do{var m=d.lane;if((jn&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=h,s=r):c=c.next=h,q.lanes|=m,kn|=m}d=d.next}while(d!==null&&d!==l);c===null?s=r:c.next=a,rt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,q.lanes|=l,kn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);rt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ef(){}function Pf(e,t){var n=q,r=Qe(),i=t(),l=!rt(r.memoizedState,i);if(l&&(r.memoizedState=i,Pe=!0),r=r.queue,oc(If.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,di(9,Lf.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(P(349));jn&30||Tf(n,t,i)}return i}function Tf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lf(e,t,n,r){t.value=n,t.getSnapshot=r,Rf(t)&&zf(e)}function If(e,t,n){return n(function(){Rf(t)&&zf(e)})}function Rf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function zf(e){var t=kt(e,1);t!==null&&tt(t,e,1,-1)}function yu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=Wg.bind(null,q,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Df(){return Qe().memoizedState}function lo(e,t,n,r){var i=lt();q.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function rl(e,t,n,r){var i=Qe();r=r===void 0?null:r;var l=void 0;if(ce!==null){var s=ce.memoizedState;if(l=s.destroy,r!==null&&nc(r,s.deps)){i.memoizedState=di(t,n,l,r);return}}q.flags|=e,i.memoizedState=di(1|t,n,l,r)}function vu(e,t){return lo(8390656,8,e,t)}function oc(e,t){return rl(2048,8,e,t)}function Nf(e,t){return rl(4,2,e,t)}function Mf(e,t){return rl(4,4,e,t)}function Af(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Of(e,t,n){return n=n!=null?n.concat([e]):null,rl(4,4,Af.bind(null,t,e),n)}function lc(){}function _f(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ff(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bf(e,t,n){return jn&21?(rt(n,t)||(n=Hp(),q.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Bg(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{V=n,Hl.transition=r}}function Uf(){return Qe().memoizedState}function Ug(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wf(e))Vf(t,n);else if(n=Cf(e,t,n,r),n!==null){var i=ke();tt(n,e,r,i),Hf(n,t,r)}}function Wg(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wf(e))Vf(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,s)){var c=t.interleaved;c===null?(i.next=i,Xa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Cf(e,t,i,r),n!==null&&(i=ke(),tt(n,e,r,i),Hf(n,t,r))}}function Wf(e){var t=e.alternate;return e===q||t!==null&&t===q}function Vf(e,t){Wr=Mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}var Ao={readContext:He,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Vg={readContext:He,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,Af.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ug.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:lc,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=Bg.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=lt();if(Y){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),fe===null)throw Error(P(349));jn&30||Tf(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,vu(If.bind(null,r,l,e),[e]),r.flags|=2048,di(9,Lf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=lt(),t=fe.identifierPrefix;if(Y){var n=xt,r=gt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hg={readContext:He,useCallback:_f,useContext:He,useEffect:oc,useImperativeHandle:Of,useInsertionEffect:Nf,useLayoutEffect:Mf,useMemo:Ff,useReducer:Ql,useRef:Df,useState:function(){return Ql(ui)},useDebugValue:lc,useDeferredValue:function(e){var t=Qe();return Bf(t,ce.memoizedState,e)},useTransition:function(){var e=Ql(ui)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Ef,useSyncExternalStore:Pf,useId:Uf,unstable_isNewReconciler:!1},Qg={readContext:He,useCallback:_f,useContext:He,useEffect:oc,useImperativeHandle:Of,useInsertionEffect:Nf,useLayoutEffect:Mf,useMemo:Ff,useReducer:Gl,useRef:Df,useState:function(){return Gl(ui)},useDebugValue:lc,useDeferredValue:function(e){var t=Qe();return ce===null?t.memoizedState=e:Bf(t,ce.memoizedState,e)},useTransition:function(){var e=Gl(ui)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Ef,useSyncExternalStore:Pf,useId:Uf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Yt(e),l=yt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Kt(e,l,i),t!==null&&(tt(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Yt(e),l=yt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Kt(e,l,i),t!==null&&(tt(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Yt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(tt(t,e,r,n),io(t,e,r))}};function wu(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,l):!0}function Qf(e,t,n){var r=!1,i=tn,l=t.contextType;return typeof l=="object"&&l!==null?l=He(l):(i=Le(t)?wn:be.current,r=t.contextTypes,l=(r=r!=null)?tr(e,i):tn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function Hs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},qa(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=He(l):(l=Le(t)?wn:be.current,i.context=tr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Vs(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Do(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=wm(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gg=typeof WeakMap=="function"?WeakMap:Map;function Gf(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_o||(_o=!0,na=r),Qs(e,t)},n}function Kf(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qs(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Qs(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sx.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var Kg=St.ReactCurrentOwner,Pe=!1;function je(e,t,n,r){t.child=e===null?kf(t,null,n,r):rr(t,e.child,n,r)}function $u(e,t,n,r,i){n=n.render;var l=t.ref;return Xn(t,i),r=rc(e,t,n,r,l,i),n=ic(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(Y&&n&&Ha(t),t.flags|=1,je(e,t,r,i),t.child)}function Su(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!hc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Jf(e,t,l,r,i)):(e=uo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(s,r)&&e.ref===t.ref)return Ct(e,t,i)}return t.flags|=1,e=Xt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Jf(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(ri(l,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,Ct(e,t,i)}return Gs(e,t,n,r,i)}function Yf(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Hn,De),De|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Hn,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Q(Hn,De),De|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Q(Hn,De),De|=r;return je(e,t,i,n),t.child}function Xf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,i){var l=Le(n)?wn:be.current;return l=tr(t,l),Xn(t,i),n=rc(e,t,n,r,l,i),r=ic(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(Y&&r&&Ha(t),t.flags|=1,je(e,t,n,i),t.child)}function Eu(e,t,n,r,i){if(Le(n)){var l=!0;To(t)}else l=!1;if(Xn(t,i),t.stateNode===null)so(e,t),Qf(t,n,r),Hs(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=He(d):(d=Le(n)?wn:be.current,d=tr(t,d));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==d)&&bu(t,s,r,d),At=!1;var g=t.memoizedState;s.state=g,Do(t,r,s,i),c=t.memoizedState,a!==r||g!==c||Te.current||At?(typeof m=="function"&&(Vs(t,n,m,r),c=t.memoizedState),(a=At||wu(t,n,a,r,g,c,d))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,$f(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Ye(t.type,a),s.props=d,h=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=He(c):(c=Le(n)?wn:be.current,c=tr(t,c));var C=n.getDerivedStateFromProps;(m=typeof C=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||g!==c)&&bu(t,s,r,c),At=!1,g=t.memoizedState,s.state=g,Do(t,r,s,i);var j=t.memoizedState;a!==h||g!==j||Te.current||At?(typeof C=="function"&&(Vs(t,n,C,r),j=t.memoizedState),(d=At||wu(t,n,d,r,g,j,c)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,j,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,j,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),s.props=r,s.state=j,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,l,i)}function Ks(e,t,n,r,i,l){Xf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&pu(t,n,!1),Ct(e,t,l);r=t.stateNode,Kg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=rr(t,e.child,null,l),t.child=rr(t,null,a,l)):je(e,t,a,l),t.memoizedState=r.state,i&&pu(t,n,!0),t.child}function qf(e){var t=e.stateNode;t.pendingContext?du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&du(e,t.context,!1),Za(e,t.containerInfo)}function Pu(e,t,n,r,i){return nr(),Ga(i),t.flags|=256,je(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zf(e,t,n){var r=t.pendingProps,i=X.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(X,i&1),e===null)return Us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=sl(s,r,0,null),e=yn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ys(n),t.memoizedState=Js,e):sc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Jg(e,t,s,r,a,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Xt(a,l):(l=yn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Ys(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Js,r}return l=e.child,e=l.sibling,r=Xt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sc(e,t){return t=sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&Ga(r),rr(t,e.child,null,n),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jg(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(P(422))),Fi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=sl({mode:"visible",children:r.children},i,0,null),l=yn(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&rr(t,e.child,null,s),t.child.memoizedState=Ys(s),t.memoizedState=Js,l);if(!(t.mode&1))return Fi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(P(419)),r=Kl(l,r,void 0),Fi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Pe||a){if(r=fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,kt(e,i),tt(r,e,i,-1))}return fc(),r=Kl(Error(P(421))),Fi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ax.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Ne=Gt(i.nextSibling),Me=t,Y=!0,Ze=null,e!==null&&(Be[Ue++]=gt,Be[Ue++]=xt,Be[Ue++]=bn,gt=e.id,xt=e.overflow,bn=t),t=sc(t,r.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ws(e.return,t,n)}function Jl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function eh(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(je(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&No(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jl(t,!0,n,null,l);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yg(e,t,n){switch(t.tag){case 3:qf(t),nr();break;case 5:Sf(t);break;case 1:Le(t.type)&&To(t);break;case 4:Za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(Ro,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Zf(e,t,n):(Q(X,X.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);Q(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return eh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Yf(e,t,n)}return Ct(e,t,n)}var th,Xs,nh,rh;th=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xs=function(){};nh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(ct.current);var l=null;switch(n){case"input":i=vs(e,i),r=vs(e,r),l=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),l=[];break;case"textarea":i=js(e,i),r=js(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}Cs(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&G("scroll",e),l||a===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};rh=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xg(e,t,n){var r=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Le(t.type)&&Po(),ye(t),null;case 3:return r=t.stateNode,ir(),J(Te),J(be),tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(oa(Ze),Ze=null))),Xs(e,t),ye(t),null;case 5:ec(t);var i=gn(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)nh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ye(t),null}if(e=gn(ct.current),Oi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[st]=t,r[li]=l,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)G(zr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Oc(r,l),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},G("invalid",r);break;case"textarea":Fc(r,l),G("invalid",r)}Cs(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ai(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ai(r.textContent,a,e),i=["children",""+a]):Yr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":Ti(r),_c(r,l,!0);break;case"textarea":Ti(r),Bc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[li]=r,th(e,t,!1,!1),t.stateNode=e;e:{switch(s=$s(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)G(zr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":Oc(e,r),i=vs(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),G("invalid",e);break;case"textarea":Fc(e,r),i=js(e,r),G("invalid",e);break;default:i=r}Cs(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?zp(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ip(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xr(e,c):typeof c=="number"&&Xr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&G("scroll",e):c!=null&&Ia(e,l,c,s))}switch(n){case"input":Ti(e),_c(e,r,!1);break;case"textarea":Ti(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Gn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)rh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=gn(ai.current),gn(ct.current),Oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(l=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ai(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ye(t),null;case 13:if(J(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ne!==null&&t.mode&1&&!(t.flags&128))bf(),nr(),t.flags|=98560,l=!1;else if(l=Oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[st]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),l=!1}else Ze!==null&&(oa(Ze),Ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?de===0&&(de=3):fc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return ir(),Xs(e,t),e===null&&ii(t.stateNode.containerInfo),ye(t),null;case 10:return Ya(t.type._context),ye(t),null;case 17:return Le(t.type)&&Po(),ye(t),null;case 19:if(J(X),l=t.memoizedState,l===null)return ye(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)$r(l,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=No(e),s!==null){for(t.flags|=128,$r(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(X,X.current&1|2),t.child}e=e.sibling}l.tail!==null&&ie()>lr&&(t.flags|=128,r=!0,$r(l,!1),t.lanes=4194304)}else{if(!r)if(e=No(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Y)return ye(t),null}else 2*ie()-l.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,$r(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ie(),t.sibling=null,n=X.current,Q(X,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return pc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function qg(e,t){switch(Qa(t),t.tag){case 1:return Le(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),J(Te),J(be),tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ec(t),null;case 13:if(J(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(X),null;case 4:return ir(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Bi=!1,we=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,R=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function qs(e,t,n){try{n()}catch(r){re(e,t,r)}}var Lu=!1;function ex(e,t){if(Ns=Co,e=af(),Va(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,d=0,m=0,h=e,g=null;t:for(;;){for(var C;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==l||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(C=h.firstChild)!==null;)g=h,h=C;for(;;){if(h===e)break t;if(g===n&&++d===i&&(a=s),g===l&&++m===r&&(c=s),(C=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=C}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ms={focusedElem:e,selectionRange:n},Co=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var y=j.memoizedProps,S=j.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),S);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){re(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return j=Lu,Lu=!1,j}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&qs(t,n,l)}i=i.next}while(i!==r)}}function ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ih(e){var t=e.alternate;t!==null&&(e.alternate=null,ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[li],delete t[_s],delete t[Mg],delete t[Ag])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oh(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var he=null,Xe=!1;function Rt(e,t,n){for(n=n.child;n!==null;)lh(e,t,n),n=n.sibling}function lh(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Xo,n)}catch{}switch(n.tag){case 5:we||Vn(n,t);case 6:var r=he,i=Xe;he=null,Rt(e,t,n),he=r,Xe=i,he!==null&&(Xe?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Xe?(e=he,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),ti(e)):Ul(he,n.stateNode));break;case 4:r=he,i=Xe,he=n.stateNode.containerInfo,Xe=!0,Rt(e,t,n),he=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&qs(n,t,s),i=i.next}while(i!==r)}Rt(e,t,n);break;case 1:if(!we&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Rt(e,t,n),we=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zg),t.forEach(function(r){var i=cx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Xe=!1;break e;case 3:he=a.stateNode.containerInfo,Xe=!0;break e;case 4:he=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(he===null)throw Error(P(160));lh(l,s,i),he=null,Xe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){re(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sh(t,e),t=t.sibling}function sh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ot(e),r&4){try{Vr(3,e,e.return),ol(3,e)}catch(y){re(e,e.return,y)}try{Vr(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:Je(t,e),ot(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(Je(t,e),ot(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(y){re(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Pp(i,l),$s(a,s);var d=$s(a,l);for(s=0;s<c.length;s+=2){var m=c[s],h=c[s+1];m==="style"?zp(i,h):m==="dangerouslySetInnerHTML"?Ip(i,h):m==="children"?Xr(i,h):Ia(i,m,h,d)}switch(a){case"input":ws(i,l);break;case"textarea":Tp(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var C=l.value;C!=null?Gn(i,!!l.multiple,C,!1):g!==!!l.multiple&&(l.defaultValue!=null?Gn(i,!!l.multiple,l.defaultValue,!0):Gn(i,!!l.multiple,l.multiple?[]:"",!1))}i[li]=l}catch(y){re(e,e.return,y)}}break;case 6:if(Je(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){re(e,e.return,y)}}break;case 3:if(Je(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:Je(t,e),ot(e);break;case 13:Je(t,e),ot(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=ie())),r&4&&Ru(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(we=(d=we)||m,Je(t,e),we=d):Je(t,e),ot(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(R=e,m=e.child;m!==null;){for(h=R=m;R!==null;){switch(g=R,C=g.child,g.tag){case 0:case 11:case 14:case 15:Vr(4,g,g.return);break;case 1:Vn(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Vn(g,g.return);break;case 22:if(g.memoizedState!==null){Du(h);continue}}C!==null?(C.return=g,R=C):Du(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Rp("display",s))}catch(y){re(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){re(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Je(t,e),ot(e),r&4&&Ru(e);break;case 21:break;default:Je(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var l=Iu(e);ta(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Iu(e);ea(e,a,s);break;default:throw Error(P(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tx(e,t,n){R=e,ah(e)}function ah(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Bi;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||we;a=Bi;var d=we;if(Bi=s,(we=c)&&!d)for(R=i;R!==null;)s=R,c=s.child,s.tag===22&&s.memoizedState!==null?Nu(i):c!==null?(c.return=s,R=c):Nu(i);for(;l!==null;)R=l,ah(l),l=l.sibling;R=i,Bi=a,we=d}zu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,R=l):zu(e)}}function zu(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&xu(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&ti(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}we||t.flags&512&&Zs(t)}catch(g){re(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Du(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Nu(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ol(4,t)}catch(c){re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){re(t,i,c)}}var l=t.return;try{Zs(t)}catch(c){re(t,l,c)}break;case 5:var s=t.return;try{Zs(t)}catch(c){re(t,s,c)}}}catch(c){re(t,t.return,c)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var nx=Math.ceil,Oo=St.ReactCurrentDispatcher,ac=St.ReactCurrentOwner,Ve=St.ReactCurrentBatchConfig,F=0,fe=null,se=null,me=0,De=0,Hn=on(0),de=0,pi=null,kn=0,ll=0,cc=0,Hr=null,Ee=null,uc=0,lr=1/0,ft=null,_o=!1,na=null,Jt=null,Ui=!1,Bt=null,Fo=0,Qr=0,ra=null,ao=-1,co=0;function ke(){return F&6?ie():ao!==-1?ao:ao=ie()}function Yt(e){return e.mode&1?F&2&&me!==0?me&-me:_g.transition!==null?(co===0&&(co=Hp()),co):(e=V,e!==0||(e=window.event,e=e===void 0?16:qp(e.type)),e):1}function tt(e,t,n,r){if(50<Qr)throw Qr=0,ra=null,Error(P(185));bi(e,n,r),(!(F&2)||e!==fe)&&(e===fe&&(!(F&2)&&(ll|=n),de===4&&_t(e,me)),Ie(e,r),n===1&&F===0&&!(t.mode&1)&&(lr=ie()+500,nl&&ln()))}function Ie(e,t){var n=e.callbackNode;_m(e,t);var r=ko(e,e===fe?me:0);if(r===0)n!==null&&Vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vc(n),t===1)e.tag===0?Og(Mu.bind(null,e)):yf(Mu.bind(null,e)),Dg(function(){!(F&6)&&ln()}),n=null;else{switch(Qp(r)){case 1:n=Ma;break;case 4:n=Wp;break;case 16:n=jo;break;case 536870912:n=Vp;break;default:n=jo}n=gh(n,ch.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ch(e,t){if(ao=-1,co=0,F&6)throw Error(P(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=ko(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bo(e,r);else{t=r;var i=F;F|=2;var l=dh();(fe!==e||me!==t)&&(ft=null,lr=ie()+500,xn(e,t));do try{ox();break}catch(a){uh(e,a)}while(!0);Ja(),Oo.current=l,F=i,se!==null?t=0:(fe=null,me=0,t=de)}if(t!==0){if(t===2&&(i=Ls(e),i!==0&&(r=i,t=ia(e,i))),t===1)throw n=pi,xn(e,0),_t(e,r),Ie(e,ie()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!rx(i)&&(t=Bo(e,r),t===2&&(l=Ls(e),l!==0&&(r=l,t=ia(e,l))),t===1))throw n=pi,xn(e,0),_t(e,r),Ie(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:dn(e,Ee,ft);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=uc+500-ie(),10<t)){if(ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Os(dn.bind(null,e,Ee,ft),t);break}dn(e,Ee,ft);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nx(r/1960))-r,10<r){e.timeoutHandle=Os(dn.bind(null,e,Ee,ft),r);break}dn(e,Ee,ft);break;case 5:dn(e,Ee,ft);break;default:throw Error(P(329))}}}return Ie(e,ie()),e.callbackNode===n?ch.bind(null,e):null}function ia(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Bo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&oa(t)),e}function oa(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function rx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!rt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~cc,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Mu(e){if(F&6)throw Error(P(327));qn();var t=ko(e,0);if(!(t&1))return Ie(e,ie()),null;var n=Bo(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=pi,xn(e,0),_t(e,t),Ie(e,ie()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Ee,ft),Ie(e,ie()),null}function dc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(lr=ie()+500,nl&&ln())}}function Cn(e){Bt!==null&&Bt.tag===0&&!(F&6)&&qn();var t=F;F|=1;var n=Ve.transition,r=V;try{if(Ve.transition=null,V=1,e)return e()}finally{V=r,Ve.transition=n,F=t,!(F&6)&&ln()}}function pc(){De=Hn.current,J(Hn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zg(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:ir(),J(Te),J(be),tc();break;case 5:ec(r);break;case 4:ir();break;case 13:J(X);break;case 19:J(X);break;case 10:Ya(r.type._context);break;case 22:case 23:pc()}n=n.return}if(fe=e,se=e=Xt(e.current,null),me=De=t,de=0,pi=null,cc=ll=kn=0,Ee=Hr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}mn=null}return e}function uh(e,t){do{var n=se;try{if(Ja(),oo.current=Ao,Mo){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mo=!1}if(jn=0,pe=ce=q=null,Wr=!1,ci=0,ac.current=null,n===null||n.return===null){de=1,pi=t,se=null;break}e:{var l=e,s=n.return,a=n,c=t;if(t=me,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var C=ku(s);if(C!==null){C.flags&=-257,Cu(C,s,a,l,t),C.mode&1&&ju(l,d,t),t=C,c=d;var j=t.updateQueue;if(j===null){var y=new Set;y.add(c),t.updateQueue=y}else j.add(c);break e}else{if(!(t&1)){ju(l,d,t),fc();break e}c=Error(P(426))}}else if(Y&&a.mode&1){var S=ku(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Cu(S,s,a,l,t),Ga(or(c,a));break e}}l=c=or(c,a),de!==4&&(de=2),Hr===null?Hr=[l]:Hr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var x=Gf(l,c,t);gu(l,x);break e;case 1:a=c;var f=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Jt===null||!Jt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=Kf(l,a,t);gu(l,k);break e}}l=l.return}while(l!==null)}fh(n)}catch(b){t=b,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function dh(){var e=Oo.current;return Oo.current=Ao,e===null?Ao:e}function fc(){(de===0||de===3||de===2)&&(de=4),fe===null||!(kn&268435455)&&!(ll&268435455)||_t(fe,me)}function Bo(e,t){var n=F;F|=2;var r=dh();(fe!==e||me!==t)&&(ft=null,xn(e,t));do try{ix();break}catch(i){uh(e,i)}while(!0);if(Ja(),F=n,Oo.current=r,se!==null)throw Error(P(261));return fe=null,me=0,de}function ix(){for(;se!==null;)ph(se)}function ox(){for(;se!==null&&!Lm();)ph(se)}function ph(e){var t=mh(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?fh(e):se=t,ac.current=null}function fh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qg(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,se=null;return}}else if(n=Xg(n,t,De),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);de===0&&(de=5)}function dn(e,t,n){var r=V,i=Ve.transition;try{Ve.transition=null,V=1,lx(e,t,n,r)}finally{Ve.transition=i,V=r}return null}function lx(e,t,n,r){do qn();while(Bt!==null);if(F&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Fm(e,l),e===fe&&(se=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ui||(Ui=!0,gh(jo,function(){return qn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ve.transition,Ve.transition=null;var s=V;V=1;var a=F;F|=4,ac.current=null,ex(e,n),sh(n,e),Sg(Ms),Co=!!Ns,Ms=Ns=null,e.current=n,tx(n),Im(),F=a,V=s,Ve.transition=l}else e.current=n;if(Ui&&(Ui=!1,Bt=e,Fo=i),l=e.pendingLanes,l===0&&(Jt=null),Dm(n.stateNode),Ie(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,e=na,na=null,e;return Fo&1&&e.tag!==0&&qn(),l=e.pendingLanes,l&1?e===ra?Qr++:(Qr=0,ra=e):Qr=0,ln(),null}function qn(){if(Bt!==null){var e=Qp(Fo),t=Ve.transition,n=V;try{if(Ve.transition=null,V=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,Fo=0,F&6)throw Error(P(331));var i=F;for(F|=4,R=e.current;R!==null;){var l=R,s=l.child;if(R.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(R=d;R!==null;){var m=R;switch(m.tag){case 0:case 11:case 15:Vr(8,m,l)}var h=m.child;if(h!==null)h.return=m,R=h;else for(;R!==null;){m=R;var g=m.sibling,C=m.return;if(ih(m),m===d){R=null;break}if(g!==null){g.return=C,R=g;break}R=C}}}var j=l.alternate;if(j!==null){var y=j.child;if(y!==null){j.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}R=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,R=s;else e:for(;R!==null;){if(l=R,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Vr(9,l,l.return)}var x=l.sibling;if(x!==null){x.return=l.return,R=x;break e}R=l.return}}var f=e.current;for(R=f;R!==null;){s=R;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,R=p;else e:for(s=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ol(9,a)}}catch(b){re(a,a.return,b)}if(a===s){R=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,R=k;break e}R=a.return}}if(F=i,ln(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Xo,e)}catch{}r=!0}return r}finally{V=n,Ve.transition=t}}return!1}function Au(e,t,n){t=or(n,t),t=Gf(e,t,1),e=Kt(e,t,1),t=ke(),e!==null&&(bi(e,1,t),Ie(e,t))}function re(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=or(n,e),e=Kf(t,e,1),t=Kt(t,e,1),e=ke(),t!==null&&(bi(t,1,e),Ie(t,e));break}}t=t.return}}function sx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(de===4||de===3&&(me&130023424)===me&&500>ie()-uc?xn(e,0):cc|=n),Ie(e,t)}function hh(e,t){t===0&&(e.mode&1?(t=Ri,Ri<<=1,!(Ri&130023424)&&(Ri=4194304)):t=1);var n=ke();e=kt(e,t),e!==null&&(bi(e,t,n),Ie(e,n))}function ax(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hh(e,n)}function cx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),hh(e,n)}var mh;mh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Yg(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Y&&t.flags&1048576&&vf(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=tr(t,be.current);Xn(t,n),i=rc(null,t,r,e,i,n);var l=ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(l=!0,To(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qa(t),i.updater=il,t.stateNode=i,i._reactInternals=t,Hs(t,r,e,n),t=Ks(null,t,r,!0,l,n)):(t.tag=0,Y&&l&&Ha(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dx(r),e=Ye(r,e),i){case 0:t=Gs(null,t,r,e,n);break e;case 1:t=Eu(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Su(null,t,r,Ye(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Gs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Eu(e,t,r,i,n);case 3:e:{if(qf(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,i=l.element,$f(e,t),Do(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=or(Error(P(423)),t),t=Pu(e,t,r,n,i);break e}else if(r!==i){i=or(Error(P(424)),t),t=Pu(e,t,r,n,i);break e}else for(Ne=Gt(t.stateNode.containerInfo.firstChild),Me=t,Y=!0,Ze=null,n=kf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=Ct(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return Sf(t),e===null&&Us(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,As(r,i)?s=null:l!==null&&As(r,l)&&(t.flags|=32),Xf(e,t),je(e,t,s,n),t.child;case 6:return e===null&&Us(t),null;case 13:return Zf(e,t,n);case 4:return Za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),$u(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,Q(Ro,r._currentValue),r._currentValue=s,l!==null)if(rt(l.value,s)){if(l.children===i.children&&!Te.current){t=Ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=yt(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ws(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ws(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xn(t,n),i=He(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Su(e,t,r,i,n);case 15:return Jf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),so(e,t),t.tag=1,Le(r)?(e=!0,To(t)):e=!1,Xn(t,n),Qf(t,r,i),Hs(t,r,i,n),Ks(null,t,r,!0,e,n);case 19:return eh(e,t,n);case 22:return Yf(e,t,n)}throw Error(P(156,t.tag))};function gh(e,t){return Up(e,t)}function ux(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new ux(e,t,n,r)}function hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dx(e){if(typeof e=="function")return hc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===za)return 11;if(e===Da)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function uo(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")hc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nn:return yn(n.children,i,l,t);case Ra:s=8,i|=8;break;case ms:return e=We(12,n,t,i|2),e.elementType=ms,e.lanes=l,e;case gs:return e=We(13,n,t,i),e.elementType=gs,e.lanes=l,e;case xs:return e=We(19,n,t,i),e.elementType=xs,e.lanes=l,e;case $p:return sl(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kp:s=10;break e;case Cp:s=9;break e;case za:s=11;break e;case Da:s=14;break e;case Mt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function yn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function sl(e,t,n,r){return e=We(22,e,r,t),e.elementType=$p,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function px(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mc(e,t,n,r,i,l,s,a,c){return e=new px(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=We(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(l),e}function fx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xh(e){if(!e)return tn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Le(n))return xf(e,n,t)}return t}function yh(e,t,n,r,i,l,s,a,c){return e=mc(n,r,!0,e,i,l,s,a,c),e.context=xh(null),n=e.current,r=ke(),i=Yt(n),l=yt(r,i),l.callback=t??null,Kt(n,l,i),e.current.lanes=i,bi(e,i,r),Ie(e,r),e}function al(e,t,n,r){var i=t.current,l=ke(),s=Yt(i);return n=xh(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,s),e!==null&&(tt(e,i,s,l),io(e,i,s)),s}function Uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function hx(){return null}var vh=typeof reportError=="function"?reportError:function(e){console.error(e)};function xc(e){this._internalRoot=e}cl.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));al(e,t,null,null)};cl.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){al(null,e,null,null)}),t[jt]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Xp(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function mx(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=Uo(s);l.call(d)}}var s=yh(t,r,e,0,null,!1,!1,"",_u);return e._reactRootContainer=s,e[jt]=s.current,ii(e.nodeType===8?e.parentNode:e),Cn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Uo(c);a.call(d)}}var c=mc(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=c,e[jt]=c.current,ii(e.nodeType===8?e.parentNode:e),Cn(function(){al(t,c,n,r)}),c}function dl(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var c=Uo(s);a.call(c)}}al(t,s,e,i)}else s=mx(n,t,e,i,r);return Uo(s)}Gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(Aa(t,n|1),Ie(t,ie()),!(F&6)&&(lr=ie()+500,ln()))}break;case 13:Cn(function(){var r=kt(e,1);if(r!==null){var i=ke();tt(r,e,1,i)}}),gc(e,1)}};Oa=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=ke();tt(t,e,134217728,n)}gc(e,134217728)}};Kp=function(e){if(e.tag===13){var t=Yt(e),n=kt(e,t);if(n!==null){var r=ke();tt(n,e,t,r)}gc(e,t)}};Jp=function(){return V};Yp=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Es=function(e,t,n){switch(t){case"input":if(ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=tl(r);if(!i)throw Error(P(90));Ep(r),ws(r,i)}}}break;case"textarea":Tp(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};Mp=dc;Ap=Cn;var gx={usingClientEntryPoint:!1,Events:[ki,_n,tl,Dp,Np,dc]},Sr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xx={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fp(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Xo=Wi.inject(xx),at=Wi}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(t))throw Error(P(200));return fx(e,t,null,n)};Oe.createRoot=function(e,t){if(!yc(e))throw Error(P(299));var n=!1,r="",i=vh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=mc(e,1,!1,null,null,n,!1,r,i),e[jt]=t.current,ii(e.nodeType===8?e.parentNode:e),new xc(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Fp(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Cn(e)};Oe.hydrate=function(e,t,n){if(!ul(t))throw Error(P(200));return dl(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!yc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=vh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=yh(t,null,e,1,n??null,i,!1,l,s),e[jt]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new cl(t)};Oe.render=function(e,t,n){if(!ul(t))throw Error(P(200));return dl(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!ul(e))throw Error(P(40));return e._reactRootContainer?(Cn(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Oe.unstable_batchedUpdates=dc;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ul(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return dl(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function wh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wh)}catch(e){console.error(e)}}wh(),vp.exports=Oe;var bh=vp.exports,jh,Fu=bh;jh=Fu.createRoot,Fu.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(null,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Bu="popstate";function yx(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:s,hash:a}=r.location;return la("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wo(i)}return wx(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vx(){return Math.random().toString(36).substr(2,8)}function Uu(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mr(t):t,{state:n,key:t&&t.key||r||vx()})}function Wo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function wx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,s=i.history,a=Ut.Pop,c=null,d=m();d==null&&(d=0,s.replaceState(fi({},s.state,{idx:d}),""));function m(){return(s.state||{idx:null}).idx}function h(){a=Ut.Pop;let S=m(),x=S==null?null:S-d;d=S,c&&c({action:a,location:y.location,delta:x})}function g(S,x){a=Ut.Push;let f=la(y.location,S,x);d=m()+1;let p=Uu(f,d),k=y.createHref(f);try{s.pushState(p,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(k)}l&&c&&c({action:a,location:y.location,delta:1})}function C(S,x){a=Ut.Replace;let f=la(y.location,S,x);d=m();let p=Uu(f,d),k=y.createHref(f);s.replaceState(p,"",k),l&&c&&c({action:a,location:y.location,delta:0})}function j(S){let x=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:Wo(S);return f=f.replace(/ $/,"%20"),Z(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let y={get action(){return a},get location(){return e(i,s)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Bu,h),c=S,()=>{i.removeEventListener(Bu,h),c=null}},createHref(S){return t(i,S)},createURL:j,encodeLocation(S){let x=j(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:C,go(S){return s.go(S)}};return y}var Wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wu||(Wu={}));function bx(e,t,n){return n===void 0&&(n="/"),jx(e,t,n)}function jx(e,t,n,r){let i=typeof t=="string"?mr(t):t,l=sr(i.pathname||"/",n);if(l==null)return null;let s=kh(e);kx(s);let a=null,c=Dx(l);for(let d=0;a==null&&d<s.length;++d)a=Rx(s[d],c);return a}function kh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,s,a)=>{let c={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=qt([r,c.relativePath]),m=n.concat(c);l.children&&l.children.length>0&&(Z(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),kh(l.children,t,m,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:Lx(d,l.index),routesMeta:m})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,s);else for(let c of Ch(l.path))i(l,s,c)}),t}function Ch(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let s=Ch(r.join("/")),a=[];return a.push(...s.map(c=>c===""?l:[l,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function kx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ix(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Cx=/^:[\w-]+$/,$x=3,Sx=2,Ex=1,Px=10,Tx=-2,Vu=e=>e==="*";function Lx(e,t){let n=e.split("/"),r=n.length;return n.some(Vu)&&(r+=Tx),t&&(r+=Sx),n.filter(i=>!Vu(i)).reduce((i,l)=>i+(Cx.test(l)?$x:l===""?Ex:Px),r)}function Ix(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Rx(e,t,n){let{routesMeta:r}=e,i={},l="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,m=l==="/"?t:t.slice(l.length)||"/",h=sa({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),g=c.route;if(!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:qt([l,h.pathname]),pathnameBase:_x(qt([l,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(l=qt([l,h.pathnameBase]))}return s}function sa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],s=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,m,h)=>{let{paramName:g,isOptional:C}=m;if(g==="*"){let y=a[h]||"";s=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const j=a[h];return C&&!j?d[g]=void 0:d[g]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:s,pattern:e}}function zx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Dx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Nx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mx=e=>Nx.test(e);function Ax(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mr(e):e,l;if(n)if(Mx(n))l=n;else{if(n.includes("//")){let s=n;n=$h(n),vc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=Hu(n.substring(1),"/"):l=Hu(n,t)}else l=t;return{pathname:l,search:Fx(r),hash:Bx(i)}}function Hu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ox(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wc(e,t){let n=Ox(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mr(e):(i=fi({},e),Z(!i.pathname||!i.pathname.includes("?"),ql("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),ql("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),ql("#","search","hash",i)));let l=e===""||i.pathname==="",s=l?"/":i.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?t[h]:"/"}let c=Ax(i,a),d=s&&s!=="/"&&s.endsWith("/"),m=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const $h=e=>e.replace(/\/\/+/g,"/"),qt=e=>$h(e.join("/")),_x=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ux(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Sh=["post","put","patch","delete"];new Set(Sh);const Wx=["get",...Sh];new Set(Wx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(null,arguments)}const pl=v.createContext(null),Eh=v.createContext(null),Et=v.createContext(null),fl=v.createContext(null),Pt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Ph=v.createContext(null);function Vx(e,t){let{relative:n}=t===void 0?{}:t;gr()||Z(!1);let{basename:r,navigator:i}=v.useContext(Et),{hash:l,pathname:s,search:a}=hl(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:qt([r,s])),i.createHref({pathname:c,search:a,hash:l})}function gr(){return v.useContext(fl)!=null}function Ke(){return gr()||Z(!1),v.useContext(fl).location}function Th(e){v.useContext(Et).static||v.useLayoutEffect(e)}function Tt(){let{isDataRoute:e}=v.useContext(Pt);return e?i1():Hx()}function Hx(){gr()||Z(!1);let e=v.useContext(pl),{basename:t,future:n,navigator:r}=v.useContext(Et),{matches:i}=v.useContext(Pt),{pathname:l}=Ke(),s=JSON.stringify(wc(i,n.v7_relativeSplatPath)),a=v.useRef(!1);return Th(()=>{a.current=!0}),v.useCallback(function(d,m){if(m===void 0&&(m={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let h=bc(d,JSON.parse(s),l,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:qt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,s,l,e])}function Qx(){let{matches:e}=v.useContext(Pt),t=e[e.length-1];return t?t.params:{}}function hl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Et),{matches:i}=v.useContext(Pt),{pathname:l}=Ke(),s=JSON.stringify(wc(i,r.v7_relativeSplatPath));return v.useMemo(()=>bc(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function Gx(e,t){return Kx(e,t)}function Kx(e,t,n,r){gr()||Z(!1);let{navigator:i}=v.useContext(Et),{matches:l}=v.useContext(Pt),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=Ke(),m;if(t){var h;let S=typeof t=="string"?mr(t):t;c==="/"||(h=S.pathname)!=null&&h.startsWith(c)||Z(!1),m=S}else m=d;let g=m.pathname||"/",C=g;if(c!=="/"){let S=c.replace(/^\//,"").split("/");C="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let j=bx(e,{pathname:C}),y=Zx(j&&j.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:qt([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:qt([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,n,r);return t&&y?v.createElement(fl.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ut.Pop}},y):y}function Jx(){let e=r1(),t=Ux(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:i},n):null,null)}const Yx=v.createElement(Jx,null);class Xx extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Pt.Provider,{value:this.props.routeContext},v.createElement(Ph.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qx(e){let{routeContext:t,match:n,children:r}=e,i=v.useContext(pl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Pt.Provider,{value:t},r)}function Zx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||Z(!1),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<s.length;m++){let h=s[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:g,errors:C}=n,j=h.route.loader&&g[h.route.id]===void 0&&(!C||C[h.route.id]===void 0);if(h.route.lazy||j){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((m,h,g)=>{let C,j=!1,y=null,S=null;n&&(C=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||Yx,c&&(d<0&&g===0?(o1("route-fallback"),j=!0,S=null):d===g&&(j=!0,S=h.route.hydrateFallbackElement||null)));let x=t.concat(s.slice(0,g+1)),f=()=>{let p;return C?p=y:j?p=S:h.route.Component?p=v.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,v.createElement(qx,{match:h,routeContext:{outlet:m,matches:x,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?v.createElement(Xx,{location:n.location,revalidation:n.revalidation,component:y,error:C,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var Lh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lh||{}),Ih=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ih||{});function e1(e){let t=v.useContext(pl);return t||Z(!1),t}function t1(e){let t=v.useContext(Eh);return t||Z(!1),t}function n1(e){let t=v.useContext(Pt);return t||Z(!1),t}function Rh(e){let t=n1(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function r1(){var e;let t=v.useContext(Ph),n=t1(),r=Rh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function i1(){let{router:e}=e1(Lh.UseNavigateStable),t=Rh(Ih.UseNavigateStable),n=v.useRef(!1);return Th(()=>{n.current=!0}),v.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,hi({fromRouteId:t},l)))},[e,t])}const Qu={};function o1(e,t,n){Qu[e]||(Qu[e]=!0)}function l1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function s1(e){let{to:t,replace:n,state:r,relative:i}=e;gr()||Z(!1);let{future:l,static:s}=v.useContext(Et),{matches:a}=v.useContext(Pt),{pathname:c}=Ke(),d=Tt(),m=bc(t,wc(a,l.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(m);return v.useEffect(()=>d(JSON.parse(h),{replace:n,state:r,relative:i}),[d,h,i,n,r]),null}function zn(e){Z(!1)}function a1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:l,static:s=!1,future:a}=e;gr()&&Z(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:l,static:s,future:hi({v7_relativeSplatPath:!1},a)}),[c,a,l,s]);typeof r=="string"&&(r=mr(r));let{pathname:m="/",search:h="",hash:g="",state:C=null,key:j="default"}=r,y=v.useMemo(()=>{let S=sr(m,c);return S==null?null:{location:{pathname:S,search:h,hash:g,state:C,key:j},navigationType:i}},[c,m,h,g,C,j,i]);return y==null?null:v.createElement(Et.Provider,{value:d},v.createElement(fl.Provider,{children:n,value:y}))}function c1(e){let{children:t,location:n}=e;return Gx(aa(t),n)}new Promise(()=>{});function aa(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,i)=>{if(!v.isValidElement(r))return;let l=[...t,i];if(r.type===v.Fragment){n.push.apply(n,aa(r.props.children,l));return}r.type!==zn&&Z(!1),!r.props.index||!r.props.children||Z(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=aa(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(null,arguments)}function zh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function u1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function d1(e,t){return e.button===0&&(!t||t==="_self")&&!u1(e)}function ca(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function p1(e,t){let n=ca(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(l=>{n.append(i,l)})}),n}const f1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],h1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],m1="6";try{window.__reactRouterVersion=m1}catch{}const g1=v.createContext({isTransitioning:!1}),x1="startTransition",Gu=sm[x1];function y1(e){let{basename:t,children:n,future:r,window:i}=e,l=v.useRef();l.current==null&&(l.current=yx({window:i,v5Compat:!0}));let s=l.current,[a,c]=v.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},m=v.useCallback(h=>{d&&Gu?Gu(()=>c(h)):c(h)},[c,d]);return v.useLayoutEffect(()=>s.listen(m),[s,m]),v.useEffect(()=>l1(r),[r]),v.createElement(a1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const v1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jc=v.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:s,state:a,target:c,to:d,preventScrollReset:m,viewTransition:h}=t,g=zh(t,f1),{basename:C}=v.useContext(Et),j,y=!1;if(typeof d=="string"&&w1.test(d)&&(j=d,v1))try{let p=new URL(window.location.href),k=d.startsWith("//")?new URL(p.protocol+d):new URL(d),b=sr(k.pathname,C);k.origin===p.origin&&b!=null?d=b+k.search+k.hash:y=!0}catch{}let S=Vx(d,{relative:i}),x=j1(d,{replace:s,state:a,target:c,preventScrollReset:m,relative:i,viewTransition:h});function f(p){r&&r(p),p.defaultPrevented||x(p)}return v.createElement("a",Vo({},g,{href:j||S,onClick:y||l?r:f,ref:n,target:c}))}),Dh=v.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:s=!1,style:a,to:c,viewTransition:d,children:m}=t,h=zh(t,h1),g=hl(c,{relative:h.relative}),C=Ke(),j=v.useContext(Eh),{navigator:y,basename:S}=v.useContext(Et),x=j!=null&&k1(g)&&d===!0,f=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,p=C.pathname,k=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;i||(p=p.toLowerCase(),k=k?k.toLowerCase():null,f=f.toLowerCase()),k&&S&&(k=sr(k,S)||k);const b=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let E=p===f||!s&&p.startsWith(f)&&p.charAt(b)==="/",$=k!=null&&(k===f||!s&&k.startsWith(f)&&k.charAt(f.length)==="/"),w={isActive:E,isPending:$,isTransitioning:x},T=E?r:void 0,I;typeof l=="function"?I=l(w):I=[l,E?"active":null,$?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let _=typeof a=="function"?a(w):a;return v.createElement(jc,Vo({},h,{"aria-current":T,className:I,ref:n,style:_,to:c,viewTransition:d}),typeof m=="function"?m(w):m)});var ua;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ua||(ua={}));var Ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ku||(Ku={}));function b1(e){let t=v.useContext(pl);return t||Z(!1),t}function j1(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:s,viewTransition:a}=t===void 0?{}:t,c=Tt(),d=Ke(),m=hl(e,{relative:s});return v.useCallback(h=>{if(d1(h,n)){h.preventDefault();let g=r!==void 0?r:Wo(d)===Wo(m);c(e,{replace:g,state:i,preventScrollReset:l,relative:s,viewTransition:a})}},[d,c,m,r,i,n,e,l,s,a])}function Nh(e){let t=v.useRef(ca(e)),n=v.useRef(!1),r=Ke(),i=v.useMemo(()=>p1(r.search,n.current?null:t.current),[r.search]),l=Tt(),s=v.useCallback((a,c)=>{const d=ca(typeof a=="function"?a(i):a);n.current=!0,l("?"+d,c)},[l,i]);return[i,s]}function k1(e,t){t===void 0&&(t={});let n=v.useContext(g1);n==null&&Z(!1);let{basename:r}=b1(ua.useViewTransitionState),i=hl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=sr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=sr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sa(i.pathname,s)!=null||sa(i.pathname,l)!=null}var K="-ms-",Gr="-moz-",W="-webkit-",Mh="comm",ml="rule",kc="decl",C1="@import",$1="@namespace",Ah="@keyframes",S1="@layer",Oh=Math.abs,Cc=String.fromCharCode,da=Object.assign;function E1(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function _h(e){return e.trim()}function ht(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function po(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function $n(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Fh(e){return e.length}function Dr(e,t){return t.push(e),e}function P1(e,t){return e.map(t).join("")}function Ju(e,t){return e.filter(function(n){return!ht(n,t)})}var gl=1,ar=1,Bh=0,Ge=0,le=0,xr="";function xl(e,t,n,r,i,l,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:gl,column:ar,length:s,return:"",siblings:a}}function Nt(e,t){return da(xl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ln(e){for(;e.root;)e=Nt(e.root,{children:[e]});Dr(e,e.siblings)}function T1(){return le}function L1(){return le=Ge>0?ue(xr,--Ge):0,ar--,le===10&&(ar=1,gl--),le}function nt(){return le=Ge<Bh?ue(xr,Ge++):0,ar++,le===10&&(ar=1,gl++),le}function Wt(){return ue(xr,Ge)}function fo(){return Ge}function yl(e,t){return $n(xr,e,t)}function mi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I1(e){return gl=ar=1,Bh=qe(xr=e),Ge=0,[]}function R1(e){return xr="",e}function Zl(e){return _h(yl(Ge-1,pa(e===91?e+2:e===40?e+1:e)))}function z1(e){for(;(le=Wt())&&le<33;)nt();return mi(e)>2||mi(le)>3?"":" "}function D1(e,t){for(;--t&&nt()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return yl(e,fo()+(t<6&&Wt()==32&&nt()==32))}function pa(e){for(;nt();)switch(le){case e:return Ge;case 34:case 39:e!==34&&e!==39&&pa(le);break;case 40:e===41&&pa(e);break;case 92:nt();break}return Ge}function N1(e,t){for(;nt()&&e+le!==57;)if(e+le===84&&Wt()===47)break;return"/*"+yl(t,Ge-1)+"*"+Cc(e===47?e:nt())}function M1(e){for(;!mi(Wt());)nt();return yl(e,Ge)}function A1(e){return R1(ho("",null,null,null,[""],e=I1(e),0,[0],e))}function ho(e,t,n,r,i,l,s,a,c){for(var d=0,m=0,h=s,g=0,C=0,j=0,y=1,S=1,x=1,f=0,p="",k=i,b=l,E=r,$=p;S;)switch(j=f,f=nt()){case 40:if(j!=108&&ue($,h-1)==58){po($+=A(Zl(f),"&","&\f"),"&\f",Oh(d?a[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:$+=Zl(f);break;case 9:case 10:case 13:case 32:$+=z1(j);break;case 92:$+=D1(fo()-1,7);continue;case 47:switch(Wt()){case 42:case 47:Dr(O1(N1(nt(),fo()),t,n,c),c),(mi(j||1)==5||mi(Wt()||1)==5)&&qe($)&&$n($,-1,void 0)!==" "&&($+=" ");break;default:$+="/"}break;case 123*y:a[d++]=qe($)*x;case 125*y:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+m:x==-1&&($=A($,/\f/g,"")),C>0&&(qe($)-h||y===0&&j===47)&&Dr(C>32?Xu($+";",r,n,h-1,c):Xu(A($," ","")+";",r,n,h-2,c),c);break;case 59:$+=";";default:if(Dr(E=Yu($,t,n,d,m,i,a,p,k=[],b=[],h,l),l),f===123)if(m===0)ho($,t,E,E,k,l,h,a,b);else{switch(g){case 99:if(ue($,3)===110)break;case 108:if(ue($,2)===97)break;default:m=0;case 100:case 109:case 115:}m?ho(e,E,E,r&&Dr(Yu(e,E,E,0,0,i,a,p,i,k=[],h,b),b),i,b,h,a,r?k:b):ho($,E,E,E,[""],b,0,a,b)}}d=m=C=0,y=x=1,p=$="",h=s;break;case 58:h=1+qe($),C=j;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&L1()==125)continue}switch($+=Cc(f),f*y){case 38:x=m>0?1:($+="\f",-1);break;case 44:a[d++]=(qe($)-1)*x,x=1;break;case 64:Wt()===45&&($+=Zl(nt())),g=Wt(),m=h=qe(p=$+=M1(fo())),f++;break;case 45:j===45&&qe($)==2&&(y=0)}}return l}function Yu(e,t,n,r,i,l,s,a,c,d,m,h){for(var g=i-1,C=i===0?l:[""],j=Fh(C),y=0,S=0,x=0;y<r;++y)for(var f=0,p=$n(e,g+1,g=Oh(S=s[y])),k=e;f<j;++f)(k=_h(S>0?C[f]+" "+p:A(p,/&\f/g,C[f])))&&(c[x++]=k);return xl(e,t,n,i===0?ml:a,c,d,m,h)}function O1(e,t,n,r){return xl(e,t,n,Mh,Cc(T1()),$n(e,2,-2),0,r)}function Xu(e,t,n,r,i){return xl(e,t,n,kc,$n(e,0,r),$n(e,r+1,-1),r,i)}function Uh(e,t,n){switch(E1(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return W+e+e;case 4855:return W+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Gr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Gr+e+K+e+e;case 5936:switch(ue(e,t+11)){case 114:return W+e+K+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+K+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+K+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+K+e+e;case 6165:return W+e+K+"flex-"+e+e;case 5187:return W+e+A(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return W+e+K+"flex-item-"+A(e,/flex-|-self/g,"")+(ht(e,/flex-|baseline/)?"":K+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return W+e+K+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+K+A(e,"shrink","negative")+e;case 5292:return W+e+K+A(e,"basis","preferred-size")+e;case 6060:return W+"box-"+A(e,"-grow","")+W+e+K+A(e,"grow","positive")+e;case 4554:return W+A(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+K+"flex-pack:$3"),/space-between/,"justify")+W+e+e;case 4200:if(!ht(e,/flex-|baseline/))return K+"grid-column-align"+$n(e,t)+e;break;case 2592:case 3360:return K+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ht(r.props,/grid-\w+-end/)})?~po(e+(n=n[t].value),"span",0)?e:K+A(e,"-start","")+e+K+"grid-row-span:"+(~po(n,"span",0)?ht(n,/\d+/):+ht(n,/\d+/)-+ht(e,/\d+/))+";":K+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ht(r.props,/grid-\w+-start/)})?e:K+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Gr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~po(e,"stretch",0)?Uh(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,s,a,c,d){return K+i+":"+l+d+(s?K+i+"-span:"+(a?c:+c-+l)+d:"")+e});case 4949:if(ue(e,t+6)===121)return A(e,":",":"+W)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(ue(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+K+"$2box$3")+e;case 100:return A(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Ho(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function _1(e,t,n,r){switch(e.type){case S1:if(e.children.length)break;case C1:case $1:case kc:return e.return=e.return||e.value;case Mh:return"";case Ah:return e.return=e.value+"{"+Ho(e.children,r)+"}";case ml:if(!qe(e.value=e.props.join(",")))return""}return qe(n=Ho(e.children,r))?e.return=e.value+"{"+n+"}":""}function F1(e){var t=Fh(e);return function(n,r,i,l){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,l)||"";return s}}function B1(e){return function(t){t.root||(t=t.return)&&e(t)}}function U1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kc:e.return=Uh(e.value,e.length,n);return;case Ah:return Ho([Nt(e,{value:A(e.value,"@","@"+W)})],r);case ml:if(e.length)return P1(n=e.props,function(i){switch(ht(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ln(Nt(e,{props:[A(i,/:(read-\w+)/,":"+Gr+"$1")]})),Ln(Nt(e,{props:[i]})),da(e,{props:Ju(n,r)});break;case"::placeholder":Ln(Nt(e,{props:[A(i,/:(plac\w+)/,":"+W+"input-$1")]})),Ln(Nt(e,{props:[A(i,/:(plac\w+)/,":"+Gr+"$1")]})),Ln(Nt(e,{props:[A(i,/:(plac\w+)/,K+"input-$1")]})),Ln(Nt(e,{props:[i]})),da(e,{props:Ju(n,r)});break}return""})}}var Zn={},es,ts;const cr=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",Wh="active",Vh="data-styled-version",vl="6.4.2",$c=`/*!sc*/
`,Kr=typeof window<"u"&&typeof document<"u";function qu(e){if(typeof process<"u"&&Zn!==void 0){const t=Zn[e];if(t!==void 0&&t!=="")return t!=="false"}}const W1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(ts=(es=qu("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&es!==void 0?es:qu("SC_DISABLE_SPEEDY"))!==null&&ts!==void 0?ts:typeof process<"u"&&Zn!==void 0&&!1),V1="sc-keyframes-",H1={};function ur(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let mo=new Map,Qo=new Map,go=1;const Vi=e=>{if(mo.has(e))return mo.get(e);for(;Qo.has(go);)go++;const t=go++;return mo.set(e,t),Qo.set(t,e),t},Q1=e=>Qo.get(e),G1=(e,t)=>{go=t+1,mo.set(e,t),Qo.set(t,e)},Sc=Object.freeze([]),dr=Object.freeze({});function Hh(e,t,n=dr){return e.theme!==n.theme&&e.theme||t||n.theme}const K1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J1=/(^-|-$)/g;function Qh(e){return e.replace(K1,"-").replace(J1,"")}const Y1=/(a)(d)/gi,Zu=e=>String.fromCharCode(e+(e>25?39:97));function Gh(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zu(t%52)+n;return(Zu(t%52)+n).replace(Y1,"$1-$2")}const fa=5381,vn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Kh=e=>vn(fa,e);function Jh(e){return Gh(Kh(e)>>>0)}function X1(e){return e.displayName||e.name||"Component"}function ha(e){return typeof e=="string"&&!0}function q1(e){return ha(e)?`styled.${e}`:`Styled(${X1(e)})`}const Yh=Symbol.for("react.memo"),Z1=Symbol.for("react.forward_ref"),ey={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ty={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ny={[Z1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Yh]:Xh};function ed(e){return("type"in(t=e)&&t.type.$$typeof)===Yh?Xh:"$$typeof"in e?ny[e.$$typeof]:ey;var t}const ry=Object.defineProperty,iy=Object.getOwnPropertyNames,oy=Object.getOwnPropertySymbols,ly=Object.getOwnPropertyDescriptor,sy=Object.getPrototypeOf,ay=Object.prototype;function qh(e,t,n){if(typeof t!="string"){const r=sy(t);r&&r!==ay&&qh(e,r,n);const i=iy(t).concat(oy(t)),l=ed(e),s=ed(t);for(let a=0;a<i.length;++a){const c=i[a];if(!(c in ty||n&&n[c]||s&&c in s||l&&c in l)){const d=ly(t,c);try{ry(e,c,d)}catch{}}}}return e}function yr(e){return typeof e=="function"}const cy=Symbol.for("react.forward_ref");function Ec(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===cy&&"styledComponentId"in e}function Nr(e,t){return e&&t?e+" "+t:e||t||""}function ma(e,t){return e.join("")}function gi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ga(e,t,n=!1){if(!n&&!gi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ga(e[r],t[r]);else if(gi(t))for(const r in t)e[r]=ga(e[r],t[r]);return e}function Zh(e,t){Object.defineProperty(e,"toString",{value:t})}const uy=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const i=this.groupSizes,l=i.length;let s=l;for(;e>=s;)if(s<<=1,s<0)throw ur(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(let a=l;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,l=t.length;i<l;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let l=r;l<i;l++)t+=this.tag.getRule(l)+$c;return t}},dy=`style[${cr}][${Vh}="${vl}"]`,py=new RegExp(`^${cr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),td=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,xa=e=>{if(!e)return document;if(td(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(td(t))return t}return document},fy=(e,t,n)=>{const r=n.split(",");let i;for(let l=0,s=r.length;l<s;l++)(i=r[l])&&e.registerName(t,i)},hy=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split($c),i=[];for(let l=0,s=r.length;l<s;l++){const a=r[l].trim();if(!a)continue;const c=a.match(py);if(c){const d=0|parseInt(c[1],10),m=c[2];d!==0&&(G1(m,d),fy(e,m,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(a)}},ns=e=>{const t=xa(e.options.target).querySelectorAll(dy);for(let n=0,r=t.length;n<r;n++){const i=t[n];i&&i.getAttribute(cr)!==Wh&&(hy(e,i),i.parentNode&&i.parentNode.removeChild(i))}};let Er=!1;function my(){if(Er!==!1)return Er;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Er=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Er=t.getAttribute("content")||void 0}return Er=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const e0=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),l=(c=>{const d=Array.from(c.querySelectorAll(`style[${cr}]`));return d[d.length-1]})(r),s=l!==void 0?l.nextSibling:null;i.setAttribute(cr,Wh),i.setAttribute(Vh,vl);const a=t||my();return a&&i.setAttribute("nonce",a),r.insertBefore(i,s),i},gy=class{constructor(e,t){this.element=e0(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,s=i.length;l<s;l++){const a=i[l];if(a.ownerNode===n)return a}throw ur(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},xy=class{constructor(e,t){this.element=e0(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let nd=Kr;const yy={isServer:!Kr,useCSSOMInjection:!W1};class $i{static registerId(t){return Vi(t)}constructor(t=dr,n={},r){this.options=Object.assign(Object.assign({},yy),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Kr&&nd&&(nd=!1,ns(this)),Zh(this,()=>(i=>{const l=i.getTag(),{length:s}=l;let a="";for(let c=0;c<s;c++){const d=Q1(c);if(d===void 0)continue;const m=i.names.get(d);if(m===void 0||!m.size)continue;const h=l.getGroup(c);if(h.length===0)continue;const g=cr+".g"+c+'[id="'+d+'"]';let C="";for(const j of m)j.length>0&&(C+=j+",");a+=h+g+'{content:"'+C+'"}'+$c}return a})(this))}rehydrate(){!this.server&&Kr&&ns(this)}reconstructWithOptions(t,n=!0){const r=new $i(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Kr&&t.target!==this.options.target&&xa(this.options.target)!==xa(t.target)&&ns(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:i})=>n?new gy(r,i):new xy(r,i))(this.options),new uy(t)));var t}hasNameForId(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i}registerName(t,n){Vi(t),t.startsWith(V1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vi(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Vi(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const t0=new WeakSet,vy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function wy(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in vy||e.startsWith("--")?String(t).trim():t+"px"}const fn=47;function rd(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const by=Symbol.for("sc-keyframes");function jy(e){return typeof e=="object"&&e!==null&&by in e}function n0(e){return yr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const r0=e=>e==null||e===!1||e==="",ky=Symbol.for("react.client.reference");function id(e){return e.$$typeof===ky}function i0(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!r0(r)&&(Array.isArray(r)&&t0.has(r)||yr(r)?t.push(rd(n)+":",r,";"):gi(r)?(t.push(n+" {"),i0(r,t),t.push("}")):t.push(rd(n)+": "+wy(n,r)+";"))}}function Zt(e,t,n,r,i=[]){if(r0(e))return i;const l=typeof e;if(l==="string")return i.push(e),i;if(l==="function"){if(id(e))return i;if(n0(e)&&t){const s=e(t);return Zt(s,t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Zt(e[s],t,n,r,i);return i}return Ec(e)?(i.push(`.${e.styledComponentId}`),i):jy(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):id(e)?i:gi(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(i0(e,i),i):(i.push(e.toString()),i)}const Cy=Kh(vl);class $y{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=vn(Cy,n),this.baseStyle=r,$i.registerId(n)}generateAndInjectStyles(t,n,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")l+=a;else if(a)if(n0(a)){const c=a(t);typeof c=="string"?l+=c:c!=null&&c!==!1&&(l+=ma(Zt(c,t,n,r)))}else l+=ma(Zt(a,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+l:l;let a=this.dynamicNameCache.get(s);if(!a){if(a=Gh(vn(vn(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const c=r(l,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,c)}i=Nr(i,a)}}return i}}const Sy=/&/g;function o0(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function rs(e){const t=e.length;let n="",r=0,i=0,l=0,s=!1,a=!1;for(let c=0;c<t;c++){const d=e.charCodeAt(c);if(l!==0||s||d!==fn||e.charCodeAt(c+1)!==42)if(s)d===42&&e.charCodeAt(c+1)===fn&&(s=!1,c++);else if(d!==34&&d!==39||o0(e,c)){if(l===0)if(d===123)i++;else if(d===125){if(i--,i<0){a=!0;let m=c+1;for(;m<t;){const h=e.charCodeAt(m);if(h===59||h===10)break;m++}m<t&&e.charCodeAt(m)===59&&m++,i=0,c=m-1,r=m;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else d===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===0?l=d:l===d&&(l=0);else s=!0,c++}return a||i!==0||l!==0?(r<t&&i===0&&l===0&&(n+=e.substring(r)),n):e}function l0(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const l=e[i];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const s=l.props,a=[];for(let c=0;c<s.length;c++)a[c]=n+s[c];l.props=a}Array.isArray(l.children)&&l.type!=="@keyframes"&&l0(l.children,t)}return e}function Ey({options:e=dr,plugins:t=Sc}=dr){let n,r,i;const l=(g,C,j)=>j.startsWith(r)&&j.endsWith(r)&&j.replaceAll(r,"").length>0?`.${n}`:g,s=t.slice();s.push(g=>{g.type===ml&&g.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(Sy,r).replace(i,l))}),e.prefix&&s.push(U1),s.push(_1);let a=[];const c=F1(s.concat(B1(g=>a.push(g)))),d=(g,C="",j="",y="&")=>{n=y,r=C,i=void 0;const S=function(f){const p=f.indexOf("//")!==-1,k=f.indexOf("}")!==-1;if(!p&&!k)return f;if(!p)return rs(f);const b=f.length;let E="",$=0,w=0,T=0,I=0,_=0,te=!1;for(;w<b;){const B=f.charCodeAt(w);if(B!==34&&B!==39||o0(f,w))if(T===0)if(B===fn&&w+1<b&&f.charCodeAt(w+1)===42){for(w+=2;w+1<b&&(f.charCodeAt(w)!==42||f.charCodeAt(w+1)!==fn);)w++;w+=2}else if(B!==40)if(B!==41)if(I>0)w++;else if(B===42&&w+1<b&&f.charCodeAt(w+1)===fn)E+=f.substring($,w),w+=2,$=w,te=!0;else if(B===fn&&w+1<b&&f.charCodeAt(w+1)===fn){for(E+=f.substring($,w);w<b&&f.charCodeAt(w)!==10;)w++;$=w,te=!0}else B===123?_++:B===125&&_--,w++;else I>0&&I--,w++;else I++,w++;else w++;else T===0?T=B:T===B&&(T=0),w++}return te?($<b&&(E+=f.substring($)),_===0?E:rs(E)):_===0?f:rs(f)}(g);let x=A1(j||C?j+" "+C+" { "+S+" }":S);return e.namespace&&(x=l0(x,e.namespace)),a=[],Ho(x,c),a},m=e;let h=fa;for(let g=0;g<t.length;g++)t[g].name||ur(15),h=vn(h,t[g].name);return m!=null&&m.namespace&&(h=vn(h,m.namespace)),m!=null&&m.prefix&&(h=vn(h,"p")),d.hash=h!==fa?h.toString():"",d}const Py=new $i,Ty=Ey(),s0=ve.createContext({shouldForwardProp:void 0,styleSheet:Py,stylis:Ty,stylisPlugins:void 0});s0.Consumer;function a0(){return ve.useContext(s0)}const xi=ve.createContext(void 0);xi.Consumer;function Ly(e){const t=ve.useContext(xi),n=ve.useMemo(()=>function(r,i){if(!r)throw ur(14);if(yr(r))return r(i);if(Array.isArray(r)||typeof r!="object")throw ur(8);return i?Object.assign(Object.assign({},i),r):r}(e.theme,t),[e.theme,t]);return e.children?ve.createElement(xi.Provider,{value:n},e.children):null}const od=Object.prototype.hasOwnProperty,is={};function Iy(e,t){const n=typeof e!="string"?"sc":Qh(e);is[n]=(is[n]||0)+1;const r=n+"-"+Jh(vl+n+is[n]);return t?t+"-"+r:r}function Ry(e,t,n){const r=Ec(e),i=e,l=!ha(e),{attrs:s=Sc,componentId:a=Iy(t.displayName,t.parentComponentId),displayName:c=q1(e)}=t,d=t.displayName&&t.componentId?Qh(t.displayName)+"-"+t.componentId:t.componentId||a,m=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:h}=t;if(r&&i.shouldForwardProp){const y=i.shouldForwardProp;if(t.shouldForwardProp){const S=t.shouldForwardProp;h=(x,f)=>y(x,f)&&S(x,f)}else h=y}const g=new $y(n,d,r?i.componentStyle:void 0);function C(y,S){return function(x,f,p){const{attrs:k,componentStyle:b,defaultProps:E,foldedComponentIds:$,styledComponentId:w,target:T}=x,I=ve.useContext(xi),_=a0(),te=x.shouldForwardProp||_.shouldForwardProp,B=Hh(f,I,E)||dr;let Se,sn;{const z=ve.useRef(null),D=z.current;if(D!==null&&D[1]===B&&D[2]===_.styleSheet&&D[3]===_.stylis&&D[7]===b&&function(H,U,ae){const ne=H,oe=U;let ze=0;for(const Fe in oe)if(od.call(oe,Fe)&&(ze++,ne[Fe]!==oe[Fe]))return!1;return ze===ae}(D[0],f,D[4]))Se=D[5],sn=D[6];else{Se=function(U,ae,ne){const oe=Object.assign(Object.assign({},ae),{className:void 0,theme:ne}),ze=U.length>1;for(let Fe=0;Fe<U.length;Fe++){const $l=U[Fe],Si=yr($l)?$l(ze?Object.assign({},oe):oe):$l;for(const It in Si)It==="className"?oe.className=Nr(oe.className,Si[It]):It==="style"?oe.style=Object.assign(Object.assign({},oe.style),Si[It]):It in ae&&ae[It]===void 0||(oe[It]=Si[It])}return"className"in ae&&typeof ae.className=="string"&&(oe.className=Nr(oe.className,ae.className)),oe}(k,f,B),sn=function(U,ae,ne,oe){return U.generateAndInjectStyles(ae,ne,oe)}(b,Se,_.styleSheet,_.stylis);let H=0;for(const U in f)od.call(f,U)&&H++;z.current=[f,B,_.styleSheet,_.stylis,H,Se,sn,b]}}const Lt=Se.as||T,an=function(z,D,H,U){const ae={};for(const ne in z)z[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&z.theme===H||(ne==="forwardedAs"?ae.as=z.forwardedAs:U&&!U(ne,D)||(ae[ne]=z[ne]));return ae}(Se,Lt,B,te);let L=Nr($,w);return sn&&(L+=" "+sn),Se.className&&(L+=" "+Se.className),an[ha(Lt)&&Lt.includes("-")?"class":"className"]=L,p&&(an.ref=p),v.createElement(Lt,an)}(j,y,S)}C.displayName=c;let j=ve.forwardRef(C);return j.attrs=m,j.componentStyle=g,j.displayName=c,j.shouldForwardProp=h,j.foldedComponentIds=r?Nr(i.foldedComponentIds,i.styledComponentId):"",j.styledComponentId=d,j.target=r?i.target:e,Object.defineProperty(j,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?function(S,...x){for(const f of x)ga(S,f,!0);return S}({},i.defaultProps,y):y}}),Zh(j,()=>`.${j.styledComponentId}`),l&&qh(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}var zy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function ld(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const sd=e=>(t0.add(e),e);function c0(e,...t){if(yr(e)||gi(e))return sd(Zt(ld(Sc,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Zt(n):sd(Zt(ld(n,t)))}function ya(e,t,n=dr){if(!t)throw ur(1,t);const r=(i,...l)=>e(t,n,c0(i,...l));return r.attrs=i=>ya(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)})),r.withConfig=i=>ya(e,t,Object.assign(Object.assign({},n),i)),r}const u0=e=>ya(Ry,e),u=u0;zy.forEach(e=>{u[e]=u0(e)});class Dy{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let i=0;i<r.length;i+=1){const l=r[i];if(yr(l)&&!Ec(l))return!1}return!0}(t),$i.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,i){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,i);else{const a=this.computeRules(t,n,r,i);r.insertRules(l,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,i),!r.server&&s){const a=s.rules,c=this.instanceRules.get(t).rules;if(a.length===c.length){let d=!0;for(let m=0;m<a.length;m++)if(a[m]!==c[m]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,n,r,i){const l=ma(Zt(this.rules,n,r,i)),s={name:this.componentId+t,rules:i(l,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function Ny(e,...t){const n=c0(e,...t),r=`sc-global-${Jh(JSON.stringify(n))}`,i=new Dy(n,r),l=a=>{const c=a0(),d=ve.useContext(xi);let m;{const h=ve.useRef(null);h.current===null&&(h.current=c.styleSheet.allocateGSInstance(r)),m=h.current}c.styleSheet.server&&s(m,a,c.styleSheet,d,c.stylis);{const h=i.isStatic?[m,c.styleSheet,i]:[m,a,c.styleSheet,d,c.stylis,i],g=ve.useRef(i);ve.useLayoutEffect(()=>{c.styleSheet.server||(g.current!==i&&(c.styleSheet.clearRules(r),g.current=i),s(m,a,c.styleSheet,d,c.stylis))},h),ve.useLayoutEffect(()=>()=>{c.styleSheet.server||i.removeStyles(m,c.styleSheet)},[m,c.styleSheet,i])}return c.styleSheet.server&&i.instanceRules.delete(m),null};function s(a,c,d,m,h){if(i.isStatic)i.renderStyles(a,H1,d,h);else{const g=Object.assign(Object.assign({},c),{theme:Hh(c,m,l.defaultProps)});i.renderStyles(a,g,d,h)}}return ve.memo(l)}const My={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},ad=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),o.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),o.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),o.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),Ay=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Oy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),o.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),_y=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),o.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),o.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),o.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Fy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),By=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Uy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Wy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Vy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),o.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),o.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),d0=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),xo=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Pr=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Hy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),o.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),Qy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),Pc=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),p0=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),yi=({size:e=16,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),cd=({size:e=16,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),vt=({size:e=14,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),wl=({size:e=14,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),va=({size:e=16,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),Gy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Go=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),o.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),Ky=({size:e=32,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),o.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),Jy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),o.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),o.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),o.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),Yy=({size:e=32,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),o.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),o.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),ud=({size:e=16,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ko=({size:e=16,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),o.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),o.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),Xy=({size:e=16,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),qy=({size:e=16,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),dd=({size:e=16,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),o.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),f0=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),o.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),o.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Zy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M2 6l8-4 8 4-8 4-8-4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 10l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 14l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),ev=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),o.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),Tc=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Lc=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M11 4h5v5M16 4l-8 8M8 6H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),tv=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 3V4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})}),vi=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),o.jsx("circle",{cx:"10",cy:"10",r:"3.5",stroke:t,strokeWidth:"1.5"}),o.jsx("path",{d:"M7.53 7.53 4.05 4.05M12.47 12.47l3.48 3.48M12.47 7.53l3.48-3.48M7.53 12.47l-3.48 3.48",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),nv=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"5",y:"5",width:"10",height:"10",rx:"1",stroke:t,strokeWidth:"1.5"}),o.jsx("rect",{x:"7.5",y:"7.5",width:"5",height:"5",rx:"0.5",stroke:t,strokeWidth:"1.5"}),o.jsx("path",{d:"M8 2v3M12 2v3M8 15v3M12 15v3M2 8h3M2 12h3M15 8h3M15 12h3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]});function Sn(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return o.jsx(ad,{...r});case"settings":return o.jsx(Ay,{...r});case"shield":return o.jsx(Oy,{...r});case"hierarchy":return o.jsx(_y,{...r});case"cycle":return o.jsx(Fy,{...r});case"code":return o.jsx(By,{...r});case"globe":return o.jsx(Uy,{...r});case"document":return o.jsx(Wy,{...r});case"mobile":return o.jsx(Vy,{...r});case"sparkle":return o.jsx(d0,{...r});case"envelope":return o.jsx(xo,{...r});case"key":return o.jsx(Gy,{...r});case"atom":return o.jsx(Jy,{...r});case"chip":return o.jsx(nv,{...r});case"layers":return o.jsx(Zy,{...r});default:return o.jsx(ad,{...r})}}const h0=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],m0=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],In=e=>[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],pn={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"Inventory",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"Automation",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"Integrations",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"Release security",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"Signing",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"Integrations",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"Manage CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"Revocation & validation",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"Configuration",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:In("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:In("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:In("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:In("device-trust")},"iot-trust":{id:"iot-trust",label:"IoT Trust",route:"/iot-trust",ariaLabel:"IoT Trust navigation",sections:In("iot-trust")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:In("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing and subscriptions",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]},{title:"Ecommerce billing",isSelfService:!0,isNavParent:!0,defaultExpanded:!0,items:[{label:"Receipts and invoices",route:"/settings/billing/receipts"},{label:"Payment details",route:"/settings/billing/payment-details"}]},{title:"DigiCert products",isNavParent:!0,defaultExpanded:!0,items:[{label:"All products",route:"/settings/billing/all-products"},{label:"CertCentral",route:"/certcentral"},{label:"Content Trust",route:"/content-trust"},{label:"Device Trust",route:"/device-trust"},{label:"DigiCert DNS",route:"/dns"},{label:"Private CA",route:"/private-ca"},{label:"Software Trust",route:"/software-trust"},{label:"Trust Lifecycle",route:"/trust-lifecycle"},{label:"Valimail",route:"/valimail"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},rv={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/iot-trust":"IoT Trust","/iot-trust/dashboard":"Dashboard","/iot-trust/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/billing/all-products":"Explore DigiCert products","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},iv=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],ov=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],lv=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],sv=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/support","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/iot-trust","/iot-trust/dashboard","/iot-trust/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/billing/all-products","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],av=u.div`
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
`,cv=u.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,pd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,fd=u.a`
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
`;function uv({onClose:e,onSelectProduct:t,onSelectProductFromTopNav:n}){const r=Tt(),i=l=>{n?n(l.productId):t(l.productId),r(l.route),e()};return o.jsxs(av,{role:"menu","aria-label":"Settings menu",children:[o.jsx(cv,{children:"Settings"}),o.jsx(pd,{}),iv.map(l=>o.jsx(fd,{href:l.route,role:"menuitem",onClick:s=>{s.preventDefault(),i(l)},children:l.label},l.route)),o.jsx(pd,{}),ov.map(l=>o.jsx(fd,{href:l.route,role:"menuitem",onClick:s=>{s.preventDefault(),i(l)},children:l.label},l.route))]})}const dv=u.div`
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
`,pv=u.div`
  padding: 4px 0;
`,fv=u.a`
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
`;function hv({onClose:e}){return o.jsx(dv,{role:"menu","aria-label":"Help menu",children:o.jsx(pv,{children:lv.map(t=>o.jsx(fv,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const mv=u.div`
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
`,gv=u.div`
  padding: 12px 16px;
`,xv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,yv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,hd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,vv=u.div`
  padding: 4px 0;
`,md=u.a`
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
`;function wv({onClose:e,onSelectProduct:t,onSelectProductFromTopNav:n}){const r=Tt(),i=l=>{l.preventDefault(),n?n("profile"):t("profile"),r("/profile"),e()};return o.jsxs(mv,{role:"menu","aria-label":"User profile menu",children:[o.jsxs(gv,{children:[o.jsx(xv,{children:"Deepika Chauhan"}),o.jsx(yv,{children:"deepika.chauhan@digicert.com"})]}),o.jsx(hd,{}),o.jsxs(vv,{children:[o.jsx(md,{href:"/profile",role:"menuitem",onClick:i,children:"My profile"}),o.jsx(hd,{}),o.jsx(md,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const bv=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,jv=u.div`
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
`,kv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Cv=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,$v=u.button`
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
`,Sv=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,Ev=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`,Pv=u.button`
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
`;function Tv({open:e,onClose:t}){const n=v.useRef(null),r=v.useRef(null);return v.useEffect(()=>{var l;if(!e)return;(l=n.current)==null||l.focus();const i=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const c=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),d=c[0],m=c[c.length-1];s.shiftKey&&document.activeElement===d?(s.preventDefault(),m.focus()):!s.shiftKey&&document.activeElement===m&&(s.preventDefault(),d.focus())};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,t]),o.jsxs(o.Fragment,{children:[o.jsx(bv,{$open:e,onClick:t,"aria-hidden":"true"}),o.jsxs(jv,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[o.jsxs(kv,{children:[o.jsx(Cv,{id:"cart-heading",children:"Cart"}),o.jsx($v,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),o.jsxs(Sv,{children:[o.jsx(Ev,{children:"Your cart is empty."}),o.jsx(Pv,{onClick:t,children:"Continue shopping"})]})]})]})}const Lv=u.div`
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
`,Iv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Rv=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,zv=u.button`
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
`,Dv=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`,Nv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Mv=u.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,Av=u.input`
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
`,Ov=u.button`
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
`;function _v({open:e,onClose:t}){const n=v.useRef(null);return v.useEffect(()=>{const r=i=>{i.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),o.jsxs(Lv,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[o.jsxs(Iv,{children:[o.jsx(Rv,{children:"AI Assist"}),o.jsx(zv,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),o.jsxs(Dv,{children:[o.jsx(Nv,{children:"How can I help you today?"}),o.jsxs(Mv,{children:[o.jsx(Av,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),o.jsx(Ov,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const Fv=u.header`
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
`,Bv=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Uv=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Wv=u.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,Vv=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 18px;
  color: ${({theme:e})=>e.colors.white};
  letter-spacing: 0.02em;
  user-select: none;

  .logo-bold { font-weight: 700; }
  .logo-normal { font-weight: 400; }
`,Tr=u.button`
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
`,Hv=u.span`
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
`,Qv=u.button`
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
`,Hi=u.div`
  position: relative;
  display: flex;
  align-items: center;
`,Gv=u.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function Kv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:i,onSelectProduct:l,onSelectProductFromTopNav:s,cartCount:a=3}){const c=n==="settings"||n==="help"||n==="profile";return o.jsxs(o.Fragment,{children:[o.jsxs(Fv,{role:"banner",children:[o.jsxs(Bv,{children:[o.jsx(Wv,{children:o.jsx(Tr,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:o.jsx(p0,{size:20})})}),o.jsxs(Vv,{"aria-label":"DigiCert ONE",children:[o.jsx("span",{className:"logo-normal",children:"digicert "}),o.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),o.jsxs(Uv,{children:[o.jsx(Hi,{children:o.jsxs(Tr,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[o.jsx(Hy,{size:20}),a>0&&o.jsx(Hv,{"aria-hidden":"true",children:a})]})}),o.jsxs(Hi,{children:[o.jsx(Tr,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:o.jsx(Pc,{size:20})}),n==="settings"&&o.jsx(uv,{onClose:i,onSelectProduct:l,onSelectProductFromTopNav:s})]}),o.jsxs(Hi,{children:[o.jsx(Tr,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:o.jsx(Qy,{size:20})}),n==="help"&&o.jsx(hv,{onClose:i})]}),o.jsx(Tr,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:o.jsx(d0,{size:20})}),o.jsxs(Hi,{children:[o.jsx(Qv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&o.jsx(wv,{onClose:i,onSelectProduct:l,onSelectProductFromTopNav:s})]})]})]}),c&&o.jsx(Gv,{onClick:i,"aria-hidden":"true"}),o.jsx(Tv,{open:n==="cart",onClose:i}),o.jsx(_v,{open:n==="ai-assist",onClose:i})]})}const Jv=u.nav`
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
`,gd=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Yv=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,Xv=u.button`
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
`,qv=u.span`
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
`,Zv=350;function xd({product:e,isActive:t,onSelect:n}){const r=Tt(),i=v.useRef(null),l=v.useRef(null),[s,a]=v.useState({visible:!1,y:0});v.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]);const c=()=>{var j;const C=(j=i.current)==null?void 0:j.getBoundingClientRect();return C?C.top+C.height/2:0},d=C=>{l.current&&(clearTimeout(l.current),l.current=null),C?a({visible:!0,y:c()}):l.current=setTimeout(()=>a({visible:!0,y:c()}),Zv)},m=()=>{l.current&&(clearTimeout(l.current),l.current=null),a(C=>({...C,visible:!1}))},h=()=>{m(),n(e.id),r(e.route)},g=C=>{if(C.key==="Escape"){m();return}(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),h())};return o.jsxs(o.Fragment,{children:[o.jsx(Xv,{ref:i,$active:t,onClick:h,onKeyDown:g,onMouseEnter:()=>d(!1),onMouseLeave:m,onFocus:()=>d(!0),onBlur:m,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:Sn(e.iconType,20,t?"#111827":"#6B7280")}),bh.createPortal(o.jsx(qv,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function e2({activeProductId:e,onSelectProduct:t}){return o.jsxs(Jv,{"aria-label":"Product navigation",children:[o.jsx(gd,{children:h0.map(n=>o.jsx(xd,{product:n,isActive:e===n.id,onSelect:t},n.id))}),o.jsx(Yv,{}),o.jsx(gd,{children:m0.map(n=>o.jsx(xd,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const t2=u.div`
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
`,n2=u.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,r2=u.div`
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
`,i2=u.div`
  flex-shrink: 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
`,o2=u.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.blue300};
  text-align: left;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral200};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.blue300};
    outline-offset: -2px;
  }
`,l2=u.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,s2=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,a2=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,c2=u.button`
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
`,u2=u.div`
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
`,d2=u.div`
  margin-bottom: 2px;
`,p2=u.button`
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
`,f2=u.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,h2=u(Dh)`
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
`;function m2({section:e,index:t}){const[n,r]=v.useState(e.defaultExpanded??t===0),i=Ke(),l=!!e.title,s=!!e.isNavParent,a=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return o.jsxs(d2,{children:[o.jsxs(p2,{$hasTitle:l,$isNavParent:s,onClick:()=>r(c=>!c),"aria-expanded":n,"aria-controls":a,children:[o.jsx("span",{children:e.title}),n?o.jsx(wl,{size:12,color:"currentColor"}):o.jsx(vt,{size:12,color:"currentColor"})]}),o.jsx(f2,{id:a,$open:n||!l,children:e.items.map(c=>o.jsx(h2,{to:c.route,end:!0,$indent:s,"aria-current":i.pathname===c.route?"page":void 0,children:c.label},c.route))})]})}function g2({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r,previousRoute:i,onGoBack:l}){let s=pn[e];return e==="settings-billing"&&r==="enterprise"&&(s={...s,sections:s.sections.filter(a=>!a.isSelfService)}),v.useEffect(()=>{const a=c=>{c.key==="Escape"&&t&&n()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[t,n]),o.jsxs(o.Fragment,{children:[o.jsx(u2,{$visible:t,onClick:n,"aria-hidden":"true"}),o.jsxs(t2,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[o.jsx(n2,{children:o.jsxs(r2,{$open:t,children:[i&&o.jsx(i2,{children:o.jsxs(o2,{onClick:()=>l(i),"aria-label":"Back",children:[o.jsx(yi,{size:12,color:"currentColor"}),"Back"]})}),s&&o.jsxs(o.Fragment,{children:[o.jsx(l2,{children:o.jsx(s2,{children:s.label})}),o.jsx(a2,{children:o.jsx("nav",{"aria-label":"Product navigation",children:s.sections.map((a,c)=>o.jsx(m2,{section:a,index:c},a.title||c))})})]})]})}),o.jsx(c2,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:o.jsx(yi,{size:14,color:"currentColor"})})]})]})}const x2=u.div`
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
`,y2=u.div`
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
`,v2=u.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({$offset:e})=>e}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`,yd=u.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`,vd=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`,wd=u.span`
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
`,bd=u.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`,jd=u.div`
  display: flex;
  flex-direction: column;
`,w2=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`,kd=u.button`
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
`,Cd=u.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,b2=u.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,j2=u(Dh)`
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
`;function k2({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const i=Tt(),l=Ke(),s=v.useRef(null),a=v.useRef(null),[c,d]=v.useState("l1"),[m,h]=v.useState(null),g=v.useRef(0),C=v.useRef(0);v.useEffect(()=>{e||(d("l1"),h(null))},[e]),v.useEffect(()=>{const b=s.current;b&&(e?b.removeAttribute("inert"):b.setAttribute("inert",""))},[e]),v.useEffect(()=>{if(!e)return;const b=setTimeout(()=>{var E,$;($=(E=s.current)==null?void 0:E.querySelector("button"))==null||$.focus()},50);return()=>clearTimeout(b)},[e]),v.useEffect(()=>{if(!e)return;const b=E=>{if(E.key==="Escape"){r();return}if(E.key!=="Tab")return;const $=s.current;if(!$)return;const w=$.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),T=w[0],I=w[w.length-1];E.shiftKey&&document.activeElement===T?(E.preventDefault(),I.focus()):!E.shiftKey&&document.activeElement===I&&(E.preventDefault(),T.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[e,r]);const j=b=>{h(b),d("l2"),setTimeout(()=>{var E;(E=a.current)==null||E.focus()},50)},y=()=>{d("l1")},S=b=>{!!pn[b.id]?j(b.id):(n(b.id),i(b.route),r())},x=()=>{r()},f=b=>{g.current=b.touches[0].clientX,C.current=b.touches[0].clientY},p=b=>{const E=b.changedTouches[0].clientX-g.current,$=Math.abs(b.changedTouches[0].clientY-C.current);E<-80&&$<60&&r()},k=m?pn[m]:null;return o.jsxs(o.Fragment,{children:[o.jsx(x2,{$open:e,onClick:r,"aria-hidden":"true"}),o.jsx(y2,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:f,onTouchEnd:p,children:o.jsxs(v2,{$offset:c==="l1"?0:-50,children:[o.jsxs(yd,{"aria-hidden":c!=="l1",children:[o.jsxs(vd,{children:[o.jsx(wd,{children:"Navigation"}),o.jsx(os,{onClick:r,"aria-label":"Close menu",children:o.jsx(va,{size:16,color:"currentColor"})})]}),o.jsx(bd,{children:o.jsxs("nav",{"aria-label":"Product list",children:[o.jsx(jd,{children:h0.map(b=>o.jsxs(kd,{$active:t===b.id,onClick:()=>S(b),"aria-current":t===b.id?"page":void 0,"aria-haspopup":pn[b.id]?"menu":void 0,children:[Sn(b.iconType,18,t===b.id?"#1976D2":"#6B7280"),o.jsx(Cd,{children:b.label}),pn[b.id]&&o.jsx(cd,{size:14,color:t===b.id?"#1976D2":"#9CA3AF"})]},b.id))}),o.jsx(w2,{}),o.jsx(jd,{children:m0.map(b=>o.jsxs(kd,{$active:t===b.id,onClick:()=>S(b),"aria-current":t===b.id?"page":void 0,"aria-haspopup":pn[b.id]?"menu":void 0,children:[Sn(b.iconType,18,t===b.id?"#1976D2":"#6B7280"),o.jsx(Cd,{children:b.label}),pn[b.id]&&o.jsx(cd,{size:14,color:t===b.id?"#1976D2":"#9CA3AF"})]},b.id))})]})})]}),o.jsxs(yd,{ref:a,"aria-hidden":c!=="l2",children:[o.jsxs(vd,{children:[o.jsx(os,{onClick:y,"aria-label":"Back to menu",children:o.jsx(yi,{size:16,color:"currentColor"})}),o.jsx(wd,{children:(k==null?void 0:k.label)??""}),o.jsx(os,{onClick:r,"aria-label":"Close menu",children:o.jsx(va,{size:16,color:"currentColor"})})]}),o.jsx(bd,{children:k&&o.jsx("nav",{"aria-label":`${k.label} navigation`,children:k.sections.map((b,E)=>o.jsxs("div",{children:[b.title&&o.jsx(b2,{children:b.title}),b.items.map($=>o.jsx(j2,{to:$.route,end:!0,"aria-current":l.pathname===$.route?"page":void 0,onClick:x,children:$.label},$.route))]},b.title||E))})})]})]})})]})}const C2=u.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,$2=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,S2=u.div``,E2=u.h1`
  margin: 0 0 6px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.neutral900};
`,P2=u.p`
  margin: 0;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral600};
`,T2=u.button`
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
`,L2=u.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,I2=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,R2=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px 24px;
`,z2=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`,D2=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.neutral500};
`,N2=u.div`
  min-width: 0;
`,M2=u.h3`
  margin: 0 0 3px;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 600;
`,A2=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
`,O2=u.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,_2=u.a`
  display: block;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,F2=u.div`
  display: grid;
  gap: 16px;
`,B2=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,U2=u.div`
  width: 100%;
  min-height: 180px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
`,W2=u.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`,V2=u.div`
  padding: 16px 20px 20px;
`,H2=u.div`
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
`,Q2=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 10px;
`,G2=u.h3`
  margin: 0 0 8px;
  font-size: 17px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,K2=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,J2=u.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;

  &:hover { text-decoration: underline; }
`,Y2=u.article`
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,X2=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,q2=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(0, 155, 135, 0.45);
  color: #007B6E;
  letter-spacing: 0.02em;
`,Z2=u.button`
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
`,ew=u.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,tw=u.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,nw=u.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,rw=[{title:"Trust Lifecycle",subtitle:"Certificate management",iconType:"cycle",actions:[{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Automate certificate lifecycle",href:"/trust-lifecycle/tools"}]},{title:"Valimail",subtitle:"Email authentication",iconType:"envelope",actions:[{label:"Review DMARC status",href:"/valimail/dashboard"},{label:"Manage sender sources",href:"/valimail/dashboard"},{label:"Monitor domains",href:"/valimail/dashboard"},{label:"Investigate spoofing risks",href:"/valimail/dashboard"}]},{title:"Quantum Central",subtitle:"Post-quantum readiness",iconType:"settings",actions:[{label:"Assess cryptographic risk",href:"/quantum-central/dashboard"},{label:"Review PQC readiness",href:"/quantum-central/dashboard"},{label:"View algorithm inventory",href:"/quantum-central/dashboard"},{label:"Track remediation",href:"/quantum-central/dashboard"}]},{title:"AI Trust",subtitle:"AI identity & governance",iconType:"sparkle",actions:[{label:"Register agents",href:"/ai-trust/dashboard"},{label:"Manage agent identities",href:"/ai-trust/dashboard"},{label:"Review agent activity",href:"/ai-trust/dashboard"},{label:"Configure trust policies",href:"/ai-trust/dashboard"}]},{title:"Device Trust",subtitle:"IoT device security",iconType:"mobile",actions:[{label:"Register devices",href:"/device-trust/dashboard"},{label:"Manage device identities",href:"/device-trust/dashboard"},{label:"Configure device policies",href:"/device-trust/dashboard"},{label:"Review device lifecycle",href:"/device-trust/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",iconType:"hierarchy",actions:[{label:"Issue internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage certificate profiles",href:"/private-ca/certificate-profiles"},{label:"Configure OCSP",href:"/private-ca/ocsps"}]},{title:"Software Trust",subtitle:"Code signing",iconType:"code",actions:[{label:"Manage signing keys",href:"/software-trust/dashboard"},{label:"Configure signing policies",href:"/software-trust/dashboard"},{label:"Sign software",href:"/software-trust/dashboard"},{label:"Generate SBOM",href:"/software-trust/dashboard"}]},{title:"DNS Trust",subtitle:"DNS management",iconType:"globe",actions:[{label:"Manage zones",href:"/dns/dashboard"},{label:"Update DNS records",href:"/dns/dashboard"},{label:"Configure traffic steering",href:"/dns/dashboard"},{label:"Review DNSSEC settings",href:"/dns/dashboard"}]},{title:"Content Trust",subtitle:"Document & content signing",iconType:"document",actions:[{label:"Manage signing credentials",href:"/content-trust/dashboard"},{label:"Verify signed content",href:"/content-trust/dashboard"},{label:"Review signing activity",href:"/content-trust/dashboard"},{label:"Configure seal policies",href:"/content-trust/dashboard"}]},{title:"CertCentral",subtitle:"Public certificates",iconType:"shield",actions:[{label:"Order public certificate",href:"/certcentral/dashboard"},{label:"Validate domains",href:"/certcentral/dashboard"},{label:"Manage organizations",href:"/certcentral/dashboard"},{label:"Expiring certificates",href:"/certcentral/inventory"}]}];function iw(){const[e,t]=v.useState(!1);return o.jsxs(C2,{children:[o.jsxs($2,{children:[o.jsxs(S2,{children:[o.jsx(E2,{children:"Hello, John"}),o.jsx(P2,{children:"Access your DigiCert trust solutions and discover what's new"})]}),o.jsx(T2,{"aria-label":"Page settings",children:o.jsx(p0,{size:18,color:"currentColor"})})]}),o.jsxs(L2,{children:[o.jsx(I2,{children:rw.map(n=>o.jsxs(R2,{children:[o.jsxs(z2,{children:[o.jsx(D2,{children:Sn(n.iconType,20,"currentColor")}),o.jsxs(N2,{children:[o.jsx(M2,{children:n.title}),o.jsx(A2,{children:n.subtitle})]})]}),o.jsx(O2,{children:n.actions.map(r=>o.jsx("li",{children:o.jsx(_2,{href:r.href,children:r.label})},r.label))})]},n.title))}),o.jsxs(F2,{children:[o.jsxs(B2,{children:[o.jsx(U2,{children:o.jsx(W2,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),o.jsxs(V2,{children:[o.jsx(H2,{children:"Certificate lifecycle"}),o.jsxs(Q2,{children:[o.jsx("span",{children:"Brian Trzupek · 5 min read"}),o.jsx("span",{children:"digicert.com/blog"})]}),o.jsx(G2,{children:"Certificate lifecycle management reaches an inflection point"}),o.jsx(K2,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),o.jsx(J2,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&o.jsxs(Y2,{children:[o.jsxs(X2,{children:[o.jsx(q2,{children:"Software Trust Manager"}),o.jsx(Z2,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:o.jsx(va,{size:14,color:"currentColor"})})]}),o.jsx(ew,{children:"Centralize code-signing at scale"}),o.jsx(tw,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),o.jsx(nw,{href:"/software-trust/dashboard",children:"Explore STM →"})]})]})]})]})}const ow=u.main`
  padding: 24px;
`,lw=u.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,$d=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function Sd(){const e=Ke(),t=rv[e.pathname]??e.pathname;return v.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),o.jsxs(ow,{children:[o.jsx(lw,{children:t}),e.pathname==="/profile"&&o.jsx($d,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),o.jsxs($d,{children:["This is a stub page for ",o.jsx("code",{children:e.pathname})]})]})}const Ed={name:"Sarah Mitchell",email:"sarah.mitchell@digicert.com"},sw=[{id:"trust-lifecycle",name:"Trust Lifecycle",iconType:"cycle",plan:"Advanced",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Seats",consumed:30,total:75},entitlements:[{name:"Seats",purchased:75,allocated:75,consumed:30,remaining:45}]},{id:"software-trust",name:"Software Trust",iconType:"code",tier:"Enterprise",plan:"Premium",autoRenewal:!0,contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Signatures",consumed:124210,total:25e4},entitlements:[{name:"Signatures",purchased:25e4,allocated:25e4,consumed:124210,remaining:125790},{name:"HSM keypairs",purchased:4,allocated:4,consumed:2,remaining:2}],purchasedControls:[{name:"Signatures",purchased:25e4,used:124210,remaining:125790},{name:"HSM keypair",purchased:10,used:2,remaining:8,planIncluded:6,addOnPurchased:4}],includedResources:[{name:"Repositories",includedWithPlan:"Up to 100",available:100,used:76,remaining:24},{name:"Test signatures",includedWithPlan:"2,500,000",available:25e5,used:812430,remaining:1687570}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private root certificates",consumed:9,total:10},entitlements:[{name:"Private root certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Private intermediate CA certificates",purchased:25,allocated:25,consumed:20,remaining:5},{name:"Dynamic intermediate CAs",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500}]},{id:"content-trust",name:"Content Trust",iconType:"document",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Seats",purchased:500,allocated:500,consumed:340,remaining:160},{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800}]},{id:"device-trust",name:"Device Trust",iconType:"mobile",plan:"Essentials and Advanced",tier:"Enterprise",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Certificates",consumed:45e3,total:1e5},entitlements:[{name:"Certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Devices",purchased:5e4,allocated:5e4,consumed:2e4,remaining:3e4}],planEntitlements:{essentials:[{name:"Certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3}],advanced:[{name:"Devices",purchased:5e4,allocated:5e4,consumed:2e4,remaining:3e4}]}},{id:"dns",name:"DigiCert DNS",iconType:"globe",plan:"Essentials",tier:"Enterprise",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"DNS queries",consumed:5e6,total:1e7},entitlements:[{name:"DNS queries",purchased:1e7,allocated:1e7,consumed:5e6,remaining:5e6}],dnsQueryCapacity:{purchased:1e7,used:5e6,remaining:5e6},includedResources:[{name:"Domains",available:20,used:10,remaining:10},{name:"Records",available:6e3,used:2e3,remaining:4e3},{name:"Users",available:2,used:2,remaining:0},{name:"A/AAAA Failover records",available:2,used:0,remaining:2},{name:"GTD enabled domains",available:1,used:0,remaining:1}]},{id:"valimail",name:"Valimail",iconType:"envelope",plan:"Essentials",autoRenewal:!1,contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Domains — up to 100K emails/month",consumed:1,total:5},entitlements:[{name:"Domains — up to 100K emails/month",purchased:5,allocated:5,consumed:1,remaining:4},{name:"Domains — up to 500K emails/month",purchased:3,allocated:3,consumed:1,remaining:2}],emailUsageByDomain:[{domain:"abc.com",allowance:1e5,used:72e3,remaining:28e3},{domain:"example.com",allowance:5e5,used:41e3,remaining:59e3}]},{id:"quantum-central",name:"Quantum Central",iconType:"settings",plan:"Essentials / Advanced",tier:"Enterprise",contractId:"CTR-2024-QC-00112",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Security Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Cryptographic assets",consumed:25e4,total:5e5},entitlements:[{name:"Cryptographic assets",purchased:5e5,allocated:5e5,consumed:25e4,remaining:25e4}]},{id:"ai-trust",name:"AI Trust",iconType:"sparkle",tier:"Enterprise",contractId:"CTR-2024-AIA-00045",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"AI Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"AI Assets units",consumed:28,total:50},entitlements:[{name:"AI Assets units",purchased:50,allocated:50,consumed:28,remaining:22}]},{id:"posture-management",name:"Posture Management",iconType:"layers",tier:"Enterprise",contractId:"CTR-2024-PM-00067",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Security Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",entitlementsTBD:!0,primaryEntitlement:null,entitlements:[]},{id:"iot-trust",name:"IoT Trust",iconType:"chip",contractId:"CTR-2024-IOT-00044",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IoT Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"End entity certificates",consumed:28e4,total:5e5},entitlements:[{name:"End entity certificates",purchased:5e5,allocated:5e5,consumed:28e4,remaining:22e4},{name:"End entity devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Intermediate CA certificates",purchased:50,allocated:50,consumed:12,remaining:38},{name:"Intermediate CA devices",purchased:100,allocated:100,consumed:45,remaining:55}]}],Qi=[{accountId:"acme-global-security",displayAccountId:"1001445",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"peak-usage",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8,periodPeak:128,periodPeakDate:"Aug 14, 2025",purchasedUSD:"$80,000"},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8,periodPeak:22,periodPeakDate:"Sep 3, 2025",purchasedUSD:"$9,600"},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60,periodPeak:180,periodPeakDate:"Oct 12, 2025",purchasedUSD:"$24,000"},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7,periodPeak:8,periodPeakDate:"Nov 5, 2025",purchasedUSD:"$2,400"},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4,periodPeak:2,periodPeakDate:"—",purchasedUSD:"$1,500"}],peakUsageData:{periodPeakDate:"Aug 14, 2025",monthLabels:["Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Mar 26","Apr 26","May 26","Jun 26"],series:[{name:"SSL/TLS certificates",color:"#4B91D6",currentActive:108,periodPeak:128,periodPeakDate:"Aug 14, 2025",monthly:[90,110,128,122,115,108,100,96,92,98,104,110,108],monthlyCost:[72e3,88e3,102400,97600,92e3,86400,8e4,76800,73600,78400,83200,88e3,86400]},{name:"Code signing",color:"#F59E0B",currentActive:16,periodPeak:22,periodPeakDate:"Sep 3, 2025",monthly:[10,14,18,22,20,18,16,15,14,15,16,16,16],monthlyCost:[6e3,8400,10800,13200,12e3,10800,9600,9e3,8400,9e3,9600,9600,9600]},{name:"S/MIME certificates",color:"#10B981",currentActive:140,periodPeak:180,periodPeakDate:"Oct 12, 2025",monthly:[120,138,155,168,180,174,162,152,148,152,158,145,140],monthlyCost:[24e3,27600,31e3,33600,36e3,34800,32400,30400,29600,30400,31600,29e3,28e3]},{name:"Document signing",color:"#8B5CF6",currentActive:5,periodPeak:8,periodPeakDate:"Nov 5, 2025",monthly:[2,3,4,5,7,8,7,6,5,5,5,5,5],monthlyCost:[1e3,1500,2e3,2500,3500,4e3,3500,3e3,2500,2500,2500,2500,2500]}]}},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",displayAccountId:"2003891",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",displayAccountId:"3007234",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-enterprise",displayAccountId:"5001298",accountName:"ACME Enterprise",enterpriseInstance:{instanceId:"acme-enterprise-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"drawdown",contractId:"CTR-2024-CC-00214",contractTerm:"Nov 1, 2025 – Oct 31, 2026",contractOwner:"Enterprise IT",renewalDate:"Oct 31, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:55,total:120},entitlements:[{name:"SSL/TLS certificates",purchased:120,allocated:120,consumed:55,remaining:65},{name:"Code signing certificates",purchased:40,allocated:40,consumed:18,remaining:22},{name:"S/MIME certificates",purchased:300,allocated:300,consumed:210,remaining:90},{name:"Document signing certificates",purchased:20,allocated:20,consumed:7,remaining:13}]}}],aw=["over-entitlement","approaching-limit","no-data","healthy"];function cw(e){return aw.find(t=>e.includes(t))||"healthy"}function uw(e){const{id:t,name:n,iconType:r,...i}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:i.renewalDate,status:i.status,primaryEntitlement:i.primaryEntitlement,entitlements:i.entitlements,entitlementsTBD:i.entitlementsTBD,plan:i.plan,tier:i.tier,autoRenewal:i.autoRenewal,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...i}]}}function Gi(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(l=>l.subscriptionType))],i=[...new Set(n.map(l=>l.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountId:e.displayAccountId,accountName:e.accountName,subscriptionTypes:r,renewalDate:i.length===1?i[0]:"Varies by instance",status:cw(n.map(l=>l.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const Pd=sw.map(uw),dw=new Set(["iot-trust"]);function g0(){const e=[Gi(Qi[0],["enterprise"]),Gi(Qi[1],["enterprise"]),Gi(Qi[2],["ecommerce"]),Gi(Qi[3],["enterprise"])],t=Pd.slice(0,3),n=Pd.slice(3).filter(r=>!dw.has(r.id));return[...t,...e,...n]}const wt=[{id:"us-prod",name:"Acme — US production",region:"US",isCurrent:!0},{id:"us-stage",name:"Acme — US stage",region:"US"},{id:"eu-prod",name:"Acme — EU production",region:"EU"},{id:"eu-stage",name:"Acme — EU stage",region:"EU"},{id:"in-prod",name:"Acme — IN",region:"IN"}];var sp;const pw=((sp=wt.find(e=>e.isCurrent))==null?void 0:sp.id)??wt[0].id,fw={"us-prod":["trust-lifecycle","software-trust","private-ca","certcentral-acme-global-security","certcentral-acme-marketing","certcentral-acme-enterprise","content-trust","device-trust","dns","valimail","quantum-central","ai-trust","posture-management"],"us-stage":["trust-lifecycle","software-trust","certcentral-acme-global-security","certcentral-acme-marketing","content-trust","device-trust","dns","valimail","quantum-central","ai-trust","posture-management"],"eu-prod":["trust-lifecycle","private-ca","certcentral-acme-global-security","certcentral-acme-enterprise","content-trust","device-trust","dns","valimail","quantum-central","ai-trust","posture-management"],"eu-stage":["software-trust","certcentral-acme-marketing","content-trust","dns","valimail"],"in-prod":["software-trust","certcentral-acme-enterprise","content-trust","device-trust","dns","valimail","quantum-central"]},hw={"us-prod":1,"us-stage":.25,"eu-prod":.65,"eu-stage":.15,"in-prod":.4},Td={"us-prod":"Advanced","eu-prod":"Advanced","us-stage":"Essentials","in-prod":"Essentials"},Ld={"eu-prod":{entitlements:[{name:"Private root certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Private intermediate CA certificates",purchased:25,allocated:25,consumed:20,remaining:5},{name:"Private end-entity certificates",purchased:1e4,allocated:1e4,consumed:6e3,remaining:4e3},{name:"PQC private root certificates",purchased:5,allocated:5,consumed:2,remaining:3},{name:"PQC private intermediate CA certificates",purchased:15,allocated:15,consumed:8,remaining:7},{name:"PQC private end-entity certificates",purchased:5e3,allocated:5e3,consumed:2e3,remaining:3e3}],primaryEntitlement:{label:"Private root certificates",consumed:9,total:10}}},Id={"us-stage":{plan:"Essentials",entitlements:[{name:"Certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3}],primaryEntitlement:{label:"Certificates",consumed:45e3,total:1e5}},"eu-prod":{plan:"Essentials",entitlements:[{name:"Certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3}],primaryEntitlement:{label:"Certificates",consumed:45e3,total:1e5}},"in-prod":{plan:"Advanced",entitlements:[{name:"Devices",purchased:5e4,allocated:5e4,consumed:2e4,remaining:3e4}],primaryEntitlement:{label:"Devices",consumed:2e4,total:5e4}}};function yo(){const e=g0(),t=e.filter(s=>!s.id.startsWith("certcentral-")),n=e.filter(s=>s.id.startsWith("certcentral-")),r=n.find(s=>s.id==="certcentral-acme-devops"),i=n.filter(s=>s.id!=="certcentral-acme-devops"),l=[];r&&l.push({...r,envIds:wt.map(s=>s.id),envNames:wt.map(s=>s.name)});for(const s of wt){const a=hw[s.id],c=fw[s.id];for(const d of c){const m=[...t,...i].find(y=>y.id===d);if(!m)continue;const h=y=>Math.round(y*a),g=m.entitlements.map(y=>({...y,consumed:h(y.consumed),remaining:y.allocated-h(y.consumed)})),C=m.primaryEntitlement?{...m.primaryEntitlement,consumed:h(m.primaryEntitlement.consumed)}:m.primaryEntitlement,j=m.instances.map(y=>{const S={...y,entitlements:y.entitlements?y.entitlements.map(x=>({...x,consumed:h(x.consumed),remaining:x.allocated-h(x.consumed)})):y.entitlements,primaryEntitlement:y.primaryEntitlement?{...y.primaryEntitlement,consumed:h(y.primaryEntitlement.consumed)}:y.primaryEntitlement};return y.dnsQueryCapacity&&(S.dnsQueryCapacity={...y.dnsQueryCapacity,used:h(y.dnsQueryCapacity.used),remaining:y.dnsQueryCapacity.purchased-h(y.dnsQueryCapacity.used)}),y.purchasedControls&&(S.purchasedControls=y.purchasedControls.map(x=>({...x,used:h(x.used),remaining:x.purchased-h(x.used)}))),y.includedResources&&(S.includedResources=y.includedResources.map(x=>({...x,used:h(x.used),remaining:typeof x.available=="number"?x.available-h(x.used):x.remaining}))),S});if(d==="quantum-central"&&Td[s.id]){const y=Td[s.id],S=j.map(x=>({...x,plan:y}));l.push({...m,envId:s.id,envName:s.name,plan:y,entitlements:g,primaryEntitlement:C,instances:S});continue}if(d==="private-ca"&&Ld[s.id]){const y=Ld[s.id],S=y.entitlements.map(p=>({...p,consumed:h(p.consumed),remaining:p.allocated-h(p.consumed)})),x={...y.primaryEntitlement,consumed:h(y.primaryEntitlement.consumed)},f=j.map(p=>({...p,entitlements:S,primaryEntitlement:x}));l.push({...m,envId:s.id,envName:s.name,entitlements:S,primaryEntitlement:x,instances:f});continue}if(d==="device-trust"&&Id[s.id]){const y=Id[s.id],S=y.entitlements.map(p=>({...p,consumed:h(p.consumed),remaining:p.allocated-h(p.consumed)})),x={...y.primaryEntitlement,consumed:h(y.primaryEntitlement.consumed)},f=j.map(p=>({...p,plan:y.plan,entitlements:S,primaryEntitlement:x,planEntitlements:void 0}));l.push({...m,envId:s.id,envName:s.name,plan:y.plan,entitlements:S,primaryEntitlement:x,instances:f,planEntitlements:void 0});continue}l.push({...m,envId:s.id,envName:s.name,entitlements:g,primaryEntitlement:C,instances:j})}}return l}const mw=u.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,gw=u.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function xw({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return o.jsx(mw,{role:"presentation",children:o.jsx(gw,{$pct:n})})}const x0=u(jc)`
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
`,y0=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,v0=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,w0=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,b0=u.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,j0=u.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
`,yw=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,k0=u.span`
  flex-shrink: 0;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  background: #1C7852;
  color: #ffffff;
`,C0=u.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e}, 1fr);
  gap: 10px;
  padding: 10px 0 2px;
`,$0=u.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`,S0=u.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,E0=u.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,P0=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,vw=u.div`
  position: relative;
  flex-shrink: 0;
`,ww=u.button`
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
`,T0=u.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`,bw=u.div`
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
`,jw=u.button`
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
`;function L0({items:e}){const[t,n]=v.useState(!1),r=v.useRef(null);return v.useEffect(()=>{if(!t)return;const i=s=>{r.current&&!r.current.contains(s.target)&&n(!1)},l=s=>{s.key==="Escape"&&n(!1)};return document.addEventListener("mousedown",i),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("keydown",l)}},[t]),o.jsxs(vw,{ref:r,children:[o.jsx(ww,{type:"button",onClick:i=>{i.preventDefault(),i.stopPropagation(),n(l=>!l)},"aria-label":"More actions","aria-expanded":t,children:o.jsx(Ko,{size:14,color:"currentColor"})}),t&&o.jsx(bw,{onClick:i=>i.stopPropagation(),children:e.map(i=>o.jsx(jw,{type:"button",$destructive:i.destructive,onClick:l=>{l.preventDefault(),l.stopPropagation(),n(!1)},children:i.label},i.label))})]})}const kw=u.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,Cw=u.button`
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
`,$w=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Sw=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 7px;
`,Ew=u.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Rd=u.p`
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
`;const wa=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
`,ba=u.p`
  margin: 0;
  font-size: 12px;
  font-style: italic;
  color: ${({theme:e})=>e.colors.neutral500};
`,I0=u.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,ja=u.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.span``;function ka({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return o.jsx($w,{children:n.map(r=>o.jsxs("div",{children:[o.jsxs(Sw,{children:[o.jsx(Ew,{children:r.name}),o.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),o.jsx(xw,{consumed:r.consumed,total:r.allocated}),r.remaining<0?o.jsxs(Rd,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):o.jsxs(Rd,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function R0(e){if(e.id.startsWith("certcentral-")){const i=e.subscriptionTypes.includes("enterprise"),l=e.subscriptionTypes.includes("ecommerce");return[{label:"Tier",value:i&&l?"Enterprise + Ecommerce":i?"Enterprise":"Ecommerce"},{label:"Instance name",value:e.accountName},{label:"Instance ID",value:e.accountId}]}const r=[{label:"Tier",value:e.tier||"Enterprise"}];return e.plan&&r.push({label:"Plan",value:e.plan}),r}function Pw({subscription:e}){const[t,n]=v.useState(e.instances[0].instanceId),r=e.instances.find(d=>d.instanceId===t)||e.instances[0],i=r.subscriptionType==="enterprise",l=r.entitlements.slice(0,3),s=r.entitlements.length-l.length,a=[{label:"Open CertCentral"},{label:"Documentation"}],c=R0(e);return o.jsxs(x0,{to:`/settings/billing/${e.id}`,children:[o.jsxs(y0,{children:[o.jsxs(v0,{children:[o.jsx(w0,{children:Sn(e.iconType,20,"currentColor")}),o.jsx(b0,{children:o.jsxs(P0,{children:[o.jsx(j0,{children:e.name}),o.jsxs(k0,{children:["Renews ",e.renewalDate]})]})})]}),o.jsx(T0,{children:o.jsx(L0,{items:a})})]}),o.jsx(C0,{$cols:c.length,children:c.map(d=>o.jsxs($0,{children:[o.jsx(S0,{children:d.label}),o.jsx(E0,{children:d.value})]},d.label))}),o.jsx(kw,{onClick:d=>d.preventDefault(),children:e.instances.map(d=>o.jsx(Cw,{type:"button",$active:d.instanceId===t,onClick:m=>{m.preventDefault(),m.stopPropagation(),n(d.instanceId)},children:d.subscriptionType==="enterprise"?"Enterprise":"Ecommerce"},d.instanceId))}),i?o.jsxs(o.Fragment,{children:[l.length>0?o.jsx(ka,{entitlements:r.entitlements,maxVisible:3}):o.jsx(ja,{children:"Usage data not available yet."}),o.jsxs(wa,{children:[s>0&&o.jsxs(I0,{children:["+",s," more"]}),o.jsx(ba,{children:"Managed by DigiCert"})]})]}):o.jsxs(o.Fragment,{children:[o.jsx(ka,{entitlements:r.entitlements,maxVisible:3}),o.jsxs(wa,{children:[o.jsx("span",{}),o.jsx(ba,{children:"Managed by you"})]})]})]})}function Tw({subscription:e}){if(e.instances.length>1)return o.jsx(Pw,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:i,entitlements:l}=e,s=e.subscriptionTypes.includes("enterprise"),a=e.subscriptionTypes.includes("ecommerce"),c=a&&!s,d=t.startsWith("certcentral-"),m=l.slice(0,3),h=l.length-m.length,g=s?"Managed by DigiCert":a?"Managed by you":null,j=c&&d?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${d?"CertCentral":n}`},{label:"Documentation"}],y=R0(e);return o.jsxs(x0,{to:`/settings/billing/${t}${e.envId?`?env=${e.envId}`:""}`,children:[o.jsxs(y0,{children:[o.jsxs(v0,{children:[o.jsx(w0,{children:Sn(r,20,"currentColor")}),o.jsxs(b0,{children:[o.jsxs(P0,{children:[o.jsx(j0,{children:n}),c&&i&&o.jsxs(k0,{children:["Renews ",i]})]}),(e.envNames||e.envId)&&o.jsx(yw,{children:e.envNames?e.envNames.join(", "):e.envName})]})]}),o.jsx(T0,{children:o.jsx(L0,{items:j})})]}),o.jsx(C0,{$cols:y.length,children:y.map(S=>o.jsxs($0,{children:[o.jsx(S0,{children:S.label}),o.jsx(E0,{children:S.value})]},S.label))}),e.entitlementsTBD?o.jsx(ja,{children:"Entitlements: TBD"}):m.length>0?o.jsx(ka,{entitlements:l,maxVisible:3}):o.jsx(ja,{children:"Usage data is not available for this product yet."}),g&&o.jsxs(wa,{children:[h>0?o.jsxs(I0,{children:["+",h," more"]}):o.jsx("span",{}),o.jsx(ba,{children:g})]})]})}const Lw=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,Iw=u.div`
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
`,Rw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,zw=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Dw=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Nw=u.button`
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
`,Mw=u.div`
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
`,Aw=u.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ow=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_w=u.div`
  border: 1.5px solid ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral400};
  }
`,Fw=u.button`
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
`,Bw=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
  padding-top: 1px;
`,Uw=u.div`
  flex: 1;
  min-width: 0;
`,Ww=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  margin-bottom: 4px;
`,Vw=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  line-height: 1.45;
`,Hw=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Qw=u.div`
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Gw=u.a`
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
`,Kw=[{id:"sales",title:"Sales",helper:"Questions about purchasing, pricing, renewals, account growth, additional products, or billing.",cta:"Contact sales",href:"https://www.digicert.com/contact-us"},{id:"support",title:"Support",helper:"Help with product issues, errors, troubleshooting, or technical questions.",cta:"Contact support",href:"https://www.digicert.com/support/pki-support"}];function z0({open:e,onClose:t}){const[n,r]=v.useState(null),i=v.useRef(null);return v.useEffect(()=>{const l=s=>{s.key==="Escape"&&e&&t()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[e,t]),v.useEffect(()=>{e&&i.current&&setTimeout(()=>{var l;return(l=i.current)==null?void 0:l.focus()},260),e||r(null)},[e]),o.jsxs(o.Fragment,{children:[o.jsx(Lw,{$open:e,onClick:t,"aria-hidden":"true"}),o.jsxs(Iw,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[o.jsxs(Rw,{children:[o.jsxs(zw,{children:[o.jsx(vi,{size:18,color:"currentColor"}),o.jsx(Dw,{children:"Need help?"})]}),o.jsx(Nw,{type:"button",onClick:t,"aria-label":"Close drawer",ref:i,children:"×"})]}),o.jsxs(Mw,{children:[o.jsx(Aw,{children:"What do you need help with?"}),o.jsx(Ow,{children:Kw.map(l=>{const s=n===l.id;return o.jsxs(_w,{$selected:s,children:[o.jsxs(Fw,{type:"button",onClick:()=>r(s?null:l.id),"aria-expanded":s,children:[o.jsx(Bw,{children:l.id==="sales"?o.jsx(Tc,{size:18,color:"currentColor"}):o.jsx(Pc,{size:18,color:"currentColor"})}),o.jsxs(Uw,{children:[o.jsx(Ww,{children:l.title}),o.jsx(Vw,{children:l.helper})]}),o.jsx(Hw,{children:s?o.jsx(wl,{size:16,color:"currentColor"}):o.jsx(vt,{size:16,color:"currentColor"})})]}),s&&o.jsx(Qw,{children:o.jsxs(Gw,{href:l.href,target:"_blank",rel:"noopener noreferrer",children:[l.cta,o.jsx(Lc,{size:14,color:"currentColor"})]})})]},l.id)})})]})]})]})}const Jw=u.main`
  padding: 32px;
`,Yw=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Xw=u.div``,qw=u.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Zw=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,eb=u.button`
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
`;const tb=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(358px, auto);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`,nb=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`,zd=u.button`
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
`,Dd=u.div`
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
`,Nd=u.button`
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

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  &:hover { background: ${({$active:e,theme:t})=>e?"#EAF1FB":t.colors.neutral50}; }
`,rb=u.span`
  flex-shrink: 0;
  padding: 2px 7px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  white-space: nowrap;
`;function ib(){var f;const[e,t]=v.useState(!1),[n,r]=Nh(),i=n.get("env")||pw,l=n.get("product")||"all",[s,a]=v.useState(!1),[c,d]=v.useState(!1),m=v.useRef(null),h=v.useRef(null);v.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]),v.useEffect(()=>{if(!s)return;const p=k=>{m.current&&!m.current.contains(k.target)&&a(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[s]),v.useEffect(()=>{if(!c)return;const p=k=>{h.current&&!h.current.contains(k.target)&&d(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[c]);const g=yo(),C=[...new Map(g.map(p=>[p.name,{id:p.name,name:p.name}])).values()],y=g.filter(p=>!(i!=="all"&&!(p.envIds?p.envIds.includes(i):p.envId===i)||l!=="all"&&p.name!==l)).map(p=>{var k;if(p.envIds&&i!=="all"){const b=((k=wt.find(E=>E.id===i))==null?void 0:k.name)??i;return{...p,envId:i,envName:b,envIds:void 0,envNames:void 0}}return p}),S=i==="all"?"All environments":((f=wt.find(p=>p.id===i))==null?void 0:f.name)??i,x=l==="all"?"All products":l;return o.jsxs(Jw,{children:[o.jsxs(Yw,{children:[o.jsxs(Xw,{children:[o.jsx(qw,{children:"My subscriptions"}),o.jsx(Zw,{children:"View your active product subscriptions, entitlement usage, and renewal information."})]}),o.jsxs(eb,{type:"button",onClick:()=>t(!0),children:[o.jsx(vi,{size:15,color:"currentColor"}),"Need help?"]})]}),o.jsxs(nb,{children:[o.jsxs("div",{style:{position:"relative"},ref:m,children:[o.jsxs(zd,{type:"button",onClick:()=>a(p=>!p),"aria-haspopup":"listbox","aria-expanded":s,children:[S,o.jsx(vt,{size:13,color:"currentColor"})]}),s&&o.jsx(Dd,{children:[{id:"all",name:"All environments"},...wt].map(p=>o.jsxs(Nd,{type:"button",$active:i===p.id,onClick:()=>{r(k=>{const b=new URLSearchParams(k);return b.set("env",p.id),b},{replace:!0}),a(!1)},children:[p.name,p.isCurrent&&o.jsx(rb,{children:"Current"})]},p.id))})]}),o.jsxs("div",{style:{position:"relative"},ref:h,children:[o.jsxs(zd,{type:"button",onClick:()=>d(p=>!p),"aria-haspopup":"listbox","aria-expanded":c,children:[x,o.jsx(vt,{size:13,color:"currentColor"})]}),c&&o.jsx(Dd,{children:[{id:"all",name:"All products"},...C].map(p=>o.jsx(Nd,{type:"button",$active:l===p.id,onClick:()=>{r(k=>{const b=new URLSearchParams(k);return p.id==="all"?b.delete("product"):b.set("product",p.id),b},{replace:!0}),d(!1)},children:p.name},p.id))})]})]}),o.jsx(tb,{children:y.map(p=>o.jsx(Tw,{subscription:p},`${p.id}-${p.envId??"global"}`))}),o.jsx(z0,{open:e,onClose:()=>t(!1)})]})}const ob=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,lb=u.div`
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
`,sb=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,ab=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,cb=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,ub=u.button`
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
`,db=u.div`
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
`,pb=u.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,fb=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,hb=u.div`
  border: 1.5px solid ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral400};
  }
`,mb=u.button`
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
`,gb=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
  padding-top: 1px;
`,xb=u.div`
  flex: 1;
  min-width: 0;
`,yb=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  margin-bottom: 4px;
`,vb=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  line-height: 1.45;
`,wb=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,bb=u.div`
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,jb=u.button`
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
`,kb=[{id:"sales",title:"Sales",helper:"Questions about pricing, purchasing, renewals, expanding your DigiCert services, or your billing and subscriptions.",cta:"Contact sales"},{id:"support",title:"Support",helper:"Do you need help with certificate issues, integrations, troubleshooting, domain or organization validation, or certificate approvals.",cta:"Contact support"}];function Cb({open:e,onClose:t}){const[n,r]=v.useState(null),i=Tt(),l=v.useRef(null);v.useEffect(()=>{const a=c=>{c.key==="Escape"&&e&&t()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,t]),v.useEffect(()=>{e&&l.current&&setTimeout(()=>{var a;return(a=l.current)==null?void 0:a.focus()},260),e||r(null)},[e]);function s(){t(),i("/certcentral/support")}return o.jsxs(o.Fragment,{children:[o.jsx(ob,{$open:e,onClick:t,"aria-hidden":"true"}),o.jsxs(lb,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[o.jsxs(sb,{children:[o.jsxs(ab,{children:[o.jsx(vi,{size:18,color:"currentColor"}),o.jsx(cb,{children:"Need help?"})]}),o.jsx(ub,{type:"button",onClick:t,"aria-label":"Close drawer",ref:l,children:"×"})]}),o.jsxs(db,{children:[o.jsx(pb,{children:"What do you need help with?"}),o.jsx(fb,{children:kb.map(a=>{const c=n===a.id;return o.jsxs(hb,{$selected:c,children:[o.jsxs(mb,{type:"button",onClick:()=>r(c?null:a.id),"aria-expanded":c,children:[o.jsx(gb,{children:a.id==="sales"?o.jsx(Tc,{size:18,color:"currentColor"}):o.jsx(Pc,{size:18,color:"currentColor"})}),o.jsxs(xb,{children:[o.jsx(yb,{children:a.title}),o.jsx(vb,{children:a.helper})]}),o.jsx(wb,{children:c?o.jsx(wl,{size:16,color:"currentColor"}):o.jsx(vt,{size:16,color:"currentColor"})})]}),c&&o.jsx(bb,{children:o.jsx(jb,{type:"button",onClick:s,children:a.cta})})]},a.id)})})]})]})]})}const $b=u.div`
  position: relative;
  width: 100%;
  user-select: none;
`,Sb=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  margin-bottom: 8px;
`,Eb=u.button`
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
`,Pb=u.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
`,Tb=u.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
`,Md=u.button`
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
`,Lb=u.div`
  position: relative;
`,Ib=u.div`
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
`,Rb=u.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: #E5E7EB;
  font-size: 10px;
`,Ad=u.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.8;
`,zb=u.span`
  width: 7px;
  height: 7px;
  border-radius: 2px;
  flex-shrink: 0;
`,Mr=620,D0=190,Ar=46,Db=16,N0=18,Nb=34,Ki=Mr-Ar-Db,cn=D0-N0-Nb;function Mb(e,t){return t==="$"?e>=1e5?`$${(e/1e3).toFixed(0)}k`:e>=1e3?`$${(e/1e3).toFixed(1)}k`:`$${e}`:e>=1e3?`${(e/1e3).toFixed(0)}k`:`${e}`}function Od(e,t){return t==="$"?e>=1e3?`$${e.toLocaleString()}`:`$${e}`:e.toLocaleString()}function _d({series:e,monthLabels:t,yFormat:n}){var $;const[r,i]=v.useState(new Set),[l,s]=v.useState(null),a=v.useRef(null),c=t.length,d=t.map((w,T)=>{let I=0;return e.map(_=>{const te=r.has(_.name)?0:_.monthly[T],B=I;return I+=te,{lo:B,hi:I,val:te}})}),m=Math.max(...d.map(w=>{var T;return((T=w[w.length-1])==null?void 0:T.hi)||0}),1),h=Math.ceil(m*1.1/50)*50;function g(w){return w/(c-1)*Ki}function C(w){return cn-w/h*cn}function j(w){const T=t.map((_,te)=>`${g(te).toFixed(1)},${C(d[te][w].hi).toFixed(1)}`),I=[...t].reverse().map((_,te)=>{const B=c-1-te;return`${g(B).toFixed(1)},${C(d[B][w].lo).toFixed(1)}`});return[...T,...I].join(" ")}const y=[0,.25,.5,.75,1].map(w=>({v:Math.round(h*w),y:C(h*w)})),S=d.reduce((w,T,I)=>{var B,Se;const _=((B=T[T.length-1])==null?void 0:B.hi)||0,te=((Se=d[w][d[w].length-1])==null?void 0:Se.hi)||0;return _>te?I:w},0);function x(w){if(!a.current)return;const T=a.current.getBoundingClientRect(),I=Ar/Mr*T.width,_=(Ar+Ki)/Mr*T.width,B=(Math.max(I,Math.min(_,w.clientX-T.left))-I)/(_-I);s(Math.round(B*(c-1)))}function f(w){i(T=>{const I=new Set(T);return I.has(w)?I.delete(w):I.add(w),I})}const p=l!==null?(Ar+g(l))/Mr*100:0,k=l!==null&&l>c-3?"translateX(-100%)":l!==null&&l<2?"translateX(4px)":"translateX(-50%)",b=l!==null&&(($=d[l][d[l].length-1])==null?void 0:$.hi)||0,E=n==="$"?"Total":"Total active";return o.jsxs($b,{children:[o.jsxs(Sb,{children:[e.map(w=>o.jsxs(Eb,{$dim:r.has(w.name),type:"button",onClick:()=>f(w.name),children:[o.jsx(Pb,{style:{background:w.color}}),w.name]},w.name)),o.jsxs(Tb,{children:[o.jsx(Md,{type:"button",onClick:()=>i(new Set),children:"All"}),o.jsx(Md,{type:"button",onClick:()=>i(new Set(e.map(w=>w.name))),children:"None"})]})]}),o.jsxs(Lb,{children:[o.jsx("svg",{ref:a,viewBox:`0 0 ${Mr} ${D0}`,style:{width:"100%",height:"auto",display:"block",overflow:"visible",cursor:"crosshair"},onMouseMove:x,onMouseLeave:()=>s(null),children:o.jsxs("g",{transform:`translate(${Ar},${N0})`,children:[y.map(w=>o.jsxs("g",{children:[o.jsx("line",{x1:0,y1:w.y.toFixed(1),x2:Ki,y2:w.y.toFixed(1),stroke:"#E5E7EB",strokeWidth:1}),o.jsx("text",{x:-8,y:w.y.toFixed(1),textAnchor:"end",fontSize:7,fill:"#9CA3AF",dominantBaseline:"middle",children:Mb(w.v,n)})]},w.v)),o.jsx("line",{x1:0,y1:cn,x2:Ki,y2:cn,stroke:"#D1D5DB",strokeWidth:1}),t.map((w,T)=>T%2!==0&&T!==c-1?null:o.jsx("text",{x:g(T).toFixed(1),y:cn+13,textAnchor:"middle",fontSize:7,fill:"#9CA3AF",children:w},T)),e.map((w,T)=>o.jsx("polygon",{points:j(T),fill:w.color,fillOpacity:.78},w.name)),o.jsxs("g",{children:[o.jsx("line",{x1:g(S).toFixed(1),y1:0,x2:g(S).toFixed(1),y2:cn,stroke:"#6B7280",strokeWidth:1,strokeDasharray:"4,3",opacity:.55}),o.jsxs("text",{x:g(S).toFixed(1),y:-5,textAnchor:"middle",fontSize:7,fill:"#4B5563",fontWeight:"600",children:["Peak ",t[S]]})]}),l!==null&&o.jsx("line",{x1:g(l).toFixed(1),y1:0,x2:g(l).toFixed(1),y2:cn,stroke:"#374151",strokeWidth:1.5,opacity:.6})]})}),l!==null&&o.jsxs(Ib,{style:{left:`${p}%`,transform:k},children:[o.jsx(Rb,{children:t[l]}),e.map((w,T)=>r.has(w.name)?null:o.jsxs(Ad,{children:[o.jsx(zb,{style:{background:w.color}}),o.jsx("span",{style:{flex:1},children:w.name}),o.jsx("span",{style:{fontWeight:600},children:Od(d[l][T].val,n)})]},w.name)),o.jsxs(Ad,{style:{borderTop:"1px solid rgba(255,255,255,0.15)",marginTop:4,paddingTop:4},children:[o.jsx("span",{style:{flex:1,fontWeight:600},children:E}),o.jsx("span",{style:{fontWeight:700},children:Od(b,n)})]})]})]})]})}const Fd=u.main`
  padding: 32px;
`,Bd=u(jc)`
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
`,Ab=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Ob=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,_b=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Fb=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Bb=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ub=u.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,Wb=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Ud=u.button`
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
`,Vb=u.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,Hb=u.button`
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
`,Re=u.section`
  margin-bottom: 32px;
`,it=u.h2`
  margin: 0 0 14px;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,M0=u.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||3}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,bl=u.div`
  padding: 18px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jl=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,kl=u.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,Cl=u.p`
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
`;const Jo=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Qb=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`,Gb=u.button`
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
`,Kb=u.div`
  position: relative;
`,Jb=u.button`
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
`,Yb=u.div`
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
`,Xb=u.a`
  display: block;
  padding: 10px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({$destructive:e,theme:t})=>e?"#DC2626":t.colors.neutral800};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,qb=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Wd=u.div``,Qn=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 10px;
`,A0=u.button`
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
`,Zb=u.div`
  position: relative;
  display: inline-flex;
`,ej=u.div`
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
`,tj=u.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover .ent-tooltip { display: block; }
`,nj=u.span`
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
`;function O0({instance:e,isCertCentral:t,plan:n}){const[r,i]=v.useState(!1),l=v.useRef(null);v.useEffect(()=>{if(!r)return;const d=m=>{l.current&&!l.current.contains(m.target)&&i(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[r]);const s=e.subscriptionType==="enterprise",a=e.tier||(s?"Enterprise":"Ecommerce");let c;return s&&!t?c=o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"This product is covered by an enterprise agreement with DigiCert."}),o.jsx("p",{children:"Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team."}),o.jsx("p",{children:"Contact your account manager for contract-related questions."})]}):s&&t?c=o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"This CertCentral account is managed through an enterprise agreement with DigiCert."}),o.jsx("p",{children:"Billing, renewals, and any contract changes are handled directly by your DigiCert account team."}),o.jsx("p",{children:"Contact your account manager for any questions."})]}):c=o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"This subscription is purchased and managed through DigiCert's self-service purchasing experience."}),o.jsx("p",{children:"You can manage payment methods, receipts, renewals, and purchases directly from this account."})]}),o.jsxs(bl,{children:[o.jsx(jl,{children:o.jsxs(kl,{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:["Tier",o.jsxs(Zb,{ref:l,children:[o.jsx(A0,{type:"button",onClick:()=>i(d=>!d),children:o.jsx(Go,{size:13,color:"currentColor"})}),r&&o.jsx(ej,{children:c})]})]})}),o.jsx(Cl,{children:a}),n&&o.jsx(Jo,{children:n})]})}function rj(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function ij({dateStr:e,sub:t}){const n=rj(e);return o.jsxs(bl,{children:[o.jsxs(jl,{children:[o.jsx(kl,{children:"Renewal date"}),o.jsx(f0,{size:15,color:"#9CA3AF"})]}),o.jsx(Cl,{children:e}),t&&o.jsx(Jo,{children:t}),!t&&o.jsxs(Jo,{children:[n," days remaining"]})]})}function oj({term:e}){return o.jsxs(bl,{children:[o.jsxs(jl,{children:[o.jsx(kl,{children:"Contract term"}),o.jsx(f0,{size:15,color:"#9CA3AF"})]}),o.jsx(Cl,{style:{fontSize:15,fontWeight:600},children:e||"—"})]})}const $t=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,ut=u.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,N=u.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,M=u.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 14px 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,nn=u.span`
  font-weight: 500;
  color: ${({$tone:e,theme:t})=>e==="error"?"#DC2626":e==="warning"?"#D97706":t.colors.neutral900};
`,Ca=u.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`;function Jr({entitlements:e,contractType:t,tbd:n}){return n?o.jsx(Ca,{children:"Entitlements: TBD"}):e.length===0?o.jsx(Ca,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):t==="drawdown"?o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"45%"},children:"Entitlement"}),o.jsx(N,{$align:"right",children:"Purchased"}),o.jsx(N,{style:{width:"20%"}})]})}),o.jsx("tbody",{children:e.map(r=>o.jsxs("tr",{children:[o.jsx(M,{children:r.name}),o.jsx(M,{$align:"right",children:r.purchased.toLocaleString()}),o.jsx(M,{})]},r.name))})]})}):o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"30%"},children:"Entitlement"}),o.jsx(N,{$align:"right",children:"Allocated"}),o.jsx(N,{$align:"right",children:"Used"}),o.jsx(N,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:e.map(r=>{const i=r.allocated>0?r.consumed/r.allocated:0,l=r.remaining<0?"error":i>=.8?"warning":void 0;return o.jsxs("tr",{children:[o.jsx(M,{children:r.name}),o.jsx(M,{$align:"right",children:r.allocated.toLocaleString()}),o.jsx(M,{$align:"right",children:r.consumed.toLocaleString()}),o.jsx(M,{$align:"right",children:o.jsx(nn,{$tone:l,children:r.remaining<0?`Exceeded by ${Math.abs(r.remaining).toLocaleString()}`:r.remaining===0?"0":r.remaining.toLocaleString()})})]},r.name)})})]})})}const lj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`,sj=u.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Vd=u.button`
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
`;function Hd({entitlements:e,purchasedOnly:t}){return o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{children:"Entitlement"}),t?o.jsxs(o.Fragment,{children:[o.jsx(N,{$align:"right",children:"Current active"}),o.jsx(N,{$align:"right",children:"Period peak"}),o.jsx(N,{$align:"right",children:"Peak date"})]}):o.jsxs(o.Fragment,{children:[o.jsx(N,{$align:"right",children:"Purchased"}),o.jsx(N,{$align:"right",children:"Consumed"}),o.jsx(N,{$align:"right",children:"Remaining"})]})]})}),o.jsx("tbody",{children:e.map(n=>{var i,l;const r=n.remaining<0?"error":void 0;return o.jsxs("tr",{children:[o.jsx(M,{children:n.name}),t?o.jsxs(o.Fragment,{children:[o.jsx(M,{$align:"right",children:((i=n.consumed)==null?void 0:i.toLocaleString())??"—"}),o.jsx(M,{$align:"right",children:((l=n.periodPeak)==null?void 0:l.toLocaleString())??"—"}),o.jsx(M,{$align:"right",children:n.periodPeakDate??"—"})]}):o.jsxs(o.Fragment,{children:[o.jsx(M,{$align:"right",children:n.purchased.toLocaleString()}),o.jsx(M,{$align:"right",children:n.consumed.toLocaleString()}),o.jsx(M,{$align:"right",children:o.jsx(nn,{$tone:r,children:n.remaining<0?`Exceeded by ${Math.abs(n.remaining).toLocaleString()}`:n.remaining.toLocaleString()})})]})]},n.name)})})]})})}function aj({series:e}){return o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"40%"},children:"Entitlement"}),o.jsx(N,{$align:"right",children:"Current month ($)"}),o.jsx(N,{$align:"right",children:"Period peak ($)"}),o.jsx(N,{$align:"right",children:"Peak date"})]})}),o.jsx("tbody",{children:e.map(t=>{const n=t.monthlyCost[t.monthlyCost.length-1]??0,r=Math.max(...t.monthlyCost);return o.jsxs("tr",{children:[o.jsx(M,{children:t.name}),o.jsxs(M,{$align:"right",children:["$",n.toLocaleString()]}),o.jsxs(M,{$align:"right",children:["$",r.toLocaleString()]}),o.jsx(M,{$align:"right",children:t.periodPeakDate})]},t.name)})})]})})}function cj({instance:e,purchasedOnly:t}){const[n,r]=v.useState("table"),{peakUsageData:i}=e,l=i.series.map(s=>({...s,monthly:s.monthlyCost}));return o.jsxs(Re,{children:[o.jsxs(lj,{children:[o.jsx(it,{style:{margin:0},children:t?"Entitlements and usage":"Consumption"}),o.jsxs(sj,{children:[o.jsx(Vd,{$active:n==="table",onClick:()=>r("table"),children:"Table"}),o.jsx(Vd,{$active:n==="chart",onClick:()=>r("chart"),children:"Chart"})]})]}),n==="table"?t?o.jsxs(o.Fragment,{children:[o.jsx(Qn,{style:{marginBottom:10},children:"Consumption (Quantities)"}),o.jsx(Hd,{entitlements:e.entitlements,purchasedOnly:!0}),o.jsxs("div",{style:{marginTop:24},children:[o.jsx(Qn,{style:{marginBottom:10},children:"Consumption (USD)"}),o.jsx(aj,{series:i.series})]})]}):o.jsx(Hd,{entitlements:e.entitlements,purchasedOnly:!1}):o.jsxs(qb,{children:[o.jsxs(Wd,{children:[o.jsx(Qn,{children:"Consumption (USD)"}),o.jsx(_d,{series:l,monthLabels:i.monthLabels,yFormat:"$"})]}),o.jsxs(Wd,{children:[o.jsx(Qn,{children:"Consumption quantities"}),o.jsx(_d,{series:i.series,monthLabels:i.monthLabels})]})]})]})}const uj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  flex-wrap: wrap;
`,dj=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pj=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,fj=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,hj=u.a`
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
`;function mj({instance:e}){const{planEntitlements:t,entitlements:n,contractType:r}=e;return t?o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx(Qn,{children:"Essentials plan"}),o.jsx(Jr,{entitlements:t.essentials,contractType:r}),o.jsx(Qn,{style:{marginTop:20},children:"Advanced plan"}),o.jsx(Jr,{entitlements:t.advanced,contractType:r})]}):o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx(Jr,{entitlements:n,contractType:r})]})}const _0=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function gj({instance:e}){const{purchasedControls:t=[],includedResources:n=[]}=e;return o.jsxs(o.Fragment,{children:[o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"40%"},children:"Entitlement"}),o.jsx(N,{$align:"right",children:"Allocated"}),o.jsx(N,{$align:"right",children:"Used"}),o.jsx(N,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:t.map(r=>{const i=r.purchased>0?r.used/r.purchased:0,l=r.remaining<0?"error":i>=.8?"warning":void 0,s=r.planIncluded!=null&&r.addOnPurchased!=null;return o.jsxs("tr",{children:[o.jsx(M,{children:s?o.jsxs(tj,{children:[r.name,o.jsx(A0,{as:"span",style:{cursor:"default"},children:o.jsx(Go,{size:13,color:"currentColor"})}),o.jsxs(nj,{className:"ent-tooltip",children:["Includes ",r.planIncluded," keypairs with your current plan + ",r.addOnPurchased," purchased keypairs."]})]}):r.name}),o.jsx(M,{$align:"right",children:r.purchased.toLocaleString()}),o.jsx(M,{$align:"right",children:r.used.toLocaleString()}),o.jsx(M,{$align:"right",children:o.jsx(nn,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]}),o.jsxs(Re,{children:[o.jsx(it,{children:"Included resources"}),o.jsx(_0,{children:"Resource quotas included with your plan. Quotas increase automatically when you upgrade your plan."}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"40%"},children:"Entitlement"}),o.jsx(N,{$align:"right",children:"Allocated"}),o.jsx(N,{$align:"right",children:"Used"}),o.jsx(N,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:n.map(r=>{const i=r.available>0?r.used/r.available:0,l=r.remaining<0?"error":i>=.8?"warning":void 0;return o.jsxs("tr",{children:[o.jsx(M,{children:r.name}),o.jsx(M,{$align:"right",children:typeof r.available=="number"?r.available.toLocaleString():r.available}),o.jsx(M,{$align:"right",children:r.used.toLocaleString()}),o.jsx(M,{$align:"right",children:o.jsx(nn,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]})]})}function xj({instance:e}){const{entitlements:t,emailUsageByDomain:n=[],contractType:r}=e,i=l=>{const s=l/1e3;return Number.isInteger(s)?`${s}k`:`${s.toLocaleString()}k`};return o.jsxs(o.Fragment,{children:[o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx(Jr,{entitlements:t,contractType:r})]}),n.length>0&&o.jsxs(Re,{children:[o.jsx(it,{children:"Email usage by domain"}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"35%"},children:"Domain"}),o.jsx(N,{$align:"right",children:"Email allowance/month"}),o.jsx(N,{$align:"right",children:"Used"}),o.jsx(N,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:n.map(l=>{const a=(l.allowance>0?l.used/l.allowance:0)>=.8?"warning":void 0;return o.jsxs("tr",{children:[o.jsx(M,{children:l.domain}),o.jsx(M,{$align:"right",children:i(l.allowance)}),o.jsx(M,{$align:"right",children:i(l.used)}),o.jsx(M,{$align:"right",children:o.jsx(nn,{$tone:a,children:i(l.remaining)})})]},l.domain)})})]})})]})]})}function yj({instance:e}){const{dnsQueryCapacity:t,includedResources:n=[]}=e;return o.jsxs(o.Fragment,{children:[o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"40%"},children:"Entitlement"}),o.jsx(N,{$align:"right",children:"Allocated"}),o.jsx(N,{$align:"right",children:"Used"}),o.jsx(N,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx(M,{children:"DNS queries"}),o.jsx(M,{$align:"right",children:t.purchased.toLocaleString()}),o.jsx(M,{$align:"right",children:t.used.toLocaleString()}),o.jsx(M,{$align:"right",children:o.jsx(nn,{children:t.remaining.toLocaleString()})})]})})]})})]}),n.length>0&&o.jsxs(Re,{children:[o.jsx(it,{children:"Included resources"}),o.jsx(_0,{children:"Resource quotas included with your plan. Quotas increase automatically when you upgrade your plan."}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"40%"},children:"Entitlement"}),o.jsx(N,{$align:"right",children:"Monthly allocated"}),o.jsx(N,{$align:"right",children:"Used"}),o.jsx(N,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:n.map(r=>{const i=r.remaining===0?"error":void 0;return o.jsxs("tr",{children:[o.jsx(M,{children:r.name}),o.jsx(M,{$align:"right",children:r.available.toLocaleString()}),o.jsx(M,{$align:"right",children:r.used.toLocaleString()}),o.jsx(M,{$align:"right",children:o.jsx(nn,{$tone:i,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]})]})}function vj(){return o.jsx(Re,{children:o.jsxs(uj,{children:[o.jsxs(dj,{children:[o.jsx(pj,{children:"Manage finances and funds"}),o.jsx(fj,{children:"View purchase history, balance, account pricing, deposit funds, and pay invoices in CertCentral."})]}),o.jsxs(hj,{href:"/certcentral-finances.html",target:"_blank",rel:"noopener noreferrer",children:["Manage finances",o.jsx(Lc,{size:14,color:"currentColor"})]})]})})}function wj({instance:e,isCertCentral:t}){return o.jsx(Re,{children:o.jsxs(M0,{$cols:2,children:[o.jsx(O0,{instance:e,isCertCentral:t,plan:e.plan}),o.jsx(oj,{term:e.contractTerm})]})})}function bj({instance:e,isCertCentral:t,showLastMonth:n=!0}){var i,l;const r=((l=(i=e.receipts)==null?void 0:i[0])==null?void 0:l.amount)??e.billing.price.split(" / ")[0];return o.jsx(Re,{children:o.jsxs(M0,{$cols:n?3:2,children:[o.jsx(O0,{instance:e,isCertCentral:t}),n&&o.jsxs(bl,{children:[o.jsxs(jl,{children:[o.jsx(kl,{children:"Last 30 days"}),o.jsx(Tc,{size:15,color:"#9CA3AF"})]}),o.jsx(Cl,{children:r}),o.jsx(Jo,{children:"Last month's spend"})]}),o.jsx(ij,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"})]})})}const jj=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,kj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,Cj=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,$j=u.button`
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
`,Sj=u.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ej=u.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,Pj=u.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Tj=u.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,Lj=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,Ij=u.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function Rj({category:e}){const[t,n]=v.useState(e.products.length>0);return o.jsxs(jj,{children:[o.jsxs(kj,{onClick:()=>n(r=>!r),children:[o.jsxs(Cj,{children:[o.jsx($j,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(i=>!i)},children:t?o.jsx(wl,{size:14,color:"currentColor"}):o.jsx(vt,{size:14,color:"currentColor"})}),o.jsx(Sj,{children:e.name})]}),o.jsx(Ej,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&o.jsx(Pj,{children:e.products.length===0?o.jsx(Ij,{children:"No products purchased yet."}):o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(N,{style:{width:"40%"},children:"Certificate type"}),o.jsx(N,{$align:"right",children:"Purchased"}),o.jsx(N,{$align:"right",children:"Used"}),o.jsx(N,{$align:"right",children:"Available"})]})}),o.jsx("tbody",{children:e.products.map((r,i)=>o.jsxs("tr",{children:[o.jsxs(M,{children:[o.jsx(Tj,{children:r.name}),o.jsx(Lj,{children:r.type})]}),o.jsx(M,{$align:"right",children:r.purchased}),o.jsx(M,{$align:"right",children:r.used}),o.jsx(M,{$align:"right",children:o.jsx(nn,{$tone:r.available===0?"error":void 0,children:r.available})})]},i))})]})})]})}function zj({categories:e}){return o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),e.map(t=>o.jsx(Rj,{category:t},t.id))]})}function Dj(){const{subscriptionId:e}=Qx(),[t,n]=v.useState(null),[r,i]=v.useState(!1),[l,s]=v.useState(!1),[a,c]=v.useState(!1),d=v.useRef(null),[m]=Nh(),h=m.get("env"),g=h?yo().find(p=>p.id===e&&p.envId===h)??yo().find(p=>{var k;return p.id===e&&((k=p.envIds)==null?void 0:k.includes(h))}):yo().find(p=>p.id===e&&p.envIds!=null)??g0().find(p=>p.id===e),C=(()=>{var p;return g?h&&g.envIds?{label:"Environment",value:((p=wt.find(k=>k.id===h))==null?void 0:p.name)??h}:g.envNames?{label:"Available in",value:g.envNames.join(", ")}:g.envName?{label:"Environment",value:g.envName}:null:null})(),j=e==="certcentral"||((e==null?void 0:e.startsWith("certcentral-"))??!1);if(v.useEffect(()=>{document.title=g?`${g.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[g==null?void 0:g.id,g==null?void 0:g.name]),v.useEffect(()=>{var p;n(((p=g==null?void 0:g.instances[0])==null?void 0:p.instanceId)??null)},[e]),v.useEffect(()=>{if(!a)return;const p=b=>{d.current&&!d.current.contains(b.target)&&c(!1)},k=b=>{b.key==="Escape"&&c(!1)};return document.addEventListener("mousedown",p),document.addEventListener("keydown",k),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("keydown",k)}},[a]),!g)return o.jsxs(Fd,{children:[o.jsxs(Bd,{to:-1,children:[o.jsx(yi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),o.jsx(Ca,{children:"This subscription could not be found."})]});const y=g.instances.find(p=>p.instanceId===t)||g.instances[0],S=j&&y.subscriptionType==="ecommerce",x=j?"CertCentral":g.name,f=S?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Product overview"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${x}`},{label:"Product overview"},{label:"Documentation"}];return o.jsxs(Fd,{children:[o.jsxs(Bd,{to:-1,children:[o.jsx(yi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),o.jsxs(Ab,{children:[o.jsxs(Ob,{children:[o.jsx(_b,{children:Sn(g.iconType,24,"currentColor")}),o.jsxs(Fb,{children:[o.jsx(Bb,{children:o.jsx(Ub,{children:g.name})}),(C||g.accountName)&&o.jsxs(Wb,{children:[C&&o.jsxs(o.Fragment,{children:[o.jsxs("strong",{children:[C.label,":"]})," ",C.value]}),C&&g.accountName&&o.jsx(o.Fragment,{children:" | "}),g.accountName&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Instance name:"})," ",g.accountName]}),g.accountId&&o.jsxs(o.Fragment,{children:[" | ",o.jsx("strong",{children:"Instance ID:"})," ",g.accountId]})]})]})]}),o.jsxs(Qb,{children:[j?o.jsxs(Ud,{type:"button",onClick:()=>s(!0),children:[o.jsx(vi,{size:15,color:"currentColor"}),"Need help?"]}):o.jsxs(Ud,{type:"button",onClick:()=>i(!0),children:[o.jsx(vi,{size:15,color:"currentColor"}),"Need help?"]}),S&&o.jsxs(Gb,{type:"button",children:[o.jsx(ev,{size:14,color:"currentColor"}),"Buy certificates"]}),o.jsxs(Kb,{ref:d,children:[o.jsx(Jb,{type:"button",onClick:()=>c(p=>!p),"aria-label":"More actions","aria-expanded":a,children:o.jsx(Ko,{size:15,color:"currentColor"})}),a&&o.jsx(Yb,{children:f.map(p=>o.jsx(Xb,{$destructive:p.destructive,href:"#",onClick:()=>c(!1),children:p.label},p.label))})]})]})]}),g.instances.length>1&&o.jsx(Vb,{role:"tablist","aria-label":"CertCentral instances",children:g.instances.map(p=>o.jsx(Hb,{role:"tab",type:"button",$active:p.instanceId===y.instanceId,"aria-selected":p.instanceId===y.instanceId,onClick:()=>n(p.instanceId),children:p.subscriptionType==="enterprise"?"Enterprise":"Ecommerce"},p.instanceId))}),y.subscriptionType==="enterprise"?o.jsxs(o.Fragment,{children:[o.jsx(wj,{instance:y,isCertCentral:j}),g.id==="device-trust"?o.jsx(mj,{instance:y}):g.id==="software-trust"?o.jsx(gj,{instance:y}):g.id==="valimail"?o.jsx(xj,{instance:y}):g.id==="dns"?o.jsx(yj,{instance:y}):j&&y.contractType==="peak-usage"?o.jsx(cj,{instance:y,purchasedOnly:g.accountId==="1001445"}):o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx(Jr,{entitlements:y.entitlements,contractType:y.contractType,tbd:y.entitlementsTBD})]}),j&&g.accountId!=="1001445"&&g.accountId!=="2003891"&&o.jsx(vj,{})]}):o.jsxs(o.Fragment,{children:[o.jsx(bj,{instance:y,isCertCentral:j,showLastMonth:g.accountId!=="3007234"}),o.jsx(zj,{categories:y.productCategories})]}),o.jsx(z0,{open:r,onClose:()=>i(!1)}),o.jsx(Cb,{open:l,onClose:()=>s(!1)})]})}const Nj=u.div`
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
`,Mj=u.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,Aj=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Oj=u.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function F0({icon:e,title:t,children:n,action:r}){return o.jsxs(Nj,{children:[o.jsx(Mj,{children:e}),t&&o.jsx(Aj,{children:t}),o.jsx(Oj,{children:n}),r]})}const B0=u.a`
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
`,_j=u(B0)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function U0({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${Ed.name})`}),i=`mailto:${Ed.email}?${r.toString()}`,l=e==="outline"?_j:B0;return o.jsx(l,{href:i,...n,children:"Contact account manager"})}const Qd=u.main`
  padding: 32px;
`,Fj=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Bj=u.div``,Gd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Kd=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Uj=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,ls=u.div`
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 16px 20px;
  border: 1px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral200};
  border-left: 3px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,ss=u.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;
  align-items: center;
  gap: 6px;
`,as=u.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
`,Wj=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,Vj=u.div`
  margin-left: auto;
`,Ic=u.button`
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
`,Hj=u(Ic)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,Qj=u(Ic)``,Gj=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Kj=u.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,zt=u.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 11px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  white-space: nowrap;
  user-select: none;
`,Dt=u.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,Jj=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,cs={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},Yj=u.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=cs[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=cs[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=cs[e])==null?void 0:t.color)||"#374151"}};
`,Xj=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,qj=u.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,Zj=u.button`
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
`,ek=u.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral50};
`;u.div`
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
`;u.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`;const tk=["All","Invoices","Receipts","Refunds"],Jd=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function nk({scenario:e}){const[t,n]=v.useState("All"),[r,i]=v.useState(!1);if(v.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return o.jsxs(Qd,{children:[o.jsx(Gd,{children:"Receipts and invoices"}),o.jsx(Kd,{style:{marginBottom:24},children:"Download receipts, invoices, and other billing documents for your account."}),o.jsx(F0,{icon:o.jsx(Ky,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:o.jsx(U0,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const l=4,s="$2,520.00",a="Nov 20, 2025",c=t==="All"?Jd:Jd.filter(d=>t==="Invoices"?d.type==="Invoice":t==="Receipts"?d.type==="Receipt":t==="Refunds"?d.type==="Refund":!0);return o.jsxs(Qd,{children:[o.jsx(Fj,{children:o.jsxs(Bj,{children:[o.jsx(Gd,{children:"Receipts and invoices"}),o.jsx(Kd,{children:"Track your invoices, receipts, and refunds for all ecommerce products, self-service add-ons, and other usage. Contact your account manager for enterprise invoices and billing records."})]})}),o.jsxs(Uj,{children:[o.jsxs(ls,{$alert:!0,children:[o.jsxs(ss,{children:[o.jsx(dd,{size:14,color:"#DC2626"}),"Invoices overdue"]}),o.jsx(as,{children:l})]}),o.jsxs(ls,{$alert:!0,children:[o.jsxs(ss,{children:[o.jsx(dd,{size:14,color:"#DC2626"}),"Total balance overdue"]}),o.jsx(as,{$blue:!0,children:s})]}),o.jsxs(ls,{children:[o.jsx(ss,{children:"Next invoice due"}),o.jsx(as,{$blue:!0,children:a})]})]}),o.jsxs(Wj,{children:[o.jsxs("div",{style:{position:"relative"},children:[o.jsxs(Ic,{type:"button",onClick:()=>i(d=>!d),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,o.jsx(vt,{size:13,color:"currentColor"})]}),r&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:tk.map(d=>o.jsx("button",{type:"button",onClick:()=>{n(d),i(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:d===t?"#EAF1FB":"white",color:d===t?"#0174C3":"#1A1F27",fontWeight:d===t?500:400},children:d},d))})]}),o.jsxs(Hj,{type:"button",children:[o.jsx(qy,{size:14,color:"currentColor"}),"Filter",o.jsx(vt,{size:13,color:"currentColor"})]}),o.jsx(Vj,{children:o.jsxs(Qj,{type:"button",children:["Download CSV",o.jsx(vt,{size:13,color:"currentColor"})]})})]}),o.jsxs(Gj,{children:[o.jsxs(Kj,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(zt,{style:{width:"140px"},children:"Invoice"}),o.jsx(zt,{children:"Type"}),o.jsx(zt,{children:"Issued on"}),o.jsx(zt,{children:"Status"}),o.jsx(zt,{$align:"right",children:"Amount"}),o.jsx(zt,{children:"Due on"}),o.jsx(zt,{children:"Ordered by"}),o.jsx(zt,{})]})}),o.jsx("tbody",{children:c.map((d,m)=>o.jsxs("tr",{children:[o.jsx(Dt,{children:o.jsx(Jj,{href:"#",children:d.id})}),o.jsx(Dt,{children:d.type}),o.jsx(Dt,{children:d.issuedOn}),o.jsx(Dt,{children:o.jsx(Yj,{$status:d.status,children:d.status})}),o.jsx(Dt,{$align:"right",children:d.amount}),o.jsx(Dt,{children:d.dueOn}),o.jsx(Dt,{children:d.orderedBy}),o.jsx(Dt,{children:o.jsxs(Xj,{children:[(d.status==="Overdue"||d.status==="Upcoming")&&o.jsx(qj,{type:"button",children:"Pay"}),o.jsx(Zj,{type:"button","aria-label":"Download",children:o.jsx(Xy,{size:15,color:"currentColor"})})]})})]},`${d.id}-${m}`))})]}),o.jsxs(ek,{children:["1 to ",c.length," of 8,618"]})]})]})}const Yd=u.main`
  padding: 32px;
`,rk=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,ik=u.div``,Xd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,qd=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,ok=u.a`
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
`,Zd=u.div`
  margin-bottom: 32px;
`,ep=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,tp=u.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,np=u.button`
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
`,lk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,sk=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,ak=u.div`
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
`,ck=u.div``,uk=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,dk=u.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,pk=u.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,fk=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,W0=u.button`
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
`,hk=u.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,mk=u.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,gk=u(W0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Ji=u.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,Yi=u.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Xi=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,xk=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`;u.div`
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
`;u.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`;function yk({scenario:e}){return v.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?o.jsxs(Yd,{children:[o.jsx(Xd,{children:"Payment details"}),o.jsx(qd,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),o.jsx(F0,{icon:o.jsx(Yy,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:o.jsx(U0,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):o.jsxs(Yd,{children:[o.jsxs(rk,{children:[o.jsxs(ik,{children:[o.jsx(Xd,{children:"Payment details"}),o.jsx(qd,{children:"Payments for ecommerce products, self-service add-ons, and other usage are made using your default payment method."})]}),o.jsxs(ok,{href:"#",children:[o.jsx(Go,{size:15,color:"currentColor"}),"Need help?"]})]}),o.jsxs(Zd,{children:[o.jsxs(ep,{children:[o.jsx(tp,{children:"Payment methods"}),o.jsxs(np,{type:"button",children:[o.jsx(ud,{size:14,color:"currentColor"}),"Add payment method"]})]}),o.jsxs(lk,{children:[o.jsxs(sk,{children:[o.jsx(ak,{children:"VISA"}),o.jsxs(ck,{children:[o.jsxs(uk,{children:[o.jsx(dk,{children:"Visa •••• 8350"}),o.jsx(pk,{children:"Default"})]}),o.jsx(fk,{children:"Expires 02/28"})]})]}),o.jsx(W0,{type:"button","aria-label":"Payment method options",children:o.jsx(Ko,{size:16,color:"currentColor"})})]})]}),o.jsxs(Zd,{children:[o.jsxs(ep,{children:[o.jsx(tp,{children:"Billing contacts"}),o.jsxs(np,{type:"button",children:[o.jsx(ud,{size:14,color:"currentColor"}),"Add billing contact"]})]}),o.jsxs(hk,{children:[o.jsx(gk,{type:"button","aria-label":"Contact options",children:o.jsx(Ko,{size:16,color:"currentColor"})}),o.jsx(mk,{children:"John Doe"}),o.jsxs(Ji,{children:[o.jsx(Yi,{children:"Address"}),o.jsxs(Xi,{children:["123 Main Street",o.jsx("br",{}),"Suite 100",o.jsx("br",{}),"San Francisco, CA 94105",o.jsx("br",{}),"United States"]})]}),o.jsxs(Ji,{children:[o.jsx(Yi,{children:"Email address"}),o.jsx(Xi,{children:"john.doe@winthecustomer.com"})]}),o.jsxs(Ji,{children:[o.jsx(Yi,{children:"Phone number"}),o.jsx(Xi,{children:"650 123 4567"})]}),o.jsxs(Ji,{children:[o.jsxs(xk,{children:[o.jsx(Yi,{style:{margin:0},children:"VAT ID"}),o.jsx(Go,{size:14,color:"#0174C3"})]}),o.jsx(Xi,{children:"23503820"})]})]})]})]})}const vk=u.main`
  padding: 32px;
  max-width: 1100px;
`,wk=u.div`
  margin-bottom: 36px;
`,bk=u.h1`
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,jk=u.p`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
  max-width: 560px;
`,kk=u.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,Ck=u.div`
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
`,$k=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Sk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ek=u.div`
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
`,Pk=u.a`
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,Tk=u.span`
  flex-shrink: 0;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$variant:e})=>e==="included"?"rgba(39,168,114,0.1)":e==="licensed"?"#EAF1FB":"#F3F4F6"};
  color: ${({$variant:e})=>e==="included"?"#1F8F60":e==="licensed"?"#0174C3":"#4B5563"};
`,Lk=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: 1.5;
`,Ik=u.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Rk=u.li`
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
`,zk=u.div`
  margin-top: auto;
  padding-top: 4px;
`,Dk=u.button`
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
`,Nk=[{abbr:"TL",color:"#0174C3",name:"Trust Lifecycle",status:"essentials",statusLabel:"Essentials",description:"Modernizes certificate lifecycle visibility and management across public and private CAs.",features:["Gain full visibility with discovery and a centralized certificate inventory","Manage certificates regardless of who issued them (CA-agnostic control)","Automate enrollment, renewal, and provisioning at enterprise scale","Prevent outages with real-time monitoring, alerts, and reporting"],action:"Upgrade"},{abbr:"DNS",color:"#0174C3",name:"DigiCert DNS",status:null,description:"Modern DNS management for secure, scalable global traffic delivery",features:["Unified DNS platform for secure, scalable deployments","Real-time insights to optimize performance and availability","Intelligent monitoring to enforce best practices and compliance","Global traffic routing for speed, resilience, and reliability"],action:"Learn more"},{abbr:"CC",color:"#0174C3",name:"CertCentral",status:"included",statusLabel:"Included",description:"Centralizes certificate purchasing and management with scale, compliance, APIs—and AI-based validation automation.",features:["Buy and manage public trust certificates across TLS/SSL, S/MIME, Code Signing, and more","AI-based validation automation to speed issuance and reduce manual effort","Multi-language support with regional data residency options","Renewal reminders, notifications, plus flexible APIs and webhooks for existing workflows"],action:"Buy certificates"},{abbr:"ST",color:"#0174C3",name:"Software Trust",status:null,description:"Secure and govern software releases with trusted code signing",features:["Centralized access control for decentralized signing operations","Policy-based signing to ensure compliance and integrity","CI/CD integration across modern development platforms","Automated signing for releases, artifacts, and SBOMs"],action:"Learn more"},{abbr:"CA+",color:"#0174C3",name:"Private CA",status:"licensed",statusLabel:"Licensed",description:"Enterprise-grade private PKI with centralized control and governance",features:["Centralized governance for internal public key infrastructure","Rapid deployment of root and intermediate certificate authorities","Support for cloud, on-prem, and hybrid environments","Hardware-backed key protection with modern cryptographic standards"],action:"Learn more"},{abbr:"IoT",color:"#0174C3",name:"Device Trust",status:null,description:"End-to-end device identity and security lifecycle management",features:["Device protection across manufacturing, deployment, and retirement","Hardware-rooted identities for every connected device","Automated onboarding, configuration, and updates at scale","Readiness for evolving cryptographic and post-quantum standards"],action:"Learn more"},{abbr:"CT",color:"#0174C3",name:"Content Trust",status:null,description:"Centralized control and governance for document signing workflows",features:["Centralized visibility across signing activity, policies, and certificates","PKI-backed digital signing aligned with global trust standards","Seamless integration with existing tools via CSC-based APIs","Cloud-based key protection to reduce loss, theft, and misuse"],action:"Learn more"}];function Mk(){return v.useEffect(()=>{document.title="Explore DigiCert products — DigiCert ONE"},[]),o.jsxs(vk,{children:[o.jsxs(wk,{children:[o.jsx(bk,{children:"Explore DigiCert products"}),o.jsx(jk,{children:"Build and protect digital trust across every certificate, identity, and device — all from one platform."})]}),o.jsx(kk,{children:Nk.map(e=>o.jsxs(Ck,{children:[o.jsxs($k,{children:[o.jsxs(Sk,{children:[o.jsx(Ek,{$color:e.color,children:e.abbr}),o.jsx(Pk,{href:"#",children:e.name})]}),e.status&&o.jsx(Tk,{$variant:e.status,children:e.statusLabel})]}),o.jsx(Lk,{children:e.description}),o.jsx(Ik,{children:e.features.map(t=>o.jsx(Rk,{children:t},t))}),o.jsx(zk,{children:o.jsx(Dk,{type:"button",children:e.action})})]},e.name))})]})}const Ak=u.main`
  padding: 32px;
`,Ok=u.h1`
  margin: 0 0 24px;
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,_k=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,Fk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Bk=u.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Uk=u.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Wk=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  background: #FEF3C7;
  color: #92400E;
  font-size: 12px;
  font-weight: 500;
`,Vk=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Hk=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  text-align: right;
`,Qk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
`,Gk=u.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
`,Kk=u.select`
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
`,Jk=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Yk=u.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,Xk=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,us=u.div`
  padding: 24px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`,ds=u.h2`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,ps=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  line-height: 1.5;
`,rp=u.button`
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
`,fs=u.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 14px;
`,dt=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,pt=u.span`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
  display: flex;
`,Rn=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,ip=u.p`
  margin: 12px 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,qi=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,qk=u.div``,Zk=u.h2`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,eC=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,tC=u.p`
  margin: 0 0 10px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,nC=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,rC=u.div`
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
`,iC=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,oC=u.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,lC=u.div`
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: #EAF1FB;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,sC=u.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.blue300};
`,aC=u.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.4;
`,cC=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  line-height: 1.5;
`,op=u.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;function uC(){const[e,t]=v.useState("north-america");return v.useEffect(()=>{document.title="Support — CertCentral"},[]),o.jsxs(Ak,{children:[o.jsx(Ok,{children:"Support"}),o.jsxs(_k,{children:[o.jsx(Fk,{children:o.jsxs("div",{children:[o.jsx(Bk,{children:"Current plan"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"2px"},children:[o.jsx(Uk,{children:"Standard"}),o.jsx(Wk,{children:"24x5 support"})]})]})}),o.jsxs("div",{style:{textAlign:"right"},children:[o.jsx(Vk,{children:"Account number"}),o.jsx(Hk,{children:"126993"})]})]}),o.jsxs(Qk,{children:[o.jsx(Gk,{htmlFor:"support-region",children:"Region"}),o.jsxs(Kk,{id:"support-region",value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"north-america",children:"North America"}),o.jsx("option",{value:"europe",children:"Europe"}),o.jsx("option",{value:"asia-pacific",children:"Asia Pacific"})]})]}),o.jsxs(Jk,{children:[o.jsxs(Yk,{children:[o.jsxs(us,{children:[o.jsx(ds,{children:"Technical support"}),o.jsx(ps,{children:"Get help with certificate installation, CSRs, and other technical issues."}),o.jsx(rp,{type:"button",children:"Support chat"}),o.jsxs(fs,{children:[o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx(Rn,{href:"#",children:"Upgrade to the Business plan for phone support."})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(xo,{size:14})}),o.jsx(Rn,{href:"mailto:cc.standard.support@digicert.com",children:"cc.standard.support@digicert.com"})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Lc,{size:14})}),o.jsx(Rn,{href:"https://support.digicert.com",target:"_blank",rel:"noopener noreferrer",children:"Support portal"})]})]}),o.jsx(ip,{children:"Support hours"}),o.jsx(qi,{children:"Monday - Friday: 24 hours"}),o.jsx(qi,{children:"Saturday and Sunday: Closed"})]}),o.jsxs(us,{children:[o.jsx(ds,{children:"Validation support"}),o.jsx(ps,{children:"Get help with domain and organization validation."}),o.jsx(rp,{type:"button",children:"Validation chat"}),o.jsxs(fs,{children:[o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx("span",{children:"+1 800 579 2848"})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx("span",{children:"+1 801 769 0749"})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(xo,{size:14})}),o.jsx(Rn,{href:"mailto:standard.validation@digicert.com",children:"standard.validation@digicert.com"})]})]}),o.jsx(ip,{children:"Support hours"}),o.jsx(qi,{children:"Monday - Friday: 24 hours"}),o.jsx(qi,{children:"Saturday and Sunday: Closed"})]}),o.jsxs(us,{children:[o.jsx(ds,{children:"Sales support"}),o.jsx(ps,{children:"Get help with contract terms, pricing, and product selection."}),o.jsx(fs,{children:o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx(Rn,{href:"tel:+18017701701",children:"+1 801 770 1701"})]})})]})]}),o.jsxs(Xk,{children:[o.jsxs(qk,{children:[o.jsx(Zk,{children:"Sales contact"}),o.jsx(eC,{children:"Get help with any sales related questions."}),o.jsx(tC,{children:"Talk to your Sales contact:"}),o.jsxs(nC,{children:[o.jsx(rC,{children:"d"}),o.jsxs(iC,{children:[o.jsx(oC,{children:"Sales Team"}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx("span",{style:{color:"#9ca3af"},children:"*"})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(xo,{size:14})}),o.jsx(Rn,{href:"mailto:sales@digicert.com",children:"sales@digicert.com"})]})]})]})]}),o.jsxs(lC,{children:[o.jsx(sC,{children:o.jsx(tv,{size:28,color:"currentColor"})}),o.jsxs(aC,{children:["Need to give us a call?",o.jsx("br",{}),"Get ",o.jsx("span",{style:{color:"#0174C3"},children:"Business support"})," today."]}),o.jsx(cC,{children:"Fast, knowledgeable phone assistance is available now with DigiCert's Business support plan. Upgrade anytime – select the link below or contact your sales representative."}),o.jsx(op,{href:"mailto:sales@digicert.com",children:"Contact sales@digicert.com to upgrade your support plan"}),o.jsx(op,{href:"#",children:"Compare all support plans"})]})]})]})]})}function dC({containerRef:e}){const{pathname:t}=Ke();return v.useEffect(()=>{e.current?e.current.scrollTop=0:window.scrollTo(0,0)},[t,e]),null}const pC=Ny`
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
`,fC=u.div`
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
`;function lp(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function hC(){const[e,t]=v.useState(()=>typeof window<"u"?lp():"desktop");return v.useEffect(()=>{const n=()=>t(lp());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function mC(){const[e,t]=v.useState("dashboard"),[n,r]=v.useState(!1),[i,l]=v.useState(!0),[s,a]=v.useState(null),[c,d]=v.useState("mixed"),[m,h]=v.useState(null),[g,C]=v.useState(null),j=v.useCallback(()=>r($=>!$),[]),y=v.useCallback(()=>r(!1),[]),S=v.useCallback(()=>l($=>!$),[]),x=v.useCallback($=>{t($),l(!0),h(null),C(null)},[]),f=v.useCallback(($,w,T)=>{T.startsWith("settings-")||T==="profile"||(h(w),C(T)),t($),l(!0)},[]),p=v.useCallback(()=>{g!==null&&t(g),l(!0),h(null),C(null)},[g]),k=v.useCallback($=>{t($),l(!0),r(!1)},[]),b=v.useCallback($=>{a(w=>w===$?null:$)},[]),E=v.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:i,activeTopNav:s,billingScenario:c,previousRoute:m,toggleDrawer:j,closeDrawer:y,toggleSpoke:S,setBillingScenario:d,selectProduct:x,navigateFromTopNav:f,goBack:p,selectProductFromDrawer:k,openTopNav:b,closeTopNav:E}}function gC(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:i,previousRoute:l,toggleDrawer:s,closeDrawer:a,toggleSpoke:c,selectProduct:d,navigateFromTopNav:m,goBack:h,selectProductFromDrawer:g,openTopNav:C,closeTopNav:j}=mC(),y=hC(),S=y==="mobile",x=v.useRef(null),f=Ke(),p=Tt(),k=v.useCallback(w=>{m(w,f.pathname,e)},[m,f.pathname,e]),b=v.useCallback(w=>{p(w),h()},[p,h]);v.useEffect(()=>{y!=="mobile"&&t&&a()},[y,t,a]),v.useEffect(()=>{const w=x.current;w&&(S&&t?(w.setAttribute("inert",""),w.setAttribute("aria-hidden","true")):(w.removeAttribute("inert"),w.removeAttribute("aria-hidden")))},[S,t]);const E=n?"276px":"56px",$=r==="ai-assist"?"400px":"0px";return o.jsxs(o.Fragment,{children:[o.jsx(pC,{}),o.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),o.jsx(Kv,{isDrawerOpen:t,onToggleDrawer:s,activeTopNav:r,onOpenTopNav:C,onCloseTopNav:j,onSelectProduct:d,onSelectProductFromTopNav:k,cartCount:3}),o.jsx(e2,{activeProductId:e,onSelectProduct:d}),o.jsx(g2,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:c,billingScenario:i,previousRoute:l,onGoBack:b}),o.jsx(k2,{open:t,activeProductId:e,onSelectProduct:g,onClose:a}),o.jsxs(fC,{ref:x,id:"main-content",$leftOffset:E,$rightOffset:$,children:[o.jsx(dC,{containerRef:x}),o.jsxs(c1,{children:[o.jsx(zn,{path:"/",element:o.jsx(s1,{to:"/dashboard",replace:!0})}),sv.filter(w=>w!=="/").map(w=>{let T=o.jsx(Sd,{});return w==="/dashboard"?T=o.jsx(iw,{}):w==="/settings/billing"?T=o.jsx(ib,{}):w==="/settings/billing/receipts"?T=o.jsx(nk,{scenario:i}):w==="/settings/billing/payment-details"?T=o.jsx(yk,{scenario:i}):w==="/certcentral/support"&&(T=o.jsx(uC,{})),o.jsx(zn,{path:w,element:T},w)}),o.jsx(zn,{path:"/settings/billing/all-products",element:o.jsx(Mk,{})}),o.jsx(zn,{path:"/settings/billing/:subscriptionId",element:o.jsx(Dj,{})}),o.jsx(zn,{path:"*",element:o.jsx(Sd,{})})]})]})]})}jh(document.getElementById("root")).render(o.jsx(v.StrictMode,{children:o.jsx(y1,{children:o.jsx(Ly,{theme:My,children:o.jsx(gC,{})})})}));
