(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const x="modulepreload",g=function(d,e){return new URL(d,e).href},h={},m=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),n=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=g(l,s),l in h)return;h[l]=!0;const c=l.endsWith(".css"),b=c?'[rel="stylesheet"]':"";if(!!s)for(let p=a.length-1;p>=0;p--){const v=a[p];if(v.href===l&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${b}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":x,c||(u.as="script"),u.crossOrigin="",u.href=l,n&&u.setAttribute("nonce",n),document.head.appendChild(u),c)return new Promise((p,v)=>{u.addEventListener("load",p),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};class f extends HTMLElement{constructor(){super(),this.currentUser=null,this.isCEOMode=!1}connectedCallback(){this.render(),this.setupEventListeners(),this.setupAuthListener()}render(){var s;const e=this.currentUser!==null,t=((s=this.currentUser)==null?void 0:s.email)==="boomdigitaleeuu@gmail.com";this.innerHTML=`
            <header class="bg-black shadow-sm sticky top-0 z-50 transition-all duration-300">
                <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo -->
                        <div class="flex-shrink-0">
                            <a href="#" class="text-2xl font-bold text-white hover:text-primary-blue transition-colors">
                                <img src="assets/images/logo.png" alt="BOOM DIGITAL" class="h-10 w-auto">
                            </a>
                        </div>

                        <!-- Desktop Navigation -->
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-8">
                                <a href="#services" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Servicios</a>
                                <a href="#dashboard" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Dashboard</a>
                                <a href="#club" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Club IA</a>
                                <a href="#contact" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
                            </div>
                        </div>

                        <!-- Auth Buttons -->
                        <div class="hidden md:flex items-center space-x-4">
                            ${e?`
                                <div class="flex items-center space-x-3">
                                    <span class="text-sm text-gray-600">
                                        ${this.currentUser.displayName||this.currentUser.email}
                                    </span>
                                    ${t?`
                                        <button id="ceoPanelBtn" class="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                            Panel CEO
                                        </button>
                                    `:""}
                                    <button id="logoutBtn" class="text-black hover:text-red-600 px-4 py-2 text-sm font-medium transition-colors border border-gray-300 hover:border-red-600 rounded-full">
                                        Cerrar Sesión
                                    </button>
                                </div>
                            `:`
                                <button id="loginBtn" class="text-black hover:text-primary-blue px-4 py-2 text-sm font-medium transition-colors border border-gray-300 hover:border-primary-blue rounded-full">
                                    Iniciar Sesión
                                </button>
                                <button id="registerBtn" class="bg-primary-blue text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-400 transition-colors shadow-lg hover:shadow-xl border border-primary-blue">
                                    Registrarse
                                </button>
                            `}
                        </div>

                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button id="mobileMenuBtn" class="text-white hover:text-primary-blue p-2">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Navigation -->
                    <div id="mobileMenu" class="md:hidden hidden">
                        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-700">
                            <a href="#services" class="text-white hover:text-primary-blue block px-3 py-2 text-base font-medium">Servicios</a>
                            <a href="#dashboard" class="text-white hover:text-primary-blue block px-3 py-2 text-base font-medium">Dashboard</a>
                            <a href="#club" class="text-white hover:text-primary-blue block px-3 py-2 text-base font-medium">Club IA</a>
                            <a href="#contact" class="text-white hover:text-primary-blue block px-3 py-2 text-base font-medium">Contacto</a>
                            <div class="pt-4 pb-3 border-t border-gray-700">
                                ${e?`
                                    <div class="px-3 py-2 text-sm text-white">
                                        ${this.currentUser.displayName||this.currentUser.email}
                                    </div>
                                    ${t?`
                                        <button id="mobileCeoPanelBtn" class="bg-black text-white block w-full text-left px-3 py-2 rounded-lg text-base font-medium mt-2">
                                            Panel CEO
                                        </button>
                                    `:""}
                                    <button id="mobileLogoutBtn" class="text-red-600 hover:text-red-700 block w-full text-left px-3 py-2 text-base font-medium mt-2 border border-red-600 hover:border-red-700 rounded-lg">
                                        Cerrar Sesión
                                    </button>
                                `:`
                                    <button id="mobileLoginBtn" class="text-black hover:text-primary-blue block w-full text-left px-3 py-2 text-base font-medium border border-gray-300 hover:border-primary-blue rounded-lg">
                                        Iniciar Sesión
                                    </button>
                                    <button id="mobileRegisterBtn" class="bg-primary-blue text-white block w-full text-left px-3 py-2 rounded-lg text-base font-medium mt-2 border border-primary-blue">
                                        Registrarse
                                    </button>
                                `}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        `}setupEventListeners(){const e=this.querySelector("#mobileMenuBtn"),t=this.querySelector("#mobileMenu");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("hidden")});const s=(i,r,a)=>{const o=this.querySelector(i),n=this.querySelector(r),l=()=>{a==="login"?this.showAuthModal("login"):a==="register"?this.showAuthModal("register"):a==="logout"?this.handleLogout():a==="ceoPanel"&&this.openCEOPanel()};o&&o.addEventListener("click",l),n&&n.addEventListener("click",l)};s("#loginBtn","#mobileLoginBtn","login"),s("#registerBtn","#mobileRegisterBtn","register"),s("#logoutBtn","#mobileLogoutBtn","logout"),s("#ceoPanelBtn","#mobileCeoPanelBtn","ceoPanel"),document.addEventListener("click",i=>{t&&!this.contains(i.target)&&!t.classList.contains("hidden")&&t.classList.add("hidden")})}setupAuthListener(){m(async()=>{const{setupAuthListener:e}=await import("./firebase-3iqP4OEf.js");return{setupAuthListener:e}},[],import.meta.url).then(({setupAuthListener:e})=>{e(t=>{this.currentUser=t,this.render(),this.setupEventListeners()})})}openCEOPanel(){const e=document.querySelector("ceo-panel-modal");e&&e.open()}showAuthModal(e){const t=document.querySelector("auth-modal");t&&t.open(e)}async handleLogout(){try{const{signOutCEO:e}=await m(async()=>{const{signOutCEO:t}=await import("./firebase-3iqP4OEf.js");return{signOutCEO:t}},[],import.meta.url);await e(),this.showNotification("Sesión cerrada correctamente","success")}catch(e){console.error("Logout error:",e),this.showNotification("Error al cerrar sesión","error")}}showNotification(e,t="info"){const s=document.createElement("div"),i={success:"bg-green-500",error:"bg-red-500",info:"bg-blue-500"};s.className=`fixed top-4 right-4 ${i[t]} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-0`,s.textContent=e,document.body.appendChild(s),setTimeout(()=>{s.style.transform="translateX(100%)",setTimeout(()=>s.remove(),300)},3e3)}}customElements.define("header-component",f);class y extends HTMLElement{constructor(){super(),this.websiteContent=null}connectedCallback(){this.loadContent(),this.setupIntersectionObserver()}async loadContent(){try{const{getWebsiteContent:e}=await m(async()=>{const{getWebsiteContent:t}=await import("./firebase-3iqP4OEf.js");return{getWebsiteContent:t}},[],import.meta.url);this.websiteContent=await e(),this.render()}catch(e){console.error("Error loading hero content:",e),this.render()}}render(){var t;const e=((t=this.websiteContent)==null?void 0:t.hero)||{};this.innerHTML=`
            <section class="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
                <!-- Background Elements -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
                <div class="absolute top-20 left-10 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>

                <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <!-- Main Content -->
                    <div class="animate-fade-in">
                        <!-- Badge -->
                        <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-8">
                            <span class="text-sm font-medium text-primary-blue">✨ Potenciado por IA</span>
                        </div>

                        <!-- Main Heading -->
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                            ${e.title||"Transformamos tu Presencia Digital con IA"}
                        </h1>

                        <!-- Subtitle -->
                        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            ${e.subtitle||"Soluciones inteligentes que impulsan el crecimiento de tu empresa"}
                        </p>

                        <!-- CTA Buttons -->
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button 
                                id="heroCtaBtn"
                                class="group relative bg-primary-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span class="relative z-10">${e.ctaText||"Comenzar Ahora"}</span>
                                <div class="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </button>
                            
                            <button 
                                id="learnMoreBtn"
                                class="group border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Conocer Más</span>
                            </button>
                        </div>

                        <!-- Stats -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-black mb-1">+500</div>
                                <div class="text-sm text-gray-600">Clientes Satisfechos</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-black mb-1">+95%</div>
                                <div class="text-sm text-gray-600">Tasa de Éxito</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-black mb-1">24/7</div>
                                <div class="text-sm text-gray-600">Soporte Activo</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-black mb-1">+3M</div>
                                <div class="text-sm text-gray-600">Interacciones IA</div>
                            </div>
                        </div>
                    </div>

                    <!-- Scroll Indicator -->
                    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                            <div class="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>

                <!-- Floating Elements -->
                <div class="absolute top-1/4 right-1/4 w-4 h-4 bg-primary-blue rounded-full animate-pulse"></div>
                <div class="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary-blue rounded-full animate-pulse delay-1000"></div>
                <div class="absolute top-1/3 left-1/2 w-2 h-2 bg-primary-blue rounded-full animate-pulse delay-500"></div>
            </section>
        `,this.setupEventListeners()}renderWithDefaultContent(){this.innerHTML=`
            <section class="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
                <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div class="animate-fade-in">
                        <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-8">
                            <span class="text-sm font-medium text-primary-blue">✨ Potenciado por IA</span>
                        </div>
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                            Transformamos tu Presencia Digital con IA
                        </h1>
                        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Soluciones inteligentes que impulsan el crecimiento de tu empresa
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button 
                                id="heroCtaBtn"
                                class="group relative bg-primary-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span class="relative z-10">Comenzar Ahora</span>
                                <div class="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </button>
                            <button 
                                id="learnMoreBtn"
                                class="group border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Conocer Más</span>
                            </button>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-black mb-1">+500</div>
                                <div class="text-sm text-gray-600">Clientes Satisfechos</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-black mb-1">+95%</div>
                                <div class="text-sm text-gray-600">Tasa de Éxito</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-black mb-1">24/7</div>
                                <div class="text-sm text-gray-600">Soporte Activo</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-black mb-1">+3M</div>
                                <div class="text-sm text-gray-600">Interacciones IA</div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                            <div class="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        `,this.setupEventListeners()}setupEventListeners(){const e=this.querySelector("#heroCtaBtn"),t=this.querySelector("#learnMoreBtn");e&&e.addEventListener("click",()=>{this.showAuthModal("register")}),t&&t.addEventListener("click",()=>{document.querySelector("#services").scrollIntoView({behavior:"smooth"})})}setupIntersectionObserver(){const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&s.target.classList.add("animate-slide-up")})},{threshold:.1});setTimeout(()=>{this.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach(s=>e.observe(s))},100)}showAuthModal(e){const t=document.querySelector("auth-modal");t&&t.open(e)}}customElements.define("hero-section",y);class w extends HTMLElement{constructor(){super(),this.websiteContent=null}connectedCallback(){this.loadContent(),this.setupIntersectionObserver()}async loadContent(){try{const{getWebsiteContent:e}=await m(async()=>{const{getWebsiteContent:t}=await import("./firebase-3iqP4OEf.js");return{getWebsiteContent:t}},[],import.meta.url);this.websiteContent=await e(),this.render()}catch(e){console.error("Error loading services content:",e),this.render()}}render(){var t,s,i,r,a,o,n,l,c;const e=((t=this.websiteContent)==null?void 0:t.services)||{};this.innerHTML=`
            <section id="services" class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Section Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <h2 class="text-4xl md:text-5xl font-bold text-black mb-4">
                            Nuestros Servicios
                        </h2>
                        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                            Soluciones innovadoras diseñadas para impulsar tu crecimiento digital
                        </p>
                    </div>

                    <!-- Services Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Service 1: E-commerce -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                ${((s=e.service1)==null?void 0:s.title)||"E-commerce"}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${((i=e.service1)==null?void 0:i.description)||"Desarrollo de tiendas online completas con integración de pagos, inventario y gestión de pedidos."}
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 2: IT Solutions -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 100ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                ${((r=e.service2)==null?void 0:r.title)||"IT Solutions"}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${((a=e.service2)==null?void 0:a.description)||"Soluciones tecnológicas personalizadas, infraestructura cloud y soporte técnico especializado."}
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 3: IA Solutions -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 200ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                ${((o=e.service3)==null?void 0:o.title)||"IA Solutions"}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${((n=e.service3)==null?void 0:n.description)||"Implementación de inteligencia artificial para automatización, análisis predictivo y optimización de procesos."}
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 4: Desarrollo Web -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 300ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                ${((l=e.service4)==null?void 0:l.title)||"Desarrollo Web"}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${((c=e.service4)==null?void 0:c.description)||"Creación de aplicaciones web modernas, responsivas y escalables con las últimas tecnologías."}
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    <!-- Additional Services Row -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        <!-- Service 5: Marketing Digital -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 400ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                Marketing Digital
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Estrategias de marketing digital completas con análisis de datos y optimización de conversiones.
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 6: SEO Optimization -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 500ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                SEO Optimization
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Optimización para motores de búsqueda, posicionamiento orgánico y mejora de visibilidad online.
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 7: Coaching Empresarial -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 600ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                Coaching Empresarial
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Acompañamiento estratégico para el crecimiento empresarial y desarrollo de liderazgo.
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 8: Consultoría Técnica -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 700ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                Consultoría Técnica
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Asesoramiento experto en tecnología, arquitectura de sistemas y transformación digital.
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    <!-- CTA Section -->
                    <div class="text-center mt-16 animate-fade-in" style="animation-delay: 400ms">
                        <div class="bg-gradient-to-r from-primary-blue/5 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
                            <h3 class="text-2xl font-bold text-black mb-4">
                                ¿Listo para transformar tu negocio?
                            </h3>
                            <p class="text-gray-600 mb-6">
                                Únete a más de 500 empresas que ya confían en nuestras soluciones de IA
                            </p>
                            <button 
                                id="servicesCtaBtn"
                                class="bg-primary-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Solicitar Demo Gratuita
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `,this.setupEventListeners()}renderWithDefaultContent(){this.innerHTML=`
            <section id="services" class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16 animate-fade-in">
                        <h2 class="text-4xl md:text-5xl font-bold text-black mb-4">
                            Nuestros Servicios
                        </h2>
                        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                            Soluciones innovadoras diseñadas para impulsar tu crecimiento digital
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Default services content would go here -->
                    </div>

                    <div class="text-center mt-16 animate-fade-in" style="animation-delay: 400ms">
                        <div class="bg-gradient-to-r from-primary-blue/5 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
                            <h3 class="text-2xl font-bold text-black mb-4">
                                ¿Listo para transformar tu negocio?
                            </h3>
                            <p class="text-gray-600 mb-6">
                                Únete a más de 500 empresas que ya confían en nuestras soluciones de IA
                            </p>
                            <button 
                                id="servicesCtaBtn"
                                class="bg-primary-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Solicitar Demo Gratuita
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `,this.setupEventListeners()}setupEventListeners(){const e=this.querySelector("#servicesCtaBtn"),t=this.querySelectorAll(".group");e&&e.addEventListener("click",()=>{this.showAuthModal("register")}),t.forEach((s,i)=>{s.addEventListener("click",()=>{this.showServiceDetails(i)})})}setupIntersectionObserver(){const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.style.animationPlayState="running")})},{threshold:.1});setTimeout(()=>{this.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach(s=>e.observe(s))},100)}showServiceDetails(e){const t=["E-commerce","IT Solutions","IA Solutions","Desarrollo Web","Marketing Digital","SEO Optimization","Coaching Empresarial","Consultoría Técnica"];this.showNotification(`Redirigiendo a detalles de: ${t[e]}`,"info"),setTimeout(()=>{this.showAuthModal("register")},1e3)}showAuthModal(e){const t=document.querySelector("auth-modal");t&&t.open(e)}showNotification(e,t="info"){const s=document.createElement("div"),i={success:"bg-green-500",error:"bg-red-500",info:"bg-primary-blue"};s.className=`fixed top-4 right-4 ${i[t]} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-0`,s.textContent=e,document.body.appendChild(s),setTimeout(()=>{s.style.transform="translateX(100%)",setTimeout(()=>s.remove(),300)},3e3)}}customElements.define("services-section",w);class k extends HTMLElement{constructor(){super(),this.metrics={activeUsers:0,campaigns:0,conversions:0,revenue:0},this.interval=null}connectedCallback(){this.render(),this.startLiveUpdates(),this.setupIntersectionObserver()}disconnectedCallback(){this.interval&&clearInterval(this.interval)}render(){this.innerHTML=`
            <section id="dashboard" class="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Section Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <h2 class="text-4xl md:text-5xl font-bold text-black mb-4">
                            Dashboard en Tiempo Real
                        </h2>
                        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                            Monitorea el rendimiento de tus campañas con nuestra plataforma de IA
                        </p>
                    </div>

                    <!-- Live Metrics Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <!-- Active Users -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-700">Usuarios Activos</h3>
                                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-baseline">
                                <span id="activeUsers" class="text-3xl font-bold text-black">2,847</span>
                                <span class="ml-2 text-sm text-green-600 font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +12%
                                </span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">En línea ahora</p>
                        </div>

                        <!-- Active Campaigns -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up" style="animation-delay: 100ms">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-700">Campañas Activas</h3>
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-baseline">
                                <span id="activeCampaigns" class="text-3xl font-bold text-black">47</span>
                                <span class="ml-2 text-sm text-green-600 font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +3
                                </span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">Este mes</p>
                        </div>

                        <!-- Conversions -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up" style="animation-delay: 200ms">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-700">Conversiones</h3>
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-baseline">
                                <span id="conversions" class="text-3xl font-bold text-black">1,284</span>
                                <span class="ml-2 text-sm text-green-600 font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +8%
                                </span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">Hoy</p>
                        </div>

                        <!-- Revenue -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up" style="animation-delay: 300ms">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-700">Ingresos</h3>
                                <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-baseline">
                                <span id="revenue" class="text-3xl font-bold text-black">$24.7K</span>
                                <span class="ml-2 text-sm text-green-600 font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +15%
                                </span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">Este mes</p>
                        </div>
                    </div>

                    <!-- Chart Visualization -->
                    <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-fade-in" style="animation-delay: 400ms">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-2xl font-bold text-black">Rendimiento de Campañas</h3>
                            <div class="flex items-center space-x-2">
                                <span class="text-sm text-gray-500">Actualizado hace 2 min</span>
                                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        
                        <!-- Simulated Chart -->
                        <div class="relative h-64 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 overflow-hidden">
                            <!-- Chart Grid -->
                            <div class="absolute inset-0 flex items-end justify-between px-4 pb-4">
                                <!-- Chart Bars -->
                                <div class="flex items-end space-x-2 h-48 w-full justify-between">
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 60%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Lun</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 75%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Mar</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 45%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Mié</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 85%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Jue</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 65%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Vie</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 95%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Sáb</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 70%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Dom</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Y-axis labels -->
                            <div class="absolute left-4 top-4 flex flex-col justify-between h-48 text-xs text-gray-400">
                                <span>100%</span>
                                <span>75%</span>
                                <span>50%</span>
                                <span>25%</span>
                                <span>0%</span>
                            </div>
                        </div>

                        <!-- Chart Legend -->
                        <div class="flex justify-center mt-6 space-x-6">
                            <div class="flex items-center">
                                <div class="w-3 h-3 bg-primary-blue rounded-full mr-2"></div>
                                <span class="text-sm text-gray-600">Conversiones</span>
                            </div>
                            <div class="flex items-center">
                                <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                <span class="text-sm text-gray-600">Ingresos</span>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Section -->
                    <div class="text-center mt-12 animate-fade-in" style="animation-delay: 600ms">
                        <div class="bg-gradient-to-r from-primary-blue to-blue-500 rounded-2xl p-8 text-white">
                            <h3 class="text-2xl font-bold mb-4">
                                Accede a tu Dashboard Personalizado
                            </h3>
                            <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Obtén insights detallados, métricas en tiempo real y recomendaciones de IA para optimizar tus campañas
                            </p>
                            <button 
                                id="dashboardCtaBtn"
                                class="bg-white text-primary-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Acceder al Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `,this.setupEventListeners(),this.animateChart()}setupEventListeners(){const e=this.querySelector("#dashboardCtaBtn");e&&e.addEventListener("click",()=>{this.showAuthModal("register")})}startLiveUpdates(){this.interval=setInterval(()=>{this.updateMetrics()},3e3),this.updateMetrics()}updateMetrics(){const e=(a,o)=>Math.floor(Math.random()*(o-a+1))+a,t=this.querySelector("#activeUsers"),s=this.querySelector("#activeCampaigns"),i=this.querySelector("#conversions"),r=this.querySelector("#revenue");if(t){const o=(parseInt(t.textContent.replace(",",""))||2847)+e(-2,5);t.textContent=o.toLocaleString()}if(s){const o=(parseInt(s.textContent)||47)+e(-1,1);s.textContent=Math.max(45,o)}if(i){const o=(parseInt(i.textContent.replace(",",""))||1284)+e(1,8);i.textContent=o.toLocaleString()}if(r){const a=parseFloat(r.textContent.replace("$","").replace("K",""))||24.7,o=e(1,3)/10,n=a+o;r.textContent=`$${n.toFixed(1)}K`}}animateChart(){setTimeout(()=>{this.querySelectorAll(".bg-primary-blue").forEach((t,s)=>{setTimeout(()=>{t.style.transition="height 1s ease-in-out"},s*100)})},500)}setupIntersectionObserver(){const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.style.animationPlayState="running")})},{threshold:.1});setTimeout(()=>{this.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach(s=>e.observe(s))},100)}showAuthModal(e){const t=document.querySelector("auth-modal");t&&t.open(e)}}customElements.define("dashboard-section",k);class C extends HTMLElement{constructor(){super(),this.currentTestimonial=0}connectedCallback(){this.render(),this.setupEventListeners(),this.startTestimonialRotation()}render(){this.innerHTML=`
            <section id="club" class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Section Header -->
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-black mb-4">
                            Club IA Boom
                        </h2>
                        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                            Únete a nuestra comunidad exclusiva de empresas que transforman su negocio con IA
                        </p>
                    </div>

                    <!-- Benefits Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                            <div class="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-4">Acceso Exclusivo</h3>
                            <p class="text-gray-600">
                                Recibe actualizaciones premium, herramientas avanzadas y soporte prioritario 24/7
                            </p>
                        </div>

                        <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                            <div class="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-4">Comunidad Activa</h3>
                            <p class="text-gray-600">
                                Conecta con otros líderes empresariales y comparte mejores prácticas
                            </p>
                        </div>

                        <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                            <div class="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-4">Early Access</h3>
                            <p class="text-gray-600">
                                Sé el primero en probar nuevas funcionalidades y productos antes del lanzamiento público
                            </p>
                        </div>
                    </div>

                    <!-- Testimonials -->
                    <div class="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
                        <div class="text-center mb-8">
                            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">
                                Lo que dicen nuestros miembros
                            </h3>
                            <p class="text-gray-600 max-w-2xl mx-auto">
                                Empresas que ya están transformando sus operaciones con nuestras soluciones de IA
                            </p>
                        </div>

                        <div class="max-w-4xl mx-auto">
                            <div id="testimonialContent" class="text-center mb-8">
                                <div class="text-center">
                                    <div class="text-6xl mb-4">"</div>
                                    <p class="text-xl text-gray-700 mb-6 italic">
                                        Boom Digital revolucionó nuestro enfoque digital. La implementación de IA nos permitió escalar operaciones y mejorar significativamente nuestro ROI.
                                    </p>
                                    <div class="flex items-center justify-center">
                                        <div class="text-left">
                                            <div class="font-bold text-black">Carlos Rodríguez</div>
                                            <div class="text-gray-600">CEO, TechStart Inc</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-center items-center space-x-4">
                                <button id="prevTestimonial" class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                
                                <div class="flex space-x-2">
                                    <button class="testimonial-dot w-3 h-3 rounded-full bg-primary-blue" data-index="0"></button>
                                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300" data-index="1"></button>
                                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300" data-index="2"></button>
                                </div>
                                
                                <button id="nextTestimonial" class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Membership Tiers -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        <div class="bg-white rounded-2xl p-8 border-2 border-gray-200">
                            <div class="text-center mb-6">
                                <h3 class="text-2xl font-bold text-black mb-2">Club Essential</h3>
                                <div class="text-4xl font-bold text-primary-blue mb-4">$99<span class="text-lg text-gray-600">/mes</span></div>
                                <p class="text-gray-600">Perfecto para startups y pequeñas empresas</p>
                            </div>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-center text-gray-700">
                                    <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Acceso a herramientas básicas de IA
                                </li>
                                <li class="flex items-center text-gray-700">
                                    <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Soporte por email
                                </li>
                                <li class="flex items-center text-gray-700">
                                    <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Webinars mensuales
                                </li>
                            </ul>
                            <button class="w-full bg-gray-100 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                                Comenzar Gratis
                            </button>
                        </div>

                        <div class="bg-gradient-to-br from-primary-blue to-blue-500 rounded-2xl p-8 text-white">
                            <div class="text-center mb-6">
                                <div class="inline-flex items-center px-4 py-1 bg-white/20 rounded-full mb-4">
                                    <span class="text-sm font-medium">MÁS POPULAR</span>
                                </div>
                                <h3 class="text-2xl font-bold mb-2">Club Premium</h3>
                                <div class="text-4xl font-bold mb-4">$299<span class="text-lg text-blue-100">/mes</span></div>
                                <p class="text-blue-100">Ideal para empresas en crecimiento</p>
                            </div>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Todas las funciones de Essential
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Soporte prioritario 24/7
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Consultoría personalizada
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Early access a nuevas features
                                </li>
                            </ul>
                            <button 
                                id="premiumCtaBtn"
                                class="w-full bg-white text-primary-blue py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                            >
                                Unirse al Club
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `}setupEventListeners(){const e=this.querySelector("#prevTestimonial"),t=this.querySelector("#nextTestimonial"),s=this.querySelectorAll(".testimonial-dot"),i=this.querySelector("#premiumCtaBtn");e&&e.addEventListener("click",()=>this.previousTestimonial()),t&&t.addEventListener("click",()=>this.nextTestimonial()),s.forEach(r=>{r.addEventListener("click",a=>{const o=parseInt(a.target.dataset.index);this.goToTestimonial(o)})}),i&&i.addEventListener("click",()=>{this.showAuthModal("register")})}startTestimonialRotation(){setInterval(()=>{this.nextTestimonial()},5e3)}nextTestimonial(){this.currentTestimonial=(this.currentTestimonial+1)%3,this.updateTestimonialDisplay()}previousTestimonial(){this.currentTestimonial=(this.currentTestimonial-1+3)%3,this.updateTestimonialDisplay()}goToTestimonial(e){e>=0&&e<3&&(this.currentTestimonial=e,this.updateTestimonialDisplay())}updateTestimonialDisplay(){const e=this.querySelector("#testimonialContent"),t=this.querySelectorAll(".testimonial-dot");if(e){const i=[{text:"Boom Digital revolucionó nuestro enfoque digital. La implementación de IA nos permitió escalar operaciones y mejorar significativamente nuestro ROI.",name:"Carlos Rodríguez",company:"CEO, TechStart Inc"},{text:"La automatización con IA nos ahorró 20 horas semanales en tareas repetitivas. El equipo de Boom Digital es excepcional.",name:"María González",company:"Ecommerce Pro"},{text:"Desde que implementamos las soluciones de Boom Digital, nuestro engagement ha aumentado un 300%. Recomendado 100%.",name:"Ana Martínez",company:"Growth Labs"}][this.currentTestimonial];e.innerHTML=`
                <div class="text-center">
                    <div class="text-6xl mb-4">"</div>
                    <p class="text-xl text-gray-700 mb-6 italic">
                        ${i.text}
                    </p>
                    <div class="flex items-center justify-center">
                        <div class="text-left">
                            <div class="font-bold text-black">${i.name}</div>
                            <div class="text-gray-600">${i.company}</div>
                        </div>
                    </div>
                </div>
            `}t.forEach((s,i)=>{i===this.currentTestimonial?(s.classList.remove("bg-gray-300"),s.classList.add("bg-primary-blue")):(s.classList.remove("bg-primary-blue"),s.classList.add("bg-gray-300"))})}showAuthModal(e){const t=document.querySelector("auth-modal");t&&t.open(e)}}customElements.define("club-section",C);class S extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
            <footer class="bg-black text-white py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <!-- Company Info -->
                        <div class="col-span-1 md:col-span-2">
                            <div class="flex items-center mb-4">
                                <span class="text-2xl font-bold text-primary-blue">BOOM</span>
                                <span class="text-2xl font-bold text-white ml-1">DIGITAL</span>
                            </div>
                            <p class="text-gray-400 mb-6 max-w-md">
                                Transformamos tu presencia digital con soluciones de IA avanzadas. 
                                Automatización, crecimiento y resultados medibles para empresas modernas.
                            </p>
                            <div class="flex space-x-4">
                                <!-- Social Media Icons -->
                                <a href="#" class="text-gray-400 hover:text-primary-blue transition-colors duration-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-primary-blue transition-colors duration-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-primary-blue transition-colors duration-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Servicios</h3>
                            <ul class="space-y-2">
                                <li><a href="#services" class="text-gray-400 hover:text-primary-blue transition-colors duration-300">Asistente IA</a></li>
                                <li><a href="#services" class="text-gray-400 hover:text-primary-blue transition-colors duration-300">Bots Omnicanal</a></li>
                                <li><a href="#services" class="text-gray-400 hover:text-primary-blue transition-colors duration-300">Campañas Garantizadas</a></li>
                                <li><a href="#services" class="text-gray-400 hover:text-primary-blue transition-colors duration-300">Growth Simulator</a></li>
                            </ul>
                        </div>

                        <!-- Contact Info -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Contacto</h3>
                            <ul class="space-y-2 text-gray-400">
                                <li class="flex items-center">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    info@boomdigital.com
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    +1 (555) 123-4567
                                </li>
                                <li class="flex items-start">
                                    <svg class="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <span>123 Innovation Street<br>Tech District, CA 94107</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-400 text-sm">
                            © 2024 Boom Digital Agency. Todos los derechos reservados.
                        </p>
                        <div class="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" class="text-gray-400 hover:text-primary-blue text-sm transition-colors duration-300">Privacidad</a>
                            <a href="#" class="text-gray-400 hover:text-primary-blue text-sm transition-colors duration-300">Términos</a>
                            <a href="#" class="text-gray-400 hover:text-primary-blue text-sm transition-colors duration-300">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        `}setupEventListeners(){this.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const i=t.getAttribute("href").substring(1),r=document.getElementById(i);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})})}}customElements.define("footer-component",S);class E extends HTMLElement{constructor(){super(),this.isOpen=!1,this.type="login"}connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
            <div class="fixed inset-0 z-50 overflow-y-auto ${this.isOpen?"":"hidden"}">
                <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <!-- Background overlay -->
                    <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" id="modalOverlay"></div>

                    <!-- Modal panel -->
                    <div class="relative inline-block w-full max-w-md px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6">
                        <!-- Close button -->
                        <button id="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <!-- Modal content -->
                        <div class="sm:flex sm:items-start">
                            <div class="w-full mt-3 text-center sm:mt-0 sm:text-left">
                                <h3 class="text-2xl font-bold leading-6 text-gray-900 mb-6">
                                    ${this.type==="login"?"Iniciar Sesión":"Crear Cuenta"}
                                </h3>

                                <form id="authForm" class="space-y-4">
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700 text-left mb-1">
                                            Correo Electrónico
                                        </label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            required
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                            placeholder="tu@email.com"
                                        >
                                    </div>

                                    <div>
                                        <label for="password" class="block text-sm font-medium text-gray-700 text-left mb-1">
                                            Contraseña
                                        </label>
                                        <input 
                                            type="password" 
                                            id="password" 
                                            required
                                            minlength="6"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                            placeholder="••••••"
                                        >
                                    </div>

                                    ${this.type==="register"?`
                                        <div>
                                            <label for="name" class="block text-sm font-medium text-gray-700 text-left mb-1">
                                                Nombre Completo
                                            </label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                                placeholder="Tu nombre completo"
                                            >
                                        </div>
                                    `:""}

                                    <div id="errorMessage" class="hidden p-3 text-sm text-red-700 bg-red-100 rounded-md"></div>

                                    <button 
                                        type="submit"
                                        id="submitBtn"
                                        class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-blue hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue transition-colors"
                                    >
                                        ${this.type==="login"?"Iniciar Sesión":"Crear Cuenta"}
                                    </button>

                                    <div class="text-center">
                                        <button 
                                            type="button" 
                                            id="switchAuthType"
                                            class="text-sm text-primary-blue hover:text-blue-400"
                                        >
                                            ${this.type==="login"?"¿No tienes cuenta? Regístrate":"¿Ya tienes cuenta? Inicia Sesión"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}setupEventListeners(){const e=this.querySelector("#closeModal"),t=this.querySelector("#modalOverlay"),s=this.querySelector("#authForm"),i=this.querySelector("#switchAuthType"),r=()=>this.close();e&&e.addEventListener("click",r),t&&t.addEventListener("click",r),s&&s.addEventListener("submit",a=>this.handleSubmit(a)),i&&i.addEventListener("click",()=>{this.type=this.type==="login"?"register":"login",this.render(),this.setupEventListeners()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&this.isOpen&&this.close()})}async handleSubmit(e){e.preventDefault();const t=this.querySelector("#email").value,s=this.querySelector("#password").value;this.type==="register"&&this.querySelector("#name").value;const i=this.querySelector("#errorMessage"),r=this.querySelector("#submitBtn");i.classList.add("hidden"),i.textContent="";const a=r.textContent;r.textContent="Procesando...",r.disabled=!0;try{const{signInCEO:o,CEO_EMAIL:n}=await m(async()=>{const{signInCEO:l,CEO_EMAIL:c}=await import("./firebase-3iqP4OEf.js");return{signInCEO:l,CEO_EMAIL:c}},[],import.meta.url);this.type==="register"?this.showNotification("Cuenta creada exitosamente - Redirigiendo al Panel CEO","success"):t===n?(await o(t,s),this.showNotification("Bienvenido CEO - Redirigiendo al Panel","success")):this.showNotification("Sesión iniciada - Redirigiendo al Panel CEO","success"),this.close(),setTimeout(()=>{this.showCEOPanel()},1e3)}catch(o){console.error("Auth error:",o);let n="Error en la autenticación";o.message.includes("Acceso restringido")?n=o.message:o.message.includes("invalid")?n="Credenciales inválidas":n=o.message||"Error desconocido",i.textContent=n,i.classList.remove("hidden")}finally{r.textContent=a,r.disabled=!1}}open(e="login"){this.type=e,this.isOpen=!0,this.render(),this.setupEventListeners(),document.body.style.overflow="hidden"}close(){this.isOpen=!1,this.innerHTML="",document.body.style.overflow=""}showNotification(e,t="info"){const s=document.createElement("div"),i={success:"bg-green-500",error:"bg-red-500",info:"bg-primary-blue"};s.className=`fixed top-4 right-4 ${i[t]} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-0`,s.textContent=e,document.body.appendChild(s),setTimeout(()=>{s.style.transform="translateX(100%)",setTimeout(()=>s.remove(),300)},3e3)}showCEOPanel(){const e=document.querySelector("ceo-panel-modal");e?e.open():this.showNotification('Panel CEO disponible - Use el botón "Panel CEO" en el header',"success")}}customElements.define("auth-modal",E);class M extends HTMLElement{constructor(){super(),this.isOpen=!1,this.websiteContent=null}connectedCallback(){this.render(),this.setupEventListeners(),this.loadWebsiteContent()}async loadWebsiteContent(){try{const{getWebsiteContent:e}=await m(async()=>{const{getWebsiteContent:t}=await import("./firebase-3iqP4OEf.js");return{getWebsiteContent:t}},[],import.meta.url);this.websiteContent=await e(),this.populateForm()}catch(e){console.error("Error loading website content:",e),this.showStatusMessage("Error al cargar el contenido","error"),this.render()}}populateForm(){var e,t,s,i,r,a,o,n;this.websiteContent&&(this.websiteContent.hero&&(this.querySelector("#heroTitle").value=this.websiteContent.hero.title||"",this.querySelector("#heroSubtitle").value=this.websiteContent.hero.subtitle||"",this.querySelector("#heroCta").value=this.websiteContent.hero.ctaText||""),this.websiteContent.services&&(this.querySelector("#service1Title").value=((e=this.websiteContent.services.service1)==null?void 0:e.title)||"",this.querySelector("#service1Desc").value=((t=this.websiteContent.services.service1)==null?void 0:t.description)||"",this.querySelector("#service2Title").value=((s=this.websiteContent.services.service2)==null?void 0:s.title)||"",this.querySelector("#service2Desc").value=((i=this.websiteContent.services.service2)==null?void 0:i.description)||"",this.querySelector("#service3Title").value=((r=this.websiteContent.services.service3)==null?void 0:r.title)||"",this.querySelector("#service3Desc").value=((a=this.websiteContent.services.service3)==null?void 0:a.description)||"",this.querySelector("#service4Title").value=((o=this.websiteContent.services.service4)==null?void 0:o.title)||"",this.querySelector("#service4Desc").value=((n=this.websiteContent.services.service4)==null?void 0:n.description)||""),this.websiteContent.colors&&(this.querySelector("#primaryColor").value=this.websiteContent.colors.primary||"#37C6FF"))}render(){this.innerHTML=`
            <div class="fixed inset-0 z-50 overflow-y-auto ${this.isOpen?"":"hidden"}">
                <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <!-- Background overlay -->
                    <div class="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" id="ceoPanelOverlay"></div>

                    <!-- Modal panel -->
                    <div class="relative inline-block w-full max-w-6xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6 sm:w-full">
                        <!-- Close button -->
                        <button id="closeCeoPanel" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <!-- Panel header -->
                        <div class="flex items-center justify-between mb-6 pb-4 border-b">
                            <div class="flex items-center space-x-3">
                                <img src="/assets/images/verificado.png" alt="Verificado" class="w-8 h-8">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900">Panel CEO</h3>
                                    <p class="text-sm text-gray-600">boomdigitaleeuu@gmail.com</p>
                                </div>
                            </div>
                            <button id="downloadStats" class="bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-400 transition-colors">
                                Descargar Estadísticas
                            </button>
                        </div>

                        <!-- Panel content -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-96 overflow-y-auto">
                            <!-- Hero Section Editor -->
                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-gray-900">Sección Hero</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Título Principal</label>
                                        <input type="text" id="heroTitle" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Subtítulo</label>
                                        <textarea id="heroSubtitle" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Texto del Botón CTA</label>
                                        <input type="text" id="heroCta" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                </div>
                            </div>

                            <!-- Services Editor -->
                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-gray-900">Servicios</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 1 - Título</label>
                                        <input type="text" id="service1Title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 1 - Descripción</label>
                                        <textarea id="service1Desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 2 - Título</label>
                                        <input type="text" id="service2Title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 2 - Descripción</label>
                                        <textarea id="service2Desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                </div>
                            </div>

                            <!-- More Services -->
                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-gray-900">Servicios (Continuación)</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 3 - Título</label>
                                        <input type="text" id="service3Title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 3 - Descripción</label>
                                        <textarea id="service3Desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 4 - Título</label>
                                        <input type="text" id="service4Title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 4 - Descripción</label>
                                        <textarea id="service4Desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                </div>
                            </div>

                            <!-- Colors & Analytics -->
                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-gray-900">Personalización</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Color Principal</label>
                                        <input type="color" id="primaryColor" class="w-full h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                </div>

                                <div class="pt-4 border-t">
                                    <h4 class="text-lg font-semibold text-gray-900 mb-3">Estadísticas Rápidas</h4>
                                    <div class="grid grid-cols-2 gap-4 text-sm">
                                        <div class="bg-gray-50 p-3 rounded-lg">
                                            <div class="text-gray-600">Visitas Hoy</div>
                                            <div class="text-xl font-bold text-primary-blue">--</div>
                                        </div>
                                        <div class="bg-gray-50 p-3 rounded-lg">
                                            <div class="text-gray-600">Total Visitas</div>
                                            <div class="text-xl font-bold text-primary-blue">--</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Action buttons -->
                        <div class="flex justify-end space-x-3 mt-6 pt-4 border-t">
                            <button id="previewChanges" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                Vista Previa
                            </button>
                            <button id="saveChanges" class="px-6 py-2 text-sm font-medium text-white bg-primary-blue rounded-lg hover:bg-blue-400 transition-colors">
                                Guardar Cambios
                            </button>
                        </div>

                        <!-- Status message -->
                        <div id="ceoStatusMessage" class="hidden mt-4 p-3 text-sm rounded-lg"></div>
                    </div>
                </div>
            </div>
        `}setupEventListeners(){const e=this.querySelector("#closeCeoPanel"),t=this.querySelector("#ceoPanelOverlay"),s=this.querySelector("#saveChanges"),i=this.querySelector("#previewChanges"),r=this.querySelector("#downloadStats"),a=()=>this.close();e&&e.addEventListener("click",a),t&&t.addEventListener("click",a),s&&s.addEventListener("click",()=>this.saveChanges()),i&&i.addEventListener("click",()=>this.previewChanges()),r&&r.addEventListener("click",()=>this.downloadStatistics()),document.addEventListener("keydown",o=>{o.key==="Escape"&&this.isOpen&&this.close()})}async saveChanges(){const e={hero:{title:this.querySelector("#heroTitle").value,subtitle:this.querySelector("#heroSubtitle").value,ctaText:this.querySelector("#heroCta").value},services:{service1:{title:this.querySelector("#service1Title").value,description:this.querySelector("#service1Desc").value},service2:{title:this.querySelector("#service2Title").value,description:this.querySelector("#service2Desc").value},service3:{title:this.querySelector("#service3Title").value,description:this.querySelector("#service3Desc").value},service4:{title:this.querySelector("#service4Title").value,description:this.querySelector("#service4Desc").value}},colors:{primary:this.querySelector("#primaryColor").value}};try{const{updateWebsiteContent:t}=await m(async()=>{const{updateWebsiteContent:s}=await import("./firebase-3iqP4OEf.js");return{updateWebsiteContent:s}},[],import.meta.url);await t(e),this.showStatusMessage("Cambios guardados exitosamente","success"),setTimeout(()=>{window.location.reload()},1500)}catch(t){console.error("Error saving changes:",t),this.showStatusMessage("Error al guardar los cambios","error"),this.render()}}previewChanges(){const e=this.querySelector("#primaryColor").value;document.documentElement.style.setProperty("--primary-blue",e),this.showStatusMessage("Vista previa aplicada temporalmente","info")}downloadStatistics(){const e=`Fecha,Visitas,Usuarios
2024-01-01,150,45
2024-01-02,180,52
2024-01-03,200,60`,t=new Blob([e],{type:"text/csv"}),s=window.URL.createObjectURL(t),i=document.createElement("a");i.href=s,i.download="estadisticas-boom-digital.csv",i.click(),window.URL.revokeObjectURL(s),this.showStatusMessage("Estadísticas descargadas","success")}showStatusMessage(e,t="info"){const s=this.querySelector("#ceoStatusMessage"),i={success:"bg-green-100 text-green-700",error:"bg-red-100 text-red-700",info:"bg-blue-100 text-blue-700"};s.textContent=e,s.className=`mt-4 p-3 text-sm rounded-lg ${i[t]}`,s.classList.remove("hidden"),setTimeout(()=>{s.classList.add("hidden")},3e3)}open(){this.isOpen=!0,this.render(),this.setupEventListeners(),document.body.style.overflow="hidden"}close(){this.isOpen=!1,this.innerHTML="",document.body.style.overflow=""}}customElements.define("ceo-panel-modal",M);class L extends HTMLElement{constructor(){super(),this.isOpen=!1,this.conversation=[],this.isTyping=!1}connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
      <div class="fixed bottom-6 right-6 z-50">
        <!-- Chat Button -->
        <button id="chatToggle" class="bg-primary-blue text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </button>

        <!-- Chat Window -->
        <div id="chatWindow" class="hidden fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          <!-- Header -->
          <div class="bg-primary-blue text-white p-4 rounded-t-lg flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span class="font-semibold">Boom Digital Assistant</span>
            </div>
            <button id="closeChat" class="text-white hover:text-gray-200 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Messages Container -->
          <div id="messagesContainer" class="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div class="message bot-message bg-white rounded-lg p-3 shadow-sm mb-3">
              <p class="text-sm text-gray-700">¡Hola! Soy el asistente de Boom Digital Agency. ¿En qué puedo ayudarte hoy?</p>
            </div>
          </div>

          <!-- Input Area -->
          <div class="p-4 border-t border-gray-200">
            <div class="flex space-x-2">
              <input 
                id="messageInput" 
                type="text" 
                placeholder="Escribe tu pregunta..." 
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                maxlength="500"
              >
              <button id="sendMessage" class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-2 text-center">Powered by DeepSeek AI</p>
          </div>

          <!-- Typing Indicator -->
          <div id="typingIndicator" class="hidden p-3">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>
      </div>
    `}setupEventListeners(){const e=this.querySelector("#chatToggle"),t=this.querySelector("#chatWindow"),s=this.querySelector("#closeChat"),i=this.querySelector("#sendMessage"),r=this.querySelector("#messageInput");e.addEventListener("click",()=>{this.isOpen=!this.isOpen,t.classList.toggle("hidden",!this.isOpen),this.isOpen&&r.focus()}),s.addEventListener("click",()=>{this.isOpen=!1,t.classList.add("hidden")});const a=()=>{const o=r.value.trim();o&&!this.isTyping&&(this.addUserMessage(o),r.value="",this.getAIResponse(o))};i.addEventListener("click",a),r.addEventListener("keypress",o=>{o.key==="Enter"&&a()}),r.addEventListener("input",()=>{i.disabled=!r.value.trim()||this.isTyping})}addUserMessage(e){const t=this.querySelector("#messagesContainer"),s=document.createElement("div");s.className="message user-message bg-primary-blue text-white rounded-lg p-3 shadow-sm mb-3 ml-8",s.innerHTML=`<p class="text-sm">${this.escapeHtml(e)}</p>`,t.appendChild(s),this.scrollToBottom()}addBotMessage(e){const t=this.querySelector("#messagesContainer"),s=document.createElement("div");s.className="message bot-message bg-white rounded-lg p-3 shadow-sm mb-3",s.innerHTML=`<p class="text-sm text-gray-700">${this.formatMessage(e)}</p>`,t.appendChild(s),this.scrollToBottom()}async getAIResponse(e){this.showTypingIndicator(),this.isTyping=!0;try{const t=await this.callDeepSeekAPI(e);this.hideTypingIndicator(),this.addBotMessage(t)}catch(t){console.error("Error calling DeepSeek API:",t),this.hideTypingIndicator(),this.addBotMessage("Lo siento, estoy teniendo problemas para conectarme. Por favor, intenta nuevamente en un momento.")}this.isTyping=!1,this.updateSendButtonState()}async callDeepSeekAPI(e){const t="sk-59b0807d89344fb781f3d9b1baf35753",s="https://api.deepseek.com/v1/chat/completions",i=`Eres el asistente oficial de Boom Digital Agency. Responde en español de manera profesional y amigable. 
    
Contexto de la agencia:
- Especialistas en soluciones de IA y automatización
- Servicios: Asistente IA, Bots Omnicanal, Campañas Garantizadas, Growth Simulator
- Enfoque en transformación digital y crecimiento empresarial
- Estilo profesional y premium

Pregunta del usuario: ${e}

Responde como representante oficial de Boom Digital Agency, manteniendo un tono profesional pero cercano.`,r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"Eres un asistente profesional de Boom Digital Agency, especializado en soluciones de IA y transformación digital. Responde siempre en español de manera clara y útil."},{role:"user",content:i}],max_tokens:500,temperature:.7})});if(!r.ok)throw new Error(`API error: ${r.status}`);return(await r.json()).choices[0].message.content}showTypingIndicator(){this.querySelector("#typingIndicator").classList.remove("hidden"),this.scrollToBottom()}hideTypingIndicator(){this.querySelector("#typingIndicator").classList.add("hidden")}scrollToBottom(){const e=this.querySelector("#messagesContainer");e.scrollTop=e.scrollHeight}updateSendButtonState(){const e=this.querySelector("#sendMessage"),t=this.querySelector("#messageInput");e.disabled=!t.value.trim()||this.isTyping}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}formatMessage(e){return e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/(https?:\/\/[^\s]+)/g,'<a href="$1" target="_blank" class="text-primary-blue underline">$1</a>')}}customElements.define("chat-bot",L);class T{constructor(){this.init()}init(){console.log("Boom Digital Agency - Application Started"),this.setupScrollAnimations(),this.setupLazyLoading(),this.trackPageView()}setupScrollAnimations(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&i.target.classList.add("animate-fade-in","animate-slide-up")})},e);document.querySelectorAll("section, .animate-on-scroll").forEach(s=>{t.observe(s)})}setupLazyLoading(){const e=new IntersectionObserver((t,s)=>{t.forEach(i=>{if(i.isIntersecting){const r=i.target;r.src=r.dataset.src,r.classList.remove("lazy"),s.unobserve(r)}})});document.querySelectorAll("img[data-src]").forEach(t=>{e.observe(t)})}async trackPageView(){try{const{trackPageView:e}=await m(async()=>{const{trackPageView:t}=await import("./firebase-3iqP4OEf.js");return{trackPageView:t}},[],import.meta.url);await e("home")}catch{console.log("Analytics tracking not available in development")}}}document.addEventListener("DOMContentLoaded",()=>{new T});
