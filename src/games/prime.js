import readlineSync from 'readline-sync';
import name from '../cli.js';
import getRandom from '../index.js';

const numbersCount = 99;
const operationsCount = 3;

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

const getCorrectAnswer = (correct, answer) => {
  let trueAnswer;
  if (correct === answer) {
    trueAnswer = answer;
  } else {
    trueAnswer = correct;
  }
  return trueAnswer.toString();
};

const brainEvenGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < operationsCount; i += 1) {
    const randomNumber = getRandom(numbersCount);
    const isPrimeRandomNumber = isPrime(randomNumber);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    const correctAnswer = getCorrectAnswer(isPrimeRandomNumber, userAnswer);
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

export default brainEvenGame;
