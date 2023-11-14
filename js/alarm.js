const audio = new Audio('audio/august.mp3');

const alarm = () => {
  audio.play();
};

export { alarm };