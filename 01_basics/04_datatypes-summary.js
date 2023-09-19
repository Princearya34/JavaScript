//Primitive
// 7 types : String,Number , Boolean, null, undefined,Symbol,BigINt


//Referdnce (Non primitive)
//Array, Objects, Functions

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bignumber = 12345678976646756568656n

const heros = ["xyz","abc","lmn"];
let myObj={
    name:"Prince",
    age:20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction)
console.log(typeof heros)


