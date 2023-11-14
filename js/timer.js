import { alarm } from './alarm.js';
import { state } from './state.js';
import { buttonStart } from './control.js';

const minElement = document.querySelector('.time__minutes');
const secElement = document.querySelector('.time__seconds');

const showTime = (seconds) => {
  minElement.textContent = Math.floor(seconds / 60);
  secElement.textContent = seconds % 60;
};

const setTimer = () => {
  state.timeLeft--;
  showTime(state.timeLeft);

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(setTimer, 1000);
  }

  if (state.timeLeft <= 0) {
    alarm();
    buttonStart.textContent = 'Старт';
  }
};

export { setTimer }