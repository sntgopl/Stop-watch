import _ from 'lodash';
import { hoursSet, minutesSet, secondsSet, startBtn } from './modules/selectors';
import start from './modules/stopwatch';
import './style.css';

startBtn.addEventListener('click', (e) => {
  start(hoursSet.value, minutesSet.value, secondsSet.value);
  console.log('hi');
});