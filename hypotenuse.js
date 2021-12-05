const a = document.querySelector("#a");
const b = document.querySelector("#b");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function calcHypotenuse() {
  if(a.value&&b.value){
    const sum = a.value * a.value + b.value * b.value;
  let hypotenuse = (Math.sqrt(sum));
  hypotenuse = hypotenuse.toFixed(1);
  output.innerText = "The hypotenuse of the triangle is " + hypotenuse + " cm";
  }else{
    output.innerText = "Please enter the sides of the triangle !";
  }
}

calcBtn.addEventListener("click", calcHypotenuse);