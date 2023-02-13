import readlineSync from 'readline-sync';
import name from '../cli.js';
import generateRandom from '../index.js';

const numbersCount = 99;
const operationsCount = 3;
const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const randomOperator = operators[generateRandom(operationsCount)];
  return randomOperator;
};

const brainCalcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = generateRandom(numbersCount);
    const randomNumber2 = generateRandom(numbersCount);
    const randomOperator = getRandomOperator();
    let result = 0;

    const getCorrectAnswer = (number1, number2) => {
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

    const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);
    const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      if (i < 2) {
        console.log('Correct!');
      }
    } else {
      return (`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return (`Correct!\nCongratulations, ${name}!`);
};

export default brainCalcGame;
