const hourPlace = document.querySelector("#hour");
const minPlace = document.querySelector("#min");
const secPlace = document.querySelector("#sec");
const milSecPlace = document.querySelector("#mil-sec");
const Btn = document.querySelector("button");
let milSec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let isStoped = false;
let setIntervalTimer;

Btn.addEventListener("click", timerHandler);
function timerHandler() {
  if (isStoped) {
    clearInterval(setIntervalTimer);
  } else {
    setIntervalTimer = setInterval(() => {
      timerFunction();
    }, 1);
  }

  isStoped = !isStoped;
}

window.addEventListener('keydown' , e => {
  if(e.key === ' '){
    timerHandler();
  }
})

function timerFunction() {
  showValuesInDom(milSecPlace, milSec);
  showValuesInDom(secPlace, sec);
  showValuesInDom(minPlace, min);
  showValuesInDom(hourPlace, hour);

  milSec++;

  if (milSec === 100) {
    milSec = 0;
    sec++;

  }

  if (sec === 60) {
    sec = 0;
    min++;

  }
  
  if (min === 60) {
    min = 0;
    hour++;
  }
}

// show values in dom
function showValuesInDom(element, value) {
  // just work on textContent
  element.textContent = value;
}
