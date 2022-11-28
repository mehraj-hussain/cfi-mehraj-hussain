var readlineSync =require("readline-sync")
var a = readlineSync.question("enter number 1 : ")
var b =readlineSync.question("enter number 2: ")
//CLI menu 
console.log("------------------------------")
console.log("simple calculator for maths")
console.log("------------------------------")
console.log("press + for additon \n press - for subtraction \n press * for multiplication \n press / for division \n press % to find the modulus of both numbers" )
var symbol= readlineSync.question("Enter the desired task to perform : ")
switch (symbol) {
    case "+" :
        console.log(a + b)
        
        break;
    case "-" :
        console.log(a-b)
        break;

    case "*" :
        console.log(a*b)
        break;    
    case "/" :
        console.log(a/b)
        break;
    case  "%":
    console.log(a%b)
        break;
    default:
        console.log("invalid input")
        break;
}

