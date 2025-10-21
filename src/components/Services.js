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
                        <!-- Service 1: Asistente IA -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                ${services.service1?.title || 'Asistente IA'}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${services.service1?.description || 'Asistente virtual inteligente que automatiza tareas y mejora la productividad de tu equipo.'}
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 2: Bots Omnicanal -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 100ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                ${services.service2?.title || 'Bots Omnicanal'}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${services.service2?.description || 'Solución de chatbots integrada en todos tus canales de comunicación para una experiencia unificada.'}
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 3: Campañas Garantizadas -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 200ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                ${services.service3?.title || 'Campañas Garantizadas'}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${services.service3?.description || 'Estrategias de marketing con resultados medibles y garantizados para maximizar tu ROI.'}
                            </p>
                            <div class="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Descubrir más</span>
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <!-- Service 4: Growth Simulator -->
                        <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slide-up" style="animation-delay: 300ms">
                            <div class="absolute top-4 right-4 w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-black mb-4 group-hover:text-primary-blue transition-colors duration-300">
                                ${services.service4?.title || 'Growth Simulator'}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                ${services.service4?.description || 'Simulación predictiva y análisis avanzado para optimizar tu estrategia de crecimiento.'}
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
            'Asistente IA',
            'Bots Omnicanal', 
            'Campañas Garantizadas',
            'Growth Simulator'
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
