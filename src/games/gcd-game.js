import generateRandomNumber from '../utils/generateRandomNumber.js';
import startGame from '../index.js';

const GCD_RULES = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num1 !== 0 ? getGcd(num2 % num1, num1) : String(num2));

const getGcdParams = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGcd(firstNumber, secondNumber);
  return [question, rightAnswer];
};

const runGcdGame = () => {
  const rules = GCD_RULES;

  startGame(rules, getGcdParams);
};

export default runGcdGame;
