// Get references to the elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const calculateButton = document.getElementById('calculateButton');
const resultDisplay = document.getElementById('result');

// Add event listener to the button
calculateButton.addEventListener('click', () => {
  // Get the values from the input fields
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);

  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Result: Please enter valid numbers.";
    return;
  }

  // Calculate the sum
  const sum = num1 + num2;

  // Display the result
  resultDisplay.textContent = `Result: ${sum}`;
});
