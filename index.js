// script.js

// Get the carousel elements
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imageContainer = document.querySelector('.image-container');

// Scroll the carousel left (prev button)
prevButton.addEventListener('click', () => {
    imageContainer.scrollBy({
        left: -300, // Scroll by 300px to the left
        behavior: 'smooth' // Smooth scrolling
    });
});

// Scroll the carousel right (next button)
nextButton.addEventListener('click', () => {
    imageContainer.scrollBy({
        left: 300, // Scroll by 300px to the right
        behavior: 'smooth' // Smooth scrolling
    });
});
