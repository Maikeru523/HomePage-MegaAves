// Background Image Slider
const bgImages = document.querySelectorAll('.bg-image');
const dots = document.querySelectorAll('.dot');
let currentImageIndex = 0;
let intervalId;

function changeImage() {
    // Remove active class from current image and dot
    bgImages[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');

    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % bgImages.length;

    // Add active class to new image and dot
    bgImages[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
}

// Function to start or restart the interval
function startInterval() {
    // Clear the existing interval
    clearInterval(intervalId);

    // Start a new interval
    intervalId = setInterval(changeImage, 5000);
}

// Initialize the interval
startInterval();

// Allow manual dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Remove active class from current image and dot
        bgImages[currentImageIndex].classList.remove('active');
        dots[currentImageIndex].classList.remove('active');

        // Set new current image
        currentImageIndex = index;

        // Add active class to new image and dot
        bgImages[currentImageIndex].classList.add('active');
        dots[currentImageIndex].classList.add('active');

        // Restart the interval
        startInterval();
    });
});