// Dashboard Component
class DashboardSection extends HTMLElement {
    constructor() {
        super();
        this.metrics = {
            activeUsers: 0,
            campaigns: 0,
            conversions: 0,
            revenue: 0
        };
        this.interval = null;
    }

    connectedCallback() {
        this.render();
        this.startLiveUpdates();
        this.setupIntersectionObserver();
    }

    disconnectedCallback() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        this.innerHTML = `
            <section id="dashboard" class="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Section Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <h2 class="text-4xl md:text-5xl font-bold text-black mb-4">
                            Dashboard en Tiempo Real
                        </h2>
                        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                            Monitorea el rendimiento de tus campañas con nuestra plataforma de IA
                        </p>
                    </div>

                    <!-- Live Metrics Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <!-- Active Users -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-700">Usuarios Activos</h3>
                                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-baseline">
                                <span id="activeUsers" class="text-3xl font-bold text-black">2,847</span>
                                <span class="ml-2 text-sm text-green-600 font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +12%
                                </span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">En línea ahora</p>
                        </div>

                        <!-- Active Campaigns -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up" style="animation-delay: 100ms">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-700">Campañas Activas</h3>
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-baseline">
                                <span id="activeCampaigns" class="text-3xl font-bold text-black">47</span>
                                <span class="ml-2 text-sm text-green-600 font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +3
                                </span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">Este mes</p>
                        </div>

                        <!-- Conversions -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up" style="animation-delay: 200ms">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-700">Conversiones</h3>
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-baseline">
                                <span id="conversions" class="text-3xl font-bold text-black">1,284</span>
                                <span class="ml-2 text-sm text-green-600 font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +8%
                                </span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">Hoy</p>
                        </div>

                        <!-- Revenue -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up" style="animation-delay: 300ms">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-700">Ingresos</h3>
                                <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-baseline">
                                <span id="revenue" class="text-3xl font-bold text-black">$24.7K</span>
                                <span class="ml-2 text-sm text-green-600 font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +15%
                                </span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">Este mes</p>
                        </div>
                    </div>

                    <!-- Chart Visualization -->
                    <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-fade-in" style="animation-delay: 400ms">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-2xl font-bold text-black">Rendimiento de Campañas</h3>
                            <div class="flex items-center space-x-2">
                                <span class="text-sm text-gray-500">Actualizado hace 2 min</span>
                                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        
                        <!-- Simulated Chart -->
                        <div class="relative h-64 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 overflow-hidden">
                            <!-- Chart Grid -->
                            <div class="absolute inset-0 flex items-end justify-between px-4 pb-4">
                                <!-- Chart Bars -->
                                <div class="flex items-end space-x-2 h-48 w-full justify-between">
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 60%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Lun</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 75%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Mar</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 45%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Mié</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 85%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Jue</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 65%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Vie</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 95%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Sáb</span>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-8 bg-primary-blue rounded-t-lg transition-all duration-1000" style="height: 70%"></div>
                                        <span class="text-xs text-gray-500 mt-2">Dom</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Y-axis labels -->
                            <div class="absolute left-4 top-4 flex flex-col justify-between h-48 text-xs text-gray-400">
                                <span>100%</span>
                                <span>75%</span>
                                <span>50%</span>
                                <span>25%</span>
                                <span>0%</span>
                            </div>
                        </div>

                        <!-- Chart Legend -->
                        <div class="flex justify-center mt-6 space-x-6">
                            <div class="flex items-center">
                                <div class="w-3 h-3 bg-primary-blue rounded-full mr-2"></div>
                                <span class="text-sm text-gray-600">Conversiones</span>
                            </div>
                            <div class="flex items-center">
                                <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                <span class="text-sm text-gray-600">Ingresos</span>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Section -->
                    <div class="text-center mt-12 animate-fade-in" style="animation-delay: 600ms">
                        <div class="bg-gradient-to-r from-primary-blue to-blue-500 rounded-2xl p-8 text-white">
                            <h3 class="text-2xl font-bold mb-4">
                                Accede a tu Dashboard Personalizado
                            </h3>
                            <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Obtén insights detallados, métricas en tiempo real y recomendaciones de IA para optimizar tus campañas
                            </p>
                            <button 
                                id="dashboardCtaBtn"
                                class="bg-white text-primary-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Acceder al Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;

        this.setupEventListeners();
        this.animateChart();
    }

    setupEventListeners() {
        const ctaBtn = this.querySelector('#dashboardCtaBtn');
        
        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => {
                this.showAuthModal('register');
            });
        }
    }

    startLiveUpdates() {
        // Simulate live data updates
        this.interval = setInterval(() => {
            this.updateMetrics();
        }, 3000);

        // Initial update
        this.updateMetrics();
    }

    updateMetrics() {
        // Simulate random metric updates
        const randomIncrement = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        
        const usersElement = this.querySelector('#activeUsers');
        const campaignsElement = this.querySelector('#activeCampaigns');
        const conversionsElement = this.querySelector('#conversions');
        const revenueElement = this.querySelector('#revenue');

        if (usersElement) {
            const current = parseInt(usersElement.textContent.replace(',', '')) || 2847;
            const newValue = current + randomIncrement(-2, 5);
            usersElement.textContent = newValue.toLocaleString();
        }

        if (campaignsElement) {
            const current = parseInt(campaignsElement.textContent) || 47;
            const newValue = current + randomIncrement(-1, 1);
            campaignsElement.textContent = Math.max(45, newValue);
        }

        if (conversionsElement) {
            const current = parseInt(conversionsElement.textContent.replace(',', '')) || 1284;
            const newValue = current + randomIncrement(1, 8);
            conversionsElement.textContent = newValue.toLocaleString();
        }

        if (revenueElement) {
            const current = parseFloat(revenueElement.textContent.replace('$', '').replace('K', '')) || 24.7;
            const increment = randomIncrement(1, 3) / 10;
            const newValue = current + increment;
            revenueElement.textContent = `$${newValue.toFixed(1)}K`;
        }
    }

    animateChart() {
        // Animate chart bars on load
        setTimeout(() => {
            const bars = this.querySelectorAll('.bg-primary-blue');
            bars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.transition = 'height 1s ease-in-out';
                }, index * 100);
            });
        }, 500);
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

    showAuthModal(type) {
        const authModal = document.querySelector('auth-modal');
        if (authModal) {
            authModal.open(type);
        }
    }
}

// Register the custom element
customElements.define('dashboard-section', DashboardSection);

export default DashboardSection;
