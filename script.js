// Select header, logo, menu toggle, and navigation menu elements
const header = document.getElementById("header");
const logoImg = document.getElementById("logo-img");
const navMenu = document.getElementById("nav-menu");
const menuToggle = document.getElementById("menu-toggle");

// Select banner and text elements for the slider
const banner = document.getElementById("banner");
const bannerText = document.getElementById("banner-text");

// Define banners with their corresponding backgrounds and text
const banners = [
    { background: "img/banner_gold.jpg", text: "Gold & Diamonds" },
    { background: "img/banner_silks.jpg", text: "Wedding Center" },
];

// Initialize variables
let currentIndex = 0;

// Function to update the banner (background and text)
function updateBanner() {
    // Synchronize background and text
    const { background, text } = banners[currentIndex];
    banner.style.backgroundImage = `url('${background}')`;

    // Fade out and update the text
    bannerText.style.opacity = "0"; // Fade out text
    setTimeout(() => {
        bannerText.textContent = text; // Update text content
        bannerText.style.opacity = "1"; // Fade in text
    }, 500); // Match fade timing

    // Move to the next banner, looping back to the start
    currentIndex = (currentIndex + 1) % banners.length;
}

// Start the banner slider
setInterval(updateBanner, 5000); // Change every 5 seconds

// Toggle navigation menu for mobile view
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Change header background, logo, and height on scroll
window.addEventListener("scroll", () => {
    const bannerHeight = banner.offsetHeight;
    if (window.scrollY > bannerHeight) {
        header.classList.add("scrolled");
        logoImg.src = "img/logo_scrolled.jpg"; // Path to scrolled logo
    } else {
        header.classList.remove("scrolled");
        logoImg.src = "img/logo_default.jpg"; // Path to default logo
    }
});
