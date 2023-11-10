function Ax(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fv={exports:{}},Iu={},Uv={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),bx=Symbol.for("react.portal"),Dx=Symbol.for("react.fragment"),Ox=Symbol.for("react.strict_mode"),Nx=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),Vx=Symbol.for("react.forward_ref"),$x=Symbol.for("react.suspense"),jx=Symbol.for("react.memo"),Fx=Symbol.for("react.lazy"),Um=Symbol.iterator;function Ux(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bv=Object.assign,Wv={};function To(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||zv}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hv(){}Hv.prototype=To.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||zv}var wf=_f.prototype=new Hv;wf.constructor=_f;Bv(wf,To.prototype);wf.isPureReactComponent=!0;var zm=Array.isArray,qv=Object.prototype.hasOwnProperty,Ef={current:null},Kv={key:!0,ref:!0,__self:!0,__source:!0};function Qv(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)qv.call(e,r)&&!Kv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ra,type:t,key:o,ref:s,props:i,_owner:Ef.current}}function zx(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function Bx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bx(""+t.key):e.toString(36)}function cl(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ra:case bx:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Dc(s,0):r,zm(i)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),cl(i,e,n,"",function(u){return u})):i!=null&&(xf(i)&&(i=zx(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Bm,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",zm(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Dc(o,a);s+=cl(o,e,n,l,i)}else if(l=Ux(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Dc(o,a++),s+=cl(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Da(t,e,n){if(t==null)return t;var r=[],i=0;return cl(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Wx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},hl={transition:null},Hx={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Ef};oe.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=To;oe.Fragment=Dx;oe.Profiler=Nx;oe.PureComponent=_f;oe.StrictMode=Ox;oe.Suspense=$x;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bv({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ef.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qv.call(e,l)&&!Kv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ra,type:t.type,key:i,ref:o,props:r,_owner:s}};oe.createContext=function(t){return t={$$typeof:Lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mx,_context:t},t.Consumer=t};oe.createElement=Qv;oe.createFactory=function(t){var e=Qv.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:Vx,render:t}};oe.isValidElement=xf;oe.lazy=function(t){return{$$typeof:Fx,_payload:{_status:-1,_result:t},_init:Wx}};oe.memo=function(t,e){return{$$typeof:jx,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};oe.useCallback=function(t,e){return Dt.current.useCallback(t,e)};oe.useContext=function(t){return Dt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Dt.current.useEffect(t,e)};oe.useId=function(){return Dt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Dt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};oe.useRef=function(t){return Dt.current.useRef(t)};oe.useState=function(t){return Dt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Dt.current.useTransition()};oe.version="18.2.0";Uv.exports=oe;var P=Uv.exports;const ai=kx(P),qx=Ax({__proto__:null,default:ai},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=P,Qx=Symbol.for("react.element"),Gx=Symbol.for("react.fragment"),Yx=Object.prototype.hasOwnProperty,Xx=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jx={key:!0,ref:!0,__self:!0,__source:!0};function Gv(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Yx.call(e,r)&&!Jx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Qx,type:t,key:o,ref:s,props:i,_owner:Xx.current}}Iu.Fragment=Gx;Iu.jsx=Gv;Iu.jsxs=Gv;Fv.exports=Iu;var g=Fv.exports,Oh={},Yv={exports:{}},Xt={},Xv={exports:{}},Jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,z){var B=M.length;M.push(z);e:for(;0<B;){var me=B-1>>>1,we=M[me];if(0<i(we,z))M[me]=z,M[B]=we,B=me;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var z=M[0],B=M.pop();if(B!==z){M[0]=B;e:for(var me=0,we=M.length,zt=we>>>1;me<zt;){var Ue=2*(me+1)-1,Zt=M[Ue],Pe=Ue+1,je=M[Pe];if(0>i(Zt,B))Pe<we&&0>i(je,Zt)?(M[me]=je,M[Pe]=B,me=Pe):(M[me]=Zt,M[Ue]=B,me=Ue);else if(Pe<we&&0>i(je,B))M[me]=je,M[Pe]=B,me=Pe;else break e}}return z}function i(M,z){var B=M.sortIndex-z.sortIndex;return B!==0?B:M.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,v=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=M)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function w(M){if(_=!1,y(M),!v)if(n(l)!==null)v=!0,it(E);else{var z=n(u);z!==null&&pt(w,z.startTime-M)}}function E(M,z){v=!1,_&&(_=!1,m(I),I=-1),p=!0;var B=f;try{for(y(z),h=n(l);h!==null&&(!(h.expirationTime>z)||M&&!H());){var me=h.callback;if(typeof me=="function"){h.callback=null,f=h.priorityLevel;var we=me(h.expirationTime<=z);z=t.unstable_now(),typeof we=="function"?h.callback=we:h===n(l)&&r(l),y(z)}else r(l);h=n(l)}if(h!==null)var zt=!0;else{var Ue=n(u);Ue!==null&&pt(w,Ue.startTime-z),zt=!1}return zt}finally{h=null,f=B,p=!1}}var S=!1,T=null,I=-1,b=5,D=-1;function H(){return!(t.unstable_now()-D<b)}function Q(){if(T!==null){var M=t.unstable_now();D=M;var z=!0;try{z=T(!0,M)}finally{z?W():(S=!1,T=null)}}else S=!1}var W;if(typeof d=="function")W=function(){d(Q)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,ft=$e.port2;$e.port1.onmessage=Q,W=function(){ft.postMessage(null)}}else W=function(){x(Q,0)};function it(M){T=M,S||(S=!0,W())}function pt(M,z){I=x(function(){M(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,it(E))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var B=f;f=z;try{return M()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var B=f;f=M;try{return z()}finally{f=B}},t.unstable_scheduleCallback=function(M,z,B){var me=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?me+B:me):B=me,M){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=B+we,M={id:c++,callback:z,priorityLevel:M,startTime:B,expirationTime:we,sortIndex:-1},B>me?(M.sortIndex=B,e(u,M),n(l)===null&&M===n(u)&&(_?(m(I),I=-1):_=!0,pt(w,B-me))):(M.sortIndex=we,e(l,M),v||p||(v=!0,it(E))),M},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(M){var z=f;return function(){var B=f;f=z;try{return M.apply(this,arguments)}finally{f=B}}}})(Jv);Xv.exports=Jv;var Zx=Xv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=P,Qt=Zx;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e0=new Set,xs={};function vi(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(xs[t]=e,t=0;t<e.length;t++)e0.add(e[t])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nh=Object.prototype.hasOwnProperty,eT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Hm={};function tT(t){return Nh.call(Hm,t)?!0:Nh.call(Wm,t)?!1:eT.test(t)?Hm[t]=!0:(Wm[t]=!0,!1)}function nT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rT(t,e,n,r){if(e===null||typeof e>"u"||nT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function Sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tf,Sf);dt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tf,Sf);dt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tf,Sf);dt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function If(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rT(e,n,i,r)&&(n=null),r||i===null?tT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),Mh=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Lh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),r0=Symbol.for("react.offscreen"),qm=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Oc;function Ko(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Nc=!1;function Mc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function iT(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function $h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Di:return"Fragment";case bi:return"Portal";case Mh:return"Profiler";case Rf:return"StrictMode";case Lh:return"Suspense";case Vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n0:return(t.displayName||"Context")+".Consumer";case t0:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:$h(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return $h(t(e))}catch{}}return null}function oT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $h(e);case 8:return e===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function i0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sT(t){var e=i0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=sT(t))}function o0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=i0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jh(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s0(t,e){e=e.checked,e!=null&&If(t,"checked",e,!1)}function Fh(t,e){s0(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uh(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uh(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function Hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Qo(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function a0(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,u0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aT=["Webkit","ms","Moz","O"];Object.keys(is).forEach(function(t){aT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),is[e]=is[t]})});function c0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||is.hasOwnProperty(t)&&is[t]?(""+e).trim():e+"px"}function h0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=c0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lT=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wh(t,e){if(e){if(lT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=null;function Af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kh=null,qi=null,Ki=null;function Xm(t){if(t=sa(t)){if(typeof Kh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=ku(e),Kh(t.stateNode,t.type,e))}}function d0(t){qi?Ki?Ki.push(t):Ki=[t]:qi=t}function f0(){if(qi){var t=qi,e=Ki;if(Ki=qi=null,Xm(t),e)for(t=0;t<e.length;t++)Xm(e[t])}}function p0(t,e){return t(e)}function m0(){}var Lc=!1;function g0(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return p0(t,e,n)}finally{Lc=!1,(qi!==null||Ki!==null)&&(m0(),f0())}}function Ss(t,e){var n=t.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Qh=!1;if(Yn)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){Qh=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{Qh=!1}function uT(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var os=!1,bl=null,Dl=!1,Gh=null,cT={onError:function(t){os=!0,bl=t}};function hT(t,e,n,r,i,o,s,a,l){os=!1,bl=null,uT.apply(cT,arguments)}function dT(t,e,n,r,i,o,s,a,l){if(hT.apply(this,arguments),os){if(os){var u=bl;os=!1,bl=null}else throw Error(k(198));Dl||(Dl=!0,Gh=u)}}function _i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jm(t){if(_i(t)!==t)throw Error(k(188))}function fT(t){var e=t.alternate;if(!e){if(e=_i(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Jm(i),t;if(o===r)return Jm(i),e;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function v0(t){return t=fT(t),t!==null?_0(t):null}function _0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_0(t);if(e!==null)return e;t=t.sibling}return null}var w0=Qt.unstable_scheduleCallback,Zm=Qt.unstable_cancelCallback,pT=Qt.unstable_shouldYield,mT=Qt.unstable_requestPaint,Fe=Qt.unstable_now,gT=Qt.unstable_getCurrentPriorityLevel,kf=Qt.unstable_ImmediatePriority,E0=Qt.unstable_UserBlockingPriority,Ol=Qt.unstable_NormalPriority,yT=Qt.unstable_LowPriority,x0=Qt.unstable_IdlePriority,Ru=null,Dn=null;function vT(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Ru,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:ET,_T=Math.log,wT=Math.LN2;function ET(t){return t>>>=0,t===0?32:31-(_T(t)/wT|0)|0}var La=64,Va=4194304;function Go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Go(a):(o&=s,o!==0&&(r=Go(o)))}else s=n&~i,s!==0?r=Go(s):o!==0&&(r=Go(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),i=1<<n,r|=t[n],e&=~i;return r}function xT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-gn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=xT(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function T0(){var t=La;return La<<=1,!(La&4194240)&&(La=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function ST(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function S0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I0,Df,R0,P0,C0,Xh=!1,$a=[],gr=null,yr=null,vr=null,Is=new Map,Rs=new Map,ur=[],IT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function Vo(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=sa(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RT(t,e,n,r,i){switch(e){case"focusin":return gr=Vo(gr,t,e,n,r,i),!0;case"dragenter":return yr=Vo(yr,t,e,n,r,i),!0;case"mouseover":return vr=Vo(vr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Is.set(o,Vo(Is.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rs.set(o,Vo(Rs.get(o)||null,t,e,n,r,i)),!0}return!1}function A0(t){var e=Kr(t.target);if(e!==null){var n=_i(e);if(n!==null){if(e=n.tag,e===13){if(e=y0(n),e!==null){t.blockedOn=e,C0(t.priority,function(){R0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qh=r,n.target.dispatchEvent(r),qh=null}else return e=sa(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function tg(t,e,n){dl(t)&&n.delete(e)}function PT(){Xh=!1,gr!==null&&dl(gr)&&(gr=null),yr!==null&&dl(yr)&&(yr=null),vr!==null&&dl(vr)&&(vr=null),Is.forEach(tg),Rs.forEach(tg)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,PT)))}function Ps(t){function e(i){return $o(i,t)}if(0<$a.length){$o($a[0],t);for(var n=1;n<$a.length;n++){var r=$a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&$o(gr,t),yr!==null&&$o(yr,t),vr!==null&&$o(vr,t),Is.forEach(e),Rs.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&ur.shift()}var Qi=rr.ReactCurrentBatchConfig,Ml=!0;function CT(t,e,n,r){var i=ve,o=Qi.transition;Qi.transition=null;try{ve=1,Of(t,e,n,r)}finally{ve=i,Qi.transition=o}}function AT(t,e,n,r){var i=ve,o=Qi.transition;Qi.transition=null;try{ve=4,Of(t,e,n,r)}finally{ve=i,Qi.transition=o}}function Of(t,e,n,r){if(Ml){var i=Jh(t,e,n,r);if(i===null)Kc(t,e,r,Ll,n),eg(t,r);else if(RT(i,t,e,n,r))r.stopPropagation();else if(eg(t,r),e&4&&-1<IT.indexOf(t)){for(;i!==null;){var o=sa(i);if(o!==null&&I0(o),o=Jh(t,e,n,r),o===null&&Kc(t,e,r,Ll,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var Ll=null;function Jh(t,e,n,r){if(Ll=null,t=Af(r),t=Kr(t),t!==null)if(e=_i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=y0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gT()){case kf:return 1;case E0:return 4;case Ol:case yT:return 16;case x0:return 536870912;default:return 16}default:return 16}}var dr=null,Nf=null,fl=null;function b0(){if(fl)return fl;var t,e=Nf,n=e.length,r,i="value"in dr?dr.value:dr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return fl=i.slice(t,1<r?1-r:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function ng(){return!1}function Jt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ja:ng,this.isPropagationStopped=ng,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=Jt(So),oa=De({},So,{view:0,detail:0}),kT=Jt(oa),$c,jc,jo,Pu=De({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?($c=t.screenX-jo.screenX,jc=t.screenY-jo.screenY):jc=$c=0,jo=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),rg=Jt(Pu),bT=De({},Pu,{dataTransfer:0}),DT=Jt(bT),OT=De({},oa,{relatedTarget:0}),Fc=Jt(OT),NT=De({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),MT=Jt(NT),LT=De({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VT=Jt(LT),$T=De({},So,{data:0}),ig=Jt($T),jT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UT[t])?!!e[t]:!1}function Lf(){return zT}var BT=De({},oa,{key:function(t){if(t.key){var e=jT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WT=Jt(BT),HT=De({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=Jt(HT),qT=De({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),KT=Jt(qT),QT=De({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),GT=Jt(QT),YT=De({},Pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XT=Jt(YT),JT=[9,13,27,32],Vf=Yn&&"CompositionEvent"in window,ss=null;Yn&&"documentMode"in document&&(ss=document.documentMode);var ZT=Yn&&"TextEvent"in window&&!ss,D0=Yn&&(!Vf||ss&&8<ss&&11>=ss),sg=String.fromCharCode(32),ag=!1;function O0(t,e){switch(t){case"keyup":return JT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function eS(t,e){switch(t){case"compositionend":return N0(e);case"keypress":return e.which!==32?null:(ag=!0,sg);case"textInput":return t=e.data,t===sg&&ag?null:t;default:return null}}function tS(t,e){if(Oi)return t==="compositionend"||!Vf&&O0(t,e)?(t=b0(),fl=Nf=dr=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D0&&e.locale!=="ko"?null:e.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nS[t.type]:e==="textarea"}function M0(t,e,n,r){d0(r),e=Vl(e,"onChange"),0<e.length&&(n=new Mf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var as=null,Cs=null;function rS(t){q0(t,0)}function Cu(t){var e=Li(t);if(o0(e))return t}function iS(t,e){if(t==="change")return e}var L0=!1;if(Yn){var Uc;if(Yn){var zc="oninput"in document;if(!zc){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),zc=typeof ug.oninput=="function"}Uc=zc}else Uc=!1;L0=Uc&&(!document.documentMode||9<document.documentMode)}function cg(){as&&(as.detachEvent("onpropertychange",V0),Cs=as=null)}function V0(t){if(t.propertyName==="value"&&Cu(Cs)){var e=[];M0(e,Cs,t,Af(t)),g0(rS,e)}}function oS(t,e,n){t==="focusin"?(cg(),as=e,Cs=n,as.attachEvent("onpropertychange",V0)):t==="focusout"&&cg()}function sS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(Cs)}function aS(t,e){if(t==="click")return Cu(e)}function lS(t,e){if(t==="input"||t==="change")return Cu(e)}function uS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:uS;function As(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nh.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,e){var n=hg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hg(n)}}function $0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j0(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cS(t){var e=j0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$0(n.ownerDocument.documentElement,n)){if(r!==null&&$f(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=dg(n,o);var s=dg(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hS=Yn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Zh=null,ls=null,ed=!1;function fg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||Ni==null||Ni!==kl(r)||(r=Ni,"selectionStart"in r&&$f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ls&&As(ls,r)||(ls=r,r=Vl(Zh,"onSelect"),0<r.length&&(e=new Mf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Bc={},F0={};Yn&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Au(t){if(Bc[t])return Bc[t];if(!Mi[t])return t;var e=Mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F0)return Bc[t]=e[n];return t}var U0=Au("animationend"),z0=Au("animationiteration"),B0=Au("animationstart"),W0=Au("transitionend"),H0=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){H0.set(t,e),vi(e,[t])}for(var Wc=0;Wc<pg.length;Wc++){var Hc=pg[Wc],dS=Hc.toLowerCase(),fS=Hc[0].toUpperCase()+Hc.slice(1);Or(dS,"on"+fS)}Or(U0,"onAnimationEnd");Or(z0,"onAnimationIteration");Or(B0,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(W0,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function mg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dT(r,e,void 0,t),t.currentTarget=null}function q0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;mg(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;mg(i,a,u),o=l}}}if(Dl)throw t=Gh,Dl=!1,Gh=null,t}function xe(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var r=t+"__bubble";n.has(r)||(K0(e,t,2,!1),n.add(r))}function qc(t,e,n){var r=0;e&&(r|=4),K0(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function ks(t){if(!t[Ua]){t[Ua]=!0,e0.forEach(function(n){n!=="selectionchange"&&(pS.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,qc("selectionchange",!1,e))}}function K0(t,e,n,r){switch(k0(e)){case 1:var i=CT;break;case 4:i=AT;break;default:i=Of}n=i.bind(null,e,n,t),i=void 0,!Qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Kr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}g0(function(){var u=o,c=Af(n),h=[];e:{var f=H0.get(t);if(f!==void 0){var p=Mf,v=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":p=WT;break;case"focusin":v="focus",p=Fc;break;case"focusout":v="blur",p=Fc;break;case"beforeblur":case"afterblur":p=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=DT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=KT;break;case U0:case z0:case B0:p=MT;break;case W0:p=GT;break;case"scroll":p=kT;break;case"wheel":p=XT;break;case"copy":case"cut":case"paste":p=VT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=og}var _=(e&4)!==0,x=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var d=u,y;d!==null;){y=d;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Ss(d,m),w!=null&&_.push(bs(d,w,y)))),x)break;d=d.return}0<_.length&&(f=new p(f,v,null,n,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==qh&&(v=n.relatedTarget||n.fromElement)&&(Kr(v)||v[Xn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Kr(v):null,v!==null&&(x=_i(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=rg,w="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=og,w="onPointerLeave",m="onPointerEnter",d="pointer"),x=p==null?f:Li(p),y=v==null?f:Li(v),f=new _(w,d+"leave",p,n,c),f.target=x,f.relatedTarget=y,w=null,Kr(c)===u&&(_=new _(m,d+"enter",v,n,c),_.target=y,_.relatedTarget=x,w=_),x=w,p&&v)t:{for(_=p,m=v,d=0,y=_;y;y=Ii(y))d++;for(y=0,w=m;w;w=Ii(w))y++;for(;0<d-y;)_=Ii(_),d--;for(;0<y-d;)m=Ii(m),y--;for(;d--;){if(_===m||m!==null&&_===m.alternate)break t;_=Ii(_),m=Ii(m)}_=null}else _=null;p!==null&&gg(h,f,p,_,!1),v!==null&&x!==null&&gg(h,x,v,_,!0)}}e:{if(f=u?Li(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=iS;else if(lg(f))if(L0)E=lS;else{E=sS;var S=oS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=aS);if(E&&(E=E(t,u))){M0(h,E,n,c);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Uh(f,"number",f.value)}switch(S=u?Li(u):window,t){case"focusin":(lg(S)||S.contentEditable==="true")&&(Ni=S,Zh=u,ls=null);break;case"focusout":ls=Zh=Ni=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,fg(h,n,c);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":fg(h,n,c)}var T;if(Vf)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Oi?O0(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(D0&&n.locale!=="ko"&&(Oi||I!=="onCompositionStart"?I==="onCompositionEnd"&&Oi&&(T=b0()):(dr=c,Nf="value"in dr?dr.value:dr.textContent,Oi=!0)),S=Vl(u,I),0<S.length&&(I=new ig(I,t,null,n,c),h.push({event:I,listeners:S}),T?I.data=T:(T=N0(n),T!==null&&(I.data=T)))),(T=ZT?eS(t,n):tS(t,n))&&(u=Vl(u,"onBeforeInput"),0<u.length&&(c=new ig("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}q0(h,e)})}function bs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ss(t,n),o!=null&&r.unshift(bs(t,o,i)),o=Ss(t,e),o!=null&&r.push(bs(t,o,i))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gg(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ss(n,o),l!=null&&s.unshift(bs(n,l,a))):i||(l=Ss(n,o),l!=null&&s.push(bs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function yg(t){return(typeof t=="string"?t:""+t).replace(mS,`
`).replace(gS,"")}function za(t,e,n){if(e=yg(e),yg(t)!==e&&n)throw Error(k(425))}function $l(){}var td=null,nd=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(t){return vg.resolve(null).then(t).catch(_S)}:id;function _S(t){setTimeout(function(){throw t})}function Qc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ps(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),In="__reactFiber$"+Io,Ds="__reactProps$"+Io,Xn="__reactContainer$"+Io,od="__reactEvents$"+Io,wS="__reactListeners$"+Io,ES="__reactHandles$"+Io;function Kr(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_g(t);t!==null;){if(n=t[In])return n;t=_g(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[In]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function ku(t){return t[Ds]||null}var sd=[],Vi=-1;function Nr(t){return{current:t}}function Ie(t){0>Vi||(t.current=sd[Vi],sd[Vi]=null,Vi--)}function Ee(t,e){Vi++,sd[Vi]=t.current,t.current=e}var Ar={},St=Nr(Ar),$t=Nr(!1),li=Ar;function to(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function jl(){Ie($t),Ie(St)}function wg(t,e,n){if(St.current!==Ar)throw Error(k(168));Ee(St,e),Ee($t,n)}function Q0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,oT(t)||"Unknown",i));return De({},n,r)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,li=St.current,Ee(St,t),Ee($t,$t.current),!0}function Eg(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Q0(t,e,li),r.__reactInternalMemoizedMergedChildContext=t,Ie($t),Ie(St),Ee(St,t)):Ie($t),Ee($t,n)}var Bn=null,bu=!1,Gc=!1;function G0(t){Bn===null?Bn=[t]:Bn.push(t)}function xS(t){bu=!0,G0(t)}function Mr(){if(!Gc&&Bn!==null){Gc=!0;var t=0,e=ve;try{var n=Bn;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,bu=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),w0(kf,Mr),i}finally{ve=e,Gc=!1}}return null}var $i=[],ji=0,Ul=null,zl=0,en=[],tn=0,ui=null,Hn=1,qn="";function zr(t,e){$i[ji++]=zl,$i[ji++]=Ul,Ul=t,zl=e}function Y0(t,e,n){en[tn++]=Hn,en[tn++]=qn,en[tn++]=ui,ui=t;var r=Hn;t=qn;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var o=32-gn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Hn=1<<32-gn(e)+i|n<<i|r,qn=o+t}else Hn=1<<o|n<<i|r,qn=t}function jf(t){t.return!==null&&(zr(t,1),Y0(t,1,0))}function Ff(t){for(;t===Ul;)Ul=$i[--ji],$i[ji]=null,zl=$i[--ji],$i[ji]=null;for(;t===ui;)ui=en[--tn],en[tn]=null,qn=en[--tn],en[tn]=null,Hn=en[--tn],en[tn]=null}var Kt=null,Ht=null,Ce=!1,mn=null;function X0(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:Hn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Ht=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(Ce){var e=Ht;if(e){var n=e;if(!xg(t,e)){if(ad(t))throw Error(k(418));e=_r(n.nextSibling);var r=Kt;e&&xg(t,e)?X0(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Kt=t)}}else{if(ad(t))throw Error(k(418));t.flags=t.flags&-4097|2,Ce=!1,Kt=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function Ba(t){if(t!==Kt)return!1;if(!Ce)return Tg(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=Ht)){if(ad(t))throw J0(),Error(k(418));for(;e;)X0(t,e),e=_r(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Kt?_r(t.stateNode.nextSibling):null;return!0}function J0(){for(var t=Ht;t;)t=_r(t.nextSibling)}function no(){Ht=Kt=null,Ce=!1}function Uf(t){mn===null?mn=[t]:mn.push(t)}var TS=rr.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bl=Nr(null),Wl=null,Fi=null,zf=null;function Bf(){zf=Fi=Wl=null}function Wf(t){var e=Bl.current;Ie(Bl),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){Wl=t,zf=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(zf!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(Wl===null)throw Error(k(308));Fi=t,Wl.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Qr=null;function Hf(t){Qr===null?Qr=[t]:Qr.push(t)}function Z0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Hf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}function Sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,r){var i=t.updateQueue;lr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=De({},h,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);hi|=s,t.lanes=s,t.memoizedState=h}}function Ig(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var t_=new Zv.Component().refs;function cd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Du={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=xr(t),o=Qn(r,i);o.payload=e,n!=null&&(o.callback=n),e=wr(t,o,i),e!==null&&(yn(e,t,i,r),ml(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=xr(t),o=Qn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=wr(t,o,i),e!==null&&(yn(e,t,i,r),ml(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=xr(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(yn(e,t,r,n),ml(e,t,r))}};function Rg(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!As(n,r)||!As(i,o):!0}function n_(t,e,n){var r=!1,i=Ar,o=e.contextType;return typeof o=="object"&&o!==null?o=sn(o):(i=jt(e)?li:St.current,r=e.contextTypes,o=(r=r!=null)?to(t,i):Ar),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Du.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=t_,qf(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=sn(o):(o=jt(e)?li:St.current,i.context=to(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(cd(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Du.enqueueReplaceState(i,i.state,null),Hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===t_&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cg(t){var e=t._init;return e(t._payload)}function r_(t){function e(m,d){if(t){var y=m.deletions;y===null?(m.deletions=[d],m.flags|=16):y.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Tr(m,d),m.index=0,m.sibling=null,m}function o(m,d,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<d?(m.flags|=2,d):y):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,y,w){return d===null||d.tag!==6?(d=nh(y,m.mode,w),d.return=m,d):(d=i(d,y),d.return=m,d)}function l(m,d,y,w){var E=y.type;return E===Di?c(m,d,y.props.children,w,y.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ar&&Cg(E)===d.type)?(w=i(d,y.props),w.ref=Fo(m,d,y),w.return=m,w):(w=El(y.type,y.key,y.props,null,m.mode,w),w.ref=Fo(m,d,y),w.return=m,w)}function u(m,d,y,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=rh(y,m.mode,w),d.return=m,d):(d=i(d,y.children||[]),d.return=m,d)}function c(m,d,y,w,E){return d===null||d.tag!==7?(d=ti(y,m.mode,w,E),d.return=m,d):(d=i(d,y),d.return=m,d)}function h(m,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=nh(""+d,m.mode,y),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Oa:return y=El(d.type,d.key,d.props,null,m.mode,y),y.ref=Fo(m,null,d),y.return=m,y;case bi:return d=rh(d,m.mode,y),d.return=m,d;case ar:var w=d._init;return h(m,w(d._payload),y)}if(Qo(d)||Mo(d))return d=ti(d,m.mode,y,null),d.return=m,d;Wa(m,d)}return null}function f(m,d,y,w){var E=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(m,d,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oa:return y.key===E?l(m,d,y,w):null;case bi:return y.key===E?u(m,d,y,w):null;case ar:return E=y._init,f(m,d,E(y._payload),w)}if(Qo(y)||Mo(y))return E!==null?null:c(m,d,y,w,null);Wa(m,y)}return null}function p(m,d,y,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(d,m,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oa:return m=m.get(w.key===null?y:w.key)||null,l(d,m,w,E);case bi:return m=m.get(w.key===null?y:w.key)||null,u(d,m,w,E);case ar:var S=w._init;return p(m,d,y,S(w._payload),E)}if(Qo(w)||Mo(w))return m=m.get(y)||null,c(d,m,w,E,null);Wa(d,w)}return null}function v(m,d,y,w){for(var E=null,S=null,T=d,I=d=0,b=null;T!==null&&I<y.length;I++){T.index>I?(b=T,T=null):b=T.sibling;var D=f(m,T,y[I],w);if(D===null){T===null&&(T=b);break}t&&T&&D.alternate===null&&e(m,T),d=o(D,d,I),S===null?E=D:S.sibling=D,S=D,T=b}if(I===y.length)return n(m,T),Ce&&zr(m,I),E;if(T===null){for(;I<y.length;I++)T=h(m,y[I],w),T!==null&&(d=o(T,d,I),S===null?E=T:S.sibling=T,S=T);return Ce&&zr(m,I),E}for(T=r(m,T);I<y.length;I++)b=p(T,m,I,y[I],w),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?I:b.key),d=o(b,d,I),S===null?E=b:S.sibling=b,S=b);return t&&T.forEach(function(H){return e(m,H)}),Ce&&zr(m,I),E}function _(m,d,y,w){var E=Mo(y);if(typeof E!="function")throw Error(k(150));if(y=E.call(y),y==null)throw Error(k(151));for(var S=E=null,T=d,I=d=0,b=null,D=y.next();T!==null&&!D.done;I++,D=y.next()){T.index>I?(b=T,T=null):b=T.sibling;var H=f(m,T,D.value,w);if(H===null){T===null&&(T=b);break}t&&T&&H.alternate===null&&e(m,T),d=o(H,d,I),S===null?E=H:S.sibling=H,S=H,T=b}if(D.done)return n(m,T),Ce&&zr(m,I),E;if(T===null){for(;!D.done;I++,D=y.next())D=h(m,D.value,w),D!==null&&(d=o(D,d,I),S===null?E=D:S.sibling=D,S=D);return Ce&&zr(m,I),E}for(T=r(m,T);!D.done;I++,D=y.next())D=p(T,m,I,D.value,w),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?I:D.key),d=o(D,d,I),S===null?E=D:S.sibling=D,S=D);return t&&T.forEach(function(Q){return e(m,Q)}),Ce&&zr(m,I),E}function x(m,d,y,w){if(typeof y=="object"&&y!==null&&y.type===Di&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Oa:e:{for(var E=y.key,S=d;S!==null;){if(S.key===E){if(E=y.type,E===Di){if(S.tag===7){n(m,S.sibling),d=i(S,y.props.children),d.return=m,m=d;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ar&&Cg(E)===S.type){n(m,S.sibling),d=i(S,y.props),d.ref=Fo(m,S,y),d.return=m,m=d;break e}n(m,S);break}else e(m,S);S=S.sibling}y.type===Di?(d=ti(y.props.children,m.mode,w,y.key),d.return=m,m=d):(w=El(y.type,y.key,y.props,null,m.mode,w),w.ref=Fo(m,d,y),w.return=m,m=w)}return s(m);case bi:e:{for(S=y.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(m,d.sibling),d=i(d,y.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=rh(y,m.mode,w),d.return=m,m=d}return s(m);case ar:return S=y._init,x(m,d,S(y._payload),w)}if(Qo(y))return v(m,d,y,w);if(Mo(y))return _(m,d,y,w);Wa(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,y),d.return=m,m=d):(n(m,d),d=nh(y,m.mode,w),d.return=m,m=d),s(m)):n(m,d)}return x}var ro=r_(!0),i_=r_(!1),aa={},On=Nr(aa),Os=Nr(aa),Ns=Nr(aa);function Gr(t){if(t===aa)throw Error(k(174));return t}function Kf(t,e){switch(Ee(Ns,e),Ee(Os,t),Ee(On,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bh(e,t)}Ie(On),Ee(On,e)}function io(){Ie(On),Ie(Os),Ie(Ns)}function o_(t){Gr(Ns.current);var e=Gr(On.current),n=Bh(e,t.type);e!==n&&(Ee(Os,t),Ee(On,n))}function Qf(t){Os.current===t&&(Ie(On),Ie(Os))}var ke=Nr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function Gf(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var gl=rr.ReactCurrentDispatcher,Xc=rr.ReactCurrentBatchConfig,ci=0,be=null,Ke=null,Ze=null,Kl=!1,us=!1,Ms=0,SS=0;function mt(){throw Error(k(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Xf(t,e,n,r,i,o){if(ci=o,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?CS:AS,t=n(r,i),us){o=0;do{if(us=!1,Ms=0,25<=o)throw Error(k(301));o+=1,Ze=Ke=null,e.updateQueue=null,gl.current=kS,t=n(r,i)}while(us)}if(gl.current=Ql,e=Ke!==null&&Ke.next!==null,ci=0,Ze=Ke=be=null,Kl=!1,e)throw Error(k(300));return t}function Jf(){var t=Ms!==0;return Ms=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?be.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function an(){if(Ke===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Ze===null?be.memoizedState:Ze.next;if(e!==null)Ze=e,Ke=t;else{if(t===null)throw Error(k(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?be.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Ls(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=an(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((ci&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,be.lanes|=c,hi|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,wn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,be.lanes|=o,hi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=an(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);wn(o,e.memoizedState)||(Lt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function s_(){}function a_(t,e){var n=be,r=an(),i=e(),o=!wn(r.memoizedState,i);if(o&&(r.memoizedState=i,Lt=!0),r=r.queue,Zf(c_.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Vs(9,u_.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(k(349));ci&30||l_(n,e,i)}return i}function l_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u_(t,e,n,r){e.value=n,e.getSnapshot=r,h_(e)&&d_(t)}function c_(t,e,n){return n(function(){h_(e)&&d_(t)})}function h_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function d_(t){var e=Jn(t,1);e!==null&&yn(e,t,1,-1)}function Ag(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:t},e.queue=t,t=t.dispatch=PS.bind(null,be,t),[e.memoizedState,t]}function Vs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f_(){return an().memoizedState}function yl(t,e,n,r){var i=Tn();be.flags|=t,i.memoizedState=Vs(1|e,n,void 0,r===void 0?null:r)}function Ou(t,e,n,r){var i=an();r=r===void 0?null:r;var o=void 0;if(Ke!==null){var s=Ke.memoizedState;if(o=s.destroy,r!==null&&Yf(r,s.deps)){i.memoizedState=Vs(e,n,o,r);return}}be.flags|=t,i.memoizedState=Vs(1|e,n,o,r)}function kg(t,e){return yl(8390656,8,t,e)}function Zf(t,e){return Ou(2048,8,t,e)}function p_(t,e){return Ou(4,2,t,e)}function m_(t,e){return Ou(4,4,t,e)}function g_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y_(t,e,n){return n=n!=null?n.concat([t]):null,Ou(4,4,g_.bind(null,e,t),n)}function ep(){}function v_(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function __(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function w_(t,e,n){return ci&21?(wn(n,e)||(n=T0(),be.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function IS(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Xc.transition;Xc.transition={};try{t(!1),e()}finally{ve=n,Xc.transition=r}}function E_(){return an().memoizedState}function RS(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x_(t))T_(e,n);else if(n=Z0(t,e,n,r),n!==null){var i=bt();yn(n,t,r,i),S_(n,e,r)}}function PS(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x_(t))T_(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,s)){var l=e.interleaved;l===null?(i.next=i,Hf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Z0(t,e,i,r),n!==null&&(i=bt(),yn(n,t,r,i),S_(n,e,r))}}function x_(t){var e=t.alternate;return t===be||e!==null&&e===be}function T_(t,e){us=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}var Ql={readContext:sn,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},CS={readContext:sn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,g_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RS.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:Ag,useDebugValue:ep,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=Ag(!1),e=t[0];return t=IS.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=Tn();if(Ce){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),tt===null)throw Error(k(349));ci&30||l_(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,kg(c_.bind(null,r,o,t),[t]),r.flags|=2048,Vs(9,u_.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Tn(),e=tt.identifierPrefix;if(Ce){var n=qn,r=Hn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ms++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AS={readContext:sn,useCallback:v_,useContext:sn,useEffect:Zf,useImperativeHandle:y_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:__,useReducer:Jc,useRef:f_,useState:function(){return Jc(Ls)},useDebugValue:ep,useDeferredValue:function(t){var e=an();return w_(e,Ke.memoizedState,t)},useTransition:function(){var t=Jc(Ls)[0],e=an().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:a_,useId:E_,unstable_isNewReconciler:!1},kS={readContext:sn,useCallback:v_,useContext:sn,useEffect:Zf,useImperativeHandle:y_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:__,useReducer:Zc,useRef:f_,useState:function(){return Zc(Ls)},useDebugValue:ep,useDeferredValue:function(t){var e=an();return Ke===null?e.memoizedState=t:w_(e,Ke.memoizedState,t)},useTransition:function(){var t=Zc(Ls)[0],e=an().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:a_,useId:E_,unstable_isNewReconciler:!1};function oo(t,e){try{var n="",r=e;do n+=iT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bS=typeof WeakMap=="function"?WeakMap:Map;function I_(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yl||(Yl=!0,xd=r),dd(t,e)},n}function R_(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function bg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HS.bind(null,t,e,n),e.then(t,t))}function Dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Og(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var DS=rr.ReactCurrentOwner,Lt=!1;function Ct(t,e,n,r){e.child=t===null?i_(e,null,n,r):ro(e,t.child,n,r)}function Ng(t,e,n,r,i){n=n.render;var o=e.ref;return Gi(e,i),r=Xf(t,e,n,r,o,i),n=Jf(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Ce&&n&&jf(e),e.flags|=1,Ct(t,e,r,i),e.child)}function Mg(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!lp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,P_(t,e,o,r,i)):(t=El(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:As,n(s,r)&&t.ref===e.ref)return Zn(t,e,i)}return e.flags|=1,t=Tr(o,r),t.ref=e.ref,t.return=e,e.child=t}function P_(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(As(o,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,Zn(t,e,i)}return fd(t,e,n,r,i)}function C_(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(zi,Bt),Bt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(zi,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(zi,Bt),Bt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ee(zi,Bt),Bt|=r;return Ct(t,e,i,n),e.child}function A_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fd(t,e,n,r,i){var o=jt(n)?li:St.current;return o=to(e,o),Gi(e,i),n=Xf(t,e,n,r,o,i),r=Jf(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Ce&&r&&jf(e),e.flags|=1,Ct(t,e,n,i),e.child)}function Lg(t,e,n,r,i){if(jt(n)){var o=!0;Fl(e)}else o=!1;if(Gi(e,i),e.stateNode===null)vl(t,e),n_(e,n,r),hd(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=jt(n)?li:St.current,u=to(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pg(e,s,r,u),lr=!1;var f=e.memoizedState;s.state=f,Hl(e,r,s,i),l=e.memoizedState,a!==r||f!==l||$t.current||lr?(typeof c=="function"&&(cd(e,n,c,r),l=e.memoizedState),(a=lr||Rg(e,n,a,r,f,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,e_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:fn(e.type,a),s.props=u,h=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=jt(n)?li:St.current,l=to(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Pg(e,s,r,l),lr=!1,f=e.memoizedState,s.state=f,Hl(e,r,s,i);var v=e.memoizedState;a!==h||f!==v||$t.current||lr?(typeof p=="function"&&(cd(e,n,p,r),v=e.memoizedState),(u=lr||Rg(e,n,u,r,f,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return pd(t,e,n,r,o,i)}function pd(t,e,n,r,i,o){A_(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Eg(e,n,!1),Zn(t,e,o);r=e.stateNode,DS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ro(e,t.child,null,o),e.child=ro(e,null,a,o)):Ct(t,e,a,o),e.memoizedState=r.state,i&&Eg(e,n,!0),e.child}function k_(t){var e=t.stateNode;e.pendingContext?wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wg(t,e.context,!1),Kf(t,e.containerInfo)}function Vg(t,e,n,r,i){return no(),Uf(i),e.flags|=256,Ct(t,e,n,r),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function b_(t,e,n){var r=e.pendingProps,i=ke.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(ke,i&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Lu(s,r,0,null),t=ti(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=gd(n),e.memoizedState=md,t):tp(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OS(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tr(a,o):(o=ti(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?gd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=md,r}return o=t.child,t=o.sibling,r=Tr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tp(t,e){return e=Lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,r){return r!==null&&Uf(r),ro(e,t.child,null,n),t=tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OS(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(k(422))),Ha(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Lu({mode:"visible",children:r.children},i,0,null),o=ti(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ro(e,t.child,null,s),e.child.memoizedState=gd(s),e.memoizedState=md,o);if(!(e.mode&1))return Ha(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=eh(o,r,void 0),Ha(t,e,s,r)}if(a=(s&t.childLanes)!==0,Lt||a){if(r=tt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jn(t,i),yn(r,t,i,-1))}return ap(),r=eh(Error(k(421))),Ha(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qS.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ht=_r(i.nextSibling),Kt=e,Ce=!0,mn=null,t!==null&&(en[tn++]=Hn,en[tn++]=qn,en[tn++]=ui,Hn=t.id,qn=t.overflow,ui=e),e=tp(e,r.children),e.flags|=4096,e)}function $g(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ud(t.return,e,n)}function th(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function D_(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ct(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$g(t,n,e);else if(t.tag===19)$g(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),th(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ql(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}th(e,!0,n,null,o);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NS(t,e,n){switch(e.tag){case 3:k_(e),no();break;case 5:o_(e);break;case 1:jt(e.type)&&Fl(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Bl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?b_(t,e,n):(Ee(ke,ke.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);Ee(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return D_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,C_(t,e,n)}return Zn(t,e,n)}var O_,yd,N_,M_;O_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};N_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gr(On.current);var o=null;switch(n){case"input":i=jh(t,i),r=jh(t,r),o=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),o=[];break;case"textarea":i=zh(t,i),r=zh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}Wh(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&xe("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};M_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Uo(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MS(t,e,n){var r=e.pendingProps;switch(Ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return jt(e.type)&&jl(),gt(e),null;case 3:return r=e.stateNode,io(),Ie($t),Ie(St),Gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&(Id(mn),mn=null))),yd(t,e),gt(e),null;case 5:Qf(e);var i=Gr(Ns.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return gt(e),null}if(t=Gr(On.current),Ba(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[In]=e,r[Ds]=o,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)xe(Yo[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Km(r,o),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},xe("invalid",r);break;case"textarea":Gm(r,o),xe("invalid",r)}Wh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",""+a]):xs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&xe("scroll",r)}switch(n){case"input":Na(r),Qm(r,o,!0);break;case"textarea":Na(r),Ym(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[In]=e,t[Ds]=r,O_(t,e,!1,!1),e.stateNode=t;e:{switch(s=Hh(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)xe(Yo[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":Km(t,r),i=jh(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),xe("invalid",t);break;case"textarea":Gm(t,r),i=zh(t,r),xe("invalid",t);break;default:i=r}Wh(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?h0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&xe("scroll",t):l!=null&&If(t,o,l,s))}switch(n){case"input":Na(t),Qm(t,r,!1);break;case"textarea":Na(t),Ym(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Hi(t,!!r.multiple,o,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)M_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Gr(Ns.current),Gr(On.current),Ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(o=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return gt(e),null;case 13:if(Ie(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Ht!==null&&e.mode&1&&!(e.flags&128))J0(),no(),e.flags|=98560,o=!1;else if(o=Ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(k(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[In]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),o=!1}else mn!==null&&(Id(mn),mn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ge===0&&(Ge=3):ap())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return io(),yd(t,e),t===null&&ks(e.stateNode.containerInfo),gt(e),null;case 10:return Wf(e.type._context),gt(e),null;case 17:return jt(e.type)&&jl(),gt(e),null;case 19:if(Ie(ke),o=e.memoizedState,o===null)return gt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Uo(o,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ql(t),s!==null){for(e.flags|=128,Uo(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(ke,ke.current&1|2),e.child}t=t.sibling}o.tail!==null&&Fe()>so&&(e.flags|=128,r=!0,Uo(o,!1),e.lanes=4194304)}else{if(!r)if(t=ql(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ce)return gt(e),null}else 2*Fe()-o.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,r=!0,Uo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Fe(),e.sibling=null,n=ke.current,Ee(ke,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return sp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function LS(t,e){switch(Ff(e),e.tag){case 1:return jt(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Ie($t),Ie(St),Gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qf(e),null;case 13:if(Ie(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(ke),null;case 4:return io(),null;case 10:return Wf(e.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var qa=!1,wt=!1,VS=typeof WeakSet=="function"?WeakSet:Set,V=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function vd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var jg=!1;function $S(t,e){if(td=Ml,t=j0(),$f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},Ml=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,x=v.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:fn(e.type,_),x);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){Ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return v=jg,jg=!1,v}function cs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&vd(e,n,o)}i=i.next}while(i!==r)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L_(t){var e=t.alternate;e!==null&&(t.alternate=null,L_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[Ds],delete e[od],delete e[wS],delete e[ES])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var ot=null,pn=!1;function ir(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Ru,n)}catch{}switch(n.tag){case 5:wt||Ui(n,e);case 6:var r=ot,i=pn;ot=null,ir(t,e,n),ot=r,pn=i,ot!==null&&(pn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(pn?(t=ot,n=n.stateNode,t.nodeType===8?Qc(t.parentNode,n):t.nodeType===1&&Qc(t,n),Ps(t)):Qc(ot,n.stateNode));break;case 4:r=ot,i=pn,ot=n.stateNode.containerInfo,pn=!0,ir(t,e,n),ot=r,pn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&vd(n,e,s),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!wt&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,ir(t,e,n),wt=r):ir(t,e,n);break;default:ir(t,e,n)}}function Ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VS),e.forEach(function(r){var i=KS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,pn=!1;break e;case 3:ot=a.stateNode.containerInfo,pn=!0;break e;case 4:ot=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(ot===null)throw Error(k(160));$_(o,s,i),ot=null,pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j_(e,t),e=e.sibling}function j_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),xn(t),r&4){try{cs(3,t,t.return),Nu(3,t)}catch(_){Ne(t,t.return,_)}try{cs(5,t,t.return)}catch(_){Ne(t,t.return,_)}}break;case 1:cn(e,t),xn(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(cn(e,t),xn(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{Ts(i,"")}catch(_){Ne(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&s0(i,o),Hh(a,s);var u=Hh(a,o);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?h0(i,h):c==="dangerouslySetInnerHTML"?u0(i,h):c==="children"?Ts(i,h):If(i,c,h,u)}switch(a){case"input":Fh(i,o);break;case"textarea":a0(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Hi(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?Hi(i,!!o.multiple,o.defaultValue,!0):Hi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ds]=o}catch(_){Ne(t,t.return,_)}}break;case 6:if(cn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){Ne(t,t.return,_)}}break;case 3:if(cn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(_){Ne(t,t.return,_)}break;case 4:cn(e,t),xn(t);break;case 13:cn(e,t),xn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ip=Fe())),r&4&&Ug(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,cn(e,t),wt=u):cn(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(h=V=c;V!==null;){switch(f=V,p=f.child,f.tag){case 0:case 11:case 14:case 15:cs(4,f,f.return);break;case 1:Ui(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ne(r,n,_)}}break;case 5:Ui(f,f.return);break;case 22:if(f.memoizedState!==null){Bg(h);continue}}p!==null?(p.return=f,V=p):Bg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=c0("display",s))}catch(_){Ne(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Ne(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:cn(e,t),xn(t),r&4&&Ug(t);break;case 21:break;default:cn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ts(i,""),r.flags&=-33);var o=Fg(t);Ed(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Fg(t);wd(t,a,s);break;default:throw Error(k(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jS(t,e,n){V=t,F_(t)}function F_(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||qa;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=qa;var u=wt;if(qa=s,(wt=l)&&!u)for(V=i;V!==null;)s=V,l=s.child,s.tag===22&&s.memoizedState!==null?Wg(i):l!==null?(l.return=s,V=l):Wg(i);for(;o!==null;)V=o,F_(o),o=o.sibling;V=i,qa=a,wt=u}zg(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,V=o):zg(t)}}function zg(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ig(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ig(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ps(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}wt||e.flags&512&&_d(e)}catch(f){Ne(e,e.return,f)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function Bg(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Wg(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nu(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var o=e.return;try{_d(e)}catch(l){Ne(e,o,l)}break;case 5:var s=e.return;try{_d(e)}catch(l){Ne(e,s,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var FS=Math.ceil,Gl=rr.ReactCurrentDispatcher,np=rr.ReactCurrentOwner,on=rr.ReactCurrentBatchConfig,ue=0,tt=null,He=null,ut=0,Bt=0,zi=Nr(0),Ge=0,$s=null,hi=0,Mu=0,rp=0,hs=null,Nt=null,ip=0,so=1/0,Un=null,Yl=!1,xd=null,Er=null,Ka=!1,fr=null,Xl=0,ds=0,Td=null,_l=-1,wl=0;function bt(){return ue&6?Fe():_l!==-1?_l:_l=Fe()}function xr(t){return t.mode&1?ue&2&&ut!==0?ut&-ut:TS.transition!==null?(wl===0&&(wl=T0()),wl):(t=ve,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function yn(t,e,n,r){if(50<ds)throw ds=0,Td=null,Error(k(185));ia(t,n,r),(!(ue&2)||t!==tt)&&(t===tt&&(!(ue&2)&&(Mu|=n),Ge===4&&cr(t,ut)),Ft(t,r),n===1&&ue===0&&!(e.mode&1)&&(so=Fe()+500,bu&&Mr()))}function Ft(t,e){var n=t.callbackNode;TT(t,e);var r=Nl(t,t===tt?ut:0);if(r===0)n!==null&&Zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zm(n),e===1)t.tag===0?xS(Hg.bind(null,t)):G0(Hg.bind(null,t)),vS(function(){!(ue&6)&&Mr()}),n=null;else{switch(S0(r)){case 1:n=kf;break;case 4:n=E0;break;case 16:n=Ol;break;case 536870912:n=x0;break;default:n=Ol}n=Q_(n,U_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U_(t,e){if(_l=-1,wl=0,ue&6)throw Error(k(327));var n=t.callbackNode;if(Yi()&&t.callbackNode!==n)return null;var r=Nl(t,t===tt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jl(t,r);else{e=r;var i=ue;ue|=2;var o=B_();(tt!==t||ut!==e)&&(Un=null,so=Fe()+500,ei(t,e));do try{BS();break}catch(a){z_(t,a)}while(1);Bf(),Gl.current=o,ue=i,He!==null?e=0:(tt=null,ut=0,e=Ge)}if(e!==0){if(e===2&&(i=Yh(t),i!==0&&(r=i,e=Sd(t,i))),e===1)throw n=$s,ei(t,0),cr(t,r),Ft(t,Fe()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!US(i)&&(e=Jl(t,r),e===2&&(o=Yh(t),o!==0&&(r=o,e=Sd(t,o))),e===1))throw n=$s,ei(t,0),cr(t,r),Ft(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Br(t,Nt,Un);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=ip+500-Fe(),10<e)){if(Nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=id(Br.bind(null,t,Nt,Un),e);break}Br(t,Nt,Un);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-gn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FS(r/1960))-r,10<r){t.timeoutHandle=id(Br.bind(null,t,Nt,Un),r);break}Br(t,Nt,Un);break;case 5:Br(t,Nt,Un);break;default:throw Error(k(329))}}}return Ft(t,Fe()),t.callbackNode===n?U_.bind(null,t):null}function Sd(t,e){var n=hs;return t.current.memoizedState.isDehydrated&&(ei(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Id(e)),t}function Id(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function US(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~rp,e&=~Mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function Hg(t){if(ue&6)throw Error(k(327));Yi();var e=Nl(t,0);if(!(e&1))return Ft(t,Fe()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var r=Yh(t);r!==0&&(e=r,n=Sd(t,r))}if(n===1)throw n=$s,ei(t,0),cr(t,e),Ft(t,Fe()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,Nt,Un),Ft(t,Fe()),null}function op(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(so=Fe()+500,bu&&Mr())}}function di(t){fr!==null&&fr.tag===0&&!(ue&6)&&Yi();var e=ue;ue|=1;var n=on.transition,r=ve;try{if(on.transition=null,ve=1,t)return t()}finally{ve=r,on.transition=n,ue=e,!(ue&6)&&Mr()}}function sp(){Bt=zi.current,Ie(zi)}function ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yS(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jl();break;case 3:io(),Ie($t),Ie(St),Gf();break;case 5:Qf(r);break;case 4:io();break;case 13:Ie(ke);break;case 19:Ie(ke);break;case 10:Wf(r.type._context);break;case 22:case 23:sp()}n=n.return}if(tt=t,He=t=Tr(t.current,null),ut=Bt=e,Ge=0,$s=null,rp=Mu=hi=0,Nt=hs=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qr=null}return t}function z_(t,e){do{var n=He;try{if(Bf(),gl.current=Ql,Kl){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kl=!1}if(ci=0,Ze=Ke=be=null,us=!1,Ms=0,np.current=null,n===null||n.return===null){Ge=1,$s=e,He=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Dg(s);if(p!==null){p.flags&=-257,Og(p,s,a,o,e),p.mode&1&&bg(o,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){bg(o,u,e),ap();break e}l=Error(k(426))}}else if(Ce&&a.mode&1){var x=Dg(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Og(x,s,a,o,e),Uf(oo(l,a));break e}}o=l=oo(l,a),Ge!==4&&(Ge=2),hs===null?hs=[o]:hs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var m=I_(o,l,e);Sg(o,m);break e;case 1:a=l;var d=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Er===null||!Er.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=R_(o,a,e);Sg(o,w);break e}}o=o.return}while(o!==null)}H_(n)}catch(E){e=E,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function B_(){var t=Gl.current;return Gl.current=Ql,t===null?Ql:t}function ap(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),tt===null||!(hi&268435455)&&!(Mu&268435455)||cr(tt,ut)}function Jl(t,e){var n=ue;ue|=2;var r=B_();(tt!==t||ut!==e)&&(Un=null,ei(t,e));do try{zS();break}catch(i){z_(t,i)}while(1);if(Bf(),ue=n,Gl.current=r,He!==null)throw Error(k(261));return tt=null,ut=0,Ge}function zS(){for(;He!==null;)W_(He)}function BS(){for(;He!==null&&!pT();)W_(He)}function W_(t){var e=K_(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?H_(t):He=e,np.current=null}function H_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LS(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,He=null;return}}else if(n=MS(n,e,Bt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ge===0&&(Ge=5)}function Br(t,e,n){var r=ve,i=on.transition;try{on.transition=null,ve=1,WS(t,e,n,r)}finally{on.transition=i,ve=r}return null}function WS(t,e,n,r){do Yi();while(fr!==null);if(ue&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ST(t,o),t===tt&&(He=tt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,Q_(Ol,function(){return Yi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=on.transition,on.transition=null;var s=ve;ve=1;var a=ue;ue|=4,np.current=null,$S(t,n),j_(n,t),cS(nd),Ml=!!td,nd=td=null,t.current=n,jS(n),mT(),ue=a,ve=s,on.transition=o}else t.current=n;if(Ka&&(Ka=!1,fr=t,Xl=i),o=t.pendingLanes,o===0&&(Er=null),vT(n.stateNode),Ft(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yl)throw Yl=!1,t=xd,xd=null,t;return Xl&1&&t.tag!==0&&Yi(),o=t.pendingLanes,o&1?t===Td?ds++:(ds=0,Td=t):ds=0,Mr(),null}function Yi(){if(fr!==null){var t=S0(Xl),e=on.transition,n=ve;try{if(on.transition=null,ve=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,Xl=0,ue&6)throw Error(k(331));var i=ue;for(ue|=4,V=t.current;V!==null;){var o=V,s=o.child;if(V.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:cs(8,c,o)}var h=c.child;if(h!==null)h.return=c,V=h;else for(;V!==null;){c=V;var f=c.sibling,p=c.return;if(L_(c),c===u){V=null;break}if(f!==null){f.return=p,V=f;break}V=p}}}var v=o.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}V=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,V=s;else e:for(;V!==null;){if(o=V,o.flags&2048)switch(o.tag){case 0:case 11:case 15:cs(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,V=m;break e}V=o.return}}var d=t.current;for(V=d;V!==null;){s=V;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,V=y;else e:for(s=d;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nu(9,a)}}catch(E){Ne(a,a.return,E)}if(a===s){V=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,V=w;break e}V=a.return}}if(ue=i,Mr(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Ru,t)}catch{}r=!0}return r}finally{ve=n,on.transition=e}}return!1}function qg(t,e,n){e=oo(n,e),e=I_(t,e,1),t=wr(t,e,1),e=bt(),t!==null&&(ia(t,1,e),Ft(t,e))}function Ne(t,e,n){if(t.tag===3)qg(t,t,n);else for(;e!==null;){if(e.tag===3){qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=oo(n,t),t=R_(e,t,1),e=wr(e,t,1),t=bt(),e!==null&&(ia(e,1,t),Ft(e,t));break}}e=e.return}}function HS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ut&n)===n&&(Ge===4||Ge===3&&(ut&130023424)===ut&&500>Fe()-ip?ei(t,0):rp|=n),Ft(t,e)}function q_(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=bt();t=Jn(t,e),t!==null&&(ia(t,e,n),Ft(t,n))}function qS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q_(t,n)}function KS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),q_(t,n)}var K_;K_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,NS(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Ce&&e.flags&1048576&&Y0(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vl(t,e),t=e.pendingProps;var i=to(e,St.current);Gi(e,n),i=Xf(null,e,r,t,i,n);var o=Jf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(o=!0,Fl(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qf(e),i.updater=Du,e.stateNode=i,i._reactInternals=e,hd(e,r,t,n),e=pd(null,e,r,!0,o,n)):(e.tag=0,Ce&&o&&jf(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GS(r),t=fn(r,t),i){case 0:e=fd(null,e,r,t,n);break e;case 1:e=Lg(null,e,r,t,n);break e;case 11:e=Ng(null,e,r,t,n);break e;case 14:e=Mg(null,e,r,fn(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),fd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Lg(t,e,r,i,n);case 3:e:{if(k_(e),t===null)throw Error(k(387));r=e.pendingProps,o=e.memoizedState,i=o.element,e_(t,e),Hl(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=oo(Error(k(423)),e),e=Vg(t,e,r,n,i);break e}else if(r!==i){i=oo(Error(k(424)),e),e=Vg(t,e,r,n,i);break e}else for(Ht=_r(e.stateNode.containerInfo.firstChild),Kt=e,Ce=!0,mn=null,n=i_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===i){e=Zn(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return o_(e),t===null&&ld(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,rd(r,i)?s=null:o!==null&&rd(r,o)&&(e.flags|=32),A_(t,e),Ct(t,e,s,n),e.child;case 6:return t===null&&ld(e),null;case 13:return b_(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Ng(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ee(Bl,r._currentValue),r._currentValue=s,o!==null)if(wn(o.value,s)){if(o.children===i.children&&!$t.current){e=Zn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ud(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ud(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=sn(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),Mg(t,e,r,i,n);case 15:return P_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),vl(t,e),e.tag=1,jt(r)?(t=!0,Fl(e)):t=!1,Gi(e,n),n_(e,r,i),hd(e,r,i,n),pd(null,e,r,!0,t,n);case 19:return D_(t,e,n);case 22:return C_(t,e,n)}throw Error(k(156,e.tag))};function Q_(t,e){return w0(t,e)}function QS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new QS(t,e,n,r)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GS(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Cf)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")lp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Di:return ti(n.children,i,o,e);case Rf:s=8,i|=8;break;case Mh:return t=rn(12,n,e,i|2),t.elementType=Mh,t.lanes=o,t;case Lh:return t=rn(13,n,e,i),t.elementType=Lh,t.lanes=o,t;case Vh:return t=rn(19,n,e,i),t.elementType=Vh,t.lanes=o,t;case r0:return Lu(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t0:s=10;break e;case n0:s=9;break e;case Pf:s=11;break e;case Cf:s=14;break e;case ar:s=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=rn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ti(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function Lu(t,e,n,r){return t=rn(22,t,r,e),t.elementType=r0,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function up(t,e,n,r,i,o,s,a,l){return t=new YS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=rn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(o),t}function XS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G_(t){if(!t)return Ar;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(jt(n))return Q0(t,n,e)}return e}function Y_(t,e,n,r,i,o,s,a,l){return t=up(n,r,!0,t,i,o,s,a,l),t.context=G_(null),n=t.current,r=bt(),i=xr(n),o=Qn(r,i),o.callback=e??null,wr(n,o,i),t.current.lanes=i,ia(t,i,r),Ft(t,r),t}function Vu(t,e,n,r){var i=e.current,o=bt(),s=xr(i);return n=G_(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,s),t!==null&&(yn(t,i,s,o),ml(t,i,s)),s}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cp(t,e){Kg(t,e),(t=t.alternate)&&Kg(t,e)}function JS(){return null}var X_=typeof reportError=="function"?reportError:function(t){console.error(t)};function hp(t){this._internalRoot=t}$u.prototype.render=hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Vu(t,e,null,null)};$u.prototype.unmount=hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){Vu(null,t,null,null)}),e[Xn]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var e=P0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&A0(t)}};function dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qg(){}function ZS(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Zl(s);o.call(u)}}var s=Y_(e,r,t,0,null,!1,!1,"",Qg);return t._reactRootContainer=s,t[Xn]=s.current,ks(t.nodeType===8?t.parentNode:t),di(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zl(l);a.call(u)}}var l=up(t,0,!1,null,null,!1,!1,"",Qg);return t._reactRootContainer=l,t[Xn]=l.current,ks(t.nodeType===8?t.parentNode:t),di(function(){Vu(e,l,n,r)}),l}function Fu(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Zl(s);a.call(l)}}Vu(e,s,t,i)}else s=ZS(n,e,t,i,r);return Zl(s)}I0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Go(e.pendingLanes);n!==0&&(bf(e,n|1),Ft(e,Fe()),!(ue&6)&&(so=Fe()+500,Mr()))}break;case 13:di(function(){var r=Jn(t,1);if(r!==null){var i=bt();yn(r,t,1,i)}}),cp(t,1)}};Df=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=bt();yn(e,t,134217728,n)}cp(t,134217728)}};R0=function(t){if(t.tag===13){var e=xr(t),n=Jn(t,e);if(n!==null){var r=bt();yn(n,t,e,r)}cp(t,e)}};P0=function(){return ve};C0=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Kh=function(t,e,n){switch(e){case"input":if(Fh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ku(r);if(!i)throw Error(k(90));o0(r),Fh(r,i)}}}break;case"textarea":a0(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};p0=op;m0=di;var eI={usingClientEntryPoint:!1,Events:[sa,Li,ku,d0,f0,op]},zo={findFiberByHostInstance:Kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tI={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=v0(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Ru=Qa.inject(tI),Dn=Qa}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eI;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dp(e))throw Error(k(200));return XS(t,e,null,n)};Xt.createRoot=function(t,e){if(!dp(t))throw Error(k(299));var n=!1,r="",i=X_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,ks(t.nodeType===8?t.parentNode:t),new hp(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=v0(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return di(t)};Xt.hydrate=function(t,e,n){if(!ju(e))throw Error(k(200));return Fu(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!dp(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=X_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Y_(e,null,t,1,n??null,i,!1,o,s),t[Xn]=e.current,ks(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $u(e)};Xt.render=function(t,e,n){if(!ju(e))throw Error(k(200));return Fu(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!ju(t))throw Error(k(40));return t._reactRootContainer?(di(function(){Fu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Xt.unstable_batchedUpdates=op;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ju(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Fu(t,e,n,!1,r)};Xt.version="18.2.0-next-9e3b772b8-20220608";function J_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J_)}catch(t){console.error(t)}}J_(),Yv.exports=Xt;var nI=Yv.exports,Gg=nI;Oh.createRoot=Gg.createRoot,Oh.hydrateRoot=Gg.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},js.apply(this,arguments)}var pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pr||(pr={}));const Yg="popstate";function rI(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Rd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Z_(i)}return oI(e,n,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iI(){return Math.random().toString(36).substr(2,8)}function Xg(t,e){return{usr:t.state,key:t.key,idx:e}}function Rd(t,e,n,r){return n===void 0&&(n=null),js({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ro(e):e,{state:n,key:e&&e.key||r||iI()})}function Z_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ro(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function oI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=pr.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(js({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function h(){a=pr.Pop;let x=c(),m=x==null?null:x-u;u=x,l&&l({action:a,location:_.location,delta:m})}function f(x,m){a=pr.Push;let d=Rd(_.location,x,m);n&&n(d,x),u=c()+1;let y=Xg(d,u),w=_.createHref(d);try{s.pushState(y,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}o&&l&&l({action:a,location:_.location,delta:1})}function p(x,m){a=pr.Replace;let d=Rd(_.location,x,m);n&&n(d,x),u=c();let y=Xg(d,u),w=_.createHref(d);s.replaceState(y,"",w),o&&l&&l({action:a,location:_.location,delta:0})}function v(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:Z_(x);return qe(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let _={get action(){return a},get location(){return t(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yg,h),l=x,()=>{i.removeEventListener(Yg,h),l=null}},createHref(x){return e(i,x)},createURL:v,encodeLocation(x){let m=v(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(x){return s.go(x)}};return _}var Jg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jg||(Jg={}));function sI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ro(e):e,i=n1(r.pathname||"/",n);if(i==null)return null;let o=e1(t);aI(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=gI(o[a],_I(i));return s}function e1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(qe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ni([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),e1(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:pI(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of t1(o.path))i(o,s,l)}),e}function t1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=t1(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function aI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lI=/^:\w+$/,uI=3,cI=2,hI=1,dI=10,fI=-2,Zg=t=>t==="*";function pI(t,e){let n=t.split("/"),r=n.length;return n.some(Zg)&&(r+=fI),e&&(r+=cI),n.filter(i=>!Zg(i)).reduce((i,o)=>i+(lI.test(o)?uI:o===""?hI:dI),r)}function mI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gI(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;o.push({params:r,pathname:ni([i,c.pathname]),pathnameBase:TI(ni([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ni([i,c.pathnameBase]))}return o}function yI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";s=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=wI(a[h]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function vI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _I(t){try{return decodeURI(t)}catch(e){return fp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wI(t,e){try{return decodeURIComponent(t)}catch(n){return fp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function n1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function EI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ro(t):t;return{pathname:n?n.startsWith("/")?n:xI(n,e):e,search:SI(r),hash:II(i)}}function xI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ih(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function r1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function i1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ro(t):(i=js({},t),qe(!i.pathname||!i.pathname.includes("?"),ih("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),ih("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),ih("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=e.length-1;if(s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=EI(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ni=t=>t.join("/").replace(/\/\/+/g,"/"),TI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),SI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,II=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function RI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const o1=["post","put","patch","delete"];new Set(o1);const PI=["get",...o1];new Set(PI);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eu.apply(this,arguments)}const pp=P.createContext(null),CI=P.createContext(null),Uu=P.createContext(null),zu=P.createContext(null),Lr=P.createContext({outlet:null,matches:[],isDataRoute:!1}),s1=P.createContext(null);function la(){return P.useContext(zu)!=null}function Bu(){return la()||qe(!1),P.useContext(zu).location}function a1(t){P.useContext(Uu).static||P.useLayoutEffect(t)}function mp(){let{isDataRoute:t}=P.useContext(Lr);return t?zI():AI()}function AI(){la()||qe(!1);let t=P.useContext(pp),{basename:e,navigator:n}=P.useContext(Uu),{matches:r}=P.useContext(Lr),{pathname:i}=Bu(),o=JSON.stringify(r1(r).map(l=>l.pathnameBase)),s=P.useRef(!1);return a1(()=>{s.current=!0}),P.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=i1(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ni([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,i,t])}function kI(){let{matches:t}=P.useContext(Lr),e=t[t.length-1];return e?e.params:{}}function bI(t,e){return DI(t,e)}function DI(t,e,n){la()||qe(!1);let{navigator:r}=P.useContext(Uu),{matches:i}=P.useContext(Lr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Bu(),u;if(e){var c;let _=typeof e=="string"?Ro(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||qe(!1),u=_}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",p=sI(t,{pathname:f}),v=VI(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:ni([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:ni([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?P.createElement(zu.Provider,{value:{location:eu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:pr.Pop}},v):v}function OI(){let t=UI(),e=RI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,o)}const NI=P.createElement(OI,null);class MI extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(Lr.Provider,{value:this.props.routeContext},P.createElement(s1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LI(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(pp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Lr.Provider,{value:e},r)}function VI(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||qe(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,h=null;n&&(h=l.route.errorElement||NI);let f=e.concat(o.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=P.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,P.createElement(LI,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?P.createElement(MI,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var l1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(l1||{}),tu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(tu||{});function $I(t){let e=P.useContext(pp);return e||qe(!1),e}function jI(t){let e=P.useContext(CI);return e||qe(!1),e}function FI(t){let e=P.useContext(Lr);return e||qe(!1),e}function u1(t){let e=FI(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function UI(){var t;let e=P.useContext(s1),n=jI(tu.UseRouteError),r=u1(tu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function zI(){let{router:t}=$I(l1.UseNavigateStable),e=u1(tu.UseNavigateStable),n=P.useRef(!1);return a1(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,eu({fromRouteId:e},o)))},[t,e])}function BI(t){let{to:e,replace:n,state:r,relative:i}=t;la()||qe(!1);let{matches:o}=P.useContext(Lr),{pathname:s}=Bu(),a=mp(),l=i1(e,r1(o).map(c=>c.pathnameBase),s,i==="path"),u=JSON.stringify(l);return P.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Wr(t){qe(!1)}function WI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pr.Pop,navigator:o,static:s=!1}=t;la()&&qe(!1);let a=e.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Ro(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:p="default"}=r,v=P.useMemo(()=>{let _=n1(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:f,key:p},navigationType:i}},[a,u,c,h,f,p,i]);return v==null?null:P.createElement(Uu.Provider,{value:l},P.createElement(zu.Provider,{children:n,value:v}))}function HI(t){let{children:e,location:n}=t;return bI(Pd(e),n)}new Promise(()=>{});function Pd(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let o=[...e,i];if(r.type===P.Fragment){n.push.apply(n,Pd(r.props.children,o));return}r.type!==Wr&&qe(!1),!r.props.index||!r.props.children||qe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Pd(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const qI="startTransition",ey=qx[qI];function KI(t){let{basename:e,children:n,future:r,window:i}=t,o=P.useRef();o.current==null&&(o.current=rI({window:i,v5Compat:!0}));let s=o.current,[a,l]=P.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=P.useCallback(h=>{u&&ey?ey(()=>l(h)):l(h)},[l,u]);return P.useLayoutEffect(()=>s.listen(c),[s,c]),P.createElement(WI,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}var ty;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(ty||(ty={}));var ny;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ny||(ny={}));var Vt=function(){return Vt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Vt.apply(this,arguments)};function nu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var Te="-ms-",fs="-moz-",pe="-webkit-",c1="comm",Wu="rule",gp="decl",QI="@import",h1="@keyframes",GI="@layer",YI=Math.abs,yp=String.fromCharCode,Cd=Object.assign;function XI(t,e){return et(t,0)^45?(((e<<2^et(t,0))<<2^et(t,1))<<2^et(t,2))<<2^et(t,3):0}function d1(t){return t.trim()}function zn(t,e){return(t=e.exec(t))?t[0]:t}function J(t,e,n){return t.replace(e,n)}function xl(t,e){return t.indexOf(e)}function et(t,e){return t.charCodeAt(e)|0}function ao(t,e,n){return t.slice(e,n)}function Sn(t){return t.length}function f1(t){return t.length}function Xo(t,e){return e.push(t),t}function JI(t,e){return t.map(e).join("")}function ry(t,e){return t.filter(function(n){return!zn(n,e)})}var Hu=1,lo=1,p1=0,ln=0,We=0,Po="";function qu(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Hu,column:lo,length:s,return:"",siblings:a}}function sr(t,e){return Cd(qu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ri(t){for(;t.root;)t=sr(t.root,{children:[t]});Xo(t,t.siblings)}function ZI(){return We}function eR(){return We=ln>0?et(Po,--ln):0,lo--,We===10&&(lo=1,Hu--),We}function vn(){return We=ln<p1?et(Po,ln++):0,lo++,We===10&&(lo=1,Hu++),We}function ri(){return et(Po,ln)}function Tl(){return ln}function Ku(t,e){return ao(Po,t,e)}function Ad(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tR(t){return Hu=lo=1,p1=Sn(Po=t),ln=0,[]}function nR(t){return Po="",t}function oh(t){return d1(Ku(ln-1,kd(t===91?t+2:t===40?t+1:t)))}function rR(t){for(;(We=ri())&&We<33;)vn();return Ad(t)>2||Ad(We)>3?"":" "}function iR(t,e){for(;--e&&vn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Ku(t,Tl()+(e<6&&ri()==32&&vn()==32))}function kd(t){for(;vn();)switch(We){case t:return ln;case 34:case 39:t!==34&&t!==39&&kd(We);break;case 40:t===41&&kd(t);break;case 92:vn();break}return ln}function oR(t,e){for(;vn()&&t+We!==47+10;)if(t+We===42+42&&ri()===47)break;return"/*"+Ku(e,ln-1)+"*"+yp(t===47?t:vn())}function sR(t){for(;!Ad(ri());)vn();return Ku(t,ln)}function aR(t){return nR(Sl("",null,null,null,[""],t=tR(t),0,[0],t))}function Sl(t,e,n,r,i,o,s,a,l){for(var u=0,c=0,h=s,f=0,p=0,v=0,_=1,x=1,m=1,d=0,y="",w=i,E=o,S=r,T=y;x;)switch(v=d,d=vn()){case 40:if(v!=108&&et(T,h-1)==58){xl(T+=J(oh(d),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:T+=oh(d);break;case 9:case 10:case 13:case 32:T+=rR(v);break;case 92:T+=iR(Tl()-1,7);continue;case 47:switch(ri()){case 42:case 47:Xo(lR(oR(vn(),Tl()),e,n,l),l);break;default:T+="/"}break;case 123*_:a[u++]=Sn(T)*m;case 125*_:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:m==-1&&(T=J(T,/\f/g,"")),p>0&&Sn(T)-h&&Xo(p>32?oy(T+";",r,n,h-1,l):oy(J(T," ","")+";",r,n,h-2,l),l);break;case 59:T+=";";default:if(Xo(S=iy(T,e,n,u,c,i,a,y,w=[],E=[],h,o),o),d===123)if(c===0)Sl(T,e,S,S,w,o,h,a,E);else switch(f===99&&et(T,3)===110?100:f){case 100:case 108:case 109:case 115:Sl(t,S,S,r&&Xo(iy(t,S,S,0,0,i,a,y,i,w=[],h,E),E),i,E,h,a,r?w:E);break;default:Sl(T,S,S,S,[""],E,0,a,E)}}u=c=p=0,_=m=1,y=T="",h=s;break;case 58:h=1+Sn(T),p=v;default:if(_<1){if(d==123)--_;else if(d==125&&_++==0&&eR()==125)continue}switch(T+=yp(d),d*_){case 38:m=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(Sn(T)-1)*m,m=1;break;case 64:ri()===45&&(T+=oh(vn())),f=ri(),c=h=Sn(y=T+=sR(Tl())),d++;break;case 45:v===45&&Sn(T)==2&&(_=0)}}return o}function iy(t,e,n,r,i,o,s,a,l,u,c,h){for(var f=i-1,p=i===0?o:[""],v=f1(p),_=0,x=0,m=0;_<r;++_)for(var d=0,y=ao(t,f+1,f=YI(x=s[_])),w=t;d<v;++d)(w=d1(x>0?p[d]+" "+y:J(y,/&\f/g,p[d])))&&(l[m++]=w);return qu(t,e,n,i===0?Wu:a,l,u,c,h)}function lR(t,e,n,r){return qu(t,e,n,c1,yp(ZI()),ao(t,2,-2),0,r)}function oy(t,e,n,r,i){return qu(t,e,n,gp,ao(t,0,r),ao(t,r+1,-1),r,i)}function m1(t,e,n){switch(XI(t,e)){case 5103:return pe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+t+t;case 4789:return fs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+t+fs+t+Te+t+t;case 5936:switch(et(t,e+11)){case 114:return pe+t+Te+J(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return pe+t+Te+J(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return pe+t+Te+J(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return pe+t+Te+t+t;case 6165:return pe+t+Te+"flex-"+t+t;case 5187:return pe+t+J(t,/(\w+).+(:[^]+)/,pe+"box-$1$2"+Te+"flex-$1$2")+t;case 5443:return pe+t+Te+"flex-item-"+J(t,/flex-|-self/g,"")+(zn(t,/flex-|baseline/)?"":Te+"grid-row-"+J(t,/flex-|-self/g,""))+t;case 4675:return pe+t+Te+"flex-line-pack"+J(t,/align-content|flex-|-self/g,"")+t;case 5548:return pe+t+Te+J(t,"shrink","negative")+t;case 5292:return pe+t+Te+J(t,"basis","preferred-size")+t;case 6060:return pe+"box-"+J(t,"-grow","")+pe+t+Te+J(t,"grow","positive")+t;case 4554:return pe+J(t,/([^-])(transform)/g,"$1"+pe+"$2")+t;case 6187:return J(J(J(t,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),t,"")+t;case 5495:case 3959:return J(t,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return J(J(t,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+t+t;case 4200:if(!zn(t,/flex-|baseline/))return Te+"grid-column-align"+ao(t,e)+t;break;case 2592:case 3360:return Te+J(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,zn(r.props,/grid-\w+-end/)})?~xl(t+(n=n[e].value),"span")?t:Te+J(t,"-start","")+t+Te+"grid-row-span:"+(~xl(n,"span")?zn(n,/\d+/):+zn(n,/\d+/)-+zn(t,/\d+/))+";":Te+J(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return zn(r.props,/grid-\w+-start/)})?t:Te+J(J(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return J(t,/(.+)-inline(.+)/,pe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Sn(t)-1-e>6)switch(et(t,e+1)){case 109:if(et(t,e+4)!==45)break;case 102:return J(t,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+fs+(et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~xl(t,"stretch")?m1(J(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return J(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Te+i+":"+o+u+(s?Te+i+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(et(t,e+6)===121)return J(t,":",":"+pe)+t;break;case 6444:switch(et(t,et(t,14)===45?18:11)){case 120:return J(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(et(t,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+Te+"$2box$3")+t;case 100:return J(t,":",":"+Te)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(t,"scroll-","scroll-snap-")+t}return t}function ru(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function uR(t,e,n,r){switch(t.type){case GI:if(t.children.length)break;case QI:case gp:return t.return=t.return||t.value;case c1:return"";case h1:return t.return=t.value+"{"+ru(t.children,r)+"}";case Wu:if(!Sn(t.value=t.props.join(",")))return""}return Sn(n=ru(t.children,r))?t.return=t.value+"{"+n+"}":""}function cR(t){var e=f1(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function hR(t){return function(e){e.root||(e=e.return)&&t(e)}}function dR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case gp:t.return=m1(t.value,t.length,n);return;case h1:return ru([sr(t,{value:J(t.value,"@","@"+pe)})],r);case Wu:if(t.length)return JI(n=t.props,function(i){switch(zn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ri(sr(t,{props:[J(i,/:(read-\w+)/,":"+fs+"$1")]})),Ri(sr(t,{props:[i]})),Cd(t,{props:ry(n,r)});break;case"::placeholder":Ri(sr(t,{props:[J(i,/:(plac\w+)/,":"+pe+"input-$1")]})),Ri(sr(t,{props:[J(i,/:(plac\w+)/,":"+fs+"$1")]})),Ri(sr(t,{props:[J(i,/:(plac\w+)/,Te+"input-$1")]})),Ri(sr(t,{props:[i]})),Cd(t,{props:ry(n,r)});break}return""})}}var fR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},uo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",vp=typeof window<"u"&&"HTMLElement"in window,pR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Qu=Object.freeze([]),co=Object.freeze({});function mR(t,e,n){return n===void 0&&(n=co),t.theme!==n.theme&&t.theme||e||n.theme}var g1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yR=/(^-|-$)/g;function sy(t){return t.replace(gR,"-").replace(yR,"")}var vR=/(a)(d)/gi,ay=function(t){return String.fromCharCode(t+(t>25?39:97))};function bd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=ay(e%52)+n;return(ay(e%52)+n).replace(vR,"$1-$2")}var sh,Bi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},y1=function(t){return Bi(5381,t)};function _R(t){return bd(y1(t)>>>0)}function wR(t){return t.displayName||t.name||"Component"}function ah(t){return typeof t=="string"&&!0}var v1=typeof Symbol=="function"&&Symbol.for,_1=v1?Symbol.for("react.memo"):60115,ER=v1?Symbol.for("react.forward_ref"):60112,xR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},SR=((sh={})[ER]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sh[_1]=w1,sh);function ly(t){return("type"in(e=t)&&e.type.$$typeof)===_1?w1:"$$typeof"in t?SR[t.$$typeof]:xR;var e}var IR=Object.defineProperty,RR=Object.getOwnPropertyNames,uy=Object.getOwnPropertySymbols,PR=Object.getOwnPropertyDescriptor,CR=Object.getPrototypeOf,cy=Object.prototype;function E1(t,e,n){if(typeof e!="string"){if(cy){var r=CR(e);r&&r!==cy&&E1(t,r,n)}var i=RR(e);uy&&(i=i.concat(uy(e)));for(var o=ly(t),s=ly(e),a=0;a<i.length;++a){var l=i[a];if(!(l in TR||n&&n[l]||s&&l in s||o&&l in o)){var u=PR(e,l);try{IR(t,l,u)}catch{}}}}return t}function ho(t){return typeof t=="function"}function _p(t){return typeof t=="object"&&"styledComponentId"in t}function Yr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function hy(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Fs(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Dd(t,e,n){if(n===void 0&&(n=!1),!n&&!Fs(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Dd(t[r],e[r]);else if(Fs(e))for(var r in e)t[r]=Dd(t[r],e[r]);return t}function wp(t,e){Object.defineProperty(t,"toString",{value:e})}function ua(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var AR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw ua(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},t}(),Il=new Map,iu=new Map,lh=1,Ga=function(t){if(Il.has(t))return Il.get(t);for(;iu.has(lh);)lh++;var e=lh++;return Il.set(t,e),iu.set(e,t),e},kR=function(t,e){Il.set(t,e),iu.set(e,t)},bR="style[".concat(uo,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),DR=new RegExp("^".concat(uo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),OR=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},NR=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(DR);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(kR(c,u),OR(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function MR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var x1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(uo,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(uo,"active"),r.setAttribute("data-styled-version","6.0.8");var s=MR();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},LR=function(){function t(e){this.element=x1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ua(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),VR=function(){function t(e){this.element=x1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),$R=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),dy=vp,jR={isServer:!vp,useCSSOMInjection:!pR},T1=function(){function t(e,n,r){e===void 0&&(e=co),n===void 0&&(n={});var i=this;this.options=Vt(Vt({},jR),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&vp&&dy&&(dy=!1,function(o){for(var s=document.querySelectorAll(bR),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(uo)!=="active"&&(NR(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),wp(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(h){var f=function(m){return iu.get(m)}(h);if(f===void 0)return"continue";var p=o.names.get(f),v=s.getGroup(h);if(p===void 0||v.length===0)return"continue";var _="".concat(uo,".g").concat(h,'[id="').concat(f,'"]'),x="";p!==void 0&&p.forEach(function(m){m.length>0&&(x+="".concat(m,","))}),l+="".concat(v).concat(_,'{content:"').concat(x,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Ga(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Vt(Vt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new $R(i):r?new LR(i):new VR(i)}(this.options),new AR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ga(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Ga(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ga(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),FR=/&/g,UR=/^\s*\/\/.*$/gm;function S1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=S1(n.children,e)),n})}function zR(t){var e,n,r,i=t===void 0?co:t,o=i.options,s=o===void 0?co:o,a=i.plugins,l=a===void 0?Qu:a,u=function(f,p,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===Wu&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(FR,n).replace(r,u))}),s.prefix&&c.push(dR),c.push(uR);var h=function(f,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var x=f.replace(UR,""),m=aR(v||p?"".concat(v," ").concat(p," { ").concat(x," }"):x);s.namespace&&(m=S1(m,s.namespace));var d=[];return ru(m,cR(c.concat(hR(function(y){return d.push(y)})))),d};return h.hash=l.length?l.reduce(function(f,p){return p.name||ua(15),Bi(f,p.name)},5381).toString():"",h}var BR=new T1,Od=zR(),I1=ai.createContext({shouldForwardProp:void 0,styleSheet:BR,stylis:Od});I1.Consumer;ai.createContext(void 0);function fy(){return P.useContext(I1)}var WR=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Od);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,wp(this,function(){throw ua(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Od),this.name+e.hash},t}(),HR=function(t){return t>="A"&&t<="Z"};function py(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;HR(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var R1=function(t){return t==null||t===!1||t===""},P1=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!R1(o)&&(Array.isArray(o)&&o.isCss||ho(o)?r.push("".concat(py(i),":"),o,";"):Fs(o)?r.push.apply(r,nu(nu(["".concat(i," {")],P1(o),!1),["}"],!1)):r.push("".concat(py(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in fR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ii(t,e,n,r){if(R1(t))return[];if(_p(t))return[".".concat(t.styledComponentId)];if(ho(t)){if(!ho(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return ii(i,e,n,r)}var o;return t instanceof WR?n?(t.inject(n,r),[t.getName(r)]):[t]:Fs(t)?P1(t):Array.isArray(t)?Array.prototype.concat.apply(Qu,t.map(function(s){return ii(s,e,n,r)})):[t.toString()]}function qR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ho(n)&&!_p(n))return!1}return!0}var KR=y1("6.0.8"),QR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qR(e),this.componentId=n,this.baseHash=Bi(KR,n),this.baseStyle=r,T1.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Yr(i,this.staticRulesId);else{var o=hy(ii(this.rules,e,n,r)),s=bd(Bi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Yr(i,s),this.staticRulesId=s}else{for(var l=Bi(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var f=hy(ii(h,e,n,r));l=Bi(l,f+c),u+=f}}if(u){var p=bd(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=Yr(i,p)}}return i},t}(),C1=ai.createContext(void 0);C1.Consumer;var uh={};function GR(t,e,n){var r=_p(t),i=t,o=!ah(t),s=e.attrs,a=s===void 0?Qu:s,l=e.componentId,u=l===void 0?function(y,w){var E=typeof y!="string"?"sc":sy(y);uh[E]=(uh[E]||0)+1;var S="".concat(E,"-").concat(_R("6.0.8"+E+uh[E]));return w?"".concat(w,"-").concat(S):S}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return ah(y)?"styled.".concat(y):"Styled(".concat(wR(y),")")}(t);var h=e.displayName&&e.componentId?"".concat(sy(e.displayName),"-").concat(e.componentId):e.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;p=function(y,w){return v(y,w)&&_(y,w)}}else p=v}var x=new QR(n,h,r?i.componentStyle:void 0);function m(y,w){return function(E,S,T){var I=E.attrs,b=E.componentStyle,D=E.defaultProps,H=E.foldedComponentIds,Q=E.styledComponentId,W=E.target,$e=ai.useContext(C1),ft=fy(),it=E.shouldForwardProp||ft.shouldForwardProp,pt=function(zt,Ue,Zt){for(var Pe,je=Vt(Vt({},Ue),{className:void 0,theme:Zt}),Fr=0;Fr<zt.length;Fr+=1){var Fn=ho(Pe=zt[Fr])?Pe(je):Pe;for(var A in Fn)je[A]=A==="className"?Yr(je[A],Fn[A]):A==="style"?Vt(Vt({},je[A]),Fn[A]):Fn[A]}return Ue.className&&(je.className=Yr(je.className,Ue.className)),je}(I,S,mR(S,$e,D)||co),M=pt.as||W,z={};for(var B in pt)pt[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?z.as=pt.forwardedAs:it&&!it(B,M)||(z[B]=pt[B]));var me=function(zt,Ue){var Zt=fy(),Pe=zt.generateAndInjectStyles(Ue,Zt.styleSheet,Zt.stylis);return Pe}(b,pt),we=Yr(H,Q);return me&&(we+=" "+me),pt.className&&(we+=" "+pt.className),z[ah(M)&&!g1.has(M)?"class":"className"]=we,z.ref=T,P.createElement(M,z)}(d,y,w)}var d=ai.forwardRef(m);return d.attrs=f,d.componentStyle=x,d.shouldForwardProp=p,d.foldedComponentIds=r?Yr(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=h,d.target=r?i.target:t,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(w){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var T=0,I=E;T<I.length;T++)Dd(w,I[T],!0);return w}({},i.defaultProps,y):y}}),wp(d,function(){return".".concat(d.styledComponentId)}),o&&E1(d,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function my(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var gy=function(t){return Object.assign(t,{isCss:!0})};function YR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ho(t)||Fs(t)){var r=t;return gy(ii(my(Qu,nu([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ii(i):gy(ii(my(i,e)))}function Nd(t,e,n){if(n===void 0&&(n=co),!e)throw ua(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,YR.apply(void 0,nu([i],o,!1)))};return r.attrs=function(i){return Nd(t,e,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Nd(t,e,Vt(Vt({},n),i))},r}var A1=function(t){return Nd(GR,t)},O=A1;g1.forEach(function(t){O[t]=A1(t)});const k1="/2023_Chocomel_ReactJs_Firebase/assets/logo-chocomel-ebb6c157.jpg",XR="/2023_Chocomel_ReactJs_Firebase/assets/icon_search-0b5217e0.png",JR="/2023_Chocomel_ReactJs_Firebase/assets/icon-open-category-b2931127.png",ZR="/2023_Chocomel_ReactJs_Firebase/assets/icon-closed-category-c941df50.png",eP=O.header`
    background-color: #2a1510;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end; 
    padding: 20px; 
    position: sticky;
    top: 0;
    z-index: 100;

    @media (max-width: 480px) {
        padding: 20px 0 0 0; 
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`,tP=O.img`
    width: 150px;
    height: 100%;
    margin-left: 40px;
    
    @media (max-width: 480px) {
        margin-left: 0px;
    }
`,nP=O.input`
    width: 330px;
    height: 40px;
    padding: 10px;
    margin: 10px auto;
    display: block;
    border: 2px solid white;
    border-radius: 20px 0px 0px 20px;

    @media(max-width: 480px) {
        margin-top: 20px;
        width: 200px;
    }
`,rP=O.button`
    height: 40px;
    width: 70px;
    padding: 5px;
    align-items: center;    
    background-color: #ab9680;
    border: 2px solid white;
    border-radius: 0px 20px 20px 0px;
    color: #2a1510;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    img {
        width: 30px;
    }

    @media(max-width: 480px) {
        margin-top: 10px;
    }
`,iP=O.div`
    display: flex;
    align-items: center;    
`,oP=O.button`
    background-color: #2a1510;
    border-radius: 10px;
    border: 2px solid #2a1510;
    margin: 0 100px 0 90px;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease;

        @media (max-width: 480px) {
            transform: scale(1.0);
        }
    }

    @media (max-width: 480px) {
        margin: 0;
    }

    img {
        width: 50px;
    }
`;function Ep({onToggleCategory:t,isCategoryVisible:e}){const[n,r]=P.useState(""),i=mp(),o=()=>{i(`/produtos?search=${encodeURIComponent(n)}`)};return g.jsxs(eP,{children:[g.jsx("div",{children:g.jsx("a",{href:"/",children:g.jsx(tP,{src:k1,alt:"Logo Chocomel"})})}),g.jsxs(iP,{children:[g.jsx(nP,{type:"text",placeholder:"Procurar Doces 😀🎂",value:n,onChange:s=>r(s.target.value)}),g.jsx(rP,{onClick:o,children:g.jsx("img",{src:XR,alt:"Icone de busca"})})]}),g.jsx(oP,{onClick:t,children:e?g.jsx("img",{src:JR}):g.jsx("img",{src:ZR})})]})}const sP="/2023_Chocomel_ReactJs_Firebase/assets/logo-facebook-933c9ac1.png",aP="/2023_Chocomel_ReactJs_Firebase/assets/logo-instagram-95044cb4.png",lP="/2023_Chocomel_ReactJs_Firebase/assets/logo-gmail-e2534819.png",uP="/2023_Chocomel_ReactJs_Firebase/assets/mapa-localizacao-ae337c78.png",cP=O.footer`
    background-color: #2a1510;
    margin-top: 5%;
    color: white;
   
    @media (max-width: 480px) {
        margin-top: 10%;
    }
`,hP=O.p`
    color: white;
    padding: 10px 20px 20px 20px;
    text-align: center;
    line-height: 1.5;

    a {
        color: white;

        &:hover {
            color: gray;
        }
    }

    @media (max-width: 480px) {
        padding: 15px 20px 30px 20px
    }

`,ch=O.img`
    width: 50px;
    margin-top: 42px;
    margin-right: 30px;

    @media (max-width: 480px) {
        margin: 20px 20px; 20px 0;
    }

    &:hover {
        transform: scale(1.5);
        transition: transform 0.3s ease;
    }
`,dP=O.div`
    padding: 15px 140px 0 140px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 1.5;

    h2 {
        margin-top: 10px;
    }

    p {
        margin-top: 30px;

        @media (max-width: 480px) {
            margin-top: 10px;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        padding: 15px 20px 0 20px;
    }

    .endereco {
        img {
            margin-top: 10px;
            height: 120px;
            border-radius: 10px;

            &:hover {
                transform: scale(0.8);
                transition: transform 0.3s ease;
            }

            @media (max-width: 480px) {
                margin-bottom: 20px;
            }
        }
    }
`;function xp(){return g.jsxs(cP,{children:[g.jsxs(dP,{children:[g.jsxs("div",{className:"siga-nos",children:[g.jsx("h2",{children:"Siga - nos"}),g.jsx("a",{href:"https://www.facebook.com/profile.php?id=100086276622209",target:"_blank",children:g.jsx(ch,{src:sP,alt:"Logo Facebook"})}),g.jsx("a",{href:"https://www.instagram.com/chocomelsp/",target:"_blank",children:g.jsx(ch,{src:aP,alt:"Logo Instagram"})}),g.jsx("a",{href:"mailto:contato.cdconfeitaria@gmail.com",target:"_blank",children:g.jsx(ch,{src:lP,alt:"Logo Email"})})]}),g.jsxs("div",{className:"contato",children:[g.jsx("h2",{children:"Contato"}),g.jsxs("p",{children:["R. Dr. Bento Teobaldo Ferraz, 330 ",g.jsx("br",{}),"contato.cdconfeitaria@gmail.com ",g.jsx("br",{}),"Cel: (11) 94545-5177"]})]}),g.jsxs("div",{className:"horarios",children:[g.jsx("h2",{children:"Horários"}),g.jsxs("p",{children:["Segunda a Sexta: 08:00 - 19:00 ",g.jsx("br",{}),"Sábado: 09:00 - 13:00 ",g.jsx("br",{}),"Domingo: Fechado"]})]}),g.jsxs("div",{className:"endereco",children:[g.jsx("h2",{children:"Como Chegar"}),g.jsx("a",{href:"https://maps.app.goo.gl/Lu92JSSKSSxZqTDx9",target:"_blank",children:g.jsx("img",{src:uP,alt:"Localização endereço"})})]})]}),g.jsxs(hP,{children:["© ",new Date().getFullYear()," Chocomel | Todos os direitos reservados.",g.jsx("br",{})," created by ",g.jsx("a",{href:"https://www.linkedin.com/in/leonardobottura/",target:"_blank",children:"Leonardo Bottura"}),"."]})]})}const fP="/2023_Chocomel_ReactJs_Firebase/assets/logo-whatsapp-5fde4e0e.png",pP=O.a`
    img {
        text-decoration: none;
        padding: 10px;
        position: fixed;
        right: 10px;
        bottom: 10px;
        width: 100px;
        height: 100px;
    
        &:hover {
            transform: scale(1.3);
            transition: transform 0.3s ease;
        }
    
        @media (max-width: 480px) {
            bottom: 10px;
            right: 0px;
        }
    }
`;function Tp(){return g.jsx(g.Fragment,{children:g.jsx(pP,{href:"https://wa.me/5511945455177",target:"_blank",children:g.jsx("img",{src:fP,alt:"Logo WhatsApp"})})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},D1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,h=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,s||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(b1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new gP;const f=o<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yP=function(t){const e=b1(t);return D1.encodeByteArray(e,!0)},ou=function(t){return yP(t).replace(/\./g,"")},vP=function(t){try{return D1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=()=>_P().__FIREBASE_DEFAULTS__,EP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vP(t[1]);return e&&JSON.parse(e)},Sp=()=>{try{return wP()||EP()||xP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TP=t=>{var e,n;return(n=(e=Sp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},O1=t=>{const e=TP(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N1=()=>{var t;return(t=Sp())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ou(JSON.stringify(n)),ou(JSON.stringify(s)),a].join(".")}function IP(){var t;const e=(t=Sp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RP(){try{return typeof indexedDB=="object"}catch{return!1}}function PP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="FirebaseError";class wi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CP,Object.setPrototypeOf(this,wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L1.prototype.create)}}class L1{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?AP(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new wi(i,a,r)}}function AP(t,e){return t.replace(kP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kP=/\{\$([^}]+)}/g;function Md(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(yy(o)&&yy(s)){if(!Md(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t){return t&&t._delegate?t._delegate:t}class fo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OP(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DP(t){return t===Hr?void 0:t}function OP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const MP={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},LP=le.INFO,VP={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},$P=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class V1{constructor(e){this.name=e,this._logLevel=LP,this._logHandler=$P,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const jP=(t,e)=>e.some(n=>t instanceof n);let vy,_y;function FP(){return vy||(vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UP(){return _y||(_y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $1=new WeakMap,Ld=new WeakMap,j1=new WeakMap,hh=new WeakMap,Ip=new WeakMap;function zP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Sr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&$1.set(n,t)}).catch(()=>{}),Ip.set(e,t),e}function BP(t){if(Ld.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Ld.set(t,e)}let Vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||j1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WP(t){Vd=t(Vd)}function HP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dh(this),e,...n);return j1.set(r,e.sort?e.sort():[e]),Sr(r)}:UP().includes(t)?function(...e){return t.apply(dh(this),e),Sr($1.get(this))}:function(...e){return Sr(t.apply(dh(this),e))}}function qP(t){return typeof t=="function"?HP(t):(t instanceof IDBTransaction&&BP(t),jP(t,FP())?new Proxy(t,Vd):t)}function Sr(t){if(t instanceof IDBRequest)return zP(t);if(hh.has(t))return hh.get(t);const e=qP(t);return e!==t&&(hh.set(t,e),Ip.set(e,t)),e}const dh=t=>Ip.get(t);function KP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Sr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Sr(s.result),l.oldVersion,l.newVersion,Sr(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const QP=["get","getKey","getAll","getAllKeys","count"],GP=["put","add","delete","clear"],fh=new Map;function wy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QP.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fh.set(e,o),o}WP(t=>({...t,get:(e,n,r)=>wy(e,n)||t.get(e,n,r),has:(e,n)=>!!wy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $d="@firebase/app",Ey="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new V1("@firebase/app"),JP="@firebase/app-compat",ZP="@firebase/analytics-compat",eC="@firebase/analytics",tC="@firebase/app-check-compat",nC="@firebase/app-check",rC="@firebase/auth",iC="@firebase/auth-compat",oC="@firebase/database",sC="@firebase/database-compat",aC="@firebase/functions",lC="@firebase/functions-compat",uC="@firebase/installations",cC="@firebase/installations-compat",hC="@firebase/messaging",dC="@firebase/messaging-compat",fC="@firebase/performance",pC="@firebase/performance-compat",mC="@firebase/remote-config",gC="@firebase/remote-config-compat",yC="@firebase/storage",vC="@firebase/storage-compat",_C="@firebase/firestore",wC="@firebase/firestore-compat",EC="firebase",xC="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="[DEFAULT]",TC={[$d]:"fire-core",[JP]:"fire-core-compat",[eC]:"fire-analytics",[ZP]:"fire-analytics-compat",[nC]:"fire-app-check",[tC]:"fire-app-check-compat",[rC]:"fire-auth",[iC]:"fire-auth-compat",[oC]:"fire-rtdb",[sC]:"fire-rtdb-compat",[aC]:"fire-fn",[lC]:"fire-fn-compat",[uC]:"fire-iid",[cC]:"fire-iid-compat",[hC]:"fire-fcm",[dC]:"fire-fcm-compat",[fC]:"fire-perf",[pC]:"fire-perf-compat",[mC]:"fire-rc",[gC]:"fire-rc-compat",[yC]:"fire-gcs",[vC]:"fire-gcs-compat",[_C]:"fire-fst",[wC]:"fire-fst-compat","fire-js":"fire-js",[EC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Map,Fd=new Map;function SC(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(Fd.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Fd.set(e,t);for(const n of su.values())SC(n,t);return!0}function F1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ir=new L1("app","Firebase",IC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=xC;function z1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=N1()),!n)throw Ir.create("no-options");const o=su.get(i);if(o){if(Md(n,o.options)&&Md(r,o.config))return o;throw Ir.create("duplicate-app",{appName:i})}const s=new NP(i);for(const l of Fd.values())s.addComponent(l);const a=new RC(n,r,s);return su.set(i,a),a}function B1(t=jd){const e=su.get(t);if(!e&&t===jd&&N1())return z1();if(!e)throw Ir.create("no-app",{appName:t});return e}function Rr(t,e,n){var r;let i=(r=TC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(a.join(" "));return}Us(new fo(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="firebase-heartbeat-database",CC=1,zs="firebase-heartbeat-store";let ph=null;function W1(){return ph||(ph=KP(PC,CC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zs)}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),ph}async function AC(t){try{return await(await W1()).transaction(zs).objectStore(zs).get(H1(t))}catch(e){if(e instanceof wi)fi.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function xy(t,e){try{const r=(await W1()).transaction(zs,"readwrite");await r.objectStore(zs).put(e,H1(t)),await r.done}catch(n){if(n instanceof wi)fi.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function H1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=1024,bC=30*24*60*60*1e3;class DC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ty();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=bC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ty(),{heartbeatsToSend:r,unsentEntries:i}=OC(this._heartbeatsCache.heartbeats),o=ou(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ty(){return new Date().toISOString().substring(0,10)}function OC(t,e=kC){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Sy(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RP()?PP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sy(t){return ou(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){Us(new fo("platform-logger",e=>new YP(e),"PRIVATE")),Us(new fo("heartbeat",e=>new DC(e),"PRIVATE")),Rr($d,Ey,t),Rr($d,Ey,"esm2017"),Rr("fire-js","")}MC("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="firebasestorage.googleapis.com",K1="storageBucket",LC=2*60*1e3,VC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends wi{constructor(e,n,r=0){super(mh(e),`Firebase Storage: ${n} (${mh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function mh(t){return"storage/"+t}function Rp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(Me.UNKNOWN,t)}function $C(t){return new Ve(Me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jC(t){return new Ve(Me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(Me.UNAUTHENTICATED,t)}function UC(){return new Ve(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zC(t){return new Ve(Me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function BC(){return new Ve(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function WC(){return new Ve(Me.CANCELED,"User canceled the upload/download.")}function HC(t){return new Ve(Me.INVALID_URL,"Invalid URL '"+t+"'.")}function qC(t){return new Ve(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KC(){return new Ve(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+K1+"' property when initializing the app?")}function QC(){return new Ve(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GC(){return new Ve(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function YC(t){return new Ve(Me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ud(t){return new Ve(Me.INVALID_ARGUMENT,t)}function Q1(){return new Ve(Me.APP_DELETED,"The Firebase app was deleted.")}function XC(t){return new Ve(Me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ps(t,e){return new Ve(Me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Bo(t){throw new Ve(Me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw qC(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},_=n===q1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${x}`,"i"),y=[{regex:a,indices:l,postModify:o},{regex:p,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<y.length;w++){const E=y[w],S=E.regex.exec(e);if(S){const T=S[E.indices.bucket];let I=S[E.indices.path];I||(I=""),r=new At(T,I),E.postModify(r);break}}if(r==null)throw HC(e);return r}}class JC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function c(...x){u||(u=!0,e.apply(null,x))}function h(x){i=setTimeout(()=>{i=null,t(p,l())},x)}function f(){o&&clearTimeout(o)}function p(x,...m){if(u){f();return}if(x){f(),c.call(null,x,...m);return}if(l()||s){f(),c.call(null,x,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(x){v||(v=!0,f(),!u&&(i!==null?(x||(a=2),clearTimeout(i),h(0)):x||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,_(!0)},n),_}function eA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){return t!==void 0}function nA(t){return typeof t=="object"&&!Array.isArray(t)}function Pp(t){return typeof t=="string"||t instanceof String}function Iy(t){return Cp()&&t instanceof Blob}function Cp(){return typeof Blob<"u"&&!IP()}function zd(t,e,n,r){if(r<e)throw Ud(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ud(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function G1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oi||(oi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,i,o,s,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ya(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===oi.NO_ERROR,l=o.getStatus();if(!a||rA(l,this.additionalRetryCodes_)&&this.retry){const c=o.getErrorCode()===oi.ABORT;r(!1,new Ya(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ya(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());tA(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=Rp();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?Q1():WC();s(l)}else{const l=BC();s(l)}};this.canceled_?n(!1,new Ya(!1,null,!0)):this.backoffId_=ZC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ya{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function oA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function uA(t,e,n,r,i,o,s=!0){const a=G1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return aA(u,e),oA(u,n),sA(u,o),lA(u,r),new iA(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hA(...t){const e=cA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Cp())return new Blob(t);throw new Ve(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function dA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){if(typeof atob>"u")throw YC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gh{constructor(e,n){this.data=e,this.contentType=n||null}}function pA(t,e){switch(t){case Pn.RAW:return new gh(Y1(e));case Pn.BASE64:case Pn.BASE64URL:return new gh(X1(t,e));case Pn.DATA_URL:return new gh(gA(e),yA(e))}throw Rp()}function Y1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,s=t.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function mA(t){let e;try{e=decodeURIComponent(t)}catch{throw ps(Pn.DATA_URL,"Malformed data URL.")}return Y1(e)}function X1(t,e){switch(t){case Pn.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw ps(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Pn.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw ps(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=fA(e)}catch(i){throw i.message.includes("polyfill")?i:ps(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class J1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ps(Pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=vA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function gA(t){const e=new J1(t);return e.base64?X1(Pn.BASE64,e.rest):mA(e.rest)}function yA(t){return new J1(t).contentType}function vA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){let r=0,i="";Iy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Iy(this.data_)){const r=this.data_,i=dA(r,e,n);return i===null?null:new hr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new hr(r,!0)}}static getBlob(...e){if(Cp()){const n=e.map(r=>r instanceof hr?r.data_:r);return new hr(hA.apply(null,n))}else{const n=e.map(s=>Pp(s)?pA(Pn.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new hr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){let e;try{e=JSON.parse(t)}catch{return null}return nA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function wA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Z1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t,e){return e}class Rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||EA}}let Xa=null;function xA(t){return!Pp(t)||t.length<2?t:Z1(t)}function ew(){if(Xa)return Xa;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(o,s){return xA(s)}const n=new Rt("name");n.xform=e,t.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new Rt("size");return i.xform=r,t.push(i),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),Xa=t,Xa}function TA(t,e){function n(){const r=t.bucket,i=t.fullPath,o=new At(r,i);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function SA(t,e,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,e[s.server])}return TA(r,t),r}function tw(t,e,n){const r=Ap(e);return r===null?null:SA(t,r,n)}function IA(t,e,n,r){const i=Ap(e);if(i===null||!Pp(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+s(c)+"/o/"+s(h),p=Gu(f,n,r),v=G1({alt:"media",token:u});return p+v})[0]}function RA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="prefixes",Py="items";function PA(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Ry])for(const i of n[Ry]){const o=i.replace(/\/$/,""),s=t._makeStorageReference(new At(e,o));r.prefixes.push(s)}if(n[Py])for(const i of n[Py]){const o=t._makeStorageReference(new At(e,i.name));r.items.push(o)}return r}function CA(t,e,n){const r=Ap(n);return r===null?null:PA(t,e,r)}class kp{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){if(!t)throw Rp()}function AA(t,e){function n(r,i){const o=tw(t,i,e);return bp(o!==null),o}return n}function kA(t,e){function n(r,i){const o=CA(t,e,i);return bp(o!==null),o}return n}function bA(t,e){function n(r,i){const o=tw(t,i,e);return bp(o!==null),IA(o,i,t.host,t._protocol)}return n}function Dp(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=UC():i=FC():n.getStatus()===402?i=jC(t.bucket):n.getStatus()===403?i=zC(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function DA(t){const e=Dp(t);function n(r,i){let o=e(r,i);return r.getStatus()===404&&(o=$C(t.path)),o.serverResponse=i.serverResponse,o}return n}function OA(t,e,n,r,i){const o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),i&&(o.maxResults=i);const s=e.bucketOnlyServerUrl(),a=Gu(s,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new kp(a,l,kA(t,e.bucket),u);return c.urlParams=o,c.errorHandler=Dp(e),c}function NA(t,e,n){const r=e.fullServerUrl(),i=Gu(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new kp(i,o,bA(t,n),s);return a.errorHandler=DA(e),a}function MA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function LA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=MA(null,e)),r}function VA(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let w=0;w<2;w++)y=y+Math.random().toString().slice(2);return y}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=LA(e,r,i),c=RA(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=hr.getBlob(h,r,f);if(p===null)throw QC();const v={name:u.fullPath},_=Gu(o,t.host,t._protocol),x="POST",m=t.maxUploadRetryTime,d=new kp(_,x,AA(t,n),m);return d.urlParams=v,d.headers=s,d.body=p.uploadData(),d.errorHandler=Dp(e),d}class $A{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Bo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jA extends $A{initXhr(){this.xhr_.responseType="text"}}function Op(){return new jA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pi(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Z1(this._location.path)}get storage(){return this._service}get parent(){const e=_A(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new pi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw XC(e)}}function FA(t,e,n){t._throwIfRoot("uploadBytes");const r=VA(t.storage,t._location,ew(),new hr(e,!0),n);return t.storage.makeRequestWithTokens(r,Op).then(i=>({metadata:i,ref:t}))}function UA(t){const e={prefixes:[],items:[]};return nw(t,e).then(()=>e)}async function nw(t,e,n){const i=await zA(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await nw(t,e,i.nextPageToken)}function zA(t,e){e!=null&&typeof e.maxResults=="number"&&zd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=OA(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Op)}function BA(t){t._throwIfRoot("getDownloadURL");const e=NA(t.storage,t._location,ew());return t.storage.makeRequestWithTokens(e,Op).then(n=>{if(n===null)throw GC();return n})}function WA(t,e){const n=wA(t._location.path,e),r=new At(t._location.bucket,n);return new pi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){return/^[A-Za-z]+:\/\//.test(t)}function qA(t,e){return new pi(t,e)}function rw(t,e){if(t instanceof Np){const n=t;if(n._bucket==null)throw KC();const r=new pi(n,n._bucket);return e!=null?rw(r,e):r}else return e!==void 0?WA(t,e):t}function KA(t,e){if(e&&HA(e)){if(t instanceof Np)return qA(t,e);throw Ud("To use ref(service, url), the first argument must be a Storage instance.")}else return rw(t,e)}function Cy(t,e){const n=e==null?void 0:e[K1];return n==null?null:At.makeFromBucketSpec(n,t)}function QA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:M1(i,t.app.options.projectId))}class Np{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=q1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LC,this._maxUploadRetryTime=VC,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=Cy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=Cy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pi(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new JC(Q1());{const s=uA(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ay="@firebase/storage",ky="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="storage";function Yu(t,e,n){return t=Gt(t),FA(t,e,n)}function GA(t){return t=Gt(t),UA(t)}function ca(t){return t=Gt(t),BA(t)}function ha(t,e){return t=Gt(t),KA(t,e)}function da(t=B1(),e){t=Gt(t);const r=F1(t,iw).getImmediate({identifier:e}),i=O1("storage");return i&&YA(r,...i),r}function YA(t,e,n,r={}){QA(t,e,n,r)}function XA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Np(n,r,i,e,U1)}function JA(){Us(new fo(iw,XA,"PUBLIC").setMultipleInstances(!0)),Rr(Ay,ky,""),Rr(Ay,ky,"esm2017")}JA();var ow={exports:{}};(function(t,e){(function(r,i){t.exports=i(P)})(vf,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,l)=>{l.match=v,l.parse=_;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,p=/(dpi|dpcm|dppx)?$/;function v(y,w){return _(y).some(function(E){var S=E.inverse,T=E.type==="all"||w.type===E.type;if(T&&S||!(T||S))return!1;var I=E.expressions.every(function(b){var D=b.feature,H=b.modifier,Q=b.value,W=w[D];if(!W)return!1;switch(D){case"orientation":case"scan":return W.toLowerCase()===Q.toLowerCase();case"width":case"height":case"device-width":case"device-height":Q=d(Q),W=d(W);break;case"resolution":Q=m(Q),W=m(W);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":Q=x(Q),W=x(W);break;case"grid":case"color":case"color-index":case"monochrome":Q=parseInt(Q,10)||1,W=parseInt(W,10)||0;break}switch(H){case"min":return W>=Q;case"max":return W<=Q;default:return W===Q}});return I&&!S||!I&&S})}function _(y){return y.split(",").map(function(w){w=w.trim();var E=w.match(u),S=E[1],T=E[2],I=E[3]||"",b={};return b.inverse=!!S&&S.toLowerCase()==="not",b.type=T?T.toLowerCase():"all",I=I.match(/\([^\)]+\)/g)||[],b.expressions=I.map(function(D){var H=D.match(c),Q=H[1].toLowerCase().match(h);return{modifier:Q[1],feature:Q[2],value:H[2]}}),b})}function x(y){var w=Number(y),E;return w||(E=y.match(/^(\d+)\s*\/\s*(\d+)$/),w=E[1]/E[2]),w}function m(y){var w=parseFloat(y),E=String(y).match(p)[1];switch(E){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function d(y){var w=parseFloat(y),E=String(y).match(f)[1];switch(E){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(a,l,u)=>{u.r(l),u.d(l,{default:()=>_});var c=/[A-Z]/g,h=/^ms-/,f={};function p(x){return"-"+x.toLowerCase()}function v(x){if(f.hasOwnProperty(x))return f[x];var m=x.replace(c,p);return f[x]=h.test(m)?"-"+m:m}const _=v},"./node_modules/matchmediaquery/index.js":(a,l,u)=>{var c=u("./node_modules/css-mediaquery/index.js").match,h=typeof window<"u"?window.matchMedia:null;function f(v,_,x){var m=this;if(h&&!x){var d=h.call(window,v);this.matches=d.matches,this.media=d.media,d.addListener(E)}else this.matches=c(v,_),this.media=v;this.addListener=y,this.removeListener=w,this.dispose=S;function y(T){d&&d.addListener(T)}function w(T){d&&d.removeListener(T)}function E(T){m.matches=T.matches,m.media=T.media}function S(){d&&d.removeListener(E)}}function p(v,_,x){return new f(v,_,x)}a.exports=p},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function h(p){if(p==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(p)}function f(){try{if(!Object.assign)return!1;var p=new String("abc");if(p[5]="de",Object.getOwnPropertyNames(p)[0]==="5")return!1;for(var v={},_=0;_<10;_++)v["_"+String.fromCharCode(_)]=_;var x=Object.getOwnPropertyNames(v).map(function(d){return v[d]});if(x.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(d){m[d]=d}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=f()?Object.assign:function(p,v){for(var _,x=h(p),m,d=1;d<arguments.length;d++){_=Object(arguments[d]);for(var y in _)u.call(_,y)&&(x[y]=_[y]);if(l){m=l(_);for(var w=0;w<m.length;w++)c.call(_,m[w])&&(x[m[w]]=_[m[w]])}}return x}},"./node_modules/prop-types/checkPropTypes.js":(a,l,u)=>{var c=function(){};{var h=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),f={},p=u("./node_modules/prop-types/lib/has.js");c=function(_){var x="Warning: "+_;typeof console<"u"&&console.error(x);try{throw new Error(x)}catch{}}}function v(_,x,m,d,y){for(var w in _)if(p(_,w)){var E;try{if(typeof _[w]!="function"){var S=Error((d||"React class")+": "+m+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof _[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw S.name="Invariant Violation",S}E=_[w](x,w,d,m,null,h)}catch(I){E=I}if(E&&!(E instanceof Error)&&c((d||"React class")+": type specification of "+m+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in f)){f[E.message]=!0;var T=y?y():"";c("Failed "+m+" type: "+E.message+(T??""))}}}v.resetWarningCache=function(){f={}},a.exports=v},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,l,u)=>{var c=u("./node_modules/react-is/index.js"),h=u("./node_modules/object-assign/index.js"),f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),p=u("./node_modules/prop-types/lib/has.js"),v=u("./node_modules/prop-types/checkPropTypes.js"),_=function(){};_=function(m){var d="Warning: "+m;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function x(){return null}a.exports=function(m,d){var y=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function E(A){var $=A&&(y&&A[y]||A[w]);if(typeof $=="function")return $}var S="<<anonymous>>",T={array:H("array"),bigint:H("bigint"),bool:H("boolean"),func:H("function"),number:H("number"),object:H("object"),string:H("string"),symbol:H("symbol"),any:Q(),arrayOf:W,element:$e(),elementType:ft(),instanceOf:it,node:B(),objectOf:M,oneOf:pt,oneOfType:z,shape:we,exact:zt};function I(A,$){return A===$?A!==0||1/A===1/$:A!==A&&$!==$}function b(A,$){this.message=A,this.data=$&&typeof $=="object"?$:{},this.stack=""}b.prototype=Error.prototype;function D(A){var $={},se=0;function ne(ce,te,re,he,ge,de,L){if(he=he||S,de=de||re,L!==f){if(d){var Xe=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Xe.name="Invariant Violation",Xe}else if(typeof console<"u"){var un=he+":"+re;!$[un]&&se<3&&(_("You are manually calling a React.PropTypes validation function for the `"+de+"` prop on `"+he+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),$[un]=!0,se++)}}return te[re]==null?ce?te[re]===null?new b("The "+ge+" `"+de+"` is marked as required "+("in `"+he+"`, but its value is `null`.")):new b("The "+ge+" `"+de+"` is marked as required in "+("`"+he+"`, but its value is `undefined`.")):null:A(te,re,he,ge,de)}var X=ne.bind(null,!1);return X.isRequired=ne.bind(null,!0),X}function H(A){function $(se,ne,X,ce,te,re){var he=se[ne],ge=Pe(he);if(ge!==A){var de=je(he);return new b("Invalid "+ce+" `"+te+"` of type "+("`"+de+"` supplied to `"+X+"`, expected ")+("`"+A+"`."),{expectedType:A})}return null}return D($)}function Q(){return D(x)}function W(A){function $(se,ne,X,ce,te){if(typeof A!="function")return new b("Property `"+te+"` of component `"+X+"` has invalid PropType notation inside arrayOf.");var re=se[ne];if(!Array.isArray(re)){var he=Pe(re);return new b("Invalid "+ce+" `"+te+"` of type "+("`"+he+"` supplied to `"+X+"`, expected an array."))}for(var ge=0;ge<re.length;ge++){var de=A(re,ge,X,ce,te+"["+ge+"]",f);if(de instanceof Error)return de}return null}return D($)}function $e(){function A($,se,ne,X,ce){var te=$[se];if(!m(te)){var re=Pe(te);return new b("Invalid "+X+" `"+ce+"` of type "+("`"+re+"` supplied to `"+ne+"`, expected a single ReactElement."))}return null}return D(A)}function ft(){function A($,se,ne,X,ce){var te=$[se];if(!c.isValidElementType(te)){var re=Pe(te);return new b("Invalid "+X+" `"+ce+"` of type "+("`"+re+"` supplied to `"+ne+"`, expected a single ReactElement type."))}return null}return D(A)}function it(A){function $(se,ne,X,ce,te){if(!(se[ne]instanceof A)){var re=A.name||S,he=Fn(se[ne]);return new b("Invalid "+ce+" `"+te+"` of type "+("`"+he+"` supplied to `"+X+"`, expected ")+("instance of `"+re+"`."))}return null}return D($)}function pt(A){if(!Array.isArray(A))return arguments.length>1?_("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):_("Invalid argument supplied to oneOf, expected an array."),x;function $(se,ne,X,ce,te){for(var re=se[ne],he=0;he<A.length;he++)if(I(re,A[he]))return null;var ge=JSON.stringify(A,function(L,Xe){var un=je(Xe);return un==="symbol"?String(Xe):Xe});return new b("Invalid "+ce+" `"+te+"` of value `"+String(re)+"` "+("supplied to `"+X+"`, expected one of "+ge+"."))}return D($)}function M(A){function $(se,ne,X,ce,te){if(typeof A!="function")return new b("Property `"+te+"` of component `"+X+"` has invalid PropType notation inside objectOf.");var re=se[ne],he=Pe(re);if(he!=="object")return new b("Invalid "+ce+" `"+te+"` of type "+("`"+he+"` supplied to `"+X+"`, expected an object."));for(var ge in re)if(p(re,ge)){var de=A(re,ge,X,ce,te+"."+ge,f);if(de instanceof Error)return de}return null}return D($)}function z(A){if(!Array.isArray(A))return _("Invalid argument supplied to oneOfType, expected an instance of array."),x;for(var $=0;$<A.length;$++){var se=A[$];if(typeof se!="function")return _("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Fr(se)+" at index "+$+"."),x}function ne(X,ce,te,re,he){for(var ge=[],de=0;de<A.length;de++){var L=A[de],Xe=L(X,ce,te,re,he,f);if(Xe==null)return null;Xe.data&&p(Xe.data,"expectedType")&&ge.push(Xe.data.expectedType)}var un=ge.length>0?", expected one of type ["+ge.join(", ")+"]":"";return new b("Invalid "+re+" `"+he+"` supplied to "+("`"+te+"`"+un+"."))}return D(ne)}function B(){function A($,se,ne,X,ce){return Ue($[se])?null:new b("Invalid "+X+" `"+ce+"` supplied to "+("`"+ne+"`, expected a ReactNode."))}return D(A)}function me(A,$,se,ne,X){return new b((A||"React class")+": "+$+" type `"+se+"."+ne+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+X+"`.")}function we(A){function $(se,ne,X,ce,te){var re=se[ne],he=Pe(re);if(he!=="object")return new b("Invalid "+ce+" `"+te+"` of type `"+he+"` "+("supplied to `"+X+"`, expected `object`."));for(var ge in A){var de=A[ge];if(typeof de!="function")return me(X,ce,te,ge,je(de));var L=de(re,ge,X,ce,te+"."+ge,f);if(L)return L}return null}return D($)}function zt(A){function $(se,ne,X,ce,te){var re=se[ne],he=Pe(re);if(he!=="object")return new b("Invalid "+ce+" `"+te+"` of type `"+he+"` "+("supplied to `"+X+"`, expected `object`."));var ge=h({},se[ne],A);for(var de in ge){var L=A[de];if(p(A,de)&&typeof L!="function")return me(X,ce,te,de,je(L));if(!L)return new b("Invalid "+ce+" `"+te+"` key `"+de+"` supplied to `"+X+"`.\nBad object: "+JSON.stringify(se[ne],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(A),null,"  "));var Xe=L(re,de,X,ce,te+"."+de,f);if(Xe)return Xe}return null}return D($)}function Ue(A){switch(typeof A){case"number":case"string":case"undefined":return!0;case"boolean":return!A;case"object":if(Array.isArray(A))return A.every(Ue);if(A===null||m(A))return!0;var $=E(A);if($){var se=$.call(A),ne;if($!==A.entries){for(;!(ne=se.next()).done;)if(!Ue(ne.value))return!1}else for(;!(ne=se.next()).done;){var X=ne.value;if(X&&!Ue(X[1]))return!1}}else return!1;return!0;default:return!1}}function Zt(A,$){return A==="symbol"?!0:$?$["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&$ instanceof Symbol:!1}function Pe(A){var $=typeof A;return Array.isArray(A)?"array":A instanceof RegExp?"object":Zt($,A)?"symbol":$}function je(A){if(typeof A>"u"||A===null)return""+A;var $=Pe(A);if($==="object"){if(A instanceof Date)return"date";if(A instanceof RegExp)return"regexp"}return $}function Fr(A){var $=je(A);switch($){case"array":case"object":return"an "+$;case"boolean":case"date":case"regexp":return"a "+$;default:return $}}function Fn(A){return!A.constructor||!A.constructor.name?S:A.constructor.name}return T.checkPropTypes=v,T.resetWarningCache=v.resetWarningCache,T.PropTypes=T,T}},"./node_modules/prop-types/index.js":(a,l,u)=>{{var c=u("./node_modules/react-is/index.js"),h=!0;a.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,h)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=l},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,h=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,p=u?Symbol.for("react.strict_mode"):60108,v=u?Symbol.for("react.profiler"):60114,_=u?Symbol.for("react.provider"):60109,x=u?Symbol.for("react.context"):60110,m=u?Symbol.for("react.async_mode"):60111,d=u?Symbol.for("react.concurrent_mode"):60111,y=u?Symbol.for("react.forward_ref"):60112,w=u?Symbol.for("react.suspense"):60113,E=u?Symbol.for("react.suspense_list"):60120,S=u?Symbol.for("react.memo"):60115,T=u?Symbol.for("react.lazy"):60116,I=u?Symbol.for("react.block"):60121,b=u?Symbol.for("react.fundamental"):60117,D=u?Symbol.for("react.responder"):60118,H=u?Symbol.for("react.scope"):60119;function Q(L){return typeof L=="string"||typeof L=="function"||L===f||L===d||L===v||L===p||L===w||L===E||typeof L=="object"&&L!==null&&(L.$$typeof===T||L.$$typeof===S||L.$$typeof===_||L.$$typeof===x||L.$$typeof===y||L.$$typeof===b||L.$$typeof===D||L.$$typeof===H||L.$$typeof===I)}function W(L){if(typeof L=="object"&&L!==null){var Xe=L.$$typeof;switch(Xe){case c:var un=L.type;switch(un){case m:case d:case f:case v:case p:case w:return un;default:var Fm=un&&un.$$typeof;switch(Fm){case x:case y:case T:case S:case _:return Fm;default:return Xe}}case h:return Xe}}}var $e=m,ft=d,it=x,pt=_,M=c,z=y,B=f,me=T,we=S,zt=h,Ue=v,Zt=p,Pe=w,je=!1;function Fr(L){return je||(je=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Fn(L)||W(L)===m}function Fn(L){return W(L)===d}function A(L){return W(L)===x}function $(L){return W(L)===_}function se(L){return typeof L=="object"&&L!==null&&L.$$typeof===c}function ne(L){return W(L)===y}function X(L){return W(L)===f}function ce(L){return W(L)===T}function te(L){return W(L)===S}function re(L){return W(L)===h}function he(L){return W(L)===v}function ge(L){return W(L)===p}function de(L){return W(L)===w}l.AsyncMode=$e,l.ConcurrentMode=ft,l.ContextConsumer=it,l.ContextProvider=pt,l.Element=M,l.ForwardRef=z,l.Fragment=B,l.Lazy=me,l.Memo=we,l.Portal=zt,l.Profiler=Ue,l.StrictMode=Zt,l.Suspense=Pe,l.isAsyncMode=Fr,l.isConcurrentMode=Fn,l.isContextConsumer=A,l.isContextProvider=$,l.isElement=se,l.isForwardRef=ne,l.isFragment=X,l.isLazy=ce,l.isMemo=te,l.isPortal=re,l.isProfiler=he,l.isStrictMode=ge,l.isSuspense=de,l.isValidElementType=Q,l.typeOf=W})()},"./node_modules/react-is/index.js":(a,l,u)=>{a.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>h,shallowEqualObjects:()=>c});function c(f,p){if(f===p)return!0;if(!f||!p)return!1;var v=Object.keys(f),_=Object.keys(p),x=v.length;if(_.length!==x)return!1;for(var m=0;m<x;m++){var d=v[m];if(f[d]!==p[d]||!Object.prototype.hasOwnProperty.call(p,d))return!1}return!0}function h(f,p){if(f===p)return!0;if(!f||!p)return!1;var v=f.length;if(p.length!==v)return!1;for(var _=0;_<v;_++)if(f[_]!==p[_])return!1;return!0}},"./src/Component.ts":function(a,l,u){var c=this&&this.__rest||function(v,_){var x={};for(var m in v)Object.prototype.hasOwnProperty.call(v,m)&&_.indexOf(m)<0&&(x[m]=v[m]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,m=Object.getOwnPropertySymbols(v);d<m.length;d++)_.indexOf(m[d])<0&&Object.prototype.propertyIsEnumerable.call(v,m[d])&&(x[m[d]]=v[m[d]]);return x},h=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(l,"__esModule",{value:!0});var f=h(u("./src/useMediaQuery.ts")),p=function(v){var _=v.children,x=v.device,m=v.onChange,d=c(v,["children","device","onChange"]),y=(0,f.default)(d,x,m);return typeof _=="function"?_(y):y?_:null};l.default=p},"./src/Context.ts":(a,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var c=u("react"),h=(0,c.createContext)(void 0);l.default=h},"./src/index.ts":function(a,l,u){var c=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var h=c(u("./src/useMediaQuery.ts"));l.useMediaQuery=h.default;var f=c(u("./src/Component.ts"));l.default=f.default;var p=c(u("./src/toQuery.ts"));l.toQuery=p.default;var v=c(u("./src/Context.ts"));l.Context=v.default},"./src/mediaQuery.ts":function(a,l,u){var c=this&&this.__assign||function(){return c=Object.assign||function(w){for(var E,S=1,T=arguments.length;S<T;S++){E=arguments[S];for(var I in E)Object.prototype.hasOwnProperty.call(E,I)&&(w[I]=E[I])}return w},c.apply(this,arguments)},h=this&&this.__rest||function(w,E){var S={};for(var T in w)Object.prototype.hasOwnProperty.call(w,T)&&E.indexOf(T)<0&&(S[T]=w[T]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,T=Object.getOwnPropertySymbols(w);I<T.length;I++)E.indexOf(T[I])<0&&Object.prototype.propertyIsEnumerable.call(w,T[I])&&(S[T[I]]=w[T[I]]);return S},f=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(l,"__esModule",{value:!0});var p=f(u("./node_modules/prop-types/index.js")),v=p.default.oneOfType([p.default.string,p.default.number]),_={all:p.default.bool,grid:p.default.bool,aural:p.default.bool,braille:p.default.bool,handheld:p.default.bool,print:p.default.bool,projection:p.default.bool,screen:p.default.bool,tty:p.default.bool,tv:p.default.bool,embossed:p.default.bool},x={orientation:p.default.oneOf(["portrait","landscape"]),scan:p.default.oneOf(["progressive","interlace"]),aspectRatio:p.default.string,deviceAspectRatio:p.default.string,height:v,deviceHeight:v,width:v,deviceWidth:v,color:p.default.bool,colorIndex:p.default.bool,monochrome:p.default.bool,resolution:v,type:Object.keys(_)};x.type;var m=h(x,["type"]),d=c({minAspectRatio:p.default.string,maxAspectRatio:p.default.string,minDeviceAspectRatio:p.default.string,maxDeviceAspectRatio:p.default.string,minHeight:v,maxHeight:v,minDeviceHeight:v,maxDeviceHeight:v,minWidth:v,maxWidth:v,minDeviceWidth:v,maxDeviceWidth:v,minColor:p.default.number,maxColor:p.default.number,minColorIndex:p.default.number,maxColorIndex:p.default.number,minMonochrome:p.default.number,maxMonochrome:p.default.number,minResolution:v,maxResolution:v},m),y=c(c({},_),d);l.default={all:y,types:_,matchers:x,features:d}},"./src/toQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(l,"__esModule",{value:!0});var h=c(u("./node_modules/hyphenate-style-name/index.js")),f=c(u("./src/mediaQuery.ts")),p=function(m){return"not ".concat(m)},v=function(m,d){var y=(0,h.default)(m);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?y:d===!1?p(y):"(".concat(y,": ").concat(d,")")},_=function(m){return m.join(" and ")},x=function(m){var d=[];return Object.keys(f.default.all).forEach(function(y){var w=m[y];w!=null&&d.push(v(y,w))}),_(d)};l.default=x},"./src/useMediaQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(l,"__esModule",{value:!0});var h=u("react"),f=c(u("./node_modules/matchmediaquery/index.js")),p=c(u("./node_modules/hyphenate-style-name/index.js")),v=u("./node_modules/shallow-equal/dist/index.esm.js"),_=c(u("./src/toQuery.ts")),x=c(u("./src/Context.ts")),m=function(b){return b.query||(0,_.default)(b)},d=function(b){if(b){var D=Object.keys(b);return D.reduce(function(H,Q){return H[(0,p.default)(Q)]=b[Q],H},{})}},y=function(){var b=(0,h.useRef)(!1);return(0,h.useEffect)(function(){b.current=!0},[]),b.current},w=function(b){var D=(0,h.useContext)(x.default),H=function(){return d(b)||d(D)},Q=(0,h.useState)(H),W=Q[0],$e=Q[1];return(0,h.useEffect)(function(){var ft=H();(0,v.shallowEqualObjects)(W,ft)||$e(ft)},[b,D]),W},E=function(b){var D=function(){return m(b)},H=(0,h.useState)(D),Q=H[0],W=H[1];return(0,h.useEffect)(function(){var $e=D();Q!==$e&&W($e)},[b]),Q},S=function(b,D){var H=function(){return(0,f.default)(b,D||{},!!D)},Q=(0,h.useState)(H),W=Q[0],$e=Q[1],ft=y();return(0,h.useEffect)(function(){if(ft){var it=H();return $e(it),function(){it&&it.dispose()}}},[b,D]),W},T=function(b){var D=(0,h.useState)(b.matches),H=D[0],Q=D[1];return(0,h.useEffect)(function(){var W=function($e){Q($e.matches)};return b.addListener(W),Q(b.matches),function(){b.removeListener(W)}},[b]),H},I=function(b,D,H){var Q=w(D),W=E(b);if(!W)throw new Error("Invalid or missing MediaQuery!");var $e=S(W,Q),ft=T($e),it=y();return(0,h.useEffect)(function(){it&&H&&H(ft)},[ft]),(0,h.useEffect)(function(){return function(){$e&&$e.dispose()}},[]),ft};l.default=I},react:a=>{a.exports=n}},i={};function o(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={exports:{}};return r[a].call(u.exports,u,u.exports,o),u.exports}o.d=(a,l)=>{for(var u in l)o.o(l,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},o.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),o.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(ow);var ZA=ow.exports,Mp={},Xu={},Lp={},yh={},vh={exports:{}},_h,by;function e2(){if(by)return _h;by=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return _h=t,_h}var wh,Dy;function t2(){if(Dy)return wh;Dy=1;var t=e2();function e(){}function n(){}return n.resetWarningCache=e,wh=function(){function r(s,a,l,u,c,h){if(h!==t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},wh}var Oy;function n2(){return Oy||(Oy=1,vh.exports=t2()()),vh.exports}var Ny;function r2(){return Ny||(Ny=1,function(t){(function(e,n){n(t,P,n2())})(vf,function(e,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=v;var i=s(n),o=s(r);function s(d){return d&&d.__esModule?d:{default:d}}var a=Object.assign||function(d){for(var y=1;y<arguments.length;y++){var w=arguments[y];for(var E in w)Object.prototype.hasOwnProperty.call(w,E)&&(d[E]=w[E])}return d};function l(d,y){var w={};for(var E in d)y.indexOf(E)>=0||Object.prototype.hasOwnProperty.call(d,E)&&(w[E]=d[E]);return w}function u(d,y){if(!(d instanceof y))throw new TypeError("Cannot call a class as a function")}var c=function(){function d(y,w){for(var E=0;E<w.length;E++){var S=w[E];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,w,E){return w&&d(y.prototype,w),E&&d(y,E),y}}();function h(d,y){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:d}function f(d,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);d.prototype=Object.create(y&&y.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(d,y):d.__proto__=y)}var p=!1;function v(d){p=d}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){v(!0)}}))}catch{}function _(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return p?d:d.capture}function x(d){if("touches"in d){var y=d.touches[0],w=y.pageX,E=y.pageY;return{x:w,y:E}}var S=d.screenX,T=d.screenY;return{x:S,y:T}}var m=function(d){f(y,d);function y(){var w;u(this,y);for(var E=arguments.length,S=Array(E),T=0;T<E;T++)S[T]=arguments[T];var I=h(this,(w=y.__proto__||Object.getPrototypeOf(y)).call.apply(w,[this].concat(S)));return I._handleSwipeStart=I._handleSwipeStart.bind(I),I._handleSwipeMove=I._handleSwipeMove.bind(I),I._handleSwipeEnd=I._handleSwipeEnd.bind(I),I._onMouseDown=I._onMouseDown.bind(I),I._onMouseMove=I._onMouseMove.bind(I),I._onMouseUp=I._onMouseUp.bind(I),I._setSwiperRef=I._setSwiperRef.bind(I),I}return c(y,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,_({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,_({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(E){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(E))}},{key:"_onMouseMove",value:function(E){this.mouseDown&&this._handleSwipeMove(E)}},{key:"_onMouseUp",value:function(E){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(E)}},{key:"_handleSwipeStart",value:function(E){var S=x(E),T=S.x,I=S.y;this.moveStart={x:T,y:I},this.props.onSwipeStart(E)}},{key:"_handleSwipeMove",value:function(E){if(this.moveStart){var S=x(E),T=S.x,I=S.y,b=T-this.moveStart.x,D=I-this.moveStart.y;this.moving=!0;var H=this.props.onSwipeMove({x:b,y:D},E);H&&E.cancelable&&E.preventDefault(),this.movePosition={deltaX:b,deltaY:D}}}},{key:"_handleSwipeEnd",value:function(E){this.props.onSwipeEnd(E);var S=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-S?this.props.onSwipeLeft(1,E):this.movePosition.deltaX>S&&this.props.onSwipeRight(1,E),this.movePosition.deltaY<-S?this.props.onSwipeUp(1,E):this.movePosition.deltaY>S&&this.props.onSwipeDown(1,E)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(E){this.swiper=E,this.props.innerRef(E)}},{key:"render",value:function(){var E=this.props;E.tagName;var S=E.className,T=E.style,I=E.children;E.allowMouseEvents,E.onSwipeUp,E.onSwipeDown,E.onSwipeLeft,E.onSwipeRight,E.onSwipeStart,E.onSwipeMove,E.onSwipeEnd,E.innerRef,E.tolerance;var b=l(E,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return i.default.createElement(this.props.tagName,a({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:S,style:T},b),I)}}]),y}(n.Component);m.displayName="ReactSwipe",m.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},m.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=m})}(yh)),yh}(function(t){(function(e,n){n(t,r2())})(vf,function(e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}e.default=r.default})})(Lp);var fa={},sw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(sw);var i2=sw.exports;Object.defineProperty(fa,"__esModule",{value:!0});fa.default=void 0;var or=o2(i2);function o2(t){return t&&t.__esModule?t:{default:t}}function s2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a2={ROOT:function(e){return(0,or.default)(s2({"carousel-root":!0},e||"",!!e))},CAROUSEL:function(e){return(0,or.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,n){return(0,or.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(e,n){return(0,or.default)({thumbs:!e,slider:e,animated:!n})},ITEM:function(e,n,r){return(0,or.default)({thumb:!e,slide:e,selected:n,previous:r})},ARROW_PREV:function(e){return(0,or.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,or.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,or.default)({dot:!0,selected:e})}};fa.default=a2;var pa={},Ju={};Object.defineProperty(Ju,"__esModule",{value:!0});Ju.outerWidth=void 0;var l2=function(e){var n=e.offsetWidth,r=getComputedStyle(e);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};Ju.outerWidth=l2;var Co={};Object.defineProperty(Co,"__esModule",{value:!0});Co.default=void 0;var u2=function(e,n,r){var i=e===0?e:e+n,o=r==="horizontal"?[i,0,0]:[0,i,0],s="translate3d",a="("+o.join(",")+")";return s+a};Co.default=u2;var ma={};Object.defineProperty(ma,"__esModule",{value:!0});ma.default=void 0;var c2=function(){return window};ma.default=c2;Object.defineProperty(pa,"__esModule",{value:!0});pa.default=void 0;var hn=f2(P),Ur=Zu(fa),h2=Ju,My=Zu(Co),d2=Zu(Lp),Ja=Zu(ma);function Zu(t){return t&&t.__esModule?t:{default:t}}function aw(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return aw=function(){return t},t}function f2(t){if(t&&t.__esModule)return t;if(t===null||ms(t)!=="object"&&typeof t!="function")return{default:t};var e=aw();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var o=r?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function ms(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ms=function(n){return typeof n}:ms=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ms(t)}function Bd(){return Bd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bd.apply(this,arguments)}function p2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ly(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m2(t,e,n){return e&&Ly(t.prototype,e),n&&Ly(t,n),t}function g2(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Wd(t,e)}function Wd(t,e){return Wd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Wd(t,e)}function y2(t){var e=_2();return function(){var r=au(t),i;if(e){var o=au(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return v2(this,i)}}function v2(t,e){return e&&(ms(e)==="object"||typeof e=="function")?e:Pt(t)}function Pt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function au(t){return au=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},au(t)}function vt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w2=function(e){return e.hasOwnProperty("key")},Vp=function(t){g2(n,t);var e=y2(n);function n(r){var i;return p2(this,n),i=e.call(this,r),vt(Pt(i),"itemsWrapperRef",void 0),vt(Pt(i),"itemsListRef",void 0),vt(Pt(i),"thumbsRef",void 0),vt(Pt(i),"setItemsWrapperRef",function(o){i.itemsWrapperRef=o}),vt(Pt(i),"setItemsListRef",function(o){i.itemsListRef=o}),vt(Pt(i),"setThumbsRef",function(o,s){i.thumbsRef||(i.thumbsRef=[]),i.thumbsRef[s]=o}),vt(Pt(i),"updateSizes",function(){if(!(!i.props.children||!i.itemsWrapperRef||!i.thumbsRef)){var o=hn.Children.count(i.props.children),s=i.itemsWrapperRef.clientWidth,a=i.props.thumbWidth?i.props.thumbWidth:(0,h2.outerWidth)(i.thumbsRef[0]),l=Math.floor(s/a),u=l<o,c=u?o-l:0;i.setState(function(h,f){return{itemSize:a,visibleItems:l,firstItem:u?i.getFirstItem(f.selectedItem):0,lastPosition:c,showArrows:u}})}}),vt(Pt(i),"handleClickItem",function(o,s,a){if(!w2(a)||a.key==="Enter"){var l=i.props.onSelectItem;typeof l=="function"&&l(o,s)}}),vt(Pt(i),"onSwipeStart",function(){i.setState({swiping:!0})}),vt(Pt(i),"onSwipeEnd",function(){i.setState({swiping:!1})}),vt(Pt(i),"onSwipeMove",function(o){var s=o.x;if(!i.state.itemSize||!i.itemsWrapperRef||!i.state.visibleItems)return!1;var a=0,l=hn.Children.count(i.props.children),u=-(i.state.firstItem*100)/i.state.visibleItems,c=Math.max(l-i.state.visibleItems,0),h=-c*100/i.state.visibleItems;u===a&&s>0&&(s=0),u===h&&s<0&&(s=0);var f=i.itemsWrapperRef.clientWidth,p=u+100/(f/s);return i.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(v){i.itemsListRef.style[v]=(0,My.default)(p,"%",i.props.axis)}),!0}),vt(Pt(i),"slideRight",function(o){i.moveTo(i.state.firstItem-(typeof o=="number"?o:1))}),vt(Pt(i),"slideLeft",function(o){i.moveTo(i.state.firstItem+(typeof o=="number"?o:1))}),vt(Pt(i),"moveTo",function(o){o=o<0?0:o,o=o>=i.state.lastPosition?i.state.lastPosition:o,i.setState({firstItem:o})}),i.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},i}return m2(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(i){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==i.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Ja.default)().addEventListener("resize",this.updateSizes),(0,Ja.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Ja.default)().removeEventListener("resize",this.updateSizes),(0,Ja.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(i){var o=i;return i>=this.state.lastPosition&&(o=this.state.lastPosition),i<this.state.firstItem+this.state.visibleItems&&(o=this.state.firstItem),i<this.state.firstItem&&(o=i),o}},{key:"renderItems",value:function(){var i=this;return this.props.children.map(function(o,s){var a=Ur.default.ITEM(!1,s===i.state.selectedItem),l={key:s,ref:function(c){return i.setThumbsRef(c,s)},className:a,onClick:i.handleClickItem.bind(i,s,i.props.children[s]),onKeyDown:i.handleClickItem.bind(i,s,i.props.children[s]),"aria-label":"".concat(i.props.labels.item," ").concat(s+1),style:{width:i.props.thumbWidth}};return hn.default.createElement("li",Bd({},l,{role:"button",tabIndex:0}),o)})}},{key:"render",value:function(){var i=this;if(!this.props.children)return null;var o=hn.Children.count(this.props.children)>1,s=this.state.showArrows&&this.state.firstItem>0,a=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,l={},u=-this.state.firstItem*(this.state.itemSize||0),c=(0,My.default)(u,"px",this.props.axis),h=this.props.transitionTime+"ms";return l={WebkitTransform:c,MozTransform:c,MsTransform:c,OTransform:c,transform:c,msTransform:c,WebkitTransitionDuration:h,MozTransitionDuration:h,MsTransitionDuration:h,OTransitionDuration:h,transitionDuration:h,msTransitionDuration:h},hn.default.createElement("div",{className:Ur.default.CAROUSEL(!1)},hn.default.createElement("div",{className:Ur.default.WRAPPER(!1),ref:this.setItemsWrapperRef},hn.default.createElement("button",{type:"button",className:Ur.default.ARROW_PREV(!s),onClick:function(){return i.slideRight()},"aria-label":this.props.labels.leftArrow}),o?hn.default.createElement(d2.default,{tagName:"ul",className:Ur.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:l,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):hn.default.createElement("ul",{className:Ur.default.SLIDER(!1,this.state.swiping),ref:function(p){return i.setItemsListRef(p)},style:l},this.renderItems()),hn.default.createElement("button",{type:"button",className:Ur.default.ARROW_NEXT(!a),onClick:function(){return i.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(hn.Component);pa.default=Vp;vt(Vp,"displayName","Thumbs");vt(Vp,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var ec={};Object.defineProperty(ec,"__esModule",{value:!0});ec.default=void 0;var E2=function(){return document};ec.default=E2;var Wt={};Object.defineProperty(Wt,"__esModule",{value:!0});Wt.setPosition=Wt.getPosition=Wt.isKeyboardEvent=Wt.defaultStatusFormatter=Wt.noop=void 0;var x2=P,T2=S2(Co);function S2(t){return t&&t.__esModule?t:{default:t}}var I2=function(){};Wt.noop=I2;var R2=function(e,n){return"".concat(e," of ").concat(n)};Wt.defaultStatusFormatter=R2;var P2=function(e){return e?e.hasOwnProperty("key"):!1};Wt.isKeyboardEvent=P2;var C2=function(e,n){if(n.infiniteLoop&&++e,e===0)return 0;var r=x2.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var i=-e*n.centerSlidePercentage,o=r-1;return e&&(e!==o||n.infiniteLoop)?i+=(100-n.centerSlidePercentage)/2:e===o&&(i+=100-n.centerSlidePercentage),i}return-e*100};Wt.getPosition=C2;var A2=function(e,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(i){r[i]=(0,T2.default)(e,"%",n)}),r};Wt.setPosition=A2;var Cn={};Object.defineProperty(Cn,"__esModule",{value:!0});Cn.fadeAnimationHandler=Cn.slideStopSwipingHandler=Cn.slideSwipeAnimationHandler=Cn.slideAnimationHandler=void 0;var lw=P,k2=b2(Co),An=Wt;function b2(t){return t&&t.__esModule?t:{default:t}}function Vy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function qr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vy(Object(n),!0).forEach(function(r){D2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function D2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O2=function(e,n){var r={},i=n.selectedItem,o=i,s=lw.Children.count(e.children)-1,a=e.infiniteLoop&&(i<0||i>s);if(a)return o<0?e.centerMode&&e.centerSlidePercentage&&e.axis==="horizontal"?r.itemListStyle=(0,An.setPosition)(-(s+2)*e.centerSlidePercentage-(100-e.centerSlidePercentage)/2,e.axis):r.itemListStyle=(0,An.setPosition)(-(s+2)*100,e.axis):o>s&&(r.itemListStyle=(0,An.setPosition)(0,e.axis)),r;var l=(0,An.getPosition)(i,e),u=(0,k2.default)(l,"%",e.axis),c=e.transitionTime+"ms";return r.itemListStyle={WebkitTransform:u,msTransform:u,OTransform:u,transform:u},n.swiping||(r.itemListStyle=qr(qr({},r.itemListStyle),{},{WebkitTransitionDuration:c,MozTransitionDuration:c,OTransitionDuration:c,transitionDuration:c,msTransitionDuration:c})),r};Cn.slideAnimationHandler=O2;var N2=function(e,n,r,i){var o={},s=n.axis==="horizontal",a=lw.Children.count(n.children),l=0,u=(0,An.getPosition)(r.selectedItem,n),c=n.infiniteLoop?(0,An.getPosition)(a-1,n)-100:(0,An.getPosition)(a-1,n),h=s?e.x:e.y,f=h;u===l&&h>0&&(f=0),u===c&&h<0&&(f=0);var p=u+100/(r.itemSize/f),v=Math.abs(h)>n.swipeScrollTolerance;return n.infiniteLoop&&v&&(r.selectedItem===0&&p>-100?p-=a*100:r.selectedItem===a-1&&p<-a*100&&(p+=a*100)),(!n.preventMovementUntilSwipeScrollTolerance||v||r.swipeMovementStarted)&&(r.swipeMovementStarted||i({swipeMovementStarted:!0}),o.itemListStyle=(0,An.setPosition)(p,n.axis)),v&&!r.cancelClick&&i({cancelClick:!0}),o};Cn.slideSwipeAnimationHandler=N2;var M2=function(e,n){var r=(0,An.getPosition)(n.selectedItem,e),i=(0,An.setPosition)(r,e.axis);return{itemListStyle:i}};Cn.slideStopSwipingHandler=M2;var L2=function(e,n){var r=e.transitionTime+"ms",i="ease-in-out",o={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:i,msTransitionTimingFunction:i,MozTransitionTimingFunction:i,WebkitTransitionTimingFunction:i,OTransitionTimingFunction:i};return n.swiping||(o=qr(qr({},o),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:o,selectedStyle:qr(qr({},o),{},{opacity:1,position:"relative"}),prevStyle:qr({},o)}};Cn.fadeAnimationHandler=L2;Object.defineProperty(Xu,"__esModule",{value:!0});Xu.default=void 0;var ye=j2(P),V2=ga(Lp),Wn=ga(fa),$2=ga(pa),Za=ga(ec),el=ga(ma),Jo=Wt,lu=Cn;function ga(t){return t&&t.__esModule?t:{default:t}}function uw(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return uw=function(){return t},t}function j2(t){if(t&&t.__esModule)return t;if(t===null||gs(t)!=="object"&&typeof t!="function")return{default:t};var e=uw();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var o=r?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function gs(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gs=function(n){return typeof n}:gs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gs(t)}function Hd(){return Hd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hd.apply(this,arguments)}function $y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$y(Object(n),!0).forEach(function(r){Z(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$y(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function F2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U2(t,e,n){return e&&jy(t.prototype,e),n&&jy(t,n),t}function z2(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qd(t,e)}function qd(t,e){return qd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},qd(t,e)}function B2(t){var e=H2();return function(){var r=uu(t),i;if(e){var o=uu(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return W2(this,i)}}function W2(t,e){return e&&(gs(e)==="object"||typeof e=="function")?e:ee(t)}function ee(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function uu(t){return uu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},uu(t)}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $p=function(t){z2(n,t);var e=B2(n);function n(r){var i;F2(this,n),i=e.call(this,r),Z(ee(i),"thumbsRef",void 0),Z(ee(i),"carouselWrapperRef",void 0),Z(ee(i),"listRef",void 0),Z(ee(i),"itemsRef",void 0),Z(ee(i),"timer",void 0),Z(ee(i),"animationHandler",void 0),Z(ee(i),"setThumbsRef",function(s){i.thumbsRef=s}),Z(ee(i),"setCarouselWrapperRef",function(s){i.carouselWrapperRef=s}),Z(ee(i),"setListRef",function(s){i.listRef=s}),Z(ee(i),"setItemsRef",function(s,a){i.itemsRef||(i.itemsRef=[]),i.itemsRef[a]=s}),Z(ee(i),"autoPlay",function(){ye.Children.count(i.props.children)<=1||(i.clearAutoPlay(),i.props.autoPlay&&(i.timer=setTimeout(function(){i.increment()},i.props.interval)))}),Z(ee(i),"clearAutoPlay",function(){i.timer&&clearTimeout(i.timer)}),Z(ee(i),"resetAutoPlay",function(){i.clearAutoPlay(),i.autoPlay()}),Z(ee(i),"stopOnHover",function(){i.setState({isMouseEntered:!0},i.clearAutoPlay)}),Z(ee(i),"startOnLeave",function(){i.setState({isMouseEntered:!1},i.autoPlay)}),Z(ee(i),"isFocusWithinTheCarousel",function(){return i.carouselWrapperRef?!!((0,Za.default)().activeElement===i.carouselWrapperRef||i.carouselWrapperRef.contains((0,Za.default)().activeElement)):!1}),Z(ee(i),"navigateWithKeyboard",function(s){if(i.isFocusWithinTheCarousel()){var a=i.props.axis,l=a==="horizontal",u={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},c=l?u.ArrowRight:u.ArrowDown,h=l?u.ArrowLeft:u.ArrowUp;c===s.keyCode?i.increment():h===s.keyCode&&i.decrement()}}),Z(ee(i),"updateSizes",function(){if(!(!i.state.initialized||!i.itemsRef||i.itemsRef.length===0)){var s=i.props.axis==="horizontal",a=i.itemsRef[0];if(a){var l=s?a.clientWidth:a.clientHeight;i.setState({itemSize:l}),i.thumbsRef&&i.thumbsRef.updateSizes()}}}),Z(ee(i),"setMountState",function(){i.setState({hasMount:!0}),i.updateSizes()}),Z(ee(i),"handleClickItem",function(s,a){if(ye.Children.count(i.props.children)!==0){if(i.state.cancelClick){i.setState({cancelClick:!1});return}i.props.onClickItem(s,a),s!==i.state.selectedItem&&i.setState({selectedItem:s})}}),Z(ee(i),"handleOnChange",function(s,a){ye.Children.count(i.props.children)<=1||i.props.onChange(s,a)}),Z(ee(i),"handleClickThumb",function(s,a){i.props.onClickThumb(s,a),i.moveTo(s)}),Z(ee(i),"onSwipeStart",function(s){i.setState({swiping:!0}),i.props.onSwipeStart(s)}),Z(ee(i),"onSwipeEnd",function(s){i.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),i.props.onSwipeEnd(s),i.clearAutoPlay(),i.state.autoPlay&&i.autoPlay()}),Z(ee(i),"onSwipeMove",function(s,a){i.props.onSwipeMove(a);var l=i.props.swipeAnimationHandler(s,i.props,i.state,i.setState.bind(ee(i)));return i.setState(dn({},l)),!!Object.keys(l).length}),Z(ee(i),"decrement",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i.moveTo(i.state.selectedItem-(typeof s=="number"?s:1))}),Z(ee(i),"increment",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i.moveTo(i.state.selectedItem+(typeof s=="number"?s:1))}),Z(ee(i),"moveTo",function(s){if(typeof s=="number"){var a=ye.Children.count(i.props.children)-1;s<0&&(s=i.props.infiniteLoop?a:0),s>a&&(s=i.props.infiniteLoop?0:a),i.selectItem({selectedItem:s}),i.state.autoPlay&&i.state.isMouseEntered===!1&&i.resetAutoPlay()}}),Z(ee(i),"onClickNext",function(){i.increment(1)}),Z(ee(i),"onClickPrev",function(){i.decrement(1)}),Z(ee(i),"onSwipeForward",function(){i.increment(1),i.props.emulateTouch&&i.setState({cancelClick:!0})}),Z(ee(i),"onSwipeBackwards",function(){i.decrement(1),i.props.emulateTouch&&i.setState({cancelClick:!0})}),Z(ee(i),"changeItem",function(s){return function(a){(!(0,Jo.isKeyboardEvent)(a)||a.key==="Enter")&&i.moveTo(s)}}),Z(ee(i),"selectItem",function(s){i.setState(dn({previousItem:i.state.selectedItem},s),function(){i.setState(i.animationHandler(i.props,i.state))}),i.handleOnChange(s.selectedItem,ye.Children.toArray(i.props.children)[s.selectedItem])}),Z(ee(i),"getInitialImage",function(){var s=i.props.selectedItem,a=i.itemsRef&&i.itemsRef[s],l=a&&a.getElementsByTagName("img")||[];return l[0]}),Z(ee(i),"getVariableItemHeight",function(s){var a=i.itemsRef&&i.itemsRef[s];if(i.state.hasMount&&a&&a.children.length){var l=a.children[0].getElementsByTagName("img")||[];if(l.length>0){var u=l[0];if(!u.complete){var c=function p(){i.forceUpdate(),u.removeEventListener("load",p)};u.addEventListener("load",c)}}var h=l[0]||a.children[0],f=h.clientHeight;return f>0?f:null}return null});var o={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return i.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&lu.fadeAnimationHandler||lu.slideAnimationHandler,i.state=dn(dn({},o),i.animationHandler(r,o)),i}return U2(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(i,o){!i.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!i.autoFocus&&this.props.autoFocus&&this.forceFocus(),o.swiping&&!this.state.swiping&&this.setState(dn({},this.props.stopSwipingHandler(this.props,this.state))),(i.selectedItem!==this.props.selectedItem||i.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),i.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var i=this;this.bindEvents(),this.state.autoPlay&&ye.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var o=i.getInitialImage();o&&!o.complete?o.addEventListener("load",i.setMountState):i.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var i=this.carouselWrapperRef;this.props.stopOnHover&&i&&(i.addEventListener("mouseenter",this.stopOnHover),i.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var i=this.carouselWrapperRef;this.props.stopOnHover&&i&&(i.removeEventListener("mouseenter",this.stopOnHover),i.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,el.default)().addEventListener("resize",this.updateSizes),(0,el.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,Za.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,el.default)().removeEventListener("resize",this.updateSizes),(0,el.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var i=this.getInitialImage();i&&i.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,Za.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var i;(i=this.carouselWrapperRef)===null||i===void 0||i.focus()}},{key:"renderItems",value:function(i){var o=this;return this.props.children?ye.Children.map(this.props.children,function(s,a){var l=a===o.state.selectedItem,u=a===o.state.previousItem,c=l&&o.state.selectedStyle||u&&o.state.prevStyle||o.state.slideStyle||{};o.props.centerMode&&o.props.axis==="horizontal"&&(c=dn(dn({},c),{},{minWidth:o.props.centerSlidePercentage+"%"})),o.state.swiping&&o.state.swipeMovementStarted&&(c=dn(dn({},c),{},{pointerEvents:"none"}));var h={ref:function(p){return o.setItemsRef(p,a)},key:"itemKey"+a+(i?"clone":""),className:Wn.default.ITEM(!0,a===o.state.selectedItem,a===o.state.previousItem),onClick:o.handleClickItem.bind(o,a,s),style:c};return ye.default.createElement("li",h,o.props.renderItem(s,{isSelected:a===o.state.selectedItem,isPrevious:a===o.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var i=this,o=this.props,s=o.showIndicators,a=o.labels,l=o.renderIndicator,u=o.children;return s?ye.default.createElement("ul",{className:"control-dots"},ye.Children.map(u,function(c,h){return l&&l(i.changeItem(h),h===i.state.selectedItem,h,a.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?ye.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,ye.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||ye.Children.count(this.props.children)===0?null:ye.default.createElement($2.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var i=this;if(!this.props.children||ye.Children.count(this.props.children)===0)return null;var o=this.props.swipeable&&ye.Children.count(this.props.children)>1,s=this.props.axis==="horizontal",a=this.props.showArrows&&ye.Children.count(this.props.children)>1,l=a&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=a&&(this.state.selectedItem<ye.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,c=this.renderItems(!0),h=c.shift(),f=c.pop(),p={className:Wn.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},v={};if(s){if(p.onSwipeLeft=this.onSwipeForward,p.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var _=this.getVariableItemHeight(this.state.selectedItem);v.height=_||"auto"}}else p.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,p.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,p.style=dn(dn({},p.style),{},{height:this.state.itemSize}),v.height=this.state.itemSize;return ye.default.createElement("div",{"aria-label":this.props.ariaLabel,className:Wn.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},ye.default.createElement("div",{className:Wn.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,l,this.props.labels.leftArrow),ye.default.createElement("div",{className:Wn.default.WRAPPER(!0,this.props.axis),style:v},o?ye.default.createElement(V2.default,Hd({tagName:"ul",innerRef:this.setListRef},p,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&f,this.renderItems(),this.props.infiniteLoop&&h):ye.default.createElement("ul",{className:Wn.default.SLIDER(!0,this.state.swiping),ref:function(m){return i.setListRef(m)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&f,this.renderItems(),this.props.infiniteLoop&&h)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(ye.default.Component);Xu.default=$p;Z($p,"displayName","Carousel");Z($p,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:Jo.noop,onClickThumb:Jo.noop,onChange:Jo.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(e,n,r){return ye.default.createElement("button",{type:"button","aria-label":r,className:Wn.default.ARROW_PREV(!n),onClick:e})},renderArrowNext:function(e,n,r){return ye.default.createElement("button",{type:"button","aria-label":r,className:Wn.default.ARROW_NEXT(!n),onClick:e})},renderIndicator:function(e,n,r,i){return ye.default.createElement("li",{className:Wn.default.DOT(n),onClick:e,onKeyDown:e,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(i," ").concat(r+1)})},renderItem:function(e){return e},renderThumbs:function(e){var n=ye.Children.map(e,function(r){var i=r;if(r.type!=="img"&&(i=ye.Children.toArray(r.props.children).find(function(o){return o.type==="img"})),!!i)return i});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:Jo.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:lu.slideSwipeAnimationHandler,stopSwipingHandler:lu.slideStopSwipingHandler});var q2={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Carousel",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(t,"Thumbs",{enumerable:!0,get:function(){return r.default}});var e=i(Xu),n=q2,r=i(pa);function i(o){return o&&o.__esModule?o:{default:o}}})(Mp);function K2(){const t=ZA.useMediaQuery({maxWidth:767}),[e,n]=P.useState([]),r=t?"carouselImagesMobile":"carouselImages";return P.useEffect(()=>{(async()=>{const o=da(),s=ha(o,r);try{const a=await GA(s),l=await Promise.all(a.items.map(async u=>await ca(u)));n(l)}catch(a){console.error("Erro ao buscar imagens:",a)}})()},[r]),g.jsx("div",{children:g.jsx(Mp.Carousel,{showThumbs:!1,children:e.map((i,o)=>g.jsx("div",{children:g.jsx("img",{src:i,alt:`Imagem ${o}`})},o))})})}var Q2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,jp=jp||{},K=Q2||self;function tc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function G2(t){return Object.prototype.hasOwnProperty.call(t,Eh)&&t[Eh]||(t[Eh]=++Y2)}var Eh="closure_uid_"+(1e9*Math.random()>>>0),Y2=0;function X2(t,e,n){return t.call.apply(t.bind,arguments)}function J2(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=X2:xt=J2,xt.apply(null,arguments)}function tl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function Vr(){this.s=this.s,this.o=this.o}var Z2=0;Vr.prototype.s=!1;Vr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Z2!=0)&&G2(this)};Vr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Fy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(tc(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var ek=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",()=>{},e),K.removeEventListener("test",()=>{},e)}catch{}return t}();function Bs(t){return/^[\s\xa0]*$/.test(t)}function nc(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return nc().indexOf(t)!=-1}function Up(t){return Up[" "](t),t}Up[" "]=function(){};function tk(t,e){var n=Kk;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var nk=Rn("Opera"),po=Rn("Trident")||Rn("MSIE"),hw=Rn("Edge"),Kd=hw||po,dw=Rn("Gecko")&&!(nc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),rk=nc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function fw(){var t=K.document;return t?t.documentMode:void 0}var Qd;e:{var xh="",Th=function(){var t=nc();if(dw)return/rv:([^\);]+)(\)|;)/.exec(t);if(hw)return/Edge\/([\d\.]+)/.exec(t);if(po)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rk)return/WebKit\/(\S+)/.exec(t);if(nk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Th&&(xh=Th?Th[1]:""),po){var Sh=fw();if(Sh!=null&&Sh>parseFloat(xh)){Qd=String(Sh);break e}}Qd=xh}var Gd;if(K.document&&po){var Uy=fw();Gd=Uy||parseInt(Qd,10)||void 0}else Gd=void 0;var ik=Gd;function Ws(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dw){e:{try{Up(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ok[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ws.$.h.call(this)}}rt(Ws,Tt);var ok={2:"touch",3:"pen",4:"mouse"};Ws.prototype.h=function(){Ws.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var va="closure_listenable_"+(1e6*Math.random()|0),sk=0;function ak(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++sk,this.fa=this.ia=!1}function rc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function zp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function lk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function pw(t){const e={};for(const n in t)e[n]=t[n];return e}const zy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<zy.length;o++)n=zy[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ic(t){this.src=t,this.g={},this.h=0}ic.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Xd(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new ak(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};function Yd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=cw(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(rc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xd(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}var Bp="closure_lm_"+(1e6*Math.random()|0),Ih={};function gw(t,e,n,r,i){if(r&&r.once)return vw(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)gw(t,e[o],n,r,i);return null}return n=qp(n),t&&t[va]?t.O(e,n,ya(r)?!!r.capture:!!r,i):yw(t,e,n,!1,r,i)}function yw(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=ya(i)?!!i.capture:!!i,a=Hp(t);if(a||(t[Bp]=a=new ic(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=uk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ek||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ww(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uk(){function t(n){return e.call(t.src,t.listener,n)}const e=ck;return t}function vw(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)vw(t,e[o],n,r,i);return null}return n=qp(n),t&&t[va]?t.P(e,n,ya(r)?!!r.capture:!!r,i):yw(t,e,n,!0,r,i)}function _w(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)_w(t,e[o],n,r,i);else r=ya(r)?!!r.capture:!!r,n=qp(n),t&&t[va]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Xd(o,n,r,i),-1<n&&(rc(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xd(e,n,r,i)),(n=-1<t?e[t]:null)&&Wp(n))}function Wp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[va])Yd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ww(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hp(e))?(Yd(n,t),n.h==0&&(n.src=null,e[Bp]=null)):rc(t)}}}function ww(t){return t in Ih?Ih[t]:Ih[t]="on"+t}function ck(t,e){if(t.fa)t=!0;else{e=new Ws(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Wp(t),t=n.call(r,e)}return t}function Hp(t){return t=t[Bp],t instanceof ic?t:null}var Rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function qp(t){return typeof t=="function"?t:(t[Rh]||(t[Rh]=function(e){return t.handleEvent(e)}),t[Rh])}function nt(){Vr.call(this),this.i=new ic(this),this.S=this,this.J=null}rt(nt,Vr);nt.prototype[va]=!0;nt.prototype.removeEventListener=function(t,e,n,r){_w(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(r,t),mw(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=nl(s,r,!0,e)&&i}if(s=e.g=t,i=nl(s,r,!0,e)&&i,i=nl(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=nl(s,r,!1,e)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)rc(n[r]);delete t.g[e],t.h--}}this.J=null};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function nl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&Yd(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kp=K.JSON.stringify;class hk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function dk(){var t=Qp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fk{constructor(){this.h=this.g=null}add(e,n){const r=Ew.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ew=new hk(()=>new pk,t=>t.reset());class pk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function gk(t){K.setTimeout(()=>{throw t},0)}let Hs,qs=!1,Qp=new fk,xw=()=>{const t=K.Promise.resolve(void 0);Hs=()=>{t.then(yk)}};var yk=()=>{for(var t;t=dk();){try{t.h.call(t.g)}catch(n){gk(n)}var e=Ew;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qs=!1};function oc(t,e){nt.call(this),this.h=t||1,this.g=e||K,this.j=xt(this.qb,this),this.l=Date.now()}rt(oc,nt);N=oc.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(Gp(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){oc.$.N.call(this),Gp(this),delete this.g};function Yp(t,e,n){if(typeof t=="function")n&&(t=xt(t,n));else if(t&&typeof t.handleEvent=="function")t=xt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Tw(t){t.g=Yp(()=>{t.g=null,t.i&&(t.i=!1,Tw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vk extends Vr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tw(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ks(t){Vr.call(this),this.h=t,this.g={}}rt(Ks,Vr);var By=[];function Sw(t,e,n,r){Array.isArray(n)||(n&&(By[0]=n.toString()),n=By);for(var i=0;i<n.length;i++){var o=gw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Iw(t){zp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wp(e)},t),t.g={}}Ks.prototype.N=function(){Ks.$.N.call(this),Iw(this)};Ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sc(){this.g=!0}sc.prototype.Ea=function(){this.g=!1};function _k(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");s=2<=h.length&&h[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function wk(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function Wi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xk(t,n)+(r?" "+r:"")})}function Ek(t,e){t.info(function(){return"TIMEOUT: "+e})}sc.prototype.info=function(){};function xk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Kp(n)}catch{return e}}var Ei={},Wy=null;function ac(){return Wy=Wy||new nt}Ei.Ta="serverreachability";function Rw(t){Tt.call(this,Ei.Ta,t)}rt(Rw,Tt);function Qs(t){const e=ac();ct(e,new Rw(e))}Ei.STAT_EVENT="statevent";function Pw(t,e){Tt.call(this,Ei.STAT_EVENT,t),this.stat=e}rt(Pw,Tt);function kt(t){const e=ac();ct(e,new Pw(e,t))}Ei.Ua="timingevent";function Cw(t,e){Tt.call(this,Ei.Ua,t),this.size=e}rt(Cw,Tt);function _a(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var lc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Aw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xp(){}Xp.prototype.h=null;function Hy(t){return t.h||(t.h=t.i())}function kw(){}var wa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jp(){Tt.call(this,"d")}rt(Jp,Tt);function Zp(){Tt.call(this,"c")}rt(Zp,Tt);var Jd;function uc(){}rt(uc,Xp);uc.prototype.g=function(){return new XMLHttpRequest};uc.prototype.i=function(){return{}};Jd=new uc;function Ea(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ks(this),this.P=Tk,t=Kd?125:void 0,this.V=new oc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new bw}function bw(){this.i=null,this.g="",this.h=!1}var Tk=45e3,Zd={},cu={};N=Ea.prototype;N.setTimeout=function(t){this.P=t};function ef(t,e,n){t.L=1,t.v=hc(er(e)),t.s=n,t.S=!0,Dw(t,null)}function Dw(t,e){t.G=Date.now(),xa(t),t.A=er(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Fw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new bw,t.g=aE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new vk(xt(t.Pa,t,t.g),t.O)),Sw(t.U,t.g,"readystatechange",t.nb),e=t.I?pw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qs(),_k(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&kn(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Kd||this.g&&(this.h.h||this.g.ja()||Gy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Qs(3):Qs(2)),cc(this);var n=this.g.da();this.ca=n;t:if(Ow(this)){var r=Gy(this.g);t="";var i=r.length,o=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),ys(this);var s="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,wk(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bs(a)){var u=a;break t}}u=null}if(n=u)Wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tf(this,n);else{this.i=!1,this.o=3,kt(12),Xr(this),ys(this);break e}}this.S?(Nw(this,c,s),Kd&&this.i&&c==3&&(Sw(this.U,this.V,"tick",this.mb),this.V.start())):(Wi(this.j,this.m,s,null),tf(this,s)),c==4&&Xr(this),this.i&&!this.J&&(c==4?rE(this.l,this):(this.i=!1,xa(this)))}else Wk(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.o=3,kt(12)):(this.o=0,kt(13)),Xr(this),ys(this)}}}catch{}finally{}};function Ow(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Nw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=Sk(t,n),i==cu){e==4&&(t.o=4,kt(14),r=!1),Wi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Zd){t.o=4,kt(15),Wi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wi(t.j,t.m,i,null),tf(t,i);Ow(t)&&i!=cu&&i!=Zd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),om(e),e.M=!0,kt(11))):(Wi(t.j,t.m,n,"[Invalid Chunked Response]"),Xr(t),ys(t))}N.mb=function(){if(this.g){var t=kn(this.g),e=this.g.ja();this.C<e.length&&(cc(this),Nw(this,t,e),this.i&&t!=4&&xa(this))}};function Sk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?cu:(n=Number(e.substring(n,r)),isNaN(n)?Zd:(r+=1,r+n>e.length?cu:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,Xr(this)};function xa(t){t.Y=Date.now()+t.P,Mw(t,t.P)}function Mw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_a(xt(t.lb,t),e)}function cc(t){t.B&&(K.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ek(this.j,this.A),this.L!=2&&(Qs(),kt(17)),Xr(this),this.o=2,ys(this)):Mw(this,this.Y-t)};function ys(t){t.l.H==0||t.J||rE(t.l,t)}function Xr(t){cc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gp(t.V),Iw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function tf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||nf(n.i,t))){if(!t.K&&nf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)fu(n),pc(n);else break e;im(n),kt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=_a(xt(n.ib,n),6e3));if(1>=Bw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jr(n,11)}else if((t.K||n.g==t)&&fu(n),!Bs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=r.i;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(em(o,o.h),o.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Se(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=sE(r,r.J?r.pa:null,r.Y),s.K){Ww(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.B&&(cc(a),xa(a)),r.g=s}else tE(r);0<n.j.length&&mc(n)}else u[0]!="stop"&&u[0]!="close"||Jr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Jr(n,7):rm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Qs(4)}catch{}}function Ik(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(tc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Rk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(tc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Lw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(tc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Rk(t),r=Ik(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var Vw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function si(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof si){this.h=t.h,hu(this,t.j),this.s=t.s,this.g=t.g,du(this,t.m),this.l=t.l;var e=t.i,n=new Gs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qy(this,n),this.o=t.o}else t&&(e=String(t).match(Vw))?(this.h=!1,hu(this,e[1]||"",!0),this.s=Zo(e[2]||""),this.g=Zo(e[3]||"",!0),du(this,e[4]),this.l=Zo(e[5]||"",!0),qy(this,e[6]||"",!0),this.o=Zo(e[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(es(e,Ky,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(es(e,Ky,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(es(n,n.charAt(0)=="/"?kk:Ak,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",es(n,Dk)),t.join("")};function er(t){return new si(t)}function hu(t,e,n){t.j=n?Zo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function du(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qy(t,e,n){e instanceof Gs?(t.i=e,Ok(t.i,t.h)):(n||(e=es(e,bk)),t.i=new Gs(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function hc(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ck),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ck(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ky=/[#\/\?@]/g,Ak=/[#\?:]/g,kk=/[#\?]/g,bk=/[#\?@]/g,Dk=/#/g;function Gs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $r(t){t.g||(t.g=new Map,t.h=0,t.i&&Pk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Gs.prototype;N.add=function(t,e){$r(this),this.i=null,t=Ao(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $w(t,e){$r(t),e=Ao(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jw(t,e){return $r(t),e=Ao(t,e),t.g.has(e)}N.forEach=function(t,e){$r(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){$r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};N.Z=function(t){$r(this);let e=[];if(typeof t=="string")jw(this,t)&&(e=e.concat(this.g.get(Ao(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return $r(this),this.i=null,t=Ao(this,t),jw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Fw(t,e,n){$w(t,e),0<n.length&&(t.i=null,t.g.set(Ao(t,e),Fp(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function Ao(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ok(t,e){e&&!t.j&&($r(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($w(this,r),Fw(this,i,n))},t)),t.j=e}var Nk=class{constructor(t,e){this.g=t,this.map=e}};function Uw(t){this.l=t||Mk,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mk=10;function zw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Bw(t){return t.h?1:t.g?t.g.size:0}function nf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function em(t,e){t.g?t.g.add(e):t.h=e}function Ww(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Uw.prototype.cancel=function(){if(this.i=Hw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Fp(t.i)}var Lk=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function Vk(){this.g=new Lk}function $k(t,e,n){const r=n||"";try{Lw(t,function(i,o){let s=i;ya(i)&&(s=Kp(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function jk(t,e){const n=new sc;if(K.Image){const r=new Image;r.onload=tl(rl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=tl(rl,n,r,"TestLoadImage: error",!1,e),r.onabort=tl(rl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=tl(rl,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function rl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ta(t){this.l=t.ec||null,this.j=t.ob||!1}rt(Ta,Xp);Ta.prototype.g=function(){return new dc(this.l,this.j)};Ta.prototype.i=function(t){return function(){return t}}({});function dc(t,e){nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(dc,nt);var tm=0;N=dc.prototype;N.open=function(t,e){if(this.readyState!=tm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ys(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sa(this)),this.readyState=tm};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sa(this):Ys(this),this.readyState==3&&qw(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Sa(this))};N.Ya=function(t){this.g&&(this.response=t,Sa(this))};N.ka=function(){this.g&&Sa(this)};function Sa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ys(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ys(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Fk=K.JSON.parse;function Le(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Kw,this.L=this.M=!1}rt(Le,nt);var Kw="",Uk=/^https?$/i,zk=["POST","PUT"];N=Le.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jd.g(),this.C=this.u?Hy(this.u):Hy(Jd),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){Qy(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=cw(zk,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yw(this),0<this.B&&((this.L=Bk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=Yp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Qy(this,o)}};function Bk(t){return po&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof jp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function Qy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qw(t),fc(t)}function Qw(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),fc(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fc(this,!0)),Le.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Gw(this):this.kb())};N.kb=function(){Gw(this)};function Gw(t){if(t.h&&typeof jp<"u"&&(!t.C[1]||kn(t)!=4||t.da()!=2)){if(t.v&&kn(t)==4)Yp(t.La,0,t);else if(ct(t,"readystatechange"),kn(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=s===0){var i=String(t.I).match(Vw)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),r=!Uk.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var o=2<kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Qw(t)}}finally{fc(t)}}}}function fc(t,e){if(t.g){Yw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function kn(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Fk(e)}};function Gy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Kw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Wk(t){const e={};t=(t.g&&2<=kn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Bs(t[r]))continue;var n=mk(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}lk(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xw(t){let e="";return zp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function nm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Wo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Jw(t){this.Ga=0,this.j=[],this.l=new sc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wo("baseRetryDelayMs",5e3,t),this.hb=Wo("retryDelaySeedMs",1e4,t),this.eb=Wo("forwardChannelMaxRetries",2,t),this.xa=Wo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Uw(t&&t.concurrentRequestLimit),this.Ja=new Vk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Jw.prototype;N.ra=8;N.H=1;function rm(t){if(Zw(t),t.H==3){var e=t.W++,n=er(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),Ia(t,n),e=new Ea(t,t.l,e),e.L=2,e.v=hc(er(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=aE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xa(e)}oE(t)}function pc(t){t.g&&(om(t),t.g.cancel(),t.g=null)}function Zw(t){pc(t),t.u&&(K.clearTimeout(t.u),t.u=null),fu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function mc(t){if(!zw(t.i)&&!t.m){t.m=!0;var e=t.Na;Hs||xw(),qs||(Hs(),qs=!0),Qp.add(e,t),t.C=0}}function Hk(t,e){return Bw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_a(xt(t.Na,t,e),iE(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ea(this,this.l,t);let o=this.s;if(this.U&&(o?(o=pw(o),mw(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=eE(this,i,e),n=er(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Ia(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(Xw(o)))+"&"+e:this.o&&nm(n,this.o,o)),em(this.i,i),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),i.aa=!0,ef(i,n,null)):ef(i,n,e),this.H=2}}else this.H==3&&(t?Yy(this,t):this.j.length==0||zw(this.i)||Yy(this))};function Yy(t,e){var n;e?n=e.m:n=t.W++;const r=er(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),Ia(t,r),t.o&&t.s&&nm(r,t.o,t.s),n=new Ea(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=eE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),em(t.i,n),ef(n,r,e)}function Ia(t,e){t.na&&zp(t.na,function(n,r){Se(e,r,n)}),t.h&&Lw({},function(n,r){Se(e,r,n)})}function eE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?xt(t.h.Va,t.h,t):null;e:{var i=t.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{$k(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function tE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Hs||xw(),qs||(Hs(),qs=!0),Qp.add(e,t),t.A=0}}function im(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_a(xt(t.Ma,t),iE(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,nE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=_a(xt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,kt(10),pc(this),nE(this))};function om(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function nE(t){t.g=new Ea(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=er(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),Ia(t,e),t.o&&t.s&&nm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=hc(er(e)),n.s=null,n.S=!0,Dw(n,t)}N.ib=function(){this.v!=null&&(this.v=null,pc(this),im(this),kt(19))};function fu(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function rE(t,e){var n=null;if(t.g==e){fu(t),om(t),t.g=null;var r=2}else if(nf(t.i,e))n=e.F,Ww(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=ac(),ct(r,new Cw(r,n)),mc(t)}else tE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Hk(t,e)||r==2&&im(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Jr(t,5);break;case 4:Jr(t,10);break;case 3:Jr(t,6);break;default:Jr(t,2)}}}function iE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Jr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=xt(t.pb,t);n||(n=new si("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||hu(n,"https"),hc(n)),jk(n.toString(),r)}else kt(2);t.H=0,t.h&&t.h.za(e),oE(t),Zw(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),kt(2)):(this.l.info("Failed to ping google.com"),kt(1))};function oE(t){if(t.H=0,t.ma=[],t.h){const e=Hw(t.i);(e.length!=0||t.j.length!=0)&&(Fy(t.ma,e),Fy(t.ma,t.j),t.i.i.length=0,Fp(t.j),t.j.length=0),t.h.ya()}}function sE(t,e,n){var r=n instanceof si?er(n):new si(n);if(r.g!="")e&&(r.g=e+"."+r.g),du(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new si(null);r&&hu(o,r),e&&(o.g=e),i&&du(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),Ia(t,r),r}function aE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new Ta({ob:!0})):new Le(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function lE(){}N=lE.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function pu(){if(po&&!(10<=Number(ik)))throw Error("Environmental error: no available transport.")}pu.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){nt.call(this),this.g=new Jw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ko(this)}rt(Yt,nt);Yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=sE(t,null,t.Y),mc(t)};Yt.prototype.close=function(){rm(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kp(t),t=n);e.j.push(new Nk(e.fb++,t)),e.H==3&&mc(e)};Yt.prototype.N=function(){this.g.h=null,delete this.j,rm(this.g),delete this.g,Yt.$.N.call(this)};function uE(t){Jp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(uE,Jp);function cE(){Zp.call(this),this.status=1}rt(cE,Zp);function ko(t){this.g=t}rt(ko,lE);ko.prototype.Ba=function(){ct(this.g,"a")};ko.prototype.Aa=function(t){ct(this.g,new uE(t))};ko.prototype.za=function(t){ct(this.g,new cE)};ko.prototype.ya=function(){ct(this.g,"b")};function qk(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rt(En,qk);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ph(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(i==0)for(;o<=n;)Ph(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){Ph(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){Ph(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function _e(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=t[i]|0;r&&o==e||(n[i]=o,r=!1)}this.g=n}var Kk={};function sm(t){return-128<=t&&128>t?tk(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function bn(t){if(isNaN(t)||!isFinite(t))return Xi;if(0>t)return at(bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=rf;return new _e(e,0)}function hE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return at(hE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bn(Math.pow(e,8)),r=Xi,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=bn(Math.pow(e,o)),r=r.R(o).add(bn(s))):(r=r.R(n),r=r.add(bn(s)))}return r}var rf=4294967296,Xi=sm(0),of=sm(1),Xy=sm(16777216);N=_e.prototype;N.ea=function(){if(nn(this))return-at(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:rf+r)*e,e*=rf}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Kn(this))return"0";if(nn(this))return"-"+at(this).toString(t);for(var e=bn(Math.pow(t,6)),n=this,r="";;){var i=gu(n,e).g;n=mu(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Kn(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function nn(t){return t.h==-1}N.X=function(t){return t=mu(this,t),nn(t)?-1:Kn(t)?0:1};function at(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _e(n,~t.h).add(of)}N.abs=function(){return nn(this)?at(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(this.D(i)&65535)+(t.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function mu(t,e){return t.add(at(e))}N.R=function(t){if(Kn(this)||Kn(t))return Xi;if(nn(this))return nn(t)?at(this).R(at(t)):at(at(this).R(t));if(nn(t))return at(this.R(at(t)));if(0>this.X(Xy)&&0>t.X(Xy))return bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=s*l,il(n,2*r+2*i),n[2*r+2*i+1]+=o*l,il(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,il(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,il(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _e(n,0)};function il(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ho(t,e){this.g=t,this.h=e}function gu(t,e){if(Kn(e))throw Error("division by zero");if(Kn(t))return new Ho(Xi,Xi);if(nn(t))return e=gu(at(t),e),new Ho(at(e.g),at(e.h));if(nn(e))return e=gu(t,at(e)),new Ho(at(e.g),e.h);if(30<t.g.length){if(nn(t)||nn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=of,r=e;0>=r.X(t);)n=Jy(n),r=Jy(r);var i=Pi(n,1),o=Pi(r,1);for(r=Pi(r,2),n=Pi(n,2);!Kn(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=Pi(r,1),n=Pi(n,1)}return e=mu(t,i.R(e)),new Ho(i,e)}for(i=Xi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=bn(n),s=o.R(e);nn(s)||0<s.X(t);)n-=r,o=bn(n),s=o.R(e);Kn(o)&&(o=of),i=i.add(o),t=mu(t,s)}return new Ho(i,t)}N.gb=function(t){return gu(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _e(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _e(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _e(n,this.h^t.h)};function Jy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _e(n,t.h)}function Pi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new _e(i,t.h)}pu.prototype.createWebChannel=pu.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;lc.NO_ERROR=0;lc.TIMEOUT=8;lc.HTTP_ERROR=6;Aw.COMPLETE="complete";kw.EventType=wa;wa.OPEN="a";wa.CLOSE="b";wa.ERROR="c";wa.MESSAGE="d";nt.prototype.listen=nt.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=bn;_e.fromString=hE;var Qk=function(){return new pu},Gk=function(){return ac()},Ch=lc,Yk=Aw,Xk=Ei,Zy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Jk=Ta,ol=kw,Zk=Le,eb=En,Ji=_e;const ev="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new V1("@firebase/firestore");function qo(){return mi.logLevel}function j(t,...e){if(mi.logLevel<=le.DEBUG){const n=e.map(am);mi.debug(`Firestore (${bo}): ${t}`,...n)}}function tr(t,...e){if(mi.logLevel<=le.ERROR){const n=e.map(am);mi.error(`Firestore (${bo}): ${t}`,...n)}}function mo(t,...e){if(mi.logLevel<=le.WARN){const n=e.map(am);mi.warn(`Firestore (${bo}): ${t}`,...n)}}function am(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function Re(t,e){t||q()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends wi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class nb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rb{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gn,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gn)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new dE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new _t(e)}}class ib{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ob{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ib(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ab{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,j("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new sb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function go(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ye(0,0))}static max(){return new G(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Xs{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const ub=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Xs{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return ub.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new F(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new F(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(Ae.fromString(e))}static fromName(e){return new U(Ae.fromString(e).popFirst(5))}static empty(){return new U(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new Ae(e.slice()))}}function cb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new kr(i,U.empty(),e)}function hb(t){return new kr(t.readTime,t.key,-1)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(G.min(),U.empty(),-1)}static max(){return new kr(G.max(),U.empty(),-1)}}function db(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==fb)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(e[u]).next(c=>{s[u]=c,++a,a===o&&r(s)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Pa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}lm._e=-1;function gc(t){return t==null}function yu(t){return t===0&&1/t==-1/0}function mb(t){return typeof t=="number"&&Number.isInteger(t)&&!yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new st(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,i,o){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nv(this.data.getIterator())}getIteratorFrom(e){return new nv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class nv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new ht(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mE("Invalid base64 string: "+o):o}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(Re(!!t),typeof t=="string"){let e=0;const n=gb.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cm(t){const e=t.mapValue.fields.__previous_value__;return um(e)?cm(e):e}function Js(t){const e=br(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,r,i,o,s,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Zs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?um(t)?4:vb(t)?9007199254740991:10:q()}function Ln(t,e){if(t===e)return!0;const n=yi(t);if(n!==yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Js(t).isEqual(Js(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=br(i.timestampValue),a=br(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return gi(i.bytesValue).isEqual(gi(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Be(i.geoPointValue.latitude)===Be(o.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Be(i.integerValue)===Be(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Be(i.doubleValue),a=Be(o.doubleValue);return s===a?yu(s)===yu(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return go(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(tv(s)!==tv(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Ln(s[l],a[l])))return!1;return!0}(t,e);default:return q()}}function ea(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function yo(t,e){if(t===e)return 0;const n=yi(t),r=yi(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Be(o.integerValue||o.doubleValue),l=Be(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return rv(t.timestampValue,e.timestampValue);case 4:return rv(Js(t),Js(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(o,s){const a=gi(o),l=gi(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=fe(a[u],l[u]);if(c!==0)return c}return fe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=fe(Be(o.latitude),Be(s.latitude));return a!==0?a:fe(Be(o.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=yo(a[u],l[u]);if(c)return c}return fe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===al.mapValue&&s===al.mapValue)return 0;if(o===al.mapValue)return 1;if(s===al.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),u=s.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=fe(l[h],c[h]);if(f!==0)return f;const p=yo(a[l[h]],u[c[h]]);if(p!==0)return p}return fe(l.length,c.length)}(t.mapValue,e.mapValue);default:throw q()}}function rv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=br(t),r=br(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function vo(t){return sf(t)}function sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return U.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=sf(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${sf(n.fields[s])}`;return i+"}"}(t.mapValue):q()}function af(t){return!!t&&"integerValue"in t}function hm(t){return!!t&&"arrayValue"in t}function iv(t){return!!t&&"nullValue"in t}function ov(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rl(t){return!!t&&"mapValue"in t}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=lt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=vs(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Mt(vs(this.value))}}function gE(t){const e=[];return xi(t.fields,(n,r)=>{const i=new lt([n]);if(Rl(r)){const o=gE(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,G.min(),G.min(),G.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,G.min(),G.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,G.min(),G.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.position=e,this.inclusive=n}}function sv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=U.comparator(U.fromName(s.referenceValue),n.key):r=yo(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function av(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n="asc"){this.field=e,this.dir=n}}function _b(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{}class Qe extends yE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Eb(e,n,r):n==="array-contains"?new Sb(e,r):n==="in"?new Ib(e,r):n==="not-in"?new Rb(e,r):n==="array-contains-any"?new Pb(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xb(e,r):new Tb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yo(n,this.value)):n!==null&&yi(this.value)===yi(n)&&this.matchesComparison(yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends yE{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Vn(e,n)}matches(e){return vE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vE(t){return t.op==="and"}function _E(t){return wb(t)&&vE(t)}function wb(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function lf(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+vo(t.value);if(_E(t))return t.filters.map(e=>lf(e)).join(",");{const e=t.filters.map(n=>lf(n)).join(",");return`${t.op}(${e})`}}function wE(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&Ln(r.value,i.value)}(t,e):t instanceof Vn?function(r,i){return i instanceof Vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&wE(s,i.filters[a]),!0):!1}(t,e):void q()}function EE(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(EE).join(" ,")+"}"}(t):"Filter"}class Eb extends Qe{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class xb extends Qe{constructor(e,n){super(e,"in",n),this.keys=xE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tb extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=xE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class Sb extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hm(n)&&ea(n.arrayValue,this.value)}}class Ib extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ea(this.value.arrayValue,n)}}class Rb extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ea(this.value.arrayValue,n)}}class Pb extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function lv(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Cb(t,e,n,r,i,o,s)}function dm(t){const e=Y(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),e.ce=n}return e.ce}function fm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_b(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!av(t.startAt,e.startAt)&&av(t.endAt,e.endAt)}function uf(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Ab(t,e,n,r,i,o,s,a){return new yc(t,e,n,r,i,o,s,a)}function pm(t){return new yc(t)}function uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kb(t){return t.collectionGroup!==null}function _s(t){const e=Y(t);if(e.le===null){e.le=[];const n=new Set;for(const o of e.explicitOrderBy)e.le.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new ht(lt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.le.push(new _u(o,r))}),n.has(lt.keyField().canonicalString())||e.le.push(new _u(lt.keyField(),r))}return e.le}function Nn(t){const e=Y(t);return e.he||(e.he=bb(e,_s(t))),e.he}function bb(t,e){if(t.limitType==="F")return lv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new _u(i.field,o)});const n=t.endAt?new vu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vu(t.startAt.position,t.startAt.inclusive):null;return lv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cf(t,e,n){return new yc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return fm(Nn(t),Nn(e))&&t.limitType===e.limitType}function TE(t){return`${dm(Nn(t))}|lt:${t.limitType}`}function Ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>EE(i)).join(", ")}]`),gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vo(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of _s(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const u=sv(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,_s(r),i)||r.endAt&&!function(s,a,l){const u=sv(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,_s(r),i))}(t,e)}function Db(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function SE(t){return(e,n)=>{let r=!1;for(const i of _s(t)){const o=Ob(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ob(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),u=a.data.field(o);return l!==null&&u!==null?yo(l,u):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return pE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new Oe(U.comparator);function nr(){return Nb}const IE=new Oe(U.comparator);function ts(...t){let e=IE;for(const n of t)e=e.insert(n.key,n);return e}function RE(t){let e=IE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return ws()}function PE(){return ws()}function ws(){return new Do(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mb=new Oe(U.comparator),Lb=new ht(U.comparator);function ie(...t){let e=Lb;for(const n of t)e=e.add(n);return e}const Vb=new ht(fe);function $b(){return Vb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(e)?"-0":e}}function AE(t){return{integerValue:""+t}}function jb(t,e){return mb(e)?AE(e):CE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this._=void 0}}function Fb(t,e,n){return t instanceof wu?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&um(o)&&(o=cm(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof ta?bE(t,e):t instanceof na?DE(t,e):function(i,o){const s=kE(i,o),a=cv(s)+cv(i.Ie);return af(s)&&af(i.Ie)?AE(a):CE(i.serializer,a)}(t,e)}function Ub(t,e,n){return t instanceof ta?bE(t,e):t instanceof na?DE(t,e):n}function kE(t,e){return t instanceof Eu?function(r){return af(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class wu extends wc{}class ta extends wc{constructor(e){super(),this.elements=e}}function bE(t,e){const n=OE(e);for(const r of t.elements)n.some(i=>Ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class na extends wc{constructor(e){super(),this.elements=e}}function DE(t,e){let n=OE(e);for(const r of t.elements)n=n.filter(i=>!Ln(i,r));return{arrayValue:{values:n}}}class Eu extends wc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function cv(t){return Be(t.integerValue||t.doubleValue)}function OE(t){return hm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function zb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ta&&i instanceof ta||r instanceof na&&i instanceof na?go(r.elements,i.elements,Ln):r instanceof Eu&&i instanceof Eu?Ln(r.Ie,i.Ie):r instanceof wu&&i instanceof wu}(t.transform,e.transform)}class Bb{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ec{}function NE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mm(t.key,_n.none()):new Ca(t.key,t.data,_n.none());{const n=t.data,r=Mt.empty();let i=new ht(lt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new jr(t.key,r,new qt(i.toArray()),_n.none())}}function Wb(t,e,n){t instanceof Ca?function(i,o,s){const a=i.value.clone(),l=dv(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(i,o,s){if(!Pl(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=dv(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(ME(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Es(t,e,n,r){return t instanceof Ca?function(o,s,a,l){if(!Pl(o.precondition,s))return a;const u=o.value.clone(),c=fv(o.fieldTransforms,l,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(o,s,a,l){if(!Pl(o.precondition,s))return a;const u=fv(o.fieldTransforms,l,s),c=s.data;return c.setAll(ME(o)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(o,s,a){return Pl(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function Hb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=kE(r.transform,i||null);o!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,o))}return n||null}function hv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&go(r,i,(o,s)=>zb(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ca extends Ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jr extends Ec{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ME(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dv(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Ub(s,a,n[i]))}return r}function fv(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Fb(o,s,e))}return r}class mm extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qb extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Wb(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Es(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Es(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=PE();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=NE(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(n,r)=>hv(n,r))&&go(this.baseMutations,e.baseMutations,(n,r)=>hv(n,r))}}class gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return Mb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new gm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ae;function Yb(t){switch(t){default:return q();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function LE(t){if(t===void 0)return tr("GRPC error has no .code"),R.UNKNOWN;switch(t){case ze.OK:return R.OK;case ze.CANCELLED:return R.CANCELLED;case ze.UNKNOWN:return R.UNKNOWN;case ze.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ze.INTERNAL:return R.INTERNAL;case ze.UNAVAILABLE:return R.UNAVAILABLE;case ze.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ze.NOT_FOUND:return R.NOT_FOUND;case ze.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ze.ABORTED:return R.ABORTED;case ze.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ze.DATA_LOSS:return R.DATA_LOSS;default:return q()}}(ae=ze||(ze={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Ji([4294967295,4294967295],0);function pv(t){const e=Xb().encode(t),n=new eb;return n.update(e),new Uint8Array(n.digest())}function mv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ji([n,r],0),new Ji([i,o],0)]}class ym{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ns(`Invalid padding: ${n}`);if(r<0)throw new ns(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ns(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ns(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ji.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ji.fromNumber(r)));return i.compare(Jb)===1&&(i=new Ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=pv(e),[r,i]=mv(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);if(!this.Ae(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new ym(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Te===0)return;const n=pv(e),[r,i]=mv(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);this.Re(s)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xc(G.min(),i,new Oe(fe),nr(),ie())}}class Aa{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Aa(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class VE{constructor(e,n){this.targetId=e,this.fe=n}}class $E{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gv{constructor(){this.ge=0,this.pe=vv(),this.ye=It.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ie(),n=ie(),r=ie();return this.pe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Aa(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=vv()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Zb{constructor(e){this.Le=e,this.ke=new Map,this.qe=nr(),this.Qe=yv(),this.Ke=new Oe(fe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const o=i.target;if(uf(o))if(r===0){const s=new U(o.path);this.We(n,s,Et.newNoDocument(s,G.min()))}else Re(r===1);else{const s=this.Ze(n);if(s!==r){const a=this.Xe(e),l=a?this.et(a,e,s):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=gi(r).toUint8Array()}catch(l){if(l instanceof mE)return mo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ym(s,i,o)}catch(l){return mo(l instanceof ns?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.nt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.We(n,o,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((o,s)=>{const a=this.Ye(s);if(a){if(o.current&&uf(a.target)){const l=new U(a.target.path);this.qe.get(l)!==null||this.st(s,l)||this.We(s,l,Et.newNoDocument(l,e))}o.De&&(n.set(s,o.ve()),o.Fe())}});let r=ie();this.Qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.qe.forEach((o,s)=>s.setReadTime(e));const i=new xc(e,n,this.Ke,this.qe,r);return this.qe=nr(),this.Qe=yv(),this.Ke=new Oe(fe),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new gv,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ht(fe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new gv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yv(){return new Oe(U.comparator)}function vv(){return new Oe(U.comparator)}const eD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nD=(()=>({and:"AND",or:"OR"}))();class rD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hf(t,e){return t.useProto3Json||gc(e)?e:{value:e}}function xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iD(t,e){return xu(t,e.toTimestamp())}function Mn(t){return Re(!!t),G.fromTimestamp(function(n){const r=br(n);return new Ye(r.seconds,r.nanos)}(t))}function vm(t,e){return function(r){return new Ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function FE(t){const e=Ae.fromString(t);return Re(WE(e)),e}function df(t,e){return vm(t.databaseId,e.path)}function Ah(t,e){const n=FE(e);if(n.get(1)!==t.databaseId.projectId)throw new F(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(UE(n))}function ff(t,e){return vm(t.databaseId,e)}function oD(t){const e=FE(t);return e.length===4?Ae.emptyPath():UE(e)}function pf(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function UE(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _v(t,e,n){return{name:df(t,e),fields:n.value.mapValue.fields}}function sD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,c){return u.useProto3Json?(Re(c===void 0||typeof c=="string"),It.fromBase64String(c||"")):(Re(c===void 0||c instanceof Uint8Array),It.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(u){const c=u.code===void 0?R.UNKNOWN:LE(u.code);return new F(c,u.message||"")}(s);n=new $E(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ah(t,r.document.name),o=Mn(r.document.updateTime),s=r.document.createTime?Mn(r.document.createTime):G.min(),a=new Mt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Cl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ah(t,r.document),o=r.readTime?Mn(r.readTime):G.min(),s=Et.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Cl([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ah(t,r.document),o=r.removedTargetIds||[];n=new Cl([],o,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new Gb(i,o),a=r.targetId;n=new VE(a,s)}}return n}function aD(t,e){let n;if(e instanceof Ca)n={update:_v(t,e.key,e.value)};else if(e instanceof mm)n={delete:df(t,e.key)};else if(e instanceof jr)n={update:_v(t,e.key,e.data),updateMask:gD(e.fieldMask)};else{if(!(e instanceof qb))return q();n={verify:df(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof wu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ta)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof na)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Eu)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:iD(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:q()}(t,e.precondition)),n}function lD(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Mn(i.updateTime):Mn(o);return s.isEqual(G.min())&&(s=Mn(o)),new Bb(s,i.transformResults||[])}(n,e))):[]}function uD(t,e){return{documents:[ff(t,e.path)]}}function cD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ff(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ff(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return BE(Vn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Ai(h.field),direction:fD(h.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=hf(t,e.limit);return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function hD(t){let e=oD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let o=[];n.where&&(o=function(h){const f=zE(h);return f instanceof Vn&&_E(f)?f.getFilters():[f]}(n.where));let s=[];n.orderBy&&(s=function(h){return h.map(f=>function(v){return new _u(ki(v.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,gc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new vu(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new vu(p,f)}(n.endAt)),Ab(e,i,s,o,a,"F",l,u)}function dD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ki(n.unaryFilter.field);return Qe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ki(n.unaryFilter.field);return Qe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>zE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function fD(t){return eD[t]}function pD(t){return tD[t]}function mD(t){return nD[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function ki(t){return lt.fromServerFormat(t.fieldPath)}function BE(t){return t instanceof Qe?function(n){if(n.op==="=="){if(ov(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(iv(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ov(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(iv(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:pD(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(i=>BE(i));return r.length===1?r[0]:{compositeFilter:{op:mD(n.op),filters:r}}}(t):q()}function gD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,i,o=G.min(),s=G.min(),a=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.ut=e}}function vD(t){const e=hD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.on=new wD}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(kr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class wD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ht(Ae.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new _o(0)}static Nn(){return new _o(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.changes=new Do(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Es(r.mutation,i,qt.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ts();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=nr();const s=ws(),a=function(){return ws()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof jr)?o=o.insert(u.key,u):c!==void 0?(s.set(u.key,c.mutation.getFieldMask()),Es(c.mutation,u,c.mutation.getFieldMask(),Ye.now())):s.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((u,c)=>s.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new xD(c,(h=s.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ws();let i=new Oe((s,a)=>s-a),o=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||qt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=PE();c.forEach(f=>{if(!o.has(f)){const p=NE(n.get(f),r.get(f));p!==null&&h.set(f,p),o=o.add(f)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return U.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):C.resolve(Zr());let a=-1,l=o;return s.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),o.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,l,u,ie())).next(c=>({batchId:a,changes:RE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let i=ts();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ts();return this.indexManager.getCollectionParents(e,o).next(a=>C.forEach(a,l=>{const u=function(h,f){return new yc(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,f)=>{s=s.insert(h,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,Et.newInvalidDocument(c)))});let a=ts();return s.forEach((l,u)=>{const c=o.get(l);c!==void 0&&Es(c.mutation,u,qt.empty(),Ye.now()),_c(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mn(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:vD(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.overlays=new Oe(U.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return C.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.lt(e,n,o)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.lr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=Zr(),o=n.length+1,s=new U(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Oe((u,c)=>u-c);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=o.get(u.largestBatchId);c===null&&(c=Zr(),o=o.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Zr(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new Qb(n,r));let o=this.lr.get(n);o===void 0&&(o=ie(),this.lr.set(n,o)),this.lr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.hr=new ht(Je.Pr),this.Ir=new ht(Je.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Je(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new U(new Ae([])),r=new Je(n,e),i=new Je(n,e+1),o=[];return this.Ir.forEachInRange([r,i],s=>{this.dr(s),o.push(s.key)}),o}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new U(new Ae([])),r=new Je(n,e),i=new Je(n,e+1);let o=ie();return this.Ir.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Je(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return U.comparator(e.key,n.key)||fe(e.gr,n.gr)}static Tr(e,n){return fe(e.gr,n.gr)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ht(Je.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Kb(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.yr=this.yr.add(new Je(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(s)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),o=[];return this.yr.forEachInRange([r,i],s=>{const a=this.wr(s.gr);o.push(a)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(fe);return n.forEach(i=>{const o=new Je(i,0),s=new Je(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([o,s],a=>{r=r.add(a.gr)})}),C.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const s=new Je(new U(o),0);let a=new ht(fe);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},s),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return C.forEach(n.mutations,i=>{const o=new Je(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Je(n,0),i=this.yr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.Cr=e,this.docs=function(){return new Oe(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=nr();const s=n.path,a=new U(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||db(hb(c),r)<=0||(i.has(c.key)||_c(n,c))&&(o=o.insert(c.key,c.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,n,r,i){q()}vr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CD(this)}getSize(e){return C.resolve(this.size)}}class CD extends ED{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.persistence=e,this.Fr=new Do(n=>dm(n),fm),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Mr=0,this.Or=new _m,this.targetCount=0,this.Nr=_o.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new _o(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),C.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n){this.Br={},this.overlays={},this.Lr=new lm(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new AD(this),this.indexManager=new _D,this.remoteDocumentCache=function(i){return new PD(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new yD(n),this.Kr=new SD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ID,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new RD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new bD(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(o=>this.referenceDelegate.Ur(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Wr(e,n){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class bD extends pb{constructor(e){super(),this.currentSequenceNumber=e}}class wm{constructor(e){this.persistence=e,this.Gr=new _m,this.zr=null}static jr(e){return new wm(e)}get Hr(){if(this.zr)return this.zr;throw q()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Hr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,r=>{const i=U.fromPath(r);return this.Jr(e,i).next(o=>{o||n.removeEntry(i,G.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=ie(),i=ie();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Em(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.zi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.ji(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new DD;return this.Hi(e,n,s).next(a=>{if(o.result=a,this.$i)return this.Ji(e,n,s,a.size)})}).next(()=>o.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(qo()<=le.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(qo()<=le.DEBUG&&j("QueryEngine","Query:",Ci(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(qo()<=le.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):C.resolve())}zi(e,n){if(uv(n))return C.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cf(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ie(...o);return this.Gi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,s,l.readTime)?this.zi(e,cf(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return uv(n)||i.isEqual(G.min())?C.resolve(null):this.Gi.getDocuments(e,r).next(o=>{const s=this.Yi(n,o);return this.Zi(n,s,r,i)?C.resolve(null):(qo()<=le.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ci(n)),this.Xi(e,s,n,cb(i,-1)).next(a=>a))})}Yi(e,n){let r=new ht(SE(e));return n.forEach((i,o)=>{_c(e,o)&&(r=r.add(o))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Hi(e,n,r){return qo()<=le.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Ci(n)),this.Gi.getDocumentsMatchingQuery(e,n,kr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Oe(fe),this.ns=new Do(o=>dm(o),fm),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TD(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function MD(t,e,n,r){return new ND(t,e,n,r)}async function HE(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ie();for(const u of i){s.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of o){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:s,addedBatchIds:a}))})})}function LD(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let p=C.resolve();return f.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const x=u.docVersions.get(v);Re(x!==null),_.version.compareTo(x)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function qE(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function VD(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(o,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(o,c.addedDocuments,h)));let p=f.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(It.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,x,m){return _.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,p,c)&&a.push(n.qr.updateTargetData(o,p))});let l=nr(),u=ie();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,c))}),a.push($D(o,s,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(G.min())){const c=n.qr.getLastRemoteSnapshotVersion(o).next(h=>n.qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.ts=i,o))}function $D(t,e,n){let r=ie(),i=ie();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=nr();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:s,cs:i}})}function jD(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FD(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(o=>o?(i=o,C.resolve(i)):n.qr.allocateTargetId(r).next(s=>(i=new mr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function mf(t,e,n){const r=Y(t),i=r.ts.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Pa(s))throw s;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function wv(t,e,n){const r=Y(t);let i=G.min(),o=ie();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,c){const h=Y(l),f=h.ns.get(c);return f!==void 0?C.resolve(h.ts.get(f)):h.qr.getTargetData(u,c)}(r,s,Nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.es.getDocumentsMatchingQuery(s,e,n?i:G.min(),n?o:ie())).next(a=>(UD(r,Db(e),a),{documents:a,ls:o})))}function UD(t,e,n){let r=t.rs.get(e)||G.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.rs.set(e,r)}class Ev{constructor(){this.activeTargetIds=$b()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zD{constructor(){this.eo=new Ev,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Ev,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll=null;function kh(){return ll===null?ll=function(){return 268435456+Math.round(2147483648*Math.random())}():ll++,"0x"+ll.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class qD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${o}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get yo(){return!1}wo(n,r,i,o,s){const a=kh(),l=this.So(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,o,s),this.Do(n,l,u,i).then(c=>(j("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw mo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,o,s,a){return this.wo(n,r,i,o,s)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}So(n,r){const i=WD[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const o=kh();return new Promise((s,a)=>{const l=new Zk;l.setWithCredentials(!0),l.listenOnce(Yk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ch.NO_ERROR:const c=l.getResponseJson();j(yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(c)),s(c);break;case Ch.TIMEOUT:j(yt,`RPC '${e}' ${o} timed out`),a(new F(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ch.HTTP_ERROR:const h=l.getStatus();if(j(yt,`RPC '${e}' ${o} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const v=function(x){const m=x.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(m)>=0?m:R.UNKNOWN}(p.status);a(new F(v,p.message))}else a(new F(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(R.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{j(yt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);j(yt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=kh(),o=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Qk(),a=Gk(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Jk({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=o.join("");j(yt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=s.createWebChannel(c,l);let f=!1,p=!1;const v=new HD({co:x=>{p?j(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(f||(j(yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),j(yt,`RPC '${e}' stream ${i} sending:`,x),h.send(x))},lo:()=>h.close()}),_=(x,m,d)=>{x.listen(m,y=>{try{d(y)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,ol.EventType.OPEN,()=>{p||j(yt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,ol.EventType.CLOSE,()=>{p||(p=!0,j(yt,`RPC '${e}' stream ${i} transport closed`),v.Ro())}),_(h,ol.EventType.ERROR,x=>{p||(p=!0,mo(yt,`RPC '${e}' stream ${i} transport errored:`,x),v.Ro(new F(R.UNAVAILABLE,"The operation could not be completed")))}),_(h,ol.EventType.MESSAGE,x=>{var m;if(!p){const d=x.data[0];Re(!!d);const y=d,w=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(w){j(yt,`RPC '${e}' stream ${i} received error:`,w);const E=w.status;let S=function(b){const D=ze[b];if(D!==void 0)return LE(D)}(E),T=w.message;S===void 0&&(S=R.INTERNAL,T="Unknown error status: "+E+" with message "+w.message),p=!0,v.Ro(new F(S,T)),h.close()}else j(yt,`RPC '${e}' stream ${i} received:`,d),v.Vo(d)}}),_(a,Xk.STAT_EVENT,x=>{x.stat===Zy.PROXY?j(yt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Zy.NOPROXY&&j(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function bh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return new rD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=o,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r,i,o,s,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new KE(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new F(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KD extends QE{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=sD(this.serializer,e),r=function(o){if(!("targetChange"in o))return G.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?G.min():s.readTime?Mn(s.readTime):G.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=pf(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=uf(l)?{documents:uD(o,l)}:{query:cD(o,l)},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=jE(o,s.resumeToken);const u=hf(o,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(G.min())>0){a.readTime=xu(o,s.snapshotVersion.toTimestamp());const u=hf(o,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=dD(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=pf(this.serializer),n.removeTarget=e,this.e_(n)}}class QD extends QE{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=lD(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.I_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=pf(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aD(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new F(R.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(R.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(R.UNKNOWN,o.toString())})}terminate(){this.d_=!0}}class YD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(tr(n),this.f_=!1):j("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=o,this.F_.ro(s=>{r.enqueueAndForget(async()=>{Ti(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Y(l);u.C_.add(4),await ka(u),u.M_.set("Unknown"),u.C_.delete(4),await Sc(u)}(this))})}),this.M_=new YD(r,i)}}async function Sc(t){if(Ti(t))for(const e of t.v_)await e(!0)}async function ka(t){for(const e of t.v_)await e(!1)}function GE(t,e){const n=Y(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Sm(n)?Tm(n):Oo(n).Ho()&&xm(n,e))}function YE(t,e){const n=Y(t),r=Oo(n);n.D_.delete(e),r.Ho()&&XE(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Ti(n)&&n.M_.set("Unknown"))}function xm(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oo(t).u_(e)}function XE(t,e){t.x_.Oe(e),Oo(t).c_(e)}function Tm(t){t.x_=new Zb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Oo(t).start(),t.M_.g_()}function Sm(t){return Ti(t)&&!Oo(t).jo()&&t.D_.size>0}function Ti(t){return Y(t).C_.size===0}function JE(t){t.x_=void 0}async function JD(t){t.D_.forEach((e,n)=>{xm(t,e)})}async function ZD(t,e){JE(t),Sm(t)?(t.M_.w_(e),Tm(t)):t.M_.set("Unknown")}async function eO(t,e,n){if(t.M_.set("Online"),e instanceof $E&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof Cl?t.x_.$e(e):e instanceof VE?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(G.min()))try{const r=await qE(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.x_.it(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=o.D_.get(u);c&&o.D_.set(u,c.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const c=o.D_.get(l);if(!c)return;o.D_.set(l,c.withResumeToken(It.EMPTY_BYTE_STRING,c.snapshotVersion)),XE(o,l);const h=new mr(c.target,l,u,c.sequenceNumber);xm(o,h)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!Pa(e))throw e;t.C_.add(1),await ka(t),t.M_.set("Offline"),n||(n=()=>qE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Sc(t)})}function ZE(t,e){return e().catch(n=>Tu(t,n,e))}async function Ic(t){const e=Y(t),n=Dr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;tO(e);)try{const i=await jD(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,nO(e,i)}catch(i){await Tu(e,i)}ex(e)&&tx(e)}function tO(t){return Ti(t)&&t.b_.length<10}function nO(t,e){t.b_.push(e);const n=Dr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function ex(t){return Ti(t)&&!Dr(t).jo()&&t.b_.length>0}function tx(t){Dr(t).start()}async function rO(t){Dr(t).E_()}async function iO(t){const e=Dr(t);for(const n of t.b_)e.P_(n.mutations)}async function oO(t,e,n){const r=t.b_.shift(),i=gm.from(r,e,n);await ZE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ic(t)}async function sO(t,e){e&&Dr(t).h_&&await async function(r,i){if(function(s){return Yb(s)&&s!==R.ABORTED}(i.code)){const o=r.b_.shift();Dr(r).Yo(),await ZE(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ic(r)}}(t,e),ex(t)&&tx(t)}async function Tv(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.C_.add(3),await ka(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Sc(n)}async function aO(t,e){const n=Y(t);e?(n.C_.delete(2),await Sc(n)):e||(n.C_.add(2),await ka(n),n.M_.set("Unknown"))}function Oo(t){return t.O_||(t.O_=function(n,r,i){const o=Y(n);return o.A_(),new KD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{ho:JD.bind(null,t),Io:ZD.bind(null,t),a_:eO.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Sm(t)?Tm(t):t.M_.set("Unknown")):(await t.O_.stop(),JE(t))})),t.O_}function Dr(t){return t.N_||(t.N_=function(n,r,i){const o=Y(n);return o.A_(),new QD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{ho:rO.bind(null,t),Io:sO.bind(null,t),T_:iO.bind(null,t),I_:oO.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ic(t)):(await t.N_.stop(),t.b_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new Im(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rm(t,e){if(tr("AsyncQueue",`${e}: ${t}`),Pa(t))return new F(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=ts(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.B_=new Oe(U.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):q():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class wo{constructor(e,n,r,i,o,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new wo(e,n,Zi.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.k_=void 0,this.listeners=[]}}class uO{constructor(){this.queries=new Do(e=>TE(e),vc),this.onlineState="Unknown",this.q_=new Set}}async function nx(t,e){const n=Y(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new lO),i)try{o.k_=await n.onListen(r)}catch(s){const a=Rm(s,`Initialization of query '${Ci(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,o),o.listeners.push(e),e.Q_(n.onlineState),o.k_&&e.K_(o.k_)&&Pm(n)}async function rx(t,e){const n=Y(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(e);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function cO(t,e){const n=Y(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.K_(i)&&(r=!0);s.k_=i}}r&&Pm(n)}function hO(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function Pm(t){t.q_.forEach(e=>{e.next()})}class ix{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.key=e}}class sx{constructor(e){this.key=e}}class dO{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ie(),this.mutatedKeys=ie(),this._a=SE(e),this.aa=new Zi(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Sv,i=n?n.aa:this.aa;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),p=_c(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let x=!1;f&&p?f.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),x=!0):this.ha(f,p)||(r.track({type:2,doc:p}),x=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),x=!0):f&&!p&&(r.track({type:1,doc:f}),x=!0,(l||u)&&(a=!0)),x&&(p?(s=s.add(p),o=_?o.add(c):o.delete(c)):(s=s.delete(c),o=o.delete(c)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const c=this.query.limitType==="F"?s.last():s.first();s=s.delete(c.key),o=o.delete(c.key),r.track({type:1,doc:c})}return{aa:s,la:r,Zi:a,mutatedKeys:o}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,c)=>function(f,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return v(f)-v(p)}(u.type,c.type)||this._a(u.doc,c.doc)),this.Pa(r);const s=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,o.length!==0||l?{snapshot:new wo(this.query,e.aa,i,o,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:s}:{Ta:s}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Sv,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ie(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new sx(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new ox(r))}),n}da(e){this.ia=e.ls,this.oa=ie();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return wo.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class fO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pO{constructor(e){this.key=e,this.Ra=!1}}class mO{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new Do(a=>TE(a),vc),this.fa=new Map,this.ga=new Set,this.pa=new Oe(U.comparator),this.ya=new Map,this.wa=new _m,this.Sa={},this.ba=new Map,this.Da=_o.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function gO(t,e){const n=RO(t);let r,i;const o=n.ma.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Aa();else{const s=await FD(n.localStore,Nn(e)),a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await yO(n,e,r,a==="current",s.resumeToken),n.isPrimaryClient&&GE(n.remoteStore,s)}return i}async function yO(t,e,n,r,i){t.va=(h,f,p)=>async function(_,x,m,d){let y=x.view.ca(m);y.Zi&&(y=await wv(_.localStore,x.query,!1).then(({documents:S})=>x.view.ca(S,y)));const w=d&&d.targetChanges.get(x.targetId),E=x.view.applyChanges(y,_.isPrimaryClient,w);return Rv(_,x.targetId,E.Ta),E.snapshot}(t,h,f,p);const o=await wv(t.localStore,e,!0),s=new dO(e,o.ls),a=s.ca(o.documents),l=Aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(a,t.isPrimaryClient,l);Rv(t,n,u.Ta);const c=new fO(e,n,s);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function vO(t,e){const n=Y(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(o=>!vc(o,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await mf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),YE(n.remoteStore,r.targetId),gf(n,r.targetId)}).catch(Ra)):(gf(n,r.targetId),await mf(n.localStore,r.targetId,!0))}async function _O(t,e,n){const r=PO(t);try{const i=await function(s,a){const l=Y(s),u=Ye.now(),c=a.reduce((p,v)=>p.add(v.key),ie());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=nr(),_=ie();return l.ss.getEntries(p,c).next(x=>{v=x,v.forEach((m,d)=>{d.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(x=>{h=x;const m=[];for(const d of a){const y=Hb(d,h.get(d.key).overlayedDocument);y!=null&&m.push(new jr(d.key,y,gE(y.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(x=>{f=x;const m=x.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,x.batchId,m)})}).then(()=>({batchId:f.batchId,changes:RE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.Sa[s.currentUser.toKey()];u||(u=new Oe(fe)),u=u.insert(a,l),s.Sa[s.currentUser.toKey()]=u}(r,i.batchId,n),await ba(r,i.changes),await Ic(r.remoteStore)}catch(i){const o=Rm(i,"Failed to persist write");n.reject(o)}}async function ax(t,e){const n=Y(t);try{const r=await VD(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.ya.get(o);s&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.Ra=!0:i.modifiedDocuments.size>0?Re(s.Ra):i.removedDocuments.size>0&&(Re(s.Ra),s.Ra=!1))}),await ba(n,r,e)}catch(r){await Ra(r)}}function Iv(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((o,s)=>{const a=s.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=Y(s);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&Pm(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wO(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),o=i&&i.key;if(o){let s=new Oe(U.comparator);s=s.insert(o,Et.newNoDocument(o,G.min()));const a=ie().add(o),l=new xc(G.min(),new Map,new Oe(fe),s,a);await ax(r,l),r.pa=r.pa.remove(o),r.ya.delete(e),Cm(r)}else await mf(r.localStore,e,!1).then(()=>gf(r,e,n)).catch(Ra)}async function EO(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await LD(n.localStore,e);ux(n,r,null),lx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ba(n,i)}catch(i){await Ra(i)}}async function xO(t,e,n){const r=Y(t);try{const i=await function(s,a){const l=Y(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Re(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);ux(r,e,n),lx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ba(r,i)}catch(i){await Ra(i)}}function lx(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function ux(t,e,n){const r=Y(t);let i=r.Sa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function gf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||cx(t,r)})}function cx(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(YE(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Cm(t))}function Rv(t,e,n){for(const r of n)r instanceof ox?(t.wa.addReference(r.key,e),TO(t,r)):r instanceof sx?(j("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||cx(t,r.key)):q()}function TO(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ga.add(r),Cm(t))}function Cm(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new U(Ae.fromString(e)),r=t.Da.next();t.ya.set(r,new pO(n)),t.pa=t.pa.insert(n,r),GE(t.remoteStore,new mr(Nn(pm(n.path)),r,"TargetPurposeLimboResolution",lm._e))}}async function ba(t,e,n){const r=Y(t),i=[],o=[],s=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{s.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Em.Qi(l.targetId,u);o.push(c)}}))}),await Promise.all(s),r.Va.a_(i),await async function(l,u){const c=Y(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(u,f=>C.forEach(f.ki,p=>c.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>C.forEach(f.qi,p=>c.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Pa(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=c.ts.get(f),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(f,_)}}}(r.localStore,o))}async function SO(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await HE(n.localStore,e);n.currentUser=e,function(o,s){o.ba.forEach(a=>{a.forEach(l=>{l.reject(new F(R.CANCELLED,s))})}),o.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ba(n,r._s)}}function IO(t,e){const n=Y(t),r=n.ya.get(e);if(r&&r.Ra)return ie().add(r.key);{let i=ie();const o=n.fa.get(e);if(!o)return i;for(const s of o){const a=n.ma.get(s);i=i.unionWith(a.view.ua)}return i}}function RO(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ax.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wO.bind(null,e),e.Va.a_=cO.bind(null,e.eventManager),e.Va.Fa=hO.bind(null,e.eventManager),e}function PO(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xO.bind(null,e),e}class Pv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MD(this.persistence,new OD,e.initialUser,this.serializer)}createPersistence(e){return new kD(wm.jr,this.serializer)}createSharedClientState(e){return new zD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Iv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SO.bind(null,this.syncEngine),await aO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uO}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=function(o){return new qD(o)}(e.databaseInfo);return function(o,s,a,l){return new GD(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new XD(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Iv(this.syncEngine,n,0),function(){return xv.D()?new xv:new BD}())}createSyncEngine(e,n){return function(i,o,s,a,l,u,c){const h=new mO(i,o,s,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Y(n);j("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ka(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=fE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dh(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await HE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bO(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Tv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,o)=>Tv(e.remoteStore,o)),t._onlineComponents=e}function kO(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function bO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kO(n))throw n;mo("Error using user provided cache. Falling back to memory cache: "+n),await Dh(t,new Pv)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Dh(t,new Pv);return t._offlineComponents}async function dx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Cv(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Cv(t,new CO))),t._onlineComponents}function DO(t){return dx(t).then(e=>e.syncEngine)}async function fx(t){const e=await dx(t),n=e.eventManager;return n.onListen=gO.bind(null,e.syncEngine),n.onUnlisten=vO.bind(null,e.syncEngine),n}function OO(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new hx({next:f=>{s.enqueueAndForget(()=>rx(o,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new F(R.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new F(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new ix(pm(a.path),c,{includeMetadataChanges:!0,J_:!0});return nx(o,h)}(await fx(t),t.asyncQueue,e,n,r)),r.promise}function NO(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new hx({next:f=>{s.enqueueAndForget(()=>rx(o,h)),f.fromCache&&l.source==="server"?u.reject(new F(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new ix(a,c,{includeMetadataChanges:!0,J_:!0});return nx(o,h)}(await fx(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t,e,n){if(!n)throw new F(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MO(t,e,n,r){if(e===!0&&r===!0)throw new F(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kv(t){if(!U.isDocumentKey(t))throw new F(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bv(t){if(U.isDocumentKey(t))throw new F(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Am(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function $n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Am(t);throw new F(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=px((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tb;switch(r.type){case"firstParty":return new ob(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Av.get(n);r&&(j("ComponentProvider","Removing Datastore"),Av.delete(n),r.terminate())}(this),Promise.resolve()}}function LO(t,e,n,r={}){var i;const o=(t=$n(t,Rc))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=M1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new F(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(u)}t._authCredentials=new nb(new dE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pc(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class Pr extends Pc{constructor(e,n,r){super(e,n,pm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new U(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function Si(t,e,...n){if(t=Gt(t),mx("collection","path",e),t instanceof Rc){const r=Ae.fromString(e,...n);return bv(r),new Pr(t,null,r)}{if(!(t instanceof Ut||t instanceof Pr))throw new F(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return bv(r),new Pr(t.firestore,null,r)}}function Eo(t,e,...n){if(t=Gt(t),arguments.length===1&&(e=fE.newId()),mx("doc","path",e),t instanceof Rc){const r=Ae.fromString(e,...n);return kv(r),new Ut(t,null,new U(r))}{if(!(t instanceof Ut||t instanceof Pr))throw new F(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return kv(r),new Ut(t.firestore,t instanceof Pr?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new KE(this,"async_queue_retry"),this.iu=()=>{const n=bh();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=bh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Gn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Pa(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Im.createAndSchedule(this,e,n,r,o=>this.au(o));return this.Xa.push(i),i}su(){this.eu&&q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class No extends Rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new VO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gx(this),this._firestoreClient.terminate()}}function $O(t,e){const n=typeof t=="object"?t:B1(),r=typeof t=="string"?t:e||"(default)",i=F1(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=O1("firestore");o&&LO(i,...o)}return i}function km(t){return t._firestoreClient||gx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gx(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,u,c){return new yb(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,px(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new AO(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xo(It.fromBase64String(e))}catch(n){throw new F(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xo(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=/^__.*__$/;class FO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ca(e,this.data,n,this.fieldTransforms)}}class yx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Om{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Om(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Su(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(vx(this.Iu)&&jO.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class UO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}pu(e,n,r,i=!1){return new Om({Iu:e,methodName:n,gu:r,path:lt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _x(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new UO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zO(t,e,n,r,i,o={}){const s=t.pu(o.merge||o.mergeFields?2:0,e,n,i);Nm("Data must be an object, but it was:",s,r);const a=wx(r,s);let l,u;if(o.merge)l=new qt(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const c=[];for(const h of o.mergeFields){const f=yf(e,h,n);if(!s.contains(f))throw new F(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);xx(c,f)||c.push(f)}l=new qt(c),u=s.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=s.fieldTransforms;return new FO(new Mt(a),l,u)}class Ac extends bm{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function BO(t,e,n,r){const i=t.pu(1,e,n);Nm("Data must be an object, but it was:",i,r);const o=[],s=Mt.empty();xi(r,(l,u)=>{const c=Mm(e,l,n);u=Gt(u);const h=i.Ru(c);if(u instanceof Ac)o.push(c);else{const f=kc(u,h);f!=null&&(o.push(c),s.set(c,f))}});const a=new qt(o);return new yx(s,a,i.fieldTransforms)}function WO(t,e,n,r,i,o){const s=t.pu(1,e,n),a=[yf(e,r,n)],l=[i];if(o.length%2!=0)throw new F(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<o.length;f+=2)a.push(yf(e,o[f])),l.push(o[f+1]);const u=[],c=Mt.empty();for(let f=a.length-1;f>=0;--f)if(!xx(u,a[f])){const p=a[f];let v=l[f];v=Gt(v);const _=s.Ru(p);if(v instanceof Ac)u.push(p);else{const x=kc(v,_);x!=null&&(u.push(p),c.set(p,x))}}const h=new qt(u);return new yx(c,h,s.fieldTransforms)}function kc(t,e){if(Ex(t=Gt(t)))return Nm("Unsupported field value:",e,t),wx(t,e);if(t instanceof bm)return function(r,i){if(!vx(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=kc(a,i.Vu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Ye.fromDate(r);return{timestampValue:xu(i.serializer,o)}}if(r instanceof Ye){const o=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xu(i.serializer,o)}}if(r instanceof Dm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xo)return{bytesValue:jE(i.serializer,r._byteString)};if(r instanceof Ut){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:vm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Am(r)}`)}(t,e)}function wx(t,e){const n={};return pE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const o=kc(i,e.Eu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function Ex(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Dm||t instanceof xo||t instanceof Ut||t instanceof bm)}function Nm(t,e,n){if(!Ex(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Am(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function yf(t,e,n){if((e=Gt(e))instanceof Cc)return e._internalPath;if(typeof e=="string")return Mm(t,e);throw Su("Field path arguments must be of type string or ",t,!1,void 0,n)}const HO=new RegExp("[~\\*/\\[\\]]");function Mm(t,e,n){if(e.search(HO)>=0)throw Su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cc(...e.split("."))._internalPath}catch{throw Su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Su(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new F(R.INVALID_ARGUMENT,a+t+l)}function xx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sx("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qO extends Tx{data(){return super.data()}}function Sx(t,e){return typeof e=="string"?Mm(t,e):e instanceof Cc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class QO{convertValue(e,n="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xi(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new Dm(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Js(e));default:return null}}convertTimestamp(e){const n=br(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Re(WE(r));const i=new Zs(r.get(1),r.get(3)),o=new U(r.popFirst(5));return i.isEqual(n)||tr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ix extends Tx{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sx("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Al extends Ix{data(e={}){return super.data(e)}}class YO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new rs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Al(this._firestore,this._userDataWriter,r.key,r,new rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new rs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new rs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),c=s.indexOf(a.doc.key)),{type:XO(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(t){t=$n(t,Ut);const e=$n(t.firestore,No);return OO(km(e),t._key).then(n=>tN(e,t,n))}class Rx extends QO{constructor(e){super(),this.firestore=e}convertBytes(e){return new xo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function bc(t){t=$n(t,Pc);const e=$n(t.firestore,No),n=km(e),r=new Rx(e);return KO(t._query),NO(n,t._query).then(i=>new YO(e,r,t,i))}function Lm(t,e,n){t=$n(t,Ut);const r=$n(t.firestore,No),i=GO(t.converter,e,n);return Vm(r,[zO(_x(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_n.none())])}function ZO(t,e,n,...r){t=$n(t,Ut);const i=$n(t.firestore,No),o=_x(i);let s;return s=typeof(e=Gt(e))=="string"||e instanceof Cc?WO(o,"updateDoc",t._key,e,n,r):BO(o,"updateDoc",t._key,e),Vm(i,[s.toMutation(t._key,_n.exists(!0))])}function eN(t){return Vm($n(t.firestore,No),[new mm(t._key,_n.none())])}function Vm(t,e){return function(r,i){const o=new Gn;return r.asyncQueue.enqueueAndForget(async()=>_O(await DO(r),i,o)),o.promise}(km(t),e)}function tN(t,e,n){const r=n.docs.get(e._key),i=new Rx(t);return new Ix(t,i,e._key,r,new rs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){bo=i})(U1),Us(new fo("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new No(new rb(r.getProvider("auth-internal")),new ab(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zs(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Rr(ev,"4.3.2",e),Rr(ev,"4.3.2","esm2017")})();var nN="firebase",rN="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr(nN,rN,"app");const iN={apiKey:"AIzaSyDb_LTa-HulnI8qnwpCRUfu6VLtVUwnAKA",authDomain:"database-chocomel.firebaseapp.com",projectId:"database-chocomel",storageBucket:"database-chocomel.appspot.com",messagingSenderId:"285491852643",appId:"1:285491852643:web:bd4c526b55d8b67615cf56"},oN=z1(iN),jn=$O(oN),$m="/2023_Chocomel_ReactJs_Firebase/assets/logo-whatsapp-buttom-82278ecd.png",sN=O.div`
    width: 270px;
    height: 24em;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    background-color: #ab9680;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    color: #2a1510;

    @media (max-width: 480px) {
        width: 160px;
        height: 24em;
    }

    a {
        color: #2a1510;
        text-decoration: none;
    }
`,aN=O.div`
    margin-top: 2%;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 5%;

    @media (max-width: 480px) {
        margin: 0 20px 20px 20px;
        gap: 25px;
    }
`,lN=O.img`
    object-fit: cover;
    height: 180px;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    background-color: white;
`,uN=O.h3`
    margin-top: 1px;
    text-align: center;
    font-size: 35px;
    font-family: 'Caveat', cursive;

    @media (max-width: 480px) {
        font-size: 25px;
    }
`,cN=O.p`
    margin-top: 15px;
    text-indent: 25px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: justify;
    font-size: 19px;
    line-height: 1.3;

    @media (max-width: 480px) {
        margin-top: 8px;
        font-size: 15px;
    }
`,hN=O.h2`
    margin-top: 2%;
    text-align: center;
    font-family: 'Caveat', cursive;
    font-size: 45px;

    @media (max-width: 480px) {
        margin-top: 10%;
        margin-bottom: 10%;
    }
`,dN=O.button`
    display: flex;
    width: 170px;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 10px;
    border: 2px solid white; 
    cursor: pointer;

    img {
        padding: 0;
        width: 30px;
        margin-left: 12px;
    }

    p {
        padding: 5px;
        color: #2a1510;
        font-size: 14px;
        font-weight: bold;
    }

    &:hover {
        background-color: #c0c0c0;
    }

    @media (max-width: 480px) {
        width: 140px;
        margin-bottom: 9px;

        img {
            width: 20px;
        }

        p {
            font-size: 12px;
        }
    }    
`;function Ov(t,e){const n=async()=>{try{const o=Si(jn,"products"),s=await bc(o),a=[];return s.forEach(l=>{const u=l.data();(u.category===`${t}`||u.category2===`${t}`)&&a.push({id:l.id,...u})}),a}catch(o){return console.error("Erro ao buscar os produtos:",o),[]}},[r,i]=P.useState([]);return P.useEffect(()=>{n().then(o=>{i(o.slice(0,5))})},[]),g.jsxs(g.Fragment,{children:[g.jsx(hN,{children:e}),g.jsx(aN,{children:r.map(o=>g.jsxs(sN,{children:[g.jsxs("a",{href:`produtos/${o.id}`,children:[g.jsx(lN,{src:o.imageUrls[0],alt:o.title}),g.jsx(uN,{children:o.title}),g.jsx(cN,{children:o.subtitle})]}),g.jsx("a",{href:`https://api.whatsapp.com/send?phone=5511945455177&text=Olá, gostaria de encomendar o produto ${o.title}!`,target:"_blank",children:g.jsxs(dN,{children:[g.jsx("img",{src:$m}),g.jsx("p",{children:"ENCOMENDAR"})]})})]},o.id))})]})}const fN=O.div`
    width: 270px;
    height: 24em;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    background-color: #ab9680;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    color: #2a1510;

    @media (max-width: 480px) {
        width: 160px;
        height: 24em;
    }

    a {
        color: #2a1510;
        text-decoration: none;
    }
`,pN=O.div`
    margin-top: 2%;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 5%;

    @media (max-width: 480px) {
        margin: 0 20px 20px 20px;
        gap: 25px;
    }
`,mN=O.img`
    object-fit: cover;
    height: 180px;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    background-color: white;
`,gN=O.h3`
    margin-top: 1px;
    text-align: center;
    font-size: 35px;
    font-family: 'Caveat', cursive;

    @media (max-width: 480px) {
        font-size: 25px;
    }
`,yN=O.p`
    margin-top: 15px;
    text-indent: 25px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: justify;
    font-size: 19px;
    line-height: 1.3;

    @media (max-width: 480px) {
        margin-top: 8px;
        font-size: 15px;
    }
`,vN=O.h2`
    margin-top: 2%;
    text-align: center;
    font-family: 'Caveat', cursive;
    font-size: 45px;

    @media (max-width: 480px) {
        margin-top: 10%;
        margin-bottom: 10%;
    }
`,_N=O.button`
    display: flex;
    width: 170px;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 10px;
    border: 2px solid white; 
    cursor: pointer;

    img {
        padding: 0;
        width: 30px;
        margin-left: 12px;
    }

    p {
        padding: 5px;
        color: #2a1510;
        font-size: 14px;
        font-weight: bold;
    }

    &:hover {
        background-color: #c0c0c0;
    }

    @media (max-width: 480px) {
        width: 140px;
        margin-bottom: 9px;

        img {
            width: 20px;
        }

        p {
            font-size: 12px;
        }
    }    
`;function wN(){const t=async()=>{try{const r=Si(jn,"products"),i=await bc(r),o=[];return i.forEach(s=>{o.push({id:s.id,...s.data()})}),o}catch(r){return console.error("Erro ao buscar os produtos:",r),[]}},[e,n]=P.useState([]);return P.useEffect(()=>{t().then(r=>{n(r.slice(0,25))})},[]),g.jsxs(g.Fragment,{children:[Ov("Mais Vendidos","Mais Vendidos"),Ov("Promocoes","Promoções"),g.jsx(vN,{children:"Produtos"}),g.jsx(pN,{children:e.map(r=>g.jsxs(fN,{children:[g.jsxs("a",{href:`produtos/${r.id}`,children:[g.jsx(mN,{src:r.imageUrls[0],alt:r.title}),g.jsx(gN,{children:r.title}),g.jsx(yN,{children:r.subtitle})]}),g.jsx("a",{href:`https://api.whatsapp.com/send?phone=5511945455177&text=Olá, gostaria de encomendar o produto ${r.title}!`,target:"_blank",children:g.jsxs(_N,{children:[g.jsx("img",{src:$m}),g.jsx("p",{children:"ENCOMENDAR"})]})})]},r.id))})]})}const EN=O.div`
    background-color: #2a1510;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center; 
    
    a {
        text-decoration: none;
        color: white;
        padding: 10px;
        font-size: 20px;

        &:hover {
            color:  #ab9680;;
        }
    }

    #all-products {
        font-size: 28px;
    }
`;function jm(){return g.jsxs(EN,{children:[g.jsx("a",{href:"/produtos?category=Bolos",children:"Bolos"}),g.jsx("a",{href:"/produtos?category=Casamento",children:"Casamento"}),g.jsx("a",{href:"/produtos?category=Doces",children:"Doces"}),g.jsx("a",{id:"all-products",href:"/produtos",children:"Todos os Produtos"}),g.jsx("a",{href:"/produtos?category=Promocoes",children:"Promoções"}),g.jsx("a",{href:"/produtos?category=Mais Vendidos",children:"Mais Vendidos"})]})}function xN(){const[t,e]=P.useState(!1),n=()=>{e(r=>!r)};return g.jsxs(g.Fragment,{children:[g.jsx("title",{children:"Chocomel"}),g.jsx(Ep,{onToggleCategory:n,isCategoryVisible:t}),t&&g.jsx(jm,{}),g.jsx(K2,{}),g.jsx(wN,{}),g.jsx(Tp,{}),g.jsx(xp,{})]})}const Px=P.createContext(),Cx=()=>P.useContext(Px),TN=({children:t})=>{const[e,n]=P.useState(null),r=(o,s)=>o==="leo@gmail.com"&&s==="123"?(n({email:o}),!0):!1,i=()=>{n(null)};return g.jsx(Px.Provider,{value:{user:e,login:r,logout:i},children:t})};const SN=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 91.8vh;

  h2 {
    font-size: 30px;
    padding: 10px;
  }
`,IN=O.img`
  width: 200px;
  border-radius: 60px;
  margin-bottom: 20px;
`,RN=O.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%; 
  margin: 0 auto;
`,Nv=O.input`
  width: 100%; 
  padding: 15px; 
  font-size: 17px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px; 
`,PN=O.button`
  width: 150px; 
  padding: 15px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  } 
`,CN=O.a`
    display: flex;

    p {
      color: black;
      font-weight: bold;
      text-align: center;
      padding: 10px;
      background-color: #fff;
      margin-top: 2%;
      margin-left: 2%;
      width: 150px;
      border-radius: 10px;

      @media (max-width: 480px) {
        margin-top: 10%;
        margin-left: 10%;
      }
    }
`;function AN(){const[t,e]=P.useState(""),[n,r]=P.useState(""),{login:i}=Cx(),o=mp(),s=async a=>{a.preventDefault(),i(t,n)?(localStorage.setItem("authenticated","true"),o("/controlpanel")):alert("Email ou senha incorretos")};return g.jsxs(g.Fragment,{children:[g.jsx("title",{children:"Chocomel | Login"}),g.jsxs("div",{className:"Login-bg",children:[g.jsx(CN,{href:"../",children:g.jsx("p",{children:"Voltar para o site"})}),g.jsxs(SN,{children:[g.jsx(IN,{src:k1,alt:"Logo Chocomel"}),g.jsxs(RN,{onSubmit:s,children:[g.jsx("h2",{children:"LOGIN"}),g.jsx(Nv,{type:"email",placeholder:"Email",value:t,onChange:a=>e(a.target.value),required:!0}),g.jsx(Nv,{type:"password",placeholder:"Senha",value:n,onChange:a=>r(a.target.value),required:!0}),g.jsx(PN,{type:"submit",children:"Entrar"})]})]})]})]})}const kN="/2023_Chocomel_ReactJs_Firebase/assets/more-chocolate-8e5ae462.png",bN=O.div`
  text-align: center;
  background-color: #ab9680;
  margin: 0 30% 5% 30%;
  border-radius: 20px;
  height: 50em;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  @media (max-width: 480px) {
    margin: 10% 2% 0 2%;
    padding-bottom: 20px;
  }

  h2 {
    font-size: 35px;
    padding-bottom: 30px;
    padding-top: 30px;

    @media (max-width: 480px) {
      font-size: 30px;
    }

    img {
      width: 40px;
      margin-left: 20px;

      @media (max-width: 480px) {
        margin-left: 5px;
      }
    }
  }
`,DN=O.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  
  input {
    font-size: 17px;
    padding: 5px;
    border: 2px solid white;
    width: 90%;
    margin-left: 10px;
    height: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`,ON=O.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;

  textarea {
    padding: 5px;
    font-size: 17px;
    border: 2px solid white;
    width: 90%;
    height: 55px;
    margin-left: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    resize: none;
  }
`,NN=O.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;

  textarea {
    font-size: 17px;
    padding: 5px;
    border: 2px solid white;
    width: 90%;
    height: 75px;
    margin-left: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    resize: none;
  }
`,MN=O.div`
  input {
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }  
`,Mv=O.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;

  select {
    font-size: 15px;
    padding: 5px;
    margin: 0 0 20px 10px;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
  }
`,LN=O.button`
  margin-top: 8px;
  font-size: 25px;
  padding: 10px;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid white;
  cursor: pointer;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  &:hover {
    background-color: #c0c0c0;
  }
`;function VN(){const[t,e]=P.useState({title:"",subtitle:"",description:"",imageFiles:["","","",""],category:"",category2:""}),n=i=>{const{name:o,value:s,files:a}=i.target;if(o==="imageFile"){const l=parseInt(i.target.dataset.index,10),u=[...t.imageFiles];u[l]=a[0],e({...t,imageFiles:u})}else e({...t,[o]:s})},r=async i=>{i.preventDefault();try{const o=Eo(Si(jn,"products")),s=da(),a=[];for(let l=0;l<t.imageFiles.length;l++){const u=t.imageFiles[l];if(u){const c=ha(s,`product_images/${o.id}/image_${l}`);await Yu(c,u);const h=await ca(c);a.push(h)}}await Lm(o,{title:t.title,subtitle:t.subtitle,description:t.description,imageUrls:a,category:t.category,category2:t.category2}),console.log("Produto adicionado com ID aleatório:",o.id),e({title:"",subtitle:"",description:"",imageFiles:["","","",""],category:"",category2:""})}catch(o){console.error("Erro ao adicionar o produto:",o)}};return g.jsxs(bN,{children:[g.jsxs("h2",{children:["Criar novo produto",g.jsx("img",{src:kN})]}),g.jsxs("form",{onSubmit:r,children:[g.jsxs(DN,{children:["Título:",g.jsx("input",{maxLength:20,placeholder:"Ex: Bolo Rosa com Glace",type:"text",name:"title",required:!0,value:t.title,onChange:n})]}),g.jsx("br",{}),g.jsxs(ON,{children:["Subtítulo:",g.jsx("textarea",{placeholder:"Ex: Melhor bolo para aniversario com camada extra camada extra nova",maxLength:63,required:!0,name:"subtitle",value:t.subtitle,onChange:n})]}),g.jsx("br",{}),g.jsxs(NN,{children:["Descrição:",g.jsx("textarea",{required:!0,name:"description",placeholder:"Um bolo rosa com glacê é uma deliciosa sobremesa que combina a suavidade e a doçura de um bolo com uma cobertura de glacê cor-de-rosa.",value:t.description,onChange:n})]}),g.jsx(MN,{children:t.imageFiles.map((i,o)=>g.jsxs("label",{children:[g.jsx("br",{}),"Imagem ",o+1,":",g.jsx("input",{type:"file",name:"imageFile",onChange:n,"data-index":o})]},o))}),g.jsx("br",{}),g.jsxs(Mv,{children:["Categoria 1:",g.jsxs("select",{required:!0,name:"category",value:t.category,onChange:n,children:[g.jsx("option",{value:"",children:"Selecione a categoria"}),g.jsx("option",{value:"Bolos",children:"Bolos"}),g.jsx("option",{value:"Casamento",children:"Casamento"}),g.jsx("option",{value:"Doces",children:"Doces"}),g.jsx("option",{value:"Mais Vendidos",children:"Mais Vendidos"}),g.jsx("option",{value:"Promocoes",children:"Promoções"})]})]}),g.jsx("br",{}),g.jsxs(Mv,{children:["Categoria 2:",g.jsxs("select",{name:"category2",value:t.category2,onChange:n,children:[g.jsx("option",{value:"",children:"Selecione a categoria"}),g.jsx("option",{value:"Bolos",children:"Bolos"}),g.jsx("option",{value:"Casamento",children:"Casamento"}),g.jsx("option",{value:"Doces",children:"Doces"}),g.jsx("option",{value:"Mais Vendidos",children:"Mais Vendidos"}),g.jsx("option",{value:"Promocoes",children:"Promoções"})]})]}),g.jsx("br",{}),g.jsx(LN,{type:"submit",children:"Criar Produto"})]})]})}const $N=O.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ab9680;
  margin: 2% 20% 0% 20%;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  @media (max-width: 480px) {
    margin-top: 8%;
    margin-left: 2%;
    margin-right: 3%;
    padding-bottom: 20px;
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    padding-bottom: 10px;
  }

  input {
    font-size: 18px;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  button {
    font-size: 15px;
    border-radius: 20px;
    font-weight: bold;
    padding: 7px;
    border: 2px solid white;
    margin-left: 25px;
    cursor: pointer;

    &:hover {
      background-color: #c0c0c0;
    }  

    @media (max-width: 480px) {
      margin-top: 20px;
      margin-left: 0px;
    }
  }
`,jN=O.div`
  text-align: center;
`;function FN({setCarouselImages:t}){const[e,n]=P.useState(null),r=o=>{const s=o.target.files[0];n(s)},i=async()=>{if(e){const o=da(),s=ha(o,"carouselImages/"+e.name);await Yu(s,e);const a=await ca(s),l=Si(jn,"carouselImages"),u=Eo(l);await Lm(u,{imageUrl:a}),t(c=>[...c,a]),n(null)}};return g.jsx(jN,{children:g.jsxs($N,{children:[g.jsx("h2",{children:"Imagens Carrossel Desktop"}),g.jsx("p",{children:"Tamanho: 2000x598"}),g.jsx("input",{type:"file",onChange:r}),g.jsx("button",{onClick:i,children:"Enviar Imagem"})]})})}const UN=O.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ab9680;
  margin: 2% 20% 5% 20%;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  @media (max-width: 480px) {
    margin-top: 8%;
    margin-left: 2%;
    margin-right: 3%;
    padding-bottom: 20px;
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    padding-bottom: 10px;
  }

  input {
    font-size: 18px;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  button {
    font-size: 15px;
    border-radius: 20px;
    font-weight: bold;
    padding: 7px;
    border: 2px solid white;
    margin-left: 25px;
    cursor: pointer;

    &:hover {
      background-color: #c0c0c0;
    }  

    @media (max-width: 480px) {
      margin-top: 20px;
      margin-left: 0px;
    }
  }
`,zN=O.div`
  text-align: center;
`;function BN({setCarouselImagesMobile:t}){const[e,n]=P.useState(null),r=o=>{const s=o.target.files[0];n(s)},i=async()=>{if(e){const o=da(),s=ha(o,"carouselImagesMobile/"+e.name);await Yu(s,e);const a=await ca(s),l=Si(jn,"carouselImagesMobile"),u=Eo(l);await Lm(u,{imageUrl:a}),setCarouselImages(c=>[...c,a]),n(null)}};return g.jsx(zN,{children:g.jsxs(UN,{children:[g.jsx("h2",{children:"Imagens Carrossel Mobile"}),g.jsx("p",{children:"Tamanho: 320x414"}),g.jsx("input",{type:"file",onChange:r}),g.jsx("button",{onClick:i,children:"Enviar Imagem"})]})})}const WN="/2023_Chocomel_ReactJs_Firebase/assets/edit-chocolate-5cab31d0.png",HN=O.div`
    width: 270px;
    height: 22em;
    background-color: #ab9680;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 2%;

    a {
        text-decoration: none;
    }
`,qN=O.div`
    margin-top: 2%;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @media (max-width: 480px) {
        margin-top: 8%;
        margin-left: 15%;
        margin-right: 15%;
    }
`,KN=O.img`
    margin-top: 15px;
    text-align: center;
    object-fit: cover;
    height: 180px;
    width: 90%;
    border-radius: 20px;
    background-color: white;
`,QN=O.h3`
    margin-top: 8px;
    text-align: center;
    font-size: 35px;
    font-family: 'Caveat', cursive;
`,GN=O.h2`
    margin-top: 2%;
    text-align: center;
    font-family: 'Caveat', cursive;
    font-size: 45px;

    @media (max-width: 480px) {
        margin-top: 10%;
    }
`,Lv=O.button`
    width: 100px;
    margin-top: 8px;
    padding: 8px;
    border: 2px solid white; 
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    margin-bottom: 10px;

    &:hover {
        background-color: #c0c0c0;
    }
`,YN=O.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center;

    input {
        margin: 40px 0 0 30px;
        width: 200px;
        height: 40px;
        padding: 10px;
        border-radius: 10px;
        border: 2px solid black;

        @media (max-width: 480px) {
            margin: 10px 0 0 0;
        }
    }
`,XN=async()=>{try{const t=Si(jn,"products"),e=await bc(t),n=[];return e.forEach(r=>{n.push({id:r.id,...r.data()})}),n}catch(t){return console.error("Erro ao buscar os produtos:",t),[]}};function JN(){const[t,e]=P.useState([]),[n,r]=P.useState(null),[i,o]=P.useState("");P.useEffect(()=>{XN().then(c=>{e(c)})},[]);const s=async c=>{try{await eN(Eo(jn,"products",c));const h=t.filter(f=>f.id!==c);e(h)}catch(h){console.error("Erro ao excluir o produto:",h)}},a=c=>{r(c)},l=async(c,h)=>{try{const f=Eo(jn,"products",c);await ZO(f,h);const p=t.map(v=>v.id===c?{...v,...h}:v);e(p),r(null)}catch(f){console.error("Erro ao atualizar o produto:",f)}},u=t.filter(c=>c.title.toLowerCase().includes(i.toLowerCase()));return g.jsxs(g.Fragment,{children:[n&&g.jsx(i4,{product:n,onUpdate:c=>l(n.id,c),onCancel:()=>r(null)}),g.jsxs(YN,{children:[g.jsx(GN,{children:"Todos os Produtos"}),g.jsx("input",{type:"text",placeholder:"Buscar Produto",value:i,onChange:c=>o(c.target.value)})]}),g.jsx(qN,{children:u.map(c=>g.jsxs(HN,{children:[g.jsx(KN,{src:c.imageUrls[0],alt:c.title}),g.jsx(QN,{children:c.title}),g.jsxs("div",{children:[g.jsx(Lv,{onClick:()=>a(c),children:"EDITAR"}),g.jsx(Lv,{onClick:()=>s(c.id),children:"EXCLUIR"})]})]},c.id))})]})}const ZN=O.div`
  text-align: center;
  background-color: #ab9680;
  margin: 5% 30% 50px 30%;
  border-radius: 20px;
  height: 51em;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  @media (max-width: 480px) {
    margin: 20% 2% 0 2%;
    padding-bottom: 20px;
    height: 49em;
  }

  h2 {
    font-size: 35px;
    padding-bottom: 30px;
    padding-top: 30px;

    @media (max-width: 480px) {
      font-size: 30px;
    }

    img {
      width: 40px;

      @media (max-width: 480px) {
        margin-left: 5px;
      }
    }
  }
`,e4=O.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  
  input {
    font-size: 17px;
    padding: 5px;
    border: 2px solid white;
    width: 90%;
    margin-left: 10px;
    height: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`,t4=O.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;

  textarea {
    padding: 5px;
    font-size: 17px;
    border: 2px solid white;
    width: 90%;
    height: 55px;
    margin-left: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    resize: none;
  }
`,n4=O.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;

  textarea {
    font-size: 17px;
    padding: 5px;
    border: 2px solid white;
    width: 90%;
    height: 75px;
    margin-left: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    resize: none;
  }
`,ul=O.div`
  input {
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }  
`,Vv=O.label`
    padding: 10px;
    font-size: 25px;
    font-weight: bold;

    select {
    font-size: 15px;
    padding: 5px;
    margin: 0 0 0px 10px;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    }
`,$v=O.button`
    margin: 20px 20px 0 20px;
    font-size: 25px;
    width: 150px;
    font-weight: bold;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid white;
    cursor: pointer;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

    @media (max-width: 480px) {
        margin: 20px 0 0 10px;
    }

    &:hover {
    background-color: #7a6a54;
    }
`,r4=O.div`
    display: flex;
    flex-direction: column;
`;function i4({product:t,onUpdate:e,onCancel:n}){const[r,i]=P.useState(t),[o,s]=P.useState(null),a=c=>{const{name:h,value:f}=c.target;i({...r,[h]:f})},l=(c,h)=>{const f=c.target.files[0];if(f){const p=da(),v=ha(p,`product_images/${r.id}/image_${h}`);Yu(v,f).then(async()=>{const _=await ca(v);s(_);const x={...r,imageUrls:[...r.imageUrls]};x.imageUrls[h]=_,i(x)}).catch(_=>{console.error("Erro ao fazer upload da imagem:",_)})}},u=c=>{c.preventDefault(),e(r)};return g.jsxs(ZN,{children:[g.jsxs("h2",{children:["Editando o produto ",g.jsx("img",{src:WN,alt:"Edit Image"}),g.jsx("br",{}),'"',r.title,'"']}),g.jsxs("form",{onSubmit:u,children:[g.jsxs(e4,{children:["Título:",g.jsx("input",{type:"text",name:"title",value:r.title,onChange:a})]}),g.jsxs(t4,{children:["Subtítulo:",g.jsx("textarea",{type:"text",name:"subtitle",value:r.subtitle,onChange:a})]}),g.jsxs(n4,{children:["Descrição:",g.jsx("textarea",{type:"text",name:"description",value:r.description,onChange:a})]}),g.jsxs(ul,{children:["Imagem 1:",g.jsx("input",{type:"file",accept:"image/*",onChange:c=>l(c,0)})]}),g.jsxs(ul,{children:["Imagem 2:",g.jsx("input",{type:"file",accept:"image/*",onChange:c=>l(c,1)})]}),g.jsxs(ul,{children:["Imagem 3:",g.jsx("input",{type:"file",accept:"image/*",onChange:c=>l(c,2)})]}),g.jsxs(ul,{children:["Imagem 4:",g.jsx("input",{type:"file",accept:"image/*",onChange:c=>l(c,3)})]}),g.jsxs(r4,{children:[g.jsxs(Vv,{children:["Categoria:",g.jsxs("select",{name:"category",value:r.category,onChange:a,children:[g.jsx("option",{value:"",children:"Selecione a categoria"}),g.jsx("option",{value:"Bolos",children:"Bolos"}),g.jsx("option",{value:"Casamento",children:"Casamento"}),g.jsx("option",{value:"Doces",children:"Doces"}),g.jsx("option",{value:"Mais Vendidos",children:"Mais Vendidos"}),g.jsx("option",{value:"Promocoes",children:"Promoções"})]})]}),g.jsxs(Vv,{children:["Categoria 2:",g.jsxs("select",{name:"category2",value:r.category2,onChange:a,children:[g.jsx("option",{value:"",children:"Selecione a categoria"}),g.jsx("option",{value:"Bolos",children:"Bolos"}),g.jsx("option",{value:"Casamento",children:"Casamento"}),g.jsx("option",{value:"Doces",children:"Doces"}),g.jsx("option",{value:"Mais Vendidos",children:"Mais Vendidos"}),g.jsx("option",{value:"Promocoes",children:"Promoções"})]})]})]}),g.jsx($v,{type:"submit",children:"Salvar"}),g.jsx($v,{type:"button",onClick:n,children:"Cancelar"})]})]})}const jv=O.button`
    padding: 20px;
    margin: 0 0 0 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    border: 2px solid white;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background-color: #c0c0c0;
    }
`,o4=O.div`
    margin: 0 0 3% 0;
    text-align: center;
`,s4=O.div`
    h2 {
        text-align: center; 
        font-size: 60px; 
        padding: 0 0 40px 0;
        font-family: 'Caveat', cursive;  
    }

    button {
        cursor: pointer;
        border: 2px solid white;
        margin: 10px 0 0 10px;
        width: 60px;
        height: 40px;
        border-radius: 10px;
        font-size: 20px;

        &:hover {
            background-color: #c0c0c0;
        }
    }
`;function a4(){const[t,e]=P.useState(!1),[n,r]=P.useState(!1),i=s=>{switch(s){case 1:e(!t);break;case 2:r(!n);break}},o=()=>{localStorage.removeItem("authenticated"),window.location.href="/login"};return g.jsxs("div",{className:"controlPage-bg",children:[g.jsx("title",{children:"Chocomel | Painel de Controle"}),g.jsxs(s4,{children:[g.jsx("button",{onClick:o,children:"Sair"}),g.jsx("h2",{children:"Painel de Controle"})]}),g.jsxs(o4,{children:[g.jsx(jv,{onClick:()=>i(1),children:t?"Fechar Adicionar":"Adicionar Produto"}),g.jsx(jv,{onClick:()=>i(2),children:n?"Fechar Carrossel":"Imagem Carrossel"})]}),t&&g.jsx("div",{children:g.jsx(VN,{})}),n&&g.jsxs("div",{children:[g.jsx(FN,{}),g.jsx(BN,{})]}),g.jsx(JN,{})]})}function l4({component:t}){const{user:e}=Cx(),n=localStorage.getItem("authenticated");return!e&&!n?g.jsx(BI,{to:"/login"}):g.jsx(t,{})}const u4=O.h2`
    font-size: 35px;
    text-align: center;
    margin-top: 5%;
    margin-left: 5%;
`,c4=O.p`
    font-size: 25px;
    text-align: center;
    margin-top: 25px;
    margin-left: 5%;
`,h4=O.button`
    margin-top: 25px;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
`;function d4(){return g.jsxs("div",{children:[g.jsx("title",{children:"Página não encontrada"}),g.jsx(u4,{children:"Página não encontrada - Error 404 Not Found"}),g.jsxs(c4,{children:["A página que você está procurando não existe. ",g.jsx("br",{}),g.jsx("a",{href:"/",children:g.jsx(h4,{children:"Clique aqui para voltar ao site"})})]})]})}const f4=O.div`
    width: 270px;
    height: 24em;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    background-color: #ab9680;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    color: #2a1510;
    
    @media (max-width: 480px) {
        width: 160px;
        height: 24em;
    }

    a {
        text-decoration: none;
    }
`,p4=O.div`
    margin-top: 2%;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5%;
    gap: 40px;

    @media (max-width: 480px) {
        margin: 0 20px 20px 20px;
        gap: 25px;
    }
`,m4=O.img`
    object-fit: cover;
    height: 180px;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    background-color: white;
`,g4=O.h3`
    text-align: center;
    font-size: 35px;
    font-family: 'Caveat', cursive;

    @media (max-width: 480px) {
        font-size: 25px;
    }
`,y4=O.p`
    text-indent: 25px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: justify;
    font-size: 19px;
    line-height: 1.3;

    @media (max-width: 480px) {
        font-size: 15px;
    }
`,v4=O.h2`
    margin-top: 2%;
    text-align: center;
    line-height: 1.6;
    font-size: 45px;
`,_4=O.button`
    display: flex;
    width: 160px;
    align-items: center;
    border-radius: 20px;
    padding: 5px;
    margin-bottom: 10px;
    border: 2px solid white; 
    cursor: pointer;
    justify-content: center; 

    p {
        color: #2a1510;
        font-size: 18px;
        font-weight: bold;
    }

    @media (max-width: 480px) {
        width: 140px;
        margin-bottom: 9px;

        p {
            font-size: 15px;
        }
    }    

    &:hover {
        background-color: #c0c0c0;
    }  
`,w4=O.button`
    font-size: 25px;
    width: 80%;
    text-align: center;
    border-radius: 20px;
    padding: 15px;
    font-weight: bold;
    line-height: 1.6;
    margin-top: 50px;
    margin-bottom: 10%;
    background-color: #ab9680;
    border: 2px solid white; 
    cursor: pointer;

    &:hover {
        background-color: #7a6a54;
        
    }
`;function E4(){const t=Bu(),e=new URLSearchParams(t.search),n=e.get("search")||"",r=e.get("category")||"",i=async()=>{try{const h=Si(jn,"products"),f=await bc(h),p=[];f.forEach(v=>{const _=v.data();(_.title.toLowerCase().includes(n.toLowerCase())||n==="")&&(r===""||_.category.toLowerCase()===r.toLowerCase()||_.category2.toLowerCase()===r.toLowerCase())&&p.push({id:v.id,..._})}),s(p),p.length===0?setTimeout(()=>{c(!0)},1e3):c(!1)}catch(h){console.error("Erro ao buscar os produtos:",h),s([])}},[o,s]=P.useState([]),[a,l]=P.useState(""),[u,c]=P.useState(!1);return P.useEffect(()=>{l(n),i()},[n]),g.jsx(g.Fragment,{children:g.jsx(p4,{children:u?g.jsxs(v4,{children:["Produto ",a?`"${a}"`:""," não encontrado. ",g.jsx("br",{}),"Caso não encontre o produto que está procurando ",g.jsx("br",{}),g.jsx("a",{href:`https://api.whatsapp.com/send?phone=5511945455177&text=Olá, não encontrei o produto ${a} você tem?`,target:"_blank",children:g.jsx(w4,{children:"Clique aqui e fale diretamente comigo pelo WhatsApp"})})]}):o.map(h=>g.jsxs(f4,{children:[g.jsx(m4,{src:h.imageUrls[0],alt:h.title}),g.jsx(g4,{children:h.title}),g.jsx(y4,{children:h.subtitle}),g.jsx("a",{href:`produtos/${h.id}`,children:g.jsx(_4,{children:g.jsx("p",{children:"VER MAIS"})})})]},h.id))})})}const x4=O.button`
    margin-top: 2%;
    margin-left: 3%;
    padding: 10px;
    font-size: 15px;
    border-radius: 20px;
    background-color: #ab9680;
    border: 2px solid white;
    cursor: pointer;
    font-weight: bold;

    @media (max-width: 480px) {
        margin-top: 6%;
        margin-bottom: 6%;
    }

    &:hover {
        background-color: #7a6a54;
    }
`;function T4(){const[t,e]=P.useState(!1),n=()=>{e(r=>!r)};return g.jsxs(g.Fragment,{children:[g.jsx("title",{children:"Chocomel | Produtos"}),g.jsx(Ep,{onToggleCategory:n,isCategoryVisible:t}),t&&g.jsx(jm,{}),g.jsx("a",{href:"../",children:g.jsx(x4,{children:"Voltar"})}),g.jsx(E4,{}),g.jsx(Tp,{}),g.jsx(xp,{})]})}const S4=O.img`
    object-fit: cover;
    height: 500px;
    width: 500px;
    border-radius: 20px;

    @media (max-width: 480px) {
        width: 400px;
        height: 400px;
    }
`,I4=O.div`
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    border-radius: 20px;
    height: 500px;
    width: 500px;

    @media (max-width: 480px) {
        width: 400px;
        height: 400px;
    }
`,R4=O.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2%;
    margin-bottom: 3%;
    justify-content: center; 

    @media (max-width: 480px) {
        margin-top: 8%;
    }
`,P4=O.div`
    flex-direction: column;
    justify-content: space-between; 
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    width: 755px;
    padding: 20px;
    margin-left: 40px;
    background-color: #f5f5f5;
    border-radius: 20px;
    color: #2a1510;

    @media (max-width: 480px) {
        margin-top: 40px;
        margin-left: 0;
        margin-bottom: 40px;
    }

    h2 {
        font-family: 'Caveat', cursive;
        text-align: center;
        padding: 8px 15px 15px 15px;
        font-size: 50px;
    }

    .subtitle {
        padding: 8px 15px 15px 15px;
        font-size: 20px;
        text-indent: 25px;
    }

    .description {
        padding: 8px 15px 15px 15px; 
        font-size: 20px;
        text-align: justify;
        line-height: 1.3;
        text-indent: 25px;
    }

    .category{
        padding: 5px 15px 15px 15px; 
        display: flex;
        justify-content: center;
        font-size: 18px;  
        margin-right: 20px;     
    }    

    .category2{
        margin-left: 20px;
    }
    
    .name {
        margin-top: 2%;
    }

    a {
        text-decoration: none;
        color: #2a1510;
    }
`,C4=O.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 5px;
    margin-bottom: 10px;
    

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        padding: 5px;
        border: 2px solid white; 
        cursor: pointer;
        border-radius: 20px;
        margin-bottom: 10px;

        
        &:hover {
            background-color: #c0c0c0;
        }
    }

    img {
        width: 25px;
    }

    p {
        font-size: 16px;
        margin-left: 10px;
        font-weight: bold;
    }
`,A4=O.button`
    margin-top: 2%;
    margin-left: 3%;
    padding: 10px;
    font-size: 15px;
    border-radius: 20px;
    background-color: #ab9680;
    border: 2px solid white;
    cursor: pointer;
    font-weight: bold;

    @media (max-width: 480px) {
        margin-top: 10%;
    }

    &:hover {
        background-color: #7a6a54;
    }
`;function k4(){const{id:t}=kI(),[e,n]=P.useState(null),[r,i]=P.useState(!1),o=()=>{i(s=>!s)};return P.useEffect(()=>{(async()=>{try{const a=Eo(jn,"products",t),l=await JO(a);l.exists()?n({id:l.id,...l.data()}):(console.log("Produto não encontrado"),n(null))}catch(a){console.error("Erro ao buscar os detalhes do produto:",a)}})()},[t]),e?g.jsxs(g.Fragment,{children:[g.jsx(Ep,{onToggleCategory:o,isCategoryVisible:r}),r&&g.jsx(jm,{}),g.jsx("a",{href:"/produtos",children:g.jsx(A4,{children:"Voltar"})}),g.jsxs("div",{children:[g.jsxs("title",{children:["Chocomel | ",e.title]}),g.jsxs(R4,{children:[g.jsx(I4,{children:g.jsx(Mp.Carousel,{showThumbs:!1,children:e.imageUrls.map((s,a)=>s?g.jsx(S4,{src:s,alt:e.title},a):null)})}),g.jsxs(P4,{children:[g.jsx("h2",{children:e.title}),g.jsx("p",{className:"name",children:"Categorias: "}),g.jsxs("div",{className:"category",children:[g.jsx("a",{children:g.jsx("p",{className:"category1",children:e.category})}),g.jsx("a",{children:g.jsx("p",{className:"category2",children:e.category2})})]}),g.jsx("p",{className:"name",children:"Subtítulo: "}),g.jsx("p",{className:"subtitle",children:e.subtitle}),g.jsx("p",{className:"name",children:"Descrição: "}),g.jsx("p",{className:"description",children:e.description}),g.jsx(C4,{href:`https://api.whatsapp.com/send?phone=5511945455177&text=Olá, gostaria de encomendar o produto ${e.title}!`,target:"_blank",children:g.jsxs("button",{children:[g.jsx("img",{src:$m}),g.jsx("p",{children:"Encomendar"})]})})]})]}),g.jsx(Tp,{})]},e.id),g.jsx(xp,{})]}):g.jsx("p",{children:"Carregando..."})}function b4(){return g.jsx(KI,{children:g.jsx(TN,{children:g.jsxs(HI,{children:[g.jsx(Wr,{path:"./",element:g.jsx(xN,{})}),g.jsx(Wr,{path:"./login",element:g.jsx(AN,{})}),g.jsx(Wr,{path:"./controlpanel",element:g.jsx(l4,{component:a4})}),g.jsx(Wr,{path:"*",element:g.jsx(d4,{})}),g.jsx(Wr,{path:"./produtos",element:g.jsx(T4,{})}),g.jsx(Wr,{path:"./produtos/:id",element:g.jsx(k4,{})})]})})})}function D4(){return g.jsx(g.Fragment,{children:g.jsx(b4,{})})}Oh.createRoot(document.getElementById("root")).render(g.jsx(ai.StrictMode,{children:g.jsx(D4,{})}));
