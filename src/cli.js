import readlineSync from 'readline-sync';

let name = '';

const greeting = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greeting;
export {name};
