import _ from 'lodash';

export const description = 'Find the greatest common divisor of given numbers.';

export default () => {
let n1 = _.random(0, 100);
let n2 = _.random(0, 100); 

const task = `${n1} ${n2}`;

while (n2 !== 0) {
const temp = n2;
n2 = n1 % n2;
n1 = temp;
}

const result = `${n1}`;

return [task, result];
};
