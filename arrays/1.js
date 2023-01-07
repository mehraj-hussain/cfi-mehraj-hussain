// fruits =['apple','banana','cherry']
// console.log(fruits.length)
// console.log(Object.keys(fruits))
// fruits[3] = 'pineapple'
// console.log(fruits)
// fruits.length = 5
// console.log(fruits)
// fruits.length = 1
// console.log(fruits)
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
//const start = -3;
const removedItems = fruits.splice(-5, -2);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);