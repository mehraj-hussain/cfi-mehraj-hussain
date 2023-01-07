var readlineSync=require("readline-sync")
var Marks = readlineSync.questionInt("Enter Marks :")
if (Marks >100 | Marks < 0){
	console.log("Invalid Input")
}
else if (Marks >= 90){
	console.log("Grade O")
}
else if(Marks >=80 ){
	console.log("Grade A")
}
else if (Marks>=70){
	console.log("Grade B" )
}
else if (Marks >= 60){
	console.log("Grade C")
}
else if (Marks >= 50){
	console.log("Grade D")
}
else if (Marks >= 40){
	console.log("Grade E")
}
else{console.log("fail")}