const Vh=()=>{};var ma={};/**
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
*/const jc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Uh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,p=o>>2,v=(o&3)<<4|l>>4;let C=(l&15)<<2|f>>6,A=f&63;h||(A=64,a||(C=64)),r.push(e[p],e[v],e[C],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(jc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Uh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||a==null||l==null||h==null)throw new Fh;const f=o<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jh=function(n){const t=jc(n);return Bc.encodeByteArray(t,!0)},Ur=function(n){return jh(n).replace(/\./g,"")},qc=function(n){try{return Bc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
*/function Bh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const qh=()=>Bh().__FIREBASE_DEFAULTS__,zh=()=>{if(typeof process>"u"||typeof ma>"u")return;const n=ma.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$h=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&qc(n[1]);return t&&JSON.parse(t)},ss=()=>{try{return Vh()||qh()||zh()||$h()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zc=n=>{var t,e;return(e=(t=ss())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Hh=n=>{const t=zc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},$c=()=>{var n;return(n=ss())==null?void 0:n.config},Hc=n=>{var t;return(t=ss())==null?void 0:t[`_${n}`]};/**
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
*/class Gh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
*/function an(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
*/function Kh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ur(JSON.stringify(e)),Ur(JSON.stringify(a)),""].join(".")}const Ln={};function Wh(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ln))Ln[t]?n.emulator.push(t):n.prod.push(t);return n}function Qh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ya=!1;function Kc(n,t){if(typeof window>"u"||typeof document>"u"||!an(window.location.host)||Ln[n]===t||Ln[n]||ya)return;Ln[n]=t;function e(v){return`__firebase__banner__${v}`}const r="__firebase__banner",s=Wh().prod.length>0;function o(){const v=document.getElementById(r);v&&v.remove()}function a(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,C){v.setAttribute("width","24"),v.setAttribute("id",C),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{ya=!0,o()},v}function f(v,C){v.setAttribute("id",C),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function p(){const v=Qh(r),C=e("text"),A=document.getElementById(C)||document.createElement("span"),R=e("learnmore"),L=document.getElementById(R)||document.createElement("a"),O=e("preprendIcon"),$=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const K=v.element;a(K),f(L,R);const ot=h();l($,O),K.append($,A,L,ot),document.body.appendChild(K)}s?(A.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
*/function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Jh(){var n;const t=(n=ss())==null?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ed(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nd(){return!Jh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rd(){try{return typeof indexedDB=="object"}catch{return!1}}function sd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
*/const id="FirebaseError";class Jt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=id,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?od(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Jt(s,l,r)}}function od(n,t){return n.replace(ad,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ad=/\{\$([^}]+)}/g;function cd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function De(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(va(o)&&va(a)){if(!De(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function va(n){return n!==null&&typeof n=="object"}/**
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
*/function Yn(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ud(n,t){const e=new ld(n,t);return e.subscribe.bind(e)}class ld{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");hd(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=zs),s.error===void 0&&(s.error=zs),s.complete===void 0&&(s.complete=zs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hd(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function zs(){}/**
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
*/function jt(n){return n&&n._delegate?n._delegate:n}class Re{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
*/const Ce="[DEFAULT]";/**
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
*/class dd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Gh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pd(t))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ce){return this.instances.has(t)}getOptions(t=Ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ce){return this.component?this.component.multipleInstances?t:Ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fd(n){return n===Ce?void 0:n}function pd(n){return n.instantiationMode==="EAGER"}/**
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
*/class gd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new dd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const md={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},yd=B.INFO,vd={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},wd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=vd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Si{constructor(t){this.name=t,this._logLevel=yd,this._logHandler=wd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?md[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Ed=(n,t)=>t.some(e=>n instanceof e);let wa,Ea;function bd(){return wa||(wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _d(){return Ea||(Ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wc=new WeakMap,ei=new WeakMap,Qc=new WeakMap,$s=new WeakMap,Ci=new WeakMap;function Id(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(le(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Wc.set(e,n)}).catch(()=>{}),Ci.set(t,n),t}function Td(n){if(ei.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ei.set(n,t)}let ni={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ei.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Qc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return le(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Sd(n){ni=n(ni)}function Cd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Hs(this),t,...e);return Qc.set(r,t.sort?t.sort():[t]),le(r)}:_d().includes(n)?function(...t){return n.apply(Hs(this),t),le(Wc.get(this))}:function(...t){return le(n.apply(Hs(this),t))}}function kd(n){return typeof n=="function"?Cd(n):(n instanceof IDBTransaction&&Td(n),Ed(n,bd())?new Proxy(n,ni):n)}function le(n){if(n instanceof IDBRequest)return Id(n);if($s.has(n))return $s.get(n);const t=kd(n);return t!==n&&($s.set(n,t),Ci.set(t,n)),t}const Hs=n=>Ci.get(n);function Ad(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=le(a);return r&&a.addEventListener("upgradeneeded",h=>{r(le(a.result),h.oldVersion,h.newVersion,le(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Nd=["get","getKey","getAll","getAllKeys","count"],Dd=["put","add","delete","clear"],Gs=new Map;function ba(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Gs.get(t))return Gs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Dd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nd.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return Gs.set(t,o),o}Sd(n=>({...n,get:(t,e,r)=>ba(t,e)||n.get(t,e,r),has:(t,e)=>!!ba(t,e)||n.has(t,e)}));/**
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
*/class Rd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Od(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}else return null}).filter(t=>t).join(" ")}}function Od(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ri="@firebase/app",_a="0.14.4";/**
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
*/const Gt=new Si("@firebase/app"),Pd="@firebase/app-compat",Ld="@firebase/analytics-compat",Md="@firebase/analytics",xd="@firebase/app-check-compat",Vd="@firebase/app-check",Ud="@firebase/auth",Fd="@firebase/auth-compat",jd="@firebase/database",Bd="@firebase/data-connect",qd="@firebase/database-compat",zd="@firebase/functions",$d="@firebase/functions-compat",Hd="@firebase/installations",Gd="@firebase/installations-compat",Kd="@firebase/messaging",Wd="@firebase/messaging-compat",Qd="@firebase/performance",Xd="@firebase/performance-compat",Jd="@firebase/remote-config",Yd="@firebase/remote-config-compat",Zd="@firebase/storage",tf="@firebase/storage-compat",ef="@firebase/firestore",nf="@firebase/ai",rf="@firebase/firestore-compat",sf="firebase",of="12.4.0";/**
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
*/const si="[DEFAULT]",af={[ri]:"fire-core",[Pd]:"fire-core-compat",[Md]:"fire-analytics",[Ld]:"fire-analytics-compat",[Vd]:"fire-app-check",[xd]:"fire-app-check-compat",[Ud]:"fire-auth",[Fd]:"fire-auth-compat",[jd]:"fire-rtdb",[Bd]:"fire-data-connect",[qd]:"fire-rtdb-compat",[zd]:"fire-fn",[$d]:"fire-fn-compat",[Hd]:"fire-iid",[Gd]:"fire-iid-compat",[Kd]:"fire-fcm",[Wd]:"fire-fcm-compat",[Qd]:"fire-perf",[Xd]:"fire-perf-compat",[Jd]:"fire-rc",[Yd]:"fire-rc-compat",[Zd]:"fire-gcs",[tf]:"fire-gcs-compat",[ef]:"fire-fst",[rf]:"fire-fst-compat",[nf]:"fire-vertex","fire-js":"fire-js",[sf]:"fire-js-all"};/**
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
*/const Fr=new Map,cf=new Map,ii=new Map;function Ia(n,t){try{n.container.addComponent(t)}catch(e){Gt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ye(n){const t=n.name;if(ii.has(t))return Gt.debug(`There were multiple attempts to register component ${t}.`),!1;ii.set(t,n);for(const e of Fr.values())Ia(e,n);for(const e of cf.values())Ia(e,n);return!0}function ki(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Pt(n){return n==null?!1:n.settings!==void 0}/**
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
*/const uf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new Jn("app","Firebase",uf);/**
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
*/class lf{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
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
*/const cn=of;function Xc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:si,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw he.create("bad-app-name",{appName:String(s)});if(e||(e=$c()),!e)throw he.create("no-options");const o=Fr.get(s);if(o){if(De(e,o.options)&&De(r,o.config))return o;throw he.create("duplicate-app",{appName:s})}const a=new gd(s);for(const h of ii.values())a.addComponent(h);const l=new lf(e,r,a);return Fr.set(s,l),l}function Jc(n=si){const t=Fr.get(n);if(!t&&n===si&&$c())return Xc();if(!t)throw he.create("no-app",{appName:n});return t}function de(n,t,e){let r=af[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}Ye(new Re(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
*/const hf="firebase-heartbeat-database",df=1,Bn="firebase-heartbeat-store";let Ks=null;function Yc(){return Ks||(Ks=Ad(hf,df,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Bn)}catch(e){console.warn(e)}}}}).catch(n=>{throw he.create("idb-open",{originalErrorMessage:n.message})})),Ks}async function ff(n){try{const t=(await Yc()).transaction(Bn),e=await t.objectStore(Bn).get(Zc(n));return await t.done,e}catch(t){if(t instanceof Jt)Gt.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gt.warn(e.message)}}}async function Ta(n,t){try{const e=(await Yc()).transaction(Bn,"readwrite");await e.objectStore(Bn).put(t,Zc(n)),await e.done}catch(e){if(e instanceof Jt)Gt.warn(e.message);else{const r=he.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(r.message)}}}function Zc(n){return`${n.name}!${n.options.appId}`}/**
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
*/const pf=1024,gf=30;class mf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new vf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sa();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>gf){const o=wf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sa(),{heartbeatsToSend:r,unsentEntries:s}=yf(this._heartbeatsCache.heartbeats),o=Ur(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Gt.warn(e),""}}}function Sa(){return new Date().toISOString().substring(0,10)}function yf(n,t=pf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ca(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ca(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class vf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rd()?sd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ff(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Ta(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Ta(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}else return}}function Ca(n){return Ur(JSON.stringify({version:2,heartbeats:n})).length}function wf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
*/function Ef(n){Ye(new Re("platform-logger",t=>new Rd(t),"PRIVATE")),Ye(new Re("heartbeat",t=>new mf(t),"PRIVATE")),de(ri,_a,n),de(ri,_a,"esm2020"),de("fire-js","")}Ef("");var bf="firebase",_f="12.4.0";/**
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
*/de(bf,_f,"app");function tu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const If=tu,eu=new Jn("auth","Firebase",tu());/**
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
*/const jr=new Si("@firebase/auth");function Tf(n,...t){jr.logLevel<=B.WARN&&jr.warn(`Auth (${cn}): ${n}`,...t)}function Ar(n,...t){jr.logLevel<=B.ERROR&&jr.error(`Auth (${cn}): ${n}`,...t)}/**
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
*/function Kt(n,...t){throw Ai(n,...t)}function Lt(n,...t){return Ai(n,...t)}function nu(n,t,e){const r={...If(),[t]:e};return new Jn("auth","Firebase",r).create(t,{appName:n.name})}function Ae(n){return nu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ai(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return eu.create(n,...t)}function V(n,t,...e){if(!n)throw Ai(t,...e)}function zt(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ar(t),new Error(t)}function Wt(n,t){n||zt(t)}/**
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
*/function oi(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Sf(){return ka()==="http:"||ka()==="https:"}function ka(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
*/function Cf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sf()||Zh()||"connection"in navigator)?navigator.onLine:!0}function kf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
*/class Zn{constructor(t,e){this.shortDelay=t,this.longDelay=e,Wt(e>t,"Short delay should be less than long delay!"),this.isMobile=Xh()||td()}get(){return Cf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Ni(n,t){Wt(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
*/class ru{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const Af={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const Nf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Df=new Zn(3e4,6e4);function Di(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function un(n,t,e,r,s={}){return su(n,s,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=Yn({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:t,headers:h,...o};return Yh()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&an(n.emulatorConfig.host)&&(f.credentials="include"),ru.fetch()(await iu(n,n.config.apiHost,e,l),f)})}async function su(n,t,e){n._canInitEmulator=!1;const r={...Af,...t};try{const s=new Of(n),o=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw _r(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw _r(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw _r(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw _r(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw nu(n,p,f);Kt(n,p)}}catch(s){if(s instanceof Jt)throw s;Kt(n,"network-request-failed",{message:String(s)})}}async function Rf(n,t,e,r,s={}){const o=await un(n,t,e,r,s);return"mfaPendingCredential"in o&&Kt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function iu(n,t,e,r){const s=`${t}${e}?${r}`,o=n,a=o.config.emulator?Ni(n.config,s):`${n.config.apiScheme}://${s}`;return Nf.includes(e)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Of{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),Df.get())})}}function _r(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=Lt(n,t,r);return s.customData._tokenResponse=e,s}/**
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
*/async function Pf(n,t){return un(n,"POST","/v1/accounts:delete",t)}async function Br(n,t){return un(n,"POST","/v1/accounts:lookup",t)}/**
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
*/function Mn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Lf(n,t=!1){const e=jt(n),r=await e.getIdToken(t),s=Ri(r);V(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Mn(Ws(s.auth_time)),issuedAtTime:Mn(Ws(s.iat)),expirationTime:Mn(Ws(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ws(n){return Number(n)*1e3}function Ri(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=qc(e);return s?JSON.parse(s):(Ar("Failed to decode base64 JWT payload"),null)}catch(s){return Ar("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Aa(n){const t=Ri(n);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
*/async function qn(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Jt&&Mf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Mf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
*/class xf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class ai{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function qr(n){var t;const e=n.auth,r=await n.getIdToken(),s=await qn(n,Br(e,{idToken:r}));V(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=(t=o.providerUserInfo)!=null&&t.length?ou(o.providerUserInfo):[],l=Uf(n.providerData,a),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),p=h?f:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ai(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,v)}async function Vf(n){const t=jt(n);await qr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Uf(n,t){return[...n.filter(e=>!t.some(r=>r.providerId===e.providerId)),...t]}function ou(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
*/async function Ff(n,t){const e=await su(n,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await iu(n,s,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&an(n.emulatorConfig.host)&&(h.credentials="include"),ru.fetch()(a,h)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function jf(n,t){return un(n,"POST","/v2/accounts:revokeToken",Di(n,t))}/**
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
*/class We{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Aa(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){V(t.length!==0,"internal-error");const e=Aa(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:o}=await Ff(t,e);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:o}=e,a=new We;return r&&(V(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),o&&(V(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new We,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
*/function se(n,t){V(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class At{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new xf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ai(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await qn(this,this.stsTokenManager.getToken(this.auth,t));return V(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Lf(this,t)}reload(){return Vf(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new At({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(Ae(this.auth));const t=await this.getIdToken();return await qn(this,Pf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,o=e.phoneNumber??void 0,a=e.photoURL??void 0,l=e.tenantId??void 0,h=e._redirectEventId??void 0,f=e.createdAt??void 0,p=e.lastLoginAt??void 0,{uid:v,emailVerified:C,isAnonymous:A,providerData:R,stsTokenManager:L}=e;V(v&&L,t,"internal-error");const O=We.fromJSON(this.name,L);V(typeof v=="string",t,"internal-error"),se(r,t.name),se(s,t.name),V(typeof C=="boolean",t,"internal-error"),V(typeof A=="boolean",t,"internal-error"),se(o,t.name),se(a,t.name),se(l,t.name),se(h,t.name),se(f,t.name),se(p,t.name);const $=new At({uid:v,auth:t,email:s,emailVerified:C,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:O,createdAt:f,lastLoginAt:p});return R&&Array.isArray(R)&&($.providerData=R.map(K=>({...K}))),h&&($._redirectEventId=h),$}static async _fromIdTokenResponse(t,e,r=!1){const s=new We;s.updateFromServerResponse(e);const o=new At({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await qr(o),o}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];V(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?ou(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),l=new We;l.updateFromIdToken(r);const h=new At({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ai(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
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
*/const Na=new Map;function $t(n){Wt(n instanceof Function,"Expected a class definition");let t=Na.get(n);return t?(Wt(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Na.set(n,t),t)}/**
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
*/class au{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}au.type="NONE";const Da=au;/**
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
*/function Nr(n,t,e){return`firebase:${n}:${t}:${e}`}class Qe{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Nr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Nr("persistence",s.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Br(this.auth,{idToken:t}).catch(()=>{});return e?At._fromGetAccountInfoResponse(this.auth,e,t):null}return At._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Qe($t(Da),t,r);const s=(await Promise.all(e.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||$t(Da);const a=Nr(r,t.config.apiKey,t.name);let l=null;for(const f of e)try{const p=await f._get(a);if(p){let v;if(typeof p=="string"){const C=await Br(t,{idToken:p}).catch(()=>{});if(!C)break;v=await At._fromGetAccountInfoResponse(t,C,p)}else v=At._fromJSON(t,p);f!==o&&(l=v),o=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Qe(o,t,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(e.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Qe(o,t,r))}}/**
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
*/function Ra(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fu(t))return"Blackberry";if(pu(t))return"Webos";if(uu(t))return"Safari";if((t.includes("chrome/")||lu(t))&&!t.includes("edge/"))return"Chrome";if(du(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cu(n=wt()){return/firefox\//i.test(n)}function uu(n=wt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lu(n=wt()){return/crios\//i.test(n)}function hu(n=wt()){return/iemobile/i.test(n)}function du(n=wt()){return/android/i.test(n)}function fu(n=wt()){return/blackberry/i.test(n)}function pu(n=wt()){return/webos/i.test(n)}function Oi(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Bf(n=wt()){var t;return Oi(n)&&!!((t=window.navigator)!=null&&t.standalone)}function qf(){return ed()&&document.documentMode===10}function gu(n=wt()){return Oi(n)||du(n)||pu(n)||fu(n)||/windows phone/i.test(n)||hu(n)}/**
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
*/function mu(n,t=[]){let e;switch(n){case"Browser":e=Ra(wt());break;case"Worker":e=`${Ra(wt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${cn}/${r}`}/**
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
*/class zf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((a,l)=>{try{const h=t(o);a(h)}catch(h){l(h)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
*/async function $f(n,t={}){return un(n,"GET","/v2/passwordPolicy",Di(n,t))}/**
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
*/const Hf=6;class Gf{constructor(t){var e;const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??Hf,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((e=t.allowedNonAlphanumericCharacters)==null?void 0:e.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
*/class Kf{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oa(this),this.idTokenSubscription=new Oa(this),this.beforeStateQueue=new zf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=$t(e)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await Qe.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Br(this,{idToken:t}),r=await At._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Pt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)==null?void 0:e._redirectEventId,l=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(t);(!a||a===l)&&h!=null&&h.user&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await qr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=kf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Pt(this.app))return Promise.reject(Ae(this));const e=t?jt(t):null;return e&&V(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(Ae(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Pt(this.app)?Promise.reject(Ae(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $f(this),e=new Gf(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Jn("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await jf(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&$t(t)||this._popupRedirectResolver;V(e,this,"argument-error"),this.redirectPersistenceManager=await Qe.create(this,[$t(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof e=="function"){const h=t.addObserver(e,r,s);return()=>{a=!0,h()}}else{const h=t.addObserver(e);return()=>{a=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=mu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Tf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Pi(n){return jt(n)}class Oa{constructor(t){this.auth=t,this.observer=null,this.addObserver=ud(e=>this.observer=e)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wf(n){Li=n}function Qf(n){return Li.loadJS(n)}function Xf(){return Li.gapiScript}function Jf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
*/function Yf(n,t){const e=ki(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),s=e.getOptions();if(De(s,t??{}))return r;Kt(r,"already-initialized")}return e.initialize({options:t})}function Zf(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map($t);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function tp(n,t,e){const r=Pi(n);V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,o=yu(t),{host:a,port:l}=ep(t),h=l===null?"":`:${l}`,f={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){V(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),V(De(f,r.config.emulator)&&De(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,an(a)?(Gc(`${o}//${a}${h}`),Kc("Auth",!0)):np()}function yu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function ep(n){const t=yu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Pa(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Pa(a)}}}function Pa(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function np(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
*/class vu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return zt("not implemented")}_getIdTokenResponse(t){return zt("not implemented")}_linkToIdToken(t,e){return zt("not implemented")}_getReauthenticationResolver(t){return zt("not implemented")}}/**
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
*/async function Xe(n,t){return Rf(n,"POST","/v1/accounts:signInWithIdp",Di(n,t))}/**
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
*/const rp="http://localhost";class Oe extends vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Oe(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Kt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...o}=e;if(!r||!s)return null;const a=new Oe(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Xe(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Xe(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Xe(t,e)}buildRequest(){const t={requestUri:rp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Yn(e)}return t}}/**
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
*/class wu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
*/class tr extends wu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
*/class ie extends tr{constructor(){super("facebook.com")}static credential(t){return Oe._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ie.credentialFromTaggedObject(t)}static credentialFromError(t){return ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ie.credential(t.oauthAccessToken)}catch{return null}}}ie.FACEBOOK_SIGN_IN_METHOD="facebook.com";ie.PROVIDER_ID="facebook.com";/**
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
*/class oe extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Oe._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return oe.credentialFromTaggedObject(t)}static credentialFromError(t){return oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return oe.credential(e,r)}catch{return null}}}oe.GOOGLE_SIGN_IN_METHOD="google.com";oe.PROVIDER_ID="google.com";/**
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
*/class ae extends tr{constructor(){super("github.com")}static credential(t){return Oe._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ae.credentialFromTaggedObject(t)}static credentialFromError(t){return ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ae.credential(t.oauthAccessToken)}catch{return null}}}ae.GITHUB_SIGN_IN_METHOD="github.com";ae.PROVIDER_ID="github.com";/**
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
*/class ce extends tr{constructor(){super("twitter.com")}static credential(t,e){return Oe._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ce.credentialFromTaggedObject(t)}static credentialFromError(t){return ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return ce.credential(e,r)}catch{return null}}}ce.TWITTER_SIGN_IN_METHOD="twitter.com";ce.PROVIDER_ID="twitter.com";/**
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
*/class Ze{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const o=await At._fromIdTokenResponse(t,r,s),a=La(r);return new Ze({user:o,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=La(r);return new Ze({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function La(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
*/class zr extends Jt{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zr.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new zr(t,e,r,s)}}function Eu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zr._fromErrorAndOperation(n,s,t,r):s})}async function sp(n,t,e=!1){const r=await qn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Ze._forOperation(n,"link",r)}/**
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
*/async function ip(n,t,e=!1){const{auth:r}=n;if(Pt(r.app))return Promise.reject(Ae(r));const s="reauthenticate";try{const o=await qn(n,Eu(r,s,t,n),e);V(o.idToken,r,"internal-error");const a=Ri(o.idToken);V(a,r,"internal-error");const{sub:l}=a;return V(n.uid===l,r,"user-mismatch"),Ze._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),o}}/**
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
*/async function op(n,t,e=!1){if(Pt(n.app))return Promise.reject(Ae(n));const r="signIn",s=await Eu(n,r,t),o=await Ze._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(o.user),o}function ap(n,t,e,r){return jt(n).onIdTokenChanged(t,e,r)}function cp(n,t,e){return jt(n).beforeAuthStateChanged(t,e)}const $r="__sak";/**
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
*/class bu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem($r,"1"),this.storage.removeItem($r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const up=1e3,lp=10;class _u extends bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);qf()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,lp):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},up)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}_u.type="LOCAL";const hp=_u;/**
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
*/class Iu extends bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Iu.type="SESSION";const Tu=Iu;/**
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
*/function dp(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
*/class is{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new is(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:o}=e.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(e.origin,o)),h=await dp(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}is.receivers=[];/**
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
*/function Mi(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
*/class fp{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const f=Mi("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(v){const C=v;if(C.data.eventId===f)switch(C.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(C.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:f,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
*/function Mt(){return window}function pp(n){Mt().location.href=n}/**
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
*/function Su(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function gp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function yp(){return Su()?self:null}/**
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
*/const Cu="firebaseLocalStorageDb",vp=1,Hr="firebaseLocalStorage",ku="fbase_key";class er{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function os(n,t){return n.transaction([Hr],t?"readwrite":"readonly").objectStore(Hr)}function wp(){const n=indexedDB.deleteDatabase(Cu);return new er(n).toPromise()}function ci(){const n=indexedDB.open(Cu,vp);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Hr,{keyPath:ku})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Hr)?t(r):(r.close(),await wp(),t(await ci()))})})}async function Ma(n,t,e){const r=os(n,!0).put({[ku]:t,value:e});return new er(r).toPromise()}async function Ep(n,t){const e=os(n,!1).get(t),r=await new er(e).toPromise();return r===void 0?null:r.value}function xa(n,t){const e=os(n,!0).delete(t);return new er(e).toPromise()}const bp=800,_p=3;class Au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ci(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>_p)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Su()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(yp()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await gp(),!this.activeServiceWorker)return;this.sender=new fp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(t=r[0])!=null&&t.fulfilled&&(e=r[0])!=null&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ci();return await Ma(t,$r,"1"),await xa(t,$r),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ma(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Ep(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>xa(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const o=os(s,!1).getAll();return new er(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:o}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Au.type="LOCAL";const Ip=Au;new Zn(3e4,6e4);/**
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
*/function Tp(n,t){return t?$t(t):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
*/class xi extends vu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xe(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Xe(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Xe(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Sp(n){return op(n.auth,new xi(n),n.bypassAuthState)}function Cp(n){const{auth:t,user:e}=n;return V(e,t,"internal-error"),ip(e,new xi(n),n.bypassAuthState)}async function kp(n){const{auth:t,user:e}=n;return V(e,t,"internal-error"),sp(e,new xi(n),n.bypassAuthState)}/**
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
*/class Nu{constructor(t,e,r,s,o=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:e,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Sp;case"linkViaPopup":case"linkViaRedirect":return kp;case"reauthViaPopup":case"reauthViaRedirect":return Cp;default:Kt(this.auth,"internal-error")}}resolve(t){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const Ap=new Zn(2e3,1e4);class Ke extends Nu{constructor(t,e,r,s,o){super(t,e,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const t=Mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ap.get())};t()}}Ke.currentPopupAction=null;/**
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
*/const Np="pendingRedirect",Dr=new Map;class Dp extends Nu{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Dr.get(this.auth._key());if(!t){try{const e=await Rp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Dr.set(this.auth._key(),t)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rp(n,t){const e=Lp(t),r=Pp(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function Op(n,t){Dr.set(n._key(),t)}function Pp(n){return $t(n._redirectPersistence)}function Lp(n){return Nr(Np,n.config.apiKey,n.name)}async function Mp(n,t,e=!1){if(Pt(n.app))return Promise.reject(Ae(n));const r=Pi(n),s=Tp(r,t),o=await new Dp(r,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
*/const xp=10*60*1e3;class Vp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Up(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Du(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(Lt(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Va(t))}saveEventToCache(t){this.cachedEventUids.add(Va(t)),this.lastProcessedEventTime=Date.now()}}function Va(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Du({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Up(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Du(n);default:return!1}}/**
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
*/async function Fp(n,t={}){return un(n,"GET","/v1/projects",t)}/**
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
*/const jp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bp=/^https?/;async function qp(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Fp(n);for(const e of t)try{if(zp(e))return}catch{}Kt(n,"unauthorized-domain")}function zp(n){const t=oi(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!Bp.test(e))return!1;if(jp.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
*/const $p=new Zn(3e4,6e4);function Ua(){const n=Mt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Hp(n){return new Promise((t,e)=>{var r,s,o;function a(){Ua(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ua(),e(Lt(n,"network-request-failed"))},timeout:$p.get()})}if((s=(r=Mt().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)a();else{const l=Jf("iframefcb");return Mt()[l]=()=>{gapi.load?a():e(Lt(n,"network-request-failed"))},Qf(`${Xf()}?onload=${l}`).catch(h=>e(h))}}).catch(t=>{throw Rr=null,t})}let Rr=null;function Gp(n){return Rr=Rr||Hp(n),Rr}/**
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
*/const Kp=new Zn(5e3,15e3),Wp="__/auth/iframe",Qp="emulator/auth/iframe",Xp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yp(n){const t=n.config;V(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Ni(t,Qp):`https://${n.config.authDomain}/${Wp}`,r={apiKey:t.apiKey,appName:n.name,v:cn},s=Jp.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${e}?${Yn(r).slice(1)}`}async function Zp(n){const t=await Gp(n),e=Mt().gapi;return V(e,n,"internal-error"),t.open({where:document.body,url:Yp(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xp,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Lt(n,"network-request-failed"),l=Mt().setTimeout(()=>{o(a)},Kp.get());function h(){Mt().clearTimeout(l),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
*/const tg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eg=500,ng=600,rg="_blank",sg="http://localhost";class Fa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ig(n,t,e,r=eg,s=ng){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...tg,width:r.toString(),height:s.toString(),top:o,left:a},f=wt().toLowerCase();e&&(l=lu(f)?rg:e),cu(f)&&(t=t||sg,h.scrollbars="yes");const p=Object.entries(h).reduce((C,[A,R])=>`${C}${A}=${R},`,"");if(Bf(f)&&l!=="_self")return og(t||"",l),new Fa(null);const v=window.open(t||"",l,p);V(v,n,"popup-blocked");try{v.focus()}catch{}return new Fa(v)}function og(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
*/const ag="__/auth/handler",cg="emulator/auth/handler",ug=encodeURIComponent("fac");async function ja(n,t,e,r,s,o){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:cn,eventId:s};if(t instanceof wu){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",cd(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,v]of Object.entries({}))a[p]=v}if(t instanceof tr){const p=t.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await n._getAppCheckToken(),f=h?`#${ug}=${encodeURIComponent(h)}`:"";return`${lg(n)}?${Yn(l).slice(1)}${f}`}function lg({config:n}){return n.emulator?Ni(n,cg):`https://${n.authDomain}/${ag}`}/**
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
*/const Qs="webStorageSupport";class hg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tu,this._completeRedirectFn=Mp,this._overrideRedirectResult=Op}async _openPopup(t,e,r,s){var o;Wt((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ja(t,e,r,oi(),s);return ig(t,a,Mi())}async _openRedirect(t,e,r,s){await this._originValidation(t);const o=await ja(t,e,r,oi(),s);return pp(o),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:o}=this.eventManagers[e];return s?Promise.resolve(s):(Wt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Zp(t),r=new Vp(t);return e.register("authEvent",s=>(V(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Qs,{type:Qs},r=>{var s;const o=(s=r==null?void 0:r[0])==null?void 0:s[Qs];o!==void 0&&e(!!o),Kt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=qp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return gu()||uu()||Oi()}}const dg=hg;var Ba="@firebase/auth",qa="1.11.0";/**
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
*/class fg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function pg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gg(n){Ye(new Re("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mu(n)},f=new Kf(r,s,o,h);return Zf(f,e),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Ye(new Re("auth-internal",t=>{const e=Pi(t.getProvider("auth").getImmediate());return(r=>new fg(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),de(Ba,qa,pg(n)),de(Ba,qa,"esm2020")}/**
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
*/const mg=5*60,yg=Hc("authIdTokenMaxAge")||mg;let za=null;const vg=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>yg)return;const s=e==null?void 0:e.token;za!==s&&(za=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wg(n=Jc()){const t=ki(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Yf(n,{popupRedirectResolver:dg,persistence:[Ip,hp,Tu]}),r=Hc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=vg(o.toString());cp(e,a,()=>a(e.currentUser)),ap(e,l=>a(l))}}const s=zc("auth");return s&&tp(e,`http://${s}`),e}function Eg(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Wf({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const o=Lt("internal-error");o.customData=s,e(o)},r.type="text/javascript",r.charset="UTF-8",Eg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gg("Browser");var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fe,Ru;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function y(){}y.prototype=g.prototype,E.F=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(b,w,I){for(var m=Array(arguments.length-2),It=2;It<arguments.length;It++)m[It-2]=arguments[It];return g.prototype[w].apply(b,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,y){y||(y=0);const b=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)b[w]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(w=0;w<16;++w)b[w]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],w=E.g[2];let I=E.g[3],m;m=g+(I^y&(w^I))+b[0]+3614090360&4294967295,g=y+(m<<7&4294967295|m>>>25),m=I+(w^g&(y^w))+b[1]+3905402710&4294967295,I=g+(m<<12&4294967295|m>>>20),m=w+(y^I&(g^y))+b[2]+606105819&4294967295,w=I+(m<<17&4294967295|m>>>15),m=y+(g^w&(I^g))+b[3]+3250441966&4294967295,y=w+(m<<22&4294967295|m>>>10),m=g+(I^y&(w^I))+b[4]+4118548399&4294967295,g=y+(m<<7&4294967295|m>>>25),m=I+(w^g&(y^w))+b[5]+1200080426&4294967295,I=g+(m<<12&4294967295|m>>>20),m=w+(y^I&(g^y))+b[6]+2821735955&4294967295,w=I+(m<<17&4294967295|m>>>15),m=y+(g^w&(I^g))+b[7]+4249261313&4294967295,y=w+(m<<22&4294967295|m>>>10),m=g+(I^y&(w^I))+b[8]+1770035416&4294967295,g=y+(m<<7&4294967295|m>>>25),m=I+(w^g&(y^w))+b[9]+2336552879&4294967295,I=g+(m<<12&4294967295|m>>>20),m=w+(y^I&(g^y))+b[10]+4294925233&4294967295,w=I+(m<<17&4294967295|m>>>15),m=y+(g^w&(I^g))+b[11]+2304563134&4294967295,y=w+(m<<22&4294967295|m>>>10),m=g+(I^y&(w^I))+b[12]+1804603682&4294967295,g=y+(m<<7&4294967295|m>>>25),m=I+(w^g&(y^w))+b[13]+4254626195&4294967295,I=g+(m<<12&4294967295|m>>>20),m=w+(y^I&(g^y))+b[14]+2792965006&4294967295,w=I+(m<<17&4294967295|m>>>15),m=y+(g^w&(I^g))+b[15]+1236535329&4294967295,y=w+(m<<22&4294967295|m>>>10),m=g+(w^I&(y^w))+b[1]+4129170786&4294967295,g=y+(m<<5&4294967295|m>>>27),m=I+(y^w&(g^y))+b[6]+3225465664&4294967295,I=g+(m<<9&4294967295|m>>>23),m=w+(g^y&(I^g))+b[11]+643717713&4294967295,w=I+(m<<14&4294967295|m>>>18),m=y+(I^g&(w^I))+b[0]+3921069994&4294967295,y=w+(m<<20&4294967295|m>>>12),m=g+(w^I&(y^w))+b[5]+3593408605&4294967295,g=y+(m<<5&4294967295|m>>>27),m=I+(y^w&(g^y))+b[10]+38016083&4294967295,I=g+(m<<9&4294967295|m>>>23),m=w+(g^y&(I^g))+b[15]+3634488961&4294967295,w=I+(m<<14&4294967295|m>>>18),m=y+(I^g&(w^I))+b[4]+3889429448&4294967295,y=w+(m<<20&4294967295|m>>>12),m=g+(w^I&(y^w))+b[9]+568446438&4294967295,g=y+(m<<5&4294967295|m>>>27),m=I+(y^w&(g^y))+b[14]+3275163606&4294967295,I=g+(m<<9&4294967295|m>>>23),m=w+(g^y&(I^g))+b[3]+4107603335&4294967295,w=I+(m<<14&4294967295|m>>>18),m=y+(I^g&(w^I))+b[8]+1163531501&4294967295,y=w+(m<<20&4294967295|m>>>12),m=g+(w^I&(y^w))+b[13]+2850285829&4294967295,g=y+(m<<5&4294967295|m>>>27),m=I+(y^w&(g^y))+b[2]+4243563512&4294967295,I=g+(m<<9&4294967295|m>>>23),m=w+(g^y&(I^g))+b[7]+1735328473&4294967295,w=I+(m<<14&4294967295|m>>>18),m=y+(I^g&(w^I))+b[12]+2368359562&4294967295,y=w+(m<<20&4294967295|m>>>12),m=g+(y^w^I)+b[5]+4294588738&4294967295,g=y+(m<<4&4294967295|m>>>28),m=I+(g^y^w)+b[8]+2272392833&4294967295,I=g+(m<<11&4294967295|m>>>21),m=w+(I^g^y)+b[11]+1839030562&4294967295,w=I+(m<<16&4294967295|m>>>16),m=y+(w^I^g)+b[14]+4259657740&4294967295,y=w+(m<<23&4294967295|m>>>9),m=g+(y^w^I)+b[1]+2763975236&4294967295,g=y+(m<<4&4294967295|m>>>28),m=I+(g^y^w)+b[4]+1272893353&4294967295,I=g+(m<<11&4294967295|m>>>21),m=w+(I^g^y)+b[7]+4139469664&4294967295,w=I+(m<<16&4294967295|m>>>16),m=y+(w^I^g)+b[10]+3200236656&4294967295,y=w+(m<<23&4294967295|m>>>9),m=g+(y^w^I)+b[13]+681279174&4294967295,g=y+(m<<4&4294967295|m>>>28),m=I+(g^y^w)+b[0]+3936430074&4294967295,I=g+(m<<11&4294967295|m>>>21),m=w+(I^g^y)+b[3]+3572445317&4294967295,w=I+(m<<16&4294967295|m>>>16),m=y+(w^I^g)+b[6]+76029189&4294967295,y=w+(m<<23&4294967295|m>>>9),m=g+(y^w^I)+b[9]+3654602809&4294967295,g=y+(m<<4&4294967295|m>>>28),m=I+(g^y^w)+b[12]+3873151461&4294967295,I=g+(m<<11&4294967295|m>>>21),m=w+(I^g^y)+b[15]+530742520&4294967295,w=I+(m<<16&4294967295|m>>>16),m=y+(w^I^g)+b[2]+3299628645&4294967295,y=w+(m<<23&4294967295|m>>>9),m=g+(w^(y|~I))+b[0]+4096336452&4294967295,g=y+(m<<6&4294967295|m>>>26),m=I+(y^(g|~w))+b[7]+1126891415&4294967295,I=g+(m<<10&4294967295|m>>>22),m=w+(g^(I|~y))+b[14]+2878612391&4294967295,w=I+(m<<15&4294967295|m>>>17),m=y+(I^(w|~g))+b[5]+4237533241&4294967295,y=w+(m<<21&4294967295|m>>>11),m=g+(w^(y|~I))+b[12]+1700485571&4294967295,g=y+(m<<6&4294967295|m>>>26),m=I+(y^(g|~w))+b[3]+2399980690&4294967295,I=g+(m<<10&4294967295|m>>>22),m=w+(g^(I|~y))+b[10]+4293915773&4294967295,w=I+(m<<15&4294967295|m>>>17),m=y+(I^(w|~g))+b[1]+2240044497&4294967295,y=w+(m<<21&4294967295|m>>>11),m=g+(w^(y|~I))+b[8]+1873313359&4294967295,g=y+(m<<6&4294967295|m>>>26),m=I+(y^(g|~w))+b[15]+4264355552&4294967295,I=g+(m<<10&4294967295|m>>>22),m=w+(g^(I|~y))+b[6]+2734768916&4294967295,w=I+(m<<15&4294967295|m>>>17),m=y+(I^(w|~g))+b[13]+1309151649&4294967295,y=w+(m<<21&4294967295|m>>>11),m=g+(w^(y|~I))+b[4]+4149444226&4294967295,g=y+(m<<6&4294967295|m>>>26),m=I+(y^(g|~w))+b[11]+3174756917&4294967295,I=g+(m<<10&4294967295|m>>>22),m=w+(g^(I|~y))+b[2]+718787259&4294967295,w=I+(m<<15&4294967295|m>>>17),m=y+(I^(w|~g))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(w+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.v=function(E,g){g===void 0&&(g=E.length);const y=g-this.blockSize,b=this.C;let w=this.h,I=0;for(;I<g;){if(w==0)for(;I<=y;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<g;)if(b[w++]=E.charCodeAt(I++),w==this.blockSize){s(this,b),w=0;break}}else for(;I<g;)if(b[w++]=E[I++],w==this.blockSize){s(this,b),w=0;break}}this.h=w,this.o+=g},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,y=0;y<4;++y)for(let b=0;b<32;b+=8)E[g++]=this.g[y]>>>b&255;return E};function o(E,g){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;const y=[];let b=!0;for(let w=E.length-1;w>=0;w--){const I=E[w]|0;b&&I==g||(y[w]=I,b=!1)}this.g=y}var l={};function h(E){return-128<=E&&E<128?o(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return v;if(E<0)return O(f(-E));const g=[];let y=1;for(let b=0;E>=y;b++)g[b]=E/y|0,y*=4294967296;return new a(g,0)}function p(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return O(p(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=f(Math.pow(g,8));let b=v;for(let I=0;I<E.length;I+=8){var w=Math.min(8,E.length-I);const m=parseInt(E.substring(I,I+w),g);w<8?(w=f(Math.pow(g,w)),b=b.j(w).add(f(m))):(b=b.j(y),b=b.add(f(m)))}return b}var v=h(0),C=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(L(this))return-O(this).m();let E=0,g=1;for(let y=0;y<this.g.length;y++){const b=this.i(y);E+=(b>=0?b:4294967296+b)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(L(this))return"-"+O(this).toString(E);const g=f(Math.pow(E,6));var y=this;let b="";for(;;){const w=pt(y,g).g;y=$(y,w.j(g));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=w,R(y))return I+b;for(;I.length<6;)I="0"+I;b=I+b}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function L(E){return E.h==-1}n.l=function(E){return E=$(this,E),L(E)?-1:R(E)?0:1};function O(E){const g=E.g.length,y=[];for(let b=0;b<g;b++)y[b]=~E.g[b];return new a(y,~E.h).add(C)}n.abs=function(){return L(this)?O(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),y=[];let b=0;for(let w=0;w<=g;w++){let I=b+(this.i(w)&65535)+(E.i(w)&65535),m=(I>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);b=m>>>16,I&=65535,m&=65535,y[w]=m<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(E,g){return E.add(O(g))}n.j=function(E){if(R(this)||R(E))return v;if(L(this))return L(E)?O(this).j(O(E)):O(O(this).j(E));if(L(E))return O(this.j(O(E)));if(this.l(A)<0&&E.l(A)<0)return f(this.m()*E.m());const g=this.g.length+E.g.length,y=[];for(var b=0;b<2*g;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(let w=0;w<E.g.length;w++){const I=this.i(b)>>>16,m=this.i(b)&65535,It=E.i(w)>>>16,be=E.i(w)&65535;y[2*b+2*w]+=m*be,K(y,2*b+2*w),y[2*b+2*w+1]+=I*be,K(y,2*b+2*w+1),y[2*b+2*w+1]+=m*It,K(y,2*b+2*w+1),y[2*b+2*w+2]+=I*It,K(y,2*b+2*w+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new a(y,0)};function K(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function ot(E,g){this.g=E,this.h=g}function pt(E,g){if(R(g))throw Error("division by zero");if(R(E))return new ot(v,v);if(L(E))return g=pt(O(E),g),new ot(O(g.g),O(g.h));if(L(g))return g=pt(E,O(g)),new ot(O(g.g),g.h);if(E.g.length>30){if(L(E)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var y=C,b=g;b.l(E)<=0;)y=_t(y),b=_t(b);var w=at(y,1),I=at(b,1);for(b=at(b,2),y=at(y,2);!R(b);){var m=I.add(b);m.l(E)<=0&&(w=w.add(y),I=m),b=at(b,1),y=at(y,1)}return g=$(E,w.j(g)),new ot(w,g)}for(w=v;E.l(g)>=0;){for(y=Math.max(1,Math.floor(E.m()/g.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),I=f(y),m=I.j(g);L(m)||m.l(E)>0;)y-=b,I=f(y),m=I.j(g);R(I)&&(I=C),w=w.add(I),E=$(E,m)}return new ot(w,E)}n.B=function(E){return pt(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)&E.i(b);return new a(y,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)|E.i(b);return new a(y,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)^E.i(b);return new a(y,this.h^E.h)};function _t(E){const g=E.g.length+1,y=[];for(let b=0;b<g;b++)y[b]=E.i(b)<<1|E.i(b-1)>>>31;return new a(y,E.h)}function at(E,g){const y=g>>5;g%=32;const b=E.g.length-y,w=[];for(let I=0;I<b;I++)w[I]=g>0?E.i(I+y)>>>g|E.i(I+y+1)<<32-g:E.i(I+y);return new a(w,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ru=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,fe=a}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ou,Dn,Pu,Or,ui,Lu,Mu,xu;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ir=="object"&&Ir];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var u=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var _=i[d];if(!(_ in u))break t;u=u[_]}i=i[i.length-1],d=u[i],c=c(d),c!=d&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&u.push([d,c[d]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function f(i,c,u){return f=h,f.apply(null,arguments)}function p(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function v(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(d,_,T){for(var N=Array(arguments.length-2),j=2;j<arguments.length;j++)N[j-2]=arguments[j];return c.prototype[_].apply(d,N)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function A(i){const c=i.length;if(c>0){const u=Array(c);for(let d=0;d<c;d++)u[d]=i[d];return u}return[]}function R(i,c){for(let d=1;d<arguments.length;d++){const _=arguments[d];var u=typeof _;if(u=u!="object"?u:_?Array.isArray(_)?"array":u:"null",u=="array"||u=="object"&&typeof _.length=="number"){u=i.length||0;const T=_.length||0;i.length=u+T;for(let N=0;N<T;N++)i[u+N]=_[N]}else i.push(_)}}class L{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(i){a.setTimeout(()=>{throw i},0)}function $(){var i=E;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class K{constructor(){this.h=this.g=null}add(c,u){const d=ot.get();d.set(c,u),this.h?this.h.next=d:this.g=d,this.h=d}}var ot=new L(()=>new pt,i=>i.reset());class pt{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,at=!1,E=new K,g=()=>{const i=Promise.resolve(void 0);_t=()=>{i.then(y)}};function y(){for(var i;i=$();){try{i.h.call(i.g)}catch(u){O(u)}var c=ot;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}at=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i}();function m(i){return/^[\s\xa0]*$/.test(i)}function It(i,c){w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}v(It,w),It.prototype.init=function(i,c){const u=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var be="closure_listenable_"+(Math.random()*1e6|0),ih=0;function oh(i,c,u,d,_){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!d,this.ha=_,this.key=++ih,this.da=this.fa=!1}function ar(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function cr(i,c,u){for(const d in i)c.call(u,i[d],d,i)}function ah(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function go(i){const c={};for(const u in i)c[u]=i[u];return c}const mo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yo(i,c){let u,d;for(let _=1;_<arguments.length;_++){d=arguments[_];for(u in d)i[u]=d[u];for(let T=0;T<mo.length;T++)u=mo[T],Object.prototype.hasOwnProperty.call(d,u)&&(i[u]=d[u])}}function ur(i){this.src=i,this.g={},this.h=0}ur.prototype.add=function(i,c,u,d,_){const T=i.toString();i=this.g[T],i||(i=this.g[T]=[],this.h++);const N=Es(i,c,d,_);return N>-1?(c=i[N],u||(c.fa=!1)):(c=new oh(c,this.src,T,!!d,_),c.fa=u,i.push(c)),c};function ws(i,c){const u=c.type;if(u in i.g){var d=i.g[u],_=Array.prototype.indexOf.call(d,c,void 0),T;(T=_>=0)&&Array.prototype.splice.call(d,_,1),T&&(ar(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Es(i,c,u,d){for(let _=0;_<i.length;++_){const T=i[_];if(!T.da&&T.listener==c&&T.capture==!!u&&T.ha==d)return _}return-1}var bs="closure_lm_"+(Math.random()*1e6|0),_s={};function vo(i,c,u,d,_){if(Array.isArray(c)){for(let T=0;T<c.length;T++)vo(i,c[T],u,d,_);return null}return u=bo(u),i&&i[be]?i.J(c,u,l(d)?!!d.capture:!1,_):ch(i,c,u,!1,d,_)}function ch(i,c,u,d,_,T){if(!c)throw Error("Invalid event type");const N=l(_)?!!_.capture:!!_;let j=Ts(i);if(j||(i[bs]=j=new ur(i)),u=j.add(c,u,d,N,T),u.proxy)return u;if(d=uh(),u.proxy=d,d.src=i,d.listener=u,i.addEventListener)I||(_=N),_===void 0&&(_=!1),i.addEventListener(c.toString(),d,_);else if(i.attachEvent)i.attachEvent(Eo(c.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function uh(){function i(u){return c.call(i.src,i.listener,u)}const c=lh;return i}function wo(i,c,u,d,_){if(Array.isArray(c))for(var T=0;T<c.length;T++)wo(i,c[T],u,d,_);else d=l(d)?!!d.capture:!!d,u=bo(u),i&&i[be]?(i=i.i,T=String(c).toString(),T in i.g&&(c=i.g[T],u=Es(c,u,d,_),u>-1&&(ar(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[T],i.h--)))):i&&(i=Ts(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Es(c,u,d,_)),(u=i>-1?c[i]:null)&&Is(u))}function Is(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[be])ws(c.i,i);else{var u=i.type,d=i.proxy;c.removeEventListener?c.removeEventListener(u,d,i.capture):c.detachEvent?c.detachEvent(Eo(u),d):c.addListener&&c.removeListener&&c.removeListener(d),(u=Ts(c))?(ws(u,i),u.h==0&&(u.src=null,c[bs]=null)):ar(i)}}}function Eo(i){return i in _s?_s[i]:_s[i]="on"+i}function lh(i,c){if(i.da)i=!0;else{c=new It(c,this);const u=i.listener,d=i.ha||i.src;i.fa&&Is(i),i=u.call(d,c)}return i}function Ts(i){return i=i[bs],i instanceof ur?i:null}var Ss="__closure_events_fn_"+(Math.random()*1e9>>>0);function bo(i){return typeof i=="function"?i:(i[Ss]||(i[Ss]=function(c){return i.handleEvent(c)}),i[Ss])}function gt(){b.call(this),this.i=new ur(this),this.M=this,this.G=null}v(gt,b),gt.prototype[be]=!0,gt.prototype.removeEventListener=function(i,c,u,d){wo(this,i,c,u,d)};function Et(i,c){var u,d=i.G;if(d)for(u=[];d;d=d.G)u.push(d);if(i=i.M,d=c.type||c,typeof c=="string")c=new w(c,i);else if(c instanceof w)c.target=c.target||i;else{var _=c;c=new w(d,i),yo(c,_)}_=!0;let T,N;if(u)for(N=u.length-1;N>=0;N--)T=c.g=u[N],_=lr(T,d,!0,c)&&_;if(T=c.g=i,_=lr(T,d,!0,c)&&_,_=lr(T,d,!1,c)&&_,u)for(N=0;N<u.length;N++)T=c.g=u[N],_=lr(T,d,!1,c)&&_}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let d=0;d<u.length;d++)ar(u[d]);delete i.g[c],i.h--}}this.G=null},gt.prototype.J=function(i,c,u,d){return this.i.add(String(i),c,!1,u,d)},gt.prototype.K=function(i,c,u,d){return this.i.add(String(i),c,!0,u,d)};function lr(i,c,u,d){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let _=!0;for(let T=0;T<c.length;++T){const N=c[T];if(N&&!N.da&&N.capture==u){const j=N.listener,rt=N.ha||N.src;N.fa&&ws(i.i,N),_=j.call(rt,d)!==!1&&_}}return _&&!d.defaultPrevented}function hh(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function _o(i){i.g=hh(()=>{i.g=null,i.i&&(i.i=!1,_o(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class dh extends b{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:_o(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pn(i){b.call(this),this.h=i,this.g={}}v(pn,b);var Io=[];function To(i){cr(i.g,function(c,u){this.g.hasOwnProperty(u)&&Is(c)},i),i.g={}}pn.prototype.N=function(){pn.Z.N.call(this),To(this)},pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cs=a.JSON.stringify,fh=a.JSON.parse,ph=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function So(){}function Co(){}var gn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ks(){w.call(this,"d")}v(ks,w);function As(){w.call(this,"c")}v(As,w);var _e={},ko=null;function hr(){return ko=ko||new gt}_e.Ia="serverreachability";function Ao(i){w.call(this,_e.Ia,i)}v(Ao,w);function mn(i){const c=hr();Et(c,new Ao(c))}_e.STAT_EVENT="statevent";function No(i,c){w.call(this,_e.STAT_EVENT,i),this.stat=c}v(No,w);function bt(i){const c=hr();Et(c,new No(c,i))}_e.Ja="timingevent";function Do(i,c){w.call(this,_e.Ja,i),this.size=c}v(Do,w);function yn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function vn(){this.g=!0}vn.prototype.ua=function(){this.g=!1};function gh(i,c,u,d,_,T){i.info(function(){if(i.g)if(T){var N="",j=T.split("&");for(let Q=0;Q<j.length;Q++){var rt=j[Q].split("=");if(rt.length>1){const ct=rt[0];rt=rt[1];const Rt=ct.split("_");N=Rt.length>=2&&Rt[1]=="type"?N+(ct+"="+rt+"&"):N+(ct+"=redacted&")}}}else N=null;else N=T;return"XMLHTTP REQ ("+d+") [attempt "+_+"]: "+c+`
`+u+`
`+N})}function mh(i,c,u,d,_,T,N){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+_+"]: "+c+`
`+u+`
`+T+" "+N})}function Fe(i,c,u,d){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+vh(i,u)+(d?" "+d:"")})}function yh(i,c){i.info(function(){return"TIMEOUT: "+c})}vn.prototype.info=function(){};function vh(i,c){if(!i.g)return c;if(!c)return null;try{const T=JSON.parse(c);if(T){for(i=0;i<T.length;i++)if(Array.isArray(T[i])){var u=T[i];if(!(u.length<2)){var d=u[1];if(Array.isArray(d)&&!(d.length<1)){var _=d[0];if(_!="noop"&&_!="stop"&&_!="close")for(let N=1;N<d.length;N++)d[N]=""}}}}return Cs(T)}catch{return c}}var dr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ro={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Oo;function Ns(){}v(Ns,So),Ns.prototype.g=function(){return new XMLHttpRequest},Oo=new Ns;function wn(i){return encodeURIComponent(String(i))}function wh(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function Yt(i,c,u,d){this.j=i,this.i=c,this.l=u,this.S=d||1,this.V=new pn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Po}function Po(){this.i=null,this.g="",this.h=!1}var Lo={},Ds={};function Rs(i,c,u){i.M=1,i.A=pr(Dt(c)),i.u=u,i.R=!0,Mo(i,null)}function Mo(i,c){i.F=Date.now(),fr(i),i.B=Dt(i.A);var u=i.B,d=i.S;Array.isArray(d)||(d=[String(d)]),Wo(u.i,"t",d),i.C=0,u=i.j.L,i.h=new Po,i.g=da(i.j,u?c:null,!i.u),i.P>0&&(i.O=new dh(f(i.Y,i,i.g),i.P)),c=i.V,u=i.g,d=i.ba;var _="readystatechange";Array.isArray(_)||(_&&(Io[0]=_.toString()),_=Io);for(let T=0;T<_.length;T++){const N=vo(u,_[T],d||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=i.J?go(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),mn(),gh(i.i,i.v,i.B,i.l,i.S,i.u)}Yt.prototype.ba=function(i){i=i.target;const c=this.O;c&&ee(i)==3?c.j():this.Y(i)},Yt.prototype.Y=function(i){try{if(i==this.g)t:{const j=ee(this.g),rt=this.g.ya(),Q=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||ea(this.g)))){this.K||j!=4||rt==7||(rt==8||Q<=0?mn(3):mn(2)),Os(this);var c=this.g.ca();this.X=c;var u=Eh(this);if(this.o=c==200,mh(this.i,this.v,this.B,this.l,this.S,j,c),this.o){if(this.U&&!this.L){e:{if(this.g){var d,_=this.g;if((d=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(d)){var T=d;break e}}T=null}if(i=T)Fe(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ps(this,i);else{this.o=!1,this.m=3,bt(12),Ie(this),En(this);break t}}if(this.R){i=!0;let ct;for(;!this.K&&this.C<u.length;)if(ct=bh(this,u),ct==Ds){j==4&&(this.m=4,bt(14),i=!1),Fe(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Lo){this.m=4,bt(15),Fe(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else Fe(this.i,this.l,ct,null),Ps(this,ct);if(xo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||u.length!=0||this.h.h||(this.m=1,bt(16),i=!1),this.o=this.o&&i,!i)Fe(this.i,this.l,u,"[Invalid Chunked Response]"),Ie(this),En(this);else if(u.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Bs(N),N.P=!0,bt(11))}}else Fe(this.i,this.l,u,null),Ps(this,u);j==4&&Ie(this),this.o&&!this.K&&(j==4?ca(this.j,this):(this.o=!1,fr(this)))}else Mh(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),Ie(this),En(this)}}}catch{}finally{}};function Eh(i){if(!xo(i))return i.g.la();const c=ea(i.g);if(c==="")return"";let u="";const d=c.length,_=ee(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ie(i),En(i),"";i.h.i=new a.TextDecoder}for(let T=0;T<d;T++)i.h.h=!0,u+=i.h.i.decode(c[T],{stream:!(_&&T==d-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function xo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function bh(i,c){var u=i.C,d=c.indexOf(`
`,u);return d==-1?Ds:(u=Number(c.substring(u,d)),isNaN(u)?Lo:(d+=1,d+u>c.length?Ds:(c=c.slice(d,d+u),i.C=d+u,c)))}Yt.prototype.cancel=function(){this.K=!0,Ie(this)};function fr(i){i.T=Date.now()+i.H,Vo(i,i.H)}function Vo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=yn(f(i.aa,i),c)}function Os(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Yt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(yh(this.i,this.B),this.M!=2&&(mn(),bt(17)),Ie(this),this.m=2,En(this)):Vo(this,this.T-i)};function En(i){i.j.I==0||i.K||ca(i.j,i)}function Ie(i){Os(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,To(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Ps(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||Ls(u.h,i))){if(!i.L&&Ls(u.h,i)&&u.I==3){try{var d=u.Ba.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var _=d;if(_[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)wr(u),yr(u);else break t;js(u),bt(18)}}else u.xa=_[1],0<u.xa-u.K&&_[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=yn(f(u.Va,u),6e3));jo(u.h)<=1&&u.ta&&(u.ta=void 0)}else Se(u,11)}else if((i.L||u.g==i)&&wr(u),!m(c))for(_=u.Ba.g.parse(c),c=0;c<_.length;c++){let Q=_[c];const ct=Q[0];if(!(ct<=u.K))if(u.K=ct,Q=Q[1],u.I==2)if(Q[0]=="c"){u.M=Q[1],u.ba=Q[2];const Rt=Q[3];Rt!=null&&(u.ka=Rt,u.j.info("VER="+u.ka));const qe=Q[4];qe!=null&&(u.za=qe,u.j.info("SVER="+u.za));const ne=Q[5];ne!=null&&typeof ne=="number"&&ne>0&&(d=1.5*ne,u.O=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const re=i.g;if(re){const br=re.g?re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(br){var T=d.h;T.g||br.indexOf("spdy")==-1&&br.indexOf("quic")==-1&&br.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(Ms(T,T.h),T.h=null))}if(d.G){const qs=re.g?re.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(d.wa=qs,W(d.J,d.G,qs))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),d=u;var N=i;if(d.na=ha(d,d.L?d.ba:null,d.W),N.L){Bo(d.h,N);var j=N,rt=d.O;rt&&(j.H=rt),j.D&&(Os(j),fr(j)),d.g=N}else oa(d);u.i.length>0&&vr(u)}else Q[0]!="stop"&&Q[0]!="close"||Se(u,7);else u.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Se(u,7):Fs(u):Q[0]!="noop"&&u.l&&u.l.qa(Q),u.A=0)}}mn(4)}catch{}}var _h=class{constructor(i,c){this.g=i,this.map=c}};function Uo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function jo(i){return i.h?1:i.g?i.g.size:0}function Ls(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Ms(i,c){i.g?i.g.add(c):i.h=c}function Bo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Uo.prototype.cancel=function(){if(this.i=qo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function qo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return A(i.i)}var zo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ih(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const d=i[u].indexOf("=");let _,T=null;d>=0?(_=i[u].substring(0,d),T=i[u].substring(d+1)):_=i[u],c(_,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Zt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof Zt?(this.l=i.l,bn(this,i.j),this.o=i.o,this.g=i.g,_n(this,i.u),this.h=i.h,xs(this,Qo(i.i)),this.m=i.m):i&&(c=String(i).match(zo))?(this.l=!1,bn(this,c[1]||"",!0),this.o=In(c[2]||""),this.g=In(c[3]||"",!0),_n(this,c[4]),this.h=In(c[5]||"",!0),xs(this,c[6]||"",!0),this.m=In(c[7]||"")):(this.l=!1,this.i=new Sn(null,this.l))}Zt.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Tn(c,$o,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Tn(c,$o,!0),"@"),i.push(wn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Tn(u,u.charAt(0)=="/"?Ch:Sh,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Tn(u,Ah)),i.join("")},Zt.prototype.resolve=function(i){const c=Dt(this);let u=!!i.j;u?bn(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var d=i.h;if(u)_n(c,i.u);else if(u=!!i.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var _=c.h.lastIndexOf("/");_!=-1&&(d=c.h.slice(0,_+1)+d)}if(_=d,_==".."||_==".")d="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){d=_.lastIndexOf("/",0)==0,_=_.split("/");const T=[];for(let N=0;N<_.length;){const j=_[N++];j=="."?d&&N==_.length&&T.push(""):j==".."?((T.length>1||T.length==1&&T[0]!="")&&T.pop(),d&&N==_.length&&T.push("")):(T.push(j),d=!0)}d=T.join("/")}else d=_}return u?c.h=d:u=i.i.toString()!=="",u?xs(c,Qo(i.i)):u=!!i.m,u&&(c.m=i.m),c};function Dt(i){return new Zt(i)}function bn(i,c,u){i.j=u?In(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function _n(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function xs(i,c,u){c instanceof Sn?(i.i=c,Nh(i.i,i.l)):(u||(c=Tn(c,kh)),i.i=new Sn(c,i.l))}function W(i,c,u){i.i.set(c,u)}function pr(i){return W(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function In(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Tn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,Th),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Th(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var $o=/[#\/\?@]/g,Sh=/[#\?:]/g,Ch=/[#\?]/g,kh=/[#\?@]/g,Ah=/#/g;function Sn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Te(i){i.g||(i.g=new Map,i.h=0,i.i&&Ih(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Sn.prototype,n.add=function(i,c){Te(this),this.i=null,i=je(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function Ho(i,c){Te(i),c=je(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Go(i,c){return Te(i),c=je(i,c),i.g.has(c)}n.forEach=function(i,c){Te(this),this.g.forEach(function(u,d){u.forEach(function(_){i.call(c,_,d,this)},this)},this)};function Ko(i,c){Te(i);let u=[];if(typeof c=="string")Go(i,c)&&(u=u.concat(i.g.get(je(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return Te(this),this.i=null,i=je(this,i),Go(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=Ko(this,i),i.length>0?String(i[0]):c):c};function Wo(i,c,u){Ho(i,c),u.length>0&&(i.i=null,i.g.set(je(i,c),A(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let d=0;d<c.length;d++){var u=c[d];const _=wn(u);u=Ko(this,u);for(let T=0;T<u.length;T++){let N=_;u[T]!==""&&(N+="="+wn(u[T])),i.push(N)}}return this.i=i.join("&")};function Qo(i){const c=new Sn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function je(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Nh(i,c){c&&!i.j&&(Te(i),i.i=null,i.g.forEach(function(u,d){const _=d.toLowerCase();d!=_&&(Ho(this,d),Wo(this,_,u))},i)),i.j=c}function Dh(i,c){const u=new vn;if(a.Image){const d=new Image;d.onload=p(te,u,"TestLoadImage: loaded",!0,c,d),d.onerror=p(te,u,"TestLoadImage: error",!1,c,d),d.onabort=p(te,u,"TestLoadImage: abort",!1,c,d),d.ontimeout=p(te,u,"TestLoadImage: timeout",!1,c,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else c(!1)}function Rh(i,c){const u=new vn,d=new AbortController,_=setTimeout(()=>{d.abort(),te(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:d.signal}).then(T=>{clearTimeout(_),T.ok?te(u,"TestPingServer: ok",!0,c):te(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(_),te(u,"TestPingServer: error",!1,c)})}function te(i,c,u,d,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),d(u)}catch{}}function Oh(){this.g=new ph}function Vs(i){this.i=i.Sb||null,this.h=i.ab||!1}v(Vs,So),Vs.prototype.g=function(){return new gr(this.i,this.h)};function gr(i,c){gt.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}v(gr,gt),n=gr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,kn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Cn(this):kn(this),this.readyState==3&&Xo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Cn(this))},n.Na=function(i){this.g&&(this.response=i,Cn(this))},n.ga=function(){this.g&&Cn(this)};function Cn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,kn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function kn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Jo(i){let c="";return cr(i,function(u,d){c+=d,c+=":",c+=u,c+=`\r
`}),c}function Us(i,c,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=Jo(u),typeof i=="string"?u!=null&&wn(u):W(i,c,u))}function Z(i){gt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}v(Z,gt);var Ph=/^https?$/i,Lh=["POST","PUT"];n=Z.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oo.g(),this.g.onreadystatechange=C(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(T){Yo(this,T);return}if(i=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var _ in d)u.set(_,d[_]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const T of d.keys())u.set(T,d.get(T));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(T=>T.toLowerCase()=="content-type"),_=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Lh,c,void 0)>=0)||d||_||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,N]of u)this.g.setRequestHeader(T,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(T){Yo(this,T)}};function Yo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Zo(i),mr(i)}function Zo(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Et(this,"complete"),Et(this,"abort"),mr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),Z.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ta(this):this.Xa())},n.Xa=function(){ta(this)};function ta(i){if(i.h&&typeof o<"u"){if(i.v&&ee(i)==4)setTimeout(i.Ca.bind(i),0);else if(Et(i,"readystatechange"),ee(i)==4){i.h=!1;try{const T=i.ca();t:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var d;if(d=T===0){let N=String(i.D).match(zo)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),d=!Ph.test(N?N.toLowerCase():"")}u=d}if(u)Et(i,"complete"),Et(i,"success");else{i.o=6;try{var _=ee(i)>2?i.g.statusText:""}catch{_=""}i.l=_+" ["+i.ca()+"]",Zo(i)}}finally{mr(i)}}}}function mr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||Et(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ee(i){return i.g?i.g.readyState:0}n.ca=function(){try{return ee(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),fh(c)}};function ea(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Mh(i){const c={};i=(i.g&&ee(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(m(i[d]))continue;var u=wh(i[d]);const _=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const T=c[_]||[];c[_]=T,T.push(u)}ah(c,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function An(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function na(i){this.za=0,this.i=[],this.j=new vn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=An("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=An("baseRetryDelayMs",5e3,i),this.Za=An("retryDelaySeedMs",1e4,i),this.Ta=An("forwardChannelMaxRetries",2,i),this.va=An("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Uo(i&&i.concurrentRequestLimit),this.Ba=new Oh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=na.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,d){bt(0),this.W=i,this.H=c||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.J=ha(this,null,this.W),vr(this)};function Fs(i){if(ra(i),i.I==3){var c=i.V++,u=Dt(i.J);if(W(u,"SID",i.M),W(u,"RID",c),W(u,"TYPE","terminate"),Nn(i,u),c=new Yt(i,i.j,c),c.M=2,c.A=pr(Dt(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=da(c.j,null),c.g.ea(c.A)),c.F=Date.now(),fr(c)}la(i)}function yr(i){i.g&&(Bs(i),i.g.cancel(),i.g=null)}function ra(i){yr(i),i.v&&(a.clearTimeout(i.v),i.v=null),wr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function vr(i){if(!Fo(i.h)&&!i.m){i.m=!0;var c=i.Ea;_t||g(),at||(_t(),at=!0),E.add(c,i),i.D=0}}function xh(i,c){return jo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=yn(f(i.Ea,i,c),ua(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const _=new Yt(this,this.j,i);let T=this.o;if(this.U&&(T?(T=go(T),yo(T,this.U)):T=this.U),this.u!==null||this.R||(_.J=T,T=null),this.S)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(c+=d,c>4096){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=ia(this,_,c),u=Dt(this.J),W(u,"RID",i),W(u,"CVER",22),this.G&&W(u,"X-HTTP-Session-Id",this.G),Nn(this,u),T&&(this.R?c="headers="+wn(Jo(T))+"&"+c:this.u&&Us(u,this.u,T)),Ms(this.h,_),this.Ra&&W(u,"TYPE","init"),this.S?(W(u,"$req",c),W(u,"SID","null"),_.U=!0,Rs(_,u,null)):Rs(_,u,c),this.I=2}}else this.I==3&&(i?sa(this,i):this.i.length==0||Fo(this.h)||sa(this))};function sa(i,c){var u;c?u=c.l:u=i.V++;const d=Dt(i.J);W(d,"SID",i.M),W(d,"RID",u),W(d,"AID",i.K),Nn(i,d),i.u&&i.o&&Us(d,i.u,i.o),u=new Yt(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=ia(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Ms(i.h,u),Rs(u,d,c)}function Nn(i,c){i.H&&cr(i.H,function(u,d){W(c,d,u)}),i.l&&cr({},function(u,d){W(c,d,u)})}function ia(i,c,u){u=Math.min(i.i.length,u);const d=i.l?f(i.l.Ka,i.l,i):null;t:{var _=i.i;let j=-1;for(;;){const rt=["count="+u];j==-1?u>0?(j=_[0].g,rt.push("ofs="+j)):j=0:rt.push("ofs="+j);let Q=!0;for(let ct=0;ct<u;ct++){var T=_[ct].g;const Rt=_[ct].map;if(T-=j,T<0)j=Math.max(0,_[ct].g-100),Q=!1;else try{T="req"+T+"_"||"";try{var N=Rt instanceof Map?Rt:Object.entries(Rt);for(const[qe,ne]of N){let re=ne;l(ne)&&(re=Cs(ne)),rt.push(T+qe+"="+encodeURIComponent(re))}}catch(qe){throw rt.push(T+"type="+encodeURIComponent("_badmap")),qe}}catch{d&&d(Rt)}}if(Q){N=rt.join("&");break t}}N=void 0}return i=i.i.splice(0,u),c.G=i,N}function oa(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;_t||g(),at||(_t(),at=!0),E.add(c,i),i.A=0}}function js(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=yn(f(i.Da,i),ua(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,aa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=yn(f(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),yr(this),aa(this))};function Bs(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function aa(i){i.g=new Yt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Dt(i.na);W(c,"RID","rpc"),W(c,"SID",i.M),W(c,"AID",i.K),W(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&W(c,"TO",i.ia),W(c,"TYPE","xmlhttp"),Nn(i,c),i.u&&i.o&&Us(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=pr(Dt(c)),u.u=null,u.R=!0,Mo(u,i)}n.Va=function(){this.C!=null&&(this.C=null,yr(this),js(this),bt(19))};function wr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ca(i,c){var u=null;if(i.g==c){wr(i),Bs(i),i.g=null;var d=2}else if(Ls(i.h,c))u=c.G,Bo(i.h,c),d=1;else return;if(i.I!=0){if(c.o)if(d==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var _=i.D;d=hr(),Et(d,new Do(d,u)),vr(i)}else oa(i);else if(_=c.m,_==3||_==0&&c.X>0||!(d==1&&xh(i,c)||d==2&&js(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),_){case 1:Se(i,5);break;case 4:Se(i,10);break;case 3:Se(i,6);break;default:Se(i,2)}}}function ua(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function Se(i,c){if(i.j.info("Error code "+c),c==2){var u=f(i.bb,i),d=i.Ua;const _=!d;d=new Zt(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bn(d,"https"),pr(d),_?Dh(d.toString(),u):Rh(d.toString(),u)}else bt(2);i.I=0,i.l&&i.l.pa(c),la(i),ra(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function la(i){if(i.I=0,i.ja=[],i.l){const c=qo(i.h);(c.length!=0||i.i.length!=0)&&(R(i.ja,c),R(i.ja,i.i),i.h.i.length=0,A(i.i),i.i.length=0),i.l.oa()}}function ha(i,c,u){var d=u instanceof Zt?Dt(u):new Zt(u);if(d.g!="")c&&(d.g=c+"."+d.g),_n(d,d.u);else{var _=a.location;d=_.protocol,c=c?c+"."+_.hostname:_.hostname,_=+_.port;const T=new Zt(null);d&&bn(T,d),c&&(T.g=c),_&&_n(T,_),u&&(T.h=u),d=T}return u=i.G,c=i.wa,u&&c&&W(d,u,c),W(d,"VER",i.ka),Nn(i,d),d}function da(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new Z(new Vs({ab:u})):new Z(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fa(){}n=fa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Er(){}Er.prototype.g=function(i,c){return new St(i,c)};function St(i,c){gt.call(this),this.g=new na(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!m(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Be(this)}v(St,gt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Fs(this.g)},St.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=Cs(i),i=u);c.i.push(new _h(c.Ya++,i)),c.I==3&&vr(c)},St.prototype.N=function(){this.g.l=null,delete this.j,Fs(this.g),delete this.g,St.Z.N.call(this)};function pa(i){ks.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}v(pa,ks);function ga(){As.call(this),this.status=1}v(ga,As);function Be(i){this.g=i}v(Be,fa),Be.prototype.ra=function(){Et(this.g,"a")},Be.prototype.qa=function(i){Et(this.g,new pa(i))},Be.prototype.pa=function(i){Et(this.g,new ga)},Be.prototype.oa=function(){Et(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,xu=function(){return new Er},Mu=function(){return hr()},Lu=_e,ui={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,Or=dr,Ro.COMPLETE="complete",Pu=Ro,Co.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",gt.prototype.listen=gt.prototype.J,Dn=Co,Z.prototype.listenOnce=Z.prototype.K,Z.prototype.getLastError=Z.prototype.Ha,Z.prototype.getLastErrorCode=Z.prototype.ya,Z.prototype.getStatus=Z.prototype.ca,Z.prototype.getResponseJson=Z.prototype.La,Z.prototype.getResponseText=Z.prototype.la,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Fa,Ou=Z}).apply(typeof Ir<"u"?Ir:typeof self<"u"?self:typeof window<"u"?window:{});const Ha="@firebase/firestore",Ga="4.9.2";/**
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
*/let ln="12.3.0";/**
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
*/const Pe=new Si("@firebase/firestore");function ze(){return Pe.logLevel}function D(n,...t){if(Pe.logLevel<=B.DEBUG){const e=t.map(Vi);Pe.debug(`Firestore (${ln}): ${n}`,...e)}}function Qt(n,...t){if(Pe.logLevel<=B.ERROR){const e=t.map(Vi);Pe.error(`Firestore (${ln}): ${n}`,...e)}}function tn(n,...t){if(Pe.logLevel<=B.WARN){const e=t.map(Vi);Pe.warn(`Firestore (${ln}): ${n}`,...e)}}function Vi(n){if(typeof n=="string")return n;try{/**
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
*/function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Vu(n,r,e)}function Vu(n,t,e){let r=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Qt(r),new Error(r)}function G(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Vu(t,s,r)}function F(n,t){return n}/**
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
*/const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Jt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class pe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
*/class Uu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class _g{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ig{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new pe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new pe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new pe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new Uu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class Tg{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sg{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Tg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ka{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cg{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ka(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ka(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/class Ui{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kg(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function li(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Xs(s)===Xs(o)?q(s,o):Xs(s)?1:-1}return q(n.length,t.length)}const Ag=55296,Ng=57343;function Xs(n){const t=n.charCodeAt(0);return t>=Ag&&t<=Ng}function en(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
*/const Wa="__name__";class Ot{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ot.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ot?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ot.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=Ot.isNumericId(t),s=Ot.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ot.extractNumericId(t).compare(Ot.extractNumericId(e)):li(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return fe.fromString(t.substring(4,t.length-2))}}class J extends Ot{construct(t,e,r){return new J(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new P(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const Dg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Ot{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Dg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wa}static keyField(){return new dt([Wa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new P(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new P(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new P(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new P(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
*/class M{constructor(t){this.path=t}static fromPath(t){return new M(J.fromString(t))}static fromName(t){return new M(J.fromString(t).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new J(t.slice()))}}/**
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
*/function Rg(n,t,e){if(!e)throw new P(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Og(n,t,e,r){if(t===!0&&r===!0)throw new P(k.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Qa(n){if(!M.isDocumentKey(n))throw new P(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function zn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new P(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fi(n);throw new P(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
*/function nt(n,t){const e={typeString:n};return t&&(e.value=t),e}function nr(n,t){if(!Fu(n))throw new P(k.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new P(k.INVALID_ARGUMENT,e);return!0}/**
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
*/const Xa=-62135596800,Ja=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ja);return new X(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Xa)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ja}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(nr(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Xa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:nt("string",X._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
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
*/class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new X(0,0))}static max(){return new U(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
*/const $n=-1;function Pg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new X(e+1,0):new X(e,r));return new ge(s,M.empty(),t)}function Lg(n){return new ge(n.readTime,n.key,$n)}class ge{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ge(U.min(),M.empty(),$n)}static max(){return new ge(U.max(),M.empty(),$n)}}function Mg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
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
*/const xg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
*/async function hn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==xg)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++l,l===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Ug(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function dn(n){return n.name==="IndexedDbTransactionError"}/**
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
*/class as{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}as.ce=-1;/**
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
*/const ji=-1;function cs(n){return n==null}function Gr(n){return n===0&&1/n==-1/0}function Fg(n){return typeof n=="number"&&Number.isInteger(n)&&!Gr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
*/const ju="";function jg(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ya(t)),t=Bg(n.get(e),t);return Ya(t)}function Bg(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case ju:e+="";break;default:e+=o}}return e}function Ya(n){return n+ju+""}/**
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
*/function Za(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Bu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
*/class Y{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tr(this.root,t,this.comparator,!0)}}class Tr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ht(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(n,t,e,r,s){return this}insert(n,t,e){return new ht(n,t)}remove(n,t){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
*/class it{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new tc(this.data.getIterator())}getIteratorFrom(t){return new tc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class tc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class Nt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Nt([])}unionWith(t){let e=new it(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Nt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return en(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
*/class qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qu("Invalid base64 string: "+s):s}}(t);return new ft(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const qg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function me(n){if(G(!!n,39018),typeof n=="string"){let t=0;const e=qg.exec(n);if(G(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ye(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
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
*/const zu="server_timestamp",$u="__type__",Hu="__previous_value__",Gu="__local_write_time__";function Bi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[$u])==null?void 0:e.stringValue)===zu}function us(n){const t=n.mapValue.fields[Hu];return Bi(t)?us(t):t}function Hn(n){const t=me(n.mapValue.fields[Gu].timestampValue);return new X(t.seconds,t.nanos)}/**
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
*/class zg{constructor(t,e,r,s,o,a,l,h,f,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=p}}const Kr="(default)";class Gn{constructor(t,e){this.projectId=t,this.database=e||Kr}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===Kr}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
*/const Ku="__type__",$g="__max__",Sr={mapValue:{}},Wu="__vector__",Wr="value";function ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bi(n)?4:Gg(n)?9007199254740991:Hg(n)?10:11:x(28295,{value:n})}function Bt(n,t){if(n===t)return!0;const e=ve(n);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Hn(n).isEqual(Hn(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=me(r.timestampValue),a=me(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return ye(r.bytesValue).isEqual(ye(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return tt(r.geoPointValue.latitude)===tt(s.geoPointValue.latitude)&&tt(r.geoPointValue.longitude)===tt(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return tt(r.integerValue)===tt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=tt(r.doubleValue),a=tt(s.doubleValue);return o===a?Gr(o)===Gr(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return en(n.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(Za(o)!==Za(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Bt(o[l],a[l])))return!1;return!0}(n,t);default:return x(52216,{left:n})}}function Kn(n,t){return(n.values||[]).find(e=>Bt(e,t))!==void 0}function nn(n,t){if(n===t)return 0;const e=ve(n),r=ve(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=tt(s.integerValue||s.doubleValue),l=tt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return ec(n.timestampValue,t.timestampValue);case 4:return ec(Hn(n),Hn(t));case 5:return li(n.stringValue,t.stringValue);case 6:return function(s,o){const a=ye(s),l=ye(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=q(a[h],l[h]);if(f!==0)return f}return q(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=q(tt(s.latitude),tt(o.latitude));return a!==0?a:q(tt(s.longitude),tt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return nc(n.arrayValue,t.arrayValue);case 10:return function(s,o){var a,l,h,f;const p=s.fields||{},v=o.fields||{},C=(a=p[Wr])==null?void 0:a.arrayValue,A=(l=v[Wr])==null?void 0:l.arrayValue,R=q(((h=C==null?void 0:C.values)==null?void 0:h.length)||0,((f=A==null?void 0:A.values)==null?void 0:f.length)||0);return R!==0?R:nc(C,A)}(n.mapValue,t.mapValue);case 11:return function(s,o){if(s===Sr.mapValue&&o===Sr.mapValue)return 0;if(s===Sr.mapValue)return 1;if(o===Sr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const v=li(l[p],f[p]);if(v!==0)return v;const C=nn(a[l[p]],h[f[p]]);if(C!==0)return C}return q(l.length,f.length)}(n.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function ec(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=me(n),r=me(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function nc(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=nn(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function rn(n){return hi(n)}function hi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const e=me(t);return`time(${e.seconds},${e.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ye(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let e="[",r=!0;for(const s of t.values||[])r?r=!1:e+=",",e+=hi(s);return e+"]"}(n.arrayValue):"mapValue"in n?function(t){const e=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of e)s?s=!1:r+=",",r+=`${o}:${hi(t.fields[o])}`;return r+"}"}(n.mapValue):x(61005,{value:n})}function Pr(n){switch(ve(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=us(n);return t?16+Pr(t):16;case 5:return 2*n.stringValue.length;case 6:return ye(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((r,s)=>r+Pr(s),0)}(n.arrayValue);case 10:case 11:return function(e){let r=0;return Me(e.fields,(s,o)=>{r+=s.length+Pr(o)}),r}(n.mapValue);default:throw x(13486,{value:n})}}function di(n){return!!n&&"integerValue"in n}function qi(n){return!!n&&"arrayValue"in n}function rc(n){return!!n&&"nullValue"in n}function sc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Lr(n){return!!n&&"mapValue"in n}function Hg(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ku])==null?void 0:e.stringValue)===Wu}function xn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Me(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=xn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xn(n.arrayValue.values[e]);return t}return{...n}}function Gg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$g}/**
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
*/class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Lr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xn(e)}setAll(t){let e=dt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=xn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Lr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Lr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Me(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ct(xn(this.value))}}function Qu(n){const t=[];return Me(n.fields,(e,r)=>{const s=new dt([e]);if(Lr(r)){const o=Qu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Nt(t)}/**
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
*/class Qr{constructor(t,e){this.position=t,this.inclusive=e}}function ic(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=nn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function oc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Bt(n.position[e],t.position[e]))return!1;return!0}/**
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
*/class Xr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Kg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
*/class Xu{}class st extends Xu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Qg(t,e,r):e==="array-contains"?new Yg(t,r):e==="in"?new Zg(t,r):e==="not-in"?new tm(t,r):e==="array-contains-any"?new em(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Xg(t,r):new Jg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(nn(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(nn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends Xu{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new qt(t,e)}matches(t){return Ju(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ju(n){return n.op==="and"}function Yu(n){return Wg(n)&&Ju(n)}function Wg(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function fi(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+rn(n.value);if(Yu(n))return n.filters.map(t=>fi(t)).join(",");{const t=n.filters.map(e=>fi(e)).join(",");return`${n.op}(${t})`}}function Zu(n,t){return n instanceof st?function(e,r){return r instanceof st&&e.op===r.op&&e.field.isEqual(r.field)&&Bt(e.value,r.value)}(n,t):n instanceof qt?function(e,r){return r instanceof qt&&e.op===r.op&&e.filters.length===r.filters.length?e.filters.reduce((s,o,a)=>s&&Zu(o,r.filters[a]),!0):!1}(n,t):void x(19439)}function tl(n){return n instanceof st?function(t){return`${t.field.canonicalString()} ${t.op} ${rn(t.value)}`}(n):n instanceof qt?function(t){return t.op.toString()+" {"+t.getFilters().map(tl).join(" ,")+"}"}(n):"Filter"}class Qg extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xg extends st{constructor(t,e){super(t,"in",e),this.keys=el("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Jg extends st{constructor(t,e){super(t,"not-in",e),this.keys=el("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function el(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Yg extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qi(e)&&Kn(e.arrayValue,this.value)}}class Zg extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Kn(this.value.arrayValue,e)}}class tm extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Kn(this.value.arrayValue,e)}}class em extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Kn(this.value.arrayValue,r))}}/**
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
*/class nm{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function ac(n,t=null,e=[],r=[],s=null,o=null,a=null){return new nm(n,t,e,r,s,o,a)}function zi(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>fi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>rn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>rn(r)).join(",")),t.Te=e}return t.Te}function $i(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Kg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Zu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!oc(n.startAt,t.startAt)&&oc(n.endAt,t.endAt)}function pi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
*/class ls{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rm(n,t,e,r,s,o,a,l){return new ls(n,t,e,r,s,o,a,l)}function Hi(n){return new ls(n)}function cc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sm(n){return n.collectionGroup!==null}function Vn(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(s){let o=new it(dt.comparator);return s.filters.forEach(a=>{a.getFlattenedFilters().forEach(l=>{l.isInequality()&&(o=o.add(l.field))})}),o})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.Ie.push(new Xr(s,r))}),e.has(dt.keyField().canonicalString())||t.Ie.push(new Xr(dt.keyField(),r))}return t.Ie}function xt(n){const t=F(n);return t.Ee||(t.Ee=im(t,Vn(n))),t.Ee}function im(n,t){if(n.limitType==="F")return ac(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Xr(s.field,o)});const e=n.endAt?new Qr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qr(n.startAt.position,n.startAt.inclusive):null;return ac(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function gi(n,t,e){return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function hs(n,t){return $i(xt(n),xt(t))&&n.limitType===t.limitType}function nl(n){return`${zi(xt(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${function(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(r=>tl(r)).join(", ")}]`),cs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>rn(r)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>rn(r)).join(",")),`Target(${e})`}(xt(n))}; limitType=${n.limitType})`}function ds(n,t){return t.isFoundDocument()&&function(e,r){const s=r.key.path;return e.collectionGroup!==null?r.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(s):M.isDocumentKey(e.path)?e.path.isEqual(s):e.path.isImmediateParentOf(s)}(n,t)&&function(e,r){for(const s of Vn(e))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,t)&&function(e,r){for(const s of e.filters)if(!s.matches(r))return!1;return!0}(n,t)&&function(e,r){return!(e.startAt&&!function(s,o,a){const l=ic(s,o,a);return s.inclusive?l<=0:l<0}(e.startAt,Vn(e),r)||e.endAt&&!function(s,o,a){const l=ic(s,o,a);return s.inclusive?l>=0:l>0}(e.endAt,Vn(e),r))}(n,t)}function om(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rl(n){return(t,e)=>{let r=!1;for(const s of Vn(n)){const o=am(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function am(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),h=a.data.field(s);return l!==null&&h!==null?nn(l,h):x(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
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
*/class xe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Me(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Bu(this.inner)}size(){return this.innerSize}}/**
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
*/const cm=new Y(M.comparator);function Xt(){return cm}const sl=new Y(M.comparator);function Rn(...n){let t=sl;for(const e of n)t=t.insert(e.key,e);return t}function il(n){let t=sl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ke(){return Un()}function ol(){return Un()}function Un(){return new xe(n=>n.toString(),(n,t)=>n.isEqual(t))}const um=new Y(M.comparator),lm=new it(M.comparator);function z(...n){let t=lm;for(const e of n)t=t.add(e);return t}const hm=new it(q);function dm(){return hm}/**
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
*/function Gi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gr(t)?"-0":t}}function al(n){return{integerValue:""+n}}function fm(n,t){return Fg(t)?al(t):Gi(n,t)}/**
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
*/class fs{constructor(){this._=void 0}}function pm(n,t,e){return n instanceof Jr?function(r,s){const o={fields:{[$u]:{stringValue:zu},[Gu]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Bi(s)&&(s=us(s)),s&&(o.fields[Hu]=s),{mapValue:o}}(e,t):n instanceof Wn?ul(n,t):n instanceof Qn?ll(n,t):function(r,s){const o=cl(r,s),a=uc(o)+uc(r.Ae);return di(o)&&di(r.Ae)?al(a):Gi(r.serializer,a)}(n,t)}function gm(n,t,e){return n instanceof Wn?ul(n,t):n instanceof Qn?ll(n,t):e}function cl(n,t){return n instanceof Yr?function(e){return di(e)||function(r){return!!r&&"doubleValue"in r}(e)}(t)?t:{integerValue:0}:null}class Jr extends fs{}class Wn extends fs{constructor(t){super(),this.elements=t}}function ul(n,t){const e=hl(t);for(const r of n.elements)e.some(s=>Bt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Qn extends fs{constructor(t){super(),this.elements=t}}function ll(n,t){let e=hl(t);for(const r of n.elements)e=e.filter(s=>!Bt(s,r));return{arrayValue:{values:e}}}class Yr extends fs{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function uc(n){return tt(n.integerValue||n.doubleValue)}function hl(n){return qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mm(n,t){return n.field.isEqual(t.field)&&function(e,r){return e instanceof Wn&&r instanceof Wn||e instanceof Qn&&r instanceof Qn?en(e.elements,r.elements,Bt):e instanceof Yr&&r instanceof Yr?Bt(e.Ae,r.Ae):e instanceof Jr&&r instanceof Jr}(n.transform,t.transform)}class ym{constructor(t,e){this.version=t,this.transformResults=e}}class Ht{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ht}static exists(t){return new Ht(void 0,t)}static updateTime(t){return new Ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ps{}function dl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new pl(n.key,Ht.none()):new rr(n.key,n.data,Ht.none());{const e=n.data,r=Ct.empty();let s=new it(dt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ve(n.key,r,new Nt(s.toArray()),Ht.none())}}function vm(n,t,e){n instanceof rr?function(r,s,o){const a=r.value.clone(),l=hc(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ve?function(r,s,o){if(!Mr(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=hc(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(fl(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Fn(n,t,e,r){return n instanceof rr?function(s,o,a,l){if(!Mr(s.precondition,o))return a;const h=s.value.clone(),f=dc(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ve?function(s,o,a,l){if(!Mr(s.precondition,o))return a;const h=dc(s.fieldTransforms,l,o),f=o.data;return f.setAll(fl(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,t,e,r):function(s,o,a){return Mr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function wm(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=cl(r.transform,s||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,o))}return e||null}function lc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(e,r){return e===void 0&&r===void 0||!(!e||!r)&&en(e,r,(s,o)=>mm(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class rr extends ps{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ve extends ps{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function fl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function hc(n,t,e){const r=new Map;G(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,gm(a,l,e[s]))}return r}function dc(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,pm(o,a,t))}return r}class pl extends ps{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Em extends ps{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class bm{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&vm(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ol();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=dl(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&en(this.mutations,t.mutations,(e,r)=>lc(e,r))&&en(this.baseMutations,t.baseMutations,(e,r)=>lc(e,r))}}class Ki{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){G(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return um}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ki(t,e,r,s)}}/**
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
*/class _m{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
*/class Im{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
*/var et,H;function Tm(n){switch(n){case k.OK:return x(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function gl(n){if(n===void 0)return Qt("GRPC error has no .code"),k.UNKNOWN;switch(n){case et.OK:return k.OK;case et.CANCELLED:return k.CANCELLED;case et.UNKNOWN:return k.UNKNOWN;case et.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case et.INTERNAL:return k.INTERNAL;case et.UNAVAILABLE:return k.UNAVAILABLE;case et.UNAUTHENTICATED:return k.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case et.NOT_FOUND:return k.NOT_FOUND;case et.ALREADY_EXISTS:return k.ALREADY_EXISTS;case et.PERMISSION_DENIED:return k.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case et.ABORTED:return k.ABORTED;case et.OUT_OF_RANGE:return k.OUT_OF_RANGE;case et.UNIMPLEMENTED:return k.UNIMPLEMENTED;case et.DATA_LOSS:return k.DATA_LOSS;default:return x(39323,{code:n})}}(H=et||(et={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
*/function Sm(){return new TextEncoder}/**
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
*/const Cm=new fe([4294967295,4294967295],0);function fc(n){const t=Sm().encode(n),e=new Ru;return e.update(t),new Uint8Array(e.digest())}function pc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new fe([e,r],0),new fe([s,o],0)]}class Wi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new On(`Invalid padding: ${e}`);if(r<0)throw new On(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new On(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new On(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=fe.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(fe.fromNumber(r)));return s.compare(Cm)===1&&(s=new fe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=fc(t),[r,s]=pc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Wi(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const e=fc(t),[r,s]=pc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class On extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
*/class gs{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,sr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new gs(U.min(),s,new Y(q),Xt(),z())}}class sr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new sr(r,e,z(),z(),z())}}/**
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
*/class xr{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class ml{constructor(t,e){this.targetId=t,this.Ce=e}}class yl{constructor(t,e,r=ft.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class gc{constructor(){this.ve=0,this.Fe=mc(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=z(),e=z(),r=z();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x(38017,{changeType:o})}}),new sr(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=mc()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class km{constructor(t){this.Ge=t,this.ze=new Map,this.je=Xt(),this.Je=Cr(),this.He=Cr(),this.Ye=new Y(q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:x(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(pi(o))if(r===0){const a=new M(o.path);this.et(e,a,vt.newNoDocument(a,U.min()))}else G(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ye(r).toUint8Array()}catch(h){if(h instanceof qu)return tn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Wi(a,s,o)}catch(h){return tn(h instanceof On?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&pi(l.target)){const h=new M(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,vt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let r=z();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new gs(t,e,this.Ye,this.je,r);return this.je=Xt(),this.Je=Cr(),this.He=Cr(),this.Ye=new Y(q),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new gc,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new it(q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new it(q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new gc),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Cr(){return new Y(M.comparator)}function mc(){return new Y(M.comparator)}const Am={asc:"ASCENDING",desc:"DESCENDING"},Nm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dm={and:"AND",or:"OR"};class Rm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function mi(n,t){return n.useProto3Json||cs(t)?t:{value:t}}function Zr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Om(n,t){return Zr(n,t.toTimestamp())}function Vt(n){return G(!!n,49232),U.fromTimestamp(function(t){const e=me(t);return new X(e.seconds,e.nanos)}(n))}function Qi(n,t){return yi(n,t).canonicalString()}function yi(n,t){const e=function(r){return new J(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function wl(n){const t=J.fromString(n);return G(Tl(t),10190,{key:t.toString()}),t}function vi(n,t){return Qi(n.databaseId,t.path)}function Js(n,t){const e=wl(t);if(e.get(1)!==n.databaseId.projectId)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(bl(e))}function El(n,t){return Qi(n.databaseId,t)}function Pm(n){const t=wl(n);return t.length===4?J.emptyPath():bl(t)}function wi(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bl(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yc(n,t,e){return{name:vi(n,t),fields:e.value.mapValue.fields}}function Lm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:x(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?k.UNKNOWN:gl(h.code);return new P(f,h.message||"")}(a);e=new yl(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Js(n,r.document.name),o=Vt(r.document.updateTime),a=r.document.createTime?Vt(r.document.createTime):U.min(),l=new Ct({mapValue:{fields:r.document.fields}}),h=vt.newFoundDocument(s,o,a,l),f=r.targetIds||[],p=r.removedTargetIds||[];e=new xr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Js(n,r.document),o=r.readTime?Vt(r.readTime):U.min(),a=vt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new xr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Js(n,r.document),o=r.removedTargetIds||[];e=new xr([],o,s,null)}else{if(!("filter"in t))return x(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Im(s,o),l=r.targetId;e=new ml(l,a)}}return e}function Mm(n,t){let e;if(t instanceof rr)e={update:yc(n,t.key,t.value)};else if(t instanceof pl)e={delete:vi(n,t.key)};else if(t instanceof Ve)e={update:yc(n,t.key,t.data),updateMask:$m(t.fieldMask)};else{if(!(t instanceof Em))return x(16599,{Vt:t.type});e={verify:vi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Jr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Wn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yr)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw x(20930,{transform:o.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Om(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:x(27497)}(n,t.precondition)),e}function xm(n,t){return n&&n.length>0?(G(t!==void 0,14353),n.map(e=>function(r,s){let o=r.updateTime?Vt(r.updateTime):Vt(s);return o.isEqual(U.min())&&(o=Vt(s)),new ym(o,r.transformResults||[])}(e,t))):[]}function Vm(n,t){return{documents:[El(n,t.path)]}}function Um(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=El(n,s);const o=function(h){if(h.length!==0)return Il(qt.create(h,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:He(p.field),direction:Bm(p.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=mi(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:e,parent:s}}function Fm(n){let t=Pm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){G(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(p){const v=_l(p);return v instanceof qt&&Yu(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(v=>function(C){return new Xr(Ge(C.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(e.orderBy));let l=null;e.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,cs(v)?null:v}(e.limit));let h=null;e.startAt&&(h=function(p){const v=!!p.before,C=p.values||[];return new Qr(C,v)}(e.startAt));let f=null;return e.endAt&&(f=function(p){const v=!p.before,C=p.values||[];return new Qr(C,v)}(e.endAt)),rm(t,s,a,o,l,"F",h,f)}function jm(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:r})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function _l(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ge(t.unaryFilter.field);return st.create(e,"==",{doubleValue:NaN});case"IS_NULL":const r=Ge(t.unaryFilter.field);return st.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ge(t.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ge(t.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return st.create(Ge(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return qt.create(t.compositeFilter.filters.map(e=>_l(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function Bm(n){return Am[n]}function qm(n){return Nm[n]}function zm(n){return Dm[n]}function He(n){return{fieldPath:n.canonicalString()}}function Ge(n){return dt.fromServerFormat(n.fieldPath)}function Il(n){return n instanceof st?function(t){if(t.op==="=="){if(sc(t.value))return{unaryFilter:{field:He(t.field),op:"IS_NAN"}};if(rc(t.value))return{unaryFilter:{field:He(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sc(t.value))return{unaryFilter:{field:He(t.field),op:"IS_NOT_NAN"}};if(rc(t.value))return{unaryFilter:{field:He(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:He(t.field),op:qm(t.op),value:t.value}}}(n):n instanceof qt?function(t){const e=t.getFilters().map(r=>Il(r));return e.length===1?e[0]:{compositeFilter:{op:zm(t.op),filters:e}}}(n):x(54877,{filter:n})}function $m(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Tl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
*/class ue{constructor(t,e,r,s,o=U.min(),a=U.min(),l=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new ue(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
*/class Hm{constructor(t){this.yt=t}}function Gm(n){const t=Fm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gi(t,t.limit,"L"):t}/**
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
*/class Km{constructor(){this.Cn=new Wm}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ge.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ge.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Wm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new it(J.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new it(J.comparator)).toArray()}}/**
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
*/const vc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sl=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
*/Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Sl,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
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
*/class sn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new sn(0)}static cr(){return new sn(-1)}}/**
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
*/const wc="LruGarbageCollector",Qm=1048576;function Ec([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class Xm{constructor(t){this.Ir=t,this.buffer=new it(Ec),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ec(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Jm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){D(wc,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){dn(e)?D(wc,"Ignoring IndexedDB error during garbage collection: ",e):await hn(e)}await this.Vr(3e5)})}}class Ym{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(as.ce);const r=new Xm(e);return this.mr.forEachTarget(t,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(vc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vc):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,l,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(t,s))).next(v=>(r=v,l=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(f=Date.now(),ze()<=B.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${v} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function Zm(n,t){return new Ym(n,t)}/**
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
*/class ty{constructor(){this.changes=new xe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
*/class ey{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
*/class ny{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Fn(r.mutation,s,Nt.empty(),X.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const s=ke();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Rn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ke();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=Xt();const a=Un(),l=function(){return Un()}();return e.forEach((h,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof Ve)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),Fn(p.mutation,f,p.mutation.getFieldMask(),X.now())):a.set(f.key,Nt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>l.set(f,new ey(p,a.get(f)??null))),l))}recalculateAndSaveOverlays(t,e){const r=Un();let s=new Y((a,l)=>a-l),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||Nt.empty();p=l.applyToLocalView(f,p),r.set(h,p);const v=(s.get(l.batchId)||z()).add(h);s=s.insert(l.batchId,v)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,p=h.value,v=ol();p.forEach(C=>{if(!o.has(C)){const A=dl(e.get(C),r.get(C));A!==null&&v.set(C,A),o=o.add(C)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,v))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):sm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(ke());let l=$n,h=o;return a.next(f=>S.forEach(f,(p,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(t,p).next(C=>{h=h.insert(p,C)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,z())).next(p=>({batchId:l,changes:il(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=Rn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Rn();return this.indexManager.getCollectionParents(t,o).next(l=>S.forEach(l,h=>{const f=function(p,v){return new ls(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(p=>{p.forEach((v,C)=>{a=a.insert(v,C)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,vt.newInvalidDocument(p)))});let l=Rn();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&Fn(p.mutation,f,Nt.empty(),X.now()),ds(e,f)&&(l=l.insert(h,f))}),l})}}/**
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
*/class ry{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Vt(r.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(r){return{name:r.name,query:Gm(r.bundledQuery),readTime:Vt(r.readTime)}}(e)),S.resolve()}}/**
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
*/class sy{constructor(){this.overlays=new Y(M.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ke();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=ke(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Y((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=ke(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=ke(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=s)););return S.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _m(e,r));let o=this.qr.get(e);o===void 0&&(o=z(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
*/class iy{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
*/class Xi{constructor(){this.Qr=new it(ut.$r),this.Ur=new it(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new ut(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new M(new J([])),r=new ut(e,t),s=new ut(e,t+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new J([])),r=new ut(e,t),s=new ut(e,t+1);let o=z();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ut(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||q(t.Yr,e.Yr)}static Kr(t,e){return q(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
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
*/class oy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new it(ut.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new bm(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new ut(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ji:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),s=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(q);return e.forEach(s=>{const o=new ut(s,0),a=new ut(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],l=>{r=r.add(l.Yr)})}),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ut(new M(o),0);let l=new it(q);return this.Zr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Yr)),!0)},a),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach(r=>{const s=this.Xr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){G(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,s=>{const o=new ut(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new ut(e,0),s=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
*/class ay{constructor(t){this.ri=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=Xt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():vt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Xt();const a=e.path,l=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Mg(Lg(p),r)<=0||(s.has(p.key)||ds(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x(9500)}ii(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new cy(this)}getSize(t){return S.resolve(this.size)}}class cy extends ty{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
*/class uy{constructor(t){this.persistence=t,this.si=new xe(e=>zi(e),$i),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new Xi,this.targetCount=0,this.ai=sn.ur()}forEachTarget(t,e){return this.si.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new sn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
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
*/class Cl{constructor(t,e){this.ui={},this.overlays={},this.ci=new as(0),this.li=!1,this.li=!0,this.hi=new iy,this.referenceDelegate=t(this),this.Pi=new uy(this),this.indexManager=new Km,this.remoteDocumentCache=function(r){return new ay(r)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Hm(e),this.Ii=new ry(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new oy(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new ly(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(t,e){return S.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class ly extends Vg{constructor(t){super(),this.currentSequenceNumber=t}}class Ji{constructor(t){this.persistence=t,this.Ri=new Xi,this.Vi=null}static mi(t){return new Ji(t)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,r=>{const s=M.fromPath(r);return this.gi(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class ts{constructor(t,e){this.persistence=t,this.pi=new xe(r=>jg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Zm(this,e)}static mi(t,e){return new ts(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}wr(t){let e=0;return this.pr(t,r=>{e++}).next(()=>e)}pr(t,e){return S.forEach(this.pi,(r,s)=>this.br(t,r,s).next(o=>o?S.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(l=>{l||(r++,o.removeEntry(a,U.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Pr(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
*/class Yi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=z(),s=z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Yi(t,e.fromCache,r,s)}}/**
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
*/class hy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
*/class dy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return nd()?8:Ug(wt())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new hy;return this.Ss(t,e,a).next(l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)})}).next(()=>o.result)}bs(t,e,r,s){return r.documentReadCount<this.fs?(ze()<=B.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(ze()<=B.DEBUG&&D("QueryEngine","Query:",$e(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ze()<=B.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):S.resolve())}ys(t,e){if(cc(e))return S.resolve(null);let r=xt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=gi(e,null,"F"),r=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=z(...o);return this.ps.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Ds(e,l);return this.Cs(e,f,a,h.readTime)?this.ys(t,gi(e,null,"F")):this.vs(t,f,e,h)}))})))}ws(t,e,r,s){return cc(e)||s.isEqual(U.min())?S.resolve(null):this.ps.getDocuments(t,r).next(o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?S.resolve(null):(ze()<=B.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$e(e)),this.vs(t,a,e,Pg(s,$n)).next(l=>l))})}Ds(t,e){let r=new it(rl(t));return e.forEach((s,o)=>{ds(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return ze()<=B.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",$e(e)),this.ps.getDocumentsMatchingQuery(t,e,ge.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
*/const Zi="LocalStore",fy=3e8;class py{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new Y(q),this.xs=new xe(o=>zi(o),$i),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ny(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function gy(n,t,e,r){return new py(n,t,e,r)}async function kl(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=z();for(const f of s){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ls:f,removedBatchIds:a,addedBatchIds:l}))})})}function my(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,h,f){const p=h.batch,v=p.keys();let C=S.resolve();return v.forEach(A=>{C=C.next(()=>f.getEntry(l,A)).next(R=>{const L=h.docVersions.get(A);G(L!==null,48541),R.version.compareTo(L)<0&&(p.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),C.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=z();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Al(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function yy(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const l=[];t.targetChanges.forEach((p,v)=>{const C=s.get(v);if(!C)return;l.push(e.Pi.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.Pi.addMatchingKeys(o,p.addedDocuments,v)));let A=C.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?A=A.withResumeToken(ft.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(v,A),function(R,L,O){return R.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=fy?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(C,A,p)&&l.push(e.Pi.updateTargetData(o,A))});let h=Xt(),f=z();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(vy(o,a,t.documentUpdates).next(p=>{h=p.ks,f=p.qs})),!r.isEqual(U.min())){const p=e.Pi.getLastRemoteSnapshotVersion(o).next(v=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return S.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ms=s,o))}function vy(n,t,e){let r=z(),s=z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Xt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):D(Zi,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{ks:a,qs:s}})}function wy(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ji),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Ey(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Pi.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.Pi.allocateTargetId(r).next(a=>(s=new ue(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r})}async function Ei(n,t,e){const r=F(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!dn(a))throw a;D(Zi,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function bc(n,t,e){const r=F(n);let s=U.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=F(l),v=p.xs.get(f);return v!==void 0?S.resolve(p.Ms.get(v)):p.Pi.getTargetData(h,f)}(r,a,xt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:z())).next(l=>(by(r,om(t),l),{documents:l,Qs:o})))}function by(n,t,e){let r=n.Os.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(t,r)}class _c{constructor(){this.activeTargetIds=dm()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _y{constructor(){this.Mo=new _c,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new _c,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
*/class Iy{Oo(t){}shutdown(){}}/**
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
*/const Ic="ConnectivityMonitor";class Tc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(Ic,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){D(Ic,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let kr=null;function bi(){return kr===null?kr=function(){return 268435456+Math.round(2147483648*Math.random())}():kr++,"0x"+kr.toString(16)}/**
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
*/const Ys="RestConnection",Ty={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Sy{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Kr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=bi(),l=this.zo(t,e.toUriEncodedString());D(Ys,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:f}=new URL(l),p=an(f);return this.Jo(t,l,h,r,p).then(v=>(D(Ys,`Received RPC '${t}' ${a}: `,v),v),v=>{throw tn(Ys,`RPC '${t}' ${a} failed with error: `,v,"url: ",l,"request:",r),v})}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ln}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}zo(t,e){const r=Ty[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
*/class Cy{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
*/const mt="WebChannelConnection";class ky extends Sy{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=bi();return new Promise((l,h)=>{const f=new Ou;f.setWithCredentials(!0),f.listenOnce(Pu.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Or.NO_ERROR:const v=f.getResponseJson();D(mt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(v)),l(v);break;case Or.TIMEOUT:D(mt,`RPC '${t}' ${a} timed out`),h(new P(k.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const C=f.getStatus();if(D(mt,`RPC '${t}' ${a} failed with status:`,C,"response text:",f.getResponseText()),C>0){let A=f.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const L=function(O){const $=O.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN}(R.status);h(new P(L,R.message))}else h(new P(k.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new P(k.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(mt,`RPC '${t}' ${a} completed.`)}});const p=JSON.stringify(s);D(mt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",p,r,15)})}T_(t,e,r){const s=bi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=xu(),l=Mu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");D(mt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);this.I_(v);let C=!1,A=!1;const R=new Cy({Yo:O=>{A?D(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(C||(D(mt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),C=!0),D(mt,`RPC '${t}' stream ${s} sending:`,O),v.send(O))},Zo:()=>v.close()}),L=(O,$,K)=>{O.listen($,ot=>{try{K(ot)}catch(pt){setTimeout(()=>{throw pt},0)}})};return L(v,Dn.EventType.OPEN,()=>{A||(D(mt,`RPC '${t}' stream ${s} transport opened.`),R.o_())}),L(v,Dn.EventType.CLOSE,()=>{A||(A=!0,D(mt,`RPC '${t}' stream ${s} transport closed`),R.a_(),this.E_(v))}),L(v,Dn.EventType.ERROR,O=>{A||(A=!0,tn(mt,`RPC '${t}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),R.a_(new P(k.UNAVAILABLE,"The operation could not be completed")))}),L(v,Dn.EventType.MESSAGE,O=>{var $;if(!A){const K=O.data[0];G(!!K,16349);const ot=K,pt=(ot==null?void 0:ot.error)||(($=ot[0])==null?void 0:$.error);if(pt){D(mt,`RPC '${t}' stream ${s} received error:`,pt);const _t=pt.status;let at=function(g){const y=et[g];if(y!==void 0)return gl(y)}(_t),E=pt.message;at===void 0&&(at=k.INTERNAL,E="Unknown error status: "+_t+" with message "+pt.message),A=!0,R.a_(new P(at,E)),v.close()}else D(mt,`RPC '${t}' stream ${s} received:`,K),R.u_(K)}}),L(l,Lu.STAT_EVENT,O=>{O.stat===ui.PROXY?D(mt,`RPC '${t}' stream ${s} detected buffering proxy`):O.stat===ui.NOPROXY&&D(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Zs(){return typeof document<"u"?document:null}/**
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
*/function ms(n){return new Rm(n,!0)}/**
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
*/class Nl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/const Sc="PersistentStream";class Dl{constructor(t,e,r,s,o,a,l,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Nl(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===k.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new P(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return D(Sc,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(D(Sc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ay extends Dl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Lm(this.serializer,t),r=function(s){if(!("targetChange"in s))return U.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?Vt(o.readTime):U.min()}(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=wi(this.serializer),e.addTarget=function(s,o){let a;const l=o.target;if(a=pi(l)?{documents:Vm(s,l)}:{query:Um(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=vl(s,o.resumeToken);const h=mi(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=Zr(s,o.snapshotVersion.toTimestamp());const h=mi(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=jm(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=wi(this.serializer),e.removeTarget=t,this.q_(e)}}class Ny extends Dl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=xm(t.writeResults,t.commitTime),r=Vt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=wi(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Mm(this.serializer,r))};this.q_(e)}}/**
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
*/class Dy{}class Ry extends Dy{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(t,yi(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new P(k.UNKNOWN,o.toString())})}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(t,yi(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new P(k.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Oy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qt(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
*/const Le="RemoteStore";class Py{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ue(this)&&(D(Le,"Restarting streams for network reachability change."),await async function(l){const h=F(l);h.Ea.add(4),await ir(h),h.Ra.set("Unknown"),h.Ea.delete(4),await ys(h)}(this))})}),this.Ra=new Oy(r,s)}}async function ys(n){if(Ue(n))for(const t of n.da)await t(!0)}async function ir(n){for(const t of n.da)await t(!1)}function Rl(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),ro(e)?no(e):fn(e).O_()&&eo(e,t))}function to(n,t){const e=F(n),r=fn(e);e.Ia.delete(t),r.O_()&&Ol(e,t),e.Ia.size===0&&(r.O_()?r.L_():Ue(e)&&e.Ra.set("Unknown"))}function eo(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}fn(n).Y_(t)}function Ol(n,t){n.Va.Ue(t),fn(n).Z_(t)}function no(n){n.Va=new km({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),fn(n).start(),n.Ra.ua()}function ro(n){return Ue(n)&&!fn(n).x_()&&n.Ia.size>0}function Ue(n){return F(n).Ea.size===0}function Pl(n){n.Va=void 0}async function Ly(n){n.Ra.set("Online")}async function My(n){n.Ia.forEach((t,e)=>{eo(n,t)})}async function xy(n,t){Pl(n),ro(n)?(n.Ra.ha(t),no(n)):n.Ra.set("Unknown")}async function Vy(n,t,e){if(n.Ra.set("Online"),t instanceof yl&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.Ia.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Ia.delete(a),r.Va.removeTarget(a))}(n,t)}catch(r){D(Le,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await es(n,r)}else if(t instanceof xr?n.Va.Ze(t):t instanceof ml?n.Va.st(t):n.Va.tt(t),!e.isEqual(U.min()))try{const r=await Al(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.Va.Tt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=s.Ia.get(l);if(!f)return;s.Ia.set(l,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),Ol(s,l);const p=new ue(f.target,l,h,f.sequenceNumber);eo(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){D(Le,"Failed to raise snapshot:",r),await es(n,r)}}async function es(n,t,e){if(!dn(t))throw t;n.Ea.add(1),await ir(n),n.Ra.set("Offline"),e||(e=()=>Al(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(Le,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await ys(n)})}function Ll(n,t){return t().catch(e=>es(n,e,t))}async function vs(n){const t=F(n),e=we(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ji;for(;Uy(t);)try{const s=await wy(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Fy(t,s)}catch(s){await es(t,s)}Ml(t)&&xl(t)}function Uy(n){return Ue(n)&&n.Ta.length<10}function Fy(n,t){n.Ta.push(t);const e=we(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Ml(n){return Ue(n)&&!we(n).x_()&&n.Ta.length>0}function xl(n){we(n).start()}async function jy(n){we(n).ra()}async function By(n){const t=we(n);for(const e of n.Ta)t.ea(e.mutations)}async function qy(n,t,e){const r=n.Ta.shift(),s=Ki.from(r,t,e);await Ll(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await vs(n)}async function zy(n,t){t&&we(n).X_&&await async function(e,r){if(function(s){return Tm(s)&&s!==k.ABORTED}(r.code)){const s=e.Ta.shift();we(e).B_(),await Ll(e,()=>e.remoteSyncer.rejectFailedWrite(s.batchId,r)),await vs(e)}}(n,t),Ml(n)&&xl(n)}async function Cc(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D(Le,"RemoteStore received new credentials");const r=Ue(e);e.Ea.add(3),await ir(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await ys(e)}async function $y(n,t){const e=F(n);t?(e.Ea.delete(2),await ys(e)):t||(e.Ea.add(2),await ir(e),e.Ra.set("Unknown"))}function fn(n){return n.ma||(n.ma=function(t,e,r){const s=F(t);return s.sa(),new Ay(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Xo:Ly.bind(null,n),t_:My.bind(null,n),r_:xy.bind(null,n),H_:Vy.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),ro(n)?no(n):n.Ra.set("Unknown")):(await n.ma.stop(),Pl(n))})),n.ma}function we(n){return n.fa||(n.fa=function(t,e,r){const s=F(t);return s.sa(),new Ny(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:jy.bind(null,n),r_:zy.bind(null,n),ta:By.bind(null,n),na:qy.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await vs(n)):(await n.fa.stop(),n.Ta.length>0&&(D(Le,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
*/class so{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new so(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function io(n,t){if(Qt("AsyncQueue",`${t}: ${n}`),dn(n))return new P(k.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
*/class Je{static emptySet(t){return new Je(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=Rn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Je)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Je;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
*/class kc{constructor(){this.ga=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):x(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class on{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new on(t,e,Je.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
*/class Hy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Gy{constructor(){this.queries=Ac(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,e){const r=F(t),s=r.queries;r.queries=Ac(),s.forEach((o,a)=>{for(const l of a.Sa)l.onError(e)})})(this,new P(k.ABORTED,"Firestore shutting down"))}}function Ac(){return new xe(n=>nl(n),hs)}async function Ky(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new Hy,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=io(a,`Initialization of query '${$e(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&oo(e)}async function Wy(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Qy(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&oo(e)}function Xy(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function oo(n){n.Ca.forEach(t=>{t.next()})}var _i,Nc;(Nc=_i||(_i={})).Ma="default",Nc.Cache="cache";class Jy{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new on(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=on.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==_i.Cache}}/**
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
*/class Vl{constructor(t){this.key=t}}class Ul{constructor(t){this.key=t}}class Yy{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=rl(t),this.tu=new Je(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new kc,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,v)=>{const C=s.get(p),A=ds(this.query,v)?v:null,R=!!C&&this.mutatedKeys.has(C.key),L=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;C&&A?C.data.isEqual(A.data)?R!==L&&(r.track({type:3,doc:A}),O=!0):this.su(C,A)||(r.track({type:2,doc:A}),O=!0,(h&&this.eu(A,h)>0||f&&this.eu(A,f)<0)&&(l=!0)):!C&&A?(r.track({type:0,doc:A}),O=!0):C&&!A&&(r.track({type:1,doc:C}),O=!0,(h||f)&&(l=!0)),O&&(A?(a=a.add(A),o=L?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((p,v)=>function(C,A){const R=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Rt:L})}};return R(C)-R(A)}(p.type,v.type)||this.eu(p.doc,v.doc)),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new on(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const e=[];return t.forEach(r=>{this.Xa.has(r)||e.push(new Ul(r))}),this.Xa.forEach(r=>{t.has(r)||e.push(new Vl(r))}),e}cu(t){this.Ya=t.Qs,this.Xa=z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return on.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ao="SyncEngine";class Zy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class tv{constructor(t){this.key=t,this.hu=!1}}class ev{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new xe(l=>nl(l),hs),this.Iu=new Map,this.Eu=new Set,this.du=new Y(M.comparator),this.Au=new Map,this.Ru=new Xi,this.Vu={},this.mu=new Map,this.fu=sn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nv(n,t,e=!0){const r=$l(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Fl(r,t,e,!0),s}async function rv(n,t){const e=$l(n);await Fl(e,t,!0,!1)}async function Fl(n,t,e,r){const s=await Ey(n.localStore,xt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await sv(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Rl(n.remoteStore,s),l}async function sv(n,t,e,r,s){n.pu=(v,C,A)=>async function(R,L,O,$){let K=L.view.ru(O);K.Cs&&(K=await bc(R.localStore,L.query,!1).then(({documents:at})=>L.view.ru(at,K)));const ot=$&&$.targetChanges.get(L.targetId),pt=$&&$.targetMismatches.get(L.targetId)!=null,_t=L.view.applyChanges(K,R.isPrimaryClient,ot,pt);return Rc(R,L.targetId,_t.au),_t.snapshot}(n,v,C,A);const o=await bc(n.localStore,t,!0),a=new Yy(t,o.Qs),l=a.ru(o.documents),h=sr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);Rc(n,e,f.au);const p=new Zy(t,e,a);return n.Tu.set(t,p),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),f.snapshot}async function iv(n,t,e){const r=F(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!hs(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ei(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&to(r.remoteStore,s.targetId),Ii(r,s.targetId)}).catch(hn)):(Ii(r,s.targetId),await Ei(r.localStore,s.targetId,!0))}async function ov(n,t){const e=F(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),to(e.remoteStore,r.targetId))}async function av(n,t,e){const r=pv(n);try{const s=await function(o,a){const l=F(o),h=X.now(),f=a.reduce((C,A)=>C.add(A.key),z());let p,v;return l.persistence.runTransaction("Locally write mutations","readwrite",C=>{let A=Xt(),R=z();return l.Ns.getEntries(C,f).next(L=>{A=L,A.forEach((O,$)=>{$.isValidDocument()||(R=R.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(C,A)).next(L=>{p=L;const O=[];for(const $ of a){const K=wm($,p.get($.key).overlayedDocument);K!=null&&O.push(new Ve($.key,K,Qu(K.value.mapValue),Ht.exists(!0)))}return l.mutationQueue.addMutationBatch(C,h,O,a)}).next(L=>{v=L;const O=L.applyToLocalDocumentSet(p,R);return l.documentOverlayCache.saveOverlays(C,L.batchId,O)})}).then(()=>({batchId:v.batchId,changes:il(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new Y(q)),h=h.insert(a,l),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,e),await or(r,s.changes),await vs(r.remoteStore)}catch(s){const o=io(s,"Failed to persist write");e.reject(o)}}async function jl(n,t){const e=F(n);try{const r=await yy(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?G(a.hu,14607):s.removedDocuments.size>0&&(G(a.hu,42227),a.hu=!1))}),await or(e,r,t)}catch(r){await hn(r)}}function Dc(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(o,a){const l=F(o);l.onlineState=a;let h=!1;l.queries.forEach((f,p)=>{for(const v of p.Sa)v.va(a)&&(h=!0)}),h&&oo(l)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cv(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new Y(M.comparator);a=a.insert(o,vt.newNoDocument(o,U.min()));const l=z().add(o),h=new gs(U.min(),new Map,new Y(q),a,l);await jl(r,h),r.du=r.du.remove(o),r.Au.delete(t),co(r)}else await Ei(r.localStore,t,!1).then(()=>Ii(r,t,e)).catch(hn)}async function uv(n,t){const e=F(n),r=t.batch.batchId;try{const s=await my(e.localStore,t);ql(e,r,null),Bl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await or(e,s)}catch(s){await hn(s)}}async function lv(n,t,e){const r=F(n);try{const s=await function(o,a){const l=F(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,a).next(p=>(G(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,t);ql(r,t,e),Bl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await or(r,s)}catch(s){await hn(s)}}function Bl(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function ql(n,t,e){const r=F(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Ii(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(r=>{n.Ru.containsKey(r)||zl(n,r)})}function zl(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(to(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),co(n))}function Rc(n,t,e){for(const r of e)r instanceof Vl?(n.Ru.addReference(r.key,t),hv(n,r)):r instanceof Ul?(D(ao,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||zl(n,r.key)):x(19791,{wu:r})}function hv(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(D(ao,"New document in limbo: "+e),n.Eu.add(r),co(n))}function co(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new M(J.fromString(t)),r=n.fu.next();n.Au.set(r,new tv(e)),n.du=n.du.insert(e,r),Rl(n.remoteStore,new ue(xt(Hi(e.path)),r,"TargetPurposeLimboResolution",as.ce))}}async function or(n,t,e){const r=F(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,h)=>{a.push(r.pu(h,t,e).then(f=>{var p;if((f||e)&&r.isPrimaryClient){const v=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){s.push(f);const v=Yi.As(h.targetId,f);o.push(v)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(l,h){const f=F(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(h,v=>S.forEach(v.Es,C=>f.persistence.referenceDelegate.addReference(p,v.targetId,C)).next(()=>S.forEach(v.ds,C=>f.persistence.referenceDelegate.removeReference(p,v.targetId,C)))))}catch(p){if(!dn(p))throw p;D(Zi,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const C=f.Ms.get(v),A=C.snapshotVersion,R=C.withLastLimboFreeSnapshotVersion(A);f.Ms=f.Ms.insert(v,R)}}}(r.localStore,o))}async function dv(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D(ao,"User change. New user:",t.toKey());const r=await kl(e.localStore,t);e.currentUser=t,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new P(k.CANCELLED,o))})}),s.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await or(e,r.Ls)}}function fv(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return z().add(r.key);{let s=z();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function $l(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=jl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cv.bind(null,t),t.Pu.H_=Qy.bind(null,t.eventManager),t.Pu.yu=Xy.bind(null,t.eventManager),t}function pv(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lv.bind(null,t),t}class ns{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ms(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return gy(this.persistence,new dy,t.initialUser,this.serializer)}Cu(t){return new Cl(Ji.mi,this.serializer)}Du(t){return new _y}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ns.provider={build:()=>new ns};class gv extends ns{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){G(this.persistence.referenceDelegate instanceof ts,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Jm(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Cl(r=>ts.mi(r,e),this.serializer)}}class Ti{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dv.bind(null,this.syncEngine),await $y(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Gy}()}createDatastore(t){const e=ms(t.databaseInfo.databaseId),r=function(s){return new ky(s)}(t.databaseInfo);return function(s,o,a,l){return new Ry(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(e,r,s,o,a){return new Py(e,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Dc(this.syncEngine,e,0),function(){return Tc.v()?new Tc:new Iy}())}createSyncEngine(t,e){return function(r,s,o,a,l,h,f){const p=new ev(r,s,o,a,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=F(r);D(Le,"RemoteStore shutting down."),s.Ea.add(5),await ir(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Ti.provider={build:()=>new Ti};/**
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
*/class mv{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
*/const Ee="FirestoreClient";class yv{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Ui.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D(Ee,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(Ee,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=io(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ti(n,t){n.asyncQueue.verifyOperationInProgress(),D(Ee,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await kl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Oc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await vv(n);D(Ee,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Cc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Cc(t.remoteStore,s)),n._onlineComponents=t}async function vv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(Ee,"Using user provided OfflineComponentProvider");try{await ti(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===k.FAILED_PRECONDITION||r.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;tn("Error using user provided cache. Falling back to memory cache: "+e),await ti(n,new ns)}}else D(Ee,"Using default OfflineComponentProvider"),await ti(n,new gv(void 0));return n._offlineComponents}async function Hl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(Ee,"Using user provided OnlineComponentProvider"),await Oc(n,n._uninitializedComponentsProvider._online)):(D(Ee,"Using default OnlineComponentProvider"),await Oc(n,new Ti))),n._onlineComponents}function wv(n){return Hl(n).then(t=>t.syncEngine)}async function Ev(n){const t=await Hl(n),e=t.eventManager;return e.onListen=nv.bind(null,t.syncEngine),e.onUnlisten=iv.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=rv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ov.bind(null,t.syncEngine),e}function bv(n,t,e={}){const r=new pe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,h){const f=new mv({next:v=>{f.Nu(),o.enqueueAndForget(()=>Wy(s,p));const C=v.docs.has(a);!C&&v.fromCache?h.reject(new P(k.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&v.fromCache&&l&&l.source==="server"?h.reject(new P(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),p=new Jy(Hi(a.path),f,{includeMetadataChanges:!0,qa:!0});return Ky(s,p)}(await Ev(n),n.asyncQueue,t,e,r)),r.promise}/**
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
*/function Gl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
*/const Pc=new Map;/**
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
*/const Kl="firestore.googleapis.com",Lc=!0;class Mc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new P(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kl,this.ssl=Lc}else this.host=t.host,this.ssl=t.ssl??Lc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Sl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Qm)throw new P(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Og("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gl(t.experimentalLongPollingOptions??{}),function(e){if(e.timeoutSeconds!==void 0){if(isNaN(e.timeoutSeconds))throw new P(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new P(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new P(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(e,r){return e.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class uo{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new P(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new bg;switch(e.type){case"firstParty":return new Sg(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new P(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Pc.get(t);e&&(D("ComponentProvider","Removing Datastore"),Pc.delete(t),e.terminate())}(this),Promise.resolve()}}function _v(n,t,e,r={}){var s;n=zn(n,uo);const o=an(t),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;o&&(Gc(`https://${h}`),Kc("Firestore",!0)),a.host!==Kl&&a.host!==h&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...a,host:h,ssl:o,emulatorOptions:r};if(!De(f,l)&&(n._setSettings(f),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=yt.MOCK_USER;else{p=Kh(r.mockUserToken,(s=n._app)==null?void 0:s.options.projectId);const C=r.mockUserToken.sub||r.mockUserToken.user_id;if(!C)throw new P(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new yt(C)}n._authCredentials=new _g(new Uu(p,v))}}/**
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
*/class lo{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new lo(this.firestore,t,this._query)}}class lt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(nr(e,lt._jsonSchema))return new lt(t,r||null,new M(J.fromString(e.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:nt("string",lt._jsonSchemaVersion),referencePath:nt("string")};class Xn extends lo{constructor(t,e,r){super(t,e,Hi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new M(t))}withConverter(t){return new Xn(this.firestore,t,this._path)}}function Iv(n,t,...e){if(n=jt(n),arguments.length===1&&(t=Ui.newId()),Rg("doc","path",t),n instanceof uo){const r=J.fromString(t,...e);return Qa(r),new lt(n,null,new M(r))}{if(!(n instanceof lt||n instanceof Xn))throw new P(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return Qa(r),new lt(n.firestore,n instanceof Xn?n.converter:null,new M(r))}}/**
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
*/const xc="AsyncQueue";class Vc{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Nl(this,"async_queue_retry"),this._c=()=>{const r=Zs();r&&D(xc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Zs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Zs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new pe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!dn(t))throw t;D(xc,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Qt("INTERNAL UNHANDLED ERROR: ",Uc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=so.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&x(47125,{Pc:Uc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Uc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ho extends uo{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Vc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Vc(t),this._firestoreClient=void 0,await t}}}function Tv(n,t){const e=typeof n=="object"?n:Jc(),r=typeof n=="string"?n:Kr,s=ki(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Hh("firestore");o&&_v(s,...o)}return s}function Wl(n){if(n._terminated)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Sv(n),n._firestoreClient}function Sv(n){var t,e,r;const s=n._freezeSettings(),o=function(a,l,h,f){return new zg(a,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Gl(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((t=n._app)==null?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||(e=s.localCache)!=null&&e._offlineComponentProvider&&(r=s.localCache)!=null&&r._onlineComponentProvider&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new yv(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
*/class kt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kt(ft.fromBase64String(t))}catch(e){throw new P(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new kt(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(nr(t,kt._jsonSchema))return kt.fromBase64String(t.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:nt("string",kt._jsonSchemaVersion),bytes:nt("string")};/**
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
*/class fo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new P(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
*/class Ql{constructor(t){this._methodName=t}}/**
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
*/class Ut{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(t){if(nr(t,Ut._jsonSchema))return new Ut(t.latitude,t.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:nt("string",Ut._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
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
*/class Ft{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(e,r){if(e.length!==r.length)return!1;for(let s=0;s<e.length;++s)if(e[s]!==r[s])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ft._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(nr(t,Ft._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ft(t.vectorValues);throw new P(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ft._jsonSchemaVersion="firestore/vectorValue/1.0",Ft._jsonSchema={type:nt("string",Ft._jsonSchemaVersion),vectorValues:nt("object")};/**
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
*/const Cv=/^__.*__$/;class kv{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new rr(t,this.data,e,this.fieldTransforms)}}function Xl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class po{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new po({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var e;const r=(e=this.path)==null?void 0:e.child(t),s=this.Vc({path:r,fc:!1});return s.gc(t),s}yc(t){var e;const r=(e=this.path)==null?void 0:e.child(t),s=this.Vc({path:r,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return rs(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Xl(this.Ac)&&Cv.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Av{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ms(t)}Cc(t,e,r,s=!1){return new po({Ac:t,methodName:e,Dc:r,path:dt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nv(n){const t=n._freezeSettings(),e=ms(n._databaseId);return new Av(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Dv(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);th("Data must be an object, but it was:",a,r);const l=Yl(r,a);let h,f;if(o.merge)h=new Nt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const C=Rv(t,v,e);if(!a.contains(C))throw new P(k.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Pv(p,C)||p.push(C)}h=new Nt(p),f=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=a.fieldTransforms;return new kv(new Ct(l),h,f)}function Jl(n,t){if(Zl(n=jt(n)))return th("Unsupported field value:",t,n),Yl(n,t);if(n instanceof Ql)return function(e,r){if(!Xl(r.Ac))throw r.Sc(`${e._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${e._methodName}() is not currently supported inside arrays`);const s=e._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(e,r){const s=[];let o=0;for(const a of e){let l=Jl(a,r.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,t)}return function(e,r){if((e=jt(e))===null)return{nullValue:"NULL_VALUE"};if(typeof e=="number")return fm(r.serializer,e);if(typeof e=="boolean")return{booleanValue:e};if(typeof e=="string")return{stringValue:e};if(e instanceof Date){const s=X.fromDate(e);return{timestampValue:Zr(r.serializer,s)}}if(e instanceof X){const s=new X(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Zr(r.serializer,s)}}if(e instanceof Ut)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kt)return{bytesValue:vl(r.serializer,e._byteString)};if(e instanceof lt){const s=r.databaseId,o=e.firestore._databaseId;if(!o.isEqual(s))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qi(e.firestore._databaseId||r.databaseId,e._key.path)}}if(e instanceof Ft)return function(s,o){return{mapValue:{fields:{[Ku]:{stringValue:Wu},[Wr]:{arrayValue:{values:s.toArray().map(a=>{if(typeof a!="number")throw o.Sc("VectorValues must only contain numeric values.");return Gi(o.serializer,a)})}}}}}}(e,r);throw r.Sc(`Unsupported field value: ${Fi(e)}`)}(n,t)}function Yl(n,t){const e={};return Bu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Me(n,(r,s)=>{const o=Jl(s,t.mc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Zl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Ut||n instanceof kt||n instanceof lt||n instanceof Ql||n instanceof Ft)}function th(n,t,e){if(!Zl(e)||!Fu(e)){const r=Fi(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Rv(n,t,e){if((t=jt(t))instanceof fo)return t._internalPath;if(typeof t=="string")return eh(n,t);throw rs("Field path arguments must be of type string or ",n,!1,void 0,e)}const Ov=new RegExp("[~\\*/\\[\\]]");function eh(n,t,e){if(t.search(Ov)>=0)throw rs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new fo(...t.split("."))._internalPath}catch{throw rs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function rs(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new P(k.INVALID_ARGUMENT,l+n+h)}function Pv(n,t){return n.some(e=>e.isEqual(t))}/**
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
*/class nh{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Lv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(rh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Lv extends nh{data(){return super.data()}}function rh(n,t){return typeof t=="string"?eh(n,t):t instanceof fo?t._internalPath:t._delegate._internalPath}class Mv{convertValue(t,e="none"){switch(ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ye(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Me(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)==null?void 0:e[Wr].arrayValue)==null?void 0:r.values)==null?void 0:s.map(a=>tt(a.doubleValue));return new Ft(o)}convertGeoPoint(t){return new Ut(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=us(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Hn(t));default:return null}}convertTimestamp(t){const e=me(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=J.fromString(t);G(Tl(r),9688,{name:t});const s=new Gn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
*/function xv(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Pn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ne extends nh{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(rh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new P(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ne._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()||(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),e}}Ne._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ne._jsonSchema={type:nt("string",Ne._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Vr extends Ne{data(t={}){return super.data(t)}}class jn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Pn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Vr(this._firestore,this._userDataWriter,r.key,r,new Pn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new P(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Vr(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Pn(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Vr(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Pn(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:Vv(a.type),doc:l,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new P(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=jn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ui.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Vv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
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
*/function Uv(n){n=zn(n,lt);const t=zn(n.firestore,ho);return bv(Wl(t),n._key).then(e=>Bv(t,n,e))}jn._jsonSchemaVersion="firestore/querySnapshot/1.0",jn._jsonSchema={type:nt("string",jn._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class Fv extends Mv{constructor(t){super(),this.firestore=t}convertBytes(t){return new kt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,e)}}function Fc(n,t,e){n=zn(n,lt);const r=zn(n.firestore,ho),s=xv(n.converter,t);return jv(r,[Dv(Nv(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ht.none())])}function jv(n,t){return function(e,r){const s=new pe;return e.asyncQueue.enqueueAndForget(async()=>av(await wv(e),r,s)),s.promise}(Wl(n),t)}function Bv(n,t,e){const r=e.docs.get(t._key),s=new Fv(n);return new Ne(n,s,t._key,r,new Pn(e.hasPendingWrites,e.fromCache),t.converter)}(function(n,t=!0){(function(e){ln=e})(cn),Ye(new Re("firestore",(e,{instanceIdentifier:r,options:s})=>{const o=e.getProvider("app").getImmediate(),a=new ho(new Ig(e.getProvider("auth-internal")),new Cg(o,e.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new P(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(l.options.projectId,h)}(o,r),o);return s={useFetchStreams:t,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),de(Ha,Ga,n),de(Ha,Ga,"esm2020")})();const qv={apiKey:void 0,authDomain:void 0,databaseURL:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},sh=Xc(qv);wg(sh);const zv=Tv(sh),$v=async n=>{try{const t=Iv(zv,"analytics","pageViews"),e=await Uv(t);if(e.exists()){const r=e.data(),s={...r,[n]:(r[n]||0)+1,total:(r.total||0)+1,lastUpdated:new Date().toISOString()};await Fc(t,s)}else await Fc(t,{[n]:1,total:1,lastUpdated:new Date().toISOString()})}catch(t){console.error("Error tracking page view:",t)}};export{zv as db,$v as trackPageView};
