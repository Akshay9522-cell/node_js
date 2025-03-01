const express=require('express')
const route=express.Router()
const contro=require('../controlller/controller')


route.post('/regis',contro.regis)
route.post('/login',contro.login)
route.post('/auth',contro.authenticate)







module.exports=route