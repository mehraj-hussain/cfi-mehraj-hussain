// var readlineSync = require("readline-sync")
// var num1 = readlineSync.questionInt("Enter Number 1 : ")
// var num2 = readlineSync.questionInt("ENter Number 2 ; ")
// var num3 = readlineSync.questionFloat("enter number 3 : ")
// var num4 = readlineSync.questionInt("enter number 4 : ")
// // num1>num2 && num1> num3?console.log("number 1 is greater"):console.log(num2>num3 ? console.log("number 2 is greatest"):("number 3 is greatest"))

// if (num1 > num2 && num1 > num3) {
//     console.log("Number 1 is Greatest");
// }
// else if (num1 > num4 ){
//     console.log("number 1 in greatest")
// }
// else if (num2 > num3 && num2 > num4 )  {
//     console.log("Number 2 is Greatest");
// }
// else if (num3 > num4){
//     console.log("Number 3 is Greatest");
// }
// else {
//     console.log("number 4 is greatrer")
// }
var readlineSync = require("readline-sync")
var num1 = readlineSync.questionInt("Enter Number 1 : ")
var d = num1 **(1/2)
if (Number.isInteger(d)){
    console.log("num1 is perfect square")
}
else{
    console.log("num2 is not a perfect square ")
}



