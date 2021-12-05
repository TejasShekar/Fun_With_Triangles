const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ['90°', 'right angled'];

function clicked(){
    console.log("clicked");
}

submitBtn.addEventListener("click", clicked);