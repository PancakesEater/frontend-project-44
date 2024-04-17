import { questionModule } from '../cli.js';

export default function calc() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const sign = ['+', '-', '*'];
  const rndInt = randomNumber(0, 2);
  const rNum1 = Math.floor(Math.random() * 10);
  const rNum2 = Math.floor(Math.random() * 10);
  let realAnswer = 0;
  let solution = '';
  switch (sign[rndInt]) {
    case '+':
      solution = (`${rNum1} + ${rNum2} = `);
      realAnswer = (rNum1 + rNum2);
      break;
    case '-':
      solution = (`${rNum1} - ${rNum2} = `);
      realAnswer = (rNum1 - rNum2);
      break;
    case '*':
      solution = (`${rNum1} * ${rNum2} = `);
      realAnswer = (rNum1 * rNum2);
      break;
  }
  const answer = questionModule(solution, realAnswer, 'num');
  return answer;
}