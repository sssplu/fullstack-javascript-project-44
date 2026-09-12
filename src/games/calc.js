import _ from 'lodash';

export const description = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default () => {
  const n1 = _.random(0, 100);
  const n2 = _.random(0, 100);

  const keys = Object.keys(operations);
  const operator = keys[_.random(0, keys.length - 1)]; 

  const task = `${n1} ${operator} ${n2}`;
  const result = String(operations[operator](n1, n2));

  return [task, result];
};
