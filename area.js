const b = document.querySelector("#base");
const h = document.querySelector("#height");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function validator() {
  let area = calcArea();
  if (Number(b.value) > 0 && Number(h.value) > 0) {
    output.innerText = "The area of triangle is " + area + " sq.cm";
  } else {
    output.innerText = "Invalid inputs";
  }
}

function calcArea() {
  let a = (b.value * h.value) / 2;
  a = a.toFixed(1);
  return a;
}

calcBtn.addEventListener("click", validator);
