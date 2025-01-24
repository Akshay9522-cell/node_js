const express=require('express')
const stuRoute=require('./Router/studentRout')
const bodyparser=require('body-parser')
const app=express()
const mongoose=require('mongoose')

// always keep in mind your parser is on top of your router

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/akki',stuRoute)

mongoose.connect('mongodb://127.0.0.1:27017/data').then(()=>{
    console.log('db connected successfully')
})

app.set('view engine','ejs')







app.listen(3000,()=>{
    console.log('server is running at 3000')
})