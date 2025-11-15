// main.js - Interactive Profile JavaScript

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('.nav-item').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Active Navigation State on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

function updateActiveNav() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ===== Scroll-triggered Card Animations =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0) scale(1)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px) scale(0.95)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  cardObserver.observe(card);
});

// ===== Back to Top Button Visibility =====
const backToTopBtn = document.querySelector('.to-top');

function toggleBackToTop() {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.pointerEvents = 'auto';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.pointerEvents = 'none';
  }
}

window.addEventListener('scroll', toggleBackToTop);
toggleBackToTop();

// ===== Skill Items Staggered Hover Effect =====
const skillItems = document.querySelectorAll('.skills-list li');

skillItems.forEach((skill, index) => {
  skill.addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
  });

  skill.addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
  });
});

// ===== Details/Summary Center Expansion =====
const detailsElements = document.querySelectorAll('details');

detailsElements.forEach(detail => {
  const content = detail.querySelectorAll('p');

  detail.addEventListener('toggle', function() {
    this.style.transformOrigin = 'center center';

    if (this.open) {
      this.classList.add('expanding');

      content.forEach(p => {
        p.style.transformOrigin = 'center top';
        p.style.animation = 'expandContent 0.4s ease-out';
      });

      setTimeout(() => {
        this.classList.remove('expanding');
      }, 400);
    }
  });
});

// ===== Typing Effect for Header Subtitle =====
const subtitle = document.querySelector('.header-title p');
if (subtitle) {
  const originalText = subtitle.textContent;
  subtitle.textContent = '';
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < originalText.length) {
      subtitle.textContent += originalText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    }
  }

  setTimeout(typeWriter, 500);
}

// ===== Header Shrink on Scroll =====
const header = document.querySelector('.top-header');
let lastScrollY = window.pageYOffset;

function handleHeaderScroll() {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > 100) {
    header.style.padding = '0.75rem 2rem';
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
  } else {
    header.style.padding = '1.25rem 2rem';
    header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
  }

  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleHeaderScroll);

// ===== Parallax Effect for Background Shapes =====
const shapes = document.querySelectorAll('.shape');

function parallaxShapes() {
  const scrolled = window.pageYOffset;

  shapes.forEach((shape, index) => {
    const speed = 0.05 + (index * 0.02);
    const yPos = -(scrolled * speed);
    shape.style.transform = `translate3d(0, ${yPos}px, 0)`;
  });
}

window.addEventListener('scroll', parallaxShapes);

// ===== Copy Email on Click =====
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const email = this.getAttribute('href').replace('mailto:', '');

    navigator.clipboard.writeText(email).then(() => {
      showNotification('Email copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  });
});

// ===== Notification System =====
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(45, 45, 45, 0.95);
    color: #e8e8e8;
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(120, 120, 120, 0.4);
    z-index: 1000;
    animation: slideInRight 0.3s ease-out;
    font-size: 0.9rem;
    font-weight: 500;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2500);
}

// ===== Add CSS for Notification Animations =====
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOutRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }
`;
document.head.appendChild(notificationStyles);

// ===== Project Cards Click Analytics =====
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach((project, index) => {
  project.addEventListener('toggle', function() {
    if (this.open) {
      console.log(`Project ${index + 1} opened:`, this.querySelector('summary').textContent);
    }
  });
});

// ===== Keyboard Navigation Enhancement =====
document.addEventListener('keydown', function(e) {
  if (e.key === 't' || e.key === 'T') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (e.key === 'b' || e.key === 'B') {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
});

// ===== Loading Animation =====
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// ===== Cursor-Reactive Floating Effect on Cards =====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    // Get cursor position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate distance from card center
    const deltaX = mouseX - cardCenterX;
    const deltaY = mouseY - cardCenterY;

    // Move card AWAY from cursor (repelling effect)
    // Adjust the divisor (15) to control sensitivity
    const moveX = -(deltaX / 15);
    const moveY = -(deltaY / 15);

    // Apply uniform floating transform (no rotation/tilt)
    this.style.transform = `translateX(${moveX}px) translateY(${moveY}px) translateZ(0) scale(1.02)`;
    this.style.transition = 'transform 0.1s ease-out';
  });

  // Reset position smoothly when cursor leaves
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0) translateY(0) translateZ(0) scale(1)';
    this.style.transition = 'transform 0.4s ease';
  });
});

// ===== Console Welcome Message =====
console.log('%c👋 Welcome to Manav\'s Portfolio!', 'color: #d0d0d0; font-size: 18px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #a0a0a0; font-size: 14px;');
console.log('%c© 2025 Manav Pimparkar', 'color: #787878; font-size: 12px;');

// ===== Performance Observer =====
if ('PerformanceObserver' in window) {
  const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'navigation') {
        console.log('Page Load Time:', entry.loadEventEnd - entry.fetchStart, 'ms');
      }
    });
  });

  perfObserver.observe({ entryTypes: ['navigation'] });
}