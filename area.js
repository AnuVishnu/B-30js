var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter the length(m) '));
let b= parseInt(readlineSync.question('enter the width(m) '));
let area=a*b;
console.log("area of the rectangle is", area, 'sq.m' );