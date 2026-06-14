function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxesArray = [];
  let initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${initialSize}px`;
    box.style.height = `${initialSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    initialSize += 10;
    boxesArray.push(box);
  }

  destroyBoxes();
  boxesContainer.append(...boxesArray);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
createBtn.addEventListener('click', () => {
  const amount = Number(inputNum.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNum.value = '';
  }
});
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});