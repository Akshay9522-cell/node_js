const express=require('express')
const bodyParser=require('body-parser')

const mongoose=require('mongoose')



const app=express()
const stuRoute=require('./Route/studentRouter')

mongoose.connect('mongodb://127.0.0.1:27017/Studata').then(()=>{
    console.log("DB connceted successfully")
})
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}))

app.use('/student',stuRoute)
app.set('view engine', 'ejs');





app.listen(8000,()=>{
    console.log('server is running')
})