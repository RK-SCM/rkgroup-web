// Initialize EmailJS
emailjs.init('M58DNGclyauQCVzho'); // Replace YOUR_PUBLIC_KEY with your actual public key

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    if (!formData.name || !formData.email || !formData.message) {
        alert('All fields are required.');
        return;
    }
    

    // Send email using EmailJS
    emailjs.send('service_x2h00bc', 'template_czegnlc', formData)
        .then((response) => {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Clear the form
        })
        .catch((error) => {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        });
});
