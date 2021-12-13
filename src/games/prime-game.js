import generateRandomNumber from '../utils/generateRandomNumber.js';
import gameTamplate from '../index.js';
import isNumberPrime from '../utils/isNumberPrime.js';

const getPrimeParams = () => {
  const currentNumber = generateRandomNumber();
  const rightAnswer = isNumberPrime(currentNumber);
  return [currentNumber, rightAnswer];
};

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameTamplate(rules, getPrimeParams);
};

export default runPrimeGame;
