const a = document.querySelector("#a");
const b = document.querySelector("#b");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function calcHypotenuse() {
  console.log("clicked");
}

calcBtn.addEventListener("click", calcHypotenuse);
