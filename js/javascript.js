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
