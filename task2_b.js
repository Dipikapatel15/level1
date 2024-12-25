// Get the current time
const now = new Date();
const hours = now.getHours();

// Determine the greeting message
let greeting;
if (hours < 12) {
  greeting = "Good Morning!";
} else if (hours < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

// Display the greeting in an alert box
alert(greeting);
