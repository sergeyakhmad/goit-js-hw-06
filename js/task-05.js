const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
const userName = 'Anonymous';

nameInputEl.addEventListener("input", onNameInputElChange);

function onNameInputElChange(event) {
  nameOutputEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameOutputEl.textContent = userName;
    };
};