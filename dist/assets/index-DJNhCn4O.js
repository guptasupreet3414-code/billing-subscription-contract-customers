function Y0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function X0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var up={exports:{}},Yo={},dp={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),q0=Symbol.for("react.portal"),Z0=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),om=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),zc=Symbol.iterator;function am(e){return e===null||typeof e!="object"?null:(e=zc&&e[zc]||e["@@iterator"],typeof e=="function"?e:null)}var pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fp=Object.assign,hp={};function pr(e,t,n){this.props=e,this.context=t,this.refs=hp,this.updater=n||pp}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mp(){}mp.prototype=pr.prototype;function $a(e,t,n){this.props=e,this.context=t,this.refs=hp,this.updater=n||pp}var Sa=$a.prototype=new mp;Sa.constructor=$a;fp(Sa,pr.prototype);Sa.isPureReactComponent=!0;var Dc=Array.isArray,gp=Object.prototype.hasOwnProperty,Ea={current:null},xp={key:!0,ref:!0,__self:!0,__source:!0};function yp(e,t,n){var r,i={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)gp.call(t,r)&&!xp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wi,type:e,key:l,ref:s,props:i,_owner:Ea.current}}function cm(e,t){return{$$typeof:wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===wi}function um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mc=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?um(""+e.key):t.toString(36)}function Zi(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case wi:case q0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Sl(s,0):r,Dc(i)?(n="",e!=null&&(n=e.replace(Mc,"$&/")+"/"),Zi(i,t,n,"",function(d){return d})):i!=null&&(Pa(i)&&(i=cm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Mc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Dc(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+Sl(l,a);s+=Zi(l,t,n,c,i)}else if(c=am(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+Sl(l,a++),s+=Zi(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ei(e,t,n){if(e==null)return e;var r=[],i=0;return Zi(e,r,"","",function(l){return t.call(n,l,i++)}),r}function dm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},eo={transition:null},pm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:eo,ReactCurrentOwner:Ea};function vp(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:Ei,forEach:function(e,t,n){Ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ei(e,function(){t++}),t},toArray:function(e){return Ei(e,function(t){return t})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=pr;_.Fragment=Z0;_.Profiler=tm;_.PureComponent=$a;_.StrictMode=em;_.Suspense=om;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pm;_.act=vp;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fp({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Ea.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)gp.call(t,c)&&!xp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:wi,type:e.type,key:i,ref:l,props:r,_owner:s}};_.createContext=function(e){return e={$$typeof:rm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nm,_context:e},e.Consumer=e};_.createElement=yp;_.createFactory=function(e){var t=yp.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:im,render:e}};_.isValidElement=Pa;_.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:dm}};_.memo=function(e,t){return{$$typeof:lm,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};_.unstable_act=vp;_.useCallback=function(e,t){return Ce.current.useCallback(e,t)};_.useContext=function(e){return Ce.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};_.useEffect=function(e,t){return Ce.current.useEffect(e,t)};_.useId=function(){return Ce.current.useId()};_.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return Ce.current.useMemo(e,t)};_.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};_.useRef=function(e){return Ce.current.useRef(e)};_.useState=function(e){return Ce.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return Ce.current.useTransition()};_.version="18.3.1";dp.exports=_;var w=dp.exports;const ve=X0(w),fm=Y0({__proto__:null,default:ve},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=w,mm=Symbol.for("react.element"),gm=Symbol.for("react.fragment"),xm=Object.prototype.hasOwnProperty,ym=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vm={key:!0,ref:!0,__self:!0,__source:!0};function wp(e,t,n){var r,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xm.call(t,r)&&!vm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:mm,type:e,key:l,ref:s,props:i,_owner:ym.current}}Yo.Fragment=gm;Yo.jsx=wp;Yo.jsxs=wp;up.exports=Yo;var o=up.exports,bp={exports:{}},Oe={},jp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,z){var D=I.length;I.push(z);e:for(;0<D;){var H=D-1>>>1,U=I[H];if(0<i(U,z))I[H]=z,I[D]=U,D=H;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var z=I[0],D=I.pop();if(D!==z){I[0]=D;e:for(var H=0,U=I.length,ae=U>>>1;H<ae;){var ne=2*(H+1)-1,oe=I[ne],ze=ne+1,Fe=I[ze];if(0>i(oe,D))ze<U&&0>i(Fe,oe)?(I[H]=Fe,I[ze]=D,H=ze):(I[H]=oe,I[ne]=D,H=ne);else if(ze<U&&0>i(Fe,D))I[H]=Fe,I[ze]=D,H=ze;else break e}}return z}function i(I,z){var D=I.sortIndex-z.sortIndex;return D!==0?D:I.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],d=[],m=1,f=null,g=3,k=!1,b=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=I)r(d),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(d)}}function v(I){if(y=!1,h(I),!b)if(n(c)!==null)b=!0,Lt(S);else{var z=n(d);z!==null&&an(v,z.startTime-I)}}function S(I,z){b=!1,y&&(y=!1,x(j),j=-1),k=!0;var D=g;try{for(h(z),f=n(c);f!==null&&(!(f.expirationTime>z)||I&&!O());){var H=f.callback;if(typeof H=="function"){f.callback=null,g=f.priorityLevel;var U=H(f.expirationTime<=z);z=e.unstable_now(),typeof U=="function"?f.callback=U:f===n(c)&&r(c),h(z)}else r(c);f=n(c)}if(f!==null)var ae=!0;else{var ne=n(d);ne!==null&&an(v,ne.startTime-z),ae=!1}return ae}finally{f=null,g=D,k=!1}}var C=!1,$=null,j=-1,T=5,L=-1;function O(){return!(e.unstable_now()-L<T)}function te(){if($!==null){var I=e.unstable_now();L=I;var z=!0;try{z=$(!0,I)}finally{z?B():(C=!1,$=null)}}else C=!1}var B;if(typeof p=="function")B=function(){p(te)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,sn=Se.port2;Se.port1.onmessage=te,B=function(){sn.postMessage(null)}}else B=function(){E(te,0)};function Lt(I){$=I,C||(C=!0,B())}function an(I,z){j=E(function(){I(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){b||k||(b=!0,Lt(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var D=g;g=z;try{return I()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var D=g;g=I;try{return z()}finally{g=D}},e.unstable_scheduleCallback=function(I,z,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=D+U,I={id:m++,callback:z,priorityLevel:I,startTime:D,expirationTime:U,sortIndex:-1},D>H?(I.sortIndex=D,t(d,I),n(c)===null&&I===n(d)&&(y?(x(j),j=-1):y=!0,an(v,D-H))):(I.sortIndex=U,t(c,I),b||k||(b=!0,Lt(S))),I},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(I){var z=g;return function(){var D=g;g=z;try{return I.apply(this,arguments)}finally{g=D}}}})(kp);jp.exports=kp;var wm=jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=w,Ae=wm;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cp=new Set,Yr={};function En(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Yr[e]=t,e=0;e<t.length;e++)Cp.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nc={},Ac={};function km(e){return hs.call(Ac,e)?!0:hs.call(Nc,e)?!1:jm.test(e)?Ac[e]=!0:(Nc[e]=!0,!1)}function Cm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $m(e,t,n,r){if(t===null||typeof t>"u"||Cm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function La(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ta,La);ge[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ta,La);ge[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ta,La);ge[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ia(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($m(t,n,i,r)&&(n=null),r||i===null?km(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pi=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),Ra=Symbol.for("react.strict_mode"),ms=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),za=Symbol.for("react.forward_ref"),gs=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ep=Symbol.for("react.offscreen"),Oc=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=Oc&&e[Oc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,El;function Lr(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Pl=!1;function Tl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function Sm(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=Tl(e.type,!1),e;case 11:return e=Tl(e.type.render,!1),e;case 1:return e=Tl(e.type,!0),e;default:return""}}function ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Dn:return"Portal";case ms:return"Profiler";case Ra:return"StrictMode";case gs:return"Suspense";case xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sp:return(e.displayName||"Context")+".Consumer";case $p:return(e._context.displayName||"Context")+".Provider";case za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return t=e.displayName||null,t!==null?t:ys(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return ys(e(t))}catch{}}return null}function Em(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ys(t);case 8:return t===Ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pm(e){var t=Pp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=Pm(e))}function Tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lp(e,t){t=t.checked,t!=null&&Ia(e,"checked",t,!1)}function ws(e,t){Lp(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&bs(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bs(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function js(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Ir(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Ip(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tm=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){Tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Dp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Mp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cs(e,t){if(t){if(Lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function $s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ss=null;function Ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,Kn=null,Jn=null;function Wc(e){if(e=ki(e)){if(typeof Es!="function")throw Error(P(280));var t=e.stateNode;t&&(t=tl(t),Es(e.stateNode,e.type,t))}}function Np(e){Kn?Jn?Jn.push(e):Jn=[e]:Kn=e}function Ap(){if(Kn){var e=Kn,t=Jn;if(Jn=Kn=null,Wc(e),t)for(e=0;e<t.length;e++)Wc(t[e])}}function Op(e,t){return e(t)}function _p(){}var Ll=!1;function Fp(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return Op(e,t,n)}finally{Ll=!1,(Kn!==null||Jn!==null)&&(_p(),Ap())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ps=!1;if(bt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ps=!1}function Im(e,t,n,r,i,l,s,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var _r=!1,wo=null,bo=!1,Ts=null,Rm={onError:function(e){_r=!0,wo=e}};function zm(e,t,n,r,i,l,s,a,c){_r=!1,wo=null,Im.apply(Rm,arguments)}function Dm(e,t,n,r,i,l,s,a,c){if(zm.apply(this,arguments),_r){if(_r){var d=wo;_r=!1,wo=null}else throw Error(P(198));bo||(bo=!0,Ts=d)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vc(e){if(Pn(e)!==e)throw Error(P(188))}function Mm(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Vc(i),e;if(l===r)return Vc(i),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Up(e){return e=Mm(e),e!==null?Wp(e):null}function Wp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wp(e);if(t!==null)return t;e=e.sibling}return null}var Vp=Ae.unstable_scheduleCallback,Hc=Ae.unstable_cancelCallback,Nm=Ae.unstable_shouldYield,Am=Ae.unstable_requestPaint,ie=Ae.unstable_now,Om=Ae.unstable_getCurrentPriorityLevel,Na=Ae.unstable_ImmediatePriority,Hp=Ae.unstable_UserBlockingPriority,jo=Ae.unstable_NormalPriority,_m=Ae.unstable_LowPriority,Qp=Ae.unstable_IdlePriority,Xo=null,at=null;function Fm(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Wm,Bm=Math.log,Um=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Bm(e)/Um|0)|0}var Ii=64,Ri=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Rr(a):(l&=s,l!==0&&(r=Rr(l)))}else s=n&~i,s!==0?r=Rr(s):l!==0&&(r=Rr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function Vm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-et(l),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=Vm(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gp(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Aa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Kp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jp,Oa,Yp,Xp,qp,Is=!1,zi=[],Vt=null,Ht=null,Qt=null,Zr=new Map,ei=new Map,Ot=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qc(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function br(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ki(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Km(e,t,n,r,i){switch(t){case"focusin":return Vt=br(Vt,e,t,n,r,i),!0;case"dragenter":return Ht=br(Ht,e,t,n,r,i),!0;case"mouseover":return Qt=br(Qt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Zr.set(l,br(Zr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,ei.set(l,br(ei.get(l)||null,e,t,n,r,i)),!0}return!1}function Zp(e){var t=hn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Bp(n),t!==null){e.blockedOn=t,qp(e.priority,function(){Yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ss=r,n.target.dispatchEvent(r),Ss=null}else return t=ki(n),t!==null&&Oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Gc(e,t,n){to(e)&&n.delete(t)}function Jm(){Is=!1,Vt!==null&&to(Vt)&&(Vt=null),Ht!==null&&to(Ht)&&(Ht=null),Qt!==null&&to(Qt)&&(Qt=null),Zr.forEach(Gc),ei.forEach(Gc)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Jm)))}function ti(e){function t(i){return jr(i,e)}if(0<zi.length){jr(zi[0],e);for(var n=1;n<zi.length;n++){var r=zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&jr(Vt,e),Ht!==null&&jr(Ht,e),Qt!==null&&jr(Qt,e),Zr.forEach(t),ei.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Zp(n),n.blockedOn===null&&Ot.shift()}var Yn=St.ReactCurrentBatchConfig,Co=!0;function Ym(e,t,n,r){var i=V,l=Yn.transition;Yn.transition=null;try{V=1,_a(e,t,n,r)}finally{V=i,Yn.transition=l}}function Xm(e,t,n,r){var i=V,l=Yn.transition;Yn.transition=null;try{V=4,_a(e,t,n,r)}finally{V=i,Yn.transition=l}}function _a(e,t,n,r){if(Co){var i=Rs(e,t,n,r);if(i===null)Bl(e,t,r,$o,n),Qc(e,r);else if(Km(i,e,t,n,r))r.stopPropagation();else if(Qc(e,r),t&4&&-1<Gm.indexOf(e)){for(;i!==null;){var l=ki(i);if(l!==null&&Jp(l),l=Rs(e,t,n,r),l===null&&Bl(e,t,r,$o,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var $o=null;function Rs(e,t,n,r){if($o=null,e=Ma(r),e=hn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $o=e,null}function ef(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Om()){case Na:return 1;case Hp:return 4;case jo:case _m:return 16;case Qp:return 536870912;default:return 16}default:return 16}}var Ft=null,Fa=null,no=null;function tf(){if(no)return no;var e,t=Fa,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return no=i.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function Kc(){return!1}function _e(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Di:Kc,this.isPropagationStopped=Kc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=_e(fr),ji=ee({},fr,{view:0,detail:0}),qm=_e(ji),Rl,zl,kr,qo=ee({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Rl=e.screenX-kr.screenX,zl=e.screenY-kr.screenY):zl=Rl=0,kr=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Jc=_e(qo),Zm=ee({},qo,{dataTransfer:0}),eg=_e(Zm),tg=ee({},ji,{relatedTarget:0}),Dl=_e(tg),ng=ee({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=_e(ng),ig=ee({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),og=_e(ig),lg=ee({},fr,{data:0}),Yc=_e(lg),sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cg[e])?!!t[e]:!1}function Ua(){return ug}var dg=ee({},ji,{key:function(e){if(e.key){var t=sg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pg=_e(dg),fg=ee({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=_e(fg),hg=ee({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),mg=_e(hg),gg=ee({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=_e(gg),yg=ee({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=_e(yg),wg=[9,13,27,32],Wa=bt&&"CompositionEvent"in window,Fr=null;bt&&"documentMode"in document&&(Fr=document.documentMode);var bg=bt&&"TextEvent"in window&&!Fr,nf=bt&&(!Wa||Fr&&8<Fr&&11>=Fr),qc=" ",Zc=!1;function rf(e,t){switch(e){case"keyup":return wg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function jg(e,t){switch(e){case"compositionend":return of(t);case"keypress":return t.which!==32?null:(Zc=!0,qc);case"textInput":return e=t.data,e===qc&&Zc?null:e;default:return null}}function kg(e,t){if(Nn)return e==="compositionend"||!Wa&&rf(e,t)?(e=tf(),no=Fa=Ft=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nf&&t.locale!=="ko"?null:t.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cg[e.type]:t==="textarea"}function lf(e,t,n,r){Np(r),t=So(t,"onChange"),0<t.length&&(n=new Ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,ni=null;function $g(e){xf(e,0)}function Zo(e){var t=_n(e);if(Tp(t))return e}function Sg(e,t){if(e==="change")return t}var sf=!1;if(bt){var Ml;if(bt){var Nl="oninput"in document;if(!Nl){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Nl=typeof tu.oninput=="function"}Ml=Nl}else Ml=!1;sf=Ml&&(!document.documentMode||9<document.documentMode)}function nu(){Br&&(Br.detachEvent("onpropertychange",af),ni=Br=null)}function af(e){if(e.propertyName==="value"&&Zo(ni)){var t=[];lf(t,ni,e,Ma(e)),Fp($g,t)}}function Eg(e,t,n){e==="focusin"?(nu(),Br=t,ni=n,Br.attachEvent("onpropertychange",af)):e==="focusout"&&nu()}function Pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(ni)}function Tg(e,t){if(e==="click")return Zo(t)}function Lg(e,t){if(e==="input"||e==="change")return Zo(t)}function Ig(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Ig;function ri(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hs.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var n=ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function cf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uf(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function Va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rg(e){var t=uf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cf(n.ownerDocument.documentElement,n)){if(r!==null&&Va(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=iu(n,l);var s=iu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zg=bt&&"documentMode"in document&&11>=document.documentMode,An=null,zs=null,Ur=null,Ds=!1;function ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||An==null||An!==vo(r)||(r=An,"selectionStart"in r&&Va(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&ri(Ur,r)||(Ur=r,r=So(zs,"onSelect"),0<r.length&&(t=new Ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function Mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionend:Mi("Transition","TransitionEnd")},Al={},df={};bt&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function el(e){if(Al[e])return Al[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in df)return Al[e]=t[n];return e}var pf=el("animationend"),ff=el("animationiteration"),hf=el("animationstart"),mf=el("transitionend"),gf=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){gf.set(e,t),En(t,[e])}for(var Ol=0;Ol<lu.length;Ol++){var _l=lu[Ol],Dg=_l.toLowerCase(),Mg=_l[0].toUpperCase()+_l.slice(1);rn(Dg,"on"+Mg)}rn(pf,"onAnimationEnd");rn(ff,"onAnimationIteration");rn(hf,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(mf,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dm(r,t,void 0,e),e.currentTarget=null}function xf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==l&&i.isPropagationStopped())break e;su(i,a,d),l=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,d=a.currentTarget,a=a.listener,c!==l&&i.isPropagationStopped())break e;su(i,a,d),l=c}}}if(bo)throw e=Ts,bo=!1,Ts=null,e}function G(e,t){var n=t[_s];n===void 0&&(n=t[_s]=new Set);var r=e+"__bubble";n.has(r)||(yf(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),yf(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Ni]){e[Ni]=!0,Cp.forEach(function(n){n!=="selectionchange"&&(Ng.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Fl("selectionchange",!1,t))}}function yf(e,t,n,r){switch(ef(t)){case 1:var i=Ym;break;case 4:i=Xm;break;default:i=_a}n=i.bind(null,t,n,e),i=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=hn(a),s===null)return;if(c=s.tag,c===5||c===6){r=l=s;continue e}a=a.parentNode}}r=r.return}Fp(function(){var d=l,m=Ma(n),f=[];e:{var g=gf.get(e);if(g!==void 0){var k=Ba,b=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":k=pg;break;case"focusin":b="focus",k=Dl;break;case"focusout":b="blur",k=Dl;break;case"beforeblur":case"afterblur":k=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=mg;break;case pf:case ff:case hf:k=rg;break;case mf:k=xg;break;case"scroll":k=qm;break;case"wheel":k=vg;break;case"copy":case"cut":case"paste":k=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Xc}var y=(t&4)!==0,E=!y&&e==="scroll",x=y?g!==null?g+"Capture":null:g;y=[];for(var p=d,h;p!==null;){h=p;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,x!==null&&(v=qr(p,x),v!=null&&y.push(oi(p,v,h)))),E)break;p=p.return}0<y.length&&(g=new k(g,b,null,n,m),f.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Ss&&(b=n.relatedTarget||n.fromElement)&&(hn(b)||b[jt]))break e;if((k||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,k?(b=n.relatedTarget||n.toElement,k=d,b=b?hn(b):null,b!==null&&(E=Pn(b),b!==E||b.tag!==5&&b.tag!==6)&&(b=null)):(k=null,b=d),k!==b)){if(y=Jc,v="onMouseLeave",x="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Xc,v="onPointerLeave",x="onPointerEnter",p="pointer"),E=k==null?g:_n(k),h=b==null?g:_n(b),g=new y(v,p+"leave",k,n,m),g.target=E,g.relatedTarget=h,v=null,hn(m)===d&&(y=new y(x,p+"enter",b,n,m),y.target=h,y.relatedTarget=E,v=y),E=v,k&&b)t:{for(y=k,x=b,p=0,h=y;h;h=Tn(h))p++;for(h=0,v=x;v;v=Tn(v))h++;for(;0<p-h;)y=Tn(y),p--;for(;0<h-p;)x=Tn(x),h--;for(;p--;){if(y===x||x!==null&&y===x.alternate)break t;y=Tn(y),x=Tn(x)}y=null}else y=null;k!==null&&au(f,g,k,y,!1),b!==null&&E!==null&&au(f,E,b,y,!0)}}e:{if(g=d?_n(d):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var S=Sg;else if(eu(g))if(sf)S=Lg;else{S=Pg;var C=Eg}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Tg);if(S&&(S=S(e,d))){lf(f,S,n,m);break e}C&&C(e,g,d),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&bs(g,"number",g.value)}switch(C=d?_n(d):window,e){case"focusin":(eu(C)||C.contentEditable==="true")&&(An=C,zs=d,Ur=null);break;case"focusout":Ur=zs=An=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,ou(f,n,m);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":ou(f,n,m)}var $;if(Wa)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Nn?rf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(nf&&n.locale!=="ko"&&(Nn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Nn&&($=tf()):(Ft=m,Fa="value"in Ft?Ft.value:Ft.textContent,Nn=!0)),C=So(d,j),0<C.length&&(j=new Yc(j,e,null,n,m),f.push({event:j,listeners:C}),$?j.data=$:($=of(n),$!==null&&(j.data=$)))),($=bg?jg(e,n):kg(e,n))&&(d=So(d,"onBeforeInput"),0<d.length&&(m=new Yc("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:d}),m.data=$))}xf(f,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function So(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=qr(e,n),l!=null&&r.unshift(oi(e,l,i)),l=qr(e,t),l!=null&&r.push(oi(e,l,i))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,i?(c=qr(n,l),c!=null&&s.unshift(oi(n,c,a))):i||(c=qr(n,l),c!=null&&s.push(oi(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ag=/\r\n?/g,Og=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(Ag,`
`).replace(Og,"")}function Ai(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(P(425))}function Eo(){}var Ms=null,Ns=null;function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Os=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,Fg=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(Bg)}:Os;function Bg(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function du(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),st="__reactFiber$"+hr,li="__reactProps$"+hr,jt="__reactContainer$"+hr,_s="__reactEvents$"+hr,Ug="__reactListeners$"+hr,Wg="__reactHandles$"+hr;function hn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=du(e);e!==null;){if(n=e[st])return n;e=du(e)}return t}e=n,n=e.parentNode}return null}function ki(e){return e=e[st]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function tl(e){return e[li]||null}var Fs=[],Fn=-1;function on(e){return{current:e}}function J(e){0>Fn||(e.current=Fs[Fn],Fs[Fn]=null,Fn--)}function Q(e,t){Fn++,Fs[Fn]=e.current,e.current=t}var tn={},be=on(tn),Te=on(!1),wn=tn;function tr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function Po(){J(Te),J(be)}function pu(e,t,n){if(be.current!==tn)throw Error(P(168));Q(be,t),Q(Te,n)}function vf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Em(e)||"Unknown",i));return ee({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,wn=be.current,Q(be,e),Q(Te,Te.current),!0}function fu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=vf(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,J(Te),J(be),Q(be,e)):J(Te),Q(Te,n)}var mt=null,nl=!1,Wl=!1;function wf(e){mt===null?mt=[e]:mt.push(e)}function Vg(e){nl=!0,wf(e)}function ln(){if(!Wl&&mt!==null){Wl=!0;var e=0,t=V;try{var n=mt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,nl=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),Vp(Na,ln),i}finally{V=t,Wl=!1}}return null}var Bn=[],Un=0,Lo=null,Io=0,Be=[],Ue=0,bn=null,gt=1,xt="";function un(e,t){Bn[Un++]=Io,Bn[Un++]=Lo,Lo=e,Io=t}function bf(e,t,n){Be[Ue++]=gt,Be[Ue++]=xt,Be[Ue++]=bn,bn=e;var r=gt;e=xt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var l=32-et(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,gt=1<<32-et(t)+i|n<<i|r,xt=l+e}else gt=1<<l|n<<i|r,xt=e}function Ha(e){e.return!==null&&(un(e,1),bf(e,1,0))}function Qa(e){for(;e===Lo;)Lo=Bn[--Un],Bn[Un]=null,Io=Bn[--Un],Bn[Un]=null;for(;e===bn;)bn=Be[--Ue],Be[Ue]=null,xt=Be[--Ue],Be[Ue]=null,gt=Be[--Ue],Be[Ue]=null}var Ne=null,Me=null,Y=!1,Ze=null;function jf(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Me=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:gt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Me=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Us(e){if(Y){var t=Me;if(t){var n=t;if(!hu(e,t)){if(Bs(e))throw Error(P(418));t=Gt(n.nextSibling);var r=Ne;t&&hu(e,t)?jf(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ne=e)}}else{if(Bs(e))throw Error(P(418));e.flags=e.flags&-4097|2,Y=!1,Ne=e}}}function mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Oi(e){if(e!==Ne)return!1;if(!Y)return mu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!As(e.type,e.memoizedProps)),t&&(t=Me)){if(Bs(e))throw kf(),Error(P(418));for(;t;)jf(e,t),t=Gt(t.nextSibling)}if(mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Ne?Gt(e.stateNode.nextSibling):null;return!0}function kf(){for(var e=Me;e;)e=Gt(e.nextSibling)}function nr(){Me=Ne=null,Y=!1}function Ga(e){Ze===null?Ze=[e]:Ze.push(e)}var Hg=St.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function _i(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gu(e){var t=e._init;return t(e._payload)}function Cf(e){function t(x,p){if(e){var h=x.deletions;h===null?(x.deletions=[p],x.flags|=16):h.push(p)}}function n(x,p){if(!e)return null;for(;p!==null;)t(x,p),p=p.sibling;return null}function r(x,p){for(x=new Map;p!==null;)p.key!==null?x.set(p.key,p):x.set(p.index,p),p=p.sibling;return x}function i(x,p){return x=Xt(x,p),x.index=0,x.sibling=null,x}function l(x,p,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<p?(x.flags|=2,p):h):(x.flags|=2,p)):(x.flags|=1048576,p)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,p,h,v){return p===null||p.tag!==6?(p=Yl(h,x.mode,v),p.return=x,p):(p=i(p,h),p.return=x,p)}function c(x,p,h,v){var S=h.type;return S===Mn?m(x,p,h.props.children,v,h.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&gu(S)===p.type)?(v=i(p,h.props),v.ref=Cr(x,p,h),v.return=x,v):(v=uo(h.type,h.key,h.props,null,x.mode,v),v.ref=Cr(x,p,h),v.return=x,v)}function d(x,p,h,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Xl(h,x.mode,v),p.return=x,p):(p=i(p,h.children||[]),p.return=x,p)}function m(x,p,h,v,S){return p===null||p.tag!==7?(p=yn(h,x.mode,v,S),p.return=x,p):(p=i(p,h),p.return=x,p)}function f(x,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Yl(""+p,x.mode,h),p.return=x,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Pi:return h=uo(p.type,p.key,p.props,null,x.mode,h),h.ref=Cr(x,null,p),h.return=x,h;case Dn:return p=Xl(p,x.mode,h),p.return=x,p;case Nt:var v=p._init;return f(x,v(p._payload),h)}if(Ir(p)||vr(p))return p=yn(p,x.mode,h,null),p.return=x,p;_i(x,p)}return null}function g(x,p,h,v){var S=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(x,p,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Pi:return h.key===S?c(x,p,h,v):null;case Dn:return h.key===S?d(x,p,h,v):null;case Nt:return S=h._init,g(x,p,S(h._payload),v)}if(Ir(h)||vr(h))return S!==null?null:m(x,p,h,v,null);_i(x,h)}return null}function k(x,p,h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return x=x.get(h)||null,a(p,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pi:return x=x.get(v.key===null?h:v.key)||null,c(p,x,v,S);case Dn:return x=x.get(v.key===null?h:v.key)||null,d(p,x,v,S);case Nt:var C=v._init;return k(x,p,h,C(v._payload),S)}if(Ir(v)||vr(v))return x=x.get(h)||null,m(p,x,v,S,null);_i(p,v)}return null}function b(x,p,h,v){for(var S=null,C=null,$=p,j=p=0,T=null;$!==null&&j<h.length;j++){$.index>j?(T=$,$=null):T=$.sibling;var L=g(x,$,h[j],v);if(L===null){$===null&&($=T);break}e&&$&&L.alternate===null&&t(x,$),p=l(L,p,j),C===null?S=L:C.sibling=L,C=L,$=T}if(j===h.length)return n(x,$),Y&&un(x,j),S;if($===null){for(;j<h.length;j++)$=f(x,h[j],v),$!==null&&(p=l($,p,j),C===null?S=$:C.sibling=$,C=$);return Y&&un(x,j),S}for($=r(x,$);j<h.length;j++)T=k($,x,j,h[j],v),T!==null&&(e&&T.alternate!==null&&$.delete(T.key===null?j:T.key),p=l(T,p,j),C===null?S=T:C.sibling=T,C=T);return e&&$.forEach(function(O){return t(x,O)}),Y&&un(x,j),S}function y(x,p,h,v){var S=vr(h);if(typeof S!="function")throw Error(P(150));if(h=S.call(h),h==null)throw Error(P(151));for(var C=S=null,$=p,j=p=0,T=null,L=h.next();$!==null&&!L.done;j++,L=h.next()){$.index>j?(T=$,$=null):T=$.sibling;var O=g(x,$,L.value,v);if(O===null){$===null&&($=T);break}e&&$&&O.alternate===null&&t(x,$),p=l(O,p,j),C===null?S=O:C.sibling=O,C=O,$=T}if(L.done)return n(x,$),Y&&un(x,j),S;if($===null){for(;!L.done;j++,L=h.next())L=f(x,L.value,v),L!==null&&(p=l(L,p,j),C===null?S=L:C.sibling=L,C=L);return Y&&un(x,j),S}for($=r(x,$);!L.done;j++,L=h.next())L=k($,x,j,L.value,v),L!==null&&(e&&L.alternate!==null&&$.delete(L.key===null?j:L.key),p=l(L,p,j),C===null?S=L:C.sibling=L,C=L);return e&&$.forEach(function(te){return t(x,te)}),Y&&un(x,j),S}function E(x,p,h,v){if(typeof h=="object"&&h!==null&&h.type===Mn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Pi:e:{for(var S=h.key,C=p;C!==null;){if(C.key===S){if(S=h.type,S===Mn){if(C.tag===7){n(x,C.sibling),p=i(C,h.props.children),p.return=x,x=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&gu(S)===C.type){n(x,C.sibling),p=i(C,h.props),p.ref=Cr(x,C,h),p.return=x,x=p;break e}n(x,C);break}else t(x,C);C=C.sibling}h.type===Mn?(p=yn(h.props.children,x.mode,v,h.key),p.return=x,x=p):(v=uo(h.type,h.key,h.props,null,x.mode,v),v.ref=Cr(x,p,h),v.return=x,x=v)}return s(x);case Dn:e:{for(C=h.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(x,p.sibling),p=i(p,h.children||[]),p.return=x,x=p;break e}else{n(x,p);break}else t(x,p);p=p.sibling}p=Xl(h,x.mode,v),p.return=x,x=p}return s(x);case Nt:return C=h._init,E(x,p,C(h._payload),v)}if(Ir(h))return b(x,p,h,v);if(vr(h))return y(x,p,h,v);_i(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(x,p.sibling),p=i(p,h),p.return=x,x=p):(n(x,p),p=Yl(h,x.mode,v),p.return=x,x=p),s(x)):n(x,p)}return E}var rr=Cf(!0),$f=Cf(!1),Ro=on(null),zo=null,Wn=null,Ka=null;function Ja(){Ka=Wn=zo=null}function Ya(e){var t=Ro.current;J(Ro),e._currentValue=t}function Ws(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){zo=e,Ka=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Ka!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(zo===null)throw Error(P(308));Wn=e,zo.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var mn=null;function Xa(e){mn===null?mn=[e]:mn.push(e)}function Sf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ef(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var i=e.updateQueue;At=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,d=c.next;c.next=null,s===null?l=d:s.next=d,s=c;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==s&&(a===null?m.firstBaseUpdate=d:a.next=d,m.lastBaseUpdate=c))}if(l!==null){var f=i.baseState;s=0,m=d=c=null,a=l;do{var g=a.lane,k=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,y=a;switch(g=t,k=n,y.tag){case 1:if(b=y.payload,typeof b=="function"){f=b.call(k,f,g);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,g=typeof b=="function"?b.call(k,f,g):b,g==null)break e;f=ee({},f,g);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(d=m=k,c=f):m=m.next=k,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);kn|=s,e.lanes=s,e.memoizedState=f}}function yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Ci={},ct=on(Ci),si=on(Ci),ai=on(Ci);function gn(e){if(e===Ci)throw Error(P(174));return e}function Za(e,t){switch(Q(ai,t),Q(si,e),Q(ct,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}J(ct),Q(ct,t)}function ir(){J(ct),J(si),J(ai)}function Pf(e){gn(ai.current);var t=gn(ct.current),n=ks(t,e.type);t!==n&&(Q(si,e),Q(ct,n))}function ec(e){si.current===e&&(J(ct),J(si))}var X=on(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function tc(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var oo=St.ReactCurrentDispatcher,Hl=St.ReactCurrentBatchConfig,jn=0,q=null,ce=null,pe=null,No=!1,Wr=!1,ci=0,Qg=0;function xe(){throw Error(P(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function rc(e,t,n,r,i,l){if(jn=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?Yg:Xg,e=n(r,i),Wr){l=0;do{if(Wr=!1,ci=0,25<=l)throw Error(P(301));l+=1,pe=ce=null,t.updateQueue=null,oo.current=qg,e=n(r,i)}while(Wr)}if(oo.current=Ao,t=ce!==null&&ce.next!==null,jn=0,pe=ce=q=null,No=!1,t)throw Error(P(300));return e}function ic(){var e=ci!==0;return ci=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?q.memoizedState=pe=e:pe=pe.next=e,pe}function Qe(){if(ce===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?q.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(P(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?q.memoizedState=pe=e:pe=pe.next=e}return pe}function ui(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ce,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,c=null,d=l;do{var m=d.lane;if((jn&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=f,s=r):c=c.next=f,q.lanes|=m,kn|=m}d=d.next}while(d!==null&&d!==l);c===null?s=r:c.next=a,rt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,q.lanes|=l,kn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);rt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Tf(){}function Lf(e,t){var n=q,r=Qe(),i=t(),l=!rt(r.memoizedState,i);if(l&&(r.memoizedState=i,Pe=!0),r=r.queue,oc(zf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,di(9,Rf.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(P(349));jn&30||If(n,t,i)}return i}function If(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rf(e,t,n,r){t.value=n,t.getSnapshot=r,Df(t)&&Mf(e)}function zf(e,t,n){return n(function(){Df(t)&&Mf(e)})}function Df(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function Mf(e){var t=kt(e,1);t!==null&&tt(t,e,1,-1)}function vu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=Jg.bind(null,q,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nf(){return Qe().memoizedState}function lo(e,t,n,r){var i=lt();q.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function rl(e,t,n,r){var i=Qe();r=r===void 0?null:r;var l=void 0;if(ce!==null){var s=ce.memoizedState;if(l=s.destroy,r!==null&&nc(r,s.deps)){i.memoizedState=di(t,n,l,r);return}}q.flags|=e,i.memoizedState=di(1|t,n,l,r)}function wu(e,t){return lo(8390656,8,e,t)}function oc(e,t){return rl(2048,8,e,t)}function Af(e,t){return rl(4,2,e,t)}function Of(e,t){return rl(4,4,e,t)}function _f(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ff(e,t,n){return n=n!=null?n.concat([e]):null,rl(4,4,_f.bind(null,t,e),n)}function lc(){}function Bf(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uf(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wf(e,t,n){return jn&21?(rt(n,t)||(n=Gp(),q.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Gg(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{V=n,Hl.transition=r}}function Vf(){return Qe().memoizedState}function Kg(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hf(e))Qf(t,n);else if(n=Sf(e,t,n,r),n!==null){var i=ke();tt(n,e,r,i),Gf(n,t,r)}}function Jg(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hf(e))Qf(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,s)){var c=t.interleaved;c===null?(i.next=i,Xa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Sf(e,t,i,r),n!==null&&(i=ke(),tt(n,e,r,i),Gf(n,t,r))}}function Hf(e){var t=e.alternate;return e===q||t!==null&&t===q}function Qf(e,t){Wr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}var Ao={readContext:He,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Yg={readContext:He,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,_f.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kg.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:lc,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Gg.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=lt();if(Y){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),fe===null)throw Error(P(349));jn&30||If(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,wu(zf.bind(null,r,l,e),[e]),r.flags|=2048,di(9,Rf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=lt(),t=fe.identifierPrefix;if(Y){var n=xt,r=gt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xg={readContext:He,useCallback:Bf,useContext:He,useEffect:oc,useImperativeHandle:Ff,useInsertionEffect:Af,useLayoutEffect:Of,useMemo:Uf,useReducer:Ql,useRef:Nf,useState:function(){return Ql(ui)},useDebugValue:lc,useDeferredValue:function(e){var t=Qe();return Wf(t,ce.memoizedState,e)},useTransition:function(){var e=Ql(ui)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Lf,useId:Vf,unstable_isNewReconciler:!1},qg={readContext:He,useCallback:Bf,useContext:He,useEffect:oc,useImperativeHandle:Ff,useInsertionEffect:Af,useLayoutEffect:Of,useMemo:Uf,useReducer:Gl,useRef:Nf,useState:function(){return Gl(ui)},useDebugValue:lc,useDeferredValue:function(e){var t=Qe();return ce===null?t.memoizedState=e:Wf(t,ce.memoizedState,e)},useTransition:function(){var e=Gl(ui)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Lf,useId:Vf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Yt(e),l=yt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Kt(e,l,i),t!==null&&(tt(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Yt(e),l=yt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Kt(e,l,i),t!==null&&(tt(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Yt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(tt(t,e,r,n),io(t,e,r))}};function bu(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,l):!0}function Kf(e,t,n){var r=!1,i=tn,l=t.contextType;return typeof l=="object"&&l!==null?l=He(l):(i=Le(t)?wn:be.current,r=t.contextTypes,l=(r=r!=null)?tr(e,i):tn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function Hs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},qa(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=He(l):(l=Le(t)?wn:be.current,i.context=tr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Vs(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Do(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=Sm(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zg=typeof WeakMap=="function"?WeakMap:Map;function Jf(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_o||(_o=!0,na=r),Qs(e,t)},n}function Yf(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qs(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Qs(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fx.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $u(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var ex=St.ReactCurrentOwner,Pe=!1;function je(e,t,n,r){t.child=e===null?$f(t,null,n,r):rr(t,e.child,n,r)}function Su(e,t,n,r,i){n=n.render;var l=t.ref;return Xn(t,i),r=rc(e,t,n,r,l,i),n=ic(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(Y&&n&&Ha(t),t.flags|=1,je(e,t,r,i),t.child)}function Eu(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!hc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Xf(e,t,l,r,i)):(e=uo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(s,r)&&e.ref===t.ref)return Ct(e,t,i)}return t.flags|=1,e=Xt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Xf(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(ri(l,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,Ct(e,t,i)}return Gs(e,t,n,r,i)}function qf(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Hn,De),De|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Hn,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Q(Hn,De),De|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Q(Hn,De),De|=r;return je(e,t,i,n),t.child}function Zf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,i){var l=Le(n)?wn:be.current;return l=tr(t,l),Xn(t,i),n=rc(e,t,n,r,l,i),r=ic(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(Y&&r&&Ha(t),t.flags|=1,je(e,t,n,i),t.child)}function Pu(e,t,n,r,i){if(Le(n)){var l=!0;To(t)}else l=!1;if(Xn(t,i),t.stateNode===null)so(e,t),Kf(t,n,r),Hs(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=He(d):(d=Le(n)?wn:be.current,d=tr(t,d));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==d)&&ju(t,s,r,d),At=!1;var g=t.memoizedState;s.state=g,Do(t,r,s,i),c=t.memoizedState,a!==r||g!==c||Te.current||At?(typeof m=="function"&&(Vs(t,n,m,r),c=t.memoizedState),(a=At||bu(t,n,a,r,g,c,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ef(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Ye(t.type,a),s.props=d,f=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=He(c):(c=Le(n)?wn:be.current,c=tr(t,c));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||g!==c)&&ju(t,s,r,c),At=!1,g=t.memoizedState,s.state=g,Do(t,r,s,i);var b=t.memoizedState;a!==f||g!==b||Te.current||At?(typeof k=="function"&&(Vs(t,n,k,r),b=t.memoizedState),(d=At||bu(t,n,d,r,g,b,c)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,l,i)}function Ks(e,t,n,r,i,l){Zf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&fu(t,n,!1),Ct(e,t,l);r=t.stateNode,ex.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=rr(t,e.child,null,l),t.child=rr(t,null,a,l)):je(e,t,a,l),t.memoizedState=r.state,i&&fu(t,n,!0),t.child}function eh(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),Za(e,t.containerInfo)}function Tu(e,t,n,r,i){return nr(),Ga(i),t.flags|=256,je(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function th(e,t,n){var r=t.pendingProps,i=X.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(X,i&1),e===null)return Us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=sl(s,r,0,null),e=yn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ys(n),t.memoizedState=Js,e):sc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tx(e,t,s,r,a,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Xt(a,l):(l=yn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Ys(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Js,r}return l=e.child,e=l.sibling,r=Xt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sc(e,t){return t=sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&Ga(r),rr(t,e.child,null,n),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tx(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(P(422))),Fi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=sl({mode:"visible",children:r.children},i,0,null),l=yn(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&rr(t,e.child,null,s),t.child.memoizedState=Ys(s),t.memoizedState=Js,l);if(!(t.mode&1))return Fi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(P(419)),r=Kl(l,r,void 0),Fi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Pe||a){if(r=fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,kt(e,i),tt(r,e,i,-1))}return fc(),r=Kl(Error(P(421))),Fi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hx.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Me=Gt(i.nextSibling),Ne=t,Y=!0,Ze=null,e!==null&&(Be[Ue++]=gt,Be[Ue++]=xt,Be[Ue++]=bn,gt=e.id,xt=e.overflow,bn=t),t=sc(t,r.children),t.flags|=4096,t)}function Lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ws(e.return,t,n)}function Jl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function nh(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(je(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,n,t);else if(e.tag===19)Lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jl(t,!0,n,null,l);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nx(e,t,n){switch(t.tag){case 3:eh(t),nr();break;case 5:Pf(t);break;case 1:Le(t.type)&&To(t);break;case 4:Za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(Ro,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?th(e,t,n):(Q(X,X.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);Q(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,qf(e,t,n)}return Ct(e,t,n)}var rh,Xs,ih,oh;rh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xs=function(){};ih=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(ct.current);var l=null;switch(n){case"input":i=vs(e,i),r=vs(e,r),l=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),l=[];break;case"textarea":i=js(e,i),r=js(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}Cs(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&G("scroll",e),l||a===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};oh=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rx(e,t,n){var r=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Le(t.type)&&Po(),ye(t),null;case 3:return r=t.stateNode,ir(),J(Te),J(be),tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(oa(Ze),Ze=null))),Xs(e,t),ye(t),null;case 5:ec(t);var i=gn(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)ih(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ye(t),null}if(e=gn(ct.current),Oi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[st]=t,r[li]=l,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)G(zr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":_c(r,l),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},G("invalid",r);break;case"textarea":Bc(r,l),G("invalid",r)}Cs(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ai(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ai(r.textContent,a,e),i=["children",""+a]):Yr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":Ti(r),Fc(r,l,!0);break;case"textarea":Ti(r),Uc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[li]=r,rh(e,t,!1,!1),t.stateNode=e;e:{switch(s=$s(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)G(zr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":_c(e,r),i=vs(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),G("invalid",e);break;case"textarea":Bc(e,r),i=js(e,r),G("invalid",e);break;default:i=r}Cs(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?Mp(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zp(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xr(e,c):typeof c=="number"&&Xr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&G("scroll",e):c!=null&&Ia(e,l,c,s))}switch(n){case"input":Ti(e),Fc(e,r,!1);break;case"textarea":Ti(e),Uc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Gn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)oh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=gn(ai.current),gn(ct.current),Oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(l=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ai(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ye(t),null;case 13:if(J(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Me!==null&&t.mode&1&&!(t.flags&128))kf(),nr(),t.flags|=98560,l=!1;else if(l=Oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[st]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),l=!1}else Ze!==null&&(oa(Ze),Ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?de===0&&(de=3):fc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return ir(),Xs(e,t),e===null&&ii(t.stateNode.containerInfo),ye(t),null;case 10:return Ya(t.type._context),ye(t),null;case 17:return Le(t.type)&&Po(),ye(t),null;case 19:if(J(X),l=t.memoizedState,l===null)return ye(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)$r(l,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Mo(e),s!==null){for(t.flags|=128,$r(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(X,X.current&1|2),t.child}e=e.sibling}l.tail!==null&&ie()>lr&&(t.flags|=128,r=!0,$r(l,!1),t.lanes=4194304)}else{if(!r)if(e=Mo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Y)return ye(t),null}else 2*ie()-l.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,$r(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ie(),t.sibling=null,n=X.current,Q(X,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return pc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function ix(e,t){switch(Qa(t),t.tag){case 1:return Le(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),J(Te),J(be),tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ec(t),null;case 13:if(J(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(X),null;case 4:return ir(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Bi=!1,we=!1,ox=typeof WeakSet=="function"?WeakSet:Set,R=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function qs(e,t,n){try{n()}catch(r){re(e,t,r)}}var Iu=!1;function lx(e,t){if(Ms=Co,e=uf(),Va(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,d=0,m=0,f=e,g=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==l||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(k=f.firstChild)!==null;)g=f,f=k;for(;;){if(f===e)break t;if(g===n&&++d===i&&(a=s),g===l&&++m===r&&(c=s),(k=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=k}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ns={focusedElem:e,selectionRange:n},Co=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,E=b.memoizedState,x=t.stateNode,p=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),E);x.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(v){re(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return b=Iu,Iu=!1,b}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&qs(t,n,l)}i=i.next}while(i!==r)}}function ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lh(e){var t=e.alternate;t!==null&&(e.alternate=null,lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[li],delete t[_s],delete t[Ug],delete t[Wg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sh(e){return e.tag===5||e.tag===3||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var he=null,Xe=!1;function Rt(e,t,n){for(n=n.child;n!==null;)ah(e,t,n),n=n.sibling}function ah(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Xo,n)}catch{}switch(n.tag){case 5:we||Vn(n,t);case 6:var r=he,i=Xe;he=null,Rt(e,t,n),he=r,Xe=i,he!==null&&(Xe?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Xe?(e=he,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),ti(e)):Ul(he,n.stateNode));break;case 4:r=he,i=Xe,he=n.stateNode.containerInfo,Xe=!0,Rt(e,t,n),he=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&qs(n,t,s),i=i.next}while(i!==r)}Rt(e,t,n);break;case 1:if(!we&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Rt(e,t,n),we=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ox),t.forEach(function(r){var i=mx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Xe=!1;break e;case 3:he=a.stateNode.containerInfo,Xe=!0;break e;case 4:he=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(he===null)throw Error(P(160));ah(l,s,i),he=null,Xe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){re(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ch(t,e),t=t.sibling}function ch(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ot(e),r&4){try{Vr(3,e,e.return),ol(3,e)}catch(y){re(e,e.return,y)}try{Vr(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:Je(t,e),ot(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(Je(t,e),ot(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(y){re(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Lp(i,l),$s(a,s);var d=$s(a,l);for(s=0;s<c.length;s+=2){var m=c[s],f=c[s+1];m==="style"?Mp(i,f):m==="dangerouslySetInnerHTML"?zp(i,f):m==="children"?Xr(i,f):Ia(i,m,f,d)}switch(a){case"input":ws(i,l);break;case"textarea":Ip(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?Gn(i,!!l.multiple,k,!1):g!==!!l.multiple&&(l.defaultValue!=null?Gn(i,!!l.multiple,l.defaultValue,!0):Gn(i,!!l.multiple,l.multiple?[]:"",!1))}i[li]=l}catch(y){re(e,e.return,y)}}break;case 6:if(Je(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){re(e,e.return,y)}}break;case 3:if(Je(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:Je(t,e),ot(e);break;case 13:Je(t,e),ot(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=ie())),r&4&&zu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(we=(d=we)||m,Je(t,e),we=d):Je(t,e),ot(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(R=e,m=e.child;m!==null;){for(f=R=m;R!==null;){switch(g=R,k=g.child,g.tag){case 0:case 11:case 14:case 15:Vr(4,g,g.return);break;case 1:Vn(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Vn(g,g.return);break;case 22:if(g.memoizedState!==null){Mu(f);continue}}k!==null?(k.return=g,R=k):Mu(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Dp("display",s))}catch(y){re(e,e.return,y)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){re(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Je(t,e),ot(e),r&4&&zu(e);break;case 21:break;default:Je(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var l=Ru(e);ta(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ru(e);ea(e,a,s);break;default:throw Error(P(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sx(e,t,n){R=e,uh(e)}function uh(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Bi;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||we;a=Bi;var d=we;if(Bi=s,(we=c)&&!d)for(R=i;R!==null;)s=R,c=s.child,s.tag===22&&s.memoizedState!==null?Nu(i):c!==null?(c.return=s,R=c):Nu(i);for(;l!==null;)R=l,uh(l),l=l.sibling;R=i,Bi=a,we=d}Du(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,R=l):Du(e)}}function Du(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&yu(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}we||t.flags&512&&Zs(t)}catch(g){re(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Mu(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Nu(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ol(4,t)}catch(c){re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){re(t,i,c)}}var l=t.return;try{Zs(t)}catch(c){re(t,l,c)}break;case 5:var s=t.return;try{Zs(t)}catch(c){re(t,s,c)}}}catch(c){re(t,t.return,c)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var ax=Math.ceil,Oo=St.ReactCurrentDispatcher,ac=St.ReactCurrentOwner,Ve=St.ReactCurrentBatchConfig,F=0,fe=null,se=null,me=0,De=0,Hn=on(0),de=0,pi=null,kn=0,ll=0,cc=0,Hr=null,Ee=null,uc=0,lr=1/0,ft=null,_o=!1,na=null,Jt=null,Ui=!1,Bt=null,Fo=0,Qr=0,ra=null,ao=-1,co=0;function ke(){return F&6?ie():ao!==-1?ao:ao=ie()}function Yt(e){return e.mode&1?F&2&&me!==0?me&-me:Hg.transition!==null?(co===0&&(co=Gp()),co):(e=V,e!==0||(e=window.event,e=e===void 0?16:ef(e.type)),e):1}function tt(e,t,n,r){if(50<Qr)throw Qr=0,ra=null,Error(P(185));bi(e,n,r),(!(F&2)||e!==fe)&&(e===fe&&(!(F&2)&&(ll|=n),de===4&&_t(e,me)),Ie(e,r),n===1&&F===0&&!(t.mode&1)&&(lr=ie()+500,nl&&ln()))}function Ie(e,t){var n=e.callbackNode;Hm(e,t);var r=ko(e,e===fe?me:0);if(r===0)n!==null&&Hc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hc(n),t===1)e.tag===0?Vg(Au.bind(null,e)):wf(Au.bind(null,e)),Fg(function(){!(F&6)&&ln()}),n=null;else{switch(Kp(r)){case 1:n=Na;break;case 4:n=Hp;break;case 16:n=jo;break;case 536870912:n=Qp;break;default:n=jo}n=yh(n,dh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dh(e,t){if(ao=-1,co=0,F&6)throw Error(P(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=ko(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bo(e,r);else{t=r;var i=F;F|=2;var l=fh();(fe!==e||me!==t)&&(ft=null,lr=ie()+500,xn(e,t));do try{dx();break}catch(a){ph(e,a)}while(!0);Ja(),Oo.current=l,F=i,se!==null?t=0:(fe=null,me=0,t=de)}if(t!==0){if(t===2&&(i=Ls(e),i!==0&&(r=i,t=ia(e,i))),t===1)throw n=pi,xn(e,0),_t(e,r),Ie(e,ie()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!cx(i)&&(t=Bo(e,r),t===2&&(l=Ls(e),l!==0&&(r=l,t=ia(e,l))),t===1))throw n=pi,xn(e,0),_t(e,r),Ie(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:dn(e,Ee,ft);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=uc+500-ie(),10<t)){if(ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Os(dn.bind(null,e,Ee,ft),t);break}dn(e,Ee,ft);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ax(r/1960))-r,10<r){e.timeoutHandle=Os(dn.bind(null,e,Ee,ft),r);break}dn(e,Ee,ft);break;case 5:dn(e,Ee,ft);break;default:throw Error(P(329))}}}return Ie(e,ie()),e.callbackNode===n?dh.bind(null,e):null}function ia(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Bo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&oa(t)),e}function oa(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function cx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!rt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~cc,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Au(e){if(F&6)throw Error(P(327));qn();var t=ko(e,0);if(!(t&1))return Ie(e,ie()),null;var n=Bo(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=pi,xn(e,0),_t(e,t),Ie(e,ie()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Ee,ft),Ie(e,ie()),null}function dc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(lr=ie()+500,nl&&ln())}}function Cn(e){Bt!==null&&Bt.tag===0&&!(F&6)&&qn();var t=F;F|=1;var n=Ve.transition,r=V;try{if(Ve.transition=null,V=1,e)return e()}finally{V=r,Ve.transition=n,F=t,!(F&6)&&ln()}}function pc(){De=Hn.current,J(Hn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_g(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:ir(),J(Te),J(be),tc();break;case 5:ec(r);break;case 4:ir();break;case 13:J(X);break;case 19:J(X);break;case 10:Ya(r.type._context);break;case 22:case 23:pc()}n=n.return}if(fe=e,se=e=Xt(e.current,null),me=De=t,de=0,pi=null,cc=ll=kn=0,Ee=Hr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}mn=null}return e}function ph(e,t){do{var n=se;try{if(Ja(),oo.current=Ao,No){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if(jn=0,pe=ce=q=null,Wr=!1,ci=0,ac.current=null,n===null||n.return===null){de=1,pi=t,se=null;break}e:{var l=e,s=n.return,a=n,c=t;if(t=me,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=a,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=Cu(s);if(k!==null){k.flags&=-257,$u(k,s,a,l,t),k.mode&1&&ku(l,d,t),t=k,c=d;var b=t.updateQueue;if(b===null){var y=new Set;y.add(c),t.updateQueue=y}else b.add(c);break e}else{if(!(t&1)){ku(l,d,t),fc();break e}c=Error(P(426))}}else if(Y&&a.mode&1){var E=Cu(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),$u(E,s,a,l,t),Ga(or(c,a));break e}}l=c=or(c,a),de!==4&&(de=2),Hr===null?Hr=[l]:Hr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var x=Jf(l,c,t);xu(l,x);break e;case 1:a=c;var p=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Jt===null||!Jt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Yf(l,a,t);xu(l,v);break e}}l=l.return}while(l!==null)}mh(n)}catch(S){t=S,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function fh(){var e=Oo.current;return Oo.current=Ao,e===null?Ao:e}function fc(){(de===0||de===3||de===2)&&(de=4),fe===null||!(kn&268435455)&&!(ll&268435455)||_t(fe,me)}function Bo(e,t){var n=F;F|=2;var r=fh();(fe!==e||me!==t)&&(ft=null,xn(e,t));do try{ux();break}catch(i){ph(e,i)}while(!0);if(Ja(),F=n,Oo.current=r,se!==null)throw Error(P(261));return fe=null,me=0,de}function ux(){for(;se!==null;)hh(se)}function dx(){for(;se!==null&&!Nm();)hh(se)}function hh(e){var t=xh(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?mh(e):se=t,ac.current=null}function mh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ix(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,se=null;return}}else if(n=rx(n,t,De),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);de===0&&(de=5)}function dn(e,t,n){var r=V,i=Ve.transition;try{Ve.transition=null,V=1,px(e,t,n,r)}finally{Ve.transition=i,V=r}return null}function px(e,t,n,r){do qn();while(Bt!==null);if(F&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Qm(e,l),e===fe&&(se=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ui||(Ui=!0,yh(jo,function(){return qn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ve.transition,Ve.transition=null;var s=V;V=1;var a=F;F|=4,ac.current=null,lx(e,n),ch(n,e),Rg(Ns),Co=!!Ms,Ns=Ms=null,e.current=n,sx(n),Am(),F=a,V=s,Ve.transition=l}else e.current=n;if(Ui&&(Ui=!1,Bt=e,Fo=i),l=e.pendingLanes,l===0&&(Jt=null),Fm(n.stateNode),Ie(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,e=na,na=null,e;return Fo&1&&e.tag!==0&&qn(),l=e.pendingLanes,l&1?e===ra?Qr++:(Qr=0,ra=e):Qr=0,ln(),null}function qn(){if(Bt!==null){var e=Kp(Fo),t=Ve.transition,n=V;try{if(Ve.transition=null,V=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,Fo=0,F&6)throw Error(P(331));var i=F;for(F|=4,R=e.current;R!==null;){var l=R,s=l.child;if(R.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(R=d;R!==null;){var m=R;switch(m.tag){case 0:case 11:case 15:Vr(8,m,l)}var f=m.child;if(f!==null)f.return=m,R=f;else for(;R!==null;){m=R;var g=m.sibling,k=m.return;if(lh(m),m===d){R=null;break}if(g!==null){g.return=k,R=g;break}R=k}}}var b=l.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}R=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,R=s;else e:for(;R!==null;){if(l=R,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Vr(9,l,l.return)}var x=l.sibling;if(x!==null){x.return=l.return,R=x;break e}R=l.return}}var p=e.current;for(R=p;R!==null;){s=R;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,R=h;else e:for(s=p;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ol(9,a)}}catch(S){re(a,a.return,S)}if(a===s){R=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,R=v;break e}R=a.return}}if(F=i,ln(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Xo,e)}catch{}r=!0}return r}finally{V=n,Ve.transition=t}}return!1}function Ou(e,t,n){t=or(n,t),t=Jf(e,t,1),e=Kt(e,t,1),t=ke(),e!==null&&(bi(e,1,t),Ie(e,t))}function re(e,t,n){if(e.tag===3)Ou(e,e,n);else for(;t!==null;){if(t.tag===3){Ou(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=or(n,e),e=Yf(t,e,1),t=Kt(t,e,1),e=ke(),t!==null&&(bi(t,1,e),Ie(t,e));break}}t=t.return}}function fx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(de===4||de===3&&(me&130023424)===me&&500>ie()-uc?xn(e,0):cc|=n),Ie(e,t)}function gh(e,t){t===0&&(e.mode&1?(t=Ri,Ri<<=1,!(Ri&130023424)&&(Ri=4194304)):t=1);var n=ke();e=kt(e,t),e!==null&&(bi(e,t,n),Ie(e,n))}function hx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gh(e,n)}function mx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),gh(e,n)}var xh;xh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,nx(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Y&&t.flags&1048576&&bf(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=tr(t,be.current);Xn(t,n),i=rc(null,t,r,e,i,n);var l=ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(l=!0,To(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qa(t),i.updater=il,t.stateNode=i,i._reactInternals=t,Hs(t,r,e,n),t=Ks(null,t,r,!0,l,n)):(t.tag=0,Y&&l&&Ha(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xx(r),e=Ye(r,e),i){case 0:t=Gs(null,t,r,e,n);break e;case 1:t=Pu(null,t,r,e,n);break e;case 11:t=Su(null,t,r,e,n);break e;case 14:t=Eu(null,t,r,Ye(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Gs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Pu(e,t,r,i,n);case 3:e:{if(eh(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Ef(e,t),Do(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=or(Error(P(423)),t),t=Tu(e,t,r,n,i);break e}else if(r!==i){i=or(Error(P(424)),t),t=Tu(e,t,r,n,i);break e}else for(Me=Gt(t.stateNode.containerInfo.firstChild),Ne=t,Y=!0,Ze=null,n=$f(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=Ct(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return Pf(t),e===null&&Us(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,As(r,i)?s=null:l!==null&&As(r,l)&&(t.flags|=32),Zf(e,t),je(e,t,s,n),t.child;case 6:return e===null&&Us(t),null;case 13:return th(e,t,n);case 4:return Za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Su(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,Q(Ro,r._currentValue),r._currentValue=s,l!==null)if(rt(l.value,s)){if(l.children===i.children&&!Te.current){t=Ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=yt(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ws(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ws(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xn(t,n),i=He(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Eu(e,t,r,i,n);case 15:return Xf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),so(e,t),t.tag=1,Le(r)?(e=!0,To(t)):e=!1,Xn(t,n),Kf(t,r,i),Hs(t,r,i,n),Ks(null,t,r,!0,e,n);case 19:return nh(e,t,n);case 22:return qf(e,t,n)}throw Error(P(156,t.tag))};function yh(e,t){return Vp(e,t)}function gx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new gx(e,t,n,r)}function hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xx(e){if(typeof e=="function")return hc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===za)return 11;if(e===Da)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function uo(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")hc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Mn:return yn(n.children,i,l,t);case Ra:s=8,i|=8;break;case ms:return e=We(12,n,t,i|2),e.elementType=ms,e.lanes=l,e;case gs:return e=We(13,n,t,i),e.elementType=gs,e.lanes=l,e;case xs:return e=We(19,n,t,i),e.elementType=xs,e.lanes=l,e;case Ep:return sl(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $p:s=10;break e;case Sp:s=9;break e;case za:s=11;break e;case Da:s=14;break e;case Nt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function yn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function sl(e,t,n,r){return e=We(22,e,r,t),e.elementType=Ep,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mc(e,t,n,r,i,l,s,a,c){return e=new yx(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=We(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(l),e}function vx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vh(e){if(!e)return tn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Le(n))return vf(e,n,t)}return t}function wh(e,t,n,r,i,l,s,a,c){return e=mc(n,r,!0,e,i,l,s,a,c),e.context=vh(null),n=e.current,r=ke(),i=Yt(n),l=yt(r,i),l.callback=t??null,Kt(n,l,i),e.current.lanes=i,bi(e,i,r),Ie(e,r),e}function al(e,t,n,r){var i=t.current,l=ke(),s=Yt(i);return n=vh(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,s),e!==null&&(tt(e,i,s,l),io(e,i,s)),s}function Uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function wx(){return null}var bh=typeof reportError=="function"?reportError:function(e){console.error(e)};function xc(e){this._internalRoot=e}cl.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));al(e,t,null,null)};cl.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){al(null,e,null,null)}),t[jt]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Zp(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fu(){}function bx(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=Uo(s);l.call(d)}}var s=wh(t,r,e,0,null,!1,!1,"",Fu);return e._reactRootContainer=s,e[jt]=s.current,ii(e.nodeType===8?e.parentNode:e),Cn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Uo(c);a.call(d)}}var c=mc(e,0,!1,null,null,!1,!1,"",Fu);return e._reactRootContainer=c,e[jt]=c.current,ii(e.nodeType===8?e.parentNode:e),Cn(function(){al(t,c,n,r)}),c}function dl(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var c=Uo(s);a.call(c)}}al(t,s,e,i)}else s=bx(n,t,e,i,r);return Uo(s)}Jp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(Aa(t,n|1),Ie(t,ie()),!(F&6)&&(lr=ie()+500,ln()))}break;case 13:Cn(function(){var r=kt(e,1);if(r!==null){var i=ke();tt(r,e,1,i)}}),gc(e,1)}};Oa=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=ke();tt(t,e,134217728,n)}gc(e,134217728)}};Yp=function(e){if(e.tag===13){var t=Yt(e),n=kt(e,t);if(n!==null){var r=ke();tt(n,e,t,r)}gc(e,t)}};Xp=function(){return V};qp=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Es=function(e,t,n){switch(t){case"input":if(ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=tl(r);if(!i)throw Error(P(90));Tp(r),ws(r,i)}}}break;case"textarea":Ip(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};Op=dc;_p=Cn;var jx={usingClientEntryPoint:!1,Events:[ki,_n,tl,Np,Ap,dc]},Sr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kx={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Up(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Xo=Wi.inject(kx),at=Wi}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(t))throw Error(P(200));return vx(e,t,null,n)};Oe.createRoot=function(e,t){if(!yc(e))throw Error(P(299));var n=!1,r="",i=bh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=mc(e,1,!1,null,null,n,!1,r,i),e[jt]=t.current,ii(e.nodeType===8?e.parentNode:e),new xc(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Up(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Cn(e)};Oe.hydrate=function(e,t,n){if(!ul(t))throw Error(P(200));return dl(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!yc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=bh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=wh(t,null,e,1,n??null,i,!1,l,s),e[jt]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new cl(t)};Oe.render=function(e,t,n){if(!ul(t))throw Error(P(200));return dl(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!ul(e))throw Error(P(40));return e._reactRootContainer?(Cn(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Oe.unstable_batchedUpdates=dc;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ul(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return dl(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function jh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jh)}catch(e){console.error(e)}}jh(),bp.exports=Oe;var kh=bp.exports,Ch,Bu=kh;Ch=Bu.createRoot,Bu.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(null,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Uu="popstate";function Cx(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:s,hash:a}=r.location;return la("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wo(i)}return Sx(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $x(){return Math.random().toString(36).substr(2,8)}function Wu(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mr(t):t,{state:n,key:t&&t.key||r||$x()})}function Wo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,s=i.history,a=Ut.Pop,c=null,d=m();d==null&&(d=0,s.replaceState(fi({},s.state,{idx:d}),""));function m(){return(s.state||{idx:null}).idx}function f(){a=Ut.Pop;let E=m(),x=E==null?null:E-d;d=E,c&&c({action:a,location:y.location,delta:x})}function g(E,x){a=Ut.Push;let p=la(y.location,E,x);d=m()+1;let h=Wu(p,d),v=y.createHref(p);try{s.pushState(h,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}l&&c&&c({action:a,location:y.location,delta:1})}function k(E,x){a=Ut.Replace;let p=la(y.location,E,x);d=m();let h=Wu(p,d),v=y.createHref(p);s.replaceState(h,"",v),l&&c&&c({action:a,location:y.location,delta:0})}function b(E){let x=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:Wo(E);return p=p.replace(/ $/,"%20"),Z(x,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,x)}let y={get action(){return a},get location(){return e(i,s)},listen(E){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Uu,f),c=E,()=>{i.removeEventListener(Uu,f),c=null}},createHref(E){return t(i,E)},createURL:b,encodeLocation(E){let x=b(E);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:k,go(E){return s.go(E)}};return y}var Vu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vu||(Vu={}));function Ex(e,t,n){return n===void 0&&(n="/"),Px(e,t,n)}function Px(e,t,n,r){let i=typeof t=="string"?mr(t):t,l=sr(i.pathname||"/",n);if(l==null)return null;let s=$h(e);Tx(s);let a=null,c=Fx(l);for(let d=0;a==null&&d<s.length;++d)a=Ox(s[d],c);return a}function $h(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,s,a)=>{let c={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=qt([r,c.relativePath]),m=n.concat(c);l.children&&l.children.length>0&&(Z(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),$h(l.children,t,m,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:Nx(d,l.index),routesMeta:m})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,s);else for(let c of Sh(l.path))i(l,s,c)}),t}function Sh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let s=Sh(r.join("/")),a=[];return a.push(...s.map(c=>c===""?l:[l,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Tx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ax(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lx=/^:[\w-]+$/,Ix=3,Rx=2,zx=1,Dx=10,Mx=-2,Hu=e=>e==="*";function Nx(e,t){let n=e.split("/"),r=n.length;return n.some(Hu)&&(r+=Mx),t&&(r+=Rx),n.filter(i=>!Hu(i)).reduce((i,l)=>i+(Lx.test(l)?Ix:l===""?zx:Dx),r)}function Ax(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ox(e,t,n){let{routesMeta:r}=e,i={},l="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,m=l==="/"?t:t.slice(l.length)||"/",f=sa({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),g=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:qt([l,f.pathname]),pathnameBase:Hx(qt([l,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(l=qt([l,f.pathnameBase]))}return s}function sa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_x(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],s=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,m,f)=>{let{paramName:g,isOptional:k}=m;if(g==="*"){let y=a[f]||"";s=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const b=a[f];return k&&!b?d[g]=void 0:d[g]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:s,pattern:e}}function _x(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Fx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ux=e=>Bx.test(e);function Wx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mr(e):e,l;if(n)if(Ux(n))l=n;else{if(n.includes("//")){let s=n;n=Eh(n),vc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=Qu(n.substring(1),"/"):l=Qu(n,t)}else l=t;return{pathname:l,search:Qx(r),hash:Gx(i)}}function Qu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wc(e,t){let n=Vx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mr(e):(i=fi({},e),Z(!i.pathname||!i.pathname.includes("?"),ql("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),ql("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),ql("#","search","hash",i)));let l=e===""||i.pathname==="",s=l?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?t[f]:"/"}let c=Wx(i,a),d=s&&s!=="/"&&s.endsWith("/"),m=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const Eh=e=>e.replace(/\/\/+/g,"/"),qt=e=>Eh(e.join("/")),Hx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ph=["post","put","patch","delete"];new Set(Ph);const Jx=["get",...Ph];new Set(Jx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(null,arguments)}const pl=w.createContext(null),Th=w.createContext(null),Et=w.createContext(null),fl=w.createContext(null),Pt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Lh=w.createContext(null);function Yx(e,t){let{relative:n}=t===void 0?{}:t;gr()||Z(!1);let{basename:r,navigator:i}=w.useContext(Et),{hash:l,pathname:s,search:a}=hl(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:qt([r,s])),i.createHref({pathname:c,search:a,hash:l})}function gr(){return w.useContext(fl)!=null}function Ke(){return gr()||Z(!1),w.useContext(fl).location}function Ih(e){w.useContext(Et).static||w.useLayoutEffect(e)}function Tt(){let{isDataRoute:e}=w.useContext(Pt);return e?u1():Xx()}function Xx(){gr()||Z(!1);let e=w.useContext(pl),{basename:t,future:n,navigator:r}=w.useContext(Et),{matches:i}=w.useContext(Pt),{pathname:l}=Ke(),s=JSON.stringify(wc(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return Ih(()=>{a.current=!0}),w.useCallback(function(d,m){if(m===void 0&&(m={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let f=bc(d,JSON.parse(s),l,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:qt([t,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[t,r,s,l,e])}function qx(){let{matches:e}=w.useContext(Pt),t=e[e.length-1];return t?t.params:{}}function hl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Et),{matches:i}=w.useContext(Pt),{pathname:l}=Ke(),s=JSON.stringify(wc(i,r.v7_relativeSplatPath));return w.useMemo(()=>bc(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function Zx(e,t){return e1(e,t)}function e1(e,t,n,r){gr()||Z(!1);let{navigator:i}=w.useContext(Et),{matches:l}=w.useContext(Pt),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=Ke(),m;if(t){var f;let E=typeof t=="string"?mr(t):t;c==="/"||(f=E.pathname)!=null&&f.startsWith(c)||Z(!1),m=E}else m=d;let g=m.pathname||"/",k=g;if(c!=="/"){let E=c.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(E.length).join("/")}let b=Ex(e,{pathname:k}),y=o1(b&&b.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:qt([c,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:qt([c,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,n,r);return t&&y?w.createElement(fl.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ut.Pop}},y):y}function t1(){let e=c1(),t=Kx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const n1=w.createElement(t1,null);class r1 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Pt.Provider,{value:this.props.routeContext},w.createElement(Lh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i1(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(pl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Pt.Provider,{value:t},r)}function o1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);m>=0||Z(!1),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<s.length;m++){let f=s[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=m),f.route.id){let{loaderData:g,errors:k}=n,b=f.route.loader&&g[f.route.id]===void 0&&(!k||k[f.route.id]===void 0);if(f.route.lazy||b){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((m,f,g)=>{let k,b=!1,y=null,E=null;n&&(k=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||n1,c&&(d<0&&g===0?(d1("route-fallback"),b=!0,E=null):d===g&&(b=!0,E=f.route.hydrateFallbackElement||null)));let x=t.concat(s.slice(0,g+1)),p=()=>{let h;return k?h=y:b?h=E:f.route.Component?h=w.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,w.createElement(i1,{match:f,routeContext:{outlet:m,matches:x,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?w.createElement(r1,{location:n.location,revalidation:n.revalidation,component:y,error:k,children:p(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):p()},null)}var Rh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Rh||{}),zh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zh||{});function l1(e){let t=w.useContext(pl);return t||Z(!1),t}function s1(e){let t=w.useContext(Th);return t||Z(!1),t}function a1(e){let t=w.useContext(Pt);return t||Z(!1),t}function Dh(e){let t=a1(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function c1(){var e;let t=w.useContext(Lh),n=s1(),r=Dh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function u1(){let{router:e}=l1(Rh.UseNavigateStable),t=Dh(zh.UseNavigateStable),n=w.useRef(!1);return Ih(()=>{n.current=!0}),w.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,hi({fromRouteId:t},l)))},[e,t])}const Gu={};function d1(e,t,n){Gu[e]||(Gu[e]=!0)}function p1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ku(e){let{to:t,replace:n,state:r,relative:i}=e;gr()||Z(!1);let{future:l,static:s}=w.useContext(Et),{matches:a}=w.useContext(Pt),{pathname:c}=Ke(),d=Tt(),m=bc(t,wc(a,l.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(m);return w.useEffect(()=>d(JSON.parse(f),{replace:n,state:r,relative:i}),[d,f,i,n,r]),null}function zn(e){Z(!1)}function f1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:l,static:s=!1,future:a}=e;gr()&&Z(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:l,static:s,future:hi({v7_relativeSplatPath:!1},a)}),[c,a,l,s]);typeof r=="string"&&(r=mr(r));let{pathname:m="/",search:f="",hash:g="",state:k=null,key:b="default"}=r,y=w.useMemo(()=>{let E=sr(m,c);return E==null?null:{location:{pathname:E,search:f,hash:g,state:k,key:b},navigationType:i}},[c,m,f,g,k,b,i]);return y==null?null:w.createElement(Et.Provider,{value:d},w.createElement(fl.Provider,{children:n,value:y}))}function h1(e){let{children:t,location:n}=e;return Zx(aa(t),n)}new Promise(()=>{});function aa(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let l=[...t,i];if(r.type===w.Fragment){n.push.apply(n,aa(r.props.children,l));return}r.type!==zn&&Z(!1),!r.props.index||!r.props.children||Z(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=aa(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(null,arguments)}function Mh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function m1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function g1(e,t){return e.button===0&&(!t||t==="_self")&&!m1(e)}function ca(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function x1(e,t){let n=ca(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(l=>{n.append(i,l)})}),n}const y1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],v1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],w1="6";try{window.__reactRouterVersion=w1}catch{}const b1=w.createContext({isTransitioning:!1}),j1="startTransition",Ju=fm[j1];function k1(e){let{basename:t,children:n,future:r,window:i}=e,l=w.useRef();l.current==null&&(l.current=Cx({window:i,v5Compat:!0}));let s=l.current,[a,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},m=w.useCallback(f=>{d&&Ju?Ju(()=>c(f)):c(f)},[c,d]);return w.useLayoutEffect(()=>s.listen(m),[s,m]),w.useEffect(()=>p1(r),[r]),w.createElement(f1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const C1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jc=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:s,state:a,target:c,to:d,preventScrollReset:m,viewTransition:f}=t,g=Mh(t,y1),{basename:k}=w.useContext(Et),b,y=!1;if(typeof d=="string"&&$1.test(d)&&(b=d,C1))try{let h=new URL(window.location.href),v=d.startsWith("//")?new URL(h.protocol+d):new URL(d),S=sr(v.pathname,k);v.origin===h.origin&&S!=null?d=S+v.search+v.hash:y=!0}catch{}let E=Yx(d,{relative:i}),x=E1(d,{replace:s,state:a,target:c,preventScrollReset:m,relative:i,viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||x(h)}return w.createElement("a",Vo({},g,{href:b||E,onClick:y||l?r:p,ref:n,target:c}))}),Nh=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:s=!1,style:a,to:c,viewTransition:d,children:m}=t,f=Mh(t,v1),g=hl(c,{relative:f.relative}),k=Ke(),b=w.useContext(Th),{navigator:y,basename:E}=w.useContext(Et),x=b!=null&&P1(g)&&d===!0,p=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,h=k.pathname,v=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(h=h.toLowerCase(),v=v?v.toLowerCase():null,p=p.toLowerCase()),v&&E&&(v=sr(v,E)||v);const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let C=h===p||!s&&h.startsWith(p)&&h.charAt(S)==="/",$=v!=null&&(v===p||!s&&v.startsWith(p)&&v.charAt(p.length)==="/"),j={isActive:C,isPending:$,isTransitioning:x},T=C?r:void 0,L;typeof l=="function"?L=l(j):L=[l,C?"active":null,$?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let O=typeof a=="function"?a(j):a;return w.createElement(jc,Vo({},f,{"aria-current":T,className:L,ref:n,style:O,to:c,viewTransition:d}),typeof m=="function"?m(j):m)});var ua;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ua||(ua={}));var Yu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yu||(Yu={}));function S1(e){let t=w.useContext(pl);return t||Z(!1),t}function E1(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:s,viewTransition:a}=t===void 0?{}:t,c=Tt(),d=Ke(),m=hl(e,{relative:s});return w.useCallback(f=>{if(g1(f,n)){f.preventDefault();let g=r!==void 0?r:Wo(d)===Wo(m);c(e,{replace:g,state:i,preventScrollReset:l,relative:s,viewTransition:a})}},[d,c,m,r,i,n,e,l,s,a])}function Ah(e){let t=w.useRef(ca(e)),n=w.useRef(!1),r=Ke(),i=w.useMemo(()=>x1(r.search,n.current?null:t.current),[r.search]),l=Tt(),s=w.useCallback((a,c)=>{const d=ca(typeof a=="function"?a(i):a);n.current=!0,l("?"+d,c)},[l,i]);return[i,s]}function P1(e,t){t===void 0&&(t={});let n=w.useContext(b1);n==null&&Z(!1);let{basename:r}=S1(ua.useViewTransitionState),i=hl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=sr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=sr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sa(i.pathname,s)!=null||sa(i.pathname,l)!=null}var K="-ms-",Gr="-moz-",W="-webkit-",Oh="comm",ml="rule",kc="decl",T1="@import",L1="@namespace",_h="@keyframes",I1="@layer",Fh=Math.abs,Cc=String.fromCharCode,da=Object.assign;function R1(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Bh(e){return e.trim()}function ht(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function po(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function $n(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Uh(e){return e.length}function Dr(e,t){return t.push(e),e}function z1(e,t){return e.map(t).join("")}function Xu(e,t){return e.filter(function(n){return!ht(n,t)})}var gl=1,ar=1,Wh=0,Ge=0,le=0,xr="";function xl(e,t,n,r,i,l,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:gl,column:ar,length:s,return:"",siblings:a}}function Mt(e,t){return da(xl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ln(e){for(;e.root;)e=Mt(e.root,{children:[e]});Dr(e,e.siblings)}function D1(){return le}function M1(){return le=Ge>0?ue(xr,--Ge):0,ar--,le===10&&(ar=1,gl--),le}function nt(){return le=Ge<Wh?ue(xr,Ge++):0,ar++,le===10&&(ar=1,gl++),le}function Wt(){return ue(xr,Ge)}function fo(){return Ge}function yl(e,t){return $n(xr,e,t)}function mi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N1(e){return gl=ar=1,Wh=qe(xr=e),Ge=0,[]}function A1(e){return xr="",e}function Zl(e){return Bh(yl(Ge-1,pa(e===91?e+2:e===40?e+1:e)))}function O1(e){for(;(le=Wt())&&le<33;)nt();return mi(e)>2||mi(le)>3?"":" "}function _1(e,t){for(;--t&&nt()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return yl(e,fo()+(t<6&&Wt()==32&&nt()==32))}function pa(e){for(;nt();)switch(le){case e:return Ge;case 34:case 39:e!==34&&e!==39&&pa(le);break;case 40:e===41&&pa(e);break;case 92:nt();break}return Ge}function F1(e,t){for(;nt()&&e+le!==57;)if(e+le===84&&Wt()===47)break;return"/*"+yl(t,Ge-1)+"*"+Cc(e===47?e:nt())}function B1(e){for(;!mi(Wt());)nt();return yl(e,Ge)}function U1(e){return A1(ho("",null,null,null,[""],e=N1(e),0,[0],e))}function ho(e,t,n,r,i,l,s,a,c){for(var d=0,m=0,f=s,g=0,k=0,b=0,y=1,E=1,x=1,p=0,h="",v=i,S=l,C=r,$=h;E;)switch(b=p,p=nt()){case 40:if(b!=108&&ue($,f-1)==58){po($+=A(Zl(p),"&","&\f"),"&\f",Fh(d?a[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:$+=Zl(p);break;case 9:case 10:case 13:case 32:$+=O1(b);break;case 92:$+=_1(fo()-1,7);continue;case 47:switch(Wt()){case 42:case 47:Dr(W1(F1(nt(),fo()),t,n,c),c),(mi(b||1)==5||mi(Wt()||1)==5)&&qe($)&&$n($,-1,void 0)!==" "&&($+=" ");break;default:$+="/"}break;case 123*y:a[d++]=qe($)*x;case 125*y:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+m:x==-1&&($=A($,/\f/g,"")),k>0&&(qe($)-f||y===0&&b===47)&&Dr(k>32?Zu($+";",r,n,f-1,c):Zu(A($," ","")+";",r,n,f-2,c),c);break;case 59:$+=";";default:if(Dr(C=qu($,t,n,d,m,i,a,h,v=[],S=[],f,l),l),p===123)if(m===0)ho($,t,C,C,v,l,f,a,S);else{switch(g){case 99:if(ue($,3)===110)break;case 108:if(ue($,2)===97)break;default:m=0;case 100:case 109:case 115:}m?ho(e,C,C,r&&Dr(qu(e,C,C,0,0,i,a,h,i,v=[],f,S),S),i,S,f,a,r?v:S):ho($,C,C,C,[""],S,0,a,S)}}d=m=k=0,y=x=1,h=$="",f=s;break;case 58:f=1+qe($),k=b;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&M1()==125)continue}switch($+=Cc(p),p*y){case 38:x=m>0?1:($+="\f",-1);break;case 44:a[d++]=(qe($)-1)*x,x=1;break;case 64:Wt()===45&&($+=Zl(nt())),g=Wt(),m=f=qe(h=$+=B1(fo())),p++;break;case 45:b===45&&qe($)==2&&(y=0)}}return l}function qu(e,t,n,r,i,l,s,a,c,d,m,f){for(var g=i-1,k=i===0?l:[""],b=Uh(k),y=0,E=0,x=0;y<r;++y)for(var p=0,h=$n(e,g+1,g=Fh(E=s[y])),v=e;p<b;++p)(v=Bh(E>0?k[p]+" "+h:A(h,/&\f/g,k[p])))&&(c[x++]=v);return xl(e,t,n,i===0?ml:a,c,d,m,f)}function W1(e,t,n,r){return xl(e,t,n,Oh,Cc(D1()),$n(e,2,-2),0,r)}function Zu(e,t,n,r,i){return xl(e,t,n,kc,$n(e,0,r),$n(e,r+1,-1),r,i)}function Vh(e,t,n){switch(R1(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return W+e+e;case 4855:return W+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Gr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Gr+e+K+e+e;case 5936:switch(ue(e,t+11)){case 114:return W+e+K+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+K+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+K+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+K+e+e;case 6165:return W+e+K+"flex-"+e+e;case 5187:return W+e+A(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return W+e+K+"flex-item-"+A(e,/flex-|-self/g,"")+(ht(e,/flex-|baseline/)?"":K+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return W+e+K+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+K+A(e,"shrink","negative")+e;case 5292:return W+e+K+A(e,"basis","preferred-size")+e;case 6060:return W+"box-"+A(e,"-grow","")+W+e+K+A(e,"grow","positive")+e;case 4554:return W+A(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+K+"flex-pack:$3"),/space-between/,"justify")+W+e+e;case 4200:if(!ht(e,/flex-|baseline/))return K+"grid-column-align"+$n(e,t)+e;break;case 2592:case 3360:return K+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ht(r.props,/grid-\w+-end/)})?~po(e+(n=n[t].value),"span",0)?e:K+A(e,"-start","")+e+K+"grid-row-span:"+(~po(n,"span",0)?ht(n,/\d+/):+ht(n,/\d+/)-+ht(e,/\d+/))+";":K+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ht(r.props,/grid-\w+-start/)})?e:K+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Gr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~po(e,"stretch",0)?Vh(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,s,a,c,d){return K+i+":"+l+d+(s?K+i+"-span:"+(a?c:+c-+l)+d:"")+e});case 4949:if(ue(e,t+6)===121)return A(e,":",":"+W)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(ue(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+K+"$2box$3")+e;case 100:return A(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Ho(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function V1(e,t,n,r){switch(e.type){case I1:if(e.children.length)break;case T1:case L1:case kc:return e.return=e.return||e.value;case Oh:return"";case _h:return e.return=e.value+"{"+Ho(e.children,r)+"}";case ml:if(!qe(e.value=e.props.join(",")))return""}return qe(n=Ho(e.children,r))?e.return=e.value+"{"+n+"}":""}function H1(e){var t=Uh(e);return function(n,r,i,l){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,l)||"";return s}}function Q1(e){return function(t){t.root||(t=t.return)&&e(t)}}function G1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kc:e.return=Vh(e.value,e.length,n);return;case _h:return Ho([Mt(e,{value:A(e.value,"@","@"+W)})],r);case ml:if(e.length)return z1(n=e.props,function(i){switch(ht(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ln(Mt(e,{props:[A(i,/:(read-\w+)/,":"+Gr+"$1")]})),Ln(Mt(e,{props:[i]})),da(e,{props:Xu(n,r)});break;case"::placeholder":Ln(Mt(e,{props:[A(i,/:(plac\w+)/,":"+W+"input-$1")]})),Ln(Mt(e,{props:[A(i,/:(plac\w+)/,":"+Gr+"$1")]})),Ln(Mt(e,{props:[A(i,/:(plac\w+)/,K+"input-$1")]})),Ln(Mt(e,{props:[i]})),da(e,{props:Xu(n,r)});break}return""})}}var Zn={},es,ts;const cr=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",Hh="active",Qh="data-styled-version",vl="6.4.2",$c=`/*!sc*/
`,Kr=typeof window<"u"&&typeof document<"u";function ed(e){if(typeof process<"u"&&Zn!==void 0){const t=Zn[e];if(t!==void 0&&t!=="")return t!=="false"}}const K1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(ts=(es=ed("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&es!==void 0?es:ed("SC_DISABLE_SPEEDY"))!==null&&ts!==void 0?ts:typeof process<"u"&&Zn!==void 0&&!1),J1="sc-keyframes-",Y1={};function ur(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let mo=new Map,Qo=new Map,go=1;const Vi=e=>{if(mo.has(e))return mo.get(e);for(;Qo.has(go);)go++;const t=go++;return mo.set(e,t),Qo.set(t,e),t},X1=e=>Qo.get(e),q1=(e,t)=>{go=t+1,mo.set(e,t),Qo.set(t,e)},Sc=Object.freeze([]),dr=Object.freeze({});function Gh(e,t,n=dr){return e.theme!==n.theme&&e.theme||t||n.theme}const Z1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ey=/(^-|-$)/g;function Kh(e){return e.replace(Z1,"-").replace(ey,"")}const ty=/(a)(d)/gi,td=e=>String.fromCharCode(e+(e>25?39:97));function Jh(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=td(t%52)+n;return(td(t%52)+n).replace(ty,"$1-$2")}const fa=5381,vn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Yh=e=>vn(fa,e);function Xh(e){return Jh(Yh(e)>>>0)}function ny(e){return e.displayName||e.name||"Component"}function ha(e){return typeof e=="string"&&!0}function ry(e){return ha(e)?`styled.${e}`:`Styled(${ny(e)})`}const qh=Symbol.for("react.memo"),iy=Symbol.for("react.forward_ref"),oy={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ly={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sy={[iy]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[qh]:Zh};function nd(e){return("type"in(t=e)&&t.type.$$typeof)===qh?Zh:"$$typeof"in e?sy[e.$$typeof]:oy;var t}const ay=Object.defineProperty,cy=Object.getOwnPropertyNames,uy=Object.getOwnPropertySymbols,dy=Object.getOwnPropertyDescriptor,py=Object.getPrototypeOf,fy=Object.prototype;function e0(e,t,n){if(typeof t!="string"){const r=py(t);r&&r!==fy&&e0(e,r,n);const i=cy(t).concat(uy(t)),l=nd(e),s=nd(t);for(let a=0;a<i.length;++a){const c=i[a];if(!(c in ly||n&&n[c]||s&&c in s||l&&c in l)){const d=dy(t,c);try{ay(e,c,d)}catch{}}}}return e}function yr(e){return typeof e=="function"}const hy=Symbol.for("react.forward_ref");function Ec(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===hy&&"styledComponentId"in e}function Mr(e,t){return e&&t?e+" "+t:e||t||""}function ma(e,t){return e.join("")}function gi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ga(e,t,n=!1){if(!n&&!gi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ga(e[r],t[r]);else if(gi(t))for(const r in t)e[r]=ga(e[r],t[r]);return e}function t0(e,t){Object.defineProperty(e,"toString",{value:t})}const my=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const i=this.groupSizes,l=i.length;let s=l;for(;e>=s;)if(s<<=1,s<0)throw ur(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(let a=l;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,l=t.length;i<l;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let l=r;l<i;l++)t+=this.tag.getRule(l)+$c;return t}},gy=`style[${cr}][${Qh}="${vl}"]`,xy=new RegExp(`^${cr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),rd=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,xa=e=>{if(!e)return document;if(rd(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(rd(t))return t}return document},yy=(e,t,n)=>{const r=n.split(",");let i;for(let l=0,s=r.length;l<s;l++)(i=r[l])&&e.registerName(t,i)},vy=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split($c),i=[];for(let l=0,s=r.length;l<s;l++){const a=r[l].trim();if(!a)continue;const c=a.match(xy);if(c){const d=0|parseInt(c[1],10),m=c[2];d!==0&&(q1(m,d),yy(e,m,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(a)}},ns=e=>{const t=xa(e.options.target).querySelectorAll(gy);for(let n=0,r=t.length;n<r;n++){const i=t[n];i&&i.getAttribute(cr)!==Hh&&(vy(e,i),i.parentNode&&i.parentNode.removeChild(i))}};let Er=!1;function wy(){if(Er!==!1)return Er;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Er=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Er=t.getAttribute("content")||void 0}return Er=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const n0=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),l=(c=>{const d=Array.from(c.querySelectorAll(`style[${cr}]`));return d[d.length-1]})(r),s=l!==void 0?l.nextSibling:null;i.setAttribute(cr,Hh),i.setAttribute(Qh,vl);const a=t||wy();return a&&i.setAttribute("nonce",a),r.insertBefore(i,s),i},by=class{constructor(e,t){this.element=n0(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,s=i.length;l<s;l++){const a=i[l];if(a.ownerNode===n)return a}throw ur(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},jy=class{constructor(e,t){this.element=n0(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let id=Kr;const ky={isServer:!Kr,useCSSOMInjection:!K1};class $i{static registerId(t){return Vi(t)}constructor(t=dr,n={},r){this.options=Object.assign(Object.assign({},ky),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Kr&&id&&(id=!1,ns(this)),t0(this,()=>(i=>{const l=i.getTag(),{length:s}=l;let a="";for(let c=0;c<s;c++){const d=X1(c);if(d===void 0)continue;const m=i.names.get(d);if(m===void 0||!m.size)continue;const f=l.getGroup(c);if(f.length===0)continue;const g=cr+".g"+c+'[id="'+d+'"]';let k="";for(const b of m)b.length>0&&(k+=b+",");a+=f+g+'{content:"'+k+'"}'+$c}return a})(this))}rehydrate(){!this.server&&Kr&&ns(this)}reconstructWithOptions(t,n=!0){const r=new $i(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Kr&&t.target!==this.options.target&&xa(this.options.target)!==xa(t.target)&&ns(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:i})=>n?new by(r,i):new jy(r,i))(this.options),new my(t)));var t}hasNameForId(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i}registerName(t,n){Vi(t),t.startsWith(J1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vi(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Vi(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const r0=new WeakSet,Cy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $y(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Cy||e.startsWith("--")?String(t).trim():t+"px"}const fn=47;function od(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const Sy=Symbol.for("sc-keyframes");function Ey(e){return typeof e=="object"&&e!==null&&Sy in e}function i0(e){return yr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const o0=e=>e==null||e===!1||e==="",Py=Symbol.for("react.client.reference");function ld(e){return e.$$typeof===Py}function l0(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!o0(r)&&(Array.isArray(r)&&r0.has(r)||yr(r)?t.push(od(n)+":",r,";"):gi(r)?(t.push(n+" {"),l0(r,t),t.push("}")):t.push(od(n)+": "+$y(n,r)+";"))}}function Zt(e,t,n,r,i=[]){if(o0(e))return i;const l=typeof e;if(l==="string")return i.push(e),i;if(l==="function"){if(ld(e))return i;if(i0(e)&&t){const s=e(t);return Zt(s,t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Zt(e[s],t,n,r,i);return i}return Ec(e)?(i.push(`.${e.styledComponentId}`),i):Ey(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):ld(e)?i:gi(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(l0(e,i),i):(i.push(e.toString()),i)}const Ty=Yh(vl);class Ly{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=vn(Ty,n),this.baseStyle=r,$i.registerId(n)}generateAndInjectStyles(t,n,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")l+=a;else if(a)if(i0(a)){const c=a(t);typeof c=="string"?l+=c:c!=null&&c!==!1&&(l+=ma(Zt(c,t,n,r)))}else l+=ma(Zt(a,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+l:l;let a=this.dynamicNameCache.get(s);if(!a){if(a=Jh(vn(vn(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const c=r(l,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,c)}i=Mr(i,a)}}return i}}const Iy=/&/g;function s0(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function rs(e){const t=e.length;let n="",r=0,i=0,l=0,s=!1,a=!1;for(let c=0;c<t;c++){const d=e.charCodeAt(c);if(l!==0||s||d!==fn||e.charCodeAt(c+1)!==42)if(s)d===42&&e.charCodeAt(c+1)===fn&&(s=!1,c++);else if(d!==34&&d!==39||s0(e,c)){if(l===0)if(d===123)i++;else if(d===125){if(i--,i<0){a=!0;let m=c+1;for(;m<t;){const f=e.charCodeAt(m);if(f===59||f===10)break;m++}m<t&&e.charCodeAt(m)===59&&m++,i=0,c=m-1,r=m;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else d===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===0?l=d:l===d&&(l=0);else s=!0,c++}return a||i!==0||l!==0?(r<t&&i===0&&l===0&&(n+=e.substring(r)),n):e}function a0(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const l=e[i];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const s=l.props,a=[];for(let c=0;c<s.length;c++)a[c]=n+s[c];l.props=a}Array.isArray(l.children)&&l.type!=="@keyframes"&&a0(l.children,t)}return e}function Ry({options:e=dr,plugins:t=Sc}=dr){let n,r,i;const l=(g,k,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${n}`:g,s=t.slice();s.push(g=>{g.type===ml&&g.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(Iy,r).replace(i,l))}),e.prefix&&s.push(G1),s.push(V1);let a=[];const c=H1(s.concat(Q1(g=>a.push(g)))),d=(g,k="",b="",y="&")=>{n=y,r=k,i=void 0;const E=function(p){const h=p.indexOf("//")!==-1,v=p.indexOf("}")!==-1;if(!h&&!v)return p;if(!h)return rs(p);const S=p.length;let C="",$=0,j=0,T=0,L=0,O=0,te=!1;for(;j<S;){const B=p.charCodeAt(j);if(B!==34&&B!==39||s0(p,j))if(T===0)if(B===fn&&j+1<S&&p.charCodeAt(j+1)===42){for(j+=2;j+1<S&&(p.charCodeAt(j)!==42||p.charCodeAt(j+1)!==fn);)j++;j+=2}else if(B!==40)if(B!==41)if(L>0)j++;else if(B===42&&j+1<S&&p.charCodeAt(j+1)===fn)C+=p.substring($,j),j+=2,$=j,te=!0;else if(B===fn&&j+1<S&&p.charCodeAt(j+1)===fn){for(C+=p.substring($,j);j<S&&p.charCodeAt(j)!==10;)j++;$=j,te=!0}else B===123?O++:B===125&&O--,j++;else L>0&&L--,j++;else L++,j++;else j++;else T===0?T=B:T===B&&(T=0),j++}return te?($<S&&(C+=p.substring($)),O===0?C:rs(C)):O===0?p:rs(p)}(g);let x=U1(b||k?b+" "+k+" { "+E+" }":E);return e.namespace&&(x=a0(x,e.namespace)),a=[],Ho(x,c),a},m=e;let f=fa;for(let g=0;g<t.length;g++)t[g].name||ur(15),f=vn(f,t[g].name);return m!=null&&m.namespace&&(f=vn(f,m.namespace)),m!=null&&m.prefix&&(f=vn(f,"p")),d.hash=f!==fa?f.toString():"",d}const zy=new $i,Dy=Ry(),c0=ve.createContext({shouldForwardProp:void 0,styleSheet:zy,stylis:Dy,stylisPlugins:void 0});c0.Consumer;function u0(){return ve.useContext(c0)}const xi=ve.createContext(void 0);xi.Consumer;function My(e){const t=ve.useContext(xi),n=ve.useMemo(()=>function(r,i){if(!r)throw ur(14);if(yr(r))return r(i);if(Array.isArray(r)||typeof r!="object")throw ur(8);return i?Object.assign(Object.assign({},i),r):r}(e.theme,t),[e.theme,t]);return e.children?ve.createElement(xi.Provider,{value:n},e.children):null}const sd=Object.prototype.hasOwnProperty,is={};function Ny(e,t){const n=typeof e!="string"?"sc":Kh(e);is[n]=(is[n]||0)+1;const r=n+"-"+Xh(vl+n+is[n]);return t?t+"-"+r:r}function Ay(e,t,n){const r=Ec(e),i=e,l=!ha(e),{attrs:s=Sc,componentId:a=Ny(t.displayName,t.parentComponentId),displayName:c=ry(e)}=t,d=t.displayName&&t.componentId?Kh(t.displayName)+"-"+t.componentId:t.componentId||a,m=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:f}=t;if(r&&i.shouldForwardProp){const y=i.shouldForwardProp;if(t.shouldForwardProp){const E=t.shouldForwardProp;f=(x,p)=>y(x,p)&&E(x,p)}else f=y}const g=new Ly(n,d,r?i.componentStyle:void 0);function k(y,E){return function(x,p,h){const{attrs:v,componentStyle:S,defaultProps:C,foldedComponentIds:$,styledComponentId:j,target:T}=x,L=ve.useContext(xi),O=u0(),te=x.shouldForwardProp||O.shouldForwardProp,B=Gh(p,L,C)||dr;let Se,sn;{const z=ve.useRef(null),D=z.current;if(D!==null&&D[1]===B&&D[2]===O.styleSheet&&D[3]===O.stylis&&D[7]===S&&function(H,U,ae){const ne=H,oe=U;let ze=0;for(const Fe in oe)if(sd.call(oe,Fe)&&(ze++,ne[Fe]!==oe[Fe]))return!1;return ze===ae}(D[0],p,D[4]))Se=D[5],sn=D[6];else{Se=function(U,ae,ne){const oe=Object.assign(Object.assign({},ae),{className:void 0,theme:ne}),ze=U.length>1;for(let Fe=0;Fe<U.length;Fe++){const $l=U[Fe],Si=yr($l)?$l(ze?Object.assign({},oe):oe):$l;for(const It in Si)It==="className"?oe.className=Mr(oe.className,Si[It]):It==="style"?oe.style=Object.assign(Object.assign({},oe.style),Si[It]):It in ae&&ae[It]===void 0||(oe[It]=Si[It])}return"className"in ae&&typeof ae.className=="string"&&(oe.className=Mr(oe.className,ae.className)),oe}(v,p,B),sn=function(U,ae,ne,oe){return U.generateAndInjectStyles(ae,ne,oe)}(S,Se,O.styleSheet,O.stylis);let H=0;for(const U in p)sd.call(p,U)&&H++;z.current=[p,B,O.styleSheet,O.stylis,H,Se,sn,S]}}const Lt=Se.as||T,an=function(z,D,H,U){const ae={};for(const ne in z)z[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&z.theme===H||(ne==="forwardedAs"?ae.as=z.forwardedAs:U&&!U(ne,D)||(ae[ne]=z[ne]));return ae}(Se,Lt,B,te);let I=Mr($,j);return sn&&(I+=" "+sn),Se.className&&(I+=" "+Se.className),an[ha(Lt)&&Lt.includes("-")?"class":"className"]=I,h&&(an.ref=h),w.createElement(Lt,an)}(b,y,E)}k.displayName=c;let b=ve.forwardRef(k);return b.attrs=m,b.componentStyle=g,b.displayName=c,b.shouldForwardProp=f,b.foldedComponentIds=r?Mr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=d,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?function(E,...x){for(const p of x)ga(E,p,!0);return E}({},i.defaultProps,y):y}}),t0(b,()=>`.${b.styledComponentId}`),l&&e0(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var Oy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function ad(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const cd=e=>(r0.add(e),e);function d0(e,...t){if(yr(e)||gi(e))return cd(Zt(ad(Sc,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Zt(n):cd(Zt(ad(n,t)))}function ya(e,t,n=dr){if(!t)throw ur(1,t);const r=(i,...l)=>e(t,n,d0(i,...l));return r.attrs=i=>ya(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)})),r.withConfig=i=>ya(e,t,Object.assign(Object.assign({},n),i)),r}const p0=e=>ya(Ay,e),u=p0;Oy.forEach(e=>{u[e]=p0(e)});class _y{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let i=0;i<r.length;i+=1){const l=r[i];if(yr(l)&&!Ec(l))return!1}return!0}(t),$i.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,i){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,i);else{const a=this.computeRules(t,n,r,i);r.insertRules(l,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,i),!r.server&&s){const a=s.rules,c=this.instanceRules.get(t).rules;if(a.length===c.length){let d=!0;for(let m=0;m<a.length;m++)if(a[m]!==c[m]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,n,r,i){const l=ma(Zt(this.rules,n,r,i)),s={name:this.componentId+t,rules:i(l,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function Fy(e,...t){const n=d0(e,...t),r=`sc-global-${Xh(JSON.stringify(n))}`,i=new _y(n,r),l=a=>{const c=u0(),d=ve.useContext(xi);let m;{const f=ve.useRef(null);f.current===null&&(f.current=c.styleSheet.allocateGSInstance(r)),m=f.current}c.styleSheet.server&&s(m,a,c.styleSheet,d,c.stylis);{const f=i.isStatic?[m,c.styleSheet,i]:[m,a,c.styleSheet,d,c.stylis,i],g=ve.useRef(i);ve.useLayoutEffect(()=>{c.styleSheet.server||(g.current!==i&&(c.styleSheet.clearRules(r),g.current=i),s(m,a,c.styleSheet,d,c.stylis))},f),ve.useLayoutEffect(()=>()=>{c.styleSheet.server||i.removeStyles(m,c.styleSheet)},[m,c.styleSheet,i])}return c.styleSheet.server&&i.instanceRules.delete(m),null};function s(a,c,d,m,f){if(i.isStatic)i.renderStyles(a,Y1,d,f);else{const g=Object.assign(Object.assign({},c),{theme:Gh(c,m,l.defaultProps)});i.renderStyles(a,g,d,f)}}return ve.memo(l)}const By={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},ud=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),o.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),o.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),o.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),Uy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Wy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),o.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Vy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),o.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),o.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),o.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Hy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Qy=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Gy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ky=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Jy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),o.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),o.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),f0=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),xo=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Pr=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Yy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),o.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),Xy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),Pc=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),h0=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),yi=({size:e=16,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),dd=({size:e=16,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),vt=({size:e=14,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),wl=({size:e=14,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),va=({size:e=16,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),qy=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),o.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Go=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),o.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),Zy=({size:e=32,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),o.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),ev=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),o.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),o.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),o.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),tv=({size:e=32,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),o.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),o.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),pd=({size:e=16,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ko=({size:e=16,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),o.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),o.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),nv=({size:e=16,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),rv=({size:e=16,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),fd=({size:e=16,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),o.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),m0=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),o.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),o.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),iv=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M2 6l8-4 8 4-8 4-8-4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 10l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 14l8 4 8-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),ov=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),o.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),Tc=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Lc=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M11 4h5v5M16 4l-8 8M8 6H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),lv=({size:e=20,color:t="currentColor"})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 3V4z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})}),vi=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),o.jsx("circle",{cx:"10",cy:"10",r:"3.5",stroke:t,strokeWidth:"1.5"}),o.jsx("path",{d:"M7.53 7.53 4.05 4.05M12.47 12.47l3.48 3.48M12.47 7.53l3.48-3.48M7.53 12.47l-3.48 3.48",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),sv=({size:e=20,color:t="currentColor"})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"5",y:"5",width:"10",height:"10",rx:"1",stroke:t,strokeWidth:"1.5"}),o.jsx("rect",{x:"7.5",y:"7.5",width:"5",height:"5",rx:"0.5",stroke:t,strokeWidth:"1.5"}),o.jsx("path",{d:"M8 2v3M12 2v3M8 15v3M12 15v3M2 8h3M2 12h3M15 8h3M15 12h3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]});function Sn(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return o.jsx(ud,{...r});case"settings":return o.jsx(Uy,{...r});case"shield":return o.jsx(Wy,{...r});case"hierarchy":return o.jsx(Vy,{...r});case"cycle":return o.jsx(Hy,{...r});case"code":return o.jsx(Qy,{...r});case"globe":return o.jsx(Gy,{...r});case"document":return o.jsx(Ky,{...r});case"mobile":return o.jsx(Jy,{...r});case"sparkle":return o.jsx(f0,{...r});case"envelope":return o.jsx(xo,{...r});case"key":return o.jsx(qy,{...r});case"atom":return o.jsx(ev,{...r});case"chip":return o.jsx(sv,{...r});case"layers":return o.jsx(iv,{...r});default:return o.jsx(ud,{...r})}}const g0=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],x0=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],In=e=>[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],pn={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"Inventory",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"Automation",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"Integrations",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"Release security",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"Signing",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"Integrations",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"Manage CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"Revocation & validation",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"Configuration",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:In("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:In("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:In("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:In("device-trust")},"iot-trust":{id:"iot-trust",label:"IoT Trust",route:"/iot-trust",ariaLabel:"IoT Trust navigation",sections:In("iot-trust")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:In("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing and subscriptions",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]},{title:"Ecommerce billing",isSelfService:!0,isNavParent:!0,defaultExpanded:!0,items:[{label:"Receipts and invoices",route:"/settings/billing/receipts"},{label:"Payment details",route:"/settings/billing/payment-details"}]},{title:"DigiCert products",isNavParent:!0,defaultExpanded:!0,items:[{label:"All products",route:"/settings/billing/all-products"},{label:"CertCentral",route:"/certcentral"},{label:"Content Trust",route:"/content-trust"},{label:"Device Trust",route:"/device-trust"},{label:"DigiCert DNS",route:"/dns"},{label:"Private CA",route:"/private-ca"},{label:"Software Trust",route:"/software-trust"},{label:"Trust Lifecycle",route:"/trust-lifecycle"},{label:"Valimail",route:"/valimail"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},av={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/iot-trust":"IoT Trust","/iot-trust/dashboard":"Dashboard","/iot-trust/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/billing/all-products":"Explore DigiCert products","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},cv=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],uv=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],dv=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],pv=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/support","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/iot-trust","/iot-trust/dashboard","/iot-trust/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/billing/all-products","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],fv=u.div`
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
`,hv=u.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,hd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
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
`;function mv({onClose:e,onSelectProduct:t,onSelectProductFromTopNav:n}){const r=Tt(),i=l=>{n?n(l.productId):t(l.productId),r(l.route),e()};return o.jsxs(fv,{role:"menu","aria-label":"Settings menu",children:[o.jsx(hv,{children:"Settings"}),o.jsx(hd,{}),cv.map(l=>o.jsx(md,{href:l.route,role:"menuitem",onClick:s=>{s.preventDefault(),i(l)},children:l.label},l.route)),o.jsx(hd,{}),uv.map(l=>o.jsx(md,{href:l.route,role:"menuitem",onClick:s=>{s.preventDefault(),i(l)},children:l.label},l.route))]})}const gv=u.div`
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
`,xv=u.div`
  padding: 4px 0;
`,yv=u.a`
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
`;function vv({onClose:e}){return o.jsx(gv,{role:"menu","aria-label":"Help menu",children:o.jsx(xv,{children:dv.map(t=>o.jsx(yv,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const wv=u.div`
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
`,bv=u.div`
  padding: 12px 16px;
`,jv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,kv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,gd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,Cv=u.div`
  padding: 4px 0;
`,xd=u.a`
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
`;function $v({onClose:e,onSelectProduct:t,onSelectProductFromTopNav:n}){const r=Tt(),i=l=>{l.preventDefault(),n?n("profile"):t("profile"),r("/profile"),e()};return o.jsxs(wv,{role:"menu","aria-label":"User profile menu",children:[o.jsxs(bv,{children:[o.jsx(jv,{children:"Deepika Chauhan"}),o.jsx(kv,{children:"deepika.chauhan@digicert.com"})]}),o.jsx(gd,{}),o.jsxs(Cv,{children:[o.jsx(xd,{href:"/profile",role:"menuitem",onClick:i,children:"My profile"}),o.jsx(gd,{}),o.jsx(xd,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const Sv=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,Ev=u.div`
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
`,Pv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Tv=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Lv=u.button`
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
`,Iv=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,Rv=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`,zv=u.button`
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
`;function Dv({open:e,onClose:t}){const n=w.useRef(null),r=w.useRef(null);return w.useEffect(()=>{var l;if(!e)return;(l=n.current)==null||l.focus();const i=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const c=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),d=c[0],m=c[c.length-1];s.shiftKey&&document.activeElement===d?(s.preventDefault(),m.focus()):!s.shiftKey&&document.activeElement===m&&(s.preventDefault(),d.focus())};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,t]),o.jsxs(o.Fragment,{children:[o.jsx(Sv,{$open:e,onClick:t,"aria-hidden":"true"}),o.jsxs(Ev,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[o.jsxs(Pv,{children:[o.jsx(Tv,{id:"cart-heading",children:"Cart"}),o.jsx(Lv,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),o.jsxs(Iv,{children:[o.jsx(Rv,{children:"Your cart is empty."}),o.jsx(zv,{onClick:t,children:"Continue shopping"})]})]})]})}const Mv=u.div`
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
`,Nv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Av=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ov=u.button`
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
`,_v=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`,Fv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Bv=u.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,Uv=u.input`
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
`,Wv=u.button`
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
`;function Vv({open:e,onClose:t}){const n=w.useRef(null);return w.useEffect(()=>{const r=i=>{i.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),o.jsxs(Mv,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[o.jsxs(Nv,{children:[o.jsx(Av,{children:"AI Assist"}),o.jsx(Ov,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),o.jsxs(_v,{children:[o.jsx(Fv,{children:"How can I help you today?"}),o.jsxs(Bv,{children:[o.jsx(Uv,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),o.jsx(Wv,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const Hv=u.header`
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
`,Qv=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Gv=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Kv=u.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,Jv=u.span`
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
`,Yv=u.span`
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
`,Xv=u.button`
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
`,qv=u.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function Zv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:i,onSelectProduct:l,onSelectProductFromTopNav:s,cartCount:a=3}){const c=n==="settings"||n==="help"||n==="profile";return o.jsxs(o.Fragment,{children:[o.jsxs(Hv,{role:"banner",children:[o.jsxs(Qv,{children:[o.jsx(Kv,{children:o.jsx(Tr,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:o.jsx(h0,{size:20})})}),o.jsxs(Jv,{"aria-label":"DigiCert ONE",children:[o.jsx("span",{className:"logo-normal",children:"digicert "}),o.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),o.jsxs(Gv,{children:[o.jsx(Hi,{children:o.jsxs(Tr,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[o.jsx(Yy,{size:20}),a>0&&o.jsx(Yv,{"aria-hidden":"true",children:a})]})}),o.jsxs(Hi,{children:[o.jsx(Tr,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:o.jsx(Pc,{size:20})}),n==="settings"&&o.jsx(mv,{onClose:i,onSelectProduct:l,onSelectProductFromTopNav:s})]}),o.jsxs(Hi,{children:[o.jsx(Tr,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:o.jsx(Xy,{size:20})}),n==="help"&&o.jsx(vv,{onClose:i})]}),o.jsx(Tr,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:o.jsx(f0,{size:20})}),o.jsxs(Hi,{children:[o.jsx(Xv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&o.jsx($v,{onClose:i,onSelectProduct:l,onSelectProductFromTopNav:s})]})]})]}),c&&o.jsx(qv,{onClick:i,"aria-hidden":"true"}),o.jsx(Dv,{open:n==="cart",onClose:i}),o.jsx(Vv,{open:n==="ai-assist",onClose:i})]})}const e2=u.nav`
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
`,yd=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,t2=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,n2=u.button`
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
`,r2=u.span`
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
`,i2=350;function vd({product:e,isActive:t,onSelect:n}){const r=Tt(),i=w.useRef(null),l=w.useRef(null),[s,a]=w.useState({visible:!1,y:0});w.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]);const c=()=>{var b;const k=(b=i.current)==null?void 0:b.getBoundingClientRect();return k?k.top+k.height/2:0},d=k=>{l.current&&(clearTimeout(l.current),l.current=null),k?a({visible:!0,y:c()}):l.current=setTimeout(()=>a({visible:!0,y:c()}),i2)},m=()=>{l.current&&(clearTimeout(l.current),l.current=null),a(k=>({...k,visible:!1}))},f=()=>{m(),n(e.id),r(e.route)},g=k=>{if(k.key==="Escape"){m();return}(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),f())};return o.jsxs(o.Fragment,{children:[o.jsx(n2,{ref:i,$active:t,onClick:f,onKeyDown:g,onMouseEnter:()=>d(!1),onMouseLeave:m,onFocus:()=>d(!0),onBlur:m,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:Sn(e.iconType,20,t?"#111827":"#6B7280")}),kh.createPortal(o.jsx(r2,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function o2({activeProductId:e,onSelectProduct:t}){return o.jsxs(e2,{"aria-label":"Product navigation",children:[o.jsx(yd,{children:g0.map(n=>o.jsx(vd,{product:n,isActive:e===n.id,onSelect:t},n.id))}),o.jsx(t2,{}),o.jsx(yd,{children:x0.map(n=>o.jsx(vd,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const l2=u.div`
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
`,s2=u.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,a2=u.div`
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
`,c2=u.div`
  flex-shrink: 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
`,u2=u.button`
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
`,d2=u.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,p2=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,f2=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,h2=u.button`
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
`,m2=u.div`
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
`,g2=u.div`
  margin-bottom: 2px;
`,x2=u.button`
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
`,y2=u.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,v2=u(Nh)`
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
`;function w2({section:e,index:t}){const[n,r]=w.useState(e.defaultExpanded??t===0),i=Ke(),l=!!e.title,s=!!e.isNavParent,a=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return o.jsxs(g2,{children:[o.jsxs(x2,{$hasTitle:l,$isNavParent:s,onClick:()=>r(c=>!c),"aria-expanded":n,"aria-controls":a,children:[o.jsx("span",{children:e.title}),n?o.jsx(wl,{size:12,color:"currentColor"}):o.jsx(vt,{size:12,color:"currentColor"})]}),o.jsx(y2,{id:a,$open:n||!l,children:e.items.map(c=>o.jsx(v2,{to:c.route,end:!0,$indent:s,"aria-current":i.pathname===c.route?"page":void 0,children:c.label},c.route))})]})}function b2({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r,hideSelfService:i,previousRoute:l,onGoBack:s}){let a=pn[e];return e==="settings-billing"&&(r==="enterprise"||i)&&(a={...a,sections:a.sections.filter(c=>!c.isSelfService)}),w.useEffect(()=>{const c=d=>{d.key==="Escape"&&t&&n()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[t,n]),o.jsxs(o.Fragment,{children:[o.jsx(m2,{$visible:t,onClick:n,"aria-hidden":"true"}),o.jsxs(l2,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[o.jsx(s2,{children:o.jsxs(a2,{$open:t,children:[l&&o.jsx(c2,{children:o.jsxs(u2,{onClick:()=>s(l),"aria-label":"Back",children:[o.jsx(yi,{size:12,color:"currentColor"}),"Back"]})}),a&&o.jsxs(o.Fragment,{children:[o.jsx(d2,{children:o.jsx(p2,{children:a.label})}),o.jsx(f2,{children:o.jsx("nav",{"aria-label":"Product navigation",children:a.sections.map((c,d)=>o.jsx(w2,{section:c,index:d},c.title||d))})})]})]})}),o.jsx(h2,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:o.jsx(yi,{size:14,color:"currentColor"})})]})]})}const j2=u.div`
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
`,k2=u.div`
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
`,C2=u.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({$offset:e})=>e}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`,wd=u.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`,bd=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`,jd=u.span`
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
`,kd=u.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`,Cd=u.div`
  display: flex;
  flex-direction: column;
`,$2=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`,$d=u.button`
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
`,Sd=u.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,S2=u.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,E2=u(Nh)`
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
`;function P2({open:e,activeProductId:t,onSelectProduct:n,onClose:r,hideSelfService:i}){const l=Tt(),s=Ke(),a=w.useRef(null),c=w.useRef(null),[d,m]=w.useState("l1"),[f,g]=w.useState(null),k=w.useRef(0),b=w.useRef(0);w.useEffect(()=>{e||(m("l1"),g(null))},[e]),w.useEffect(()=>{const C=a.current;C&&(e?C.removeAttribute("inert"):C.setAttribute("inert",""))},[e]),w.useEffect(()=>{if(!e)return;const C=setTimeout(()=>{var $,j;(j=($=a.current)==null?void 0:$.querySelector("button"))==null||j.focus()},50);return()=>clearTimeout(C)},[e]),w.useEffect(()=>{if(!e)return;const C=$=>{if($.key==="Escape"){r();return}if($.key!=="Tab")return;const j=a.current;if(!j)return;const T=j.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),L=T[0],O=T[T.length-1];$.shiftKey&&document.activeElement===L?($.preventDefault(),O.focus()):!$.shiftKey&&document.activeElement===O&&($.preventDefault(),L.focus())};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[e,r]);const y=C=>{g(C),m("l2"),setTimeout(()=>{var $;($=c.current)==null||$.focus()},50)},E=()=>{m("l1")},x=C=>{!!pn[C.id]?y(C.id):(n(C.id),l(C.route),r())},p=()=>{r()},h=C=>{k.current=C.touches[0].clientX,b.current=C.touches[0].clientY},v=C=>{const $=C.changedTouches[0].clientX-k.current,j=Math.abs(C.changedTouches[0].clientY-b.current);$<-80&&j<60&&r()},S=f?pn[f]:null;return o.jsxs(o.Fragment,{children:[o.jsx(j2,{$open:e,onClick:r,"aria-hidden":"true"}),o.jsx(k2,{$open:e,ref:a,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:h,onTouchEnd:v,children:o.jsxs(C2,{$offset:d==="l1"?0:-50,children:[o.jsxs(wd,{"aria-hidden":d!=="l1",children:[o.jsxs(bd,{children:[o.jsx(jd,{children:"Navigation"}),o.jsx(os,{onClick:r,"aria-label":"Close menu",children:o.jsx(va,{size:16,color:"currentColor"})})]}),o.jsx(kd,{children:o.jsxs("nav",{"aria-label":"Product list",children:[o.jsx(Cd,{children:g0.map(C=>o.jsxs($d,{$active:t===C.id,onClick:()=>x(C),"aria-current":t===C.id?"page":void 0,"aria-haspopup":pn[C.id]?"menu":void 0,children:[Sn(C.iconType,18,t===C.id?"#1976D2":"#6B7280"),o.jsx(Sd,{children:C.label}),pn[C.id]&&o.jsx(dd,{size:14,color:t===C.id?"#1976D2":"#9CA3AF"})]},C.id))}),o.jsx($2,{}),o.jsx(Cd,{children:x0.map(C=>o.jsxs($d,{$active:t===C.id,onClick:()=>x(C),"aria-current":t===C.id?"page":void 0,"aria-haspopup":pn[C.id]?"menu":void 0,children:[Sn(C.iconType,18,t===C.id?"#1976D2":"#6B7280"),o.jsx(Sd,{children:C.label}),pn[C.id]&&o.jsx(dd,{size:14,color:t===C.id?"#1976D2":"#9CA3AF"})]},C.id))})]})})]}),o.jsxs(wd,{ref:c,"aria-hidden":d!=="l2",children:[o.jsxs(bd,{children:[o.jsx(os,{onClick:E,"aria-label":"Back to menu",children:o.jsx(yi,{size:16,color:"currentColor"})}),o.jsx(jd,{children:(S==null?void 0:S.label)??""}),o.jsx(os,{onClick:r,"aria-label":"Close menu",children:o.jsx(va,{size:16,color:"currentColor"})})]}),o.jsx(kd,{children:S&&o.jsx("nav",{"aria-label":`${S.label} navigation`,children:S.sections.filter(C=>!(i&&C.isSelfService)).map((C,$)=>o.jsxs("div",{children:[C.title&&o.jsx(S2,{children:C.title}),C.items.map(j=>o.jsx(E2,{to:j.route,end:!0,"aria-current":s.pathname===j.route?"page":void 0,onClick:p,children:j.label},j.route))]},C.title||$))})})]})]})})]})}const T2=u.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,L2=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,I2=u.div``,R2=u.h1`
  margin: 0 0 6px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.neutral900};
`,z2=u.p`
  margin: 0;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral600};
`,D2=u.button`
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
`,M2=u.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,N2=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,A2=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px 24px;
`,O2=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`,_2=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.neutral500};
`,F2=u.div`
  min-width: 0;
`,B2=u.h3`
  margin: 0 0 3px;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 600;
`,U2=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
`,W2=u.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,V2=u.a`
  display: block;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,H2=u.div`
  display: grid;
  gap: 16px;
`,Q2=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,G2=u.div`
  width: 100%;
  min-height: 180px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
`,K2=u.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`,J2=u.div`
  padding: 16px 20px 20px;
`,Y2=u.div`
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
`,X2=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 10px;
`,q2=u.h3`
  margin: 0 0 8px;
  font-size: 17px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,Z2=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,ew=u.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;

  &:hover { text-decoration: underline; }
`,tw=u.article`
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,nw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,rw=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(0, 155, 135, 0.45);
  color: #007B6E;
  letter-spacing: 0.02em;
`,iw=u.button`
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
`,ow=u.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,lw=u.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,sw=u.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,aw=[{title:"Trust Lifecycle",subtitle:"Certificate management",iconType:"cycle",actions:[{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Automate certificate lifecycle",href:"/trust-lifecycle/tools"}]},{title:"Valimail",subtitle:"Email authentication",iconType:"envelope",actions:[{label:"Review DMARC status",href:"/valimail/dashboard"},{label:"Manage sender sources",href:"/valimail/dashboard"},{label:"Monitor domains",href:"/valimail/dashboard"},{label:"Investigate spoofing risks",href:"/valimail/dashboard"}]},{title:"Quantum Central",subtitle:"Post-quantum readiness",iconType:"settings",actions:[{label:"Assess cryptographic risk",href:"/quantum-central/dashboard"},{label:"Review PQC readiness",href:"/quantum-central/dashboard"},{label:"View algorithm inventory",href:"/quantum-central/dashboard"},{label:"Track remediation",href:"/quantum-central/dashboard"}]},{title:"AI Trust",subtitle:"AI identity & governance",iconType:"sparkle",actions:[{label:"Register agents",href:"/ai-trust/dashboard"},{label:"Manage agent identities",href:"/ai-trust/dashboard"},{label:"Review agent activity",href:"/ai-trust/dashboard"},{label:"Configure trust policies",href:"/ai-trust/dashboard"}]},{title:"Device Trust",subtitle:"IoT device security",iconType:"mobile",actions:[{label:"Register devices",href:"/device-trust/dashboard"},{label:"Manage device identities",href:"/device-trust/dashboard"},{label:"Configure device policies",href:"/device-trust/dashboard"},{label:"Review device lifecycle",href:"/device-trust/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",iconType:"hierarchy",actions:[{label:"Issue internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage certificate profiles",href:"/private-ca/certificate-profiles"},{label:"Configure OCSP",href:"/private-ca/ocsps"}]},{title:"Software Trust",subtitle:"Code signing",iconType:"code",actions:[{label:"Manage signing keys",href:"/software-trust/dashboard"},{label:"Configure signing policies",href:"/software-trust/dashboard"},{label:"Sign software",href:"/software-trust/dashboard"},{label:"Generate SBOM",href:"/software-trust/dashboard"}]},{title:"DNS Trust",subtitle:"DNS management",iconType:"globe",actions:[{label:"Manage zones",href:"/dns/dashboard"},{label:"Update DNS records",href:"/dns/dashboard"},{label:"Configure traffic steering",href:"/dns/dashboard"},{label:"Review DNSSEC settings",href:"/dns/dashboard"}]},{title:"Content Trust",subtitle:"Document & content signing",iconType:"document",actions:[{label:"Manage signing credentials",href:"/content-trust/dashboard"},{label:"Verify signed content",href:"/content-trust/dashboard"},{label:"Review signing activity",href:"/content-trust/dashboard"},{label:"Configure seal policies",href:"/content-trust/dashboard"}]},{title:"CertCentral",subtitle:"Public certificates",iconType:"shield",actions:[{label:"Order public certificate",href:"/certcentral/dashboard"},{label:"Validate domains",href:"/certcentral/dashboard"},{label:"Manage organizations",href:"/certcentral/dashboard"},{label:"Expiring certificates",href:"/certcentral/inventory"}]}];function cw(){const[e,t]=w.useState(!1);return o.jsxs(T2,{children:[o.jsxs(L2,{children:[o.jsxs(I2,{children:[o.jsx(R2,{children:"Hello, John"}),o.jsx(z2,{children:"Access your DigiCert trust solutions and discover what's new"})]}),o.jsx(D2,{"aria-label":"Page settings",children:o.jsx(h0,{size:18,color:"currentColor"})})]}),o.jsxs(M2,{children:[o.jsx(N2,{children:aw.map(n=>o.jsxs(A2,{children:[o.jsxs(O2,{children:[o.jsx(_2,{children:Sn(n.iconType,20,"currentColor")}),o.jsxs(F2,{children:[o.jsx(B2,{children:n.title}),o.jsx(U2,{children:n.subtitle})]})]}),o.jsx(W2,{children:n.actions.map(r=>o.jsx("li",{children:o.jsx(V2,{href:r.href,children:r.label})},r.label))})]},n.title))}),o.jsxs(H2,{children:[o.jsxs(Q2,{children:[o.jsx(G2,{children:o.jsx(K2,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),o.jsxs(J2,{children:[o.jsx(Y2,{children:"Certificate lifecycle"}),o.jsxs(X2,{children:[o.jsx("span",{children:"Brian Trzupek · 5 min read"}),o.jsx("span",{children:"digicert.com/blog"})]}),o.jsx(q2,{children:"Certificate lifecycle management reaches an inflection point"}),o.jsx(Z2,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),o.jsx(ew,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&o.jsxs(tw,{children:[o.jsxs(nw,{children:[o.jsx(rw,{children:"Software Trust Manager"}),o.jsx(iw,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:o.jsx(va,{size:14,color:"currentColor"})})]}),o.jsx(ow,{children:"Centralize code-signing at scale"}),o.jsx(lw,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),o.jsx(sw,{href:"/software-trust/dashboard",children:"Explore STM →"})]})]})]})]})}const uw=u.main`
  padding: 24px;
`,dw=u.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,Ed=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function Pd(){const e=Ke(),t=av[e.pathname]??e.pathname;return w.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),o.jsxs(uw,{children:[o.jsx(dw,{children:t}),e.pathname==="/profile"&&o.jsx(Ed,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),o.jsxs(Ed,{children:["This is a stub page for ",o.jsx("code",{children:e.pathname})]})]})}const Td={name:"Sarah Mitchell",email:"sarah.mitchell@digicert.com"},pw=[{id:"trust-lifecycle",name:"Trust Lifecycle",iconType:"cycle",plan:"Advanced",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Seats",consumed:30,total:75},entitlements:[{name:"Seats",purchased:75,allocated:75,consumed:30,remaining:45}]},{id:"software-trust",name:"Software Trust",iconType:"code",tier:"Enterprise",plan:"Premium",autoRenewal:!0,contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Signatures",consumed:124210,total:25e4},entitlements:[{name:"Signatures",purchased:25e4,allocated:25e4,consumed:124210,remaining:125790},{name:"HSM keypairs",purchased:4,allocated:4,consumed:2,remaining:2}],purchasedControls:[{name:"Signatures",purchased:25e4,used:124210,remaining:125790},{name:"HSM keypair",purchased:10,used:2,remaining:8,planIncluded:6,addOnPurchased:4}],includedResources:[{name:"Repositories",includedWithPlan:"Up to 100",available:100,used:76,remaining:24},{name:"Test signatures",includedWithPlan:"2,500,000",available:25e5,used:812430,remaining:1687570}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private root certificates",consumed:9,total:10},entitlements:[{name:"Private root certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Private intermediate CA certificates",purchased:25,allocated:25,consumed:20,remaining:5},{name:"Dynamic intermediate CAs",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500}]},{id:"content-trust",name:"Content Trust",iconType:"document",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Seats",purchased:500,allocated:500,consumed:340,remaining:160},{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800}]},{id:"device-trust",name:"Device Trust",iconType:"mobile",plan:"Essentials and Advanced",tier:"Enterprise",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Certificates for unmanaged devices",consumed:45e3,total:1e5},entitlements:[{name:"Certificates for unmanaged devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Managed devices",purchased:5e4,allocated:5e4,consumed:2e4,remaining:3e4}],planEntitlements:{essentials:[{name:"Certificates for unmanaged devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3}],advanced:[{name:"Managed devices",purchased:5e4,allocated:5e4,consumed:2e4,remaining:3e4}]}},{id:"dns",name:"DigiCert DNS",iconType:"globe",plan:"Essentials",tier:"Enterprise",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"DNS queries",consumed:5e6,total:1e7},entitlements:[{name:"DNS queries",purchased:1e7,allocated:1e7,consumed:5e6,remaining:5e6}],dnsQueryCapacity:{purchased:1e7,used:5e6,remaining:5e6},includedResources:[{name:"Domains",available:20,used:10,remaining:10},{name:"Records",available:6e3,used:2e3,remaining:4e3},{name:"Users",available:2,used:2,remaining:0},{name:"A/AAAA failover records",available:2,used:0,remaining:2},{name:"GTD enabled domains",available:1,used:0,remaining:1}]},{id:"valimail",name:"Valimail",iconType:"envelope",plan:"Essentials",autoRenewal:!1,contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Domains (100,000 emails per month)",consumed:1,total:5},entitlements:[{name:"Domains (100,000 emails per month)",purchased:5,allocated:5,consumed:1,remaining:4},{name:"Domains (500,000 emails per month)",purchased:3,allocated:3,consumed:1,remaining:2}],emailUsageByDomain:[{domain:"abc.com",allowance:1e5,used:72e3,remaining:28e3},{domain:"example.com",allowance:5e5,used:41e3,remaining:59e3}]},{id:"quantum-central",name:"Quantum Central",iconType:"settings",plan:"Essentials / Advanced",tier:"Enterprise",contractId:"CTR-2024-QC-00112",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Security Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Cryptographic assets",consumed:25e4,total:5e5},entitlements:[{name:"Cryptographic assets",purchased:5e5,allocated:5e5,consumed:25e4,remaining:25e4}]},{id:"ai-trust",name:"AI Trust",iconType:"sparkle",tier:"Enterprise",contractId:"CTR-2024-AIA-00045",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"AI Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"AI assets",consumed:28,total:50},entitlements:[{name:"AI assets",purchased:50,allocated:50,consumed:28,remaining:22}]},{id:"posture-management",name:"Posture Management",iconType:"layers",tier:"Enterprise",contractId:"CTR-2024-PM-00067",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Security Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",entitlementsTBD:!0,primaryEntitlement:null,entitlements:[]},{id:"iot-trust",name:"IoT Trust",iconType:"chip",contractId:"CTR-2024-IOT-00044",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IoT Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"End entity certificates",consumed:28e4,total:5e5},entitlements:[{name:"End entity certificates",purchased:5e5,allocated:5e5,consumed:28e4,remaining:22e4},{name:"End entity devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Intermediate CA certificates",purchased:50,allocated:50,consumed:12,remaining:38},{name:"Intermediate CA devices",purchased:100,allocated:100,consumed:45,remaining:55}]}],Qi=[{accountId:"acme-global-security",displayAccountId:"1001445",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"peak-usage",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8,periodPeak:128,periodPeakDate:"Aug 14, 2025",purchasedUSD:"$80,000"},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8,periodPeak:22,periodPeakDate:"Sep 3, 2025",purchasedUSD:"$9,600"},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60,periodPeak:180,periodPeakDate:"Oct 12, 2025",purchasedUSD:"$24,000"},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7,periodPeak:8,periodPeakDate:"Nov 5, 2025",purchasedUSD:"$2,400"},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4,periodPeak:2,periodPeakDate:"—",purchasedUSD:"$1,500"}],peakUsageData:{periodPeakDate:"Aug 14, 2025",monthLabels:["Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Mar 26","Apr 26","May 26","Jun 26"],series:[{name:"SSL/TLS certificates",color:"#4B91D6",currentActive:108,periodPeak:128,periodPeakDate:"Aug 14, 2025",monthly:[90,110,128,122,115,108,100,96,92,98,104,110,108],monthlyCost:[72e3,88e3,102400,97600,92e3,86400,8e4,76800,73600,78400,83200,88e3,86400]},{name:"Code signing",color:"#F59E0B",currentActive:16,periodPeak:22,periodPeakDate:"Sep 3, 2025",monthly:[10,14,18,22,20,18,16,15,14,15,16,16,16],monthlyCost:[6e3,8400,10800,13200,12e3,10800,9600,9e3,8400,9e3,9600,9600,9600]},{name:"S/MIME certificates",color:"#10B981",currentActive:140,periodPeak:180,periodPeakDate:"Oct 12, 2025",monthly:[120,138,155,168,180,174,162,152,148,152,158,145,140],monthlyCost:[24e3,27600,31e3,33600,36e3,34800,32400,30400,29600,30400,31600,29e3,28e3]},{name:"Document signing",color:"#8B5CF6",currentActive:5,periodPeak:8,periodPeakDate:"Nov 5, 2025",monthly:[2,3,4,5,7,8,7,6,5,5,5,5,5],monthlyCost:[1e3,1500,2e3,2500,3500,4e3,3500,3e3,2500,2500,2500,2500,2500]}]}},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",displayAccountId:"2003891",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",displayAccountId:"3007234",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-enterprise",displayAccountId:"5001298",accountName:"ACME Enterprise",enterpriseInstance:{instanceId:"acme-enterprise-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"drawdown",contractId:"CTR-2024-CC-00214",contractTerm:"Nov 1, 2025 – Oct 31, 2026",contractOwner:"Enterprise IT",renewalDate:"Oct 31, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:55,total:120},entitlements:[{name:"SSL/TLS certificates",purchased:120,allocated:120,consumed:55,remaining:65},{name:"Code signing certificates",purchased:40,allocated:40,consumed:18,remaining:22},{name:"S/MIME certificates",purchased:300,allocated:300,consumed:210,remaining:90},{name:"Document signing certificates",purchased:20,allocated:20,consumed:7,remaining:13}]}}],fw=["over-entitlement","approaching-limit","no-data","healthy"];function hw(e){return fw.find(t=>e.includes(t))||"healthy"}function mw(e){const{id:t,name:n,iconType:r,...i}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:i.renewalDate,status:i.status,primaryEntitlement:i.primaryEntitlement,entitlements:i.entitlements,entitlementsTBD:i.entitlementsTBD,plan:i.plan,tier:i.tier,autoRenewal:i.autoRenewal,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...i}]}}function Gi(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(l=>l.subscriptionType))],i=[...new Set(n.map(l=>l.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountId:e.displayAccountId,accountName:e.accountName,subscriptionTypes:r,renewalDate:i.length===1?i[0]:"Varies by instance",status:hw(n.map(l=>l.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const Ld=pw.map(mw),gw=new Set(["iot-trust"]);function y0(){const e=[Gi(Qi[0],["enterprise"]),Gi(Qi[1],["enterprise"]),Gi(Qi[2],["ecommerce"]),Gi(Qi[3],["enterprise"])],t=Ld.slice(0,3),n=Ld.slice(3).filter(r=>!gw.has(r.id));return[...t,...e,...n]}const wt=[{id:"us-prod",name:"Acme — US production",region:"US",isCurrent:!0},{id:"us-stage",name:"Acme — US stage",region:"US"},{id:"eu-prod",name:"Acme — EU production",region:"EU"},{id:"eu-stage",name:"Acme — EU stage",region:"EU"},{id:"in-prod",name:"Acme — IN",region:"IN"}];var cp;const xw=((cp=wt.find(e=>e.isCurrent))==null?void 0:cp.id)??wt[0].id,yw={"us-prod":["trust-lifecycle","software-trust","private-ca","certcentral-acme-global-security","certcentral-acme-marketing","certcentral-acme-enterprise","content-trust","device-trust","dns","valimail","quantum-central","ai-trust","posture-management"],"us-stage":["trust-lifecycle","software-trust","certcentral-acme-global-security","certcentral-acme-marketing","content-trust","device-trust","dns","valimail","quantum-central","ai-trust","posture-management"],"eu-prod":["trust-lifecycle","private-ca","certcentral-acme-global-security","certcentral-acme-enterprise","content-trust","device-trust","dns","valimail","quantum-central","ai-trust","posture-management"],"eu-stage":["software-trust","certcentral-acme-marketing","content-trust","dns","valimail"],"in-prod":["software-trust","certcentral-acme-enterprise","content-trust","device-trust","dns","valimail","quantum-central"]},vw={"us-prod":1,"us-stage":.25,"eu-prod":.65,"eu-stage":.15,"in-prod":.4},Id={"us-prod":"Advanced","eu-prod":"Advanced","us-stage":"Essentials","in-prod":"Essentials"},Rd={"eu-prod":{entitlements:[{name:"Private root certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Private intermediate CA certificates",purchased:25,allocated:25,consumed:20,remaining:5},{name:"Private end-entity certificates",purchased:1e4,allocated:1e4,consumed:6e3,remaining:4e3},{name:"PQC private root certificates",purchased:5,allocated:5,consumed:2,remaining:3},{name:"PQC private intermediate CA certificates",purchased:15,allocated:15,consumed:8,remaining:7},{name:"PQC private end-entity certificates",purchased:5e3,allocated:5e3,consumed:2e3,remaining:3e3}],primaryEntitlement:{label:"Private root certificates",consumed:9,total:10}}},zd={"us-stage":{plan:"Essentials",entitlements:[{name:"Certificates for unmanaged devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3}],primaryEntitlement:{label:"Certificates for unmanaged devices",consumed:45e3,total:1e5}},"eu-prod":{plan:"Essentials",entitlements:[{name:"Certificates for unmanaged devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3}],primaryEntitlement:{label:"Certificates for unmanaged devices",consumed:45e3,total:1e5}},"in-prod":{plan:"Advanced",entitlements:[{name:"Managed devices",purchased:5e4,allocated:5e4,consumed:2e4,remaining:3e4}],primaryEntitlement:{label:"Managed devices",consumed:2e4,total:5e4}}};function yo(){const e=y0(),t=e.filter(s=>!s.id.startsWith("certcentral-")),n=e.filter(s=>s.id.startsWith("certcentral-")),r=n.find(s=>s.id==="certcentral-acme-devops"),i=n.filter(s=>s.id!=="certcentral-acme-devops"),l=[];r&&l.push({...r,envIds:wt.map(s=>s.id),envNames:wt.map(s=>s.name)});for(const s of wt){const a=vw[s.id],c=yw[s.id];for(const d of c){const m=[...t,...i].find(y=>y.id===d);if(!m)continue;const f=y=>Math.round(y*a),g=m.entitlements.map(y=>({...y,consumed:f(y.consumed),remaining:y.allocated-f(y.consumed)})),k=m.primaryEntitlement?{...m.primaryEntitlement,consumed:f(m.primaryEntitlement.consumed)}:m.primaryEntitlement,b=m.instances.map(y=>{const E={...y,entitlements:y.entitlements?y.entitlements.map(x=>({...x,consumed:f(x.consumed),remaining:x.allocated-f(x.consumed)})):y.entitlements,primaryEntitlement:y.primaryEntitlement?{...y.primaryEntitlement,consumed:f(y.primaryEntitlement.consumed)}:y.primaryEntitlement};return y.dnsQueryCapacity&&(E.dnsQueryCapacity={...y.dnsQueryCapacity,used:f(y.dnsQueryCapacity.used),remaining:y.dnsQueryCapacity.purchased-f(y.dnsQueryCapacity.used)}),y.purchasedControls&&(E.purchasedControls=y.purchasedControls.map(x=>({...x,used:f(x.used),remaining:x.purchased-f(x.used)}))),y.includedResources&&(E.includedResources=y.includedResources.map(x=>({...x,used:f(x.used),remaining:typeof x.available=="number"?x.available-f(x.used):x.remaining}))),E});if(d==="quantum-central"&&Id[s.id]){const y=Id[s.id],E=b.map(x=>({...x,plan:y}));l.push({...m,envId:s.id,envName:s.name,plan:y,entitlements:g,primaryEntitlement:k,instances:E});continue}if(d==="private-ca"&&Rd[s.id]){const y=Rd[s.id],E=y.entitlements.map(h=>({...h,consumed:f(h.consumed),remaining:h.allocated-f(h.consumed)})),x={...y.primaryEntitlement,consumed:f(y.primaryEntitlement.consumed)},p=b.map(h=>({...h,entitlements:E,primaryEntitlement:x}));l.push({...m,envId:s.id,envName:s.name,entitlements:E,primaryEntitlement:x,instances:p});continue}if(d==="device-trust"&&zd[s.id]){const y=zd[s.id],E=y.entitlements.map(h=>({...h,consumed:f(h.consumed),remaining:h.allocated-f(h.consumed)})),x={...y.primaryEntitlement,consumed:f(y.primaryEntitlement.consumed)},p=b.map(h=>({...h,plan:y.plan,entitlements:E,primaryEntitlement:x,planEntitlements:void 0}));l.push({...m,envId:s.id,envName:s.name,plan:y.plan,entitlements:E,primaryEntitlement:x,instances:p,planEntitlements:void 0});continue}l.push({...m,envId:s.id,envName:s.name,entitlements:g,primaryEntitlement:k,instances:b})}}return l}const ww=u.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,bw=u.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function jw({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return o.jsx(ww,{role:"presentation",children:o.jsx(bw,{$pct:n})})}const v0=u(jc)`
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
`,w0=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,b0=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,j0=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,k0=u.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,C0=u.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
`,kw=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,$0=u.span`
  flex-shrink: 0;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  background: #1C7852;
  color: #ffffff;
`,S0=u.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e}, 1fr);
  gap: 10px;
  padding: 10px 0 2px;
`,E0=u.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`,P0=u.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,T0=u.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L0=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,Cw=u.div`
  position: relative;
  flex-shrink: 0;
`,$w=u.button`
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
`,I0=u.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`,Sw=u.div`
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
`,Ew=u.button`
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
`;function R0({items:e}){const[t,n]=w.useState(!1),r=w.useRef(null);return w.useEffect(()=>{if(!t)return;const i=s=>{r.current&&!r.current.contains(s.target)&&n(!1)},l=s=>{s.key==="Escape"&&n(!1)};return document.addEventListener("mousedown",i),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("keydown",l)}},[t]),o.jsxs(Cw,{ref:r,children:[o.jsx($w,{type:"button",onClick:i=>{i.preventDefault(),i.stopPropagation(),n(l=>!l)},"aria-label":"More actions","aria-expanded":t,children:o.jsx(Ko,{size:14,color:"currentColor"})}),t&&o.jsx(Sw,{onClick:i=>i.stopPropagation(),children:e.map(i=>o.jsx(Ew,{type:"button",$destructive:i.destructive,onClick:l=>{l.preventDefault(),l.stopPropagation(),n(!1)},children:i.label},i.label))})]})}const Pw=u.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,Tw=u.button`
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
`,Lw=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Iw=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 7px;
`,Rw=u.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Dd=u.p`
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
`,z0=u.span`
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
`;u.span``;function ka({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return o.jsx(Lw,{children:n.map(r=>o.jsxs("div",{children:[o.jsxs(Iw,{children:[o.jsx(Rw,{children:r.name}),o.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),o.jsx(jw,{consumed:r.consumed,total:r.allocated}),r.remaining<0?o.jsxs(Dd,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):o.jsxs(Dd,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function D0(e){if(e.id.startsWith("certcentral-")){const i=e.subscriptionTypes.includes("enterprise"),l=e.subscriptionTypes.includes("ecommerce");return[{label:"Tier",value:i&&l?"Enterprise + Ecommerce":i?"Enterprise":"Ecommerce"},{label:"Instance name",value:e.accountName},{label:"Instance ID",value:e.accountId}]}const r=[{label:"Tier",value:e.tier||"Enterprise"}];return e.plan&&r.push({label:"Plan",value:e.plan}),r}function zw({subscription:e}){const[t,n]=w.useState(e.instances[0].instanceId),r=e.instances.find(d=>d.instanceId===t)||e.instances[0],i=r.subscriptionType==="enterprise",l=r.entitlements.slice(0,3),s=r.entitlements.length-l.length,a=[{label:"Open CertCentral"},{label:"Documentation"}],c=D0(e);return o.jsxs(v0,{to:`/settings/billing/${e.id}`,children:[o.jsxs(w0,{children:[o.jsxs(b0,{children:[o.jsx(j0,{children:Sn(e.iconType,20,"currentColor")}),o.jsx(k0,{children:o.jsxs(L0,{children:[o.jsx(C0,{children:e.name}),o.jsxs($0,{children:["Renews ",e.renewalDate]})]})})]}),o.jsx(I0,{children:o.jsx(R0,{items:a})})]}),o.jsx(S0,{$cols:c.length,children:c.map(d=>o.jsxs(E0,{children:[o.jsx(P0,{children:d.label}),o.jsx(T0,{children:d.value})]},d.label))}),o.jsx(Pw,{onClick:d=>d.preventDefault(),children:e.instances.map(d=>o.jsx(Tw,{type:"button",$active:d.instanceId===t,onClick:m=>{m.preventDefault(),m.stopPropagation(),n(d.instanceId)},children:d.subscriptionType==="enterprise"?"Enterprise":"Ecommerce"},d.instanceId))}),i?o.jsxs(o.Fragment,{children:[l.length>0?o.jsx(ka,{entitlements:r.entitlements,maxVisible:3}):o.jsx(ja,{children:"Usage data not available yet."}),o.jsxs(wa,{children:[s>0&&o.jsxs(z0,{children:["+",s," more"]}),o.jsx(ba,{children:"Managed by DigiCert"})]})]}):o.jsxs(o.Fragment,{children:[o.jsx(ka,{entitlements:r.entitlements,maxVisible:3}),o.jsxs(wa,{children:[o.jsx("span",{}),o.jsx(ba,{children:"Managed by you"})]})]})]})}function Dw({subscription:e}){if(e.instances.length>1)return o.jsx(zw,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:i,entitlements:l}=e,s=e.subscriptionTypes.includes("enterprise"),a=e.subscriptionTypes.includes("ecommerce"),c=a&&!s,d=t.startsWith("certcentral-"),m=l.slice(0,3),f=l.length-m.length,g=s?"Managed by DigiCert":a?"Managed by you":null,b=c&&d?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${d?"CertCentral":n}`},{label:"Documentation"}],y=D0(e);return o.jsxs(v0,{to:`/settings/billing/${t}${e.envId?`?env=${e.envId}`:""}`,children:[o.jsxs(w0,{children:[o.jsxs(b0,{children:[o.jsx(j0,{children:Sn(r,20,"currentColor")}),o.jsxs(k0,{children:[o.jsxs(L0,{children:[o.jsx(C0,{children:n}),c&&i&&o.jsxs($0,{children:["Renews ",i]})]}),(e.envNames||e.envId)&&o.jsx(kw,{children:e.envNames?e.envNames.join(", "):e.envName})]})]}),o.jsx(I0,{children:o.jsx(R0,{items:b})})]}),o.jsx(S0,{$cols:y.length,children:y.map(E=>o.jsxs(E0,{children:[o.jsx(P0,{children:E.label}),o.jsx(T0,{children:E.value})]},E.label))}),e.entitlementsTBD?o.jsx(ja,{children:"Entitlements: TBD"}):m.length>0?o.jsx(ka,{entitlements:l,maxVisible:3}):o.jsx(ja,{children:"Usage data is not available for this product yet."}),g&&o.jsxs(wa,{children:[f>0?o.jsxs(z0,{children:["+",f," more"]}):o.jsx("span",{}),o.jsx(ba,{children:g})]})]})}const Mw=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,Nw=u.div`
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
`,Aw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Ow=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,_w=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Fw=u.button`
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
`,Bw=u.div`
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
`,Uw=u.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ww=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Vw=u.div`
  border: 1.5px solid ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral400};
  }
`,Hw=u.button`
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
`,Qw=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
  padding-top: 1px;
`,Gw=u.div`
  flex: 1;
  min-width: 0;
`,Kw=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  margin-bottom: 4px;
`,Jw=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  line-height: 1.45;
`,Yw=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Xw=u.div`
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,qw=u.a`
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
`,Zw=[{id:"sales",title:"Sales",helper:"Questions about purchasing, pricing, renewals, account growth, additional products, or billing.",cta:"Contact sales",href:"https://www.digicert.com/contact-us"},{id:"support",title:"Support",helper:"Help with product issues, errors, troubleshooting, or technical questions.",cta:"Contact support",href:"https://www.digicert.com/support/pki-support"}];function M0({open:e,onClose:t}){const[n,r]=w.useState(null),i=w.useRef(null);return w.useEffect(()=>{const l=s=>{s.key==="Escape"&&e&&t()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[e,t]),w.useEffect(()=>{e&&i.current&&setTimeout(()=>{var l;return(l=i.current)==null?void 0:l.focus()},260),e||r(null)},[e]),o.jsxs(o.Fragment,{children:[o.jsx(Mw,{$open:e,onClick:t,"aria-hidden":"true"}),o.jsxs(Nw,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[o.jsxs(Aw,{children:[o.jsxs(Ow,{children:[o.jsx(vi,{size:18,color:"currentColor"}),o.jsx(_w,{children:"Need help?"})]}),o.jsx(Fw,{type:"button",onClick:t,"aria-label":"Close drawer",ref:i,children:"×"})]}),o.jsxs(Bw,{children:[o.jsx(Uw,{children:"What do you need help with?"}),o.jsx(Ww,{children:Zw.map(l=>{const s=n===l.id;return o.jsxs(Vw,{$selected:s,children:[o.jsxs(Hw,{type:"button",onClick:()=>r(s?null:l.id),"aria-expanded":s,children:[o.jsx(Qw,{children:l.id==="sales"?o.jsx(Tc,{size:18,color:"currentColor"}):o.jsx(Pc,{size:18,color:"currentColor"})}),o.jsxs(Gw,{children:[o.jsx(Kw,{children:l.title}),o.jsx(Jw,{children:l.helper})]}),o.jsx(Yw,{children:s?o.jsx(wl,{size:16,color:"currentColor"}):o.jsx(vt,{size:16,color:"currentColor"})})]}),s&&o.jsx(Xw,{children:o.jsxs(qw,{href:l.href,target:"_blank",rel:"noopener noreferrer",children:[l.cta,o.jsx(Lc,{size:14,color:"currentColor"})]})})]},l.id)})})]})]})]})}const N0={mvp:{id:"mvp",label:"Phase 1 (MVP)"},phase2:{id:"phase2",label:"Phase 2"}},A0="mvp",O0="prototype-phase";function eb(){try{const e=new URLSearchParams(window.location.search).get("phase");if(e==="1")return"mvp";if(e==="2")return"phase2";const t=window.localStorage.getItem(O0);if(N0[t])return t}catch{}return A0}const _0=w.createContext({phase:A0,isMvp:!0,setPhase:()=>{}});function tb({children:e}){const[t,n]=w.useState(eb),r=w.useCallback(i=>{n(i);try{window.localStorage.setItem(O0,i)}catch{}},[]);return o.jsx(_0.Provider,{value:{phase:t,isMvp:t==="mvp",setPhase:r},children:e})}function Ic(){return w.useContext(_0)}const nb=u.div`
  position: fixed;
  right: 12px;
  bottom: 12px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 6px 4px 10px;
  border: 1px dashed rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  background: rgba(17, 24, 39, 0.82);
  color: rgba(255, 255, 255, 0.75);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  line-height: 1;
  opacity: 0.55;
  transition: opacity 0.15s;
  user-select: none;

  &:hover, &:focus-within { opacity: 1; }

  @media print { display: none; }
`,rb=u.span`
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 9px;
  color: rgba(255, 255, 255, 0.5);
`,ib=u.button`
  padding: 4px 8px;
  border: none;
  border-radius: 999px;
  background: ${({$active:e})=>e?"rgba(255, 255, 255, 0.92)":"transparent"};
  color: ${({$active:e})=>e?"#111827":"rgba(255, 255, 255, 0.75)"};
  font: inherit;
  cursor: ${({$active:e})=>e?"default":"pointer"};

  &:hover { color: ${({$active:e})=>e?"#111827":"#fff"}; }
  &:focus-visible { outline: 2px solid #fff; outline-offset: 1px; }
`;function ob(){const{phase:e,setPhase:t}=Ic();return w.useEffect(()=>{document.documentElement.dataset.prototypePhase=e},[e]),o.jsxs(nb,{role:"group","aria-label":"Prototype layout variant (review tool, not part of the product)",title:"Prototype review tool — not part of the product UI",children:[o.jsx(rb,{children:"Prototype"}),Object.values(N0).map(n=>o.jsx(ib,{type:"button",$active:e===n.id,"aria-pressed":e===n.id,onClick:()=>t(n.id),children:n.label},n.id))]})}const lb=u.main`
  padding: 32px;
`,sb=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,ab=u.div``,cb=u.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,ub=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,db=u.button`
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
`;const pb=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(358px, auto);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`,fb=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`,Md=u.button`
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
`,Nd=u.div`
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
`,Ad=u.button`
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
`,hb=u.span`
  flex-shrink: 0;
  padding: 2px 7px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  white-space: nowrap;
`;function mb(){var h;const[e,t]=w.useState(!1),[n,r]=Ah(),i=n.get("env")||xw,l=n.get("product")||"all",[s,a]=w.useState(!1),[c,d]=w.useState(!1),m=w.useRef(null),f=w.useRef(null);w.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]),w.useEffect(()=>{if(!s)return;const v=S=>{m.current&&!m.current.contains(S.target)&&a(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[s]),w.useEffect(()=>{if(!c)return;const v=S=>{f.current&&!f.current.contains(S.target)&&d(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[c]);const{isMvp:g}=Ic(),k=yo().filter(v=>{var S;return!(g&&((S=v.subscriptionTypes)!=null&&S.includes("ecommerce")))}),b=[...new Map(k.map(v=>[v.name,{id:v.name,name:v.name}])).values()],E=k.filter(v=>!(i!=="all"&&!(v.envIds?v.envIds.includes(i):v.envId===i)||l!=="all"&&v.name!==l)).map(v=>{var S;if(v.envIds&&i!=="all"){const C=((S=wt.find($=>$.id===i))==null?void 0:S.name)??i;return{...v,envId:i,envName:C,envIds:void 0,envNames:void 0}}return v}),x=i==="all"?"All environments":((h=wt.find(v=>v.id===i))==null?void 0:h.name)??i,p=l==="all"?"All products":l;return o.jsxs(lb,{children:[o.jsxs(sb,{children:[o.jsxs(ab,{children:[o.jsx(cb,{children:"My subscriptions"}),o.jsx(ub,{children:"View your active product subscriptions, entitlement usage, and renewal information."})]}),o.jsxs(db,{type:"button",onClick:()=>t(!0),children:[o.jsx(vi,{size:15,color:"currentColor"}),"Need help?"]})]}),o.jsxs(fb,{children:[o.jsxs("div",{style:{position:"relative"},ref:m,children:[o.jsxs(Md,{type:"button",onClick:()=>a(v=>!v),"aria-haspopup":"listbox","aria-expanded":s,children:[x,o.jsx(vt,{size:13,color:"currentColor"})]}),s&&o.jsx(Nd,{children:[{id:"all",name:"All environments"},...wt].map(v=>o.jsxs(Ad,{type:"button",$active:i===v.id,onClick:()=>{r(S=>{const C=new URLSearchParams(S);return C.set("env",v.id),C},{replace:!0}),a(!1)},children:[v.name,v.isCurrent&&o.jsx(hb,{children:"Current"})]},v.id))})]}),o.jsxs("div",{style:{position:"relative"},ref:f,children:[o.jsxs(Md,{type:"button",onClick:()=>d(v=>!v),"aria-haspopup":"listbox","aria-expanded":c,children:[p,o.jsx(vt,{size:13,color:"currentColor"})]}),c&&o.jsx(Nd,{children:[{id:"all",name:"All products"},...b].map(v=>o.jsx(Ad,{type:"button",$active:l===v.id,onClick:()=>{r(S=>{const C=new URLSearchParams(S);return v.id==="all"?C.delete("product"):C.set("product",v.id),C},{replace:!0}),d(!1)},children:v.name},v.id))})]})]}),o.jsx(pb,{children:E.map(v=>o.jsx(Dw,{subscription:v},`${v.id}-${v.envId??"global"}`))}),o.jsx(M0,{open:e,onClose:()=>t(!1)})]})}const gb=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,xb=u.div`
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
`,yb=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,vb=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,wb=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,bb=u.button`
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
`,jb=u.div`
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
`,kb=u.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Cb=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$b=u.div`
  border: 1.5px solid ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({$selected:e,theme:t})=>e?t.colors.blue300:t.colors.neutral400};
  }
`,Sb=u.button`
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
`,Eb=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
  padding-top: 1px;
`,Pb=u.div`
  flex: 1;
  min-width: 0;
`,Tb=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  margin-bottom: 4px;
`,Lb=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  line-height: 1.45;
`,Ib=u.div`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Rb=u.div`
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,zb=u.button`
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
`,Db=[{id:"sales",title:"Sales",helper:"Questions about pricing, purchasing, renewals, expanding your DigiCert services, or your billing and subscriptions.",cta:"Contact sales"},{id:"support",title:"Support",helper:"Do you need help with certificate issues, integrations, troubleshooting, domain or organization validation, or certificate approvals.",cta:"Contact support"}];function Mb({open:e,onClose:t}){const[n,r]=w.useState(null),i=Tt(),l=w.useRef(null);w.useEffect(()=>{const a=c=>{c.key==="Escape"&&e&&t()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,t]),w.useEffect(()=>{e&&l.current&&setTimeout(()=>{var a;return(a=l.current)==null?void 0:a.focus()},260),e||r(null)},[e]);function s(){t(),i("/certcentral/support")}return o.jsxs(o.Fragment,{children:[o.jsx(gb,{$open:e,onClick:t,"aria-hidden":"true"}),o.jsxs(xb,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[o.jsxs(yb,{children:[o.jsxs(vb,{children:[o.jsx(vi,{size:18,color:"currentColor"}),o.jsx(wb,{children:"Need help?"})]}),o.jsx(bb,{type:"button",onClick:t,"aria-label":"Close drawer",ref:l,children:"×"})]}),o.jsxs(jb,{children:[o.jsx(kb,{children:"What do you need help with?"}),o.jsx(Cb,{children:Db.map(a=>{const c=n===a.id;return o.jsxs($b,{$selected:c,children:[o.jsxs(Sb,{type:"button",onClick:()=>r(c?null:a.id),"aria-expanded":c,children:[o.jsx(Eb,{children:a.id==="sales"?o.jsx(Tc,{size:18,color:"currentColor"}):o.jsx(Pc,{size:18,color:"currentColor"})}),o.jsxs(Pb,{children:[o.jsx(Tb,{children:a.title}),o.jsx(Lb,{children:a.helper})]}),o.jsx(Ib,{children:c?o.jsx(wl,{size:16,color:"currentColor"}):o.jsx(vt,{size:16,color:"currentColor"})})]}),c&&o.jsx(Rb,{children:o.jsx(zb,{type:"button",onClick:s,children:a.cta})})]},a.id)})})]})]})]})}const Nb=u.div`
  position: relative;
  width: 100%;
  user-select: none;
`,Ab=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  margin-bottom: 8px;
`,Ob=u.button`
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
`,_b=u.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
`,Fb=u.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
`,Od=u.button`
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
`,Bb=u.div`
  position: relative;
`,Ub=u.div`
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
`,Wb=u.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: #E5E7EB;
  font-size: 10px;
`,_d=u.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.8;
`,Vb=u.span`
  width: 7px;
  height: 7px;
  border-radius: 2px;
  flex-shrink: 0;
`,Nr=620,F0=190,Ar=46,Hb=16,B0=18,Qb=34,Ki=Nr-Ar-Hb,cn=F0-B0-Qb;function Gb(e,t){return t==="$"?e>=1e5?`$${(e/1e3).toFixed(0)}k`:e>=1e3?`$${(e/1e3).toFixed(1)}k`:`$${e}`:e>=1e3?`${(e/1e3).toFixed(0)}k`:`${e}`}function Fd(e,t){return t==="$"?e>=1e3?`$${e.toLocaleString()}`:`$${e}`:e.toLocaleString()}function Bd({series:e,monthLabels:t,yFormat:n}){var $;const[r,i]=w.useState(new Set),[l,s]=w.useState(null),a=w.useRef(null),c=t.length,d=t.map((j,T)=>{let L=0;return e.map(O=>{const te=r.has(O.name)?0:O.monthly[T],B=L;return L+=te,{lo:B,hi:L,val:te}})}),m=Math.max(...d.map(j=>{var T;return((T=j[j.length-1])==null?void 0:T.hi)||0}),1),f=Math.ceil(m*1.1/50)*50;function g(j){return j/(c-1)*Ki}function k(j){return cn-j/f*cn}function b(j){const T=t.map((O,te)=>`${g(te).toFixed(1)},${k(d[te][j].hi).toFixed(1)}`),L=[...t].reverse().map((O,te)=>{const B=c-1-te;return`${g(B).toFixed(1)},${k(d[B][j].lo).toFixed(1)}`});return[...T,...L].join(" ")}const y=[0,.25,.5,.75,1].map(j=>({v:Math.round(f*j),y:k(f*j)})),E=d.reduce((j,T,L)=>{var B,Se;const O=((B=T[T.length-1])==null?void 0:B.hi)||0,te=((Se=d[j][d[j].length-1])==null?void 0:Se.hi)||0;return O>te?L:j},0);function x(j){if(!a.current)return;const T=a.current.getBoundingClientRect(),L=Ar/Nr*T.width,O=(Ar+Ki)/Nr*T.width,B=(Math.max(L,Math.min(O,j.clientX-T.left))-L)/(O-L);s(Math.round(B*(c-1)))}function p(j){i(T=>{const L=new Set(T);return L.has(j)?L.delete(j):L.add(j),L})}const h=l!==null?(Ar+g(l))/Nr*100:0,v=l!==null&&l>c-3?"translateX(-100%)":l!==null&&l<2?"translateX(4px)":"translateX(-50%)",S=l!==null&&(($=d[l][d[l].length-1])==null?void 0:$.hi)||0,C=n==="$"?"Total":"Total active";return o.jsxs(Nb,{children:[o.jsxs(Ab,{children:[e.map(j=>o.jsxs(Ob,{$dim:r.has(j.name),type:"button",onClick:()=>p(j.name),children:[o.jsx(_b,{style:{background:j.color}}),j.name]},j.name)),o.jsxs(Fb,{children:[o.jsx(Od,{type:"button",onClick:()=>i(new Set),children:"All"}),o.jsx(Od,{type:"button",onClick:()=>i(new Set(e.map(j=>j.name))),children:"None"})]})]}),o.jsxs(Bb,{children:[o.jsx("svg",{ref:a,viewBox:`0 0 ${Nr} ${F0}`,style:{width:"100%",height:"auto",display:"block",overflow:"visible",cursor:"crosshair"},onMouseMove:x,onMouseLeave:()=>s(null),children:o.jsxs("g",{transform:`translate(${Ar},${B0})`,children:[y.map(j=>o.jsxs("g",{children:[o.jsx("line",{x1:0,y1:j.y.toFixed(1),x2:Ki,y2:j.y.toFixed(1),stroke:"#E5E7EB",strokeWidth:1}),o.jsx("text",{x:-8,y:j.y.toFixed(1),textAnchor:"end",fontSize:7,fill:"#9CA3AF",dominantBaseline:"middle",children:Gb(j.v,n)})]},j.v)),o.jsx("line",{x1:0,y1:cn,x2:Ki,y2:cn,stroke:"#D1D5DB",strokeWidth:1}),t.map((j,T)=>T%2!==0&&T!==c-1?null:o.jsx("text",{x:g(T).toFixed(1),y:cn+13,textAnchor:"middle",fontSize:7,fill:"#9CA3AF",children:j},T)),e.map((j,T)=>o.jsx("polygon",{points:b(T),fill:j.color,fillOpacity:.78},j.name)),o.jsxs("g",{children:[o.jsx("line",{x1:g(E).toFixed(1),y1:0,x2:g(E).toFixed(1),y2:cn,stroke:"#6B7280",strokeWidth:1,strokeDasharray:"4,3",opacity:.55}),o.jsxs("text",{x:g(E).toFixed(1),y:-5,textAnchor:"middle",fontSize:7,fill:"#4B5563",fontWeight:"600",children:["Peak ",t[E]]})]}),l!==null&&o.jsx("line",{x1:g(l).toFixed(1),y1:0,x2:g(l).toFixed(1),y2:cn,stroke:"#374151",strokeWidth:1.5,opacity:.6})]})}),l!==null&&o.jsxs(Ub,{style:{left:`${h}%`,transform:v},children:[o.jsx(Wb,{children:t[l]}),e.map((j,T)=>r.has(j.name)?null:o.jsxs(_d,{children:[o.jsx(Vb,{style:{background:j.color}}),o.jsx("span",{style:{flex:1},children:j.name}),o.jsx("span",{style:{fontWeight:600},children:Fd(d[l][T].val,n)})]},j.name)),o.jsxs(_d,{style:{borderTop:"1px solid rgba(255,255,255,0.15)",marginTop:4,paddingTop:4},children:[o.jsx("span",{style:{flex:1,fontWeight:600},children:C}),o.jsx("span",{style:{fontWeight:700},children:Fd(S,n)})]})]})]})]})}const Ud=u.main`
  padding: 32px;
`,Wd=u(jc)`
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
`,Kb=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,Jb=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,Yb=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,Xb=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,qb=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Zb=u.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,ej=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Vd=u.button`
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
`,tj=u.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,nj=u.button`
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
`,U0=u.div`
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
`,rj=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`,ij=u.button`
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
`,oj=u.div`
  position: relative;
`,lj=u.button`
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
`,sj=u.div`
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
`,aj=u.a`
  display: block;
  padding: 10px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({$destructive:e,theme:t})=>e?"#DC2626":t.colors.neutral800};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,cj=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Hd=u.div``,Qn=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 10px;
`,W0=u.button`
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
`,uj=u.div`
  position: relative;
  display: inline-flex;
`,dj=u.div`
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
`,pj=u.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover .ent-tooltip { display: block; }
`,fj=u.span`
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
`;function V0({instance:e,isCertCentral:t,plan:n}){const[r,i]=w.useState(!1),l=w.useRef(null);w.useEffect(()=>{if(!r)return;const d=m=>{l.current&&!l.current.contains(m.target)&&i(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[r]);const s=e.subscriptionType==="enterprise",a=e.tier||(s?"Enterprise":"Ecommerce");let c;return s&&!t?c=o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"This product is covered by an enterprise agreement with DigiCert."}),o.jsx("p",{children:"Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team."}),o.jsx("p",{children:"Contact your account manager for contract-related questions."})]}):s&&t?c=o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"This CertCentral account is managed through an enterprise agreement with DigiCert."}),o.jsx("p",{children:"Billing, renewals, and any contract changes are handled directly by your DigiCert account team."}),o.jsx("p",{children:"Contact your account manager for any questions."})]}):c=o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"This subscription is purchased and managed through DigiCert's self-service purchasing experience."}),o.jsx("p",{children:"You can manage payment methods, receipts, renewals, and purchases directly from this account."})]}),o.jsxs(bl,{children:[o.jsx(jl,{children:o.jsxs(kl,{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:["Tier",o.jsxs(uj,{ref:l,children:[o.jsx(W0,{type:"button",onClick:()=>i(d=>!d),children:o.jsx(Go,{size:13,color:"currentColor"})}),r&&o.jsx(dj,{children:c})]})]})}),o.jsx(Cl,{children:a}),n&&o.jsx(Jo,{children:n})]})}function hj(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function mj({dateStr:e,sub:t}){const n=hj(e);return o.jsxs(bl,{children:[o.jsxs(jl,{children:[o.jsx(kl,{children:"Renewal date"}),o.jsx(m0,{size:15,color:"#9CA3AF"})]}),o.jsx(Cl,{children:e}),t&&o.jsx(Jo,{children:t}),!t&&o.jsxs(Jo,{children:[n," days remaining"]})]})}function gj({term:e}){return o.jsxs(bl,{children:[o.jsxs(jl,{children:[o.jsx(kl,{children:"Contract term"}),o.jsx(m0,{size:15,color:"#9CA3AF"})]}),o.jsx(Cl,{style:{fontSize:15,fontWeight:600},children:e||"—"})]})}const $t=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,ut=u.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,M=u.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,N=u.td`
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
`;function Jr({entitlements:e,contractType:t,tbd:n}){return n?o.jsx(Ca,{children:"Entitlements: TBD"}):e.length===0?o.jsx(Ca,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):t==="drawdown"?o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"45%"},children:"Entitlement"}),o.jsx(M,{$align:"right",children:"Purchased"}),o.jsx(M,{style:{width:"20%"}})]})}),o.jsx("tbody",{children:e.map(r=>o.jsxs("tr",{children:[o.jsx(N,{children:r.name}),o.jsx(N,{$align:"right",children:r.purchased.toLocaleString()}),o.jsx(N,{})]},r.name))})]})}):o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"30%"},children:"Entitlement"}),o.jsx(M,{$align:"right",children:"Allocated"}),o.jsx(M,{$align:"right",children:"Used"}),o.jsx(M,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:e.map(r=>{const i=r.allocated>0?r.consumed/r.allocated:0,l=r.remaining<0?"error":i>=.8?"warning":void 0;return o.jsxs("tr",{children:[o.jsx(N,{children:r.name}),o.jsx(N,{$align:"right",children:r.allocated.toLocaleString()}),o.jsx(N,{$align:"right",children:r.consumed.toLocaleString()}),o.jsx(N,{$align:"right",children:o.jsx(nn,{$tone:l,children:r.remaining<0?`Exceeded by ${Math.abs(r.remaining).toLocaleString()}`:r.remaining===0?"0":r.remaining.toLocaleString()})})]},r.name)})})]})})}const xj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`,yj=u.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Qd=u.button`
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
`;function Gd({entitlements:e,purchasedOnly:t}){return o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{children:"Entitlement"}),t?o.jsxs(o.Fragment,{children:[o.jsx(M,{$align:"right",children:"Current active"}),o.jsx(M,{$align:"right",children:"Period peak"}),o.jsx(M,{$align:"right",children:"Peak date"})]}):o.jsxs(o.Fragment,{children:[o.jsx(M,{$align:"right",children:"Purchased"}),o.jsx(M,{$align:"right",children:"Consumed"}),o.jsx(M,{$align:"right",children:"Remaining"})]})]})}),o.jsx("tbody",{children:e.map(n=>{var i,l;const r=n.remaining<0?"error":void 0;return o.jsxs("tr",{children:[o.jsx(N,{children:n.name}),t?o.jsxs(o.Fragment,{children:[o.jsx(N,{$align:"right",children:((i=n.consumed)==null?void 0:i.toLocaleString())??"—"}),o.jsx(N,{$align:"right",children:((l=n.periodPeak)==null?void 0:l.toLocaleString())??"—"}),o.jsx(N,{$align:"right",children:n.periodPeakDate??"—"})]}):o.jsxs(o.Fragment,{children:[o.jsx(N,{$align:"right",children:n.purchased.toLocaleString()}),o.jsx(N,{$align:"right",children:n.consumed.toLocaleString()}),o.jsx(N,{$align:"right",children:o.jsx(nn,{$tone:r,children:n.remaining<0?`Exceeded by ${Math.abs(n.remaining).toLocaleString()}`:n.remaining.toLocaleString()})})]})]},n.name)})})]})})}function vj({series:e}){return o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"40%"},children:"Entitlement"}),o.jsx(M,{$align:"right",children:"Current month ($)"}),o.jsx(M,{$align:"right",children:"Period peak ($)"}),o.jsx(M,{$align:"right",children:"Peak date"})]})}),o.jsx("tbody",{children:e.map(t=>{const n=t.monthlyCost[t.monthlyCost.length-1]??0,r=Math.max(...t.monthlyCost);return o.jsxs("tr",{children:[o.jsx(N,{children:t.name}),o.jsxs(N,{$align:"right",children:["$",n.toLocaleString()]}),o.jsxs(N,{$align:"right",children:["$",r.toLocaleString()]}),o.jsx(N,{$align:"right",children:t.periodPeakDate})]},t.name)})})]})})}function wj({instance:e,purchasedOnly:t}){const[n,r]=w.useState("table"),{peakUsageData:i}=e,l=i.series.map(s=>({...s,monthly:s.monthlyCost}));return o.jsxs(Re,{children:[o.jsxs(xj,{children:[o.jsx(it,{style:{margin:0},children:t?"Entitlements and usage":"Consumption"}),o.jsxs(yj,{children:[o.jsx(Qd,{$active:n==="table",onClick:()=>r("table"),children:"Table"}),o.jsx(Qd,{$active:n==="chart",onClick:()=>r("chart"),children:"Chart"})]})]}),n==="table"?t?o.jsxs(o.Fragment,{children:[o.jsx(Qn,{style:{marginBottom:10},children:"Consumption (Quantities)"}),o.jsx(Gd,{entitlements:e.entitlements,purchasedOnly:!0}),o.jsxs("div",{style:{marginTop:24},children:[o.jsx(Qn,{style:{marginBottom:10},children:"Consumption (USD)"}),o.jsx(vj,{series:i.series})]})]}):o.jsx(Gd,{entitlements:e.entitlements,purchasedOnly:!1}):o.jsxs(cj,{children:[o.jsxs(Hd,{children:[o.jsx(Qn,{children:"Consumption (USD)"}),o.jsx(Bd,{series:l,monthLabels:i.monthLabels,yFormat:"$"})]}),o.jsxs(Hd,{children:[o.jsx(Qn,{children:"Consumption quantities"}),o.jsx(Bd,{series:i.series,monthLabels:i.monthLabels})]})]})]})}const bj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  flex-wrap: wrap;
`,jj=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,kj=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Cj=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,$j=u.a`
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
`;function Sj({instance:e}){const{planEntitlements:t,entitlements:n,contractType:r}=e;return t?o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx(Qn,{children:"Essentials plan"}),o.jsx(Jr,{entitlements:t.essentials,contractType:r}),o.jsx(Qn,{style:{marginTop:20},children:"Advanced plan"}),o.jsx(Jr,{entitlements:t.advanced,contractType:r})]}):o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx(Jr,{entitlements:n,contractType:r})]})}const H0=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function Ej({instance:e}){const{purchasedControls:t=[],includedResources:n=[]}=e;return o.jsxs(o.Fragment,{children:[o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"40%"},children:"Entitlement"}),o.jsx(M,{$align:"right",children:"Allocated"}),o.jsx(M,{$align:"right",children:"Used"}),o.jsx(M,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:t.map(r=>{const i=r.purchased>0?r.used/r.purchased:0,l=r.remaining<0?"error":i>=.8?"warning":void 0,s=r.planIncluded!=null&&r.addOnPurchased!=null;return o.jsxs("tr",{children:[o.jsx(N,{children:s?o.jsxs(pj,{children:[r.name,o.jsx(W0,{as:"span",style:{cursor:"default"},children:o.jsx(Go,{size:13,color:"currentColor"})}),o.jsxs(fj,{className:"ent-tooltip",children:["Includes ",r.planIncluded," keypairs with your current plan + ",r.addOnPurchased," purchased keypairs."]})]}):r.name}),o.jsx(N,{$align:"right",children:r.purchased.toLocaleString()}),o.jsx(N,{$align:"right",children:r.used.toLocaleString()}),o.jsx(N,{$align:"right",children:o.jsx(nn,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]}),o.jsxs(Re,{children:[o.jsx(it,{children:"Included resources"}),o.jsx(H0,{children:"Resource quotas included with your plan. Quotas increase automatically when you upgrade your plan."}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"40%"},children:"Entitlement"}),o.jsx(M,{$align:"right",children:"Allocated"}),o.jsx(M,{$align:"right",children:"Used"}),o.jsx(M,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:n.map(r=>{const i=r.available>0?r.used/r.available:0,l=r.remaining<0?"error":i>=.8?"warning":void 0;return o.jsxs("tr",{children:[o.jsx(N,{children:r.name}),o.jsx(N,{$align:"right",children:typeof r.available=="number"?r.available.toLocaleString():r.available}),o.jsx(N,{$align:"right",children:r.used.toLocaleString()}),o.jsx(N,{$align:"right",children:o.jsx(nn,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]})]})}function Pj({instance:e}){const{entitlements:t,emailUsageByDomain:n=[],contractType:r}=e,i=l=>{const s=l/1e3;return Number.isInteger(s)?`${s}k`:`${s.toLocaleString()}k`};return o.jsxs(o.Fragment,{children:[o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx(Jr,{entitlements:t,contractType:r})]}),n.length>0&&o.jsxs(Re,{children:[o.jsx(it,{children:"Email usage by domain"}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"35%"},children:"Domain"}),o.jsx(M,{$align:"right",children:"Email allowance/month"}),o.jsx(M,{$align:"right",children:"Used"}),o.jsx(M,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:n.map(l=>{const a=(l.allowance>0?l.used/l.allowance:0)>=.8?"warning":void 0;return o.jsxs("tr",{children:[o.jsx(N,{children:l.domain}),o.jsx(N,{$align:"right",children:i(l.allowance)}),o.jsx(N,{$align:"right",children:i(l.used)}),o.jsx(N,{$align:"right",children:o.jsx(nn,{$tone:a,children:i(l.remaining)})})]},l.domain)})})]})})]})]})}function Tj({instance:e}){const{dnsQueryCapacity:t,includedResources:n=[]}=e;return o.jsxs(o.Fragment,{children:[o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"40%"},children:"Entitlement"}),o.jsx(M,{$align:"right",children:"Allocated"}),o.jsx(M,{$align:"right",children:"Used"}),o.jsx(M,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx(N,{children:"DNS queries"}),o.jsx(N,{$align:"right",children:t.purchased.toLocaleString()}),o.jsx(N,{$align:"right",children:t.used.toLocaleString()}),o.jsx(N,{$align:"right",children:o.jsx(nn,{children:t.remaining.toLocaleString()})})]})})]})})]}),n.length>0&&o.jsxs(Re,{children:[o.jsx(it,{children:"Included resources"}),o.jsx(H0,{children:"Resource quotas included with your plan. Quotas increase automatically when you upgrade your plan."}),o.jsx($t,{children:o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"40%"},children:"Entitlement"}),o.jsx(M,{$align:"right",children:"Monthly allocated"}),o.jsx(M,{$align:"right",children:"Used"}),o.jsx(M,{$align:"right",children:"Remaining"})]})}),o.jsx("tbody",{children:n.map(r=>{const i=r.remaining===0?"error":void 0;return o.jsxs("tr",{children:[o.jsx(N,{children:r.name}),o.jsx(N,{$align:"right",children:r.available.toLocaleString()}),o.jsx(N,{$align:"right",children:r.used.toLocaleString()}),o.jsx(N,{$align:"right",children:o.jsx(nn,{$tone:i,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]})]})}function Lj(){return o.jsx(Re,{children:o.jsxs(bj,{children:[o.jsxs(jj,{children:[o.jsx(kj,{children:"Manage finances and funds"}),o.jsx(Cj,{children:"View purchase history, balance, account pricing, deposit funds, and pay invoices in CertCentral."})]}),o.jsxs($j,{href:"/certcentral-finances.html",target:"_blank",rel:"noopener noreferrer",children:["Manage finances",o.jsx(Lc,{size:14,color:"currentColor"})]})]})})}function Ij({instance:e,isCertCentral:t}){return o.jsx(Re,{children:o.jsxs(U0,{$cols:2,children:[o.jsx(V0,{instance:e,isCertCentral:t,plan:e.plan}),o.jsx(gj,{term:e.contractTerm})]})})}function Rj({instance:e,isCertCentral:t,showLastMonth:n=!0}){var i,l;const r=((l=(i=e.receipts)==null?void 0:i[0])==null?void 0:l.amount)??e.billing.price.split(" / ")[0];return o.jsx(Re,{children:o.jsxs(U0,{$cols:n?3:2,children:[o.jsx(V0,{instance:e,isCertCentral:t}),n&&o.jsxs(bl,{children:[o.jsxs(jl,{children:[o.jsx(kl,{children:"Last 30 days"}),o.jsx(Tc,{size:15,color:"#9CA3AF"})]}),o.jsx(Cl,{children:r}),o.jsx(Jo,{children:"Last month's spend"})]}),o.jsx(mj,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"})]})})}const zj=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,Dj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,Mj=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Nj=u.button`
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
`,Aj=u.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Oj=u.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,_j=u.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Fj=u.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,Bj=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,Uj=u.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function Wj({category:e}){const[t,n]=w.useState(e.products.length>0);return o.jsxs(zj,{children:[o.jsxs(Dj,{onClick:()=>n(r=>!r),children:[o.jsxs(Mj,{children:[o.jsx(Nj,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(i=>!i)},children:t?o.jsx(wl,{size:14,color:"currentColor"}):o.jsx(vt,{size:14,color:"currentColor"})}),o.jsx(Aj,{children:e.name})]}),o.jsx(Oj,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&o.jsx(_j,{children:e.products.length===0?o.jsx(Uj,{children:"No products purchased yet."}):o.jsxs(ut,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(M,{style:{width:"40%"},children:"Certificate type"}),o.jsx(M,{$align:"right",children:"Purchased"}),o.jsx(M,{$align:"right",children:"Used"}),o.jsx(M,{$align:"right",children:"Available"})]})}),o.jsx("tbody",{children:e.products.map((r,i)=>o.jsxs("tr",{children:[o.jsxs(N,{children:[o.jsx(Fj,{children:r.name}),o.jsx(Bj,{children:r.type})]}),o.jsx(N,{$align:"right",children:r.purchased}),o.jsx(N,{$align:"right",children:r.used}),o.jsx(N,{$align:"right",children:o.jsx(nn,{$tone:r.available===0?"error":void 0,children:r.available})})]},i))})]})})]})}function Vj({categories:e}){return o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),e.map(t=>o.jsx(Wj,{category:t},t.id))]})}function Hj(){const{subscriptionId:e}=qx(),[t,n]=w.useState(null),[r,i]=w.useState(!1),[l,s]=w.useState(!1),[a,c]=w.useState(!1),d=w.useRef(null),[m]=Ah(),f=m.get("env"),g=f?yo().find(h=>h.id===e&&h.envId===f)??yo().find(h=>{var v;return h.id===e&&((v=h.envIds)==null?void 0:v.includes(f))}):yo().find(h=>h.id===e&&h.envIds!=null)??y0().find(h=>h.id===e),k=(()=>{var h;return g?f&&g.envIds?{label:"Environment",value:((h=wt.find(v=>v.id===f))==null?void 0:h.name)??f}:g.envNames?{label:"Available in",value:g.envNames.join(", ")}:g.envName?{label:"Environment",value:g.envName}:null:null})(),b=e==="certcentral"||((e==null?void 0:e.startsWith("certcentral-"))??!1);if(w.useEffect(()=>{document.title=g?`${g.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[g==null?void 0:g.id,g==null?void 0:g.name]),w.useEffect(()=>{var h;n(((h=g==null?void 0:g.instances[0])==null?void 0:h.instanceId)??null)},[e]),w.useEffect(()=>{if(!a)return;const h=S=>{d.current&&!d.current.contains(S.target)&&c(!1)},v=S=>{S.key==="Escape"&&c(!1)};return document.addEventListener("mousedown",h),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",v)}},[a]),!g)return o.jsxs(Ud,{children:[o.jsxs(Wd,{to:-1,children:[o.jsx(yi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),o.jsx(Ca,{children:"This subscription could not be found."})]});const y=g.instances.find(h=>h.instanceId===t)||g.instances[0],E=b&&y.subscriptionType==="ecommerce",x=b?"CertCentral":g.name,p=E?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Product overview"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${x}`},{label:"Product overview"},{label:"Documentation"}];return o.jsxs(Ud,{children:[o.jsxs(Wd,{to:-1,children:[o.jsx(yi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),o.jsxs(Kb,{children:[o.jsxs(Jb,{children:[o.jsx(Yb,{children:Sn(g.iconType,24,"currentColor")}),o.jsxs(Xb,{children:[o.jsx(qb,{children:o.jsx(Zb,{children:g.name})}),(k||g.accountName)&&o.jsxs(ej,{children:[k&&o.jsxs(o.Fragment,{children:[o.jsxs("strong",{children:[k.label,":"]})," ",k.value]}),k&&g.accountName&&o.jsx(o.Fragment,{children:" | "}),g.accountName&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Instance name:"})," ",g.accountName]}),g.accountId&&o.jsxs(o.Fragment,{children:[" | ",o.jsx("strong",{children:"Instance ID:"})," ",g.accountId]})]})]})]}),o.jsxs(rj,{children:[b?o.jsxs(Vd,{type:"button",onClick:()=>s(!0),children:[o.jsx(vi,{size:15,color:"currentColor"}),"Need help?"]}):o.jsxs(Vd,{type:"button",onClick:()=>i(!0),children:[o.jsx(vi,{size:15,color:"currentColor"}),"Need help?"]}),E&&o.jsxs(ij,{type:"button",children:[o.jsx(ov,{size:14,color:"currentColor"}),"Buy certificates"]}),o.jsxs(oj,{ref:d,children:[o.jsx(lj,{type:"button",onClick:()=>c(h=>!h),"aria-label":"More actions","aria-expanded":a,children:o.jsx(Ko,{size:15,color:"currentColor"})}),a&&o.jsx(sj,{children:p.map(h=>o.jsx(aj,{$destructive:h.destructive,href:"#",onClick:()=>c(!1),children:h.label},h.label))})]})]})]}),g.instances.length>1&&o.jsx(tj,{role:"tablist","aria-label":"CertCentral instances",children:g.instances.map(h=>o.jsx(nj,{role:"tab",type:"button",$active:h.instanceId===y.instanceId,"aria-selected":h.instanceId===y.instanceId,onClick:()=>n(h.instanceId),children:h.subscriptionType==="enterprise"?"Enterprise":"Ecommerce"},h.instanceId))}),y.subscriptionType==="enterprise"?o.jsxs(o.Fragment,{children:[o.jsx(Ij,{instance:y,isCertCentral:b}),g.id==="device-trust"?o.jsx(Sj,{instance:y}):g.id==="software-trust"?o.jsx(Ej,{instance:y}):g.id==="valimail"?o.jsx(Pj,{instance:y}):g.id==="dns"?o.jsx(Tj,{instance:y}):b&&y.contractType==="peak-usage"?o.jsx(wj,{instance:y,purchasedOnly:g.accountId==="1001445"}):o.jsxs(Re,{children:[o.jsx(it,{children:"Entitlements and usage"}),o.jsx(Jr,{entitlements:y.entitlements,contractType:y.contractType,tbd:y.entitlementsTBD})]}),b&&g.accountId!=="1001445"&&g.accountId!=="2003891"&&o.jsx(Lj,{})]}):o.jsxs(o.Fragment,{children:[o.jsx(Rj,{instance:y,isCertCentral:b,showLastMonth:g.accountId!=="3007234"}),o.jsx(Vj,{categories:y.productCategories})]}),o.jsx(M0,{open:r,onClose:()=>i(!1)}),o.jsx(Mb,{open:l,onClose:()=>s(!1)})]})}const Qj=u.div`
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
`,Gj=u.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,Kj=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Jj=u.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function Q0({icon:e,title:t,children:n,action:r}){return o.jsxs(Qj,{children:[o.jsx(Gj,{children:e}),t&&o.jsx(Kj,{children:t}),o.jsx(Jj,{children:n}),r]})}const G0=u.a`
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
`,Yj=u(G0)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function K0({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${Td.name})`}),i=`mailto:${Td.email}?${r.toString()}`,l=e==="outline"?Yj:G0;return o.jsx(l,{href:i,...n,children:"Contact account manager"})}const Kd=u.main`
  padding: 32px;
`,Xj=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,qj=u.div``,Jd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Yd=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Zj=u.div`
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
`,ek=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,tk=u.div`
  margin-left: auto;
`,Rc=u.button`
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
`,nk=u(Rc)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,rk=u(Rc)``,ik=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,ok=u.table`
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
`,lk=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,cs={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},sk=u.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=cs[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=cs[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=cs[e])==null?void 0:t.color)||"#374151"}};
`,ak=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,ck=u.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,uk=u.button`
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
`,dk=u.div`
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
`;const pk=["All","Invoices","Receipts","Refunds"],Xd=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function fk({scenario:e}){const[t,n]=w.useState("All"),[r,i]=w.useState(!1);if(w.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return o.jsxs(Kd,{children:[o.jsx(Jd,{children:"Receipts and invoices"}),o.jsx(Yd,{style:{marginBottom:24},children:"Download receipts, invoices, and other billing documents for your account."}),o.jsx(Q0,{icon:o.jsx(Zy,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:o.jsx(K0,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const l=4,s="$2,520.00",a="Nov 20, 2025",c=t==="All"?Xd:Xd.filter(d=>t==="Invoices"?d.type==="Invoice":t==="Receipts"?d.type==="Receipt":t==="Refunds"?d.type==="Refund":!0);return o.jsxs(Kd,{children:[o.jsx(Xj,{children:o.jsxs(qj,{children:[o.jsx(Jd,{children:"Receipts and invoices"}),o.jsx(Yd,{children:"Track your invoices, receipts, and refunds for all ecommerce products, self-service add-ons, and other usage. Contact your account manager for enterprise invoices and billing records."})]})}),o.jsxs(Zj,{children:[o.jsxs(ls,{$alert:!0,children:[o.jsxs(ss,{children:[o.jsx(fd,{size:14,color:"#DC2626"}),"Invoices overdue"]}),o.jsx(as,{children:l})]}),o.jsxs(ls,{$alert:!0,children:[o.jsxs(ss,{children:[o.jsx(fd,{size:14,color:"#DC2626"}),"Total balance overdue"]}),o.jsx(as,{$blue:!0,children:s})]}),o.jsxs(ls,{children:[o.jsx(ss,{children:"Next invoice due"}),o.jsx(as,{$blue:!0,children:a})]})]}),o.jsxs(ek,{children:[o.jsxs("div",{style:{position:"relative"},children:[o.jsxs(Rc,{type:"button",onClick:()=>i(d=>!d),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,o.jsx(vt,{size:13,color:"currentColor"})]}),r&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:pk.map(d=>o.jsx("button",{type:"button",onClick:()=>{n(d),i(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:d===t?"#EAF1FB":"white",color:d===t?"#0174C3":"#1A1F27",fontWeight:d===t?500:400},children:d},d))})]}),o.jsxs(nk,{type:"button",children:[o.jsx(rv,{size:14,color:"currentColor"}),"Filter",o.jsx(vt,{size:13,color:"currentColor"})]}),o.jsx(tk,{children:o.jsxs(rk,{type:"button",children:["Download CSV",o.jsx(vt,{size:13,color:"currentColor"})]})})]}),o.jsxs(ik,{children:[o.jsxs(ok,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(zt,{style:{width:"140px"},children:"Invoice"}),o.jsx(zt,{children:"Type"}),o.jsx(zt,{children:"Issued on"}),o.jsx(zt,{children:"Status"}),o.jsx(zt,{$align:"right",children:"Amount"}),o.jsx(zt,{children:"Due on"}),o.jsx(zt,{children:"Ordered by"}),o.jsx(zt,{})]})}),o.jsx("tbody",{children:c.map((d,m)=>o.jsxs("tr",{children:[o.jsx(Dt,{children:o.jsx(lk,{href:"#",children:d.id})}),o.jsx(Dt,{children:d.type}),o.jsx(Dt,{children:d.issuedOn}),o.jsx(Dt,{children:o.jsx(sk,{$status:d.status,children:d.status})}),o.jsx(Dt,{$align:"right",children:d.amount}),o.jsx(Dt,{children:d.dueOn}),o.jsx(Dt,{children:d.orderedBy}),o.jsx(Dt,{children:o.jsxs(ak,{children:[(d.status==="Overdue"||d.status==="Upcoming")&&o.jsx(ck,{type:"button",children:"Pay"}),o.jsx(uk,{type:"button","aria-label":"Download",children:o.jsx(nv,{size:15,color:"currentColor"})})]})})]},`${d.id}-${m}`))})]}),o.jsxs(dk,{children:["1 to ",c.length," of 8,618"]})]})]})}const qd=u.main`
  padding: 32px;
`,hk=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,mk=u.div``,Zd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,ep=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,gk=u.a`
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
`,tp=u.div`
  margin-bottom: 32px;
`,np=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,rp=u.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,ip=u.button`
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
`,xk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,yk=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,vk=u.div`
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
`,wk=u.div``,bk=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,jk=u.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,kk=u.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,Ck=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,J0=u.button`
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
`,$k=u.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,Sk=u.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ek=u(J0)`
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
`,Pk=u.div`
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
`;function Tk({scenario:e}){return w.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?o.jsxs(qd,{children:[o.jsx(Zd,{children:"Payment details"}),o.jsx(ep,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),o.jsx(Q0,{icon:o.jsx(tv,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:o.jsx(K0,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):o.jsxs(qd,{children:[o.jsxs(hk,{children:[o.jsxs(mk,{children:[o.jsx(Zd,{children:"Payment details"}),o.jsx(ep,{children:"Payments for ecommerce products, self-service add-ons, and other usage are made using your default payment method."})]}),o.jsxs(gk,{href:"#",children:[o.jsx(Go,{size:15,color:"currentColor"}),"Need help?"]})]}),o.jsxs(tp,{children:[o.jsxs(np,{children:[o.jsx(rp,{children:"Payment methods"}),o.jsxs(ip,{type:"button",children:[o.jsx(pd,{size:14,color:"currentColor"}),"Add payment method"]})]}),o.jsxs(xk,{children:[o.jsxs(yk,{children:[o.jsx(vk,{children:"VISA"}),o.jsxs(wk,{children:[o.jsxs(bk,{children:[o.jsx(jk,{children:"Visa •••• 8350"}),o.jsx(kk,{children:"Default"})]}),o.jsx(Ck,{children:"Expires 02/28"})]})]}),o.jsx(J0,{type:"button","aria-label":"Payment method options",children:o.jsx(Ko,{size:16,color:"currentColor"})})]})]}),o.jsxs(tp,{children:[o.jsxs(np,{children:[o.jsx(rp,{children:"Billing contacts"}),o.jsxs(ip,{type:"button",children:[o.jsx(pd,{size:14,color:"currentColor"}),"Add billing contact"]})]}),o.jsxs($k,{children:[o.jsx(Ek,{type:"button","aria-label":"Contact options",children:o.jsx(Ko,{size:16,color:"currentColor"})}),o.jsx(Sk,{children:"John Doe"}),o.jsxs(Ji,{children:[o.jsx(Yi,{children:"Address"}),o.jsxs(Xi,{children:["123 Main Street",o.jsx("br",{}),"Suite 100",o.jsx("br",{}),"San Francisco, CA 94105",o.jsx("br",{}),"United States"]})]}),o.jsxs(Ji,{children:[o.jsx(Yi,{children:"Email address"}),o.jsx(Xi,{children:"john.doe@winthecustomer.com"})]}),o.jsxs(Ji,{children:[o.jsx(Yi,{children:"Phone number"}),o.jsx(Xi,{children:"650 123 4567"})]}),o.jsxs(Ji,{children:[o.jsxs(Pk,{children:[o.jsx(Yi,{style:{margin:0},children:"VAT ID"}),o.jsx(Go,{size:14,color:"#0174C3"})]}),o.jsx(Xi,{children:"23503820"})]})]})]})]})}const Lk=u.main`
  padding: 32px;
  max-width: 1100px;
`,Ik=u.div`
  margin-bottom: 36px;
`,Rk=u.h1`
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,zk=u.p`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
  max-width: 560px;
`,Dk=u.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,Mk=u.div`
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
`,Nk=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Ak=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ok=u.div`
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
`,_k=u.a`
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,Fk=u.span`
  flex-shrink: 0;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$variant:e})=>e==="included"?"rgba(39,168,114,0.1)":e==="licensed"?"#EAF1FB":"#F3F4F6"};
  color: ${({$variant:e})=>e==="included"?"#1F8F60":e==="licensed"?"#0174C3":"#4B5563"};
`,Bk=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: 1.5;
`,Uk=u.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Wk=u.li`
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
`,Vk=u.div`
  margin-top: auto;
  padding-top: 4px;
`,Hk=u.button`
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
`,Qk=[{abbr:"TL",color:"#0174C3",name:"Trust Lifecycle",status:"essentials",statusLabel:"Essentials",description:"Modernizes certificate lifecycle visibility and management across public and private CAs.",features:["Gain full visibility with discovery and a centralized certificate inventory","Manage certificates regardless of who issued them (CA-agnostic control)","Automate enrollment, renewal, and provisioning at enterprise scale","Prevent outages with real-time monitoring, alerts, and reporting"],action:"Upgrade"},{abbr:"DNS",color:"#0174C3",name:"DigiCert DNS",status:null,description:"Modern DNS management for secure, scalable global traffic delivery",features:["Unified DNS platform for secure, scalable deployments","Real-time insights to optimize performance and availability","Intelligent monitoring to enforce best practices and compliance","Global traffic routing for speed, resilience, and reliability"],action:"Learn more"},{abbr:"CC",color:"#0174C3",name:"CertCentral",status:"included",statusLabel:"Included",description:"Centralizes certificate purchasing and management with scale, compliance, APIs—and AI-based validation automation.",features:["Buy and manage public trust certificates across TLS/SSL, S/MIME, Code Signing, and more","AI-based validation automation to speed issuance and reduce manual effort","Multi-language support with regional data residency options","Renewal reminders, notifications, plus flexible APIs and webhooks for existing workflows"],action:"Buy certificates"},{abbr:"ST",color:"#0174C3",name:"Software Trust",status:null,description:"Secure and govern software releases with trusted code signing",features:["Centralized access control for decentralized signing operations","Policy-based signing to ensure compliance and integrity","CI/CD integration across modern development platforms","Automated signing for releases, artifacts, and SBOMs"],action:"Learn more"},{abbr:"CA+",color:"#0174C3",name:"Private CA",status:"licensed",statusLabel:"Licensed",description:"Enterprise-grade private PKI with centralized control and governance",features:["Centralized governance for internal public key infrastructure","Rapid deployment of root and intermediate certificate authorities","Support for cloud, on-prem, and hybrid environments","Hardware-backed key protection with modern cryptographic standards"],action:"Learn more"},{abbr:"IoT",color:"#0174C3",name:"Device Trust",status:null,description:"End-to-end device identity and security lifecycle management",features:["Device protection across manufacturing, deployment, and retirement","Hardware-rooted identities for every connected device","Automated onboarding, configuration, and updates at scale","Readiness for evolving cryptographic and post-quantum standards"],action:"Learn more"},{abbr:"CT",color:"#0174C3",name:"Content Trust",status:null,description:"Centralized control and governance for document signing workflows",features:["Centralized visibility across signing activity, policies, and certificates","PKI-backed digital signing aligned with global trust standards","Seamless integration with existing tools via CSC-based APIs","Cloud-based key protection to reduce loss, theft, and misuse"],action:"Learn more"}];function Gk(){return w.useEffect(()=>{document.title="Explore DigiCert products — DigiCert ONE"},[]),o.jsxs(Lk,{children:[o.jsxs(Ik,{children:[o.jsx(Rk,{children:"Explore DigiCert products"}),o.jsx(zk,{children:"Build and protect digital trust across every certificate, identity, and device — all from one platform."})]}),o.jsx(Dk,{children:Qk.map(e=>o.jsxs(Mk,{children:[o.jsxs(Nk,{children:[o.jsxs(Ak,{children:[o.jsx(Ok,{$color:e.color,children:e.abbr}),o.jsx(_k,{href:"#",children:e.name})]}),e.status&&o.jsx(Fk,{$variant:e.status,children:e.statusLabel})]}),o.jsx(Bk,{children:e.description}),o.jsx(Uk,{children:e.features.map(t=>o.jsx(Wk,{children:t},t))}),o.jsx(Vk,{children:o.jsx(Hk,{type:"button",children:e.action})})]},e.name))})]})}const Kk=u.main`
  padding: 32px;
`,Jk=u.h1`
  margin: 0 0 24px;
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Yk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,Xk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,qk=u.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Zk=u.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,eC=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  background: #FEF3C7;
  color: #92400E;
  font-size: 12px;
  font-weight: 500;
`,tC=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,nC=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  text-align: right;
`,rC=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
`,iC=u.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
`,oC=u.select`
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
`,lC=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,sC=u.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,aC=u.div`
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
`,op=u.button`
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
`,lp=u.p`
  margin: 12px 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,qi=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,cC=u.div``,uC=u.h2`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,dC=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,pC=u.p`
  margin: 0 0 10px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,fC=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,hC=u.div`
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
`,mC=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,gC=u.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,xC=u.div`
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: #EAF1FB;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,yC=u.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.blue300};
`,vC=u.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.4;
`,wC=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  line-height: 1.5;
`,sp=u.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;function bC(){const[e,t]=w.useState("north-america");return w.useEffect(()=>{document.title="Support — CertCentral"},[]),o.jsxs(Kk,{children:[o.jsx(Jk,{children:"Support"}),o.jsxs(Yk,{children:[o.jsx(Xk,{children:o.jsxs("div",{children:[o.jsx(qk,{children:"Current plan"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"2px"},children:[o.jsx(Zk,{children:"Standard"}),o.jsx(eC,{children:"24x5 support"})]})]})}),o.jsxs("div",{style:{textAlign:"right"},children:[o.jsx(tC,{children:"Account number"}),o.jsx(nC,{children:"126993"})]})]}),o.jsxs(rC,{children:[o.jsx(iC,{htmlFor:"support-region",children:"Region"}),o.jsxs(oC,{id:"support-region",value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"north-america",children:"North America"}),o.jsx("option",{value:"europe",children:"Europe"}),o.jsx("option",{value:"asia-pacific",children:"Asia Pacific"})]})]}),o.jsxs(lC,{children:[o.jsxs(sC,{children:[o.jsxs(us,{children:[o.jsx(ds,{children:"Technical support"}),o.jsx(ps,{children:"Get help with certificate installation, CSRs, and other technical issues."}),o.jsx(op,{type:"button",children:"Support chat"}),o.jsxs(fs,{children:[o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx(Rn,{href:"#",children:"Upgrade to the Business plan for phone support."})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(xo,{size:14})}),o.jsx(Rn,{href:"mailto:cc.standard.support@digicert.com",children:"cc.standard.support@digicert.com"})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Lc,{size:14})}),o.jsx(Rn,{href:"https://support.digicert.com",target:"_blank",rel:"noopener noreferrer",children:"Support portal"})]})]}),o.jsx(lp,{children:"Support hours"}),o.jsx(qi,{children:"Monday - Friday: 24 hours"}),o.jsx(qi,{children:"Saturday and Sunday: Closed"})]}),o.jsxs(us,{children:[o.jsx(ds,{children:"Validation support"}),o.jsx(ps,{children:"Get help with domain and organization validation."}),o.jsx(op,{type:"button",children:"Validation chat"}),o.jsxs(fs,{children:[o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx("span",{children:"+1 800 579 2848"})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx("span",{children:"+1 801 769 0749"})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(xo,{size:14})}),o.jsx(Rn,{href:"mailto:standard.validation@digicert.com",children:"standard.validation@digicert.com"})]})]}),o.jsx(lp,{children:"Support hours"}),o.jsx(qi,{children:"Monday - Friday: 24 hours"}),o.jsx(qi,{children:"Saturday and Sunday: Closed"})]}),o.jsxs(us,{children:[o.jsx(ds,{children:"Sales support"}),o.jsx(ps,{children:"Get help with contract terms, pricing, and product selection."}),o.jsx(fs,{children:o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx(Rn,{href:"tel:+18017701701",children:"+1 801 770 1701"})]})})]})]}),o.jsxs(aC,{children:[o.jsxs(cC,{children:[o.jsx(uC,{children:"Sales contact"}),o.jsx(dC,{children:"Get help with any sales related questions."}),o.jsx(pC,{children:"Talk to your Sales contact:"}),o.jsxs(fC,{children:[o.jsx(hC,{children:"d"}),o.jsxs(mC,{children:[o.jsx(gC,{children:"Sales Team"}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(Pr,{size:14})}),o.jsx("span",{style:{color:"#9ca3af"},children:"*"})]}),o.jsxs(dt,{children:[o.jsx(pt,{children:o.jsx(xo,{size:14})}),o.jsx(Rn,{href:"mailto:sales@digicert.com",children:"sales@digicert.com"})]})]})]})]}),o.jsxs(xC,{children:[o.jsx(yC,{children:o.jsx(lv,{size:28,color:"currentColor"})}),o.jsxs(vC,{children:["Need to give us a call?",o.jsx("br",{}),"Get ",o.jsx("span",{style:{color:"#0174C3"},children:"Business support"})," today."]}),o.jsx(wC,{children:"Fast, knowledgeable phone assistance is available now with DigiCert's Business support plan. Upgrade anytime – select the link below or contact your sales representative."}),o.jsx(sp,{href:"mailto:sales@digicert.com",children:"Contact sales@digicert.com to upgrade your support plan"}),o.jsx(sp,{href:"#",children:"Compare all support plans"})]})]})]})]})}const jC=new Set(["/settings/billing/receipts","/settings/billing/payment-details"]);function kC({containerRef:e}){const{pathname:t}=Ke();return w.useEffect(()=>{e.current?e.current.scrollTop=0:window.scrollTo(0,0)},[t,e]),null}const CC=Fy`
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
`,$C=u.div`
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
`;function ap(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function SC(){const[e,t]=w.useState(()=>typeof window<"u"?ap():"desktop");return w.useEffect(()=>{const n=()=>t(ap());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function EC(){const[e,t]=w.useState("dashboard"),[n,r]=w.useState(!1),[i,l]=w.useState(!0),[s,a]=w.useState(null),[c,d]=w.useState("mixed"),[m,f]=w.useState(null),[g,k]=w.useState(null),b=w.useCallback(()=>r($=>!$),[]),y=w.useCallback(()=>r(!1),[]),E=w.useCallback(()=>l($=>!$),[]),x=w.useCallback($=>{t($),l(!0),f(null),k(null)},[]),p=w.useCallback(($,j,T)=>{T.startsWith("settings-")||T==="profile"||(f(j),k(T)),t($),l(!0)},[]),h=w.useCallback(()=>{g!==null&&t(g),l(!0),f(null),k(null)},[g]),v=w.useCallback($=>{t($),l(!0),r(!1)},[]),S=w.useCallback($=>{a(j=>j===$?null:$)},[]),C=w.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:i,activeTopNav:s,billingScenario:c,previousRoute:m,toggleDrawer:b,closeDrawer:y,toggleSpoke:E,setBillingScenario:d,selectProduct:x,navigateFromTopNav:p,goBack:h,selectProductFromDrawer:v,openTopNav:S,closeTopNav:C}}function PC(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:i,previousRoute:l,toggleDrawer:s,closeDrawer:a,toggleSpoke:c,selectProduct:d,navigateFromTopNav:m,goBack:f,selectProductFromDrawer:g,openTopNav:k,closeTopNav:b}=EC(),y=SC(),E=y==="mobile",x=w.useRef(null),p=Ke(),h=Tt(),{isMvp:v}=Ic(),S=w.useCallback(T=>{m(T,p.pathname,e)},[m,p.pathname,e]),C=w.useCallback(T=>{h(T),f()},[h,f]);w.useEffect(()=>{y!=="mobile"&&t&&a()},[y,t,a]),w.useEffect(()=>{const T=x.current;T&&(E&&t?(T.setAttribute("inert",""),T.setAttribute("aria-hidden","true")):(T.removeAttribute("inert"),T.removeAttribute("aria-hidden")))},[E,t]);const $=n?"276px":"56px",j=r==="ai-assist"?"400px":"0px";return o.jsxs(o.Fragment,{children:[o.jsx(CC,{}),o.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),o.jsx(Zv,{isDrawerOpen:t,onToggleDrawer:s,activeTopNav:r,onOpenTopNav:k,onCloseTopNav:b,onSelectProduct:d,onSelectProductFromTopNav:S,cartCount:3}),o.jsx(o2,{activeProductId:e,onSelectProduct:d}),o.jsx(b2,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:c,billingScenario:i,hideSelfService:v,previousRoute:l,onGoBack:C}),o.jsx(P2,{open:t,activeProductId:e,onSelectProduct:g,hideSelfService:v,onClose:a}),o.jsxs($C,{ref:x,id:"main-content",$leftOffset:$,$rightOffset:j,children:[o.jsx(kC,{containerRef:x}),o.jsxs(h1,{children:[o.jsx(zn,{path:"/",element:o.jsx(Ku,{to:"/dashboard",replace:!0})}),pv.filter(T=>T!=="/").map(T=>{let L=o.jsx(Pd,{});return T==="/dashboard"?L=o.jsx(cw,{}):T==="/settings/billing"?L=o.jsx(mb,{}):v&&jC.has(T)?L=o.jsx(Ku,{to:"/settings/billing",replace:!0}):T==="/settings/billing/receipts"?L=o.jsx(fk,{scenario:i}):T==="/settings/billing/payment-details"?L=o.jsx(Tk,{scenario:i}):T==="/certcentral/support"&&(L=o.jsx(bC,{})),o.jsx(zn,{path:T,element:L},T)}),o.jsx(zn,{path:"/settings/billing/all-products",element:o.jsx(Gk,{})}),o.jsx(zn,{path:"/settings/billing/:subscriptionId",element:o.jsx(Hj,{})}),o.jsx(zn,{path:"*",element:o.jsx(Pd,{})})]})]}),o.jsx(ob,{})]})}Ch(document.getElementById("root")).render(o.jsx(w.StrictMode,{children:o.jsx(k1,{children:o.jsx(My,{theme:By,children:o.jsx(tb,{children:o.jsx(PC,{})})})})}));
