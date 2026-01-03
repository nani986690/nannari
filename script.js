document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const desktopNav = document.querySelector('.desktop-nav');
  let isMenuOpen = false;

  menuIcon.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      desktopNav.classList.add('mobile-menu-active');
      menuIcon.classList.add('menu-active');
    } else {
      desktopNav.classList.remove('mobile-menu-active');
      menuIcon.classList.remove('menu-active');
    }
  });

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('.desktop-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      desktopNav.classList.remove('mobile-menu-active');
      menuIcon.classList.remove('menu-active');
    });
  });
});
