const express=require('express')
const controller=require('../controller/controller')

const route=express.Router()

route.post('/save',controller.insert)
route.get('/display',controller.display)
route.post('/addsub',controller.addSub)
route.get('/all',controller.all)





module.exports=route