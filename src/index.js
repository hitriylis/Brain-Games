import readlineSync from 'readline-sync';
import name from './cli.js';

const roundsCount = 3;

export const getRandom = (number) => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  return getRandomInt(number);
};

export const runEngine = (rules, makeRound) => {
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    const userAnswer = readlineSync.question(question);

    if (userAnswer === correctAnswer) {
      if (i < (roundsCount - 1)) {
        console.log('Correct!');
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Correct!\nCongratulations, ${name}!`);
};
