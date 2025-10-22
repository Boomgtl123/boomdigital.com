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
                // Scroll to contact section instead of showing auth modal
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth'
                });
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

        // Scroll to contact section for service inquiries
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Register the custom element
customElements.define('services-section', ServicesSection);

export default ServicesSection;
