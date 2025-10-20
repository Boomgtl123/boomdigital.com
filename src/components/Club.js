// Club Component
class ClubSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentSlide = 0;
    this.testimonials = [];
  }

  connectedCallback() {
    this.render();
    this.setupSlider();
    this.setupBenefits();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 6rem 0;
          background: #FFFFFF;
        }

        .club-section {
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

        .club-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .testimonials-container {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: #F8FAFC;
          padding: 2rem;
        }

        .testimonials-slider {
          display: flex;
          transition: transform 0.5s ease;
        }

        .testimonial-slide {
          min-width: 100%;
          padding: 1rem;
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.5s ease;
        }

        .testimonial-slide.active {
          opacity: 1;
          transform: translateX(0);
        }

        .testimonial-content {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .testimonial-content::before {
          content: '"';
          font-size: 4rem;
          color: #37C6FF;
          position: absolute;
          top: -1rem;
          left: 1rem;
          opacity: 0.3;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #37C6FF, #2BA3D9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-weight: 700;
          color: #000;
          margin-bottom: 0.25rem;
        }

        .author-company {
          color: #64748B;
          font-size: 0.9rem;
        }

        .slider-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .slider-btn {
          background: #37C6FF;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-btn:hover {
          background: #2BA3D9;
          transform: scale(1.1);
        }

        .slider-dots {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #CBD5E1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          background: #37C6FF;
          transform: scale(1.2);
        }

        .benefits-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .benefit-card {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .benefit-card:hover {
          border-color: #37C6FF;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(55, 198, 255, 0.1);
        }

        .benefit-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .benefit-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #37C6FF, #2BA3D9);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #000;
        }

        .benefit-description {
          color: #64748B;
          line-height: 1.6;
        }

        .club-cta {
          text-align: center;
          margin-top: 4rem;
        }

        .btn-club {
          background: #000;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-club:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .club-section {
            padding: 0 1rem;
          }

          .club-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .benefit-card {
            padding: 1.5rem;
          }
        }

        /* Animation classes */
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      </style>

      <section class="club-section" id="club">
        <div class="section-header">
          <h2 class="section-title">Club IA Boom</h2>
          <p class="section-subtitle">
            Únete a nuestra comunidad exclusiva y accede a beneficios premium, 
            recursos avanzados y networking con líderes del sector
          </p>
        </div>

        <div class="club-content">
          <div class="testimonials-container">
            <div class="testimonials-slider" id="testimonialsSlider">
              <!-- Testimonials will be populated dynamically -->
            </div>

            <div class="slider-controls">
              <button class="slider-btn" id="prevBtn">←</button>
              <div class="slider-dots" id="sliderDots"></div>
              <button class="slider-btn" id="nextBtn">→</button>
            </div>
          </div>

          <div class="benefits-container">
            <div class="benefit-card" data-benefit="exclusive">
              <div class="benefit-header">
                <div class="benefit-icon">🎯</div>
                <h3 class="benefit-title">Acceso Exclusivo</h3>
              </div>
              <p class="benefit-description">
                Recursos y herramientas avanzadas disponibles solo para miembros 
                del club. Early access a nuevas funcionalidades.
              </p>
            </div>

            <div class="benefit-card" data-benefit="support">
              <div class="benefit-header">
                <div class="benefit-icon">💎</div>
                <h3 class="benefit-title">Soporte Premium</h3>
              </div>
              <p class="benefit-description">
                Atención prioritaria con nuestro equipo de expertos. 
                Resolución de consultas en menos de 2 horas.
              </p>
            </div>

            <div class="benefit-card" data-benefit="network">
              <div class="benefit-header">
                <div class="benefit-icon">🌐</div>
                <h3 class="benefit-title">Networking</h3>
              </div>
              <p class="benefit-description">
                Conecta con otros profesionales y empresas del sector. 
                Eventos exclusivos y oportunidades de colaboración.
              </p>
            </div>
          </div>
        </div>

        <div class="club-cta">
          <button class="btn-club" id="clubCTA">
            Unirse al Club IA Boom
          </button>
        </div>
      </section>
    `;
  }

  setupSlider() {
    // Default testimonials
    this.testimonials = [
      {
        id: 1,
        text: "Boom Digital revolucionó nuestro enfoque digital. La implementación de IA nos permitió escalar operaciones sin aumentar costos. Increíble ROI en solo 3 meses.",
        name: "Carlos Rodríguez",
        company: "TechStart Inc",
        initials: "CR"
      },
      {
        id: 2,
        text: "La automatización con IA nos ahorró más de 20 horas semanales en tareas repetitivas. El equipo puede ahora enfocarse en estrategias de crecimiento.",
        name: "María González",
        company: "Ecommerce Pro",
        initials: "MG"
      },
      {
        id: 3,
        text: "El Growth Simulator nos ayudó a tomar decisiones basadas en datos. Redujimos costos de adquisición en un 35% mientras aumentamos conversiones.",
        name: "Alejandro Torres",
        company: "Digital Solutions",
        initials: "AT"
      }
    ];

    this.renderTestimonials();
    this.setupSliderControls();
    this.startAutoSlide();
  }

  renderTestimonials() {
    const slider = this.shadowRoot.getElementById('testimonialsSlider');
    const dotsContainer = this.shadowRoot.getElementById('sliderDots');

    if (!slider || !dotsContainer) return;

    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    this.testimonials.forEach((testimonial, index) => {
      const slide = document.createElement('div');
      slide.className = `testimonial-slide ${index === this.currentSlide ? 'active' : ''}`;
      slide.innerHTML = `
        <div class="testimonial-content">
          <p class="testimonial-text">${testimonial.text}</p>
          <div class="testimonial-author">
            <div class="author-avatar">${testimonial.initials}</div>
            <div class="author-info">
              <div class="author-name">${testimonial.name}</div>
              <div class="author-company">${testimonial.company}</div>
            </div>
          </div>
        </div>
      `;
      slider.appendChild(slide);

      const dot = document.createElement('div');
      dot.className = `slider-dot ${index === this.currentSlide ? 'active' : ''}`;
      dot.addEventListener('click', () => this.goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  setupSliderControls() {
    const prevBtn = this.shadowRoot.getElementById('prevBtn');
    const nextBtn = this.shadowRoot.getElementById('nextBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prevSlide());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Setup CTA button
    const ctaButton = this.shadowRoot.getElementById('clubCTA');
    if (ctaButton) {
      ctaButton.addEventListener('click', () => {
        this.handleClubJoin();
      });
    }
  }

  setupBenefits() {
    const benefitCards = this.shadowRoot.querySelectorAll('.benefit-card');
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

    benefitCards.forEach(card => {
      observer.observe(card);
    });
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.renderTestimonials();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    this.renderTestimonials();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
    this.renderTestimonials();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  handleClubJoin() {
    const event = new CustomEvent('club-join-requested', {
      bubbles: true,
      detail: { action: 'join-club' }
    });
    this.dispatchEvent(event);
  }

  updateContent(content) {
    if (content && content.club && content.club.testimonials) {
      this.testimonials = content.club.testimonials;
      this.renderTestimonials();
    }
  }
}

customElements.define('club-section', ClubSection);
