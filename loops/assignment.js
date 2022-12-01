
//Assignment - 1 Week 4

/*
Create a CLI Application with the Follow Instructions
******************************
        AREA CALCULATOR
******************************
1. Press 1 to Select Square
2. Press 2 to Select Circle
3. Press 3 to Select Rectangle
4. Press 4 to Select Triangle
Please Enter your Choice : 
*/

//CLI MENU

console.log("***********************")
console.log("    AREA CALCULATOR")
console.log("***********************")
console.log("1. Press 1 to Select Square \n2. Press 2 to Select Circle \n3. Press 3 to Select Rectangle \n4. Press 4 to Select Triangle")
var readlineSync = require("readline-sync")
var unit = "unit"+"\u{00b2}"
var area= readlineSync.questionInt("Please Enter Your Choice : ")
switch(area) {
    case 1 :
        var a = readlineSync.questionInt("Enter a Side of Square : ")
        area = a**2
        console.log("The area of a Square is ", area, unit)
        break;
    case 2 :
        var a= readlineSync.questionInt('Enter the radius of the circle : ')
        console.log("The area of a circle is " , 2 * 3.13 * a, unit)
        break;
    case 3:
        var a = readlineSync.questionInt('Enter the length of a rectangle : ')
        var b = readlineSync.questionInt('ENter the bredth of a rectangle : ')
        console.log("The area of a rectangle is " , a*b, unit)   
        break;
    case 4 :
        var a =readlineSync.questionInt('Enter first side of a triangle : ')
        var b =readlineSync.questionInt('Enter second side of a triangle : ')
        var c = readlineSync.questionInt("Enter 3rd side of a triangle : ")
        s = (a+b+c)/2
             
        m=((s*((s-a)*(s-b)*(s-c)))**(1/2))
        
        console.log('the area of a triangle is' , m, unit)

        break;

    default :
        console.log("Invalid Input")
    break;
}

