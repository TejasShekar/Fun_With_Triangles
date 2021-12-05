const b = document.querySelector("#base");
const h = document.querySelector("#height");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function calcArea() {
  let area = (b.value*h.value)/2;
  area = area.toFixed(1);
  output.innerText = "The area of triangle is " + area + " sq.cm";
}

calcBtn.addEventListener("click", calcArea);