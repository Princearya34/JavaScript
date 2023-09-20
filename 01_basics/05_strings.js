const name= "Prince"
const repoCount = 50

//console.log(name + repoCount + "Value");
console.log(`Hello myy name is ${name} and my repocount is ${repoCount}`)

const gameName = new String('Prince-Arya')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());//PRINCE
console.log(gameName.charAt(2));//i
console.log(gameName.indexOf('t'));//-1
console.log(gameName.indexOf('c'))//4

const newString = gameName.substring(0,4)
console.log(newString);//Prin

const anotherString = gameName.slice(-8,4)
console.log(anotherString);//n

const newStringOne = "    XYZ   "
console.log(newStringOne)//   XYZ
console.log(newStringOne.trim());//XYZ

const url = "https://prince.com/prince%20arya"
console.log(url.replace('%20','-'))

console.log(url.includes("arya"))

console.log(gameName.split('-'));