import generateProgression from '../utils/generateProgression.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';
import gameTamplate from '../index.js';

const getProgressParams = () => {
  const progression = generateProgression();
  const postion = generateRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[postion];
  progression[postion] = '..';

  return [progression.join(' '), rightAnswer];
};

const runProgressionGame = () => {
  const rules = 'What number is missing in the progression?';

  gameTamplate(rules, getProgressParams);
};

export default runProgressionGame;
