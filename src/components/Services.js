// Services Component
class ServicesSection extends HTMLElement {
    constructor() {
        super();
        this.websiteContent = null;
    }

    connectedCallback() {
        this.loadContent();
        this.setupIntersectionObserver();
    }

    async loadContent() {
        try {
            const { getWebsiteContent } = await import('../firebase.js');
            this.websiteContent = await getWebsiteContent();
            this.render();
        } catch (error) {
            console.error('Error loading services content:', error);
            this.renderWithDefaultContent();
        }
    }

    render() {
        const services = this.websiteContent?.services || {};
        
        this.innerHTML = `
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
                                ${services.service1?.title || 'E-commerce'}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${services.service1?.description || 'Desarrollo de tiendas online completas con integración de pagos, inventario y gestión de pedidos.'}
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
                                ${services.service2?.title || 'IT Solutions'}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${services.service2?.description || 'Soluciones tecnológicas personalizadas, infraestructura cloud y soporte técnico especializado.'}
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
                                ${services.service3?.title || 'IA Solutions'}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${services.service3?.description || 'Implementación de inteligencia artificial para automatización, análisis predictivo y optimización de procesos.'}
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
                                ${services.service4?.title || 'Desarrollo Web'}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${services.service4?.description || 'Creación de aplicaciones web modernas, responsivas y escalables con las últimas tecnologías.'}
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
        `;

        this.setupEventListeners();
    }

    renderWithDefaultContent() {
        this.innerHTML = `
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
        `;

        this.setupEventListeners();
    }

    setupEventListeners() {
        const ctaBtn = this.querySelector('#servicesCtaBtn');
        const serviceCards = this.querySelectorAll('.group');

        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => {
                this.showAuthModal('register');
            });
        }

        // Add hover effects and click handlers for service cards
        serviceCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                this.showServiceDetails(index);
            });
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, { threshold: 0.1 });

        setTimeout(() => {
            const animatedElements = this.querySelectorAll('.animate-fade-in, .animate-slide-up');
            animatedElements.forEach(el => observer.observe(el));
        }, 100);
    }

    showServiceDetails(serviceIndex) {
        const serviceNames = [
            'E-commerce',
            'IT Solutions',
            'IA Solutions',
            'Desarrollo Web',
            'Marketing Digital',
            'SEO Optimization',
            'Coaching Empresarial',
            'Consultoría Técnica'
        ];

        this.showNotification(`Redirigiendo a detalles de: ${serviceNames[serviceIndex]}`, 'info');

        // In a real implementation, this would navigate to service detail page
        setTimeout(() => {
            this.showAuthModal('register');
        }, 1000);
    }

    showAuthModal(type) {
        const authModal = document.querySelector('auth-modal');
        if (authModal) {
            authModal.open(type);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const colors = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            info: 'bg-primary-blue'
        };

        notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-0`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Register the custom element
customElements.define('services-section', ServicesSection);

export default ServicesSection;
