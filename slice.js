let finduser = data.find ((ele)=> ele.email == "")
console.log(finduser);
findUser.name = ""
console.log(findUser)
console.log(data)


let sliceData = data slice(6)
console.log(sliceData);
sliceData[0] = ""
console.log(sliceData)

let deepcopy = JSON.parse(JSON.stringify(person));
console.log(deepcopy)