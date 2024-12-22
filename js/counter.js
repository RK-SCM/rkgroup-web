document.addEventListener("DOMContentLoaded", () => {
    const aboutBottomSection = document.querySelector(".about-bottom");
    const counterGridWrapper = document.querySelector(".counter-grid-wrapper");
    const counters = document.querySelectorAll(".counter");

    // Function to animate counters
    function runCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const speed = 5; // Speed of counting animation
            let count = 0;

            const increment = Math.ceil(target / speed);

            const updateCounter = () => {
                count += increment;
                if (count >= target) {
                    counter.textContent = target; // Set final value
                } else {
                    counter.textContent = count;
                    requestAnimationFrame(updateCounter); // Continue animation
                }
            };

            updateCounter(); // Start animation
        });
    }

    // Ensure the counters only run once
    let hasRun = false;

    // Trigger counters on hover
    aboutBottomSection.addEventListener("mouseenter", () => {
        if (!hasRun) {
            runCounters();
            hasRun = true;
        }
    });

    // Trigger counters when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasRun) {
                runCounters();
                hasRun = true;
            }
        });
    });

    if (aboutBottomSection) {
        observer.observe(aboutBottomSection);
    }

    // Add Scroll Buttons (Optional)
    const scrollLeftButton = document.querySelector(".scroll-button.left");
    const scrollRightButton = document.querySelector(".scroll-button.right");

    if (scrollLeftButton && scrollRightButton) {
        scrollLeftButton.addEventListener("click", () => {
            counterGridWrapper.scrollBy({
                left: -300, // Scroll 300px to the left
                behavior: "smooth",
            });
        });

        scrollRightButton.addEventListener("click", () => {
            counterGridWrapper.scrollBy({
                left: 300, // Scroll 300px to the right
                behavior: "smooth",
            });
        });
    }
});
