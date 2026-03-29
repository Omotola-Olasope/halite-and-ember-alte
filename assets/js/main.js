/*=============== COPYRIGHT YEAR ===============*/
document.querySelectorAll('.footer-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/*=============== THEME TOGGLE ===============*/
const html = document.documentElement;

const savedTheme = localStorage.getItem('he-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('he-theme', next);
  });
}

/*=============== NAVIGATION SCROLL ===============*/
const nav = document.querySelector('.nav');
const scrollHandler = () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', scrollHandler, { passive: true });
scrollHandler();

/*=============== MOBILE MENU ===============*/
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('nav-mobile');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/*=============== SCROLL REVEAL ===============*/
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/*=============== ACTIVE NAV LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link[data-section]');

if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === id);
          });
        }
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach(s => sectionObserver.observe(s));
}

/*=============== HERO CAROUSEL ===============*/
(function () {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
  const dots = Array.from(carousel.querySelectorAll('.carousel__dot'));
  const progressFill = carousel.querySelector('.carousel__progress-fill');
  const prevBtn = carousel.querySelector('.carousel__arrow--prev');
  const nextBtn = carousel.querySelector('.carousel__arrow--next');

  const DURATION = 6000;
  let current = 0;
  let timer = null;
  let paused = false;

  function resetProgress() {
    if (!progressFill) return;
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
    // Force reflow so the browser registers the reset before re-enabling transition
    void progressFill.offsetWidth;
    requestAnimationFrame(() => {
      progressFill.style.transition = 'width ' + DURATION + 'ms linear';
      progressFill.style.width = '100%';
    });
  }

  function goTo(idx) {
    slides[current].classList.remove('carousel__slide--active');
    dots[current].classList.remove('carousel__dot--active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('carousel__slide--active');
    dots[current].classList.add('carousel__dot--active');
    resetProgress();
  }

  function next() {
    goTo(current + 1);
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => {
      if (!paused) next();
    }, DURATION);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      startAuto();
    });
  });

  // Arrow clicks
  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  // Pause on hover/focus
  carousel.addEventListener('mouseenter', () => { paused = true; });
  carousel.addEventListener('mouseleave', () => { paused = false; });
  carousel.addEventListener('focusin', () => { paused = true; });
  carousel.addEventListener('focusout', () => { paused = false; });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { goTo(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); startAuto(); }
  });

  // Initialise
  resetProgress();
  startAuto();
})();

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
  const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
      contactMessage.classList.remove('color-blue');
      contactMessage.classList.add('color-red');
      contactMessage.textContent = 'Please fill in all required fields.';
    } else {
      const submitBtn = contactForm.querySelector('.form-submit');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnIcon = submitBtn.querySelector('i');

      submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Sending...';
      if (btnIcon) btnIcon.className = 'fa-solid fa-circle-notch fa-spin';

      emailjs.sendForm('service_w6wo8ju', 'template_pp0uzys', '#contact-form', 'c47rwtY9rbzUAqD2t')
        .then(() => {
          contactMessage.classList.remove('color-red');
          contactMessage.classList.add('color-blue');
          contactMessage.textContent = 'Message sent successfully.';

          submitBtn.disabled = false;
          if (btnText) btnText.textContent = 'Send Message';
          if (btnIcon) btnIcon.className = 'fa-solid fa-paper-plane';

          contactName.value = '';
          contactEmail.value = '';
          contactProject.value = '';

          const messageField = contactForm.querySelector('textarea');
          if (messageField) messageField.value = '';

          setTimeout(() => { contactMessage.textContent = ''; }, 5000);
        }, (error) => {
          contactMessage.classList.remove('color-blue');
          contactMessage.classList.add('color-red');
          contactMessage.textContent = 'Something went wrong. Please try again.';

          submitBtn.disabled = false;
          if (btnText) btnText.textContent = 'Send Message';
          if (btnIcon) btnIcon.className = 'fa-solid fa-paper-plane';

          console.error('EmailJS error:', error);
        });
    }
  };

  contactForm.addEventListener('submit', sendEmail);
}
