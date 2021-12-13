import { operations } from '../constants/other.js';

const resolveExpression = (leftOperand, rightOperand, operation) => {
  let result = NaN;
  switch (operation) {
    case operations[0]:
      result = leftOperand * rightOperand;
      break;
    case operations[1]:
      result = leftOperand - rightOperand;
      break;
    case operations[2]:
      result = leftOperand + rightOperand;
      break;
    default:
      break;
  }
  return String(result);
};

export default resolveExpression;
