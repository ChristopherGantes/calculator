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
let canClear = true;

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
  if (operandA && operandB && operator != '' && canClear) {
    return;
  }
  if (operandA == null && screen.textContent && !canClear) {
    operandA = Math.round(parseFloat(screen.textContent) * 100) / 100;
    
  } else if (operator != "" && screen.textContent) {
    operandB = Math.round(parseFloat(screen.textContent) * 100) / 100;
    operandA = operate(operandA, operandB, operator);
    screen.textContent = String(operandA);
  }
  canClear = true;
  console.log(operandA + operator + operandB)
}

function handleEqual() {
  if (operandA && operandB && operator && canClear) {
    operandA = operate(operandA, operandB, operator);
    screen.textContent = operandA;
    
  }
  else if (operandA && operator != "" && screen.textContent && !canClear) {
    operandB = Math.round(parseFloat(screen.textContent) * 100) / 100;
    operandA = operate(operandA, operandB, operator);
    screen.textContent = String(operandA);
    
  }
  else if (operandA){
    operator = "";
    
  }
  else if (operandA == null && screen.textContent) {
    operandA = Math.round(parseFloat(screen.textContent) * 100) / 100;
  }
  canClear = true;
  console.log(operandA + operator + operandB)
  
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
});

const numbers = document.querySelector("#numbers");
numbers.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "numbers":
      break;

    case "clear":
      operandA = null;
      operandB = null;
      operator = "";
      screen.textContent = "";
      console.log("clear");
      break;

    case "equal":
      handleEqual();
      break;

    default:
      if (canClear) {
        screen.textContent = "";
        canClear = false;
      }
      screen.textContent += event.target.textContent;
      break;
  }
});
