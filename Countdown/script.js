const hourShowPlace = document.querySelector("#hour-place");
const minShowPlace = document.querySelector("#min-place");
const secShowPlace = document.querySelector("#sec-place");
const hourInput = document.querySelector("#hour-input");
const minInput = document.querySelector("#min-input");
const form = document.querySelector("#form");
const stopBtn = document.querySelector(".stop");
const setTimeAgainBtn = document.querySelector('#set-time-again');
const modalTimeFinished = document.querySelector('.countdown-finished')
let hour, min;
let sec = 5;
let countDownInterval;
let isStop = false;


// form submited handler
form.addEventListener("submit", formHandler);
function formHandler(e) {
  e.preventDefault();
  // get inputs value
  hour = Number(getInputValue(hourInput));
  min = Number(getInputValue(minInput));
  // countdown function
  countDownInterval = setInterval(() => {
    countdownApp();
  }, 1000);
  // show rest btn
  stopBtn.style.bottom = "5%";
  resetInputValue(hourInput);
  resetInputValue(minInput);
}
// stop handler
stopBtn.addEventListener("click", stopHandler);
function stopHandler() {
  isStop = !isStop;
  if (isStop) {
    clearInterval(countDownInterval);
    stopBtn.textContent = "start";
  } else {
    countDownInterval = setInterval(() => {
      countdownApp(hour, min, sec);
    }, 1000);
    stopBtn.textContent = "stop";
  }
}
// countdown functionality
function countdownApp() {
  // remove form Event , user dosen't allow set time again
  form.removeEventListener("submit", formHandler);
  // show in dom hour min and sec
  showValuesInDom(hourShowPlace, hour);
  showValuesInDom(minShowPlace, min);
  showValuesInDom(secShowPlace, sec);

  // check
  if (sec > 0) {
    sec--;
  } else if (sec === 0 && min > 0) {
      min--;
      sec = 5;
  } else if (min === 0 && hour > 0) {
    hour--;
    min = 5;
    sec = 5;
  }


  if (hour === 0 && min === 0 && sec === 0) {
    clearInterval(countDownInterval);
    modalTimeFinished.style.top = '0px';
  }
}
// set time again function
setTimeAgainBtn.addEventListener('click' , setTimeAgainHandler);
function setTimeAgainHandler(){
    form.addEventListener("submit", formHandler);
    stopBtn.style.bottom = "-50%";
    hourShowPlace.textContent = '00';
    minShowPlace.textContent = '00';
    secShowPlace.textContent = '00';
    modalTimeFinished.style.top = '-100%';
}
// this give me input value
function getInputValue(element) {
  return element.value;
}
// this reset the input vlaues
function resetInputValue(element) {
  element.value = "";
}
// show values in dom
function showValuesInDom(element, value) {
  // just work on textContent
  element.textContent = value;
}
