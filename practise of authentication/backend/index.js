const express=require('express')

const app=express()

const cors=require('cors')
const cookieParser = require('cookie-parser');

require('dotenv').config()

const mongoose=require('mongoose')
const router=require('./router/router')

const bodyParser=require('body-parser')

app.use(cors())
app.use(cookieParser());



 

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect(process.env.DBCONNECT).then(()=>{
     console.log('DB is Rocking On')
})

app.get('/setcookie',(req,res)=>{
    res.cookie('akshay','khushi')
    res.send('shadi is confirm')
})

app.get('/getcookie',(req,res)=>{
    const{akshay}=req.cookies
    console.log(req.cookies)
    res.send({'name':akshay})
})



app.use('/user',router)







 const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log('server is RockOn')
})