function add(x, y) {
  const first = x;
  const second = y;
  const operation = "+";
  return x + y;
}

function subtract(x, y) {
  const first = x;
  const second = y;
  const operation = "-";
  return x - y;
}

function multiply(x, y) {
  const first = x;
  const second = y;
  const operation = "*";
  return x * y;
}

function divide(x, y) {
  const first = x;
  const second = y;
  const operation = "/";
  return x / y;
}

function operate(x, y, operator) {
  const first = x;
  const second = y;
  const operation = operator;
  if (operator === "+") {
    return add(x, y);
  }
  if (operator === "-") {
    return subtract(x, y);
  }
  if (operator === "*") {
    return multiply(x, y);
  }
  if (operator === "/") {
    return divide(x, y);
  }
}

console.log(operate(5, 4, "/"));

const display = document.querySelector("#display");
let displayString = "";
const oneBtn = document.querySelector("#one-btn");
oneBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "1";
});