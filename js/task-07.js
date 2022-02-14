const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener('input', onImputElInput);
textEl.style.fontSize = inputEl.value + 'px';
function onImputElInput(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
};