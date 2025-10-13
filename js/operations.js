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

function display() {
  let element = document.querySelectorAll(".keyboard-btn");
  let display = document.querySelector(".display");
  element.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent !== "CE" && btn.textContent !== "Enter") {
        display.textContent += btn.textContent;
      } else if (btn.textContent === "CE") {
        display.textContent = "";
      }
    });
  });
}
display();
