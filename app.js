//Adds 2 numbers
function add(x, y) {
  const result = x + y;

  if (result % 1 === 0) {
    return result;
  }
  return result.toFixed(5);
}

//Subtracts 2 numbers
function subtract(x, y) {
  const result = x - y;

  if (result % 1 === 0) {
    return result;
  }
  return result.toFixed(5);
}

//Multiplies the first number by the second number
function multiply(x, y) {
  const result = x * y;

  if (result % 1 === 0) {
    return result;
  }
  return result.toFixed(5);
}

//Divides the first number by the second number
function divide(x, y) {
  const result = x / y;

  if (result % 1 === 0) {
    return result;
  }
  return result.toFixed(5);
}

//Calls one of the arithmetic functions depending on the 
//operator inputted
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

//These 4 variables contains the numbers and operators that control the 
//flow of the calculator. 
let firstNum = "";
let secondNum = "";
let resultNum = "";
let operator = "";

//The display variable controls what is showed to the user in the display screen 
const display = document.querySelector("#display");
let displayString = display.textContent;

//This function controls all the calculations and errors in the calculator
function calcButtons() {
  //Puts 1 into the display. Depending on whether an operator has already been 
  //selected or not, 1 will be in the 1st number or 2nd number.
  const oneBtn = document.querySelector("#one-btn");
  oneBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "1";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "1";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum); 
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 2 into the display. Depending on whether an operator has already been 
  //selected or not, 2 will be in the 1st number or 2nd number.
  const twoBtn = document.querySelector("#two-btn");
  twoBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "2";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "2";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 3 into the display. Depending on whether an operator has already been 
  //selected or not, 3 will be in the 1st number or 2nd number.
  const threeBtn = document.querySelector("#three-btn");
  threeBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "3";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "3";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 4 into the display. Depending on whether an operator has already been 
  //selected or not, 4 will be in the 1st number or 2nd number.
  const fourBtn = document.querySelector("#four-btn");
  fourBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "4";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "4";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 5 into the display. Depending on whether an operator has already been 
  //selected or not, 5 will be in the 1st number or 2nd number.
  const fiveBtn = document.querySelector("#five-btn");
  fiveBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "5";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "5";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 6 into the display. Depending on whether an operator has already been 
  //selected or not, 6 will be in the 1st number or 2nd number.
  const sixBtn = document.querySelector("#six-btn");
  sixBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "6";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "6";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 7 into the display. Depending on whether an operator has already been 
  //selected or not, 7 will be in the 1st number or 2nd number.
  const sevenBtn = document.querySelector("#seven-btn");
  sevenBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "7";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "7";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 8 into the display. Depending on whether an operator has already been 
  //selected or not, 8 will be in the 1st number or 2nd number.
  const eightBtn = document.querySelector("#eight-btn");
  eightBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "8";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "8";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 9 into the display. Depending on whether an operator has already been 
  //selected or not, 9 will be in the 1st number or 2nd number.
  const nineBtn = document.querySelector("#nine-btn");
  nineBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "9";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "9";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Puts 0 into the display. Depending on whether an operator has already been 
  //selected or not, 0 will be in the 1st number or 2nd number.
  const zeroBtn = document.querySelector("#zero-btn");
  zeroBtn.addEventListener("click", (event) => {
    if (operator.length === 0) {
      resultNum = "";
      firstNum += "0";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = firstNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      secondNum += "0";
      display.style.textAlign = "right";
      display.style.fontSize = "30px";
      display.textContent = secondNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  });

  //Sets the operator to addition. If the user has a result from a previous
  //calculation, the result will be used in the addition. If the user already 
  //has 2 numbers to calculate with another operation, those numbers are calculated 
  //and then the result is used in the addition. Otherwise, addition lets the 
  //user input a second number for the calculation.
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
      if (operator === "/" && secondNum === "0") {
        firstNum = "";
        secondNum = "";
        resultNum = "";
        operator = "";
        addBtn.classList.remove("clicked-btn");
        subtractBtn.classList.remove("clicked-btn");
        multiplyBtn.classList.remove("clicked-btn");
        divideBtn.classList.remove("clicked-btn");
        console.log("firstNum: " + firstNum);
        console.log("secondNum: " + secondNum);
        console.log("operator: " + operator);
        console.log("resultNum: " + resultNum);
        display.style.textAlign = "center";
        display.style.fontSize = "22px";
        return display.textContent = "Error. You can't divide by 0.";
      }
      firstNum = operate((+firstNum), (+secondNum), operator);
      display.textContent = firstNum;
      secondNum = "";
      operator = "+";
      addBtn.classList.add("clicked-btn");
      subtractBtn.classList.remove("clicked-btn");
      multiplyBtn.classList.remove("clicked-btn");
      divideBtn.classList.remove("clicked-btn");
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      operator = "+";
      addBtn.classList.add("clicked-btn");
      subtractBtn.classList.remove("clicked-btn");
      multiplyBtn.classList.remove("clicked-btn");
      divideBtn.classList.remove("clicked-btn");
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  }) 

  //Sets the operator to subtraction. If the user has a result from a previous
  //calculation, the result will be used in the subtraction. If the user already 
  //has 2 numbers to calculate with another operation, those numbers are calculated 
  //and then the result is used in the subtraction. Otherwise, subtraction lets the 
  //user input a second number for the calculation.
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
      if (operator === "/" && secondNum === "0") {
        firstNum = "";
        secondNum = "";
        resultNum = "";
        operator = "";
        addBtn.classList.remove("clicked-btn");
        subtractBtn.classList.remove("clicked-btn");
        multiplyBtn.classList.remove("clicked-btn");
        divideBtn.classList.remove("clicked-btn");
        console.log("firstNum: " + firstNum);
        console.log("secondNum: " + secondNum);
        console.log("operator: " + operator);
        console.log("resultNum: " + resultNum);
        display.style.textAlign = "center";
        display.style.fontSize = "22px";
        return display.textContent = "Error. You can't divide by 0.";
      }
      firstNum = operate((+firstNum), (+secondNum), operator);
      display.textContent = firstNum;
      secondNum = "";
      operator = "-";
      addBtn.classList.remove("clicked-btn");
      subtractBtn.classList.add("clicked-btn");
      multiplyBtn.classList.remove("clicked-btn");
      divideBtn.classList.remove("clicked-btn");
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      operator = "-";
      addBtn.classList.remove("clicked-btn");
      subtractBtn.classList.add("clicked-btn");
      multiplyBtn.classList.remove("clicked-btn");
      divideBtn.classList.remove("clicked-btn");
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  })

  //Sets the operator to multiplication. If the user has a result from a previous
  //calculation, the result will be used in the multiplication. If the user already 
  //has 2 numbers to calculate with another operation, those numbers are calculated 
  //and then the result is used in the multiplication. Otherwise, multiplication lets the 
  //user input a second number for the calculation.
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
      if (operator === "/" && secondNum === "0") {
        firstNum = "";
        secondNum = "";
        resultNum = "";
        operator = "";
        addBtn.classList.remove("clicked-btn");
        subtractBtn.classList.remove("clicked-btn");
        multiplyBtn.classList.remove("clicked-btn");
        divideBtn.classList.remove("clicked-btn");
        console.log("firstNum: " + firstNum);
        console.log("secondNum: " + secondNum);
        console.log("operator: " + operator);
        console.log("resultNum: " + resultNum);
        display.style.textAlign = "center";
        display.style.fontSize = "22px";
        return display.textContent = "Error. You can't divide by 0.";
      }
      firstNum = operate((+firstNum), (+secondNum), operator);
      display.textContent = firstNum;
      secondNum = "";
      operator = "*";
      addBtn.classList.remove("clicked-btn");
      subtractBtn.classList.remove("clicked-btn");
      multiplyBtn.classList.add("clicked-btn");
      divideBtn.classList.remove("clicked-btn");
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      operator = "*";
      addBtn.classList.remove("clicked-btn");
      subtractBtn.classList.remove("clicked-btn");
      multiplyBtn.classList.add("clicked-btn");
      divideBtn.classList.remove("clicked-btn");
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  })

  //Sets the operator to division. If the user has a result from a previous
  //calculation, the result will be used in the division. If the user already 
  //has 2 numbers to calculate with another operation, those numbers are calculated 
  //and then the result is used in the division. Otherwise, division lets the 
  //user input a second number for the calculation. If the second number is 0,
  //the user gets an error.
  const divideBtn = document.querySelector("#divide-btn");
  divideBtn.addEventListener("click", (event) => {
    if (resultNum.length > 0) {
      firstNum = resultNum;
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }

    // if (operator === "/" && secondNum === "0") {
    //   firstNum = "";
    //   secondNum = "";
    //   resultNum = "";
    //   operator = "";
    //   addBtn.classList.remove("clicked-btn");
    //   subtractBtn.classList.remove("clicked-btn");
    //   multiplyBtn.classList.remove("clicked-btn");
    //   divideBtn.classList.remove("clicked-btn");
    //   console.log("firstNum: " + firstNum);
    //   console.log("secondNum: " + secondNum);
    //   console.log("operator: " + operator);
    //   console.log("resultNum: " + resultNum);
    //   display.style.textAlign = "center";
    //   display.style.fontSize = "22px";
    //   return display.textContent = "Error. You can't divide by 0.";
    //   } 

    if (secondNum.length > 0) {
      if (operator === "/" && secondNum === "0") {
        firstNum = "";
        secondNum = "";
        resultNum = "";
        operator = "";
        addBtn.classList.remove("clicked-btn");
        subtractBtn.classList.remove("clicked-btn");
        multiplyBtn.classList.remove("clicked-btn");
        divideBtn.classList.remove("clicked-btn");
        console.log("firstNum: " + firstNum);
        console.log("secondNum: " + secondNum);
        console.log("operator: " + operator);
        console.log("resultNum: " + resultNum);
        display.style.textAlign = "center";
        display.style.fontSize = "22px";
        return display.textContent = "Error. You can't divide by 0.";
      }
      firstNum = operate((+firstNum), (+secondNum), operator);
      display.textContent = firstNum;
      secondNum = "";
      operator = "/";
      addBtn.classList.remove("clicked-btn");
      subtractBtn.classList.remove("clicked-btn");
      multiplyBtn.classList.remove("clicked-btn");
      divideBtn.classList.add("clicked-btn");
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    } else {
      operator = "/";
      addBtn.classList.remove("clicked-btn");
      subtractBtn.classList.remove("clicked-btn");
      multiplyBtn.classList.remove("clicked-btn");
      divideBtn.classList.add("clicked-btn");
      console.log("firstNum: " + firstNum);
      console.log("secondNum: " + secondNum);
      console.log("operator: " + operator);
      console.log("resultNum: " + resultNum);
    }
  })

  //Calculate an expression using the 1st number, 2nd number, and operation
  //that the user inputs. If the expression is not complete, then equal does 
  //nothing. When a calculation is done, the result is saved in case the user 
  //to use it for another calculation. Also, after a calculation is done the 
  //1st number, 2nd number, and operator are emptied to avoid any bugs or errors. 
  const equalBtn = document.querySelector("#equal-btn");
  equalBtn.addEventListener("click", (event) => {
    if (operator.length > 0 && (firstNum.length === 0 && secondNum.length === 0)) {
      operator = "";
      addBtn.classList.remove("clicked-btn");
      subtractBtn.classList.remove("clicked-btn");
      multiplyBtn.classList.remove("clicked-btn");
      divideBtn.classList.remove("clicked-btn");
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

    if (operator === "/" && secondNum === "0") {
        firstNum = "";
        secondNum = "";
        resultNum = "";
        operator = "";
        addBtn.classList.remove("clicked-btn");
        subtractBtn.classList.remove("clicked-btn");
        multiplyBtn.classList.remove("clicked-btn");
        divideBtn.classList.remove("clicked-btn");
        console.log("firstNum: " + firstNum);
        console.log("secondNum: " + secondNum);
        console.log("operator: " + operator);
        console.log("resultNum: " + resultNum);
        display.style.textAlign = "center";
        display.style.fontSize = "22px";
        return display.textContent = "Error. You can't divide by 0.";
      }

    resultNum = "";
    resultNum += operate((+firstNum), (+secondNum), operator);
    display.textContent = resultNum;
    firstNum = "";
    secondNum = "";
    operator = "";
    addBtn.classList.remove("clicked-btn");
    subtractBtn.classList.remove("clicked-btn");
    multiplyBtn.classList.remove("clicked-btn");
    divideBtn.classList.remove("clicked-btn");
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
    console.log("operator: " + operator);
    console.log("resultNum: " + resultNum);
  })

  //Clear erases all numbers on the display and erases the user's
  //inputs. It lets the user start over again.
  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", (event) => {
    display.textContent = "0";
    firstNum = "";
    secondNum = "";
    resultNum = "";
    operator = "";
    addBtn.classList.remove("clicked-btn");
    subtractBtn.classList.remove("clicked-btn");
    multiplyBtn.classList.remove("clicked-btn");
    divideBtn.classList.remove("clicked-btn");
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
    console.log("operator: " + operator);
    console.log("resultNum: " + resultNum);
  });
}

calcButtons();