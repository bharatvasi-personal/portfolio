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
