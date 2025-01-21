const express=require('express')
const stu=require('./Route/studentRoute')

const app=express()


app.use('/student',stu)
app.set('view engine','ejs')





app.listen(8000,()=>{
    console.log('server is running at 8000')
})