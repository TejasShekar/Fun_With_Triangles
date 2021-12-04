const angles = document.querySelectorAll(".angles");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calcSumOfAngles(angles) {
  let sum = 0;
  for (i = 0; i < angles.length; i++) {
    sum += Number(angles[i].value);
  }
  console.log(sum);
}

function isTriangle() {
  const sumOfAngles = calcSumOfAngles(angles);
}

checkBtn.addEventListener("click", isTriangle);