import generateRandomNumber from '../utils/generateRandomNumber.js';
import gameTamplate from '../index.js';
import getGcd from '../utils/getGcd.js';
import { GCD_RULES } from '../constants/messages.js';

const getGcdParams = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGcd(firstNumber, secondNumber);
  return [question, rightAnswer];
};

const runGcdGame = () => {
  const rules = GCD_RULES;

  gameTamplate(rules, getGcdParams);
};

export default runGcdGame;
