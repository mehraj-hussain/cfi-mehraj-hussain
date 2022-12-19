import chalk from 'chalk'
let d = [[1,2,3],[2,4,8],[10,20,30]]
function maatrix(d){  
let str = ''
for (let i =0; i<d.length;i++){
    for (let j = 0; j<d[i].length; j++){
        str += d[i][j] + " "
    }
     str = str + '\n'
}

          
    console.log(str)

}


maatrix(d)

