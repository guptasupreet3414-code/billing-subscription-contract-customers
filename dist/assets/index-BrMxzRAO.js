function K0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function G0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rp={exports:{}},Gi={},op={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),Y0=Symbol.for("react.portal"),J0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),eg=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),ng=Symbol.for("react.suspense"),rg=Symbol.for("react.memo"),og=Symbol.for("react.lazy"),Tc=Symbol.iterator;function ig(e){return e===null||typeof e!="object"?null:(e=Tc&&e[Tc]||e["@@iterator"],typeof e=="function"?e:null)}var ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,sp={};function ur(e,t,n){this.props=e,this.context=t,this.refs=sp,this.updater=n||ip}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ap(){}ap.prototype=ur.prototype;function ja(e,t,n){this.props=e,this.context=t,this.refs=sp,this.updater=n||ip}var $a=ja.prototype=new ap;$a.constructor=ja;lp($a,ur.prototype);$a.isPureReactComponent=!0;var Lc=Array.isArray,cp=Object.prototype.hasOwnProperty,Ca={current:null},up={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,o={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)cp.call(t,r)&&!up.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:wo,type:e,key:l,ref:s,props:o,_owner:Ca.current}}function lg(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function sg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ic=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sg(""+e.key):t.toString(36)}function Zo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case wo:case Y0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+$l(s,0):r,Lc(o)?(n="",e!=null&&(n=e.replace(Ic,"$&/")+"/"),Zo(o,t,n,"",function(d){return d})):o!=null&&(Sa(o)&&(o=lg(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ic,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Lc(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+$l(l,a);s+=Zo(l,t,n,c,o)}else if(c=ig(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+$l(l,a++),s+=Zo(l,t,n,c,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Eo(e,t,n){if(e==null)return e;var r=[],o=0;return Zo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function ag(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ei={transition:null},cg={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ei,ReactCurrentOwner:Ca};function pp(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Eo,forEach:function(e,t,n){Eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Eo(e,function(){t++}),t},toArray:function(e){return Eo(e,function(t){return t})||[]},only:function(e){if(!Sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=ur;N.Fragment=J0;N.Profiler=q0;N.PureComponent=ja;N.StrictMode=X0;N.Suspense=ng;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;N.act=pp;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lp({},e.props),o=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)cp.call(t,c)&&!up.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:wo,type:e.type,key:o,ref:l,props:r,_owner:s}};N.createContext=function(e){return e={$$typeof:eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Z0,_context:e},e.Consumer=e};N.createElement=dp;N.createFactory=function(e){var t=dp.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:tg,render:e}};N.isValidElement=Sa;N.lazy=function(e){return{$$typeof:og,_payload:{_status:-1,_result:e},_init:ag}};N.memo=function(e,t){return{$$typeof:rg,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=ei.transition;ei.transition={};try{e()}finally{ei.transition=t}};N.unstable_act=pp;N.useCallback=function(e,t){return $e.current.useCallback(e,t)};N.useContext=function(e){return $e.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};N.useEffect=function(e,t){return $e.current.useEffect(e,t)};N.useId=function(){return $e.current.useId()};N.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return $e.current.useMemo(e,t)};N.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};N.useRef=function(e){return $e.current.useRef(e)};N.useState=function(e){return $e.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return $e.current.useTransition()};N.version="18.3.1";op.exports=N;var w=op.exports;const ve=G0(w),ug=K0({__proto__:null,default:ve},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=w,pg=Symbol.for("react.element"),fg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,gg=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mg={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,o={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)hg.call(t,r)&&!mg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:pg,type:e,key:l,ref:s,props:o,_owner:gg.current}}Gi.Fragment=fg;Gi.jsx=fp;Gi.jsxs=fp;rp.exports=Gi;var i=rp.exports,hp={exports:{}},Fe={},gp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var D=T.length;T.push(R);e:for(;0<D;){var H=D-1>>>1,_=T[H];if(0<o(_,R))T[H]=R,T[D]=_,D=H;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],D=T.pop();if(D!==R){T[0]=D;e:for(var H=0,_=T.length,ae=_>>>1;H<ae;){var ne=2*(H+1)-1,ie=T[ne],Re=ne+1,_e=T[Re];if(0>o(ie,D))Re<_&&0>o(_e,ie)?(T[H]=_e,T[Re]=D,H=Re):(T[H]=ie,T[ne]=D,H=ne);else if(Re<_&&0>o(_e,D))T[H]=_e,T[Re]=D,H=Re;else break e}}return R}function o(T,R){var D=T.sortIndex-R.sortIndex;return D!==0?D:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],d=[],h=1,g=null,m=3,y=!1,k=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var R=n(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=T)r(d),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(d)}}function v(T){if(b=!1,x(T),!k)if(n(c)!==null)k=!0,jt(j);else{var R=n(d);R!==null&&en(v,R.startTime-T)}}function j(T,R){k=!1,b&&(b=!1,f($),$=-1),y=!0;var D=m;try{for(x(R),g=n(c);g!==null&&(!(g.expirationTime>R)||T&&!A());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var _=H(g.expirationTime<=R);R=e.unstable_now(),typeof _=="function"?g.callback=_:g===n(c)&&r(c),x(R)}else r(c);g=n(c)}if(g!==null)var ae=!0;else{var ne=n(d);ne!==null&&en(v,ne.startTime-R),ae=!1}return ae}finally{g=null,m=D,y=!1}}var E=!1,S=null,$=-1,z=5,L=-1;function A(){return!(e.unstable_now()-L<z)}function te(){if(S!==null){var T=e.unstable_now();L=T;var R=!0;try{R=S(!0,T)}finally{R?O():(E=!1,S=null)}}else E=!1}var O;if(typeof p=="function")O=function(){p(te)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Zt=Se.port2;Se.port1.onmessage=te,O=function(){Zt.postMessage(null)}}else O=function(){C(te,0)};function jt(T){S=T,E||(E=!0,O())}function en(T,R){$=C(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,jt(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var D=m;m=R;try{return T()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=m;m=T;try{return R()}finally{m=D}},e.unstable_scheduleCallback=function(T,R,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,T){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=D+_,T={id:h++,callback:R,priorityLevel:T,startTime:D,expirationTime:_,sortIndex:-1},D>H?(T.sortIndex=D,t(d,T),n(c)===null&&T===n(d)&&(b?(f($),$=-1):b=!0,en(v,D-H))):(T.sortIndex=_,t(c,T),k||y||(k=!0,jt(j))),T},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(T){var R=m;return function(){var D=m;m=R;try{return T.apply(this,arguments)}finally{m=D}}}})(mp);gp.exports=mp;var xg=gp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=w,Ae=xg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xp=new Set,Yr={};function bn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Yr[e]=t,e=0;e<t.length;e++)xp.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,vg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Rc={};function wg(e){return hs.call(Rc,e)?!0:hs.call(zc,e)?!1:vg.test(e)?Rc[e]=!0:(zc[e]=!0,!1)}function bg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kg(e,t,n,r){if(t===null||typeof t>"u"||bg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ea=/[\-:]([a-z])/g;function Pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ea,Pa);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ea,Pa);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ea,Pa);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ta(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kg(t,n,o,r)&&(n=null),r||o===null?wg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),gs=Symbol.for("react.profiler"),yp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),Ia=Symbol.for("react.forward_ref"),ms=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),za=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),wp=Symbol.for("react.offscreen"),Dc=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=Dc&&e[Dc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Cl;function Tr(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var Sl=!1;function El(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,a=l.length-1;1<=s&&0<=a&&o[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==l[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function jg(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Tn:return"Portal";case gs:return"Profiler";case La:return"StrictMode";case ms:return"Suspense";case xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vp:return(e.displayName||"Context")+".Consumer";case yp:return(e._context.displayName||"Context")+".Provider";case Ia:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case za:return t=e.displayName||null,t!==null?t:ys(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return ys(e(t))}catch{}}return null}function $g(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ys(t);case 8:return t===La?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cg(e){var t=bp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function To(e){e._valueTracker||(e._valueTracker=Cg(e))}function kp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jp(e,t){t=t.checked,t!=null&&Ta(e,"checked",t,!1)}function ws(e,t){jp(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&bs(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bs(e,t,n){(t!=="number"||xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function Bn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ks(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Lr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function $p(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function js(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lo,Sp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sg=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){Sg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function Ep(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Pp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ep(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Eg=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(Eg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ss=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,Un=null,Wn=null;function Oc(e){if(e=jo(e)){if(typeof Es!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Zi(t),Es(e.stateNode,e.type,t))}}function Tp(e){Un?Wn?Wn.push(e):Wn=[e]:Un=e}function Lp(){if(Un){var e=Un,t=Wn;if(Wn=Un=null,Oc(e),t)for(e=0;e<t.length;e++)Oc(t[e])}}function Ip(e,t){return e(t)}function zp(){}var Pl=!1;function Rp(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Ip(e,t,n)}finally{Pl=!1,(Un!==null||Wn!==null)&&(zp(),Lp())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ps=!1;if(mt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Ps=!1}function Pg(e,t,n,r,o,l,s,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Fr=!1,yi=null,vi=!1,Ts=null,Tg={onError:function(e){Fr=!0,yi=e}};function Lg(e,t,n,r,o,l,s,a,c){Fr=!1,yi=null,Pg.apply(Tg,arguments)}function Ig(e,t,n,r,o,l,s,a,c){if(Lg.apply(this,arguments),Fr){if(Fr){var d=yi;Fr=!1,yi=null}else throw Error(P(198));vi||(vi=!0,Ts=d)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _c(e){if(kn(e)!==e)throw Error(P(188))}function zg(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return _c(o),e;if(l===r)return _c(o),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=l;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=l;break}if(a===r){s=!0,r=o,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=o;break}if(a===r){s=!0,r=l,n=o;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Mp(e){return e=zg(e),e!==null?Np(e):null}function Np(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Np(e);if(t!==null)return t;e=e.sibling}return null}var Ap=Ae.unstable_scheduleCallback,Bc=Ae.unstable_cancelCallback,Rg=Ae.unstable_shouldYield,Dg=Ae.unstable_requestPaint,oe=Ae.unstable_now,Mg=Ae.unstable_getCurrentPriorityLevel,Da=Ae.unstable_ImmediatePriority,Fp=Ae.unstable_UserBlockingPriority,wi=Ae.unstable_NormalPriority,Ng=Ae.unstable_LowPriority,Op=Ae.unstable_IdlePriority,Yi=null,at=null;function Ag(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Yi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:_g,Fg=Math.log,Og=Math.LN2;function _g(e){return e>>>=0,e===0?32:31-(Fg(e)/Og|0)|0}var Io=64,zo=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Ir(a):(l&=s,l!==0&&(r=Ir(l)))}else s=n&~o,s!==0?r=Ir(s):l!==0&&(r=Ir(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),o=1<<n,r|=e[n],t&=~o;return r}function Bg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ug(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Ze(l),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=Bg(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _p(){var e=Io;return Io<<=1,!(Io&4194240)&&(Io=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function Wg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ze(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Bp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Up,Na,Wp,Vp,Hp,Is=!1,Ro=[],At=null,Ft=null,Ot=null,qr=new Map,Zr=new Map,It=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function vr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=jo(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hg(e,t,n,r,o){switch(t){case"focusin":return At=vr(At,e,t,n,r,o),!0;case"dragenter":return Ft=vr(Ft,e,t,n,r,o),!0;case"mouseover":return Ot=vr(Ot,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return qr.set(l,vr(qr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Zr.set(l,vr(Zr.get(l)||null,e,t,n,r,o)),!0}return!1}function Qp(e){var t=sn(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dp(n),t!==null){e.blockedOn=t,Hp(e.priority,function(){Wp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ss=r,n.target.dispatchEvent(r),Ss=null}else return t=jo(n),t!==null&&Na(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){ti(e)&&n.delete(t)}function Qg(){Is=!1,At!==null&&ti(At)&&(At=null),Ft!==null&&ti(Ft)&&(Ft=null),Ot!==null&&ti(Ot)&&(Ot=null),qr.forEach(Wc),Zr.forEach(Wc)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Qg)))}function eo(e){function t(o){return wr(o,e)}if(0<Ro.length){wr(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&wr(At,e),Ft!==null&&wr(Ft,e),Ot!==null&&wr(Ot,e),qr.forEach(t),Zr.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)Qp(n),n.blockedOn===null&&It.shift()}var Vn=wt.ReactCurrentBatchConfig,ki=!0;function Kg(e,t,n,r){var o=V,l=Vn.transition;Vn.transition=null;try{V=1,Aa(e,t,n,r)}finally{V=o,Vn.transition=l}}function Gg(e,t,n,r){var o=V,l=Vn.transition;Vn.transition=null;try{V=4,Aa(e,t,n,r)}finally{V=o,Vn.transition=l}}function Aa(e,t,n,r){if(ki){var o=zs(e,t,n,r);if(o===null)Ol(e,t,r,ji,n),Uc(e,r);else if(Hg(o,e,t,n,r))r.stopPropagation();else if(Uc(e,r),t&4&&-1<Vg.indexOf(e)){for(;o!==null;){var l=jo(o);if(l!==null&&Up(l),l=zs(e,t,n,r),l===null&&Ol(e,t,r,ji,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var ji=null;function zs(e,t,n,r){if(ji=null,e=Ra(r),e=sn(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ji=e,null}function Kp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mg()){case Da:return 1;case Fp:return 4;case wi:case Ng:return 16;case Op:return 536870912;default:return 16}default:return 16}}var Rt=null,Fa=null,ni=null;function Gp(){if(ni)return ni;var e,t=Fa,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[l-r];r++);return ni=o.slice(e,1<r?1-r:void 0)}function ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function Vc(){return!1}function Oe(e){function t(n,r,o,l,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Do:Vc,this.isPropagationStopped=Vc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=Oe(dr),ko=ee({},dr,{view:0,detail:0}),Yg=Oe(ko),Ll,Il,br,Ji=ee({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Ll=e.screenX-br.screenX,Il=e.screenY-br.screenY):Il=Ll=0,br=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Hc=Oe(Ji),Jg=ee({},Ji,{dataTransfer:0}),Xg=Oe(Jg),qg=ee({},ko,{relatedTarget:0}),zl=Oe(qg),Zg=ee({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),em=Oe(Zg),tm=ee({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Oe(tm),rm=ee({},dr,{data:0}),Qc=Oe(rm),om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function _a(){return sm}var am=ee({},ko,{key:function(e){if(e.key){var t=om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=Oe(am),um=ee({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=Oe(um),dm=ee({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),pm=Oe(dm),fm=ee({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=Oe(fm),gm=ee({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Oe(gm),xm=[9,13,27,32],Ba=mt&&"CompositionEvent"in window,Or=null;mt&&"documentMode"in document&&(Or=document.documentMode);var ym=mt&&"TextEvent"in window&&!Or,Yp=mt&&(!Ba||Or&&8<Or&&11>=Or),Gc=" ",Yc=!1;function Jp(e,t){switch(e){case"keyup":return xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function vm(e,t){switch(e){case"compositionend":return Xp(t);case"keypress":return t.which!==32?null:(Yc=!0,Gc);case"textInput":return e=t.data,e===Gc&&Yc?null:e;default:return null}}function wm(e,t){if(In)return e==="compositionend"||!Ba&&Jp(e,t)?(e=Gp(),ni=Fa=Rt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yp&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function qp(e,t,n,r){Tp(r),t=$i(t,"onChange"),0<t.length&&(n=new Oa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,to=null;function km(e){uf(e,0)}function Xi(e){var t=Dn(e);if(kp(t))return e}function jm(e,t){if(e==="change")return t}var Zp=!1;if(mt){var Rl;if(mt){var Dl="oninput"in document;if(!Dl){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),Dl=typeof Xc.oninput=="function"}Rl=Dl}else Rl=!1;Zp=Rl&&(!document.documentMode||9<document.documentMode)}function qc(){_r&&(_r.detachEvent("onpropertychange",ef),to=_r=null)}function ef(e){if(e.propertyName==="value"&&Xi(to)){var t=[];qp(t,to,e,Ra(e)),Rp(km,t)}}function $m(e,t,n){e==="focusin"?(qc(),_r=t,to=n,_r.attachEvent("onpropertychange",ef)):e==="focusout"&&qc()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xi(to)}function Sm(e,t){if(e==="click")return Xi(t)}function Em(e,t){if(e==="input"||e==="change")return Xi(t)}function Pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Pm;function no(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!hs.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function Zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=Zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zc(n)}}function tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nf(){for(var e=window,t=xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xi(e.document)}return t}function Ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tm(e){var t=nf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tf(n.ownerDocument.documentElement,n)){if(r!==null&&Ua(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=eu(n,l);var s=eu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lm=mt&&"documentMode"in document&&11>=document.documentMode,zn=null,Rs=null,Br=null,Ds=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||zn==null||zn!==xi(r)||(r=zn,"selectionStart"in r&&Ua(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&no(Br,r)||(Br=r,r=$i(Rs,"onSelect"),0<r.length&&(t=new Oa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Ml={},rf={};mt&&(rf=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function qi(e){if(Ml[e])return Ml[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rf)return Ml[e]=t[n];return e}var of=qi("animationend"),lf=qi("animationiteration"),sf=qi("animationstart"),af=qi("transitionend"),cf=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){cf.set(e,t),bn(t,[e])}for(var Nl=0;Nl<nu.length;Nl++){var Al=nu[Nl],Im=Al.toLowerCase(),zm=Al[0].toUpperCase()+Al.slice(1);Jt(Im,"on"+zm)}Jt(of,"onAnimationEnd");Jt(lf,"onAnimationIteration");Jt(sf,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(af,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ig(r,t,void 0,e),e.currentTarget=null}function uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==l&&o.isPropagationStopped())break e;ru(o,a,d),l=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,d=a.currentTarget,a=a.listener,c!==l&&o.isPropagationStopped())break e;ru(o,a,d),l=c}}}if(vi)throw e=Ts,vi=!1,Ts=null,e}function K(e,t){var n=t[Os];n===void 0&&(n=t[Os]=new Set);var r=e+"__bubble";n.has(r)||(df(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),df(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[No]){e[No]=!0,xp.forEach(function(n){n!=="selectionchange"&&(Rm.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Fl("selectionchange",!1,t))}}function df(e,t,n,r){switch(Kp(t)){case 1:var o=Kg;break;case 4:o=Gg;break;default:o=Aa}n=o.bind(null,t,n,e),o=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=sn(a),s===null)return;if(c=s.tag,c===5||c===6){r=l=s;continue e}a=a.parentNode}}r=r.return}Rp(function(){var d=l,h=Ra(n),g=[];e:{var m=cf.get(e);if(m!==void 0){var y=Oa,k=e;switch(e){case"keypress":if(ri(n)===0)break e;case"keydown":case"keyup":y=cm;break;case"focusin":k="focus",y=zl;break;case"focusout":k="blur",y=zl;break;case"beforeblur":case"afterblur":y=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pm;break;case of:case lf:case sf:y=em;break;case af:y=hm;break;case"scroll":y=Yg;break;case"wheel":y=mm;break;case"copy":case"cut":case"paste":y=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kc}var b=(t&4)!==0,C=!b&&e==="scroll",f=b?m!==null?m+"Capture":null:m;b=[];for(var p=d,x;p!==null;){x=p;var v=x.stateNode;if(x.tag===5&&v!==null&&(x=v,f!==null&&(v=Xr(p,f),v!=null&&b.push(oo(p,v,x)))),C)break;p=p.return}0<b.length&&(m=new y(m,k,null,n,h),g.push({event:m,listeners:b}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Ss&&(k=n.relatedTarget||n.fromElement)&&(sn(k)||k[xt]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=d,k=k?sn(k):null,k!==null&&(C=kn(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=d),y!==k)){if(b=Hc,v="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Kc,v="onPointerLeave",f="onPointerEnter",p="pointer"),C=y==null?m:Dn(y),x=k==null?m:Dn(k),m=new b(v,p+"leave",y,n,h),m.target=C,m.relatedTarget=x,v=null,sn(h)===d&&(b=new b(f,p+"enter",k,n,h),b.target=x,b.relatedTarget=C,v=b),C=v,y&&k)t:{for(b=y,f=k,p=0,x=b;x;x=$n(x))p++;for(x=0,v=f;v;v=$n(v))x++;for(;0<p-x;)b=$n(b),p--;for(;0<x-p;)f=$n(f),x--;for(;p--;){if(b===f||f!==null&&b===f.alternate)break t;b=$n(b),f=$n(f)}b=null}else b=null;y!==null&&ou(g,m,y,b,!1),k!==null&&C!==null&&ou(g,C,k,b,!0)}}e:{if(m=d?Dn(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var j=jm;else if(Jc(m))if(Zp)j=Em;else{j=Cm;var E=$m}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Sm);if(j&&(j=j(e,d))){qp(g,j,n,h);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&bs(m,"number",m.value)}switch(E=d?Dn(d):window,e){case"focusin":(Jc(E)||E.contentEditable==="true")&&(zn=E,Rs=d,Br=null);break;case"focusout":Br=Rs=zn=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,tu(g,n,h);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":tu(g,n,h)}var S;if(Ba)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else In?Jp(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Yp&&n.locale!=="ko"&&(In||$!=="onCompositionStart"?$==="onCompositionEnd"&&In&&(S=Gp()):(Rt=h,Fa="value"in Rt?Rt.value:Rt.textContent,In=!0)),E=$i(d,$),0<E.length&&($=new Qc($,e,null,n,h),g.push({event:$,listeners:E}),S?$.data=S:(S=Xp(n),S!==null&&($.data=S)))),(S=ym?vm(e,n):wm(e,n))&&(d=$i(d,"onBeforeInput"),0<d.length&&(h=new Qc("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=S))}uf(g,t)})}function oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Xr(e,n),l!=null&&r.unshift(oo(e,l,o)),l=Xr(e,t),l!=null&&r.push(oo(e,l,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,n,r,o){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,o?(c=Xr(n,l),c!=null&&s.unshift(oo(n,c,a))):o||(c=Xr(n,l),c!=null&&s.push(oo(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Dm=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(Dm,`
`).replace(Mm,"")}function Ao(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(P(425))}function Ci(){}var Ms=null,Ns=null;function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fs=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,Am=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(Fm)}:Fs;function Fm(e){setTimeout(function(){throw e})}function _l(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);eo(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),st="__reactFiber$"+pr,io="__reactProps$"+pr,xt="__reactContainer$"+pr,Os="__reactEvents$"+pr,Om="__reactListeners$"+pr,_m="__reactHandles$"+pr;function sn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[st])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function jo(e){return e=e[st]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Zi(e){return e[io]||null}var _s=[],Mn=-1;function Xt(e){return{current:e}}function Y(e){0>Mn||(e.current=_s[Mn],_s[Mn]=null,Mn--)}function Q(e,t){Mn++,_s[Mn]=e.current,e.current=t}var Gt={},be=Xt(Gt),Le=Xt(!1),fn=Gt;function Xn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function Si(){Y(Le),Y(be)}function au(e,t,n){if(be.current!==Gt)throw Error(P(168));Q(be,t),Q(Le,n)}function pf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,$g(e)||"Unknown",o));return ee({},n,r)}function Ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,fn=be.current,Q(be,e),Q(Le,Le.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=pf(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,Y(Le),Y(be),Q(be,e)):Y(Le),Q(Le,n)}var pt=null,el=!1,Bl=!1;function ff(e){pt===null?pt=[e]:pt.push(e)}function Bm(e){el=!0,ff(e)}function qt(){if(!Bl&&pt!==null){Bl=!0;var e=0,t=V;try{var n=pt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,el=!1}catch(o){throw pt!==null&&(pt=pt.slice(e+1)),Ap(Da,qt),o}finally{V=t,Bl=!1}}return null}var Nn=[],An=0,Pi=null,Ti=0,Be=[],Ue=0,hn=null,ft=1,ht="";function nn(e,t){Nn[An++]=Ti,Nn[An++]=Pi,Pi=e,Ti=t}function hf(e,t,n){Be[Ue++]=ft,Be[Ue++]=ht,Be[Ue++]=hn,hn=e;var r=ft;e=ht;var o=32-Ze(r)-1;r&=~(1<<o),n+=1;var l=32-Ze(t)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,ft=1<<32-Ze(t)+o|n<<o|r,ht=l+e}else ft=1<<l|n<<o|r,ht=e}function Wa(e){e.return!==null&&(nn(e,1),hf(e,1,0))}function Va(e){for(;e===Pi;)Pi=Nn[--An],Nn[An]=null,Ti=Nn[--An],Nn[An]=null;for(;e===hn;)hn=Be[--Ue],Be[Ue]=null,ht=Be[--Ue],Be[Ue]=null,ft=Be[--Ue],Be[Ue]=null}var Ne=null,Me=null,J=!1,qe=null;function gf(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Me=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Me=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Us(e){if(J){var t=Me;if(t){var n=t;if(!uu(e,t)){if(Bs(e))throw Error(P(418));t=_t(n.nextSibling);var r=Ne;t&&uu(e,t)?gf(r,n):(e.flags=e.flags&-4097|2,J=!1,Ne=e)}}else{if(Bs(e))throw Error(P(418));e.flags=e.flags&-4097|2,J=!1,Ne=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Fo(e){if(e!==Ne)return!1;if(!J)return du(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!As(e.type,e.memoizedProps)),t&&(t=Me)){if(Bs(e))throw mf(),Error(P(418));for(;t;)gf(e,t),t=_t(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Ne?_t(e.stateNode.nextSibling):null;return!0}function mf(){for(var e=Me;e;)e=_t(e.nextSibling)}function qn(){Me=Ne=null,J=!1}function Ha(e){qe===null?qe=[e]:qe.push(e)}var Um=wt.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=o.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function xf(e){function t(f,p){if(e){var x=f.deletions;x===null?(f.deletions=[p],f.flags|=16):x.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function o(f,p){return f=Vt(f,p),f.index=0,f.sibling=null,f}function l(f,p,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<p?(f.flags|=2,p):x):(f.flags|=2,p)):(f.flags|=1048576,p)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,p,x,v){return p===null||p.tag!==6?(p=Gl(x,f.mode,v),p.return=f,p):(p=o(p,x),p.return=f,p)}function c(f,p,x,v){var j=x.type;return j===Ln?h(f,p,x.props.children,v,x.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Tt&&pu(j)===p.type)?(v=o(p,x.props),v.ref=kr(f,p,x),v.return=f,v):(v=ui(x.type,x.key,x.props,null,f.mode,v),v.ref=kr(f,p,x),v.return=f,v)}function d(f,p,x,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Yl(x,f.mode,v),p.return=f,p):(p=o(p,x.children||[]),p.return=f,p)}function h(f,p,x,v,j){return p===null||p.tag!==7?(p=dn(x,f.mode,v,j),p.return=f,p):(p=o(p,x),p.return=f,p)}function g(f,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Gl(""+p,f.mode,x),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Po:return x=ui(p.type,p.key,p.props,null,f.mode,x),x.ref=kr(f,null,p),x.return=f,x;case Tn:return p=Yl(p,f.mode,x),p.return=f,p;case Tt:var v=p._init;return g(f,v(p._payload),x)}if(Lr(p)||xr(p))return p=dn(p,f.mode,x,null),p.return=f,p;Oo(f,p)}return null}function m(f,p,x,v){var j=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return j!==null?null:a(f,p,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Po:return x.key===j?c(f,p,x,v):null;case Tn:return x.key===j?d(f,p,x,v):null;case Tt:return j=x._init,m(f,p,j(x._payload),v)}if(Lr(x)||xr(x))return j!==null?null:h(f,p,x,v,null);Oo(f,x)}return null}function y(f,p,x,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(x)||null,a(p,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Po:return f=f.get(v.key===null?x:v.key)||null,c(p,f,v,j);case Tn:return f=f.get(v.key===null?x:v.key)||null,d(p,f,v,j);case Tt:var E=v._init;return y(f,p,x,E(v._payload),j)}if(Lr(v)||xr(v))return f=f.get(x)||null,h(p,f,v,j,null);Oo(p,v)}return null}function k(f,p,x,v){for(var j=null,E=null,S=p,$=p=0,z=null;S!==null&&$<x.length;$++){S.index>$?(z=S,S=null):z=S.sibling;var L=m(f,S,x[$],v);if(L===null){S===null&&(S=z);break}e&&S&&L.alternate===null&&t(f,S),p=l(L,p,$),E===null?j=L:E.sibling=L,E=L,S=z}if($===x.length)return n(f,S),J&&nn(f,$),j;if(S===null){for(;$<x.length;$++)S=g(f,x[$],v),S!==null&&(p=l(S,p,$),E===null?j=S:E.sibling=S,E=S);return J&&nn(f,$),j}for(S=r(f,S);$<x.length;$++)z=y(S,f,$,x[$],v),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?$:z.key),p=l(z,p,$),E===null?j=z:E.sibling=z,E=z);return e&&S.forEach(function(A){return t(f,A)}),J&&nn(f,$),j}function b(f,p,x,v){var j=xr(x);if(typeof j!="function")throw Error(P(150));if(x=j.call(x),x==null)throw Error(P(151));for(var E=j=null,S=p,$=p=0,z=null,L=x.next();S!==null&&!L.done;$++,L=x.next()){S.index>$?(z=S,S=null):z=S.sibling;var A=m(f,S,L.value,v);if(A===null){S===null&&(S=z);break}e&&S&&A.alternate===null&&t(f,S),p=l(A,p,$),E===null?j=A:E.sibling=A,E=A,S=z}if(L.done)return n(f,S),J&&nn(f,$),j;if(S===null){for(;!L.done;$++,L=x.next())L=g(f,L.value,v),L!==null&&(p=l(L,p,$),E===null?j=L:E.sibling=L,E=L);return J&&nn(f,$),j}for(S=r(f,S);!L.done;$++,L=x.next())L=y(S,f,$,L.value,v),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?$:L.key),p=l(L,p,$),E===null?j=L:E.sibling=L,E=L);return e&&S.forEach(function(te){return t(f,te)}),J&&nn(f,$),j}function C(f,p,x,v){if(typeof x=="object"&&x!==null&&x.type===Ln&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Po:e:{for(var j=x.key,E=p;E!==null;){if(E.key===j){if(j=x.type,j===Ln){if(E.tag===7){n(f,E.sibling),p=o(E,x.props.children),p.return=f,f=p;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Tt&&pu(j)===E.type){n(f,E.sibling),p=o(E,x.props),p.ref=kr(f,E,x),p.return=f,f=p;break e}n(f,E);break}else t(f,E);E=E.sibling}x.type===Ln?(p=dn(x.props.children,f.mode,v,x.key),p.return=f,f=p):(v=ui(x.type,x.key,x.props,null,f.mode,v),v.ref=kr(f,p,x),v.return=f,f=v)}return s(f);case Tn:e:{for(E=x.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(f,p.sibling),p=o(p,x.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=Yl(x,f.mode,v),p.return=f,f=p}return s(f);case Tt:return E=x._init,C(f,p,E(x._payload),v)}if(Lr(x))return k(f,p,x,v);if(xr(x))return b(f,p,x,v);Oo(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(f,p.sibling),p=o(p,x),p.return=f,f=p):(n(f,p),p=Gl(x,f.mode,v),p.return=f,f=p),s(f)):n(f,p)}return C}var Zn=xf(!0),yf=xf(!1),Li=Xt(null),Ii=null,Fn=null,Qa=null;function Ka(){Qa=Fn=Ii=null}function Ga(e){var t=Li.current;Y(Li),e._currentValue=t}function Ws(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){Ii=e,Qa=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Qa!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(Ii===null)throw Error(P(308));Fn=e,Ii.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var an=null;function Ya(e){an===null?an=[e]:an.push(e)}function vf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ya(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ya(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ma(e,n)}}function fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zi(e,t,n,r){var o=e.updateQueue;Lt=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,d=c.next;c.next=null,s===null?l=d:s.next=d,s=c;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=c))}if(l!==null){var g=o.baseState;s=0,h=d=c=null,a=l;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,b=a;switch(m=t,y=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){g=k.call(y,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,m=typeof k=="function"?k.call(y,g,m):k,m==null)break e;g=ee({},g,m);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=y,c=g):h=h.next=y,s|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(c=g),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);mn|=s,e.lanes=s,e.memoizedState=g}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var $o={},ct=Xt($o),lo=Xt($o),so=Xt($o);function cn(e){if(e===$o)throw Error(P(174));return e}function Xa(e,t){switch(Q(so,t),Q(lo,e),Q(ct,$o),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:js(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=js(t,e)}Y(ct),Q(ct,t)}function er(){Y(ct),Y(lo),Y(so)}function bf(e){cn(so.current);var t=cn(ct.current),n=js(t,e.type);t!==n&&(Q(lo,e),Q(ct,n))}function qa(e){lo.current===e&&(Y(ct),Y(lo))}var X=Xt(0);function Ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Za(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var ii=wt.ReactCurrentDispatcher,Wl=wt.ReactCurrentBatchConfig,gn=0,q=null,ce=null,pe=null,Di=!1,Ur=!1,ao=0,Wm=0;function xe(){throw Error(P(321))}function ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function tc(e,t,n,r,o,l){if(gn=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?Km:Gm,e=n(r,o),Ur){l=0;do{if(Ur=!1,ao=0,25<=l)throw Error(P(301));l+=1,pe=ce=null,t.updateQueue=null,ii.current=Ym,e=n(r,o)}while(Ur)}if(ii.current=Mi,t=ce!==null&&ce.next!==null,gn=0,pe=ce=q=null,Di=!1,t)throw Error(P(300));return e}function nc(){var e=ao!==0;return ao=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?q.memoizedState=pe=e:pe=pe.next=e,pe}function Qe(){if(ce===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?q.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(P(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?q.memoizedState=pe=e:pe=pe.next=e}return pe}function co(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ce,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=s=null,c=null,d=l;do{var h=d.lane;if((gn&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=g,s=r):c=c.next=g,q.lanes|=h,mn|=h}d=d.next}while(d!==null&&d!==l);c===null?s=r:c.next=a,nt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,q.lanes|=l,mn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);nt(l,t.memoizedState)||(Te=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function kf(){}function jf(e,t){var n=q,r=Qe(),o=t(),l=!nt(r.memoizedState,o);if(l&&(r.memoizedState=o,Te=!0),r=r.queue,rc(Sf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,uo(9,Cf.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(P(349));gn&30||$f(n,t,o)}return o}function $f(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cf(e,t,n,r){t.value=n,t.getSnapshot=r,Ef(t)&&Pf(e)}function Sf(e,t,n){return n(function(){Ef(t)&&Pf(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Pf(e){var t=yt(e,1);t!==null&&et(t,e,1,-1)}function gu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=e,e=e.dispatch=Qm.bind(null,q,e),[t.memoizedState,e]}function uo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tf(){return Qe().memoizedState}function li(e,t,n,r){var o=lt();q.flags|=e,o.memoizedState=uo(1|t,n,void 0,r===void 0?null:r)}function tl(e,t,n,r){var o=Qe();r=r===void 0?null:r;var l=void 0;if(ce!==null){var s=ce.memoizedState;if(l=s.destroy,r!==null&&ec(r,s.deps)){o.memoizedState=uo(t,n,l,r);return}}q.flags|=e,o.memoizedState=uo(1|t,n,l,r)}function mu(e,t){return li(8390656,8,e,t)}function rc(e,t){return tl(2048,8,e,t)}function Lf(e,t){return tl(4,2,e,t)}function If(e,t){return tl(4,4,e,t)}function zf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rf(e,t,n){return n=n!=null?n.concat([e]):null,tl(4,4,zf.bind(null,t,e),n)}function oc(){}function Df(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mf(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nf(e,t,n){return gn&21?(nt(n,t)||(n=_p(),q.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function Vm(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{V=n,Wl.transition=r}}function Af(){return Qe().memoizedState}function Hm(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ff(e))Of(t,n);else if(n=vf(e,t,n,r),n!==null){var o=je();et(n,e,r,o),_f(n,t,r)}}function Qm(e,t,n){var r=Wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ff(e))Of(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(o.hasEagerState=!0,o.eagerState=a,nt(a,s)){var c=t.interleaved;c===null?(o.next=o,Ya(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=vf(e,t,o,r),n!==null&&(o=je(),et(n,e,r,o),_f(n,t,r))}}function Ff(e){var t=e.alternate;return e===q||t!==null&&t===q}function Of(e,t){Ur=Di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _f(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ma(e,n)}}var Mi={readContext:He,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Km={readContext:He,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,li(4194308,4,zf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:gu,useDebugValue:oc,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=gu(!1),t=e[0];return e=Vm.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=lt();if(J){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),fe===null)throw Error(P(349));gn&30||$f(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,mu(Sf.bind(null,r,l,e),[e]),r.flags|=2048,uo(9,Cf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=lt(),t=fe.identifierPrefix;if(J){var n=ht,r=ft;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ao++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gm={readContext:He,useCallback:Df,useContext:He,useEffect:rc,useImperativeHandle:Rf,useInsertionEffect:Lf,useLayoutEffect:If,useMemo:Mf,useReducer:Vl,useRef:Tf,useState:function(){return Vl(co)},useDebugValue:oc,useDeferredValue:function(e){var t=Qe();return Nf(t,ce.memoizedState,e)},useTransition:function(){var e=Vl(co)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:kf,useSyncExternalStore:jf,useId:Af,unstable_isNewReconciler:!1},Ym={readContext:He,useCallback:Df,useContext:He,useEffect:rc,useImperativeHandle:Rf,useInsertionEffect:Lf,useLayoutEffect:If,useMemo:Mf,useReducer:Hl,useRef:Tf,useState:function(){return Hl(co)},useDebugValue:oc,useDeferredValue:function(e){var t=Qe();return ce===null?t.memoizedState=e:Nf(t,ce.memoizedState,e)},useTransition:function(){var e=Hl(co)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:kf,useSyncExternalStore:jf,useId:Af,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nl={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),o=Wt(e),l=gt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,o),t!==null&&(et(t,e,o,r),oi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),o=Wt(e),l=gt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,o),t!==null&&(et(t,e,o,r),oi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Wt(e),o=gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(et(t,e,r,n),oi(t,e,r))}};function xu(e,t,n,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!no(n,r)||!no(o,l):!0}function Bf(e,t,n){var r=!1,o=Gt,l=t.contextType;return typeof l=="object"&&l!==null?l=He(l):(o=Ie(t)?fn:be.current,r=t.contextTypes,l=(r=r!=null)?Xn(e,o):Gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function Hs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ja(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=He(l):(l=Ie(t)?fn:be.current,o.context=Xn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Vs(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&nl.enqueueReplaceState(o,o.state,null),zi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=jg(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jm=typeof WeakMap=="function"?WeakMap:Map;function Uf(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ai||(Ai=!0,na=r),Qs(e,t)},n}function Wf(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Qs(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Qs(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ux.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var Xm=wt.ReactCurrentOwner,Te=!1;function ke(e,t,n,r){t.child=e===null?yf(t,null,n,r):Zn(t,e.child,n,r)}function ku(e,t,n,r,o){n=n.render;var l=t.ref;return Hn(t,o),r=tc(e,t,n,r,l,o),n=nc(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(J&&n&&Wa(t),t.flags|=1,ke(e,t,r,o),t.child)}function ju(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!pc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Vf(e,t,l,r,o)):(e=ui(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(s,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=Vt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Vf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(no(l,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,vt(e,t,o)}return Ks(e,t,n,r,o)}function Hf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(_n,De),De|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(_n,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Q(_n,De),De|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Q(_n,De),De|=r;return ke(e,t,o,n),t.child}function Qf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,o){var l=Ie(n)?fn:be.current;return l=Xn(t,l),Hn(t,o),n=tc(e,t,n,r,l,o),r=nc(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(J&&r&&Wa(t),t.flags|=1,ke(e,t,n,o),t.child)}function $u(e,t,n,r,o){if(Ie(n)){var l=!0;Ei(t)}else l=!1;if(Hn(t,o),t.stateNode===null)si(e,t),Bf(t,n,r),Hs(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=He(d):(d=Ie(n)?fn:be.current,d=Xn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==d)&&yu(t,s,r,d),Lt=!1;var m=t.memoizedState;s.state=m,zi(t,r,s,o),c=t.memoizedState,a!==r||m!==c||Le.current||Lt?(typeof h=="function"&&(Vs(t,n,h,r),c=t.memoizedState),(a=Lt||xu(t,n,a,r,m,c,d))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,wf(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Ye(t.type,a),s.props=d,g=t.pendingProps,m=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=He(c):(c=Ie(n)?fn:be.current,c=Xn(t,c));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==g||m!==c)&&yu(t,s,r,c),Lt=!1,m=t.memoizedState,s.state=m,zi(t,r,s,o);var k=t.memoizedState;a!==g||m!==k||Le.current||Lt?(typeof y=="function"&&(Vs(t,n,y,r),k=t.memoizedState),(d=Lt||xu(t,n,d,r,m,k,c)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),s.props=r,s.state=k,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,l,o)}function Gs(e,t,n,r,o,l){Qf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&cu(t,n,!1),vt(e,t,l);r=t.stateNode,Xm.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Zn(t,e.child,null,l),t.child=Zn(t,null,a,l)):ke(e,t,a,l),t.memoizedState=r.state,o&&cu(t,n,!0),t.child}function Kf(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),Xa(e,t.containerInfo)}function Cu(e,t,n,r,o){return qn(),Ha(o),t.flags|=256,ke(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gf(e,t,n){var r=t.pendingProps,o=X.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(X,o&1),e===null)return Us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=il(s,r,0,null),e=dn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Js(n),t.memoizedState=Ys,e):ic(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return qm(e,t,s,r,a,o,n);if(l){l=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Vt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Vt(a,l):(l=dn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Js(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return l=e.child,e=l.sibling,r=Vt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ic(e,t){return t=il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&Ha(r),Zn(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qm(e,t,n,r,o,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(P(422))),_o(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=il({mode:"visible",children:r.children},o,0,null),l=dn(l,o,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Zn(t,e.child,null,s),t.child.memoizedState=Js(s),t.memoizedState=Ys,l);if(!(t.mode&1))return _o(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(P(419)),r=Ql(l,r,void 0),_o(e,t,s,r)}if(a=(s&e.childLanes)!==0,Te||a){if(r=fe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,yt(e,o),et(r,e,o,-1))}return dc(),r=Ql(Error(P(421))),_o(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=dx.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Me=_t(o.nextSibling),Ne=t,J=!0,qe=null,e!==null&&(Be[Ue++]=ft,Be[Ue++]=ht,Be[Ue++]=hn,ft=e.id,ht=e.overflow,hn=t),t=ic(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ws(e.return,t,n)}function Kl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Yf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ke(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ri(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Kl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ri(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Kl(t,!0,n,null,l);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zm(e,t,n){switch(t.tag){case 3:Kf(t),qn();break;case 5:bf(t);break;case 1:Ie(t.type)&&Ei(t);break;case 4:Xa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(Li,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Gf(e,t,n):(Q(X,X.current&1),e=vt(e,t,n),e!==null?e.sibling:null);Q(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Hf(e,t,n)}return vt(e,t,n)}var Jf,Xs,Xf,qf;Jf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xs=function(){};Xf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,cn(ct.current);var l=null;switch(n){case"input":o=vs(e,o),r=vs(e,r),l=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),l=[];break;case"textarea":o=ks(e,o),r=ks(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ci)}$s(n,r);var s;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var a=o[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(a=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&K("scroll",e),l||a===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};qf=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ex(e,t,n){var r=t.pendingProps;switch(Va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ie(t.type)&&Si(),ye(t),null;case 3:return r=t.stateNode,er(),Y(Le),Y(be),Za(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(ia(qe),qe=null))),Xs(e,t),ye(t),null;case 5:qa(t);var o=cn(so.current);if(n=t.type,e!==null&&t.stateNode!=null)Xf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ye(t),null}if(e=cn(ct.current),Fo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[st]=t,r[io]=l,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<zr.length;o++)K(zr[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Mc(r,l),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":Ac(r,l),K("invalid",r)}$s(n,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),o=["children",""+a]):Yr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":To(r),Nc(r,l,!0);break;case"textarea":To(r),Fc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ci)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[io]=r,Jf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Cs(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<zr.length;o++)K(zr[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":Mc(e,r),o=vs(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ac(e,r),o=ks(e,r),K("invalid",e);break;default:o=r}$s(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?Pp(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Sp(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Jr(e,c):typeof c=="number"&&Jr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&K("scroll",e):c!=null&&Ta(e,l,c,s))}switch(n){case"input":To(e),Nc(e,r,!1);break;case"textarea":To(e),Fc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Bn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Bn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)qf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=cn(so.current),cn(ct.current),Fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(l=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ye(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Me!==null&&t.mode&1&&!(t.flags&128))mf(),qn(),t.flags|=98560,l=!1;else if(l=Fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[st]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),l=!1}else qe!==null&&(ia(qe),qe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?de===0&&(de=3):dc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return er(),Xs(e,t),e===null&&ro(t.stateNode.containerInfo),ye(t),null;case 10:return Ga(t.type._context),ye(t),null;case 17:return Ie(t.type)&&Si(),ye(t),null;case 19:if(Y(X),l=t.memoizedState,l===null)return ye(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)jr(l,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ri(e),s!==null){for(t.flags|=128,jr(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(X,X.current&1|2),t.child}e=e.sibling}l.tail!==null&&oe()>nr&&(t.flags|=128,r=!0,jr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ri(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!J)return ye(t),null}else 2*oe()-l.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,jr(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=oe(),t.sibling=null,n=X.current,Q(X,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return uc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function tx(e,t){switch(Va(t),t.tag){case 1:return Ie(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),Y(Le),Y(be),Za(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qa(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return er(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Bo=!1,we=!1,nx=typeof WeakSet=="function"?WeakSet:Set,I=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function qs(e,t,n){try{n()}catch(r){re(e,t,r)}}var Eu=!1;function rx(e,t){if(Ms=ki,e=nf(),Ua(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var y;g!==n||o!==0&&g.nodeType!==3||(a=s+o),g!==l||r!==0&&g.nodeType!==3||(c=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(y=g.firstChild)!==null;)m=g,g=y;for(;;){if(g===e)break t;if(m===n&&++d===o&&(a=s),m===l&&++h===r&&(c=s),(y=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ns={focusedElem:e,selectionRange:n},ki=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,C=k.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ye(t.type,b),C);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(v){re(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return k=Eu,Eu=!1,k}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&qs(t,n,l)}o=o.next}while(o!==r)}}function rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zf(e){var t=e.alternate;t!==null&&(e.alternate=null,Zf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[io],delete t[Os],delete t[Om],delete t[_m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eh(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ci));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var he=null,Je=!1;function Ct(e,t,n){for(n=n.child;n!==null;)th(e,t,n),n=n.sibling}function th(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Yi,n)}catch{}switch(n.tag){case 5:we||On(n,t);case 6:var r=he,o=Je;he=null,Ct(e,t,n),he=r,Je=o,he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?_l(e.parentNode,n):e.nodeType===1&&_l(e,n),eo(e)):_l(he,n.stateNode));break;case 4:r=he,o=Je,he=n.stateNode.containerInfo,Je=!0,Ct(e,t,n),he=r,Je=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&qs(n,t,s),o=o.next}while(o!==r)}Ct(e,t,n);break;case 1:if(!we&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Ct(e,t,n),we=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nx),t.forEach(function(r){var o=px.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Je=!1;break e;case 3:he=a.stateNode.containerInfo,Je=!0;break e;case 4:he=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(he===null)throw Error(P(160));th(l,s,o),he=null,Je=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){re(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nh(t,e),t=t.sibling}function nh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),ot(e),r&4){try{Wr(3,e,e.return),rl(3,e)}catch(b){re(e,e.return,b)}try{Wr(5,e,e.return)}catch(b){re(e,e.return,b)}}break;case 1:Ge(t,e),ot(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Ge(t,e),ot(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var o=e.stateNode;try{Jr(o,"")}catch(b){re(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&jp(o,l),Cs(a,s);var d=Cs(a,l);for(s=0;s<c.length;s+=2){var h=c[s],g=c[s+1];h==="style"?Pp(o,g):h==="dangerouslySetInnerHTML"?Sp(o,g):h==="children"?Jr(o,g):Ta(o,h,g,d)}switch(a){case"input":ws(o,l);break;case"textarea":$p(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Bn(o,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?Bn(o,!!l.multiple,l.defaultValue,!0):Bn(o,!!l.multiple,l.multiple?[]:"",!1))}o[io]=l}catch(b){re(e,e.return,b)}}break;case 6:if(Ge(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(b){re(e,e.return,b)}}break;case 3:if(Ge(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(b){re(e,e.return,b)}break;case 4:Ge(t,e),ot(e);break;case 13:Ge(t,e),ot(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ac=oe())),r&4&&Tu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(we=(d=we)||h,Ge(t,e),we=d):Ge(t,e),ot(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(g=I=h;I!==null;){switch(m=I,y=m.child,m.tag){case 0:case 11:case 14:case 15:Wr(4,m,m.return);break;case 1:On(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){re(r,n,b)}}break;case 5:On(m,m.return);break;case 22:if(m.memoizedState!==null){Iu(g);continue}}y!==null?(y.return=m,I=y):Iu(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{o=g.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,c=g.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Ep("display",s))}catch(b){re(e,e.return,b)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(b){re(e,e.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ge(t,e),ot(e),r&4&&Tu(e);break;case 21:break;default:Ge(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(eh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Jr(o,""),r.flags&=-33);var l=Pu(e);ta(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Pu(e);ea(e,a,s);break;default:throw Error(P(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ox(e,t,n){I=e,rh(e)}function rh(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Bo;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||we;a=Bo;var d=we;if(Bo=s,(we=c)&&!d)for(I=o;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?zu(o):c!==null?(c.return=s,I=c):zu(o);for(;l!==null;)I=l,rh(l),l=l.sibling;I=o,Bo=a,we=d}Lu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,I=l):Lu(e)}}function Lu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&hu(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&eo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}we||t.flags&512&&Zs(t)}catch(m){re(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Iu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function zu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(c){re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){re(t,o,c)}}var l=t.return;try{Zs(t)}catch(c){re(t,l,c)}break;case 5:var s=t.return;try{Zs(t)}catch(c){re(t,s,c)}}}catch(c){re(t,t.return,c)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var ix=Math.ceil,Ni=wt.ReactCurrentDispatcher,lc=wt.ReactCurrentOwner,Ve=wt.ReactCurrentBatchConfig,F=0,fe=null,se=null,ge=0,De=0,_n=Xt(0),de=0,po=null,mn=0,ol=0,sc=0,Vr=null,Ee=null,ac=0,nr=1/0,ut=null,Ai=!1,na=null,Ut=null,Uo=!1,Dt=null,Fi=0,Hr=0,ra=null,ai=-1,ci=0;function je(){return F&6?oe():ai!==-1?ai:ai=oe()}function Wt(e){return e.mode&1?F&2&&ge!==0?ge&-ge:Um.transition!==null?(ci===0&&(ci=_p()),ci):(e=V,e!==0||(e=window.event,e=e===void 0?16:Kp(e.type)),e):1}function et(e,t,n,r){if(50<Hr)throw Hr=0,ra=null,Error(P(185));bo(e,n,r),(!(F&2)||e!==fe)&&(e===fe&&(!(F&2)&&(ol|=n),de===4&&zt(e,ge)),ze(e,r),n===1&&F===0&&!(t.mode&1)&&(nr=oe()+500,el&&qt()))}function ze(e,t){var n=e.callbackNode;Ug(e,t);var r=bi(e,e===fe?ge:0);if(r===0)n!==null&&Bc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bc(n),t===1)e.tag===0?Bm(Ru.bind(null,e)):ff(Ru.bind(null,e)),Am(function(){!(F&6)&&qt()}),n=null;else{switch(Bp(r)){case 1:n=Da;break;case 4:n=Fp;break;case 16:n=wi;break;case 536870912:n=Op;break;default:n=wi}n=dh(n,oh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oh(e,t){if(ai=-1,ci=0,F&6)throw Error(P(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=bi(e,e===fe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oi(e,r);else{t=r;var o=F;F|=2;var l=lh();(fe!==e||ge!==t)&&(ut=null,nr=oe()+500,un(e,t));do try{ax();break}catch(a){ih(e,a)}while(!0);Ka(),Ni.current=l,F=o,se!==null?t=0:(fe=null,ge=0,t=de)}if(t!==0){if(t===2&&(o=Ls(e),o!==0&&(r=o,t=oa(e,o))),t===1)throw n=po,un(e,0),zt(e,r),ze(e,oe()),n;if(t===6)zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!lx(o)&&(t=Oi(e,r),t===2&&(l=Ls(e),l!==0&&(r=l,t=oa(e,l))),t===1))throw n=po,un(e,0),zt(e,r),ze(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:rn(e,Ee,ut);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=ac+500-oe(),10<t)){if(bi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fs(rn.bind(null,e,Ee,ut),t);break}rn(e,Ee,ut);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Ze(r);l=1<<s,s=t[s],s>o&&(o=s),r&=~l}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ix(r/1960))-r,10<r){e.timeoutHandle=Fs(rn.bind(null,e,Ee,ut),r);break}rn(e,Ee,ut);break;case 5:rn(e,Ee,ut);break;default:throw Error(P(329))}}}return ze(e,oe()),e.callbackNode===n?oh.bind(null,e):null}function oa(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&ia(t)),e}function ia(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function lx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!nt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~sc,t&=~ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Ru(e){if(F&6)throw Error(P(327));Qn();var t=bi(e,0);if(!(t&1))return ze(e,oe()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=oa(e,r))}if(n===1)throw n=po,un(e,0),zt(e,t),ze(e,oe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ee,ut),ze(e,oe()),null}function cc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(nr=oe()+500,el&&qt())}}function xn(e){Dt!==null&&Dt.tag===0&&!(F&6)&&Qn();var t=F;F|=1;var n=Ve.transition,r=V;try{if(Ve.transition=null,V=1,e)return e()}finally{V=r,Ve.transition=n,F=t,!(F&6)&&qt()}}function uc(){De=_n.current,Y(_n)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nm(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Va(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Si();break;case 3:er(),Y(Le),Y(be),Za();break;case 5:qa(r);break;case 4:er();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Ga(r.type._context);break;case 22:case 23:uc()}n=n.return}if(fe=e,se=e=Vt(e.current,null),ge=De=t,de=0,po=null,sc=ol=mn=0,Ee=Vr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}n.pending=r}an=null}return e}function ih(e,t){do{var n=se;try{if(Ka(),ii.current=Mi,Di){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Di=!1}if(gn=0,pe=ce=q=null,Ur=!1,ao=0,lc.current=null,n===null||n.return===null){de=1,po=t,se=null;break}e:{var l=e,s=n.return,a=n,c=t;if(t=ge,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=a,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=wu(s);if(y!==null){y.flags&=-257,bu(y,s,a,l,t),y.mode&1&&vu(l,d,t),t=y,c=d;var k=t.updateQueue;if(k===null){var b=new Set;b.add(c),t.updateQueue=b}else k.add(c);break e}else{if(!(t&1)){vu(l,d,t),dc();break e}c=Error(P(426))}}else if(J&&a.mode&1){var C=wu(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),bu(C,s,a,l,t),Ha(tr(c,a));break e}}l=c=tr(c,a),de!==4&&(de=2),Vr===null?Vr=[l]:Vr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Uf(l,c,t);fu(l,f);break e;case 1:a=c;var p=l.type,x=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ut===null||!Ut.has(x)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Wf(l,a,t);fu(l,v);break e}}l=l.return}while(l!==null)}ah(n)}catch(j){t=j,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function lh(){var e=Ni.current;return Ni.current=Mi,e===null?Mi:e}function dc(){(de===0||de===3||de===2)&&(de=4),fe===null||!(mn&268435455)&&!(ol&268435455)||zt(fe,ge)}function Oi(e,t){var n=F;F|=2;var r=lh();(fe!==e||ge!==t)&&(ut=null,un(e,t));do try{sx();break}catch(o){ih(e,o)}while(!0);if(Ka(),F=n,Ni.current=r,se!==null)throw Error(P(261));return fe=null,ge=0,de}function sx(){for(;se!==null;)sh(se)}function ax(){for(;se!==null&&!Rg();)sh(se)}function sh(e){var t=uh(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?ah(e):se=t,lc.current=null}function ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tx(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,se=null;return}}else if(n=ex(n,t,De),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);de===0&&(de=5)}function rn(e,t,n){var r=V,o=Ve.transition;try{Ve.transition=null,V=1,cx(e,t,n,r)}finally{Ve.transition=o,V=r}return null}function cx(e,t,n,r){do Qn();while(Dt!==null);if(F&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Wg(e,l),e===fe&&(se=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,dh(wi,function(){return Qn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ve.transition,Ve.transition=null;var s=V;V=1;var a=F;F|=4,lc.current=null,rx(e,n),nh(n,e),Tm(Ns),ki=!!Ms,Ns=Ms=null,e.current=n,ox(n),Dg(),F=a,V=s,Ve.transition=l}else e.current=n;if(Uo&&(Uo=!1,Dt=e,Fi=o),l=e.pendingLanes,l===0&&(Ut=null),Ag(n.stateNode),ze(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ai)throw Ai=!1,e=na,na=null,e;return Fi&1&&e.tag!==0&&Qn(),l=e.pendingLanes,l&1?e===ra?Hr++:(Hr=0,ra=e):Hr=0,qt(),null}function Qn(){if(Dt!==null){var e=Bp(Fi),t=Ve.transition,n=V;try{if(Ve.transition=null,V=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Fi=0,F&6)throw Error(P(331));var o=F;for(F|=4,I=e.current;I!==null;){var l=I,s=l.child;if(I.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(I=d;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:Wr(8,h,l)}var g=h.child;if(g!==null)g.return=h,I=g;else for(;I!==null;){h=I;var m=h.sibling,y=h.return;if(Zf(h),h===d){I=null;break}if(m!==null){m.return=y,I=m;break}I=y}}}var k=l.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}I=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,I=s;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Wr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,I=f;break e}I=l.return}}var p=e.current;for(I=p;I!==null;){s=I;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,I=x;else e:for(s=p;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rl(9,a)}}catch(j){re(a,a.return,j)}if(a===s){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(F=o,qt(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Yi,e)}catch{}r=!0}return r}finally{V=n,Ve.transition=t}}return!1}function Du(e,t,n){t=tr(n,t),t=Uf(e,t,1),e=Bt(e,t,1),t=je(),e!==null&&(bo(e,1,t),ze(e,t))}function re(e,t,n){if(e.tag===3)Du(e,e,n);else for(;t!==null;){if(t.tag===3){Du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=tr(n,e),e=Wf(t,e,1),t=Bt(t,e,1),e=je(),t!==null&&(bo(t,1,e),ze(t,e));break}}t=t.return}}function ux(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(de===4||de===3&&(ge&130023424)===ge&&500>oe()-ac?un(e,0):sc|=n),ze(e,t)}function ch(e,t){t===0&&(e.mode&1?(t=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):t=1);var n=je();e=yt(e,t),e!==null&&(bo(e,t,n),ze(e,n))}function dx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ch(e,n)}function px(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),ch(e,n)}var uh;uh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,Zm(e,t,n);Te=!!(e.flags&131072)}else Te=!1,J&&t.flags&1048576&&hf(t,Ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;si(e,t),e=t.pendingProps;var o=Xn(t,be.current);Hn(t,n),o=tc(null,t,r,e,o,n);var l=nc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(l=!0,Ei(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ja(t),o.updater=nl,t.stateNode=o,o._reactInternals=t,Hs(t,r,e,n),t=Gs(null,t,r,!0,l,n)):(t.tag=0,J&&l&&Wa(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(si(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hx(r),e=Ye(r,e),o){case 0:t=Ks(null,t,r,e,n);break e;case 1:t=$u(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=ju(null,t,r,Ye(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),Ks(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),$u(e,t,r,o,n);case 3:e:{if(Kf(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,o=l.element,wf(e,t),zi(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=tr(Error(P(423)),t),t=Cu(e,t,r,n,o);break e}else if(r!==o){o=tr(Error(P(424)),t),t=Cu(e,t,r,n,o);break e}else for(Me=_t(t.stateNode.containerInfo.firstChild),Ne=t,J=!0,qe=null,n=yf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===o){t=vt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return bf(t),e===null&&Us(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,As(r,o)?s=null:l!==null&&As(r,l)&&(t.flags|=32),Qf(e,t),ke(e,t,s,n),t.child;case 6:return e===null&&Us(t),null;case 13:return Gf(e,t,n);case 4:return Xa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),ku(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,s=o.value,Q(Li,r._currentValue),r._currentValue=s,l!==null)if(nt(l.value,s)){if(l.children===o.children&&!Le.current){t=vt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=gt(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ws(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ws(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hn(t,n),o=He(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=Ye(r,t.pendingProps),o=Ye(r.type,o),ju(e,t,r,o,n);case 15:return Vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),si(e,t),t.tag=1,Ie(r)?(e=!0,Ei(t)):e=!1,Hn(t,n),Bf(t,r,o),Hs(t,r,o,n),Gs(null,t,r,!0,e,n);case 19:return Yf(e,t,n);case 22:return Hf(e,t,n)}throw Error(P(156,t.tag))};function dh(e,t){return Ap(e,t)}function fx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new fx(e,t,n,r)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hx(e){if(typeof e=="function")return pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ia)return 11;if(e===za)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ui(e,t,n,r,o,l){var s=2;if(r=e,typeof e=="function")pc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ln:return dn(n.children,o,l,t);case La:s=8,o|=8;break;case gs:return e=We(12,n,t,o|2),e.elementType=gs,e.lanes=l,e;case ms:return e=We(13,n,t,o),e.elementType=ms,e.lanes=l,e;case xs:return e=We(19,n,t,o),e.elementType=xs,e.lanes=l,e;case wp:return il(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yp:s=10;break e;case vp:s=9;break e;case Ia:s=11;break e;case za:s=14;break e;case Tt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=We(s,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function dn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function il(e,t,n,r){return e=We(22,e,r,t),e.elementType=wp,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fc(e,t,n,r,o,l,s,a,c){return e=new gx(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=We(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ja(l),e}function mx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ph(e){if(!e)return Gt;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ie(n))return pf(e,n,t)}return t}function fh(e,t,n,r,o,l,s,a,c){return e=fc(n,r,!0,e,o,l,s,a,c),e.context=ph(null),n=e.current,r=je(),o=Wt(n),l=gt(r,o),l.callback=t??null,Bt(n,l,o),e.current.lanes=o,bo(e,o,r),ze(e,r),e}function ll(e,t,n,r){var o=t.current,l=je(),s=Wt(o);return n=ph(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,s),e!==null&&(et(e,o,s,l),oi(e,o,s)),s}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function xx(){return null}var hh=typeof reportError=="function"?reportError:function(e){console.error(e)};function gc(e){this._internalRoot=e}sl.prototype.render=gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));ll(e,t,null,null)};sl.prototype.unmount=gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){ll(null,e,null,null)}),t[xt]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&Qp(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function yx(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=_i(s);l.call(d)}}var s=fh(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=s,e[xt]=s.current,ro(e.nodeType===8?e.parentNode:e),xn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var d=_i(c);a.call(d)}}var c=fc(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=c,e[xt]=c.current,ro(e.nodeType===8?e.parentNode:e),xn(function(){ll(t,c,n,r)}),c}function cl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var a=o;o=function(){var c=_i(s);a.call(c)}}ll(t,s,e,o)}else s=yx(n,t,e,o,r);return _i(s)}Up=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Ma(t,n|1),ze(t,oe()),!(F&6)&&(nr=oe()+500,qt()))}break;case 13:xn(function(){var r=yt(e,1);if(r!==null){var o=je();et(r,e,1,o)}}),hc(e,1)}};Na=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=je();et(t,e,134217728,n)}hc(e,134217728)}};Wp=function(e){if(e.tag===13){var t=Wt(e),n=yt(e,t);if(n!==null){var r=je();et(n,e,t,r)}hc(e,t)}};Vp=function(){return V};Hp=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Es=function(e,t,n){switch(t){case"input":if(ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Zi(r);if(!o)throw Error(P(90));kp(r),ws(r,o)}}}break;case"textarea":$p(e,n);break;case"select":t=n.value,t!=null&&Bn(e,!!n.multiple,t,!1)}};Ip=cc;zp=xn;var vx={usingClientEntryPoint:!1,Events:[jo,Dn,Zi,Tp,Lp,cc]},$r={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wx={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mp(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Yi=Wo.inject(wx),at=Wo}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(P(200));return mx(e,t,null,n)};Fe.createRoot=function(e,t){if(!mc(e))throw Error(P(299));var n=!1,r="",o=hh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fc(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,ro(e.nodeType===8?e.parentNode:e),new gc(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Mp(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return xn(e)};Fe.hydrate=function(e,t,n){if(!al(t))throw Error(P(200));return cl(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!mc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",s=hh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=fh(t,null,e,1,n??null,o,!1,l,s),e[xt]=t.current,ro(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new sl(t)};Fe.render=function(e,t,n){if(!al(t))throw Error(P(200));return cl(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!al(e))throw Error(P(40));return e._reactRootContainer?(xn(function(){cl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Fe.unstable_batchedUpdates=cc;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return cl(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function gh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gh)}catch(e){console.error(e)}}gh(),hp.exports=Fe;var mh=hp.exports,xh,Au=mh;xh=Au.createRoot,Au.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(null,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const Fu="popstate";function bx(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:s,hash:a}=r.location;return la("",{pathname:l,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Bi(o)}return jx(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kx(){return Math.random().toString(36).substr(2,8)}function Ou(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),fo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fr(t):t,{state:n,key:t&&t.key||r||kx()})}function Bi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jx(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,s=o.history,a=Mt.Pop,c=null,d=h();d==null&&(d=0,s.replaceState(fo({},s.state,{idx:d}),""));function h(){return(s.state||{idx:null}).idx}function g(){a=Mt.Pop;let C=h(),f=C==null?null:C-d;d=C,c&&c({action:a,location:b.location,delta:f})}function m(C,f){a=Mt.Push;let p=la(b.location,C,f);d=h()+1;let x=Ou(p,d),v=b.createHref(p);try{s.pushState(x,"",v)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(v)}l&&c&&c({action:a,location:b.location,delta:1})}function y(C,f){a=Mt.Replace;let p=la(b.location,C,f);d=h();let x=Ou(p,d),v=b.createHref(p);s.replaceState(x,"",v),l&&c&&c({action:a,location:b.location,delta:0})}function k(C){let f=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof C=="string"?C:Bi(C);return p=p.replace(/ $/,"%20"),Z(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let b={get action(){return a},get location(){return e(o,s)},listen(C){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Fu,g),c=C,()=>{o.removeEventListener(Fu,g),c=null}},createHref(C){return t(o,C)},createURL:k,encodeLocation(C){let f=k(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(C){return s.go(C)}};return b}var _u;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_u||(_u={}));function $x(e,t,n){return n===void 0&&(n="/"),Cx(e,t,n)}function Cx(e,t,n,r){let o=typeof t=="string"?fr(t):t,l=rr(o.pathname||"/",n);if(l==null)return null;let s=yh(e);Sx(s);let a=null,c=Ax(l);for(let d=0;a==null&&d<s.length;++d)a=Mx(s[d],c);return a}function yh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,s,a)=>{let c={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Ht([r,c.relativePath]),h=n.concat(c);l.children&&l.children.length>0&&(Z(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),yh(l.children,t,h,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:Rx(d,l.index),routesMeta:h})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,s);else for(let c of vh(l.path))o(l,s,c)}),t}function vh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let s=vh(r.join("/")),a=[];return a.push(...s.map(c=>c===""?l:[l,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Sx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ex=/^:[\w-]+$/,Px=3,Tx=2,Lx=1,Ix=10,zx=-2,Bu=e=>e==="*";function Rx(e,t){let n=e.split("/"),r=n.length;return n.some(Bu)&&(r+=zx),t&&(r+=Tx),n.filter(o=>!Bu(o)).reduce((o,l)=>o+(Ex.test(l)?Px:l===""?Lx:Ix),r)}function Dx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Mx(e,t,n){let{routesMeta:r}=e,o={},l="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",g=sa({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h),m=c.route;if(!g)return null;Object.assign(o,g.params),s.push({params:o,pathname:Ht([l,g.pathname]),pathnameBase:Ux(Ht([l,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(l=Ht([l,g.pathnameBase]))}return s}function sa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Nx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],s=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((d,h,g)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let b=a[g]||"";s=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const k=a[g];return y&&!k?d[m]=void 0:d[m]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:s,pattern:e}}function Nx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Ax(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ox=e=>Fx.test(e);function _x(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?fr(e):e,l;if(n)if(Ox(n))l=n;else{if(n.includes("//")){let s=n;n=wh(n),xc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=Uu(n.substring(1),"/"):l=Uu(n,t)}else l=t;return{pathname:l,search:Wx(r),hash:Vx(o)}}function Uu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Jl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yc(e,t){let n=Bx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=fr(e):(o=fo({},e),Z(!o.pathname||!o.pathname.includes("?"),Jl("?","pathname","search",o)),Z(!o.pathname||!o.pathname.includes("#"),Jl("#","pathname","hash",o)),Z(!o.search||!o.search.includes("#"),Jl("#","search","hash",o)));let l=e===""||o.pathname==="",s=l?"/":o.pathname,a;if(s==null)a=n;else{let g=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),g-=1;o.pathname=m.join("/")}a=g>=0?t[g]:"/"}let c=_x(o,a),d=s&&s!=="/"&&s.endsWith("/"),h=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const wh=e=>e.replace(/\/\/+/g,"/"),Ht=e=>wh(e.join("/")),Ux=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bh=["post","put","patch","delete"];new Set(bh);const Qx=["get",...bh];new Set(Qx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(null,arguments)}const ul=w.createContext(null),kh=w.createContext(null),bt=w.createContext(null),dl=w.createContext(null),kt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),jh=w.createContext(null);function Kx(e,t){let{relative:n}=t===void 0?{}:t;hr()||Z(!1);let{basename:r,navigator:o}=w.useContext(bt),{hash:l,pathname:s,search:a}=pl(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Ht([r,s])),o.createHref({pathname:c,search:a,hash:l})}function hr(){return w.useContext(dl)!=null}function rt(){return hr()||Z(!1),w.useContext(dl).location}function $h(e){w.useContext(bt).static||w.useLayoutEffect(e)}function jn(){let{isDataRoute:e}=w.useContext(kt);return e?s1():Gx()}function Gx(){hr()||Z(!1);let e=w.useContext(ul),{basename:t,future:n,navigator:r}=w.useContext(bt),{matches:o}=w.useContext(kt),{pathname:l}=rt(),s=JSON.stringify(yc(o,n.v7_relativeSplatPath)),a=w.useRef(!1);return $h(()=>{a.current=!0}),w.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let g=vc(d,JSON.parse(s),l,h.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ht([t,g.pathname])),(h.replace?r.replace:r.push)(g,h.state,h)},[t,r,s,l,e])}function Yx(){let{matches:e}=w.useContext(kt),t=e[e.length-1];return t?t.params:{}}function pl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(bt),{matches:o}=w.useContext(kt),{pathname:l}=rt(),s=JSON.stringify(yc(o,r.v7_relativeSplatPath));return w.useMemo(()=>vc(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function Jx(e,t){return Xx(e,t)}function Xx(e,t,n,r){hr()||Z(!1);let{navigator:o}=w.useContext(bt),{matches:l}=w.useContext(kt),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=rt(),h;if(t){var g;let C=typeof t=="string"?fr(t):t;c==="/"||(g=C.pathname)!=null&&g.startsWith(c)||Z(!1),h=C}else h=d;let m=h.pathname||"/",y=m;if(c!=="/"){let C=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=$x(e,{pathname:y}),b=n1(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Ht([c,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:Ht([c,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,r);return t&&b?w.createElement(dl.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Mt.Pop}},b):b}function qx(){let e=l1(),t=Hx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,null)}const Zx=w.createElement(qx,null);class e1 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(kt.Provider,{value:this.props.routeContext},w.createElement(jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t1(e){let{routeContext:t,match:n,children:r}=e,o=w.useContext(ul);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(kt.Provider,{value:t},r)}function n1(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let h=s.findIndex(g=>g.route.id&&(a==null?void 0:a[g.route.id])!==void 0);h>=0||Z(!1),s=s.slice(0,Math.min(s.length,h+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let g=s[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=h),g.route.id){let{loaderData:m,errors:y}=n,k=g.route.loader&&m[g.route.id]===void 0&&(!y||y[g.route.id]===void 0);if(g.route.lazy||k){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((h,g,m)=>{let y,k=!1,b=null,C=null;n&&(y=a&&g.route.id?a[g.route.id]:void 0,b=g.route.errorElement||Zx,c&&(d<0&&m===0?(a1("route-fallback"),k=!0,C=null):d===m&&(k=!0,C=g.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,m+1)),p=()=>{let x;return y?x=b:k?x=C:g.route.Component?x=w.createElement(g.route.Component,null):g.route.element?x=g.route.element:x=h,w.createElement(t1,{match:g,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:x})};return n&&(g.route.ErrorBoundary||g.route.errorElement||m===0)?w.createElement(e1,{location:n.location,revalidation:n.revalidation,component:b,error:y,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var Ch=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ch||{}),Sh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sh||{});function r1(e){let t=w.useContext(ul);return t||Z(!1),t}function o1(e){let t=w.useContext(kh);return t||Z(!1),t}function i1(e){let t=w.useContext(kt);return t||Z(!1),t}function Eh(e){let t=i1(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function l1(){var e;let t=w.useContext(jh),n=o1(),r=Eh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function s1(){let{router:e}=r1(Ch.UseNavigateStable),t=Eh(Sh.UseNavigateStable),n=w.useRef(!1);return $h(()=>{n.current=!0}),w.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ho({fromRouteId:t},l)))},[e,t])}const Wu={};function a1(e,t,n){Wu[e]||(Wu[e]=!0)}function c1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function u1(e){let{to:t,replace:n,state:r,relative:o}=e;hr()||Z(!1);let{future:l,static:s}=w.useContext(bt),{matches:a}=w.useContext(kt),{pathname:c}=rt(),d=jn(),h=vc(t,yc(a,l.v7_relativeSplatPath),c,o==="path"),g=JSON.stringify(h);return w.useEffect(()=>d(JSON.parse(g),{replace:n,state:r,relative:o}),[d,g,o,n,r]),null}function Pn(e){Z(!1)}function d1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Mt.Pop,navigator:l,static:s=!1,future:a}=e;hr()&&Z(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:l,static:s,future:ho({v7_relativeSplatPath:!1},a)}),[c,a,l,s]);typeof r=="string"&&(r=fr(r));let{pathname:h="/",search:g="",hash:m="",state:y=null,key:k="default"}=r,b=w.useMemo(()=>{let C=rr(h,c);return C==null?null:{location:{pathname:C,search:g,hash:m,state:y,key:k},navigationType:o}},[c,h,g,m,y,k,o]);return b==null?null:w.createElement(bt.Provider,{value:d},w.createElement(dl.Provider,{children:n,value:b}))}function p1(e){let{children:t,location:n}=e;return Jx(aa(t),n)}new Promise(()=>{});function aa(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let l=[...t,o];if(r.type===w.Fragment){n.push.apply(n,aa(r.props.children,l));return}r.type!==Pn&&Z(!1),!r.props.index||!r.props.children||Z(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=aa(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(null,arguments)}function Ph(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function f1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function h1(e,t){return e.button===0&&(!t||t==="_self")&&!f1(e)}function ca(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function g1(e,t){let n=ca(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}const m1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],x1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],y1="6";try{window.__reactRouterVersion=y1}catch{}const v1=w.createContext({isTransitioning:!1}),w1="startTransition",Vu=ug[w1];function b1(e){let{basename:t,children:n,future:r,window:o}=e,l=w.useRef();l.current==null&&(l.current=bx({window:o,v5Compat:!0}));let s=l.current,[a,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},h=w.useCallback(g=>{d&&Vu?Vu(()=>c(g)):c(g)},[c,d]);return w.useLayoutEffect(()=>s.listen(h),[s,h]),w.useEffect(()=>c1(r),[r]),w.createElement(d1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const k1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wc=w.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:s,state:a,target:c,to:d,preventScrollReset:h,viewTransition:g}=t,m=Ph(t,m1),{basename:y}=w.useContext(bt),k,b=!1;if(typeof d=="string"&&j1.test(d)&&(k=d,k1))try{let x=new URL(window.location.href),v=d.startsWith("//")?new URL(x.protocol+d):new URL(d),j=rr(v.pathname,y);v.origin===x.origin&&j!=null?d=j+v.search+v.hash:b=!0}catch{}let C=Kx(d,{relative:o}),f=C1(d,{replace:s,state:a,target:c,preventScrollReset:h,relative:o,viewTransition:g});function p(x){r&&r(x),x.defaultPrevented||f(x)}return w.createElement("a",Ui({},m,{href:k||C,onClick:b||l?r:p,ref:n,target:c}))}),Th=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:l="",end:s=!1,style:a,to:c,viewTransition:d,children:h}=t,g=Ph(t,x1),m=pl(c,{relative:g.relative}),y=rt(),k=w.useContext(kh),{navigator:b,basename:C}=w.useContext(bt),f=k!=null&&E1(m)&&d===!0,p=b.encodeLocation?b.encodeLocation(m).pathname:m.pathname,x=y.pathname,v=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||(x=x.toLowerCase(),v=v?v.toLowerCase():null,p=p.toLowerCase()),v&&C&&(v=rr(v,C)||v);const j=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=x===p||!s&&x.startsWith(p)&&x.charAt(j)==="/",S=v!=null&&(v===p||!s&&v.startsWith(p)&&v.charAt(p.length)==="/"),$={isActive:E,isPending:S,isTransitioning:f},z=E?r:void 0,L;typeof l=="function"?L=l($):L=[l,E?"active":null,S?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let A=typeof a=="function"?a($):a;return w.createElement(wc,Ui({},g,{"aria-current":z,className:L,ref:n,style:A,to:c,viewTransition:d}),typeof h=="function"?h($):h)});var ua;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ua||(ua={}));var Hu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hu||(Hu={}));function $1(e){let t=w.useContext(ul);return t||Z(!1),t}function C1(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:s,viewTransition:a}=t===void 0?{}:t,c=jn(),d=rt(),h=pl(e,{relative:s});return w.useCallback(g=>{if(h1(g,n)){g.preventDefault();let m=r!==void 0?r:Bi(d)===Bi(h);c(e,{replace:m,state:o,preventScrollReset:l,relative:s,viewTransition:a})}},[d,c,h,r,o,n,e,l,s,a])}function S1(e){let t=w.useRef(ca(e)),n=w.useRef(!1),r=rt(),o=w.useMemo(()=>g1(r.search,n.current?null:t.current),[r.search]),l=jn(),s=w.useCallback((a,c)=>{const d=ca(typeof a=="function"?a(o):a);n.current=!0,l("?"+d,c)},[l,o]);return[o,s]}function E1(e,t){t===void 0&&(t={});let n=w.useContext(v1);n==null&&Z(!1);let{basename:r}=$1(ua.useViewTransitionState),o=pl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=rr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=rr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sa(o.pathname,s)!=null||sa(o.pathname,l)!=null}var G="-ms-",Qr="-moz-",B="-webkit-",Lh="comm",fl="rule",bc="decl",P1="@import",T1="@namespace",Ih="@keyframes",L1="@layer",zh=Math.abs,kc=String.fromCharCode,da=Object.assign;function I1(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Rh(e){return e.trim()}function dt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function di(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function yn(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function Dh(e){return e.length}function Rr(e,t){return t.push(e),e}function z1(e,t){return e.map(t).join("")}function Qu(e,t){return e.filter(function(n){return!dt(n,t)})}var hl=1,or=1,Mh=0,Ke=0,le=0,gr="";function gl(e,t,n,r,o,l,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:hl,column:or,length:s,return:"",siblings:a}}function Pt(e,t){return da(gl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Cn(e){for(;e.root;)e=Pt(e.root,{children:[e]});Rr(e,e.siblings)}function R1(){return le}function D1(){return le=Ke>0?ue(gr,--Ke):0,or--,le===10&&(or=1,hl--),le}function tt(){return le=Ke<Mh?ue(gr,Ke++):0,or++,le===10&&(or=1,hl++),le}function Nt(){return ue(gr,Ke)}function pi(){return Ke}function ml(e,t){return yn(gr,e,t)}function go(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M1(e){return hl=or=1,Mh=Xe(gr=e),Ke=0,[]}function N1(e){return gr="",e}function Xl(e){return Rh(ml(Ke-1,pa(e===91?e+2:e===40?e+1:e)))}function A1(e){for(;(le=Nt())&&le<33;)tt();return go(e)>2||go(le)>3?"":" "}function F1(e,t){for(;--t&&tt()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return ml(e,pi()+(t<6&&Nt()==32&&tt()==32))}function pa(e){for(;tt();)switch(le){case e:return Ke;case 34:case 39:e!==34&&e!==39&&pa(le);break;case 40:e===41&&pa(e);break;case 92:tt();break}return Ke}function O1(e,t){for(;tt()&&e+le!==57;)if(e+le===84&&Nt()===47)break;return"/*"+ml(t,Ke-1)+"*"+kc(e===47?e:tt())}function _1(e){for(;!go(Nt());)tt();return ml(e,Ke)}function B1(e){return N1(fi("",null,null,null,[""],e=M1(e),0,[0],e))}function fi(e,t,n,r,o,l,s,a,c){for(var d=0,h=0,g=s,m=0,y=0,k=0,b=1,C=1,f=1,p=0,x="",v=o,j=l,E=r,S=x;C;)switch(k=p,p=tt()){case 40:if(k!=108&&ue(S,g-1)==58){di(S+=M(Xl(p),"&","&\f"),"&\f",zh(d?a[d-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Xl(p);break;case 9:case 10:case 13:case 32:S+=A1(k);break;case 92:S+=F1(pi()-1,7);continue;case 47:switch(Nt()){case 42:case 47:Rr(U1(O1(tt(),pi()),t,n,c),c),(go(k||1)==5||go(Nt()||1)==5)&&Xe(S)&&yn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*b:a[d++]=Xe(S)*f;case 125*b:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+h:f==-1&&(S=M(S,/\f/g,"")),y>0&&(Xe(S)-g||b===0&&k===47)&&Rr(y>32?Gu(S+";",r,n,g-1,c):Gu(M(S," ","")+";",r,n,g-2,c),c);break;case 59:S+=";";default:if(Rr(E=Ku(S,t,n,d,h,o,a,x,v=[],j=[],g,l),l),p===123)if(h===0)fi(S,t,E,E,v,l,g,a,j);else{switch(m){case 99:if(ue(S,3)===110)break;case 108:if(ue(S,2)===97)break;default:h=0;case 100:case 109:case 115:}h?fi(e,E,E,r&&Rr(Ku(e,E,E,0,0,o,a,x,o,v=[],g,j),j),o,j,g,a,r?v:j):fi(S,E,E,E,[""],j,0,a,j)}}d=h=y=0,b=f=1,x=S="",g=s;break;case 58:g=1+Xe(S),y=k;default:if(b<1){if(p==123)--b;else if(p==125&&b++==0&&D1()==125)continue}switch(S+=kc(p),p*b){case 38:f=h>0?1:(S+="\f",-1);break;case 44:a[d++]=(Xe(S)-1)*f,f=1;break;case 64:Nt()===45&&(S+=Xl(tt())),m=Nt(),h=g=Xe(x=S+=_1(pi())),p++;break;case 45:k===45&&Xe(S)==2&&(b=0)}}return l}function Ku(e,t,n,r,o,l,s,a,c,d,h,g){for(var m=o-1,y=o===0?l:[""],k=Dh(y),b=0,C=0,f=0;b<r;++b)for(var p=0,x=yn(e,m+1,m=zh(C=s[b])),v=e;p<k;++p)(v=Rh(C>0?y[p]+" "+x:M(x,/&\f/g,y[p])))&&(c[f++]=v);return gl(e,t,n,o===0?fl:a,c,d,h,g)}function U1(e,t,n,r){return gl(e,t,n,Lh,kc(R1()),yn(e,2,-2),0,r)}function Gu(e,t,n,r,o){return gl(e,t,n,bc,yn(e,0,r),yn(e,r+1,-1),r,o)}function Nh(e,t,n){switch(I1(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return B+e+e;case 4855:return B+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Qr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Qr+e+G+e+e;case 5936:switch(ue(e,t+11)){case 114:return B+e+G+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+G+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+G+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+G+e+e;case 6165:return B+e+G+"flex-"+e+e;case 5187:return B+e+M(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return B+e+G+"flex-item-"+M(e,/flex-|-self/g,"")+(dt(e,/flex-|baseline/)?"":G+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return B+e+G+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+G+M(e,"shrink","negative")+e;case 5292:return B+e+G+M(e,"basis","preferred-size")+e;case 6060:return B+"box-"+M(e,"-grow","")+B+e+G+M(e,"grow","positive")+e;case 4554:return B+M(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+G+"flex-pack:$3"),/space-between/,"justify")+B+e+e;case 4200:if(!dt(e,/flex-|baseline/))return G+"grid-column-align"+yn(e,t)+e;break;case 2592:case 3360:return G+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,dt(r.props,/grid-\w+-end/)})?~di(e+(n=n[t].value),"span",0)?e:G+M(e,"-start","")+e+G+"grid-row-span:"+(~di(n,"span",0)?dt(n,/\d+/):+dt(n,/\d+/)-+dt(e,/\d+/))+";":G+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return dt(r.props,/grid-\w+-start/)})?e:G+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Qr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~di(e,"stretch",0)?Nh(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,s,a,c,d){return G+o+":"+l+d+(s?G+o+"-span:"+(a?c:+c-+l)+d:"")+e});case 4949:if(ue(e,t+6)===121)return M(e,":",":"+B)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ue(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+G+"$2box$3")+e;case 100:return M(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Wi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function W1(e,t,n,r){switch(e.type){case L1:if(e.children.length)break;case P1:case T1:case bc:return e.return=e.return||e.value;case Lh:return"";case Ih:return e.return=e.value+"{"+Wi(e.children,r)+"}";case fl:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=Wi(e.children,r))?e.return=e.value+"{"+n+"}":""}function V1(e){var t=Dh(e);return function(n,r,o,l){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,l)||"";return s}}function H1(e){return function(t){t.root||(t=t.return)&&e(t)}}function Q1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bc:e.return=Nh(e.value,e.length,n);return;case Ih:return Wi([Pt(e,{value:M(e.value,"@","@"+B)})],r);case fl:if(e.length)return z1(n=e.props,function(o){switch(dt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cn(Pt(e,{props:[M(o,/:(read-\w+)/,":"+Qr+"$1")]})),Cn(Pt(e,{props:[o]})),da(e,{props:Qu(n,r)});break;case"::placeholder":Cn(Pt(e,{props:[M(o,/:(plac\w+)/,":"+B+"input-$1")]})),Cn(Pt(e,{props:[M(o,/:(plac\w+)/,":"+Qr+"$1")]})),Cn(Pt(e,{props:[M(o,/:(plac\w+)/,G+"input-$1")]})),Cn(Pt(e,{props:[o]})),da(e,{props:Qu(n,r)});break}return""})}}var Kn={},ql,Zl;const ir=typeof process<"u"&&Kn!==void 0&&(Kn.REACT_APP_SC_ATTR||Kn.SC_ATTR)||"data-styled",Ah="active",Fh="data-styled-version",xl="6.4.2",jc=`/*!sc*/
`,Kr=typeof window<"u"&&typeof document<"u";function Yu(e){if(typeof process<"u"&&Kn!==void 0){const t=Kn[e];if(t!==void 0&&t!=="")return t!=="false"}}const K1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Zl=(ql=Yu("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&ql!==void 0?ql:Yu("SC_DISABLE_SPEEDY"))!==null&&Zl!==void 0?Zl:typeof process<"u"&&Kn!==void 0&&!1),G1="sc-keyframes-",Y1={};function lr(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let hi=new Map,Vi=new Map,gi=1;const Vo=e=>{if(hi.has(e))return hi.get(e);for(;Vi.has(gi);)gi++;const t=gi++;return hi.set(e,t),Vi.set(t,e),t},J1=e=>Vi.get(e),X1=(e,t)=>{gi=t+1,hi.set(e,t),Vi.set(t,e)},$c=Object.freeze([]),sr=Object.freeze({});function Oh(e,t,n=sr){return e.theme!==n.theme&&e.theme||t||n.theme}const q1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Z1=/(^-|-$)/g;function _h(e){return e.replace(q1,"-").replace(Z1,"")}const ey=/(a)(d)/gi,Ju=e=>String.fromCharCode(e+(e>25?39:97));function Bh(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ju(t%52)+n;return(Ju(t%52)+n).replace(ey,"$1-$2")}const fa=5381,pn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Uh=e=>pn(fa,e);function Wh(e){return Bh(Uh(e)>>>0)}function ty(e){return e.displayName||e.name||"Component"}function ha(e){return typeof e=="string"&&!0}function ny(e){return ha(e)?`styled.${e}`:`Styled(${ty(e)})`}const Vh=Symbol.for("react.memo"),ry=Symbol.for("react.forward_ref"),oy={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},iy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ly={[ry]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Vh]:Hh};function Xu(e){return("type"in(t=e)&&t.type.$$typeof)===Vh?Hh:"$$typeof"in e?ly[e.$$typeof]:oy;var t}const sy=Object.defineProperty,ay=Object.getOwnPropertyNames,cy=Object.getOwnPropertySymbols,uy=Object.getOwnPropertyDescriptor,dy=Object.getPrototypeOf,py=Object.prototype;function Qh(e,t,n){if(typeof t!="string"){const r=dy(t);r&&r!==py&&Qh(e,r,n);const o=ay(t).concat(cy(t)),l=Xu(e),s=Xu(t);for(let a=0;a<o.length;++a){const c=o[a];if(!(c in iy||n&&n[c]||s&&c in s||l&&c in l)){const d=uy(t,c);try{sy(e,c,d)}catch{}}}}return e}function mr(e){return typeof e=="function"}const fy=Symbol.for("react.forward_ref");function Cc(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===fy&&"styledComponentId"in e}function Dr(e,t){return e&&t?e+" "+t:e||t||""}function ga(e,t){return e.join("")}function mo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ma(e,t,n=!1){if(!n&&!mo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ma(e[r],t[r]);else if(mo(t))for(const r in t)e[r]=ma(e[r],t[r]);return e}function Kh(e,t){Object.defineProperty(e,"toString",{value:t})}const hy=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,l=o.length;let s=l;for(;e>=s;)if(s<<=1,s<0)throw lr(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(let a=l;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,l=t.length;o<l;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let l=r;l<o;l++)t+=this.tag.getRule(l)+jc;return t}},gy=`style[${ir}][${Fh}="${xl}"]`,my=new RegExp(`^${ir}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),qu=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,xa=e=>{if(!e)return document;if(qu(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(qu(t))return t}return document},xy=(e,t,n)=>{const r=n.split(",");let o;for(let l=0,s=r.length;l<s;l++)(o=r[l])&&e.registerName(t,o)},yy=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(jc),o=[];for(let l=0,s=r.length;l<s;l++){const a=r[l].trim();if(!a)continue;const c=a.match(my);if(c){const d=0|parseInt(c[1],10),h=c[2];d!==0&&(X1(h,d),xy(e,h,c[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(a)}},es=e=>{const t=xa(e.options.target).querySelectorAll(gy);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(ir)!==Ah&&(yy(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let Cr=!1;function vy(){if(Cr!==!1)return Cr;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Cr=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Cr=t.getAttribute("content")||void 0}return Cr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Gh=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),l=(c=>{const d=Array.from(c.querySelectorAll(`style[${ir}]`));return d[d.length-1]})(r),s=l!==void 0?l.nextSibling:null;o.setAttribute(ir,Ah),o.setAttribute(Fh,xl);const a=t||vy();return a&&o.setAttribute("nonce",a),r.insertBefore(o,s),o},wy=class{constructor(e,t){this.element=Gh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,s=o.length;l<s;l++){const a=o[l];if(a.ownerNode===n)return a}throw lr(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},by=class{constructor(e,t){this.element=Gh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Zu=Kr;const ky={isServer:!Kr,useCSSOMInjection:!K1};class Co{static registerId(t){return Vo(t)}constructor(t=sr,n={},r){this.options=Object.assign(Object.assign({},ky),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Kr&&Zu&&(Zu=!1,es(this)),Kh(this,()=>(o=>{const l=o.getTag(),{length:s}=l;let a="";for(let c=0;c<s;c++){const d=J1(c);if(d===void 0)continue;const h=o.names.get(d);if(h===void 0||!h.size)continue;const g=l.getGroup(c);if(g.length===0)continue;const m=ir+".g"+c+'[id="'+d+'"]';let y="";for(const k of h)k.length>0&&(y+=k+",");a+=g+m+'{content:"'+y+'"}'+jc}return a})(this))}rehydrate(){!this.server&&Kr&&es(this)}reconstructWithOptions(t,n=!0){const r=new Co(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Kr&&t.target!==this.options.target&&xa(this.options.target)!==xa(t.target)&&es(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new wy(r,o):new by(r,o))(this.options),new hy(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Vo(t),t.startsWith(G1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Vo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Yh=new WeakSet,jy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $y(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in jy||e.startsWith("--")?String(t).trim():t+"px"}const ln=47;function ed(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const Cy=Symbol.for("sc-keyframes");function Sy(e){return typeof e=="object"&&e!==null&&Cy in e}function Jh(e){return mr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Xh=e=>e==null||e===!1||e==="",Ey=Symbol.for("react.client.reference");function td(e){return e.$$typeof===Ey}function qh(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Xh(r)&&(Array.isArray(r)&&Yh.has(r)||mr(r)?t.push(ed(n)+":",r,";"):mo(r)?(t.push(n+" {"),qh(r,t),t.push("}")):t.push(ed(n)+": "+$y(n,r)+";"))}}function Qt(e,t,n,r,o=[]){if(Xh(e))return o;const l=typeof e;if(l==="string")return o.push(e),o;if(l==="function"){if(td(e))return o;if(Jh(e)&&t){const s=e(t);return Qt(s,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Qt(e[s],t,n,r,o);return o}return Cc(e)?(o.push(`.${e.styledComponentId}`),o):Sy(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):td(e)?o:mo(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(qh(e,o),o):(o.push(e.toString()),o)}const Py=Uh(xl);class Ty{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=pn(Py,n),this.baseStyle=r,Co.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")l+=a;else if(a)if(Jh(a)){const c=a(t);typeof c=="string"?l+=c:c!=null&&c!==!1&&(l+=ga(Qt(c,t,n,r)))}else l+=ga(Qt(a,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+l:l;let a=this.dynamicNameCache.get(s);if(!a){if(a=Bh(pn(pn(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const c=r(l,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,c)}o=Dr(o,a)}}return o}}const Ly=/&/g;function Zh(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ts(e){const t=e.length;let n="",r=0,o=0,l=0,s=!1,a=!1;for(let c=0;c<t;c++){const d=e.charCodeAt(c);if(l!==0||s||d!==ln||e.charCodeAt(c+1)!==42)if(s)d===42&&e.charCodeAt(c+1)===ln&&(s=!1,c++);else if(d!==34&&d!==39||Zh(e,c)){if(l===0)if(d===123)o++;else if(d===125){if(o--,o<0){a=!0;let h=c+1;for(;h<t;){const g=e.charCodeAt(h);if(g===59||g===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,o=0,c=h-1,r=h;continue}o===0&&(n+=e.substring(r,c+1),r=c+1)}else d===59&&o===0&&(n+=e.substring(r,c+1),r=c+1)}else l===0?l=d:l===d&&(l=0);else s=!0,c++}return a||o!==0||l!==0?(r<t&&o===0&&l===0&&(n+=e.substring(r)),n):e}function e0(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const l=e[o];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const s=l.props,a=[];for(let c=0;c<s.length;c++)a[c]=n+s[c];l.props=a}Array.isArray(l.children)&&l.type!=="@keyframes"&&e0(l.children,t)}return e}function Iy({options:e=sr,plugins:t=$c}=sr){let n,r,o;const l=(m,y,k)=>k.startsWith(r)&&k.endsWith(r)&&k.replaceAll(r,"").length>0?`.${n}`:m,s=t.slice();s.push(m=>{m.type===fl&&m.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),m.props[0]=m.props[0].replace(Ly,r).replace(o,l))}),e.prefix&&s.push(Q1),s.push(W1);let a=[];const c=V1(s.concat(H1(m=>a.push(m)))),d=(m,y="",k="",b="&")=>{n=b,r=y,o=void 0;const C=function(p){const x=p.indexOf("//")!==-1,v=p.indexOf("}")!==-1;if(!x&&!v)return p;if(!x)return ts(p);const j=p.length;let E="",S=0,$=0,z=0,L=0,A=0,te=!1;for(;$<j;){const O=p.charCodeAt($);if(O!==34&&O!==39||Zh(p,$))if(z===0)if(O===ln&&$+1<j&&p.charCodeAt($+1)===42){for($+=2;$+1<j&&(p.charCodeAt($)!==42||p.charCodeAt($+1)!==ln);)$++;$+=2}else if(O!==40)if(O!==41)if(L>0)$++;else if(O===42&&$+1<j&&p.charCodeAt($+1)===ln)E+=p.substring(S,$),$+=2,S=$,te=!0;else if(O===ln&&$+1<j&&p.charCodeAt($+1)===ln){for(E+=p.substring(S,$);$<j&&p.charCodeAt($)!==10;)$++;S=$,te=!0}else O===123?A++:O===125&&A--,$++;else L>0&&L--,$++;else L++,$++;else $++;else z===0?z=O:z===O&&(z=0),$++}return te?(S<j&&(E+=p.substring(S)),A===0?E:ts(E)):A===0?p:ts(p)}(m);let f=B1(k||y?k+" "+y+" { "+C+" }":C);return e.namespace&&(f=e0(f,e.namespace)),a=[],Wi(f,c),a},h=e;let g=fa;for(let m=0;m<t.length;m++)t[m].name||lr(15),g=pn(g,t[m].name);return h!=null&&h.namespace&&(g=pn(g,h.namespace)),h!=null&&h.prefix&&(g=pn(g,"p")),d.hash=g!==fa?g.toString():"",d}const zy=new Co,Ry=Iy(),t0=ve.createContext({shouldForwardProp:void 0,styleSheet:zy,stylis:Ry,stylisPlugins:void 0});t0.Consumer;function n0(){return ve.useContext(t0)}const xo=ve.createContext(void 0);xo.Consumer;function Dy(e){const t=ve.useContext(xo),n=ve.useMemo(()=>function(r,o){if(!r)throw lr(14);if(mr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw lr(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?ve.createElement(xo.Provider,{value:n},e.children):null}const nd=Object.prototype.hasOwnProperty,ns={};function My(e,t){const n=typeof e!="string"?"sc":_h(e);ns[n]=(ns[n]||0)+1;const r=n+"-"+Wh(xl+n+ns[n]);return t?t+"-"+r:r}function Ny(e,t,n){const r=Cc(e),o=e,l=!ha(e),{attrs:s=$c,componentId:a=My(t.displayName,t.parentComponentId),displayName:c=ny(e)}=t,d=t.displayName&&t.componentId?_h(t.displayName)+"-"+t.componentId:t.componentId||a,h=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const b=o.shouldForwardProp;if(t.shouldForwardProp){const C=t.shouldForwardProp;g=(f,p)=>b(f,p)&&C(f,p)}else g=b}const m=new Ty(n,d,r?o.componentStyle:void 0);function y(b,C){return function(f,p,x){const{attrs:v,componentStyle:j,defaultProps:E,foldedComponentIds:S,styledComponentId:$,target:z}=f,L=ve.useContext(xo),A=n0(),te=f.shouldForwardProp||A.shouldForwardProp,O=Oh(p,L,E)||sr;let Se,Zt;{const R=ve.useRef(null),D=R.current;if(D!==null&&D[1]===O&&D[2]===A.styleSheet&&D[3]===A.stylis&&D[7]===j&&function(H,_,ae){const ne=H,ie=_;let Re=0;for(const _e in ie)if(nd.call(ie,_e)&&(Re++,ne[_e]!==ie[_e]))return!1;return Re===ae}(D[0],p,D[4]))Se=D[5],Zt=D[6];else{Se=function(_,ae,ne){const ie=Object.assign(Object.assign({},ae),{className:void 0,theme:ne}),Re=_.length>1;for(let _e=0;_e<_.length;_e++){const jl=_[_e],So=mr(jl)?jl(Re?Object.assign({},ie):ie):jl;for(const $t in So)$t==="className"?ie.className=Dr(ie.className,So[$t]):$t==="style"?ie.style=Object.assign(Object.assign({},ie.style),So[$t]):$t in ae&&ae[$t]===void 0||(ie[$t]=So[$t])}return"className"in ae&&typeof ae.className=="string"&&(ie.className=Dr(ie.className,ae.className)),ie}(v,p,O),Zt=function(_,ae,ne,ie){return _.generateAndInjectStyles(ae,ne,ie)}(j,Se,A.styleSheet,A.stylis);let H=0;for(const _ in p)nd.call(p,_)&&H++;R.current=[p,O,A.styleSheet,A.stylis,H,Se,Zt,j]}}const jt=Se.as||z,en=function(R,D,H,_){const ae={};for(const ne in R)R[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&R.theme===H||(ne==="forwardedAs"?ae.as=R.forwardedAs:_&&!_(ne,D)||(ae[ne]=R[ne]));return ae}(Se,jt,O,te);let T=Dr(S,$);return Zt&&(T+=" "+Zt),Se.className&&(T+=" "+Se.className),en[ha(jt)&&jt.includes("-")?"class":"className"]=T,x&&(en.ref=x),w.createElement(jt,en)}(k,b,C)}y.displayName=c;let k=ve.forwardRef(y);return k.attrs=h,k.componentStyle=m,k.displayName=c,k.shouldForwardProp=g,k.foldedComponentIds=r?Dr(o.foldedComponentIds,o.styledComponentId):"",k.styledComponentId=d,k.target=r?o.target:e,Object.defineProperty(k,"defaultProps",{get(){return this._foldedDefaultProps},set(b){this._foldedDefaultProps=r?function(C,...f){for(const p of f)ma(C,p,!0);return C}({},o.defaultProps,b):b}}),Kh(k,()=>`.${k.styledComponentId}`),l&&Qh(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}var Ay=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function rd(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const od=e=>(Yh.add(e),e);function r0(e,...t){if(mr(e)||mo(e))return od(Qt(rd($c,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Qt(n):od(Qt(rd(n,t)))}function ya(e,t,n=sr){if(!t)throw lr(1,t);const r=(o,...l)=>e(t,n,r0(o,...l));return r.attrs=o=>ya(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>ya(e,t,Object.assign(Object.assign({},n),o)),r}const o0=e=>ya(Ny,e),u=o0;Ay.forEach(e=>{u[e]=o0(e)});class Fy{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const l=r[o];if(mr(l)&&!Cc(l))return!1}return!0}(t),Co.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(l,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&s){const a=s.rules,c=this.instanceRules.get(t).rules;if(a.length===c.length){let d=!0;for(let h=0;h<a.length;h++)if(a[h]!==c[h]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const l=ga(Qt(this.rules,n,r,o)),s={name:this.componentId+t,rules:o(l,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function Oy(e,...t){const n=r0(e,...t),r=`sc-global-${Wh(JSON.stringify(n))}`,o=new Fy(n,r),l=a=>{const c=n0(),d=ve.useContext(xo);let h;{const g=ve.useRef(null);g.current===null&&(g.current=c.styleSheet.allocateGSInstance(r)),h=g.current}c.styleSheet.server&&s(h,a,c.styleSheet,d,c.stylis);{const g=o.isStatic?[h,c.styleSheet,o]:[h,a,c.styleSheet,d,c.stylis,o],m=ve.useRef(o);ve.useLayoutEffect(()=>{c.styleSheet.server||(m.current!==o&&(c.styleSheet.clearRules(r),m.current=o),s(h,a,c.styleSheet,d,c.stylis))},g),ve.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(h,c.styleSheet)},[h,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(h),null};function s(a,c,d,h,g){if(o.isStatic)o.renderStyles(a,Y1,d,g);else{const m=Object.assign(Object.assign({},c),{theme:Oh(c,h,l.defaultProps)});o.renderStyles(a,m,d,g)}}return ve.memo(l)}const _y={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},id=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),By=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Uy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),i.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Wy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),i.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),i.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),i.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Vy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Hy=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Qy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ky=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),i.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Gy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),i.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),i.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),i0=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),Gn=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Sr=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Yy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),i.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),Jy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),Xy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),l0=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Hi=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),ld=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Gr=({size:e=14,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),s0=({size:e=14,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),va=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),qy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Yn=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),Zy=({size:e=32,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),ev=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),tv=({size:e=32,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),sd=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Qi=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),i.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),i.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),nv=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),rv=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),ad=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),i.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),a0=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),ov=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),i.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),iv=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),yl=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M11 4h5v5M16 4l-8 8M8 6H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ar=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),i.jsx("circle",{cx:"10",cy:"10",r:"3.5",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M7.53 7.53 4.05 4.05M12.47 12.47l3.48 3.48M12.47 7.53l3.48-3.48M7.53 12.47l-3.48 3.48",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),lv=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"5",y:"5",width:"10",height:"10",rx:"1",stroke:t,strokeWidth:"1.5"}),i.jsx("rect",{x:"7.5",y:"7.5",width:"5",height:"5",rx:"0.5",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M8 2v3M12 2v3M8 15v3M12 15v3M2 8h3M2 12h3M15 8h3M15 12h3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]});function vn(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return i.jsx(id,{...r});case"settings":return i.jsx(By,{...r});case"shield":return i.jsx(Uy,{...r});case"hierarchy":return i.jsx(Wy,{...r});case"cycle":return i.jsx(Vy,{...r});case"code":return i.jsx(Hy,{...r});case"globe":return i.jsx(Qy,{...r});case"document":return i.jsx(Ky,{...r});case"mobile":return i.jsx(Gy,{...r});case"sparkle":return i.jsx(i0,{...r});case"envelope":return i.jsx(Gn,{...r});case"key":return i.jsx(qy,{...r});case"atom":return i.jsx(ev,{...r});case"chip":return i.jsx(lv,{...r});default:return i.jsx(id,{...r})}}const c0=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],u0=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],Sn=e=>[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],on={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"Inventory",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"Automation",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"Integrations",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"Release security",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"Signing",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"Integrations",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"Manage CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"Revocation & validation",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"Configuration",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:Sn("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:Sn("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:Sn("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:Sn("device-trust")},"iot-trust":{id:"iot-trust",label:"IoT Trust",route:"/iot-trust",ariaLabel:"IoT Trust navigation",sections:Sn("iot-trust")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:Sn("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing and subscriptions",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]},{title:"Self-service",isSelfService:!0,isNavParent:!0,defaultExpanded:!0,items:[{label:"Receipts and invoices",route:"/settings/billing/receipts"},{label:"Payment details",route:"/settings/billing/payment-details"}]},{title:"DigiCert products",isNavParent:!0,defaultExpanded:!0,items:[{label:"All products",route:"/settings/billing/all-products"},{label:"CertCentral",route:"/certcentral"},{label:"Content Trust",route:"/content-trust"},{label:"Device Trust",route:"/device-trust"},{label:"DigiCert DNS",route:"/dns"},{label:"Private CA",route:"/private-ca"},{label:"Software Trust",route:"/software-trust"},{label:"Trust Lifecycle",route:"/trust-lifecycle"},{label:"Valimail",route:"/valimail"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},sv={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/iot-trust":"IoT Trust","/iot-trust/dashboard":"Dashboard","/iot-trust/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/billing/all-products":"Explore DigiCert products","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},av=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],cv=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],uv=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],dv=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/iot-trust","/iot-trust/dashboard","/iot-trust/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/billing/all-products","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],pv=u.div`
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
`,fv=u.div`
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
`;function hv({onClose:e,onSelectProduct:t}){const n=jn(),r=o=>{t(o.productId),n(o.route),e()};return i.jsxs(pv,{role:"menu","aria-label":"Settings menu",children:[i.jsx(fv,{children:"Settings"}),i.jsx(cd,{}),av.map(o=>i.jsx(ud,{href:o.route,role:"menuitem",onClick:l=>{l.preventDefault(),r(o)},children:o.label},o.route)),i.jsx(cd,{}),cv.map(o=>i.jsx(ud,{href:o.route,role:"menuitem",onClick:l=>{l.preventDefault(),r(o)},children:o.label},o.route))]})}const gv=u.div`
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
`,mv=u.div`
  padding: 4px 0;
`,xv=u.a`
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
`;function yv({onClose:e}){return i.jsx(gv,{role:"menu","aria-label":"Help menu",children:i.jsx(mv,{children:uv.map(t=>i.jsx(xv,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const vv=u.div`
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
`,wv=u.div`
  padding: 12px 16px;
`,bv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,kv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,dd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,jv=u.div`
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
`;function $v({onClose:e,onSelectProduct:t}){const n=jn(),r=o=>{o.preventDefault(),t("profile"),n("/profile"),e()};return i.jsxs(vv,{role:"menu","aria-label":"User profile menu",children:[i.jsxs(wv,{children:[i.jsx(bv,{children:"Deepika Chauhan"}),i.jsx(kv,{children:"deepika.chauhan@digicert.com"})]}),i.jsx(dd,{}),i.jsxs(jv,{children:[i.jsx(pd,{href:"/profile",role:"menuitem",onClick:r,children:"My profile"}),i.jsx(dd,{}),i.jsx(pd,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const Cv=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,Sv=u.div`
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
`,Ev=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Pv=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Tv=u.button`
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
`,Lv=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,Iv=u.p`
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
`;function Rv({open:e,onClose:t}){const n=w.useRef(null),r=w.useRef(null);return w.useEffect(()=>{var l;if(!e)return;(l=n.current)==null||l.focus();const o=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const c=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),d=c[0],h=c[c.length-1];s.shiftKey&&document.activeElement===d?(s.preventDefault(),h.focus()):!s.shiftKey&&document.activeElement===h&&(s.preventDefault(),d.focus())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),i.jsxs(i.Fragment,{children:[i.jsx(Cv,{$open:e,onClick:t,"aria-hidden":"true"}),i.jsxs(Sv,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[i.jsxs(Ev,{children:[i.jsx(Pv,{id:"cart-heading",children:"Cart"}),i.jsx(Tv,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),i.jsxs(Lv,{children:[i.jsx(Iv,{children:"Your cart is empty."}),i.jsx(zv,{onClick:t,children:"Continue shopping"})]})]})]})}const Dv=u.div`
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
`,Mv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Nv=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Av=u.button`
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
`,Fv=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`,Ov=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
`,_v=u.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,Bv=u.input`
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
`,Uv=u.button`
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
`;function Wv({open:e,onClose:t}){const n=w.useRef(null);return w.useEffect(()=>{const r=o=>{o.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),i.jsxs(Dv,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[i.jsxs(Mv,{children:[i.jsx(Nv,{children:"AI Assist"}),i.jsx(Av,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),i.jsxs(Fv,{children:[i.jsx(Ov,{children:"How can I help you today?"}),i.jsxs(_v,{children:[i.jsx(Bv,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),i.jsx(Uv,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const Vv=u.header`
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
`,Hv=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Qv=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Kv=u.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,Gv=u.span`
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
`,Jv=u.button`
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
`,Ho=u.div`
  position: relative;
  display: flex;
  align-items: center;
`,Xv=u.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function qv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:o,onSelectProduct:l,cartCount:s=3}){const a=n==="settings"||n==="help"||n==="profile";return i.jsxs(i.Fragment,{children:[i.jsxs(Vv,{role:"banner",children:[i.jsxs(Hv,{children:[i.jsx(Kv,{children:i.jsx(Er,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:i.jsx(l0,{size:20})})}),i.jsxs(Gv,{"aria-label":"DigiCert ONE",children:[i.jsx("span",{className:"logo-normal",children:"digicert "}),i.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),i.jsxs(Qv,{children:[i.jsx(Ho,{children:i.jsxs(Er,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[i.jsx(Yy,{size:20}),s>0&&i.jsx(Yv,{"aria-hidden":"true",children:s})]})}),i.jsxs(Ho,{children:[i.jsx(Er,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:i.jsx(Xy,{size:20})}),n==="settings"&&i.jsx(hv,{onClose:o,onSelectProduct:l})]}),i.jsxs(Ho,{children:[i.jsx(Er,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:i.jsx(Jy,{size:20})}),n==="help"&&i.jsx(yv,{onClose:o})]}),i.jsx(Er,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:i.jsx(i0,{size:20})}),i.jsxs(Ho,{children:[i.jsx(Jv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&i.jsx($v,{onClose:o,onSelectProduct:l})]})]})]}),a&&i.jsx(Xv,{onClick:o,"aria-hidden":"true"}),i.jsx(Rv,{open:n==="cart",onClose:o}),i.jsx(Wv,{open:n==="ai-assist",onClose:o})]})}const Zv=u.nav`
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
`,e2=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,t2=u.button`
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
`,n2=u.span`
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
`,r2=350;function hd({product:e,isActive:t,onSelect:n}){const r=jn(),o=w.useRef(null),l=w.useRef(null),[s,a]=w.useState({visible:!1,y:0});w.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]);const c=()=>{var k;const y=(k=o.current)==null?void 0:k.getBoundingClientRect();return y?y.top+y.height/2:0},d=y=>{l.current&&(clearTimeout(l.current),l.current=null),y?a({visible:!0,y:c()}):l.current=setTimeout(()=>a({visible:!0,y:c()}),r2)},h=()=>{l.current&&(clearTimeout(l.current),l.current=null),a(y=>({...y,visible:!1}))},g=()=>{h(),n(e.id),r(e.route)},m=y=>{if(y.key==="Escape"){h();return}(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),g())};return i.jsxs(i.Fragment,{children:[i.jsx(t2,{ref:o,$active:t,onClick:g,onKeyDown:m,onMouseEnter:()=>d(!1),onMouseLeave:h,onFocus:()=>d(!0),onBlur:h,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:vn(e.iconType,20,t?"#111827":"#6B7280")}),mh.createPortal(i.jsx(n2,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function o2({activeProductId:e,onSelectProduct:t}){return i.jsxs(Zv,{"aria-label":"Product navigation",children:[i.jsx(fd,{children:c0.map(n=>i.jsx(hd,{product:n,isActive:e===n.id,onSelect:t},n.id))}),i.jsx(e2,{}),i.jsx(fd,{children:u0.map(n=>i.jsx(hd,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const i2=u.div`
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
`,l2=u.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,s2=u.div`
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
`,a2=u.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,c2=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,u2=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,d2=u.button`
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
`,p2=u.div`
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
`,f2=u.div`
  margin-bottom: 2px;
`,h2=u.button`
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
`,g2=u.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,m2=u(Th)`
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
`;function x2({section:e,index:t}){const[n,r]=w.useState(e.defaultExpanded??t===0),o=rt(),l=!!e.title,s=!!e.isNavParent,a=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return i.jsxs(f2,{children:[i.jsxs(h2,{$hasTitle:l,$isNavParent:s,onClick:()=>r(c=>!c),"aria-expanded":n,"aria-controls":a,children:[i.jsx("span",{children:e.title}),n?i.jsx(s0,{size:12,color:"currentColor"}):i.jsx(Gr,{size:12,color:"currentColor"})]}),i.jsx(g2,{id:a,$open:n||!l,children:e.items.map(c=>i.jsx(m2,{to:c.route,end:!0,$indent:s,"aria-current":o.pathname===c.route?"page":void 0,children:c.label},c.route))})]})}function y2({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r}){let o=on[e];return e==="settings-billing"&&r==="enterprise"&&(o={...o,sections:o.sections.filter(l=>!l.isSelfService)}),w.useEffect(()=>{const l=s=>{s.key==="Escape"&&t&&n()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[t,n]),i.jsxs(i.Fragment,{children:[i.jsx(p2,{$visible:t,onClick:n,"aria-hidden":"true"}),i.jsxs(i2,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[i.jsx(l2,{children:i.jsx(s2,{$open:t,children:o&&i.jsxs(i.Fragment,{children:[i.jsx(a2,{children:i.jsx(c2,{children:o.label})}),i.jsx(u2,{children:i.jsx("nav",{"aria-label":"Product navigation",children:o.sections.map((l,s)=>i.jsx(x2,{section:l,index:s},l.title||s))})})]})})}),i.jsx(d2,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:i.jsx(Hi,{size:14,color:"currentColor"})})]})]})}const v2=u.div`
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
`,w2=u.div`
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
`,b2=u.div`
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
`,rs=u.button`
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
`,k2=u.hr`
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
`,j2=u.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,$2=u(Th)`
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
`;function C2({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const o=jn(),l=rt(),s=w.useRef(null),a=w.useRef(null),[c,d]=w.useState("l1"),[h,g]=w.useState(null),m=w.useRef(0),y=w.useRef(0);w.useEffect(()=>{e||(d("l1"),g(null))},[e]),w.useEffect(()=>{const j=s.current;j&&(e?j.removeAttribute("inert"):j.setAttribute("inert",""))},[e]),w.useEffect(()=>{if(!e)return;const j=setTimeout(()=>{var E,S;(S=(E=s.current)==null?void 0:E.querySelector("button"))==null||S.focus()},50);return()=>clearTimeout(j)},[e]),w.useEffect(()=>{if(!e)return;const j=E=>{if(E.key==="Escape"){r();return}if(E.key!=="Tab")return;const S=s.current;if(!S)return;const $=S.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),z=$[0],L=$[$.length-1];E.shiftKey&&document.activeElement===z?(E.preventDefault(),L.focus()):!E.shiftKey&&document.activeElement===L&&(E.preventDefault(),z.focus())};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[e,r]);const k=j=>{g(j),d("l2"),setTimeout(()=>{var E;(E=a.current)==null||E.focus()},50)},b=()=>{d("l1")},C=j=>{!!on[j.id]?k(j.id):(n(j.id),o(j.route),r())},f=()=>{r()},p=j=>{m.current=j.touches[0].clientX,y.current=j.touches[0].clientY},x=j=>{const E=j.changedTouches[0].clientX-m.current,S=Math.abs(j.changedTouches[0].clientY-y.current);E<-80&&S<60&&r()},v=h?on[h]:null;return i.jsxs(i.Fragment,{children:[i.jsx(v2,{$open:e,onClick:r,"aria-hidden":"true"}),i.jsx(w2,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:p,onTouchEnd:x,children:i.jsxs(b2,{$offset:c==="l1"?0:-50,children:[i.jsxs(gd,{"aria-hidden":c!=="l1",children:[i.jsxs(md,{children:[i.jsx(xd,{children:"Navigation"}),i.jsx(rs,{onClick:r,"aria-label":"Close menu",children:i.jsx(va,{size:16,color:"currentColor"})})]}),i.jsx(yd,{children:i.jsxs("nav",{"aria-label":"Product list",children:[i.jsx(vd,{children:c0.map(j=>i.jsxs(wd,{$active:t===j.id,onClick:()=>C(j),"aria-current":t===j.id?"page":void 0,"aria-haspopup":on[j.id]?"menu":void 0,children:[vn(j.iconType,18,t===j.id?"#1976D2":"#6B7280"),i.jsx(bd,{children:j.label}),on[j.id]&&i.jsx(ld,{size:14,color:t===j.id?"#1976D2":"#9CA3AF"})]},j.id))}),i.jsx(k2,{}),i.jsx(vd,{children:u0.map(j=>i.jsxs(wd,{$active:t===j.id,onClick:()=>C(j),"aria-current":t===j.id?"page":void 0,"aria-haspopup":on[j.id]?"menu":void 0,children:[vn(j.iconType,18,t===j.id?"#1976D2":"#6B7280"),i.jsx(bd,{children:j.label}),on[j.id]&&i.jsx(ld,{size:14,color:t===j.id?"#1976D2":"#9CA3AF"})]},j.id))})]})})]}),i.jsxs(gd,{ref:a,"aria-hidden":c!=="l2",children:[i.jsxs(md,{children:[i.jsx(rs,{onClick:b,"aria-label":"Back to menu",children:i.jsx(Hi,{size:16,color:"currentColor"})}),i.jsx(xd,{children:(v==null?void 0:v.label)??""}),i.jsx(rs,{onClick:r,"aria-label":"Close menu",children:i.jsx(va,{size:16,color:"currentColor"})})]}),i.jsx(yd,{children:v&&i.jsx("nav",{"aria-label":`${v.label} navigation`,children:v.sections.map((j,E)=>i.jsxs("div",{children:[j.title&&i.jsx(j2,{children:j.title}),j.items.map(S=>i.jsx($2,{to:S.route,end:!0,"aria-current":l.pathname===S.route?"page":void 0,onClick:f,children:S.label},S.route))]},j.title||E))})})]})]})})]})}const S2=u.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,E2=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,P2=u.div``,T2=u.h1`
  margin: 0 0 6px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.neutral900};
`,L2=u.p`
  margin: 0;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral600};
`,I2=u.button`
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
`,z2=u.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,R2=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,D2=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px 24px;
`,M2=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`,N2=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.neutral500};
`,A2=u.div`
  min-width: 0;
`,F2=u.h3`
  margin: 0 0 3px;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 600;
`,O2=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
`,_2=u.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,B2=u.a`
  display: block;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,U2=u.div`
  display: grid;
  gap: 16px;
`,W2=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,V2=u.div`
  width: 100%;
  min-height: 180px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
`,H2=u.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`,Q2=u.div`
  padding: 16px 20px 20px;
`,K2=u.div`
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
`,G2=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 10px;
`,Y2=u.h3`
  margin: 0 0 8px;
  font-size: 17px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,J2=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,X2=u.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;

  &:hover { text-decoration: underline; }
`,q2=u.article`
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Z2=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,ew=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(0, 155, 135, 0.45);
  color: #007B6E;
  letter-spacing: 0.02em;
`,tw=u.button`
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
`,nw=u.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,rw=u.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,ow=u.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,iw=[{title:"Trust Lifecycle",subtitle:"Certificate management",iconType:"cycle",actions:[{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Automate certificate lifecycle",href:"/trust-lifecycle/tools"}]},{title:"Valimail",subtitle:"Email authentication",iconType:"envelope",actions:[{label:"Review DMARC status",href:"/valimail/dashboard"},{label:"Manage sender sources",href:"/valimail/dashboard"},{label:"Monitor domains",href:"/valimail/dashboard"},{label:"Investigate spoofing risks",href:"/valimail/dashboard"}]},{title:"Quantum Central",subtitle:"Post-quantum readiness",iconType:"settings",actions:[{label:"Assess cryptographic risk",href:"/quantum-central/dashboard"},{label:"Review PQC readiness",href:"/quantum-central/dashboard"},{label:"View algorithm inventory",href:"/quantum-central/dashboard"},{label:"Track remediation",href:"/quantum-central/dashboard"}]},{title:"AI Agents",subtitle:"AI identity & governance",iconType:"sparkle",actions:[{label:"Register agents",href:"/ai-agents/dashboard"},{label:"Manage agent identities",href:"/ai-agents/dashboard"},{label:"Review agent activity",href:"/ai-agents/dashboard"},{label:"Configure trust policies",href:"/ai-agents/dashboard"}]},{title:"Device Trust",subtitle:"IoT device security",iconType:"mobile",actions:[{label:"Register devices",href:"/device-trust/dashboard"},{label:"Manage device identities",href:"/device-trust/dashboard"},{label:"Configure device policies",href:"/device-trust/dashboard"},{label:"Review device lifecycle",href:"/device-trust/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",iconType:"hierarchy",actions:[{label:"Issue internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage certificate profiles",href:"/private-ca/certificate-profiles"},{label:"Configure OCSP",href:"/private-ca/ocsps"}]},{title:"Software Trust",subtitle:"Code signing",iconType:"code",actions:[{label:"Manage signing keys",href:"/software-trust/dashboard"},{label:"Configure signing policies",href:"/software-trust/dashboard"},{label:"Sign software",href:"/software-trust/dashboard"},{label:"Generate SBOM",href:"/software-trust/dashboard"}]},{title:"DNS Trust",subtitle:"DNS management",iconType:"globe",actions:[{label:"Manage zones",href:"/dns/dashboard"},{label:"Update DNS records",href:"/dns/dashboard"},{label:"Configure traffic steering",href:"/dns/dashboard"},{label:"Review DNSSEC settings",href:"/dns/dashboard"}]},{title:"Content Trust",subtitle:"Document & content signing",iconType:"document",actions:[{label:"Manage signing credentials",href:"/content-trust/dashboard"},{label:"Verify signed content",href:"/content-trust/dashboard"},{label:"Review signing activity",href:"/content-trust/dashboard"},{label:"Configure seal policies",href:"/content-trust/dashboard"}]},{title:"CertCentral",subtitle:"Public certificates",iconType:"shield",actions:[{label:"Order public certificate",href:"/certcentral/dashboard"},{label:"Validate domains",href:"/certcentral/dashboard"},{label:"Manage organizations",href:"/certcentral/dashboard"},{label:"Expiring certificates",href:"/certcentral/inventory"}]}];function lw(){const[e,t]=w.useState(!1);return i.jsxs(S2,{children:[i.jsxs(E2,{children:[i.jsxs(P2,{children:[i.jsx(T2,{children:"Hello, John"}),i.jsx(L2,{children:"Access your DigiCert trust solutions and discover what's new"})]}),i.jsx(I2,{"aria-label":"Page settings",children:i.jsx(l0,{size:18,color:"currentColor"})})]}),i.jsxs(z2,{children:[i.jsx(R2,{children:iw.map(n=>i.jsxs(D2,{children:[i.jsxs(M2,{children:[i.jsx(N2,{children:vn(n.iconType,20,"currentColor")}),i.jsxs(A2,{children:[i.jsx(F2,{children:n.title}),i.jsx(O2,{children:n.subtitle})]})]}),i.jsx(_2,{children:n.actions.map(r=>i.jsx("li",{children:i.jsx(B2,{href:r.href,children:r.label})},r.label))})]},n.title))}),i.jsxs(U2,{children:[i.jsxs(W2,{children:[i.jsx(V2,{children:i.jsx(H2,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),i.jsxs(Q2,{children:[i.jsx(K2,{children:"Certificate lifecycle"}),i.jsxs(G2,{children:[i.jsx("span",{children:"Brian Trzupek · 5 min read"}),i.jsx("span",{children:"digicert.com/blog"})]}),i.jsx(Y2,{children:"Certificate lifecycle management reaches an inflection point"}),i.jsx(J2,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),i.jsx(X2,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&i.jsxs(q2,{children:[i.jsxs(Z2,{children:[i.jsx(ew,{children:"Software Trust Manager"}),i.jsx(tw,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:i.jsx(va,{size:14,color:"currentColor"})})]}),i.jsx(nw,{children:"Centralize code-signing at scale"}),i.jsx(rw,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),i.jsx(ow,{href:"/software-trust/dashboard",children:"Explore STM →"})]})]})]})]})}const sw=u.main`
  padding: 24px;
`,aw=u.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,kd=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function jd(){const e=rt(),t=sv[e.pathname]??e.pathname;return w.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),i.jsxs(sw,{children:[i.jsx(aw,{children:t}),e.pathname==="/profile"&&i.jsx(kd,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),i.jsxs(kd,{children:["This is a stub page for ",i.jsx("code",{children:e.pathname})]})]})}const Pe={name:"Sarah Mitchell",title:"Enterprise Account Manager, DigiCert",email:"sarah.mitchell@digicert.com"},cw=[{id:"trust-lifecycle",name:"Trust Lifecycle",iconType:"cycle",plan:"Advanced",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Seats",consumed:30,total:75},entitlements:[{name:"Seats",purchased:75,allocated:75,consumed:30,remaining:45}]},{id:"software-trust",name:"Software Trust",iconType:"code",tier:"Enterprise",plan:"Premium",autoRenewal:!0,contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Signatures",consumed:124210,total:25e4},entitlements:[{name:"Signatures",purchased:25e4,allocated:25e4,consumed:124210,remaining:125790},{name:"HSM keypairs",purchased:4,allocated:4,consumed:2,remaining:2}],purchasedControls:[{name:"Signatures",purchased:25e4,used:124210,remaining:125790},{name:"HSM keypair",purchased:10,used:6,remaining:4,planIncluded:6}],includedResources:[{name:"Repositories",includedWithPlan:"Up to 100",available:100,used:76,remaining:24},{name:"Test signatures",includedWithPlan:"2,500,000",available:25e5,used:812430,remaining:1687570}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private root certificates",consumed:9,total:10},entitlements:[{name:"Private root certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Private intermediate CA certificates",purchased:25,allocated:25,consumed:20,remaining:5},{name:"Dynamic intermediate CAs",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500}]},{id:"content-trust",name:"Content Trust",iconType:"document",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Seats",purchased:500,allocated:500,consumed:340,remaining:160},{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800}]},{id:"device-trust",name:"Device Trust",iconType:"mobile",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Device certificates",consumed:45e3,total:1e5},entitlements:[{name:"Device certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Device groups",purchased:50,allocated:50,consumed:32,remaining:18},{name:"API calls / month",purchased:1e6,allocated:1e6,consumed:62e4,remaining:38e4}]},{id:"dns",name:"DigiCert DNS",iconType:"globe",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Queries",consumed:45e4,total:1e6},entitlements:[{name:"Queries",purchased:1e6,allocated:1e6,consumed:45e4,remaining:55e4}]},{id:"valimail",name:"Valimail",iconType:"envelope",plan:"Essential",autoRenewal:!1,contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Domains",consumed:18,total:25},entitlements:[{name:"Domains",purchased:25,allocated:25,consumed:18,remaining:7},{name:"Email volume/month",purchased:5e6,allocated:5e6,consumed:28e5,remaining:22e5}]},{id:"iot-trust",name:"IoT Trust",iconType:"chip",contractId:"CTR-2024-IOT-00044",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IoT Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"End entity certificates",consumed:28e4,total:5e5},entitlements:[{name:"End entity certificates",purchased:5e5,allocated:5e5,consumed:28e4,remaining:22e4},{name:"End entity devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Intermediate CA certificates",purchased:50,allocated:50,consumed:12,remaining:38},{name:"Intermediate CA devices",purchased:100,allocated:100,consumed:45,remaining:55}]}],Qo=[{accountId:"acme-global-security",displayAccountId:"1001445",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"peak-usage",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8,periodPeak:128,periodPeakDate:"Aug 14, 2025",purchasedUSD:"$80,000"},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8,periodPeak:22,periodPeakDate:"Sep 3, 2025",purchasedUSD:"$9,600"},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60,periodPeak:180,periodPeakDate:"Oct 12, 2025",purchasedUSD:"$24,000"},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7,periodPeak:8,periodPeakDate:"Nov 5, 2025",purchasedUSD:"$2,400"},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4,periodPeak:2,periodPeakDate:"—",purchasedUSD:"$1,500"}],peakUsageData:{periodPeakDate:"Aug 14, 2025",monthLabels:["Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Mar 26","Apr 26","May 26","Jun 26"],series:[{name:"SSL/TLS certificates",color:"#4B91D6",currentActive:108,periodPeak:128,periodPeakDate:"Aug 14, 2025",monthly:[90,110,128,122,115,108,100,96,92,98,104,110,108],monthlyCost:[72e3,88e3,102400,97600,92e3,86400,8e4,76800,73600,78400,83200,88e3,86400]},{name:"Code signing",color:"#F59E0B",currentActive:16,periodPeak:22,periodPeakDate:"Sep 3, 2025",monthly:[10,14,18,22,20,18,16,15,14,15,16,16,16],monthlyCost:[6e3,8400,10800,13200,12e3,10800,9600,9e3,8400,9e3,9600,9600,9600]},{name:"S/MIME certificates",color:"#10B981",currentActive:140,periodPeak:180,periodPeakDate:"Oct 12, 2025",monthly:[120,138,155,168,180,174,162,152,148,152,158,145,140],monthlyCost:[24e3,27600,31e3,33600,36e3,34800,32400,30400,29600,30400,31600,29e3,28e3]},{name:"Document signing",color:"#8B5CF6",currentActive:5,periodPeak:8,periodPeakDate:"Nov 5, 2025",monthly:[2,3,4,5,7,8,7,6,5,5,5,5,5],monthlyCost:[1e3,1500,2e3,2500,3500,4e3,3500,3e3,2500,2500,2500,2500,2500]}]}},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",displayAccountId:"2003891",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",displayAccountId:"3007234",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-enterprise",displayAccountId:"5001298",accountName:"ACME Enterprise",enterpriseInstance:{instanceId:"acme-enterprise-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"drawdown",contractId:"CTR-2024-CC-00214",contractTerm:"Nov 1, 2025 – Oct 31, 2026",contractOwner:"Enterprise IT",renewalDate:"Oct 31, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:55,total:120},entitlements:[{name:"SSL/TLS certificates",purchased:120,allocated:120,consumed:55,remaining:65},{name:"Code signing certificates",purchased:40,allocated:40,consumed:18,remaining:22},{name:"S/MIME certificates",purchased:300,allocated:300,consumed:210,remaining:90},{name:"Document signing certificates",purchased:20,allocated:20,consumed:7,remaining:13}]}}],uw=["over-entitlement","approaching-limit","no-data","healthy"];function dw(e){return uw.find(t=>e.includes(t))||"healthy"}function pw(e){const{id:t,name:n,iconType:r,...o}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:o.renewalDate,status:o.status,primaryEntitlement:o.primaryEntitlement,entitlements:o.entitlements,plan:o.plan,tier:o.tier,autoRenewal:o.autoRenewal,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...o}]}}function Ko(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(l=>l.subscriptionType))],o=[...new Set(n.map(l=>l.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountId:e.displayAccountId,accountName:e.accountName,subscriptionTypes:r,renewalDate:o.length===1?o[0]:"Varies by instance",status:dw(n.map(l=>l.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const $d=cw.map(pw),fw=new Set(["device-trust","dns","valimail","iot-trust"]);function Sc(){const e=[Ko(Qo[0],["enterprise"]),Ko(Qo[1],["enterprise"]),Ko(Qo[2],["ecommerce"]),Ko(Qo[3],["enterprise"])],t=$d.slice(0,3),n=$d.slice(3).filter(r=>!fw.has(r.id));return[...t,...e,...n]}const mi=[{id:"us-prod",name:"Acme — US production"},{id:"us-stage",name:"Acme — US stage"},{id:"eu-prod",name:"Acme — EU production"},{id:"eu-stage",name:"Acme — EU stage"},{id:"in-prod",name:"Acme — IN"}],hw={"us-prod":["trust-lifecycle","software-trust","private-ca","certcentral-acme-global-security","certcentral-acme-marketing","certcentral-acme-enterprise"],"us-stage":["trust-lifecycle","software-trust","certcentral-acme-global-security","certcentral-acme-marketing"],"eu-prod":["trust-lifecycle","private-ca","certcentral-acme-global-security","certcentral-acme-enterprise"],"eu-stage":["software-trust","certcentral-acme-marketing"],"in-prod":["software-trust","certcentral-acme-enterprise"]},gw={"us-prod":1,"us-stage":.25,"eu-prod":.65,"eu-stage":.15,"in-prod":.4};function os(){const e=Sc(),t=e.filter(s=>!s.id.startsWith("certcentral-")),n=e.filter(s=>s.id.startsWith("certcentral-")),r=n.find(s=>s.id==="certcentral-acme-devops"),o=n.filter(s=>s.id!=="certcentral-acme-devops"),l=[];r&&l.push({...r,envIds:mi.map(s=>s.id),envNames:mi.map(s=>s.name)});for(const s of mi){const a=gw[s.id],c=hw[s.id];for(const d of c){const h=[...t,...o].find(b=>b.id===d);if(!h)continue;const g=b=>Math.round(b*a),m=h.entitlements.map(b=>({...b,consumed:g(b.consumed),remaining:b.allocated-g(b.consumed)})),y={...h.primaryEntitlement,consumed:g(h.primaryEntitlement.consumed)},k=h.instances.map(b=>{const C={...b,entitlements:b.entitlements?b.entitlements.map(f=>({...f,consumed:g(f.consumed),remaining:f.allocated-g(f.consumed)})):b.entitlements,primaryEntitlement:b.primaryEntitlement?{...b.primaryEntitlement,consumed:g(b.primaryEntitlement.consumed)}:b.primaryEntitlement};return b.purchasedControls&&(C.purchasedControls=b.purchasedControls.map(f=>({...f,used:g(f.used),remaining:f.purchased-g(f.used)}))),b.includedResources&&(C.includedResources=b.includedResources.map(f=>({...f,used:g(f.used),remaining:typeof f.available=="number"?f.available-g(f.used):f.remaining}))),C});l.push({...h,envId:s.id,envName:s.name,entitlements:m,primaryEntitlement:y,instances:k})}}return l}const mw=u.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,xw=u.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function yw({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return i.jsx(mw,{role:"presentation",children:i.jsx(xw,{$pct:n})})}const d0=u(wc)`
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
`,p0=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,f0=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,h0=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,g0=u.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,m0=u.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
`;u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;const x0=u.span`
  flex-shrink: 0;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  background: #1C7852;
  color: #ffffff;
`,y0=u.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e}, 1fr);
  gap: 10px;
  padding: 10px 0 2px;
`,v0=u.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`,w0=u.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,b0=u.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,k0=u.div`
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
`,j0=u.div`
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
`,kw=u.button`
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
`;function $0({items:e}){const[t,n]=w.useState(!1),r=w.useRef(null);return w.useEffect(()=>{if(!t)return;const o=s=>{r.current&&!r.current.contains(s.target)&&n(!1)},l=s=>{s.key==="Escape"&&n(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",l)}},[t]),i.jsxs(vw,{ref:r,children:[i.jsx(ww,{type:"button",onClick:o=>{o.preventDefault(),o.stopPropagation(),n(l=>!l)},"aria-label":"More actions","aria-expanded":t,children:i.jsx(Qi,{size:14,color:"currentColor"})}),t&&i.jsx(bw,{onClick:o=>o.stopPropagation(),children:e.map(o=>i.jsx(kw,{type:"button",$destructive:o.destructive,onClick:l=>{l.preventDefault(),l.stopPropagation(),n(!1)},children:o.label},o.label))})]})}const jw=u.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,$w=u.button`
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
`,Cw=u.div`
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
`,Cd=u.p`
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
`,C0=u.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,S0=u.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.span``;function ka({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return i.jsx(Cw,{children:n.map(r=>i.jsxs("div",{children:[i.jsxs(Sw,{children:[i.jsx(Ew,{children:r.name}),i.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),i.jsx(yw,{consumed:r.consumed,total:r.allocated}),r.remaining<0?i.jsxs(Cd,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):i.jsxs(Cd,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function E0(e){if(e.id.startsWith("certcentral-")){const o=e.subscriptionTypes.includes("enterprise"),l=e.subscriptionTypes.includes("ecommerce");return[{label:"Tier",value:o&&l?"Enterprise + E-commerce":o?"Enterprise":"E-commerce"},{label:"Account name",value:e.accountName},{label:"Account ID",value:e.accountId}]}const r=[{label:"Tier",value:e.tier||"Enterprise"}];return e.plan&&r.push({label:"Plan",value:e.plan}),e.autoRenewal!==void 0&&r.push({label:"Auto-renewal",value:e.autoRenewal?"On":"Off"}),r}function Pw({subscription:e}){const[t,n]=w.useState(e.instances[0].instanceId),r=e.instances.find(d=>d.instanceId===t)||e.instances[0],o=r.subscriptionType==="enterprise",l=r.entitlements.slice(0,3),s=r.entitlements.length-l.length,a=[{label:"Open CertCentral"},{label:"Documentation"}],c=E0(e);return i.jsxs(d0,{to:`/settings/billing/${e.id}`,children:[i.jsxs(p0,{children:[i.jsxs(f0,{children:[i.jsx(h0,{children:vn(e.iconType,20,"currentColor")}),i.jsx(g0,{children:i.jsxs(k0,{children:[i.jsx(m0,{children:e.name}),i.jsxs(x0,{children:["Renews ",e.renewalDate]})]})})]}),i.jsx(j0,{children:i.jsx($0,{items:a})})]}),i.jsx(y0,{$cols:c.length,children:c.map(d=>i.jsxs(v0,{children:[i.jsx(w0,{children:d.label}),i.jsx(b0,{children:d.value})]},d.label))}),i.jsx(jw,{onClick:d=>d.preventDefault(),children:e.instances.map(d=>i.jsx($w,{type:"button",$active:d.instanceId===t,onClick:h=>{h.preventDefault(),h.stopPropagation(),n(d.instanceId)},children:d.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},d.instanceId))}),o?i.jsxs(i.Fragment,{children:[l.length>0?i.jsx(ka,{entitlements:r.entitlements,maxVisible:3}):i.jsx(S0,{children:"Usage data not available yet."}),i.jsxs(wa,{children:[s>0&&i.jsxs(C0,{children:["+",s," more"]}),i.jsx(ba,{children:"Managed by your Account Manager"})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(ka,{entitlements:r.entitlements,maxVisible:3}),i.jsxs(wa,{children:[i.jsx("span",{}),i.jsx(ba,{children:"Self-service subscription"})]})]})]})}function Tw({subscription:e}){if(e.instances.length>1)return i.jsx(Pw,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:o,entitlements:l}=e,s=e.subscriptionTypes.includes("enterprise"),a=e.subscriptionTypes.includes("ecommerce"),c=a&&!s,d=t.startsWith("certcentral-"),h=l.slice(0,3),g=l.length-h.length,m=s?"Managed by your Account Manager":a?"Self-service subscription":null,k=c&&d?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${d?"CertCentral":n}`},{label:"Documentation"}],b=E0(e);return i.jsxs(d0,{to:`/settings/billing/${t}`,children:[i.jsxs(p0,{children:[i.jsxs(f0,{children:[i.jsx(h0,{children:vn(r,20,"currentColor")}),i.jsx(g0,{children:i.jsxs(k0,{children:[i.jsx(m0,{children:n}),c&&o&&i.jsxs(x0,{children:["Renews ",o]})]})})]}),i.jsx(j0,{children:i.jsx($0,{items:k})})]}),i.jsx(y0,{$cols:b.length,children:b.map(C=>i.jsxs(v0,{children:[i.jsx(w0,{children:C.label}),i.jsx(b0,{children:C.value})]},C.label))}),h.length>0?i.jsx(ka,{entitlements:l,maxVisible:3}):i.jsx(S0,{children:"Usage data is not available for this product yet."}),m&&i.jsxs(wa,{children:[g>0?i.jsxs(C0,{children:["+",g," more"]}):i.jsx("span",{}),i.jsx(ba,{children:m})]})]})}const P0=w.createContext({hasAccountManager:!0,setHasAccountManager:()=>{}});function Ec(){return w.useContext(P0)}const Lw=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,Iw=u.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d97706;
  white-space: nowrap;
  padding-right: 8px;
  border-right: 1px solid #fde68a;
`,zw=u.div`
  display: flex;
  background: #f3f4f6;
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
`,Sd=u.button`
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;

  background: ${({$active:e})=>e?"#fff":"transparent"};
  color: ${({$active:e})=>e?"#111827":"#6b7280"};
  box-shadow: ${({$active:e})=>e?"0 1px 3px rgba(0,0,0,0.12)":"none"};

  &:hover {
    color: ${({$active:e})=>e?"#111827":"#374151"};
  }
  &:focus-visible {
    outline: 2px solid #f59e0b;
    outline-offset: 1px;
  }
`;function T0(){const{hasAccountManager:e,setHasAccountManager:t}=Ec();return i.jsxs(Lw,{children:[i.jsx(Iw,{children:"Prototype"}),i.jsxs(zw,{children:[i.jsx(Sd,{type:"button",$active:e===!0,onClick:()=>t(!0),children:"Known account manager"}),i.jsx(Sd,{type:"button",$active:e===!1,onClick:()=>t(!1),children:"No account manager"})]})]})}function Rw({children:e}){const[t,n]=w.useState(!0);return i.jsx(P0.Provider,{value:{hasAccountManager:t,setHasAccountManager:n},children:e})}const Dw=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,Mw=u.div`
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
`,Nw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Aw=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Fw=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ow=u.button`
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
`,_w=u.div`
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
`,Bw=u.div`
  flex-shrink: 0;
  padding: 12px 16px;
  border-top: 1.5px dashed #fde68a;
  background: #fffbeb;
`,Uw=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
`,Ww=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Vw=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
`,Hw=u.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.neutral200};
`,Qw=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Kw=u.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,Ed=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Pd=u.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
`,Gw=u.input`
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
`,Yw=u.textarea`
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
`,Jw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,Xw=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,qw=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
`,Zw=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,eb=u.div`
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
`,tb=u.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,nb=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,rb=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,ob=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ib=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,lb=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,sb=u.button`
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
`,ab=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,cb=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,ub=u.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  width: fit-content;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; border-radius: 2px; }
`,Td={subscriptions:{heading:"Questions about subscriptions?",body:"Use the form below to contact your DigiCert account manager.",bodyNoManager:"Fill out the form below and your message will be routed to the appropriate DigiCert team."},"payment-details":{heading:"Questions about payment details?",body:"Use the form below to contact your DigiCert account manager about billing or payment questions.",bodyNoManager:"Fill out the form below about billing or payment questions and your message will be routed to the appropriate DigiCert team."},receipts:{heading:"Questions about your invoices?",body:"Use the form below to contact your DigiCert account manager about receipts or billing history.",bodyNoManager:"Fill out the form below about receipts or billing history and your message will be routed to the appropriate DigiCert team."}};function L0({open:e,onClose:t,helpContext:n="subscriptions",hasAccountManager:r=!0}){const o=Td[n]||Td.subscriptions,l=Pe.name.split(" ").map(a=>a[0]).join(""),s=w.useRef(null);return w.useEffect(()=>{const a=c=>{c.key==="Escape"&&e&&t()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,t]),w.useEffect(()=>{e&&s.current&&setTimeout(()=>{var a;return(a=s.current)==null?void 0:a.focus()},260)},[e]),i.jsxs(i.Fragment,{children:[i.jsx(Dw,{$open:e,onClick:t,"aria-hidden":"true"}),i.jsxs(Mw,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[i.jsxs(Nw,{children:[i.jsxs(Aw,{children:[i.jsx(ar,{size:18,color:"currentColor"}),i.jsx(Fw,{children:"Need help?"})]}),i.jsx(Ow,{type:"button",onClick:t,"aria-label":"Close drawer",ref:s,children:"×"})]}),i.jsxs(_w,{children:[r&&i.jsxs(qw,{children:[i.jsxs(Zw,{children:[i.jsx(eb,{children:l}),i.jsxs(tb,{children:[i.jsx(nb,{children:Pe.name}),i.jsx(rb,{children:Pe.title})]})]}),i.jsx(ob,{children:i.jsxs(ib,{children:[i.jsx(Gn,{size:14,color:"currentColor"}),i.jsx(lb,{href:`mailto:${Pe.email}`,children:Pe.email})]})})]}),i.jsxs(Uw,{children:[i.jsx(Ww,{children:o.heading}),i.jsx(Vw,{children:r?o.body:o.bodyNoManager})]}),i.jsx(Hw,{}),i.jsxs(Qw,{children:[i.jsx(Kw,{children:"Send a message"}),i.jsxs(Ed,{children:[i.jsx(Pd,{htmlFor:"drawer-subject",children:"Subject"}),i.jsx(Gw,{id:"drawer-subject",type:"text",placeholder:"e.g. Request additional SSL/TLS licenses"})]}),i.jsxs(Ed,{children:[i.jsx(Pd,{htmlFor:"drawer-message",children:"Message"}),i.jsx(Yw,{id:"drawer-message",placeholder:"Describe what you need help with...",rows:4})]}),i.jsxs(Jw,{children:[i.jsx(Xw,{children:r?`Your message will be sent to ${Pe.name}.`:"Your message will be routed to the appropriate DigiCert team."}),i.jsx(sb,{type:"button",children:"Send message"})]})]}),i.jsxs(ab,{children:[i.jsx(cb,{children:"Need to speak to sales instead?"}),i.jsxs(ub,{href:"https://www.digicert.com/contact-us",target:"_blank",rel:"noopener noreferrer",children:["Contact sales",i.jsx(yl,{size:12,color:"currentColor"})]})]})]}),i.jsx(Bw,{children:i.jsx(T0,{})})]})]})}const db=u.main`
  padding: 32px;
`,pb=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,fb=u.div``,hb=u.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,gb=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,mb=u.button`
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
`;const xb=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(358px, auto);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;function yb(){const[e,t]=w.useState(!1),{hasAccountManager:n}=Ec();w.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]);const r=Sc();return i.jsxs(db,{children:[i.jsxs(pb,{children:[i.jsxs(fb,{children:[i.jsx(hb,{children:"My subscriptions"}),i.jsx(gb,{children:"View your active product subscriptions, entitlement usage, and renewal information."})]}),i.jsxs(mb,{type:"button",onClick:()=>t(!0),children:[i.jsx(ar,{size:15,color:"currentColor"}),"Need help?"]})]}),i.jsx(xb,{children:r.map(o=>i.jsx(Tw,{subscription:o},o.id))}),i.jsx(L0,{open:e,onClose:()=>t(!1),hasAccountManager:n})]})}const vb=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,I0=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  right: 0;
  bottom: 0;
  width: 440px;
  background: ${({theme:e})=>e.colors.white};
  z-index: ${({$zIndex:e})=>e||1101};
  display: flex;
  flex-direction: column;
  transform: translateX(${({$open:e})=>e?"0":"100%"});
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.14);

  @media (max-width: 500px) {
    width: 100%;
  }
`,z0=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,R0=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,D0=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,M0=u.button`
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
`,wb=u.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
  padding: 0;

  &:hover { color: ${({theme:e})=>e.colors.blue300}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; border-radius: 3px; }
`,N0=u.div`
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
`,bb=u.div`
  flex-shrink: 0;
  padding: 12px 16px;
  border-top: 1.5px dashed #fde68a;
  background: #fffbeb;
`,kb=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
`,jb=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,$b=u.div`
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
`,Cb=u.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Sb=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Eb=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Pb=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Tb=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Lb=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,Ib=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
`,zb=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Rb=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
`,Db=u.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.neutral200};
`,Mb=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Nb=u.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,Ld=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Id=u.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
`,Ab=u.input`
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
`,Fb=u.textarea`
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
`,Ob=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,_b=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Bb=u.button`
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
`,Ub=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Wb=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Vb=u.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: transparent;
  padding: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  width: fit-content;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; border-radius: 2px; }
`,is=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ls=u.h3`
  margin: 0 0 2px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,zd=u.p`
  margin: 0 0 10px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Rd=u.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  margin-bottom: 12px;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
`,ss=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,it=u.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`;u.span`
  flex-shrink: 0;
  width: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral500};
`;const as=u.p`
  margin: 10px 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,En=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Pr=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,cs=u.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.neutral200};
  margin: 4px 0;
`,Hb=u.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 10px;
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  font-size: 11px;
  font-weight: 600;
  margin-left: 8px;
  vertical-align: middle;
`;u.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
`;u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`;u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
`;u.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;u.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`;u.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;u.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral700};
`;function Qb({open:e,onClose:t,onCloseAll:n}){const r=w.useRef(null);return w.useEffect(()=>{const o=l=>{l.key==="Escape"&&e&&t()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),w.useEffect(()=>{e&&r.current&&setTimeout(()=>{var o;return(o=r.current)==null?void 0:o.focus()},260)},[e]),i.jsxs(I0,{$open:e,$zIndex:1103,role:"dialog","aria-modal":"true","aria-label":"CertCentral support",children:[i.jsxs(z0,{children:[i.jsxs(R0,{children:[i.jsx(ar,{size:18,color:"currentColor"}),i.jsx(D0,{children:"Need help?"})]}),i.jsx(M0,{type:"button",onClick:n,"aria-label":"Close drawer",ref:r,children:"×"})]}),i.jsxs(N0,{children:[i.jsx(wb,{type:"button",onClick:t,children:"← Back"}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[i.jsx("p",{style:{margin:0,fontSize:"13px",color:"#6b7280"},children:"Current plan"}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[i.jsx("p",{style:{margin:0,fontSize:"20px",fontWeight:"600",color:"#111827"},children:"Standard plus"}),i.jsx(Hb,{children:"24x5 support"})]})]}),i.jsx(cs,{}),i.jsxs(is,{children:[i.jsx(ls,{children:"Technical support"}),i.jsx(zd,{children:"Get help with certificate installation, CSRs, and other technical issues."}),i.jsx(Rd,{type:"button",children:"Support chat"}),i.jsxs(ss,{children:[i.jsxs(it,{children:[i.jsx(Sr,{size:14,color:"currentColor"}),i.jsx("span",{children:"+1 800 579 2848"})]}),i.jsxs(it,{children:[i.jsx(Sr,{size:14,color:"currentColor"}),i.jsx("span",{children:"+1 801 769 0749"})]}),i.jsx(it,{style:{paddingLeft:"22px"},children:i.jsx("span",{style:{fontSize:"12px",color:"#9ca3af"},children:"PIN: 1779"})}),i.jsxs(it,{children:[i.jsx(Gn,{size:14,color:"currentColor"}),i.jsx(Pr,{href:"mailto:cc.standard.support@digicert.com",children:"cc.standard.support@digicert.com"})]}),i.jsxs(it,{children:[i.jsx(yl,{size:14,color:"currentColor"}),i.jsx(Pr,{href:"https://support.digicert.com",target:"_blank",rel:"noopener noreferrer",children:"Support portal"})]})]}),i.jsx(as,{children:"Support hours"}),i.jsx(En,{children:"Monday – Friday: 24 hours"}),i.jsx(En,{children:"Saturday and Sunday: Closed"})]}),i.jsx(cs,{}),i.jsxs(is,{children:[i.jsx(ls,{children:"Validation support"}),i.jsx(zd,{children:"Get help with domain and organization validation."}),i.jsx(Rd,{type:"button",children:"Validation chat"}),i.jsxs(ss,{children:[i.jsxs(it,{children:[i.jsx(Sr,{size:14,color:"currentColor"}),i.jsx("span",{children:"+1 800 579 2848"})]}),i.jsxs(it,{children:[i.jsx(Sr,{size:14,color:"currentColor"}),i.jsx("span",{children:"+1 801 769 0749"})]}),i.jsxs(it,{children:[i.jsx(Gn,{size:14,color:"currentColor"}),i.jsx(Pr,{href:"mailto:standard.validation@digicert.com",children:"standard.validation@digicert.com"})]})]}),i.jsx(as,{children:"Support hours"}),i.jsx(En,{children:"Monday – Friday: 24 hours"}),i.jsx(En,{children:"Saturday and Sunday: Closed"})]}),i.jsx(cs,{}),i.jsxs(is,{children:[i.jsx(ls,{children:"Sales"}),i.jsxs(ss,{children:[i.jsxs(it,{children:[i.jsx(Sr,{size:14,color:"currentColor"}),i.jsx(Pr,{href:"tel:+18017019600",children:"+1 (801) 701-9600"})]}),i.jsxs(it,{children:[i.jsx(Gn,{size:14,color:"currentColor"}),i.jsx(Pr,{href:"mailto:sales@digicert.com",children:"sales@digicert.com"})]})]}),i.jsx(as,{children:"Support hours"}),i.jsx(En,{children:"Monday – Friday: 24 hours"}),i.jsx(En,{children:"Saturday and Sunday: Closed"})]})]})]})}const Dd={default:{heading:"Questions about this purchase?",body:"Use the form below to contact your DigiCert account manager.",bodyNoManager:"Send us a message below and we'll route it to the appropriate DigiCert team."},"payment-details":{heading:"Questions about payment details?",body:"Use the form below to contact your DigiCert account manager about billing or payment questions.",bodyNoManager:"Have questions about your payment methods or charges? Send us a message below and we'll route it to the appropriate DigiCert team."},receipts:{heading:"Questions about your invoices?",body:"Use the form below to contact your DigiCert account manager about receipts or billing history.",bodyNoManager:"Have questions about invoices or billing history? Send us a message below and we'll route it to the appropriate DigiCert team."}};function Kb({open:e,onClose:t,helpContext:n="default",hasAccountManager:r=!0}){const[o,l]=w.useState(!1),s=Dd[n]||Dd.default,a=Pe.name.split(" ").map(d=>d[0]).join(""),c=w.useRef(null);return w.useEffect(()=>{const d=h=>{h.key==="Escape"&&e&&(o?l(!1):t())};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,t,o]),w.useEffect(()=>{e&&c.current&&setTimeout(()=>{var d;return(d=c.current)==null?void 0:d.focus()},260)},[e]),i.jsxs(i.Fragment,{children:[i.jsx(vb,{$open:e,onClick:t,"aria-hidden":"true"}),i.jsxs(I0,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[i.jsxs(z0,{children:[i.jsxs(R0,{children:[i.jsx(ar,{size:18,color:"currentColor"}),i.jsx(D0,{children:"Need help?"})]}),i.jsx(M0,{type:"button",onClick:t,"aria-label":"Close drawer",ref:c,children:"×"})]}),i.jsxs(N0,{children:[r&&i.jsxs(kb,{children:[i.jsxs(jb,{children:[i.jsx($b,{children:a}),i.jsxs(Cb,{children:[i.jsx(Sb,{children:Pe.name}),i.jsx(Eb,{children:Pe.title})]})]}),i.jsx(Pb,{children:i.jsxs(Tb,{children:[i.jsx(Gn,{size:14,color:"currentColor"}),i.jsx(Lb,{href:`mailto:${Pe.email}`,children:Pe.email})]})})]}),i.jsxs(Ib,{children:[i.jsx(zb,{children:s.heading}),i.jsx(Rb,{children:r?s.body:s.bodyNoManager})]}),i.jsx(Db,{}),i.jsxs(Mb,{children:[i.jsx(Nb,{children:"Send a message"}),i.jsxs(Ld,{children:[i.jsx(Id,{htmlFor:"contact-us-subject",children:"Subject"}),i.jsx(Ab,{id:"contact-us-subject",type:"text",placeholder:"e.g. Questions about my subscription"})]}),i.jsxs(Ld,{children:[i.jsx(Id,{htmlFor:"contact-us-message",children:"Message"}),i.jsx(Fb,{id:"contact-us-message",placeholder:"Describe what you need help with...",rows:4})]}),i.jsxs(Ob,{children:[i.jsx(_b,{children:r?`Your message will be sent to ${Pe.name}.`:"Your message will be routed to the appropriate DigiCert team."}),i.jsx(Bb,{type:"button",children:"Send message"})]})]}),i.jsxs(Ub,{children:[i.jsx(Wb,{children:"Need to speak to Technical, Validation, or Sales instead?"}),i.jsxs(Vb,{type:"button",onClick:()=>l(!0),children:["Contact CertCentral support",i.jsx(yl,{size:12,color:"currentColor"})]})]})]}),i.jsx(bb,{children:i.jsx(T0,{})})]}),i.jsx(Qb,{open:o,onClose:()=>l(!1),onCloseAll:()=>{l(!1),t()}})]})}const Gb=u.div`
  position: relative;
  width: 100%;
  user-select: none;
`,Yb=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  margin-bottom: 8px;
`,Jb=u.button`
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
`,Xb=u.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
`,qb=u.div`
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
`,Zb=u.div`
  position: relative;
`,ek=u.div`
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
`,tk=u.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: #E5E7EB;
  font-size: 10px;
`,Nd=u.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.8;
`,nk=u.span`
  width: 7px;
  height: 7px;
  border-radius: 2px;
  flex-shrink: 0;
`,Mr=620,A0=190,Nr=46,rk=16,F0=18,ok=34,Go=Mr-Nr-rk,tn=A0-F0-ok;function ik(e,t){return t==="$"?e>=1e5?`$${(e/1e3).toFixed(0)}k`:e>=1e3?`$${(e/1e3).toFixed(1)}k`:`$${e}`:e>=1e3?`${(e/1e3).toFixed(0)}k`:`${e}`}function Ad(e,t){return t==="$"?e>=1e3?`$${e.toLocaleString()}`:`$${e}`:e.toLocaleString()}function Fd({series:e,monthLabels:t,yFormat:n}){var S;const[r,o]=w.useState(new Set),[l,s]=w.useState(null),a=w.useRef(null),c=t.length,d=t.map(($,z)=>{let L=0;return e.map(A=>{const te=r.has(A.name)?0:A.monthly[z],O=L;return L+=te,{lo:O,hi:L,val:te}})}),h=Math.max(...d.map($=>{var z;return((z=$[$.length-1])==null?void 0:z.hi)||0}),1),g=Math.ceil(h*1.1/50)*50;function m($){return $/(c-1)*Go}function y($){return tn-$/g*tn}function k($){const z=t.map((A,te)=>`${m(te).toFixed(1)},${y(d[te][$].hi).toFixed(1)}`),L=[...t].reverse().map((A,te)=>{const O=c-1-te;return`${m(O).toFixed(1)},${y(d[O][$].lo).toFixed(1)}`});return[...z,...L].join(" ")}const b=[0,.25,.5,.75,1].map($=>({v:Math.round(g*$),y:y(g*$)})),C=d.reduce(($,z,L)=>{var O,Se;const A=((O=z[z.length-1])==null?void 0:O.hi)||0,te=((Se=d[$][d[$].length-1])==null?void 0:Se.hi)||0;return A>te?L:$},0);function f($){if(!a.current)return;const z=a.current.getBoundingClientRect(),L=Nr/Mr*z.width,A=(Nr+Go)/Mr*z.width,O=(Math.max(L,Math.min(A,$.clientX-z.left))-L)/(A-L);s(Math.round(O*(c-1)))}function p($){o(z=>{const L=new Set(z);return L.has($)?L.delete($):L.add($),L})}const x=l!==null?(Nr+m(l))/Mr*100:0,v=l!==null&&l>c-3?"translateX(-100%)":l!==null&&l<2?"translateX(4px)":"translateX(-50%)",j=l!==null&&((S=d[l][d[l].length-1])==null?void 0:S.hi)||0,E=n==="$"?"Total":"Total active";return i.jsxs(Gb,{children:[i.jsxs(Yb,{children:[e.map($=>i.jsxs(Jb,{$dim:r.has($.name),type:"button",onClick:()=>p($.name),children:[i.jsx(Xb,{style:{background:$.color}}),$.name]},$.name)),i.jsxs(qb,{children:[i.jsx(Md,{type:"button",onClick:()=>o(new Set),children:"All"}),i.jsx(Md,{type:"button",onClick:()=>o(new Set(e.map($=>$.name))),children:"None"})]})]}),i.jsxs(Zb,{children:[i.jsx("svg",{ref:a,viewBox:`0 0 ${Mr} ${A0}`,style:{width:"100%",height:"auto",display:"block",overflow:"visible",cursor:"crosshair"},onMouseMove:f,onMouseLeave:()=>s(null),children:i.jsxs("g",{transform:`translate(${Nr},${F0})`,children:[b.map($=>i.jsxs("g",{children:[i.jsx("line",{x1:0,y1:$.y.toFixed(1),x2:Go,y2:$.y.toFixed(1),stroke:"#E5E7EB",strokeWidth:1}),i.jsx("text",{x:-8,y:$.y.toFixed(1),textAnchor:"end",fontSize:7,fill:"#9CA3AF",dominantBaseline:"middle",children:ik($.v,n)})]},$.v)),i.jsx("line",{x1:0,y1:tn,x2:Go,y2:tn,stroke:"#D1D5DB",strokeWidth:1}),t.map(($,z)=>z%2!==0&&z!==c-1?null:i.jsx("text",{x:m(z).toFixed(1),y:tn+13,textAnchor:"middle",fontSize:7,fill:"#9CA3AF",children:$},z)),e.map(($,z)=>i.jsx("polygon",{points:k(z),fill:$.color,fillOpacity:.78},$.name)),i.jsxs("g",{children:[i.jsx("line",{x1:m(C).toFixed(1),y1:0,x2:m(C).toFixed(1),y2:tn,stroke:"#6B7280",strokeWidth:1,strokeDasharray:"4,3",opacity:.55}),i.jsxs("text",{x:m(C).toFixed(1),y:-5,textAnchor:"middle",fontSize:7,fill:"#4B5563",fontWeight:"600",children:["Peak ",t[C]]})]}),l!==null&&i.jsx("line",{x1:m(l).toFixed(1),y1:0,x2:m(l).toFixed(1),y2:tn,stroke:"#374151",strokeWidth:1.5,opacity:.6})]})}),l!==null&&i.jsxs(ek,{style:{left:`${x}%`,transform:v},children:[i.jsx(tk,{children:t[l]}),e.map(($,z)=>r.has($.name)?null:i.jsxs(Nd,{children:[i.jsx(nk,{style:{background:$.color}}),i.jsx("span",{style:{flex:1},children:$.name}),i.jsx("span",{style:{fontWeight:600},children:Ad(d[l][z].val,n)})]},$.name)),i.jsxs(Nd,{style:{borderTop:"1px solid rgba(255,255,255,0.15)",marginTop:4,paddingTop:4},children:[i.jsx("span",{style:{flex:1,fontWeight:600},children:E}),i.jsx("span",{style:{fontWeight:700},children:Ad(j,n)})]})]})]})]})}const Od=u.main`
  padding: 32px;
`,_d=u(wc)`
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
`,lk=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,sk=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,ak=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,ck=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,uk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,dk=u.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,pk=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Bd=u.button`
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
`,fk=u.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,hk=u.button`
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
`,Yt=u.section`
  margin-bottom: 32px;
`,yo=u.h2`
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,O0=u.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||3}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,vl=u.div`
  padding: 18px 20px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,wl=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,bl=u.span`
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
`,gk=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`,mk=u.button`
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
`,xk=u.div`
  position: relative;
`,yk=u.button`
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
`,vk=u.div`
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
`,wk=u.a`
  display: block;
  padding: 10px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({$destructive:e,theme:t})=>e?"#DC2626":t.colors.neutral800};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,bk=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ud=u.div``,Yo=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 10px;
`,kk=u.button`
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
`,jk=u.div`
  position: relative;
  display: inline-flex;
`,_0=u.span`
  position: absolute;
  bottom: calc(100% + 8px);
  left: -8px;
  width: 280px;
  padding: 10px 12px;
  border-radius: 6px;
  background: ${({theme:e})=>e.colors.neutral900};
  color: white;
  font-size: 12px;
  line-height: 1.5;
  z-index: 20;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
  white-space: normal;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 14px;
    border: 5px solid transparent;
    border-top-color: ${({theme:e})=>e.colors.neutral900};
  }
`,$k=u.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: default;

  &:hover ${_0} {
    opacity: 1;
  }
`,Ck=u.div`
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
`;function B0({instance:e,isCertCentral:t,plan:n}){const[r,o]=w.useState(!1),l=w.useRef(null);w.useEffect(()=>{if(!r)return;const d=h=>{l.current&&!l.current.contains(h.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[r]);const s=e.subscriptionType==="enterprise",a=e.tier||(s?"Enterprise":"E-commerce");let c;return s&&!t?c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This product is covered by an enterprise agreement with DigiCert."}),i.jsx("p",{children:"Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team."}),i.jsx("p",{children:"Contact your account manager for contract-related questions."})]}):s&&t?c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This CertCentral account is managed through an enterprise agreement with DigiCert."}),i.jsx("p",{children:"Billing, renewals, and any contract changes are handled directly by your DigiCert account team."}),i.jsx("p",{children:"Contact your account manager for any questions."})]}):c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This subscription is purchased and managed through DigiCert's self-service purchasing experience."}),i.jsx("p",{children:"You can manage payment methods, receipts, renewals, and purchases directly from this account."})]}),i.jsxs(vl,{children:[i.jsx(wl,{children:i.jsxs(bl,{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:["Tier",i.jsxs(jk,{ref:l,children:[i.jsx(kk,{type:"button",onClick:()=>o(d=>!d),children:i.jsx(Yn,{size:13,color:"currentColor"})}),r&&i.jsx(Ck,{children:c})]})]})}),i.jsx(kl,{children:a}),n&&i.jsx(Ki,{children:n})]})}function Sk(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function Ek({dateStr:e,sub:t}){const n=Sk(e);return i.jsxs(vl,{children:[i.jsxs(wl,{children:[i.jsx(bl,{children:"Renewal date"}),i.jsx(a0,{size:15,color:"#9CA3AF"})]}),i.jsx(kl,{children:e}),t&&i.jsx(Ki,{children:t}),!t&&i.jsxs(Ki,{children:[n," days remaining"]})]})}function Pk({term:e}){return i.jsxs(vl,{children:[i.jsxs(wl,{children:[i.jsx(bl,{children:"Contract term"}),i.jsx(a0,{size:15,color:"#9CA3AF"})]}),i.jsx(kl,{style:{fontSize:15,fontWeight:600},children:e||"—"})]})}const cr=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,wn=u.table`
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
`,vo=u.span`
  font-weight: 500;
  color: ${({$tone:e,theme:t})=>e==="error"?"#DC2626":e==="warning"?"#D97706":t.colors.neutral900};
`,U0=u.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`;function Tk({entitlements:e,contractType:t}){return e.length===0?i.jsx(U0,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):t==="drawdown"?i.jsx(cr,{children:i.jsxs(wn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"45%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{style:{width:"20%"}})]})}),i.jsx("tbody",{children:e.map(n=>i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),i.jsx(W,{$align:"right",children:n.purchased.toLocaleString()}),i.jsx(W,{})]},n.name))})]})}):i.jsx(cr,{children:i.jsxs(wn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"30%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:e.map(n=>{const r=n.allocated>0?n.consumed/n.allocated:0,o=n.remaining<0?"error":r>=.8?"warning":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),i.jsx(W,{$align:"right",children:n.allocated.toLocaleString()}),i.jsx(W,{$align:"right",children:n.consumed.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(vo,{$tone:o,children:n.remaining<0?`Exceeded by ${Math.abs(n.remaining).toLocaleString()}`:n.remaining===0?"0":n.remaining.toLocaleString()})})]},n.name)})})]})})}const Lk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`,Ik=u.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Wd=u.button`
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
`;function Vd({entitlements:e,purchasedOnly:t}){return i.jsx(cr,{children:i.jsxs(wn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{children:"Entitlement"}),t?i.jsxs(i.Fragment,{children:[i.jsx(U,{$align:"right",children:"Current active"}),i.jsx(U,{$align:"right",children:"Period peak"}),i.jsx(U,{$align:"right",children:"Peak date"})]}):i.jsxs(i.Fragment,{children:[i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{$align:"right",children:"Consumed"}),i.jsx(U,{$align:"right",children:"Remaining"})]})]})}),i.jsx("tbody",{children:e.map(n=>{var o,l;const r=n.remaining<0?"error":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),t?i.jsxs(i.Fragment,{children:[i.jsx(W,{$align:"right",children:((o=n.consumed)==null?void 0:o.toLocaleString())??"—"}),i.jsx(W,{$align:"right",children:((l=n.periodPeak)==null?void 0:l.toLocaleString())??"—"}),i.jsx(W,{$align:"right",children:n.periodPeakDate??"—"})]}):i.jsxs(i.Fragment,{children:[i.jsx(W,{$align:"right",children:n.purchased.toLocaleString()}),i.jsx(W,{$align:"right",children:n.consumed.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(vo,{$tone:r,children:n.remaining<0?`Exceeded by ${Math.abs(n.remaining).toLocaleString()}`:n.remaining.toLocaleString()})})]})]},n.name)})})]})})}function zk({series:e}){return i.jsx(cr,{children:i.jsxs(wn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Certificate type"}),i.jsx(U,{$align:"right",children:"Current month ($)"}),i.jsx(U,{$align:"right",children:"Period peak ($)"}),i.jsx(U,{$align:"right",children:"Peak date"})]})}),i.jsx("tbody",{children:e.map(t=>{const n=t.monthlyCost[t.monthlyCost.length-1]??0,r=Math.max(...t.monthlyCost);return i.jsxs("tr",{children:[i.jsx(W,{children:t.name}),i.jsxs(W,{$align:"right",children:["$",n.toLocaleString()]}),i.jsxs(W,{$align:"right",children:["$",r.toLocaleString()]}),i.jsx(W,{$align:"right",children:t.periodPeakDate})]},t.name)})})]})})}function Rk({instance:e,purchasedOnly:t}){const[n,r]=w.useState("table"),{peakUsageData:o}=e,l=o.series.map(s=>({...s,monthly:s.monthlyCost}));return i.jsxs(Yt,{children:[i.jsxs(Lk,{children:[i.jsx(yo,{style:{margin:0},children:t?"Entitlements and usage":"Consumption"}),i.jsxs(Ik,{children:[i.jsx(Wd,{$active:n==="table",onClick:()=>r("table"),children:"Table"}),i.jsx(Wd,{$active:n==="chart",onClick:()=>r("chart"),children:"Chart"})]})]}),n==="table"?t?i.jsxs(i.Fragment,{children:[i.jsx(Yo,{style:{marginBottom:10},children:"Consumption (Quantities)"}),i.jsx(Vd,{entitlements:e.entitlements,purchasedOnly:!0}),i.jsxs("div",{style:{marginTop:24},children:[i.jsx(Yo,{style:{marginBottom:10},children:"Consumption (USD)"}),i.jsx(zk,{series:o.series})]})]}):i.jsx(Vd,{entitlements:e.entitlements,purchasedOnly:!1}):i.jsxs(bk,{children:[i.jsxs(Ud,{children:[i.jsx(Yo,{children:"Consumption (USD)"}),i.jsx(Fd,{series:l,monthLabels:o.monthLabels,yFormat:"$"})]}),i.jsxs(Ud,{children:[i.jsx(Yo,{children:"Consumption quantities"}),i.jsx(Fd,{series:o.series,monthLabels:o.monthLabels})]})]})]})}const Dk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  flex-wrap: wrap;
`,Mk=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Nk=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ak=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Fk=u.a`
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
`,Ok=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function _k({instance:e}){const{purchasedControls:t=[],includedResources:n=[]}=e;return i.jsxs(i.Fragment,{children:[i.jsxs(Yt,{children:[i.jsx(yo,{children:"Entitlements and usage"}),i.jsx(cr,{children:i.jsxs(wn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:t.map(r=>{const o=r.purchased>0?r.used/r.purchased:0,l=r.remaining<0?"error":o>=.8?"warning":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:i.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:[r.name,r.planIncluded!=null&&i.jsxs($k,{children:[i.jsx(Yn,{size:13,color:"currentColor"}),i.jsxs(_0,{children:["Includes ",r.planIncluded," keypairs with your current plan + ",r.purchased-r.planIncluded," purchased keypairs."]})]})]})}),i.jsx(W,{$align:"right",children:r.purchased.toLocaleString()}),i.jsx(W,{$align:"right",children:r.used.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(vo,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]}),i.jsxs(Yt,{children:[i.jsx(yo,{children:"Included resources"}),i.jsx(Ok,{children:"Resource quotas included with your plan. Quotas increase automatically when you upgrade your plan."}),i.jsx(cr,{children:i.jsxs(wn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:n.map(r=>{const o=r.available>0?r.used/r.available:0,l=r.remaining<0?"error":o>=.8?"warning":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:r.name}),i.jsx(W,{$align:"right",children:typeof r.available=="number"?r.available.toLocaleString():r.available}),i.jsx(W,{$align:"right",children:r.used.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(vo,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]})]})}function Bk(){return i.jsx(Yt,{children:i.jsxs(Dk,{children:[i.jsxs(Mk,{children:[i.jsx(Nk,{children:"Manage finances and funds"}),i.jsx(Ak,{children:"View purchase history, balance, account pricing, deposit funds, and pay invoices in CertCentral."})]}),i.jsxs(Fk,{href:"/certcentral-finances.html",target:"_blank",rel:"noopener noreferrer",children:["Manage finances",i.jsx(yl,{size:14,color:"currentColor"})]})]})})}function Uk({instance:e,isCertCentral:t}){return i.jsx(Yt,{children:i.jsxs(O0,{$cols:2,children:[i.jsx(B0,{instance:e,isCertCentral:t,plan:e.plan}),i.jsx(Pk,{term:e.contractTerm})]})})}function Wk({instance:e,isCertCentral:t,showLastMonth:n=!0}){var o,l;const r=((l=(o=e.receipts)==null?void 0:o[0])==null?void 0:l.amount)??e.billing.price.split(" / ")[0];return i.jsx(Yt,{children:i.jsxs(O0,{$cols:n?3:2,children:[i.jsx(B0,{instance:e,isCertCentral:t}),n&&i.jsxs(vl,{children:[i.jsxs(wl,{children:[i.jsx(bl,{children:"Last 30 days"}),i.jsx(iv,{size:15,color:"#9CA3AF"})]}),i.jsx(kl,{children:r}),i.jsx(Ki,{children:"Last month's spend"})]}),i.jsx(Ek,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"})]})})}const Vk=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,Hk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,Qk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Kk=u.button`
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
`,Gk=u.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Yk=u.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,Jk=u.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Xk=u.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,qk=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,Zk=u.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function ej({category:e}){const[t,n]=w.useState(e.products.length>0);return i.jsxs(Vk,{children:[i.jsxs(Hk,{onClick:()=>n(r=>!r),children:[i.jsxs(Qk,{children:[i.jsx(Kk,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(o=>!o)},children:t?i.jsx(s0,{size:14,color:"currentColor"}):i.jsx(Gr,{size:14,color:"currentColor"})}),i.jsx(Gk,{children:e.name})]}),i.jsx(Yk,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&i.jsx(Jk,{children:e.products.length===0?i.jsx(Zk,{children:"No products purchased yet."}):i.jsxs(wn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Product"}),i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Available"})]})}),i.jsx("tbody",{children:e.products.map((r,o)=>i.jsxs("tr",{children:[i.jsxs(W,{children:[i.jsx(Xk,{children:r.name}),i.jsx(qk,{children:r.type})]}),i.jsx(W,{$align:"right",children:r.purchased}),i.jsx(W,{$align:"right",children:r.used}),i.jsx(W,{$align:"right",children:i.jsx(vo,{$tone:r.available===0?"error":void 0,children:r.available})})]},o))})]})})]})}function tj({categories:e}){return i.jsxs(Yt,{children:[i.jsx(yo,{children:"Products"}),e.map(t=>i.jsx(ej,{category:t},t.id))]})}function nj(){const{hasAccountManager:e}=Ec(),{subscriptionId:t}=Yx(),[n,r]=w.useState(null),[o,l]=w.useState(!1),[s,a]=w.useState(!1),[c,d]=w.useState(!1),h=w.useRef(null),[g]=S1(),m=g.get("env"),y=m?os().find(v=>v.id===t&&v.envId===m)??os().find(v=>{var j;return v.id===t&&((j=v.envIds)==null?void 0:j.includes(m))}):os().find(v=>v.id===t&&v.envIds!=null)??Sc().find(v=>v.id===t),k=(()=>{var v;return y?m&&y.envIds?{label:"Environment",value:((v=mi.find(j=>j.id===m))==null?void 0:v.name)??m}:y.envNames?{label:"Available in",value:y.envNames.join(", ")}:y.envName?{label:"Environment",value:y.envName}:null:null})(),b=t==="certcentral"||((t==null?void 0:t.startsWith("certcentral-"))??!1);if(w.useEffect(()=>{document.title=y?`${y.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[y==null?void 0:y.id,y==null?void 0:y.name]),w.useEffect(()=>{var v;r(((v=y==null?void 0:y.instances[0])==null?void 0:v.instanceId)??null)},[t]),w.useEffect(()=>{if(!c)return;const v=E=>{h.current&&!h.current.contains(E.target)&&d(!1)},j=E=>{E.key==="Escape"&&d(!1)};return document.addEventListener("mousedown",v),document.addEventListener("keydown",j),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("keydown",j)}},[c]),!y)return i.jsxs(Od,{children:[i.jsxs(_d,{to:-1,children:[i.jsx(Hi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),i.jsx(U0,{children:"This subscription could not be found."})]});const C=y.instances.find(v=>v.instanceId===n)||y.instances[0],f=b&&C.subscriptionType==="ecommerce",p=b?"CertCentral":y.name,x=f?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Product overview"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${p}`},{label:"Product overview"},{label:"Documentation"}];return i.jsxs(Od,{children:[i.jsxs(_d,{to:"/settings/billing",children:[i.jsx(Hi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),i.jsxs(lk,{children:[i.jsxs(sk,{children:[i.jsx(ak,{children:vn(y.iconType,24,"currentColor")}),i.jsxs(ck,{children:[i.jsx(uk,{children:i.jsx(dk,{children:y.name})}),(k||y.accountName)&&i.jsxs(pk,{children:[k&&i.jsxs(i.Fragment,{children:[i.jsxs("strong",{children:[k.label,":"]})," ",k.value]}),k&&y.accountName&&i.jsx(i.Fragment,{children:" | "}),y.accountName&&i.jsxs(i.Fragment,{children:[i.jsx("strong",{children:"Account name:"})," ",y.accountName]}),y.accountId&&i.jsxs(i.Fragment,{children:[" | ",i.jsx("strong",{children:"Account ID:"})," ",y.accountId]})]})]})]}),i.jsxs(gk,{children:[f?i.jsxs(Bd,{type:"button",onClick:()=>a(!0),children:[i.jsx(ar,{size:15,color:"currentColor"}),"Need help?"]}):i.jsxs(Bd,{type:"button",onClick:()=>l(!0),children:[i.jsx(ar,{size:15,color:"currentColor"}),"Need help?"]}),f&&i.jsxs(mk,{type:"button",children:[i.jsx(ov,{size:14,color:"currentColor"}),"Buy certificates"]}),i.jsxs(xk,{ref:h,children:[i.jsx(yk,{type:"button",onClick:()=>d(v=>!v),"aria-label":"More actions","aria-expanded":c,children:i.jsx(Qi,{size:15,color:"currentColor"})}),c&&i.jsx(vk,{children:x.map(v=>i.jsx(wk,{$destructive:v.destructive,href:"#",onClick:()=>d(!1),children:v.label},v.label))})]})]})]}),y.instances.length>1&&i.jsx(fk,{role:"tablist","aria-label":"CertCentral instances",children:y.instances.map(v=>i.jsx(hk,{role:"tab",type:"button",$active:v.instanceId===C.instanceId,"aria-selected":v.instanceId===C.instanceId,onClick:()=>r(v.instanceId),children:v.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},v.instanceId))}),C.subscriptionType==="enterprise"?i.jsxs(i.Fragment,{children:[i.jsx(Uk,{instance:C,isCertCentral:b}),y.id==="software-trust"?i.jsx(_k,{instance:C}):b&&C.contractType==="peak-usage"?i.jsx(Rk,{instance:C,purchasedOnly:y.accountId==="1001445"}):i.jsxs(Yt,{children:[i.jsx(yo,{children:"Entitlements and usage"}),i.jsx(Tk,{entitlements:C.entitlements,contractType:C.contractType})]}),b&&y.accountId!=="1001445"&&y.accountId!=="2003891"&&i.jsx(Bk,{})]}):i.jsxs(i.Fragment,{children:[i.jsx(Wk,{instance:C,isCertCentral:b,showLastMonth:y.accountId!=="3007234"}),i.jsx(tj,{categories:C.productCategories})]}),i.jsx(L0,{open:o,onClose:()=>l(!1),hasAccountManager:e}),i.jsx(Kb,{open:s,onClose:()=>a(!1),hasAccountManager:e})]})}const rj=u.div`
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
`,oj=u.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,ij=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,lj=u.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function W0({icon:e,title:t,children:n,action:r}){return i.jsxs(rj,{children:[i.jsx(oj,{children:e}),t&&i.jsx(ij,{children:t}),i.jsx(lj,{children:n}),r]})}const V0=u.a`
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
`,sj=u(V0)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function H0({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${Pe.name})`}),o=`mailto:${Pe.email}?${r.toString()}`,l=e==="outline"?sj:V0;return i.jsx(l,{href:o,...n,children:"Contact account manager"})}const Hd=u.main`
  padding: 32px;
`,aj=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,cj=u.div``,Qd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Kd=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,uj=u.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,us=u.div`
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 16px 20px;
  border: 1px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral200};
  border-left: 3px solid ${({$alert:e,theme:t})=>e?t.colors.error:t.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,ds=u.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;
  align-items: center;
  gap: 6px;
`,ps=u.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${({$blue:e,theme:t})=>e?t.colors.blue300:t.colors.neutral900};
`,dj=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,pj=u.div`
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
`,fj=u(Pc)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,hj=u(Pc)``,gj=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,mj=u.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,St=u.th`
  text-align: ${({$align:e})=>e||"left"};
  padding: 11px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral600};
  background: ${({theme:e})=>e.colors.neutral50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  white-space: nowrap;
  user-select: none;
`,Et=u.td`
  text-align: ${({$align:e})=>e||"left"};
  padding: 12px 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`,xj=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,fs={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},yj=u.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=fs[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=fs[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=fs[e])==null?void 0:t.color)||"#374151"}};
`,vj=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,wj=u.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,bj=u.button`
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
`,kj=u.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral50};
`,jj=u.div`
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
`,$j=u.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`,Cj=["All","Invoices","Receipts","Refunds"],Gd=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function Sj({scenario:e}){const[t,n]=w.useState("All"),[r,o]=w.useState(!1);if(w.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return i.jsxs(Hd,{children:[i.jsx(Qd,{children:"Receipts and invoices"}),i.jsx(Kd,{style:{marginBottom:24},children:"Download receipts, invoices, and other billing documents for your account."}),i.jsx(W0,{icon:i.jsx(Zy,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:i.jsx(H0,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const l=4,s="$2,520.00",a="Nov 20, 2025",c=t==="All"?Gd:Gd.filter(d=>t==="Invoices"?d.type==="Invoice":t==="Receipts"?d.type==="Receipt":t==="Refunds"?d.type==="Refund":!0);return i.jsxs(Hd,{children:[i.jsxs(jj,{children:[i.jsx($j,{children:i.jsx(Yn,{size:16,color:"currentColor"})}),i.jsxs("span",{children:["Receipts and invoices apply to ",i.jsx("strong",{children:"self-service (e-commerce) subscriptions only"}),". Enterprise contract billing documents are managed separately — contact your account manager for enterprise invoices or billing records."]})]}),i.jsx(aj,{children:i.jsxs(cj,{children:[i.jsx(Qd,{children:"Receipts and invoices"}),i.jsx(Kd,{children:"Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage."})]})}),i.jsxs(uj,{children:[i.jsxs(us,{$alert:!0,children:[i.jsxs(ds,{children:[i.jsx(ad,{size:14,color:"#DC2626"}),"Invoices overdue"]}),i.jsx(ps,{children:l})]}),i.jsxs(us,{$alert:!0,children:[i.jsxs(ds,{children:[i.jsx(ad,{size:14,color:"#DC2626"}),"Total balance overdue"]}),i.jsx(ps,{$blue:!0,children:s})]}),i.jsxs(us,{children:[i.jsx(ds,{children:"Next invoice due"}),i.jsx(ps,{$blue:!0,children:a})]})]}),i.jsxs(dj,{children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsxs(Pc,{type:"button",onClick:()=>o(d=>!d),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,i.jsx(Gr,{size:13,color:"currentColor"})]}),r&&i.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:Cj.map(d=>i.jsx("button",{type:"button",onClick:()=>{n(d),o(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:d===t?"#EAF1FB":"white",color:d===t?"#0174C3":"#1A1F27",fontWeight:d===t?500:400},children:d},d))})]}),i.jsxs(fj,{type:"button",children:[i.jsx(rv,{size:14,color:"currentColor"}),"Filter",i.jsx(Gr,{size:13,color:"currentColor"})]}),i.jsx(pj,{children:i.jsxs(hj,{type:"button",children:["Download CSV",i.jsx(Gr,{size:13,color:"currentColor"})]})})]}),i.jsxs(gj,{children:[i.jsxs(mj,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(St,{style:{width:"140px"},children:"Invoice"}),i.jsx(St,{children:"Type"}),i.jsx(St,{children:"Issued on"}),i.jsx(St,{children:"Status"}),i.jsx(St,{$align:"right",children:"Amount"}),i.jsx(St,{children:"Due on"}),i.jsx(St,{children:"Ordered by"}),i.jsx(St,{})]})}),i.jsx("tbody",{children:c.map((d,h)=>i.jsxs("tr",{children:[i.jsx(Et,{children:i.jsx(xj,{href:"#",children:d.id})}),i.jsx(Et,{children:d.type}),i.jsx(Et,{children:d.issuedOn}),i.jsx(Et,{children:i.jsx(yj,{$status:d.status,children:d.status})}),i.jsx(Et,{$align:"right",children:d.amount}),i.jsx(Et,{children:d.dueOn}),i.jsx(Et,{children:d.orderedBy}),i.jsx(Et,{children:i.jsxs(vj,{children:[(d.status==="Overdue"||d.status==="Upcoming")&&i.jsx(wj,{type:"button",children:"Pay"}),i.jsx(bj,{type:"button","aria-label":"Download",children:i.jsx(nv,{size:15,color:"currentColor"})})]})})]},`${d.id}-${h}`))})]}),i.jsxs(kj,{children:["1 to ",c.length," of 8,618"]})]})]})}const Yd=u.main`
  padding: 32px;
`,Ej=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,Pj=u.div``,Jd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Xd=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,Tj=u.a`
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
`,qd=u.div`
  margin-bottom: 32px;
`,Zd=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,ep=u.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,tp=u.button`
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
`,Lj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Ij=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,zj=u.div`
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
`,Rj=u.div``,Dj=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,Mj=u.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Nj=u.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,Aj=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Q0=u.button`
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
`,Fj=u.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,Oj=u.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,_j=u(Q0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Jo=u.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,Xo=u.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,qo=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,Bj=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`,Uj=u.div`
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
`,Wj=u.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`;function Vj({scenario:e}){return w.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?i.jsxs(Yd,{children:[i.jsx(Jd,{children:"Payment details"}),i.jsx(Xd,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),i.jsx(W0,{icon:i.jsx(tv,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:i.jsx(H0,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):i.jsxs(Yd,{children:[i.jsxs(Uj,{children:[i.jsx(Wj,{children:i.jsx(Yn,{size:16,color:"currentColor"})}),i.jsxs("span",{children:["Payment details apply to ",i.jsx("strong",{children:"self-service (e-commerce) subscriptions only"}),". Enterprise contract billing is managed separately — contact your account manager for invoices or payment changes related to enterprise products."]})]}),i.jsxs(Ej,{children:[i.jsxs(Pj,{children:[i.jsx(Jd,{children:"Payment details"}),i.jsx(Xd,{children:"Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method."})]}),i.jsxs(Tj,{href:"#",children:[i.jsx(Yn,{size:15,color:"currentColor"}),"Need help?"]})]}),i.jsxs(qd,{children:[i.jsxs(Zd,{children:[i.jsx(ep,{children:"Payment methods"}),i.jsxs(tp,{type:"button",children:[i.jsx(sd,{size:14,color:"currentColor"}),"Add payment method"]})]}),i.jsxs(Lj,{children:[i.jsxs(Ij,{children:[i.jsx(zj,{children:"VISA"}),i.jsxs(Rj,{children:[i.jsxs(Dj,{children:[i.jsx(Mj,{children:"Visa •••• 8350"}),i.jsx(Nj,{children:"Default"})]}),i.jsx(Aj,{children:"Expires 02/28"})]})]}),i.jsx(Q0,{type:"button","aria-label":"Payment method options",children:i.jsx(Qi,{size:16,color:"currentColor"})})]})]}),i.jsxs(qd,{children:[i.jsxs(Zd,{children:[i.jsx(ep,{children:"Billing contacts"}),i.jsxs(tp,{type:"button",children:[i.jsx(sd,{size:14,color:"currentColor"}),"Add billing contact"]})]}),i.jsxs(Fj,{children:[i.jsx(_j,{type:"button","aria-label":"Contact options",children:i.jsx(Qi,{size:16,color:"currentColor"})}),i.jsx(Oj,{children:"John Doe"}),i.jsxs(Jo,{children:[i.jsx(Xo,{children:"Address"}),i.jsxs(qo,{children:["123 Main Street",i.jsx("br",{}),"Suite 100",i.jsx("br",{}),"San Francisco, CA 94105",i.jsx("br",{}),"United States"]})]}),i.jsxs(Jo,{children:[i.jsx(Xo,{children:"Email address"}),i.jsx(qo,{children:"john.doe@winthecustomer.com"})]}),i.jsxs(Jo,{children:[i.jsx(Xo,{children:"Phone number"}),i.jsx(qo,{children:"650 123 4567"})]}),i.jsxs(Jo,{children:[i.jsxs(Bj,{children:[i.jsx(Xo,{style:{margin:0},children:"VAT ID"}),i.jsx(Yn,{size:14,color:"#0174C3"})]}),i.jsx(qo,{children:"23503820"})]})]})]})]})}const Hj=u.main`
  padding: 32px;
  max-width: 1100px;
`,Qj=u.div`
  margin-bottom: 36px;
`,Kj=u.h1`
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Gj=u.p`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
  max-width: 560px;
`,Yj=u.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,Jj=u.div`
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
`,Xj=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,qj=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Zj=u.div`
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
`,e$=u.a`
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,t$=u.span`
  flex-shrink: 0;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$variant:e})=>e==="included"?"rgba(39,168,114,0.1)":e==="licensed"?"#EAF1FB":"#F3F4F6"};
  color: ${({$variant:e})=>e==="included"?"#1F8F60":e==="licensed"?"#0174C3":"#4B5563"};
`,n$=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: 1.5;
`,r$=u.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,o$=u.li`
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
`,i$=u.div`
  margin-top: auto;
  padding-top: 4px;
`,l$=u.button`
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
`,s$=[{abbr:"TL",color:"#0174C3",name:"Trust Lifecycle",status:"essentials",statusLabel:"Essentials",description:"Modernizes certificate lifecycle visibility and management across public and private CAs.",features:["Gain full visibility with discovery and a centralized certificate inventory","Manage certificates regardless of who issued them (CA-agnostic control)","Automate enrollment, renewal, and provisioning at enterprise scale","Prevent outages with real-time monitoring, alerts, and reporting"],action:"Upgrade"},{abbr:"DNS",color:"#0174C3",name:"DigiCert DNS",status:null,description:"Modern DNS management for secure, scalable global traffic delivery",features:["Unified DNS platform for secure, scalable deployments","Real-time insights to optimize performance and availability","Intelligent monitoring to enforce best practices and compliance","Global traffic routing for speed, resilience, and reliability"],action:"Learn more"},{abbr:"CC",color:"#0174C3",name:"CertCentral",status:"included",statusLabel:"Included",description:"Centralizes certificate purchasing and management with scale, compliance, APIs—and AI-based validation automation.",features:["Buy and manage public trust certificates across TLS/SSL, S/MIME, Code Signing, and more","AI-based validation automation to speed issuance and reduce manual effort","Multi-language support with regional data residency options","Renewal reminders, notifications, plus flexible APIs and webhooks for existing workflows"],action:"Buy certificates"},{abbr:"ST",color:"#0174C3",name:"Software Trust",status:null,description:"Secure and govern software releases with trusted code signing",features:["Centralized access control for decentralized signing operations","Policy-based signing to ensure compliance and integrity","CI/CD integration across modern development platforms","Automated signing for releases, artifacts, and SBOMs"],action:"Learn more"},{abbr:"CA+",color:"#0174C3",name:"Private CA",status:"licensed",statusLabel:"Licensed",description:"Enterprise-grade private PKI with centralized control and governance",features:["Centralized governance for internal public key infrastructure","Rapid deployment of root and intermediate certificate authorities","Support for cloud, on-prem, and hybrid environments","Hardware-backed key protection with modern cryptographic standards"],action:"Learn more"},{abbr:"IoT",color:"#0174C3",name:"Device Trust",status:null,description:"End-to-end device identity and security lifecycle management",features:["Device protection across manufacturing, deployment, and retirement","Hardware-rooted identities for every connected device","Automated onboarding, configuration, and updates at scale","Readiness for evolving cryptographic and post-quantum standards"],action:"Learn more"},{abbr:"CT",color:"#0174C3",name:"Content Trust",status:null,description:"Centralized control and governance for document signing workflows",features:["Centralized visibility across signing activity, policies, and certificates","PKI-backed digital signing aligned with global trust standards","Seamless integration with existing tools via CSC-based APIs","Cloud-based key protection to reduce loss, theft, and misuse"],action:"Learn more"}];function a$(){return w.useEffect(()=>{document.title="Explore DigiCert products — DigiCert ONE"},[]),i.jsxs(Hj,{children:[i.jsxs(Qj,{children:[i.jsx(Kj,{children:"Explore DigiCert products"}),i.jsx(Gj,{children:"Build and protect digital trust across every certificate, identity, and device — all from one platform."})]}),i.jsx(Yj,{children:s$.map(e=>i.jsxs(Jj,{children:[i.jsxs(Xj,{children:[i.jsxs(qj,{children:[i.jsx(Zj,{$color:e.color,children:e.abbr}),i.jsx(e$,{href:"#",children:e.name})]}),e.status&&i.jsx(t$,{$variant:e.status,children:e.statusLabel})]}),i.jsx(n$,{children:e.description}),i.jsx(r$,{children:e.features.map(t=>i.jsx(o$,{children:t},t))}),i.jsx(i$,{children:i.jsx(l$,{type:"button",children:e.action})})]},e.name))})]})}function c$({containerRef:e}){const{pathname:t}=rt();return w.useEffect(()=>{e.current?e.current.scrollTop=0:window.scrollTo(0,0)},[t,e]),null}const u$=Oy`
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
`,d$=u.div`
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
`;function np(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function p$(){const[e,t]=w.useState(()=>typeof window<"u"?np():"desktop");return w.useEffect(()=>{const n=()=>t(np());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function f$(){const[e,t]=w.useState("dashboard"),[n,r]=w.useState(!1),[o,l]=w.useState(!0),[s,a]=w.useState(null),[c,d]=w.useState("mixed"),h=w.useCallback(()=>r(f=>!f),[]),g=w.useCallback(()=>r(!1),[]),m=w.useCallback(()=>l(f=>!f),[]),y=w.useCallback(f=>{t(f),l(!0)},[]),k=w.useCallback(f=>{t(f),l(!0),r(!1)},[]),b=w.useCallback(f=>{a(p=>p===f?null:f)},[]),C=w.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:o,activeTopNav:s,billingScenario:c,toggleDrawer:h,closeDrawer:g,toggleSpoke:m,setBillingScenario:d,selectProduct:y,selectProductFromDrawer:k,openTopNav:b,closeTopNav:C}}function h$(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:o,toggleDrawer:l,closeDrawer:s,toggleSpoke:a,selectProduct:c,selectProductFromDrawer:d,openTopNav:h,closeTopNav:g}=f$(),m=p$(),y=m==="mobile",k=w.useRef(null);w.useEffect(()=>{m!=="mobile"&&t&&s()},[m,t,s]),w.useEffect(()=>{const f=k.current;f&&(y&&t?(f.setAttribute("inert",""),f.setAttribute("aria-hidden","true")):(f.removeAttribute("inert"),f.removeAttribute("aria-hidden")))},[y,t]);const b=n?"276px":"56px",C=r==="ai-assist"?"400px":"0px";return i.jsxs(i.Fragment,{children:[i.jsx(u$,{}),i.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),i.jsx(qv,{isDrawerOpen:t,onToggleDrawer:l,activeTopNav:r,onOpenTopNav:h,onCloseTopNav:g,onSelectProduct:c,cartCount:3}),i.jsx(o2,{activeProductId:e,onSelectProduct:c}),i.jsx(y2,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:a,billingScenario:o}),i.jsx(C2,{open:t,activeProductId:e,onSelectProduct:d,onClose:s}),i.jsxs(d$,{ref:k,id:"main-content",$leftOffset:b,$rightOffset:C,children:[i.jsx(c$,{containerRef:k}),i.jsxs(p1,{children:[i.jsx(Pn,{path:"/",element:i.jsx(u1,{to:"/dashboard",replace:!0})}),dv.filter(f=>f!=="/").map(f=>{let p=i.jsx(jd,{});return f==="/dashboard"?p=i.jsx(lw,{}):f==="/settings/billing"?p=i.jsx(yb,{}):f==="/settings/billing/receipts"?p=i.jsx(Sj,{scenario:o}):f==="/settings/billing/payment-details"&&(p=i.jsx(Vj,{scenario:o})),i.jsx(Pn,{path:f,element:p},f)}),i.jsx(Pn,{path:"/settings/billing/all-products",element:i.jsx(a$,{})}),i.jsx(Pn,{path:"/settings/billing/:subscriptionId",element:i.jsx(nj,{})}),i.jsx(Pn,{path:"*",element:i.jsx(jd,{})})]})]})]})}xh(document.getElementById("root")).render(i.jsx(w.StrictMode,{children:i.jsx(b1,{children:i.jsx(Dy,{theme:_y,children:i.jsx(Rw,{children:i.jsx(h$,{})})})})}));
