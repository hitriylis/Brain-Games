import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const getCommonDevider = (number1, number2) => {
  if (number1 === 0) {
    return number2;
  }
  return getCommonDevider(number2 % number1, number1);
};

const makeRound = () => {
  const randomNumber1 = getRandomInRange(0, 100);
  const randomNumber2 = getRandomInRange(0, 100);
  const userAnswer = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getCommonDevider(randomNumber1, randomNumber2).toString();
  return [userAnswer, correctAnswer];
};

const runBrainGCDGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, makeRound);
};

export default runBrainGCDGame;
