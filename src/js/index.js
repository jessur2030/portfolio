const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

const navLinks = document.querySelectorAll('.nav__link');
const skillsList = document.getElementsByClassName('skills__content');
const skillHeaders = document.querySelectorAll('.skills__header');
const scrollBtn = document.getElementById('scroll-up');
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const toggleMenu = () => navMenu.classList.toggle('show-menu');
const toggleSkills = () => this.parentNode.classList.toggle('skills__open');
const handleScroll = () => {
  const scrollY = window.scrollY;
  if (scrollBtn.getBoundingClientRect().top < scrollY + 800) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const handleLinkClick = () => {
  navMenu.classList.remove('show-menu');
};

const toggleTheme = () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
};

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

navToggle.addEventListener('click', toggleMenu);
navClose.addEventListener('click', toggleMenu);
navLinks.forEach((link) => link.addEventListener('click', handleLinkClick));
scrollBtn.addEventListener('click', topFunction);
window.addEventListener('scroll', handleScroll);
skillHeaders.forEach((header) =>
  header.addEventListener('click', toggleSkills)
);
themeButton.addEventListener('click', toggleTheme);
