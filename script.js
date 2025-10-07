const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector("#resetValue");

let startCount = 0;
let intervalId = null; // important to check if timer already running

// Start timer
const startTimer = () => {
  // Prevent multiple intervals
  if (intervalId !== null) return;

  countDownElement.innerText = startCount;
  intervalId = setInterval(() => {
    countDownElement.innerText = ++startCount;
  }, 1000);
};

document.querySelector(".start-btn").addEventListener("click", startTimer);

// Stop timer
const stopTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector(".stop-btn").addEventListener("click", stopTimer);

// Reset timer
const resetTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
  startCount = 0;
  countDownElement.innerText = 0;
};
document.querySelector(".reset-btn").addEventListener("click", resetTimer);

// Get time
const getTimeFun = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `The stop time is ${startCount}`;
  resetValueElement.innerHTML = "";
  resetValueElement.append(newPara);
};
document.querySelector(".getTime-btn").addEventListener("click", getTimeFun);

// Clear time display
const clearAll = () => {
  resetValueElement.innerHTML = "";
};
document.querySelector(".clear-btn").addEventListener("click", clearAll);
