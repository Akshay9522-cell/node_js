const express=require('express')

const route=express.Router()


route.get('/home',(req,res)=>{
     res.send('home page')
})

route.get('/about',(req,res)=>{
    res.send('about page')
})
route.get('/course',(req,res)=>{
    res.send('course page')
})
route.get('/fees',(req,res)=>{
    res.send('fees page')
})

module.exports=route