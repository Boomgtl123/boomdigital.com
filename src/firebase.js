// Mock Authentication System using localStorage
// This simulates Firebase functionality for development

// CEO Email constant
export const CEO_EMAIL = 'boomdigitaleeuu@gmail.com';

// Mock authentication state
let currentUser = null;

// Initialize mock auth
export const initializeAuth = () => {
  const savedUser = localStorage.getItem('boom_ceo_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
  return currentUser;
};

// Authentication functions
export const signInCEO = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email !== CEO_EMAIL) {
        reject(new Error('Acceso restringido. Solo disponible para el CEO.'));
        return;
      }
      
      // Mock successful login (in real scenario, verify password)
      const user = {
        uid: 'ceo-user-001',
        email: email,
        displayName: 'CEO Boom Digital',
        emailVerified: true,
        isCEO: true
      };
      
      currentUser = user;
      localStorage.setItem('boom_ceo_user', JSON.stringify(user));
      resolve(user);
    }, 1000);
  });
};

export const signOutCEO = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      currentUser = null;
      localStorage.removeItem('boom_ceo_user');
      resolve();
    }, 500);
  });
};

// Mock Firestore functions for dynamic content
export const getWebsiteContent = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const savedContent = localStorage.getItem('boom_website_content');
      if (savedContent) {
        resolve(JSON.parse(savedContent));
      } else {
        // Default content
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
          },
          banners: {
            main: "¡Nuevo: Asistente IA Pro ahora disponible!",
            secondary: "Oferta especial por tiempo limitado"
          }
        };
        
        localStorage.setItem('boom_website_content', JSON.stringify(defaultContent));
        resolve(defaultContent);
      }
    }, 500);
  });
};

export const updateWebsiteContent = async (updates) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const currentContent = await getWebsiteContent();
      const updatedContent = { ...currentContent, ...updates };
      localStorage.setItem('boom_website_content', JSON.stringify(updatedContent));
      resolve(true);
    }, 500);
  });
};

// Analytics functions
export const trackPageView = async (page) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const analytics = JSON.parse(localStorage.getItem('boom_analytics') || '{}');
      analytics[page] = (analytics[page] || 0) + 1;
      analytics.total = (analytics.total || 0) + 1;
      analytics.lastUpdated = new Date().toISOString();
      localStorage.setItem('boom_analytics', JSON.stringify(analytics));
      resolve();
    }, 100);
  });
};

export const getAnalytics = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const analytics = JSON.parse(localStorage.getItem('boom_analytics') || '{}');
      resolve(analytics);
    }, 100);
  });
};

// Auth state management
export const getCurrentUser = () => currentUser;

export const setupAuthListener = (callback) => {
  // Mock auth state changes
  const checkAuthState = () => {
    const user = getCurrentUser();
    callback(user);
  };
  
  // Check initial state
  checkAuthState();
  
  // Listen for storage changes (simulate auth state changes)
  const handleStorageChange = (e) => {
    if (e.key === 'boom_ceo_user') {
      checkAuthState();
    }
  };
  
  window.addEventListener('storage', handleStorageChange);
  
  // Return unsubscribe function
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
};

// Initialize auth on module load
initializeAuth();
