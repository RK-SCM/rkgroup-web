document.addEventListener("DOMContentLoaded", () => {
    const aboutBottomSection = document.querySelector(".about-bottom");
    const counters = document.querySelectorAll(".counter");

    // Function to animate counters
    function runCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target"); // Target value
            const updates = 20; // Total number of updates
            const interval = 100; // Time (in ms) between updates
            const increment = Math.ceil(target / updates); // Increment value per update
            let count = 0;

            const updateCounter = () => {
                count += increment;
                if (count >= target) {
                    counter.textContent = target; // Set final value
                } else {
                    counter.textContent = count;
                    setTimeout(updateCounter, interval); // Continue animation at intervals
                }
            };

            updateCounter(); // Start animation
        });
    }

    // Ensure the counters only run once
    let hasRun = false;

    // Trigger counters when the section becomes visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasRun) {
                runCounters();
                hasRun = true;
            }
        });
    });

    if (aboutBottomSection) {
        observer.observe(aboutBottomSection); // Observe the section
    }

    // Trigger counters on hover
    aboutBottomSection.addEventListener("mouseenter", () => {
        if (!hasRun) {
            runCounters();
            hasRun = true;
        }
    });
});
