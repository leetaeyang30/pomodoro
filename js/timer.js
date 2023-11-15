import { alarm } from './alarm.js';
import { state } from './state.js';
import { buttonStart, buttonStop, startTimer, stopTimer, switchMode } from './control.js';
import { addZero } from './util.js';

const minElement = document.querySelector('.time__minutes');
const secElement = document.querySelector('.time__seconds');
const pomodoroCount = document.querySelector('.count__num');

const showTime = (seconds) => {
  minElement.textContent = addZero(Math.floor(seconds / 60));
  secElement.textContent = addZero(seconds % 60);
};

const setTimer = () => {
  state.timeLeft--;
  showTime(state.timeLeft);

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(setTimer, 1000);
  }
  if (state.timeLeft <= 0) {
    buttonStart.textContent = 'Старт';

    if (state.status === 'work') {
      state.currentTask.pomodoro++;
      pomodoroCount.textContent = state.currentTask.pomodoro;

      if (state.currentTask.pomodoro % state.workCount) {
        state.status = 'break';

      } else {
        state.status = 'relax';

      }
    } else {
      state.status = 'work';
    }
    alarm();
    state.timeLeft = state[state.status];
    switchMode(state.status);
    setTimer();
  }

};

export { setTimer, showTime, pomodoroCount }