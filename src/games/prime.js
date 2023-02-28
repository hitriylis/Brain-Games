import { getRandom, runEngine } from '../index.js';

const getCorrectAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }

  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

const makeRound = () => {
  const numbersCount = 99;
  const randomNumber = getRandom(numbersCount);
  const userAnswer = `Question: ${randomNumber}\nYour answer: `;
  const correctAnswer = getCorrectAnswer(randomNumber);
  return [userAnswer, correctAnswer];
};

const brainEvenGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, makeRound);
};

export default brainEvenGame;
