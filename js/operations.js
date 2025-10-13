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

let number1;
let number2;
let operator;

function operate(number1, number2, operator) {}

function handleDisplay() {
  element.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("number-btn")) {
        display.textContent += btn.textContent;
        opBtn.forEach((btn) => btn.removeAttribute("disabled"));
        ceBtn.removeAttribute("disabled");
        enterBtn.removeAttribute("disabled");
      } else if (btn.classList.contains("dot-btn")) {
        display.textContent += btn.textContent;
        dotBtn.setAttribute("disabled", true);
      } else if (btn.textContent === "CE") {
        display.textContent = "";
        dotBtn.removeAttribute("disabled");
        numberBtn.forEach((btn) => btn.removeAttribute("disabled"));
      } else if (
        btn.textContent === "+" ||
        btn.textContent === "-" ||
        btn.textContent === "X" ||
        btn.textContent === "/"
      ) {
        display.textContent += btn.textContent;
        opBtn.forEach((btn) => btn.setAttribute("disabled", true));
        dotBtn.removeAttribute("disabled");
      }
    });
  });
}

function displayLength() {
  element.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (display.textContent.length === 16) {
        opBtn.forEach((btn) => btn.setAttribute("disabled", true));
        numberBtn.forEach((btn) => btn.setAttribute("disabled", true));
        dotBtn.setAttribute("disabled", true);
      }
    });
  });
}
handleDisplay();
displayLength();
