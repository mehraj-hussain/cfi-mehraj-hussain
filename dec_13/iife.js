//()) = => // syntax of iife function

//immediate invoke function expression


//for(i = 0; i<2; i ++){
readlineSync= require('readline-sync')
var m = readlineSync.questionInt('ENter a value')
var n = readlineSync.questionInt('ENter a value')
var sum =(m,n) =>{ 
return m +n
}



console.log(sum(m,n))

//
var mul = (m,n) => {
    return m * n
}
console.log(mul(m,n))

//
var div = (m,n) => {
    return m/n
}
console.log(div(n,m))

//
var exponent = (m,n) =>{
return m**n
}
console.log(exponent(m,n));

(m=> {
    
    return m+2
})
console.log(m)