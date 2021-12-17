import readlineSync from 'readline-sync';

const GAMES_COUNT = 3;

const startGame = (rules, getGameParams) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < GAMES_COUNT; i += 1) {
    const [question, rightAnswer] = getGameParams();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const isAnswerRight = answer === rightAnswer;

    if (!isAnswerRight) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
