import readlineSync from 'readline-sync';
import name from '../cli.js';
import generateRandom from '../index.js';

const numbersCount = 99;
const minProgLength = 5;
const maxProgLength = 10;
const minProgStep = 1;
const maxProgStep = 10;
const operationsCount = 3;

const generateRandomIntInclusive = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const brainProgGame = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < operationsCount; i += 1) {
    const result = [];
    const progStep = generateRandomIntInclusive(minProgStep, maxProgStep);
    const progLength = generateRandomIntInclusive(minProgLength, maxProgLength);
    const firstNumber = generateRandom(numbersCount);
    const lastNumber = firstNumber + ((progLength - 1) * progStep);

    for (let j = firstNumber; j <= lastNumber; j += progStep) {
      result.push(j);
    }

    const getCorrectAnswer = (correct, answer) => {
      let trueAnswer;
      if (correct === answer) {
        trueAnswer = answer;
      } else {
        trueAnswer = correct;
      }
      return trueAnswer.toString();
    };

    const deletedIndex = generateRandom(progLength);
    const deletedNumber = result.splice(deletedIndex, 1, '..');
    const progToString = result.join(' ');

    const userAnswer = readlineSync.question(`Question: ${progToString}\nYour answer: `);
    const correctAnswer = getCorrectAnswer(deletedNumber, userAnswer);

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

export default brainProgGame;
