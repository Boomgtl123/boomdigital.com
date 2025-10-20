// Main Application Entry Point
// Import components first to ensure they're registered
import './components/Header.js';
import './components/Hero.js';
import './components/Services.js';
import './components/Dashboard.js';
import './components/Club.js';
import './components/Footer.js';

// Import Firebase with error handling
let firebaseModule = null;
try {
  firebaseModule = await import('./firebase.js');
} catch (error) {
  console.warn('Firebase not configured. Running in demo mode.');
}

// Global state management
class AppState {
  constructor() {
    this.currentUser = null;
    this.websiteContent = null;
    this.isLoading = true;
    this.observers = [];
    this.firebaseAvailable = firebaseModule !== null;
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach(observer => observer(this));
  }

  setUser(user) {
    this.currentUser = user;
    this.notify();
  }

  setContent(content) {
    this.websiteContent = content;
    this.notify();
  }

  setLoading(loading) {
    this.isLoading = loading;
    this.notify();
  }
}

export const appState = new AppState();

// Initialize application
async function initApp() {
  try {
    // Setup scroll animations immediately
    setupScrollAnimations();
    
    // Setup microinteractions immediately
    setupMicrointeractions();
    
    // If Firebase is available, load dynamic content
    if (firebaseModule) {
      try {
        // Track initial page view
        await firebaseModule.trackPageView('home');
        
        // Load website content
        const content = await firebaseModule.getWebsiteContent();
        appState.setContent(content);
        
        console.log('Boom Digital Agency - Firebase integration active');
      } catch (firebaseError) {
        console.warn('Firebase error:', firebaseError);
        // Continue with default content
        loadDefaultContent();
      }
    } else {
      // Load default content when Firebase is not configured
      loadDefaultContent();
    }
    
    appState.setLoading(false);
    console.log('Boom Digital Agency - Application initialized successfully');
  } catch (error) {
    console.error('Error initializing application:', error);
    appState.setLoading(false);
  }
}

// Load default content when Firebase is not available
function loadDefaultContent() {
  const defaultContent = {
    hero: {
      title: "Transformamos tu Presencia Digital con IA",
      subtitle: "Soluciones inteligentes que impulsan el crecimiento de tu empresa",
      ctaText: "Comenzar Ahora"
    },
    services: {
      service1: {
        title: "Asistente IA",
        description: "Asistente virtual inteligente que automatiza tareas y mejora la productividad"
      },
      service2: {
        title: "Bots Omnicanal",
        description: "Solución de chatbots integrada en todos tus canales de comunicación"
      },
      service3: {
        title: "Campañas Garantizadas",
        description: "Estrategias de marketing con resultados medibles y garantizados"
      },
      service4: {
        title: "Growth Simulator",
        description: "Simulación predictiva para optimizar tu estrategia de crecimiento"
      }
    },
    club: {
      testimonials: [
        {
          name: "Carlos Rodríguez",
          company: "TechStart Inc",
          text: "Boom Digital revolucionó nuestro enfoque digital. Increíble ROI."
        },
        {
          name: "María González",
          company: "Ecommerce Pro",
          text: "La automatización con IA nos ahorró 20 horas semanales."
        }
      ]
    },
    colors: {
      primary: '#37C6FF',
      background: '#FFFFFF',
      text: '#000000'
    }
  };
  
  appState.setContent(defaultContent);
}

// Scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in', 'animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  document.querySelectorAll('section, .animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Microinteractions
function setupMicrointeractions() {
  // Button hover effects
  document.addEventListener('mouseover', (e) => {
    if (e.target.matches('.btn-primary, .btn-secondary')) {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.transition = 'all 0.3s ease';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.matches('.btn-primary, .btn-secondary')) {
      e.target.style.transform = 'translateY(0)';
    }
  });

  // Service card interactions
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.service-card')) {
      const card = e.target.closest('.service-card');
      card.style.transform = 'translateY(-5px) scale(1.02)';
      card.style.boxShadow = '0 20px 40px rgba(55, 198, 255, 0.15)';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.service-card')) {
      const card = e.target.closest('.service-card');
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    }
  });
}

// Utility functions
export function formatNumber(num) {
  return new Intl.NumberFormat('es-ES').format(num);
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Setup auth listener if Firebase is available
  if (firebaseModule) {
    firebaseModule.setupAuthListener((user) => {
      appState.setUser(user);
      
      if (user && user.email === 'boomdigitaleeuu@gmail.com') {
        console.log('CEO logged in successfully');
      }
    });
  }

  // Initialize app
  initApp();
});

// Export for global access if needed
window.BoomDigital = {
  appState,
  formatNumber,
  debounce
};
