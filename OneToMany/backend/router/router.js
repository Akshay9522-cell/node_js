const express=require('express')


const controller=require('../controller/controller')

const route=express.Router()

route.post('/save',controller.insert)
route.get('/display',controller.display)
route.post('/add',controller.add)
route.get('/project',controller.projectData)




module.exports=route