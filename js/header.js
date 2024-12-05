// Header scroll functionality
const header = document.getElementById("header");
const logoImg = document.getElementById("logo-img");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
        logoImg.src = "img/logo_scrolled.jpg";
    } else {
        header.classList.remove("scrolled");
        logoImg.src = "img/logo_default.jpg";
    }
});
