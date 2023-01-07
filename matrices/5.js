function printMatrix(){
    for(let i=0; i< matrix.length;i++){
        let str = '';
        for (let j=0; j<matrix[i].length;j++){
        str = str + matrix[i][j] + ' '
    }
    console.log(str)

}
}

let matrix1 = [[1, 2, 3], [2, 4, 8], [10, 20, 30]]
printMatrix(matrix1)