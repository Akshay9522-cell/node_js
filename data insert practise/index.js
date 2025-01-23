const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const stuRoute=require('./Router/studentRout')

app.use('/students',stuRoute)
app.set('view engine','ejs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

   mongoose.connect('mongodb://127.0.0.1:27017/studentInfo').then(()=>{
    console.log('db connected successfully')
   })

app.listen(5000,()=>{
    console.log('server is running')
})