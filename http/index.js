const http=require('http')

const name=require('./student.js')
const dob=require('./student.js')
const hobby=require('./student.js')
const BESTY=require('./student.js')

http.createServer((req,res)=>{
    res.write('<h1>hi there is akshay namdev</h1>')
    res.write(name.myName())
    res.write(dob.myDob())
    res.write(hobby.myHobby())
    res.write(BESTY.myBesti())
    res.end()
}).listen(3000,()=>{
    console.log('server is running at port 9000')
})