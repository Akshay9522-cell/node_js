const express=require('express')

const app=express()
const router=require('./rotuer/router')

const cors=require('cors')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
app.use(express.static('public'))
app.use(cors())
require('dotenv').config()

app.use(bodyparser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/upload', express.static('upload'))

mongoose.connect('mongodb://localhost:27017/akfile').then(()=>{
    console.log('DB conneccted successfully')
})

 app.use('/user',router)

app.listen(5000,()=>{
    console.log('server is RockingOn')
})