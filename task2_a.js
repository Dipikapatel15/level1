// Get the button element
const colorButton = document.getElementById('colorButton');

// Define an array of colors
const colors = ['#007BFF', '#28A745', '#FFC107', '#DC3545', '#17A2B8'];

// Variable to track the current color index
let currentIndex = 0;

// Add click event listener to the button
colorButton.addEventListener('click', () => {
  // Increment the color index
  currentIndex = (currentIndex + 1) % colors.length;
  
  // Change the button's background color
  colorButton.style.backgroundColor = colors[currentIndex];
});
