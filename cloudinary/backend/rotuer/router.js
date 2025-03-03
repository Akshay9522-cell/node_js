const express=require('express')

const route=express.Router()
const controller=require('../controller/controller')

route.post('/save',controller.insert)
route.get('/display',controller.display)


module.exports=route