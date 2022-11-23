var a;
a=("hello world")
console.log(a)
b=("HBD")
console.log(a+b)
console.log(a+"   "+100+3000)
console.log(010)//to print any octal numbers give 0 as starting digit, and number will be octal
console.log(10)//if no 0 is given at first js treate no as decimal
console.log("octal")
var octal = 1101;
//console.log(+(octal))//unary +converts the one form to other form
console.log(octal)//parsting is used to conver 
//
//var octal = 0111;
octal = "0" + octal
console.log((octal));

//
console.log("stings")
/*
"   "
'  '
`  ` type literals
*/
var a = "hello"
console.log(a)
//
// var a = 40, b = 20, c = 30;
var a = "hello", b = 20, c = 30;


var sum = a + b + c;
//The Sum of a=10, b=20, c=30 is = 60

console.log("The Sum of a=" + a + ", b=" + b + " ,c=" + c + " is = " + sum);
 var a = 40, b = 20, c = 30;
//var a = "hello", b = 20, c = 30;


var sum = a + b + c;
//The Sum of a=10, b=20, c=30 is = 60
console.log(sum)

console.log("The Sum of a=" + a + ", b=" + b + " ,c=" + c + " is = " + sum);

console.log(`The Sum of a=${a}, b=${b}, c=${c} is = ${a+b+c}`);
console.log(`The Sum of a=${a}, b=${b}, c=${c} is = ${a+b+c}`);
console.log("the sum of a ="+ a +", b=" +20 +",c=" +c+ " is="+sum)
console.log(`the sum of a=${a},b=${b},c=${c} is = ${sum}`)