// Navigation
class Navigation {
  constructor() {
    this.header = document.getElementById('header');
    this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    this.mobileNav = document.getElementById('mobile-nav');
    this.init();
  }
  
  init() {
    this.mobileMenuToggle?.addEventListener('click', () => this.toggleMobileMenu());
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
  
  toggleMobileMenu() {
    this.mobileNav.classList.toggle('is-open');
    document.body.style.overflow = this.mobileNav.classList.contains('is-open') ? 'hidden' : '';
  }
  
  handleScroll() {
    if (window.pageYOffset > 100) {
      this.header?.classList.add('is-scrolled');
    } else {
      this.header?.classList.remove('is-scrolled');
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Navigation());
} else {
  new Navigation();
}
