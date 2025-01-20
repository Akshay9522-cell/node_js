const express=require('express')

const gall=express.Router()

gall.get('/stugallery',(req,res)=>{
    res.send('this is stugallery page')
})
gall.get('/companyimages',(req,res)=>{
    res.send('this is companyimages page')
})

gall.get('/managerportfolio',(req,res)=>{
    res.send('this is managerportfolio page')
})

gall.get('/productimages',(req,res)=>{
    res.send('this is productimages page')
})


module.exports=gall