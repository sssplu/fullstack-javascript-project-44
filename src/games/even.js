import _ from 'lodash';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const n = _.random(0, 100);
  return [n, (n % 2 === 0) ? 'yes' : 'no'];
};
