#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash';
import greeting, {name} from '../src/cli.js';

const isEven = (n) => {
  return (n % 2 === 0) ? 'yes' : 'no';
};

console.log('Welcome to the Brain Games!');
greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correct = true;

for (let i = 0; i < 3 && correct; i++) {
  const n = _.random(0, 100);
  console.log(`Question: ${n}`);
  
  const userAnswer = readlineSync.question('Your answer: ');
  const result = isEven(n);
  
  if (userAnswer === result) {
    console.log('Correct!');
  }
  else {
    correct = false;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
  }
}
 
if (correct) {
  console.log(`Congratulations, ${name}!`);
}
  
