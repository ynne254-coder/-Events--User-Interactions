
// Changes the background color when the button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

// Resets the background color to white when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Updates a paragraph to show the key the user pressed
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("key-display");
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Displays real-time input from the text field
function displayUserInput() {
  const input = document.getElementById("user-input");
  const output = document.getElementById("input-display");
  if (input && output) {
    output.textContent = input.value;
  }
}

// Attach event listeners
const colorButton = document.getElementById("color-btn");
if (colorButton) {
  colorButton.addEventListener("click", changeBackgroundColor);
}

document.body.addEventListener("dblclick", resetBackgroundColor);

document.addEventListener("keydown", displayKeyPress);

const inputField = document.getElementById("user-input");
if (inputField) {
  inputField.addEventListener("input", displayUserInput);
}

// Export functions for Jest testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
};