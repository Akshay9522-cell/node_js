const express=require('express')
const employRouter=require('./router/employeRouter')
var bodyParser = require('body-parser')
const mongoose=require("mongoose")

const app=express()
app.set('view engine','ejs')

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/employ').then(()=>{
    console.log('DB connected successfully')
})



app.use('/employ',employRouter)







app.listen(5000,()=>{
    console.log('server is running at port:5000')
})