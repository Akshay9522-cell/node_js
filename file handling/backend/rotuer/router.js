const express=require('express')
const multer=require('multer')
const route=express.Router()

const controller=require('../controller/controller')

const storage=  multer.diskStorage({
    destination: (req,file, cb)=>{
     cb(null, 'upload/'); // Save files to uploads directory
    },      
    filename:(req, file, cb)=>{
     cb(null, Date.now()+"-"+file.originalname); // Keep original file name
    }  
})

const upload = multer({ storage: storage });

route.post('/save', upload.single('image'),controller.insert)

route.get('/display',controller.display)




module.exports=route