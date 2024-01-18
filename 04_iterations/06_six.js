const myNums = [1,2,3,4,5,6,7,8,9,10]
myNums.filter( (num)=> num >4)
const newNums = myNums.filter((num)=>num>4)
console.log(newNums);
const newNum = myNums.filter( (nums) => {
    return nums>4
})
console.log(newNum)

 oldnum = myNums.filter( (nm) =>  nm>5)
 console.log(oldnum)

 const myNum =[1,2,3,4,5,6,7,8,9,10]
 const ap = myNum.map( (num)=>{ return num+10 })
 console.log(ap)
