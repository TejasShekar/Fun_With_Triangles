const angles = document.querySelectorAll(".angles");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calcSumOfAngles(angles) {
  var sum = 0;
  for (let i = 0; i < angles.length ; i++) {
    sum = sum + Number(angles[i].value);
  }
  return sum;
}


function isTriangle() {
  if(Number(angles[0].value) > 0 && Number(angles[1].value) > 0 && Number(angles[2].value) > 0){
    const sumOfAngles = calcSumOfAngles(angles);
    if (sumOfAngles === 180) {
      output.innerText = "Congratulations ! The angles form a triangle 🥳";
    } else {
      output.innerText = "Sorry ! The angles don't form a triangle 😶";
    }
  }else{
    output.innerText = "Please enter valid inputs";
  }
    
}

checkBtn.addEventListener("click", isTriangle);
