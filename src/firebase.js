// Firebase Configuration with Real Credentials
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

// Firebase configuration - Real credentials provided
const firebaseConfig = {
  apiKey: "AIzaSyB5JtqqMJgWzZrua42z_n2Vu-7ZNWanlE4",
  authDomain: "boomdigital-f6a06.firebaseapp.com",
  databaseURL: "https://boomdigital-f6a06-default-rtdb.firebaseio.com",
  projectId: "boomdigital-f6a06",
  storageBucket: "boomdigital-f6a06.firebasestorage.app",
  messagingSenderId: "398341141",
  appId: "1:398341141:web:d895a031215defcdb88a1c",
  measurementId: "G-ELW9J8B9J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// CEO Email constant
export const CEO_EMAIL = 'boomdigitaleeuu@gmail.com';

// Authentication functions
export const signInCEO = async (email, password) => {
  try {
    if (email !== CEO_EMAIL) {
      throw new Error('Acceso restringido. Solo disponible para el CEO.');
    }
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutCEO = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Firestore functions for dynamic content
export const getWebsiteContent = async () => {
  try {
    const docRef = doc(db, 'website', 'content');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // Create default content if it doesn't exist
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
      
      await setDoc(docRef, defaultContent);
      return defaultContent;
    }
  } catch (error) {
    console.error('Error getting website content:', error);
    throw error;
  }
};

export const updateWebsiteContent = async (updates) => {
  try {
    const docRef = doc(db, 'website', 'content');
    await updateDoc(docRef, updates);
    return true;
  } catch (error) {
    console.error('Error updating website content:', error);
    throw error;
  }
};

// Analytics functions
export const trackPageView = async (page) => {
  try {
    const analyticsRef = doc(db, 'analytics', 'pageViews');
    const analyticsSnap = await getDoc(analyticsRef);
    
    if (analyticsSnap.exists()) {
      const data = analyticsSnap.data();
      const updatedViews = {
        ...data,
        [page]: (data[page] || 0) + 1,
        total: (data.total || 0) + 1,
        lastUpdated: new Date().toISOString()
      };
      await setDoc(analyticsRef, updatedViews);
    } else {
      await setDoc(analyticsRef, {
        [page]: 1,
        total: 1,
        lastUpdated: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

export const getAnalytics = async () => {
  try {
    const analyticsRef = doc(db, 'analytics', 'pageViews');
    const analyticsSnap = await getDoc(analyticsRef);
    
    if (analyticsSnap.exists()) {
      return analyticsSnap.data();
    } else {
      return {
        total: 0,
        lastUpdated: new Date().toISOString()
      };
    }
  } catch (error) {
    console.error('Error getting analytics:', error);
    throw error;
  }
};

// Auth state listener
export const setupAuthListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Get current user
export const getCurrentUser = () => {
  return auth.currentUser;
};
