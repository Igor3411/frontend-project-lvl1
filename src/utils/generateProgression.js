import generateRandomNumber from './generateRandomNumber.js';
import { MIN_LENGTH_PROGRESSION, MAX_LENGTH_PROGRESSION } from '../constants/numbers.js';

const generateProgression = () => {
  const step = generateRandomNumber();
  const length = generateRandomNumber(MIN_LENGTH_PROGRESSION, MAX_LENGTH_PROGRESSION);
  const startNumber = generateRandomNumber();

  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(String(startNumber + i * step));
  }
  return result;
};

export default generateProgression;
