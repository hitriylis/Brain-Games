import { getRandom, runEngine } from '../index.js';

const getDeviders = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
};

const getCorrectAnswer = (number1, number2) => {
  const deviders1 = getDeviders(number1);
  const deviders2 = getDeviders(number2);
  const result = [];
  for (let i = 0; i < deviders1.length; i += 1) {
    for (let j = 0; j < deviders2.length; j += 1) {
      if (deviders1[i] === deviders2[j]) {
        result.push(deviders1[i]);
      }
    }
  }
  return result[result.length - 1];
};

const makeRound = () => {
  const numbersCount = 100;
  const randomNumber1 = getRandom(numbersCount);
  const randomNumber2 = getRandom(numbersCount);
  const userAnswer = `Question: ${randomNumber1} ${randomNumber2}\nYour answer: `;
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2).toString();
  return [userAnswer, correctAnswer];
};

const brainGCDGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, makeRound);
};

export default brainGCDGame;
