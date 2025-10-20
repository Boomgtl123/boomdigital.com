// Header Component
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .header-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #000;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-accent {
          color: #37C6FF;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: #1E293B;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #37C6FF;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #37C6FF;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn-register {
          background: #37C6FF;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-register:hover {
          background: #2BA3D9;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(55, 198, 255, 0.3);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #1E293B;
        }

        .ceo-access-btn {
          background: #000;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-left: 1rem;
        }

        .ceo-access-btn:hover {
          background: #333;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 1rem;
          }

          .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-top: 1px solid rgba(0, 0, 0, 0.1);
          }

          .nav-menu.active {
            display: flex;
          }

          .mobile-menu-btn {
            display: block;
          }

          .ceo-access-btn {
            margin-left: 0;
            margin-top: 1rem;
          }
        }
      </style>

      <header class="header">
        <div class="header-container">
          <a href="#" class="logo">
            BOOM<span class="logo-accent">DIGITAL</span>
          </a>

          <button class="mobile-menu-btn" id="mobileMenuBtn">
            ☰
          </button>

          <nav class="nav-menu" id="navMenu">
            <a href="#services" class="nav-link">Servicios</a>
            <a href="#dashboard" class="nav-link">Dashboard</a>
            <a href="#club" class="nav-link">Club IA</a>
            <a href="#contact" class="nav-link">Contacto</a>
            
            <button class="ceo-access-btn" id="ceoAccessBtn">
              Panel CEO
            </button>
            
            <a href="#register" class="btn-register">Registrarse</a>
          </nav>
        </div>
      </header>
    `;
  }

  setupEventListeners() {
    const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
    const navMenu = this.shadowRoot.getElementById('navMenu');
    const ceoAccessBtn = this.shadowRoot.getElementById('ceoAccessBtn');
    const header = this.shadowRoot.querySelector('.header');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // CEO panel access
    ceoAccessBtn.addEventListener('click', () => {
      this.openCEOPanel();
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });

    // Smooth scroll for navigation links
    this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  }

  openCEOPanel() {
    const event = new CustomEvent('open-ceo-panel', {
      bubbles: true,
      detail: { action: 'open' }
    });
    this.dispatchEvent(event);
  }
}

customElements.define('header-component', HeaderComponent);
