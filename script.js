// script.js

// Add interactivity or dynamic behaviors here

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');

    // Example: Smooth scroll for navigation links
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
