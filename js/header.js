// Header scroll functionality
const header = document.getElementById("header");
const logoImg = document.getElementById("logo-img");
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle navigation menu for mobile view
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show'); // Toggle 'show' class to display/hide menu
    });
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
        logoImg.src = "img/logo_scrolled.jpg";
    } else {
        header.classList.remove("scrolled");
        logoImg.src = "img/logo_default.jpg";
    }
});
