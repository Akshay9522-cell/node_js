const http=require('http')
const uc=require('uppercase')
http.createServer((req,res)=>{
    
    res.write(uc("good Morning akshay"))
    res.end();
}).listen(6000,()=>{
    console.log("run")
})