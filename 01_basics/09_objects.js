//object leterals
const mySym = Symbol()
const JsUser = {
    name: "Prince",
    age:20,
    "full name":"Prince Arya",
    [mySym]: "myKey",
    location:"Jaipur",
    email:"aryaprince617@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.name)
//Object.freeze(JsUser)
JsUser.name="Arya"
console.log(JsUser.name)
console.log(typeof mySym)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());
JsUser.greeting2=function(){
    console.log(`Hello JsUser, ${this.name}`)
}
console.log(JsUser.greeting2())
console.log(JsUser["full name"])
