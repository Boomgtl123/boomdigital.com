// CTA Section Component
class CTASection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupAnimations();
    }

    render() {
        this.innerHTML = `
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
        `;

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Primary CTA Button
        const primaryCTA = this.querySelector('.cta-primary');
        if (primaryCTA) {
            primaryCTA.addEventListener('click', () => {
                this.handlePrimaryCTA();
            });
        }

        // Secondary CTA Button
        const secondaryCTA = this.querySelector('.cta-secondary');
        if (secondaryCTA) {
            secondaryCTA.addEventListener('click', () => {
                this.handleSecondaryCTA();
            });
        }
    }

    setupAnimations() {
        // Add staggered animation delays for trust indicators
        const trustItems = this.querySelectorAll('.animate-slide-up');
        trustItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 200}ms`;
        });

        // Setup floating elements animation
        this.animateFloatingElements();
    }

    animateFloatingElements() {
        const floatingElements = this.querySelectorAll('.floating-element-1, .floating-element-2, .floating-element-3');
        
        floatingElements.forEach((element, index) => {
            // Add floating animation
            element.style.animation = `float 6s ease-in-out infinite ${index * 2}s`;
            
            // Add custom floating keyframes
            if (!document.querySelector('#floatingKeyframes')) {
                const style = document.createElement('style');
                style.id = 'floatingKeyframes';
                style.textContent = `
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(180deg); }
                    }
                `;
                document.head.appendChild(style);
            }
        });
    }

    handlePrimaryCTA() {
        // Show registration modal or redirect to registration page
        const registrationEvent = new CustomEvent('show-registration', {
            bubbles: true,
            detail: { source: 'cta-primary' }
        });
        this.dispatchEvent(registrationEvent);
        
        // Alternative: Redirect to registration page
        // window.location.href = '/register.html';
    }

    handleSecondaryCTA() {
        // Show contact/demo modal
        const demoEvent = new CustomEvent('show-demo', {
            bubbles: true,
            detail: { source: 'cta-secondary' }
        });
        this.dispatchEvent(demoEvent);
        
        // Alternative: Open contact form
        // window.location.href = '/contact.html';
    }

    // Method to update CTA content dynamically
    updateCTAContent(content) {
        if (content.title) {
            const titleElement = this.querySelector('h2');
            if (titleElement) titleElement.textContent = content.title;
        }
        
        if (content.subtitle) {
            const subtitleElement = this.querySelector('p.text-gray-300');
            if (subtitleElement) subtitleElement.textContent = content.subtitle;
        }
        
        if (content.primaryButton) {
            const primaryButton = this.querySelector('.cta-primary span');
            if (primaryButton) primaryButton.textContent = content.primaryButton;
        }
        
        if (content.secondaryButton) {
            const secondaryButton = this.querySelector('.cta-secondary');
            if (secondaryButton) secondaryButton.textContent = content.secondaryButton;
        }
    }
}

// Register the custom element
customElements.define('cta-section', CTASection);

export default CTASection;
