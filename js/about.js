document.addEventListener("DOMContentLoaded", () => {
    const learnMoreLink = document.querySelector(".about-link");
    const hiddenContent = document.querySelector(".hidden-content");

    if (learnMoreLink && hiddenContent) {
        learnMoreLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            hiddenContent.classList.toggle("visible");

            // Toggle link text
            if (hiddenContent.classList.contains("visible")) {
                learnMoreLink.textContent = "Show Less";
            } else {
                learnMoreLink.textContent = "Read More";
            }
        });
    }
});
