var readlineSync = require('readline-sync')
var a = readlineSync.questionInt('Enter a Number : ');
if (a == 1)(console.log('1 is not a prime number'));
var x =true
if (a > 1) {
    for( i = 2; i< a ; i++){
        
        if (a % i ==0){
            x=false
            break;
        }

        }
        if (x){
            console.log('prime')}
            else{console.log('not prime')}
        }
