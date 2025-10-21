// Auth Modal Component
class AuthModal extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
        this.type = 'login'; // 'login' or 'register'
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <div class="fixed inset-0 z-50 overflow-y-auto ${this.isOpen ? '' : 'hidden'}">
                <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <!-- Background overlay -->
                    <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" id="modalOverlay"></div>

                    <!-- Modal panel -->
                    <div class="relative inline-block w-full max-w-md px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6">
                        <!-- Close button -->
                        <button id="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <!-- Modal content -->
                        <div class="sm:flex sm:items-start">
                            <div class="w-full mt-3 text-center sm:mt-0 sm:text-left">
                                <h3 class="text-2xl font-bold leading-6 text-gray-900 mb-6">
                                    ${this.type === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
                                </h3>

                                <form id="authForm" class="space-y-4">
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700 text-left mb-1">
                                            Correo Electrónico
                                        </label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            required
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                            placeholder="tu@email.com"
                                        >
                                    </div>

                                    <div>
                                        <label for="password" class="block text-sm font-medium text-gray-700 text-left mb-1">
                                            Contraseña
                                        </label>
                                        <input 
                                            type="password" 
                                            id="password" 
                                            required
                                            minlength="6"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                            placeholder="••••••"
                                        >
                                    </div>

                                    ${this.type === 'register' ? `
                                        <div>
                                            <label for="name" class="block text-sm font-medium text-gray-700 text-left mb-1">
                                                Nombre Completo
                                            </label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                                placeholder="Tu nombre completo"
                                            >
                                        </div>
                                    ` : ''}

                                    <div id="errorMessage" class="hidden p-3 text-sm text-red-700 bg-red-100 rounded-md"></div>

                                    <button 
                                        type="submit"
                                        id="submitBtn"
                                        class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-blue hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue transition-colors"
                                    >
                                        ${this.type === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
                                    </button>

                                    <div class="text-center">
                                        <button 
                                            type="button" 
                                            id="switchAuthType"
                                            class="text-sm text-primary-blue hover:text-blue-400"
                                        >
                                            ${this.type === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const closeModal = this.querySelector('#closeModal');
        const modalOverlay = this.querySelector('#modalOverlay');
        const authForm = this.querySelector('#authForm');
        const switchAuthType = this.querySelector('#switchAuthType');

        const closeHandler = () => this.close();

        if (closeModal) closeModal.addEventListener('click', closeHandler);
        if (modalOverlay) modalOverlay.addEventListener('click', closeHandler);

        if (authForm) {
            authForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        if (switchAuthType) {
            switchAuthType.addEventListener('click', () => {
                this.type = this.type === 'login' ? 'register' : 'login';
                this.render();
                this.setupEventListeners();
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const email = this.querySelector('#email').value;
        const password = this.querySelector('#password').value;
        const name = this.type === 'register' ? this.querySelector('#name').value : null;
        const errorMessage = this.querySelector('#errorMessage');
        const submitBtn = this.querySelector('#submitBtn');

        // Reset error message
        errorMessage.classList.add('hidden');
        errorMessage.textContent = '';

        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Procesando...';
        submitBtn.disabled = true;

        try {
            const { signInCEO, CEO_EMAIL } = await import('../firebase.js');

            if (this.type === 'register') {
                // For demo purposes, we'll treat registration as successful
                // In a real app, you would create a user in Firebase
                this.showNotification('Cuenta creada exitosamente (Demo)', 'success');
                this.close();
                
                // Redirect to dashboard after successful registration
                setTimeout(() => {
                    window.location.href = '/dashboard.html';
                }, 1000);
                
            } else {
                // Check if it's CEO login
                if (email === CEO_EMAIL) {
                    await signInCEO(email, password);
                    this.showNotification('Bienvenido CEO', 'success');
                } else {
                    // For regular users, simulate successful login
                    this.showNotification('Sesión iniciada correctamente (Demo)', 'success');
                }
                this.close();
                
                // Redirect to dashboard after successful login
                setTimeout(() => {
                    window.location.href = '/dashboard.html';
                }, 1000);
            }

        } catch (error) {
            console.error('Auth error:', error);
            
            let errorMsg = 'Error en la autenticación';
            if (error.message.includes('Acceso restringido')) {
                errorMsg = error.message;
            } else if (error.message.includes('invalid')) {
                errorMsg = 'Credenciales inválidas';
            } else {
                errorMsg = error.message || 'Error desconocido';
            }

            errorMessage.textContent = errorMsg;
            errorMessage.classList.remove('hidden');
        } finally {
            // Restore button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    open(type = 'login') {
        this.type = type;
        this.isOpen = true;
        this.render();
        this.setupEventListeners();
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.isOpen = false;
        this.innerHTML = '';
        document.body.style.overflow = '';
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
customElements.define('auth-modal', AuthModal);

export default AuthModal;
