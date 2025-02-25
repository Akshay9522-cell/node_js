const express=require('express')
const mongoose=require("mongoose")
const cors=require('cors')
const bodyParser=require('body-parser')
const route=require('./router/router')


const app=express()
require("dotenv").config();


app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.DBCONNECT).then(()=>{
    console.log("DB connected!!!");
})

app.use('/doctor',route)
const Port=process.env.PORT ||9000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})