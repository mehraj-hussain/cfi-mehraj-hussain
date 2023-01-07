// console.log('hey')


// const num = 20
// console.time()
// var fact = 5
// var i = 1 
// while(i <= num){
//     fact = fact *i
//     i++
// }
// console.log(fact)
// console.timeEnd()




// a = new Array(30)
// a.fill("*")

// console.time();
// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a.length; j++) {
//         console.log(a[i])
    
// }
// }
// console.timeEnd();

console.time()
var n =1
function factorial(n){
    if ((n==0) || (n==1)){
        return 1;
    }
    return n*factorial(n-1)
}

console.log(factorial(90))
console.timeEnd()