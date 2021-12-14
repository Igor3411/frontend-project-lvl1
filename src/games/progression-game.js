import generateProgression from '../utils/generateProgression.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';
import { EMPTY_SYMBOL } from '../constants/other.js';
import { PROGRESSION_RULES } from '../constants/messages.js';
import gameTamplate from '../index.js';

const getProgressParams = () => {
  const progression = generateProgression();
  const postion = generateRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[postion];
  progression[postion] = EMPTY_SYMBOL;

  return [progression.join(' '), rightAnswer];
};

const runProgressionGame = () => {
  const rules = PROGRESSION_RULES;

  gameTamplate(rules, getProgressParams);
};

export default runProgressionGame;
