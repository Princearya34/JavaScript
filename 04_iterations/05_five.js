const coding = ["js", "ruby","python","cpp"]
coding.forEach( function (val) {
     console.log(val);
} )

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
})
const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"cprograming",
        languageFileName:"c"
    },
    {
        languageName:"java",
        languageFileName:".java"
    },
    {
        languageName:"html",
        languageFileName:"html"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})