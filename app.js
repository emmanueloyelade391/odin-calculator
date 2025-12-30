function add(x, y) {
  const result = x + y;

  if (result % 1 === 0) {
    return result;
  }
  return result.toFixed(5);
}

function subtract(x, y) {
  const result = x - y;

  if (result % 1 === 0) {
    return result;
  }
  return result.toFixed(5);
}

function multiply(x, y) {
  const result = x * y;

  if (result % 1 === 0) {
    return result;
  }
  return result.toFixed(5);
}

function divide(x, y) {
  const result = x / y;

  if (result % 1 === 0) {
    return result;
  }
  return result.toFixed(5);
}

// function operate(x, y, operator) {
//   const first = x;
//   const second = y;
//   const operation = operator;
//   if (operator === "+") {
//     return add(x, y);
//   }
//   if (operator === "-") {
//     return subtract(x, y);
//   }
//   if (operator === "*") {
//     return multiply(x, y);
//   }
//   if (operator === "/") {
//     return divide(x, y);
//   }
// }

// function operatebtn() {
//   let x = "";
//     let y = "";
//     let operator = "";

//     //Operate part
//     let displayLength = displayString.length;
//     for (let i = 0; i < displayLength; i++) {
//       if (displayString[i] === "+" || 
//           displayString[i] === "-" || 
//           displayString[i] === "*" || 
//           displayString[i] === "/") {
//             operator = displayString[i];
//             y = displayString.slice(i + 1);
//             break
//       }
//       x += displayString[i];
//     }
//     display.textContent = operate((+x), (+y), operator);
//     displayString = display.textContent;
// } 

function operate(x, y, operator) {
  if (operator === "+") {
    return add(x, y);
  } else if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "*") {
    return multiply(x, y);
  } else {
    return divide(x, y);
  }
}

let firstNum = "";
let secondNum = "";
let resultNum = "";
let operator = "";

const display = document.querySelector("#display");
let displayString = display.textContent;

