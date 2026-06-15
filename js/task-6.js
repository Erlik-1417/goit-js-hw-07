function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  const boxesArray = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesArray.push(box);

    size += 10;
  }

  boxesContainer.append(...boxesArray);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  const amount = Number(inputAmount.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputAmount.value = "";
  }
});

btnDestroy.addEventListener("click", destroyBoxes);
