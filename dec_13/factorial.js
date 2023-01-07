// var readlineSync = require('readline-sync')
// var n = readlineSync.questionInt("Enter the number to find its factorial : ")
// function factorial(n){
// if (n == 0 || n ==1){
// return 1;
// }
// var j
// j= n*factorial(n-1)
// return j

// }



// function mul(i){
//     if (i==6){
//         return
//     }
//     else{
//         console.log(i)
//         return mul(++i)
//     }
// }/adnanali-in/cfi_b22_classwork
// mul(1)

function f(n) {
        if (n == 0) return;
        console.log(n % 3)
        f(Math.floor(n / 3))
    }
    f(45)