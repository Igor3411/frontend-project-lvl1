import readlineSync from 'readline-sync';
import sayHello from '../cli.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';
import { countEvenGames } from '../constants/numbers.js';

const runEvenGame = () => {
  const name = sayHello();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < countEvenGames; i += 1) {
    const currentNumber = generateRandomNumber();
    const isNumberEven = currentNumber % 2 === 0;

    console.log(`Question: ${currentNumber}`);

    const answer = readlineSync.question('Your answer: ');
    const isAnswerRight = (isNumberEven && answer === 'yes') || (!isNumberEven && answer === 'no');

    if (!isAnswerRight) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${currentNumber % 2 === 0 ? 'yes' : 'no'}.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runEvenGame;
