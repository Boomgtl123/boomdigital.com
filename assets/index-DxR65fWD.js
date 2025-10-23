(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const y="modulepreload",w=function(n,t){return new URL(n,t).href},g={},k=function(t,s,e){let a=Promise.resolve();if(s&&s.length>0){const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),o=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.allSettled(s.map(c=>{if(c=w(c,e),c in g)return;g[c]=!0;const p=c.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(!!e)for(let h=i.length-1;h>=0;h--){const v=i[h];if(v.href===c&&(!p||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":y,p||(u.as="script"),u.crossOrigin="",u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),p)return new Promise((h,v)=>{u.addEventListener("load",h),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return a.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const C="modulepreload",E=function(n,t){return new URL(n,t).href},x={},S=function(n,t,s){let e=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.allSettled(t.map(o=>{if(o=E(o,s),o in x)return;x[o]=!0;const c=o.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(s)for(let m=r.length-1;m>=0;m--){const u=r[m];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":C,c||(d.as="script"),d.crossOrigin="",d.href=o,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((m,u)=>{d.addEventListener("load",m),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}function a(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return e.then(r=>{for(const i of r||[])i.status==="rejected"&&a(i.reason);return n().catch(a)})};(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const M="modulepreload",L=function(n,t){return new URL(n,t).href},f={},I=function(n,t,s){let e=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.allSettled(t.map(o=>{if(o=L(o,s),o in f)return;f[o]=!0;const c=o.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(s)for(let m=r.length-1;m>=0;m--){const u=r[m];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":M,c||(d.as="script"),d.crossOrigin="",d.href=o,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((m,u)=>{d.addEventListener("load",m),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}function a(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return e.then(r=>{for(const i of r||[])i.status==="rejected"&&a(i.reason);return n().catch(a)})};(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const T="modulepreload",A=function(n,t){return new URL(n,t).href},b={},B=function(n,t,s){let e=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.allSettled(t.map(o=>{if(o=A(o,s),o in b)return;b[o]=!0;const c=o.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(s)for(let m=r.length-1;m>=0;m--){const u=r[m];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":T,c||(d.as="script"),d.crossOrigin="",d.href=o,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((m,u)=>{d.addEventListener("load",m),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}function a(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return e.then(r=>{for(const i of r||[])i.status==="rejected"&&a(i.reason);return n().catch(a)})};class P extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
            <header class="bg-black shadow-sm sticky top-0 z-50 transition-all duration-300">
                <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo -->
                        <div class="flex-shrink-0 relative">
                            <a href="#" class="text-2xl font-bold text-white hover:text-primary-blue transition-colors block">
                                <div class="relative">
                                    <img src="assets/images/logo.png" alt="BOOM DIGITAL" class="h-10 w-auto relative z-10">
                                    <!-- Fire effect at the bottom -->
                                    <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-3 z-0">
                                        <div class="fire-effect w-full h-full"></div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <!-- Desktop Navigation -->
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-8">
                                <a href="#services" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Servicios</a>
                                <a href="#dashboard" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Dashboard</a>
                                <a href="#club" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Club IA</a>
                                <a href="#instagram" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Instagram</a>
                                <a href="#contact" class="text-white hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
                            </div>
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
                            <a href="#instagram" class="text-white hover:text-primary-blue block px-3 py-2 text-base font-medium">Instagram</a>
                            <a href="#contact" class="text-white hover:text-primary-blue block px-3 py-2 text-base font-medium">Contacto</a>
                        </div>
                    </div>
                </nav>
            </header>
        `}setupEventListeners(){const t=this.querySelector("#mobileMenuBtn"),s=this.querySelector("#mobileMenu");t&&s&&t.addEventListener("click",()=>{s.classList.toggle("hidden")}),document.addEventListener("click",e=>{s&&!this.contains(e.target)&&!s.classList.contains("hidden")&&s.classList.add("hidden")})}}customElements.define("header-component",P);class z extends HTMLElement{constructor(){super(),this.websiteContent=null}connectedCallback(){this.loadContent(),this.setupIntersectionObserver()}async loadContent(){this.renderWithDefaultContent()}renderWithDefaultContent(){this.innerHTML=`
            <section class="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
                <!-- Video Background -->
                <video
                    class="absolute inset-0 w-full h-full object-cover"
                    autoplay
                    muted
                    loop
                    playsinline
                    poster="assets/images/verificado.png"
                >
                    <source src="assets/videos/banner.MOV" type="video/mp4">
                    <source src="assets/videos/banner.MOV" type="video/quicktime">
                    Tu navegador no soporta el elemento de video.
                </video>
                <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div class="animate-fade-in">
                        <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-8">
                            <span class="text-sm font-medium text-primary-blue">✨ Potenciado por IA</span>
                        </div>
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Transformamos tu Presencia Digital con IA
                        </h1>
                        <p class="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
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
                                <div class="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">+500</div>
                                <div class="text-sm text-white drop-shadow-lg">Clientes Satisfechos</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">+95%</div>
                                <div class="text-sm text-white drop-shadow-lg">Tasa de Éxito</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">24/7</div>
                                <div class="text-sm text-white drop-shadow-lg">Soporte Activo</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">+3M</div>
                                <div class="text-sm text-white drop-shadow-lg">Interacciones IA</div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <div class="w-1 h-3 bg-white rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        `,this.setupEventListeners()}setupEventListeners(){const t=this.querySelector("#heroCtaBtn"),s=this.querySelector("#learnMoreBtn");t&&t.addEventListener("click",()=>{const e=encodeURIComponent("Hola! Quiero comenzar con sus servicios de IA y automatización. ¿Podemos hablar sobre cómo transformar mi negocio?");window.open(`https://wa.me/542923560623?text=${e}`,"_blank")}),s&&s.addEventListener("click",()=>{document.querySelector("#services").scrollIntoView({behavior:"smooth"})})}setupIntersectionObserver(){const t=new IntersectionObserver(s=>{s.forEach(e=>{e.isIntersecting&&e.target.classList.add("animate-slide-up")})},{threshold:.1});setTimeout(()=>{this.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach(s=>t.observe(s))},100)}}customElements.define("hero-section",z);class j extends HTMLElement{constructor(){super(),this.websiteContent=null}connectedCallback(){this.loadContent(),this.setupIntersectionObserver()}async loadContent(){this.renderWithDefaultContent()}renderWithDefaultContent(){this.innerHTML=`
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
                        <!-- Service 1: E-commerce -->
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 animate-fade-in" style="animation-delay: 100ms">
                            <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-2">E-commerce</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Tiendas online completas con integración de pagos, inventario y análisis avanzados.
                            </p>
                        </div>

                        <!-- Service 2: IT Solutions -->
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 animate-fade-in" style="animation-delay: 200ms">
                            <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-2">IT Solutions</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Infraestructura tecnológica robusta, soporte técnico y soluciones personalizadas.
                            </p>
                        </div>

                        <!-- Service 3: IA Solutions -->
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 animate-fade-in" style="animation-delay: 300ms">
                            <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-2">IA Solutions</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Automatización inteligente, chatbots avanzados y análisis predictivo con IA.
                            </p>
                        </div>

                        <!-- Service 4: Desarrollo Web -->
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 animate-fade-in" style="animation-delay: 400ms">
                            <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-2">Desarrollo Web</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Sitios web modernos, aplicaciones web y plataformas digitales a medida.
                            </p>
                        </div>

                        <!-- Service 5: Marketing Digital -->
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 animate-fade-in" style="animation-delay: 500ms">
                            <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-2">Marketing Digital</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Estrategias de marketing online, redes sociales y campañas publicitarias efectivas.
                            </p>
                        </div>

                        <!-- Service 6: SEO Optimization -->
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 animate-fade-in" style="animation-delay: 600ms">
                            <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-2">SEO Optimization</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Optimización para motores de búsqueda y mejora del posicionamiento web.
                            </p>
                        </div>

                        <!-- Service 7: Coaching Empresarial -->
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 animate-fade-in" style="animation-delay: 700ms">
                            <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-2">Coaching Empresarial</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Asesoramiento estratégico y coaching para el crecimiento empresarial.
                            </p>
                        </div>

                        <!-- Service 8: Consultoría Técnica -->
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 animate-fade-in" style="animation-delay: 800ms">
                            <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-black mb-2">Consultoría Técnica</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Consultoría especializada en tecnología y transformación digital.
                            </p>
                        </div>
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
        `,this.setupEventListeners()}setupEventListeners(){const t=this.querySelector("#servicesCtaBtn"),s=this.querySelectorAll(".group");t&&t.addEventListener("click",()=>{const e=encodeURIComponent("Hola! Me gustaría solicitar una demo gratuita de sus servicios de IA y automatización. ¿Podemos agendar una reunión?");window.open(`https://wa.me/542923560623?text=${e}`,"_blank")}),s.forEach((e,a)=>{e.addEventListener("click",()=>{this.showServiceDetails(a)})})}setupIntersectionObserver(){const t=new IntersectionObserver(s=>{s.forEach(e=>{e.isIntersecting&&(e.target.style.animationPlayState="running")})},{threshold:.1});setTimeout(()=>{this.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach(s=>t.observe(s))},100)}showServiceDetails(t){const s=[{name:"E-commerce",message:"Hola! Me interesa su servicio de E-commerce. Me gustaría conocer más sobre las tiendas online con integración de pagos."},{name:"IT Solutions",message:"Hola! Necesito soluciones IT para mi empresa. ¿Podemos hablar sobre infraestructura tecnológica?"},{name:"IA Solutions",message:"Hola! Me gustaría conocer sus soluciones de IA y automatización inteligente."},{name:"Desarrollo Web",message:"Hola! Estoy interesado en desarrollo web moderno. ¿Podemos discutir mi proyecto?"},{name:"Marketing Digital",message:"Hola! Quiero mejorar mi presencia digital. ¿Cómo pueden ayudarme con marketing online?"},{name:"SEO Optimization",message:"Hola! Necesito mejorar mi posicionamiento web. ¿Ofrecen servicios de SEO?"},{name:"Coaching Empresarial",message:"Hola! Busco coaching empresarial para hacer crecer mi negocio."},{name:"Consultoría Técnica",message:"Hola! Necesito consultoría especializada en tecnología y transformación digital."}][t],e=encodeURIComponent(s.message);window.open(`https://wa.me/542923560623?text=${e}`,"_blank")}}customElements.define("services-section",j);class q extends HTMLElement{constructor(){super(),this.metrics={activeUsers:0,campaigns:0,conversions:0,revenue:0},this.interval=null}connectedCallback(){this.render(),this.startLiveUpdates(),this.setupIntersectionObserver()}disconnectedCallback(){this.interval&&clearInterval(this.interval)}render(){this.innerHTML=`
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
        `,this.setupEventListeners(),this.animateChart()}setupEventListeners(){const t=this.querySelector("#dashboardCtaBtn");t&&t.addEventListener("click",()=>{document.querySelector("#contact").scrollIntoView({behavior:"smooth"})})}startLiveUpdates(){this.interval=setInterval(()=>{this.updateMetrics()},3e3),this.updateMetrics()}updateMetrics(){const t=(i,l)=>Math.floor(Math.random()*(l-i+1))+i,s=this.querySelector("#activeUsers"),e=this.querySelector("#activeCampaigns"),a=this.querySelector("#conversions"),r=this.querySelector("#revenue");if(s){const i=(parseInt(s.textContent.replace(",",""))||2847)+t(-2,5);s.textContent=i.toLocaleString()}if(e){const i=(parseInt(e.textContent)||47)+t(-1,1);e.textContent=Math.max(45,i)}if(a){const i=(parseInt(a.textContent.replace(",",""))||1284)+t(1,8);a.textContent=i.toLocaleString()}if(r){const i=parseFloat(r.textContent.replace("$","").replace("K",""))||24.7,l=t(1,3)/10,o=i+l;r.textContent=`$${o.toFixed(1)}K`}}animateChart(){setTimeout(()=>{this.querySelectorAll(".bg-primary-blue").forEach((t,s)=>{setTimeout(()=>{t.style.transition="height 1s ease-in-out"},s*100)})},500)}setupIntersectionObserver(){const t=new IntersectionObserver(s=>{s.forEach(e=>{e.isIntersecting&&(e.target.style.animationPlayState="running")})},{threshold:.1});setTimeout(()=>{this.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach(s=>t.observe(s))},100)}}customElements.define("dashboard-section",q);class D extends HTMLElement{constructor(){super(),this.currentTestimonial=0}connectedCallback(){this.render(),this.setupEventListeners(),this.startTestimonialRotation()}render(){this.innerHTML=`
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
                            <button
                                id="essentialCtaBtn"
                                class="w-full bg-gray-100 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
                            >
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
        `}setupEventListeners(){const t=this.querySelector("#prevTestimonial"),s=this.querySelector("#nextTestimonial"),e=this.querySelectorAll(".testimonial-dot"),a=this.querySelector("#premiumCtaBtn"),r=this.querySelector("#essentialCtaBtn");t&&t.addEventListener("click",()=>this.previousTestimonial()),s&&s.addEventListener("click",()=>this.nextTestimonial()),e.forEach(i=>{i.addEventListener("click",l=>{const o=parseInt(l.target.dataset.index);this.goToTestimonial(o)})}),a&&a.addEventListener("click",()=>{const i=encodeURIComponent("Hola! Me interesa unirme al Club Premium de Boom Digital. ¿Podemos hablar sobre los beneficios y cómo comenzar?");window.open(`https://wa.me/542923560623?text=${i}`,"_blank")}),r&&r.addEventListener("click",()=>{const i=encodeURIComponent("Hola! Me interesa comenzar con el Club Essential de Boom Digital. ¿Podemos hablar sobre las opciones disponibles?");window.open(`https://wa.me/542923560623?text=${i}`,"_blank")})}startTestimonialRotation(){setInterval(()=>{this.nextTestimonial()},5e3)}nextTestimonial(){this.currentTestimonial=(this.currentTestimonial+1)%3,this.updateTestimonialDisplay()}previousTestimonial(){this.currentTestimonial=(this.currentTestimonial-1+3)%3,this.updateTestimonialDisplay()}goToTestimonial(t){t>=0&&t<3&&(this.currentTestimonial=t,this.updateTestimonialDisplay())}updateTestimonialDisplay(){const t=this.querySelector("#testimonialContent"),s=this.querySelectorAll(".testimonial-dot");if(t){const e=[{text:"Boom Digital revolucionó nuestro enfoque digital. La implementación de IA nos permitió escalar operaciones y mejorar significativamente nuestro ROI.",name:"Carlos Rodríguez",company:"CEO, TechStart Inc"},{text:"La automatización con IA nos ahorró 20 horas semanales en tareas repetitivas. El equipo de Boom Digital es excepcional.",name:"María González",company:"Ecommerce Pro"},{text:"Desde que implementamos las soluciones de Boom Digital, nuestro engagement ha aumentado un 300%. Recomendado 100%.",name:"Ana Martínez",company:"Growth Labs"}][this.currentTestimonial];t.innerHTML=`
                <div class="text-center">
                    <div class="text-6xl mb-4">"</div>
                    <p class="text-xl text-gray-700 mb-6 italic">
                        ${e.text}
                    </p>
                    <div class="flex items-center justify-center">
                        <div class="text-left">
                            <div class="font-bold text-black">${e.name}</div>
                            <div class="text-gray-600">${e.company}</div>
                        </div>
                    </div>
                </div>
            `}s.forEach((e,a)=>{a===this.currentTestimonial?(e.classList.remove("bg-gray-300"),e.classList.add("bg-primary-blue")):(e.classList.remove("bg-primary-blue"),e.classList.add("bg-gray-300"))})}}customElements.define("club-section",D);class H extends HTMLElement{constructor(){super(),this.productName="",this.generatedDescription=""}connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
            <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Generador de Descripciones para Instagram
                        </h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                            Crea descripciones optimizadas para Instagram con IA. Perfectas para marketing digital y copywriting en redes sociales.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <!-- Input Section -->
                        <div class="mb-8">
                            <label for="productName" class="block text-lg font-semibold text-gray-900 mb-3">
                                Nombre del Producto
                            </label>
                            <input
                                type="text"
                                id="productName"
                                placeholder="Ej: Perfume Armaf Odissey Baha"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 text-lg"
                                maxlength="100"
                            >
                            <p class="text-sm text-gray-500 mt-2">
                                Máximo 100 caracteres. Describe tu producto de manera clara.
                            </p>
                        </div>

                        <!-- Generate Button -->
                        <div class="text-center mb-8">
                            <button id="generateBtn" class="btn-primary text-lg px-8 py-4">
                                Generar Descripción ✨
                            </button>
                        </div>

                        <!-- Loading State -->
                        <div id="loadingState" class="hidden text-center py-8">
                            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
                            <p class="text-gray-600 mt-4">Generando descripción optimizada...</p>
                        </div>

                        <!-- Result Section -->
                        <div id="resultSection" class="hidden">
                            <div class="border-t pt-8">
                                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                                    Descripción Generada
                                </h3>

                                <!-- Copy Button -->
                                <div class="flex justify-end mb-4">
                                    <button id="copyBtn" class="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                        Copiar
                                    </button>
                                </div>

                                <!-- Generated Content -->
                                <div id="generatedContent" class="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-blue">
                                    <pre class="whitespace-pre-wrap text-gray-800 font-medium text-sm leading-relaxed"></pre>
                                </div>

                                <!-- Success Message -->
                                <div id="copySuccess" class="hidden mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    ✅ Descripción copiada al portapapeles
                                </div>
                            </div>
                        </div>

                        <!-- Features -->
                        <div class="border-t pt-8 mt-8">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">
                                ¿Qué incluye tu descripción?
                            </h4>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">Marketing y SEO optimizado</p>
                                        <p class="text-sm text-gray-500">Palabras clave estratégicas para mayor alcance</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">Hashtags virales 2025</p>
                                        <p class="text-sm text-gray-500">Tendencias actuales y futuras incluidas</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">Llamado a la acción</p>
                                        <p class="text-sm text-gray-500">Motiva comentarios y conversiones</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">Formato Instagram listo</p>
                                        <p class="text-sm text-gray-500">Directo para copiar y pegar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `}setupEventListeners(){const t=this.querySelector("#generateBtn"),s=this.querySelector("#copyBtn"),e=this.querySelector("#productName");t.addEventListener("click",()=>this.generateDescription()),s.addEventListener("click",()=>this.copyToClipboard()),e.addEventListener("keypress",a=>{a.key==="Enter"&&this.generateDescription()})}async generateDescription(){const t=this.querySelector("#productName").value.trim();if(!t){this.showNotification("Por favor ingresa el nombre del producto","error");return}this.showLoading(!0);try{const s=await this.generateAIDescription(t);this.generatedDescription=s,this.showResult(s),this.showLoading(!1)}catch(s){console.error("Error generating description:",s),this.showNotification("Error al generar la descripción. Inténtalo de nuevo.","error"),this.showLoading(!1)}}getApiKey(){throw console.error("VITE_DEEPSEEK_API_KEY not found in environment variables"),new Error("API key not configured. Please check your environment variables.")}async generateAIDescription(t){try{const s=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.getApiKey()}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:`Eres un experto en marketing digital y copywriting para redes sociales con acceso a conocimiento actualizado. Tu tarea es investigar el producto, pensar paso a paso sobre su valor y características, y luego generar una descripción de Instagram optimizada con información real y factual.

Primero, PIENSA paso a paso sobre el producto:
- ¿Qué es exactamente este producto?
- ¿Cuál es su categoría principal?
- ¿Qué características técnicas o beneficios tiene?
- ¿Cuál es su precio aproximado y público objetivo?
- ¿Qué lo hace especial o diferente?
- ¿Cómo puedo presentarlo de manera atractiva para Instagram?

Después de pensar, genera la descripción siguiendo estas instrucciones:

1. TÍTULO atractivo y preciso basado en la información real del producto.
2. DESCRIPCIÓN persuasiva que incluya información factual: qué es, qué hace, beneficios reales, características específicas, precio si es relevante.
3. HASHTAGS virales y relevantes del 2025 para la categoría del producto.
4. Máximo 2 emojis si refuerzan el mensaje.
5. La descripción debe ser coherente, natural y basada en hechos reales.

Formato de salida:
---
Pensando sobre el producto: [Tu razonamiento paso a paso aquí]

Título: [Título generado]
Descripción: [Descripción detallada con información real]
Hashtags: [Hashtags relevantes]
---

Ejemplo:
---
Pensando sobre el producto: El iPhone 15 Pro Max es el smartphone premium de Apple con características avanzadas como el chip A17 Pro Bionic, sistema de cámaras profesional con 48MP y zoom óptico 5x, y batería de larga duración. Es ideal para fotógrafos, creadores de contenido y usuarios que buscan lo mejor en tecnología móvil. Su precio está alrededor de $1,199, posicionándolo como un producto premium.

Título: iPhone 15 Pro Max – Tecnología de Vanguardia
Descripción: El iPhone 15 Pro Max llega con el chip A17 Pro Bionic, cámara de 48MP con zoom óptico 5x, y batería de hasta 29 horas. Precio desde $1,199. La evolución perfecta para fotógrafos y creadores que exigen lo mejor. ¿Listo para la próxima generación?
Hashtags: #iPhone15ProMax #Apple2025 #TecnologiaAvanzada #FotografiaProfesional #SmartphoneElite #InnovationApple
---

Piensa primero, luego genera la descripción optimizada para Instagram.`},{role:"user",content:`Investiga y genera una descripción optimizada para Instagram del producto: ${t}. Incluye información real sobre qué es este producto, su contexto y características principales.`}],max_tokens:600,temperature:.8})});if(!s.ok)throw new Error(`API request failed: ${s.status}`);const e=(await s.json()).choices[0].message.content.trim();let a="",r="",i="";const l=e.match(/Título:\s*(.+?)(?:\n|$)/i);l&&(a=l[1].trim());const o=e.match(/Descripción:\s*(.+?)(?:\nHashtags:|$)/is);o&&(r=o[1].trim());const c=e.match(/Hashtags:\s*(.+?)(?:\n|$)/is);return c&&(i=c[1].trim()),(!a||!r)&&(r=e,a=`${t} – Descubre la Diferencia`,i="#Innovacion2025 #ProductoPremium #CalidadSuperior"),`---
Título: ${a}
Descripción: ${r}
Hashtags: ${i}
---`}catch(s){console.error("Error calling DeepSeek API:",s);const e=[{title:`${t} – Innovación que Transforma`,description:`Descubre el poder de ${t}. Una solución revolucionaria que combina tecnología avanzada con diseño intuitivo. Ideal para quienes buscan calidad superior y resultados excepcionales. ¿Listo para experimentar la diferencia?`,hashtags:["#Innovacion2025","#TecnologiaAvanzada","#SolucionesInteligentes","#CalidadSuperior","#TransformacionDigital","#ProductoRevolucionario"]},{title:`${t} – Elegancia que Inspira`,description:`Experimenta la perfección con ${t}. Diseñado para elevar tus estándares y superar expectativas. Cada detalle pensado para ofrecer una experiencia incomparable. ¿Qué esperas para vivir la excelencia?`,hashtags:["#Elegancia2025","#DisenoPremium","#ExperienciaIncomparable","#CalidadInigualable","#EstiloModerno","#PerfeccionAbsoluta"]},{title:`${t} – Potencia y Rendimiento`,description:`Libera todo el potencial con ${t}. Tecnología de vanguardia que garantiza rendimiento óptimo y durabilidad excepcional. Para quienes exigen lo mejor y no se conforman con menos. ¡Hazlo tuyo ahora!`,hashtags:["#Potencia2025","#RendimientoMaximo","#TecnologiaVanguardia","#DurabilidadSuperior","#CalidadGarantizada","#PerformanceElite"]}],a=e[Math.floor(Math.random()*e.length)];return`---
Título: ${a.title}
Descripción: ${a.description}
Hashtags: ${a.hashtags.join(" ")}
---`}}showLoading(t){const s=this.querySelector("#loadingState"),e=this.querySelector("#generateBtn");t?(s.classList.remove("hidden"),e.disabled=!0,e.textContent="Generando..."):(s.classList.add("hidden"),e.disabled=!1,e.textContent="Generar Descripción ✨")}showResult(t){const s=this.querySelector("#resultSection"),e=this.querySelector("#generatedContent pre");e.textContent=t,s.classList.remove("hidden"),s.scrollIntoView({behavior:"smooth",block:"nearest"})}async copyToClipboard(){try{await navigator.clipboard.writeText(this.generatedDescription),this.showCopySuccess()}catch(t){console.error("Error copying to clipboard:",t);const s=document.createElement("textarea");s.value=this.generatedDescription,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),this.showCopySuccess()}}showCopySuccess(){const t=this.querySelector("#copySuccess");t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},3e3)}showNotification(t,s="info"){const e=document.createElement("div"),a={success:"bg-green-500",error:"bg-red-500",info:"bg-blue-500"};e.className=`fixed top-4 right-4 ${a[s]} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-0`,e.textContent=t,document.body.appendChild(e),setTimeout(()=>{e.style.transform="translateX(100%)",setTimeout(()=>e.remove(),300)},3e3)}}customElements.define("instagram-description-component",H);class O extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupAnimations()}render(){this.innerHTML=`
            <section id="cta" class="py-20 bg-black">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center animate-fade-in">
                        <!-- Main Heading -->
                        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
                            ¿Listo para Transformar tu Negocio?
                        </h2>
                        
                        <!-- Subtitle -->
                        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                            Únete a las empresas líderes que ya están revolucionando su presencia digital con nuestras soluciones de IA.
                        </p>

                        <!-- CTA Buttons -->
                        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <!-- Primary CTA -->
                            <button class="cta-primary bg-primary-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                                <span>Comenzar Ahora</span>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>

                            <!-- Secondary CTA -->
                            <button class="cta-secondary border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                                Agenda una Demo
                            </button>
                        </div>

                        <!-- Trust Indicators -->
                        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                            <!-- Trust Item 1 -->
                            <div class="text-center animate-slide-up">
                                <div class="text-3xl font-bold text-primary-blue mb-2">+500</div>
                                <div class="text-gray-300">Empresas Transformadas</div>
                            </div>

                            <!-- Trust Item 2 -->
                            <div class="text-center animate-slide-up animation-delay-200">
                                <div class="text-3xl font-bold text-primary-blue mb-2">+85%</div>
                                <div class="text-gray-300">ROI Promedio</div>
                            </div>

                            <!-- Trust Item 3 -->
                            <div class="text-center animate-slide-up animation-delay-400">
                                <div class="text-3xl font-bold text-primary-blue mb-2">24/7</div>
                                <div class="text-gray-300">Soporte Premium</div>
                            </div>
                        </div>

                        <!-- Additional Info -->
                        <div class="mt-12 text-center">
                            <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Implementación en 48 horas</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Garantía de resultados</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Soporte técnico incluido</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Floating Elements -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="floating-element-1 absolute w-4 h-4 bg-primary-blue rounded-full opacity-20 animate-pulse-slow" style="top: 20%; left: 10%;"></div>
                    <div class="floating-element-2 absolute w-6 h-6 bg-primary-blue rounded-full opacity-30 animate-pulse-slow" style="top: 60%; right: 15%; animation-delay: 1s;"></div>
                    <div class="floating-element-3 absolute w-3 h-3 bg-primary-blue rounded-full opacity-40 animate-pulse-slow" style="bottom: 30%; left: 20%; animation-delay: 2s;"></div>
                </div>
            </section>
        `,this.setupEventListeners()}setupEventListeners(){const t=this.querySelector(".cta-primary");t&&t.addEventListener("click",()=>{this.handlePrimaryCTA()});const s=this.querySelector(".cta-secondary");s&&s.addEventListener("click",()=>{this.handleSecondaryCTA()})}setupAnimations(){this.querySelectorAll(".animate-slide-up").forEach((t,s)=>{t.style.animationDelay=`${s*200}ms`}),this.animateFloatingElements()}animateFloatingElements(){this.querySelectorAll(".floating-element-1, .floating-element-2, .floating-element-3").forEach((t,s)=>{if(t.style.animation=`float 6s ease-in-out infinite ${s*2}s`,!document.querySelector("#floatingKeyframes")){const e=document.createElement("style");e.id="floatingKeyframes",e.textContent=`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(180deg); }
                    }
                `,document.head.appendChild(e)}})}handlePrimaryCTA(){const t=encodeURIComponent("Hola! Quiero comenzar con sus servicios de IA y automatización. ¿Podemos hablar sobre cómo transformar mi negocio?");window.open(`https://wa.me/542923560623?text=${t}`,"_blank")}handleSecondaryCTA(){const t=encodeURIComponent("Hola! Me gustaría agendar una demo gratuita para conocer sus soluciones de IA. ¿Cuándo podríamos tener una reunión?");window.open(`https://wa.me/542923560623?text=${t}`,"_blank")}updateCTAContent(t){if(t.title){const s=this.querySelector("h2");s&&(s.textContent=t.title)}if(t.subtitle){const s=this.querySelector("p.text-gray-300");s&&(s.textContent=t.subtitle)}if(t.primaryButton){const s=this.querySelector(".cta-primary span");s&&(s.textContent=t.primaryButton)}if(t.secondaryButton){const s=this.querySelector(".cta-secondary");s&&(s.textContent=t.secondaryButton)}}}customElements.define("cta-section",O);class $ extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
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
                                <li><a href="#services" class="text-gray-400 hover:text-primary-blue transition-colors duration-300 cursor-pointer" data-service="ia">Asistente IA</a></li>
                                <li><a href="#services" class="text-gray-400 hover:text-primary-blue transition-colors duration-300 cursor-pointer" data-service="bots">Bots Omnicanal</a></li>
                                <li><a href="#services" class="text-gray-400 hover:text-primary-blue transition-colors duration-300 cursor-pointer" data-service="campanas">Campañas Garantizadas</a></li>
                                <li><a href="#services" class="text-gray-400 hover:text-primary-blue transition-colors duration-300 cursor-pointer" data-service="growth">Growth Simulator</a></li>
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
                                    boomdigitaleeuu@gmail.com
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    +54 2923 560326
                                </li>
                                <li class="flex items-start">
                                    <svg class="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <span>Jr. Unio 208 Comas Km 11<br>Lima, Peru</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-400 text-sm">
                            © 2025 Boom Digital Agency. Todos los derechos reservados.
                        </p>
                        <div class="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" class="text-gray-400 hover:text-primary-blue text-sm transition-colors duration-300">Privacidad</a>
                            <a href="#" class="text-gray-400 hover:text-primary-blue text-sm transition-colors duration-300">Términos</a>
                            <a href="#" class="text-gray-400 hover:text-primary-blue text-sm transition-colors duration-300">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        `}setupEventListeners(){this.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const e=t.getAttribute("href").substring(1),a=document.getElementById(e);a&&a.scrollIntoView({behavior:"smooth",block:"start"})})}),this.querySelectorAll("[data-service]").forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const e=t.getAttribute("data-service");let a="";switch(e){case"ia":a="Hola! Me interesa su Asistente IA. ¿Podemos hablar sobre cómo implementar inteligencia artificial en mi negocio?";break;case"bots":a="Hola! Quiero conocer más sobre sus Bots Omnicanal. ¿Cómo pueden ayudarme con la automatización de atención al cliente?";break;case"campanas":a="Hola! Me gustaría saber más sobre sus Campañas Garantizadas. ¿Cómo funcionan y cuáles son los resultados esperados?";break;case"growth":a="Hola! El Growth Simulator me parece muy interesante. ¿Podemos discutir cómo simular el crecimiento de mi negocio?";break;default:a="Hola! Me gustaría obtener más información sobre sus servicios."}const r=encodeURIComponent(a);window.open(`https://wa.me/542923560623?text=${r}`,"_blank")})})}}customElements.define("footer-component",$);class R extends HTMLElement{constructor(){super(),this.isOpen=!1,this.conversation=[],this.isTyping=!1}connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
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
    `}setupEventListeners(){const t=this.querySelector("#chatToggle"),s=this.querySelector("#chatWindow"),e=this.querySelector("#closeChat"),a=this.querySelector("#sendMessage"),r=this.querySelector("#messageInput");t.addEventListener("click",()=>{this.isOpen=!this.isOpen,s.classList.toggle("hidden",!this.isOpen),this.isOpen&&r.focus()}),e.addEventListener("click",()=>{this.isOpen=!1,s.classList.add("hidden")});const i=()=>{const l=r.value.trim();l&&!this.isTyping&&(this.addUserMessage(l),r.value="",this.getAIResponse(l))};a.addEventListener("click",i),r.addEventListener("keypress",l=>{l.key==="Enter"&&i()}),r.addEventListener("input",()=>{a.disabled=!r.value.trim()||this.isTyping})}addUserMessage(t){const s=this.querySelector("#messagesContainer"),e=document.createElement("div");e.className="message user-message bg-primary-blue text-white rounded-lg p-3 shadow-sm mb-3 ml-8",e.innerHTML=`<p class="text-sm">${this.escapeHtml(t)}</p>`,s.appendChild(e),this.scrollToBottom()}addBotMessage(t){const s=this.querySelector("#messagesContainer"),e=document.createElement("div");e.className="message bot-message bg-white rounded-lg p-3 shadow-sm mb-3",e.innerHTML=`<p class="text-sm text-gray-700">${this.formatMessage(t)}</p>`,s.appendChild(e),this.scrollToBottom()}async getAIResponse(t){this.showTypingIndicator(),this.isTyping=!0;try{const s=await this.callDeepSeekAPI(t);this.hideTypingIndicator(),this.addBotMessage(s)}catch(s){console.error("Error calling DeepSeek API:",s),this.hideTypingIndicator(),this.addBotMessage("Lo siento, estoy teniendo problemas para conectarme. Por favor, intenta nuevamente en un momento.")}this.isTyping=!1,this.updateSendButtonState()}getApiKey(){return console.error("VITE_CHATBOT_API_KEY not found in environment variables"),null}async callDeepSeekAPI(t){const s=this.getApiKey(),e="https://api.deepseek.com/v1/chat/completions",a=`Eres el asistente oficial de Boom Digital Agency. Responde en español de manera profesional y amigable. 
    
Contexto de la agencia:
- Especialistas en soluciones de IA y automatización
- Servicios: Asistente IA, Bots Omnicanal, Campañas Garantizadas, Growth Simulator
- Enfoque en transformación digital y crecimiento empresarial
- Estilo profesional y premium

Pregunta del usuario: ${t}

Responde como representante oficial de Boom Digital Agency, manteniendo un tono profesional pero cercano.`,r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"Eres un asistente profesional de Boom Digital Agency, especializado en soluciones de IA y transformación digital. Responde siempre en español de manera clara y útil."},{role:"user",content:a}],max_tokens:500,temperature:.7})});if(!r.ok)throw new Error(`API error: ${r.status}`);return(await r.json()).choices[0].message.content}showTypingIndicator(){this.querySelector("#typingIndicator").classList.remove("hidden"),this.scrollToBottom()}hideTypingIndicator(){this.querySelector("#typingIndicator").classList.add("hidden")}scrollToBottom(){const t=this.querySelector("#messagesContainer");t.scrollTop=t.scrollHeight}updateSendButtonState(){const t=this.querySelector("#sendMessage"),s=this.querySelector("#messageInput");t.disabled=!s.value.trim()||this.isTyping}escapeHtml(t){const s=document.createElement("div");return s.textContent=t,s.innerHTML}formatMessage(t){return t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/(https?:\/\/[^\s]+)/g,'<a href="$1" target="_blank" class="text-primary-blue underline">$1</a>')}}customElements.define("chat-bot",R);class N{constructor(){this.init()}init(){console.log("Boom Digital Agency - Application Started"),this.setupScrollAnimations(),this.setupLazyLoading(),this.trackPageView()}setupScrollAnimations(){const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},s=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&a.target.classList.add("animate-fade-in","animate-slide-up")})},t);document.querySelectorAll("section, .animate-on-scroll").forEach(e=>{s.observe(e)})}setupLazyLoading(){const t=new IntersectionObserver((s,e)=>{s.forEach(a=>{if(a.isIntersecting){const r=a.target;r.src=r.dataset.src,r.classList.remove("lazy"),e.unobserve(r)}})});document.querySelectorAll("img[data-src]").forEach(s=>{t.observe(s)})}async trackPageView(){try{const{trackPageView:t}=await B(async()=>{const{trackPageView:s}=await I(()=>S(()=>k(()=>import("./firebase-6dUurx0Q-BXuLB0tj-CkyGTK-u-_ub-MjIu.js"),[],import.meta.url),[],import.meta.url),[],import.meta.url);return{trackPageView:s}},[],import.meta.url);await t("home")}catch{console.log("Analytics tracking not available in development")}}}document.addEventListener("DOMContentLoaded",()=>{new N});
