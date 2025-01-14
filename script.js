document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');

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


const projectsContainer = document.querySelector(".projects");
let scrollPosition = 0;
const projectWidth = 220; // Includes width + margin of .project-box

function scrollLeft() {
    scrollPosition = Math.max(scrollPosition - projectWidth, 0);
    projectsContainer.style.transform = `translateX(-${scrollPosition}px)`;
}

function scrollRight() {
    const maxScroll = projectsContainer.scrollWidth - projectsContainer.clientWidth;
    scrollPosition = Math.min(scrollPosition + projectWidth, maxScroll);
    projectsContainer.style.transform = `translateX(-${scrollPosition}px)`;
}
