const express=require('express')

const controller=require('../controller/controller')

const route=express.Router()

route.post('/sign',controller.sign)
route.post('/login',controller.login)
 route.post('/auth',controller.auth)

 





module.exports=route