const myArr=[1,2,3,4,5];
const myArr1=["thor","xyz","pqr"];
const myArr2=["abc","cde","ijk"];
myArr1.push(myArr2)
console.log(myArr1)
const newarr = myArr1.concat(myArr2);
console.log(newarr)
const newarr2 = [...myArr1, ...myArr2]
console.log(newarr2)

const newarrr=[1,2,3,[12,3,5,6],[1,2,3,[2.5,7,9]]]
const newarrr2=newarrr.flat(Infinity)
console.log(newarrr2)

const strarr=Array.from("Prince")
console.log(Array.isArray(strarr))
console.log(strarr)
let a=1;
let b=2;
let c=3;
console.log(Array.of(a, b, c));