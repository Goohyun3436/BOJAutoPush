let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

A > B ? console.log(">") : A < B ? console.log("<") : console.log("==");