const angles = document.querySelectorAll(".angles");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calcSumOfAngles(angles) {
  let sum = 0;
  for (i = 0; i < angles.length; i++) {
    sum += Number(angles[i].value);
  }
  return sum;
}

function isTriangle() {
  const sumOfAngles = calcSumOfAngles(angles);
  if (sumOfAngles === 180) {
    output.innerText = "Congratulations ! The angles form a triangle 🥳";
  } else {
    output.innerText = "Sorry ! The angles don't form a triangle 😶";
  }
}

checkBtn.addEventListener("click", isTriangle);
