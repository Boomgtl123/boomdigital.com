// Hero Component
class HeroSection extends HTMLElement {
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
        `;

        this.setupEventListeners();
    }

    setupEventListeners() {
        const ctaBtn = this.querySelector('#heroCtaBtn');
        const learnMoreBtn = this.querySelector('#learnMoreBtn');

        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => {
                const message = encodeURIComponent("Hola! Quiero comenzar con sus servicios de IA y automatización. ¿Podemos hablar sobre cómo transformar mi negocio?");
                window.open(`https://wa.me/542923560623?text=${message}`, '_blank');
            });
        }

        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => {
                document.querySelector('#services').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                }
            });
        }, { threshold: 0.1 });

        // Observe elements for animation
        setTimeout(() => {
            const animatedElements = this.querySelectorAll('.animate-fade-in, .animate-slide-up');
            animatedElements.forEach(el => observer.observe(el));
        }, 100);
    }


}

// Register the custom element
customElements.define('hero-section', HeroSection);

export default HeroSection;
