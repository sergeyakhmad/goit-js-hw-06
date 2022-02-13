const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener('input', onImputElInput);

function onImputElInput(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
};