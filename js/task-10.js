function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputAmountEl = document.querySelector('#controls > input');
const createBoxesButtonEl = document.querySelector('button[data-create]');
const destroyBoxesButtonEl = document.querySelector('button[data-destroy]');
const boxesDivEl = document.querySelector('#boxes');

createBoxesButtonEl.addEventListener('click', onCreateBoxesBtnClick);
destroyBoxesButtonEl.addEventListener('click', onDestroyBoxesBtnClick);

function onCreateBoxesBtnClick() {
  inputAmountEl.addEventListener;
  const amount = inputAmountEl.value;
  
  createBoxes(amount);
  inputAmountEl.value = '';
};

let boxesArray = [];

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = boxesArray.length; i < Number(amount) + boxesArray.length; i++) {
    const box = document.createElement('div');
    const firstWidth = 30;
    const firstHeigth = 30;

    box.style.width = `${firstWidth + i * 10}` + 'px';
    box.style.height = `${firstHeigth + i * 10}` + 'px';
    box.style.backgroundColor = getRandomHexColor();

    newBoxes.push(box);
  };
  boxesDivEl.append(...newBoxes);
  boxesArray.push(...newBoxes);
};

function onDestroyBoxesBtnClick() {
  boxesDivEl.innerHTML = '';
  boxesArray = [];
};