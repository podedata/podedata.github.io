// Animations - Counters and Scroll Reveal
class Animations {
  constructor() {
    this.counters = document.querySelectorAll('.counter');
    this.hasCountedUp = new Set();
    this.init();
  }
  
  init() {
    this.setupCounters();
    this.setupScrollReveal();
  }
  
  setupCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasCountedUp.has(entry.target)) {
          this.animateCounter(entry.target);
          this.hasCountedUp.add(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    this.counters.forEach(counter => observer.observe(counter));
  }
  
  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    updateCounter();
  }
  
  setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.service-card, .case-card, .stat-card').forEach(el => {
      observer.observe(el);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Animations());
} else {
  new Animations();
}
