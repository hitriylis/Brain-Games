import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (rules, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}!\n${rules}`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    const userAnswer = readlineSync.question(`${question}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getUserName}!`);
};

export default runEngine;
