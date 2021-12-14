import generateRandomNumber from '../utils/generateRandomNumber.js';
import generateRandomElementFromArray from '../utils/generateRandomElementFromArray.js';
import resolveExpression from '../utils/resolveExpression.js';
import { OPERATIONS } from '../constants/other.js';
import { CALC_RULES } from '../constants/messages.js';
import gameTamplate from '../index.js';

const getCalcParams = () => {
  const leftOperand = generateRandomNumber();
  const rightOperand = generateRandomNumber();
  const operation = generateRandomElementFromArray(OPERATIONS);
  const result = resolveExpression(leftOperand, rightOperand, operation);
  const question = `${leftOperand} ${operation} ${rightOperand}`;

  return [question, result];
};

const runCalcGame = () => {
  const rules = CALC_RULES;

  gameTamplate(rules, getCalcParams);
};

export default runCalcGame;
