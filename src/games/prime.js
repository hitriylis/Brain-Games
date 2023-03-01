import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
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
  const randomNumber = getRandomInRange(0, 100);
  const question = `Question: ${randomNumber}\nYour answer: `;
  const correctAnswer = isPrime(randomNumber);
  return [question, correctAnswer];
};

const brainPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, makeRound);
};

export default brainPrimeGame;
