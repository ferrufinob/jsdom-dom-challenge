"use strict";
// ad list data-num="" when liked, put number in between span
//disable other buttons when paised
const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likes = document.querySelector(".likes");

let seconds = -1; // will start at 0
// setInterval invokes function multiple times until window is closed
let timer = setInterval(startTimer, 1000); // 1000 will run it every 1 second
function startTimer() {
  seconds = seconds + 1;
  counter.innerText = seconds;
}

pause.addEventListener("click", pauseResumeTimer);
plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);

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

function increment() {
  seconds++;
}

// don't let it decrease to negative seconds
function decrement() {
  if (seconds >= 0) {
    seconds--;
  }
}

// user clicks heart
//is displayed number in a like list and the number of times number was liked
// will have key/ value number and count
heart.addEventListener("click", liked);
// let numbers = {};
let clicks = 0;
function liked(num) {
  clicks += 1;
  let countNumber = parseInt(counter.innerText);
  const li = document.createElement("li");
  //fix later, this is wronf
  li.innerText += `${countNumber} has been liked ${clicks} times.`;
  likes.appendChild(li);
}
