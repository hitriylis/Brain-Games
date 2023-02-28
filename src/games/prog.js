import { getRandom, runEngine } from '../index.js';

const getRandomIntInclusive = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

const makeRound = () => {
  const numbersCount = 100;
  const minProgLength = 5;
  const maxProgLength = 10;
  const minProgStep = 1;
  const maxProgStep = 10;
  const result = [];
  const progStep = getRandomIntInclusive(minProgStep, maxProgStep);
  const progLength = getRandomIntInclusive(minProgLength, maxProgLength);
  const firstNumber = getRandom(numbersCount);
  const lastNumber = firstNumber + ((progLength - 1) * progStep);

  for (let j = firstNumber; j <= lastNumber; j += progStep) {
    result.push(j);
  }

  const deletedIndex = getRandom(progLength);
  const deletedNumber = result.splice(deletedIndex, 1, '..');
  const progToString = result.join(' ');

  const userAnswer = `Question: ${progToString}\nYour answer: `;
  const correctAnswer = getCorrectAnswer(deletedNumber, userAnswer);
  return [userAnswer, correctAnswer];
};

const brainProgGame = () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, makeRound);
};

export default brainProgGame;
