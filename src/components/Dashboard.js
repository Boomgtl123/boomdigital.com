// Dashboard Component
class DashboardSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.metrics = {
      users: 0,
      campaigns: 0,
      revenue: 0,
      growth: 0
    };
  }

  connectedCallback() {
    this.render();
    this.setupDashboard();
    this.startLiveUpdates();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 6rem 0;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          color: white;
        }

        .dashboard-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #94A3B8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .metric-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .metric-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(55, 198, 255, 0.3);
          transform: translateY(-5px);
        }

        .metric-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #37C6FF, #2BA3D9);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .metric-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #37C6FF;
          margin-bottom: 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .metric-label {
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .metric-trend {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .trend-up {
          color: #10B981;
        }

        .trend-down {
          color: #EF4444;
        }

        .charts-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .chart-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .chart-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .chart-placeholder {
          height: 200px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748B;
          font-size: 0.9rem;
        }

        .live-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
          color: #37C6FF;
          font-weight: 500;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #37C6FF;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(55, 198, 255, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(55, 198, 255, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(55, 198, 255, 0);
          }
        }

        .dashboard-cta {
          text-align: center;
          margin-top: 4rem;
        }

        .btn-dashboard {
          background: #37C6FF;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-dashboard:hover {
          background: #2BA3D9;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(55, 198, 255, 0.3);
        }

        @media (max-width: 768px) {
          .dashboard-section {
            padding: 0 1rem;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .charts-container {
            grid-template-columns: 1fr;
          }

          .metric-card {
            padding: 1.5rem;
          }
        }

        /* Animation classes */
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      </style>

      <section class="dashboard-section" id="dashboard">
        <div class="section-header">
          <h2 class="section-title">Dashboard IA en Tiempo Real</h2>
          <p class="section-subtitle">
            Monitorea el rendimiento de tu negocio con métricas actualizadas 
            y análisis predictivo impulsado por inteligencia artificial
          </p>
        </div>

        <div class="dashboard-grid">
          <div class="metric-card" data-metric="users">
            <div class="metric-icon">👥</div>
            <div class="metric-value" id="usersValue">0</div>
            <div class="metric-label">Usuarios Activos</div>
            <div class="metric-trend trend-up">
              <span>↑</span>
              <span id="usersTrend">12%</span>
            </div>
          </div>

          <div class="metric-card" data-metric="campaigns">
            <div class="metric-icon">📊</div>
            <div class="metric-value" id="campaignsValue">0</div>
            <div class="metric-label">Campañas Activas</div>
            <div class="metric-trend trend-up">
              <span>↑</span>
              <span id="campaignsTrend">8%</span>
            </div>
          </div>

          <div class="metric-card" data-metric="revenue">
            <div class="metric-icon">💰</div>
            <div class="metric-value" id="revenueValue">$0</div>
            <div class="metric-label">Ingresos Mensuales</div>
            <div class="metric-trend trend-up">
              <span>↑</span>
              <span id="revenueTrend">15%</span>
            </div>
          </div>

          <div class="metric-card" data-metric="growth">
            <div class="metric-icon">📈</div>
            <div class="metric-value" id="growthValue">0%</div>
            <div class="metric-label">Crecimiento Trimestral</div>
            <div class="metric-trend trend-up">
              <span>↑</span>
              <span id="growthTrend">5%</span>
            </div>
          </div>
        </div>

        <div class="charts-container">
          <div class="chart-card">
            <h3 class="chart-title">Rendimiento de Campañas</h3>
            <div class="chart-placeholder">
              Gráfico de rendimiento interactivo
            </div>
          </div>

          <div class="chart-card">
            <h3 class="chart-title">Tendencias de Usuarios</h3>
            <div class="chart-placeholder">
              Gráfico de tendencias en tiempo real
            </div>
          </div>
        </div>

        <div class="live-indicator">
          <div class="pulse-dot"></div>
          <span>Datos actualizados en tiempo real</span>
        </div>

        <div class="dashboard-cta">
          <button class="btn-dashboard" id="dashboardCTA">
            Acceder al Dashboard Completo
          </button>
        </div>
      </section>
    `;
  }

  setupDashboard() {
    // Initialize metrics with realistic values
    this.metrics = {
      users: 12457,
      campaigns: 342,
      revenue: 125000,
      growth: 23.5
    };

    // Animate metric cards
    const metricCards = this.shadowRoot.querySelectorAll('.metric-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
            this.animateMetricValue(entry.target.getAttribute('data-metric'));
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    metricCards.forEach(card => {
      observer.observe(card);
    });

    // Setup CTA button
    const ctaButton = this.shadowRoot.getElementById('dashboardCTA');
    ctaButton.addEventListener('click', () => {
      this.handleDashboardAccess();
    });
  }

  animateMetricValue(metricType) {
    const valueElement = this.shadowRoot.getElementById(`${metricType}Value`);
    if (!valueElement) return;

    const targetValue = this.metrics[metricType];
    const duration = 2000;
    const step = targetValue / (duration / 16);
    let current = 0;

    const updateValue = () => {
      current += step;
      if (current < targetValue) {
        if (metricType === 'revenue') {
          valueElement.textContent = `$${Math.floor(current).toLocaleString()}`;
        } else if (metricType === 'growth') {
          valueElement.textContent = `${Math.floor(current)}%`;
        } else {
          valueElement.textContent = Math.floor(current).toLocaleString();
        }
        requestAnimationFrame(updateValue);
      } else {
        if (metricType === 'revenue') {
          valueElement.textContent = `$${targetValue.toLocaleString()}`;
        } else if (metricType === 'growth') {
          valueElement.textContent = `${targetValue}%`;
        } else {
          valueElement.textContent = targetValue.toLocaleString();
        }
      }
    };

    updateValue();
  }

  startLiveUpdates() {
    // Simulate live data updates
    setInterval(() => {
      this.updateLiveMetrics();
    }, 5000);
  }

  updateLiveMetrics() {
    // Simulate small fluctuations in metrics
    const fluctuation = (base, maxChange) => {
      const change = (Math.random() - 0.5) * maxChange;
      return Math.max(0, base + change);
    };

    this.metrics.users = fluctuation(12457, 50);
    this.metrics.campaigns = fluctuation(342, 5);
    this.metrics.revenue = fluctuation(125000, 1000);
    this.metrics.growth = fluctuation(23.5, 0.5);

    // Update display values
    const usersValue = this.shadowRoot.getElementById('usersValue');
    const campaignsValue = this.shadowRoot.getElementById('campaignsValue');
    const revenueValue = this.shadowRoot.getElementById('revenueValue');
    const growthValue = this.shadowRoot.getElementById('growthValue');

    if (usersValue) usersValue.textContent = Math.floor(this.metrics.users).toLocaleString();
    if (campaignsValue) campaignsValue.textContent = Math.floor(this.metrics.campaigns).toLocaleString();
    if (revenueValue) revenueValue.textContent = `$${Math.floor(this.metrics.revenue).toLocaleString()}`;
    if (growthValue) growthValue.textContent = `${this.metrics.growth.toFixed(1)}%`;
  }

  handleDashboardAccess() {
    const event = new CustomEvent('dashboard-access-requested', {
      bubbles: true,
      detail: { action: 'access-dashboard' }
    });
    this.dispatchEvent(event);
  }
}

customElements.define('dashboard-section', DashboardSection);
