const express= require('express')

const hos=express.Router()

hos.get('/home',(req,res)=>{
    res.send('this is hospital home page')
})

hos.get('/patient',(req,res)=>{
    res.send('this is hospital patient page')
})

hos.get('/admit',(req,res)=>{
    res.send('this is hospital admit page')
})

hos.get('/save',(req,res)=>{
    res.send('this is hospital save page')
})


module.exports=hos