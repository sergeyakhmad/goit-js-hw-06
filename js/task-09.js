function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const textColorValueEl = document.querySelector('.color');

buttonEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColorValueEl.textContent = getRandomHexColor();
};
