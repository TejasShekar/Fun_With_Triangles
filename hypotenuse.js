const a = document.querySelector("#a");
const b = document.querySelector("#b");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function calcHypotenuse() {
  if(Number(a.value) > 0 && Number(b.value) > 0){
    const sum = a.value * a.value + b.value * b.value;
  let hypotenuse = (Math.sqrt(sum));
  hypotenuse = hypotenuse.toFixed(1);
  output.innerText = "The hypotenuse of the triangle is " + hypotenuse + " cm";
  }else{
    output.innerText = "Invalid inputs";
  }
}

calcBtn.addEventListener("click", calcHypotenuse);