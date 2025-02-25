const express= require('express')
const authControll=require('../controller/controller')

const route=express.Router()



route.post('/insert',authControll.insert)
route.get('/addbook',authControll.addBook)
route.post('/newbookadd',authControll.newbook)
route.get('/alldata',authControll.display)





module.exports=route