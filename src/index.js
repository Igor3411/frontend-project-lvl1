import readlineSync from 'readline-sync';
import sayHello from './cli.js';
import { GAMES_COUNT } from './constants/numbers.js';

const gameTamplate = (rules, getGameParams) => {
  const name = sayHello();

  console.log(rules);

  for (let i = 0; i < GAMES_COUNT; i += 1) {
    const [question, rightAnswer] = getGameParams();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const isAnswerRight = answer === rightAnswer;

    if (!isAnswerRight) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameTamplate;
