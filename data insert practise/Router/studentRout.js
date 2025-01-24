const express=require('express')
const stuCont=require('../controller/stuContro')

const stuRoute=express.Router()


stuRoute.get('/home',stuCont.homePage)
stuRoute.post('/save',stuCont.save)







module.exports=stuRoute