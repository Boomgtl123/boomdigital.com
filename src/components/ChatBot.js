// ChatBot Component for Boom Digital Agency
class ChatBot extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
    this.conversation = [];
    this.isTyping = false;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.innerHTML = `
      <div class="fixed bottom-6 right-6 z-50">
        <!-- Chat Button -->
        <button id="chatToggle" class="bg-primary-blue text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </button>

        <!-- Chat Window -->
        <div id="chatWindow" class="hidden fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          <!-- Header -->
          <div class="bg-primary-blue text-white p-4 rounded-t-lg flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span class="font-semibold">Boom Digital Assistant</span>
            </div>
            <button id="closeChat" class="text-white hover:text-gray-200 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Messages Container -->
          <div id="messagesContainer" class="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div class="message bot-message bg-white rounded-lg p-3 shadow-sm mb-3">
              <p class="text-sm text-gray-700">¡Hola! Soy el asistente de Boom Digital Agency. ¿En qué puedo ayudarte hoy?</p>
            </div>
          </div>

          <!-- Input Area -->
          <div class="p-4 border-t border-gray-200">
            <div class="flex space-x-2">
              <input 
                id="messageInput" 
                type="text" 
                placeholder="Escribe tu pregunta..." 
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                maxlength="500"
              >
              <button id="sendMessage" class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-2 text-center">Powered by DeepSeek AI</p>
          </div>

          <!-- Typing Indicator -->
          <div id="typingIndicator" class="hidden p-3">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const chatToggle = this.querySelector('#chatToggle');
    const chatWindow = this.querySelector('#chatWindow');
    const closeChat = this.querySelector('#closeChat');
    const sendMessage = this.querySelector('#sendMessage');
    const messageInput = this.querySelector('#messageInput');

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      chatWindow.classList.toggle('hidden', !this.isOpen);
      if (this.isOpen) {
        messageInput.focus();
      }
    });

    // Close chat
    closeChat.addEventListener('click', () => {
      this.isOpen = false;
      chatWindow.classList.add('hidden');
    });

    // Send message
    const sendMessageHandler = () => {
      const message = messageInput.value.trim();
      if (message && !this.isTyping) {
        this.addUserMessage(message);
        messageInput.value = '';
        this.getAIResponse(message);
      }
    };

    sendMessage.addEventListener('click', sendMessageHandler);
    
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessageHandler();
      }
    });

    // Enable/disable send button based on input
    messageInput.addEventListener('input', () => {
      sendMessage.disabled = !messageInput.value.trim() || this.isTyping;
    });
  }

  addUserMessage(message) {
    const messagesContainer = this.querySelector('#messagesContainer');
    const messageElement = document.createElement('div');
    messageElement.className = 'message user-message bg-primary-blue text-white rounded-lg p-3 shadow-sm mb-3 ml-8';
    messageElement.innerHTML = `<p class="text-sm">${this.escapeHtml(message)}</p>`;
    messagesContainer.appendChild(messageElement);
    this.scrollToBottom();
  }

  addBotMessage(message) {
    const messagesContainer = this.querySelector('#messagesContainer');
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot-message bg-white rounded-lg p-3 shadow-sm mb-3';
    messageElement.innerHTML = `<p class="text-sm text-gray-700">${this.formatMessage(message)}</p>`;
    messagesContainer.appendChild(messageElement);
    this.scrollToBottom();
  }

  async getAIResponse(userMessage) {
    this.showTypingIndicator();
    this.isTyping = true;
    
    try {
      const response = await this.callDeepSeekAPI(userMessage);
      this.hideTypingIndicator();
      this.addBotMessage(response);
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      this.hideTypingIndicator();
      this.addBotMessage('Lo siento, estoy teniendo problemas para conectarme. Por favor, intenta nuevamente en un momento.');
    }
    
    this.isTyping = false;
    this.updateSendButtonState();
  }

  getApiKey() {
    // For browser environment, use a secure method to get API key
    // In production, this should be handled server-side or through secure config
    return 'sk-59b0807d89344fb781f3d9b1baf35753';
  }

  async callDeepSeekAPI(message) {
    // DeepSeek API integration
    const apiKey = this.getApiKey();
    const apiUrl = 'https://api.deepseek.com/v1/chat/completions';

    const prompt = `Eres el asistente oficial de Boom Digital Agency. Responde en español de manera profesional y amigable. 
    
Contexto de la agencia:
- Especialistas en soluciones de IA y automatización
- Servicios: Asistente IA, Bots Omnicanal, Campañas Garantizadas, Growth Simulator
- Enfoque en transformación digital y crecimiento empresarial
- Estilo profesional y premium

Pregunta del usuario: ${message}

Responde como representante oficial de Boom Digital Agency, manteniendo un tono profesional pero cercano.`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente profesional de Boom Digital Agency, especializado en soluciones de IA y transformación digital. Responde siempre en español de manera clara y útil.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  showTypingIndicator() {
    const typingIndicator = this.querySelector('#typingIndicator');
    typingIndicator.classList.remove('hidden');
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const typingIndicator = this.querySelector('#typingIndicator');
    typingIndicator.classList.add('hidden');
  }

  scrollToBottom() {
    const messagesContainer = this.querySelector('#messagesContainer');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  updateSendButtonState() {
    const sendMessage = this.querySelector('#sendMessage');
    const messageInput = this.querySelector('#messageInput');
    sendMessage.disabled = !messageInput.value.trim() || this.isTyping;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  formatMessage(text) {
    // Simple formatting for URLs and basic markdown
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="text-primary-blue underline">$1</a>');
  }
}

customElements.define('chat-bot', ChatBot);
