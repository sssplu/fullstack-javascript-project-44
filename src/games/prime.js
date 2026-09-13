import _ from 'lodash';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {

  if (n === 2) {
    return true;
  }

  if (n < 2 || n % 2 === 0) {
    return false
  }

  const squareNumber = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= squareNumber; i += 2) {
    if (n % i === 0) {
      return false 
    }
  }

  return true

};

export default () => {
  const n = _.random(0, 100);
  const result = isPrime(n) ? 'yes' : 'no';

  return [n, result];
};
