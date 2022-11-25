var readlineSync= require ("readline-sync")
var a = readlineSync.questionInt("enter a number")
if (a%2 == 0) {
    console.log("the number is even")
}
else {
    console.log("the numbe is odd")
}
