const express=require('express')
const route=express.Router()
const controller=require("../controller/controller")


route.post('/insert',controller.insert)
route.post('/login',controller.doctorLogin)



module.exports=route