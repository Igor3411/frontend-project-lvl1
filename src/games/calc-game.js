import generateRandomNumber from '../utils/generateRandomNumber.js';
import generateRandomElementFromArray from '../utils/generateRandomElementFromArray.js';
import resolveExpression from '../utils/resolveExpression.js';
import { operations } from '../constants/other.js';
import gameTamplate from '../index.js';

const getCulcParams = () => {
  const leftOperand = generateRandomNumber();
  const rightOperand = generateRandomNumber();
  const operation = generateRandomElementFromArray(operations);
  const result = resolveExpression(leftOperand, rightOperand, operation);
  const question = `${leftOperand} ${operation} ${rightOperand}`;

  return [question, result];
};

const runCulcGame = () => {
  const rules = 'What is the result of the expression?';

  gameTamplate(rules, getCulcParams);
};

export default runCulcGame;
