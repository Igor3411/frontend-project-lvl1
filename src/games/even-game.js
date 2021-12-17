import generateRandomNumber from '../utils/generateRandomNumber.js';
import startGame from '../index.js';

const YES = 'yes';
const NO = 'no';
const EVEN_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenParams = () => {
  const questionNumber = generateRandomNumber();
  const rightAnswer = questionNumber % 2 === 0 ? YES : NO;
  return [questionNumber, rightAnswer];
};

const runEvenGame = () => {
  startGame(EVEN_RULES, getEvenParams);
};

export default runEvenGame;
