function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let operandA;
let operandB;
let operator = "";

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);

    default:
      return null;
  }
}

function handleOperation() {
  if (operator == "") {
    return;
  }

  if (operandA == null && screen.textContent) {
    operandA = Math.round(parseFloat(screen.textContent) * 100) / 100;
    console.log(operandA + operator + operandB);
    screen.textContent = "";
  } else if (operandB == null && screen.textContent && operator != "=") {
    operandB = Math.round(parseFloat(screen.textContent) * 100) / 100;
    operandA = operate(operandA, operandB, operator);
    operandB = null;
    operator = "=";
    console.log(operandA + operator + operandB);
    screen.textContent = String(operandA);
  }
}
const screen = document.querySelector("#screen");
const operators = document.querySelector("#operators");

operators.addEventListener("click", (event) => {
  if (event.target.id == "operators") return;

  handleOperation();

  switch (event.target.id) {
    case "add":
      operator = "+";
      break;

    case "subtract":
      operator = "-";
      break;

    case "multiply":
      operator = "*";
      break;

    case "divide":
      operator = "/";
      break;

    default:
      break;
  }
  console.log(operandA + operator + operandB);
});

const numbers = document.querySelector("#numbers");
numbers.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "numbers":
      return;

    case "clear":
      operandA = null;
      operandB = null;
      operator = "";
      screen.textContent = "";
      console.log("clear");
      break;

    case "equal":
      handleOperation();
      break;

    default:
      screen.textContent += event.target.textContent;
      break;
  }
});
