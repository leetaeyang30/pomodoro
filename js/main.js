import { initControl } from './control.js';
import { state } from './state.js';
import { pomodoroCount, showTime } from './timer.js';


const initPomodoro = () => {
  showTime(state.work);
  initControl();
  state.currentTask = {
    pomodoro: 0,
  }
  pomodoroCount.textContent = state.currentTask.pomodoro;
};

initPomodoro();