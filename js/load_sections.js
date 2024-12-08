document.addEventListener("DOMContentLoaded", function () {
    // Function to load the timeline section
    const timelinePlaceholder = document.getElementById("timeline-placeholder");
    if (timelinePlaceholder) {
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
    }

    // Function to load the Vision, Mission, and Commitments section
    const visionMissionPlaceholder = document.getElementById("vision-mission-include");
    if (visionMissionPlaceholder) {
        fetch("../sections/vision-mission.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load Vision-Mission section");
                }
                return response.text();
            })
            .then(data => {
                visionMissionPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading Vision-Mission section:", error);
            });
    }

      // Function to load Footer
      const footerPlaceholder = document.getElementById("footer-include");
      if (footerPlaceholder) {
          fetch("../sections/footer.html")
              .then(response => {
                  if (!response.ok) {
                      throw new Error("Failed to load Footer section");
                  }
                  return response.text();
              })
              .then(data => {
                footerPlaceholder.innerHTML = data;
              })
              .catch(error => {
                  console.error("Error loading Footer section:", error);
              });
      }
});