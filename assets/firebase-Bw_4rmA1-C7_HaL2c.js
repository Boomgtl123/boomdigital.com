const Uh=()=>{};var ya={};/**
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
*/const Bc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Fh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,p=o>>2,v=(o&3)<<4|l>>4;let C=(l&15)<<2|f>>6,k=f&63;h||(k=64,a||(C=64)),r.push(e[p],e[v],e[C],e[k])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Bc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Fh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||a==null||l==null||h==null)throw new jh;const f=o<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bh=function(n){const t=Bc(n);return qc.encodeByteArray(t,!0)},Fr=function(n){return Bh(n).replace(/\./g,"")},zc=function(n){try{return qc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
*/function qh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const zh=()=>qh().__FIREBASE_DEFAULTS__,$h=()=>{if(typeof process>"u"||typeof ya>"u")return;const n=ya.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&zc(n[1]);return t&&JSON.parse(t)},is=()=>{try{return Uh()||zh()||$h()||Hh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$c=n=>{var t,e;return(e=(t=is())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Gh=n=>{const t=$c(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Hc=()=>{var n;return(n=is())==null?void 0:n.config},Gc=n=>{var t;return(t=is())==null?void 0:t[`_${n}`]};/**
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
*/class Kh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
* @license
* Copyright 2025 Google LLC
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
*/function cn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
*/function Wh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fr(JSON.stringify(e)),Fr(JSON.stringify(a)),""].join(".")}const Mn={};function Qh(){const n={prod:[],emulator:[]};for(const t of Object.keys(Mn))Mn[t]?n.emulator.push(t):n.prod.push(t);return n}function Jh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let va=!1;function Wc(n,t){if(typeof window>"u"||typeof document>"u"||!cn(window.location.host)||Mn[n]===t||Mn[n]||va)return;Mn[n]=t;function e(v){return`__firebase__banner__${v}`}const r="__firebase__banner",s=Qh().prod.length>0;function o(){const v=document.getElementById(r);v&&v.remove()}function a(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,C){v.setAttribute("width","24"),v.setAttribute("id",C),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{va=!0,o()},v}function f(v,C){v.setAttribute("id",C),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function p(){const v=Jh(r),C=e("text"),k=document.getElementById(C)||document.createElement("span"),D=e("learnmore"),L=document.getElementById(D)||document.createElement("a"),O=e("preprendIcon"),$=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const K=v.element;a(K),f(L,D);const ot=h();l($,O),K.append($,k,L,ot),document.body.appendChild(K)}s?(k.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
*/function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Yh(){var n;const t=(n=is())==null?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function td(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ed(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nd(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rd(){return!Yh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sd(){try{return typeof indexedDB=="object"}catch{return!1}}function id(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
*/const od="FirebaseError";class Xt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=od,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?ad(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Xt(s,l,r)}}function ad(n,t){return n.replace(cd,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const cd=/\{\$([^}]+)}/g;function ud(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function De(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(wa(o)&&wa(a)){if(!De(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function wa(n){return n!==null&&typeof n=="object"}/**
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
*/function Zn(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ld(n,t){const e=new hd(n,t);return e.subscribe.bind(e)}class hd{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");dd(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=$s),s.error===void 0&&(s.error=$s),s.complete===void 0&&(s.complete=$s);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dd(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function $s(){}/**
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
*/function jt(n){return n&&n._delegate?n._delegate:n}class Oe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
*/const Ae="[DEFAULT]";/**
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
*/class fd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Kh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(gd(t))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ae){return this.instances.has(t)}getOptions(t=Ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ae){return this.component?this.component.multipleInstances?t:Ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pd(n){return n===Ae?void 0:n}function gd(n){return n.instantiationMode==="EAGER"}/**
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
*/class md{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new fd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const yd={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},vd=B.INFO,wd={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},bd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=wd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ci{constructor(t){this.name=t,this._logLevel=vd,this._logHandler=bd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Id=(n,t)=>t.some(e=>n instanceof e);let ba,Ia;function _d(){return ba||(ba=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Td(){return Ia||(Ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qc=new WeakMap,ni=new WeakMap,Jc=new WeakMap,Hs=new WeakMap,Ai=new WeakMap;function Ed(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(he(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Qc.set(e,n)}).catch(()=>{}),Ai.set(t,n),t}function Sd(n){if(ni.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ni.set(n,t)}let ri={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ni.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Jc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return he(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Cd(n){ri=n(ri)}function Ad(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Gs(this),t,...e);return Jc.set(r,t.sort?t.sort():[t]),he(r)}:Td().includes(n)?function(...t){return n.apply(Gs(this),t),he(Qc.get(this))}:function(...t){return he(n.apply(Gs(this),t))}}function kd(n){return typeof n=="function"?Ad(n):(n instanceof IDBTransaction&&Sd(n),Id(n,_d())?new Proxy(n,ri):n)}function he(n){if(n instanceof IDBRequest)return Ed(n);if(Hs.has(n))return Hs.get(n);const t=kd(n);return t!==n&&(Hs.set(n,t),Ai.set(t,n)),t}const Gs=n=>Ai.get(n);function Nd(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=he(a);return r&&a.addEventListener("upgradeneeded",h=>{r(he(a.result),h.oldVersion,h.newVersion,he(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Rd=["get","getKey","getAll","getAllKeys","count"],Dd=["put","add","delete","clear"],Ks=new Map;function _a(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ks.get(t))return Ks.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Dd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Rd.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return Ks.set(t,o),o}Cd(n=>({...n,get:(t,e,r)=>_a(t,e)||n.get(t,e,r),has:(t,e)=>!!_a(t,e)||n.has(t,e)}));/**
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
*/class Od{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pd(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}else return null}).filter(t=>t).join(" ")}}function Pd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const si="@firebase/app",Ta="0.14.4";/**
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
*/const Gt=new Ci("@firebase/app"),Ld="@firebase/app-compat",Md="@firebase/analytics-compat",xd="@firebase/analytics",Vd="@firebase/app-check-compat",Ud="@firebase/app-check",Fd="@firebase/auth",jd="@firebase/auth-compat",Bd="@firebase/database",qd="@firebase/data-connect",zd="@firebase/database-compat",$d="@firebase/functions",Hd="@firebase/functions-compat",Gd="@firebase/installations",Kd="@firebase/installations-compat",Wd="@firebase/messaging",Qd="@firebase/messaging-compat",Jd="@firebase/performance",Xd="@firebase/performance-compat",Yd="@firebase/remote-config",Zd="@firebase/remote-config-compat",tf="@firebase/storage",ef="@firebase/storage-compat",nf="@firebase/firestore",rf="@firebase/ai",sf="@firebase/firestore-compat",of="firebase",af="12.4.0";/**
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
*/const ii="[DEFAULT]",cf={[si]:"fire-core",[Ld]:"fire-core-compat",[xd]:"fire-analytics",[Md]:"fire-analytics-compat",[Ud]:"fire-app-check",[Vd]:"fire-app-check-compat",[Fd]:"fire-auth",[jd]:"fire-auth-compat",[Bd]:"fire-rtdb",[qd]:"fire-data-connect",[zd]:"fire-rtdb-compat",[$d]:"fire-fn",[Hd]:"fire-fn-compat",[Gd]:"fire-iid",[Kd]:"fire-iid-compat",[Wd]:"fire-fcm",[Qd]:"fire-fcm-compat",[Jd]:"fire-perf",[Xd]:"fire-perf-compat",[Yd]:"fire-rc",[Zd]:"fire-rc-compat",[tf]:"fire-gcs",[ef]:"fire-gcs-compat",[nf]:"fire-fst",[sf]:"fire-fst-compat",[rf]:"fire-vertex","fire-js":"fire-js",[of]:"fire-js-all"};/**
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
*/const jr=new Map,uf=new Map,oi=new Map;function Ea(n,t){try{n.container.addComponent(t)}catch(e){Gt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ze(n){const t=n.name;if(oi.has(t))return Gt.debug(`There were multiple attempts to register component ${t}.`),!1;oi.set(t,n);for(const e of jr.values())Ea(e,n);for(const e of uf.values())Ea(e,n);return!0}function ki(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Pt(n){return n==null?!1:n.settings!==void 0}/**
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
*/const lf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},de=new Yn("app","Firebase",lf);/**
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
*/class hf{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}/**
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
*/const un=af;function Xc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:ii,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw de.create("bad-app-name",{appName:String(s)});if(e||(e=Hc()),!e)throw de.create("no-options");const o=jr.get(s);if(o){if(De(e,o.options)&&De(r,o.config))return o;throw de.create("duplicate-app",{appName:s})}const a=new md(s);for(const h of oi.values())a.addComponent(h);const l=new hf(e,r,a);return jr.set(s,l),l}function Yc(n=ii){const t=jr.get(n);if(!t&&n===ii&&Hc())return Xc();if(!t)throw de.create("no-app",{appName:n});return t}function fe(n,t,e){let r=cf[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}Ze(new Oe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
*/const df="firebase-heartbeat-database",ff=1,qn="firebase-heartbeat-store";let Ws=null;function Zc(){return Ws||(Ws=Nd(df,ff,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(qn)}catch(e){console.warn(e)}}}}).catch(n=>{throw de.create("idb-open",{originalErrorMessage:n.message})})),Ws}async function pf(n){try{const t=(await Zc()).transaction(qn),e=await t.objectStore(qn).get(tu(n));return await t.done,e}catch(t){if(t instanceof Xt)Gt.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gt.warn(e.message)}}}async function Sa(n,t){try{const e=(await Zc()).transaction(qn,"readwrite");await e.objectStore(qn).put(t,tu(n)),await e.done}catch(e){if(e instanceof Xt)Gt.warn(e.message);else{const r=de.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(r.message)}}}function tu(n){return`${n.name}!${n.options.appId}`}/**
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
*/const gf=1024,mf=30;class yf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new wf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ca();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>mf){const o=bf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ca(),{heartbeatsToSend:r,unsentEntries:s}=vf(this._heartbeatsCache.heartbeats),o=Fr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Gt.warn(e),""}}}function Ca(){return new Date().toISOString().substring(0,10)}function vf(n,t=gf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Aa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Aa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class wf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Sa(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Sa(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}else return}}function Aa(n){return Fr(JSON.stringify({version:2,heartbeats:n})).length}function bf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
*/function If(n){Ze(new Oe("platform-logger",t=>new Od(t),"PRIVATE")),Ze(new Oe("heartbeat",t=>new yf(t),"PRIVATE")),fe(si,Ta,n),fe(si,Ta,"esm2020"),fe("fire-js","")}If("");var _f="firebase",Tf="12.4.0";/**
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
*/fe(_f,Tf,"app");function eu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ef=eu,nu=new Yn("auth","Firebase",eu());/**
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
*/const Br=new Ci("@firebase/auth");function Sf(n,...t){Br.logLevel<=B.WARN&&Br.warn(`Auth (${un}): ${n}`,...t)}function Nr(n,...t){Br.logLevel<=B.ERROR&&Br.error(`Auth (${un}): ${n}`,...t)}/**
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
*/function Kt(n,...t){throw Ni(n,...t)}function Lt(n,...t){return Ni(n,...t)}function ru(n,t,e){const r={...Ef(),[t]:e};return new Yn("auth","Firebase",r).create(t,{appName:n.name})}function Ne(n){return ru(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ni(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return nu.create(n,...t)}function V(n,t,...e){if(!n)throw Ni(t,...e)}function zt(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Nr(t),new Error(t)}function Wt(n,t){n||zt(t)}/**
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
*/function ai(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Cf(){return ka()==="http:"||ka()==="https:"}function ka(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
*/function Af(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cf()||td()||"connection"in navigator)?navigator.onLine:!0}function kf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
*/class tr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Wt(e>t,"Short delay should be less than long delay!"),this.isMobile=Xh()||ed()}get(){return Af()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Ri(n,t){Wt(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
*/class su{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const Nf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const Rf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Df=new tr(3e4,6e4);function Di(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function ln(n,t,e,r,s={}){return iu(n,s,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=Zn({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:t,headers:h,...o};return Zh()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&cn(n.emulatorConfig.host)&&(f.credentials="include"),su.fetch()(await ou(n,n.config.apiHost,e,l),f)})}async function iu(n,t,e){n._canInitEmulator=!1;const r={...Nf,...t};try{const s=new Pf(n),o=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Tr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Tr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Tr(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw ru(n,p,f);Kt(n,p)}}catch(s){if(s instanceof Xt)throw s;Kt(n,"network-request-failed",{message:String(s)})}}async function Of(n,t,e,r,s={}){const o=await ln(n,t,e,r,s);return"mfaPendingCredential"in o&&Kt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function ou(n,t,e,r){const s=`${t}${e}?${r}`,o=n,a=o.config.emulator?Ri(n.config,s):`${n.config.apiScheme}://${s}`;return Rf.includes(e)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Pf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),Df.get())})}}function Tr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=Lt(n,t,r);return s.customData._tokenResponse=e,s}/**
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
*/async function Lf(n,t){return ln(n,"POST","/v1/accounts:delete",t)}async function qr(n,t){return ln(n,"POST","/v1/accounts:lookup",t)}/**
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
*/function xn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Mf(n,t=!1){const e=jt(n),r=await e.getIdToken(t),s=Oi(r);V(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:xn(Qs(s.auth_time)),issuedAtTime:xn(Qs(s.iat)),expirationTime:xn(Qs(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Qs(n){return Number(n)*1e3}function Oi(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=zc(e);return s?JSON.parse(s):(Nr("Failed to decode base64 JWT payload"),null)}catch(s){return Nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Na(n){const t=Oi(n);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
*/async function zn(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Xt&&xf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
*/class Vf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class ci{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=xn(this.lastLoginAt),this.creationTime=xn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function zr(n){var t;const e=n.auth,r=await n.getIdToken(),s=await zn(n,qr(e,{idToken:r}));V(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=(t=o.providerUserInfo)!=null&&t.length?au(o.providerUserInfo):[],l=Ff(n.providerData,a),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),p=h?f:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ci(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,v)}async function Uf(n){const t=jt(n);await zr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ff(n,t){return[...n.filter(e=>!t.some(r=>r.providerId===e.providerId)),...t]}function au(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
*/async function jf(n,t){const e=await iu(n,{},async()=>{const r=Zn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await ou(n,s,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&cn(n.emulatorConfig.host)&&(h.credentials="include"),su.fetch()(a,h)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Bf(n,t){return ln(n,"POST","/v2/accounts:revokeToken",Di(n,t))}/**
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
*/class Qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Na(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){V(t.length!==0,"internal-error");const e=Na(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:o}=await jf(t,e);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:o}=e,a=new Qe;return r&&(V(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),o&&(V(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Qe,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
*/function se(n,t){V(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class kt{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Vf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ci(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await zn(this,this.stsTokenManager.getToken(this.auth,t));return V(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Mf(this,t)}reload(){return Uf(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new kt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await zr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(Ne(this.auth));const t=await this.getIdToken();return await zn(this,Lf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,o=e.phoneNumber??void 0,a=e.photoURL??void 0,l=e.tenantId??void 0,h=e._redirectEventId??void 0,f=e.createdAt??void 0,p=e.lastLoginAt??void 0,{uid:v,emailVerified:C,isAnonymous:k,providerData:D,stsTokenManager:L}=e;V(v&&L,t,"internal-error");const O=Qe.fromJSON(this.name,L);V(typeof v=="string",t,"internal-error"),se(r,t.name),se(s,t.name),V(typeof C=="boolean",t,"internal-error"),V(typeof k=="boolean",t,"internal-error"),se(o,t.name),se(a,t.name),se(l,t.name),se(h,t.name),se(f,t.name),se(p,t.name);const $=new kt({uid:v,auth:t,email:s,emailVerified:C,displayName:r,isAnonymous:k,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:O,createdAt:f,lastLoginAt:p});return D&&Array.isArray(D)&&($.providerData=D.map(K=>({...K}))),h&&($._redirectEventId=h),$}static async _fromIdTokenResponse(t,e,r=!1){const s=new Qe;s.updateFromServerResponse(e);const o=new kt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await zr(o),o}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];V(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?au(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),l=new Qe;l.updateFromIdToken(r);const h=new kt({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ci(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
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
*/const Ra=new Map;function $t(n){Wt(n instanceof Function,"Expected a class definition");let t=Ra.get(n);return t?(Wt(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ra.set(n,t),t)}/**
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
*/class cu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}cu.type="NONE";const Da=cu;/**
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
*/function Rr(n,t,e){return`firebase:${n}:${t}:${e}`}class Je{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Rr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Rr("persistence",s.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await qr(this.auth,{idToken:t}).catch(()=>{});return e?kt._fromGetAccountInfoResponse(this.auth,e,t):null}return kt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Je($t(Da),t,r);const s=(await Promise.all(e.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||$t(Da);const a=Rr(r,t.config.apiKey,t.name);let l=null;for(const f of e)try{const p=await f._get(a);if(p){let v;if(typeof p=="string"){const C=await qr(t,{idToken:p}).catch(()=>{});if(!C)break;v=await kt._fromGetAccountInfoResponse(t,C,p)}else v=kt._fromJSON(t,p);f!==o&&(l=v),o=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Je(o,t,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(e.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Je(o,t,r))}}/**
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
*/function Oa(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(du(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(uu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pu(t))return"Blackberry";if(gu(t))return"Webos";if(lu(t))return"Safari";if((t.includes("chrome/")||hu(t))&&!t.includes("edge/"))return"Chrome";if(fu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uu(n=wt()){return/firefox\//i.test(n)}function lu(n=wt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hu(n=wt()){return/crios\//i.test(n)}function du(n=wt()){return/iemobile/i.test(n)}function fu(n=wt()){return/android/i.test(n)}function pu(n=wt()){return/blackberry/i.test(n)}function gu(n=wt()){return/webos/i.test(n)}function Pi(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qf(n=wt()){var t;return Pi(n)&&!!((t=window.navigator)!=null&&t.standalone)}function zf(){return nd()&&document.documentMode===10}function mu(n=wt()){return Pi(n)||fu(n)||gu(n)||pu(n)||/windows phone/i.test(n)||du(n)}/**
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
*/function yu(n,t=[]){let e;switch(n){case"Browser":e=Oa(wt());break;case"Worker":e=`${Oa(wt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${un}/${r}`}/**
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
*/class $f{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((a,l)=>{try{const h=t(o);a(h)}catch(h){l(h)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
*/async function Hf(n,t={}){return ln(n,"GET","/v2/passwordPolicy",Di(n,t))}/**
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
*/const Gf=6;class Kf{constructor(t){var e;const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??Gf,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((e=t.allowedNonAlphanumericCharacters)==null?void 0:e.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
*/class Wf{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pa(this),this.idTokenSubscription=new Pa(this),this.beforeStateQueue=new $f(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=$t(e)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await Je.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await qr(this,{idToken:t}),r=await kt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Pt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)==null?void 0:e._redirectEventId,l=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(t);(!a||a===l)&&h!=null&&h.user&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await zr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=kf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Pt(this.app))return Promise.reject(Ne(this));const e=t?jt(t):null;return e&&V(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Pt(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Hf(this),e=new Kf(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Yn("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bf(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&$t(t)||this._popupRedirectResolver;V(e,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[$t(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof e=="function"){const h=t.addObserver(e,r,s);return()=>{a=!0,h()}}else{const h=t.addObserver(e);return()=>{a=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Sf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Li(n){return jt(n)}class Pa{constructor(t){this.auth=t,this.observer=null,this.addObserver=ld(e=>this.observer=e)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qf(n){Mi=n}function Jf(n){return Mi.loadJS(n)}function Xf(){return Mi.gapiScript}function Yf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
*/function Zf(n,t){const e=ki(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),s=e.getOptions();if(De(s,t??{}))return r;Kt(r,"already-initialized")}return e.initialize({options:t})}function tp(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map($t);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function ep(n,t,e){const r=Li(n);V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,o=vu(t),{host:a,port:l}=np(t),h=l===null?"":`:${l}`,f={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){V(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),V(De(f,r.config.emulator)&&De(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,cn(a)?(Kc(`${o}//${a}${h}`),Wc("Auth",!0)):rp()}function vu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function np(n){const t=vu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:La(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:La(a)}}}function La(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function rp(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
*/class wu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return zt("not implemented")}_getIdTokenResponse(t){return zt("not implemented")}_linkToIdToken(t,e){return zt("not implemented")}_getReauthenticationResolver(t){return zt("not implemented")}}/**
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
*/async function Xe(n,t){return Of(n,"POST","/v1/accounts:signInWithIdp",Di(n,t))}/**
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
*/const sp="http://localhost";class Pe extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pe(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Kt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...o}=e;if(!r||!s)return null;const a=new Pe(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Xe(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Xe(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Xe(t,e)}buildRequest(){const t={requestUri:sp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Zn(e)}return t}}/**
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
*/class bu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
*/class er extends bu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
*/class oe extends er{constructor(){super("facebook.com")}static credential(t){return Pe._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return oe.credentialFromTaggedObject(t)}static credentialFromError(t){return oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return oe.credential(t.oauthAccessToken)}catch{return null}}}oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";oe.PROVIDER_ID="facebook.com";/**
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
*/class ae extends er{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pe._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ae.credentialFromTaggedObject(t)}static credentialFromError(t){return ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return ae.credential(e,r)}catch{return null}}}ae.GOOGLE_SIGN_IN_METHOD="google.com";ae.PROVIDER_ID="google.com";/**
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
*/class ce extends er{constructor(){super("github.com")}static credential(t){return Pe._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ce.credentialFromTaggedObject(t)}static credentialFromError(t){return ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ce.credential(t.oauthAccessToken)}catch{return null}}}ce.GITHUB_SIGN_IN_METHOD="github.com";ce.PROVIDER_ID="github.com";/**
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
*/class ue extends er{constructor(){super("twitter.com")}static credential(t,e){return Pe._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ue.credentialFromTaggedObject(t)}static credentialFromError(t){return ue.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return ue.credential(e,r)}catch{return null}}}ue.TWITTER_SIGN_IN_METHOD="twitter.com";ue.PROVIDER_ID="twitter.com";/**
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
*/class tn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const o=await kt._fromIdTokenResponse(t,r,s),a=Ma(r);return new tn({user:o,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Ma(r);return new tn({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Ma(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
*/class $r extends Xt{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$r.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new $r(t,e,r,s)}}function Iu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$r._fromErrorAndOperation(n,s,t,r):s})}async function ip(n,t,e=!1){const r=await zn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return tn._forOperation(n,"link",r)}/**
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
*/async function op(n,t,e=!1){const{auth:r}=n;if(Pt(r.app))return Promise.reject(Ne(r));const s="reauthenticate";try{const o=await zn(n,Iu(r,s,t,n),e);V(o.idToken,r,"internal-error");const a=Oi(o.idToken);V(a,r,"internal-error");const{sub:l}=a;return V(n.uid===l,r,"user-mismatch"),tn._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),o}}/**
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
*/async function ap(n,t,e=!1){if(Pt(n.app))return Promise.reject(Ne(n));const r="signIn",s=await Iu(n,r,t),o=await tn._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(o.user),o}function cp(n,t,e,r){return jt(n).onIdTokenChanged(t,e,r)}function up(n,t,e){return jt(n).beforeAuthStateChanged(t,e)}const Hr="__sak";/**
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
*/class _u{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const lp=1e3,hp=10;class Tu extends _u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);zf()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,hp):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Tu.type="LOCAL";const dp=Tu;/**
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
*/class Eu extends _u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Eu.type="SESSION";const Su=Eu;/**
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
*/function fp(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
*/class os{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new os(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:o}=e.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(e.origin,o)),h=await fp(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
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
*/function xi(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
*/class pp{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const f=xi("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(v){const C=v;if(C.data.eventId===f)switch(C.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(C.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:f,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
*/function Mt(){return window}function gp(n){Mt().location.href=n}/**
* @license
* Copyright 2020 Google LLC.
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
*/function Cu(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function mp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function vp(){return Cu()?self:null}/**
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
*/const Au="firebaseLocalStorageDb",wp=1,Gr="firebaseLocalStorage",ku="fbase_key";class nr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function as(n,t){return n.transaction([Gr],t?"readwrite":"readonly").objectStore(Gr)}function bp(){const n=indexedDB.deleteDatabase(Au);return new nr(n).toPromise()}function ui(){const n=indexedDB.open(Au,wp);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gr,{keyPath:ku})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gr)?t(r):(r.close(),await bp(),t(await ui()))})})}async function xa(n,t,e){const r=as(n,!0).put({[ku]:t,value:e});return new nr(r).toPromise()}async function Ip(n,t){const e=as(n,!1).get(t),r=await new nr(e).toPromise();return r===void 0?null:r.value}function Va(n,t){const e=as(n,!0).delete(t);return new nr(e).toPromise()}const _p=800,Tp=3;class Nu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ui(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Tp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(vp()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await mp(),!this.activeServiceWorker)return;this.sender=new pp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(t=r[0])!=null&&t.fulfilled&&(e=r[0])!=null&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||yp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ui();return await xa(t,Hr,"1"),await Va(t,Hr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>xa(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Ip(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Va(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const o=as(s,!1).getAll();return new nr(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:o}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nu.type="LOCAL";const Ep=Nu;new tr(3e4,6e4);/**
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
*/function Sp(n,t){return t?$t(t):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
*/class Vi extends wu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xe(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Xe(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Xe(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Cp(n){return ap(n.auth,new Vi(n),n.bypassAuthState)}function Ap(n){const{auth:t,user:e}=n;return V(e,t,"internal-error"),op(e,new Vi(n),n.bypassAuthState)}async function kp(n){const{auth:t,user:e}=n;return V(e,t,"internal-error"),ip(e,new Vi(n),n.bypassAuthState)}/**
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
*/class Ru{constructor(t,e,r,s,o=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:e,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Cp;case"linkViaPopup":case"linkViaRedirect":return kp;case"reauthViaPopup":case"reauthViaRedirect":return Ap;default:Kt(this.auth,"internal-error")}}resolve(t){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const Np=new tr(2e3,1e4);class We extends Ru{constructor(t,e,r,s,o){super(t,e,s,o),this.provider=r,this.authWindow=null,this.pollId=null,We.currentPopupAction&&We.currentPopupAction.cancel(),We.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const t=xi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,We.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Np.get())};t()}}We.currentPopupAction=null;/**
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
*/const Rp="pendingRedirect",Dr=new Map;class Dp extends Ru{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Dr.get(this.auth._key());if(!t){try{const e=await Op(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Dr.set(this.auth._key(),t)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Op(n,t){const e=Mp(t),r=Lp(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function Pp(n,t){Dr.set(n._key(),t)}function Lp(n){return $t(n._redirectPersistence)}function Mp(n){return Rr(Rp,n.config.apiKey,n.name)}async function xp(n,t,e=!1){if(Pt(n.app))return Promise.reject(Ne(n));const r=Li(n),s=Sp(r,t),o=await new Dp(r,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
*/const Vp=10*60*1e3;class Up{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Fp(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Du(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(Lt(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Vp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ua(t))}saveEventToCache(t){this.cachedEventUids.add(Ua(t)),this.lastProcessedEventTime=Date.now()}}function Ua(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Du({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Fp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Du(n);default:return!1}}/**
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
*/async function jp(n,t={}){return ln(n,"GET","/v1/projects",t)}/**
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
*/const Bp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qp=/^https?/;async function zp(n){if(n.config.emulator)return;const{authorizedDomains:t}=await jp(n);for(const e of t)try{if($p(e))return}catch{}Kt(n,"unauthorized-domain")}function $p(n){const t=ai(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!qp.test(e))return!1;if(Bp.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
* @license
* Copyright 2020 Google LLC.
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
*/const Hp=new tr(3e4,6e4);function Fa(){const n=Mt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Gp(n){return new Promise((t,e)=>{var r,s,o;function a(){Fa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fa(),e(Lt(n,"network-request-failed"))},timeout:Hp.get()})}if((s=(r=Mt().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)a();else{const l=Yf("iframefcb");return Mt()[l]=()=>{gapi.load?a():e(Lt(n,"network-request-failed"))},Jf(`${Xf()}?onload=${l}`).catch(h=>e(h))}}).catch(t=>{throw Or=null,t})}let Or=null;function Kp(n){return Or=Or||Gp(n),Or}/**
* @license
* Copyright 2020 Google LLC.
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
*/const Wp=new tr(5e3,15e3),Qp="__/auth/iframe",Jp="emulator/auth/iframe",Xp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zp(n){const t=n.config;V(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Ri(t,Jp):`https://${n.config.authDomain}/${Qp}`,r={apiKey:t.apiKey,appName:n.name,v:un},s=Yp.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${e}?${Zn(r).slice(1)}`}async function tg(n){const t=await Kp(n),e=Mt().gapi;return V(e,n,"internal-error"),t.open({where:document.body,url:Zp(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xp,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Lt(n,"network-request-failed"),l=Mt().setTimeout(()=>{o(a)},Wp.get());function h(){Mt().clearTimeout(l),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
* @license
* Copyright 2020 Google LLC.
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
*/const eg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ng=500,rg=600,sg="_blank",ig="http://localhost";class ja{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function og(n,t,e,r=ng,s=rg){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...eg,width:r.toString(),height:s.toString(),top:o,left:a},f=wt().toLowerCase();e&&(l=hu(f)?sg:e),uu(f)&&(t=t||ig,h.scrollbars="yes");const p=Object.entries(h).reduce((C,[k,D])=>`${C}${k}=${D},`,"");if(qf(f)&&l!=="_self")return ag(t||"",l),new ja(null);const v=window.open(t||"",l,p);V(v,n,"popup-blocked");try{v.focus()}catch{}return new ja(v)}function ag(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
*/const cg="__/auth/handler",ug="emulator/auth/handler",lg=encodeURIComponent("fac");async function Ba(n,t,e,r,s,o){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:un,eventId:s};if(t instanceof bu){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",ud(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,v]of Object.entries({}))a[p]=v}if(t instanceof er){const p=t.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await n._getAppCheckToken(),f=h?`#${lg}=${encodeURIComponent(h)}`:"";return`${hg(n)}?${Zn(l).slice(1)}${f}`}function hg({config:n}){return n.emulator?Ri(n,ug):`https://${n.authDomain}/${cg}`}/**
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
*/const Js="webStorageSupport";class dg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Su,this._completeRedirectFn=xp,this._overrideRedirectResult=Pp}async _openPopup(t,e,r,s){var o;Wt((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Ba(t,e,r,ai(),s);return og(t,a,xi())}async _openRedirect(t,e,r,s){await this._originValidation(t);const o=await Ba(t,e,r,ai(),s);return gp(o),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:o}=this.eventManagers[e];return s?Promise.resolve(s):(Wt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await tg(t),r=new Up(t);return e.register("authEvent",s=>(V(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Js,{type:Js},r=>{var s;const o=(s=r==null?void 0:r[0])==null?void 0:s[Js];o!==void 0&&e(!!o),Kt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=zp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return mu()||lu()||Pi()}}const fg=dg;var qa="@firebase/auth",za="1.11.0";/**
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
*/class pg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function gg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mg(n){Ze(new Oe("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yu(n)},f=new Wf(r,s,o,h);return tp(f,e),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Ze(new Oe("auth-internal",t=>{const e=Li(t.getProvider("auth").getImmediate());return(r=>new pg(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),fe(qa,za,gg(n)),fe(qa,za,"esm2020")}/**
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
*/const yg=5*60,vg=Gc("authIdTokenMaxAge")||yg;let $a=null;const wg=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>vg)return;const s=e==null?void 0:e.token;$a!==s&&($a=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bg(n=Yc()){const t=ki(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Zf(n,{popupRedirectResolver:fg,persistence:[Ep,dp,Su]}),r=Gc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=wg(o.toString());up(e,a,()=>a(e.currentUser)),cp(e,l=>a(l))}}const s=$c("auth");return s&&ep(e,`http://${s}`),e}function Ig(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Qf({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const o=Lt("internal-error");o.customData=s,e(o)},r.type="text/javascript",r.charset="UTF-8",Ig().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mg("Browser");var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pe,Ou;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,g){function y(){}y.prototype=g.prototype,b.F=g.prototype,b.prototype=new y,b.prototype.constructor=b,b.D=function(I,w,T){for(var m=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)m[Tt-2]=arguments[Tt];return g.prototype[w].apply(I,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,y){y||(y=0);const I=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)I[w]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(w=0;w<16;++w)I[w]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=b.g[0],y=b.g[1],w=b.g[2];let T=b.g[3],m;m=g+(T^y&(w^T))+I[0]+3614090360&4294967295,g=y+(m<<7&4294967295|m>>>25),m=T+(w^g&(y^w))+I[1]+3905402710&4294967295,T=g+(m<<12&4294967295|m>>>20),m=w+(y^T&(g^y))+I[2]+606105819&4294967295,w=T+(m<<17&4294967295|m>>>15),m=y+(g^w&(T^g))+I[3]+3250441966&4294967295,y=w+(m<<22&4294967295|m>>>10),m=g+(T^y&(w^T))+I[4]+4118548399&4294967295,g=y+(m<<7&4294967295|m>>>25),m=T+(w^g&(y^w))+I[5]+1200080426&4294967295,T=g+(m<<12&4294967295|m>>>20),m=w+(y^T&(g^y))+I[6]+2821735955&4294967295,w=T+(m<<17&4294967295|m>>>15),m=y+(g^w&(T^g))+I[7]+4249261313&4294967295,y=w+(m<<22&4294967295|m>>>10),m=g+(T^y&(w^T))+I[8]+1770035416&4294967295,g=y+(m<<7&4294967295|m>>>25),m=T+(w^g&(y^w))+I[9]+2336552879&4294967295,T=g+(m<<12&4294967295|m>>>20),m=w+(y^T&(g^y))+I[10]+4294925233&4294967295,w=T+(m<<17&4294967295|m>>>15),m=y+(g^w&(T^g))+I[11]+2304563134&4294967295,y=w+(m<<22&4294967295|m>>>10),m=g+(T^y&(w^T))+I[12]+1804603682&4294967295,g=y+(m<<7&4294967295|m>>>25),m=T+(w^g&(y^w))+I[13]+4254626195&4294967295,T=g+(m<<12&4294967295|m>>>20),m=w+(y^T&(g^y))+I[14]+2792965006&4294967295,w=T+(m<<17&4294967295|m>>>15),m=y+(g^w&(T^g))+I[15]+1236535329&4294967295,y=w+(m<<22&4294967295|m>>>10),m=g+(w^T&(y^w))+I[1]+4129170786&4294967295,g=y+(m<<5&4294967295|m>>>27),m=T+(y^w&(g^y))+I[6]+3225465664&4294967295,T=g+(m<<9&4294967295|m>>>23),m=w+(g^y&(T^g))+I[11]+643717713&4294967295,w=T+(m<<14&4294967295|m>>>18),m=y+(T^g&(w^T))+I[0]+3921069994&4294967295,y=w+(m<<20&4294967295|m>>>12),m=g+(w^T&(y^w))+I[5]+3593408605&4294967295,g=y+(m<<5&4294967295|m>>>27),m=T+(y^w&(g^y))+I[10]+38016083&4294967295,T=g+(m<<9&4294967295|m>>>23),m=w+(g^y&(T^g))+I[15]+3634488961&4294967295,w=T+(m<<14&4294967295|m>>>18),m=y+(T^g&(w^T))+I[4]+3889429448&4294967295,y=w+(m<<20&4294967295|m>>>12),m=g+(w^T&(y^w))+I[9]+568446438&4294967295,g=y+(m<<5&4294967295|m>>>27),m=T+(y^w&(g^y))+I[14]+3275163606&4294967295,T=g+(m<<9&4294967295|m>>>23),m=w+(g^y&(T^g))+I[3]+4107603335&4294967295,w=T+(m<<14&4294967295|m>>>18),m=y+(T^g&(w^T))+I[8]+1163531501&4294967295,y=w+(m<<20&4294967295|m>>>12),m=g+(w^T&(y^w))+I[13]+2850285829&4294967295,g=y+(m<<5&4294967295|m>>>27),m=T+(y^w&(g^y))+I[2]+4243563512&4294967295,T=g+(m<<9&4294967295|m>>>23),m=w+(g^y&(T^g))+I[7]+1735328473&4294967295,w=T+(m<<14&4294967295|m>>>18),m=y+(T^g&(w^T))+I[12]+2368359562&4294967295,y=w+(m<<20&4294967295|m>>>12),m=g+(y^w^T)+I[5]+4294588738&4294967295,g=y+(m<<4&4294967295|m>>>28),m=T+(g^y^w)+I[8]+2272392833&4294967295,T=g+(m<<11&4294967295|m>>>21),m=w+(T^g^y)+I[11]+1839030562&4294967295,w=T+(m<<16&4294967295|m>>>16),m=y+(w^T^g)+I[14]+4259657740&4294967295,y=w+(m<<23&4294967295|m>>>9),m=g+(y^w^T)+I[1]+2763975236&4294967295,g=y+(m<<4&4294967295|m>>>28),m=T+(g^y^w)+I[4]+1272893353&4294967295,T=g+(m<<11&4294967295|m>>>21),m=w+(T^g^y)+I[7]+4139469664&4294967295,w=T+(m<<16&4294967295|m>>>16),m=y+(w^T^g)+I[10]+3200236656&4294967295,y=w+(m<<23&4294967295|m>>>9),m=g+(y^w^T)+I[13]+681279174&4294967295,g=y+(m<<4&4294967295|m>>>28),m=T+(g^y^w)+I[0]+3936430074&4294967295,T=g+(m<<11&4294967295|m>>>21),m=w+(T^g^y)+I[3]+3572445317&4294967295,w=T+(m<<16&4294967295|m>>>16),m=y+(w^T^g)+I[6]+76029189&4294967295,y=w+(m<<23&4294967295|m>>>9),m=g+(y^w^T)+I[9]+3654602809&4294967295,g=y+(m<<4&4294967295|m>>>28),m=T+(g^y^w)+I[12]+3873151461&4294967295,T=g+(m<<11&4294967295|m>>>21),m=w+(T^g^y)+I[15]+530742520&4294967295,w=T+(m<<16&4294967295|m>>>16),m=y+(w^T^g)+I[2]+3299628645&4294967295,y=w+(m<<23&4294967295|m>>>9),m=g+(w^(y|~T))+I[0]+4096336452&4294967295,g=y+(m<<6&4294967295|m>>>26),m=T+(y^(g|~w))+I[7]+1126891415&4294967295,T=g+(m<<10&4294967295|m>>>22),m=w+(g^(T|~y))+I[14]+2878612391&4294967295,w=T+(m<<15&4294967295|m>>>17),m=y+(T^(w|~g))+I[5]+4237533241&4294967295,y=w+(m<<21&4294967295|m>>>11),m=g+(w^(y|~T))+I[12]+1700485571&4294967295,g=y+(m<<6&4294967295|m>>>26),m=T+(y^(g|~w))+I[3]+2399980690&4294967295,T=g+(m<<10&4294967295|m>>>22),m=w+(g^(T|~y))+I[10]+4293915773&4294967295,w=T+(m<<15&4294967295|m>>>17),m=y+(T^(w|~g))+I[1]+2240044497&4294967295,y=w+(m<<21&4294967295|m>>>11),m=g+(w^(y|~T))+I[8]+1873313359&4294967295,g=y+(m<<6&4294967295|m>>>26),m=T+(y^(g|~w))+I[15]+4264355552&4294967295,T=g+(m<<10&4294967295|m>>>22),m=w+(g^(T|~y))+I[6]+2734768916&4294967295,w=T+(m<<15&4294967295|m>>>17),m=y+(T^(w|~g))+I[13]+1309151649&4294967295,y=w+(m<<21&4294967295|m>>>11),m=g+(w^(y|~T))+I[4]+4149444226&4294967295,g=y+(m<<6&4294967295|m>>>26),m=T+(y^(g|~w))+I[11]+3174756917&4294967295,T=g+(m<<10&4294967295|m>>>22),m=w+(g^(T|~y))+I[2]+718787259&4294967295,w=T+(m<<15&4294967295|m>>>17),m=y+(T^(w|~g))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(w+(m<<21&4294967295|m>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.v=function(b,g){g===void 0&&(g=b.length);const y=g-this.blockSize,I=this.C;let w=this.h,T=0;for(;T<g;){if(w==0)for(;T<=y;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<g;)if(I[w++]=b.charCodeAt(T++),w==this.blockSize){s(this,I),w=0;break}}else for(;T<g;)if(I[w++]=b[T++],w==this.blockSize){s(this,I),w=0;break}}this.h=w,this.o+=g},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var y=b.length-8;y<b.length;++y)b[y]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)b[g++]=this.g[y]>>>I&255;return b};function o(b,g){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=g(b)}function a(b,g){this.h=g;const y=[];let I=!0;for(let w=b.length-1;w>=0;w--){const T=b[w]|0;I&&T==g||(y[w]=T,I=!1)}this.g=y}var l={};function h(b){return-128<=b&&b<128?o(b,function(g){return new a([g|0],g<0?-1:0)}):new a([b|0],b<0?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return v;if(b<0)return O(f(-b));const g=[];let y=1;for(let I=0;b>=y;I++)g[I]=b/y|0,y*=4294967296;return new a(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return O(p(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=f(Math.pow(g,8));let I=v;for(let T=0;T<b.length;T+=8){var w=Math.min(8,b.length-T);const m=parseInt(b.substring(T,T+w),g);w<8?(w=f(Math.pow(g,w)),I=I.j(w).add(f(m))):(I=I.j(y),I=I.add(f(m)))}return I}var v=h(0),C=h(1),k=h(16777216);n=a.prototype,n.m=function(){if(L(this))return-O(this).m();let b=0,g=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);b+=(I>=0?I:4294967296+I)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(L(this))return"-"+O(this).toString(b);const g=f(Math.pow(b,6));var y=this;let I="";for(;;){const w=pt(y,g).g;y=$(y,w.j(g));let T=((y.g.length>0?y.g[0]:y.h)>>>0).toString(b);if(y=w,D(y))return T+I;for(;T.length<6;)T="0"+T;I=T+I}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function L(b){return b.h==-1}n.l=function(b){return b=$(this,b),L(b)?-1:D(b)?0:1};function O(b){const g=b.g.length,y=[];for(let I=0;I<g;I++)y[I]=~b.g[I];return new a(y,~b.h).add(C)}n.abs=function(){return L(this)?O(this):this},n.add=function(b){const g=Math.max(this.g.length,b.g.length),y=[];let I=0;for(let w=0;w<=g;w++){let T=I+(this.i(w)&65535)+(b.i(w)&65535),m=(T>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);I=m>>>16,T&=65535,m&=65535,y[w]=m<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(b,g){return b.add(O(g))}n.j=function(b){if(D(this)||D(b))return v;if(L(this))return L(b)?O(this).j(O(b)):O(O(this).j(b));if(L(b))return O(this.j(O(b)));if(this.l(k)<0&&b.l(k)<0)return f(this.m()*b.m());const g=this.g.length+b.g.length,y=[];for(var I=0;I<2*g;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let w=0;w<b.g.length;w++){const T=this.i(I)>>>16,m=this.i(I)&65535,Tt=b.i(w)>>>16,_e=b.i(w)&65535;y[2*I+2*w]+=m*_e,K(y,2*I+2*w),y[2*I+2*w+1]+=T*_e,K(y,2*I+2*w+1),y[2*I+2*w+1]+=m*Tt,K(y,2*I+2*w+1),y[2*I+2*w+2]+=T*Tt,K(y,2*I+2*w+2)}for(b=0;b<g;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=g;b<2*g;b++)y[b]=0;return new a(y,0)};function K(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function ot(b,g){this.g=b,this.h=g}function pt(b,g){if(D(g))throw Error("division by zero");if(D(b))return new ot(v,v);if(L(b))return g=pt(O(b),g),new ot(O(g.g),O(g.h));if(L(g))return g=pt(b,O(g)),new ot(O(g.g),g.h);if(b.g.length>30){if(L(b)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var y=C,I=g;I.l(b)<=0;)y=_t(y),I=_t(I);var w=at(y,1),T=at(I,1);for(I=at(I,2),y=at(y,2);!D(I);){var m=T.add(I);m.l(b)<=0&&(w=w.add(y),T=m),I=at(I,1),y=at(y,1)}return g=$(b,w.j(g)),new ot(w,g)}for(w=v;b.l(g)>=0;){for(y=Math.max(1,Math.floor(b.m()/g.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),T=f(y),m=T.j(g);L(m)||m.l(b)>0;)y-=I,T=f(y),m=T.j(g);D(T)&&(T=C),w=w.add(T),b=$(b,m)}return new ot(w,b)}n.B=function(b){return pt(this,b).h},n.and=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)&b.i(I);return new a(y,this.h&b.h)},n.or=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)|b.i(I);return new a(y,this.h|b.h)},n.xor=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)^b.i(I);return new a(y,this.h^b.h)};function _t(b){const g=b.g.length+1,y=[];for(let I=0;I<g;I++)y[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(y,b.h)}function at(b,g){const y=g>>5;g%=32;const I=b.g.length-y,w=[];for(let T=0;T<I;T++)w[T]=g>0?b.i(T+y)>>>g|b.i(T+y+1)<<32-g:b.i(T+y);return new a(w,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ou=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,pe=a}).apply(typeof Ha<"u"?Ha:typeof self<"u"?self:typeof window<"u"?window:{});var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pu,Dn,Lu,Pr,li,Mu,xu,Vu;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Er=="object"&&Er];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var u=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var _=i[d];if(!(_ in u))break t;u=u[_]}i=i[i.length-1],d=u[i],c=c(d),c!=d&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&u.push([d,c[d]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function f(i,c,u){return f=h,f.apply(null,arguments)}function p(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function v(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(d,_,E){for(var N=Array(arguments.length-2),j=2;j<arguments.length;j++)N[j-2]=arguments[j];return c.prototype[_].apply(d,N)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function k(i){const c=i.length;if(c>0){const u=Array(c);for(let d=0;d<c;d++)u[d]=i[d];return u}return[]}function D(i,c){for(let d=1;d<arguments.length;d++){const _=arguments[d];var u=typeof _;if(u=u!="object"?u:_?Array.isArray(_)?"array":u:"null",u=="array"||u=="object"&&typeof _.length=="number"){u=i.length||0;const E=_.length||0;i.length=u+E;for(let N=0;N<E;N++)i[u+N]=_[N]}else i.push(_)}}class L{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(i){a.setTimeout(()=>{throw i},0)}function $(){var i=b;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class K{constructor(){this.h=this.g=null}add(c,u){const d=ot.get();d.set(c,u),this.h?this.h.next=d:this.g=d,this.h=d}}var ot=new L(()=>new pt,i=>i.reset());class pt{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,at=!1,b=new K,g=()=>{const i=Promise.resolve(void 0);_t=()=>{i.then(y)}};function y(){for(var i;i=$();){try{i.h.call(i.g)}catch(u){O(u)}var c=ot;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}at=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i}();function m(i){return/^[\s\xa0]*$/.test(i)}function Tt(i,c){w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}v(Tt,w),Tt.prototype.init=function(i,c){const u=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Tt.Z.h.call(this)},Tt.prototype.h=function(){Tt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var _e="closure_listenable_"+(Math.random()*1e6|0),oh=0;function ah(i,c,u,d,_){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!d,this.ha=_,this.key=++oh,this.da=this.fa=!1}function cr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ur(i,c,u){for(const d in i)c.call(u,i[d],d,i)}function ch(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function mo(i){const c={};for(const u in i)c[u]=i[u];return c}const yo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vo(i,c){let u,d;for(let _=1;_<arguments.length;_++){d=arguments[_];for(u in d)i[u]=d[u];for(let E=0;E<yo.length;E++)u=yo[E],Object.prototype.hasOwnProperty.call(d,u)&&(i[u]=d[u])}}function lr(i){this.src=i,this.g={},this.h=0}lr.prototype.add=function(i,c,u,d,_){const E=i.toString();i=this.g[E],i||(i=this.g[E]=[],this.h++);const N=Is(i,c,d,_);return N>-1?(c=i[N],u||(c.fa=!1)):(c=new ah(c,this.src,E,!!d,_),c.fa=u,i.push(c)),c};function bs(i,c){const u=c.type;if(u in i.g){var d=i.g[u],_=Array.prototype.indexOf.call(d,c,void 0),E;(E=_>=0)&&Array.prototype.splice.call(d,_,1),E&&(cr(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Is(i,c,u,d){for(let _=0;_<i.length;++_){const E=i[_];if(!E.da&&E.listener==c&&E.capture==!!u&&E.ha==d)return _}return-1}var _s="closure_lm_"+(Math.random()*1e6|0),Ts={};function wo(i,c,u,d,_){if(Array.isArray(c)){for(let E=0;E<c.length;E++)wo(i,c[E],u,d,_);return null}return u=_o(u),i&&i[_e]?i.J(c,u,l(d)?!!d.capture:!1,_):uh(i,c,u,!1,d,_)}function uh(i,c,u,d,_,E){if(!c)throw Error("Invalid event type");const N=l(_)?!!_.capture:!!_;let j=Ss(i);if(j||(i[_s]=j=new lr(i)),u=j.add(c,u,d,N,E),u.proxy)return u;if(d=lh(),u.proxy=d,d.src=i,d.listener=u,i.addEventListener)T||(_=N),_===void 0&&(_=!1),i.addEventListener(c.toString(),d,_);else if(i.attachEvent)i.attachEvent(Io(c.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function lh(){function i(u){return c.call(i.src,i.listener,u)}const c=hh;return i}function bo(i,c,u,d,_){if(Array.isArray(c))for(var E=0;E<c.length;E++)bo(i,c[E],u,d,_);else d=l(d)?!!d.capture:!!d,u=_o(u),i&&i[_e]?(i=i.i,E=String(c).toString(),E in i.g&&(c=i.g[E],u=Is(c,u,d,_),u>-1&&(cr(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[E],i.h--)))):i&&(i=Ss(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Is(c,u,d,_)),(u=i>-1?c[i]:null)&&Es(u))}function Es(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[_e])bs(c.i,i);else{var u=i.type,d=i.proxy;c.removeEventListener?c.removeEventListener(u,d,i.capture):c.detachEvent?c.detachEvent(Io(u),d):c.addListener&&c.removeListener&&c.removeListener(d),(u=Ss(c))?(bs(u,i),u.h==0&&(u.src=null,c[_s]=null)):cr(i)}}}function Io(i){return i in Ts?Ts[i]:Ts[i]="on"+i}function hh(i,c){if(i.da)i=!0;else{c=new Tt(c,this);const u=i.listener,d=i.ha||i.src;i.fa&&Es(i),i=u.call(d,c)}return i}function Ss(i){return i=i[_s],i instanceof lr?i:null}var Cs="__closure_events_fn_"+(Math.random()*1e9>>>0);function _o(i){return typeof i=="function"?i:(i[Cs]||(i[Cs]=function(c){return i.handleEvent(c)}),i[Cs])}function gt(){I.call(this),this.i=new lr(this),this.M=this,this.G=null}v(gt,I),gt.prototype[_e]=!0,gt.prototype.removeEventListener=function(i,c,u,d){bo(this,i,c,u,d)};function bt(i,c){var u,d=i.G;if(d)for(u=[];d;d=d.G)u.push(d);if(i=i.M,d=c.type||c,typeof c=="string")c=new w(c,i);else if(c instanceof w)c.target=c.target||i;else{var _=c;c=new w(d,i),vo(c,_)}_=!0;let E,N;if(u)for(N=u.length-1;N>=0;N--)E=c.g=u[N],_=hr(E,d,!0,c)&&_;if(E=c.g=i,_=hr(E,d,!0,c)&&_,_=hr(E,d,!1,c)&&_,u)for(N=0;N<u.length;N++)E=c.g=u[N],_=hr(E,d,!1,c)&&_}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let d=0;d<u.length;d++)cr(u[d]);delete i.g[c],i.h--}}this.G=null},gt.prototype.J=function(i,c,u,d){return this.i.add(String(i),c,!1,u,d)},gt.prototype.K=function(i,c,u,d){return this.i.add(String(i),c,!0,u,d)};function hr(i,c,u,d){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let _=!0;for(let E=0;E<c.length;++E){const N=c[E];if(N&&!N.da&&N.capture==u){const j=N.listener,rt=N.ha||N.src;N.fa&&bs(i.i,N),_=j.call(rt,d)!==!1&&_}}return _&&!d.defaultPrevented}function dh(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function To(i){i.g=dh(()=>{i.g=null,i.i&&(i.i=!1,To(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class fh extends I{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(i){I.call(this),this.h=i,this.g={}}v(gn,I);var Eo=[];function So(i){ur(i.g,function(c,u){this.g.hasOwnProperty(u)&&Es(c)},i),i.g={}}gn.prototype.N=function(){gn.Z.N.call(this),So(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var As=a.JSON.stringify,ph=a.JSON.parse,gh=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Co(){}function Ao(){}var mn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ks(){w.call(this,"d")}v(ks,w);function Ns(){w.call(this,"c")}v(Ns,w);var Te={},ko=null;function dr(){return ko=ko||new gt}Te.Ia="serverreachability";function No(i){w.call(this,Te.Ia,i)}v(No,w);function yn(i){const c=dr();bt(c,new No(c))}Te.STAT_EVENT="statevent";function Ro(i,c){w.call(this,Te.STAT_EVENT,i),this.stat=c}v(Ro,w);function It(i){const c=dr();bt(c,new Ro(c,i))}Te.Ja="timingevent";function Do(i,c){w.call(this,Te.Ja,i),this.size=c}v(Do,w);function vn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function wn(){this.g=!0}wn.prototype.ua=function(){this.g=!1};function mh(i,c,u,d,_,E){i.info(function(){if(i.g)if(E){var N="",j=E.split("&");for(let Q=0;Q<j.length;Q++){var rt=j[Q].split("=");if(rt.length>1){const ct=rt[0];rt=rt[1];const Dt=ct.split("_");N=Dt.length>=2&&Dt[1]=="type"?N+(ct+"="+rt+"&"):N+(ct+"=redacted&")}}}else N=null;else N=E;return"XMLHTTP REQ ("+d+") [attempt "+_+"]: "+c+`
`+u+`
`+N})}function yh(i,c,u,d,_,E,N){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+_+"]: "+c+`
`+u+`
`+E+" "+N})}function je(i,c,u,d){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+wh(i,u)+(d?" "+d:"")})}function vh(i,c){i.info(function(){return"TIMEOUT: "+c})}wn.prototype.info=function(){};function wh(i,c){if(!i.g)return c;if(!c)return null;try{const E=JSON.parse(c);if(E){for(i=0;i<E.length;i++)if(Array.isArray(E[i])){var u=E[i];if(!(u.length<2)){var d=u[1];if(Array.isArray(d)&&!(d.length<1)){var _=d[0];if(_!="noop"&&_!="stop"&&_!="close")for(let N=1;N<d.length;N++)d[N]=""}}}}return As(E)}catch{return c}}var fr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Oo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Po;function Rs(){}v(Rs,Co),Rs.prototype.g=function(){return new XMLHttpRequest},Po=new Rs;function bn(i){return encodeURIComponent(String(i))}function bh(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function Yt(i,c,u,d){this.j=i,this.i=c,this.l=u,this.S=d||1,this.V=new gn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Lo}function Lo(){this.i=null,this.g="",this.h=!1}var Mo={},Ds={};function Os(i,c,u){i.M=1,i.A=gr(Rt(c)),i.u=u,i.R=!0,xo(i,null)}function xo(i,c){i.F=Date.now(),pr(i),i.B=Rt(i.A);var u=i.B,d=i.S;Array.isArray(d)||(d=[String(d)]),Qo(u.i,"t",d),i.C=0,u=i.j.L,i.h=new Lo,i.g=fa(i.j,u?c:null,!i.u),i.P>0&&(i.O=new fh(f(i.Y,i,i.g),i.P)),c=i.V,u=i.g,d=i.ba;var _="readystatechange";Array.isArray(_)||(_&&(Eo[0]=_.toString()),_=Eo);for(let E=0;E<_.length;E++){const N=wo(u,_[E],d||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=i.J?mo(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),yn(),mh(i.i,i.v,i.B,i.l,i.S,i.u)}Yt.prototype.ba=function(i){i=i.target;const c=this.O;c&&ee(i)==3?c.j():this.Y(i)},Yt.prototype.Y=function(i){try{if(i==this.g)t:{const j=ee(this.g),rt=this.g.ya(),Q=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||na(this.g)))){this.K||j!=4||rt==7||(rt==8||Q<=0?yn(3):yn(2)),Ps(this);var c=this.g.ca();this.X=c;var u=Ih(this);if(this.o=c==200,yh(this.i,this.v,this.B,this.l,this.S,j,c),this.o){if(this.U&&!this.L){e:{if(this.g){var d,_=this.g;if((d=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(d)){var E=d;break e}}E=null}if(i=E)je(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ls(this,i);else{this.o=!1,this.m=3,It(12),Ee(this),In(this);break t}}if(this.R){i=!0;let ct;for(;!this.K&&this.C<u.length;)if(ct=_h(this,u),ct==Ds){j==4&&(this.m=4,It(14),i=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Mo){this.m=4,It(15),je(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else je(this.i,this.l,ct,null),Ls(this,ct);if(Vo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||u.length!=0||this.h.h||(this.m=1,It(16),i=!1),this.o=this.o&&i,!i)je(this.i,this.l,u,"[Invalid Chunked Response]"),Ee(this),In(this);else if(u.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),qs(N),N.P=!0,It(11))}}else je(this.i,this.l,u,null),Ls(this,u);j==4&&Ee(this),this.o&&!this.K&&(j==4?ua(this.j,this):(this.o=!1,pr(this)))}else xh(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),Ee(this),In(this)}}}catch{}finally{}};function Ih(i){if(!Vo(i))return i.g.la();const c=na(i.g);if(c==="")return"";let u="";const d=c.length,_=ee(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ee(i),In(i),"";i.h.i=new a.TextDecoder}for(let E=0;E<d;E++)i.h.h=!0,u+=i.h.i.decode(c[E],{stream:!(_&&E==d-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function Vo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function _h(i,c){var u=i.C,d=c.indexOf(`
`,u);return d==-1?Ds:(u=Number(c.substring(u,d)),isNaN(u)?Mo:(d+=1,d+u>c.length?Ds:(c=c.slice(d,d+u),i.C=d+u,c)))}Yt.prototype.cancel=function(){this.K=!0,Ee(this)};function pr(i){i.T=Date.now()+i.H,Uo(i,i.H)}function Uo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=vn(f(i.aa,i),c)}function Ps(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Yt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(vh(this.i,this.B),this.M!=2&&(yn(),It(17)),Ee(this),this.m=2,In(this)):Uo(this,this.T-i)};function In(i){i.j.I==0||i.K||ua(i.j,i)}function Ee(i){Ps(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,So(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Ls(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||Ms(u.h,i))){if(!i.L&&Ms(u.h,i)&&u.I==3){try{var d=u.Ba.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var _=d;if(_[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)br(u),vr(u);else break t;Bs(u),It(18)}}else u.xa=_[1],0<u.xa-u.K&&_[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=vn(f(u.Va,u),6e3));Bo(u.h)<=1&&u.ta&&(u.ta=void 0)}else Ce(u,11)}else if((i.L||u.g==i)&&br(u),!m(c))for(_=u.Ba.g.parse(c),c=0;c<_.length;c++){let Q=_[c];const ct=Q[0];if(!(ct<=u.K))if(u.K=ct,Q=Q[1],u.I==2)if(Q[0]=="c"){u.M=Q[1],u.ba=Q[2];const Dt=Q[3];Dt!=null&&(u.ka=Dt,u.j.info("VER="+u.ka));const ze=Q[4];ze!=null&&(u.za=ze,u.j.info("SVER="+u.za));const ne=Q[5];ne!=null&&typeof ne=="number"&&ne>0&&(d=1.5*ne,u.O=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const re=i.g;if(re){const _r=re.g?re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_r){var E=d.h;E.g||_r.indexOf("spdy")==-1&&_r.indexOf("quic")==-1&&_r.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(xs(E,E.h),E.h=null))}if(d.G){const zs=re.g?re.g.getResponseHeader("X-HTTP-Session-Id"):null;zs&&(d.wa=zs,W(d.J,d.G,zs))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),d=u;var N=i;if(d.na=da(d,d.L?d.ba:null,d.W),N.L){qo(d.h,N);var j=N,rt=d.O;rt&&(j.H=rt),j.D&&(Ps(j),pr(j)),d.g=N}else aa(d);u.i.length>0&&wr(u)}else Q[0]!="stop"&&Q[0]!="close"||Ce(u,7);else u.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Ce(u,7):js(u):Q[0]!="noop"&&u.l&&u.l.qa(Q),u.A=0)}}yn(4)}catch{}}var Th=class{constructor(i,c){this.g=i,this.map=c}};function Fo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Bo(i){return i.h?1:i.g?i.g.size:0}function Ms(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function xs(i,c){i.g?i.g.add(c):i.h=c}function qo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Fo.prototype.cancel=function(){if(this.i=zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function zo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return k(i.i)}var $o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eh(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const d=i[u].indexOf("=");let _,E=null;d>=0?(_=i[u].substring(0,d),E=i[u].substring(d+1)):_=i[u],c(_,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Zt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof Zt?(this.l=i.l,_n(this,i.j),this.o=i.o,this.g=i.g,Tn(this,i.u),this.h=i.h,Vs(this,Jo(i.i)),this.m=i.m):i&&(c=String(i).match($o))?(this.l=!1,_n(this,c[1]||"",!0),this.o=En(c[2]||""),this.g=En(c[3]||"",!0),Tn(this,c[4]),this.h=En(c[5]||"",!0),Vs(this,c[6]||"",!0),this.m=En(c[7]||"")):(this.l=!1,this.i=new Cn(null,this.l))}Zt.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Sn(c,Ho,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Sn(c,Ho,!0),"@"),i.push(bn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Sn(u,u.charAt(0)=="/"?Ah:Ch,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Sn(u,Nh)),i.join("")},Zt.prototype.resolve=function(i){const c=Rt(this);let u=!!i.j;u?_n(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var d=i.h;if(u)Tn(c,i.u);else if(u=!!i.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var _=c.h.lastIndexOf("/");_!=-1&&(d=c.h.slice(0,_+1)+d)}if(_=d,_==".."||_==".")d="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){d=_.lastIndexOf("/",0)==0,_=_.split("/");const E=[];for(let N=0;N<_.length;){const j=_[N++];j=="."?d&&N==_.length&&E.push(""):j==".."?((E.length>1||E.length==1&&E[0]!="")&&E.pop(),d&&N==_.length&&E.push("")):(E.push(j),d=!0)}d=E.join("/")}else d=_}return u?c.h=d:u=i.i.toString()!=="",u?Vs(c,Jo(i.i)):u=!!i.m,u&&(c.m=i.m),c};function Rt(i){return new Zt(i)}function _n(i,c,u){i.j=u?En(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Tn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Vs(i,c,u){c instanceof Cn?(i.i=c,Rh(i.i,i.l)):(u||(c=Sn(c,kh)),i.i=new Cn(c,i.l))}function W(i,c,u){i.i.set(c,u)}function gr(i){return W(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function En(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Sn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,Sh),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Sh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ho=/[#\/\?@]/g,Ch=/[#\?:]/g,Ah=/[#\?]/g,kh=/[#\?@]/g,Nh=/#/g;function Cn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Se(i){i.g||(i.g=new Map,i.h=0,i.i&&Eh(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Cn.prototype,n.add=function(i,c){Se(this),this.i=null,i=Be(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function Go(i,c){Se(i),c=Be(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Ko(i,c){return Se(i),c=Be(i,c),i.g.has(c)}n.forEach=function(i,c){Se(this),this.g.forEach(function(u,d){u.forEach(function(_){i.call(c,_,d,this)},this)},this)};function Wo(i,c){Se(i);let u=[];if(typeof c=="string")Ko(i,c)&&(u=u.concat(i.g.get(Be(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return Se(this),this.i=null,i=Be(this,i),Ko(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=Wo(this,i),i.length>0?String(i[0]):c):c};function Qo(i,c,u){Go(i,c),u.length>0&&(i.i=null,i.g.set(Be(i,c),k(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let d=0;d<c.length;d++){var u=c[d];const _=bn(u);u=Wo(this,u);for(let E=0;E<u.length;E++){let N=_;u[E]!==""&&(N+="="+bn(u[E])),i.push(N)}}return this.i=i.join("&")};function Jo(i){const c=new Cn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Be(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Rh(i,c){c&&!i.j&&(Se(i),i.i=null,i.g.forEach(function(u,d){const _=d.toLowerCase();d!=_&&(Go(this,d),Qo(this,_,u))},i)),i.j=c}function Dh(i,c){const u=new wn;if(a.Image){const d=new Image;d.onload=p(te,u,"TestLoadImage: loaded",!0,c,d),d.onerror=p(te,u,"TestLoadImage: error",!1,c,d),d.onabort=p(te,u,"TestLoadImage: abort",!1,c,d),d.ontimeout=p(te,u,"TestLoadImage: timeout",!1,c,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else c(!1)}function Oh(i,c){const u=new wn,d=new AbortController,_=setTimeout(()=>{d.abort(),te(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:d.signal}).then(E=>{clearTimeout(_),E.ok?te(u,"TestPingServer: ok",!0,c):te(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(_),te(u,"TestPingServer: error",!1,c)})}function te(i,c,u,d,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),d(u)}catch{}}function Ph(){this.g=new gh}function Us(i){this.i=i.Sb||null,this.h=i.ab||!1}v(Us,Co),Us.prototype.g=function(){return new mr(this.i,this.h)};function mr(i,c){gt.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}v(mr,gt),n=mr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,kn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?An(this):kn(this),this.readyState==3&&Xo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,An(this))},n.Na=function(i){this.g&&(this.response=i,An(this))},n.ga=function(){this.g&&An(this)};function An(i){i.readyState=4,i.l=null,i.j=null,i.B=null,kn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function kn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Yo(i){let c="";return ur(i,function(u,d){c+=d,c+=":",c+=u,c+=`\r
`}),c}function Fs(i,c,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=Yo(u),typeof i=="string"?u!=null&&bn(u):W(i,c,u))}function Z(i){gt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}v(Z,gt);var Lh=/^https?$/i,Mh=["POST","PUT"];n=Z.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Po.g(),this.g.onreadystatechange=C(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(E){Zo(this,E);return}if(i=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var _ in d)u.set(_,d[_]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const E of d.keys())u.set(E,d.get(E));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(E=>E.toLowerCase()=="content-type"),_=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Mh,c,void 0)>=0)||d||_||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,N]of u)this.g.setRequestHeader(E,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(E){Zo(this,E)}};function Zo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,ta(i),yr(i)}function ta(i){i.A||(i.A=!0,bt(i,"complete"),bt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,bt(this,"complete"),bt(this,"abort"),yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),Z.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ea(this):this.Xa())},n.Xa=function(){ea(this)};function ea(i){if(i.h&&typeof o<"u"){if(i.v&&ee(i)==4)setTimeout(i.Ca.bind(i),0);else if(bt(i,"readystatechange"),ee(i)==4){i.h=!1;try{const E=i.ca();t:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var d;if(d=E===0){let N=String(i.D).match($o)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),d=!Lh.test(N?N.toLowerCase():"")}u=d}if(u)bt(i,"complete"),bt(i,"success");else{i.o=6;try{var _=ee(i)>2?i.g.statusText:""}catch{_=""}i.l=_+" ["+i.ca()+"]",ta(i)}}finally{yr(i)}}}}function yr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||bt(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ee(i){return i.g?i.g.readyState:0}n.ca=function(){try{return ee(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),ph(c)}};function na(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function xh(i){const c={};i=(i.g&&ee(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(m(i[d]))continue;var u=bh(i[d]);const _=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const E=c[_]||[];c[_]=E,E.push(u)}ch(c,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function ra(i){this.za=0,this.i=[],this.j=new wn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Nn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Nn("baseRetryDelayMs",5e3,i),this.Za=Nn("retryDelaySeedMs",1e4,i),this.Ta=Nn("forwardChannelMaxRetries",2,i),this.va=Nn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Fo(i&&i.concurrentRequestLimit),this.Ba=new Ph,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ra.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,d){It(0),this.W=i,this.H=c||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.J=da(this,null,this.W),wr(this)};function js(i){if(sa(i),i.I==3){var c=i.V++,u=Rt(i.J);if(W(u,"SID",i.M),W(u,"RID",c),W(u,"TYPE","terminate"),Rn(i,u),c=new Yt(i,i.j,c),c.M=2,c.A=gr(Rt(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=fa(c.j,null),c.g.ea(c.A)),c.F=Date.now(),pr(c)}ha(i)}function vr(i){i.g&&(qs(i),i.g.cancel(),i.g=null)}function sa(i){vr(i),i.v&&(a.clearTimeout(i.v),i.v=null),br(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function wr(i){if(!jo(i.h)&&!i.m){i.m=!0;var c=i.Ea;_t||g(),at||(_t(),at=!0),b.add(c,i),i.D=0}}function Vh(i,c){return Bo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=vn(f(i.Ea,i,c),la(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const _=new Yt(this,this.j,i);let E=this.o;if(this.U&&(E?(E=mo(E),vo(E,this.U)):E=this.U),this.u!==null||this.R||(_.J=E,E=null),this.S)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(c+=d,c>4096){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=oa(this,_,c),u=Rt(this.J),W(u,"RID",i),W(u,"CVER",22),this.G&&W(u,"X-HTTP-Session-Id",this.G),Rn(this,u),E&&(this.R?c="headers="+bn(Yo(E))+"&"+c:this.u&&Fs(u,this.u,E)),xs(this.h,_),this.Ra&&W(u,"TYPE","init"),this.S?(W(u,"$req",c),W(u,"SID","null"),_.U=!0,Os(_,u,null)):Os(_,u,c),this.I=2}}else this.I==3&&(i?ia(this,i):this.i.length==0||jo(this.h)||ia(this))};function ia(i,c){var u;c?u=c.l:u=i.V++;const d=Rt(i.J);W(d,"SID",i.M),W(d,"RID",u),W(d,"AID",i.K),Rn(i,d),i.u&&i.o&&Fs(d,i.u,i.o),u=new Yt(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=oa(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),xs(i.h,u),Os(u,d,c)}function Rn(i,c){i.H&&ur(i.H,function(u,d){W(c,d,u)}),i.l&&ur({},function(u,d){W(c,d,u)})}function oa(i,c,u){u=Math.min(i.i.length,u);const d=i.l?f(i.l.Ka,i.l,i):null;t:{var _=i.i;let j=-1;for(;;){const rt=["count="+u];j==-1?u>0?(j=_[0].g,rt.push("ofs="+j)):j=0:rt.push("ofs="+j);let Q=!0;for(let ct=0;ct<u;ct++){var E=_[ct].g;const Dt=_[ct].map;if(E-=j,E<0)j=Math.max(0,_[ct].g-100),Q=!1;else try{E="req"+E+"_"||"";try{var N=Dt instanceof Map?Dt:Object.entries(Dt);for(const[ze,ne]of N){let re=ne;l(ne)&&(re=As(ne)),rt.push(E+ze+"="+encodeURIComponent(re))}}catch(ze){throw rt.push(E+"type="+encodeURIComponent("_badmap")),ze}}catch{d&&d(Dt)}}if(Q){N=rt.join("&");break t}}N=void 0}return i=i.i.splice(0,u),c.G=i,N}function aa(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;_t||g(),at||(_t(),at=!0),b.add(c,i),i.A=0}}function Bs(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=vn(f(i.Da,i),la(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,ca(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=vn(f(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),vr(this),ca(this))};function qs(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function ca(i){i.g=new Yt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Rt(i.na);W(c,"RID","rpc"),W(c,"SID",i.M),W(c,"AID",i.K),W(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&W(c,"TO",i.ia),W(c,"TYPE","xmlhttp"),Rn(i,c),i.u&&i.o&&Fs(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=gr(Rt(c)),u.u=null,u.R=!0,xo(u,i)}n.Va=function(){this.C!=null&&(this.C=null,vr(this),Bs(this),It(19))};function br(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ua(i,c){var u=null;if(i.g==c){br(i),qs(i),i.g=null;var d=2}else if(Ms(i.h,c))u=c.G,qo(i.h,c),d=1;else return;if(i.I!=0){if(c.o)if(d==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var _=i.D;d=dr(),bt(d,new Do(d,u)),wr(i)}else aa(i);else if(_=c.m,_==3||_==0&&c.X>0||!(d==1&&Vh(i,c)||d==2&&Bs(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),_){case 1:Ce(i,5);break;case 4:Ce(i,10);break;case 3:Ce(i,6);break;default:Ce(i,2)}}}function la(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function Ce(i,c){if(i.j.info("Error code "+c),c==2){var u=f(i.bb,i),d=i.Ua;const _=!d;d=new Zt(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_n(d,"https"),gr(d),_?Dh(d.toString(),u):Oh(d.toString(),u)}else It(2);i.I=0,i.l&&i.l.pa(c),ha(i),sa(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function ha(i){if(i.I=0,i.ja=[],i.l){const c=zo(i.h);(c.length!=0||i.i.length!=0)&&(D(i.ja,c),D(i.ja,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.oa()}}function da(i,c,u){var d=u instanceof Zt?Rt(u):new Zt(u);if(d.g!="")c&&(d.g=c+"."+d.g),Tn(d,d.u);else{var _=a.location;d=_.protocol,c=c?c+"."+_.hostname:_.hostname,_=+_.port;const E=new Zt(null);d&&_n(E,d),c&&(E.g=c),_&&Tn(E,_),u&&(E.h=u),d=E}return u=i.G,c=i.wa,u&&c&&W(d,u,c),W(d,"VER",i.ka),Rn(i,d),d}function fa(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new Z(new Us({ab:u})):new Z(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ir(){}Ir.prototype.g=function(i,c){return new St(i,c)};function St(i,c){gt.call(this),this.g=new ra(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!m(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new qe(this)}v(St,gt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){js(this.g)},St.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=As(i),i=u);c.i.push(new Th(c.Ya++,i)),c.I==3&&wr(c)},St.prototype.N=function(){this.g.l=null,delete this.j,js(this.g),delete this.g,St.Z.N.call(this)};function ga(i){ks.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}v(ga,ks);function ma(){Ns.call(this),this.status=1}v(ma,Ns);function qe(i){this.g=i}v(qe,pa),qe.prototype.ra=function(){bt(this.g,"a")},qe.prototype.qa=function(i){bt(this.g,new ga(i))},qe.prototype.pa=function(i){bt(this.g,new ma)},qe.prototype.oa=function(){bt(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Vu=function(){return new Ir},xu=function(){return dr()},Mu=Te,li={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,Pr=fr,Oo.COMPLETE="complete",Lu=Oo,Ao.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",gt.prototype.listen=gt.prototype.J,Dn=Ao,Z.prototype.listenOnce=Z.prototype.K,Z.prototype.getLastError=Z.prototype.Ha,Z.prototype.getLastErrorCode=Z.prototype.ya,Z.prototype.getStatus=Z.prototype.ca,Z.prototype.getResponseJson=Z.prototype.La,Z.prototype.getResponseText=Z.prototype.la,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Fa,Pu=Z}).apply(typeof Er<"u"?Er:typeof self<"u"?self:typeof window<"u"?window:{});const Ga="@firebase/firestore",Ka="4.9.2";/**
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
*/class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
*/let hn="12.3.0";/**
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
*/const Le=new Ci("@firebase/firestore");function $e(){return Le.logLevel}function R(n,...t){if(Le.logLevel<=B.DEBUG){const e=t.map(Ui);Le.debug(`Firestore (${hn}): ${n}`,...e)}}function Qt(n,...t){if(Le.logLevel<=B.ERROR){const e=t.map(Ui);Le.error(`Firestore (${hn}): ${n}`,...e)}}function en(n,...t){if(Le.logLevel<=B.WARN){const e=t.map(Ui);Le.warn(`Firestore (${hn}): ${n}`,...e)}}function Ui(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
*/function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Uu(n,r,e)}function Uu(n,t,e){let r=`FIRESTORE (${hn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Qt(r),new Error(r)}function G(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Uu(t,s,r)}function F(n,t){return n}/**
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
*/const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Xt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class ge{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
*/class Fu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _g{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class Tg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Eg{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ge;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ge,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ge)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new Fu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class Sg{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cg{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Sg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wa{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ag{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(this.o===void 0,3512);const r=o=>{o.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,R("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wa(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Wa(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function kg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
*/class Fi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kg(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function hi(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Xs(s)===Xs(o)?q(s,o):Xs(s)?1:-1}return q(n.length,t.length)}const Ng=55296,Rg=57343;function Xs(n){const t=n.charCodeAt(0);return t>=Ng&&t<=Rg}function nn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
*/const Qa="__name__";class Ot{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ot.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ot?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ot.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=Ot.isNumericId(t),s=Ot.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ot.extractNumericId(t).compare(Ot.extractNumericId(e)):hi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return pe.fromString(t.substring(4,t.length-2))}}class X extends Ot{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new P(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Dg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Ot{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Dg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qa}static keyField(){return new dt([Qa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new P(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new P(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new P(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new P(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
*/class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
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
*/function Og(n,t,e){if(!e)throw new P(A.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Pg(n,t,e,r){if(t===!0&&r===!0)throw new P(A.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ja(n){if(!M.isDocumentKey(n))throw new P(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ju(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ji(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function $n(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new P(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ji(n);throw new P(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
* @license
* Copyright 2025 Google LLC
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
*/function nt(n,t){const e={typeString:n};return t&&(e.value=t),e}function rr(n,t){if(!ju(n))throw new P(A.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new P(A.INVALID_ARGUMENT,e);return!0}/**
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
*/const Xa=-62135596800,Ya=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ya);return new J(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Xa)throw new P(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ya}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(rr(t,J._jsonSchema))return new J(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Xa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:nt("string",J._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
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
*/class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new J(0,0))}static max(){return new U(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
*/const Hn=-1;function Lg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new J(e+1,0):new J(e,r));return new me(s,M.empty(),t)}function Mg(n){return new me(n.readTime,n.key,Hn)}class me{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new me(U.min(),M.empty(),Hn)}static max(){return new me(U.max(),M.empty(),Hn)}}function xg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
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
*/const Vg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ug{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
*/async function dn(n){if(n.code!==A.FAILED_PRECONDITION||n.message!==Vg)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++l,l===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Fg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function fn(n){return n.name==="IndexedDbTransactionError"}/**
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
*/class cs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}cs.ce=-1;/**
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
*/const Bi=-1;function us(n){return n==null}function Kr(n){return n===0&&1/n==-1/0}function jg(n){return typeof n=="number"&&Number.isInteger(n)&&!Kr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
*/const Bu="";function Bg(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Za(t)),t=qg(n.get(e),t);return Za(t)}function qg(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Bu:e+="";break;default:e+=o}}return e}function Za(n){return n+Bu+""}/**
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
*/function tc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function xe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function qu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
*/class Y{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sr(this.root,t,this.comparator,!0)}}class Sr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ht(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(n,t,e,r,s){return this}insert(n,t,e){return new ht(n,t)}remove(n,t){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
*/class it{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ec(this.data.getIterator())}getIteratorFrom(t){return new ec(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class ec{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class Nt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Nt([])}unionWith(t){let e=new it(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Nt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return nn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
*/class zu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zu("Invalid base64 string: "+s):s}}(t);return new ft(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const zg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ye(n){if(G(!!n,39018),typeof n=="string"){let t=0;const e=zg.exec(n);if(G(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
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
*/const $u="server_timestamp",Hu="__type__",Gu="__previous_value__",Ku="__local_write_time__";function qi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hu])==null?void 0:e.stringValue)===$u}function ls(n){const t=n.mapValue.fields[Gu];return qi(t)?ls(t):t}function Gn(n){const t=ye(n.mapValue.fields[Ku].timestampValue);return new J(t.seconds,t.nanos)}/**
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
*/class $g{constructor(t,e,r,s,o,a,l,h,f,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=p}}const Wr="(default)";class Kn{constructor(t,e){this.projectId=t,this.database=e||Wr}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database===Wr}isEqual(t){return t instanceof Kn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
*/const Wu="__type__",Hg="__max__",Cr={mapValue:{}},Qu="__vector__",Qr="value";function we(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qi(n)?4:Kg(n)?9007199254740991:Gg(n)?10:11:x(28295,{value:n})}function Bt(n,t){if(n===t)return!0;const e=we(n);if(e!==we(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Gn(n).isEqual(Gn(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=ye(r.timestampValue),a=ye(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return ve(r.bytesValue).isEqual(ve(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return tt(r.geoPointValue.latitude)===tt(s.geoPointValue.latitude)&&tt(r.geoPointValue.longitude)===tt(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return tt(r.integerValue)===tt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=tt(r.doubleValue),a=tt(s.doubleValue);return o===a?Kr(o)===Kr(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return nn(n.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(tc(o)!==tc(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Bt(o[l],a[l])))return!1;return!0}(n,t);default:return x(52216,{left:n})}}function Wn(n,t){return(n.values||[]).find(e=>Bt(e,t))!==void 0}function rn(n,t){if(n===t)return 0;const e=we(n),r=we(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=tt(s.integerValue||s.doubleValue),l=tt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return nc(n.timestampValue,t.timestampValue);case 4:return nc(Gn(n),Gn(t));case 5:return hi(n.stringValue,t.stringValue);case 6:return function(s,o){const a=ve(s),l=ve(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=q(a[h],l[h]);if(f!==0)return f}return q(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=q(tt(s.latitude),tt(o.latitude));return a!==0?a:q(tt(s.longitude),tt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return rc(n.arrayValue,t.arrayValue);case 10:return function(s,o){var a,l,h,f;const p=s.fields||{},v=o.fields||{},C=(a=p[Qr])==null?void 0:a.arrayValue,k=(l=v[Qr])==null?void 0:l.arrayValue,D=q(((h=C==null?void 0:C.values)==null?void 0:h.length)||0,((f=k==null?void 0:k.values)==null?void 0:f.length)||0);return D!==0?D:rc(C,k)}(n.mapValue,t.mapValue);case 11:return function(s,o){if(s===Cr.mapValue&&o===Cr.mapValue)return 0;if(s===Cr.mapValue)return 1;if(o===Cr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const v=hi(l[p],f[p]);if(v!==0)return v;const C=rn(a[l[p]],h[f[p]]);if(C!==0)return C}return q(l.length,f.length)}(n.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function nc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ye(n),r=ye(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function rc(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=rn(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function sn(n){return di(n)}function di(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const e=ye(t);return`time(${e.seconds},${e.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ve(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let e="[",r=!0;for(const s of t.values||[])r?r=!1:e+=",",e+=di(s);return e+"]"}(n.arrayValue):"mapValue"in n?function(t){const e=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of e)s?s=!1:r+=",",r+=`${o}:${di(t.fields[o])}`;return r+"}"}(n.mapValue):x(61005,{value:n})}function Lr(n){switch(we(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ls(n);return t?16+Lr(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((r,s)=>r+Lr(s),0)}(n.arrayValue);case 10:case 11:return function(e){let r=0;return xe(e.fields,(s,o)=>{r+=s.length+Lr(o)}),r}(n.mapValue);default:throw x(13486,{value:n})}}function fi(n){return!!n&&"integerValue"in n}function zi(n){return!!n&&"arrayValue"in n}function sc(n){return!!n&&"nullValue"in n}function ic(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mr(n){return!!n&&"mapValue"in n}function Gg(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Wu])==null?void 0:e.stringValue)===Qu}function Vn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return xe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Vn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Vn(n.arrayValue.values[e]);return t}return{...n}}function Kg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hg}/**
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
*/class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Mr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vn(e)}setAll(t){let e=dt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=Vn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Mr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Mr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){xe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ct(Vn(this.value))}}function Ju(n){const t=[];return xe(n.fields,(e,r)=>{const s=new dt([e]);if(Mr(r)){const o=Ju(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Nt(t)}/**
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
*/class vt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new vt(t,0,U.min(),U.min(),U.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,s){return new vt(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new vt(t,2,e,U.min(),U.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,U.min(),U.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class Jr{constructor(t,e){this.position=t,this.inclusive=e}}function oc(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=rn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ac(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Bt(n.position[e],t.position[e]))return!1;return!0}/**
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
*/class Xr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
*/class Xu{}class st extends Xu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Jg(t,e,r):e==="array-contains"?new Zg(t,r):e==="in"?new tm(t,r):e==="not-in"?new em(t,r):e==="array-contains-any"?new nm(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Xg(t,r):new Yg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(rn(e,this.value)):e!==null&&we(this.value)===we(e)&&this.matchesComparison(rn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends Xu{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new qt(t,e)}matches(t){return Yu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Yu(n){return n.op==="and"}function Zu(n){return Qg(n)&&Yu(n)}function Qg(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function pi(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+sn(n.value);if(Zu(n))return n.filters.map(t=>pi(t)).join(",");{const t=n.filters.map(e=>pi(e)).join(",");return`${n.op}(${t})`}}function tl(n,t){return n instanceof st?function(e,r){return r instanceof st&&e.op===r.op&&e.field.isEqual(r.field)&&Bt(e.value,r.value)}(n,t):n instanceof qt?function(e,r){return r instanceof qt&&e.op===r.op&&e.filters.length===r.filters.length?e.filters.reduce((s,o,a)=>s&&tl(o,r.filters[a]),!0):!1}(n,t):void x(19439)}function el(n){return n instanceof st?function(t){return`${t.field.canonicalString()} ${t.op} ${sn(t.value)}`}(n):n instanceof qt?function(t){return t.op.toString()+" {"+t.getFilters().map(el).join(" ,")+"}"}(n):"Filter"}class Jg extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xg extends st{constructor(t,e){super(t,"in",e),this.keys=nl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Yg extends st{constructor(t,e){super(t,"not-in",e),this.keys=nl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function nl(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Zg extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zi(e)&&Wn(e.arrayValue,this.value)}}class tm extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Wn(this.value.arrayValue,e)}}class em extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(Wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Wn(this.value.arrayValue,e)}}class nm extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Wn(this.value.arrayValue,r))}}/**
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
*/class rm{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function cc(n,t=null,e=[],r=[],s=null,o=null,a=null){return new rm(n,t,e,r,s,o,a)}function $i(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>pi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),us(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>sn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>sn(r)).join(",")),t.Te=e}return t.Te}function Hi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Wg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!tl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ac(n.startAt,t.startAt)&&ac(n.endAt,t.endAt)}function gi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
*/class hs{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function sm(n,t,e,r,s,o,a,l){return new hs(n,t,e,r,s,o,a,l)}function Gi(n){return new hs(n)}function uc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function im(n){return n.collectionGroup!==null}function Un(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(s){let o=new it(dt.comparator);return s.filters.forEach(a=>{a.getFlattenedFilters().forEach(l=>{l.isInequality()&&(o=o.add(l.field))})}),o})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.Ie.push(new Xr(s,r))}),e.has(dt.keyField().canonicalString())||t.Ie.push(new Xr(dt.keyField(),r))}return t.Ie}function xt(n){const t=F(n);return t.Ee||(t.Ee=om(t,Un(n))),t.Ee}function om(n,t){if(n.limitType==="F")return cc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Xr(s.field,o)});const e=n.endAt?new Jr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jr(n.startAt.position,n.startAt.inclusive):null;return cc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function mi(n,t,e){return new hs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ds(n,t){return Hi(xt(n),xt(t))&&n.limitType===t.limitType}function rl(n){return`${$i(xt(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(r=>el(r)).join(", ")}]`),us(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>sn(r)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>sn(r)).join(",")),`Target(${e})`}(xt(n))}; limitType=${n.limitType})`}function fs(n,t){return t.isFoundDocument()&&function(e,r){const s=r.key.path;return e.collectionGroup!==null?r.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(s):M.isDocumentKey(e.path)?e.path.isEqual(s):e.path.isImmediateParentOf(s)}(n,t)&&function(e,r){for(const s of Un(e))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,t)&&function(e,r){for(const s of e.filters)if(!s.matches(r))return!1;return!0}(n,t)&&function(e,r){return!(e.startAt&&!function(s,o,a){const l=oc(s,o,a);return s.inclusive?l<=0:l<0}(e.startAt,Un(e),r)||e.endAt&&!function(s,o,a){const l=oc(s,o,a);return s.inclusive?l>=0:l>0}(e.endAt,Un(e),r))}(n,t)}function am(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sl(n){return(t,e)=>{let r=!1;for(const s of Un(n)){const o=cm(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function cm(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),h=a.data.field(s);return l!==null&&h!==null?rn(l,h):x(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
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
*/class Ve{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){xe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return qu(this.inner)}size(){return this.innerSize}}/**
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
*/const um=new Y(M.comparator);function Jt(){return um}const il=new Y(M.comparator);function On(...n){let t=il;for(const e of n)t=t.insert(e.key,e);return t}function ol(n){let t=il;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ke(){return Fn()}function al(){return Fn()}function Fn(){return new Ve(n=>n.toString(),(n,t)=>n.isEqual(t))}const lm=new Y(M.comparator),hm=new it(M.comparator);function z(...n){let t=hm;for(const e of n)t=t.add(e);return t}const dm=new it(q);function fm(){return dm}/**
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
*/function Ki(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kr(t)?"-0":t}}function cl(n){return{integerValue:""+n}}function pm(n,t){return jg(t)?cl(t):Ki(n,t)}/**
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
*/class ps{constructor(){this._=void 0}}function gm(n,t,e){return n instanceof Yr?function(r,s){const o={fields:{[Hu]:{stringValue:$u},[Ku]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&qi(s)&&(s=ls(s)),s&&(o.fields[Gu]=s),{mapValue:o}}(e,t):n instanceof Qn?ll(n,t):n instanceof Jn?hl(n,t):function(r,s){const o=ul(r,s),a=lc(o)+lc(r.Ae);return fi(o)&&fi(r.Ae)?cl(a):Ki(r.serializer,a)}(n,t)}function mm(n,t,e){return n instanceof Qn?ll(n,t):n instanceof Jn?hl(n,t):e}function ul(n,t){return n instanceof Zr?function(e){return fi(e)||function(r){return!!r&&"doubleValue"in r}(e)}(t)?t:{integerValue:0}:null}class Yr extends ps{}class Qn extends ps{constructor(t){super(),this.elements=t}}function ll(n,t){const e=dl(t);for(const r of n.elements)e.some(s=>Bt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Jn extends ps{constructor(t){super(),this.elements=t}}function hl(n,t){let e=dl(t);for(const r of n.elements)e=e.filter(s=>!Bt(s,r));return{arrayValue:{values:e}}}class Zr extends ps{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function lc(n){return tt(n.integerValue||n.doubleValue)}function dl(n){return zi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ym(n,t){return n.field.isEqual(t.field)&&function(e,r){return e instanceof Qn&&r instanceof Qn||e instanceof Jn&&r instanceof Jn?nn(e.elements,r.elements,Bt):e instanceof Zr&&r instanceof Zr?Bt(e.Ae,r.Ae):e instanceof Yr&&r instanceof Yr}(n.transform,t.transform)}class vm{constructor(t,e){this.version=t,this.transformResults=e}}class Ht{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ht}static exists(t){return new Ht(void 0,t)}static updateTime(t){return new Ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class gs{}function fl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new gl(n.key,Ht.none()):new sr(n.key,n.data,Ht.none());{const e=n.data,r=Ct.empty();let s=new it(dt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ue(n.key,r,new Nt(s.toArray()),Ht.none())}}function wm(n,t,e){n instanceof sr?function(r,s,o){const a=r.value.clone(),l=dc(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ue?function(r,s,o){if(!xr(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=dc(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(pl(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function jn(n,t,e,r){return n instanceof sr?function(s,o,a,l){if(!xr(s.precondition,o))return a;const h=s.value.clone(),f=fc(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ue?function(s,o,a,l){if(!xr(s.precondition,o))return a;const h=fc(s.fieldTransforms,l,o),f=o.data;return f.setAll(pl(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,t,e,r):function(s,o,a){return xr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function bm(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=ul(r.transform,s||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,o))}return e||null}function hc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(e,r){return e===void 0&&r===void 0||!(!e||!r)&&nn(e,r,(s,o)=>ym(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class sr extends gs{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ue extends gs{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function pl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function dc(n,t,e){const r=new Map;G(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,mm(a,l,e[s]))}return r}function fc(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,gm(o,a,t))}return r}class gl extends gs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Im extends gs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class _m{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&wm(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=jn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=jn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=al();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=fl(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&nn(this.mutations,t.mutations,(e,r)=>hc(e,r))&&nn(this.baseMutations,t.baseMutations,(e,r)=>hc(e,r))}}class Wi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){G(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return lm}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Wi(t,e,r,s)}}/**
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
*/class Tm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
*/class Em{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
*/var et,H;function Sm(n){switch(n){case A.OK:return x(64938);case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function ml(n){if(n===void 0)return Qt("GRPC error has no .code"),A.UNKNOWN;switch(n){case et.OK:return A.OK;case et.CANCELLED:return A.CANCELLED;case et.UNKNOWN:return A.UNKNOWN;case et.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case et.INTERNAL:return A.INTERNAL;case et.UNAVAILABLE:return A.UNAVAILABLE;case et.UNAUTHENTICATED:return A.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case et.NOT_FOUND:return A.NOT_FOUND;case et.ALREADY_EXISTS:return A.ALREADY_EXISTS;case et.PERMISSION_DENIED:return A.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case et.ABORTED:return A.ABORTED;case et.OUT_OF_RANGE:return A.OUT_OF_RANGE;case et.UNIMPLEMENTED:return A.UNIMPLEMENTED;case et.DATA_LOSS:return A.DATA_LOSS;default:return x(39323,{code:n})}}(H=et||(et={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
*/function Cm(){return new TextEncoder}/**
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
*/const Am=new pe([4294967295,4294967295],0);function pc(n){const t=Cm().encode(n),e=new Ou;return e.update(t),new Uint8Array(e.digest())}function gc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new pe([e,r],0),new pe([s,o],0)]}class Qi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Pn(`Invalid padding: ${e}`);if(r<0)throw new Pn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Pn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Pn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=pe.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(pe.fromNumber(r)));return s.compare(Am)===1&&(s=new pe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=pc(t),[r,s]=gc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Qi(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const e=pc(t),[r,s]=gc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
*/class ms{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,ir.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ms(U.min(),s,new Y(q),Jt(),z())}}class ir{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ir(r,e,z(),z(),z())}}/**
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
*/class Vr{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class yl{constructor(t,e){this.targetId=t,this.Ce=e}}class vl{constructor(t,e,r=ft.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class mc{constructor(){this.ve=0,this.Fe=yc(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=z(),e=z(),r=z();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x(38017,{changeType:o})}}),new ir(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=yc()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class km{constructor(t){this.Ge=t,this.ze=new Map,this.je=Jt(),this.Je=Ar(),this.He=Ar(),this.Ye=new Y(q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:x(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(gi(o))if(r===0){const a=new M(o.path);this.et(e,a,vt.newNoDocument(a,U.min()))}else G(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ve(r).toUint8Array()}catch(h){if(h instanceof zu)return en("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Qi(a,s,o)}catch(h){return en(h instanceof Pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&gi(l.target)){const h=new M(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,vt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let r=z();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new ms(t,e,this.Ye,this.je,r);return this.je=Jt(),this.Je=Ar(),this.He=Ar(),this.Ye=new Y(q),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new mc,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new it(q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new it(q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||R("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new mc),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Ar(){return new Y(M.comparator)}function yc(){return new Y(M.comparator)}const Nm={asc:"ASCENDING",desc:"DESCENDING"},Rm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dm={and:"AND",or:"OR"};class Om{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function yi(n,t){return n.useProto3Json||us(t)?t:{value:t}}function ts(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Pm(n,t){return ts(n,t.toTimestamp())}function Vt(n){return G(!!n,49232),U.fromTimestamp(function(t){const e=ye(t);return new J(e.seconds,e.nanos)}(n))}function Ji(n,t){return vi(n,t).canonicalString()}function vi(n,t){const e=function(r){return new X(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function bl(n){const t=X.fromString(n);return G(Sl(t),10190,{key:t.toString()}),t}function wi(n,t){return Ji(n.databaseId,t.path)}function Ys(n,t){const e=bl(t);if(e.get(1)!==n.databaseId.projectId)throw new P(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new P(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(_l(e))}function Il(n,t){return Ji(n.databaseId,t)}function Lm(n){const t=bl(n);return t.length===4?X.emptyPath():_l(t)}function bi(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _l(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function vc(n,t,e){return{name:wi(n,t),fields:e.value.mapValue.fields}}function Mm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:x(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?A.UNKNOWN:ml(h.code);return new P(f,h.message||"")}(a);e=new vl(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ys(n,r.document.name),o=Vt(r.document.updateTime),a=r.document.createTime?Vt(r.document.createTime):U.min(),l=new Ct({mapValue:{fields:r.document.fields}}),h=vt.newFoundDocument(s,o,a,l),f=r.targetIds||[],p=r.removedTargetIds||[];e=new Vr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ys(n,r.document),o=r.readTime?Vt(r.readTime):U.min(),a=vt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Vr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ys(n,r.document),o=r.removedTargetIds||[];e=new Vr([],o,s,null)}else{if(!("filter"in t))return x(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Em(s,o),l=r.targetId;e=new yl(l,a)}}return e}function xm(n,t){let e;if(t instanceof sr)e={update:vc(n,t.key,t.value)};else if(t instanceof gl)e={delete:wi(n,t.key)};else if(t instanceof Ue)e={update:vc(n,t.key,t.data),updateMask:Hm(t.fieldMask)};else{if(!(t instanceof Im))return x(16599,{Vt:t.type});e={verify:wi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Yr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Jn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zr)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw x(20930,{transform:o.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Pm(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:x(27497)}(n,t.precondition)),e}function Vm(n,t){return n&&n.length>0?(G(t!==void 0,14353),n.map(e=>function(r,s){let o=r.updateTime?Vt(r.updateTime):Vt(s);return o.isEqual(U.min())&&(o=Vt(s)),new vm(o,r.transformResults||[])}(e,t))):[]}function Um(n,t){return{documents:[Il(n,t.path)]}}function Fm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Il(n,s);const o=function(h){if(h.length!==0)return El(qt.create(h,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:Ge(p.field),direction:qm(p.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=yi(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:e,parent:s}}function jm(n){let t=Lm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){G(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(p){const v=Tl(p);return v instanceof qt&&Zu(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(v=>function(C){return new Xr(Ke(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(e.orderBy));let l=null;e.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,us(v)?null:v}(e.limit));let h=null;e.startAt&&(h=function(p){const v=!!p.before,C=p.values||[];return new Jr(C,v)}(e.startAt));let f=null;return e.endAt&&(f=function(p){const v=!p.before,C=p.values||[];return new Jr(C,v)}(e.endAt)),sm(t,s,a,o,l,"F",h,f)}function Bm(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:r})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Tl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ke(t.unaryFilter.field);return st.create(e,"==",{doubleValue:NaN});case"IS_NULL":const r=Ke(t.unaryFilter.field);return st.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ke(t.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ke(t.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return st.create(Ke(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return qt.create(t.compositeFilter.filters.map(e=>Tl(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function qm(n){return Nm[n]}function zm(n){return Rm[n]}function $m(n){return Dm[n]}function Ge(n){return{fieldPath:n.canonicalString()}}function Ke(n){return dt.fromServerFormat(n.fieldPath)}function El(n){return n instanceof st?function(t){if(t.op==="=="){if(ic(t.value))return{unaryFilter:{field:Ge(t.field),op:"IS_NAN"}};if(sc(t.value))return{unaryFilter:{field:Ge(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ic(t.value))return{unaryFilter:{field:Ge(t.field),op:"IS_NOT_NAN"}};if(sc(t.value))return{unaryFilter:{field:Ge(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ge(t.field),op:zm(t.op),value:t.value}}}(n):n instanceof qt?function(t){const e=t.getFilters().map(r=>El(r));return e.length===1?e[0]:{compositeFilter:{op:$m(t.op),filters:e}}}(n):x(54877,{filter:n})}function Hm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Sl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
*/class le{constructor(t,e,r,s,o=U.min(),a=U.min(),l=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new le(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
*/class Gm{constructor(t){this.yt=t}}function Km(n){const t=jm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mi(t,t.limit,"L"):t}/**
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
*/class Wm{constructor(){this.Cn=new Qm}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(me.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(me.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Qm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new it(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new it(X.comparator)).toArray()}}/**
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
*/const wc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cl=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
*/Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Cl,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
*/class on{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new on(0)}static cr(){return new on(-1)}}/**
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
*/const bc="LruGarbageCollector",Jm=1048576;function Ic([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class Xm{constructor(t){this.Ir=t,this.buffer=new it(Ic),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ic(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ym{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){R(bc,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){fn(e)?R(bc,"Ignoring IndexedDB error during garbage collection: ",e):await dn(e)}await this.Vr(3e5)})}}class Zm{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(cs.ce);const r=new Xm(e);return this.mr.forEachTarget(t,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(wc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wc):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,l,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(t,s))).next(v=>(r=v,l=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(f=Date.now(),$e()<=B.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${v} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function ty(n,t){return new Zm(n,t)}/**
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
*/class ey{constructor(){this.changes=new Ve(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
*/class ny{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
*/class ry{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&jn(r.mutation,s,Nt.empty(),J.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const s=ke();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=On();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ke();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=Jt();const a=Fn(),l=function(){return Fn()}();return e.forEach((h,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof Ue)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),jn(p.mutation,f,p.mutation.getFieldMask(),J.now())):a.set(f.key,Nt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>l.set(f,new ny(p,a.get(f)??null))),l))}recalculateAndSaveOverlays(t,e){const r=Fn();let s=new Y((a,l)=>a-l),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||Nt.empty();p=l.applyToLocalView(f,p),r.set(h,p);const v=(s.get(l.batchId)||z()).add(h);s=s.insert(l.batchId,v)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,p=h.value,v=al();p.forEach(C=>{if(!o.has(C)){const k=fl(e.get(C),r.get(C));k!==null&&v.set(C,k),o=o.add(C)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,v))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):im(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(ke());let l=Hn,h=o;return a.next(f=>S.forEach(f,(p,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(t,p).next(C=>{h=h.insert(p,C)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,z())).next(p=>({batchId:l,changes:ol(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=On();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=On();return this.indexManager.getCollectionParents(t,o).next(l=>S.forEach(l,h=>{const f=function(p,v){return new hs(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(p=>{p.forEach((v,C)=>{a=a.insert(v,C)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,vt.newInvalidDocument(p)))});let l=On();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&jn(p.mutation,f,Nt.empty(),J.now()),fs(e,f)&&(l=l.insert(h,f))}),l})}}/**
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
*/class sy{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Vt(r.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(r){return{name:r.name,query:Km(r.bundledQuery),readTime:Vt(r.readTime)}}(e)),S.resolve()}}/**
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
*/class iy{constructor(){this.overlays=new Y(M.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ke();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=ke(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Y((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=ke(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=ke(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=s)););return S.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Tm(e,r));let o=this.qr.get(e);o===void 0&&(o=z(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
* @license
* Copyright 2024 Google LLC
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
*/class oy{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
*/class Xi{constructor(){this.Qr=new it(ut.$r),this.Ur=new it(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new ut(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new M(new X([])),r=new ut(e,t),s=new ut(e,t+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new X([])),r=new ut(e,t),s=new ut(e,t+1);let o=z();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ut(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||q(t.Yr,e.Yr)}static Kr(t,e){return q(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
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
*/class ay{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new it(ut.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _m(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new ut(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Bi:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),s=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(q);return e.forEach(s=>{const o=new ut(s,0),a=new ut(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],l=>{r=r.add(l.Yr)})}),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ut(new M(o),0);let l=new it(q);return this.Zr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Yr)),!0)},a),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach(r=>{const s=this.Xr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){G(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,s=>{const o=new ut(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new ut(e,0),s=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
*/class cy{constructor(t){this.ri=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=Jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():vt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Jt();const a=e.path,l=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||xg(Mg(p),r)<=0||(s.has(p.key)||fs(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x(9500)}ii(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new uy(this)}getSize(t){return S.resolve(this.size)}}class uy extends ey{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
*/class ly{constructor(t){this.persistence=t,this.si=new Ve(e=>$i(e),Hi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new Xi,this.targetCount=0,this.ai=on.ur()}forEachTarget(t,e){return this.si.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new on(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
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
*/class Al{constructor(t,e){this.ui={},this.overlays={},this.ci=new cs(0),this.li=!1,this.li=!0,this.hi=new oy,this.referenceDelegate=t(this),this.Pi=new ly(this),this.indexManager=new Wm,this.remoteDocumentCache=function(r){return new cy(r)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Gm(e),this.Ii=new sy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new iy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new ay(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){R("MemoryPersistence","Starting transaction:",t);const s=new hy(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(t,e){return S.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class hy extends Ug{constructor(t){super(),this.currentSequenceNumber=t}}class Yi{constructor(t){this.persistence=t,this.Ri=new Xi,this.Vi=null}static mi(t){return new Yi(t)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,r=>{const s=M.fromPath(r);return this.gi(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class es{constructor(t,e){this.persistence=t,this.pi=new Ve(r=>Bg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ty(this,e)}static mi(t,e){return new es(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}wr(t){let e=0;return this.pr(t,r=>{e++}).next(()=>e)}pr(t,e){return S.forEach(this.pi,(r,s)=>this.br(t,r,s).next(o=>o?S.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(l=>{l||(r++,o.removeEntry(a,U.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Lr(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
*/class Zi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=z(),s=z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Zi(t,e.fromCache,r,s)}}/**
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
*/class dy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
*/class fy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return rd()?8:Fg(wt())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new dy;return this.Ss(t,e,a).next(l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)})}).next(()=>o.result)}bs(t,e,r,s){return r.documentReadCount<this.fs?($e()<=B.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):($e()<=B.DEBUG&&R("QueryEngine","Query:",He(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?($e()<=B.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):S.resolve())}ys(t,e){if(uc(e))return S.resolve(null);let r=xt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=mi(e,null,"F"),r=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=z(...o);return this.ps.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Ds(e,l);return this.Cs(e,f,a,h.readTime)?this.ys(t,mi(e,null,"F")):this.vs(t,f,e,h)}))})))}ws(t,e,r,s){return uc(e)||s.isEqual(U.min())?S.resolve(null):this.ps.getDocuments(t,r).next(o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?S.resolve(null):($e()<=B.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),He(e)),this.vs(t,a,e,Lg(s,Hn)).next(l=>l))})}Ds(t,e){let r=new it(sl(t));return e.forEach((s,o)=>{fs(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return $e()<=B.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",He(e)),this.ps.getDocumentsMatchingQuery(t,e,me.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
*/const to="LocalStore",py=3e8;class gy{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new Y(q),this.xs=new Ve(o=>$i(o),Hi),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ry(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function my(n,t,e,r){return new gy(n,t,e,r)}async function kl(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=z();for(const f of s){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ls:f,removedBatchIds:a,addedBatchIds:l}))})})}function yy(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,h,f){const p=h.batch,v=p.keys();let C=S.resolve();return v.forEach(k=>{C=C.next(()=>f.getEntry(l,k)).next(D=>{const L=h.docVersions.get(k);G(L!==null,48541),D.version.compareTo(L)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),C.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=z();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Nl(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function vy(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const l=[];t.targetChanges.forEach((p,v)=>{const C=s.get(v);if(!C)return;l.push(e.Pi.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.Pi.addMatchingKeys(o,p.addedDocuments,v)));let k=C.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?k=k.withResumeToken(ft.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),s=s.insert(v,k),function(D,L,O){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=py?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(C,k,p)&&l.push(e.Pi.updateTargetData(o,k))});let h=Jt(),f=z();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(wy(o,a,t.documentUpdates).next(p=>{h=p.ks,f=p.qs})),!r.isEqual(U.min())){const p=e.Pi.getLastRemoteSnapshotVersion(o).next(v=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return S.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ms=s,o))}function wy(n,t,e){let r=z(),s=z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Jt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):R(to,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{ks:a,qs:s}})}function by(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Bi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Iy(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Pi.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.Pi.allocateTargetId(r).next(a=>(s=new le(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r})}async function Ii(n,t,e){const r=F(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!fn(a))throw a;R(to,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function _c(n,t,e){const r=F(n);let s=U.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=F(l),v=p.xs.get(f);return v!==void 0?S.resolve(p.Ms.get(v)):p.Pi.getTargetData(h,f)}(r,a,xt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:z())).next(l=>(_y(r,am(t),l),{documents:l,Qs:o})))}function _y(n,t,e){let r=n.Os.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(t,r)}class Tc{constructor(){this.activeTargetIds=fm()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ty{constructor(){this.Mo=new Tc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Tc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
*/class Ey{Oo(t){}shutdown(){}}/**
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
*/const Ec="ConnectivityMonitor";class Sc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){R(Ec,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){R(Ec,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let kr=null;function _i(){return kr===null?kr=function(){return 268435456+Math.round(2147483648*Math.random())}():kr++,"0x"+kr.toString(16)}/**
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
*/const Zs="RestConnection",Sy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Cy{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Wr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=_i(),l=this.zo(t,e.toUriEncodedString());R(Zs,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:f}=new URL(l),p=cn(f);return this.Jo(t,l,h,r,p).then(v=>(R(Zs,`Received RPC '${t}' ${a}: `,v),v),v=>{throw en(Zs,`RPC '${t}' ${a} failed with error: `,v,"url: ",l,"request:",r),v})}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}zo(t,e){const r=Sy[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
*/class Ay{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
*/const mt="WebChannelConnection";class ky extends Cy{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=_i();return new Promise((l,h)=>{const f=new Pu;f.setWithCredentials(!0),f.listenOnce(Lu.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Pr.NO_ERROR:const v=f.getResponseJson();R(mt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(v)),l(v);break;case Pr.TIMEOUT:R(mt,`RPC '${t}' ${a} timed out`),h(new P(A.DEADLINE_EXCEEDED,"Request time out"));break;case Pr.HTTP_ERROR:const C=f.getStatus();if(R(mt,`RPC '${t}' ${a} failed with status:`,C,"response text:",f.getResponseText()),C>0){let k=f.getResponseJson();Array.isArray(k)&&(k=k[0]);const D=k==null?void 0:k.error;if(D&&D.status&&D.message){const L=function(O){const $=O.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf($)>=0?$:A.UNKNOWN}(D.status);h(new P(L,D.message))}else h(new P(A.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new P(A.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{R(mt,`RPC '${t}' ${a} completed.`)}});const p=JSON.stringify(s);R(mt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",p,r,15)})}T_(t,e,r){const s=_i(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Vu(),l=xu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");R(mt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);this.I_(v);let C=!1,k=!1;const D=new Ay({Yo:O=>{k?R(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(C||(R(mt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),C=!0),R(mt,`RPC '${t}' stream ${s} sending:`,O),v.send(O))},Zo:()=>v.close()}),L=(O,$,K)=>{O.listen($,ot=>{try{K(ot)}catch(pt){setTimeout(()=>{throw pt},0)}})};return L(v,Dn.EventType.OPEN,()=>{k||(R(mt,`RPC '${t}' stream ${s} transport opened.`),D.o_())}),L(v,Dn.EventType.CLOSE,()=>{k||(k=!0,R(mt,`RPC '${t}' stream ${s} transport closed`),D.a_(),this.E_(v))}),L(v,Dn.EventType.ERROR,O=>{k||(k=!0,en(mt,`RPC '${t}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),D.a_(new P(A.UNAVAILABLE,"The operation could not be completed")))}),L(v,Dn.EventType.MESSAGE,O=>{var $;if(!k){const K=O.data[0];G(!!K,16349);const ot=K,pt=(ot==null?void 0:ot.error)||(($=ot[0])==null?void 0:$.error);if(pt){R(mt,`RPC '${t}' stream ${s} received error:`,pt);const _t=pt.status;let at=function(g){const y=et[g];if(y!==void 0)return ml(y)}(_t),b=pt.message;at===void 0&&(at=A.INTERNAL,b="Unknown error status: "+_t+" with message "+pt.message),k=!0,D.a_(new P(at,b)),v.close()}else R(mt,`RPC '${t}' stream ${s} received:`,K),D.u_(K)}}),L(l,Mu.STAT_EVENT,O=>{O.stat===li.PROXY?R(mt,`RPC '${t}' stream ${s} detected buffering proxy`):O.stat===li.NOPROXY&&R(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function ti(){return typeof document<"u"?document:null}/**
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
*/function ys(n){return new Om(n,!0)}/**
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
*/class Rl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/const Cc="PersistentStream";class Dl{constructor(t,e,r,s,o,a,l,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rl(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===A.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new P(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return R(Cc,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(R(Cc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ny extends Dl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Mm(this.serializer,t),r=function(s){if(!("targetChange"in s))return U.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?Vt(o.readTime):U.min()}(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=bi(this.serializer),e.addTarget=function(s,o){let a;const l=o.target;if(a=gi(l)?{documents:Um(s,l)}:{query:Fm(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wl(s,o.resumeToken);const h=yi(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=ts(s,o.snapshotVersion.toTimestamp());const h=yi(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=Bm(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=bi(this.serializer),e.removeTarget=t,this.q_(e)}}class Ry extends Dl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Vm(t.writeResults,t.commitTime),r=Vt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=bi(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>xm(this.serializer,r))};this.q_(e)}}/**
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
*/class Dy{}class Oy extends Dy{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new P(A.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(t,vi(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new P(A.UNKNOWN,o.toString())})}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(t,vi(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new P(A.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Py{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qt(e),this.aa=!1):R("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
*/const Me="RemoteStore";class Ly{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Fe(this)&&(R(Me,"Restarting streams for network reachability change."),await async function(l){const h=F(l);h.Ea.add(4),await or(h),h.Ra.set("Unknown"),h.Ea.delete(4),await vs(h)}(this))})}),this.Ra=new Py(r,s)}}async function vs(n){if(Fe(n))for(const t of n.da)await t(!0)}async function or(n){for(const t of n.da)await t(!1)}function Ol(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),so(e)?ro(e):pn(e).O_()&&no(e,t))}function eo(n,t){const e=F(n),r=pn(e);e.Ia.delete(t),r.O_()&&Pl(e,t),e.Ia.size===0&&(r.O_()?r.L_():Fe(e)&&e.Ra.set("Unknown"))}function no(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}pn(n).Y_(t)}function Pl(n,t){n.Va.Ue(t),pn(n).Z_(t)}function ro(n){n.Va=new km({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),pn(n).start(),n.Ra.ua()}function so(n){return Fe(n)&&!pn(n).x_()&&n.Ia.size>0}function Fe(n){return F(n).Ea.size===0}function Ll(n){n.Va=void 0}async function My(n){n.Ra.set("Online")}async function xy(n){n.Ia.forEach((t,e)=>{no(n,t)})}async function Vy(n,t){Ll(n),so(n)?(n.Ra.ha(t),ro(n)):n.Ra.set("Unknown")}async function Uy(n,t,e){if(n.Ra.set("Online"),t instanceof vl&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.Ia.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Ia.delete(a),r.Va.removeTarget(a))}(n,t)}catch(r){R(Me,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ns(n,r)}else if(t instanceof Vr?n.Va.Ze(t):t instanceof yl?n.Va.st(t):n.Va.tt(t),!e.isEqual(U.min()))try{const r=await Nl(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.Va.Tt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=s.Ia.get(l);if(!f)return;s.Ia.set(l,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),Pl(s,l);const p=new le(f.target,l,h,f.sequenceNumber);no(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){R(Me,"Failed to raise snapshot:",r),await ns(n,r)}}async function ns(n,t,e){if(!fn(t))throw t;n.Ea.add(1),await or(n),n.Ra.set("Offline"),e||(e=()=>Nl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R(Me,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await vs(n)})}function Ml(n,t){return t().catch(e=>ns(n,e,t))}async function ws(n){const t=F(n),e=be(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Bi;for(;Fy(t);)try{const s=await by(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,jy(t,s)}catch(s){await ns(t,s)}xl(t)&&Vl(t)}function Fy(n){return Fe(n)&&n.Ta.length<10}function jy(n,t){n.Ta.push(t);const e=be(n);e.O_()&&e.X_&&e.ea(t.mutations)}function xl(n){return Fe(n)&&!be(n).x_()&&n.Ta.length>0}function Vl(n){be(n).start()}async function By(n){be(n).ra()}async function qy(n){const t=be(n);for(const e of n.Ta)t.ea(e.mutations)}async function zy(n,t,e){const r=n.Ta.shift(),s=Wi.from(r,t,e);await Ml(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ws(n)}async function $y(n,t){t&&be(n).X_&&await async function(e,r){if(function(s){return Sm(s)&&s!==A.ABORTED}(r.code)){const s=e.Ta.shift();be(e).B_(),await Ml(e,()=>e.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ws(e)}}(n,t),xl(n)&&Vl(n)}async function Ac(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),R(Me,"RemoteStore received new credentials");const r=Fe(e);e.Ea.add(3),await or(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await vs(e)}async function Hy(n,t){const e=F(n);t?(e.Ea.delete(2),await vs(e)):t||(e.Ea.add(2),await or(e),e.Ra.set("Unknown"))}function pn(n){return n.ma||(n.ma=function(t,e,r){const s=F(t);return s.sa(),new Ny(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Xo:My.bind(null,n),t_:xy.bind(null,n),r_:Vy.bind(null,n),H_:Uy.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),so(n)?ro(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ll(n))})),n.ma}function be(n){return n.fa||(n.fa=function(t,e,r){const s=F(t);return s.sa(),new Ry(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:By.bind(null,n),r_:$y.bind(null,n),ta:qy.bind(null,n),na:zy.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await ws(n)):(await n.fa.stop(),n.Ta.length>0&&(R(Me,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
*/class io{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new io(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oo(n,t){if(Qt("AsyncQueue",`${t}: ${n}`),fn(n))return new P(A.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
*/class Ye{static emptySet(t){return new Ye(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=On(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ye;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
*/class kc{constructor(){this.ga=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):x(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class an{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new an(t,e,Ye.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ds(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
*/class Gy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Ky{constructor(){this.queries=Nc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,e){const r=F(t),s=r.queries;r.queries=Nc(),s.forEach((o,a)=>{for(const l of a.Sa)l.onError(e)})})(this,new P(A.ABORTED,"Firestore shutting down"))}}function Nc(){return new Ve(n=>rl(n),ds)}async function Wy(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new Gy,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=oo(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ao(e)}async function Qy(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Jy(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&ao(e)}function Xy(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function ao(n){n.Ca.forEach(t=>{t.next()})}var Ti,Rc;(Rc=Ti||(Ti={})).Ma="default",Rc.Cache="cache";class Yy{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new an(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=an.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ti.Cache}}/**
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
*/class Ul{constructor(t){this.key=t}}class Fl{constructor(t){this.key=t}}class Zy{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=sl(t),this.tu=new Ye(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new kc,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,v)=>{const C=s.get(p),k=fs(this.query,v)?v:null,D=!!C&&this.mutatedKeys.has(C.key),L=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;C&&k?C.data.isEqual(k.data)?D!==L&&(r.track({type:3,doc:k}),O=!0):this.su(C,k)||(r.track({type:2,doc:k}),O=!0,(h&&this.eu(k,h)>0||f&&this.eu(k,f)<0)&&(l=!0)):!C&&k?(r.track({type:0,doc:k}),O=!0):C&&!k&&(r.track({type:1,doc:C}),O=!0,(h||f)&&(l=!0)),O&&(k?(a=a.add(k),o=L?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((p,v)=>function(C,k){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Rt:L})}};return D(C)-D(k)}(p.type,v.type)||this.eu(p.doc,v.doc)),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new an(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const e=[];return t.forEach(r=>{this.Xa.has(r)||e.push(new Fl(r))}),this.Xa.forEach(r=>{t.has(r)||e.push(new Ul(r))}),e}cu(t){this.Ya=t.Qs,this.Xa=z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return an.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const co="SyncEngine";class tv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ev{constructor(t){this.key=t,this.hu=!1}}class nv{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ve(l=>rl(l),ds),this.Iu=new Map,this.Eu=new Set,this.du=new Y(M.comparator),this.Au=new Map,this.Ru=new Xi,this.Vu={},this.mu=new Map,this.fu=on.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function rv(n,t,e=!0){const r=Hl(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await jl(r,t,e,!0),s}async function sv(n,t){const e=Hl(n);await jl(e,t,!0,!1)}async function jl(n,t,e,r){const s=await Iy(n.localStore,xt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await iv(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ol(n.remoteStore,s),l}async function iv(n,t,e,r,s){n.pu=(v,C,k)=>async function(D,L,O,$){let K=L.view.ru(O);K.Cs&&(K=await _c(D.localStore,L.query,!1).then(({documents:at})=>L.view.ru(at,K)));const ot=$&&$.targetChanges.get(L.targetId),pt=$&&$.targetMismatches.get(L.targetId)!=null,_t=L.view.applyChanges(K,D.isPrimaryClient,ot,pt);return Oc(D,L.targetId,_t.au),_t.snapshot}(n,v,C,k);const o=await _c(n.localStore,t,!0),a=new Zy(t,o.Qs),l=a.ru(o.documents),h=ir.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);Oc(n,e,f.au);const p=new tv(t,e,a);return n.Tu.set(t,p),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),f.snapshot}async function ov(n,t,e){const r=F(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!ds(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ii(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&eo(r.remoteStore,s.targetId),Ei(r,s.targetId)}).catch(dn)):(Ei(r,s.targetId),await Ii(r.localStore,s.targetId,!0))}async function av(n,t){const e=F(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),eo(e.remoteStore,r.targetId))}async function cv(n,t,e){const r=gv(n);try{const s=await function(o,a){const l=F(o),h=J.now(),f=a.reduce((C,k)=>C.add(k.key),z());let p,v;return l.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Jt(),D=z();return l.Ns.getEntries(C,f).next(L=>{k=L,k.forEach((O,$)=>{$.isValidDocument()||(D=D.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(C,k)).next(L=>{p=L;const O=[];for(const $ of a){const K=bm($,p.get($.key).overlayedDocument);K!=null&&O.push(new Ue($.key,K,Ju(K.value.mapValue),Ht.exists(!0)))}return l.mutationQueue.addMutationBatch(C,h,O,a)}).next(L=>{v=L;const O=L.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(C,L.batchId,O)})}).then(()=>({batchId:v.batchId,changes:ol(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new Y(q)),h=h.insert(a,l),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,e),await ar(r,s.changes),await ws(r.remoteStore)}catch(s){const o=oo(s,"Failed to persist write");e.reject(o)}}async function Bl(n,t){const e=F(n);try{const r=await vy(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?G(a.hu,14607):s.removedDocuments.size>0&&(G(a.hu,42227),a.hu=!1))}),await ar(e,r,t)}catch(r){await dn(r)}}function Dc(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(o,a){const l=F(o);l.onlineState=a;let h=!1;l.queries.forEach((f,p)=>{for(const v of p.Sa)v.va(a)&&(h=!0)}),h&&ao(l)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function uv(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new Y(M.comparator);a=a.insert(o,vt.newNoDocument(o,U.min()));const l=z().add(o),h=new ms(U.min(),new Map,new Y(q),a,l);await Bl(r,h),r.du=r.du.remove(o),r.Au.delete(t),uo(r)}else await Ii(r.localStore,t,!1).then(()=>Ei(r,t,e)).catch(dn)}async function lv(n,t){const e=F(n),r=t.batch.batchId;try{const s=await yy(e.localStore,t);zl(e,r,null),ql(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ar(e,s)}catch(s){await dn(s)}}async function hv(n,t,e){const r=F(n);try{const s=await function(o,a){const l=F(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,a).next(p=>(G(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,t);zl(r,t,e),ql(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ar(r,s)}catch(s){await dn(s)}}function ql(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function zl(n,t,e){const r=F(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Ei(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(r=>{n.Ru.containsKey(r)||$l(n,r)})}function $l(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(eo(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),uo(n))}function Oc(n,t,e){for(const r of e)r instanceof Ul?(n.Ru.addReference(r.key,t),dv(n,r)):r instanceof Fl?(R(co,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||$l(n,r.key)):x(19791,{wu:r})}function dv(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(R(co,"New document in limbo: "+e),n.Eu.add(r),uo(n))}function uo(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new M(X.fromString(t)),r=n.fu.next();n.Au.set(r,new ev(e)),n.du=n.du.insert(e,r),Ol(n.remoteStore,new le(xt(Gi(e.path)),r,"TargetPurposeLimboResolution",cs.ce))}}async function ar(n,t,e){const r=F(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,h)=>{a.push(r.pu(h,t,e).then(f=>{var p;if((f||e)&&r.isPrimaryClient){const v=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){s.push(f);const v=Zi.As(h.targetId,f);o.push(v)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(l,h){const f=F(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(h,v=>S.forEach(v.Es,C=>f.persistence.referenceDelegate.addReference(p,v.targetId,C)).next(()=>S.forEach(v.ds,C=>f.persistence.referenceDelegate.removeReference(p,v.targetId,C)))))}catch(p){if(!fn(p))throw p;R(to,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const C=f.Ms.get(v),k=C.snapshotVersion,D=C.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(v,D)}}}(r.localStore,o))}async function fv(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){R(co,"User change. New user:",t.toKey());const r=await kl(e.localStore,t);e.currentUser=t,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new P(A.CANCELLED,o))})}),s.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ar(e,r.Ls)}}function pv(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return z().add(r.key);{let s=z();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Hl(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=uv.bind(null,t),t.Pu.H_=Jy.bind(null,t.eventManager),t.Pu.yu=Xy.bind(null,t.eventManager),t}function gv(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hv.bind(null,t),t}class rs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ys(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return my(this.persistence,new fy,t.initialUser,this.serializer)}Cu(t){return new Al(Yi.mi,this.serializer)}Du(t){return new Ty}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rs.provider={build:()=>new rs};class mv extends rs{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){G(this.persistence.referenceDelegate instanceof es,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ym(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Al(r=>es.mi(r,e),this.serializer)}}class Si{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fv.bind(null,this.syncEngine),await Hy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ky}()}createDatastore(t){const e=ys(t.databaseInfo.databaseId),r=function(s){return new ky(s)}(t.databaseInfo);return function(s,o,a,l){return new Oy(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(e,r,s,o,a){return new Ly(e,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Dc(this.syncEngine,e,0),function(){return Sc.v()?new Sc:new Ey}())}createSyncEngine(t,e){return function(r,s,o,a,l,h,f){const p=new nv(r,s,o,a,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=F(r);R(Me,"RemoteStore shutting down."),s.Ea.add(5),await or(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Si.provider={build:()=>new Si};/**
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
*/class yv{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
*/const Ie="FirestoreClient";class vv{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Fi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{R(Ie,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(R(Ie,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=oo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ei(n,t){n.asyncQueue.verifyOperationInProgress(),R(Ie,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await kl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Pc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await wv(n);R(Ie,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ac(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ac(t.remoteStore,s)),n._onlineComponents=t}async function wv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){R(Ie,"Using user provided OfflineComponentProvider");try{await ei(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===A.FAILED_PRECONDITION||r.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;en("Error using user provided cache. Falling back to memory cache: "+e),await ei(n,new rs)}}else R(Ie,"Using default OfflineComponentProvider"),await ei(n,new mv(void 0));return n._offlineComponents}async function Gl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(R(Ie,"Using user provided OnlineComponentProvider"),await Pc(n,n._uninitializedComponentsProvider._online)):(R(Ie,"Using default OnlineComponentProvider"),await Pc(n,new Si))),n._onlineComponents}function bv(n){return Gl(n).then(t=>t.syncEngine)}async function Iv(n){const t=await Gl(n),e=t.eventManager;return e.onListen=rv.bind(null,t.syncEngine),e.onUnlisten=ov.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=sv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=av.bind(null,t.syncEngine),e}function _v(n,t,e={}){const r=new ge;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,h){const f=new yv({next:v=>{f.Nu(),o.enqueueAndForget(()=>Qy(s,p));const C=v.docs.has(a);!C&&v.fromCache?h.reject(new P(A.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&v.fromCache&&l&&l.source==="server"?h.reject(new P(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),p=new Yy(Gi(a.path),f,{includeMetadataChanges:!0,qa:!0});return Wy(s,p)}(await Iv(n),n.asyncQueue,t,e,r)),r.promise}/**
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
*/function Kl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
*/const Lc=new Map;/**
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
*/const Wl="firestore.googleapis.com",Mc=!0;class xc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new P(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wl,this.ssl=Mc}else this.host=t.host,this.ssl=t.ssl??Mc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Cl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Jm)throw new P(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kl(t.experimentalLongPollingOptions??{}),function(e){if(e.timeoutSeconds!==void 0){if(isNaN(e.timeoutSeconds))throw new P(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new P(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new P(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(e,r){return e.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lo{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new P(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new _g;switch(e.type){case"firstParty":return new Cg(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new P(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Lc.get(t);e&&(R("ComponentProvider","Removing Datastore"),Lc.delete(t),e.terminate())}(this),Promise.resolve()}}function Tv(n,t,e,r={}){var s;n=$n(n,lo);const o=cn(t),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;o&&(Kc(`https://${h}`),Wc("Firestore",!0)),a.host!==Wl&&a.host!==h&&en("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...a,host:h,ssl:o,emulatorOptions:r};if(!De(f,l)&&(n._setSettings(f),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=yt.MOCK_USER;else{p=Wh(r.mockUserToken,(s=n._app)==null?void 0:s.options.projectId);const C=r.mockUserToken.sub||r.mockUserToken.user_id;if(!C)throw new P(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new yt(C)}n._authCredentials=new Tg(new Fu(p,v))}}/**
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
*/class ho{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ho(this.firestore,t,this._query)}}class lt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(rr(e,lt._jsonSchema))return new lt(t,r||null,new M(X.fromString(e.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:nt("string",lt._jsonSchemaVersion),referencePath:nt("string")};class Xn extends ho{constructor(t,e,r){super(t,e,Gi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new M(t))}withConverter(t){return new Xn(this.firestore,t,this._path)}}function Ev(n,t,...e){if(n=jt(n),arguments.length===1&&(t=Fi.newId()),Og("doc","path",t),n instanceof lo){const r=X.fromString(t,...e);return Ja(r),new lt(n,null,new M(r))}{if(!(n instanceof lt||n instanceof Xn))throw new P(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Ja(r),new lt(n.firestore,n instanceof Xn?n.converter:null,new M(r))}}/**
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
*/const Vc="AsyncQueue";class Uc{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rl(this,"async_queue_retry"),this._c=()=>{const r=ti();r&&R(Vc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ti();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ti();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new ge;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!fn(t))throw t;R(Vc,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Qt("INTERNAL UNHANDLED ERROR: ",Fc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=io.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&x(47125,{Pc:Fc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Fc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class fo extends lo{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Uc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Uc(t),this._firestoreClient=void 0,await t}}}function Sv(n,t){const e=typeof n=="object"?n:Yc(),r=typeof n=="string"?n:Wr,s=ki(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Gh("firestore");o&&Tv(s,...o)}return s}function Ql(n){if(n._terminated)throw new P(A.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cv(n),n._firestoreClient}function Cv(n){var t,e,r;const s=n._freezeSettings(),o=function(a,l,h,f){return new $g(a,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Kl(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((t=n._app)==null?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||(e=s.localCache)!=null&&e._offlineComponentProvider&&(r=s.localCache)!=null&&r._onlineComponentProvider&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new vv(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
*/class At{constructor(t){this._byteString=t}static fromBase64String(t){try{return new At(ft.fromBase64String(t))}catch(e){throw new P(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new At(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(rr(t,At._jsonSchema))return At.fromBase64String(t.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:nt("string",At._jsonSchemaVersion),bytes:nt("string")};/**
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
*/class po{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new P(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
*/class Jl{constructor(t){this._methodName=t}}/**
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
*/class Ut{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(t){if(rr(t,Ut._jsonSchema))return new Ut(t.latitude,t.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:nt("string",Ut._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
* @license
* Copyright 2024 Google LLC
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
*/class Ft{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(e,r){if(e.length!==r.length)return!1;for(let s=0;s<e.length;++s)if(e[s]!==r[s])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ft._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(rr(t,Ft._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ft(t.vectorValues);throw new P(A.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ft._jsonSchemaVersion="firestore/vectorValue/1.0",Ft._jsonSchema={type:nt("string",Ft._jsonSchemaVersion),vectorValues:nt("object")};/**
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
*/const Av=/^__.*__$/;class kv{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new sr(t,this.data,e,this.fieldTransforms)}}function Xl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class go{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new go({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var e;const r=(e=this.path)==null?void 0:e.child(t),s=this.Vc({path:r,fc:!1});return s.gc(t),s}yc(t){var e;const r=(e=this.path)==null?void 0:e.child(t),s=this.Vc({path:r,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ss(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Xl(this.Ac)&&Av.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Nv{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ys(t)}Cc(t,e,r,s=!1){return new go({Ac:t,methodName:e,Dc:r,path:dt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rv(n){const t=n._freezeSettings(),e=ys(n._databaseId);return new Nv(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Dv(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);eh("Data must be an object, but it was:",a,r);const l=Zl(r,a);let h,f;if(o.merge)h=new Nt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const C=Ov(t,v,e);if(!a.contains(C))throw new P(A.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Lv(p,C)||p.push(C)}h=new Nt(p),f=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=a.fieldTransforms;return new kv(new Ct(l),h,f)}function Yl(n,t){if(th(n=jt(n)))return eh("Unsupported field value:",t,n),Zl(n,t);if(n instanceof Jl)return function(e,r){if(!Xl(r.Ac))throw r.Sc(`${e._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${e._methodName}() is not currently supported inside arrays`);const s=e._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(e,r){const s=[];let o=0;for(const a of e){let l=Yl(a,r.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,t)}return function(e,r){if((e=jt(e))===null)return{nullValue:"NULL_VALUE"};if(typeof e=="number")return pm(r.serializer,e);if(typeof e=="boolean")return{booleanValue:e};if(typeof e=="string")return{stringValue:e};if(e instanceof Date){const s=J.fromDate(e);return{timestampValue:ts(r.serializer,s)}}if(e instanceof J){const s=new J(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ts(r.serializer,s)}}if(e instanceof Ut)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof At)return{bytesValue:wl(r.serializer,e._byteString)};if(e instanceof lt){const s=r.databaseId,o=e.firestore._databaseId;if(!o.isEqual(s))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ji(e.firestore._databaseId||r.databaseId,e._key.path)}}if(e instanceof Ft)return function(s,o){return{mapValue:{fields:{[Wu]:{stringValue:Qu},[Qr]:{arrayValue:{values:s.toArray().map(a=>{if(typeof a!="number")throw o.Sc("VectorValues must only contain numeric values.");return Ki(o.serializer,a)})}}}}}}(e,r);throw r.Sc(`Unsupported field value: ${ji(e)}`)}(n,t)}function Zl(n,t){const e={};return qu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xe(n,(r,s)=>{const o=Yl(s,t.mc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function th(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof Ut||n instanceof At||n instanceof lt||n instanceof Jl||n instanceof Ft)}function eh(n,t,e){if(!th(e)||!ju(e)){const r=ji(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Ov(n,t,e){if((t=jt(t))instanceof po)return t._internalPath;if(typeof t=="string")return nh(n,t);throw ss("Field path arguments must be of type string or ",n,!1,void 0,e)}const Pv=new RegExp("[~\\*/\\[\\]]");function nh(n,t,e){if(t.search(Pv)>=0)throw ss(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new po(...t.split("."))._internalPath}catch{throw ss(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ss(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new P(A.INVALID_ARGUMENT,l+n+h)}function Lv(n,t){return n.some(e=>e.isEqual(t))}/**
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
*/class rh{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Mv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(sh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Mv extends rh{data(){return super.data()}}function sh(n,t){return typeof t=="string"?nh(n,t):t instanceof po?t._internalPath:t._delegate._internalPath}class xv{convertValue(t,e="none"){switch(we(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ve(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return xe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)==null?void 0:e[Qr].arrayValue)==null?void 0:r.values)==null?void 0:s.map(a=>tt(a.doubleValue));return new Ft(o)}convertGeoPoint(t){return new Ut(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ls(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Gn(t));default:return null}}convertTimestamp(t){const e=ye(t);return new J(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);G(Sl(r),9688,{name:t});const s=new Kn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
*/function Vv(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Ln{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Re extends rh{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(sh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new P(A.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Re._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()||(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),e}}Re._jsonSchemaVersion="firestore/documentSnapshot/1.0",Re._jsonSchema={type:nt("string",Re._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Ur extends Re{data(t={}){return super.data(t)}}class Bn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ln(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ur(this._firestore,this._userDataWriter,r.key,r,new Ln(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new P(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Ur(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ln(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ur(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ln(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:Uv(a.type),doc:l,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new P(A.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Bn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Fi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Uv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
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
*/function Fv(n){n=$n(n,lt);const t=$n(n.firestore,fo);return _v(Ql(t),n._key).then(e=>qv(t,n,e))}Bn._jsonSchemaVersion="firestore/querySnapshot/1.0",Bn._jsonSchema={type:nt("string",Bn._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class jv extends xv{constructor(t){super(),this.firestore=t}convertBytes(t){return new At(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,e)}}function jc(n,t,e){n=$n(n,lt);const r=$n(n.firestore,fo),s=Vv(n.converter,t);return Bv(r,[Dv(Rv(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ht.none())])}function Bv(n,t){return function(e,r){const s=new ge;return e.asyncQueue.enqueueAndForget(async()=>cv(await bv(e),r,s)),s.promise}(Ql(n),t)}function qv(n,t,e){const r=e.docs.get(t._key),s=new jv(n);return new Re(n,s,t._key,r,new Ln(e.hasPendingWrites,e.fromCache),t.converter)}(function(n,t=!0){(function(e){hn=e})(un),Ze(new Oe("firestore",(e,{instanceIdentifier:r,options:s})=>{const o=e.getProvider("app").getImmediate(),a=new fo(new Eg(e.getProvider("auth-internal")),new Ag(o,e.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new P(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(l.options.projectId,h)}(o,r),o);return s={useFetchStreams:t,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),fe(Ga,Ka,n),fe(Ga,Ka,"esm2020")})();var ie={};const zv={apiKey:ie.FIREBASE_API_KEY||"AIzaSyB5JtqqMJgWzZrua42z_n2Vu-7ZNWanlE4",authDomain:ie.FIREBASE_AUTH_DOMAIN||"boomdigital-f6a06.firebaseapp.com",databaseURL:ie.FIREBASE_DATABASE_URL||"https://boomdigital-f6a06-default-rtdb.firebaseio.com",projectId:ie.FIREBASE_PROJECT_ID||"boomdigital-f6a06",storageBucket:ie.FIREBASE_STORAGE_BUCKET||"boomdigital-f6a06.firebasestorage.app",messagingSenderId:ie.FIREBASE_MESSAGING_SENDER_ID||"398341141",appId:ie.FIREBASE_APP_ID||"1:398341141:web:d895a031215defcdb88a1c",measurementId:ie.FIREBASE_MEASUREMENT_ID||"G-ELW9J8B9J6"},ih=Xc(zv);bg(ih);const $v=Sv(ih),Hv=async n=>{try{const t=Ev($v,"analytics","pageViews"),e=await Fv(t);if(e.exists()){const r=e.data(),s={...r,[n]:(r[n]||0)+1,total:(r.total||0)+1,lastUpdated:new Date().toISOString()};await jc(t,s)}else await jc(t,{[n]:1,total:1,lastUpdated:new Date().toISOString()})}catch(t){console.error("Error tracking page view:",t)}};export{$v as db,Hv as trackPageView};
