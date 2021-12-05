const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

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
  console.log(score);
}

submitBtn.addEventListener("click", calcScore);