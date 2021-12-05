const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "90°", "Hypotenuse", "Polygon"];

function calcScore() {
  let score = 0;
  let i = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === correctAnswers[i]) {
      score += 1;
    }
    i += 1;
  }
  output.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calcScore);