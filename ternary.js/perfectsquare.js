var readlineSync = require("readline-sync")
var num1 = readlineSync.questionInt("Enter the NUmber1 : ")
var d = num1**0.5
if (d%1 == 0){
    console.log("number 1 is perfect square")
} 
else {
    console,log("number 1 is not perfect square")
}