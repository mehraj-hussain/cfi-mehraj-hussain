//What is Object?
//https://javascript.info/object

var mohsin = {
    "age": 100,
    "weight": 160,
    "iq": 0,
    "special_attributes": ["Always Sleeping", "Always Talking", "Always Late"],
    height: "5ft",
    weight2: 500,
    others: {
        password: "Something",
        phone: "+911234567890"
    },
    height: "6ft"
}

console.log(mohsin.age);
console.log(mohsin.height);
console.log(mohsin.special_attributes[2]);
console.log(mohsin.weight2);
console.log(mohsin.others["password"]);

console.log(mohsin.height);
console.log(mohsin["height"]);
