const fs= require('fs')

console.log("reading")//1
const data=fs.readFileSync('test.txt','utf8')
console.log(data)//2
console.log('done')//3