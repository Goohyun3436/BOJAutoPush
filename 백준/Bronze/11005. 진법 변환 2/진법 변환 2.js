let [N, B] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
console.log(N.toString(B).toUpperCase());