function add(x, y) {
  const first = x;
  const second = y;
  const operation = "+";
  return Math.round(x + y);
}

function subtract(x, y) {
  const first = x;
  const second = y;
  const operation = "-";
  return Math.round(x - y);
}

function multiply(x, y) {
  const first = x;
  const second = y;
  const operation = "*";
  return Math.round(x * y);
}

function divide(x, y) {
  const first = x;
  const second = y;
  const operation = "/";
  return Math.round(x / y);
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

function operatebtn() {
  let x = "";
    let y = "";
    let operator = "";

    //Operate part
    let displayLength = displayString.length;
    for (let i = 0; i < displayLength; i++) {
      if (displayString[i] === "+" || 
          displayString[i] === "-" || 
          displayString[i] === "*" || 
          displayString[i] === "/") {
            operator = displayString[i];
            y = displayString.slice(i + 1);
            break
      }
      x += displayString[i];
    }
    display.textContent = operate((+x), (+y), operator);
    displayString = display.textContent;
} 

const display = document.querySelector("#display");
let displayString = display.textContent;

function calcButtons() {
  const oneBtn = document.querySelector("#one-btn");
  oneBtn.addEventListener("click", (event) => {
    

    display.textContent = display.textContent + "1";
    displayString = display.textContent;
    console.log(displayString);
  });

  const twoBtn = document.querySelector("#two-btn");
  twoBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "2";
    displayString = display.textContent;
    console.log(displayString);
  });

  const threeBtn = document.querySelector("#three-btn");
  threeBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "3";
    displayString = display.textContent;
    console.log(displayString);
  });

  const fourBtn = document.querySelector("#four-btn");
  fourBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "4";
    displayString = display.textContent;
    console.log(displayString);
  });

  const fiveBtn = document.querySelector("#five-btn");
  fiveBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "5"
    displayString = display.textContent;
    console.log(displayString);
  });

  const sixBtn = document.querySelector("#six-btn");
  sixBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "6";
    displayString = display.textContent;
    console.log(displayString);
  });

  const sevenBtn = document.querySelector("#seven-btn");
  sevenBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "7";
    displayString = display.textContent;  
    console.log(displayString);
  });

  const eightBtn = document.querySelector("#eight-btn");
  eightBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "8";
    displayString = display.textContent;
    console.log(displayString);
  });

  const nineBtn = document.querySelector("#nine-btn");
  nineBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "9";
    displayString = display.textContent;
    console.log(displayString);
  });

  const zeroBtn = document.querySelector("#zero-btn");
  zeroBtn.addEventListener("click", (event) => {
    display.textContent = display.textContent + "0";
    displayString = display.textContent;
    console.log(displayString);
  });

  const addBtn = document.querySelector("#add-btn");
  addBtn.addEventListener("click", (event) => {
    if (displayString.includes("+")||
        displayString.includes("-")||
        displayString.includes("*")||
        displayString.includes("/")) {
      display.textContent = display.textContent + "";
    } else {
      display.textContent = display.textContent + "+";
      displayString = display.textContent;
      console.log(displayString);
    }
  });

  const subtractBtn = document.querySelector("#subtract-btn");
  subtractBtn.addEventListener("click", (event) => {
    if (displayString.includes("+")||
        displayString.includes("-")||
        displayString.includes("*")||
        displayString.includes("/")) {
      display.textContent = display.textContent + "";
    } else {
      display.textContent = display.textContent + "-";
      displayString = display.textContent;
      console.log(displayString);
    }
  });

  const multiplyBtn = document.querySelector("#multiply-btn");
  multiplyBtn.addEventListener("click", (event) => {
    if (displayString.includes("+")||
        displayString.includes("-")||
        displayString.includes("*")||
        displayString.includes("/")) {
      display.textContent = display.textContent + "";
    } else {
      display.textContent = display.textContent + "*";
      displayString = display.textContent;
      console.log(displayString);
    }
  });

  const divideBtn = document.querySelector("#divide-btn");
  divideBtn.addEventListener("click", (event) => {
    if (displayString.includes("+")||
        displayString.includes("-")||
        displayString.includes("*")||
        displayString.includes("/")) {
      display.textContent = display.textContent + "";
    } else {
      display.textContent = display.textContent + "/";
      displayString = display.textContent;
      console.log(displayString);
    }
  });

  const equalBtn = document.querySelector("#equal-btn");
  equalBtn.addEventListener("click", (event) => {
    // let x = "";
    // let y = "";
    // let operator = "";

    // //Operate part
    // let displayLength = displayString.length;
    // for (let i = 0; i < displayLength; i++) {
    //   if (displayString[i] === "+" || 
    //       displayString[i] === "-" || 
    //       displayString[i] === "*" || 
    //       displayString[i] === "/") {
    //         operator = displayString[i];
    //         y = displayString.slice(i + 1);
    //         break
    //   }
    //   x += displayString[i];
    // }
    // display.textContent = operate((+x), (+y), operator);
    // console.log(display.textContent = operate((+x), (+y), operator));

    operatebtn();
  });

  

  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", (event) => {
    display.textContent = "";
    displayString = display.textContent;
    console.log(displayString);
  });
}

// let x = "";
// let y = "";
// let operator = "";

// //Operate part
// let displayLength = displayString.length;
// for (let i = 0; i < displayLength; i++) {
//   if (displayString[i] === "+" || 
//       displayString[i] === "-" || 
//       displayString[i] === "*" || 
//       displayString[i] === "/") {
//         operator = displayString[i];
//         y = displayString.slice(i + 1);
//         break
//   }
//   x += displayString[i];
// }

calcButtons();