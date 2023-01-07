var readlineSync = require('readline-sync');
console.clear();
var ip = readlineSync.question("Please enter your IP Address : ");

function validateIP(ip_address) {
    var arr_ip = ip_address.split(".");

    //Check Length
    if (arr_ip.length != 4) {
        console.log("Invalid IP");
        return false;
    }
    for (var i = 0; i < arr_ip.length; i++) {
        if (!(Number.isInteger(parseInt(arr_ip[i])))) {
            // console.log("Invalid IP Address");
            return false;
        }
        if (!(arr_ip[i] >= 0 && arr_ip[i] <= 255)) {
            // console.log("Invalid IP Address");
            return false;
        }
        
    }
    // console.log("This is a Valid IP Address");
    return true;

}
console.log(validateIP(ip));