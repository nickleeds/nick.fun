const healthSlider = document.getElementById('healthSlider');
const relationshipSlider = document.getElementById('relationshipSlider');
const lifeGPADisplay = document.getElementById('lifeGPA');

function updateLifeGPA() {
  // Calculate average GPA based on sliders
  const healthValue = parseFloat(healthSlider.value);
  const relationshipValue = parseFloat(relationshipSlider.value);

  const averageGPA = (healthValue + relationshipValue) / 2;
  lifeGPADisplay.textContent = averageGPA.toFixed(1); // Display GPA with one decimal place
}

// Event listeners for sliders
healthSlider.addEventListener('input', updateLifeGPA);
relationshipSlider.addEventListener('input', updateLifeGPA);
