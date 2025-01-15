
const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send("Hlw backend developer")
})

app.get('/home',(req,res)=>{
    res.send('let show your skills')
})

app.listen(5000,()=>{
    console.log('server is running at port 5000')
})




// const express=require('express')

// const app=express()

// app.get('/',(req,res)=>{
//      res.send("akshay namdev")
// })

// app.get('/home',(req,res)=>{
//     res.send("akki namdev")
// })
// app.listen(5000,()=>{
//     console.log("serever is running")
// })