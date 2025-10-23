// Header Component
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
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
        `;
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = this.querySelector('#mobileMenuBtn');
        const mobileMenu = this.querySelector('#mobileMenu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenu && !this.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Register the custom element
customElements.define('header-component', HeaderComponent);

export default HeaderComponent;
