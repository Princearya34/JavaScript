function myName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}
myName();
//function addTwoNumbers(num1, num2){
  //  console.log(num1+num2);
//}
//addTwoNumbers(2.5,"7.5")
function addTwoNumbers(num1, num2){
    return num1+num2;
}
const result = addTwoNumbers(2.5, 7.5)
//console.log("result: ",result)

function loginUserMessage(username){
    if(!username){
    console.log("Please enter a valid Username")
    return;
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage())
function addTOcart(...cartList){
    return cartList
}
//console.log(addTOcart(1,2,3,400,500))
const user ={
    username:"Prince",
    price:999
}
function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
const arr = [1,2,3,4,5,null]
function returnvalue(getvalue){
    return getvalue[2]
}
console.log(returnvalue(arr))