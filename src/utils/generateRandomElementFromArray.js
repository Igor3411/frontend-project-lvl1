import generateRandomNumber from './generateRandomNumber.js';

const generateRandomElementFromArray = (array) => array[generateRandomNumber(0, array.length - 1)];

export default generateRandomElementFromArray;
