// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Increment speed
        const increment = Math.ceil((target - count) / 15);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCounter, 50);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
