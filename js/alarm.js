import { state } from './state.js';

const audio = {
  work: new Audio('audio/work.mp3'),
  break: new Audio('audio/break.mp3'),
  relax: new Audio('audio/relax.mp3'),
};

const alarm = () => {
  audio[state.status].play();
};

export { alarm };