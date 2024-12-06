// Counter animation
const counters = document.querySelectorAll('.counter');
const counterSection = document.querySelector('.about-bottom');

// Function to animate the counters
function animateCounters() {
    counters.forEach(counter => {
        counter.innerText = '0'; // Reset counter before reanimating
        const target = +counter.getAttribute('data-target');
        const increment = Math.ceil(target / 100); // Increment value

        const updateCounter = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCounter, 20); // Adjust speed
            } else {
                counter.innerText = target; // Ensure exact value is set
            }
        };

        updateCounter();
    });
}

// Attach mouseenter event to trigger the counters
counterSection.addEventListener('mouseenter', () => {
    animateCounters();
});
