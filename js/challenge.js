"use strict";

const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likes = document.querySelector(".likes");
const form = document.querySelector("#comment-form");
const inputField = document.querySelector("#comment-input");
const commentDiv = document.querySelector("#list");

let seconds = -1;
let timer = setInterval(startTimer, 1000); // 1000 will run it every 1 second

function startTimer() {
  seconds++;
  counter.innerText = seconds;
}

function pauseResumeTimer() {
  // cancels setInterval()
  if (pause.innerText == "pause") {
    clearInterval(timer);
    // change text and disable buttons
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.innerText = "resume";
  } else {
    // revert back: refactor this later
    // resume timer
    timer = setInterval(startTimer, 1000);
    pause.innerText = "pause";
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
  }
}

pause.addEventListener("click", pauseResumeTimer);
plus.addEventListener("click", () => {
  seconds++;
});
minus.addEventListener("click", () => {
  if (seconds >= 0) {
    seconds--;
  }
});

// event delegation
function addComment(comment) {
  commentDiv.innerHTML += `<li>${comment}</li>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addComment(e.target.comment.value);
  form.reset();
});
