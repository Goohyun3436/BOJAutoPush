let input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const [a1, a0] = input[0].split(' ').map(Number);
const c = parseInt(input[1]);
const n0 = parseInt(input[2]);

console.log(a1 * n0 + a0 <= c * n0 && a1 <= c ? '1' : '0');