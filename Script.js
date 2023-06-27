// Get the input box element
const inputBox = document.getElementById('inputBox');

// Function to get the input value from buttons
function getInputValue(value) {
  inputBox.value += value;
}

// Function to perform the calculation when equal button is clicked
function calculate() {
  let result;
  try {
    result = eval(inputBox.value); // Using eval() to evaluate the expression
  } catch (error) {
    result = 'Error';
  }
  inputBox.value = result;
}

// Function to clear the input box
function clearInput() {
  inputBox.value = '';
}

// Function to delete the last character from the input box
function deleteCharacter() {
  inputBox.value = inputBox.value.slice(0, -1);
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.innerText;
    if (buttonValue === '=') {
      calculate();
    } else if (buttonValue === 'AC') {
      clearInput();
    } else if (buttonValue === 'DEL') {
      deleteCharacter();
    } else {
      getInputValue(buttonValue);
    }
  });
});