// ── Theme toggle ──────────────────────────────────────────────────
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun  = document.getElementById('icon-sun');

function applyTheme(theme) {
  root.dataset.theme = theme;
  iconMoon.style.display = theme === 'dark'  ? 'block' : 'none';
  iconSun.style.display  = theme === 'light' ? 'block' : 'none';
}

applyTheme(localStorage.getItem('theme') || 'dark');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
}

// ── Navigation ────────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const yearSpan = document.getElementById('year');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
    }
  });
});

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

// Replace YOUR_FORM_ID with the ID from formspree.io/new
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeedvygy';

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm),
      });

      if (res.ok) {
        contactForm.reset();
        formStatus.textContent = 'Message sent — I\'ll get back to you soon.';
        formStatus.classList.add('form-status--ok');
        submitBtn.textContent = 'Send message';
      } else {
        throw new Error('server error');
      }
    } catch {
      formStatus.textContent = 'Something went wrong. Please email directly at Bharatvasioncloud@gmail.com';
      formStatus.classList.add('form-status--err');
      submitBtn.textContent = 'Send message';
    }

    submitBtn.disabled = false;
  });
}
