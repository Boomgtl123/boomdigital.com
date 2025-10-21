// Footer Component
class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
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
        `;
    }

    setupEventListeners() {
        // Smooth scroll for internal links
        const links = this.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

customElements.define('footer-component', FooterComponent);
