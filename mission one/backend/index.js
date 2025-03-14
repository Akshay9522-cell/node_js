const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const router=require('./router/router')

const bodyParser=require('body-parser')


require('dotenv').config()
const app=express()
app.use(cors())
app.use(express.static('public'))

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/upload', express.static('upload'))

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('DB connected successfully')
})



app.use('/user',router)

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})