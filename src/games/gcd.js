import readlineSync from 'readline-sync';
import name from '../cli.js';
import generateRandom from '../index.js';

const operationsCount = 3;

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
  return (result[result.length - 1]).toString();
};

const brainGCDGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < operationsCount; i += 1) {
    const randomNumber1 = generateRandom();
    const randomNumber2 = generateRandom();
    const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);
    const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      if (i < (operationsCount - 1)) {
        console.log('Correct!');
      }
    } else {
      return (`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return (`Correct!\nCongratulations, ${name}!`);
};

export default brainGCDGame;
