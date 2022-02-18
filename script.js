const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equal]");
const body = document.querySelector("body");

// Create calculator instance and calculator functions

const calculator = new Calculator(previousOperand, currentOperand);

function appendNumber(number) {
  calculator.appendNumber(number);
  calculator.updateDisplay();
}
function compute() {
  calculator.compute();
  calculator.updateDisplay();
}
function chooseOperation(operation) {
  calculator.chooseOperation(operation);
  calculator.updateDisplay();
}
function clearAll() {
  calculator.clear();
  calculator.updateDisplay();
}
function backspace() {
  calculator.delete();
  calculator.updateDisplay();
}

// Event listeners

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
  });
});

equalButton.addEventListener("click", (button) => {
  compute();
});

allClearButton.addEventListener("click", () => {
  clearAll();
});

deleteButton.addEventListener("click", () => {
  backspace();
});

body.addEventListener("keydown", (e) => {
  if ((e.key >= 1 && e.key <= 9) || e.key === ".") {
    appendNumber(e.key);
  } else {
    switch (e.key) {
      case "Backspace":
        backspace();
        break;
      case "Enter":
        compute();
        break;
      case "x":
        clearAll();
        break;
      case "*":
      case "/":
      case "+":
      case "-":
        chooseOperation(e.key);
        break;
    }
  }
});
