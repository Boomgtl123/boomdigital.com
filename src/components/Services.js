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
        // Load default content without Firebase
        this.renderWithDefaultContent();
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
        `;

        this.setupEventListeners();
    }

    setupEventListeners() {
        const ctaBtn = this.querySelector('#servicesCtaBtn');
        const serviceCards = this.querySelectorAll('.group');

        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => {
                const message = encodeURIComponent("Hola! Me gustaría solicitar una demo gratuita de sus servicios de IA y automatización. ¿Podemos agendar una reunión?");
                window.open(`https://wa.me/542923560623?text=${message}`, '_blank');
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
        const services = [
            { name: 'E-commerce', message: 'Hola! Me interesa su servicio de E-commerce. Me gustaría conocer más sobre las tiendas online con integración de pagos.' },
            { name: 'IT Solutions', message: 'Hola! Necesito soluciones IT para mi empresa. ¿Podemos hablar sobre infraestructura tecnológica?' },
            { name: 'IA Solutions', message: 'Hola! Me gustaría conocer sus soluciones de IA y automatización inteligente.' },
            { name: 'Desarrollo Web', message: 'Hola! Estoy interesado en desarrollo web moderno. ¿Podemos discutir mi proyecto?' },
            { name: 'Marketing Digital', message: 'Hola! Quiero mejorar mi presencia digital. ¿Cómo pueden ayudarme con marketing online?' },
            { name: 'SEO Optimization', message: 'Hola! Necesito mejorar mi posicionamiento web. ¿Ofrecen servicios de SEO?' },
            { name: 'Coaching Empresarial', message: 'Hola! Busco coaching empresarial para hacer crecer mi negocio.' },
            { name: 'Consultoría Técnica', message: 'Hola! Necesito consultoría especializada en tecnología y transformación digital.' }
        ];

        const service = services[serviceIndex];
        const message = encodeURIComponent(service.message);
        window.open(`https://wa.me/542923560623?text=${message}`, '_blank');
    }
}

// Register the custom element
customElements.define('services-section', ServicesSection);

export default ServicesSection;
