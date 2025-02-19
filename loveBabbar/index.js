const express=require('express')

const app=express()

// inbuilt middleware
 app.use(express.json())

 const route=require('./Router/routes')

 //mount

 app.use('/api',route)

// userdefind middleware

// const loggin=function(req,res,next){
//      console.log('login middleware')
//      next()
// }
// app.use(loggin)
// const auth=function(req,res,next){
//     console.log('auth middleware')
//     next()
// }
// app.use(auth)
// const valid=function(req,res,next){
//     console.log('valid middleware')
//     next()
// }
// app.use(valid)

app.get('/',(req,res)=>{
    console.log('i am router')
    console.log(req.body)
   
    res.send('the akki namdev')
})

app.listen(4000,()=>{
    console.log('server is running')
})