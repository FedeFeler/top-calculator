const buttonContainer = document.getElementById("button-container");

dotBtn = document.createElement("button");
dotBtn.classList.add("dot-btn");
dotBtn.classList.add("keyboard-btn");
dotBtn.textContent = ".";
buttonContainer.appendChild(dotBtn);

for (let i = 9; i >= 0; i--) {
  numberBtn = document.createElement("button");
  numberBtn.classList.add("number-btn");
  numberBtn.classList.add(`${i}`);
  numberBtn.classList.add("keyboard-btn");
  numberBtn.textContent = i;
  buttonContainer.appendChild(numberBtn);
}

const upperBtnCont = document.getElementById("upper-btn");
const symbolsUpper = ["CE", "/", "X", "-"];
symbolsUpper.forEach((item) => {
  let upperBtn = document.createElement("button");
  upperBtn.classList.add("upper-btn");
  upperBtn.classList.add("keyboard-btn");
  upperBtn.textContent = item;
  if (
    upperBtn.textContent === "-" ||
    upperBtn.textContent === "X" ||
    upperBtn.textContent === "/"
  ) {
    upperBtn.classList.add("operator-btn");
  }
  if (upperBtn.textContent === "CE") {
    upperBtn.classList.add("CE-button");
  }
  upperBtn.setAttribute("disabled", true);
  upperBtnCont.appendChild(upperBtn);
});

const rightBtnCont = document.getElementById("right-btn");
const symbolsRight = ["+", "Enter"];
symbolsRight.forEach((item) => {
  let rightBtn = document.createElement("button");
  rightBtn.classList.add("right-btn");
  rightBtn.classList.add("keyboard-btn");
  rightBtn.textContent = item;
  if (rightBtn.textContent === "+") {
    rightBtn.classList.add("operator-btn");
  }
  if (rightBtn.textContent === "Enter") {
    rightBtn.classList.add("enter-btn");
  }
  rightBtn.setAttribute("disabled", true);
  rightBtnCont.appendChild(rightBtn);
});
