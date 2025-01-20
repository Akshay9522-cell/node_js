const express=require('express')

const pro=express.Router()

pro.get('/location',(req,res)=>{
    res.send('location page')
})
pro.get('/sales',(req,res)=>{
    res.send('sales page')
})
pro.get('/stock',(req,res)=>{
    res.send('stock page')
})
pro.get('/price',(req,res)=>{
    res.send('price page')
})



module.exports=pro