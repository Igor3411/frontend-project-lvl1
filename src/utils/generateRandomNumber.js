const MAX_RANDOM_NUMBER = 100;

const generateRandomNumber = (min = 0, max = MAX_RANDOM_NUMBER) => {
  const ceiledMin = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - ceiledMin + 1)) + ceiledMin;
};

export default generateRandomNumber;
