const express=require('express')

const app=express()
const route=require('./rotuer/router')
const mongoose=require('mongoose')

const cors=require('cors')
const bodyparser=require('body-parser')

app.use(cors())

// parse application/json
app.use(bodyparser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyparser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/akshayCloud').then(()=>{
    console.log('DB conneccted successfully')
})


app.use('/user',route)

app.listen(5000,()=>{
    console.log('server is Rock On')
})