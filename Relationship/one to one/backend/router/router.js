const express=require('express')
const userContro=require('../controller/controller')
const route=express.Router()




route.post('/save',userContro.save)
route.get('/display',userContro.Display)
route.post('/search',userContro.Search)





module.exports=route