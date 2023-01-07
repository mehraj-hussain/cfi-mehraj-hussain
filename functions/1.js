//What is a Function?

function isEven(element) {
    if (element % 2) console.log("The Number is Odd");
    else console.log("Number is Even");
}

isEven(30);
isEven(15);
isEven(-15);
isEven(100);
isEven(1000000);
isEven(19);


//Another Format

var isitEven = (element) => {
    if (element % 2) console.log("The Number is Odd");
    else console.log("Number is Even");
}
console.log((isitEven));

isitEven(100);
isitEven(1000000);
isitEven(19);

console.log(isNaN("N"));
console.log(+"Q")
console.log(Number.isInteger(parseInt("1")));
// A.15a.25b.12