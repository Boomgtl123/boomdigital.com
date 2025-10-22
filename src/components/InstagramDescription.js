// Instagram Description Generator Component
class InstagramDescriptionComponent extends HTMLElement {
    constructor() {
        super();
        this.productName = '';
        this.generatedDescription = '';
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Generador de Descripciones para Instagram
                        </h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                            Crea descripciones optimizadas para Instagram con IA. Perfectas para marketing digital y copywriting en redes sociales.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <!-- Input Section -->
                        <div class="mb-8">
                            <label for="productName" class="block text-lg font-semibold text-gray-900 mb-3">
                                Nombre del Producto
                            </label>
                            <input
                                type="text"
                                id="productName"
                                placeholder="Ej: Perfume Armaf Odissey Baha"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 text-lg"
                                maxlength="100"
                            >
                            <p class="text-sm text-gray-500 mt-2">
                                Máximo 100 caracteres. Describe tu producto de manera clara.
                            </p>
                        </div>

                        <!-- Generate Button -->
                        <div class="text-center mb-8">
                            <button id="generateBtn" class="btn-primary text-lg px-8 py-4">
                                Generar Descripción ✨
                            </button>
                        </div>

                        <!-- Loading State -->
                        <div id="loadingState" class="hidden text-center py-8">
                            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
                            <p class="text-gray-600 mt-4">Generando descripción optimizada...</p>
                        </div>

                        <!-- Result Section -->
                        <div id="resultSection" class="hidden">
                            <div class="border-t pt-8">
                                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                                    Descripción Generada
                                </h3>

                                <!-- Copy Button -->
                                <div class="flex justify-end mb-4">
                                    <button id="copyBtn" class="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                        Copiar
                                    </button>
                                </div>

                                <!-- Generated Content -->
                                <div id="generatedContent" class="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-blue">
                                    <pre class="whitespace-pre-wrap text-gray-800 font-medium text-sm leading-relaxed"></pre>
                                </div>

                                <!-- Success Message -->
                                <div id="copySuccess" class="hidden mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    ✅ Descripción copiada al portapapeles
                                </div>
                            </div>
                        </div>

                        <!-- Features -->
                        <div class="border-t pt-8 mt-8">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">
                                ¿Qué incluye tu descripción?
                            </h4>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">Marketing y SEO optimizado</p>
                                        <p class="text-sm text-gray-500">Palabras clave estratégicas para mayor alcance</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">Hashtags virales 2025</p>
                                        <p class="text-sm text-gray-500">Tendencias actuales y futuras incluidas</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">Llamado a la acción</p>
                                        <p class="text-sm text-gray-500">Motiva comentarios y conversiones</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">Formato Instagram listo</p>
                                        <p class="text-sm text-gray-500">Directo para copiar y pegar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    setupEventListeners() {
        const generateBtn = this.querySelector('#generateBtn');
        const copyBtn = this.querySelector('#copyBtn');
        const productInput = this.querySelector('#productName');

        generateBtn.addEventListener('click', () => this.generateDescription());
        copyBtn.addEventListener('click', () => this.copyToClipboard());

        // Enter key support
        productInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.generateDescription();
            }
        });
    }

    async generateDescription() {
        const productName = this.querySelector('#productName').value.trim();

        if (!productName) {
            this.showNotification('Por favor ingresa el nombre del producto', 'error');
            return;
        }

        this.showLoading(true);

        try {
            // Simulate AI generation (in a real implementation, this would call an AI API)
            const description = await this.generateAIDescription(productName);

            this.generatedDescription = description;
            this.showResult(description);
            this.showLoading(false);

        } catch (error) {
            console.error('Error generating description:', error);
            this.showNotification('Error al generar la descripción. Inténtalo de nuevo.', 'error');
            this.showLoading(false);
        }
    }

    async generateAIDescription(productName) {
        // This is a mock implementation. In a real scenario, this would call an AI API
        // For now, we'll generate a template-based description

        const templates = [
            {
                title: `${productName} – Innovación que Transforma`,
                description: `Descubre el poder de ${productName}. Una solución revolucionaria que combina tecnología avanzada con diseño intuitivo. Ideal para quienes buscan calidad superior y resultados excepcionales. ¿Listo para experimentar la diferencia?`,
                hashtags: ['#Innovacion2025', '#TecnologiaAvanzada', '#SolucionesInteligentes', '#CalidadSuperior', '#TransformacionDigital', '#ProductoRevolucionario']
            },
            {
                title: `${productName} – Elegancia que Inspira`,
                description: `Experimenta la perfección con ${productName}. Diseñado para elevar tus estándares y superar expectativas. Cada detalle pensado para ofrecer una experiencia incomparable. ¿Qué esperas para vivir la excelencia?`,
                hashtags: ['#Elegancia2025', '#DisenoPremium', '#ExperienciaIncomparable', '#CalidadInigualable', '#EstiloModerno', '#PerfeccionAbsoluta']
            },
            {
                title: `${productName} – Potencia y Rendimiento`,
                description: `Libera todo el potencial con ${productName}. Tecnología de vanguardia que garantiza rendimiento óptimo y durabilidad excepcional. Para quienes exigen lo mejor y no se conforman con menos. ¡Hazlo tuyo ahora!`,
                hashtags: ['#Potencia2025', '#RendimientoMaximo', '#TecnologiaVanguardia', '#DurabilidadSuperior', '#CalidadGarantizada', '#PerformanceElite']
            }
        ];

        // Randomly select a template
        const selectedTemplate = templates[Math.floor(Math.random() * templates.length)];

        // Format the output
        const formattedOutput = `---
Título: ${selectedTemplate.title}
Descripción: ${selectedTemplate.description}
Hashtags: ${selectedTemplate.hashtags.join(' ')}
---`;

        return formattedOutput;
    }

    showLoading(show) {
        const loadingState = this.querySelector('#loadingState');
        const generateBtn = this.querySelector('#generateBtn');

        if (show) {
            loadingState.classList.remove('hidden');
            generateBtn.disabled = true;
            generateBtn.textContent = 'Generando...';
        } else {
            loadingState.classList.add('hidden');
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generar Descripción ✨';
        }
    }

    showResult(description) {
        const resultSection = this.querySelector('#resultSection');
        const generatedContent = this.querySelector('#generatedContent pre');

        generatedContent.textContent = description;
        resultSection.classList.remove('hidden');

        // Scroll to result
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    async copyToClipboard() {
        try {
            await navigator.clipboard.writeText(this.generatedDescription);
            this.showCopySuccess();
        } catch (error) {
            console.error('Error copying to clipboard:', error);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = this.generatedDescription;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showCopySuccess();
        }
    }

    showCopySuccess() {
        const copySuccess = this.querySelector('#copySuccess');
        copySuccess.classList.remove('hidden');

        setTimeout(() => {
            copySuccess.classList.add('hidden');
        }, 3000);
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
customElements.define('instagram-description-component', InstagramDescriptionComponent);

export default InstagramDescriptionComponent;
