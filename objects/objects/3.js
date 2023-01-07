var obj = {};

/*
 {
    a: [9, 99, 999],
    b: [1, 2, 3, 4, 5],
    c: ["abc", { a: 11, b: 12 }]
}
*/

obj.a = [9, 99, 999];
obj.b = [1, 2, 3, 4, 5]
obj.c = ["abc", {
    a: 11,
    b: 12
}]

console.log(obj)

// //How to Extract All the Keys from Object
// //How to Extract All Values from an Object

// //For In Loop

// //Get Keys
for (x in obj){
    console.log(x);
}
console.log("These are Values");
//Get Values
for (x in obj){
    console.log(obj[x]);
}
console.log('keys')
var keys = Object.keys(obj);
console.log(keys);
console.log('values')
var values = Object.values(obj);
console.log(values);
