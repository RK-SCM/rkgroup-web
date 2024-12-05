// Banner slider functionality
const banner = document.getElementById("banner");
const bannerText = document.getElementById("banner-text");

const banners = [
    { background: "../img/banner_gold.jpg", text: "Gold & Diamonds" },
    { background: "../img/banner_silks.jpg", text: "Wedding Center" },
    { background: "../img/banner_all_mart.jpg", text: "All Mart" },
];

let currentIndex = 0;

function updateBanner() {
    const { background, text } = banners[currentIndex];
    banner.style.backgroundImage = `url(${background})`;
    bannerText.textContent = text;
    currentIndex = (currentIndex + 1) % banners.length;
}
updateBanner();
setInterval(updateBanner, 5000);
