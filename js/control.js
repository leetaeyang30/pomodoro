import { state } from './state.js';
import { setTimer } from './timer.js';

const buttonStart = document.querySelector('.control__btn--start');

const initControl = () => {
  buttonStart.addEventListener('click', () => {
    if (state.isActive) {
      clearTimeout(state.timerId);
      state.isActive = false;
      buttonStart.textContent = 'Старт';

    } else {
      state.isActive = true;
      buttonStart.textContent = 'Пауза';
      setTimer();
    }
  });
}

export { initControl, buttonStart };