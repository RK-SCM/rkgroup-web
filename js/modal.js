// Select modal elements
const modal = document.getElementById('popupModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');

// Add event listeners to all company boxes
document.querySelectorAll('.company-box').forEach(box => {
    box.addEventListener('click', () => {
        // Get dynamic data from data-* attributes
        const title = box.getAttribute('data-title');
        const description = box.getAttribute('data-description');
        const imgSrc = box.getAttribute('data-img');

        // Populate modal content
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = imgSrc;

        // Show modal
        modal.style.display = 'flex';
    });
});

// Close modal when the "X" button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
