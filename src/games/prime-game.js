import generateRandomNumber from '../utils/generateRandomNumber.js';
import startGame from '../index.js';

const YES = 'yes';
const NO = 'no';
const PRIME_RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  if (number === 1) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeParams = () => {
  const currentNumber = generateRandomNumber();
  const rightAnswer = isNumberPrime(currentNumber) ? YES : NO;
  return [currentNumber, rightAnswer];
};

const runPrimeGame = () => {
  startGame(PRIME_RULES, getPrimeParams);
};

export default runPrimeGame;
