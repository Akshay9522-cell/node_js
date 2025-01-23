const express=require('express')

const route=express.Router()

const stuCntrl=require('../controller/stuContro')

route.get('/home',stuCntrl.home)
route.get('/about',stuCntrl.about)
route.post('/save',stuCntrl.stuSave)





module.exports=route