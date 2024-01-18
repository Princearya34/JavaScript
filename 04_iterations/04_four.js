const myObj ={
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    java: "java",
    swift: "swift by apple"
}
for (const key in myObj) {
    console.log(myObj[key]);
   
}
const prog =["js","c/c++","py","java"]

for(const key in prog){
    console.log(prog[key])
}
const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")

for (const key in map) {
   console.log(key)
}