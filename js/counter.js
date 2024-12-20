document.addEventListener("DOMContentLoaded", () => {
    const aboutBottomSection = document.querySelector(".about-bottom");
    const counters = document.querySelectorAll(".counter");

    // Function to animate counters
    function runCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target"); // Target value
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

    observer.observe(aboutBottomSection);
});
