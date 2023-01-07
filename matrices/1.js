// // what is matrix ?
// //1D array
// // vetcors are 1D
// let array = [1,2,3,4,5]

// //matrices are 2 dimensional 

// let matrix = [[1,2],[2,3]]

// console.log([0][0])

// //ad amtrix

// let dim2 = [[1,2],[3,4]]

let d1 = [[1,2,3],[2,4,8],[10,20,30]]
for (i=0 ; i< 3 ; i++){
    for (j=0;j<3;j++){
            console.log(d1[i][j])
}
}
// // let matrixx = [[1,2,3],[2,4,8],[10,20,30]]
// let str = ''
// for (let i =0; i<matrixx.length;i++){
//     for (let j = 0; j<matrixx[i].length; j++){
//         str = str + matrixx[i][j] + " "
//     }
//      str = str + '\n'
// }

          
//     console.log(str)

// let a = 
d = ([[1,2,3],[2,4,8],[10,20,30]])
function maatrix(d){  
let str = ''
for (let i =0; i<d.length;i++){
    for (let j = 0; j<d[i].length; j++){
        str = str + d[i][j] + " "
    }
     str = str + '\n'
}

          
    console.log(str)

}


maatrix(d)


//8888888888888888888888
// print the diagonal elements in different colour
// function of matrix
//access the diagonal a matrix


function matrix(){
    //let a = []
    var readlineSync = require('readline-sync')
    var rows = readlineSync.questionInt('Enter the number of rows : ')
    var columns = readlineSync.questionInt('Enter the number of columns : ')
    let arr = []
    for(let i=0; i<rows ;i++){
        arr[i] = []
        for (let j=0; j<columns ; j++){
            arr = readlineSync.questionInt(`enter the elements of a matrix arr${[i]}${[j]}`)
           arr += arr[i,j] + ' '
        }

        //arr.push(i)
    }
    console.log(arr)
}

matrix()