readlineSync=require('readline-sync');
var n = readlineSync.questionInt('Enter array numbers : ')
var a =[]
for(i=0 ; i< n ; i++){
    a[i] = readlineSync.questionInt("Enter number : ")

} 
function addition(){
    sum = 0
    for(i=0;i<n;i++){
        sum = sum +a[i]+

    }
    return sum
}

    

console.log(addition(a))
console.log(sum/n)

    // b = new Array(n)
// console.log(b.length)
// function addition( n)
// sum = 0
// for(i=0; i<=n.length ; i++){
//  sum = sum +n(i)
// }
// console.log(sum)
// console.log(sum/n)






// var readlineSync=require('readline-sync');
// var arr = readlineSync('enter the numbers')



// var a = new Array()
// function sumOfArray([]){
//     sum =
// }