const bumbleUser = {}
bumbleUser.id="123abc"
bumbleUser.name="Sammy"
bumbleUser.isLoggedIn=false

//console.log(bumbleUser)

const regularcustom ={
    email:"some@outlook.com",
    fullname:{
        userfullname:{
          firstname:"prince",
          lastname:"arya"
        }
    }
}
//console.log(regularcustom.fullname.userfullname)
//console.log(regularcustom)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
console.log(bumbleUser)
console.log(Object.keys(bumbleUser));
console.log(Object.values(bumbleUser));
