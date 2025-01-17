// const http=require('http')

// http.createServer((req,res)=>{
//      res.write("<h1> good morning")
    
// }).listen(9090)

const http=require('http')

http.createServer((req,res)=>{
    res.write("<h1>Hlw akki how are you</h1>")
    res.end()
}).listen(9000,()=>{
    console.log("server is running at port 9000")
})