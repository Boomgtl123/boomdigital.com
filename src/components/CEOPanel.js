// CEO Panel Component
class CEOPanel extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
        this.websiteContent = null;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        this.loadWebsiteContent();
    }

    async loadWebsiteContent() {
        try {
            const { getWebsiteContent } = await import('../firebase.js');
            this.websiteContent = await getWebsiteContent();
            this.populateForm();
        } catch (error) {
            console.error('Error loading website content:', error);
            this.showNotification('Error al cargar el contenido', 'error');
        }
    }

    populateForm() {
        if (!this.websiteContent) return;

        // Hero section
        if (this.websiteContent.hero) {
            this.querySelector('#heroTitle').value = this.websiteContent.hero.title || '';
            this.querySelector('#heroSubtitle').value = this.websiteContent.hero.subtitle || '';
            this.querySelector('#heroCta').value = this.websiteContent.hero.ctaText || '';
        }

        // Services
        if (this.websiteContent.services) {
            this.querySelector('#service1Title').value = this.websiteContent.services.service1?.title || '';
            this.querySelector('#service1Desc').value = this.websiteContent.services.service1?.description || '';
            this.querySelector('#service2Title').value = this.websiteContent.services.service2?.title || '';
            this.querySelector('#service2Desc').value = this.websiteContent.services.service2?.description || '';
            this.querySelector('#service3Title').value = this.websiteContent.services.service3?.title || '';
            this.querySelector('#service3Desc').value = this.websiteContent.services.service3?.description || '';
            this.querySelector('#service4Title').value = this.websiteContent.services.service4?.title || '';
            this.querySelector('#service4Desc').value = this.websiteContent.services.service4?.description || '';
        }

        // Colors
        if (this.websiteContent.colors) {
            this.querySelector('#primaryColor').value = this.websiteContent.colors.primary || '#37C6FF';
        }
    }

    render() {
        this.innerHTML = `
            <div class="fixed inset-0 z-50 overflow-y-auto ${this.isOpen ? '' : 'hidden'}">
                <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <!-- Background overlay -->
                    <div class="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" id="ceoPanelOverlay"></div>

                    <!-- Modal panel -->
                    <div class="relative inline-block w-full max-w-6xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6 sm:w-full">
                        <!-- Close button -->
                        <button id="closeCeoPanel" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <!-- Panel header -->
                        <div class="flex items-center justify-between mb-6 pb-4 border-b">
                            <div class="flex items-center space-x-3">
                                <img src="/assets/images/verificado.png" alt="Verificado" class="w-8 h-8">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900">Panel CEO</h3>
                                    <p class="text-sm text-gray-600">boomdigitaleeuu@gmail.com</p>
                                </div>
                            </div>
                            <button id="downloadStats" class="bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-400 transition-colors">
                                Descargar Estadísticas
                            </button>
                        </div>

                        <!-- Panel content -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-96 overflow-y-auto">
                            <!-- Hero Section Editor -->
                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-gray-900">Sección Hero</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Título Principal</label>
                                        <input type="text" id="heroTitle" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Subtítulo</label>
                                        <textarea id="heroSubtitle" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Texto del Botón CTA</label>
                                        <input type="text" id="heroCta" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                </div>
                            </div>

                            <!-- Services Editor -->
                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-gray-900">Servicios</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 1 - Título</label>
                                        <input type="text" id="service1Title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 1 - Descripción</label>
                                        <textarea id="service1Desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 2 - Título</label>
                                        <input type="text" id="service2Title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 2 - Descripción</label>
                                        <textarea id="service2Desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                </div>
                            </div>

                            <!-- More Services -->
                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-gray-900">Servicios (Continuación)</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 3 - Título</label>
                                        <input type="text" id="service3Title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 3 - Descripción</label>
                                        <textarea id="service3Desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 4 - Título</label>
                                        <input type="text" id="service4Title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Servicio 4 - Descripción</label>
                                        <textarea id="service4Desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"></textarea>
                                    </div>
                                </div>
                            </div>

                            <!-- Colors & Analytics -->
                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-gray-900">Personalización</h4>
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Color Principal</label>
                                        <input type="color" id="primaryColor" class="w-full h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue">
                                    </div>
                                </div>

                                <div class="pt-4 border-t">
                                    <h4 class="text-lg font-semibold text-gray-900 mb-3">Estadísticas Rápidas</h4>
                                    <div class="grid grid-cols-2 gap-4 text-sm">
                                        <div class="bg-gray-50 p-3 rounded-lg">
                                            <div class="text-gray-600">Visitas Hoy</div>
                                            <div class="text-xl font-bold text-primary-blue">--</div>
                                        </div>
                                        <div class="bg-gray-50 p-3 rounded-lg">
                                            <div class="text-gray-600">Total Visitas</div>
                                            <div class="text-xl font-bold text-primary-blue">--</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Action buttons -->
                        <div class="flex justify-end space-x-3 mt-6 pt-4 border-t">
                            <button id="previewChanges" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                Vista Previa
                            </button>
                            <button id="saveChanges" class="px-6 py-2 text-sm font-medium text-white bg-primary-blue rounded-lg hover:bg-blue-400 transition-colors">
                                Guardar Cambios
                            </button>
                        </div>

                        <!-- Status message -->
                        <div id="ceoStatusMessage" class="hidden mt-4 p-3 text-sm rounded-lg"></div>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const closeBtn = this.querySelector('#closeCeoPanel');
        const overlay = this.querySelector('#ceoPanelOverlay');
        const saveBtn = this.querySelector('#saveChanges');
        const previewBtn = this.querySelector('#previewChanges');
        const downloadStatsBtn = this.querySelector('#downloadStats');

        const closeHandler = () => this.close();

        if (closeBtn) closeBtn.addEventListener('click', closeHandler);
        if (overlay) overlay.addEventListener('click', closeHandler);

        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveChanges());
        }

        if (previewBtn) {
            previewBtn.addEventListener('click', () => this.previewChanges());
        }

        if (downloadStatsBtn) {
            downloadStatsBtn.addEventListener('click', () => this.downloadStatistics());
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    async saveChanges() {
        const updates = {
            hero: {
                title: this.querySelector('#heroTitle').value,
                subtitle: this.querySelector('#heroSubtitle').value,
                ctaText: this.querySelector('#heroCta').value
            },
            services: {
                service1: {
                    title: this.querySelector('#service1Title').value,
                    description: this.querySelector('#service1Desc').value
                },
                service2: {
                    title: this.querySelector('#service2Title').value,
                    description: this.querySelector('#service2Desc').value
                },
                service3: {
                    title: this.querySelector('#service3Title').value,
                    description: this.querySelector('#service3Desc').value
                },
                service4: {
                    title: this.querySelector('#service4Title').value,
                    description: this.querySelector('#service4Desc').value
                }
            },
            colors: {
                primary: this.querySelector('#primaryColor').value
            }
        };

        try {
            const { updateWebsiteContent } = await import('../firebase.js');
            await updateWebsiteContent(updates);
            this.showStatusMessage('Cambios guardados exitosamente', 'success');
            
            // Reload the page to apply changes
            setTimeout(() => {
                window.location.reload();
            }, 1500);
            
        } catch (error) {
            console.error('Error saving changes:', error);
            this.showStatusMessage('Error al guardar los cambios', 'error');
        }
    }

    previewChanges() {
        // Apply changes temporarily for preview
        const primaryColor = this.querySelector('#primaryColor').value;
        document.documentElement.style.setProperty('--primary-blue', primaryColor);
        
        this.showStatusMessage('Vista previa aplicada temporalmente', 'info');
    }

    downloadStatistics() {
        // Create a simple CSV with mock data for now
        const csvContent = "Fecha,Visitas,Usuarios\n2024-01-01,150,45\n2024-01-02,180,52\n2024-01-03,200,60";
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'estadisticas-boom-digital.csv';
        a.click();
        window.URL.revokeObjectURL(url);
        
        this.showStatusMessage('Estadísticas descargadas', 'success');
    }

    showStatusMessage(message, type = 'info') {
        const statusEl = this.querySelector('#ceoStatusMessage');
        const colors = {
            success: 'bg-green-100 text-green-700',
            error: 'bg-red-100 text-red-700',
            info: 'bg-blue-100 text-blue-700'
        };

        statusEl.textContent = message;
        statusEl.className = `mt-4 p-3 text-sm rounded-lg ${colors[type]}`;
        statusEl.classList.remove('hidden');

        setTimeout(() => {
            statusEl.classList.add('hidden');
        }, 3000);
    }

    open() {
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
}

// Register the custom element
customElements.define('ceo-panel-modal', CEOPanel);

export default CEOPanel;
