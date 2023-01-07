
//Take an Input from user as a String and Check if its 
// a Valid IPv4 address or Not, and Tell the Class of IP 
// and also determine if its Private or Public

// var ip = "192.168.0.130";
// console.log(ip.split(".")[0])

// var keys = [192, 168, 1, 130];
// console.log(keys.join("."))

//192.15451.15.12
//152201.115.22.2115
//12.12
//15
//asdf.asgd

//0.0.0.0
//255.255.255.255


var readlineSync = require('readline-sync');
var d = readlineSync.question(" Enter any IP Address : ")
console.log(d.split("."))
e = d.split(".")
if(e.length != 4) console.log('Invalid Ip Address')
if(e[0] <= 255 && e[1] <= 255 && e[2] <= 255 && e[3] <= 255 && (e[0] | e[1] | e[2] |e[3]) != undefined ){
   
    
   if(e[0] >=0 && e[0] <= 126) { 
    if(e[0] == 10){ console.log('Class A , private IP')}
   else{console.log('Class A public IP')}
    
    }

    if(e[0]>= 128 && e[0] <= 191 ){
        if(e[0] == 172 && e[1]>=16 && e[1]<=31){
            console.log('Class B, private IP')
        }
    console.log('Class B, public IP')
    }
    

    if(e[0]>= 191 && e[0] <= 223){
        if(e[0] == 192 && e[1] == 168 ){
            console.log('Class C, private IP')
        }
    console.log('Class C, public IP')
    }
    

    if(e[0]>= 224 && e[0] <= 239){
        console.log('Class D, public IP')
    }

    if(e[0]>= 240 && e[0] <= 255){
        console.log('Class E, public IP')
    }

}




/////

console.log(isNaN('')); not a number 
console.log()

///


var readlineSync = require('readline-sync')
var a = readlineSync.question('please enter a numbaer : ')
function validateIp(ip_address){
    var arr_ip = ip_address.split(".")
    
    if (arr_ip.length == 4){
        
    }
}





















// if (0<=e[0]<=10){
//     console.log("Class A, private Address")
// } 
// else if(e[0]<= 126)
// // class B
// if (128<= e[0]<=171){
//     console.log("Class B, public class")
// }
// else if(16<= e[1]<= 31){
//     console.log('Class B, private class')
//
// //else if()
// if (192 <= e[0]<=223){
//     console.log("Class C")
// }
// if (224 <= e[0] <= 239){
//     console.log("Class D")
// }
// if (240 <= e[0] <= 255){
//     console.log('Class E')
// }




// console.log (e)

// var d = "52.46.89.255"
// console.log(d.split("."))



// for(i = 0 ; i < 4 ;i ++){
//     if(0 <= e[0] <= 126){
//         if (e[0] = 10){
//             console.log('Class A, private IP ')
//         }
//         else{console.log('Clasa A, public IP')}
//     }
    
// }