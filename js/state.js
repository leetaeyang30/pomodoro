const WORK__TIME = 25;
const BREAK__TIME = 5;
const RELAX__TIME = 20;

export const state = {
  timeLeft: WORK__TIME * 60,
  work: WORK__TIME * 60,
  break: BREAK__TIME * 60,
  relax: RELAX__TIME * 60,
  workCount: 4,
  status: 'work',
  isActive: false,
  timerId: 0,
};