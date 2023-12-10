var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter an integer '));
if(a<0){
    console.log("This is a negative number.");
}
else if(a==0){
    console.log('This is a zero.');
}
else {console.log("This is a positive number.");
}