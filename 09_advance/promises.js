const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
    
})

promiseOne.then(function(){
    console.log("Promise complete");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:"prince",email:"aryaprince617@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const fivePromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javaScript",password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response = await fivePromise
        console.log(response);
    } catch(error){
        console.log(error);
    }
} 

consumePromiseFive()


