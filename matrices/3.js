// function matrix_input(){
// var readlineSync = require("readline-sync")
// var a = readlineSync.questionInt(['enter the first row of your matrix : '])
// var b= readlineSync.questionInt('enter the second row of your matrix : ')
// var c = readlineSync.questionInt('enter the third row of your matrix :' )

// }

// matrix_input()


let matrix = [];
var readlineSync = require("readline-sync")

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    let element = readlineSync.questionInt(`Enter element (${i},${j})`);
    row.push(element);
  }
  matrix.push(row);
}

console.log(matrix);


function squareMatrix(){
    for( )
}