import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const generateProgressoin = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const makeRound = () => {
  const progressionStart = getRandomInRange(0, 100);
  const progressionStep = getRandomInRange(1, 10);
  const progressionLength = getRandomInRange(5, 10);
  const progression = generateProgressoin(progressionStart, progressionStep, progressionLength);

  const hiddenIndex = getRandomInRange(0, progressionLength - 1);
  const hiddenNumber = progression.splice(hiddenIndex, 1, '..');
  const progressionToString = progression.join(' ');

  const question = `Question: ${progressionToString}`;
  const correctAnswer = hiddenNumber.toString();
  return [question, correctAnswer];
};

const runBrainProgGame = () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, makeRound);
};

export default runBrainProgGame;
