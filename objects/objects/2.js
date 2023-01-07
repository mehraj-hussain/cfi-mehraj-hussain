// var readlineSync = require('readline-sync');
// //Computed Properties

//  var name = readlineSync.question("Enter the Name : ");
// // console.log(name);
var object = {
    adnan: {
        age: 21,
        email: "adnan@code.in"
    },
    ilyas: {
        age: 24,
        email: "ilyas@codeforindia.com"
    },
    ateeq: {
        age: 21,
        email: "ateeq@code.in"
    },
    "x-auth-token": "Asdagjkdsahjnankhndaljsnhjkdasjnhlealdsfkh"
}

// console.log(object[name])
console.log(object.ateeq.age)
console.log(object['x-auth-token'])
console.log(typeof (object));

var arr = [1, 2]
console.log(typeof (arr));

console.log(object);
object['attributes'] = "This is an Attribute";
console.log(object);
object.adnan.age = 25;
console.log(object);
