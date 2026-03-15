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
      contactMessage.textContent = 'Please fill in all required fields 📝';
    } else {
      const submitBtn = contactForm.querySelector('.form__submit');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnIcon = submitBtn.querySelector('i');

      submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Sending...';
      if (btnIcon) btnIcon.className = 'fa-solid fa-circle-notch fa-spin';

      emailjs.sendForm('service_w6wo8ju', 'template_pp0uzys', '#contact-form', 'c47rwtY9rbzUAqD2t')
        .then(() => {
          contactMessage.classList.remove('color-red');
          contactMessage.classList.add('color-blue');
          contactMessage.textContent = 'Message sent successfully ✅';

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
          contactMessage.textContent = 'Something went wrong. Please try again ❌';

          submitBtn.disabled = false;
          if (btnText) btnText.textContent = 'Send Message';
          if (btnIcon) btnIcon.className = 'fa-solid fa-paper-plane';

          console.error('EmailJS error:', error);
        });
    }
  };

  contactForm.addEventListener('submit', sendEmail);
}
