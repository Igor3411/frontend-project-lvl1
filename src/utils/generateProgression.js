import generateRandomNumber from './generateRandomNumber.js';
import { minLengthProgression, maxLengthProgression } from '../constants/numbers.js';

const generateProgression = () => {
  const step = generateRandomNumber();
  const length = generateRandomNumber(minLengthProgression, maxLengthProgression);
  const startNumber = generateRandomNumber();

  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(String(startNumber + i * step));
  }
  return result;
};

export default generateProgression;
