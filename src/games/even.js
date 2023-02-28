import { getRandom, runEngine } from '../index.js';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const makeRound = () => {
  const numbersCount = 100;
  const randomNumber = getRandom(numbersCount);
  const question = `Question: ${randomNumber}\nYour answer: `;
  const correctAnswer = getCorrectAnswer(randomNumber);
  return [question, correctAnswer];
};

const brainEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, makeRound);
};

export default brainEvenGame;
