import generateRandomNumber from '../utils/generateRandomNumber.js';
import gameTamplate from '../index.js';
import { EVEN_RULES, YES, NO } from '../constants/messages.js';

const getEvenParams = () => {
  const currentNumber = generateRandomNumber();
  const rightAnswer = currentNumber % 2 === 0 ? YES : NO;
  return [currentNumber, rightAnswer];
};

const runEvenGame = () => {
  const rules = EVEN_RULES;

  gameTamplate(rules, getEvenParams);
};

export default runEvenGame;
