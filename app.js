function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
}
function toggleMenu() {
    let menu = document.querySelector('.menu');
    let logo = document.querySelector('.logo');
    menu.classList.toggle('open');
    logo.classList.toggle('hide');
}

// SLIDER BUTTON FOR IMAGES CAROUSEL
const slidesContainer = document.getElementById("slides-container");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  // Calculate the scroll distance based on the width of the slides
  const slideWidth = slidesContainer.offsetWidth;
  const scrollAmount = slideWidth * 0.8; // Adjust the percentage as needed
  
  // Scroll to the next slide
  slidesContainer.scrollLeft += scrollAmount;
});

prevButton.addEventListener("click", () => {
    console.log('clicky');
  // Calculate the scroll distance based on the width of the slides
  const slideWidth = slidesContainer.offsetWidth;
  const scrollAmount = slideWidth * 0.8; // Adjust the percentage as needed
  
  // Scroll to the previous slide
  slidesContainer.scrollLeft -= scrollAmount;
});

// Set index to 0 for the first slide
let index = 0;
const slides = document.querySelectorAll('.slide')
// Add event listeners to the arrow buttons
document.getElementById('slide-arrow-nextDT').addEventListener('click', nextSlide);
document.getElementById('slide-arrow-prevDT').addEventListener('click', prevSlide);

// Function to show a specific slide
function showSlide(index) {
    // Remove 'active' class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    // Add 'active' class to the slide at the specified index
    slides[index].classList.add('active');
}

// Show the first slide when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    showSlide(index);
});

// Function to show the next slide
function nextSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
}

// Function to show the previous slide
function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide(index);
}


