import generateRandomNumber from '../utils/generateRandomNumber.js';
import startGame from '../index.js';

const MIN_LENGTH_PROGRESSION = 5;
const MAX_LENGTH_PROGRESSION = 10;
const PROGRESSION_RULES = 'What number is missing in the progression?';
const EMPTY_SYMBOL = '..';

const generateProgression = (step, length, startNumber) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(String(startNumber + i * step));
  }
  return result;
};

const getProgressParams = () => {
  const stepProgression = generateRandomNumber();
  const lengthProgression = generateRandomNumber(MIN_LENGTH_PROGRESSION, MAX_LENGTH_PROGRESSION);
  const startElementProgression = generateRandomNumber();
  const progression = generateProgression(
    stepProgression,
    lengthProgression,
    startElementProgression,
  );
  const hiddenElementIndex = generateRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = EMPTY_SYMBOL;

  return [progression.join(' '), rightAnswer];
};

const runProgressionGame = () => {
  const rules = PROGRESSION_RULES;

  startGame(rules, getProgressParams);
};

export default runProgressionGame;
