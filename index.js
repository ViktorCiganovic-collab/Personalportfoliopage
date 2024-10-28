$(document).ready(function () {    
    $('#fade-in-text-one').fadeIn(6000).removeClass('hidden');
    $('#fade-in-text-two').fadeIn(5000).removeClass('hidden');

    const skillsLinks = document.querySelectorAll('.tab-links');
    const skillDescriptions = [
        "Front-End Development and Back-End Development",
        "Still new to the field but have big ambitions!",
        "Freecodecamp sept 2023 - ongoing, Lexicon System Developer sept 2024 - june 2025 + courses at Codecademy"      
    ];

    // Display the initial skill description
    const descriptionContainer = document.querySelector('.description'); // Make sure to have a container for the description
    descriptionContainer.textContent = skillDescriptions[0]; // Show the first skill description by default

    document.querySelector('.tab-titles').addEventListener('click', (event) => {
        if (event.target.classList.contains('tab-links')) {
            // Remove active-link class from all
            skillsLinks.forEach(link => {
                link.classList.remove('active-link');
            });
            // Add active-link to the clicked link
            event.target.classList.add('active-link');

            // Get the index of the clicked link
            const index = Array.from(skillsLinks).indexOf(event.target);
            console.log('Active link index:', index); // Log the index

            // Update the description based on the clicked index
            descriptionContainer.innerHTML = skillDescriptions[index] + "<br>";
        }
    });
});

function addVisibilityOnScroll(selector) {
    var elements = document.querySelectorAll(selector);
    var windowHeight = window.innerHeight;

    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY; 

        elements.forEach(function(element) {
            var elementOffset = element.getBoundingClientRect().top + scrollTop; 

            if (scrollTop + windowHeight > elementOffset) {
                element.classList.add('visible');
            }
        });
    });
}

// Apply visibility to the desired elements
addVisibilityOnScroll('.text');
addVisibilityOnScroll('.about_header');
addVisibilityOnScroll('.tab-links');
addVisibilityOnScroll('.description');





