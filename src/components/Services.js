// Services Component
class ServicesSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupServiceCards();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 6rem 0;
          background: #FFFFFF;
        }

        .services-section {
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
          color: #000;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #64748B;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #37C6FF, #2BA3D9);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(55, 198, 255, 0.15);
          border-color: #37C6FF;
        }

        .service-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #37C6FF, #2BA3D9);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #000;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #64748B;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0 0;
          text-align: left;
        }

        .service-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: #475569;
          font-size: 0.9rem;
        }

        .feature-check {
          color: #37C6FF;
          font-weight: bold;
        }

        .service-cta {
          margin-top: 2rem;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid #37C6FF;
          color: #37C6FF;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .service-cta:hover {
          background: #37C6FF;
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 0 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 2rem 1.5rem;
          }
        }

        /* Animation classes */
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      </style>

      <section class="services-section" id="services">
        <div class="section-header">
          <h2 class="section-title">Nuestros Servicios</h2>
          <p class="section-subtitle">
            Soluciones innovadoras impulsadas por inteligencia artificial 
            para transformar tu negocio digital
          </p>
        </div>

        <div class="services-grid">
          <div class="service-card" data-service="ai-assistant">
            <div class="service-icon">🤖</div>
            <h3 class="service-title" id="service1Title">Asistente IA</h3>
            <p class="service-description" id="service1Desc">
              Asistente virtual inteligente que automatiza tareas, responde consultas 
              y mejora la productividad de tu equipo 24/7.
            </p>
            <ul class="service-features">
              <li class="service-feature">
                <span class="feature-check">✓</span> Respuestas instantáneas
              </li>
              <li class="service-feature">
                <span class="feature-check">✓</span> Integración multi-plataforma
              </li>
              <li class="service-feature">
                <span class="feature-check">✓</span> Aprendizaje continuo
              </li>
            </ul>
            <button class="service-cta">Más Información</button>
          </div>

          <div class="service-card" data-service="omnichannel-bots">
            <div class="service-icon">💬</div>
            <h3 class="service-title" id="service2Title">Bots Omnicanal</h3>
            <p class="service-description" id="service2Desc">
              Solución de chatbots integrada en todos tus canales de comunicación 
              para una experiencia de cliente unificada y eficiente.
            </p>
            <ul class="service-features">
              <li class="service-feature">
                <span class="feature-check">✓</span> WhatsApp, Messenger, Web
              </li>
              <li class="service-feature">
                <span class="feature-check">✓</span> Contexto conversacional
              </li>
              <li class="service-feature">
                <span class="feature-check">✓</span> Escalación humana
              </li>
            </ul>
            <button class="service-cta">Más Información</button>
          </div>

          <div class="service-card" data-service="guaranteed-campaigns">
            <div class="service-icon">🎯</div>
            <h3 class="service-title" id="service3Title">Campañas Garantizadas</h3>
            <p class="service-description" id="service3Desc">
              Estrategias de marketing digital con resultados medibles y garantizados. 
              Maximiza tu ROI con nuestro enfoque data-driven.
            </p>
            <ul class="service-features">
              <li class="service-feature">
                <span class="feature-check">✓</span> KPI específicos
              </li>
              <li class="service-feature">
                <span class="feature-check">✓</span> Optimización en tiempo real
              </li>
              <li class="service-feature">
                <span class="feature-check">✓</span> Reportes detallados
              </li>
            </ul>
            <button class="service-cta">Más Información</button>
          </div>

          <div class="service-card" data-service="growth-simulator">
            <div class="service-icon">📈</div>
            <h3 class="service-title" id="service4Title">Growth Simulator</h3>
            <p class="service-description" id="service4Desc">
              Simulación predictiva que analiza múltiples escenarios para optimizar 
              tu estrategia de crecimiento y tomar decisiones informadas.
            </p>
            <ul class="service-features">
              <li class="service-feature">
                <span class="feature-check">✓</span> Análisis predictivo
              </li>
              <li class="service-feature">
                <span class="feature-check">✓</span> Escenarios múltiples
              </li>
              <li class="service-feature">
                <span class="feature-check">✓</span> Recomendaciones accionables
              </li>
            </ul>
            <button class="service-cta">Más Información</button>
          </div>
        </div>
      </section>
    `;
  }

  setupServiceCards() {
    const serviceCards = this.shadowRoot.querySelectorAll('.service-card');
    
    // Add intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    serviceCards.forEach(card => {
      observer.observe(card);
      
      // Add click event for service cards
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('service-cta')) {
          this.handleServiceClick(card.getAttribute('data-service'));
        }
      });

      // Add CTA button events
      const ctaButton = card.querySelector('.service-cta');
      ctaButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleServiceCTAClick(card.getAttribute('data-service'));
      });
    });
  }

  handleServiceClick(serviceType) {
    const event = new CustomEvent('service-selected', {
      bubbles: true,
      detail: { 
        service: serviceType,
        action: 'view-details'
      }
    });
    this.dispatchEvent(event);
  }

  handleServiceCTAClick(serviceType) {
    const event = new CustomEvent('service-cta-clicked', {
      bubbles: true,
      detail: { 
        service: serviceType,
        action: 'get-info'
      }
    });
    this.dispatchEvent(event);
  }

  updateContent(content) {
    if (content && content.services) {
      const services = content.services;
      
      // Update service titles and descriptions
      for (let i = 1; i <= 4; i++) {
        const titleElement = this.shadowRoot.getElementById(`service${i}Title`);
        const descElement = this.shadowRoot.getElementById(`service${i}Desc`);
        
        if (titleElement && services[`service${i}`]) {
          titleElement.textContent = services[`service${i}`].title;
        }
        
        if (descElement && services[`service${i}`]) {
          descElement.textContent = services[`service${i}`].description;
        }
      }
    }
  }
}

customElements.define('services-section', ServicesSection);
