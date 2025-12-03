// Navigation active state management
class VSNavigation {
  constructor() {
    this.setupActiveLink();
    this.setupScrollSpy();
  }

  setupActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath.includes(href)) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setupScrollSpy() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && !e.target.classList.contains('dropdown-toggle')) {
          navbarCollapse.classList.remove('show');
        }
      });
    }
  }

  highlightSectionOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    window.addEventListener('scroll', () => {
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
          link.classList.add('active');
        }
      });
    });
  }
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
  new VSNavigation();
});
