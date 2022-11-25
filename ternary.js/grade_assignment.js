var readlineSync= require("readline-sync")
var marks = readlineSync.questionInt("enter marks : ")
if (marks >100 || marks<0 ){
    console.log("Invalid Input")
}
else if (marks >= 90){
    console.log("O grade")
}
else if (marks >= 80){
    console.log("A grade")
}
else if (marks >= 70){
    console.log("B grade")
}
else if (marks >= 60){
    console.log("C grade")
}
else if (marks >= 50){
    console.log("D grade")

}
else if (marks >= 40){
    console.log("E grade")
}
else{
    console.log("Fail")
}