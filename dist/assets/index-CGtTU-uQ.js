function K0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function G0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cp={exports:{}},Ji={},up={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),Y0=Symbol.for("react.portal"),J0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),eg=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),ng=Symbol.for("react.suspense"),rg=Symbol.for("react.memo"),og=Symbol.for("react.lazy"),Ec=Symbol.iterator;function ig(e){return e===null||typeof e!="object"?null:(e=Ec&&e[Ec]||e["@@iterator"],typeof e=="function"?e:null)}var dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pp=Object.assign,fp={};function pr(e,t,n){this.props=e,this.context=t,this.refs=fp,this.updater=n||dp}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hp(){}hp.prototype=pr.prototype;function ja(e,t,n){this.props=e,this.context=t,this.refs=fp,this.updater=n||dp}var $a=ja.prototype=new hp;$a.constructor=ja;pp($a,pr.prototype);$a.isPureReactComponent=!0;var Pc=Array.isArray,gp=Object.prototype.hasOwnProperty,Ca={current:null},mp={key:!0,ref:!0,__self:!0,__source:!0};function xp(e,t,n){var r,o={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)gp.call(t,r)&&!mp.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:bo,type:e,key:l,ref:s,props:o,_owner:Ca.current}}function lg(e,t){return{$$typeof:bo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===bo}function sg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tc=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sg(""+e.key):t.toString(36)}function ei(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case bo:case Y0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Cl(s,0):r,Pc(o)?(n="",e!=null&&(n=e.replace(Tc,"$&/")+"/"),ei(o,t,n,"",function(d){return d})):o!=null&&(Sa(o)&&(o=lg(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Tc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Pc(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+Cl(l,a);s+=ei(l,t,n,c,o)}else if(c=ig(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+Cl(l,a++),s+=ei(l,t,n,c,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Po(e,t,n){if(e==null)return e;var r=[],o=0;return ei(e,r,"","",function(l){return t.call(n,l,o++)}),r}function ag(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ti={transition:null},cg={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ti,ReactCurrentOwner:Ca};function yp(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Po,forEach:function(e,t,n){Po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Po(e,function(){t++}),t},toArray:function(e){return Po(e,function(t){return t})||[]},only:function(e){if(!Sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=pr;N.Fragment=J0;N.Profiler=q0;N.PureComponent=ja;N.StrictMode=X0;N.Suspense=ng;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;N.act=yp;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pp({},e.props),o=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)gp.call(t,c)&&!mp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:bo,type:e.type,key:o,ref:l,props:r,_owner:s}};N.createContext=function(e){return e={$$typeof:eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Z0,_context:e},e.Consumer=e};N.createElement=xp;N.createFactory=function(e){var t=xp.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:tg,render:e}};N.isValidElement=Sa;N.lazy=function(e){return{$$typeof:og,_payload:{_status:-1,_result:e},_init:ag}};N.memo=function(e,t){return{$$typeof:rg,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=ti.transition;ti.transition={};try{e()}finally{ti.transition=t}};N.unstable_act=yp;N.useCallback=function(e,t){return $e.current.useCallback(e,t)};N.useContext=function(e){return $e.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};N.useEffect=function(e,t){return $e.current.useEffect(e,t)};N.useId=function(){return $e.current.useId()};N.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return $e.current.useMemo(e,t)};N.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};N.useRef=function(e){return $e.current.useRef(e)};N.useState=function(e){return $e.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return $e.current.useTransition()};N.version="18.3.1";up.exports=N;var v=up.exports;const ve=G0(v),ug=K0({__proto__:null,default:ve},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=v,pg=Symbol.for("react.element"),fg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,gg=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mg={key:!0,ref:!0,__self:!0,__source:!0};function vp(e,t,n){var r,o={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)hg.call(t,r)&&!mg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:pg,type:e,key:l,ref:s,props:o,_owner:gg.current}}Ji.Fragment=fg;Ji.jsx=vp;Ji.jsxs=vp;cp.exports=Ji;var i=cp.exports,wp={exports:{}},Fe={},bp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var D=T.length;T.push(R);e:for(;0<D;){var H=D-1>>>1,_=T[H];if(0<o(_,R))T[H]=R,T[D]=_,D=H;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],D=T.pop();if(D!==R){T[0]=D;e:for(var H=0,_=T.length,ae=_>>>1;H<ae;){var ne=2*(H+1)-1,ie=T[ne],Re=ne+1,_e=T[Re];if(0>o(ie,D))Re<_&&0>o(_e,ie)?(T[H]=_e,T[Re]=D,H=Re):(T[H]=ie,T[ne]=D,H=ne);else if(Re<_&&0>o(_e,D))T[H]=_e,T[Re]=D,H=Re;else break e}}return R}function o(T,R){var D=T.sortIndex-R.sortIndex;return D!==0?D:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],d=[],m=1,h=null,x=3,j=!1,b=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var R=n(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=T)r(d),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(d)}}function k(T){if(y=!1,f(T),!b)if(n(c)!==null)b=!0,jt(w);else{var R=n(d);R!==null&&en(k,R.startTime-T)}}function w(T,R){b=!1,y&&(y=!1,g($),$=-1),j=!0;var D=x;try{for(f(R),h=n(c);h!==null&&(!(h.expirationTime>R)||T&&!A());){var H=h.callback;if(typeof H=="function"){h.callback=null,x=h.priorityLevel;var _=H(h.expirationTime<=R);R=e.unstable_now(),typeof _=="function"?h.callback=_:h===n(c)&&r(c),f(R)}else r(c);h=n(c)}if(h!==null)var ae=!0;else{var ne=n(d);ne!==null&&en(k,ne.startTime-R),ae=!1}return ae}finally{h=null,x=D,j=!1}}var E=!1,C=null,$=-1,z=5,L=-1;function A(){return!(e.unstable_now()-L<z)}function te(){if(C!==null){var T=e.unstable_now();L=T;var R=!0;try{R=C(!0,T)}finally{R?O():(E=!1,C=null)}}else E=!1}var O;if(typeof p=="function")O=function(){p(te)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Zt=Se.port2;Se.port1.onmessage=te,O=function(){Zt.postMessage(null)}}else O=function(){S(te,0)};function jt(T){C=T,E||(E=!0,O())}function en(T,R){$=S(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){b||j||(b=!0,jt(w))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(x){case 1:case 2:case 3:var R=3;break;default:R=x}var D=x;x=R;try{return T()}finally{x=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=x;x=T;try{return R()}finally{x=D}},e.unstable_scheduleCallback=function(T,R,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,T){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=D+_,T={id:m++,callback:R,priorityLevel:T,startTime:D,expirationTime:_,sortIndex:-1},D>H?(T.sortIndex=D,t(d,T),n(c)===null&&T===n(d)&&(y?(g($),$=-1):y=!0,en(k,D-H))):(T.sortIndex=_,t(c,T),b||j||(b=!0,jt(w))),T},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(T){var R=x;return function(){var D=x;x=R;try{return T.apply(this,arguments)}finally{x=D}}}})(kp);bp.exports=kp;var xg=bp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=v,Ae=xg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,Jr={};function jn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Jr[e]=t,e=0;e<t.length;e++)jp.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,vg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lc={},Ic={};function wg(e){return hs.call(Ic,e)?!0:hs.call(Lc,e)?!1:vg.test(e)?Ic[e]=!0:(Lc[e]=!0,!1)}function bg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kg(e,t,n,r){if(t===null||typeof t>"u"||bg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ea=/[\-:]([a-z])/g;function Pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ea,Pa);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ea,Pa);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ea,Pa);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ta(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kg(t,n,o,r)&&(n=null),r||o===null?wg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,To=Symbol.for("react.element"),In=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),gs=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),Cp=Symbol.for("react.context"),Ia=Symbol.for("react.forward_ref"),ms=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),za=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Sp=Symbol.for("react.offscreen"),zc=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=zc&&e[zc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Sl;function Ir(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var El=!1;function Pl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,a=l.length-1;1<=s&&0<=a&&o[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==l[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ir(e):""}function jg(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case In:return"Portal";case gs:return"Profiler";case La:return"StrictMode";case ms:return"Suspense";case xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cp:return(e.displayName||"Context")+".Consumer";case $p:return(e._context.displayName||"Context")+".Provider";case Ia:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case za:return t=e.displayName||null,t!==null?t:ys(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return ys(e(t))}catch{}}return null}function $g(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ys(t);case 8:return t===La?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cg(e){var t=Ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lo(e){e._valueTracker||(e._valueTracker=Cg(e))}function Pp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tp(e,t){t=t.checked,t!=null&&Ta(e,"checked",t,!1)}function ws(e,t){Tp(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&bs(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bs(e,t,n){(t!=="number"||yi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ks(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(zr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Lp(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ip(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function js(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ip(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Io,zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sg=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){Sg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Rp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Dp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Rp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Eg=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(Eg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ss=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,Hn=null,Qn=null;function Ac(e){if(e=$o(e)){if(typeof Es!="function")throw Error(P(280));var t=e.stateNode;t&&(t=tl(t),Es(e.stateNode,e.type,t))}}function Mp(e){Hn?Qn?Qn.push(e):Qn=[e]:Hn=e}function Np(){if(Hn){var e=Hn,t=Qn;if(Qn=Hn=null,Ac(e),t)for(e=0;e<t.length;e++)Ac(t[e])}}function Ap(e,t){return e(t)}function Fp(){}var Tl=!1;function Op(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return Ap(e,t,n)}finally{Tl=!1,(Hn!==null||Qn!==null)&&(Fp(),Np())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ps=!1;if(mt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ps=!1}function Pg(e,t,n,r,o,l,s,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var _r=!1,vi=null,wi=!1,Ts=null,Tg={onError:function(e){_r=!0,vi=e}};function Lg(e,t,n,r,o,l,s,a,c){_r=!1,vi=null,Pg.apply(Tg,arguments)}function Ig(e,t,n,r,o,l,s,a,c){if(Lg.apply(this,arguments),_r){if(_r){var d=vi;_r=!1,vi=null}else throw Error(P(198));wi||(wi=!0,Ts=d)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if($n(e)!==e)throw Error(P(188))}function zg(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Fc(o),e;if(l===r)return Fc(o),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=l;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=l;break}if(a===r){s=!0,r=o,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=o;break}if(a===r){s=!0,r=l,n=o;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Bp(e){return e=zg(e),e!==null?Up(e):null}function Up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Up(e);if(t!==null)return t;e=e.sibling}return null}var Wp=Ae.unstable_scheduleCallback,Oc=Ae.unstable_cancelCallback,Rg=Ae.unstable_shouldYield,Dg=Ae.unstable_requestPaint,oe=Ae.unstable_now,Mg=Ae.unstable_getCurrentPriorityLevel,Da=Ae.unstable_ImmediatePriority,Vp=Ae.unstable_UserBlockingPriority,bi=Ae.unstable_NormalPriority,Ng=Ae.unstable_LowPriority,Hp=Ae.unstable_IdlePriority,Xi=null,st=null;function Ag(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:_g,Fg=Math.log,Og=Math.LN2;function _g(e){return e>>>=0,e===0?32:31-(Fg(e)/Og|0)|0}var zo=64,Ro=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Rr(a):(l&=s,l!==0&&(r=Rr(l)))}else s=n&~o,s!==0?r=Rr(s):l!==0&&(r=Rr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),o=1<<n,r|=e[n],t&=~o;return r}function Bg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ug(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Ze(l),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=Bg(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qp(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function Wg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ze(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Kp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gp,Na,Yp,Jp,Xp,Is=!1,Do=[],At=null,Ft=null,Ot=null,Zr=new Map,eo=new Map,It=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _c(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function br(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=$o(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hg(e,t,n,r,o){switch(t){case"focusin":return At=br(At,e,t,n,r,o),!0;case"dragenter":return Ft=br(Ft,e,t,n,r,o),!0;case"mouseover":return Ot=br(Ot,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Zr.set(l,br(Zr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,eo.set(l,br(eo.get(l)||null,e,t,n,r,o)),!0}return!1}function qp(e){var t=sn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=_p(n),t!==null){e.blockedOn=t,Xp(e.priority,function(){Yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ss=r,n.target.dispatchEvent(r),Ss=null}else return t=$o(n),t!==null&&Na(t),e.blockedOn=n,!1;t.shift()}return!0}function Bc(e,t,n){ni(e)&&n.delete(t)}function Qg(){Is=!1,At!==null&&ni(At)&&(At=null),Ft!==null&&ni(Ft)&&(Ft=null),Ot!==null&&ni(Ot)&&(Ot=null),Zr.forEach(Bc),eo.forEach(Bc)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Qg)))}function to(e){function t(o){return kr(o,e)}if(0<Do.length){kr(Do[0],e);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&kr(At,e),Ft!==null&&kr(Ft,e),Ot!==null&&kr(Ot,e),Zr.forEach(t),eo.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)qp(n),n.blockedOn===null&&It.shift()}var Kn=wt.ReactCurrentBatchConfig,ji=!0;function Kg(e,t,n,r){var o=V,l=Kn.transition;Kn.transition=null;try{V=1,Aa(e,t,n,r)}finally{V=o,Kn.transition=l}}function Gg(e,t,n,r){var o=V,l=Kn.transition;Kn.transition=null;try{V=4,Aa(e,t,n,r)}finally{V=o,Kn.transition=l}}function Aa(e,t,n,r){if(ji){var o=zs(e,t,n,r);if(o===null)_l(e,t,r,$i,n),_c(e,r);else if(Hg(o,e,t,n,r))r.stopPropagation();else if(_c(e,r),t&4&&-1<Vg.indexOf(e)){for(;o!==null;){var l=$o(o);if(l!==null&&Gp(l),l=zs(e,t,n,r),l===null&&_l(e,t,r,$i,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else _l(e,t,r,null,n)}}var $i=null;function zs(e,t,n,r){if($i=null,e=Ra(r),e=sn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function Zp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mg()){case Da:return 1;case Vp:return 4;case bi:case Ng:return 16;case Hp:return 536870912;default:return 16}default:return 16}}var Rt=null,Fa=null,ri=null;function ef(){if(ri)return ri;var e,t=Fa,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[l-r];r++);return ri=o.slice(e,1<r?1-r:void 0)}function oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mo(){return!0}function Uc(){return!1}function Oe(e){function t(n,r,o,l,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Mo:Uc,this.isPropagationStopped=Uc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=Oe(fr),jo=ee({},fr,{view:0,detail:0}),Yg=Oe(jo),Il,zl,jr,qi=ee({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Il=e.screenX-jr.screenX,zl=e.screenY-jr.screenY):zl=Il=0,jr=e),Il)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Wc=Oe(qi),Jg=ee({},qi,{dataTransfer:0}),Xg=Oe(Jg),qg=ee({},jo,{relatedTarget:0}),Rl=Oe(qg),Zg=ee({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),em=Oe(Zg),tm=ee({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Oe(tm),rm=ee({},fr,{data:0}),Vc=Oe(rm),om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function _a(){return sm}var am=ee({},jo,{key:function(e){if(e.key){var t=om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=Oe(am),um=ee({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hc=Oe(um),dm=ee({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),pm=Oe(dm),fm=ee({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=Oe(fm),gm=ee({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Oe(gm),xm=[9,13,27,32],Ba=mt&&"CompositionEvent"in window,Br=null;mt&&"documentMode"in document&&(Br=document.documentMode);var ym=mt&&"TextEvent"in window&&!Br,tf=mt&&(!Ba||Br&&8<Br&&11>=Br),Qc=" ",Kc=!1;function nf(e,t){switch(e){case"keyup":return xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function vm(e,t){switch(e){case"compositionend":return rf(t);case"keypress":return t.which!==32?null:(Kc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Kc?null:e;default:return null}}function wm(e,t){if(Rn)return e==="compositionend"||!Ba&&nf(e,t)?(e=ef(),ri=Fa=Rt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tf&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function of(e,t,n,r){Mp(r),t=Ci(t,"onChange"),0<t.length&&(n=new Oa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,no=null;function km(e){mf(e,0)}function Zi(e){var t=Nn(e);if(Pp(t))return e}function jm(e,t){if(e==="change")return t}var lf=!1;if(mt){var Dl;if(mt){var Ml="oninput"in document;if(!Ml){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),Ml=typeof Yc.oninput=="function"}Dl=Ml}else Dl=!1;lf=Dl&&(!document.documentMode||9<document.documentMode)}function Jc(){Ur&&(Ur.detachEvent("onpropertychange",sf),no=Ur=null)}function sf(e){if(e.propertyName==="value"&&Zi(no)){var t=[];of(t,no,e,Ra(e)),Op(km,t)}}function $m(e,t,n){e==="focusin"?(Jc(),Ur=t,no=n,Ur.attachEvent("onpropertychange",sf)):e==="focusout"&&Jc()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(no)}function Sm(e,t){if(e==="click")return Zi(t)}function Em(e,t){if(e==="input"||e==="change")return Zi(t)}function Pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Pm;function ro(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!hs.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var n=Xc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xc(n)}}function af(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?af(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(){for(var e=window,t=yi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yi(e.document)}return t}function Ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tm(e){var t=cf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&af(n.ownerDocument.documentElement,n)){if(r!==null&&Ua(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=qc(n,l);var s=qc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lm=mt&&"documentMode"in document&&11>=document.documentMode,Dn=null,Rs=null,Wr=null,Ds=!1;function Zc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||Dn==null||Dn!==yi(r)||(r=Dn,"selectionStart"in r&&Ua(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&ro(Wr,r)||(Wr=r,r=Ci(Rs,"onSelect"),0<r.length&&(t=new Oa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function No(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Nl={},uf={};mt&&(uf=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function el(e){if(Nl[e])return Nl[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uf)return Nl[e]=t[n];return e}var df=el("animationend"),pf=el("animationiteration"),ff=el("animationstart"),hf=el("transitionend"),gf=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){gf.set(e,t),jn(t,[e])}for(var Al=0;Al<eu.length;Al++){var Fl=eu[Al],Im=Fl.toLowerCase(),zm=Fl[0].toUpperCase()+Fl.slice(1);Jt(Im,"on"+zm)}Jt(df,"onAnimationEnd");Jt(pf,"onAnimationIteration");Jt(ff,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(hf,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ig(r,t,void 0,e),e.currentTarget=null}function mf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==l&&o.isPropagationStopped())break e;tu(o,a,d),l=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,d=a.currentTarget,a=a.listener,c!==l&&o.isPropagationStopped())break e;tu(o,a,d),l=c}}}if(wi)throw e=Ts,wi=!1,Ts=null,e}function K(e,t){var n=t[Os];n===void 0&&(n=t[Os]=new Set);var r=e+"__bubble";n.has(r)||(xf(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),xf(n,e,r,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[Ao]){e[Ao]=!0,jp.forEach(function(n){n!=="selectionchange"&&(Rm.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,Ol("selectionchange",!1,t))}}function xf(e,t,n,r){switch(Zp(t)){case 1:var o=Kg;break;case 4:o=Gg;break;default:o=Aa}n=o.bind(null,t,n,e),o=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function _l(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=sn(a),s===null)return;if(c=s.tag,c===5||c===6){r=l=s;continue e}a=a.parentNode}}r=r.return}Op(function(){var d=l,m=Ra(n),h=[];e:{var x=gf.get(e);if(x!==void 0){var j=Oa,b=e;switch(e){case"keypress":if(oi(n)===0)break e;case"keydown":case"keyup":j=cm;break;case"focusin":b="focus",j=Rl;break;case"focusout":b="blur",j=Rl;break;case"beforeblur":case"afterblur":j=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=pm;break;case df:case pf:case ff:j=em;break;case hf:j=hm;break;case"scroll":j=Yg;break;case"wheel":j=mm;break;case"copy":case"cut":case"paste":j=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Hc}var y=(t&4)!==0,S=!y&&e==="scroll",g=y?x!==null?x+"Capture":null:x;y=[];for(var p=d,f;p!==null;){f=p;var k=f.stateNode;if(f.tag===5&&k!==null&&(f=k,g!==null&&(k=qr(p,g),k!=null&&y.push(io(p,k,f)))),S)break;p=p.return}0<y.length&&(x=new j(x,b,null,n,m),h.push({event:x,listeners:y}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",x&&n!==Ss&&(b=n.relatedTarget||n.fromElement)&&(sn(b)||b[xt]))break e;if((j||x)&&(x=m.window===m?m:(x=m.ownerDocument)?x.defaultView||x.parentWindow:window,j?(b=n.relatedTarget||n.toElement,j=d,b=b?sn(b):null,b!==null&&(S=$n(b),b!==S||b.tag!==5&&b.tag!==6)&&(b=null)):(j=null,b=d),j!==b)){if(y=Wc,k="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Hc,k="onPointerLeave",g="onPointerEnter",p="pointer"),S=j==null?x:Nn(j),f=b==null?x:Nn(b),x=new y(k,p+"leave",j,n,m),x.target=S,x.relatedTarget=f,k=null,sn(m)===d&&(y=new y(g,p+"enter",b,n,m),y.target=f,y.relatedTarget=S,k=y),S=k,j&&b)t:{for(y=j,g=b,p=0,f=y;f;f=Sn(f))p++;for(f=0,k=g;k;k=Sn(k))f++;for(;0<p-f;)y=Sn(y),p--;for(;0<f-p;)g=Sn(g),f--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=Sn(y),g=Sn(g)}y=null}else y=null;j!==null&&nu(h,x,j,y,!1),b!==null&&S!==null&&nu(h,S,b,y,!0)}}e:{if(x=d?Nn(d):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var w=jm;else if(Gc(x))if(lf)w=Em;else{w=Cm;var E=$m}else(j=x.nodeName)&&j.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(w=Sm);if(w&&(w=w(e,d))){of(h,w,n,m);break e}E&&E(e,x,d),e==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&bs(x,"number",x.value)}switch(E=d?Nn(d):window,e){case"focusin":(Gc(E)||E.contentEditable==="true")&&(Dn=E,Rs=d,Wr=null);break;case"focusout":Wr=Rs=Dn=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,Zc(h,n,m);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":Zc(h,n,m)}var C;if(Ba)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Rn?nf(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(tf&&n.locale!=="ko"&&(Rn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Rn&&(C=ef()):(Rt=m,Fa="value"in Rt?Rt.value:Rt.textContent,Rn=!0)),E=Ci(d,$),0<E.length&&($=new Vc($,e,null,n,m),h.push({event:$,listeners:E}),C?$.data=C:(C=rf(n),C!==null&&($.data=C)))),(C=ym?vm(e,n):wm(e,n))&&(d=Ci(d,"onBeforeInput"),0<d.length&&(m=new Vc("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:d}),m.data=C))}mf(h,t)})}function io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=qr(e,n),l!=null&&r.unshift(io(e,l,o)),l=qr(e,t),l!=null&&r.push(io(e,l,o))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,o){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,o?(c=qr(n,l),c!=null&&s.unshift(io(n,c,a))):o||(c=qr(n,l),c!=null&&s.push(io(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Dm=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(Dm,`
`).replace(Mm,"")}function Fo(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(P(425))}function Si(){}var Ms=null,Ns=null;function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fs=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,Am=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch(Fm)}:Fs;function Fm(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),to(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);to(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),lt="__reactFiber$"+hr,lo="__reactProps$"+hr,xt="__reactContainer$"+hr,Os="__reactEvents$"+hr,Om="__reactListeners$"+hr,_m="__reactHandles$"+hr;function sn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iu(e);e!==null;){if(n=e[lt])return n;e=iu(e)}return t}e=n,n=e.parentNode}return null}function $o(e){return e=e[lt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function tl(e){return e[lo]||null}var _s=[],An=-1;function Xt(e){return{current:e}}function Y(e){0>An||(e.current=_s[An],_s[An]=null,An--)}function Q(e,t){An++,_s[An]=e.current,e.current=t}var Gt={},be=Xt(Gt),Le=Xt(!1),gn=Gt;function Zn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function Ei(){Y(Le),Y(be)}function lu(e,t,n){if(be.current!==Gt)throw Error(P(168));Q(be,t),Q(Le,n)}function yf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,$g(e)||"Unknown",o));return ee({},n,r)}function Pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,gn=be.current,Q(be,e),Q(Le,Le.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=yf(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,Y(Le),Y(be),Q(be,e)):Y(Le),Q(Le,n)}var pt=null,nl=!1,Ul=!1;function vf(e){pt===null?pt=[e]:pt.push(e)}function Bm(e){nl=!0,vf(e)}function qt(){if(!Ul&&pt!==null){Ul=!0;var e=0,t=V;try{var n=pt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,nl=!1}catch(o){throw pt!==null&&(pt=pt.slice(e+1)),Wp(Da,qt),o}finally{V=t,Ul=!1}}return null}var Fn=[],On=0,Ti=null,Li=0,Be=[],Ue=0,mn=null,ft=1,ht="";function nn(e,t){Fn[On++]=Li,Fn[On++]=Ti,Ti=e,Li=t}function wf(e,t,n){Be[Ue++]=ft,Be[Ue++]=ht,Be[Ue++]=mn,mn=e;var r=ft;e=ht;var o=32-Ze(r)-1;r&=~(1<<o),n+=1;var l=32-Ze(t)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,ft=1<<32-Ze(t)+o|n<<o|r,ht=l+e}else ft=1<<l|n<<o|r,ht=e}function Wa(e){e.return!==null&&(nn(e,1),wf(e,1,0))}function Va(e){for(;e===Ti;)Ti=Fn[--On],Fn[On]=null,Li=Fn[--On],Fn[On]=null;for(;e===mn;)mn=Be[--Ue],Be[Ue]=null,ht=Be[--Ue],Be[Ue]=null,ft=Be[--Ue],Be[Ue]=null}var Ne=null,Me=null,J=!1,qe=null;function bf(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function au(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Me=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Me=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Us(e){if(J){var t=Me;if(t){var n=t;if(!au(e,t)){if(Bs(e))throw Error(P(418));t=_t(n.nextSibling);var r=Ne;t&&au(e,t)?bf(r,n):(e.flags=e.flags&-4097|2,J=!1,Ne=e)}}else{if(Bs(e))throw Error(P(418));e.flags=e.flags&-4097|2,J=!1,Ne=e}}}function cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Oo(e){if(e!==Ne)return!1;if(!J)return cu(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!As(e.type,e.memoizedProps)),t&&(t=Me)){if(Bs(e))throw kf(),Error(P(418));for(;t;)bf(e,t),t=_t(t.nextSibling)}if(cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Ne?_t(e.stateNode.nextSibling):null;return!0}function kf(){for(var e=Me;e;)e=_t(e.nextSibling)}function er(){Me=Ne=null,J=!1}function Ha(e){qe===null?qe=[e]:qe.push(e)}var Um=wt.ReactCurrentBatchConfig;function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=o.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uu(e){var t=e._init;return t(e._payload)}function jf(e){function t(g,p){if(e){var f=g.deletions;f===null?(g.deletions=[p],g.flags|=16):f.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=Vt(g,p),g.index=0,g.sibling=null,g}function l(g,p,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<p?(g.flags|=2,p):f):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,f,k){return p===null||p.tag!==6?(p=Yl(f,g.mode,k),p.return=g,p):(p=o(p,f),p.return=g,p)}function c(g,p,f,k){var w=f.type;return w===zn?m(g,p,f.props.children,k,f.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Tt&&uu(w)===p.type)?(k=o(p,f.props),k.ref=$r(g,p,f),k.return=g,k):(k=di(f.type,f.key,f.props,null,g.mode,k),k.ref=$r(g,p,f),k.return=g,k)}function d(g,p,f,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=Jl(f,g.mode,k),p.return=g,p):(p=o(p,f.children||[]),p.return=g,p)}function m(g,p,f,k,w){return p===null||p.tag!==7?(p=dn(f,g.mode,k,w),p.return=g,p):(p=o(p,f),p.return=g,p)}function h(g,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Yl(""+p,g.mode,f),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case To:return f=di(p.type,p.key,p.props,null,g.mode,f),f.ref=$r(g,null,p),f.return=g,f;case In:return p=Jl(p,g.mode,f),p.return=g,p;case Tt:var k=p._init;return h(g,k(p._payload),f)}if(zr(p)||vr(p))return p=dn(p,g.mode,f,null),p.return=g,p;_o(g,p)}return null}function x(g,p,f,k){var w=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:a(g,p,""+f,k);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case To:return f.key===w?c(g,p,f,k):null;case In:return f.key===w?d(g,p,f,k):null;case Tt:return w=f._init,x(g,p,w(f._payload),k)}if(zr(f)||vr(f))return w!==null?null:m(g,p,f,k,null);_o(g,f)}return null}function j(g,p,f,k,w){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(f)||null,a(p,g,""+k,w);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case To:return g=g.get(k.key===null?f:k.key)||null,c(p,g,k,w);case In:return g=g.get(k.key===null?f:k.key)||null,d(p,g,k,w);case Tt:var E=k._init;return j(g,p,f,E(k._payload),w)}if(zr(k)||vr(k))return g=g.get(f)||null,m(p,g,k,w,null);_o(p,k)}return null}function b(g,p,f,k){for(var w=null,E=null,C=p,$=p=0,z=null;C!==null&&$<f.length;$++){C.index>$?(z=C,C=null):z=C.sibling;var L=x(g,C,f[$],k);if(L===null){C===null&&(C=z);break}e&&C&&L.alternate===null&&t(g,C),p=l(L,p,$),E===null?w=L:E.sibling=L,E=L,C=z}if($===f.length)return n(g,C),J&&nn(g,$),w;if(C===null){for(;$<f.length;$++)C=h(g,f[$],k),C!==null&&(p=l(C,p,$),E===null?w=C:E.sibling=C,E=C);return J&&nn(g,$),w}for(C=r(g,C);$<f.length;$++)z=j(C,g,$,f[$],k),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?$:z.key),p=l(z,p,$),E===null?w=z:E.sibling=z,E=z);return e&&C.forEach(function(A){return t(g,A)}),J&&nn(g,$),w}function y(g,p,f,k){var w=vr(f);if(typeof w!="function")throw Error(P(150));if(f=w.call(f),f==null)throw Error(P(151));for(var E=w=null,C=p,$=p=0,z=null,L=f.next();C!==null&&!L.done;$++,L=f.next()){C.index>$?(z=C,C=null):z=C.sibling;var A=x(g,C,L.value,k);if(A===null){C===null&&(C=z);break}e&&C&&A.alternate===null&&t(g,C),p=l(A,p,$),E===null?w=A:E.sibling=A,E=A,C=z}if(L.done)return n(g,C),J&&nn(g,$),w;if(C===null){for(;!L.done;$++,L=f.next())L=h(g,L.value,k),L!==null&&(p=l(L,p,$),E===null?w=L:E.sibling=L,E=L);return J&&nn(g,$),w}for(C=r(g,C);!L.done;$++,L=f.next())L=j(C,g,$,L.value,k),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?$:L.key),p=l(L,p,$),E===null?w=L:E.sibling=L,E=L);return e&&C.forEach(function(te){return t(g,te)}),J&&nn(g,$),w}function S(g,p,f,k){if(typeof f=="object"&&f!==null&&f.type===zn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case To:e:{for(var w=f.key,E=p;E!==null;){if(E.key===w){if(w=f.type,w===zn){if(E.tag===7){n(g,E.sibling),p=o(E,f.props.children),p.return=g,g=p;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Tt&&uu(w)===E.type){n(g,E.sibling),p=o(E,f.props),p.ref=$r(g,E,f),p.return=g,g=p;break e}n(g,E);break}else t(g,E);E=E.sibling}f.type===zn?(p=dn(f.props.children,g.mode,k,f.key),p.return=g,g=p):(k=di(f.type,f.key,f.props,null,g.mode,k),k.ref=$r(g,p,f),k.return=g,g=k)}return s(g);case In:e:{for(E=f.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(g,p.sibling),p=o(p,f.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Jl(f,g.mode,k),p.return=g,g=p}return s(g);case Tt:return E=f._init,S(g,p,E(f._payload),k)}if(zr(f))return b(g,p,f,k);if(vr(f))return y(g,p,f,k);_o(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,f),p.return=g,g=p):(n(g,p),p=Yl(f,g.mode,k),p.return=g,g=p),s(g)):n(g,p)}return S}var tr=jf(!0),$f=jf(!1),Ii=Xt(null),zi=null,_n=null,Qa=null;function Ka(){Qa=_n=zi=null}function Ga(e){var t=Ii.current;Y(Ii),e._currentValue=t}function Ws(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){zi=e,Qa=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Qa!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(zi===null)throw Error(P(308));_n=e,zi.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var an=null;function Ya(e){an===null?an=[e]:an.push(e)}function Cf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ya(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ya(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ma(e,n)}}function du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ri(e,t,n,r){var o=e.updateQueue;Lt=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,d=c.next;c.next=null,s===null?l=d:s.next=d,s=c;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==s&&(a===null?m.firstBaseUpdate=d:a.next=d,m.lastBaseUpdate=c))}if(l!==null){var h=o.baseState;s=0,m=d=c=null,a=l;do{var x=a.lane,j=a.eventTime;if((r&x)===x){m!==null&&(m=m.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,y=a;switch(x=t,j=n,y.tag){case 1:if(b=y.payload,typeof b=="function"){h=b.call(j,h,x);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,x=typeof b=="function"?b.call(j,h,x):b,x==null)break e;h=ee({},h,x);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[a]:x.push(a))}else j={eventTime:j,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(d=m=j,c=h):m=m.next=j,s|=x;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;x=a,a=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(m===null&&(c=h),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);yn|=s,e.lanes=s,e.memoizedState=h}}function pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Co={},at=Xt(Co),so=Xt(Co),ao=Xt(Co);function cn(e){if(e===Co)throw Error(P(174));return e}function Xa(e,t){switch(Q(ao,t),Q(so,e),Q(at,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:js(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=js(t,e)}Y(at),Q(at,t)}function nr(){Y(at),Y(so),Y(ao)}function Ef(e){cn(ao.current);var t=cn(at.current),n=js(t,e.type);t!==n&&(Q(so,e),Q(at,n))}function qa(e){so.current===e&&(Y(at),Y(so))}var X=Xt(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Za(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var li=wt.ReactCurrentDispatcher,Vl=wt.ReactCurrentBatchConfig,xn=0,q=null,ce=null,pe=null,Mi=!1,Vr=!1,co=0,Wm=0;function xe(){throw Error(P(321))}function ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function tc(e,t,n,r,o,l){if(xn=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?Km:Gm,e=n(r,o),Vr){l=0;do{if(Vr=!1,co=0,25<=l)throw Error(P(301));l+=1,pe=ce=null,t.updateQueue=null,li.current=Ym,e=n(r,o)}while(Vr)}if(li.current=Ni,t=ce!==null&&ce.next!==null,xn=0,pe=ce=q=null,Mi=!1,t)throw Error(P(300));return e}function nc(){var e=co!==0;return co=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?q.memoizedState=pe=e:pe=pe.next=e,pe}function Qe(){if(ce===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?q.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(P(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?q.memoizedState=pe=e:pe=pe.next=e}return pe}function uo(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ce,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=s=null,c=null,d=l;do{var m=d.lane;if((xn&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=h,s=r):c=c.next=h,q.lanes|=m,yn|=m}d=d.next}while(d!==null&&d!==l);c===null?s=r:c.next=a,nt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,q.lanes|=l,yn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);nt(l,t.memoizedState)||(Te=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Pf(){}function Tf(e,t){var n=q,r=Qe(),o=t(),l=!nt(r.memoizedState,o);if(l&&(r.memoizedState=o,Te=!0),r=r.queue,rc(zf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,po(9,If.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(P(349));xn&30||Lf(n,t,o)}return o}function Lf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function If(e,t,n,r){t.value=n,t.getSnapshot=r,Rf(t)&&Df(e)}function zf(e,t,n){return n(function(){Rf(t)&&Df(e)})}function Rf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Df(e){var t=yt(e,1);t!==null&&et(t,e,1,-1)}function fu(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:e},t.queue=e,e=e.dispatch=Qm.bind(null,q,e),[t.memoizedState,e]}function po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mf(){return Qe().memoizedState}function si(e,t,n,r){var o=it();q.flags|=e,o.memoizedState=po(1|t,n,void 0,r===void 0?null:r)}function rl(e,t,n,r){var o=Qe();r=r===void 0?null:r;var l=void 0;if(ce!==null){var s=ce.memoizedState;if(l=s.destroy,r!==null&&ec(r,s.deps)){o.memoizedState=po(t,n,l,r);return}}q.flags|=e,o.memoizedState=po(1|t,n,l,r)}function hu(e,t){return si(8390656,8,e,t)}function rc(e,t){return rl(2048,8,e,t)}function Nf(e,t){return rl(4,2,e,t)}function Af(e,t){return rl(4,4,e,t)}function Ff(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Of(e,t,n){return n=n!=null?n.concat([e]):null,rl(4,4,Ff.bind(null,t,e),n)}function oc(){}function _f(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bf(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uf(e,t,n){return xn&21?(nt(n,t)||(n=Qp(),q.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function Vm(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{V=n,Vl.transition=r}}function Wf(){return Qe().memoizedState}function Hm(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vf(e))Hf(t,n);else if(n=Cf(e,t,n,r),n!==null){var o=je();et(n,e,r,o),Qf(n,t,r)}}function Qm(e,t,n){var r=Wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vf(e))Hf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(o.hasEagerState=!0,o.eagerState=a,nt(a,s)){var c=t.interleaved;c===null?(o.next=o,Ya(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Cf(e,t,o,r),n!==null&&(o=je(),et(n,e,r,o),Qf(n,t,r))}}function Vf(e){var t=e.alternate;return e===q||t!==null&&t===q}function Hf(e,t){Vr=Mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ma(e,n)}}var Ni={readContext:He,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Km={readContext:He,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,4,Ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:fu,useDebugValue:oc,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=fu(!1),t=e[0];return e=Vm.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=it();if(J){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),fe===null)throw Error(P(349));xn&30||Lf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,hu(zf.bind(null,r,l,e),[e]),r.flags|=2048,po(9,If.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=it(),t=fe.identifierPrefix;if(J){var n=ht,r=ft;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gm={readContext:He,useCallback:_f,useContext:He,useEffect:rc,useImperativeHandle:Of,useInsertionEffect:Nf,useLayoutEffect:Af,useMemo:Bf,useReducer:Hl,useRef:Mf,useState:function(){return Hl(uo)},useDebugValue:oc,useDeferredValue:function(e){var t=Qe();return Uf(t,ce.memoizedState,e)},useTransition:function(){var e=Hl(uo)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Pf,useSyncExternalStore:Tf,useId:Wf,unstable_isNewReconciler:!1},Ym={readContext:He,useCallback:_f,useContext:He,useEffect:rc,useImperativeHandle:Of,useInsertionEffect:Nf,useLayoutEffect:Af,useMemo:Bf,useReducer:Ql,useRef:Mf,useState:function(){return Ql(uo)},useDebugValue:oc,useDeferredValue:function(e){var t=Qe();return ce===null?t.memoizedState=e:Uf(t,ce.memoizedState,e)},useTransition:function(){var e=Ql(uo)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Pf,useSyncExternalStore:Tf,useId:Wf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),o=Wt(e),l=gt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,o),t!==null&&(et(t,e,o,r),ii(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),o=Wt(e),l=gt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,o),t!==null&&(et(t,e,o,r),ii(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Wt(e),o=gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(et(t,e,r,n),ii(t,e,r))}};function gu(e,t,n,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!ro(n,r)||!ro(o,l):!0}function Kf(e,t,n){var r=!1,o=Gt,l=t.contextType;return typeof l=="object"&&l!==null?l=He(l):(o=Ie(t)?gn:be.current,r=t.contextTypes,l=(r=r!=null)?Zn(e,o):Gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Hs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ja(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=He(l):(l=Ie(t)?gn:be.current,o.context=Zn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Vs(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ri(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=jg(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jm=typeof WeakMap=="function"?WeakMap:Map;function Gf(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fi||(Fi=!0,na=r),Qs(e,t)},n}function Yf(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Qs(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Qs(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ux.bind(null,e,t,n),t.then(e,e))}function yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var Xm=wt.ReactCurrentOwner,Te=!1;function ke(e,t,n,r){t.child=e===null?$f(t,null,n,r):tr(t,e.child,n,r)}function wu(e,t,n,r,o){n=n.render;var l=t.ref;return Gn(t,o),r=tc(e,t,n,r,l,o),n=nc(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(J&&n&&Wa(t),t.flags|=1,ke(e,t,r,o),t.child)}function bu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!pc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Jf(e,t,l,r,o)):(e=di(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(s,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=Vt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Jf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ro(l,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,vt(e,t,o)}return Ks(e,t,n,r,o)}function Xf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Un,De),De|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Un,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Q(Un,De),De|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Q(Un,De),De|=r;return ke(e,t,o,n),t.child}function qf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,o){var l=Ie(n)?gn:be.current;return l=Zn(t,l),Gn(t,o),n=tc(e,t,n,r,l,o),r=nc(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(J&&r&&Wa(t),t.flags|=1,ke(e,t,n,o),t.child)}function ku(e,t,n,r,o){if(Ie(n)){var l=!0;Pi(t)}else l=!1;if(Gn(t,o),t.stateNode===null)ai(e,t),Kf(t,n,r),Hs(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=He(d):(d=Ie(n)?gn:be.current,d=Zn(t,d));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==d)&&mu(t,s,r,d),Lt=!1;var x=t.memoizedState;s.state=x,Ri(t,r,s,o),c=t.memoizedState,a!==r||x!==c||Le.current||Lt?(typeof m=="function"&&(Vs(t,n,m,r),c=t.memoizedState),(a=Lt||gu(t,n,a,r,x,c,d))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Sf(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Ye(t.type,a),s.props=d,h=t.pendingProps,x=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=He(c):(c=Ie(n)?gn:be.current,c=Zn(t,c));var j=n.getDerivedStateFromProps;(m=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||x!==c)&&mu(t,s,r,c),Lt=!1,x=t.memoizedState,s.state=x,Ri(t,r,s,o);var b=t.memoizedState;a!==h||x!==b||Le.current||Lt?(typeof j=="function"&&(Vs(t,n,j,r),b=t.memoizedState),(d=Lt||gu(t,n,d,r,x,b,c)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,l,o)}function Gs(e,t,n,r,o,l){qf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&su(t,n,!1),vt(e,t,l);r=t.stateNode,Xm.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=tr(t,e.child,null,l),t.child=tr(t,null,a,l)):ke(e,t,a,l),t.memoizedState=r.state,o&&su(t,n,!0),t.child}function Zf(e){var t=e.stateNode;t.pendingContext?lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lu(e,t.context,!1),Xa(e,t.containerInfo)}function ju(e,t,n,r,o){return er(),Ha(o),t.flags|=256,ke(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function eh(e,t,n){var r=t.pendingProps,o=X.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(X,o&1),e===null)return Us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=sl(s,r,0,null),e=dn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Js(n),t.memoizedState=Ys,e):ic(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return qm(e,t,s,r,a,o,n);if(l){l=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Vt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Vt(a,l):(l=dn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Js(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return l=e.child,e=l.sibling,r=Vt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ic(e,t){return t=sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bo(e,t,n,r){return r!==null&&Ha(r),tr(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qm(e,t,n,r,o,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(P(422))),Bo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=sl({mode:"visible",children:r.children},o,0,null),l=dn(l,o,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&tr(t,e.child,null,s),t.child.memoizedState=Js(s),t.memoizedState=Ys,l);if(!(t.mode&1))return Bo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(P(419)),r=Kl(l,r,void 0),Bo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Te||a){if(r=fe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,yt(e,o),et(r,e,o,-1))}return dc(),r=Kl(Error(P(421))),Bo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=dx.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Me=_t(o.nextSibling),Ne=t,J=!0,qe=null,e!==null&&(Be[Ue++]=ft,Be[Ue++]=ht,Be[Ue++]=mn,ft=e.id,ht=e.overflow,mn=t),t=ic(t,r.children),t.flags|=4096,t)}function $u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ws(e.return,t,n)}function Gl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function th(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ke(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$u(e,n,t);else if(e.tag===19)$u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Di(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gl(t,!0,n,null,l);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zm(e,t,n){switch(t.tag){case 3:Zf(t),er();break;case 5:Ef(t);break;case 1:Ie(t.type)&&Pi(t);break;case 4:Xa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(Ii,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?eh(e,t,n):(Q(X,X.current&1),e=vt(e,t,n),e!==null?e.sibling:null);Q(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return th(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,n)}return vt(e,t,n)}var nh,Xs,rh,oh;nh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xs=function(){};rh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,cn(at.current);var l=null;switch(n){case"input":o=vs(e,o),r=vs(e,r),l=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),l=[];break;case"textarea":o=ks(e,o),r=ks(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}$s(n,r);var s;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var a=o[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(a=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&K("scroll",e),l||a===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};oh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ex(e,t,n){var r=t.pendingProps;switch(Va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ie(t.type)&&Ei(),ye(t),null;case 3:return r=t.stateNode,nr(),Y(Le),Y(be),Za(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(ia(qe),qe=null))),Xs(e,t),ye(t),null;case 5:qa(t);var o=cn(ao.current);if(n=t.type,e!==null&&t.stateNode!=null)rh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ye(t),null}if(e=cn(at.current),Oo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[lt]=t,r[lo]=l,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<Dr.length;o++)K(Dr[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Rc(r,l),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":Mc(r,l),K("invalid",r)}$s(n,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Fo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Fo(r.textContent,a,e),o=["children",""+a]):Jr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":Lo(r),Dc(r,l,!0);break;case"textarea":Lo(r),Nc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ip(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[lt]=t,e[lo]=r,nh(e,t,!1,!1),t.stateNode=e;e:{switch(s=Cs(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<Dr.length;o++)K(Dr[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":Rc(e,r),o=vs(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),K("invalid",e);break;case"textarea":Mc(e,r),o=ks(e,r),K("invalid",e);break;default:o=r}$s(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?Dp(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zp(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xr(e,c):typeof c=="number"&&Xr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Jr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&K("scroll",e):c!=null&&Ta(e,l,c,s))}switch(n){case"input":Lo(e),Dc(e,r,!1);break;case"textarea":Lo(e),Nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Vn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)oh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=cn(ao.current),cn(at.current),Oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(l=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ye(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Me!==null&&t.mode&1&&!(t.flags&128))kf(),er(),t.flags|=98560,l=!1;else if(l=Oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[lt]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),l=!1}else qe!==null&&(ia(qe),qe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?de===0&&(de=3):dc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return nr(),Xs(e,t),e===null&&oo(t.stateNode.containerInfo),ye(t),null;case 10:return Ga(t.type._context),ye(t),null;case 17:return Ie(t.type)&&Ei(),ye(t),null;case 19:if(Y(X),l=t.memoizedState,l===null)return ye(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Cr(l,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Di(e),s!==null){for(t.flags|=128,Cr(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(X,X.current&1|2),t.child}e=e.sibling}l.tail!==null&&oe()>or&&(t.flags|=128,r=!0,Cr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Di(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!J)return ye(t),null}else 2*oe()-l.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,Cr(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=oe(),t.sibling=null,n=X.current,Q(X,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return uc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function tx(e,t){switch(Va(t),t.tag){case 1:return Ie(t.type)&&Ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),Y(Le),Y(be),Za(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qa(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return nr(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Uo=!1,we=!1,nx=typeof WeakSet=="function"?WeakSet:Set,I=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function qs(e,t,n){try{n()}catch(r){re(e,t,r)}}var Cu=!1;function rx(e,t){if(Ms=ji,e=cf(),Ua(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,d=0,m=0,h=e,x=null;t:for(;;){for(var j;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==l||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(j=h.firstChild)!==null;)x=h,h=j;for(;;){if(h===e)break t;if(x===n&&++d===o&&(a=s),x===l&&++m===r&&(c=s),(j=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=j}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ns={focusedElem:e,selectionRange:n},ji=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,S=b.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),S);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){re(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return b=Cu,Cu=!1,b}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&qs(t,n,l)}o=o.next}while(o!==r)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ih(e){var t=e.alternate;t!==null&&(e.alternate=null,ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[lo],delete t[Os],delete t[Om],delete t[_m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lh(e){return e.tag===5||e.tag===3||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var he=null,Je=!1;function Ct(e,t,n){for(n=n.child;n!==null;)sh(e,t,n),n=n.sibling}function sh(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 5:we||Bn(n,t);case 6:var r=he,o=Je;he=null,Ct(e,t,n),he=r,Je=o,he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),to(e)):Bl(he,n.stateNode));break;case 4:r=he,o=Je,he=n.stateNode.containerInfo,Je=!0,Ct(e,t,n),he=r,Je=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&qs(n,t,s),o=o.next}while(o!==r)}Ct(e,t,n);break;case 1:if(!we&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Ct(e,t,n),we=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Eu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nx),t.forEach(function(r){var o=px.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Je=!1;break e;case 3:he=a.stateNode.containerInfo,Je=!0;break e;case 4:he=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(he===null)throw Error(P(160));sh(l,s,o),he=null,Je=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){re(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ah(t,e),t=t.sibling}function ah(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),ot(e),r&4){try{Hr(3,e,e.return),il(3,e)}catch(y){re(e,e.return,y)}try{Hr(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:Ge(t,e),ot(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(Ge(t,e),ot(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var o=e.stateNode;try{Xr(o,"")}catch(y){re(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Tp(o,l),Cs(a,s);var d=Cs(a,l);for(s=0;s<c.length;s+=2){var m=c[s],h=c[s+1];m==="style"?Dp(o,h):m==="dangerouslySetInnerHTML"?zp(o,h):m==="children"?Xr(o,h):Ta(o,m,h,d)}switch(a){case"input":ws(o,l);break;case"textarea":Lp(o,l);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?Vn(o,!!l.multiple,j,!1):x!==!!l.multiple&&(l.defaultValue!=null?Vn(o,!!l.multiple,l.defaultValue,!0):Vn(o,!!l.multiple,l.multiple?[]:"",!1))}o[lo]=l}catch(y){re(e,e.return,y)}}break;case 6:if(Ge(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(y){re(e,e.return,y)}}break;case 3:if(Ge(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:Ge(t,e),ot(e);break;case 13:Ge(t,e),ot(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ac=oe())),r&4&&Eu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(we=(d=we)||m,Ge(t,e),we=d):Ge(t,e),ot(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(I=e,m=e.child;m!==null;){for(h=I=m;I!==null;){switch(x=I,j=x.child,x.tag){case 0:case 11:case 14:case 15:Hr(4,x,x.return);break;case 1:Bn(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Bn(x,x.return);break;case 22:if(x.memoizedState!==null){Tu(h);continue}}j!==null?(j.return=x,I=j):Tu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Rp("display",s))}catch(y){re(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){re(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ge(t,e),ot(e),r&4&&Eu(e);break;case 21:break;default:Ge(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xr(o,""),r.flags&=-33);var l=Su(e);ta(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Su(e);ea(e,a,s);break;default:throw Error(P(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ox(e,t,n){I=e,ch(e)}function ch(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Uo;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||we;a=Uo;var d=we;if(Uo=s,(we=c)&&!d)for(I=o;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?Lu(o):c!==null?(c.return=s,I=c):Lu(o);for(;l!==null;)I=l,ch(l),l=l.sibling;I=o,Uo=a,we=d}Pu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,I=l):Pu(e)}}function Pu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&pu(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&to(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}we||t.flags&512&&Zs(t)}catch(x){re(t,t.return,x)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Tu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Lu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(c){re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){re(t,o,c)}}var l=t.return;try{Zs(t)}catch(c){re(t,l,c)}break;case 5:var s=t.return;try{Zs(t)}catch(c){re(t,s,c)}}}catch(c){re(t,t.return,c)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var ix=Math.ceil,Ai=wt.ReactCurrentDispatcher,lc=wt.ReactCurrentOwner,Ve=wt.ReactCurrentBatchConfig,F=0,fe=null,se=null,ge=0,De=0,Un=Xt(0),de=0,fo=null,yn=0,ll=0,sc=0,Qr=null,Ee=null,ac=0,or=1/0,ut=null,Fi=!1,na=null,Ut=null,Wo=!1,Dt=null,Oi=0,Kr=0,ra=null,ci=-1,ui=0;function je(){return F&6?oe():ci!==-1?ci:ci=oe()}function Wt(e){return e.mode&1?F&2&&ge!==0?ge&-ge:Um.transition!==null?(ui===0&&(ui=Qp()),ui):(e=V,e!==0||(e=window.event,e=e===void 0?16:Zp(e.type)),e):1}function et(e,t,n,r){if(50<Kr)throw Kr=0,ra=null,Error(P(185));ko(e,n,r),(!(F&2)||e!==fe)&&(e===fe&&(!(F&2)&&(ll|=n),de===4&&zt(e,ge)),ze(e,r),n===1&&F===0&&!(t.mode&1)&&(or=oe()+500,nl&&qt()))}function ze(e,t){var n=e.callbackNode;Ug(e,t);var r=ki(e,e===fe?ge:0);if(r===0)n!==null&&Oc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oc(n),t===1)e.tag===0?Bm(Iu.bind(null,e)):vf(Iu.bind(null,e)),Am(function(){!(F&6)&&qt()}),n=null;else{switch(Kp(r)){case 1:n=Da;break;case 4:n=Vp;break;case 16:n=bi;break;case 536870912:n=Hp;break;default:n=bi}n=xh(n,uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uh(e,t){if(ci=-1,ui=0,F&6)throw Error(P(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=ki(e,e===fe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_i(e,r);else{t=r;var o=F;F|=2;var l=ph();(fe!==e||ge!==t)&&(ut=null,or=oe()+500,un(e,t));do try{ax();break}catch(a){dh(e,a)}while(!0);Ka(),Ai.current=l,F=o,se!==null?t=0:(fe=null,ge=0,t=de)}if(t!==0){if(t===2&&(o=Ls(e),o!==0&&(r=o,t=oa(e,o))),t===1)throw n=fo,un(e,0),zt(e,r),ze(e,oe()),n;if(t===6)zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!lx(o)&&(t=_i(e,r),t===2&&(l=Ls(e),l!==0&&(r=l,t=oa(e,l))),t===1))throw n=fo,un(e,0),zt(e,r),ze(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:rn(e,Ee,ut);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=ac+500-oe(),10<t)){if(ki(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fs(rn.bind(null,e,Ee,ut),t);break}rn(e,Ee,ut);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Ze(r);l=1<<s,s=t[s],s>o&&(o=s),r&=~l}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ix(r/1960))-r,10<r){e.timeoutHandle=Fs(rn.bind(null,e,Ee,ut),r);break}rn(e,Ee,ut);break;case 5:rn(e,Ee,ut);break;default:throw Error(P(329))}}}return ze(e,oe()),e.callbackNode===n?uh.bind(null,e):null}function oa(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=_i(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&ia(t)),e}function ia(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function lx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!nt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~sc,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Iu(e){if(F&6)throw Error(P(327));Yn();var t=ki(e,0);if(!(t&1))return ze(e,oe()),null;var n=_i(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=oa(e,r))}if(n===1)throw n=fo,un(e,0),zt(e,t),ze(e,oe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ee,ut),ze(e,oe()),null}function cc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(or=oe()+500,nl&&qt())}}function vn(e){Dt!==null&&Dt.tag===0&&!(F&6)&&Yn();var t=F;F|=1;var n=Ve.transition,r=V;try{if(Ve.transition=null,V=1,e)return e()}finally{V=r,Ve.transition=n,F=t,!(F&6)&&qt()}}function uc(){De=Un.current,Y(Un)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nm(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Va(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:nr(),Y(Le),Y(be),Za();break;case 5:qa(r);break;case 4:nr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Ga(r.type._context);break;case 22:case 23:uc()}n=n.return}if(fe=e,se=e=Vt(e.current,null),ge=De=t,de=0,fo=null,sc=ll=yn=0,Ee=Qr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}n.pending=r}an=null}return e}function dh(e,t){do{var n=se;try{if(Ka(),li.current=Ni,Mi){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Mi=!1}if(xn=0,pe=ce=q=null,Vr=!1,co=0,lc.current=null,n===null||n.return===null){de=1,fo=t,se=null;break}e:{var l=e,s=n.return,a=n,c=t;if(t=ge,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var x=m.alternate;x?(m.updateQueue=x.updateQueue,m.memoizedState=x.memoizedState,m.lanes=x.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=yu(s);if(j!==null){j.flags&=-257,vu(j,s,a,l,t),j.mode&1&&xu(l,d,t),t=j,c=d;var b=t.updateQueue;if(b===null){var y=new Set;y.add(c),t.updateQueue=y}else b.add(c);break e}else{if(!(t&1)){xu(l,d,t),dc();break e}c=Error(P(426))}}else if(J&&a.mode&1){var S=yu(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),vu(S,s,a,l,t),Ha(rr(c,a));break e}}l=c=rr(c,a),de!==4&&(de=2),Qr===null?Qr=[l]:Qr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=Gf(l,c,t);du(l,g);break e;case 1:a=c;var p=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ut===null||!Ut.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=Yf(l,a,t);du(l,k);break e}}l=l.return}while(l!==null)}hh(n)}catch(w){t=w,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function ph(){var e=Ai.current;return Ai.current=Ni,e===null?Ni:e}function dc(){(de===0||de===3||de===2)&&(de=4),fe===null||!(yn&268435455)&&!(ll&268435455)||zt(fe,ge)}function _i(e,t){var n=F;F|=2;var r=ph();(fe!==e||ge!==t)&&(ut=null,un(e,t));do try{sx();break}catch(o){dh(e,o)}while(!0);if(Ka(),F=n,Ai.current=r,se!==null)throw Error(P(261));return fe=null,ge=0,de}function sx(){for(;se!==null;)fh(se)}function ax(){for(;se!==null&&!Rg();)fh(se)}function fh(e){var t=mh(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?hh(e):se=t,lc.current=null}function hh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tx(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,se=null;return}}else if(n=ex(n,t,De),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);de===0&&(de=5)}function rn(e,t,n){var r=V,o=Ve.transition;try{Ve.transition=null,V=1,cx(e,t,n,r)}finally{Ve.transition=o,V=r}return null}function cx(e,t,n,r){do Yn();while(Dt!==null);if(F&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Wg(e,l),e===fe&&(se=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wo||(Wo=!0,xh(bi,function(){return Yn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ve.transition,Ve.transition=null;var s=V;V=1;var a=F;F|=4,lc.current=null,rx(e,n),ah(n,e),Tm(Ns),ji=!!Ms,Ns=Ms=null,e.current=n,ox(n),Dg(),F=a,V=s,Ve.transition=l}else e.current=n;if(Wo&&(Wo=!1,Dt=e,Oi=o),l=e.pendingLanes,l===0&&(Ut=null),Ag(n.stateNode),ze(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Fi)throw Fi=!1,e=na,na=null,e;return Oi&1&&e.tag!==0&&Yn(),l=e.pendingLanes,l&1?e===ra?Kr++:(Kr=0,ra=e):Kr=0,qt(),null}function Yn(){if(Dt!==null){var e=Kp(Oi),t=Ve.transition,n=V;try{if(Ve.transition=null,V=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Oi=0,F&6)throw Error(P(331));var o=F;for(F|=4,I=e.current;I!==null;){var l=I,s=l.child;if(I.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(I=d;I!==null;){var m=I;switch(m.tag){case 0:case 11:case 15:Hr(8,m,l)}var h=m.child;if(h!==null)h.return=m,I=h;else for(;I!==null;){m=I;var x=m.sibling,j=m.return;if(ih(m),m===d){I=null;break}if(x!==null){x.return=j,I=x;break}I=j}}}var b=l.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}I=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,I=s;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Hr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,I=g;break e}I=l.return}}var p=e.current;for(I=p;I!==null;){s=I;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,I=f;else e:for(s=p;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:il(9,a)}}catch(w){re(a,a.return,w)}if(a===s){I=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,I=k;break e}I=a.return}}if(F=o,qt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Xi,e)}catch{}r=!0}return r}finally{V=n,Ve.transition=t}}return!1}function zu(e,t,n){t=rr(n,t),t=Gf(e,t,1),e=Bt(e,t,1),t=je(),e!==null&&(ko(e,1,t),ze(e,t))}function re(e,t,n){if(e.tag===3)zu(e,e,n);else for(;t!==null;){if(t.tag===3){zu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=rr(n,e),e=Yf(t,e,1),t=Bt(t,e,1),e=je(),t!==null&&(ko(t,1,e),ze(t,e));break}}t=t.return}}function ux(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(de===4||de===3&&(ge&130023424)===ge&&500>oe()-ac?un(e,0):sc|=n),ze(e,t)}function gh(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=je();e=yt(e,t),e!==null&&(ko(e,t,n),ze(e,n))}function dx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gh(e,n)}function px(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),gh(e,n)}var mh;mh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,Zm(e,t,n);Te=!!(e.flags&131072)}else Te=!1,J&&t.flags&1048576&&wf(t,Li,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ai(e,t),e=t.pendingProps;var o=Zn(t,be.current);Gn(t,n),o=tc(null,t,r,e,o,n);var l=nc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(l=!0,Pi(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ja(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,Hs(t,r,e,n),t=Gs(null,t,r,!0,l,n)):(t.tag=0,J&&l&&Wa(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hx(r),e=Ye(r,e),o){case 0:t=Ks(null,t,r,e,n);break e;case 1:t=ku(null,t,r,e,n);break e;case 11:t=wu(null,t,r,e,n);break e;case 14:t=bu(null,t,r,Ye(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),Ks(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),ku(e,t,r,o,n);case 3:e:{if(Zf(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Sf(e,t),Ri(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=rr(Error(P(423)),t),t=ju(e,t,r,n,o);break e}else if(r!==o){o=rr(Error(P(424)),t),t=ju(e,t,r,n,o);break e}else for(Me=_t(t.stateNode.containerInfo.firstChild),Ne=t,J=!0,qe=null,n=$f(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===o){t=vt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Ef(t),e===null&&Us(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,As(r,o)?s=null:l!==null&&As(r,l)&&(t.flags|=32),qf(e,t),ke(e,t,s,n),t.child;case 6:return e===null&&Us(t),null;case 13:return eh(e,t,n);case 4:return Xa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),wu(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,s=o.value,Q(Ii,r._currentValue),r._currentValue=s,l!==null)if(nt(l.value,s)){if(l.children===o.children&&!Le.current){t=vt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=gt(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ws(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ws(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Gn(t,n),o=He(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=Ye(r,t.pendingProps),o=Ye(r.type,o),bu(e,t,r,o,n);case 15:return Jf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),ai(e,t),t.tag=1,Ie(r)?(e=!0,Pi(t)):e=!1,Gn(t,n),Kf(t,r,o),Hs(t,r,o,n),Gs(null,t,r,!0,e,n);case 19:return th(e,t,n);case 22:return Xf(e,t,n)}throw Error(P(156,t.tag))};function xh(e,t){return Wp(e,t)}function fx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new fx(e,t,n,r)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hx(e){if(typeof e=="function")return pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ia)return 11;if(e===za)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function di(e,t,n,r,o,l){var s=2;if(r=e,typeof e=="function")pc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case zn:return dn(n.children,o,l,t);case La:s=8,o|=8;break;case gs:return e=We(12,n,t,o|2),e.elementType=gs,e.lanes=l,e;case ms:return e=We(13,n,t,o),e.elementType=ms,e.lanes=l,e;case xs:return e=We(19,n,t,o),e.elementType=xs,e.lanes=l,e;case Sp:return sl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $p:s=10;break e;case Cp:s=9;break e;case Ia:s=11;break e;case za:s=14;break e;case Tt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=We(s,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function dn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function sl(e,t,n,r){return e=We(22,e,r,t),e.elementType=Sp,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fc(e,t,n,r,o,l,s,a,c){return e=new gx(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=We(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ja(l),e}function mx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yh(e){if(!e)return Gt;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ie(n))return yf(e,n,t)}return t}function vh(e,t,n,r,o,l,s,a,c){return e=fc(n,r,!0,e,o,l,s,a,c),e.context=yh(null),n=e.current,r=je(),o=Wt(n),l=gt(r,o),l.callback=t??null,Bt(n,l,o),e.current.lanes=o,ko(e,o,r),ze(e,r),e}function al(e,t,n,r){var o=t.current,l=je(),s=Wt(o);return n=yh(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,s),e!==null&&(et(e,o,s,l),ii(e,o,s)),s}function Bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){Ru(e,t),(e=e.alternate)&&Ru(e,t)}function xx(){return null}var wh=typeof reportError=="function"?reportError:function(e){console.error(e)};function gc(e){this._internalRoot=e}cl.prototype.render=gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));al(e,t,null,null)};cl.prototype.unmount=gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){al(null,e,null,null)}),t[xt]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&qp(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function yx(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=Bi(s);l.call(d)}}var s=vh(t,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=s,e[xt]=s.current,oo(e.nodeType===8?e.parentNode:e),vn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var d=Bi(c);a.call(d)}}var c=fc(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=c,e[xt]=c.current,oo(e.nodeType===8?e.parentNode:e),vn(function(){al(t,c,n,r)}),c}function dl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var a=o;o=function(){var c=Bi(s);a.call(c)}}al(t,s,e,o)}else s=yx(n,t,e,o,r);return Bi(s)}Gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(Ma(t,n|1),ze(t,oe()),!(F&6)&&(or=oe()+500,qt()))}break;case 13:vn(function(){var r=yt(e,1);if(r!==null){var o=je();et(r,e,1,o)}}),hc(e,1)}};Na=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=je();et(t,e,134217728,n)}hc(e,134217728)}};Yp=function(e){if(e.tag===13){var t=Wt(e),n=yt(e,t);if(n!==null){var r=je();et(n,e,t,r)}hc(e,t)}};Jp=function(){return V};Xp=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Es=function(e,t,n){switch(t){case"input":if(ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=tl(r);if(!o)throw Error(P(90));Pp(r),ws(r,o)}}}break;case"textarea":Lp(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};Ap=cc;Fp=vn;var vx={usingClientEntryPoint:!1,Events:[$o,Nn,tl,Mp,Np,cc]},Sr={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wx={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bp(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{Xi=Vo.inject(wx),st=Vo}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(P(200));return mx(e,t,null,n)};Fe.createRoot=function(e,t){if(!mc(e))throw Error(P(299));var n=!1,r="",o=wh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fc(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,oo(e.nodeType===8?e.parentNode:e),new gc(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Bp(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return vn(e)};Fe.hydrate=function(e,t,n){if(!ul(t))throw Error(P(200));return dl(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!mc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",s=wh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=vh(t,null,e,1,n??null,o,!1,l,s),e[xt]=t.current,oo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cl(t)};Fe.render=function(e,t,n){if(!ul(t))throw Error(P(200));return dl(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!ul(e))throw Error(P(40));return e._reactRootContainer?(vn(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Fe.unstable_batchedUpdates=cc;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ul(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return dl(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function bh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bh)}catch(e){console.error(e)}}bh(),wp.exports=Fe;var kh=wp.exports,jh,Mu=kh;jh=Mu.createRoot,Mu.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(null,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const Nu="popstate";function bx(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:s,hash:a}=r.location;return la("",{pathname:l,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ui(o)}return jx(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kx(){return Math.random().toString(36).substr(2,8)}function Au(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),ho({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gr(t):t,{state:n,key:t&&t.key||r||kx()})}function Ui(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jx(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,s=o.history,a=Mt.Pop,c=null,d=m();d==null&&(d=0,s.replaceState(ho({},s.state,{idx:d}),""));function m(){return(s.state||{idx:null}).idx}function h(){a=Mt.Pop;let S=m(),g=S==null?null:S-d;d=S,c&&c({action:a,location:y.location,delta:g})}function x(S,g){a=Mt.Push;let p=la(y.location,S,g);d=m()+1;let f=Au(p,d),k=y.createHref(p);try{s.pushState(f,"",k)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;o.location.assign(k)}l&&c&&c({action:a,location:y.location,delta:1})}function j(S,g){a=Mt.Replace;let p=la(y.location,S,g);d=m();let f=Au(p,d),k=y.createHref(p);s.replaceState(f,"",k),l&&c&&c({action:a,location:y.location,delta:0})}function b(S){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof S=="string"?S:Ui(S);return p=p.replace(/ $/,"%20"),Z(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return a},get location(){return e(o,s)},listen(S){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Nu,h),c=S,()=>{o.removeEventListener(Nu,h),c=null}},createHref(S){return t(o,S)},createURL:b,encodeLocation(S){let g=b(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:x,replace:j,go(S){return s.go(S)}};return y}var Fu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fu||(Fu={}));function $x(e,t,n){return n===void 0&&(n="/"),Cx(e,t,n)}function Cx(e,t,n,r){let o=typeof t=="string"?gr(t):t,l=ir(o.pathname||"/",n);if(l==null)return null;let s=$h(e);Sx(s);let a=null,c=Ax(l);for(let d=0;a==null&&d<s.length;++d)a=Mx(s[d],c);return a}function $h(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,s,a)=>{let c={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Ht([r,c.relativePath]),m=n.concat(c);l.children&&l.children.length>0&&(Z(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),$h(l.children,t,m,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:Rx(d,l.index),routesMeta:m})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,s);else for(let c of Ch(l.path))o(l,s,c)}),t}function Ch(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let s=Ch(r.join("/")),a=[];return a.push(...s.map(c=>c===""?l:[l,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Sx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ex=/^:[\w-]+$/,Px=3,Tx=2,Lx=1,Ix=10,zx=-2,Ou=e=>e==="*";function Rx(e,t){let n=e.split("/"),r=n.length;return n.some(Ou)&&(r+=zx),t&&(r+=Tx),n.filter(o=>!Ou(o)).reduce((o,l)=>o+(Ex.test(l)?Px:l===""?Lx:Ix),r)}function Dx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Mx(e,t,n){let{routesMeta:r}=e,o={},l="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,m=l==="/"?t:t.slice(l.length)||"/",h=sa({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),x=c.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Ht([l,h.pathname]),pathnameBase:Ux(Ht([l,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(l=Ht([l,h.pathnameBase]))}return s}function sa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Nx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],s=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((d,m,h)=>{let{paramName:x,isOptional:j}=m;if(x==="*"){let y=a[h]||"";s=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const b=a[h];return j&&!b?d[x]=void 0:d[x]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:s,pattern:e}}function Nx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Ax(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ir(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ox=e=>Fx.test(e);function _x(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?gr(e):e,l;if(n)if(Ox(n))l=n;else{if(n.includes("//")){let s=n;n=Sh(n),xc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=_u(n.substring(1),"/"):l=_u(n,t)}else l=t;return{pathname:l,search:Wx(r),hash:Vx(o)}}function _u(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yc(e,t){let n=Bx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=gr(e):(o=ho({},e),Z(!o.pathname||!o.pathname.includes("?"),Xl("?","pathname","search",o)),Z(!o.pathname||!o.pathname.includes("#"),Xl("#","pathname","hash",o)),Z(!o.search||!o.search.includes("#"),Xl("#","search","hash",o)));let l=e===""||o.pathname==="",s=l?"/":o.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),h-=1;o.pathname=x.join("/")}a=h>=0?t[h]:"/"}let c=_x(o,a),d=s&&s!=="/"&&s.endsWith("/"),m=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const Sh=e=>e.replace(/\/\/+/g,"/"),Ht=e=>Sh(e.join("/")),Ux=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Eh=["post","put","patch","delete"];new Set(Eh);const Qx=["get",...Eh];new Set(Qx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(null,arguments)}const pl=v.createContext(null),Ph=v.createContext(null),bt=v.createContext(null),fl=v.createContext(null),kt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Th=v.createContext(null);function Kx(e,t){let{relative:n}=t===void 0?{}:t;mr()||Z(!1);let{basename:r,navigator:o}=v.useContext(bt),{hash:l,pathname:s,search:a}=hl(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Ht([r,s])),o.createHref({pathname:c,search:a,hash:l})}function mr(){return v.useContext(fl)!=null}function rt(){return mr()||Z(!1),v.useContext(fl).location}function Lh(e){v.useContext(bt).static||v.useLayoutEffect(e)}function Cn(){let{isDataRoute:e}=v.useContext(kt);return e?s1():Gx()}function Gx(){mr()||Z(!1);let e=v.useContext(pl),{basename:t,future:n,navigator:r}=v.useContext(bt),{matches:o}=v.useContext(kt),{pathname:l}=rt(),s=JSON.stringify(yc(o,n.v7_relativeSplatPath)),a=v.useRef(!1);return Lh(()=>{a.current=!0}),v.useCallback(function(d,m){if(m===void 0&&(m={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let h=vc(d,JSON.parse(s),l,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ht([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,s,l,e])}function Yx(){let{matches:e}=v.useContext(kt),t=e[e.length-1];return t?t.params:{}}function hl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(bt),{matches:o}=v.useContext(kt),{pathname:l}=rt(),s=JSON.stringify(yc(o,r.v7_relativeSplatPath));return v.useMemo(()=>vc(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function Jx(e,t){return Xx(e,t)}function Xx(e,t,n,r){mr()||Z(!1);let{navigator:o}=v.useContext(bt),{matches:l}=v.useContext(kt),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=rt(),m;if(t){var h;let S=typeof t=="string"?gr(t):t;c==="/"||(h=S.pathname)!=null&&h.startsWith(c)||Z(!1),m=S}else m=d;let x=m.pathname||"/",j=x;if(c!=="/"){let S=c.replace(/^\//,"").split("/");j="/"+x.replace(/^\//,"").split("/").slice(S.length).join("/")}let b=$x(e,{pathname:j}),y=n1(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Ht([c,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Ht([c,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,n,r);return t&&y?v.createElement(fl.Provider,{value:{location:go({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Mt.Pop}},y):y}function qx(){let e=l1(),t=Hx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const Zx=v.createElement(qx,null);class e1 extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(kt.Provider,{value:this.props.routeContext},v.createElement(Th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t1(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(pl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(kt.Provider,{value:t},r)}function n1(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let m=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||Z(!1),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<s.length;m++){let h=s[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:x,errors:j}=n,b=h.route.loader&&x[h.route.id]===void 0&&(!j||j[h.route.id]===void 0);if(h.route.lazy||b){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((m,h,x)=>{let j,b=!1,y=null,S=null;n&&(j=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||Zx,c&&(d<0&&x===0?(a1("route-fallback"),b=!0,S=null):d===x&&(b=!0,S=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,x+1)),p=()=>{let f;return j?f=y:b?f=S:h.route.Component?f=v.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=m,v.createElement(t1,{match:h,routeContext:{outlet:m,matches:g,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?v.createElement(e1,{location:n.location,revalidation:n.revalidation,component:y,error:j,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Ih=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ih||{}),zh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zh||{});function r1(e){let t=v.useContext(pl);return t||Z(!1),t}function o1(e){let t=v.useContext(Ph);return t||Z(!1),t}function i1(e){let t=v.useContext(kt);return t||Z(!1),t}function Rh(e){let t=i1(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function l1(){var e;let t=v.useContext(Th),n=o1(),r=Rh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function s1(){let{router:e}=r1(Ih.UseNavigateStable),t=Rh(zh.UseNavigateStable),n=v.useRef(!1);return Lh(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,go({fromRouteId:t},l)))},[e,t])}const Bu={};function a1(e,t,n){Bu[e]||(Bu[e]=!0)}function c1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function u1(e){let{to:t,replace:n,state:r,relative:o}=e;mr()||Z(!1);let{future:l,static:s}=v.useContext(bt),{matches:a}=v.useContext(kt),{pathname:c}=rt(),d=Cn(),m=vc(t,yc(a,l.v7_relativeSplatPath),c,o==="path"),h=JSON.stringify(m);return v.useEffect(()=>d(JSON.parse(h),{replace:n,state:r,relative:o}),[d,h,o,n,r]),null}function Ln(e){Z(!1)}function d1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Mt.Pop,navigator:l,static:s=!1,future:a}=e;mr()&&Z(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:l,static:s,future:go({v7_relativeSplatPath:!1},a)}),[c,a,l,s]);typeof r=="string"&&(r=gr(r));let{pathname:m="/",search:h="",hash:x="",state:j=null,key:b="default"}=r,y=v.useMemo(()=>{let S=ir(m,c);return S==null?null:{location:{pathname:S,search:h,hash:x,state:j,key:b},navigationType:o}},[c,m,h,x,j,b,o]);return y==null?null:v.createElement(bt.Provider,{value:d},v.createElement(fl.Provider,{children:n,value:y}))}function p1(e){let{children:t,location:n}=e;return Jx(aa(t),n)}new Promise(()=>{});function aa(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let l=[...t,o];if(r.type===v.Fragment){n.push.apply(n,aa(r.props.children,l));return}r.type!==Ln&&Z(!1),!r.props.index||!r.props.children||Z(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=aa(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(null,arguments)}function Dh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function f1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function h1(e,t){return e.button===0&&(!t||t==="_self")&&!f1(e)}function ca(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function g1(e,t){let n=ca(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}const m1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],x1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],y1="6";try{window.__reactRouterVersion=y1}catch{}const v1=v.createContext({isTransitioning:!1}),w1="startTransition",Uu=ug[w1];function b1(e){let{basename:t,children:n,future:r,window:o}=e,l=v.useRef();l.current==null&&(l.current=bx({window:o,v5Compat:!0}));let s=l.current,[a,c]=v.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},m=v.useCallback(h=>{d&&Uu?Uu(()=>c(h)):c(h)},[c,d]);return v.useLayoutEffect(()=>s.listen(m),[s,m]),v.useEffect(()=>c1(r),[r]),v.createElement(d1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const k1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wc=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:s,state:a,target:c,to:d,preventScrollReset:m,viewTransition:h}=t,x=Dh(t,m1),{basename:j}=v.useContext(bt),b,y=!1;if(typeof d=="string"&&j1.test(d)&&(b=d,k1))try{let f=new URL(window.location.href),k=d.startsWith("//")?new URL(f.protocol+d):new URL(d),w=ir(k.pathname,j);k.origin===f.origin&&w!=null?d=w+k.search+k.hash:y=!0}catch{}let S=Kx(d,{relative:o}),g=C1(d,{replace:s,state:a,target:c,preventScrollReset:m,relative:o,viewTransition:h});function p(f){r&&r(f),f.defaultPrevented||g(f)}return v.createElement("a",Wi({},x,{href:b||S,onClick:y||l?r:p,ref:n,target:c}))}),Mh=v.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:l="",end:s=!1,style:a,to:c,viewTransition:d,children:m}=t,h=Dh(t,x1),x=hl(c,{relative:h.relative}),j=rt(),b=v.useContext(Ph),{navigator:y,basename:S}=v.useContext(bt),g=b!=null&&S1(x)&&d===!0,p=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,f=j.pathname,k=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;o||(f=f.toLowerCase(),k=k?k.toLowerCase():null,p=p.toLowerCase()),k&&S&&(k=ir(k,S)||k);const w=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=f===p||!s&&f.startsWith(p)&&f.charAt(w)==="/",C=k!=null&&(k===p||!s&&k.startsWith(p)&&k.charAt(p.length)==="/"),$={isActive:E,isPending:C,isTransitioning:g},z=E?r:void 0,L;typeof l=="function"?L=l($):L=[l,E?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let A=typeof a=="function"?a($):a;return v.createElement(wc,Wi({},h,{"aria-current":z,className:L,ref:n,style:A,to:c,viewTransition:d}),typeof m=="function"?m($):m)});var ua;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ua||(ua={}));var Wu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wu||(Wu={}));function $1(e){let t=v.useContext(pl);return t||Z(!1),t}function C1(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:s,viewTransition:a}=t===void 0?{}:t,c=Cn(),d=rt(),m=hl(e,{relative:s});return v.useCallback(h=>{if(h1(h,n)){h.preventDefault();let x=r!==void 0?r:Ui(d)===Ui(m);c(e,{replace:x,state:o,preventScrollReset:l,relative:s,viewTransition:a})}},[d,c,m,r,o,n,e,l,s,a])}function Nh(e){let t=v.useRef(ca(e)),n=v.useRef(!1),r=rt(),o=v.useMemo(()=>g1(r.search,n.current?null:t.current),[r.search]),l=Cn(),s=v.useCallback((a,c)=>{const d=ca(typeof a=="function"?a(o):a);n.current=!0,l("?"+d,c)},[l,o]);return[o,s]}function S1(e,t){t===void 0&&(t={});let n=v.useContext(v1);n==null&&Z(!1);let{basename:r}=$1(ua.useViewTransitionState),o=hl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=ir(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=ir(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sa(o.pathname,s)!=null||sa(o.pathname,l)!=null}var G="-ms-",Gr="-moz-",B="-webkit-",Ah="comm",gl="rule",bc="decl",E1="@import",P1="@namespace",Fh="@keyframes",T1="@layer",Oh=Math.abs,kc=String.fromCharCode,da=Object.assign;function L1(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function _h(e){return e.trim()}function dt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function pi(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function wn(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function Bh(e){return e.length}function Mr(e,t){return t.push(e),e}function I1(e,t){return e.map(t).join("")}function Vu(e,t){return e.filter(function(n){return!dt(n,t)})}var ml=1,lr=1,Uh=0,Ke=0,le=0,xr="";function xl(e,t,n,r,o,l,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:ml,column:lr,length:s,return:"",siblings:a}}function Pt(e,t){return da(xl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function En(e){for(;e.root;)e=Pt(e.root,{children:[e]});Mr(e,e.siblings)}function z1(){return le}function R1(){return le=Ke>0?ue(xr,--Ke):0,lr--,le===10&&(lr=1,ml--),le}function tt(){return le=Ke<Uh?ue(xr,Ke++):0,lr++,le===10&&(lr=1,ml++),le}function Nt(){return ue(xr,Ke)}function fi(){return Ke}function yl(e,t){return wn(xr,e,t)}function mo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D1(e){return ml=lr=1,Uh=Xe(xr=e),Ke=0,[]}function M1(e){return xr="",e}function ql(e){return _h(yl(Ke-1,pa(e===91?e+2:e===40?e+1:e)))}function N1(e){for(;(le=Nt())&&le<33;)tt();return mo(e)>2||mo(le)>3?"":" "}function A1(e,t){for(;--t&&tt()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return yl(e,fi()+(t<6&&Nt()==32&&tt()==32))}function pa(e){for(;tt();)switch(le){case e:return Ke;case 34:case 39:e!==34&&e!==39&&pa(le);break;case 40:e===41&&pa(e);break;case 92:tt();break}return Ke}function F1(e,t){for(;tt()&&e+le!==57;)if(e+le===84&&Nt()===47)break;return"/*"+yl(t,Ke-1)+"*"+kc(e===47?e:tt())}function O1(e){for(;!mo(Nt());)tt();return yl(e,Ke)}function _1(e){return M1(hi("",null,null,null,[""],e=D1(e),0,[0],e))}function hi(e,t,n,r,o,l,s,a,c){for(var d=0,m=0,h=s,x=0,j=0,b=0,y=1,S=1,g=1,p=0,f="",k=o,w=l,E=r,C=f;S;)switch(b=p,p=tt()){case 40:if(b!=108&&ue(C,h-1)==58){pi(C+=M(ql(p),"&","&\f"),"&\f",Oh(d?a[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=ql(p);break;case 9:case 10:case 13:case 32:C+=N1(b);break;case 92:C+=A1(fi()-1,7);continue;case 47:switch(Nt()){case 42:case 47:Mr(B1(F1(tt(),fi()),t,n,c),c),(mo(b||1)==5||mo(Nt()||1)==5)&&Xe(C)&&wn(C,-1,void 0)!==" "&&(C+=" ");break;default:C+="/"}break;case 123*y:a[d++]=Xe(C)*g;case 125*y:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+m:g==-1&&(C=M(C,/\f/g,"")),j>0&&(Xe(C)-h||y===0&&b===47)&&Mr(j>32?Qu(C+";",r,n,h-1,c):Qu(M(C," ","")+";",r,n,h-2,c),c);break;case 59:C+=";";default:if(Mr(E=Hu(C,t,n,d,m,o,a,f,k=[],w=[],h,l),l),p===123)if(m===0)hi(C,t,E,E,k,l,h,a,w);else{switch(x){case 99:if(ue(C,3)===110)break;case 108:if(ue(C,2)===97)break;default:m=0;case 100:case 109:case 115:}m?hi(e,E,E,r&&Mr(Hu(e,E,E,0,0,o,a,f,o,k=[],h,w),w),o,w,h,a,r?k:w):hi(C,E,E,E,[""],w,0,a,w)}}d=m=j=0,y=g=1,f=C="",h=s;break;case 58:h=1+Xe(C),j=b;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&R1()==125)continue}switch(C+=kc(p),p*y){case 38:g=m>0?1:(C+="\f",-1);break;case 44:a[d++]=(Xe(C)-1)*g,g=1;break;case 64:Nt()===45&&(C+=ql(tt())),x=Nt(),m=h=Xe(f=C+=O1(fi())),p++;break;case 45:b===45&&Xe(C)==2&&(y=0)}}return l}function Hu(e,t,n,r,o,l,s,a,c,d,m,h){for(var x=o-1,j=o===0?l:[""],b=Bh(j),y=0,S=0,g=0;y<r;++y)for(var p=0,f=wn(e,x+1,x=Oh(S=s[y])),k=e;p<b;++p)(k=_h(S>0?j[p]+" "+f:M(f,/&\f/g,j[p])))&&(c[g++]=k);return xl(e,t,n,o===0?gl:a,c,d,m,h)}function B1(e,t,n,r){return xl(e,t,n,Ah,kc(z1()),wn(e,2,-2),0,r)}function Qu(e,t,n,r,o){return xl(e,t,n,bc,wn(e,0,r),wn(e,r+1,-1),r,o)}function Wh(e,t,n){switch(L1(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return B+e+e;case 4855:return B+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Gr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Gr+e+G+e+e;case 5936:switch(ue(e,t+11)){case 114:return B+e+G+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+G+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+G+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+G+e+e;case 6165:return B+e+G+"flex-"+e+e;case 5187:return B+e+M(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return B+e+G+"flex-item-"+M(e,/flex-|-self/g,"")+(dt(e,/flex-|baseline/)?"":G+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return B+e+G+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+G+M(e,"shrink","negative")+e;case 5292:return B+e+G+M(e,"basis","preferred-size")+e;case 6060:return B+"box-"+M(e,"-grow","")+B+e+G+M(e,"grow","positive")+e;case 4554:return B+M(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+G+"flex-pack:$3"),/space-between/,"justify")+B+e+e;case 4200:if(!dt(e,/flex-|baseline/))return G+"grid-column-align"+wn(e,t)+e;break;case 2592:case 3360:return G+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,dt(r.props,/grid-\w+-end/)})?~pi(e+(n=n[t].value),"span",0)?e:G+M(e,"-start","")+e+G+"grid-row-span:"+(~pi(n,"span",0)?dt(n,/\d+/):+dt(n,/\d+/)-+dt(e,/\d+/))+";":G+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return dt(r.props,/grid-\w+-start/)})?e:G+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Gr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pi(e,"stretch",0)?Wh(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,s,a,c,d){return G+o+":"+l+d+(s?G+o+"-span:"+(a?c:+c-+l)+d:"")+e});case 4949:if(ue(e,t+6)===121)return M(e,":",":"+B)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ue(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+G+"$2box$3")+e;case 100:return M(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Vi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function U1(e,t,n,r){switch(e.type){case T1:if(e.children.length)break;case E1:case P1:case bc:return e.return=e.return||e.value;case Ah:return"";case Fh:return e.return=e.value+"{"+Vi(e.children,r)+"}";case gl:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=Vi(e.children,r))?e.return=e.value+"{"+n+"}":""}function W1(e){var t=Bh(e);return function(n,r,o,l){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,l)||"";return s}}function V1(e){return function(t){t.root||(t=t.return)&&e(t)}}function H1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bc:e.return=Wh(e.value,e.length,n);return;case Fh:return Vi([Pt(e,{value:M(e.value,"@","@"+B)})],r);case gl:if(e.length)return I1(n=e.props,function(o){switch(dt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":En(Pt(e,{props:[M(o,/:(read-\w+)/,":"+Gr+"$1")]})),En(Pt(e,{props:[o]})),da(e,{props:Vu(n,r)});break;case"::placeholder":En(Pt(e,{props:[M(o,/:(plac\w+)/,":"+B+"input-$1")]})),En(Pt(e,{props:[M(o,/:(plac\w+)/,":"+Gr+"$1")]})),En(Pt(e,{props:[M(o,/:(plac\w+)/,G+"input-$1")]})),En(Pt(e,{props:[o]})),da(e,{props:Vu(n,r)});break}return""})}}var Jn={},Zl,es;const sr=typeof process<"u"&&Jn!==void 0&&(Jn.REACT_APP_SC_ATTR||Jn.SC_ATTR)||"data-styled",Vh="active",Hh="data-styled-version",vl="6.4.2",jc=`/*!sc*/
`,Yr=typeof window<"u"&&typeof document<"u";function Ku(e){if(typeof process<"u"&&Jn!==void 0){const t=Jn[e];if(t!==void 0&&t!=="")return t!=="false"}}const Q1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(es=(Zl=Ku("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Zl!==void 0?Zl:Ku("SC_DISABLE_SPEEDY"))!==null&&es!==void 0?es:typeof process<"u"&&Jn!==void 0&&!1),K1="sc-keyframes-",G1={};function ar(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let gi=new Map,Hi=new Map,mi=1;const Ho=e=>{if(gi.has(e))return gi.get(e);for(;Hi.has(mi);)mi++;const t=mi++;return gi.set(e,t),Hi.set(t,e),t},Y1=e=>Hi.get(e),J1=(e,t)=>{mi=t+1,gi.set(e,t),Hi.set(t,e)},$c=Object.freeze([]),cr=Object.freeze({});function Qh(e,t,n=cr){return e.theme!==n.theme&&e.theme||t||n.theme}const X1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q1=/(^-|-$)/g;function Kh(e){return e.replace(X1,"-").replace(q1,"")}const Z1=/(a)(d)/gi,Gu=e=>String.fromCharCode(e+(e>25?39:97));function Gh(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Gu(t%52)+n;return(Gu(t%52)+n).replace(Z1,"$1-$2")}const fa=5381,pn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Yh=e=>pn(fa,e);function Jh(e){return Gh(Yh(e)>>>0)}function ey(e){return e.displayName||e.name||"Component"}function ha(e){return typeof e=="string"&&!0}function ty(e){return ha(e)?`styled.${e}`:`Styled(${ey(e)})`}const Xh=Symbol.for("react.memo"),ny=Symbol.for("react.forward_ref"),ry={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},oy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iy={[ny]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Xh]:qh};function Yu(e){return("type"in(t=e)&&t.type.$$typeof)===Xh?qh:"$$typeof"in e?iy[e.$$typeof]:ry;var t}const ly=Object.defineProperty,sy=Object.getOwnPropertyNames,ay=Object.getOwnPropertySymbols,cy=Object.getOwnPropertyDescriptor,uy=Object.getPrototypeOf,dy=Object.prototype;function Zh(e,t,n){if(typeof t!="string"){const r=uy(t);r&&r!==dy&&Zh(e,r,n);const o=sy(t).concat(ay(t)),l=Yu(e),s=Yu(t);for(let a=0;a<o.length;++a){const c=o[a];if(!(c in oy||n&&n[c]||s&&c in s||l&&c in l)){const d=cy(t,c);try{ly(e,c,d)}catch{}}}}return e}function yr(e){return typeof e=="function"}const py=Symbol.for("react.forward_ref");function Cc(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===py&&"styledComponentId"in e}function Nr(e,t){return e&&t?e+" "+t:e||t||""}function ga(e,t){return e.join("")}function xo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ma(e,t,n=!1){if(!n&&!xo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ma(e[r],t[r]);else if(xo(t))for(const r in t)e[r]=ma(e[r],t[r]);return e}function e0(e,t){Object.defineProperty(e,"toString",{value:t})}const fy=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,l=o.length;let s=l;for(;e>=s;)if(s<<=1,s<0)throw ar(16,`${e}`);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(let a=l;a<s;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,l=t.length;o<l;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let l=r;l<o;l++)t+=this.tag.getRule(l)+jc;return t}},hy=`style[${sr}][${Hh}="${vl}"]`,gy=new RegExp(`^${sr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ju=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,xa=e=>{if(!e)return document;if(Ju(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Ju(t))return t}return document},my=(e,t,n)=>{const r=n.split(",");let o;for(let l=0,s=r.length;l<s;l++)(o=r[l])&&e.registerName(t,o)},xy=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(jc),o=[];for(let l=0,s=r.length;l<s;l++){const a=r[l].trim();if(!a)continue;const c=a.match(gy);if(c){const d=0|parseInt(c[1],10),m=c[2];d!==0&&(J1(m,d),my(e,m,c[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(a)}},ts=e=>{const t=xa(e.options.target).querySelectorAll(hy);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(sr)!==Vh&&(xy(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let Er=!1;function yy(){if(Er!==!1)return Er;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Er=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Er=t.getAttribute("content")||void 0}return Er=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const t0=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),l=(c=>{const d=Array.from(c.querySelectorAll(`style[${sr}]`));return d[d.length-1]})(r),s=l!==void 0?l.nextSibling:null;o.setAttribute(sr,Vh),o.setAttribute(Hh,vl);const a=t||yy();return a&&o.setAttribute("nonce",a),r.insertBefore(o,s),o},vy=class{constructor(e,t){this.element=t0(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,s=o.length;l<s;l++){const a=o[l];if(a.ownerNode===n)return a}throw ar(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},wy=class{constructor(e,t){this.element=t0(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Xu=Yr;const by={isServer:!Yr,useCSSOMInjection:!Q1};class So{static registerId(t){return Ho(t)}constructor(t=cr,n={},r){this.options=Object.assign(Object.assign({},by),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Yr&&Xu&&(Xu=!1,ts(this)),e0(this,()=>(o=>{const l=o.getTag(),{length:s}=l;let a="";for(let c=0;c<s;c++){const d=Y1(c);if(d===void 0)continue;const m=o.names.get(d);if(m===void 0||!m.size)continue;const h=l.getGroup(c);if(h.length===0)continue;const x=sr+".g"+c+'[id="'+d+'"]';let j="";for(const b of m)b.length>0&&(j+=b+",");a+=h+x+'{content:"'+j+'"}'+jc}return a})(this))}rehydrate(){!this.server&&Yr&&ts(this)}reconstructWithOptions(t,n=!0){const r=new So(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Yr&&t.target!==this.options.target&&xa(this.options.target)!==xa(t.target)&&ts(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new vy(r,o):new wy(r,o))(this.options),new fy(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Ho(t),t.startsWith(K1)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ho(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Ho(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const n0=new WeakSet,ky={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function jy(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in ky||e.startsWith("--")?String(t).trim():t+"px"}const ln=47;function qu(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const $y=Symbol.for("sc-keyframes");function Cy(e){return typeof e=="object"&&e!==null&&$y in e}function r0(e){return yr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const o0=e=>e==null||e===!1||e==="",Sy=Symbol.for("react.client.reference");function Zu(e){return e.$$typeof===Sy}function i0(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!o0(r)&&(Array.isArray(r)&&n0.has(r)||yr(r)?t.push(qu(n)+":",r,";"):xo(r)?(t.push(n+" {"),i0(r,t),t.push("}")):t.push(qu(n)+": "+jy(n,r)+";"))}}function Qt(e,t,n,r,o=[]){if(o0(e))return o;const l=typeof e;if(l==="string")return o.push(e),o;if(l==="function"){if(Zu(e))return o;if(r0(e)&&t){const s=e(t);return Qt(s,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let s=0;s<e.length;s++)Qt(e[s],t,n,r,o);return o}return Cc(e)?(o.push(`.${e.styledComponentId}`),o):Cy(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):Zu(e)?o:xo(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(i0(e,o),o):(o.push(e.toString()),o)}const Ey=Yh(vl);class Py{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=pn(Ey,n),this.baseStyle=r,So.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let s=0;s<this.rules.length;s++){const a=this.rules[s];if(typeof a=="string")l+=a;else if(a)if(r0(a)){const c=a(t);typeof c=="string"?l+=c:c!=null&&c!==!1&&(l+=ga(Qt(c,t,n,r)))}else l+=ga(Qt(a,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const s=r.hash?r.hash+l:l;let a=this.dynamicNameCache.get(s);if(!a){if(a=Gh(pn(pn(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(s,a)}if(!n.hasNameForId(this.componentId,a)){const c=r(l,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,c)}o=Nr(o,a)}}return o}}const Ty=/&/g;function l0(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ns(e){const t=e.length;let n="",r=0,o=0,l=0,s=!1,a=!1;for(let c=0;c<t;c++){const d=e.charCodeAt(c);if(l!==0||s||d!==ln||e.charCodeAt(c+1)!==42)if(s)d===42&&e.charCodeAt(c+1)===ln&&(s=!1,c++);else if(d!==34&&d!==39||l0(e,c)){if(l===0)if(d===123)o++;else if(d===125){if(o--,o<0){a=!0;let m=c+1;for(;m<t;){const h=e.charCodeAt(m);if(h===59||h===10)break;m++}m<t&&e.charCodeAt(m)===59&&m++,o=0,c=m-1,r=m;continue}o===0&&(n+=e.substring(r,c+1),r=c+1)}else d===59&&o===0&&(n+=e.substring(r,c+1),r=c+1)}else l===0?l=d:l===d&&(l=0);else s=!0,c++}return a||o!==0||l!==0?(r<t&&o===0&&l===0&&(n+=e.substring(r)),n):e}function s0(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const l=e[o];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const s=l.props,a=[];for(let c=0;c<s.length;c++)a[c]=n+s[c];l.props=a}Array.isArray(l.children)&&l.type!=="@keyframes"&&s0(l.children,t)}return e}function Ly({options:e=cr,plugins:t=$c}=cr){let n,r,o;const l=(x,j,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${n}`:x,s=t.slice();s.push(x=>{x.type===gl&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(Ty,r).replace(o,l))}),e.prefix&&s.push(H1),s.push(U1);let a=[];const c=W1(s.concat(V1(x=>a.push(x)))),d=(x,j="",b="",y="&")=>{n=y,r=j,o=void 0;const S=function(p){const f=p.indexOf("//")!==-1,k=p.indexOf("}")!==-1;if(!f&&!k)return p;if(!f)return ns(p);const w=p.length;let E="",C=0,$=0,z=0,L=0,A=0,te=!1;for(;$<w;){const O=p.charCodeAt($);if(O!==34&&O!==39||l0(p,$))if(z===0)if(O===ln&&$+1<w&&p.charCodeAt($+1)===42){for($+=2;$+1<w&&(p.charCodeAt($)!==42||p.charCodeAt($+1)!==ln);)$++;$+=2}else if(O!==40)if(O!==41)if(L>0)$++;else if(O===42&&$+1<w&&p.charCodeAt($+1)===ln)E+=p.substring(C,$),$+=2,C=$,te=!0;else if(O===ln&&$+1<w&&p.charCodeAt($+1)===ln){for(E+=p.substring(C,$);$<w&&p.charCodeAt($)!==10;)$++;C=$,te=!0}else O===123?A++:O===125&&A--,$++;else L>0&&L--,$++;else L++,$++;else $++;else z===0?z=O:z===O&&(z=0),$++}return te?(C<w&&(E+=p.substring(C)),A===0?E:ns(E)):A===0?p:ns(p)}(x);let g=_1(b||j?b+" "+j+" { "+S+" }":S);return e.namespace&&(g=s0(g,e.namespace)),a=[],Vi(g,c),a},m=e;let h=fa;for(let x=0;x<t.length;x++)t[x].name||ar(15),h=pn(h,t[x].name);return m!=null&&m.namespace&&(h=pn(h,m.namespace)),m!=null&&m.prefix&&(h=pn(h,"p")),d.hash=h!==fa?h.toString():"",d}const Iy=new So,zy=Ly(),a0=ve.createContext({shouldForwardProp:void 0,styleSheet:Iy,stylis:zy,stylisPlugins:void 0});a0.Consumer;function c0(){return ve.useContext(a0)}const yo=ve.createContext(void 0);yo.Consumer;function Ry(e){const t=ve.useContext(yo),n=ve.useMemo(()=>function(r,o){if(!r)throw ar(14);if(yr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw ar(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?ve.createElement(yo.Provider,{value:n},e.children):null}const ed=Object.prototype.hasOwnProperty,rs={};function Dy(e,t){const n=typeof e!="string"?"sc":Kh(e);rs[n]=(rs[n]||0)+1;const r=n+"-"+Jh(vl+n+rs[n]);return t?t+"-"+r:r}function My(e,t,n){const r=Cc(e),o=e,l=!ha(e),{attrs:s=$c,componentId:a=Dy(t.displayName,t.parentComponentId),displayName:c=ty(e)}=t,d=t.displayName&&t.componentId?Kh(t.displayName)+"-"+t.componentId:t.componentId||a,m=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){const y=o.shouldForwardProp;if(t.shouldForwardProp){const S=t.shouldForwardProp;h=(g,p)=>y(g,p)&&S(g,p)}else h=y}const x=new Py(n,d,r?o.componentStyle:void 0);function j(y,S){return function(g,p,f){const{attrs:k,componentStyle:w,defaultProps:E,foldedComponentIds:C,styledComponentId:$,target:z}=g,L=ve.useContext(yo),A=c0(),te=g.shouldForwardProp||A.shouldForwardProp,O=Qh(p,L,E)||cr;let Se,Zt;{const R=ve.useRef(null),D=R.current;if(D!==null&&D[1]===O&&D[2]===A.styleSheet&&D[3]===A.stylis&&D[7]===w&&function(H,_,ae){const ne=H,ie=_;let Re=0;for(const _e in ie)if(ed.call(ie,_e)&&(Re++,ne[_e]!==ie[_e]))return!1;return Re===ae}(D[0],p,D[4]))Se=D[5],Zt=D[6];else{Se=function(_,ae,ne){const ie=Object.assign(Object.assign({},ae),{className:void 0,theme:ne}),Re=_.length>1;for(let _e=0;_e<_.length;_e++){const $l=_[_e],Eo=yr($l)?$l(Re?Object.assign({},ie):ie):$l;for(const $t in Eo)$t==="className"?ie.className=Nr(ie.className,Eo[$t]):$t==="style"?ie.style=Object.assign(Object.assign({},ie.style),Eo[$t]):$t in ae&&ae[$t]===void 0||(ie[$t]=Eo[$t])}return"className"in ae&&typeof ae.className=="string"&&(ie.className=Nr(ie.className,ae.className)),ie}(k,p,O),Zt=function(_,ae,ne,ie){return _.generateAndInjectStyles(ae,ne,ie)}(w,Se,A.styleSheet,A.stylis);let H=0;for(const _ in p)ed.call(p,_)&&H++;R.current=[p,O,A.styleSheet,A.stylis,H,Se,Zt,w]}}const jt=Se.as||z,en=function(R,D,H,_){const ae={};for(const ne in R)R[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&R.theme===H||(ne==="forwardedAs"?ae.as=R.forwardedAs:_&&!_(ne,D)||(ae[ne]=R[ne]));return ae}(Se,jt,O,te);let T=Nr(C,$);return Zt&&(T+=" "+Zt),Se.className&&(T+=" "+Se.className),en[ha(jt)&&jt.includes("-")?"class":"className"]=T,f&&(en.ref=f),v.createElement(jt,en)}(b,y,S)}j.displayName=c;let b=ve.forwardRef(j);return b.attrs=m,b.componentStyle=x,b.displayName=c,b.shouldForwardProp=h,b.foldedComponentIds=r?Nr(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?function(S,...g){for(const p of g)ma(S,p,!0);return S}({},o.defaultProps,y):y}}),e0(b,()=>`.${b.styledComponentId}`),l&&Zh(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var Ny=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function td(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const nd=e=>(n0.add(e),e);function u0(e,...t){if(yr(e)||xo(e))return nd(Qt(td($c,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Qt(n):nd(Qt(td(n,t)))}function ya(e,t,n=cr){if(!t)throw ar(1,t);const r=(o,...l)=>e(t,n,u0(o,...l));return r.attrs=o=>ya(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>ya(e,t,Object.assign(Object.assign({},n),o)),r}const d0=e=>ya(My,e),u=d0;Ny.forEach(e=>{u[e]=d0(e)});class Ay{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const l=r[o];if(yr(l)&&!Cc(l))return!1}return!0}(t),So.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(l,a.name,a.rules)}return}const s=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&s){const a=s.rules,c=this.instanceRules.get(t).rules;if(a.length===c.length){let d=!0;for(let m=0;m<a.length;m++)if(a[m]!==c[m]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const l=ga(Qt(this.rules,n,r,o)),s={name:this.componentId+t,rules:o(l,"")};return this.instanceRules.set(t,s),s}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function Fy(e,...t){const n=u0(e,...t),r=`sc-global-${Jh(JSON.stringify(n))}`,o=new Ay(n,r),l=a=>{const c=c0(),d=ve.useContext(yo);let m;{const h=ve.useRef(null);h.current===null&&(h.current=c.styleSheet.allocateGSInstance(r)),m=h.current}c.styleSheet.server&&s(m,a,c.styleSheet,d,c.stylis);{const h=o.isStatic?[m,c.styleSheet,o]:[m,a,c.styleSheet,d,c.stylis,o],x=ve.useRef(o);ve.useLayoutEffect(()=>{c.styleSheet.server||(x.current!==o&&(c.styleSheet.clearRules(r),x.current=o),s(m,a,c.styleSheet,d,c.stylis))},h),ve.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(m,c.styleSheet)},[m,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(m),null};function s(a,c,d,m,h){if(o.isStatic)o.renderStyles(a,G1,d,h);else{const x=Object.assign(Object.assign({},c),{theme:Qh(c,m,l.defaultProps)});o.renderStyles(a,x,d,h)}}return ve.memo(l)}const Oy={colors:{topNavBg:"#1976D2",leftNavBg:"#1E2A3A",subNavBg:"#F0F2F5",blue300:"#0174C3",blue500:"#015A99",blue600:"#004A80",neutral50:"#F9FAFB",neutral100:"#F3F5F5",neutral200:"#E7EBEF",neutral300:"#D6DCE1",neutral400:"#C1C8CD",neutral500:"#757D82",neutral600:"#757D82",neutral700:"#636A6E",neutral800:"#44484A",neutral900:"#353535",white:"#FFFFFF",error:"#DC2626",success:"#27A872",warning:"#F5B517",info:"#0F73FF"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2x":"24px","3x":"28px","4x":"32px","5x":"40px","6x":"48px"},borderRadius:{default:"3px",sm:"2px",md:"4px",lg:"8px"},typography:{fontFamily:"'Roboto', sans-serif",fontMono:"'Roboto Mono', monospace",sizes:{xs:"12px",sm:"13px",base:"14px",md:"16px",lg:"18px",xl:"20px"}},transitions:{default:"all 0.2s ease",panel:"0.2s ease"},breakpoints:{mobile:768,tablet:1024},layout:{topNavHeight:"56px",iconRailWidth:"56px",subNavWidth:"220px"}},rd=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1",fill:t}),i.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1",fill:t})]}),_y=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),By=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),i.jsx("path",{d:"M7 10l2 2 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Uy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"8",y:"1",width:"4",height:"4",rx:"1",fill:t}),i.jsx("rect",{x:"2",y:"13",width:"4",height:"4",rx:"1",fill:t}),i.jsx("rect",{x:"14",y:"13",width:"4",height:"4",rx:"1",fill:t}),i.jsx("path",{d:"M10 5v3M10 8H5v2M10 8h5v2",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Wy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("path",{d:"M16 4v4h-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("path",{d:"M4 16v-4h4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Vy=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Hy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Qy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),i.jsx("path",{d:"M12 2v4h4M7 9h6M7 12h6M7 15h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ky=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"5",y:"1",width:"10",height:"18",rx:"2",stroke:t,strokeWidth:"2"}),i.jsx("circle",{cx:"10",cy:"16",r:"1",fill:t}),i.jsx("line",{x1:"8",y1:"4",x2:"12",y2:"4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),p0=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z",fill:t})}),Wn=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"4",width:"16",height:"12",rx:"2",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M2 6l8 6 8-6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Pr=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h2.382a1 1 0 01.894.553l1.171 2.342a1 1 0 01-.14 1.049L7.38 7.87a10.5 10.5 0 004.75 4.75l1.926-1.427a1 1 0 011.049-.14l2.342 1.171a1 1 0 01.553.894V17.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013 3.5z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Gy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M1 1h3l2.5 9.5h8.5l2-6H5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"8",cy:"16.5",r:"1.5",fill:t}),i.jsx("circle",{cx:"14",cy:"16.5",r:"1.5",fill:t})]}),Yy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("circle",{cx:"10",cy:"14.5",r:"1",fill:t})]}),Jy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"3",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),f0=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("line",{x1:"2",y1:"5",x2:"18",y2:"5",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"10",x2:"18",y2:"10",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"15",x2:"18",y2:"15",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),Qi=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 3L5 8l5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),od=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M6 3l5 5-5 5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),fn=({size:e=14,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 5l4 4 4-4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),h0=({size:e=14,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M3 9l4-4 4 4",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),va=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:t,strokeWidth:"2",strokeLinecap:"round"})}),Xy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"6",cy:"14",r:"3.25",stroke:t,strokeWidth:"2"}),i.jsx("path",{d:"M8.3 11.7L16 4M16 4h-3.5M16 4v3.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Xn=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"14.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("circle",{cx:"10",cy:"6",r:"1.1",fill:t})]}),qy=({size:e=32,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round"})]}),Zy=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"1.6",fill:t}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5"}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(60 10 10)"}),i.jsx("ellipse",{cx:"10",cy:"10",rx:"8",ry:"3.2",stroke:t,strokeWidth:"1.5",transform:"rotate(120 10 10)"})]}),ev=({size:e=32,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"3",y:"7",width:"26",height:"18",rx:"2",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"3",y1:"13",x2:"29",y2:"13",stroke:t,strokeWidth:"1.5"}),i.jsx("line",{x1:"7",y1:"19",x2:"13",y2:"19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),id=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("line",{x1:"2",y1:"8",x2:"14",y2:"8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),Ki=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"3",r:"1.5",fill:t}),i.jsx("circle",{cx:"8",cy:"8",r:"1.5",fill:t}),i.jsx("circle",{cx:"8",cy:"13",r:"1.5",fill:t})]}),tv=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M8 2v8M5 7l3 3 3-3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),nv=({size:e=16,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),ld=({size:e=16,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"8",r:"7",fill:t}),i.jsx("line",{x1:"8",y1:"5",x2:"8",y2:"8.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("circle",{cx:"8",cy:"11",r:"1",fill:"white"})]}),g0=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"2",y:"4",width:"16",height:"14",rx:"2",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M2 9h16",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M6 2v4M14 2v4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),rv=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("path",{d:"M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"8",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"}),i.jsx("circle",{cx:"14",cy:"17",r:"1",stroke:t,strokeWidth:"1.5"})]}),ov=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}),Gi=({size:e=20,color:t="currentColor"})=>i.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:"M11 4h5v5M16 4l-8 8M8 6H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ur=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:t,strokeWidth:"1.5"}),i.jsx("circle",{cx:"10",cy:"10",r:"3.5",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M7.53 7.53 4.05 4.05M12.47 12.47l3.48 3.48M12.47 7.53l3.48-3.48M7.53 12.47l-3.48 3.48",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]}),iv=({size:e=20,color:t="currentColor"})=>i.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[i.jsx("rect",{x:"5",y:"5",width:"10",height:"10",rx:"1",stroke:t,strokeWidth:"1.5"}),i.jsx("rect",{x:"7.5",y:"7.5",width:"5",height:"5",rx:"0.5",stroke:t,strokeWidth:"1.5"}),i.jsx("path",{d:"M8 2v3M12 2v3M8 15v3M12 15v3M2 8h3M2 12h3M15 8h3M15 12h3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]});function bn(e,t=20,n="white"){const r={size:t,color:n};switch(e){case"dashboard":return i.jsx(rd,{...r});case"settings":return i.jsx(_y,{...r});case"shield":return i.jsx(By,{...r});case"hierarchy":return i.jsx(Uy,{...r});case"cycle":return i.jsx(Wy,{...r});case"code":return i.jsx(Vy,{...r});case"globe":return i.jsx(Hy,{...r});case"document":return i.jsx(Qy,{...r});case"mobile":return i.jsx(Ky,{...r});case"sparkle":return i.jsx(p0,{...r});case"envelope":return i.jsx(Wn,{...r});case"key":return i.jsx(Xy,{...r});case"atom":return i.jsx(Zy,{...r});case"chip":return i.jsx(iv,{...r});default:return i.jsx(rd,{...r})}}const m0=[{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview",iconType:"dashboard"},{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central",iconType:"settings"},{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral",iconType:"shield"},{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA",iconType:"hierarchy"},{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle",iconType:"cycle"},{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust",iconType:"code"}],x0=[{id:"dns",label:"DNS",route:"/dns",ariaLabel:"DNS Trust",iconType:"globe"},{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust",iconType:"document"},{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust",iconType:"mobile"},{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail",iconType:"envelope"}],Pn=e=>[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:`/${e}/dashboard`},{label:"Settings",route:`/${e}/settings`}]}],on={dashboard:{id:"dashboard",label:"Overview",route:"/dashboard",ariaLabel:"Overview navigation",sections:[{title:"",items:[{label:"Homepage",route:"/dashboard"},{label:"Value dashboard",route:"/dashboard/value-dashboard"},{label:"Clients tools insights",route:"/dashboard/clients-tools"}]}]},"quantum-central":{id:"quantum-central",label:"Quantum Central",route:"/quantum-central",ariaLabel:"Quantum Central navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/quantum-central/dashboard"},{label:"Settings",route:"/quantum-central/settings"}]}]},certcentral:{id:"certcentral",label:"CertCentral",route:"/certcentral",ariaLabel:"CertCentral navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/certcentral/dashboard"},{label:"Reports",route:"/certcentral/reports"},{label:"Audit logs",route:"/certcentral/audit-logs"}]},{title:"Inventory",items:[{label:"Inventory",route:"/certcentral/inventory"},{label:"Trust store",route:"/certcentral/trust-store"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/certcentral/certificate-profiles"},{label:"Certificate templates",route:"/certcentral/certificate-templates"},{label:"Alert rules",route:"/certcentral/alert-rules"},{label:"Workflow rules",route:"/certcentral/workflow-rules"}]},{title:"Automation",items:[{label:"Agents",route:"/certcentral/agents"},{label:"Sensors",route:"/certcentral/sensors"},{label:"Network scans",route:"/certcentral/network-scans"},{label:"Scripts",route:"/certcentral/scripts"}]},{title:"Integrations",items:[{label:"Connectors",route:"/certcentral/connectors"},{label:"Client tools",route:"/certcentral/client-tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/certcentral/product-settings"},{label:"Alert destinations",route:"/certcentral/alert-destinations"},{label:"Business units",route:"/certcentral/business-units"},{label:"Seats",route:"/certcentral/seats"}]}]},"trust-lifecycle":{id:"trust-lifecycle",label:"Trust Lifecycle",route:"/trust-lifecycle",ariaLabel:"Trust Lifecycle navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/trust-lifecycle/dashboard"},{label:"Alerts",route:"/trust-lifecycle/alerts"},{label:"Reports",route:"/trust-lifecycle/reports"},{label:"Audit logs",route:"/trust-lifecycle/audit-logs"}]},{title:"Release security",items:[{label:"Releases",route:"/trust-lifecycle/releases"},{label:"Threat scanning",route:"/trust-lifecycle/threat-scanning"}]},{title:"Signing",items:[{label:"Keypairs",route:"/trust-lifecycle/keypairs"},{label:"Key rotations",route:"/trust-lifecycle/key-rotations"},{label:"Keypair profiles",route:"/trust-lifecycle/keypair-profiles"},{label:"GPG keypairs",route:"/trust-lifecycle/gpg-keypairs"},{label:"Certificates",route:"/trust-lifecycle/certificates"},{label:"Certificate profiles",route:"/trust-lifecycle/certificate-profiles"},{label:"CertCentral orders",route:"/trust-lifecycle/certcentral-orders"}]},{title:"Integrations",items:[{label:"Connectors",route:"/trust-lifecycle/connectors"},{label:"Tools",route:"/trust-lifecycle/tools"}]},{title:"Configuration",items:[{label:"Product settings",route:"/trust-lifecycle/product-settings"},{label:"Projects",route:"/trust-lifecycle/projects"},{label:"Teams",route:"/trust-lifecycle/teams"},{label:"User groups",route:"/trust-lifecycle/user-groups"}]}]},"private-ca":{id:"private-ca",label:"Private CA",route:"/private-ca",ariaLabel:"Private CA navigation",sections:[{title:"Overview",defaultExpanded:!0,items:[{label:"Dashboard",route:"/private-ca/dashboard"},{label:"Audit logs",route:"/private-ca/audit-logs"}]},{title:"Manage CA",items:[{label:"Roots",route:"/private-ca/roots"},{label:"Intermediates",route:"/private-ca/intermediates"},{label:"Hierarchy",route:"/private-ca/hierarchy"},{label:"End-entity certificates",route:"/private-ca/end-entity-certificates"}]},{title:"Policies",items:[{label:"Certificate profiles",route:"/private-ca/certificate-profiles"},{label:"Certificate templates",route:"/private-ca/certificate-templates"}]},{title:"Revocation & validation",items:[{label:"CRLs",route:"/private-ca/crls"},{label:"OCSPs",route:"/private-ca/ocsps"},{label:"AIAs",route:"/private-ca/aias"}]},{title:"HSM",items:[{label:"Registered partitions",route:"/private-ca/registered-partitions"},{label:"Master escrow keys",route:"/private-ca/master-escrow-keys"},{label:"Providers",route:"/private-ca/providers"},{label:"Remote proxy",route:"/private-ca/remote-proxy"}]},{title:"Configuration",items:[{label:"Product settings",route:"/private-ca/product-settings"},{label:"Accounts",route:"/private-ca/accounts"}]}]},"software-trust":{id:"software-trust",label:"Software Trust",route:"/software-trust",ariaLabel:"Software Trust navigation",sections:Pn("software-trust")},dns:{id:"dns",label:"DNS Trust",route:"/dns",ariaLabel:"DNS Trust navigation",sections:Pn("dns")},"content-trust":{id:"content-trust",label:"Content Trust",route:"/content-trust",ariaLabel:"Content Trust navigation",sections:Pn("content-trust")},"device-trust":{id:"device-trust",label:"Device Trust",route:"/device-trust",ariaLabel:"Device Trust navigation",sections:Pn("device-trust")},"iot-trust":{id:"iot-trust",label:"IoT Trust",route:"/iot-trust",ariaLabel:"IoT Trust navigation",sections:Pn("iot-trust")},valimail:{id:"valimail",label:"Valimail",route:"/valimail",ariaLabel:"Valimail navigation",sections:Pn("valimail")},"settings-users":{id:"settings-users",label:"User management",route:"/settings/users",ariaLabel:"User management navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Users",route:"/settings/users"},{label:"Groups",route:"/settings/users/groups"}]}]},"settings-billing":{id:"settings-billing",label:"Billing and subscriptions",route:"/settings/billing",ariaLabel:"Billing navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My subscriptions",route:"/settings/billing"}]},{title:"Self-service",isSelfService:!0,isNavParent:!0,defaultExpanded:!0,items:[{label:"Receipts and invoices",route:"/settings/billing/receipts"},{label:"Payment details",route:"/settings/billing/payment-details"}]},{title:"DigiCert products",isNavParent:!0,defaultExpanded:!0,items:[{label:"All products",route:"/settings/billing/all-products"},{label:"CertCentral",route:"/certcentral"},{label:"Content Trust",route:"/content-trust"},{label:"Device Trust",route:"/device-trust"},{label:"DigiCert DNS",route:"/dns"},{label:"Private CA",route:"/private-ca"},{label:"Software Trust",route:"/software-trust"},{label:"Trust Lifecycle",route:"/trust-lifecycle"},{label:"Valimail",route:"/valimail"}]}]},"settings-account":{id:"settings-account",label:"Account settings",route:"/settings/account",ariaLabel:"Account settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Account settings",route:"/settings/account"}]}]},"settings-product":{id:"settings-product",label:"Product settings",route:"/settings/product",ariaLabel:"Product settings navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Product settings",route:"/settings/product"}]}]},"settings-integrations":{id:"settings-integrations",label:"Integrations",route:"/settings/integrations",ariaLabel:"Integrations navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Integrations",route:"/settings/integrations"}]}]},"settings-api":{id:"settings-api",label:"API access",route:"/settings/api",ariaLabel:"API access navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"API access",route:"/settings/api"}]}]},"settings-audit-logs":{id:"settings-audit-logs",label:"Audit logs",route:"/settings/audit-logs",ariaLabel:"Audit logs navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"Audit logs",route:"/settings/audit-logs"}]}]},profile:{id:"profile",label:"My profile",route:"/profile",ariaLabel:"Profile navigation",sections:[{title:"",defaultExpanded:!0,items:[{label:"My profile",route:"/profile"}]}]}},lv={"/":"Home","/dashboard":"Homepage","/dashboard/value-dashboard":"Value dashboard","/dashboard/clients-tools":"Clients tools insights","/quantum-central":"Quantum Central","/quantum-central/dashboard":"Dashboard","/quantum-central/settings":"Settings","/certcentral":"CertCentral","/certcentral/dashboard":"Dashboard","/certcentral/reports":"Reports","/certcentral/audit-logs":"Audit logs","/certcentral/inventory":"Inventory","/certcentral/trust-store":"Trust store","/certcentral/certificate-profiles":"Certificate profiles","/certcentral/certificate-templates":"Certificate templates","/certcentral/alert-rules":"Alert rules","/certcentral/workflow-rules":"Workflow rules","/certcentral/agents":"Agents","/certcentral/sensors":"Sensors","/certcentral/network-scans":"Network scans","/certcentral/scripts":"Scripts","/certcentral/connectors":"Connectors","/certcentral/client-tools":"Client tools","/certcentral/product-settings":"Product settings","/certcentral/alert-destinations":"Alert destinations","/certcentral/business-units":"Business units","/certcentral/seats":"Seats","/trust-lifecycle":"Trust Lifecycle","/trust-lifecycle/dashboard":"Dashboard","/trust-lifecycle/alerts":"Alerts","/trust-lifecycle/reports":"Reports","/trust-lifecycle/audit-logs":"Audit logs","/trust-lifecycle/releases":"Releases","/trust-lifecycle/threat-scanning":"Threat scanning","/trust-lifecycle/keypairs":"Keypairs","/trust-lifecycle/key-rotations":"Key rotations","/trust-lifecycle/keypair-profiles":"Keypair profiles","/trust-lifecycle/gpg-keypairs":"GPG keypairs","/trust-lifecycle/certificates":"Certificates","/trust-lifecycle/certificate-profiles":"Certificate profiles","/trust-lifecycle/certcentral-orders":"CertCentral orders","/trust-lifecycle/connectors":"Connectors","/trust-lifecycle/tools":"Tools","/trust-lifecycle/product-settings":"Product settings","/trust-lifecycle/projects":"Projects","/trust-lifecycle/teams":"Teams","/trust-lifecycle/user-groups":"User groups","/private-ca":"Private CA","/private-ca/dashboard":"Dashboard","/private-ca/audit-logs":"Audit logs","/private-ca/roots":"Roots","/private-ca/intermediates":"Intermediates","/private-ca/hierarchy":"Hierarchy","/private-ca/end-entity-certificates":"End-entity certificates","/private-ca/certificate-profiles":"Certificate profiles","/private-ca/certificate-templates":"Certificate templates","/private-ca/crls":"CRLs","/private-ca/ocsps":"OCSPs","/private-ca/aias":"AIAs","/private-ca/registered-partitions":"Registered partitions","/private-ca/master-escrow-keys":"Master escrow keys","/private-ca/providers":"Providers","/private-ca/remote-proxy":"Remote proxy","/private-ca/product-settings":"Product settings","/private-ca/accounts":"Accounts","/software-trust":"Software Trust","/software-trust/dashboard":"Dashboard","/dns":"DNS Trust","/dns/dashboard":"Dashboard","/dns/settings":"Settings","/content-trust":"Content Trust","/content-trust/dashboard":"Dashboard","/content-trust/settings":"Settings","/device-trust":"Device Trust","/device-trust/dashboard":"Dashboard","/device-trust/settings":"Settings","/iot-trust":"IoT Trust","/iot-trust/dashboard":"Dashboard","/iot-trust/settings":"Settings","/valimail":"Valimail","/valimail/dashboard":"Dashboard","/valimail/settings":"Settings","/settings":"Settings","/settings/users":"Users","/settings/users/groups":"Groups","/settings/billing":"My subscriptions","/settings/billing/receipts":"Receipts","/settings/billing/payment-details":"Payment details","/settings/billing/all-products":"Explore DigiCert products","/settings/account":"Account settings","/settings/product":"Product settings","/settings/integrations":"Integrations","/settings/api":"API access","/settings/audit-logs":"Audit logs","/profile":"My profile"},sv=[{label:"User management",route:"/settings/users",productId:"settings-users"},{label:"Billing and subscriptions",route:"/settings/billing",productId:"settings-billing"},{label:"Account settings",route:"/settings/account",productId:"settings-account"},{label:"Product settings",route:"/settings/product",productId:"settings-product"}],av=[{label:"Integrations",route:"/settings/integrations",productId:"settings-integrations"},{label:"API access",route:"/settings/api",productId:"settings-api"},{label:"Audit logs",route:"/settings/audit-logs",productId:"settings-audit-logs"}],cv=[{label:"Documentation",href:"#"},{label:"Contact support",href:"#"},{label:"Video tutorials",href:"#"},{label:"Release notes",href:"#"},{label:"Community forum",href:"#"}],uv=["/","/dashboard","/dashboard/value-dashboard","/dashboard/clients-tools","/quantum-central","/quantum-central/dashboard","/quantum-central/settings","/certcentral","/certcentral/dashboard","/certcentral/reports","/certcentral/audit-logs","/certcentral/inventory","/certcentral/trust-store","/certcentral/certificate-profiles","/certcentral/certificate-templates","/certcentral/alert-rules","/certcentral/workflow-rules","/certcentral/agents","/certcentral/sensors","/certcentral/network-scans","/certcentral/scripts","/certcentral/connectors","/certcentral/client-tools","/certcentral/product-settings","/certcentral/alert-destinations","/certcentral/business-units","/certcentral/seats","/trust-lifecycle","/trust-lifecycle/dashboard","/trust-lifecycle/alerts","/trust-lifecycle/reports","/trust-lifecycle/audit-logs","/trust-lifecycle/releases","/trust-lifecycle/threat-scanning","/trust-lifecycle/keypairs","/trust-lifecycle/key-rotations","/trust-lifecycle/keypair-profiles","/trust-lifecycle/gpg-keypairs","/trust-lifecycle/certificates","/trust-lifecycle/certificate-profiles","/trust-lifecycle/certcentral-orders","/trust-lifecycle/connectors","/trust-lifecycle/tools","/trust-lifecycle/product-settings","/trust-lifecycle/projects","/trust-lifecycle/teams","/trust-lifecycle/user-groups","/private-ca","/private-ca/dashboard","/private-ca/audit-logs","/private-ca/roots","/private-ca/intermediates","/private-ca/hierarchy","/private-ca/end-entity-certificates","/private-ca/certificate-profiles","/private-ca/certificate-templates","/private-ca/crls","/private-ca/ocsps","/private-ca/aias","/private-ca/registered-partitions","/private-ca/master-escrow-keys","/private-ca/providers","/private-ca/remote-proxy","/private-ca/product-settings","/private-ca/accounts","/software-trust","/software-trust/dashboard","/dns","/dns/dashboard","/dns/settings","/content-trust","/content-trust/dashboard","/content-trust/settings","/device-trust","/device-trust/dashboard","/device-trust/settings","/iot-trust","/iot-trust/dashboard","/iot-trust/settings","/valimail","/valimail/dashboard","/valimail/settings","/settings/users","/settings/users/groups","/settings/billing","/settings/billing/receipts","/settings/billing/payment-details","/settings/billing/all-products","/settings/account","/settings/product","/settings/integrations","/settings/api","/settings/audit-logs","/profile"],dv=u.div`
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
`,pv=u.div`
  padding: 12px 16px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.neutral900};
`,sd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,ad=u.a`
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
`;function fv({onClose:e,onSelectProduct:t}){const n=Cn(),r=o=>{t(o.productId),n(o.route),e()};return i.jsxs(dv,{role:"menu","aria-label":"Settings menu",children:[i.jsx(pv,{children:"Settings"}),i.jsx(sd,{}),sv.map(o=>i.jsx(ad,{href:o.route,role:"menuitem",onClick:l=>{l.preventDefault(),r(o)},children:o.label},o.route)),i.jsx(sd,{}),av.map(o=>i.jsx(ad,{href:o.route,role:"menuitem",onClick:l=>{l.preventDefault(),r(o)},children:o.label},o.route))]})}const hv=u.div`
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
  padding: 4px 0;
`,mv=u.a`
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
`;function xv({onClose:e}){return i.jsx(hv,{role:"menu","aria-label":"Help menu",children:i.jsx(gv,{children:cv.map(t=>i.jsx(mv,{href:t.href,role:"menuitem",onClick:e,children:t.label},t.label))})})}const yv=u.div`
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
`,vv=u.div`
  padding: 12px 16px;
`,wv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,bv=u.div`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,cd=u.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin: 0;
`,kv=u.div`
  padding: 4px 0;
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

  &[data-destructive='true'] {
    color: ${({theme:e})=>e.colors.error};
    &:hover {
      background: #FEF2F2;
      color: ${({theme:e})=>e.colors.error};
    }
  }
`;function jv({onClose:e,onSelectProduct:t}){const n=Cn(),r=o=>{o.preventDefault(),t("profile"),n("/profile"),e()};return i.jsxs(yv,{role:"menu","aria-label":"User profile menu",children:[i.jsxs(vv,{children:[i.jsx(wv,{children:"Deepika Chauhan"}),i.jsx(bv,{children:"deepika.chauhan@digicert.com"})]}),i.jsx(cd,{}),i.jsxs(kv,{children:[i.jsx(ud,{href:"/profile",role:"menuitem",onClick:r,children:"My profile"}),i.jsx(cd,{}),i.jsx(ud,{href:"#",role:"menuitem","data-destructive":"true",onClick:e,children:"Sign out"})]})]})}const $v=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,Cv=u.div`
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
`,Sv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Ev=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,Pv=u.button`
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
`,Tv=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  gap: 16px;
`,Lv=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`,Iv=u.button`
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
`;function zv({open:e,onClose:t}){const n=v.useRef(null),r=v.useRef(null);return v.useEffect(()=>{var l;if(!e)return;(l=n.current)==null||l.focus();const o=s=>{if(s.key==="Escape"){t();return}if(s.key!=="Tab")return;const a=r.current;if(!a)return;const c=a.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),d=c[0],m=c[c.length-1];s.shiftKey&&document.activeElement===d?(s.preventDefault(),m.focus()):!s.shiftKey&&document.activeElement===m&&(s.preventDefault(),d.focus())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),i.jsxs(i.Fragment,{children:[i.jsx($v,{$open:e,onClick:t,"aria-hidden":"true"}),i.jsxs(Cv,{$open:e,ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cart-heading","aria-hidden":!e,children:[i.jsxs(Sv,{children:[i.jsx(Ev,{id:"cart-heading",children:"Cart"}),i.jsx(Pv,{ref:n,onClick:t,"aria-label":"Close cart",children:"×"})]}),i.jsxs(Tv,{children:[i.jsx(Lv,{children:"Your cart is empty."}),i.jsx(Iv,{onClick:t,children:"Continue shopping"})]})]})]})}const Rv=u.div`
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
`,Dv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,Mv=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Nv=u.button`
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
`,Av=u.div`
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
`,Ov=u.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`,_v=u.input`
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
`,Bv=u.button`
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
`;function Uv({open:e,onClose:t}){const n=v.useRef(null);return v.useEffect(()=>{const r=o=>{o.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),i.jsxs(Rv,{$open:e,ref:n,role:"complementary","aria-label":"AI Assist panel","aria-hidden":!e,children:[i.jsxs(Dv,{children:[i.jsx(Mv,{children:"AI Assist"}),i.jsx(Nv,{onClick:t,"aria-label":"Close AI Assist",children:"×"})]}),i.jsxs(Av,{children:[i.jsx(Fv,{children:"How can I help you today?"}),i.jsxs(Ov,{children:[i.jsx(_v,{type:"text",placeholder:"Ask anything...","aria-label":"Ask AI Assist"}),i.jsx(Bv,{"aria-label":"AI Assist send",children:"Send"})]})]})]})}const Wv=u.header`
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
`,Vv=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Hv=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Qv=u.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`,Kv=u.span`
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
`,Gv=u.span`
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
`,Yv=u.button`
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
`,Qo=u.div`
  position: relative;
  display: flex;
  align-items: center;
`,Jv=u.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;function Xv({isDrawerOpen:e,onToggleDrawer:t,activeTopNav:n,onOpenTopNav:r,onCloseTopNav:o,onSelectProduct:l,cartCount:s=3}){const a=n==="settings"||n==="help"||n==="profile";return i.jsxs(i.Fragment,{children:[i.jsxs(Wv,{role:"banner",children:[i.jsxs(Vv,{children:[i.jsx(Qv,{children:i.jsx(Tr,{"aria-label":"Open navigation menu","aria-expanded":e,"aria-controls":"nav-drawer",onClick:t,children:i.jsx(f0,{size:20})})}),i.jsxs(Kv,{"aria-label":"DigiCert ONE",children:[i.jsx("span",{className:"logo-normal",children:"digicert "}),i.jsx("span",{className:"logo-bold",children:"ONE"})]})]}),i.jsxs(Hv,{children:[i.jsx(Qo,{children:i.jsxs(Tr,{"aria-label":"Open cart","aria-expanded":n==="cart","aria-haspopup":"dialog",onClick:()=>r("cart"),children:[i.jsx(Gy,{size:20}),s>0&&i.jsx(Gv,{"aria-hidden":"true",children:s})]})}),i.jsxs(Qo,{children:[i.jsx(Tr,{"aria-label":"Settings","aria-expanded":n==="settings","aria-haspopup":"menu",onClick:()=>r("settings"),children:i.jsx(Jy,{size:20})}),n==="settings"&&i.jsx(fv,{onClose:o,onSelectProduct:l})]}),i.jsxs(Qo,{children:[i.jsx(Tr,{"aria-label":"Help","aria-expanded":n==="help","aria-haspopup":"menu",onClick:()=>r("help"),children:i.jsx(Yy,{size:20})}),n==="help"&&i.jsx(xv,{onClose:o})]}),i.jsx(Tr,{"aria-label":"Open AI Assist","aria-expanded":n==="ai-assist",onClick:()=>r("ai-assist"),children:i.jsx(p0,{size:20})}),i.jsxs(Qo,{children:[i.jsx(Yv,{"aria-label":"User profile","aria-expanded":n==="profile","aria-haspopup":"menu",onClick:()=>r("profile"),children:"D"}),n==="profile"&&i.jsx(jv,{onClose:o,onSelectProduct:l})]})]})]}),a&&i.jsx(Jv,{onClick:o,"aria-hidden":"true"}),i.jsx(zv,{open:n==="cart",onClose:o}),i.jsx(Uv,{open:n==="ai-assist",onClose:o})]})}const qv=u.nav`
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
`,dd=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Zv=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`,ew=u.button`
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
`,tw=u.span`
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
`,nw=350;function pd({product:e,isActive:t,onSelect:n}){const r=Cn(),o=v.useRef(null),l=v.useRef(null),[s,a]=v.useState({visible:!1,y:0});v.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]);const c=()=>{var b;const j=(b=o.current)==null?void 0:b.getBoundingClientRect();return j?j.top+j.height/2:0},d=j=>{l.current&&(clearTimeout(l.current),l.current=null),j?a({visible:!0,y:c()}):l.current=setTimeout(()=>a({visible:!0,y:c()}),nw)},m=()=>{l.current&&(clearTimeout(l.current),l.current=null),a(j=>({...j,visible:!1}))},h=()=>{m(),n(e.id),r(e.route)},x=j=>{if(j.key==="Escape"){m();return}(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),h())};return i.jsxs(i.Fragment,{children:[i.jsx(ew,{ref:o,$active:t,onClick:h,onKeyDown:x,onMouseEnter:()=>d(!1),onMouseLeave:m,onFocus:()=>d(!0),onBlur:m,"aria-label":e.ariaLabel,"aria-current":t?"page":void 0,children:bn(e.iconType,20,t?"#111827":"#6B7280")}),kh.createPortal(i.jsx(tw,{$visible:s.visible,style:{top:`${s.y}px`},role:"tooltip","aria-hidden":"true",children:e.label}),document.body)]})}function rw({activeProductId:e,onSelectProduct:t}){return i.jsxs(qv,{"aria-label":"Product navigation",children:[i.jsx(dd,{children:m0.map(n=>i.jsx(pd,{product:n,isActive:e===n.id,onSelect:t},n.id))}),i.jsx(Zv,{}),i.jsx(dd,{children:x0.map(n=>i.jsx(pd,{product:n,isActive:e===n.id,onSelect:t},n.id))})]})}const ow=u.div`
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
`,iw=u.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral300};
`,lw=u.div`
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
`,sw=u.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral300};
  flex-shrink: 0;
`,aw=u.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0;
`,cw=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: 2px;
  }
`,uw=u.button`
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
`,dw=u.div`
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
`,pw=u.div`
  margin-bottom: 2px;
`,fw=u.button`
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
`,hw=u.div`
  overflow: hidden;
  max-height: ${({$open:e})=>e?"800px":"0"};
  transition: max-height 0.2s ease;
`,gw=u(Mh)`
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
`;function mw({section:e,index:t}){const[n,r]=v.useState(e.defaultExpanded??t===0),o=rt(),l=!!e.title,s=!!e.isNavParent,a=`nav-section-${(e.title||String(t)).replace(/\s+/g,"-").toLowerCase()}`;return i.jsxs(pw,{children:[i.jsxs(fw,{$hasTitle:l,$isNavParent:s,onClick:()=>r(c=>!c),"aria-expanded":n,"aria-controls":a,children:[i.jsx("span",{children:e.title}),n?i.jsx(h0,{size:12,color:"currentColor"}):i.jsx(fn,{size:12,color:"currentColor"})]}),i.jsx(hw,{id:a,$open:n||!l,children:e.items.map(c=>i.jsx(gw,{to:c.route,end:!0,$indent:s,"aria-current":o.pathname===c.route?"page":void 0,children:c.label},c.route))})]})}function xw({activeProductId:e,isSpokeOpen:t,onToggleSpoke:n,billingScenario:r}){let o=on[e];return e==="settings-billing"&&r==="enterprise"&&(o={...o,sections:o.sections.filter(l=>!l.isSelfService)}),v.useEffect(()=>{const l=s=>{s.key==="Escape"&&t&&n()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[t,n]),i.jsxs(i.Fragment,{children:[i.jsx(dw,{$visible:t,onClick:n,"aria-hidden":"true"}),i.jsxs(ow,{$open:t,id:"spoke-panel","aria-hidden":!t,children:[i.jsx(iw,{children:i.jsx(lw,{$open:t,children:o&&i.jsxs(i.Fragment,{children:[i.jsx(sw,{children:i.jsx(aw,{children:o.label})}),i.jsx(cw,{children:i.jsx("nav",{"aria-label":"Product navigation",children:o.sections.map((l,s)=>i.jsx(mw,{section:l,index:s},l.title||s))})})]})})}),i.jsx(uw,{$open:t,onClick:n,"aria-label":"Toggle product navigation","aria-expanded":t,"aria-controls":"spoke-panel",children:i.jsx(Qi,{size:14,color:"currentColor"})})]})]})}const yw=u.div`
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
`,vw=u.div`
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
`,ww=u.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({$offset:e})=>e}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`,fd=u.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`,hd=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`,gd=u.span`
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
`,md=u.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`,xd=u.div`
  display: flex;
  flex-direction: column;
`,bw=u.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`,yd=u.button`
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
`,vd=u.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,kw=u.div`
  padding: 10px 16px 4px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,jw=u(Mh)`
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
`;function $w({open:e,activeProductId:t,onSelectProduct:n,onClose:r}){const o=Cn(),l=rt(),s=v.useRef(null),a=v.useRef(null),[c,d]=v.useState("l1"),[m,h]=v.useState(null),x=v.useRef(0),j=v.useRef(0);v.useEffect(()=>{e||(d("l1"),h(null))},[e]),v.useEffect(()=>{const w=s.current;w&&(e?w.removeAttribute("inert"):w.setAttribute("inert",""))},[e]),v.useEffect(()=>{if(!e)return;const w=setTimeout(()=>{var E,C;(C=(E=s.current)==null?void 0:E.querySelector("button"))==null||C.focus()},50);return()=>clearTimeout(w)},[e]),v.useEffect(()=>{if(!e)return;const w=E=>{if(E.key==="Escape"){r();return}if(E.key!=="Tab")return;const C=s.current;if(!C)return;const $=C.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'),z=$[0],L=$[$.length-1];E.shiftKey&&document.activeElement===z?(E.preventDefault(),L.focus()):!E.shiftKey&&document.activeElement===L&&(E.preventDefault(),z.focus())};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[e,r]);const b=w=>{h(w),d("l2"),setTimeout(()=>{var E;(E=a.current)==null||E.focus()},50)},y=()=>{d("l1")},S=w=>{!!on[w.id]?b(w.id):(n(w.id),o(w.route),r())},g=()=>{r()},p=w=>{x.current=w.touches[0].clientX,j.current=w.touches[0].clientY},f=w=>{const E=w.changedTouches[0].clientX-x.current,C=Math.abs(w.changedTouches[0].clientY-j.current);E<-80&&C<60&&r()},k=m?on[m]:null;return i.jsxs(i.Fragment,{children:[i.jsx(yw,{$open:e,onClick:r,"aria-hidden":"true"}),i.jsx(vw,{$open:e,ref:s,id:"nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Navigation menu","aria-hidden":!e,onTouchStart:p,onTouchEnd:f,children:i.jsxs(ww,{$offset:c==="l1"?0:-50,children:[i.jsxs(fd,{"aria-hidden":c!=="l1",children:[i.jsxs(hd,{children:[i.jsx(gd,{children:"Navigation"}),i.jsx(os,{onClick:r,"aria-label":"Close menu",children:i.jsx(va,{size:16,color:"currentColor"})})]}),i.jsx(md,{children:i.jsxs("nav",{"aria-label":"Product list",children:[i.jsx(xd,{children:m0.map(w=>i.jsxs(yd,{$active:t===w.id,onClick:()=>S(w),"aria-current":t===w.id?"page":void 0,"aria-haspopup":on[w.id]?"menu":void 0,children:[bn(w.iconType,18,t===w.id?"#1976D2":"#6B7280"),i.jsx(vd,{children:w.label}),on[w.id]&&i.jsx(od,{size:14,color:t===w.id?"#1976D2":"#9CA3AF"})]},w.id))}),i.jsx(bw,{}),i.jsx(xd,{children:x0.map(w=>i.jsxs(yd,{$active:t===w.id,onClick:()=>S(w),"aria-current":t===w.id?"page":void 0,"aria-haspopup":on[w.id]?"menu":void 0,children:[bn(w.iconType,18,t===w.id?"#1976D2":"#6B7280"),i.jsx(vd,{children:w.label}),on[w.id]&&i.jsx(od,{size:14,color:t===w.id?"#1976D2":"#9CA3AF"})]},w.id))})]})})]}),i.jsxs(fd,{ref:a,"aria-hidden":c!=="l2",children:[i.jsxs(hd,{children:[i.jsx(os,{onClick:y,"aria-label":"Back to menu",children:i.jsx(Qi,{size:16,color:"currentColor"})}),i.jsx(gd,{children:(k==null?void 0:k.label)??""}),i.jsx(os,{onClick:r,"aria-label":"Close menu",children:i.jsx(va,{size:16,color:"currentColor"})})]}),i.jsx(md,{children:k&&i.jsx("nav",{"aria-label":`${k.label} navigation`,children:k.sections.map((w,E)=>i.jsxs("div",{children:[w.title&&i.jsx(kw,{children:w.title}),w.items.map(C=>i.jsx(jw,{to:C.route,end:!0,"aria-current":l.pathname===C.route?"page":void 0,onClick:g,children:C.label},C.route))]},w.title||E))})})]})]})})]})}const Cw=u.main`
  padding: 32px;
  min-height: calc(100vh - ${({theme:e})=>e.layout.topNavHeight});
  background: ${({theme:e})=>e.colors.white};
`,Sw=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,Ew=u.div``,Pw=u.h1`
  margin: 0 0 6px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.neutral900};
`,Tw=u.p`
  margin: 0;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Lw=u.button`
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
`,Iw=u.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`,zw=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,Rw=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 20px 24px;
`,Dw=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`,Mw=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Nw=u.div`
  min-width: 0;
`,Aw=u.h3`
  margin: 0 0 3px;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 600;
`,Fw=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Ow=u.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,_w=u.a`
  display: block;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,Bw=u.div`
  display: grid;
  gap: 16px;
`,Uw=u.article`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Ww=u.div`
  width: 100%;
  min-height: 180px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
`,Vw=u.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`,Hw=u.div`
  padding: 16px 20px 20px;
`,Qw=u.div`
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
`,Kw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
  margin-bottom: 10px;
`,Gw=u.h3`
  margin: 0 0 8px;
  font-size: 17px;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,Yw=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Jw=u.a`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;

  &:hover { text-decoration: underline; }
`,Xw=u.article`
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,qw=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,Zw=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(0, 155, 135, 0.45);
  color: #007B6E;
  letter-spacing: 0.02em;
`,e2=u.button`
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
`,t2=u.h3`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral900};
  font-weight: 500;
`,n2=u.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.neutral700};
`,r2=u.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,o2=[{title:"Trust Lifecycle",subtitle:"Certificate management",iconType:"cycle",actions:[{label:"Set up alerts",href:"/trust-lifecycle/alerts"},{label:"Discover certificates",href:"/trust-lifecycle/dashboard"},{label:"Automate certificate lifecycle",href:"/trust-lifecycle/tools"}]},{title:"Valimail",subtitle:"Email authentication",iconType:"envelope",actions:[{label:"Review DMARC status",href:"/valimail/dashboard"},{label:"Manage sender sources",href:"/valimail/dashboard"},{label:"Monitor domains",href:"/valimail/dashboard"},{label:"Investigate spoofing risks",href:"/valimail/dashboard"}]},{title:"Quantum Central",subtitle:"Post-quantum readiness",iconType:"settings",actions:[{label:"Assess cryptographic risk",href:"/quantum-central/dashboard"},{label:"Review PQC readiness",href:"/quantum-central/dashboard"},{label:"View algorithm inventory",href:"/quantum-central/dashboard"},{label:"Track remediation",href:"/quantum-central/dashboard"}]},{title:"AI Agents",subtitle:"AI identity & governance",iconType:"sparkle",actions:[{label:"Register agents",href:"/ai-agents/dashboard"},{label:"Manage agent identities",href:"/ai-agents/dashboard"},{label:"Review agent activity",href:"/ai-agents/dashboard"},{label:"Configure trust policies",href:"/ai-agents/dashboard"}]},{title:"Device Trust",subtitle:"IoT device security",iconType:"mobile",actions:[{label:"Register devices",href:"/device-trust/dashboard"},{label:"Manage device identities",href:"/device-trust/dashboard"},{label:"Configure device policies",href:"/device-trust/dashboard"},{label:"Review device lifecycle",href:"/device-trust/dashboard"}]},{title:"Private CA",subtitle:"Internal PKI",iconType:"hierarchy",actions:[{label:"Issue internal certificate",href:"/private-ca/dashboard"},{label:"Create issuing CA",href:"/private-ca/dashboard"},{label:"Manage certificate profiles",href:"/private-ca/certificate-profiles"},{label:"Configure OCSP",href:"/private-ca/ocsps"}]},{title:"Software Trust",subtitle:"Code signing",iconType:"code",actions:[{label:"Manage signing keys",href:"/software-trust/dashboard"},{label:"Configure signing policies",href:"/software-trust/dashboard"},{label:"Sign software",href:"/software-trust/dashboard"},{label:"Generate SBOM",href:"/software-trust/dashboard"}]},{title:"DNS Trust",subtitle:"DNS management",iconType:"globe",actions:[{label:"Manage zones",href:"/dns/dashboard"},{label:"Update DNS records",href:"/dns/dashboard"},{label:"Configure traffic steering",href:"/dns/dashboard"},{label:"Review DNSSEC settings",href:"/dns/dashboard"}]},{title:"Content Trust",subtitle:"Document & content signing",iconType:"document",actions:[{label:"Manage signing credentials",href:"/content-trust/dashboard"},{label:"Verify signed content",href:"/content-trust/dashboard"},{label:"Review signing activity",href:"/content-trust/dashboard"},{label:"Configure seal policies",href:"/content-trust/dashboard"}]},{title:"CertCentral",subtitle:"Public certificates",iconType:"shield",actions:[{label:"Order public certificate",href:"/certcentral/dashboard"},{label:"Validate domains",href:"/certcentral/dashboard"},{label:"Manage organizations",href:"/certcentral/dashboard"},{label:"Expiring certificates",href:"/certcentral/inventory"}]}];function i2(){const[e,t]=v.useState(!1);return i.jsxs(Cw,{children:[i.jsxs(Sw,{children:[i.jsxs(Ew,{children:[i.jsx(Pw,{children:"Hello, John"}),i.jsx(Tw,{children:"Access your DigiCert trust solutions and discover what's new"})]}),i.jsx(Lw,{"aria-label":"Page settings",children:i.jsx(f0,{size:18,color:"currentColor"})})]}),i.jsxs(Iw,{children:[i.jsx(zw,{children:o2.map(n=>i.jsxs(Rw,{children:[i.jsxs(Dw,{children:[i.jsx(Mw,{children:bn(n.iconType,20,"currentColor")}),i.jsxs(Nw,{children:[i.jsx(Aw,{children:n.title}),i.jsx(Fw,{children:n.subtitle})]})]}),i.jsx(Ow,{children:n.actions.map(r=>i.jsx("li",{children:i.jsx(_w,{href:r.href,children:r.label})},r.label))})]},n.title))}),i.jsxs(Bw,{children:[i.jsxs(Uw,{children:[i.jsx(Ww,{children:i.jsx(Vw,{src:"/idc-marketspace-blog-hero.png",alt:"Certificate lifecycle management illustration",onError:n=>{n.target.style.display="none"}})}),i.jsxs(Hw,{children:[i.jsx(Qw,{children:"Certificate lifecycle"}),i.jsxs(Kw,{children:[i.jsx("span",{children:"Brian Trzupek · 5 min read"}),i.jsx("span",{children:"digicert.com/blog"})]}),i.jsx(Gw,{children:"Certificate lifecycle management reaches an inflection point"}),i.jsx(Yw,{children:"Cert volumes keep climbing while validity windows keep shrinking. Why teams that scaled on annual renewals are rebuilding for continuous lifecycle operations."}),i.jsx(Jw,{href:"https://www.digicert.com/blog",target:"_blank",rel:"noreferrer noopener",children:"Read on the blog →"})]})]}),!e&&i.jsxs(Xw,{children:[i.jsxs(qw,{children:[i.jsx(Zw,{children:"Software Trust Manager"}),i.jsx(e2,{"aria-label":"Dismiss spotlight",onClick:()=>t(!0),children:i.jsx(va,{size:14,color:"currentColor"})})]}),i.jsx(t2,{children:"Centralize code-signing at scale"}),i.jsx(n2,{children:"Centralize code-signing keys, enforce signing policy, and produce SBOMs across your build pipelines."}),i.jsx(r2,{href:"/software-trust/dashboard",children:"Explore STM →"})]})]})]})]})}const l2=u.main`
  padding: 24px;
`,s2=u.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
  margin: 0 0 8px;
`,wd=u.p`
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin: 0;
`;function bd(){const e=rt(),t=lv[e.pathname]??e.pathname;return v.useEffect(()=>{document.title=`${t} — DigiCert ONE`},[t]),i.jsxs(l2,{children:[i.jsx(s2,{children:t}),e.pathname==="/profile"&&i.jsx(wd,{style:{marginBottom:"8px",fontWeight:500,color:"#353535"},children:"Deepika Chauhan"}),i.jsxs(wd,{children:["This is a stub page for ",i.jsx("code",{children:e.pathname})]})]})}const Pe={name:"Sarah Mitchell",title:"Enterprise Account Manager, DigiCert",email:"sarah.mitchell@digicert.com"},a2=[{id:"trust-lifecycle",name:"Trust Lifecycle",iconType:"cycle",plan:"Advanced",contractId:"CTR-2024-TL-00098",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Seats",consumed:30,total:75},entitlements:[{name:"Seats",purchased:75,allocated:75,consumed:30,remaining:45}]},{id:"software-trust",name:"Software Trust",iconType:"code",tier:"Enterprise",plan:"Premium",autoRenewal:!0,contractId:"CTR-2024-ST-00187",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"DevOps Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Signatures",consumed:124210,total:25e4},entitlements:[{name:"Signatures",purchased:25e4,allocated:25e4,consumed:124210,remaining:125790},{name:"HSM keypairs",purchased:4,allocated:4,consumed:2,remaining:2}],purchasedControls:[{name:"Signatures",purchased:25e4,used:124210,remaining:125790},{name:"HSM keypair",purchased:10,used:2,remaining:8,planIncluded:6,addOnPurchased:4}],includedResources:[{name:"Repositories",includedWithPlan:"Up to 100",available:100,used:76,remaining:24},{name:"Test signatures",includedWithPlan:"2,500,000",available:25e5,used:812430,remaining:1687570}]},{id:"private-ca",name:"Private CA",iconType:"hierarchy",contractId:"CTR-2024-PCA-00071",contractTerm:"Sep 2, 2025 – Sep 1, 2026",contractOwner:"PKI Operations",renewalDate:"Sep 1, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Private root certificates",consumed:9,total:10},entitlements:[{name:"Private root certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Private intermediate CA certificates",purchased:25,allocated:25,consumed:20,remaining:5},{name:"Dynamic intermediate CAs",purchased:5e4,allocated:5e4,consumed:38500,remaining:11500}]},{id:"content-trust",name:"Content Trust",iconType:"document",contractId:"CTR-2024-DT-00231",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Compliance Operations",renewalDate:"Jun 6, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"Signatures",consumed:8200,total:1e4},entitlements:[{name:"Seats",purchased:500,allocated:500,consumed:340,remaining:160},{name:"Signatures",purchased:1e4,allocated:1e4,consumed:8200,remaining:1800}]},{id:"device-trust",name:"Device Trust",iconType:"mobile",contractId:"CTR-2024-DVT-00153",contractTerm:"Aug 15, 2025 – Aug 14, 2026",contractOwner:"IoT Platform Team",renewalDate:"Aug 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Device certificates",consumed:45e3,total:1e5},entitlements:[{name:"Device certificates",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Device groups",purchased:50,allocated:50,consumed:32,remaining:18},{name:"API calls / month",purchased:1e6,allocated:1e6,consumed:62e4,remaining:38e4}]},{id:"dns",name:"DigiCert DNS",iconType:"globe",contractId:"CTR-2024-DNS-00076",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"Network Engineering",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Queries",consumed:45e4,total:1e6},entitlements:[{name:"Queries",purchased:1e6,allocated:1e6,consumed:45e4,remaining:55e4}]},{id:"valimail",name:"Valimail",iconType:"envelope",plan:"Essential",autoRenewal:!1,contractId:"CTR-2024-VML-00038",contractTerm:"Jul 16, 2025 – Jul 15, 2026",contractOwner:"IT Security Team",renewalDate:"Jul 15, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"Domains",consumed:18,total:25},entitlements:[{name:"Domains",purchased:25,allocated:25,consumed:18,remaining:7},{name:"Email volume/month",purchased:5e6,allocated:5e6,consumed:28e5,remaining:22e5}]},{id:"iot-trust",name:"IoT Trust",iconType:"chip",contractId:"CTR-2024-IOT-00044",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IoT Platform Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"End entity certificates",consumed:28e4,total:5e5},entitlements:[{name:"End entity certificates",purchased:5e5,allocated:5e5,consumed:28e4,remaining:22e4},{name:"End entity devices",purchased:1e5,allocated:1e5,consumed:45e3,remaining:55e3},{name:"Intermediate CA certificates",purchased:50,allocated:50,consumed:12,remaining:38},{name:"Intermediate CA devices",purchased:100,allocated:100,consumed:45,remaining:55}]}],Ko=[{accountId:"acme-global-security",displayAccountId:"1001445",accountName:"ACME Global Security",enterpriseInstance:{instanceId:"acme-global-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"peak-usage",contractId:"CTR-2024-CC-00012",contractTerm:"Jun 7, 2025 – Jun 6, 2026",contractOwner:"IT Security Team",renewalDate:"Jun 6, 2026",environment:"Production",status:"over-entitlement",primaryEntitlement:{label:"SSL/TLS certificates",consumed:108,total:100},entitlements:[{name:"SSL/TLS certificates",purchased:100,allocated:100,consumed:108,remaining:-8,periodPeak:128,periodPeakDate:"Aug 14, 2025",purchasedUSD:"$80,000"},{name:"Code signing certificates",purchased:24,allocated:24,consumed:16,remaining:8,periodPeak:22,periodPeakDate:"Sep 3, 2025",purchasedUSD:"$9,600"},{name:"S/MIME certificates",purchased:200,allocated:200,consumed:140,remaining:60,periodPeak:180,periodPeakDate:"Oct 12, 2025",purchasedUSD:"$24,000"},{name:"Document signing certificates",purchased:12,allocated:12,consumed:5,remaining:7,periodPeak:8,periodPeakDate:"Nov 5, 2025",purchasedUSD:"$2,400"},{name:"Common mark certificates",purchased:5,allocated:5,consumed:1,remaining:4,periodPeak:2,periodPeakDate:"—",purchasedUSD:"$1,500"}],peakUsageData:{periodPeakDate:"Aug 14, 2025",monthLabels:["Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Mar 26","Apr 26","May 26","Jun 26"],series:[{name:"SSL/TLS certificates",color:"#4B91D6",currentActive:108,periodPeak:128,periodPeakDate:"Aug 14, 2025",monthly:[90,110,128,122,115,108,100,96,92,98,104,110,108],monthlyCost:[72e3,88e3,102400,97600,92e3,86400,8e4,76800,73600,78400,83200,88e3,86400]},{name:"Code signing",color:"#F59E0B",currentActive:16,periodPeak:22,periodPeakDate:"Sep 3, 2025",monthly:[10,14,18,22,20,18,16,15,14,15,16,16,16],monthlyCost:[6e3,8400,10800,13200,12e3,10800,9600,9e3,8400,9e3,9600,9600,9600]},{name:"S/MIME certificates",color:"#10B981",currentActive:140,periodPeak:180,periodPeakDate:"Oct 12, 2025",monthly:[120,138,155,168,180,174,162,152,148,152,158,145,140],monthlyCost:[24e3,27600,31e3,33600,36e3,34800,32400,30400,29600,30400,31600,29e3,28e3]},{name:"Document signing",color:"#8B5CF6",currentActive:5,periodPeak:8,periodPeakDate:"Nov 5, 2025",monthly:[2,3,4,5,7,8,7,6,5,5,5,5,5],monthlyCost:[1e3,1500,2e3,2500,3500,4e3,3500,3e3,2500,2500,2500,2500,2500]}]}},ecommerceInstance:{instanceId:"acme-global-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jun 6, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:1,total:4},entitlements:[{name:"SSL/TLS certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"Codesigning certificates",purchased:4,allocated:4,consumed:1,remaining:3},{name:"S/MIME certificates",purchased:4,allocated:4,consumed:1,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$249.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 1, 2026"},paymentMethod:{type:"Visa",last4:"4242",expiry:"08/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:4,used:1,available:3},{name:"Secure Site OV",type:"Single domain",purchased:10,used:8,available:2},{name:"Secure Site Pro OV",type:"Single domain",purchased:6,used:3,available:3},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:8,used:4,available:4},{name:"Basic OV",type:"Multi-domain",purchased:1,used:1,available:0},{name:"Basic OV",type:"Wildcard domain",purchased:1,used:1,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:6,used:0,available:6},{name:"Code signing OV",type:"HSM",purchased:6,used:0,available:6},{name:"Code signing EV",type:"KeyLocker",purchased:6,used:0,available:6}]},{id:"document-signing",name:"Document signing",buyLabel:"Buy document signing",products:[{name:"Individual",type:"USB",purchased:6,used:0,available:6},{name:"Organization",type:"USB",purchased:6,used:0,available:6}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[]},{id:"common-mark",name:"Common mark certificates",buyLabel:"Buy common mark",products:[]}],receipts:[{id:"INV-100245",date:"Jun 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100198",date:"May 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"},{id:"INV-100142",date:"Apr 1, 2026",amount:"$249.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-marketing",displayAccountId:"2003891",accountName:"ACME Marketing",enterpriseInstance:{instanceId:"acme-marketing-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00089",contractTerm:"Mar 15, 2025 – Mar 14, 2026",contractOwner:"Marketing IT",renewalDate:"Mar 14, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:34,total:50},entitlements:[{name:"SSL/TLS certificates",purchased:50,allocated:50,consumed:34,remaining:16},{name:"Code signing certificates",purchased:10,allocated:10,consumed:4,remaining:6},{name:"S/MIME certificates",purchased:100,allocated:100,consumed:62,remaining:38}]},ecommerceInstance:{instanceId:"acme-marketing-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Jul 15, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:9,total:10},entitlements:[{name:"SSL/TLS certificates",purchased:10,allocated:10,consumed:9,remaining:1},{name:"Code signing certificates",purchased:2,allocated:2,consumed:1,remaining:1},{name:"S/MIME certificates",purchased:8,allocated:8,consumed:5,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$179.00 / month",billingCycle:"Monthly",nextChargeDate:"Jul 15, 2026"},paymentMethod:{type:"Mastercard",last4:"8371",expiry:"11/27"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:6,used:5,available:1},{name:"Secure Site OV",type:"Multi-domain",purchased:4,used:4,available:0}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing OV",type:"USB",purchased:2,used:1,available:1}]},{id:"smime",name:"S/MIME certificates",buyLabel:"Buy S/MIME",products:[{name:"S/MIME Mailbox",type:"Individual",purchased:8,used:5,available:3}]}],receipts:[{id:"INV-200112",date:"Jun 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"},{id:"INV-200098",date:"May 15, 2026",amount:"$179.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-devops",displayAccountId:"3007234",accountName:"ACME DevOps",enterpriseInstance:{instanceId:"acme-devops-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"negotiated-pricing",contractId:"CTR-2024-CC-00156",contractTerm:"Jan 1, 2026 – Dec 31, 2026",contractOwner:"DevOps Engineering",renewalDate:"Dec 31, 2026",environment:"Production",status:"approaching-limit",primaryEntitlement:{label:"SSL/TLS certificates",consumed:72,total:80},entitlements:[{name:"SSL/TLS certificates",purchased:80,allocated:80,consumed:72,remaining:8},{name:"Code signing certificates",purchased:30,allocated:30,consumed:28,remaining:2},{name:"Document signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}]},ecommerceInstance:{instanceId:"acme-devops-ecommerce",instanceLabel:"Self-service",subscriptionType:"ecommerce",renewalDate:"Aug 1, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:3,total:8},entitlements:[{name:"SSL/TLS certificates",purchased:8,allocated:8,consumed:3,remaining:5},{name:"Code signing certificates",purchased:5,allocated:5,consumed:2,remaining:3}],billing:{plan:"Pay-as-you-go",price:"$299.00 / month",billingCycle:"Monthly",nextChargeDate:"Aug 1, 2026"},paymentMethod:{type:"Amex",last4:"1005",expiry:"03/28"},productCategories:[{id:"ssl-tls",name:"SSL/TLS certificates",buyLabel:"Buy SSL/TLS",products:[{name:"Basic OV",type:"Single domain",purchased:3,used:1,available:2},{name:"Secure Site Pro OV",type:"Multi-domain",purchased:5,used:2,available:3}]},{id:"code-signing",name:"Code signing certificates",buyLabel:"Buy code signing",products:[{name:"Code signing EV",type:"KeyLocker",purchased:5,used:2,available:3}]}],receipts:[{id:"INV-300078",date:"Jul 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300065",date:"Jun 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"},{id:"INV-300051",date:"May 1, 2026",amount:"$299.00",description:"CertCentral monthly subscription"}]}},{accountId:"acme-enterprise",displayAccountId:"5001298",accountName:"ACME Enterprise",enterpriseInstance:{instanceId:"acme-enterprise-enterprise",instanceLabel:"Enterprise",subscriptionType:"enterprise",contractType:"drawdown",contractId:"CTR-2024-CC-00214",contractTerm:"Nov 1, 2025 – Oct 31, 2026",contractOwner:"Enterprise IT",renewalDate:"Oct 31, 2026",environment:"Production",status:"healthy",primaryEntitlement:{label:"SSL/TLS certificates",consumed:55,total:120},entitlements:[{name:"SSL/TLS certificates",purchased:120,allocated:120,consumed:55,remaining:65},{name:"Code signing certificates",purchased:40,allocated:40,consumed:18,remaining:22},{name:"S/MIME certificates",purchased:300,allocated:300,consumed:210,remaining:90},{name:"Document signing certificates",purchased:20,allocated:20,consumed:7,remaining:13}]}}],c2=["over-entitlement","approaching-limit","no-data","healthy"];function u2(e){return c2.find(t=>e.includes(t))||"healthy"}function d2(e){const{id:t,name:n,iconType:r,...o}=e;return{id:t,name:n,iconType:r,subscriptionTypes:["enterprise"],renewalDate:o.renewalDate,status:o.status,primaryEntitlement:o.primaryEntitlement,entitlements:o.entitlements,plan:o.plan,tier:o.tier,autoRenewal:o.autoRenewal,instances:[{instanceId:t,instanceLabel:n,subscriptionType:"enterprise",...o}]}}function Go(e,t){const n=[];t.includes("enterprise")&&e.enterpriseInstance&&n.push(e.enterpriseInstance),t.includes("ecommerce")&&e.ecommerceInstance&&n.push(e.ecommerceInstance);const r=[...new Set(n.map(l=>l.subscriptionType))],o=[...new Set(n.map(l=>l.renewalDate))];return{id:`certcentral-${e.accountId}`,name:"CertCentral",iconType:"shield",accountId:e.displayAccountId,accountName:e.accountName,subscriptionTypes:r,renewalDate:o.length===1?o[0]:"Varies by instance",status:u2(n.map(l=>l.status)),primaryEntitlement:n[0].primaryEntitlement,entitlements:n[0].entitlements,instances:n}}const kd=a2.map(d2),p2=new Set(["device-trust","dns","valimail","iot-trust"]);function y0(){const e=[Go(Ko[0],["enterprise"]),Go(Ko[1],["enterprise"]),Go(Ko[2],["ecommerce"]),Go(Ko[3],["enterprise"])],t=kd.slice(0,3),n=kd.slice(3).filter(r=>!p2.has(r.id));return[...t,...e,...n]}const hn=[{id:"us-prod",name:"Acme — US production",region:"US"},{id:"us-stage",name:"Acme — US stage",region:"US"},{id:"eu-prod",name:"Acme — EU production",region:"EU"},{id:"eu-stage",name:"Acme — EU stage",region:"EU"},{id:"in-prod",name:"Acme — IN",region:"IN"}],f2={"us-prod":["trust-lifecycle","software-trust","private-ca","certcentral-acme-global-security","certcentral-acme-marketing","certcentral-acme-enterprise"],"us-stage":["trust-lifecycle","software-trust","certcentral-acme-global-security","certcentral-acme-marketing"],"eu-prod":["trust-lifecycle","private-ca","certcentral-acme-global-security","certcentral-acme-enterprise"],"eu-stage":["software-trust","certcentral-acme-marketing"],"in-prod":["software-trust","certcentral-acme-enterprise"]},h2={"us-prod":1,"us-stage":.25,"eu-prod":.65,"eu-stage":.15,"in-prod":.4};function xi(){const e=y0(),t=e.filter(s=>!s.id.startsWith("certcentral-")),n=e.filter(s=>s.id.startsWith("certcentral-")),r=n.find(s=>s.id==="certcentral-acme-devops"),o=n.filter(s=>s.id!=="certcentral-acme-devops"),l=[];r&&l.push({...r,envIds:hn.map(s=>s.id),envNames:hn.map(s=>s.name)});for(const s of hn){const a=h2[s.id],c=f2[s.id];for(const d of c){const m=[...t,...o].find(y=>y.id===d);if(!m)continue;const h=y=>Math.round(y*a),x=m.entitlements.map(y=>({...y,consumed:h(y.consumed),remaining:y.allocated-h(y.consumed)})),j={...m.primaryEntitlement,consumed:h(m.primaryEntitlement.consumed)},b=m.instances.map(y=>{const S={...y,entitlements:y.entitlements?y.entitlements.map(g=>({...g,consumed:h(g.consumed),remaining:g.allocated-h(g.consumed)})):y.entitlements,primaryEntitlement:y.primaryEntitlement?{...y.primaryEntitlement,consumed:h(y.primaryEntitlement.consumed)}:y.primaryEntitlement};return y.purchasedControls&&(S.purchasedControls=y.purchasedControls.map(g=>({...g,used:h(g.used),remaining:g.purchased-h(g.used)}))),y.includedResources&&(S.includedResources=y.includedResources.map(g=>({...g,used:h(g.used),remaining:typeof g.available=="number"?g.available-h(g.used):g.remaining}))),S});l.push({...m,envId:s.id,envName:s.name,entitlements:x,primaryEntitlement:j,instances:b})}}return l}const g2=u.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`,m2=u.div`
  height: 100%;
  border-radius: 999px;
  width: ${({$pct:e})=>`${e}%`};
  background: ${({theme:e})=>e.colors.blue300};
  transition: width 0.2s ease;
`;function x2({consumed:e,total:t}){const n=t>0?Math.min(e/t*100,100):0;return i.jsx(g2,{role:"presentation",children:i.jsx(m2,{$pct:n})})}const v0=u(wc)`
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
`,k0=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,j0=u.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,$0=u.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
`,y2=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,C0=u.span`
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
`,v2=u.div`
  position: relative;
  flex-shrink: 0;
`,w2=u.button`
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
`,b2=u.div`
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
`,k2=u.button`
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
`;function z0({items:e}){const[t,n]=v.useState(!1),r=v.useRef(null);return v.useEffect(()=>{if(!t)return;const o=s=>{r.current&&!r.current.contains(s.target)&&n(!1)},l=s=>{s.key==="Escape"&&n(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",l)}},[t]),i.jsxs(v2,{ref:r,children:[i.jsx(w2,{type:"button",onClick:o=>{o.preventDefault(),o.stopPropagation(),n(l=>!l)},"aria-label":"More actions","aria-expanded":t,children:i.jsx(Ki,{size:14,color:"currentColor"})}),t&&i.jsx(b2,{onClick:o=>o.stopPropagation(),children:e.map(o=>i.jsx(k2,{type:"button",$destructive:o.destructive,onClick:l=>{l.preventDefault(),l.stopPropagation(),n(!1)},children:o.label},o.label))})]})}const j2=u.div`
  display: flex;
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`,$2=u.button`
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
`,C2=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,S2=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 7px;
`,E2=u.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,jd=u.p`
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
`,R0=u.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,D0=u.div`
  padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.neutral300};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`;u.span``;function ka({entitlements:e,maxVisible:t=3}){const n=e.slice(0,t);return i.jsx(C2,{children:n.map(r=>i.jsxs("div",{children:[i.jsxs(S2,{children:[i.jsx(E2,{children:r.name}),i.jsxs("span",{children:[r.consumed.toLocaleString()," / ",r.allocated.toLocaleString()]})]}),i.jsx(x2,{consumed:r.consumed,total:r.allocated}),r.remaining<0?i.jsxs(jd,{children:["Over by ",Math.abs(r.remaining).toLocaleString()]}):i.jsxs(jd,{children:[r.remaining.toLocaleString()," remaining"]})]},r.name))})}function M0(e){if(e.id.startsWith("certcentral-")){const o=e.subscriptionTypes.includes("enterprise"),l=e.subscriptionTypes.includes("ecommerce");return[{label:"Tier",value:o&&l?"Enterprise + E-commerce":o?"Enterprise":"E-commerce"},{label:"Account name",value:e.accountName},{label:"Account ID",value:e.accountId}]}const r=[{label:"Tier",value:e.tier||"Enterprise"}];return e.plan&&r.push({label:"Plan",value:e.plan}),e.autoRenewal!==void 0&&r.push({label:"Auto-renewal",value:e.autoRenewal?"On":"Off"}),r}function P2({subscription:e}){const[t,n]=v.useState(e.instances[0].instanceId),r=e.instances.find(d=>d.instanceId===t)||e.instances[0],o=r.subscriptionType==="enterprise",l=r.entitlements.slice(0,3),s=r.entitlements.length-l.length,a=[{label:"Open CertCentral"},{label:"Documentation"}],c=M0(e);return i.jsxs(v0,{to:`/settings/billing/${e.id}`,children:[i.jsxs(w0,{children:[i.jsxs(b0,{children:[i.jsx(k0,{children:bn(e.iconType,20,"currentColor")}),i.jsx(j0,{children:i.jsxs(L0,{children:[i.jsx($0,{children:e.name}),i.jsxs(C0,{children:["Renews ",e.renewalDate]})]})})]}),i.jsx(I0,{children:i.jsx(z0,{items:a})})]}),i.jsx(S0,{$cols:c.length,children:c.map(d=>i.jsxs(E0,{children:[i.jsx(P0,{children:d.label}),i.jsx(T0,{children:d.value})]},d.label))}),i.jsx(j2,{onClick:d=>d.preventDefault(),children:e.instances.map(d=>i.jsx($2,{type:"button",$active:d.instanceId===t,onClick:m=>{m.preventDefault(),m.stopPropagation(),n(d.instanceId)},children:d.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},d.instanceId))}),o?i.jsxs(i.Fragment,{children:[l.length>0?i.jsx(ka,{entitlements:r.entitlements,maxVisible:3}):i.jsx(D0,{children:"Usage data not available yet."}),i.jsxs(wa,{children:[s>0&&i.jsxs(R0,{children:["+",s," more"]}),i.jsx(ba,{children:"Managed by your Account Manager"})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(ka,{entitlements:r.entitlements,maxVisible:3}),i.jsxs(wa,{children:[i.jsx("span",{}),i.jsx(ba,{children:"Self-service subscription"})]})]})]})}function T2({subscription:e}){if(e.instances.length>1)return i.jsx(P2,{subscription:e});const{id:t,name:n,iconType:r,renewalDate:o,entitlements:l}=e,s=e.subscriptionTypes.includes("enterprise"),a=e.subscriptionTypes.includes("ecommerce"),c=a&&!s,d=t.startsWith("certcentral-"),m=l.slice(0,3),h=l.length-m.length,x=s?"Managed by your Account Manager":a?"Self-service subscription":null,b=c&&d?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${d?"CertCentral":n}`},{label:"Documentation"}],y=M0(e);return i.jsxs(v0,{to:`/settings/billing/${t}${e.envId?`?env=${e.envId}`:""}`,children:[i.jsxs(w0,{children:[i.jsxs(b0,{children:[i.jsx(k0,{children:bn(r,20,"currentColor")}),i.jsxs(j0,{children:[i.jsxs(L0,{children:[i.jsx($0,{children:n}),c&&o&&i.jsxs(C0,{children:["Renews ",o]})]}),(e.envNames||e.envId)&&i.jsx(y2,{children:e.envNames?e.envNames.join(", "):e.envName})]})]}),i.jsx(I0,{children:i.jsx(z0,{items:b})})]}),i.jsx(S0,{$cols:y.length,children:y.map(S=>i.jsxs(E0,{children:[i.jsx(P0,{children:S.label}),i.jsx(T0,{children:S.value})]},S.label))}),m.length>0?i.jsx(ka,{entitlements:l,maxVisible:3}):i.jsx(D0,{children:"Usage data is not available for this product yet."}),x&&i.jsxs(wa,{children:[h>0?i.jsxs(R0,{children:["+",h," more"]}):i.jsx("span",{}),i.jsx(ba,{children:x})]})]})}const L2=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,I2=u.div`
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

  @media (max-width: 500px) { width: 100%; }
`,z2=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,R2=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,D2=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,M2=u.button`
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

  &:hover { background: ${({theme:e})=>e.colors.neutral100}; color: ${({theme:e})=>e.colors.neutral900}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,N2=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: ${({theme:e})=>e.colors.neutral300}; border-radius: 2px; }
`,A2=u.div`
  flex-shrink: 0;
  padding: 12px 16px;
  border-top: 1.5px dashed #fde68a;
  background: #fffbeb;
`,F2=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,O2=u.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d97706;
  white-space: nowrap;
  padding-right: 8px;
  border-right: 1px solid #fde68a;
`,_2=u.div`
  display: flex;
  background: #f3f4f6;
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
`,$d=u.button`
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

  &:hover { color: ${({$active:e})=>e?"#111827":"#374151"}; }
  &:focus-visible { outline: 2px solid #f59e0b; outline-offset: 1px; }
`,B2=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
`,U2=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,W2=u.div`
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
`,V2=u.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,H2=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Q2=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,K2=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,G2=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Y2=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,J2=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
`,X2=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,q2=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
`,Z2=u.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.neutral200};
`,eb=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,tb=u.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,Cd=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Sd=u.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
`,nb=u.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};

  &::placeholder { color: ${({theme:e})=>e.colors.neutral400}; }
  &:focus { outline: none; border-color: ${({theme:e})=>e.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
`,rb=u.textarea`
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
  &:focus { outline: none; border-color: ${({theme:e})=>e.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
`,ob=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,ib=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,lb=u.button`
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
`,sb=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ab=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,cb=u.a`
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
`,Ed={subscriptions:{known:{heading:"Questions about subscriptions?",body:"Use the form below to contact your DigiCert account manager."},unknown:{heading:"Questions about subscriptions?",body:"Fill out the form below and your message will be routed to the appropriate DigiCert team."}},"payment-details":{known:{heading:"Questions about payment details?",body:"Use the form below to contact your DigiCert account manager about billing or payment questions."},unknown:{heading:"Questions about payment details?",body:"Fill out the form below about billing or payment questions and your message will be routed to the appropriate DigiCert team."}},receipts:{known:{heading:"Questions about your invoices?",body:"Use the form below to contact your DigiCert account manager about receipts or billing history."},unknown:{heading:"Questions about your invoices?",body:"Fill out the form below about receipts or billing history and your message will be routed to the appropriate DigiCert team."}}};function N0({open:e,onClose:t,helpContext:n="subscriptions"}){const[r,o]=v.useState(!0),l=Ed[n]||Ed.subscriptions,s=r?l.known:l.unknown,a=Pe.name.split(" ").map(d=>d[0]).join(""),c=v.useRef(null);return v.useEffect(()=>{const d=m=>{m.key==="Escape"&&e&&t()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,t]),v.useEffect(()=>{e&&c.current&&setTimeout(()=>{var d;return(d=c.current)==null?void 0:d.focus()},260)},[e]),i.jsxs(i.Fragment,{children:[i.jsx(L2,{$open:e,onClick:t,"aria-hidden":"true"}),i.jsxs(I2,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[i.jsxs(z2,{children:[i.jsxs(R2,{children:[i.jsx(ur,{size:18,color:"currentColor"}),i.jsx(D2,{children:"Need help?"})]}),i.jsx(M2,{type:"button",onClick:t,"aria-label":"Close drawer",ref:c,children:"×"})]}),i.jsxs(N2,{children:[r&&i.jsxs(B2,{children:[i.jsxs(U2,{children:[i.jsx(W2,{children:a}),i.jsxs(V2,{children:[i.jsx(H2,{children:Pe.name}),i.jsx(Q2,{children:Pe.title})]})]}),i.jsx(K2,{children:i.jsxs(G2,{children:[i.jsx(Wn,{size:14,color:"currentColor"}),i.jsx(Y2,{href:`mailto:${Pe.email}`,children:Pe.email})]})})]}),i.jsxs(J2,{children:[i.jsx(X2,{children:s.heading}),i.jsx(q2,{children:s.body})]}),i.jsx(Z2,{}),i.jsxs(eb,{children:[i.jsx(tb,{children:"Send a message"}),i.jsxs(Cd,{children:[i.jsx(Sd,{htmlFor:"mgr-subject",children:"Subject"}),i.jsx(nb,{id:"mgr-subject",type:"text",placeholder:"e.g. Request additional SSL/TLS licenses"})]}),i.jsxs(Cd,{children:[i.jsx(Sd,{htmlFor:"mgr-message",children:"Message"}),i.jsx(rb,{id:"mgr-message",placeholder:"Describe what you need help with...",rows:4})]}),i.jsxs(ob,{children:[i.jsx(ib,{children:r?`Your message will be sent to ${Pe.name}.`:"Your message will be routed to the appropriate DigiCert team."}),i.jsx(lb,{type:"button",children:"Send message"})]})]}),i.jsxs(sb,{children:[i.jsx(ab,{children:"Need to speak to sales instead?"}),i.jsxs(cb,{href:"https://www.digicert.com/contact-us",target:"_blank",rel:"noopener noreferrer",children:["Contact sales",i.jsx(Gi,{size:12,color:"currentColor"})]})]})]}),i.jsx(A2,{children:i.jsxs(F2,{children:[i.jsx(O2,{children:"Prototype"}),i.jsxs(_2,{children:[i.jsx($d,{type:"button",$active:r,onClick:()=>o(!0),children:"Known account manager"}),i.jsx($d,{type:"button",$active:!r,onClick:()=>o(!1),children:"No account manager"})]})]})})]})]})}const ub=u.main`
  padding: 32px;
`,db=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,pb=u.div``,fb=u.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,hb=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral700};
  max-width: 640px;
`,gb=u.button`
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
`;const mb=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(358px, auto);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`,xb=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`,Pd=u.button`
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
`,Td=u.div`
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
`,Ld=u.button`
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
`;function yb(){var p;const[e,t]=v.useState(!1),[n,r]=Nh(),o=n.get("env")||"all",l=n.get("product")||"all",[s,a]=v.useState(!1),[c,d]=v.useState(!1),m=v.useRef(null),h=v.useRef(null);v.useEffect(()=>{document.title="My subscriptions — DigiCert ONE"},[]),v.useEffect(()=>{if(!s)return;const f=k=>{m.current&&!m.current.contains(k.target)&&a(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[s]),v.useEffect(()=>{if(!c)return;const f=k=>{h.current&&!h.current.contains(k.target)&&d(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[c]);const x=xi(),j=[...new Map(x.map(f=>[f.name,{id:f.name,name:f.name}])).values()],y=x.filter(f=>!(o!=="all"&&!(f.envIds?f.envIds.includes(o):f.envId===o)||l!=="all"&&f.name!==l)).map(f=>{var k;if(f.envIds&&o!=="all"){const w=((k=hn.find(E=>E.id===o))==null?void 0:k.name)??o;return{...f,envId:o,envName:w,envIds:void 0,envNames:void 0}}return f}),S=o==="all"?"All environments":((p=hn.find(f=>f.id===o))==null?void 0:p.name)??o,g=l==="all"?"All products":l;return i.jsxs(ub,{children:[i.jsxs(db,{children:[i.jsxs(pb,{children:[i.jsx(fb,{children:"My subscriptions"}),i.jsx(hb,{children:"View your active product subscriptions, entitlement usage, and renewal information."})]}),i.jsxs(gb,{type:"button",onClick:()=>t(!0),children:[i.jsx(ur,{size:15,color:"currentColor"}),"Need help?"]})]}),i.jsxs(xb,{children:[i.jsxs("div",{style:{position:"relative"},ref:m,children:[i.jsxs(Pd,{type:"button",onClick:()=>a(f=>!f),"aria-haspopup":"listbox","aria-expanded":s,children:[S,i.jsx(fn,{size:13,color:"currentColor"})]}),s&&i.jsx(Td,{children:[{id:"all",name:"All environments"},...hn].map(f=>i.jsx(Ld,{type:"button",$active:o===f.id,onClick:()=>{r(k=>{const w=new URLSearchParams(k);return f.id==="all"?w.delete("env"):w.set("env",f.id),w},{replace:!0}),a(!1)},children:f.name},f.id))})]}),i.jsxs("div",{style:{position:"relative"},ref:h,children:[i.jsxs(Pd,{type:"button",onClick:()=>d(f=>!f),"aria-haspopup":"listbox","aria-expanded":c,children:[g,i.jsx(fn,{size:13,color:"currentColor"})]}),c&&i.jsx(Td,{children:[{id:"all",name:"All products"},...j].map(f=>i.jsx(Ld,{type:"button",$active:l===f.id,onClick:()=>{r(k=>{const w=new URLSearchParams(k);return f.id==="all"?w.delete("product"):w.set("product",f.id),w},{replace:!0}),d(!1)},children:f.name},f.id))})]})]}),i.jsx(mb,{children:y.map(f=>i.jsx(T2,{subscription:f},`${f.id}-${f.envId??"global"}`))}),i.jsx(N0,{open:e,onClose:()=>t(!1)})]})}const vb=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"all":"none"};
  transition: opacity 200ms ease;
`,wb=u.div`
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

  @media (max-width: 500px) { width: 100%; }
`,Id=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  flex-shrink: 0;
`,zd=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Rd=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Dd=u.button`
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

  &:hover { background: ${({theme:e})=>e.colors.neutral100}; color: ${({theme:e})=>e.colors.neutral900}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,bb=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: ${({theme:e})=>e.colors.neutral300}; border-radius: 2px; }
`,kb=u.div`
  flex-shrink: 0;
  padding: 12px 16px;
  border-top: 1.5px dashed #fde68a;
  background: #fffbeb;
`,jb=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,$b=u.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d97706;
  white-space: nowrap;
  padding-right: 8px;
  border-right: 1px solid #fde68a;
`,Cb=u.div`
  display: flex;
  background: #f3f4f6;
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
`,Md=u.button`
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

  &:hover { color: ${({$active:e})=>e?"#111827":"#374151"}; }
  &:focus-visible { outline: 2px solid #f59e0b; outline-offset: 1px; }
`,Sb=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral50};
`,Eb=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Pb=u.div`
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
`,Tb=u.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Lb=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ib=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,zb=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Rb=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Db=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,Mb=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
`,Nb=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Ab=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
`,Fb=u.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.neutral200};
`,Ob=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,_b=u.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,Nd=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ad=u.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral700};
`,Bb=u.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral900};

  &::placeholder { color: ${({theme:e})=>e.colors.neutral400}; }
  &:focus { outline: none; border-color: ${({theme:e})=>e.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
`,Ub=u.textarea`
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
  &:focus { outline: none; border-color: ${({theme:e})=>e.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
`,Wb=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,Vb=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Hb=u.button`
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
`,Qb=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Kb=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Gb=u.button`
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
`,Yb=u.div`
  position: fixed;
  inset: 0;
  z-index: 1102;
  background: transparent;
  pointer-events: ${({$open:e})=>e?"all":"none"};
`,Jb=u.div`
  position: fixed;
  top: ${({theme:e})=>e.layout.topNavHeight};
  right: 0;
  bottom: 0;
  width: 440px;
  background: ${({theme:e})=>e.colors.white};
  z-index: 1103;
  display: flex;
  flex-direction: column;
  transform: translateX(${({$open:e})=>e?"0":"100%"});
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.18);

  @media (max-width: 500px) { width: 100%; }
`,Xb=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: ${({theme:e})=>e.colors.neutral300}; border-radius: 2px; }
`,qb=u.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: transparent;
  padding: 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;
  margin-bottom: 24px;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; border-radius: 2px; }
`,Zb=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`,ek=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,tk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,nk=u.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,rk=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  background: #EAF1FB;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  white-space: nowrap;
`,is=u.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.neutral200};
  margin: 20px 0;
`,ls=u.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ss=u.h4`
  margin: 0 0 2px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Fd=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  line-height: 1.5;
`,Od=u.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.blue300};
  color: white;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  transition: background 0.15s;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.blue300}; outline-offset: 2px; }
`,ct=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral800};
`,Lr=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  font-size: 13px;
  &:hover { text-decoration: underline; }
`,ok=u.p`
  margin: 0 0 0 24px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,as=u.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 4px;
`,cs=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
`,Tn=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,ik=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  background: #EAF1FB;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  width: fit-content;
`,_d={default:{known:{heading:"Questions about this purchase?",body:"Use the form below to contact your DigiCert account manager."},unknown:{heading:"Questions about this purchase?",body:"Send us a message below and we'll route it to the appropriate DigiCert team."}},"payment-details":{known:{heading:"Questions about payment details?",body:"Use the form below to contact your DigiCert account manager about billing or payment questions."},unknown:{heading:"Questions about payment details?",body:"Have questions about payment methods, billing contacts, or charges? Send us a message and we'll route it to the appropriate team."}},receipts:{known:{heading:"Questions about your invoices?",body:"Use the form below to contact your DigiCert account manager about receipts or billing history."},unknown:{heading:"Questions about your invoices?",body:"Have questions about invoices or billing history? Send us a message and we'll route it to the appropriate team."}}};function lk({open:e,onClose:t,helpContext:n="default"}){const[r,o]=v.useState(!0),[l,s]=v.useState(!1),a=_d[n]||_d.default,c=r?a.known:a.unknown,d=Pe.name.split(" ").map(h=>h[0]).join(""),m=v.useRef(null);return v.useEffect(()=>{const h=x=>{if(x.key==="Escape"){if(l){s(!1);return}e&&t()}};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[e,t,l]),v.useEffect(()=>{e&&!l&&m.current&&setTimeout(()=>{var h;return(h=m.current)==null?void 0:h.focus()},260)},[e,l]),v.useEffect(()=>{e||s(!1)},[e]),i.jsxs(i.Fragment,{children:[i.jsx(vb,{$open:e,onClick:()=>{s(!1),t()},"aria-hidden":"true"}),i.jsxs(wb,{$open:e,role:"dialog","aria-modal":"true","aria-label":"Need help?",children:[i.jsxs(Id,{children:[i.jsxs(zd,{children:[i.jsx(ur,{size:18,color:"currentColor"}),i.jsx(Rd,{children:"Need help?"})]}),i.jsx(Dd,{type:"button",onClick:t,"aria-label":"Close drawer",ref:m,children:"×"})]}),i.jsxs(bb,{children:[r&&i.jsxs(Sb,{children:[i.jsxs(Eb,{children:[i.jsx(Pb,{children:d}),i.jsxs(Tb,{children:[i.jsx(Lb,{children:Pe.name}),i.jsx(Ib,{children:Pe.title})]})]}),i.jsx(zb,{children:i.jsxs(Rb,{children:[i.jsx(Wn,{size:14,color:"currentColor"}),i.jsx(Db,{href:`mailto:${Pe.email}`,children:Pe.email})]})})]}),i.jsxs(Mb,{children:[i.jsx(Nb,{children:c.heading}),i.jsx(Ab,{children:c.body})]}),i.jsx(Fb,{}),i.jsxs(Ob,{children:[i.jsx(_b,{children:"Send a message"}),i.jsxs(Nd,{children:[i.jsx(Ad,{htmlFor:"cu-subject",children:"Subject"}),i.jsx(Bb,{id:"cu-subject",type:"text",placeholder:"e.g. Request additional SSL/TLS licenses"})]}),i.jsxs(Nd,{children:[i.jsx(Ad,{htmlFor:"cu-message",children:"Message"}),i.jsx(Ub,{id:"cu-message",placeholder:"Describe what you need help with...",rows:4})]}),i.jsxs(Wb,{children:[i.jsx(Vb,{children:r?`Your message will be sent to ${Pe.name}.`:"Your message will be routed to the appropriate DigiCert team."}),i.jsx(Hb,{type:"button",children:"Send message"})]})]}),i.jsxs(Qb,{children:[i.jsx(Kb,{children:"Need to speak to Technical, Validation, or Sales instead?"}),i.jsxs(Gb,{type:"button",onClick:()=>s(!0),children:["Contact CertCentral support",i.jsx(Gi,{size:12,color:"currentColor"})]})]})]}),i.jsx(kb,{children:i.jsxs(jb,{children:[i.jsx($b,{children:"Prototype"}),i.jsxs(Cb,{children:[i.jsx(Md,{type:"button",$active:r,onClick:()=>o(!0),children:"Known account manager"}),i.jsx(Md,{type:"button",$active:!r,onClick:()=>o(!1),children:"No account manager"})]})]})})]}),i.jsx(Yb,{$open:l,onClick:()=>s(!1)}),i.jsxs(Jb,{$open:l,role:"dialog","aria-modal":"true","aria-label":"CertCentral support",children:[i.jsxs(Id,{children:[i.jsxs(zd,{children:[i.jsx(ur,{size:18,color:"currentColor"}),i.jsx(Rd,{children:"Need help?"})]}),i.jsx(Dd,{type:"button",onClick:()=>{s(!1),t()},"aria-label":"Close",children:"×"})]}),i.jsxs(Xb,{children:[i.jsx(qb,{type:"button",onClick:()=>s(!1),children:"← Back"}),i.jsxs(Zb,{children:[i.jsx(ek,{children:"Current plan"}),i.jsxs(tk,{children:[i.jsx(nk,{children:"Standard plus"}),i.jsx(rk,{children:"24x5 support"})]})]}),i.jsx(is,{}),i.jsxs(ls,{children:[i.jsx(ss,{children:"Technical support"}),i.jsx(Fd,{children:"Get help with certificate installation, CSRs, and other technical issues."}),i.jsx(Od,{type:"button",children:"Support chat"}),i.jsxs(ct,{children:[i.jsx(Pr,{size:14,color:"currentColor"}),i.jsx("span",{children:"+1 800 579 2848"})]}),i.jsxs(ct,{children:[i.jsx(Pr,{size:14,color:"currentColor"}),i.jsx("span",{children:"+1 801 769 0749"})]}),i.jsx(ok,{children:"PIN: 1779"}),i.jsxs(ct,{children:[i.jsx(Wn,{size:14,color:"currentColor"}),i.jsx(Lr,{href:"mailto:cc.standard.support@digicert.com",children:"cc.standard.support@digicert.com"})]}),i.jsxs(ct,{children:[i.jsx(Gi,{size:14,color:"currentColor"}),i.jsx(Lr,{href:"https://support.digicert.com",target:"_blank",rel:"noopener noreferrer",children:"Support portal"})]}),i.jsxs(as,{children:[i.jsx(cs,{children:"Support hours"}),i.jsx(Tn,{children:"Monday – Friday: 24 hours"}),i.jsx(Tn,{children:"Saturday and Sunday: Closed"})]})]}),i.jsx(is,{}),i.jsxs(ls,{children:[i.jsx(ss,{children:"Validation support"}),i.jsx(Fd,{children:"Get help with domain and organization validation."}),i.jsx(Od,{type:"button",children:"Validation chat"}),i.jsxs(ct,{children:[i.jsx(Pr,{size:14,color:"currentColor"}),i.jsx("span",{children:"+1 800 579 2848"})]}),i.jsxs(ct,{children:[i.jsx(Pr,{size:14,color:"currentColor"}),i.jsx("span",{children:"+1 801 769 0749"})]}),i.jsxs(ct,{children:[i.jsx(Wn,{size:14,color:"currentColor"}),i.jsx(Lr,{href:"mailto:standard.validation@digicert.com",children:"standard.validation@digicert.com"})]}),i.jsxs(as,{children:[i.jsx(cs,{children:"Support hours"}),i.jsx(Tn,{children:"Monday – Friday: 24 hours"}),i.jsx(Tn,{children:"Saturday and Sunday: Closed"})]})]}),i.jsx(is,{}),i.jsxs(ls,{children:[i.jsx(ss,{children:"Sales"}),i.jsx(ik,{children:"Sales team"}),i.jsxs(ct,{children:[i.jsx(Pr,{size:14,color:"currentColor"}),i.jsx(Lr,{href:"tel:+18017019600",children:"+1 (801) 701-9600"})]}),i.jsxs(ct,{children:[i.jsx(Wn,{size:14,color:"currentColor"}),i.jsx(Lr,{href:"mailto:sales@digicert.com",children:"sales@digicert.com"})]}),i.jsxs(as,{children:[i.jsx(cs,{children:"Support hours"}),i.jsx(Tn,{children:"Monday – Friday: 24 hours"}),i.jsx(Tn,{children:"Saturday and Sunday: Closed"})]})]})]})]})]})}const sk=u.div`
  position: relative;
  width: 100%;
  user-select: none;
`,ak=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  margin-bottom: 8px;
`,ck=u.button`
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
`,uk=u.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
`,dk=u.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
`,Bd=u.button`
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
`,pk=u.div`
  position: relative;
`,fk=u.div`
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
`,hk=u.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: #E5E7EB;
  font-size: 10px;
`,Ud=u.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.8;
`,gk=u.span`
  width: 7px;
  height: 7px;
  border-radius: 2px;
  flex-shrink: 0;
`,Ar=620,A0=190,Fr=46,mk=16,F0=18,xk=34,Yo=Ar-Fr-mk,tn=A0-F0-xk;function yk(e,t){return t==="$"?e>=1e5?`$${(e/1e3).toFixed(0)}k`:e>=1e3?`$${(e/1e3).toFixed(1)}k`:`$${e}`:e>=1e3?`${(e/1e3).toFixed(0)}k`:`${e}`}function Wd(e,t){return t==="$"?e>=1e3?`$${e.toLocaleString()}`:`$${e}`:e.toLocaleString()}function Vd({series:e,monthLabels:t,yFormat:n}){var C;const[r,o]=v.useState(new Set),[l,s]=v.useState(null),a=v.useRef(null),c=t.length,d=t.map(($,z)=>{let L=0;return e.map(A=>{const te=r.has(A.name)?0:A.monthly[z],O=L;return L+=te,{lo:O,hi:L,val:te}})}),m=Math.max(...d.map($=>{var z;return((z=$[$.length-1])==null?void 0:z.hi)||0}),1),h=Math.ceil(m*1.1/50)*50;function x($){return $/(c-1)*Yo}function j($){return tn-$/h*tn}function b($){const z=t.map((A,te)=>`${x(te).toFixed(1)},${j(d[te][$].hi).toFixed(1)}`),L=[...t].reverse().map((A,te)=>{const O=c-1-te;return`${x(O).toFixed(1)},${j(d[O][$].lo).toFixed(1)}`});return[...z,...L].join(" ")}const y=[0,.25,.5,.75,1].map($=>({v:Math.round(h*$),y:j(h*$)})),S=d.reduce(($,z,L)=>{var O,Se;const A=((O=z[z.length-1])==null?void 0:O.hi)||0,te=((Se=d[$][d[$].length-1])==null?void 0:Se.hi)||0;return A>te?L:$},0);function g($){if(!a.current)return;const z=a.current.getBoundingClientRect(),L=Fr/Ar*z.width,A=(Fr+Yo)/Ar*z.width,O=(Math.max(L,Math.min(A,$.clientX-z.left))-L)/(A-L);s(Math.round(O*(c-1)))}function p($){o(z=>{const L=new Set(z);return L.has($)?L.delete($):L.add($),L})}const f=l!==null?(Fr+x(l))/Ar*100:0,k=l!==null&&l>c-3?"translateX(-100%)":l!==null&&l<2?"translateX(4px)":"translateX(-50%)",w=l!==null&&((C=d[l][d[l].length-1])==null?void 0:C.hi)||0,E=n==="$"?"Total":"Total active";return i.jsxs(sk,{children:[i.jsxs(ak,{children:[e.map($=>i.jsxs(ck,{$dim:r.has($.name),type:"button",onClick:()=>p($.name),children:[i.jsx(uk,{style:{background:$.color}}),$.name]},$.name)),i.jsxs(dk,{children:[i.jsx(Bd,{type:"button",onClick:()=>o(new Set),children:"All"}),i.jsx(Bd,{type:"button",onClick:()=>o(new Set(e.map($=>$.name))),children:"None"})]})]}),i.jsxs(pk,{children:[i.jsx("svg",{ref:a,viewBox:`0 0 ${Ar} ${A0}`,style:{width:"100%",height:"auto",display:"block",overflow:"visible",cursor:"crosshair"},onMouseMove:g,onMouseLeave:()=>s(null),children:i.jsxs("g",{transform:`translate(${Fr},${F0})`,children:[y.map($=>i.jsxs("g",{children:[i.jsx("line",{x1:0,y1:$.y.toFixed(1),x2:Yo,y2:$.y.toFixed(1),stroke:"#E5E7EB",strokeWidth:1}),i.jsx("text",{x:-8,y:$.y.toFixed(1),textAnchor:"end",fontSize:7,fill:"#9CA3AF",dominantBaseline:"middle",children:yk($.v,n)})]},$.v)),i.jsx("line",{x1:0,y1:tn,x2:Yo,y2:tn,stroke:"#D1D5DB",strokeWidth:1}),t.map(($,z)=>z%2!==0&&z!==c-1?null:i.jsx("text",{x:x(z).toFixed(1),y:tn+13,textAnchor:"middle",fontSize:7,fill:"#9CA3AF",children:$},z)),e.map(($,z)=>i.jsx("polygon",{points:b(z),fill:$.color,fillOpacity:.78},$.name)),i.jsxs("g",{children:[i.jsx("line",{x1:x(S).toFixed(1),y1:0,x2:x(S).toFixed(1),y2:tn,stroke:"#6B7280",strokeWidth:1,strokeDasharray:"4,3",opacity:.55}),i.jsxs("text",{x:x(S).toFixed(1),y:-5,textAnchor:"middle",fontSize:7,fill:"#4B5563",fontWeight:"600",children:["Peak ",t[S]]})]}),l!==null&&i.jsx("line",{x1:x(l).toFixed(1),y1:0,x2:x(l).toFixed(1),y2:tn,stroke:"#374151",strokeWidth:1.5,opacity:.6})]})}),l!==null&&i.jsxs(fk,{style:{left:`${f}%`,transform:k},children:[i.jsx(hk,{children:t[l]}),e.map(($,z)=>r.has($.name)?null:i.jsxs(Ud,{children:[i.jsx(gk,{style:{background:$.color}}),i.jsx("span",{style:{flex:1},children:$.name}),i.jsx("span",{style:{fontWeight:600},children:Wd(d[l][z].val,n)})]},$.name)),i.jsxs(Ud,{style:{borderTop:"1px solid rgba(255,255,255,0.15)",marginTop:4,paddingTop:4},children:[i.jsx("span",{style:{flex:1,fontWeight:600},children:E}),i.jsx("span",{style:{fontWeight:700},children:Wd(w,n)})]})]})]})]})}const Hd=u.main`
  padding: 32px;
`,Qd=u(wc)`
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
`,vk=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,wk=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,bk=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: #EAF1FB;
  color: ${({theme:e})=>e.colors.blue300};
  flex-shrink: 0;
`,kk=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,jk=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,$k=u.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`,Ck=u.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral700};
`,Kd=u.button`
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
`,Sk=u.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  margin-bottom: 28px;
`,Ek=u.button`
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
`,vo=u.h2`
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
`,kl=u.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral500};
`,jl=u.p`
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
`;const Yi=u.p`
  margin: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral500};
`,Pk=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`,Tk=u.button`
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
`,Lk=u.div`
  position: relative;
`,Ik=u.button`
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
`,zk=u.div`
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
`,Rk=u.a`
  display: block;
  padding: 10px 16px;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  color: ${({$destructive:e,theme:t})=>e?"#DC2626":t.colors.neutral800};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,Dk=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Gd=u.div``,Jo=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral800};
  margin-bottom: 10px;
`,_0=u.button`
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
`,Mk=u.div`
  position: relative;
  display: inline-flex;
`,Nk=u.div`
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
`,Ak=u.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover .ent-tooltip { display: block; }
`,Fk=u.span`
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
`;function B0({instance:e,isCertCentral:t,plan:n}){const[r,o]=v.useState(!1),l=v.useRef(null);v.useEffect(()=>{if(!r)return;const d=m=>{l.current&&!l.current.contains(m.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[r]);const s=e.subscriptionType==="enterprise",a=e.tier||(s?"Enterprise":"E-commerce");let c;return s&&!t?c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This product is covered by an enterprise agreement with DigiCert."}),i.jsx("p",{children:"Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team."}),i.jsx("p",{children:"Contact your account manager for contract-related questions."})]}):s&&t?c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This CertCentral account is managed through an enterprise agreement with DigiCert."}),i.jsx("p",{children:"Billing, renewals, and any contract changes are handled directly by your DigiCert account team."}),i.jsx("p",{children:"Contact your account manager for any questions."})]}):c=i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This subscription is purchased and managed through DigiCert's self-service purchasing experience."}),i.jsx("p",{children:"You can manage payment methods, receipts, renewals, and purchases directly from this account."})]}),i.jsxs(wl,{children:[i.jsx(bl,{children:i.jsxs(kl,{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:["Tier",i.jsxs(Mk,{ref:l,children:[i.jsx(_0,{type:"button",onClick:()=>o(d=>!d),children:i.jsx(Xn,{size:13,color:"currentColor"})}),r&&i.jsx(Nk,{children:c})]})]})}),i.jsx(jl,{children:a}),n&&i.jsx(Yi,{children:n})]})}function Ok(e){const t=new Date(e),r=Math.ceil((t-new Date)/(1e3*60*60*24));return r>0?r:0}function _k({dateStr:e,sub:t}){const n=Ok(e);return i.jsxs(wl,{children:[i.jsxs(bl,{children:[i.jsx(kl,{children:"Renewal date"}),i.jsx(g0,{size:15,color:"#9CA3AF"})]}),i.jsx(jl,{children:e}),t&&i.jsx(Yi,{children:t}),!t&&i.jsxs(Yi,{children:[n," days remaining"]})]})}function Bk({term:e}){return i.jsxs(wl,{children:[i.jsxs(bl,{children:[i.jsx(kl,{children:"Contract term"}),i.jsx(g0,{size:15,color:"#9CA3AF"})]}),i.jsx(jl,{style:{fontSize:15,fontWeight:600},children:e||"—"})]})}const dr=u.div`
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
`,wo=u.span`
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
`;function Uk({entitlements:e,contractType:t}){return e.length===0?i.jsx(U0,{children:"Usage data is not available for this product yet. Contact your account manager for the latest entitlement details."}):t==="drawdown"?i.jsx(dr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"45%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{style:{width:"20%"}})]})}),i.jsx("tbody",{children:e.map(n=>i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),i.jsx(W,{$align:"right",children:n.purchased.toLocaleString()}),i.jsx(W,{})]},n.name))})]})}):i.jsx(dr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"30%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:e.map(n=>{const r=n.allocated>0?n.consumed/n.allocated:0,o=n.remaining<0?"error":r>=.8?"warning":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),i.jsx(W,{$align:"right",children:n.allocated.toLocaleString()}),i.jsx(W,{$align:"right",children:n.consumed.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(wo,{$tone:o,children:n.remaining<0?`Exceeded by ${Math.abs(n.remaining).toLocaleString()}`:n.remaining===0?"0":n.remaining.toLocaleString()})})]},n.name)})})]})})}const Wk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`,Vk=u.div`
  display: inline-flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Yd=u.button`
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
`;function Jd({entitlements:e,purchasedOnly:t}){return i.jsx(dr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{children:"Entitlement"}),t?i.jsxs(i.Fragment,{children:[i.jsx(U,{$align:"right",children:"Current active"}),i.jsx(U,{$align:"right",children:"Period peak"}),i.jsx(U,{$align:"right",children:"Peak date"})]}):i.jsxs(i.Fragment,{children:[i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{$align:"right",children:"Consumed"}),i.jsx(U,{$align:"right",children:"Remaining"})]})]})}),i.jsx("tbody",{children:e.map(n=>{var o,l;const r=n.remaining<0?"error":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:n.name}),t?i.jsxs(i.Fragment,{children:[i.jsx(W,{$align:"right",children:((o=n.consumed)==null?void 0:o.toLocaleString())??"—"}),i.jsx(W,{$align:"right",children:((l=n.periodPeak)==null?void 0:l.toLocaleString())??"—"}),i.jsx(W,{$align:"right",children:n.periodPeakDate??"—"})]}):i.jsxs(i.Fragment,{children:[i.jsx(W,{$align:"right",children:n.purchased.toLocaleString()}),i.jsx(W,{$align:"right",children:n.consumed.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(wo,{$tone:r,children:n.remaining<0?`Exceeded by ${Math.abs(n.remaining).toLocaleString()}`:n.remaining.toLocaleString()})})]})]},n.name)})})]})})}function Hk({series:e}){return i.jsx(dr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Certificate type"}),i.jsx(U,{$align:"right",children:"Current month ($)"}),i.jsx(U,{$align:"right",children:"Period peak ($)"}),i.jsx(U,{$align:"right",children:"Peak date"})]})}),i.jsx("tbody",{children:e.map(t=>{const n=t.monthlyCost[t.monthlyCost.length-1]??0,r=Math.max(...t.monthlyCost);return i.jsxs("tr",{children:[i.jsx(W,{children:t.name}),i.jsxs(W,{$align:"right",children:["$",n.toLocaleString()]}),i.jsxs(W,{$align:"right",children:["$",r.toLocaleString()]}),i.jsx(W,{$align:"right",children:t.periodPeakDate})]},t.name)})})]})})}function Qk({instance:e,purchasedOnly:t}){const[n,r]=v.useState("table"),{peakUsageData:o}=e,l=o.series.map(s=>({...s,monthly:s.monthlyCost}));return i.jsxs(Yt,{children:[i.jsxs(Wk,{children:[i.jsx(vo,{style:{margin:0},children:t?"Entitlements and usage":"Consumption"}),i.jsxs(Vk,{children:[i.jsx(Yd,{$active:n==="table",onClick:()=>r("table"),children:"Table"}),i.jsx(Yd,{$active:n==="chart",onClick:()=>r("chart"),children:"Chart"})]})]}),n==="table"?t?i.jsxs(i.Fragment,{children:[i.jsx(Jo,{style:{marginBottom:10},children:"Consumption (Quantities)"}),i.jsx(Jd,{entitlements:e.entitlements,purchasedOnly:!0}),i.jsxs("div",{style:{marginTop:24},children:[i.jsx(Jo,{style:{marginBottom:10},children:"Consumption (USD)"}),i.jsx(Hk,{series:o.series})]})]}):i.jsx(Jd,{entitlements:e.entitlements,purchasedOnly:!1}):i.jsxs(Dk,{children:[i.jsxs(Gd,{children:[i.jsx(Jo,{children:"Consumption (USD)"}),i.jsx(Vd,{series:l,monthLabels:o.monthLabels,yFormat:"$"})]}),i.jsxs(Gd,{children:[i.jsx(Jo,{children:"Consumption quantities"}),i.jsx(Vd,{series:o.series,monthLabels:o.monthLabels})]})]})]})}const Kk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.white};
  flex-wrap: wrap;
`,Gk=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Yk=u.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.neutral900};
`,Jk=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Xk=u.a`
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
`,qk=u.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function Zk({instance:e}){const{purchasedControls:t=[],includedResources:n=[]}=e;return i.jsxs(i.Fragment,{children:[i.jsxs(Yt,{children:[i.jsx(vo,{children:"Entitlements and usage"}),i.jsx(dr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:t.map(r=>{const o=r.purchased>0?r.used/r.purchased:0,l=r.remaining<0?"error":o>=.8?"warning":void 0,s=r.planIncluded!=null&&r.addOnPurchased!=null;return i.jsxs("tr",{children:[i.jsx(W,{children:s?i.jsxs(Ak,{children:[r.name,i.jsx(_0,{as:"span",style:{cursor:"default"},children:i.jsx(Xn,{size:13,color:"currentColor"})}),i.jsxs(Fk,{className:"ent-tooltip",children:["Includes ",r.planIncluded," keypairs with your current plan + ",r.addOnPurchased," purchased keypairs."]})]}):r.name}),i.jsx(W,{$align:"right",children:r.purchased.toLocaleString()}),i.jsx(W,{$align:"right",children:r.used.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(wo,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]}),i.jsxs(Yt,{children:[i.jsx(vo,{children:"Included resources"}),i.jsx(qk,{children:"Resource quotas included with your plan. Quotas increase automatically when you upgrade your plan."}),i.jsx(dr,{children:i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Entitlement"}),i.jsx(U,{$align:"right",children:"Allocated"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Remaining"})]})}),i.jsx("tbody",{children:n.map(r=>{const o=r.available>0?r.used/r.available:0,l=r.remaining<0?"error":o>=.8?"warning":void 0;return i.jsxs("tr",{children:[i.jsx(W,{children:r.name}),i.jsx(W,{$align:"right",children:typeof r.available=="number"?r.available.toLocaleString():r.available}),i.jsx(W,{$align:"right",children:r.used.toLocaleString()}),i.jsx(W,{$align:"right",children:i.jsx(wo,{$tone:l,children:r.remaining.toLocaleString()})})]},r.name)})})]})})]})]})}function ej(){return i.jsx(Yt,{children:i.jsxs(Kk,{children:[i.jsxs(Gk,{children:[i.jsx(Yk,{children:"Manage finances and funds"}),i.jsx(Jk,{children:"View purchase history, balance, account pricing, deposit funds, and pay invoices in CertCentral."})]}),i.jsxs(Xk,{href:"/certcentral-finances.html",target:"_blank",rel:"noopener noreferrer",children:["Manage finances",i.jsx(Gi,{size:14,color:"currentColor"})]})]})})}function tj({instance:e,isCertCentral:t}){return i.jsx(Yt,{children:i.jsxs(O0,{$cols:2,children:[i.jsx(B0,{instance:e,isCertCentral:t,plan:e.plan}),i.jsx(Bk,{term:e.contractTerm})]})})}function nj({instance:e,isCertCentral:t,showLastMonth:n=!0}){var o,l;const r=((l=(o=e.receipts)==null?void 0:o[0])==null?void 0:l.amount)??e.billing.price.split(" / ")[0];return i.jsx(Yt,{children:i.jsxs(O0,{$cols:n?3:2,children:[i.jsx(B0,{instance:e,isCertCentral:t}),n&&i.jsxs(wl,{children:[i.jsxs(bl,{children:[i.jsx(kl,{children:"Last 30 days"}),i.jsx(ov,{size:15,color:"#9CA3AF"})]}),i.jsx(jl,{children:r}),i.jsx(Yi,{children:"Last month's spend"})]}),i.jsx(_k,{dateStr:e.billing.nextChargeDate,sub:"Auto-renew enabled"})]})})}const rj=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`,oj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({theme:e})=>e.colors.neutral50}; }
`,ij=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,lj=u.button`
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
`,sj=u.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,aj=u.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,cj=u.div`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
`,uj=u.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
`,dj=u.div`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
  margin-top: 2px;
`,pj=u.div`
  padding: 16px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral500};
  text-align: center;
`;function fj({category:e}){const[t,n]=v.useState(e.products.length>0);return i.jsxs(rj,{children:[i.jsxs(oj,{onClick:()=>n(r=>!r),children:[i.jsxs(ij,{children:[i.jsx(lj,{type:"button","aria-expanded":t,"aria-label":t?"Collapse":"Expand",onClick:r=>{r.stopPropagation(),n(o=>!o)},children:t?i.jsx(h0,{size:14,color:"currentColor"}):i.jsx(fn,{size:14,color:"currentColor"})}),i.jsx(sj,{children:e.name})]}),i.jsx(aj,{href:"#",onClick:r=>r.stopPropagation(),children:e.buyLabel})]}),t&&i.jsx(cj,{children:e.products.length===0?i.jsx(pj,{children:"No products purchased yet."}):i.jsxs(kn,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(U,{style:{width:"40%"},children:"Product"}),i.jsx(U,{$align:"right",children:"Purchased"}),i.jsx(U,{$align:"right",children:"Used"}),i.jsx(U,{$align:"right",children:"Available"})]})}),i.jsx("tbody",{children:e.products.map((r,o)=>i.jsxs("tr",{children:[i.jsxs(W,{children:[i.jsx(uj,{children:r.name}),i.jsx(dj,{children:r.type})]}),i.jsx(W,{$align:"right",children:r.purchased}),i.jsx(W,{$align:"right",children:r.used}),i.jsx(W,{$align:"right",children:i.jsx(wo,{$tone:r.available===0?"error":void 0,children:r.available})})]},o))})]})})]})}function hj({categories:e}){return i.jsxs(Yt,{children:[i.jsx(vo,{children:"Products"}),e.map(t=>i.jsx(fj,{category:t},t.id))]})}function gj(){const{subscriptionId:e}=Yx(),[t,n]=v.useState(null),[r,o]=v.useState(!1),[l,s]=v.useState(!1),[a,c]=v.useState(!1),d=v.useRef(null),[m]=Nh(),h=m.get("env"),x=h?xi().find(f=>f.id===e&&f.envId===h)??xi().find(f=>{var k;return f.id===e&&((k=f.envIds)==null?void 0:k.includes(h))}):xi().find(f=>f.id===e&&f.envIds!=null)??y0().find(f=>f.id===e),j=(()=>{var f;return x?h&&x.envIds?{label:"Environment",value:((f=hn.find(k=>k.id===h))==null?void 0:f.name)??h}:x.envNames?{label:"Available in",value:x.envNames.join(", ")}:x.envName?{label:"Environment",value:x.envName}:null:null})(),b=e==="certcentral"||((e==null?void 0:e.startsWith("certcentral-"))??!1);if(v.useEffect(()=>{document.title=x?`${x.name} — DigiCert ONE`:"Subscription — DigiCert ONE"},[x==null?void 0:x.id,x==null?void 0:x.name]),v.useEffect(()=>{var f;n(((f=x==null?void 0:x.instances[0])==null?void 0:f.instanceId)??null)},[e]),v.useEffect(()=>{if(!a)return;const f=w=>{d.current&&!d.current.contains(w.target)&&c(!1)},k=w=>{w.key==="Escape"&&c(!1)};return document.addEventListener("mousedown",f),document.addEventListener("keydown",k),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("keydown",k)}},[a]),!x)return i.jsxs(Hd,{children:[i.jsxs(Qd,{to:-1,children:[i.jsx(Qi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),i.jsx(U0,{children:"This subscription could not be found."})]});const y=x.instances.find(f=>f.instanceId===t)||x.instances[0],S=b&&y.subscriptionType==="ecommerce",g=b?"CertCentral":x.name,p=S?[{label:"Open CertCentral"},{label:"Documentation"},{label:"Product overview"},{label:"Cancel subscription",destructive:!0}]:[{label:`Open ${g}`},{label:"Product overview"},{label:"Documentation"}];return i.jsxs(Hd,{children:[i.jsxs(Qd,{to:-1,children:[i.jsx(Qi,{size:14,color:"currentColor"}),"Back to subscriptions"]}),i.jsxs(vk,{children:[i.jsxs(wk,{children:[i.jsx(bk,{children:bn(x.iconType,24,"currentColor")}),i.jsxs(kk,{children:[i.jsx(jk,{children:i.jsx($k,{children:x.name})}),(j||x.accountName)&&i.jsxs(Ck,{children:[j&&i.jsxs(i.Fragment,{children:[i.jsxs("strong",{children:[j.label,":"]})," ",j.value]}),j&&x.accountName&&i.jsx(i.Fragment,{children:" | "}),x.accountName&&i.jsxs(i.Fragment,{children:[i.jsx("strong",{children:"Account name:"})," ",x.accountName]}),x.accountId&&i.jsxs(i.Fragment,{children:[" | ",i.jsx("strong",{children:"Account ID:"})," ",x.accountId]})]})]})]}),i.jsxs(Pk,{children:[S?i.jsxs(Kd,{type:"button",onClick:()=>s(!0),children:[i.jsx(ur,{size:15,color:"currentColor"}),"Need help?"]}):i.jsxs(Kd,{type:"button",onClick:()=>o(!0),children:[i.jsx(ur,{size:15,color:"currentColor"}),"Need help?"]}),S&&i.jsxs(Tk,{type:"button",children:[i.jsx(rv,{size:14,color:"currentColor"}),"Buy certificates"]}),i.jsxs(Lk,{ref:d,children:[i.jsx(Ik,{type:"button",onClick:()=>c(f=>!f),"aria-label":"More actions","aria-expanded":a,children:i.jsx(Ki,{size:15,color:"currentColor"})}),a&&i.jsx(zk,{children:p.map(f=>i.jsx(Rk,{$destructive:f.destructive,href:"#",onClick:()=>c(!1),children:f.label},f.label))})]})]})]}),x.instances.length>1&&i.jsx(Sk,{role:"tablist","aria-label":"CertCentral instances",children:x.instances.map(f=>i.jsx(Ek,{role:"tab",type:"button",$active:f.instanceId===y.instanceId,"aria-selected":f.instanceId===y.instanceId,onClick:()=>n(f.instanceId),children:f.subscriptionType==="enterprise"?"Enterprise":"E-commerce"},f.instanceId))}),y.subscriptionType==="enterprise"?i.jsxs(i.Fragment,{children:[i.jsx(tj,{instance:y,isCertCentral:b}),x.id==="software-trust"?i.jsx(Zk,{instance:y}):b&&y.contractType==="peak-usage"?i.jsx(Qk,{instance:y,purchasedOnly:x.accountId==="1001445"}):i.jsxs(Yt,{children:[i.jsx(vo,{children:"Entitlements and usage"}),i.jsx(Uk,{entitlements:y.entitlements,contractType:y.contractType})]}),b&&x.accountId!=="1001445"&&x.accountId!=="2003891"&&i.jsx(ej,{})]}):i.jsxs(i.Fragment,{children:[i.jsx(nj,{instance:y,isCertCentral:b,showLastMonth:x.accountId!=="3007234"}),i.jsx(hj,{categories:y.productCategories})]}),i.jsx(N0,{open:r,onClose:()=>o(!1)}),i.jsx(lk,{open:l,onClose:()=>s(!1)})]})}const mj=u.div`
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
`,xj=u.div`
  color: ${({theme:e})=>e.colors.neutral400};
`,yj=u.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,vj=u.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme:e})=>e.colors.neutral600};
`;function W0({icon:e,title:t,children:n,action:r}){return i.jsxs(mj,{children:[i.jsx(xj,{children:e}),t&&i.jsx(yj,{children:t}),i.jsx(vj,{children:n}),r]})}const V0=u.a`
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
`,wj=u(V0)`
  background: ${({theme:e})=>e.colors.white};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: ${({theme:e})=>e.colors.blue300};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral50};
    color: ${({theme:e})=>e.colors.blue500};
    border-color: ${({theme:e})=>e.colors.blue500};
  }
`;function H0({variant:e="primary",subject:t,...n}){const r=new URLSearchParams({subject:t||`Question about my DigiCert ONE subscription (${Pe.name})`}),o=`mailto:${Pe.email}?${r.toString()}`,l=e==="outline"?wj:V0;return i.jsx(l,{href:o,...n,children:"Contact account manager"})}const Xd=u.main`
  padding: 32px;
`,bj=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`,kj=u.div``,qd=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,Zd=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
`,jj=u.div`
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
`,$j=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,Cj=u.div`
  margin-left: auto;
`,Sc=u.button`
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
`,Sj=u(Sc)`
  background: ${({theme:e})=>e.colors.blue300};
  border-color: ${({theme:e})=>e.colors.blue300};
  color: white;

  &:hover { background: ${({theme:e})=>e.colors.blue500}; border-color: ${({theme:e})=>e.colors.blue500}; }
`,Ej=u(Sc)``,Pj=u.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Tj=u.table`
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
`,Lj=u.a`
  color: ${({theme:e})=>e.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`,fs={Upcoming:{bg:"#FFF8EB",border:"#F5B517",color:"#92660A"},Overdue:{bg:"#FEF2F2",border:"#FCA5A5",color:"#DC2626"},Paid:{bg:"#F0FDF4",border:"#86EFAC",color:"#166534"},Refund:{bg:"#F5F3FF",border:"#C4B5FD",color:"#6D28D9"}},Ij=u.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$status:e})=>{var t;return((t=fs[e])==null?void 0:t.bg)||"#F3F4F6"}};
  border: 1px solid ${({$status:e})=>{var t;return((t=fs[e])==null?void 0:t.border)||"#D1D5DB"}};
  color: ${({$status:e})=>{var t;return((t=fs[e])==null?void 0:t.color)||"#374151"}};
`,zj=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Rj=u.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,Dj=u.button`
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
`,Mj=u.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.neutral600};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral50};
`,Nj=u.div`
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
`,Aj=u.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`,Fj=["All","Invoices","Receipts","Refunds"],ep=[{id:"INV-2025-089",type:"Invoice",issuedOn:"Apr 2, 2025",status:"Upcoming",amount:"$2,100.00",dueOn:"May 2, 2025",orderedBy:"John Doe"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 20, 2025",status:"Overdue",amount:"$1,500.00",dueOn:"—",orderedBy:"Jane Smith"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 15, 2025",status:"Overdue",amount:"$100.00",dueOn:"—",orderedBy:"Bob Brown"},{id:"INV-2025-090",type:"Invoice",issuedOn:"Mar 10, 2025",status:"Overdue",amount:"$750.00",dueOn:"Mar 10, 2025",orderedBy:"Alice John"},{id:"INV-2025-090",type:"Receipt",issuedOn:"Mar 1, 2025",status:"Overdue",amount:"$1,200.00",dueOn:"—",orderedBy:"Kate Do"},{id:"INV-2025-091",type:"Invoice",issuedOn:"Feb 20, 2025",status:"Paid",amount:"$900.00",dueOn:"Feb 20, 2025",orderedBy:"Sarah Lee"},{id:"REC-2025-004",type:"Receipt",issuedOn:"Feb 18, 2025",status:"Paid",amount:"$500.00",dueOn:"—",orderedBy:"Emily Stone"},{id:"INV-2025-092",type:"Invoice",issuedOn:"Feb 15, 2025",status:"Paid",amount:"$600.00",dueOn:"Feb 15, 2025",orderedBy:"Alex John"},{id:"REC-2025-005",type:"Receipt",issuedOn:"Feb 10, 2025",status:"Paid",amount:"$1,800.00",dueOn:"—",orderedBy:"Kaleb"}];function Oj({scenario:e}){const[t,n]=v.useState("All"),[r,o]=v.useState(!1);if(v.useEffect(()=>{document.title="Receipts and invoices — DigiCert ONE"},[]),e==="enterprise")return i.jsxs(Xd,{children:[i.jsx(qd,{children:"Receipts and invoices"}),i.jsx(Zd,{style:{marginBottom:24},children:"Download receipts, invoices, and other billing documents for your account."}),i.jsx(W0,{icon:i.jsx(qy,{size:40,color:"currentColor"}),title:"Receipts are not available here yet",action:i.jsx(H0,{subject:"Request for invoices and billing documents"}),children:"For invoices, receipts, or billing documents, contact your DigiCert account manager."})]});const l=4,s="$2,520.00",a="Nov 20, 2025",c=t==="All"?ep:ep.filter(d=>t==="Invoices"?d.type==="Invoice":t==="Receipts"?d.type==="Receipt":t==="Refunds"?d.type==="Refund":!0);return i.jsxs(Xd,{children:[i.jsxs(Nj,{children:[i.jsx(Aj,{children:i.jsx(Xn,{size:16,color:"currentColor"})}),i.jsxs("span",{children:["Receipts and invoices apply to ",i.jsx("strong",{children:"self-service (e-commerce) subscriptions only"}),". Enterprise contract billing documents are managed separately — contact your account manager for enterprise invoices or billing records."]})]}),i.jsx(bj,{children:i.jsxs(kj,{children:[i.jsx(qd,{children:"Receipts and invoices"}),i.jsx(Zd,{children:"Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage."})]})}),i.jsxs(jj,{children:[i.jsxs(us,{$alert:!0,children:[i.jsxs(ds,{children:[i.jsx(ld,{size:14,color:"#DC2626"}),"Invoices overdue"]}),i.jsx(ps,{children:l})]}),i.jsxs(us,{$alert:!0,children:[i.jsxs(ds,{children:[i.jsx(ld,{size:14,color:"#DC2626"}),"Total balance overdue"]}),i.jsx(ps,{$blue:!0,children:s})]}),i.jsxs(us,{children:[i.jsx(ds,{children:"Next invoice due"}),i.jsx(ps,{$blue:!0,children:a})]})]}),i.jsxs($j,{children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsxs(Sc,{type:"button",onClick:()=>o(d=>!d),"aria-haspopup":"listbox","aria-expanded":r,children:["View: ",t,i.jsx(fn,{size:13,color:"currentColor"})]}),r&&i.jsx("div",{style:{position:"absolute",top:"100%",left:0,marginTop:4,background:"white",border:"1px solid #E2E5E8",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:100,minWidth:140,overflow:"hidden"},children:Fj.map(d=>i.jsx("button",{type:"button",onClick:()=>{n(d),o(!1)},style:{display:"block",width:"100%",padding:"9px 16px",textAlign:"left",border:"none",cursor:"pointer",fontSize:13,fontFamily:"inherit",background:d===t?"#EAF1FB":"white",color:d===t?"#0174C3":"#1A1F27",fontWeight:d===t?500:400},children:d},d))})]}),i.jsxs(Sj,{type:"button",children:[i.jsx(nv,{size:14,color:"currentColor"}),"Filter",i.jsx(fn,{size:13,color:"currentColor"})]}),i.jsx(Cj,{children:i.jsxs(Ej,{type:"button",children:["Download CSV",i.jsx(fn,{size:13,color:"currentColor"})]})})]}),i.jsxs(Pj,{children:[i.jsxs(Tj,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx(St,{style:{width:"140px"},children:"Invoice"}),i.jsx(St,{children:"Type"}),i.jsx(St,{children:"Issued on"}),i.jsx(St,{children:"Status"}),i.jsx(St,{$align:"right",children:"Amount"}),i.jsx(St,{children:"Due on"}),i.jsx(St,{children:"Ordered by"}),i.jsx(St,{})]})}),i.jsx("tbody",{children:c.map((d,m)=>i.jsxs("tr",{children:[i.jsx(Et,{children:i.jsx(Lj,{href:"#",children:d.id})}),i.jsx(Et,{children:d.type}),i.jsx(Et,{children:d.issuedOn}),i.jsx(Et,{children:i.jsx(Ij,{$status:d.status,children:d.status})}),i.jsx(Et,{$align:"right",children:d.amount}),i.jsx(Et,{children:d.dueOn}),i.jsx(Et,{children:d.orderedBy}),i.jsx(Et,{children:i.jsxs(zj,{children:[(d.status==="Overdue"||d.status==="Upcoming")&&i.jsx(Rj,{type:"button",children:"Pay"}),i.jsx(Dj,{type:"button","aria-label":"Download",children:i.jsx(tv,{size:15,color:"currentColor"})})]})})]},`${d.id}-${m}`))})]}),i.jsxs(Mj,{children:["1 to ",c.length," of 8,618"]})]})]})}const tp=u.main`
  padding: 32px;
`,_j=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,Bj=u.div``,np=u.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,rp=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral600};
  max-width: 600px;
`,Uj=u.a`
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
`,op=u.div`
  margin-bottom: 32px;
`,ip=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,lp=u.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,sp=u.button`
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
`,Wj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
`,Vj=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Hj=u.div`
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
`,Qj=u.div``,Kj=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`,Gj=u.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Yj=u.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({theme:e})=>e.colors.neutral800};
  color: ${({theme:e})=>e.colors.white};
  font-size: 11px;
  font-weight: 600;
`,Jj=u.p`
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
`,Xj=u.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.white};
  position: relative;
`,qj=u.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral900};
`,Zj=u(Q0)`
  position: absolute;
  top: 16px;
  right: 16px;
`,Xo=u.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`,qo=u.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.neutral600};
`,Zo=u.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.neutral900};
  line-height: 1.5;
`,e$=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`,t$=u.div`
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
`,n$=u.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({theme:e})=>e.colors.blue300};
`;function r$({scenario:e}){return v.useEffect(()=>{document.title="Payment details — DigiCert ONE"},[]),e==="enterprise"?i.jsxs(tp,{children:[i.jsx(np,{children:"Payment details"}),i.jsx(rp,{style:{marginBottom:24},children:"View how your account is billed and who to contact about payment information."}),i.jsx(W0,{icon:i.jsx(ev,{size:40,color:"currentColor"}),title:"Payment details are managed through your enterprise contract",action:i.jsx(H0,{subject:"Update billing or payment information"}),children:"To update billing or payment information, contact your DigiCert account manager."})]}):i.jsxs(tp,{children:[i.jsxs(t$,{children:[i.jsx(n$,{children:i.jsx(Xn,{size:16,color:"currentColor"})}),i.jsxs("span",{children:["Payment details apply to ",i.jsx("strong",{children:"self-service (e-commerce) subscriptions only"}),". Enterprise contract billing is managed separately — contact your account manager for invoices or payment changes related to enterprise products."]})]}),i.jsxs(_j,{children:[i.jsxs(Bj,{children:[i.jsx(np,{children:"Payment details"}),i.jsx(rp,{children:"Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method."})]}),i.jsxs(Uj,{href:"#",children:[i.jsx(Xn,{size:15,color:"currentColor"}),"Need help?"]})]}),i.jsxs(op,{children:[i.jsxs(ip,{children:[i.jsx(lp,{children:"Payment methods"}),i.jsxs(sp,{type:"button",children:[i.jsx(id,{size:14,color:"currentColor"}),"Add payment method"]})]}),i.jsxs(Wj,{children:[i.jsxs(Vj,{children:[i.jsx(Hj,{children:"VISA"}),i.jsxs(Qj,{children:[i.jsxs(Kj,{children:[i.jsx(Gj,{children:"Visa •••• 8350"}),i.jsx(Yj,{children:"Default"})]}),i.jsx(Jj,{children:"Expires 02/28"})]})]}),i.jsx(Q0,{type:"button","aria-label":"Payment method options",children:i.jsx(Ki,{size:16,color:"currentColor"})})]})]}),i.jsxs(op,{children:[i.jsxs(ip,{children:[i.jsx(lp,{children:"Billing contacts"}),i.jsxs(sp,{type:"button",children:[i.jsx(id,{size:14,color:"currentColor"}),"Add billing contact"]})]}),i.jsxs(Xj,{children:[i.jsx(Zj,{type:"button","aria-label":"Contact options",children:i.jsx(Ki,{size:16,color:"currentColor"})}),i.jsx(qj,{children:"John Doe"}),i.jsxs(Xo,{children:[i.jsx(qo,{children:"Address"}),i.jsxs(Zo,{children:["123 Main Street",i.jsx("br",{}),"Suite 100",i.jsx("br",{}),"San Francisco, CA 94105",i.jsx("br",{}),"United States"]})]}),i.jsxs(Xo,{children:[i.jsx(qo,{children:"Email address"}),i.jsx(Zo,{children:"john.doe@winthecustomer.com"})]}),i.jsxs(Xo,{children:[i.jsx(qo,{children:"Phone number"}),i.jsx(Zo,{children:"650 123 4567"})]}),i.jsxs(Xo,{children:[i.jsxs(e$,{children:[i.jsx(qo,{style:{margin:0},children:"VAT ID"}),i.jsx(Xn,{size:14,color:"#0174C3"})]}),i.jsx(Zo,{children:"23503820"})]})]})]})]})}const o$=u.main`
  padding: 32px;
  max-width: 1100px;
`,i$=u.div`
  margin-bottom: 36px;
`,l$=u.h1`
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.neutral900};
`,s$=u.p`
  margin: 0;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.neutral700};
  line-height: 1.5;
  max-width: 560px;
`,a$=u.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,c$=u.div`
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
`,u$=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,d$=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,p$=u.div`
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
`,f$=u.a`
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.blue300};
  text-decoration: none;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`,h$=u.span`
  flex-shrink: 0;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$variant:e})=>e==="included"?"rgba(39,168,114,0.1)":e==="licensed"?"#EAF1FB":"#F3F4F6"};
  color: ${({$variant:e})=>e==="included"?"#1F8F60":e==="licensed"?"#0174C3":"#4B5563"};
`,g$=u.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: 1.5;
`,m$=u.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,x$=u.li`
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
`,y$=u.div`
  margin-top: auto;
  padding-top: 4px;
`,v$=u.button`
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
`,w$=[{abbr:"TL",color:"#0174C3",name:"Trust Lifecycle",status:"essentials",statusLabel:"Essentials",description:"Modernizes certificate lifecycle visibility and management across public and private CAs.",features:["Gain full visibility with discovery and a centralized certificate inventory","Manage certificates regardless of who issued them (CA-agnostic control)","Automate enrollment, renewal, and provisioning at enterprise scale","Prevent outages with real-time monitoring, alerts, and reporting"],action:"Upgrade"},{abbr:"DNS",color:"#0174C3",name:"DigiCert DNS",status:null,description:"Modern DNS management for secure, scalable global traffic delivery",features:["Unified DNS platform for secure, scalable deployments","Real-time insights to optimize performance and availability","Intelligent monitoring to enforce best practices and compliance","Global traffic routing for speed, resilience, and reliability"],action:"Learn more"},{abbr:"CC",color:"#0174C3",name:"CertCentral",status:"included",statusLabel:"Included",description:"Centralizes certificate purchasing and management with scale, compliance, APIs—and AI-based validation automation.",features:["Buy and manage public trust certificates across TLS/SSL, S/MIME, Code Signing, and more","AI-based validation automation to speed issuance and reduce manual effort","Multi-language support with regional data residency options","Renewal reminders, notifications, plus flexible APIs and webhooks for existing workflows"],action:"Buy certificates"},{abbr:"ST",color:"#0174C3",name:"Software Trust",status:null,description:"Secure and govern software releases with trusted code signing",features:["Centralized access control for decentralized signing operations","Policy-based signing to ensure compliance and integrity","CI/CD integration across modern development platforms","Automated signing for releases, artifacts, and SBOMs"],action:"Learn more"},{abbr:"CA+",color:"#0174C3",name:"Private CA",status:"licensed",statusLabel:"Licensed",description:"Enterprise-grade private PKI with centralized control and governance",features:["Centralized governance for internal public key infrastructure","Rapid deployment of root and intermediate certificate authorities","Support for cloud, on-prem, and hybrid environments","Hardware-backed key protection with modern cryptographic standards"],action:"Learn more"},{abbr:"IoT",color:"#0174C3",name:"Device Trust",status:null,description:"End-to-end device identity and security lifecycle management",features:["Device protection across manufacturing, deployment, and retirement","Hardware-rooted identities for every connected device","Automated onboarding, configuration, and updates at scale","Readiness for evolving cryptographic and post-quantum standards"],action:"Learn more"},{abbr:"CT",color:"#0174C3",name:"Content Trust",status:null,description:"Centralized control and governance for document signing workflows",features:["Centralized visibility across signing activity, policies, and certificates","PKI-backed digital signing aligned with global trust standards","Seamless integration with existing tools via CSC-based APIs","Cloud-based key protection to reduce loss, theft, and misuse"],action:"Learn more"}];function b$(){return v.useEffect(()=>{document.title="Explore DigiCert products — DigiCert ONE"},[]),i.jsxs(o$,{children:[i.jsxs(i$,{children:[i.jsx(l$,{children:"Explore DigiCert products"}),i.jsx(s$,{children:"Build and protect digital trust across every certificate, identity, and device — all from one platform."})]}),i.jsx(a$,{children:w$.map(e=>i.jsxs(c$,{children:[i.jsxs(u$,{children:[i.jsxs(d$,{children:[i.jsx(p$,{$color:e.color,children:e.abbr}),i.jsx(f$,{href:"#",children:e.name})]}),e.status&&i.jsx(h$,{$variant:e.status,children:e.statusLabel})]}),i.jsx(g$,{children:e.description}),i.jsx(m$,{children:e.features.map(t=>i.jsx(x$,{children:t},t))}),i.jsx(y$,{children:i.jsx(v$,{type:"button",children:e.action})})]},e.name))})]})}function k$({containerRef:e}){const{pathname:t}=rt();return v.useEffect(()=>{e.current?e.current.scrollTop=0:window.scrollTo(0,0)},[t,e]),null}const j$=Fy`
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
`,$$=u.div`
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
`;function ap(){const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"}function C$(){const[e,t]=v.useState(()=>typeof window<"u"?ap():"desktop");return v.useEffect(()=>{const n=()=>t(ap());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function S$(){const[e,t]=v.useState("dashboard"),[n,r]=v.useState(!1),[o,l]=v.useState(!0),[s,a]=v.useState(null),[c,d]=v.useState("mixed"),m=v.useCallback(()=>r(g=>!g),[]),h=v.useCallback(()=>r(!1),[]),x=v.useCallback(()=>l(g=>!g),[]),j=v.useCallback(g=>{t(g),l(!0)},[]),b=v.useCallback(g=>{t(g),l(!0),r(!1)},[]),y=v.useCallback(g=>{a(p=>p===g?null:g)},[]),S=v.useCallback(()=>a(null),[]);return{activeProductId:e,isDrawerOpen:n,isSpokeOpen:o,activeTopNav:s,billingScenario:c,toggleDrawer:m,closeDrawer:h,toggleSpoke:x,setBillingScenario:d,selectProduct:j,selectProductFromDrawer:b,openTopNav:y,closeTopNav:S}}function E$(){const{activeProductId:e,isDrawerOpen:t,isSpokeOpen:n,activeTopNav:r,billingScenario:o,toggleDrawer:l,closeDrawer:s,toggleSpoke:a,selectProduct:c,selectProductFromDrawer:d,openTopNav:m,closeTopNav:h}=S$(),x=C$(),j=x==="mobile",b=v.useRef(null);v.useEffect(()=>{x!=="mobile"&&t&&s()},[x,t,s]),v.useEffect(()=>{const g=b.current;g&&(j&&t?(g.setAttribute("inert",""),g.setAttribute("aria-hidden","true")):(g.removeAttribute("inert"),g.removeAttribute("aria-hidden")))},[j,t]);const y=n?"276px":"56px",S=r==="ai-assist"?"400px":"0px";return i.jsxs(i.Fragment,{children:[i.jsx(j$,{}),i.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),i.jsx(Xv,{isDrawerOpen:t,onToggleDrawer:l,activeTopNav:r,onOpenTopNav:m,onCloseTopNav:h,onSelectProduct:c,cartCount:3}),i.jsx(rw,{activeProductId:e,onSelectProduct:c}),i.jsx(xw,{activeProductId:e,isSpokeOpen:n,onToggleSpoke:a,billingScenario:o}),i.jsx($w,{open:t,activeProductId:e,onSelectProduct:d,onClose:s}),i.jsxs($$,{ref:b,id:"main-content",$leftOffset:y,$rightOffset:S,children:[i.jsx(k$,{containerRef:b}),i.jsxs(p1,{children:[i.jsx(Ln,{path:"/",element:i.jsx(u1,{to:"/dashboard",replace:!0})}),uv.filter(g=>g!=="/").map(g=>{let p=i.jsx(bd,{});return g==="/dashboard"?p=i.jsx(i2,{}):g==="/settings/billing"?p=i.jsx(yb,{}):g==="/settings/billing/receipts"?p=i.jsx(Oj,{scenario:o}):g==="/settings/billing/payment-details"&&(p=i.jsx(r$,{scenario:o})),i.jsx(Ln,{path:g,element:p},g)}),i.jsx(Ln,{path:"/settings/billing/all-products",element:i.jsx(b$,{})}),i.jsx(Ln,{path:"/settings/billing/:subscriptionId",element:i.jsx(gj,{})}),i.jsx(Ln,{path:"*",element:i.jsx(bd,{})})]})]})]})}jh(document.getElementById("root")).render(i.jsx(v.StrictMode,{children:i.jsx(b1,{children:i.jsx(Ry,{theme:Oy,children:i.jsx(E$,{})})})}));
