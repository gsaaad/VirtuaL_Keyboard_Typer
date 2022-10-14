const topRow = "QWERTYUIOP";
const middleRow = "ASDFGHJKL";
const bottomRow = "ZXCVBNM";
const numKeys = "1234567890";
const qwertyKeys = topRow + middleRow + bottomRow;
const specialKeys = "~!@#$%^&*()_+-=,./<>?;'::|[]{}";
const buttonsContainer = document.getElementById("buttonsContainer");
const input = document.getElementById("input");
const card = document.getElementById("card");

const words = [
  "hello",
  "world",
  "yes",
  "no",
  "yes",
  "no",
  "no",
  "no",
  "no",
  "no",
  "no",
  "no",
];
card.textContent = words;
function renderKeyboard() {
  // console.log(qwertyKeys.split(""));
  const fragment = document.createDocumentFragment();
  qwertyKeys.split("").forEach((letter) => {
    //   console.log(letter);
    const letterButton = document.createElement("button");
    letterButton.textContent = letter;
    letterButton.setAttribute("class", "m-1");
    letterButton.setAttribute("id", "Keys");
    fragment.appendChild(letterButton);
  });
  buttonsContainer.appendChild(fragment);
}
renderKeyboard();
// render keyboard
const keys = document.querySelectorAll("button");

const p = document.getElementById("input");

function type() {
  console.log(this.textContent);
  p.value += this.textContent;
}
function inputEntry(e) {
  console.log(e.target.value);
}

keys.forEach((key) => {
  key.addEventListener("click", type);
});

input.addEventListener("change", (e) => {
  console.log(e.target);
});
