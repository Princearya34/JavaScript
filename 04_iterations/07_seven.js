const  myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`${acc} ${currval}`)
//     return acc+currval
// },0)
// console.log(myTotal)

// const myTotal = myNums.reduce((item)=>item.price,0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:3999
    },
    {
        itemName:"java course",
        price:4999
    },
    {
        itemName:"java course",
        price:14999
    }
]
const total = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(total)