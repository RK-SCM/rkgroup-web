// Pause carousel on hover
const carouselWrapper = document.querySelector('.carousel-wrapper');

carouselWrapper.addEventListener('mouseenter', () => {
    carouselWrapper.style.animationPlayState = 'paused';
});

carouselWrapper.addEventListener('mouseleave', () => {
    carouselWrapper.style.animationPlayState = 'running';
});
