// Set selectos for input form & button
const hoursSet = document.querySelector('#hours-st');
const minutesSet = document.querySelector('#minutes-st');
const secondsSet = document.querySelector('#seconds-st');
const startBtn = document.querySelector('#start');
// Set selectors for display stopwatch
const stopwatch = document.querySelector('#time');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');
// Set selectors for SPA (Single Page App)
const inputScreen = document.querySelector('#time-set');
const stopwatchScreen = document.querySelector('#time-run');

export {
  hoursSet, minutesSet, secondsSet,
  startBtn, stopwatch, pauseBtn, stopBtn,
  inputScreen, stopwatchScreen,
};