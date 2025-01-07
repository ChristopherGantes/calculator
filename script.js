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
  switch(operator) {
    case("+"):
      return add(a,b);

    case("-"):
      return subtract(a,b);

    case("*"):
      return multiply(a,b);

    case("/"):
      return divide(a,b);
      
    default:
      return null;
  }
}


const screen = document.querySelector("#screen");

const operators = document.querySelector("#operators");
operators.addEventListener("click", (event) => {
  if (event.target.id == "operators") return;

  if (operandA == null && screen.textContent) {
    operandA = parseInt(screen.textContent);
    console.log(operandA);  
  }
  else if (operandB == null && screen.textContent) {
    operandB = parseInt(screen.textContent);
    operandA = operate(operandA, operandB, operator);
    operandB = null;
    console.log(operandA);
  }

  switch(event.target.id){
    case("add"):
      operator = "+";
      console.log(operator);
      break;    

    case("subtract"):
      operator = "-";
      console.log(operator);
      break;

    case("multiply"):
      operator = "*";
      console.log(operator);
      break;

    case("divide"):
      operator = "/"
      console.log(operator);
      break;
      
    default:
      console.log("container pressed");
      break;
  }
});

const numbers = document.querySelector("#numbers");
numbers.addEventListener('click', (event) => {
  if (event.target.id == "numbers") return;


})
