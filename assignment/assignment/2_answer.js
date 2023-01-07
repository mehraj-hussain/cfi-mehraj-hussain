//Question 2:
/*Take and Input and Tell if a Number is a Perfect Square or Not
*/
var readlineSync=require("readline-sync")
var a =readlineSync.questionInt("Enter A Number : ")
if (m=a**0.5 % 1 ==0 ){
    console.log("Number is a Perfect Square")
}
else{console.log("Number is not a Perfect Square")}