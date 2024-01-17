// if

const isUserloggedIn = true
if(2=="2"){
 console.log("executed")
}
const balance = 1000
if(balance>500){
    console.log("test")
}

const emptyObj={

}
if(Object.keys(emptyObj).length===0){
    console.log("Object is EMPTY")
}
// Nullish Coalescing Operator(??):null undefined
let val1;
val1=5??10
val2 = null ?? 10
console.log(val1)
console.log(val2)

var1= undefined ?? 15
// Terniary Operator
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")


