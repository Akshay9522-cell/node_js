const express=require('express')
const stuControl=require('../Controller/stuController')

const route= express.Router()

route.get('/home',stuControl.homePage)
route.post('/save',stuControl.save)




module.exports=route