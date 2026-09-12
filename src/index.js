import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

export default (description, getQuestionAnswer) => {

  const name = greeting();
  console.log(description);

  let correct = true;

  for (let i = 0; i < 3 && correct; i++) {
    const [question, rightAnswer] = getQuestionAnswer(); 
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    }
    else {
      correct = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    }
  }

  if (correct) {
    console.log(`Congratulations, ${name}!`);
  }
}
