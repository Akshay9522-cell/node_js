const express=require('express')
const multer=require('multer')
const controller=require('../controller/controller')
const route=express.Router()

const storage=  multer.diskStorage({
    destination: (req,file, cb)=>{
     cb(null, 'upload/'); // Save files to uploads directory
    },      
    filename:(req, file, cb)=>{
     cb(null, Date.now()+"-"+file.originalname); // Keep original file name
    }  
})

const upload = multer({ storage: storage });

route.post('/regis', upload.single('image'),controller.regis)


module.exports=route