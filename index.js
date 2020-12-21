const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; 

let timerId = null;

function changeColor() {
  startBtn.disabled = true;

  if (timerId === null) {
    timerId = setInterval(() => {
    body.style.backgroundColor = 
    colors[randomIntegerFromInterval(0, colors.length-1)];
    }, 1000);}
}

function stop() {
  startBtn.disabled = false;
  clearInterval(timerId);
  timerId = null;  
}