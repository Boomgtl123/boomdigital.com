// CEO Panel Component
class CEOPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isAuthenticated = false;
    this.websiteContent = null;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    this.checkAuthState();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 10000;
          backdrop-filter: blur(10px);
        }

        .ceo-panel {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 16px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          width: 90%;
          max-width: 1200px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .panel-header {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          color: white;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .panel-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .ceo-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(55, 198, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .verified-icon {
          width: 16px;
          height: 16px;
          background: #37C6FF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .panel-content {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .sidebar {
          width: 300px;
          background: #F8FAFC;
          border-right: 1px solid #E2E8F0;
          padding: 2rem;
          overflow-y: auto;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          color: #64748B;
          font-weight: 500;
        }

        .nav-item:hover {
          background: #E2E8F0;
          color: #000000;
        }

        .nav-item.active {
          background: #37C6FF;
          color: white;
        }

        .nav-icon {
          width: 20px;
          height: 20px;
        }

        .main-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .section {
          display: none;
        }

        .section.active {
          display: block;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #000000;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
        }

        .form-input, .form-textarea, .form-select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus, .form-textarea:focus, .form-select:focus {
          outline: none;
          border-color: #37C6FF;
          box-shadow: 0 0 0 3px rgba(55, 198, 255, 0.1);
        }

        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }

        .color-picker {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .color-input {
          width: 60px;
          height: 40px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .color-preview {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 2px solid #E2E8F0;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #37C6FF;
          color: white;
        }

        .btn-primary:hover {
          background: #2BA3D9;
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: #F1F5F9;
          color: #64748B;
        }

        .btn-secondary:hover {
          background: #E2E8F0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: #F8FAFC;
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid #37C6FF;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #64748B;
          font-size: 0.9rem;
        }

        .export-btn {
          background: #10B981;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s ease;
        }

        .export-btn:hover {
          background: #059669;
        }

        .auth-section {
          padding: 3rem;
          text-align: center;
        }

        .auth-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .auth-subtitle {
          color: #64748B;
          margin-bottom: 2rem;
        }

        .auth-form {
          max-width: 400px;
          margin: 0 auto;
        }

        .auth-input {
          width: 100%;
          padding: 1rem;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .auth-input:focus {
          outline: none;
          border-color: #37C6FF;
        }

        .auth-btn {
          width: 100%;
          padding: 1rem;
          background: #37C6FF;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .auth-btn:hover {
          background: #2BA3D9;
        }

        .error-message {
          color: #EF4444;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          text-align: left;
        }

        .success-message {
          color: #10B981;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .panel-content {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #E2E8F0;
          }
        }
      </style>

      <div class="ceo-panel">
        <div class="panel-header">
          <div class="panel-title">
            Panel de Control CEO
            <div class="ceo-badge">
              <div class="verified-icon">✓</div>
              Boom Digital CEO
            </div>
          </div>
          <button class="close-btn" id="closePanel">×</button>
        </div>

        <div class="panel-content">
          <div class="sidebar">
            <div class="nav-item active" data-section="content">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              Contenido del Sitio
            </div>
            <div class="nav-item" data-section="analytics">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              Analytics
            </div>
            <div class="nav-item" data-section="design">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
              </svg>
              Diseño y Colores
            </div>
          </div>

          <div class="main-content">
            <!-- Authentication Section -->
            <div class="section active" id="authSection">
              <div class="auth-section">
                <h2 class="auth-title">Acceso Exclusivo CEO</h2>
                <p class="auth-subtitle">Ingresa tus credenciales para acceder al panel de control</p>
                <form class="auth-form" id="authForm">
                  <input type="email" class="auth-input" placeholder="Correo electrónico" id="authEmail" required>
                  <input type="password" class="auth-input" placeholder="Contraseña" id="authPassword" required>
                  <button type="submit" class="auth-btn">Acceder</button>
                  <div class="error-message" id="authError"></div>
                </form>
              </div>
            </div>

            <!-- Content Management Section -->
            <div class="section" id="contentSection">
              <h2 class="section-title">Gestión de Contenido</h2>
              
              <div class="form-group">
                <label class="form-label">Título Principal (Hero)</label>
                <input type="text" class="form-input" id="heroTitle" placeholder="Transformamos tu Presencia Digital con IA">
              </div>

              <div class="form-group">
                <label class="form-label">Subtítulo (Hero)</label>
                <textarea class="form-textarea" id="heroSubtitle" placeholder="Soluciones inteligentes que impulsan el crecimiento de tu empresa"></textarea>
              </div>

              <div class="form-group">
                <label class="form-label">Texto del Botón CTA</label>
                <input type="text" class="form-input" id="ctaButtonText" placeholder="Comenzar Ahora">
              </div>

              <button class="btn btn-primary" id="saveContent">Guardar Cambios</button>
            </div>

            <!-- Analytics Section -->
            <div class="section" id="analyticsSection">
              <h2 class="section-title">Estadísticas del Sitio</h2>
              
              <div class="stats-grid">
                <div class="stat-card">
                  <div class="stat-value" id="totalVisits">0</div>
                  <div class="stat-label">Visitas Totales</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value" id="uniqueVisitors">0</div>
                  <div class="stat-label">Visitantes Únicos</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value" id="conversionRate">0%</div>
                  <div class="stat-label">Tasa de Conversión</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value" id="bounceRate">0%</div>
                  <div class="stat-label">Tasa de Rebote</div>
                </div>
              </div>

              <button class="export-btn" id="exportData">Exportar Datos</button>
            </div>

            <!-- Design Section -->
            <div class="section" id="designSection">
              <h2 class="section-title">Personalización de Diseño</h2>
              
              <div class="form-group">
                <label class="form-label">Color Principal</label>
                <div class="color-picker">
                  <input type="color" class="color-input" id="primaryColor" value="#37C6FF">
                  <div class="color-preview" id="primaryColorPreview" style="background: #37C6FF"></div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Color de Fondo</label>
                <div class="color-picker">
                  <input type="color" class="color-input" id="backgroundColor" value="#FFFFFF">
                  <div class="color-preview" id="backgroundColorPreview" style="background: #FFFFFF"></div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Color de Texto</label>
                <div class="color-picker">
                  <input type="color" class="color-input" id="textColor" value="#000000">
                  <div class="color-preview" id="textColorPreview" style="background: #000000"></div>
                </div>
              </div>

              <button class="btn btn-primary" id="saveDesign">Aplicar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    // Close panel
    const closeBtn = this.shadowRoot.getElementById('closePanel');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.hide();
      });
    }

    // Navigation
    const navItems = this.shadowRoot.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (!this.isAuthenticated) return;
        
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const section = item.getAttribute('data-section');
        this.showSection(section);
      });
    });

    // Authentication form
    const authForm = this.shadowRoot.getElementById('authForm');
    if (authForm) {
      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleAuth();
      });
    }

    // Save content
    const saveContentBtn = this.shadowRoot.getElementById('saveContent');
    if (saveContentBtn) {
      saveContentBtn.addEventListener('click', () => {
        this.saveContentChanges();
      });
    }

    // Save design
    const saveDesignBtn = this.shadowRoot.getElementById('saveDesign');
    if (saveDesignBtn) {
      saveDesignBtn.addEventListener('click', () => {
        this.saveDesignChanges();
      });
    }

    // Export data
    const exportBtn = this.shadowRoot.getElementById('exportData');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        this.exportAnalyticsData();
      });
    }

    // Color pickers
    const colorInputs = this.shadowRoot.querySelectorAll('.color-input');
    colorInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const previewId = e.target.id + 'Preview';
        const preview = this.shadowRoot.getElementById(previewId);
        if (preview) {
          preview.style.background = e.target.value;
        }
      });
    });
  }

  checkAuthState() {
    // Check if user is already authenticated
    const auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      if (user && user.email === 'boomdigitaleeuu@gmail.com') {
        this.isAuthenticated = true;
        this.showAuthenticatedView();
        this.loadWebsiteContent();
      }
    });
  }

  handleAuth() {
    const email = this.shadowRoot.getElementById('authEmail').value;
    const password = this.shadowRoot.getElementById('authPassword').value;
    const errorElement = this.shadowRoot.getElementById('authError');

    if (email !== 'boomdigitaleeuu@gmail.com') {
      errorElement.textContent = 'Acceso restringido. Solo disponible para el CEO.';
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.showAuthenticatedView();
        this.loadWebsiteContent();
      })
      .catch((error) => {
        errorElement.textContent = 'Error de autenticación: ' + error.message;
      });
  }

  showAuthenticatedView() {
    const authSection = this.shadowRoot.getElementById('authSection');
    const contentSection = this.shadowRoot.getElementById('contentSection');
    
    if (authSection) authSection.classList.remove('active');
    if (contentSection) contentSection.classList.add('active');
  }

  showSection(sectionName) {
    const sections = this.shadowRoot.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    const targetSection = this.shadowRoot.getElementById(sectionName + 'Section');
    if (targetSection) {
      targetSection.classList.add('active');
      
      if (sectionName === 'analytics') {
        this.loadAnalyticsData();
      }
    }
  }

  async loadWebsiteContent() {
    try {
      const content = await firebase.getWebsiteContent();
      this.websiteContent = content;
      this.populateContentForm(content);
    } catch (error) {
      console.error('Error loading website content:', error);
    }
  }

  populateContentForm(content) {
    if (content.hero) {
      const heroTitle = this.shadowRoot.getElementById('heroTitle');
      const heroSubtitle = this.shadowRoot.getElementById('heroSubtitle');
      const ctaButtonText = this.shadowRoot.getElementById('ctaButtonText');
      
      if (heroTitle && content.hero.title) heroTitle.value = content.hero.title;
      if (heroSubtitle && content.hero.subtitle) heroSubtitle.value = content.hero.subtitle;
      if (ctaButtonText && content.hero.ctaText) ctaButtonText.value = content.hero.ctaText;
    }

    if (content.colors) {
      const primaryColor = this.shadowRoot.getElementById('primaryColor');
      const backgroundColor = this.shadowRoot.getElementById('backgroundColor');
      const textColor = this.shadowRoot.getElementById('textColor');
      
      if (primaryColor && content.colors.primary) primaryColor.value = content.colors.primary;
      if (backgroundColor && content.colors.background) backgroundColor.value = content.colors.background;
      if (textColor && content.colors.text) textColor.value = content.colors.text;
    }
  }

  async saveContentChanges() {
    const updates = {
      hero: {
        title: this.shadowRoot.getElementById('heroTitle').value,
        subtitle: this.shadowRoot.getElementById('heroSubtitle').value,
        ctaText: this.shadowRoot.getElementById('ctaButtonText').value
      }
    };

    try {
      await firebase.updateWebsiteContent(updates);
      this.showNotification('Contenido actualizado exitosamente', 'success');
      
      // Dispatch event to update components
      const event = new CustomEvent('content-updated', {
        bubbles: true,
        detail: { content: updates }
      });
      this.dispatchEvent(event);
    } catch (error) {
      this.showNotification('Error al guardar cambios: ' + error.message, 'error');
    }
  }

  async saveDesignChanges() {
    const updates = {
      colors: {
        primary: this.shadowRoot.getElementById('primaryColor').value,
        background: this.shadowRoot.getElementById('backgroundColor').value,
        text: this.shadowRoot.getElementById('textColor').value
      }
    };

    try {
      await firebase.updateWebsiteContent(updates);
      this.showNotification('Diseño actualizado exitosamente', 'success');
      
      // Dispatch event to update components
      const event = new CustomEvent('design-updated', {
        bubbles: true,
        detail: { colors: updates.colors }
      });
      this.dispatchEvent(event);
    } catch (error) {
      this.showNotification('Error al guardar cambios: ' + error.message, 'error');
    }
  }

  async loadAnalyticsData() {
    // Simulate analytics data loading
    setTimeout(() => {
      const totalVisits = this.shadowRoot.getElementById('totalVisits');
      const uniqueVisitors = this.shadowRoot.getElementById('uniqueVisitors');
      const conversionRate = this.shadowRoot.getElementById('conversionRate');
      const bounceRate = this.shadowRoot.getElementById('bounceRate');
      
      if (totalVisits) totalVisits.textContent = '1,247';
      if (uniqueVisitors) uniqueVisitors.textContent = '892';
      if (conversionRate) conversionRate.textContent = '12.5%';
      if (bounceRate) bounceRate.textContent = '34.2%';
    }, 1000);
  }

  exportAnalyticsData() {
    const data = {
      totalVisits: '1,247',
      uniqueVisitors: '892',
      conversionRate: '12.5%',
      bounceRate: '34.2%',
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    this.showNotification('Datos exportados exitosamente', 'success');
  }

  showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10001;
      background: ${type === 'success' ? '#10B981' : '#EF4444'};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  show() {
    this.style.display = 'block';
  }

  hide() {
    this.style.display = 'none';
  }
}

customElements.define('ceo-panel', CEOPanel);
