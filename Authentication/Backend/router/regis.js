const express=require('express')
const empCont=require('../controller/empController')

const route=express.Router()

const auth=function(req,res,next){
    console.log('authentication')
    
    next()
}



route.post('/save',empCont.Regis)
route.post('/login',auth,empCont.Login)




module.exports=route