// Main Application Entry Point
// Note: CSS is now loaded via CDN in index.html for GitHub Pages compatibility

// Import components
import './components/Header.js';
import './components/Hero.js';
import './components/Services.js';
import './components/Dashboard.js';
import './components/Club.js';
import './components/CTASection.js';
import './components/Footer.js';
import './components/ChatBot.js';

// Initialize application
class BoomDigitalApp {
    constructor() {
        this.init();
    }

    init() {
        console.log('Boom Digital Agency - Application Started');
        
        // Setup scroll animations
        this.setupScrollAnimations();
        
        // Setup intersection observer for lazy loading
        this.setupLazyLoading();
        
        // Track initial page view
        this.trackPageView();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in', 'animate-slide-up');
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('section, .animate-on-scroll').forEach(section => {
            observer.observe(section);
        });
    }

    setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    async trackPageView() {
        try {
            const { trackPageView } = await import('./firebase.js');
            await trackPageView('home');
        } catch (error) {
            console.log('Analytics tracking not available in development');
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BoomDigitalApp();
});

// Export for potential module usage
export default BoomDigitalApp;
