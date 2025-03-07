const express=require('express')

const app=express()

const cors=require('cors')

const bodyParser=require('body-parser')

const router=require('./router/router')

const mongoose=require('mongoose')

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect('mongodb://localhost:27017/shreeRealtionship').then(()=>{
     console.log('DB is Rocking Now')
})


app.use('/employ',router)

app.listen(8000,()=>{
    console.log('server is RockOn')
})