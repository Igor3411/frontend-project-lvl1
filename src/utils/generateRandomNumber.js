import { maxRandomNumber } from '../constants/numbers.js';

const generateRandomNumber = (min = 0, max = maxRandomNumber) => {
  const ceiledMin = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - ceiledMin + 1)) + ceiledMin;
};

export default generateRandomNumber;
