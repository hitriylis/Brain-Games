import readlineSync from 'readline-sync';
import name from './cli.js';
import brainEvenGame from './games/even.js';

const operationsCount = 3;

const gameLogic = () => {
  for (let i = 0; i < operationsCount; i += 1) {
    const getRound = brainEvenGame();
    const getAnswer = readlineSync.question(getRound[0]);
    if (getAnswer === getRound[1]) {
      if (i < (operationsCount - 1)) {
        console.log('Correct!');
      }
    } else {
      return (`'${getAnswer}' is wrong answer ;(. Correct answer was '${getRound[1]}'.\nLet's try again, ${name}!`);
    }
  }
  return (`Correct!\nCongratulations, ${name}!`);
};

export default gameLogic;
