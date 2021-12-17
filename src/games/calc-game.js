import generateRandomNumber from '../utils/generateRandomNumber.js';
import startGame from '../index.js';

const CALC_RULES = 'What is the result of the expression?';
const OPERATIONS = ['*', '-', '+'];

const generateRandomElementFromArray = (array) => array[generateRandomNumber(0, array.length - 1)];

const resolveExpression = (leftOperand, rightOperand, operation) => {
  switch (operation) {
    case '*':
      return leftOperand * rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '+':
      return leftOperand + rightOperand;
    default:
      return NaN;
  }
};

const getCalcParams = () => {
  const leftOperand = generateRandomNumber();
  const rightOperand = generateRandomNumber();
  const operation = generateRandomElementFromArray(OPERATIONS);
  const result = resolveExpression(leftOperand, rightOperand, operation);
  const question = `${leftOperand} ${operation} ${rightOperand}`;

  return [question, String(result)];
};

const runCalcGame = () => {
  const rules = CALC_RULES;

  startGame(rules, getCalcParams);
};

export default runCalcGame;
