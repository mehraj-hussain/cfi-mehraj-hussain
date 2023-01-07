// //Question 4:
// //Perform Subtraction of 2 Numbers without using Minus Sign
var readlineSync=require("readline-sync")
var a = readlineSync.questionInt("Enter a Number : ")
var b = readlineSync.questionInt("Enter another Number : ")
console.log(a + (~b+1))
