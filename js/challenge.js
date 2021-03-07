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

//!! avoid type coercion issues down the road by using parseInt() always!!
const count = () => (counter.innerText = parseInt(counter.innerText) + 1);

plus.addEventListener("click", count);
minus.addEventListener("click", () => counter.innerText--);
pause.addEventListener("click", () => {
  if (counter.classList.contains("paused")) {
    paused();
  } else {
    resumed();
  }
  toggleButtons();
});

function resumed() {
  counter.classList.add("paused");
  pause.innerText = "pause";
  clearInterval(timer);
}

function paused() {
  counter.classList.remove("paused");
  pause.innerText = "resume";
  timer = setInterval(count, 1000);
}

function toggleButtons() {
  document.querySelectorAll("button").forEach((button) => {
    if (button.id !== "pause") {
      button.disabled = !button.disabled;
    }
  });
}

let timer = setInterval(count, 1000);

let hash = {}; // {number: likes}
heart.addEventListener("click", function () {
  let number = counter.innerHTML;
  console.log(hash);
  if (hash[number]) hash[number]++;
  else hash[number] = 1;
  commentDiv.insertAdjacentHTML(
    "beforeend",
    `<li>${counter.innerHTML} has ${hash[number]} like(s)!</li>`
  );
});

function addComment(comment) {
  commentDiv.insertAdjacentHTML("beforeend", `<li>${comment}</li>`);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addComment(e.target.comment.value);
  form.reset();
});
