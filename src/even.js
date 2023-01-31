import readlineSync from 'readline-sync';
import name from './cli.js';

console.log(`Hello, ${name}!`);

const generateRandom = () => Math.round(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => {
  let trueAnswer;
  if (isEven(number)) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const brainEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandom();
    const correntAnswer = getCorrectAnswer(randomNumber);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (correntAnswer === userAnswer) {
      if (i < 2) {
        console.log('Correct!');
      }
    } else {
      return (`'${userAnswer}' is wrong answer ;(. Correct answer was '${correntAnswer}'\nLet's try again, ${name}!`);
    }
  }
  return (`Congratulations, ${name}!`);
};

export default brainEvenGame;
