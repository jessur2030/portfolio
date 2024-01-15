// DOM Elements
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const themeButton = document.getElementById('theme-button');
const scrollBtn = document.getElementById('scroll-up');

// Constants
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Toggle Navigation Menu
const toggleMenu = () => navMenu.classList.toggle('show-menu');

// Theme Toggle and Storage
const toggleTheme = () => {
  const isDark = document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('selected-icon', isDark ? 'uil-moon' : 'uil-sun');
};

// Scroll to Top Function
const topFunction = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Initialize Theme Based on Storage
const initTheme = () => {
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');
  if (selectedTheme) {
    document.body.classList.toggle(darkTheme, selectedTheme === 'dark');
    themeButton.classList.toggle(iconTheme, selectedIcon === 'uil-moon');
  }
};

// Scroll Button Visibility using Intersection Observer
const initScrollButtonVisibility = () => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Footer is in view, show the scroll button
        scrollBtn.style.display = 'block';
      } else {
        // Footer is not in view, hide the scroll button
        scrollBtn.style.display = 'none';
      }
    },
    { root: null, threshold: 0 }
  );
  observer.observe(document.querySelector('.footer'));
};

// Smooth Scroll for Navigation Links
const initSmoothScroll = () => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close menu if open
      if (navMenu.classList.contains('show-menu')) {
        toggleMenu();
      }
    });
  });
};

// Event Listeners
navToggle.addEventListener('click', toggleMenu);
navClose.addEventListener('click', toggleMenu);
scrollBtn.addEventListener('click', topFunction);
themeButton.addEventListener('click', toggleTheme);

// Initialize Functions
initTheme();
initScrollButtonVisibility();
initSmoothScroll();
