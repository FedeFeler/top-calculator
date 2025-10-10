const buttonContainer = document.getElementById('button-container')

dotBtn = document.createElement('button');
dotBtn.classList.add('dot-btn');
dotBtn.textContent = '.';
buttonContainer.appendChild(dotBtn);

for (let i = 9; i >= 0; i--) {
  numberBtn = document.createElement('button');
  numberBtn.classList.add('number-btn');
  numberBtn.textContent = i;
  buttonContainer.appendChild(numberBtn);
}

const upperBtnCont = document.getElementById('upper-btn');
const symbolsUpper = ["CE", "/", "X", "-"];
symbolsUpper.forEach((item) => {
  let upperBtn = document.createElement('button');
  upperBtn.classList.add('upper-btn');
  upperBtn.textContent = item;
  upperBtnCont.appendChild(upperBtn);
})

const rightBtnCont = document.getElementById("right-btn");
const symbolsRight = ["+", "Enter"];

