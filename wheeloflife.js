// JavaScript for Wheel of Life

// Example: Listen for changes in rating and log the value
document.querySelectorAll('.ratings input').forEach(input => {
    input.addEventListener('input', function() {
        console.log(`Rating for ${input.id}: ${input.value}`);
    });
});
