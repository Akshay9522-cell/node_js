const express=require('express')

const stu=express.Router()

const stuControl=require('../controller/studentcontrol')


stu.get('/home',stuControl.homePage)


module.exports=stu