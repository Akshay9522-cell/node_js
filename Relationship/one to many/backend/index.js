const express=require('express')

const authRoute=require('./router/router')

var cors = require('cors')
 // Use this after the variable declaration
const bodyparser=require('body-parser')

const mongoose=require('mongoose')

const app=express()

// parse application/json
app.use(bodyparser.json())

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended:true}))


app.use(cors())

mongoose.connect('mongodb://localhost:27017/akManyRelation').then(()=>{
    console.log("DB conneccted succesfully")
})
app.use('/author',authRoute)





app.listen(5000,()=>{
    console.log('server is running at port 5000')
})