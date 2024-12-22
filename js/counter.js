document.addEventListener("DOMContentLoaded", () => {
    const aboutBottomSection = document.querySelector(".about-bottom");
    const counters = document.querySelectorAll(".counter");

    // Function to animate counters
    function runCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target"); // Target value
            const speed = 500; // Speed of counting animation
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
