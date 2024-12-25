// Import the prompt-sync module
const prompt = require("prompt-sync")();

// Input from the user
const number = parseInt(prompt("Enter a number: "), 10);

// Check if the number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// Check if the number is equal to 0
else if (number === 0) {
    console.log("The number is zero");
}
// If the number is less than 0
else {
    console.log("The number is negative");
}
