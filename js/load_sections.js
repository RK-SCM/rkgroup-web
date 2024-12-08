
    // Function to load the timeline.html content
    document.addEventListener("DOMContentLoaded", function () {
        const timelinePlaceholder = document.getElementById("timeline-placeholder");

        fetch("../sections/timeline.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load timeline section");
                }
                return response.text();
            })
            .then(data => {
                timelinePlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading timeline section:", error);
            });
    });

