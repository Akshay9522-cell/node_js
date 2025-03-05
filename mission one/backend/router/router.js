const express=require('express')
const multer=require('multer')
const controller=require('../controller/controller')
const route=express.Router()



route.post('/regis',controller.regis)


module.exports=route