import readlineSync from 'readline-sync';
import name from '../cli.js';
import generateRandom from '../index.js';

const operationsCount = 3;

const getCorrectAnswer = (number) => {
  let trueAnswer;
  if (number % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const brainEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < operationsCount; i += 1) {
    const randomNumber = generateRandom();
    const correctAnswer = getCorrectAnswer(randomNumber);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      if (i < (operationsCount - 1)) {
        console.log('Correct!');
      }
    } else {
      return (`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
    }
  }
  return (`Correct!\nCongratulations, ${name}!`);
};

export default brainEvenGame;
