const express=require('express')

const empRoute=express.Router()

empRoute.get('/home',(req,res)=>{
    res.send('this is home page')
})
empRoute.get('/about',(req,res)=>{
    res.send('this is about page')
})
empRoute.get('/dept',(req,res)=>{
    res.send('this is dept page')
})
empRoute.get('/salary',(req,res)=>{
    res.send('this is salary page')
})





module.exports=empRoute