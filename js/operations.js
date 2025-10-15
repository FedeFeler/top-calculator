let element = document.querySelectorAll(".keyboard-btn");
let display = document.querySelector(".display");
let dotBtn = document.querySelector(".dot-btn");
let opBtn = document.querySelectorAll(".operator-btn");
let ceBtn = document.querySelector(".CE-button");
let enterBtn = document.querySelector(".enter-btn");
let numberBtn = document.querySelectorAll(".number-btn");

function sum(a, b) {
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
let operand = "";
let number1 = null;
let number2 = null;
let operator;

function operate(number1, number2, operator) {
  if (operator === "+") {
    result = sum(number1, number2);
    display.textContent = `${result}`;
  } else if (operator === "/") {
    if (number2 === 0) {
      display.textContent = "Can't divide by 0. Press CE to continue.";
      display.style.fontSize = "11px";
      element.forEach((btn) => btn.setAttribute("disabled", true));
      ceBtn.removeAttribute("disabled");
    }
    else {
    result = divide(number1, number2);
    display.textContent = `${result}`;
    }
  } else if (operator === "-") {
    result = subtract(number1, number2);
    display.textContent = `${result}`;
  } else if (operator === "X") {
    result = multiply(number1, number2);
    display.textContent = `${result}`;
  }
}

function handleDisplay() {
  element.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("number-btn")) {
        display.textContent += btn.textContent;
        operand = display.textContent;
        opBtn.forEach((btn) => btn.removeAttribute("disabled"));
        ceBtn.removeAttribute("disabled");
        enterBtn.removeAttribute("disabled");
      } else if (btn.classList.contains("dot-btn")) {
        display.textContent += btn.textContent;
        dotBtn.setAttribute("disabled", true);
      } else if (
        btn.textContent === "+" ||
        btn.textContent === "-" ||
        btn.textContent === "X" ||
        btn.textContent === "/"
      ) {
        if (number1 === null) {
          number1 = Number(operand);
          operator = btn.textContent;
          operand = "";
          dotBtn.removeAttribute("disabled");
          opBtn.forEach((btn) => btn.setAttribute("disabled", true));
          display.textContent = "";
        } else if (number1 !== null && number2 === null) {
          number2 = Number(operand);
          operate(number1, number2, operator);
          number1 = Number(display.textContent);
          operator = btn.textContent;
          operand = "";
          opBtn.forEach((btn) => btn.removeAttribute("disabled"));
          number2 = null;
          display.textContent = "";
          dotBtn.removeAttribute("disabled");
          console.log(number1);
          console.log(number2);
        } else if (number1 !== null && number2 !== null && operator) {
          operate(number1, number2, operator);
        }
      } else if (btn.textContent === "CE") {
        display.textContent = "";
        operand = "";
        number1 = null;
        number2 = null;
        operator = null;
        dotBtn.removeAttribute("disabled");
        numberBtn.forEach((btn) => btn.removeAttribute("disabled"));
        display.style.fontSize = "16px";
      }
    });
  });
  enterBtn.addEventListener("click", () => {
    number2 = Number(operand);
    if (number1 !== null && number2 !== null && operator) {
      operate(number1, number2, operator);
      operand = display.textContent;
      number1 = null;
      number2 = null;
      operator = null;
    }
  });
}

function displayLength() {
  element.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (display.textContent.length === 16) {
        numberBtn.forEach((btn) => btn.setAttribute("disabled", true));
        dotBtn.setAttribute("disabled", true);
      }
    });
  });
}



handleDisplay();
displayLength();

