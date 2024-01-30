const user={
    name:"Prince",
    loginCount:1,
    signedIn:true,
    getUserDetail: function(){
        console.log("Got user details from database")
        console.log(this);
    } 
}
console.log(user.name)
console.log(user.getUserDetail());