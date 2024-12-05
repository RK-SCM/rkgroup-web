// Select the header, logo, menu toggle, and navigation menu
const header = document.getElementById('header');
const logoImg = document.getElementById('logo-img');
const navMenu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('menu-toggle');

// Toggle navigation menu for mobile view
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Change header background, logo, and height on scroll
window.addEventListener('scroll', () => {
    const bannerHeight = document.querySelector('.banner').offsetHeight;

    if (window.scrollY > bannerHeight) {
        header.classList.add('scrolled');
        logoImg.src = 'img/logo_scrolled.jpg'; // Path to smaller/different logo
    } else {
        header.classList.remove('scrolled');
        logoImg.src = 'img/logo_default.jpg'; // Path to default logo
    }
});
