document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const bannerText = document.querySelector(".banner-text-content");

    // Verify elements exist
    if (!banner || !bannerText) {
        console.error("Banner or banner text element is missing.");
        return;
    }

    const banners = [
        { background: "/img/banner_gold.jpg", text: "Gold & Diamonds" },
        { background: "/img/banner_silks.jpg", text: "Wedding Center" },
        { background: "/img/banner_all_mart.jpg", text: "All Mart" },
    ];

    let currentIndex = 1; // Start from the second banner since the first is already displayed inline

    // Preload images
    banners.forEach(({ background }) => {
        const img = new Image();
        img.src = background;
        img.loading = "lazy";
    });

    // Function to update banner
    function updateBanner() {
        const { background, text } = banners[currentIndex];
        banner.style.backgroundImage = `url(${background})`;
        bannerText.textContent = text;
        currentIndex = (currentIndex + 1) % banners.length;
    }

    // Start the interval for subsequent banners
    setInterval(updateBanner, 3000); // Change every 5 seconds
});
