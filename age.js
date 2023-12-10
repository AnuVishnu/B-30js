var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your age '));
if(0<a && a<=12){
    console.log("You are a child.");
}
else if(13<=a && a<=19){
    console.log('You are a teenager.');
}
else if(20<=a && a<=59){
    console.log("You are an adult.");
}
else if(a>=60){
    console.log("you are a senior citizen.");
}
else{
    console.log('Invalid input.');
}