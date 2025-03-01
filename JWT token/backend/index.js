const express=require('express')
const router=require('./router/router')
const cors=require('cors')
const  bodyparser=require('body-parser')
const mongoose=require('mongoose')
const app = express()
require("dotenv").config();


app.use(cors())
app.use(bodyparser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/user').then(()=>{
    console.log('db connected successfully')
})



app.use('/student',router)

app.listen(5000,()=>{
    console.log('server is running')
})