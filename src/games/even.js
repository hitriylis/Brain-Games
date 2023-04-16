import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const makeRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, makeRound);
};

export default runBrainEvenGame;
