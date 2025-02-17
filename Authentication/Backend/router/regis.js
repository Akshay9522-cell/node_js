const express=require('express')
const empCont=require('../controller/empController')

const route=express.Router()

route.post('/save',empCont.Regis)
route.post('/login',empCont.Login)




module.exports=route