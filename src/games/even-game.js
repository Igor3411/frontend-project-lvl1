import generateRandomNumber from '../utils/generateRandomNumber.js';
import gameTamplate from '../index.js';

const getEvenParams = () => {
  const currentNumber = generateRandomNumber();
  const rightAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
  return [currentNumber, rightAnswer];
};

const runEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameTamplate(rules, getEvenParams);
};

export default runEvenGame;
