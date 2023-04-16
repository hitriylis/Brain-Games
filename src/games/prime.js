import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const isPrimeOrNot = () => (isPrime(randomNumber) ? 'yes' : 'no');
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isPrimeOrNot(randomNumber);
  return [question, correctAnswer];
};

const runBrainPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, makeRound);
};

export default runBrainPrimeGame;
