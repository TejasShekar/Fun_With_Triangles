const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "90°", "Hypotenuse", "Polygon"];

function calcScore() {
  let score = 0;
  let i = 0;
  let count = 0;
  const formResult = new FormData(quizForm);
  console.log(formResult);
  for (let value of formResult.values()) {
    if (value === correctAnswers[i]) {
      score += 1;
    }
    i += 1;
    count += 1;
  }
  if (count === 5) {
    output.innerText = "Your Total Score is : " + score;
} else {
  output.innerText = "Please answer all questions";
}
}

submitBtn.addEventListener("click", calcScore);