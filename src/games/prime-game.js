import generateRandomNumber from '../utils/generateRandomNumber.js';
import gameTamplate from '../index.js';
import { PRIME_RULES, YES, NO } from '../constants/messages.js';
import isNumberPrime from '../utils/isNumberPrime.js';

const getPrimeParams = () => {
  const currentNumber = generateRandomNumber();
  const rightAnswer = isNumberPrime(currentNumber) ? YES : NO;
  return [currentNumber, rightAnswer];
};

const runPrimeGame = () => {
  const rules = PRIME_RULES;

  gameTamplate(rules, getPrimeParams);
};

export default runPrimeGame;
