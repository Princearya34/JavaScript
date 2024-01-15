let a=100
//if(true){
  //  let a =10
    //const b=20
   // console.log("inner:",a)
//}
//console.log(a)

function one(){
    const username = "prince"
    function two(){
        const website = "xyz.com"
        console.log(username);
    }
    //console.log(website);
   // two()
}
//one()
if (true){
    const username ="Prince"
    if(username === "Prince"){
    const website = "Youtube"
   // console.log(username+website);
}
//console.log(website)
}
//console.log(username);
//++++++++++ intresting +++++
addone(7)
function addone(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){
    return num+2
}

