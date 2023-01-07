// Question 3:
// Take a Number as Input and
// a) Display Multiple of 3 if its a multiple of 3
// b) Display Multiple of 5 if its a multiple of 5
// c) Display Multiple of both 3 & 5 if its a multiple of bothEx :Input: 3 -> Multiple of 3
// Input : 9 -> Multiple of 3
// Input : 20 -> Multiple of 5
// Input : 15 -> Multiple of 3 and 5
// 

var readlineSync=require("readline-sync")
var a=  readlineSync.questionInt("Enter a Number : ")
if ((a%3==0) && (a%5==0)){ (console.log("Multiple of 3 and 5"))
}
else if (a%3==0){
    console.log("Multiple of 3")
}
else if(a%5==0){console.log("Multiple of 5")}

else{console.log("Not a Multiple of 3 and 5")}