import { maxRandomNumber } from '../constants/numbers.js';

const generateRandomNumber = () => Math.floor(Math.random() * maxRandomNumber);

export default generateRandomNumber;