function calcButtons() {
  const oneBtn = document.querySelector("#one-btn");
  oneBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "1";
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "1";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "1";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum); 
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const twoBtn = document.querySelector("#two-btn");
  twoBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "2";
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "2";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "2";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const threeBtn = document.querySelector("#three-btn");
  threeBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "3";
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "3";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "3";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const fourBtn = document.querySelector("#four-btn");
  fourBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "4";
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "4";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "4";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const fiveBtn = document.querySelector("#five-btn");
  fiveBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "5"
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "5";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "5";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const sixBtn = document.querySelector("#six-btn");
  sixBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "6";
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "6";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "6";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const sevenBtn = document.querySelector("#seven-btn");
  sevenBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "7";
    // displayString = display.textContent;  
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "7";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "7";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const eightBtn = document.querySelector("#eight-btn");
  eightBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "8";
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "8";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "8";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const nineBtn = document.querySelector("#nine-btn");
  nineBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "9";
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "9";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "9";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const zeroBtn = document.querySelector("#zero-btn");
  zeroBtn.addEventListener("click", (event) => {
    // display.textContent = display.textContent + "0";
    // displayString = display.textContent;
    // console.log(displayString);

    if (operator.length === 0) {
      resultNum = "";
      firstNum += "0";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "0";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  const addBtn = document.querySelector("#add-btn");
  addBtn.addEventListener("click", (event) => {
    if (resultNum.length > 0) {
      firstNum = resultNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }

    if (secondNum.length > 0) {
      firstNum = operate((+firstNum), (+secondNum), operator);
      display.textContent = firstNum;
      secondNum = "";
      operator = "+";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      operator = "+";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  }) 

  const subtractBtn = document.querySelector("#subtract-btn");
  subtractBtn.addEventListener("click", (event) => {
    if (resultNum.length > 0) {
      firstNum = resultNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }

    if (secondNum.length > 0) {
      firstNum = operate((+firstNum), (+secondNum), operator);
      display.textContent = firstNum;
      secondNum = "";
      operator = "-";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      operator = "-";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  })

  const multiplyBtn = document.querySelector("#multiply-btn");
  multiplyBtn.addEventListener("click", (event) => {
    if (resultNum.length > 0) {
      firstNum = resultNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }

    if (secondNum.length > 0) {
      firstNum = operate((+firstNum), (+secondNum), operator);
      display.textContent = firstNum;
      secondNum = "";
      operator = "*";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      operator = "*";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  })

  const divideBtn = document.querySelector("#divide-btn");
  divideBtn.addEventListener("click", (event) => {
    if (resultNum.length > 0) {
      firstNum = resultNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }

    if (secondNum.length > 0) {
      if (secondNum === "0") {
        firstNum = "";
        secondNum = "";
        resultNum = "";
        operator = "";
        console.log("firstNum: " + firstNum);
        console.log("secondNum: " + secondNum);
        console.log("operator: " + operator);
        console.log("resultNum: " + resultNum);
        return display.textContent = "Error. You can't divide by 0.";
      }

      firstNum = operate((+firstNum), (+secondNum), operator);
      display.textContent = firstNum;
      secondNum = "";
      operator = "/";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      operator = "/";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  })

  const equalBtn = document.querySelector("#equal-btn");
  equalBtn.addEventListener("click", (event) => {
    if (operator.length > 0 && (firstNum.length === 0 && secondNum.length === 0)) {
      operator = "";
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
      return display.textContent = "0";
    }

    if (firstNum.length === 0 && (operator.length === 0 || secondNum.length === 0)) {
      if (resultNum.length > 0) {
        firstNum += resultNum;
        return display.textContent = firstNum;
      }
      return display.textContent = "0";
    }

    if (firstNum.length > 0 && (operator.length === 0 || secondNum.length === 0)) {
      return display.textContent = firstNum;
    }

    if (secondNum === "0") {
        firstNum = "";
        secondNum = "";
        resultNum = "";
        operator = "";
        console.log("firstNum: " + firstNum);
        console.log("secondNum: " + secondNum);
        console.log("operator: " + operator);
        console.log("resultNum: " + resultNum);
        return display.textContent = "Error. You can't divide by 0.";
      }

    resultNum = "";
    resultNum += operate((+firstNum), (+secondNum), operator);
    display.textContent = resultNum;
    firstNum = "";
    secondNum = "";
    operator = "";
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
    console.log("operator: " + operator);
    console.log("resultNum: " + resultNum);
  })

  // const addBtn = document.querySelector("#add-btn");
  // addBtn.addEventListener("click", (event) => {
  //   if (displayString.includes("+")||
  //       displayString.includes("-")||
  //       displayString.includes("*")||
  //       displayString.includes("/")) {
  //     display.textContent = display.textContent + "";
  //     displayString = display.textContent;
  //     console.log(displayString);
  //    }
    
  //   for (let i = 0; i < displayString.length; i++) {
  //     if (displayString[i] === "+" ||
  //         displayString[i] === "-" ||
  //         displayString[i] === "*" ||
  //         displayString[i] === "-" 
  //     ) {
  //       secondNum = display.textContent.slice(i + 1);
  //       console.log(displayString);
  //       break
  //     }
  //   }

  //   if (secondNum.length > 0) {
  //     operatebtn();
  //     display.textContent += "+";
  //     displayString = display.textContent;
  //     console.log("Current dipslay" + displayString);
  //   } else {
  //     display.textContent += "+";
  //     displayString = display.textContent;
  //     console.log("Current second number" + secondNum.length);
  //   }
  // });

  // const subtractBtn = document.querySelector("#subtract-btn");
  // subtractBtn.addEventListener("click", (event) => {
  //   if (displayString.includes("+")||
  //       displayString.includes("-")||
  //       displayString.includes("*")||
  //       displayString.includes("/")) {
  //     display.textContent = display.textContent + "";
  //   } else {
  //     display.textContent = display.textContent + "-";
  //     displayString = display.textContent;
  //     console.log(displayString);
  //   }
  // });

  // const multiplyBtn = document.querySelector("#multiply-btn");
  // multiplyBtn.addEventListener("click", (event) => {
  //   if (displayString.includes("+")||
  //       displayString.includes("-")||
  //       displayString.includes("*")||
  //       displayString.includes("/")) {
  //     display.textContent = display.textContent + "";
  //   } else {
  //     display.textContent = display.textContent + "*";
  //     displayString = display.textContent;
  //     console.log(displayString);
  //   }
  // });

  // const divideBtn = document.querySelector("#divide-btn");
  // divideBtn.addEventListener("click", (event) => {
  //   if (displayString.includes("+")||
  //       displayString.includes("-")||
  //       displayString.includes("*")||
  //       displayString.includes("/")) {
  //     display.textContent = display.textContent + "";
  //   } else {
  //     display.textContent = display.textContent + "/";
  //     displayString = display.textContent;
  //     console.log(displayString);
  //   }
  // });

  // const equalBtn = document.querySelector("#equal-btn");
  // equalBtn.addEventListener("click", (event) => {
  //   // let x = "";
  //   // let y = "";
  //   // let operator = "";

  //   // //Operate part
  //   // let displayLength = displayString.length;
  //   // for (let i = 0; i < displayLength; i++) {
  //   //   if (displayString[i] === "+" || 
  //   //       displayString[i] === "-" || 
  //   //       displayString[i] === "*" || 
  //   //       displayString[i] === "/") {
  //   //         operator = displayString[i];
  //   //         y = displayString.slice(i + 1);
  //   //         break
  //   //   }
  //   //   x += displayString[i];
  //   // }
  //   // display.textContent = operate((+x), (+y), operator);
  //   // console.log(display.textContent = operate((+x), (+y), operator));

  //   operatebtn();
  // });

  

  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", (event) => {
    // display.textContent = "";
    // displayString = display.textContent;
    // console.log(displayString);

    display.textContent = "";
    firstNum = "";
    secondNum = "";
    resultNum = "";
    operator = "";
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
    console.log("operator: " + operator);
    console.log("resultNum: " + resultNum);
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