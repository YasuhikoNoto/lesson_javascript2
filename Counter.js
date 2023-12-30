'use strict';
let num = 0;
function updateCounter(num) {
  const counter = document.getElementById('counter');
  counter.textContent = num;
}

function countUp() {
  num++;
  updateCounter(num);
}

function reset() {
  num = 0;
  updateCounter(num);
}

const countUpBtn = document.getElementById('countUpButton');
countUpBtn.addEventListener('click', countUp, false);

const resetBtn = document.getElementById('resetButton');
resetBtn.addEventListener('click', reset, false);