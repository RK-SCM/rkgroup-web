document.addEventListener("DOMContentLoaded", () => {
    const showMoreLink = document.getElementById("show-more");
    const hiddenContent = document.querySelector(".hidden-content");

    if (showMoreLink && hiddenContent) {
        showMoreLink.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            hiddenContent.classList.toggle("visible");
            if (hiddenContent.classList.contains("visible")) {
                showMoreLink.textContent = "Show Less";
            } else {
                showMoreLink.textContent = "Learn More";
            }
        });
    }
});
