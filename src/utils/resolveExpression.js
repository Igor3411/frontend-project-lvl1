import { OPERATIONS } from '../constants/other.js';

const resolveExpression = (leftOperand, rightOperand, operation) => {
  let result = NaN;
  switch (operation) {
    case OPERATIONS[0]:
      result = leftOperand * rightOperand;
      break;
    case OPERATIONS[1]:
      result = leftOperand - rightOperand;
      break;
    case OPERATIONS[2]:
      result = leftOperand + rightOperand;
      break;
    default:
      break;
  }
  return String(result);
};

export default resolveExpression;
