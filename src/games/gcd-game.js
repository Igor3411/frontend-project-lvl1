import generateRandomNumber from '../utils/generateRandomNumber.js';
import gameTamplate from '../index.js';

const getGcd = (num1, num2) => (num1 !== 0 ? getGcd(num2 % num1, num1) : String(num2));

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
