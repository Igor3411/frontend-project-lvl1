import generateRandomNumber from '../utils/generateRandomNumber.js';
import startGame from '../index.js';
import { YES, NO } from '../constants/messages.js';

const EVEN_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenParams = () => {
  const currentNumber = generateRandomNumber();
  const rightAnswer = currentNumber % 2 === 0 ? YES : NO;
  return [currentNumber, rightAnswer];
};

const runEvenGame = () => {
  const rules = EVEN_RULES;

  startGame(rules, getEvenParams);
};

export default runEvenGame;
