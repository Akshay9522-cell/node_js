const express=require('express')
const employController=require('../controller/employController')

const route=express.Router()

route.get('/home',employController.homePage)
route.post('/save',employController.saveData)
route.post('/search',employController.searchData)






module.exports=route