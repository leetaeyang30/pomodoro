import { state } from './state.js';
import { showTime, setTimer } from './timer.js';

const buttonStart = document.querySelector('.control__btn--start');
const buttonStop = document.querySelector('.control__btn--stop');
const nav = document.querySelector('.navigation');
const navButtons = document.querySelectorAll('.navigation__btn');

navButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].classList.remove('navigation__btn--active');
    }
    evt.target.classList.add('navigation__btn--active');
    state.status = evt.target.dataset.use;
    state.timeLeft = state[evt.target.dataset.use];
    showTime(state[state.status]);
  })
});

const startTimer = () => {
  if (state.isActive) {
    clearTimeout(state.timerId);
    state.isActive = false;
    buttonStart.textContent = 'Старт';

  } else {
    state.isActive = true;
    buttonStart.textContent = 'Пауза';
    setTimer();
  }
};

const stopTimer = () => {
  clearTimeout(state.timerId);
  state.isActive = false;
  buttonStart.textContent = 'Старт';
  showTime(state[state.status]);
};

const switchMode = (dataUse) => {
  const mode = nav.querySelector(`[data-use="${dataUse}"]`);
  for (let i = 0; i < navButtons.length - 1; i++) {
    navButtons[i].classList.remove('navigation__btn--active');
  }

  mode.classList.add('navigation__btn--active')
}

const initControl = () => {
  buttonStart.addEventListener('click', startTimer);
  buttonStop.addEventListener('click', stopTimer);
}

export { initControl, buttonStart, startTimer, buttonStop, stopTimer, switchMode };