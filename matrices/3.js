// function matrix_input(){
// var readlineSync = require("readline-sync")
// var a = readlineSync.questionInt(['enter the first row of your matrix : '])
// var b= readlineSync.questionInt('enter the second row of your matrix : ')
// var c = readlineSync.questionInt('enter the third row of your matrix :' )

// }

// matrix_input()


let matrix = [];
var readlineSync = require("readline-sync")
var rows = readlineSync.questionInt('enter the number of rows : ')
var columns = readlineSync.questionInt('enter the number of columns : ')
for (let i = 0; i < rows; i++) {
  let row = [];
 
  for (let j = 0; j < columns; j++) {
   
    let element = readlineSync.questionInt(`Enter element (${i},${j})`);
    row.push(element);
  var str = "";
     
   str +=matrix.push(row) + " ";
  }
  str =str + "\n"
}

console.log(str);


   