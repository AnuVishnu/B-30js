var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your grade '));
if(a>=60){
    console.log("You are passed.");
}
else if(a>=0){
    console.log("You are failed.");
}
else{console.log("Invalid input.");
}