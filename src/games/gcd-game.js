import generateRandomNumber from '../utils/generateRandomNumber.js';
import gameTamplate from '../index.js';
import getGcd from '../utils/getGcd.js';

const getGcdParams = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGcd(firstNumber, secondNumber);
  return [question, rightAnswer];
};

const runGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  gameTamplate(rules, getGcdParams);
};

export default runGcdGame;
