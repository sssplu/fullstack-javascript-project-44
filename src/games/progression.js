import _ from 'lodash';

export const description = 'What number is missing in the progression?';

const createProgression = () => {

const startNumber = _.random(0, 100);
const index = _.random(0, 100);
const maxStep = _.random(5, 10);

const progression = [startNumber];

for (let step = 1; step < maxStep; step++) {
const currentElement = startNumber + index * step;
progression.push(currentElement);
}

return progression;
};

export default () => {
const progression = createProgression(); 
const randomStep = _.random(0, progression.length - 1);  

const result = `${progression[randomStep]}`;

progression[randomStep] = '..';
const task = progression.join(' ');

return [task, result];
};
