import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculateResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect`);
  }
};

const makeRound = () => {
  const randomNumber1 = getRandomInRange(0, 100);
  const randomNumber2 = getRandomInRange(0, 100);
  const randomOperator = getRandomOperator();
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}\nYour answer: `;
  const correctAnswer = calculateResult(randomNumber1, randomNumber2, randomOperator).toString();
  return [question, correctAnswer];
};

const brainCalcGame = () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, makeRound);
};

export default brainCalcGame;
