var readlineSync=require("readline-sync")
var m = readlineSync.question("enter the number : ")
if (m % 3 == 0){
    console.log("The number is divisible by 3")
}
else {console.log("number is not divisible by 3")}