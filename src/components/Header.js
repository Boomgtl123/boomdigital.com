// Header Component with Firebase Authentication
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.currentUser = null;
        this.isCEOMode = false;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        this.setupAuthListener();
    }

    render() {
        const isLoggedIn = this.currentUser !== null;
        const isCEO = this.currentUser?.email === 'boomdigitaleeuu@gmail.com';

        this.innerHTML = `
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
                            ${!isLoggedIn ? `
                                <button id="loginBtn" class="text-black hover:text-primary-blue px-4 py-2 text-sm font-medium transition-colors border border-gray-300 hover:border-primary-blue rounded-full">
                                    Iniciar Sesión
                                </button>
                                <button id="registerBtn" class="bg-primary-blue text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-400 transition-colors shadow-lg hover:shadow-xl border border-primary-blue">
                                    Registrarse
                                </button>
                            ` : `
                                <div class="flex items-center space-x-3">
                                    <span class="text-sm text-gray-600">
                                        ${this.currentUser.displayName || this.currentUser.email}
                                    </span>
                                    ${isCEO ? `
                                        <button id="ceoPanelBtn" class="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                            Panel CEO
                                        </button>
                                    ` : ''}
                                    <button id="logoutBtn" class="text-black hover:text-red-600 px-4 py-2 text-sm font-medium transition-colors border border-gray-300 hover:border-red-600 rounded-full">
                                        Cerrar Sesión
                                    </button>
                                </div>
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
                                ${!isLoggedIn ? `
                                    <button id="mobileLoginBtn" class="text-black hover:text-primary-blue block w-full text-left px-3 py-2 text-base font-medium border border-gray-300 hover:border-primary-blue rounded-lg">
                                        Iniciar Sesión
                                    </button>
                                    <button id="mobileRegisterBtn" class="bg-primary-blue text-white block w-full text-left px-3 py-2 rounded-lg text-base font-medium mt-2 border border-primary-blue">
                                        Registrarse
                                    </button>
                                ` : `
                                    <div class="px-3 py-2 text-sm text-white">
                                        ${this.currentUser.displayName || this.currentUser.email}
                                    </div>
                                    ${isCEO ? `
                                        <button id="mobileCeoPanelBtn" class="bg-black text-white block w-full text-left px-3 py-2 rounded-lg text-base font-medium mt-2">
                                            Panel CEO
                                        </button>
                                    ` : ''}
                                    <button id="mobileLogoutBtn" class="text-red-600 hover:text-red-700 block w-full text-left px-3 py-2 text-base font-medium mt-2 border border-red-600 hover:border-red-700 rounded-lg">
                                        Cerrar Sesión
                                    </button>
                                `}
                            </div>
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

        // Auth button handlers
        const setupAuthButton = (desktopId, mobileId, action) => {
            const desktopBtn = this.querySelector(desktopId);
            const mobileBtn = this.querySelector(mobileId);

            const handler = () => {
                if (action === 'login') {
                    this.showAuthModal('login');
                } else if (action === 'register') {
                    this.showAuthModal('register');
                } else if (action === 'logout') {
                    this.handleLogout();
                } else if (action === 'ceoPanel') {
                    this.openCEOPanel();
                }
            };

            if (desktopBtn) desktopBtn.addEventListener('click', handler);
            if (mobileBtn) mobileBtn.addEventListener('click', handler);
        };

        setupAuthButton('#loginBtn', '#mobileLoginBtn', 'login');
        setupAuthButton('#registerBtn', '#mobileRegisterBtn', 'register');
        setupAuthButton('#logoutBtn', '#mobileLogoutBtn', 'logout');
        setupAuthButton('#ceoPanelBtn', '#mobileCeoPanelBtn', 'ceoPanel');

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenu && !this.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    setupAuthListener() {
        // Listen for authentication state changes
        import('../firebase.js').then(({ setupAuthListener }) => {
            setupAuthListener((user) => {
                this.currentUser = user;
                this.render();
                this.setupEventListeners();
            });
        });
    }

    openCEOPanel() {
        const ceoPanelModal = document.querySelector('ceo-panel-modal');
        if (ceoPanelModal) {
            ceoPanelModal.open();
        }
    }

    showAuthModal(type) {
        const authModal = document.querySelector('auth-modal');
        if (authModal) {
            authModal.open(type);
        }
    }

    async handleLogout() {
        try {
            const { signOutCEO } = await import('../firebase.js');
            await signOutCEO();
            this.showNotification('Sesión cerrada correctamente', 'success');
        } catch (error) {
            console.error('Logout error:', error);
            this.showNotification('Error al cerrar sesión', 'error');
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const colors = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            info: 'bg-blue-500'
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
customElements.define('header-component', HeaderComponent);

export default HeaderComponent;
