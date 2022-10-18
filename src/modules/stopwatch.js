import { stopwatch } from './selectors.js';

const start = (hour, minute, second) => {
  setInterval(() => {
    stopwatch.innerHTML = `${hour} : ${minute} : ${second}`;
    second -= 1;
    if (second === 0 && minute !== 0) {
      second = 60;
      minute -= 1;
    } else if (second === 0 && minute === 0 && hour !== 0) {
      hour -= 1;
      minute = 60;
      second = 60;
    } else if (hour === 0 && minute === 0 && second === 0) {
      return false;
    }
  }, 1000);
};

export default start;