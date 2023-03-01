import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const makeRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const question = `Question: ${randomNumber}\nYour answer: `;
  const correctAnswer = isEven(randomNumber);
  return [question, correctAnswer];
};

const brainEvenGame = () => {
  const rules = "Answer 'yes' if the number is even, otherwise answer 'no'.";
  runEngine(rules, makeRound);
};

export default brainEvenGame;
