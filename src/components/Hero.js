// Hero Component
class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupAnimations();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-top: 80px;
        }

        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(55, 198, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(55, 198, 255, 0.05) 0%, transparent 50%);
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          color: #000;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out 0.2s forwards;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          font-weight: 400;
          line-height: 1.6;
          color: #64748B;
          max-width: 600px;
          margin: 0 auto 3rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out 0.4s forwards;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out 0.6s forwards;
        }

        .btn-primary {
          background: #37C6FF;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          background: #2BA3D9;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(55, 198, 255, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #000;
          border: 2px solid #000;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-secondary:hover {
          background: #000;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 4rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.8s forwards;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #37C6FF;
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748B;
          font-weight: 500;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          background: rgba(55, 198, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 2rem 1rem;
          }

          .hero-stats {
            gap: 2rem;
            flex-wrap: wrap;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
          }
        }
      </style>

      <section class="hero-section" id="hero">
        <div class="hero-background"></div>
        
        <div class="floating-elements">
          <div class="floating-element"></div>
          <div class="floating-element"></div>
          <div class="floating-element"></div>
        </div>

        <div class="hero-container">
          <h1 class="hero-title" id="heroTitle">
            Transformamos tu Presencia Digital con IA
          </h1>
          
          <p class="hero-subtitle" id="heroSubtitle">
            Soluciones inteligentes que impulsan el crecimiento de tu empresa. 
            Automatización, análisis predictivo y estrategias personalizadas.
          </p>
          
          <div class="hero-cta">
            <button class="btn-primary" id="ctaButton">
              Comenzar Ahora
            </button>
            <button class="btn-secondary">
              Ver Demostración
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number" data-target="500">0</span>
              <span class="stat-label">Clientes Satisfechos</span>
            </div>
            <div class="stat-item">
              <span class="stat-number" data-target="150">0</span>
              <span class="stat-label">Proyectos Exitosos</span>
            </div>
            <div class="stat-item">
              <span class="stat-number" data-target="99">0</span>
              <span class="stat-label">% Satisfacción</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupAnimations() {
    // Animate counter numbers
    this.animateNumbers();
    
    // Setup CTA button event
    const ctaButton = this.shadowRoot.getElementById('ctaButton');
    ctaButton.addEventListener('click', () => {
      this.handleCTAClick();
    });
  }

  animateNumbers() {
    const counters = this.shadowRoot.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      // Start animation when element is in viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(counter);
    });
  }

  handleCTAClick() {
    const event = new CustomEvent('cta-clicked', {
      bubbles: true,
      detail: { action: 'primary-cta' }
    });
    this.dispatchEvent(event);
  }

  updateContent(content) {
    if (content && content.hero) {
      const title = this.shadowRoot.getElementById('heroTitle');
      const subtitle = this.shadowRoot.getElementById('heroSubtitle');
      const ctaButton = this.shadowRoot.getElementById('ctaButton');
      
      if (title) title.textContent = content.hero.title;
      if (subtitle) subtitle.textContent = content.hero.subtitle;
      if (ctaButton) ctaButton.textContent = content.hero.ctaText;
    }
  }
}

customElements.define('hero-section', HeroSection);
