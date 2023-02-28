import { getRandom, runEngine } from '../index.js';

const getRandomOperator = () => {
  const roundsCount = 3;
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(roundsCount)];
  return randomOperator;
};

const makeRound = () => {
  const numbersCount = 100;
  const randomNumber1 = getRandom(numbersCount);
  const randomNumber2 = getRandom(numbersCount);
  const randomOperator = getRandomOperator();

  const getCorrectAnswer = (number1, number2) => {
    let result = 0;
    if (randomOperator === '+') {
      result = number1 + number2;
    }
    if (randomOperator === '-') {
      result = number1 - number2;
    }
    if (randomOperator === '*') {
      result = number1 * number2;
    }
    return result.toString();
  };

  const userAnswer = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}\nYour answer: `;
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);
  return [userAnswer, correctAnswer];
};

const brainCalcGame = () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, makeRound);
};

export default brainCalcGame;
