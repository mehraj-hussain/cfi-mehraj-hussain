//YOU WILL DO THE HARDWORK TODAY and you'll be win, you're powerful, just don't let boos take over it.
//import readlineSync from 'readline-sync';
import let rows =readlineSync.questionInt('enter the number of rows')
 let cols =readlineSync.questionInt('enter the number of cols ')

 let arr = new Array(rows)
 //3x3

 for(i=0;i<rows; i++){
    arr[i] = new Array(cols)
 }

 for (i = 0; i<rows; i++){
    
    for(j=0; j < cols ; j++){
       arr[i][j] = readlineSync.questionInt(`enter the elements ${i} ${j} : `)

    }
    console.log(arr)
 }