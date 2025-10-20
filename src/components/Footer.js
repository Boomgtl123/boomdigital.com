// Footer Component
class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupSocialLinks();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #000000;
          color: white;
        }

        .footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-accent {
          color: #37C6FF;
        }

        .footer-description {
          color: #94A3B8;
          line-height: 1.6;
          max-width: 300px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #37C6FF;
          transform: translateY(-2px);
        }

        .footer-column h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          margin-bottom: 0.75rem;
        }

        .footer-link a {
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-link a:hover {
          color: #37C6FF;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: #94A3B8;
          font-size: 0.9rem;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        .legal-link {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #37C6FF;
        }

        .back-to-top {
          background: #37C6FF;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .back-to-top:hover {
          background: #2BA3D9;
          transform: translateY(-2px);
        }

        .newsletter-form {
          margin-top: 1rem;
        }

        .newsletter-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
        }

        .newsletter-input::placeholder {
          color: #94A3B8;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #37C6FF;
        }

        .newsletter-btn {
          width: 100%;
          background: #37C6FF;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s ease;
        }

        .newsletter-btn:hover {
          background: #2BA3D9;
        }

        .contact-info {
          margin-top: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: #94A3B8;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1rem 1.5rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }
        }
      </style>

      <footer class="footer">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">
              BOOM<span class="logo-accent">.</span>DIGITAL
            </div>
            <p class="footer-description">
              Transformamos tu presencia digital con soluciones innovadoras 
              impulsadas por inteligencia artificial y automatización.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-column">
            <h3>Servicios</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#services">Asistente IA</a></li>
              <li class="footer-link"><a href="#services">Bots Omnicanal</a></li>
              <li class="footer-link"><a href="#services">Campañas Garantizadas</a></li>
              <li class="footer-link"><a href="#services">Growth Simulator</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Empresa</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#about">Sobre Nosotros</a></li>
              <li class="footer-link"><a href="#club">Club IA Boom</a></li>
              <li class="footer-link"><a href="#careers">Carreras</a></li>
              <li class="footer-link"><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Contacto</h3>
            <div class="contact-info">
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@boomdigital.com</span>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V8h2v4z"/>
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div class="newsletter-form">
              <input type="email" class="newsletter-input" placeholder="Tu correo electrónico">
              <button class="newsletter-btn">Suscribirse</button>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright">
            © 2024 Boom Digital Agency. Todos los derechos reservados.
          </div>
          <div class="footer-legal">
            <a href="#" class="legal-link">Política de Privacidad</a>
            <a href="#" class="legal-link">Términos de Servicio</a>
            <a href="#" class="legal-link">Cookies</a>
          </div>
          <button class="back-to-top" id="backToTop">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
            Volver Arriba
          </button>
        </div>
      </footer>
    `;
  }

  setupSocialLinks() {
    const backToTopBtn = this.shadowRoot.getElementById('backToTop');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const newsletterBtn = this.shadowRoot.querySelector('.newsletter-btn');
    const newsletterInput = this.shadowRoot.querySelector('.newsletter-input');
    
    if (newsletterBtn && newsletterInput) {
      newsletterBtn.addEventListener('click', () => {
        this.handleNewsletterSignup(newsletterInput.value);
      });

      newsletterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.handleNewsletterSignup(newsletterInput.value);
        }
      });
    }
  }

  handleNewsletterSignup(email) {
    if (email && this.isValidEmail(email)) {
      const event = new CustomEvent('newsletter-signup', {
        bubbles: true,
        detail: { email: email }
      });
      this.dispatchEvent(event);
      newsletterInput.value = '';
      this.showNotification('¡Gracias por suscribirte!', 'success');
    } else {
      this.showNotification('Por favor ingresa un email válido', 'error');
    }
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
      z-index: 1000;
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
}

customElements.define('footer-component', FooterComponent);
