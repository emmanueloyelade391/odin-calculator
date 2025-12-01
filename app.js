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

const twoBtn = document.querySelector("#two-btn");
twoBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "2";
});

const threeBtn = document.querySelector("#three-btn");
threeBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "3";
});

const fourBtn = document.querySelector("#four-btn");
fourBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "4";
});

const fiveBtn = document.querySelector("#five-btn");
fiveBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "5";
});

const sixBtn = document.querySelector("#six-btn");
sixBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "6";
});

const sevenBtn = document.querySelector("#seven-btn");
sevenBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "7";
});

const eightBtn = document.querySelector("#eight-btn");
eightBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "8";
});

const nineBtn = document.querySelector("#nine-btn");
nineBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "9";
});

const zeroBtn = document.querySelector("#zero-btn");
zeroBtn.addEventListener("click", (event) => {
  display.textContent = display.textContent + "0";
});