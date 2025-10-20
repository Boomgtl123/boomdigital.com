// CTA Section Component
class CTASection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupAnimations();
    this.setupCTAButton();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #000000;
          color: white;
        }

        .cta-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          z-index: 1;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(30px);
        }

        .cta-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(135deg, #FFFFFF 0%, #37C6FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-subtitle {
          font-size: 1.3rem;
          color: #94A3B8;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta-button {
          background: #37C6FF;
          color: white;
          border: none;
          padding: 1.25rem 3rem;
          border-radius: 12px;
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover {
          background: #2BA3D9;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(55, 198, 255, 0.3);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:active {
          transform: translateY(-1px);
        }

        .cta-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-top: 4rem;
          opacity: 0;
          transform: translateY(30px);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #37C6FF;
          margin-bottom: 0.5rem;
          display: block;
        }

        .stat-label {
          color: #94A3B8;
          font-size: 1rem;
          font-weight: 500;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .floating-element {
          position: absolute;
          background: rgba(55, 198, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
          width: 60px;
          height: 60px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          border: 2px solid rgba(55, 198, 255, 0.3);
          border-radius: 50%;
          animation: pulse-ring 3s ease-out infinite;
          pointer-events: none;
        }

        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        /* Animation classes */
        .animate-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s ease;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 4rem 1rem;
          }

          .cta-stats {
            flex-direction: column;
            gap: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      </style>

      <section class="cta-section" id="cta">
        <div class="cta-background"></div>
        
        <div class="floating-elements">
          <div class="floating-element"></div>
          <div class="floating-element"></div>
          <div class="floating-element"></div>
        </div>

        <div class="cta-content">
          <h2 class="cta-title">¿Listo para Transformar tu Negocio?</h2>
          <p class="cta-subtitle">
            Únete a más de 500 empresas que ya están revolucionando su presencia digital 
            con nuestras soluciones de inteligencia artificial y automatización.
          </p>
          
          <button class="cta-button" id="mainCTA">
            Comenzar Ahora
            <div class="pulse-ring"></div>
          </button>

          <div class="cta-stats">
            <div class="stat-item">
              <span class="stat-number" id="statClients">500+</span>
              <span class="stat-label">Clientes Satisfechos</span>
            </div>
            <div class="stat-item">
              <span class="stat-number" id="statROI">45%</span>
              <span class="stat-label">ROI Promedio</span>
            </div>
            <div class="stat-item">
              <span class="stat-number" id="statGrowth">3x</span>
              <span class="stat-label">Crecimiento Acelerado</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const content = this.shadowRoot.querySelector('.cta-content');
          const stats = this.shadowRoot.querySelector('.cta-stats');
          
          if (content) {
            setTimeout(() => {
              content.classList.add('animate-in');
            }, 200);
          }
          
          if (stats) {
            setTimeout(() => {
              stats.classList.add('animate-in');
            }, 800);
          }

          this.animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this);
  }

  setupCTAButton() {
    const ctaButton = this.shadowRoot.getElementById('mainCTA');
    if (ctaButton) {
      ctaButton.addEventListener('click', () => {
        this.handleCTAClick();
      });
    }
  }

  animateStats() {
    const clientsStat = this.shadowRoot.getElementById('statClients');
    const roiStat = this.shadowRoot.getElementById('statROI');
    const growthStat = this.shadowRoot.getElementById('statGrowth');

    if (clientsStat) this.animateCounter(clientsStat, 0, 500, 2000);
    if (roiStat) this.animateCounter(roiStat, 0, 45, 1500);
    if (growthStat) this.animateCounter(growthStat, 0, 3, 1000);
  }

  animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      let value;
      if (element.id === 'statGrowth') {
        value = Math.floor(progress * end);
        element.textContent = value + 'x';
      } else {
        value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.id === 'statROI' ? '%' : '+');
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  handleCTAClick() {
    const event = new CustomEvent('cta-clicked', {
      bubbles: true,
      detail: { 
        action: 'main-cta',
        section: 'cta'
      }
    });
    this.dispatchEvent(event);
  }

  updateContent(content) {
    if (content && content.cta) {
      const title = this.shadowRoot.querySelector('.cta-title');
      const subtitle = this.shadowRoot.querySelector('.cta-subtitle');
      const button = this.shadowRoot.querySelector('.cta-button');

      if (content.cta.title && title) {
        title.textContent = content.cta.title;
      }
      if (content.cta.subtitle && subtitle) {
        subtitle.textContent = content.cta.subtitle;
      }
      if (content.cta.buttonText && button) {
        button.textContent = content.cta.buttonText;
      }
    }
  }
}

customElements.define('cta-section', CTASection);
