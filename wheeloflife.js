// JavaScript for Wheel of Life

// Update rating display when slider value changes
document.querySelectorAll('.slider').forEach(slider => {
    const output = slider.nextElementSibling;
    output.textContent = slider.value;

    slider.addEventListener('input', function() {
        output.textContent = this.value;
        updateColor(this);
    });

    // Initialize color based on initial value
    updateColor(slider);
});

// Function to update color gradient based on slider value
function updateColor(slider) {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.backgroundImage = `conic-gradient(#ff7f00 0% ${value}%, #f0f0f0 0% ${value}%)`;
}
